
import React, { useState } from 'react'
import { BiBrain, BiLogIn, BiMenu, } from "react-icons/bi";
import { MdOutlineSchool, MdClose } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { links } from '../const/Constants'; //lembrar de fechar os icones como tag quando usar

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [burger, setBurger] = useState(true)

    const openMenu = () => {
        setIsOpen(!isOpen)
        setBurger(!burger)
    }

    return (
        <header className='fixed bg-white w-screen shadow-sm top-0 z-50'>
            <div className='h-16 max-w-7xl mx-auto px-4 sm:p-6 lg:p-8 flex items-center'>
                <div className='flex justify-between items-center w-full'>

                    <div className='flex items-center gap-1 text-primary'>
                        <BiBrain size={35} />
                        <h1 className='font-bold text-2xl'>MindUp</h1>
                    </div>

                    {/* menu hamburguer */}
                    {burger ? <div className='md:hidden' onClick={openMenu}><BiMenu size={30} /></div> : <div className='md:hidden' onClick={openMenu}><MdClose size={30} /></div>}

                    {/* navbar mobile */}
                    <div className={`flex flex-col absolute z-50 bg-white top-16 w-[80%] h-screen gap-20 p-8 shadow-sm md:hidden ${isOpen ? "right-0" : "right-[-82%]"} transition-all duration-300 ease-in-out`}>
                        <nav className='flex flex-col gap-2 text-primary'>

                            {
                                links.map((link) => {
                                    //coloquei icon numa constante Icon com inicial maiúscula porque jsx não aceita tag que não são html, iniciem com letra minuscula
                                    // criando const Icon antes do return. dentro do return não é possivel criar
                                    const Icon = link.icon;

                                    return (

                                        <div key={link.name} className='flex items-center gap-2 border-b py-5'>
                                            <Icon />
                                            <NavLink
                                                onClick={() => { setIsOpen(!isOpen), setBurger(!burger) }}
                                                to={link.path}>{link.name}
                                            </NavLink>
                                        </div>
                                    )
                                })
                            }

                        </nav>
                        <div className='self-center flex gap-2 items-center justify-center p-2 w-24 rounded-md bg-primary text-white'>
                            <BiLogIn />
                            <a href="Login">Portal</a>
                        </div>
                    </div>


                    {/*navbar para desktop e tablets maiores*/}
                    <div className='hidden md:block text-cinza'>
                        <nav className='flex gap-3'>
                            {
                                links.map(link => (

                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({isActive})=> (isActive ? "p-2 rounded-sm bg-ice text-primary": "p-2 rounded-sm hover:bg-ice hover:text-primary")} 
                                        onClick={() => changeActive(link.name)}>{link.name}
                                    </NavLink>
                                ))
                            }
                        </nav>
                    </div>
                    <div className='self-center items-center gap-2 rounded-md w-20 p-1 bg-primary text-white hidden md:flex'>
                        <BiLogIn />
                        <a href="Login">Portal</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
