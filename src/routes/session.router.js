import Express from "express";
import userModel from "../model/user.model.js"

const router = Express.Router()

router.post("/login", (req, res)=>{
    
})

router.get ("/logout", (req, res) => {
     if (req.session.login) {
        req.session.destroy()
     }
     res.status(200).send({message: "Sesion desconectada"})
})


export default router