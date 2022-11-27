import * as React from "react";
import { AppProps } from "next/app";
import AppContainer from "../components/AppContainerPage/AppContainerPage";

export default function MyApp({ Component, pageProps }: AppProps) {
  // search should change on search page
  return (
    <AppContainer search={false}>
      <Component {...pageProps} />
    </AppContainer>
  );
}
