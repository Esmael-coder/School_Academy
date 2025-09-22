
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {

    try {

        const token = req.headers.authorization

        if (!token) {

            res.status(401).json({ message: 'acesso negado!' })
            return
        }

        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userId = decoded.id

        next()

    } catch (error) {

        res.status(401).json({message: 'Token invalido ou expirado. Faça login novamente.'})

    }

}


export default auth