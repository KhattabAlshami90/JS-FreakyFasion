var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productsApiRouter = require('./routes/api/products');
var searchApiRouter = require('./routes/api/search');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.locals.nextId = 5;

app.locals.products = [
  {
    id: 1,
    name: "Svart T-shirt",
    description: "Lorem ipsum dolor sit amet svart",
    imageUrl: "https://via.placeholder.com/320x480",
    sku: "AAA111",
    price: 149
  },
  {
    id: 2,
    name: "Vit T-Shirt",
    description: "Lorem ipsum dolor sit amet vit",
    imageUrl: "https://via.placeholder.com/320x480",
    sku: "BBB111",
<<<<<<< HEAD
    price: 149
=======
    price: 149,
>>>>>>> 5b7ea5d3125222a7a08750fbdc3b19392528093c
  },
];

app.use('/api/products', productsApiRouter);
app.use('/api/search', searchApiRouter);

module.exports = app;
