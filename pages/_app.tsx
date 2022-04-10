import type { AppProps } from "next/app";
import Head from "../components/Head";
import styled from "styled-components";
import { defaultTheme } from "../constants/Theme";
import "../styles/globals.css";

const Wrapper = styled.div`
  ${defaultTheme}
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  overflow-x: hidden;
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Wrapper>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
