class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = 
    this.ratings.reduce((accumulator, rating) =>
    accumulator + rating);
        return ratingsSum/ this.ratings.length;
    }
  
  addRating(value) {
    this.ratings.push(value);
  }
  };
  
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title)
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
  
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  console.log(historyOfEverything)

  // going for coffee run :)