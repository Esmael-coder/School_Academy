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

        res.status(201).json({message: "Criado com sucesso."})

    } catch (error) {

        res.status(500).json({message: "Ocorreu um erro. Tente novamente."})

    }
})


/* rota para iniciar sessão */

router.post('/login', async (req, res)=>{

    const userInfo = req.body

    try {
        
        const singleUser = await prisma.user.findUnique({

            where: {

                email: userInfo.email
            }
        })

        const isMatch = await bcrypt.compare(userInfo.password, singleUser.password)

        if(!singleUser){

            res.status(404).json({message: "Dados de acesso inválidos."})

        } else if(!isMatch){

            res.status(400).json({message: "senha inválida!"})
        }

        res.status(200).send("usuário logado")


    } catch (error) {

        console.log(error)

        res.status(500).json({erro: "Erro no servidor, tente novamente.", error})
        
    }

    
})

export default router