import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-client';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import EchoLink from './echo.link';

const cache = new InMemoryCache();
const batchHttpLink = new BatchHttpLink({
  uri: '/graphql',
  fetch: async (uri, options) => {
    const token = localStorage.getItem('token');
    return fetch(uri, options);
  },
});
const echoLink = new EchoLink();
const apolloClient = new ApolloClient({
  link: ApolloLink.from([echoLink, batchHttpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

export const apollo = new VueApollo({
  defaultClient: apolloClient,
});
