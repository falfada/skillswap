
// import React from 'react';
import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './Components/Nav';
// import SideBar from "./Components/Sidebar/SideBar";


// Create an http link to connect to your GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql', // Replace with your GraphQL server URI
});

// Set the authorization context for requests
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>  {/* Wrap your app with ApolloProvider */}
      {/* <SideBar /> */}
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
