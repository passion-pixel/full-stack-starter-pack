# The NERP Stack Starter Pack: Node + Express + React-Redux + Postgreql

When someone on your team tells you they are about to initialize a React project from scratch (or with `create-react-app`)

![smack](https://media.giphy.com/media/ptDRdwFkFVAkg/giphy.gif)

When you show them this starter pack

![rain](https://media.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif)

## Table of Contents

1. [Setup](#setup)
1. [Todos](#todos)
1. [File Layout](#file-layout)
1. [Commands](#commands)

## Setup
- clone this repo
- create an `env.sh` in your root directory
- add the two environment variables, one frontend, one backend
- create database, source variables, and sync database

```
# your env.sh
export API_URL='http://localhost:3000'
export POSTGRES_URI='postgresql://postgres@localhost/<YOUR_DB_NAME>'
```

- create your Postgres database from your preferred interface
- e.g. Using the Psql command line `CREATE DATABASE YOUR_DB_NAME`

```
# source your enviornment variables
$ source env.sh
$ yarn sync
```

If all goes well, you should see a message from the command line saying so!


## Todos

- serve `bundle.js` successfully from express server
- 404 redirect to homepage from express
- add screenshot of what homepage should look like

## File layout

- **Frontend React Redux**
  - entry point, router, and store config are in `frontend/index.js`
  - SCSS styles are in `frontend/assets/stylesheets/base.scss`
- **Backend Express**
  - Entry point and middleware are in `backend/index.js`
  - API routes are under `backend/routes.js` and are served from `http://localhost:3000`

## Commands

- `$ yarn frontend`: serve and hot reload frontend with `webpack` from localhost:8082
- `$ yarn backend` serve API and static frontend from localhost:3000
- `$ yarn dev`: backend + frontend
- `$ yarn sync`: build your production assets and run the server
- `$ yarn start`: sync local database
- `$ npm run build`: Heroku uses this command during deployment
