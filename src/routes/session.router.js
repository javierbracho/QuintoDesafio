import Express from "express";
import userModel from "../model/user.model.js"

const routerS = Express.Router()

routerS.post("/login", (req, res)=>{
    
})

routerS.get ("/logout", (req, res) => {
     if (req.session.login) {
        req.session.destroy()
     }
     res.status(200).send({message: "Sesion desconectada"})
})


export default routerS