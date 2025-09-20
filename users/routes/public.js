import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

        res.status(201).json({ message: "Criado com sucesso." })

    } catch (error) {

        res.status(500).json({ message: "Ocorreu um erro. Tente novamente." })

    }
})


/* rota para iniciar sessão */

const JWT_SECRET = process.env.JWT_SECRET

router.post('/login', async (req, res) => {

    const userInfo = req.body

    try {

        /* procura o user pelo email unico no db */
        const singleUser = await prisma.user.findUnique({

            where: {

                email: userInfo.email
            }
        })

        
        if (!singleUser) {
            
            res.status(404).json({ message: "Dados de acesso inválidos." })
            
        }
        
        /* compara a senha do userPassword do db com o password do request */
        const isMatch = await bcrypt.compare(userInfo.password, singleUser.password)

        if (!isMatch) {

            res.status(400).json({ message: "senha inválida!" })

        } 

        /* Gerar token */
        const token = jwt.sign({id: singleUser.id}, JWT_SECRET, {expiresIn: "10s"})



        res.status(200).json(token)


    } catch (error) {

        console.log(error)

        res.status(500).json({ erro: "Erro no servidor, tente novamente.", error })

    }


})

export default router