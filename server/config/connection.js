const { connect, connection } = require('mongoose');

const connectionString = 'mongodb+srv://wilson:skills@skillswap.b8eirkl.mongodb.net/'

connect(connectionString);

module.exports = connection;
