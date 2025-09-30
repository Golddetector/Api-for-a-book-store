
import  {Request,Response} from "express"
import { appError } from "../utils/appError"
const books = require("../model/book")


const addBook = async (req:Request, res: Response) => {
    const {Title, Author, Year} = req.body
    if(!Title || !Author || !Year) throw new appError(400, "Title, Author, and Year are required")
    if(isNaN(Date.parse(Year))) throw new appError(400, "Year is not corrrect")
    const addedBook = await Promise.resolve(books.addBook(Title, Author,Year))
    res.status(201).json(addedBook)
}


const updateBook = async (req: Request, res: Response) => {
    const {Title, Author, Year} = req.body
    const Id = req.params.Id
    const book = await Promise.resolve(books.updateBook(Id,{Title,Author,Year}))
    if(!book) throw new appError(400, "book doesn't exist")
    res.status(200).json(book);
}

const deleteBook = async (req: Request, res: Response) => {
    const {Id} = req.params;
    const book = await Promise.resolve(books.deleteBook(Id))
    if(book === false) throw new appError(400, "book doesn't exist")
    res.status(200).json(book);
}

const listAllBooks = async (req:Request, res:Response) => {
    const book = await Promise.resolve(books.listAllBooks())
    res.status(200).json(book)
}

export {addBook, deleteBook, updateBook, listAllBooks}