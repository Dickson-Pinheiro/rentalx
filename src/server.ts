import express from 'express'
import "reflect-metadata";
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './database'
import './shared/container'


const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json())
app.use(router)



app.listen(3333, () =>{
    console.log("server is running!")
})