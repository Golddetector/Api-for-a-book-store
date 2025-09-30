import express from "express"
import bookRouter from "./routes/bookRoute"
import { errorHandler } from "./middleware/errorHandler";


const app = express();

app.use(express.json())
app.use('/book',bookRouter)
app.use(errorHandler)


app.listen(3000, () =>{
    console.log("server is running smootly now")
})