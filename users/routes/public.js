import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const router = express.Router()
const prisma = new PrismaClient()

/* rota post para cadastrar */
router.post('/cadastro', async (req, res) => {

    try {

        const user = req.body

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

       const userDB = await prisma.user.create({
            data: {
                name: user.nome,
                email: user.email,
                password: hashPassword
            }
        })

        res.status(201).json(userDB)

    } catch (error) {

        res.status(500).json({Erro: error})

    }
})


/* rota para iniciar sessão */

router.get('/login', async(req, res)=>{

    
})

export default router