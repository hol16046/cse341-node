const express = require('express');
const router = express.Router();

const listenController = require('../controllers/listen');
const validation = require('../middleware/validate');

router.get('/', listenController.getAll);

router.post('/', validation.saveBook, listenController.createAudio);

router.put('/:id', validation.saveBook, listenController.updateAudio);

router.delete('/:id', listenController.deleteAudio);

module.exports = router;