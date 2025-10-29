
import  {Request,Response} from "express"
import { appError } from "../utils/appError"
import { PrismaClient } from "../generated/prisma"
const books = require("../model/book")

const prisma = new PrismaClient()

const addBook = async (req:Request, res: Response) => {
    const {Title, Author, Year} = req.body
    if(!Title || !Author || !Year) throw new appError(400, "Title, Author, and Year are required")
    if(isNaN(Date.parse(Year))) throw new appError(400, "Year is not corrrect")
    const addedBook = await prisma.book.create({
        data: {
            title: Title,
            author: Author,
            year: new Date(Year)
        }
    })
    res.status(201).json(addedBook)
}


const updateBook = async (req: Request, res: Response) => {
    const {Title, Author, Year} = req.body
    const Id = parseInt(req.params.Id)
    const data: any = {}
    if(Title) data.title = Title
    if(Author) data.author = Author
    if(Year) data.year = Year
    const book = await prisma.book.update({where: {id: Id}, data})
    if(!book) throw new appError(400, "book doesn't exist")
    res.status(200).json(book);
}

const deleteBook = async (req: Request, res: Response) => {
    const {Id} = req.params;
    const book = await prisma.book.delete({where: {id: Number(Id)}})
    res.status(200).json(book);
}

const listAllBooks = async (req:Request, res:Response) => {
    const book = await prisma.book.findMany()
    res.status(200).json(book)
}

export {addBook, deleteBook, updateBook, listAllBooks}