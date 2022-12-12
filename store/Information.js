import { makeAutoObservable } from "mobx";
import { text, sidebar } from "../utils";

class BooksStore {
  constructor() {
    this.text = [];
    this.sidebar=[];
    this.searchParam = "";
    makeAutoObservable(this);
  }

  setSearchParam = (param) => {
    this.searchParam = param;
  };

  setBooks = (text) => (this.text = text);

  fetchBooks = async () => {
    return Promise.resolve(text);
  };

 get fetchAndSetBooksOnClient() {
  return sidebar
  };

  get filteredBooks() {
    return text
  }

  get totalBooks() {
    return this.text.length;
  }

  hydrate = (data) => {
    if (!data) return;
    this.setBooks(data.text);
  };
}

export default BooksStore;
