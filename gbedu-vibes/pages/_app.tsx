import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataContextProvider } from "../context/dataContext";
import { initialState, reducer } from "../context/reducer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen">
      <DataContextProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </DataContextProvider>
    </div>
  );
}

export default MyApp;
