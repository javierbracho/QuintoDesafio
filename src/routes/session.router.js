import Express from "express";
import userModel from "../model/user.model.js"

const routerS = Express.Router()

routerS.post("/login", async (req, res)=>{
    const {email, password} = req.body
    try {
      const user = await userModel.findOne({email: email})
      if(user) {
         if(user.password === password) {
            req.session.login = true
            req.session.user = {...user._doc}

            res.redirect("/profile")
         } else {
            res.status(401).send({error: "Contraseña no valida"})
         }
      } else {
         res.status(401).send({error: "Usuario no encontrado"})
      }
    } catch (error) {
         res.status(500).send({error: "error al iniciar el sesion"})

    }
})

routerS.get ("/logout", (req, res) => {
     if (req.session.login) {
        req.session.destroy()
     }
     res.redirect("/login")
})


export default routerS