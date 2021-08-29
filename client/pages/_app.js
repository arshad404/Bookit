import "bootstrap/dist/css/bootstrap.css";

//this is done to export the global css to every component and each component should not
//dependent on the index file
const GlobalCSS = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default GlobalCSS;
