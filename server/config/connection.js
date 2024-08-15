// const { connect, connection } = require('mongoose');

// // const connectionString = 'mongodb+srv://wilson:skills@skillswap.b8eirkl.mongodb.net/';

// mongoose.connect (process.env.MONGODB_URI) = ''

// connect(connectionString);

// module.exports = connection;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://wilson:skills@skillswap.b8eirkl.mongodb.net/');

module.exports = mongoose.connection;
