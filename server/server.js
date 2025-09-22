import express from 'express'
import cors from 'cors'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middleware/auth.js'

const app = express()
app.use(express.json())

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.options('*', cors())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server online 🟢 na porta ${PORT}`))