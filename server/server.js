// imports and initial set up:
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const cors = require('cors');
const path = require('path');
const cookieParser = require("cookie-parser");
const { expressMiddleware } = require('@apollo/server/express4'); // Import expressMiddleware
const { authMiddleware } = require('./utils/auth');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const PORT = process.env.PORT || 3001;
const server = new ApolloServer({ typeDefs, resolvers });

const app = express(); // declared before usage

// middleware setup:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// static file serving: serves static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes for HTML Files:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(express.static(path.join(__dirname, '../Client/dist')));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
  })


  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on pORT ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  })

}

startApolloServer();

