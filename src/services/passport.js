const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const usersFn = require('../databaseHelpers/usersFn');

module.exports = (db) => {

  //serialize the user using its google_id to stuff into the cookie
  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user.google_id);
  });

  //deserialize the cookie we got back, use the id to find that particular user
  passport.deserializeUser((id, done) => {
      // User.findById(id)
      //     .then((user) =>{
      //         done(null, user);
      //     });
      usersFn.getUserByGoogleId(db, id).then(user => {
        done(null, user);
      });
  });

  ////OAUTH
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/users/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
      const existingUser = await usersFn.getUserByGoogleId(db, profile.id);
      if (existingUser) {
        console.log(existingUser);
        return done(null, existingUser);
      }

      const user = await usersFn.addNewUser(db, {name: profile.displayName, email: profile.emails[0].value, google_id: profile.id});
      console.log(user);
      done(null, user);
    })
  );
}
