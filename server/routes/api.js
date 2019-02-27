var express = require('express');
var router = express.Router();
var searchController = require('../controllers/search-controller');

// Configure various routes here
router 
    .route('/np-node/search')
    .get(searchController.search);

module.exports = router;