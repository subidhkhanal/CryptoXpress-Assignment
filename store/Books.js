import { makeAutoObservable } from "mobx";
import { books, clientBooks } from "../utils";

class BooksStore {
  constructor() {
    this.books = [];
    this.clientBooks=[];
    this.searchParam = "";
    makeAutoObservable(this);
  }

  setSearchParam = (param) => {
    this.searchParam = param;
  };

  setBooks = (books) => (this.books = books);

  fetchBooks = async () => {
    return Promise.resolve(books);
  };

 get fetchAndSetBooksOnClient() {
  return clientBooks
  };

  get filteredBooks() {
    return books
  }

  get totalBooks() {
    return this.books.length;
  }

  hydrate = (data) => {
    if (!data) return;
    this.setBooks(data.books);
  };
}

export default BooksStore;
