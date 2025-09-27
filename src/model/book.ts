import { error } from "console";


interface Book{
    Id: number,
    Title: string,
    Author: string,
    Year: Date,
}

let books: Book [] = [];

let nextBookId = 1;
const addBook = (title: string, author: string, year: Date) => {
    let book = {Id: nextBookId++, Title: title, Author: author, Year: year}
    if(books.findIndex(b => b.Author === author && b.Title === title && b.Year.getTime === year.getTime) != -1) {throw new Error("Book already exists")}
    books.push(book);
    return book;
}

const updateBook = (id: number, new_book_info: Partial<Book>) => {
    let old_book_info = books.find(b => b.Id === Number(id));
    console.log(old_book_info);
    if(!old_book_info){return null}

    if(new_book_info.Author) old_book_info.Author = new_book_info.Author;   
    if(new_book_info.Title) old_book_info.Title = new_book_info.Title;   
    if(new_book_info.Year)old_book_info.Year = new_book_info.Year;   

    return old_book_info;
}

const deleteBook = (id: number) => {
    let book = books.findIndex(b => b.Id === id)
    if(book === -1) return false
    return true
}

const listAllBooks= () => {
    return books
}


export {addBook, deleteBook, updateBook, listAllBooks}

