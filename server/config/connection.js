const { connect, connection } = require('mongoose');

const connectionString = 'mongodb+srv://sonypoudel30:Orange234@cluster0.yumkwqt.mongodb.net/googlebooks?retryWrites=true&w=majority&appName=Cluster0'

connect(connectionString);

module.exports = connection;
