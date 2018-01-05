import App from './src/App';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';

const fs = require('fs');
const indexHTML = fs.readFileSync('./build/index.html');

// register the app
AppRegistry.registerComponent('App', () => App);

// prerender the app
const { element, stylesheets } = AppRegistry.getApplication('App', {});
const initialHTML = ReactDOMServer.renderToString(element);
const initialStyles = stylesheets
  .map(sheet => ReactDOMServer.renderToStaticMarkup(sheet))
  .join('\n');

function serve(req, res, next) {
  // construct HTML document string
  const document = indexHTML
    .toString()
    .replace(
      '<div id="root">',
      '<div id="root">' + initialStyles + initialHTML
    );
  res.send(document);
}

export default serve;
