import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div className='mx-auto bg-gray-100  rounded-3xl shadow-md border-[1px] justify-items-center border-solid  pt-[70px]  w-[98%]  min-h-[600px] max-h-[900px] mb-12  items-center grid grid-cols-hero py-[20px]  px-[60px] relative overflow-hidden'>

     <div className='w-[100%] self-start animate-left'>
     <h1 className='font-bold uppercase text-[60px] mb-8'> <span className='bg-sky-400 px-2 rounded-md'>diseñamos</span> tu pagina web</h1>
     <p className='font-normal uppercase text-[1.6rem] mb-12'>Desde webs de una sola pagina hasta sistemas complejos lleva tu negocio al siguiente nivel con nuesto servicio especializado</p>
     <button className='bg-sky-600 text-white px-[30px] py-[10px] upper rounded-2xl font-semibold text-[1.2rem]'>contactanos</button>
     </div>

     <div className='h-[100%] relative'>
      <img className='z-[2] relative animate-flow'  src="/hero.svg" width={400} height={400} alt="hero" />
      <img className='relative z-[2] animate-flow' src="/ilustration2.svg" width={200} height={200} alt="web" />
      <div className='absolute w-[200px] h-[200px] bg-sky-400 rounded-[50%] top-[60%] z-[0] right-[100px]' ></div>
     </div>


     
     <div className='absolute w-[250px] h-[250px] bg-sky-400 rounded-[50%] bottom-[120px] z-[0] right-[-20px]' ></div>

    </div>
 
  )
}
