import App from './src/App';
import ReactDOMServer from 'react-dom/server';
import { AppRegistry } from 'react-native';

const fs = require('fs');
const indexHTML = fs.readFileSync('./build/index.html');

// register the app
AppRegistry.registerComponent('App', () => App);

const INITIAL_PROPS = {
  name: 'GingerBread Man'
};

// prerender the app
const { element, getStyleElement } = AppRegistry.getApplication('App', {
  initialProps: INITIAL_PROPS
});

const html = ReactDOMServer.renderToString(element);
const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());
const initialPropsInject = `<script>window.INITIAL_PROPS = ${JSON.stringify(
  INITIAL_PROPS
)}</script>`;

function serve(req, res, next) {
  // construct HTML document string
  const document = indexHTML
    .toString()
    .replace(
      '<div id="root">',
      '<div id="root">' + initialPropsInject + css + html
    );
  res.send(document);
}

export default serve;
