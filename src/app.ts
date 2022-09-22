import express from "express"
import "dotenv/config"

import { json } from "body-parser"

import appDataSource from "./utils/POSTGRES"

const cors = require("cors")

const app = express()

app.use(json())

app.use(cors())
const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

    appDataSource
      .initialize()
      .then((res) => {
        //write the rest of the code here !
        console.log("Connected to the database ! ")
      })
      .catch((e) => {
        console.log(e)
      })
  })
  .on("error", () => {
    console.log("There's an error ! ")
  })
