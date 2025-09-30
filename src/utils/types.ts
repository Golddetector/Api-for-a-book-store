import { promises } from "dns"
import { Request, Response } from "express"

type controllerAsync = (req:Request,res: Response) => Promise<any>

export {controllerAsync}