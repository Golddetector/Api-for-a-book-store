
import  {Request,Response} from "express"
const books = require("../model/book")


const addBook = async (req:Request, res: Response) => {
    try{
        const {Title, Author, Year} = req.body
        if(!Title || !Author || !Year) {return res.status(404).json("Author, Title, and Year are required")}
        const addedBook = await Promise.resolve(books.addBook({Title, Author,Year}))
        res.status(201).json(addedBook)
    }
    catch(err){
        res.status(500).json("Failed to create book")
    }
}


const updateBook = async (req: Request, res: Response) => {
     try{
        const {Title, Author, Year} = req.body
        const {Id} = req.params
        const book = await Promise.resolve(books.updateBook(Id,{Title,Author,Year}))
        res.status(200).json(book);
     }
     catch(err){
        res.status(500).json("Failed to update book")
     }
}

const deleteBook = async (req: Request, res: Response) => {
    try{
        const {Id} = req.params;
        const book = await Promise.resolve(books.deleteBook(Id))
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).json("Failed deleting book")
    }
}

const listAllBooks = async (req:Request, res:Response) => {
    try{
        const book = await Promise.resolve(books.listAllBooks())
        res.status(200).json(book)
    }
    catch(err){
        res.status(500).json("Failed to list all books")
    }
}

export {addBook, deleteBook, updateBook, listAllBooks}