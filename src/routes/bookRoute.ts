import express, {Request, Response} from "express"
import { tryCatch } from "../utils/tryCatch";
const bookController = require("../controller/bookController")


const router = express.Router();

// to list all books
router.get('/',tryCatch(bookController.listAllBooks))

// To add a book
router.post('/', tryCatch(bookController.addBook))

// To update a book
router.put('/:Id', tryCatch(bookController.updateBook))

// To delete a book
router.delete('/:Id', tryCatch(bookController.deleteBook))

export default router