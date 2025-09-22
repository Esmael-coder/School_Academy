import { LuNotebookText, LuCircleCheckBig } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { GoFileZip } from "react-icons/go";
import { MdOutlineFileDownload, MdAccessTime } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { Profile } from "./Profile";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";


export const PortalAluno = () => {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUser = async () => {

      setLoading(true)

      try {
        const res = await axios.get('http://localhost:3000/portal-aluno', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
        
        setUser(res.data)

      } catch (error) {

        if (axios.isAxiosError(error)) {

          alert(error.response.data.message)
          navigate('/login')
        }

        console.log(error)

      } finally {

        setLoading(false)
      }
    }

    getUser()
  }, [])


  if (loading) {

    return (

      <div className="flex justify-center items-center h-screen">
        <ClipLoader color='#001542' size={50} />
      </div>
    )

  }

  return (


    <div className='w-full max-w-7xl mx-auto py-6 px-4 md:px-6 lg:px-8'>

      <section className='w-full p-10 bg-hightlight text-white rounded-md'>
        <h1 className='font-semibold text-3xl lg:text-4xl mb-2'>Olá, {user?.name}!</h1>
        <p>Continue sua jornada de aprendizado.</p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 my-10">

        {/* primeira section do grid */}
        <section className="lg:col-span-2">
          <section>
            <h2 className='text-primary text-2xl lg:text-3xl font-bold mb-4'>Meus cursos</h2>
            <div className='flex flex-col gap-5'>
              <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
                <h3>Indisponível</h3>
              </div>
              <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
                <h3>Indisponível</h3>
              </div>
              <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
                <h3>Indisponível</h3>
              </div>
              <div className='p-10 w-full rounded-md shadow-[var(--boxShadow2)]'>
                <h3>Indisponível</h3>
              </div>
            </div>
          </section>

          <section className='mt-10 p-4 shadow-[var(--boxShadow2)] rounded-md'>
            <h3 className='flex items-center gap-2 mb-4'>
              <LuNotebookText className="text-hightlight" size={20} />
              Materiais de apoio
            </h3>

            <div className="flex flex-col gap-5">
              <div className="p-4 rounded-md bg-sombra flex justify-between items-center">
                <div className='flex flex-col'>
                  <h2 className="flex items-center gap-2">
                    <FaRegFilePdf className="text-red-600" size={20} />
                    Livro do curso
                  </h2>
                  <span className="text-gray-600 text-sm pl-6">0 MB</span>
                </div>
                <MdOutlineFileDownload className="hover:text-hightlight cursor-pointer" size={25} />
              </div>

              <div className="p-4 rounded-md bg-sombra flex justify-between items-center">
                <div className='flex flex-col'>
                  <h2 className="flex items-center gap-2">
                    <GoFileZip className="text-hightlight" size={20} />
                    Livro do curso
                  </h2>
                  <span className="text-gray-600 text-sm pl-6">0 MB</span>
                </div>
                <MdOutlineFileDownload className="hover:text-hightlight cursor-pointer" size={25} />
              </div>

              <div className="p-4 rounded-md bg-sombra flex justify-between items-center">
                <div className='flex flex-col'>
                  <h2 className="flex items-center gap-2">
                    <FaRegFilePdf className="text-red-600" size={20} />
                    Livro do curso
                  </h2>
                  <span className="text-gray-600 text-sm pl-6">0 MB</span>
                </div>
                <MdOutlineFileDownload className="hover:text-hightlight cursor-pointer" size={25} />
              </div>

              <div className="p-4 rounded-md bg-sombra flex justify-between items-center">
                <div className='flex flex-col'>
                  <h2 className="flex items-center gap-2">
                    <GoFileZip className="text-hightlight" size={20} />
                    Livro do curso
                  </h2>
                  <span className="text-gray-600 text-sm pl-6">0 MB</span>
                </div>
                <MdOutlineFileDownload className="hover:text-hightlight cursor-pointer" size={25} />
              </div>
            </div>
          </section>
        </section>

        {/* segunda section do grid */}
        <section className="p-4 flex flex-col gap-4 rounded-md shadow-[var(--boxShadow2)] min-w-[300px] md:max-h-[550px]">
           <Profile data={user} />

          <div className="px-4 py-8 rounded-md border border-gray-300">
            <div className="mb-5">
              <h2>Estatísticas</h2>
            </div>

            <div className="flex flex-col gap-5">

              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-gray-600">
                  <IoMdBook className="text-hightlight" size={20} />
                  cursos ativos
                </p>
                <span className="font-semibold">0</span>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-gray-600">
                  <LuCircleCheckBig className="text-green-600" size={20} />
                  Concluidos
                </p>
                <span className="font-semibold">0</span>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center gap-2 text-gray-600">
                  <MdAccessTime className="text-hightlight" size={20} />
                  Horas estudadas
                </p>
                <span className="font-semibold">0h</span>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
