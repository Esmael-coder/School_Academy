import express from 'express'

const router = express.Router()

/* rota post para cadastrar */
router.post('/cadastro', (req, res)=>{
    res.send("ola")
})

export default router