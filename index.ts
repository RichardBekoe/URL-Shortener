import express from 'express'
import bodyParser from 'body-parser'

import mongoDBConnect from "./app/database"
import routes from "./app/routes"
import cors from "cors"



const app: express.Application = express()

mongoDBConnect()




app.use(bodyParser.json())
app.use(cors())
app.use(routes)
app.use(express.json())


app.listen(3000, "0.0.0.0", () => console.log('Running on port 3000'))