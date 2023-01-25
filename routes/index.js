//import express router and api directory
const router = require('express').Router();
const apiRoutes = require('./api');

//use middleware for routes whitin api
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong route!'));

//export router
module.exports = router;