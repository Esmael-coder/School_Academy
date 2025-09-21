import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react'
import { LuCookie } from "react-icons/lu";
import { Link } from 'react-router-dom';

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
    console.log(cookie)

    if (cookie) {

      setShowModal(false)

    } else {

      setShowModal(true)
    }
  }, [])

  const handleClick = () => {
    document.cookie = 'cookie=true; path=/; max-age=31536000';
    setShowModal(false)
  }

  if (showModal) {

    return (
  
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

          <div className='bg-secondary w-[700px] max-w-7xl px-4 sm:px-6 lg:px-8 py-6 fixed z-999 bottom-40 left-[50%] transform -translate-x-[50%]'>
            <div className='w-full flex flex-col items-center p-4 gap-2 text-xl'>
              <LuCookie size={40} className='text-primary' />
              <h3 className='text-primary font-semibold'>Cookies</h3>
              <p>Usamos cookies para melhorar sua experiência no site. Para saber mais, consulte a nossa <Link className='text-hightlight underline'>política de Cookies.</Link></p>
              <div className='flex gap-16 text-xl mt-4 text-hightlight'>
                <button className='underline underline-offset-3 cursor-pointer hover:text-primary' onClick={handleClick}>Rejeitar</button>
                <button className='underline underline-offset-3 cursor-pointer hover:text-primary' onClick={handleClick}>Aceitar</button>
              </div>
            </div>
          </div>

        </div>
    )
  }

}

