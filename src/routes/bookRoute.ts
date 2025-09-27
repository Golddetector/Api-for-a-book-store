import express, {Request, Response} from "express"
const bookController = require("../controller/bookController")


const router = express.Router();

// to list all books
router.get('/',bookController.listAllBooks)

// To add a book
router.post('/', bookController.addBook)

// To update a book
router.put('/:Id', bookController.updateBook)

// To delete a book
router.delete('/:Id', bookController.deleteBook)

export default router