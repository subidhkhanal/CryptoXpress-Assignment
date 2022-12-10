import { makeAutoObservable } from "mobx";
import { books, clientBooks } from "../utils";

class Sidebars {
  constructor() {
    this.books = [];
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

  fetchAndSetBooksOnClient = async () => {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(this.searchParam.toLowerCase())
    );
  };

  get filteredBooks() {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(this.searchParam.toLowerCase())
    );
  }

  get totalBooks() {
    return this.books.length;
  }

  hydrate = (data) => {
    if (!data) return;
    this.setBooks(data.books);
  };
}

export default Sidebars;
