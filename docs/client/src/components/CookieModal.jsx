import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react'
import { LuCookie } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const CookieModal = () => {

  // Essa funcao apenas define se o modal aparece ou nao. nao faz diferenca se aceitar ou rejeitar os cookies
  const [showModal, setShowModal] = useState()

  const getCookie = (name) => {
    const cookie = document.cookie.split("; ").reduce((acc, current) => {
      const [key, value] = current.split("=")
      acc[key] = value;
      return acc;
    }, {})

    return cookie[name]
  }

  useEffect(() => {

    const cookie = getCookie('cookie')

    if (cookie) {

      setShowModal(false)

    } else {

      setTimeout(() => { setShowModal(true) }, 1000)

    }
  }, [])

  const handleClick = () => {
    document.cookie = 'cookie=true; path=/; max-age=31536000';
    setShowModal(false)
  }

  if (showModal) {

    return (

      <div className="fixed inset-0 flex items-end justify-center bg-black/40 z-50">

        <AnimatePresence>
          <motion.div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
    
          >
            <div className='w-full bg-white flex flex-col items-center p-4 gap-2 text-lg rounded-md'>
              <LuCookie size={40} className='text-primary' />
              <h3 className='text-primary text-2xl font-semibold'>Cookies</h3>
              <p>Usamos cookies para melhorar sua experiência no site. Para saber mais, consulte a nossa <Link to={'/politica-cookie'} className='text-hightlight underline'>política de Cookies.</Link></p>
              <div className='flex gap-16 mt-4 text-hightlight'>
                <button className='px-5 py-2 bg-hightlight text-white rounded hover:bg-primary cursor-pointer' onClick={handleClick}>Rejeitar</button>
                <button className='px-5 py-2 bg-hightlight text-white rounded hover:bg-primary cursor-pointer' onClick={handleClick}>Aceitar</button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div >
    )

  }

}

