const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('library').collection('read').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const createBook = async (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        copyrightDate: req.body.copyrightDate
    };
    const response = await mongodb.getDb().db('library').collection('read').insertOne(book);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the book.');
    }
};



module.exports = {
    getAll,
    createBook
};