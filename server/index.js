/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const axios = require('axios');
const reviewRouter = require('./reviewRouter.js');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.use('/', reviewRouter);

app.get('/products/:product_id', (req, res) => {
  const url = `${process.env.BASE_URL}/products/${req.query.pid}`;
  console.log(url);
  const options = {
    headers: { Authorization: process.env.X_API_KEY },
  };
  axios.get(url, options)
    .then((result) => {
      console.log(result);
      res.status(200).send(result.data);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.get('/reviews/meta', (req, res) => {
  const url = `${process.env.BASE_URL}/reviews/meta`;
  const options = {
    headers: { Authorization: process.env.X_API_KEY },
    params: { product_id: req.query.product_id },
  };
  axios.get(url, options)
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/reviews', (req, res) => {
  const url = `${process.env.BASE_URL}/reviews`;
  const options = {
    headers: { Authorization: process.env.X_API_KEY },
    params: {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sortTyoe,
    },
  };

  axios.get(url, options)
    .then((results) => {
      res.status(200).send(results.data.results);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log(req);
  const url = `${process.env.BASE_URL}/reviews/${req.body.id}/helpful`;
  console.log(url);
  const options = {
    headers: { Authorization: process.env.X_API_KEY },
  };

  axios.put(url, {}, options)
    .then((result) => {
      console.log(result);
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send(err);
    });
});

app.listen(process.env.PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
