const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const { requiresAuth } = require('express-openid-connect');
require('dotenv').config();
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', requiresAuth(), swaggerUi.serve, swaggerUi.setup(swaggerDocument), (req,res) => {
    res.send(JSON.stringify(req.oidc.user));
});

module.exports = router;