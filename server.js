const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000 || process.env.PORT;
const employeeRoutes = require('./server/api/employees');
const managerRoutes = require('./server/api/managers');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

mongoose.connect('mongodb://localhost:27017', 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

db.on('open', () => console.log('db connection successful'))

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/employees', employeeRoutes);
app.use('/managers', managerRoutes);

app.listen(port, () => console.log('listening on port 3000'));