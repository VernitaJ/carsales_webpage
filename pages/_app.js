import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/cars.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoadingPage } from "../components/LoadingPage";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

export default class MyApp extends App {
  state = {
    loaded: false,
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { loaded } = this.state;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
              __html: ``,
            }}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <title>
            Blue Auto - Used Cars - Buyers pay less & Sellers get more
          </title>
          <meta
            name="description"
            content="Get More When You Sell, Pay Less When You Buy - Trust Us for Your Next Ride. Blue Auto sells your vehicle for you, so the seller gets the profit, and the buyer pays less. Simple - The way it should be."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        {loaded ? (
          <Layout position="relative" minHeight="100vh" maxWidth="90vw">
            <Navbar transparent />
            <Component {...pageProps} height="100vh" paddingBottom="50px" />
            <Footer />
          </Layout>
        ) : (
          <LoadingPage />
        )}
      </React.Fragment>
    );
  }
}
