import express from 'express'
import cors from 'cors'
import publicRoutes from './routes/public.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', publicRoutes)

app.listen(3000, ()=>console.log("server online 🟢"))