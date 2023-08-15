## This is a users manage system, with register and authentication.

## To run this project:
1. Clone this repo `git clone git@github.com:renanlimaleite/users-microservice.git`, delete .git folder and init your own git repository
2. Enter in the project folder `cd users-microservice`
3. Install the dependencies `npm install`
4. Run postgres database `docker compose up -d` or with your already have makefile run `make docker/up`
5. To stop database run `docker compose stop` or with your already have makefile run `make docker/stop`
6. Run the project `npm run dev` (dev mode)
7. To simulate a production environment run `npm run build` then run `npm run start` (production mode)
8. To run tests run `npm run test` [TODO]


## Technologies used:
- Node.js
- Fastify
- Typescript
- Prisma
- Zod
- Eslint
- Vitest [TODO]
- Docker
- Postgres
- dotenv
