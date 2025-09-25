

interface Book{
    Id: number,
    Title: string,
    Author: string,
    Year: Date,
}

let books: Book [] = [];

let nextBookId = 1;
const add_Book = (title: string, author: string, year: Date) => {
    let book = {Id: nextBookId++, Title: title, Author: author, Year: year}
    books.push(book);
    return book;
}

