import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'modern-normalize/modern-normalize.css';

const client = new ApolloClient({
  uri: 'http://localhost:8822/',
  // uri: 'https://graphql-mongoose-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
