
const mongoose = require('mongoose');

//creates a connection to a MongoDB 

mongoose.connect('mongodb://127.0.0.1:27017/social-networkDB', { useNewUrlParser: true, useUnifiedTopology: true, })

//export connection

module.exports = mongoose.connection;