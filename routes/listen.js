const express = require('express');
const router = express.Router();

const listenController = require('../controllers/listen');
const validation = require('../middleware/validate');

router.get('/', listenController.getAll);

router.post('/', validation.saveBook, listenController.createBook);

router.put('/:id', validation.saveBook, listenController.updateBook);

router.delete('/:id', listenController.deleteBook);

module.exports = router;