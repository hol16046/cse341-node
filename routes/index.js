const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/read', require('./read'))

module.exports = router;