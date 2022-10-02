const express = require('express');
const router = express.Router();

const readController = require('../controllers/read');
const validation = require('../middleware/validate');

router.get('/', readController.getAll);

router.post('/', validation.saveBook, readController.createBook);

router.put('/:id', validation.saveBook, readController.updateBook);

router.delete('/:id', readController.deleteBook);

module.exports = router;