class Member {
    constructor(memberId, name, email, borrowedBooks) {
        this.memberId = memberId;
        this.name = name;
        this.email = email;
        this.borrowedBooks = borrowedBooks;
    }
    getMemberId() {
        return this.memberId;
    }
    setMemberId(memberId) {
        this.memberId = memberId;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getBorrowedBooks() {
        return this.borrowedBooks;
    }
    setBorrowedBooks(borrowedBooks) {
        this.borrowedBooks = borrowedBooks;
    }
    // borrowBook(book)
    displayDetails() {
        console.log(`MemberId:${this.memberId}`);
        console.log(`Name:${this.name}`);
        console.log(`Email:${this.email}`);

    }
}
const mem1 = new Member(1, "sri", "sri@.1", "book1");
mem1.displayDetails();