import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import Characters from './components/characters';
import Index from './components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App: FC = () => {

  const [pagina, setPagina] = useState(1);

  return (
    <Layout>
      <ApolloProvider client={client}>
        <Characters page={pagina} />
        <Index page={pagina} changePage={setPagina} />
      </ApolloProvider>
    </Layout>
  );
}


export default App;
