import { enableStaticRendering } from "mobx-react-lite";
import BooksStore from "./Books";

enableStaticRendering(typeof window === "undefined");

let clientStore;
const count=0
const initStore = (initData) => {
  // for(let i=0;i<2;i++){
  const store = clientStore ?? new BooksStore();
  if (initData?.booksStore) store.hydrate(initData.booksStore);

  if (typeof window === "undefined") return store;
  if (!clientStore) clientStore = store;
  return store;
  // }
};

export function useStore(initData) {
  return initStore(initData);
}
