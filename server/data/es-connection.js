var elasticsearch = require('elasticsearch');

// Elastic Search Configuration here :)
var client = new elasticsearch.Client({
    hosts: [
        'http://localhost:9200/'
    ]
});

module.exports = client; 