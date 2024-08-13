const { connect, connection } = require('mongoose');

const connectionString = ''

connect(connectionString);

module.exports = connection;
