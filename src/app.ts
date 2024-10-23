import express from 'express'
import { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { ExpressUsuarioRouter } from './BackOffice/Usuario/Infrastructure/ExpressUsuarioRouter'


// Configuración de CORS

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,

}))

app.use('/usuarios', ExpressUsuarioRouter)

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.error(err.message)
        return res.status(500).json({ message: err.message })
    }

    console.error(err)
    return res.status(500).json({ message: 'Something went wrong' })
})




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})