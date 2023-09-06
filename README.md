# 🚀 Strapi v4 Docker Template with Postgresql

1. Clone the repo to your local machine: `git clone <repo>`
2. Change `.env.example` to `.env`
3. `cd strapi`
4. `npm install`
5. `cd ..`

## To run in Development Mode:

1. Run `docker-compose up -d postgresDB pgadmin && npm --prefix strapi run develop`
   > This command will run a Postgresql server docker container and then locally run your Strapi Server for your development requirements.

## To run in Production

You will reach a point where you will need to test or run the Strapi service in production.

1. Run `docker-compose up -d`
   > This will spin up both a Postgresql server docker container and a Strapi docker container.

Open your browser and navigate to `http://localhost:1337`


## Setup pgAdmin

1. Login with credentials from .env file
2. Register server
    > 'Name' is database name from .env and 'Host' is postgresDB
3. Click on save




Reference: [Click Here](https://blog.dehlin.dev/docker-with-strapi-v4)