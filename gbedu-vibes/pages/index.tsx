import Link from "next/link";
import Head from "next/head";
import "../styles/global.module.css";

const IndexPage = () => (
  <div>
    <Head>
      <title>GbeduVibes</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Hind:wght@300;400;500;600;700&family=Montserrat:wght@200&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <main>
      <div className="text-red-300">I'm here</div>
    </main>
  </div>
);

export default IndexPage;
