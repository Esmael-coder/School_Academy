import express from 'express'

const router = express.Router()

/* rota post para cadastrar */
router.post('/cadastro', (req, res)=>{

    const users = req.body
    
    res.status(201).json(users)
})

export default router