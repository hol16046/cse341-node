const express = require('express');
const router = require('./contacts');
const routes = express.Router();

routes.use('/contacts', require('./contacts'))

module.exports = router;