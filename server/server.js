// imports and initial set up:
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const cors = require('cors');
const path = require('path');
const cookieParser = require("cookie-parser");
const { expressMiddleware } = require('@apollo/server/express4'); // Import expressMiddleware
const {authMiddleware} = require('./utils/auth');

// const setupLoginRoute = require("./routes/login");
// const setupAddRoute = require("./routes/add");
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = 3001;
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

app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/welcome.html"));
});

app.post('/login', (req, res) => {
  //authenticate user
  const username = req.body.username
  const user = { name: username}


  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
})

// Set up additional routes
// setupLoginRoute(app);
// setupAddRoute(app);

const startApolloServer = async () => {
  await server.start();

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.use('/graphql', expressMiddleware(server, {
      context: authMiddleware
    }));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    })

    

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on pORT ${PORT}`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    })

  // Database Connection and Server Start
  db.once('open', () => {
      app.listen(PORT, () => {
          console.log(`API server running on PORT ${PORT}`);
          console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
  });
}

startApolloServer();











// const express = require('express');
// const {ApolloServer} = require('@apollo/server');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const {expressMiddleware} = require('@apollo/server/express4');
// const path = require('path');
// // jwt cookie-parser
// const cookieParser = require("cookie-parser");
// // jwt connect login and add routes
// const setupLoginRoute = require("./routes/login");
// const setupAddRoute = require("./routes/add");

// const {typeDefs, resolvers} = require('./schemas');
// const db = require('./config/connection');

// const PORT = 3001;
// const server = new ApolloServer({typeDefs, resolvers,});

// // parses incoming req URL-encoded payloads
// // parses cookies attached to the client request object, populating middleware req.cookies with object keyed cookie names
// // connects to html files - names to be changed

// app.use(
//     express.urlencoded({
//       extended: true,
//     })
//   );
//   app.use(cookieParser());
  
//   app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
  
//   app.get("/welcome", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/welcome.html"));
//   });
  
//   setupLoginRoute(app);
//   setupAddRoute(app);



// const startApolloServer = async () => {
//     await server.start();

//     app.use(express.urlencoded({extended: false}));
//     app.use(express.json());

//     app.use(express.static(path.join(__dirname, '../client/dist')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     })

//     app.use('/graphql', expressMiddleware(server));

//     db.once('open', () => {
//         app.listen(PORT, () => {
//             console.log(`API server running on pORT ${PORT}`);
//             console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//         });
//     })

// }

// startApolloServer();

