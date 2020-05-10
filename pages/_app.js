import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { initGoogleAnalytics, registerPageView } from "../utils/analytics.js";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (!window.GA_INITIALIZED) {
      initGoogleAnalytics();
      window.GA_INITIALIZED = true;
    }
    registerPageView();

  }, []);

  const description = 'Read email addresses aloud like a Lieutenant General'

  return (
    <React.Fragment>
      <Head>
        <title>Telephony</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content="Telephony" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://get-telephony.now.sh/" />
        <meta property="og:image" content="https://get-telephony.now.sh/image.png" />
        <meta property="og:description" content={description}/>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
