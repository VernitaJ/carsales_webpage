import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/cars.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>BlueAuto Second Hand Cars South Africa</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout position="relative" minHeight="100vh" maxWidth="90vw">
          <Navbar transparent />
          <Component {...pageProps} height="100vh" paddingBottom="50px" />
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}
