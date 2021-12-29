import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hind:wght@300;400;500;600;700&family=Montserrat:wght@200&display=swap"
            rel="preload"
          />
          <link
            rel="preload"
            href="/fonts/BackOutWeb.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/OutOfAfrica.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
