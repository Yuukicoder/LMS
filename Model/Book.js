class Book{
    constructor(bookId, title, author, genre, isAvailable) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isAvailable = isAvailable;
    }
    getBookId(){
        return this.bookId;
    }
    setBookId(bookId){
        this.bookId = bookId;
    }
    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }
    getAuthor(){
        return this.author;
    }
    setAuthor(author){
        this.author = author;
    }
    getGenre(){
        return this.genre;
    }
    setGenre(genre){
        this.genre = genre;
    }
    getAvailability(){
        return this.isAvailable;    
    }
    setAvailability(isAvailable){
        this.isAvailable = isAvailable;
    }
    markAsBorrowed(){
        console.log(

            (this.isAvailable)?"Not Borrowed":"Borrowed"
        );
    }
    markAsReturned(){
        console.log(

             (this.isAvailable)?"Returned":"Not Returned"
        );

    }
    displayDetails(){
        console.log(`BookId:${this.bookId}`);
        console.log(`Title:${this.title}`);
        console.log(`Author:${this.author}`);
        console.log(`Genre:${this.genre}`);
        console.log(`Availability:${this.isAvailable}`);
    }
}
const book1 = new Book(1, "book1", "author1", "genre1", true);
book1.markAsBorrowed();