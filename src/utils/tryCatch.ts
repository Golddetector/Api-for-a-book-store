import {Request, Response, NextFunction} from "express"
import { controllerAsync } from "./types"

const tryCatch = (controller: controllerAsync) => async (req: Request, res:Response, next: NextFunction) =>{
    try{
        await controller(req,res)
    }
    catch(err){
        next(err)
    }
}

export {tryCatch}