import express from 'express'
import { PrismaClient } from '@prisma/client'


const router = express.Router()
const prisma = new PrismaClient()


router.get('/portal-aluno', async (req, res)=>{

    try {
        
        const user = await prisma.user.findUnique({
            where:{
                id: req.userId
            },
            // selecionando so os campos que serao retornados
            select :{
                id: true,
                email: true,
                name: true
            }
        })

        res.status(200).json(user)

    } catch (error) {
        
        res.status(500).json({message: "ocorreu um erro"})
    }
})

export default router