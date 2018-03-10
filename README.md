# The NERP Stack Starter Pack: Node + Express + React-Redux + Postgreql

When someone on your team tells you they are about to initialize a React project from scratch (or with `create-react-app`)

![smack](https://media.giphy.com/media/ptDRdwFkFVAkg/giphy.gif)

When you show them this starter pack

![rain](https://media.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif)

## Table of Contents

1. [Todos](#todos)
1. [File Layout](#file-layout)
1. [Commands](#commands)

## Todos

- serve `bundle.js` successfully from express server
- 404 redirect to homepage from express

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
- `$ yarn start`: build your production assets and run the server
- `$ npm run build`: Heroku uses this command during deployment
