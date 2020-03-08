Express with Passport.js OAuth (Google) template
=========

This is a template that uses Express as backend, Postgres for database, and Google OAuth using Passport.js.

Feel free to modify the users table schema src/db/schema/01_users.sql as needed.


## Getting Started

1. Create the `.env.development` by using `.env.example` as a reference: `cp .env.example .env.development`
2. Update the .env file with your correct local (or cloud database) information 
  - username: `` 
  - password: `` 
  - database: ``
3. For GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET: 
  - Go to https://console.developers.google.com/
  - Create a new project
  - Create Credentials -> OAuth Client ID
  - authorized JavaScript origins: http://localhost:8080
  - authorized redirect URIs: http://localhost:8080/users/auth/google/callback
  - You can change the redirect URI as needed as long as it corresponds to passport config
4. Install dependencies: `npm i`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
