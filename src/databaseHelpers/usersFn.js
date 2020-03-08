const addNewUser = (db, user) => {
  let queryParams = [user.name, user.email, user.google_id];
  let queryString = `
    INSERT INTO users (name, email, google_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `
  return db.query(queryString, queryParams).then(res => {
    return res.rows[0];
  });
}
exports.addNewUser = addNewUser;

const getUserByGoogleId = (db, google_id) => {
  let queryParams = [google_id];
  let queryString = `
    SELECT *
    FROM users
    WHERE google_id = $1;
  `

  return db.query(queryString, queryParams).then(res => {
    return res.rows[0];
  });
}
exports.getUserByGoogleId = getUserByGoogleId;
