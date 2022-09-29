const express = require('express');
const router = express.Router();

const readController = require('../controllers/read');

router.get('/', readController.getAll);

router.post('/', readController.createBook);

module.exports = router;