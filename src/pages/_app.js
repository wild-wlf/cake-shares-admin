import "../styles/global.css";
import { createGlobalStyle } from "styled-components";
import Variables from "../styles/variables.css";
import { HelperClasses, Styling } from "../styles/GlobalStyles.styles";

export default function App({ Component, pageProps }) {
  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
