

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

const update_book = (id: number, new_book_info: Partial<Book>) => {
    let old_book_info = books.find(b => b.Id === id);
    if(!old_book_info){return null}

    if(new_book_info.Author) old_book_info.Author = new_book_info.Author;   
    if(new_book_info.Title) old_book_info.Title = new_book_info.Title;   
    if(new_book_info.Year)old_book_info.Year = new_book_info.Year;   

    return old_book_info;
}

const delete_book = (id: number) => {
    let book = books.findIndex(b => b.Id === id)
    if(book === -1) return false
    return true
}

const list_all_books = () => {
    return books
}




