import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient;
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSW50ZWdyYXRpb25BY2Nlc3NUb2tlbiIsInZlcnNpb24iOiIxLjAiLCJpbnRlZ3JhdGlvbklkIjoyMjIsInVzZXJJZCI6NTk2MSwiYWNjZXNzVG9rZW5TZWNyZXQiOiIxMGYzM2U4N2U3MGRmNTVlMjYxZDI4NGI1MWI3YzIwMjViNWY1YTQzMWRmZmQ2Y2QwMjgwYWU1OTY2MzY2MmZlIiwiaWF0IjoxNjQzNDAyNjY0fQ.Brig2nr7tfzVuU7kE01i9YARuGXsu4Ox42h79_Qr_Yc";

//apollo client instance
export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR for Next js
    link: new HttpLink({
      uri: "https://api.cyanite.ai/graphql",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    cache: new InMemoryCache(),
  });
}
/*

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient;
  //first we check for an initialstate if the page has utilized Next js fetching methods for Apollo Client
  if (initialState) {
    //get the existing cache that was loaded during the client side fetch and restore it
    // getStaticProps/getServerSideProps combined with the existing cached data
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
  }
}

//instance should only be updated on cache change
export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

*/
