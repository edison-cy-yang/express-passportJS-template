Express with Passport.js OAuth (Google) template
=========


## Getting Started

1. Create the `.env.development` by using `.env.example` as a reference: `cp .env.example .env.development`
2. Update the .env file with your correct local information 
  - username: `` 
  - password: `` 
  - database: ``
  - Enable Google+API and obtain client ID and secret
3. Install dependencies: `npm i`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
