# react-redux-router-boilerplate
This project is actually created for my personal use,
 not as a new annoying react boilerplate.
But if you like my project and want to use it, all is up to you. 

### Instructions
This boilerplate is used for small and non-large application,
 include Hot Module Replacement out of the box,
redux store, and routing for react app, plus Material-ui react components. Use beta version of @babel/core
for using new syntax <>code</> comes with react^16.2.0
 instead of additional *div* element,
and @babel-** plugin for successful building react.
*routes* folder contain all your routes in app,
*containers* is used for separate logic from presentation.
Linting with
[eslint](https://www.npmjs.com/package/eslint) + 
[config-react](https://www.npmjs.com/package/eslint-config-react) + 
[config airbnb](https://www.npmjs.com/package/eslint-config-airbnb).
### Installation
```
git clone https://github.com/FreAK19/r3-boilerplate.git
yarn install        // install all dependencies
```
### Commands
```
yarn start      		//  open browser and go to localhost:8080
yarn build      		//  build production version
yarn lint      			//  eslinting
yarn flow      			//  check flow error
yarn flow-typed     //  install all flow-typed pkgs
yarn format      		//  prettier format for clean code
yarn test      			//  jest, enzyme test
yarn test:coverage  //  jest test coverage
```
### Structure folder
Basic setup
```
build/
config/
coverage/
flow-typed/
src/
    App.jsx
    index.js
    favicon.ico
    App.less 
```
Components and tests
```
src/
    __tests__
    components/
    containers/
    routes/
        home/
            index.jsx
            reducer.js  
```
Redux
```
src/
    action/
        actionCreator/
    reducers/
         index.js    
    store
        index.js    
```
### Todo
Server Side Rendering React...
### Extended
If you want to use [preact-compat](https://www.npmjs.com/package/preact-compat), for smaller bundle size, all you need to do
is install [preact](https://www.npmjs.com/package/preact) and [preact-compat](https://www.npmjs.com/package/preact-compat) 
packages to dependencies, then change configuration
in config/webpack.prod.config.js like this
```
resolve: {
    alias: {
    		    'react': 'preact-compat',
        'react-dom': 'preact-compat'
    }
}
```

### LICENSE
MIT

