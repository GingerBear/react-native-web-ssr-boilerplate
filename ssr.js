import App from './src/App';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';

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
  const document = `
    <!DOCTYPE html>
    <html>
    <head>
    ${initialStyles}
    </head>
    <body>
    ${initialHTML}
    `;

  res.send(document);
}

export default serve;
