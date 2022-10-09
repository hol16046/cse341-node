const validator = require('../helpers/validate');

const saveBook = (req, res, next) => {
    const validationRule = {
        title: 'required|string',
        author: 'required|string',
        copyrightDate: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveAudio = (req, res, next) => {
    const validationRule = {
        title: 'required|string',
        author: 'required|string',
        narrator: 'required|string',
        length: 'required|string',
        language: 'required|string',
        publisher: 'required|string',
        released: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveBook,
    saveAudio
};