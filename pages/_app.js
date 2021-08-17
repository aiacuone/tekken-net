import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [buttons, setButtons] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const state = { buttons, expanded };
  const setState = { setButtons, setExpanded };

  return <Component {...pageProps} state={state} setState={setState} />;
}

export default MyApp;
