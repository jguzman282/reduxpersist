import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/layout";
import { Provider } from "react-redux";
import { store, persistor } from "../components/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider>
          <Layout />
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
