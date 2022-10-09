const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = (req, res) => {
    mongodb
        .getDb()
        .db('library')
        .collection('listen')
        .find()
        .toArray((err, lists) => {
            if (err) {
                res.status(400).json({ message: err });
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
};

const createAudio = async (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        narrator: req.body.narrator,
        length: req.body.length,
        language: req.body.language,
        publisher: req.body.publisher,
        released: req.body.released
    };
    const response = await mongodb.getDb().db('library').collection('listen').insertOne(book);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the book.');
    }
};

const updateAudio = async (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid book id to update a book.');
    }
    const bookId = new ObjectId(req.params.id);
    const book = {
        title: req.body.title,
        author: req.body.author,
        narrator: req.body.narrator,
        length: req.body.length,
        language: req.body.language,
        publisher: req.body.publisher,
        released: req.body.released
    };
    const response = await mongodb
        .getDb()
        .db('library')
        .collection('listen')
        .replaceOne({ _id: bookId }, book);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the book.');
    }
};

const deleteAudio = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid book id to delete a book.');
    }
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb 
        .getDb()
        .db('library')
        .collection('listen')
        .remove({ _id: bookId }, true);
        console.log(response);
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || 'Some error occured while deleting the book.');
        }
};

module.exports = {
    getAll,
    createAudio,
    updateAudio,
    deleteAudio
};