import express from 'express'
import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'
import { PORT } from './config.js'
import logger from './middlewares/logger.js'
import bodyParser from 'body-parser'

const api = express()

api.use(logger)
api.use(bodyParser.json())

api.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo a API!' })
})

api.use('/user', logger, userRoute)
api.use('/product', productRoute)

api.all('*', logger, (req, res) => {
    res.status(404).json({ message: 'Endpoint não encontrado!' })
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost/${PORT}`)
})

