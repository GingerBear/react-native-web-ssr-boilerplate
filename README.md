# react-native-web-ssr-boilerplate

This is a working boilerplate for react native web with server side rendering. It includes some configs that are not out of the box from react-native-web server side rendering guide.

### Highlights:

* bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* use `webpack-isomorphic-tools` to allow `require('./assets/img.png')` on server side
* use `babel-plugin-extension-resolver` to resolve `.web.js` on server side
* use `babel-plugin-react-native-web` to resolve `react-native` to `react-native-web` on server side

### To Run Server with SSR:

`npm run build && npm run server`
