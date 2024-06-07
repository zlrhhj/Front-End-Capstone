require("dotenv").config();
import axios from 'axios';

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

const instance = axios.create({
  baseURL: `https://app-hrsei-api.herokuapp.com/api/fec2/:${process.env.CAMPUS_CODE}/`,
  "X-API-Key": process.env.X-API-KEY
});




app.listen(PORT);
console.log(`Server listening at http://localhost:${process.env.PORT}`);
