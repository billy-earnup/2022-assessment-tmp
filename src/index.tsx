import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { render } from "react-dom";
const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  });
  


import App from "./App";

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
  }

const rootElement = document.getElementById("root");
render( (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
, rootElement);

/**
 * NOTES;:
 * - Replace custome useAPICall with actual graphql
 * - Have some Material components already imported for example usage
 * - Fix test runner
 * - Choose alternate hosting method
 *  - Have JS Alternative
 */