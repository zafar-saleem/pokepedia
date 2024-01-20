import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/globals.ts";
import MainProvider from "./context/mainContext.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainProvider>
          <App />
        </MainProvider> 
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
