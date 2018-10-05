# React Hapi SSR

A tiny robust boilerplate containing the following technologies

## On the client side

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [React Cookie](https://github.com/reactivestack/cookies/tree/master/packages/react-cookie) | Universal cookies for React | [Medium Tutorial](https://medium.com/@rossbulat/using-cookies-in-react-redux-and-react-router-4-f5f6079905dc) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |


## On the server side

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [Hapi](https://hapijs.com)  |   A rich framework for building applications and services.    | [EggheadIO Course](https://egghead.io/courses/introduction-to-node-servers-with-hapi-js)  |
|  [Hapi Auth Cookie](https://github.com/hapijs/hapi-auth-cookie)  |   A Hapijs cookie authentication plugin.    | [Hapijs Tutorial](https://hapijs.com/tutorials/cookies?lang=en_US)  |
|  [Universal Cookie Express](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie-express)  |   My own baked in version of this plugin located in Hapi React SSR's server/plugins directory.    | [Translated from this original code](https://github.com/reactivestack/cookies/blob/master/packages/universal-cookie-express/src/index.ts)  |

The starter kit includes a working example app that puts all of the above to use. This utilizes isomorphic javascript rendered from the server. Hapi React SSR attempts to manage data in a more robust way than most examples out on the web. In addition to serializing and storing data on the server I also manage data on the client using redux.

As an extra added bonus I included the minimum account functionality which I feel is required in order to start off ever application. It's super basic but does the trick.

I would like to give some credit to [Tyler Mcginnis](https://tylermcginnis.com/) for two very super helpful tutorials (though I will point out that my example is slightly more up to date in react plugins):
+ [Server Rendering with React and React Router](https://tylermcginnis.com/react-router-server-rendering/)
+ [Protected routes and authentication with React Router v4](https://tylermcginnis.com/react-router-protected-routes-authentication/)

I would also like to give much needed credit to [Cory House](https://www.bitnative.com/) for [React Slingshot](https://github.com/coryhouse/react-slingshot). His project was a critical reference when it came to setting up my redux. My project is not as nearly configured with npm scripts and testability so I would humply invite anyone who wishes to push my project further to go for it!

---

## Questions?
Hit me up
