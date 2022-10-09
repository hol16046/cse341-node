const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/read', require('./read'))
router.use('/listen', require('./listen'))

module.exports = router;