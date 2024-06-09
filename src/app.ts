import express, { Application, Request, Response } from "express"
export const app: Application = express()
import cors from "cors"
const port = 3000

//parsen
app.use(express.json())
app.use(express.text())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.send("i am hitted")
})

