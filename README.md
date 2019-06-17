# Restaurant Reviews App

The **Restaurant Reviews App** is a project for the Udacity Front End nanodegree.

## Tabel of Contents

- [Restaurant Reviews App](#Restaurant-Reviews-App)
  - [Tabel of Contents](#Tabel-of-Contents)
  - [Objectives and Requirements](#Objectives-and-Requirements)
  - [Technologies](#Technologies)
  - [Getting Started](#Getting-Started)
    - [Prerequisites](#Prerequisites)
  - [Acknowledgments](#Acknowledgments)

## Objectives and Requirements

The object of the project is to refactor the site to more modern standards. Originally the site was designed for desktop only screens which scaled poorly to mobile screens. Using a combination of grid and flexbox, screens of various sizes should get a better experience.
Accessibilty and PWA(Progressive Web Apps) features were implemented to the site.
Service workers were registered to cache static assets and display when the site is offline. Performance is also increase as a result.
The [Ruberic](https://review.udacity.com/#!/rubrics/1090/view) provided by the FEND course was used to make sure it met all requirements. No UI frameworks were allowed in this project.

## Technologies

This project was made with the following technologies:

- HTML5
- CSS
- Javascript ES6
- Yeoman Generator Webapp (npm, gulp, browserfiy)
- Service Worker and Cache API

Source code found in /app, dev files are stored in /.temp and distro build is compiled and runs from /dist

## Getting Started

To develop the app locally you must have [node.js](https://nodejs.org/en/) and [git](https://git-scm.com/) installed on your computer.

Clone or download the project and go to the project folder and install dependencies

```sh

cd restaurant-reviews-app
npm install

```

Once installed, you can now run `npm start` to build start the server and build the development files for the project. This will create a .tmp folder to be used by the webserver and viewable at
`http://localhost:9000`

For production ready project with full compression on code and assets then use

```sh

npm run build

```

**IMPORTANT NOTE** Due to the way the gulp script builds the Dev and Production files differently, It is important you deregister service workers and delete caches when you switch between development and production builds.

### Prerequisites

Browserify uses babel to transpile es6 code as backwards compatible as much as possible, the limitations can be found [here](https://babeljs.io/docs/en/caveats).

## Acknowledgments

- This app is based on the the Udacity starter app found [here](https://github.com/udacity/mws-restaurant-stage-1)
- [Leafletjs](https://leafletjs.com/) and [Mapbox](https://www.mapbox.com/)

- Yeoman Generator Webapp build process scaffold using [here](https://github.com/yeoman/generator-webapp)
