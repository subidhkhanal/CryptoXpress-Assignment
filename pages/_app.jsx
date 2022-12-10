import { useStore } from "../store";
import { createContext } from "react";
import '../styles/globals.css'


export const MobxContext = createContext();

const MyApp = (props) => {
  const { Component, pageProps, err } = props;
  const store = useStore(pageProps.initialState);
  return (
    <MobxContext.Provider value={store}>
      <Component {...pageProps} err={err} />
    </MobxContext.Provider>
  );
};

export default MyApp;
