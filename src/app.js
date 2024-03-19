import  Express  from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import userRouter from "./routes/user.router.js"
import sessionRouter from "./routes/session.router.js"
import dataBase from "../src/database.js"



const app = Express()
const PUERTO = 8080;

app.use(Express.json())
app.use(cookieParser())
app.use(session ({
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,

    store: MongoStore.create({
        mongoUrl: "mongodb+srv://jbracho07:coderhouse@cluster0.sd6827y.mongodb.net/E-Commerce?retryWrites=true&w=majority&appName=Cluster0",
        ttl: 1000
    })
}))

app.use("/", userRouter)
app.use ("/", sessionRouter)

app.get("/",(req, res) => {
    res.send("Servidor operativo")
})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
})

