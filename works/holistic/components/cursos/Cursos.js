import React from 'react'
import { AiOutlineLaptop } from 'react-icons/ai'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { GiThreeFriends } from 'react-icons/gi'
import { BiBookBookmark } from 'react-icons/bi'
import { MdOutlineDomainVerification } from 'react-icons/md'
import { RiParentLine } from 'react-icons/ri'


import { FAQ } from '../tienda/data'
import { Faq } from './Faq'





export const Cursos = () => {

    const size = 116



  return (
    <div className='flex flex-col  items-center py-20 '>
        <h1 className='text-center text-4xl  mt-8 font-medium brak-words leading-8 px-4 md:text-6xl dark:text-white text-lightBlack'>Aprende <span className='text-lightAccent-300 dark:text-darkAccent-300'>Biodescodificación</span></h1>
        <div className='
            flex
            flex-wrap
            items-center
            mt-10
            text-white
            bg-gradient-to-r from-lightAccent-200 to-darkAccent-200
            dark:from-darkAccent-100   dark:to-darkTitles
            md:w-10/12
            h-4/6
            md:h-[600px]
            py-5
            md:px-40
            mx-5
            justify-between
            md:py-0
            md:flex-row
            md:text-left
            px-4
            text-center
            flex-col
            md:gap-20
            gap-8
            '>

            <h1 className='
            text-6xl break-words
              md:text-9xl font-bold h-full flex flex-col  md:w-[540px] justify-center items-center '>
                Psico Holistica 2022
            </h1>
            <div className='
              gap-5 md:gap-8 text-center 
            flex flex-col  justify-center items-center '>
                <p className='text-4xl font-bold'>Formación 100% ONLINE</p>
                <div className='flex gap-4 md:gap-12 flex-wrap justify-center' >
                    <button className='px-10 py-4 border-2 rounded-sm font-bold  text-xl
                    border-white 
                    text-white 
                    hover:bg-white
                    hover:text-lightBlack

                    ease-linear duration-300 
                    '>Compartí</button>

                    <button className='px-10 py-4 border-2 rounded-sm font-bold text-xl
                    
                    border-none
                    bg-white 
                    text-lightBlack 
                    hover:dark:bg-darkAccent-200
                    hover:dark:text-lightAccent-300
                    hover:bg-lightAccent-200
                    hover:text-white
                    ease-linear duration-300 
                    '>Inscribite</button>
                </div>
            </div>


        </div>
            <h2 className=' text-center text-2xl md:text-4xl mt-8 font-medium brak-words leading-67 px-5 dark:text-white text-lightBlack' >Un viaje a tu interior para <span className='text-lightAccent-200 dark:text-darkAccent-200'>sanar tu vida</span> y ser terapeuta de <span className='text-lightAccent-200 dark:text-darkAccent-200' >Biodescodificación</span></h2>

            <div className='
            mt-10
            text-white
            bg-gradient-to-r from-darkAccent-200 to-lightAccent-200
            dark:from-lightAccent-200    dark:to-darkAccent-100
            md:w-10/12
            py-20
            md:px-52
            mx-5
            '>
                <ul className='flex flex-wrap w-full justify-center items-center font-medium text-center text-3xl md:gap-x-48 gap-y-10
                '>
                    <li className='flex items-center flex-col justify-center w-[250px] '>
                        <AiOutlineLaptop size={size} />
                        <div className='leading-8 '>
                            <p>100% <br/> Virtual</p>
                            
                        </div>
                    </li>
                    <li className='flex items-center flex-col justify-center w-[250px]'>
                        <RiParentLine size={size}/>
                        <div className='leading-8 ' >
                            <p>Seguimiento <br/> Personalizado</p>
                        </div>
                    </li>
                    <li className='flex items-center flex-col justify-center w-[250px]'>
                        <HiOutlineClipboardList size={size}/>
                        <div className='leading-8 '>
                            <p>Ejercicios <br/> individuales</p>
                        </div>
                    </li>
                    <li className='flex items-center flex-col justify-center w-[250px]'>
                        <GiThreeFriends size={size}/>
                        <div className='leading-8 '>
                            <p>Prácticas <br/> colaborativas</p>
                        </div>
                    </li>
                    <li className='flex items-center flex-col justify-center w-[250px]'>
                        <BiBookBookmark size={size}/>
                        <div className='leading-8 '>
                            <p>Acceso a todo el material de estudio</p>
                  
                        </div>
                    </li>
                    <li className='flex items-center flex-col justify-center w-[250px]'>
                        <MdOutlineDomainVerification size={size}/>
                        <div className='leading-8 '>
                            <p>Certificado de formación</p>
                        </div>
                    </li>

                </ul>
            </div>

            <h2 className='text-center text-2xl md:text-4xl mt-8 font-medium brak-words leading-67 px-5 dark:text-white text-lightBlack'>Capacitate y expande tu <span className='text-lightAccent-200 dark:text-darkAccent-200'>camino espiritual</span></h2>

            <section className='flex justify-center gap-10 md:gap-40 mb-12 flex-wrap w-full my-12 ' >
                <div>
                <h2 className='text-3xl mb-5 text-center font-medium dark:text-white text-lightBlack '>Curso <span className='text-lightAccent-200 dark:text-darkAccent-200'>Biodescodificación</span></h2>
                <article className='md:h-[600px] md:w-[500px] w-[350px] p-5 bg-cardColors '>
                    <div className='border-goldCard border-2 h-full py-1 px-6 justify-between flex flex-col'>

               
                    <h1 className="md:text-8xl text-6xl font-medium text-white ">4000$<span className='font-medium text-3xl'> /mes</span> </h1>

                    <ul className='h-96 flex flex-col justify-center gap-2 md:gap-5 text-white '>
                    
                        <li>
                            <p className='text-xl'>💻 Clases grabadas </p>
                        </li>
                            
                        <li>
                            <p className='text-xl'>🏅 Contenido de calidad </p>
                        </li>

                        <li>
                            <p className='text-xl'>🧑‍🏫 Profesionales con amplia experiencia</p>
                        </li>

                        <li>
                            <p className='text-xl'>🚀 Nuevo contenido cada semana</p>
                        </li>

                        <li>
                            <p className='text-xl'>🧑‍🤝‍🧑 Acceso a la comunidad PsicoHolistica</p>
                        </li>

                        <li>
                            <p className='text-xl'>🧑‍🎓 Certificado al completar el curso</p>
                        </li>
                                
                    </ul>

                    <button className='px-5 py-2 bg-darkAccent-200 text-3xl font-medium mb-6 text-white'>Empezar</button>
                    </div>
                </article>
                </div>

                <div className=''>
                <h2 className='text-3xl mb-5 text-center dark:text-white text-lightBlack font-medium'>Taller <span className='text-lightAccent-200 dark:text-darkAccent-200'>Numerología</span></h2>
                <article className='md:h-[600px] md:w-[500px]  p-5 bg-cardColors w-[350px] '>
                    <div className='border-goldCard border-2 h-full py-1 px-6 justify-between flex flex-col'>

               
                    <h1 className="md:text-8xl text-6xl font-medium text-white ">5000$<span className='font-medium text-3xl'> /taller</span> </h1>

                    <ul className='h-96 flex flex-col justify-center gap-2 md:gap-5 text-white '>
                    
                        <li>
                            <p className='text-xl'>💻 Clases grabadas </p>
                        </li>
                            
                        <li>
                            <p className='text-xl'>🏅 Contenido de calidad </p>
                        </li>

                        <li>
                            <p className='text-xl'>🧑‍🏫 Profesionales con amplia experiencia</p>
                        </li>

                        <li>
                            <p className='text-xl'>🚀 Nuevo contenido cada semana</p>
                        </li>

                        <li>
                            <p className='text-xl'>🧑‍🤝‍🧑 Acceso a la comunidad PsicoHolistica</p>
                        </li>

                        <li>
                            <p className='text-xl'>🧑‍🎓 Certificado de asistencia al taller</p>
                        </li>
                                
                    </ul>

                    <button className='px-5 py-2 bg-darkAccent-200 text-3xl font-medium mb-6 text-white'>Empezar</button>
                    </div>
                </article>
                </div>

            </section>

            <div>
                <h2 className='text-7xl dark:text-white text-lightBlack font-medium'>Preguntas frecuentes</h2>
                <div className='md:w-[1400px] mt-5 flex flex-col gap-2'>
                    {
                        FAQ.map((question, i) => <Faq key={question.id} question={question} i={i} />)
                    }

                </div>
            </div>
        
    </div>
  )
}
