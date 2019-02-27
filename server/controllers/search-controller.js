var client = require('../data/es-connection');

// Sample function :)
// To Access this function, hit this URL: http://localhost:3000/api/np-node/search
module.exports.search = function (req, res) {
    // Write Elastic Search Code Here :)
    // Here's a sample response
    res.status(200).json({
        "status": true,
        "data": "Data"
    });
};