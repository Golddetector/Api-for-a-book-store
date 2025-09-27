import express from "express"
import bookRouter from "./routes/bookRoute"

const app = express();

app.use(express.json())
app.use('/book',bookRouter)


app.listen(3000, () =>{
    console.log("server is running smootly now")
})