import express, {request, response, Router} from "express"

const router  = Router()



router.get('/', (req,res) => {
    res.send({data: "here is yoru data"})
})

router.post('/', (req,res) => {
    res.send({data: "user created"})
})

router.put('/', (req,res) => {
    res.send({data: "user updated"})
})

router.delete('/', (req,res) => {
    res.send({data: "User deleted"})
})


module.exports = router