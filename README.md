# React-Redux + Express + Node Starter Pack

When someone on your team tells you they are about to initialize a React project from scratch

![smack](https://media.giphy.com/media/ptDRdwFkFVAkg/giphy.gif)

When you show them this starter pack

![rain](https://media.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif)

## Table of Contents

1. [Todos](#todos)
1. [Overview](#overview)
1. [Commands](#commands)
1. [File Layout](#file-layout)

## Todos

- better option for serving `bundle.js` successfuly both on dev server and from express server
- setup global variables that frontend has access to, likely via WebPack (current solution is to store some variable, e.g. backend url, in `localStorage`)

## Overview

**Based off of Horizons Starter. Main differences between this and the Horizons Starter:**
- indents changed from 4 to 2
- removed PropTypes validation
- removed actions
- update `node-sass` dependency so that `yarn` can be used instead of `npm`
- cut down README documentation

## Commands

- `$ yarn frontend`: serve and hot reload frontend with `webpack` from localhost:8082
- `$ yarn backend` serve API and static frontend from localhost:3000
- `$ yarn dev`: backend + frontend
- `$ yarn start`: build your production assets and run the server
- `$ npm run build`: Heroku uses this command during deployment

## File layout

- **Frontend React**
  - The top level application Container is in `frontend/containers/AppContainer.js`
  - SCSS styles are in `frontend/assets/stylesheets/base.scss`
- **Backend Express**
  - Entry point is `backend/index.js`
  - API routes are under `backend/routes.js`
  - API routes are served from `http://localhost:3000`
