import App from './src/App';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';

const fs = require('fs');
const indexHTML = fs.readFileSync('./build/index.html');

// register the app
AppRegistry.registerComponent('App', () => App);

// prerender the app
const { element, getStyleElement } = AppRegistry.getApplication('App', {});
const html = ReactDOMServer.renderToString(element);
const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());

function serve(req, res, next) {
  // construct HTML document string
  const document = indexHTML
    .toString()
    .replace('<div id="root">', '<div id="root">' + css + html);
  res.send(document);
}

export default serve;
