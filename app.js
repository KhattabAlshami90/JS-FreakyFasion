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
    imageUrl: "https://placehold.co/600x400",
    sku: "AAA11-DD",
    price: 149
  },
  {
    id: 2,
    name: "Vit T-Shirt",
    description: "Lorem ipsum dolor sit amet vit",
    imageUrl: "https://placehold.co/600x400",
    sku: "BBB11-RR",
    price: 149
  },
  {
    id: 2,
    name: "Röd T-Shirt",
    description: "Lorem ipsum dolor sit amet röd",
    imageUrl: "https://placehold.co/600x400",
    sku: "BBB11-RR",
    price: 149
  },
  {
    id: 3,
    name: "Svart T-Shirt",
    description: "Lorem ipsum dolor sit amet svart",
    imageUrl: "https://placehold.co/600x400",
    sku: "BBB11-RR",
    price: 300
  },
  {
    id: 4,
    name: "Grön T-Shirt",
    description: "Lorem ipsum dolor sit amet grön",
    imageUrl: "https://placehold.co/600x400",
    sku: "BBB11-RR",
    price: 500
  }
];

app.use('/api/products', productsApiRouter);
app.use('/api/search', searchApiRouter);

module.exports = app;
