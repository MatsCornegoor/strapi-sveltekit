# 🚀 Strapi v4 + Sveltekit docker template

1. Clone the repo to your local machine: `git clone <repo>`
2. Change all `.env.example` to `.env`
3. `npm --prefix strapi install && npm --prefix app install`

## To run in Development Mode:

1. Run `docker-compose up -d postgresDB pgadmin && npm --prefix strapi run develop`
   > This command will run a Postgresql server docker container and then locally run your Strapi Server for your development requirements.

2. In a new terminal window, run `npm --prefix app run dev`
   > This command will run the sveltekit dev server.


Strapi `http://localhost:1337`
Sveltekit `http://localhost:3000`


## To run in Production

You will reach a point where you will need to test or run the Strapi service in production.

1. Run `docker-compose up -d`
   > This will spin up both a Postgresql server docker container and a Strapi docker container.


## Setup pgAdmin

1. Login with credentials from .env file
2. Register server
    > 'Name' is database name from .env and 'Host' is postgresDB
3. Click on save
