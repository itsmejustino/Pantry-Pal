const router = require('express').Router();

const apiRoute = require('../controllers/api/apiRoute');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute);
router.use('/api', apiRoute);

module.exports = router;