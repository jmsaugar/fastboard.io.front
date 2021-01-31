# Fastboard.io

### Frontend project

### What is Fastboard.io?

[Fastboard.io](https://fastboard.io) is a real-time online collaborative whiteboard. It features a clean, touchscreen-friendly web interface for quick and easy sessions, without any login or registration required, allowing the users to create and share drawings, sketches, text and images.

####**This is still a work in progress**

### Related projects

Backend project is [here](https://github.com/jmsaugar/fastboard.io.back)

### Technology stack

- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [PaperJS](https://github.com/paperjs)
- [Socket.io](https://github.com/socketio/socket.io)
- [Styled Components](https://github.com/styled-components/styled-components)
- [XStyled](https://github.com/gregberge/xstyled)
- Many others, check `package.json` for full list.

### Getting started

To launch the project locally and be able to use it, you will need to have the backend project running. More information [here](https://github.com/jmsaugar/fastboard.io.back/blob/master/README.md).

#### Basic requirements

- [Node.js](https://nodejs.org/en/) (developed under v12.18.1, but probably previous ones are compatible too).
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (I used the latter).

#### Configure environment

Copy the file `env.template` into a new one called `env.local`. There you will be able to set those environment variables:

- `REACT_APP_SOCKETIO_ENDPOINT` The host and port that the backend project is running in (e.g. `localhost:9000/`).

- `REACT_APP_SOCKETIO_PATH` The path to be used in the socket.io connection. This has to be the same as configured in the backend project (e.g. `/`).

- `REACT_APP_BASE_URL` The base url which will be used to build the session sharing link and validation in the join form (e.g. https://fastboard.io).

- `REACT_APP_EXTERNAL_LINK_GITHUB` Footer link. Not required for local development.

- `REACT_APP_GA_ID` Google Analytics ID. Not required for local development.

#### Install dependencies

`npm install` or `yarn install`

#### Run the app

`npm start` or `yarn start`

#### Other scripts

The project was setup using [Create React App](https://github.com/facebook/create-react-app) so the usual list of scripts is present.

* **Build**: `npm build` / `yarn build`

* **Linting**:
  - CSS-in-JS linting (using [stylelint](https://github.com/stylelint/stylelint))
  `npm lint:css` / `yarn lint:css`

  - JS linting (using [AirBnB JS style guide](https://github.com/airbnb/javascript) and some other packages and customizations)
  `npm lint:js` / `yarn lint:js`

  - Lint all - self explanatory
  `npm lint:all` / `yarn lint:all`

* **Testing**: [React Testing Library](https://github.com/testing-library/react-testing-library) and [Jest](https://github.com/facebook/jest) are used for testing.
  `npm test` / `yarn test`

#### More

As the work is still in progress, I will keep updating this document. Feel free to reach me, I welcome any contributions :)
