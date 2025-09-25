import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
    
    const {pathname } = useLocation()

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0
        })
    },[pathname])

    return null
}

// Esta funcao faz a pagina voltar ao topo quando o usuario troca de rota.
