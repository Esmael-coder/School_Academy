
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem('token')

    /* guarda a rota que o usuario tentou acessar para ir automaticamente após o login */
    const location = useLocation()

    if (!token) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }

    return children
}

