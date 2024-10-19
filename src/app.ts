import express from 'express'
import { NextFunction, Request, Response } from 'express'
import { ExpressItemClaseRouter } from './BackOffice/Usuario/ItemClase/Infrastructure/ExpressItemClaseRouter'
import { ExpressItemRouter } from './BackOffice/Usuario/Item/Infrastructure/ExpressItemRouter'
import cors from 'cors'
import { ExpressSucursalRouter } from './BackOffice/Usuario/Sucursal/Infrastructure/ExpressSucursalRouter'
import { ExpressItemCodigoBarraRouter } from './BackOffice/Usuario/ItemCodigoBarra/Infrastructure/ExpressItemCodigoBarraRouter'
import { ExpressClienteRouter } from './BackOffice/Usuario/Cliente/Infrastructure/ExpressClienteRouter'
import { ExpressProveedorRouter } from './BackOffice/Usuario/Proveedor/Infrastructure/ExpressProveedorRouter'



// Configuración de CORS

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,

}))

app.use('/item-clases', ExpressItemClaseRouter)
app.use('/items', ExpressItemRouter)
app.use('/item-codigo-barras', ExpressItemCodigoBarraRouter)
app.use('/clientes', ExpressClienteRouter)
app.use('/sucursales', ExpressSucursalRouter)
app.use('/proveedores', ExpressProveedorRouter)

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