class Book {
  constructor(title, author, ISBN13, cost, bookFormat) {
    this.title = title;
    this.author = author;
    this.ISBN13 = ISBN13;
    this.cost = cost;
    this.bookFormat = bookFormat;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }
  getCost() {
    return this.cost;
  }

  setCost(cost) {
    this.cost = cost;
  }
}

export default Book;
