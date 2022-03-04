import React, { Head } from 'react';
import Nav from "../components/Nav";

import PageChange from "../components/PageChange";
import Navbar from "../components/Navbar";

import "../styles/cars.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Autolink</title>
      </Head>
      <Layout>
        <Navbar transparent />
        <div suppressHydrationWarning>
          {typeof window === "undefined" ? null : <Component {...pageProps} />}
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
