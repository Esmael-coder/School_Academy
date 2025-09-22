import express from 'express'
import cors from 'cors'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middleware/auth.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, ()=>console.log("server online 🟢"))