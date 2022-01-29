import React from "react";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../utils/apolloClient";
import type { AppProps } from "next/app";
import { DataContextProvider } from "../context/dataContext";
import { initialState, reducer } from "../context/reducer";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = createApolloClient();
  return (
    <DataContextProvider initialState={initialState} reducer={reducer}>
      <ApolloProvider client={apolloClient}>
        <div className="w-full min-h-screen">
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </DataContextProvider>
  );
}

export default MyApp;
