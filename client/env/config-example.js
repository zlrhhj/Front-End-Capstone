import axios from 'axios';
// Create a copy of this file, removing the example from the name,
// and fill in the variables with your info.

const CAMPUS_CODE = 'FILL_ME_IN';

const instance = axios.create({
  baseURL: `https://app-hrsei-api.herokuapp.com/api/fec2/:${CAMPUS_CODE}/`,
  "X-API-Key": 'FILL_ME_IN'
});

// When making server requests, use this instance of axios to do so
// import axios from '../../env/config.js';
module.exports = instance;