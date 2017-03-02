/*

import express from 'express';
import morgan from 'morgan';
import path from 'path';

let app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;

*/

 // 2 

/*

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

import users from './routes/users'

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../node_modules/react-scripts/config/webpack.config.dev'

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

const copmiler = webpack(webpackConfig);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;

*/

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

import users from './routes/users'

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../node_modules/react-scripts/config/webpack.config.dev'

let staticAssets = (__dirname, '..', 'build')

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

const copmiler = webpack(webpackConfig);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(staticAssets)));
 
// Always return the main index.html on routes that should return a "page" (e.g. /contact), so react-router will render the route in the client
app.get('*/:page', (req, res) => {
    res.sendFile(path.resolve(staticAssets, 'index.html'));
});
 
app.post('/api', function (req, res) {
    // API stuff here
});
 
app.use(function(req, res) {
    res.status(404).send('Sorry cant find that!');
});
 
module.exports = app;