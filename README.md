# store

> Store Management App

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Firebase Setup

Add firebaseConfig.js file to helpers folder. The file shold look like:

```
export const config = {
  apiKey: "API_KEY",
  authDomain: "project-name.firebaseapp.com",
  databaseURL: "https://project-name.firebaseio.com",
  projectId: "project-name",
  storageBucket: "project-name.appspot.com",
  messagingSenderId: "ID_NUMBER"
};
```

To review step by tesp tutorial on how to set it up go [here](https://medium.com/dailyjs/authenticating-a-vue-js-application-with-firebase-ui-8870a3a5cff8).

## Build Setup

Added Dependencies:

``` bash
# vuex
npm install vuex --save

# bootstrap vue
npm install --save bootstrap-vue

# firebase
npm install --save firebase firebaseui

# firebase host
npm install -g firebase-tools
```

## Firebase Hosting

Set Up:
``` bash
firebase login
firebase init
```

Deploy:
``` bash
# build
npm run build

#deploy
firebase deploy
```

## To Do

1. Dependency "chromedriver": "^2.27.2" makes travis fail -> how should we fix that?
2. Create staging environment alpha-beta-release
3. Set up diff firebase projects per each