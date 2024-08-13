

import React from 'react';
// import { ApolloProvider } from '@apollo/client';
import client from './apollo/apolloClient'; // Import the Apollo Client directly
import { Outlet } from "react-router-dom";
import Navbar from './Components/Nav';
import SideBar from "./Components/Sidebar/SideBar";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an http link to connect to your GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:3002/graphql', // Replace with your GraphQL server URI
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

// Export the client wrapped in ApolloProvider
export const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

function App() {
  return (
    <ApolloProvider client={client}>  {/* Wrap your app with ApolloProvider */}
      <SideBar />
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
