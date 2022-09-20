import express from "express"
import "dotenv/config"

import { json } from "body-parser"
const cors = require("cors")

const app = express()

app.use(json())

app.use(cors())
const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  })
  .on("error", () => {
    console.log("There's an error ! ")
  })
