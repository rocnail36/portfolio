import Image from 'next/image'
import React from 'react'

const Strategies = () => {
  return (
    <div className='flex items-center flex-col mb-[50px]'>

      <h2 className='font-bold text-[48px] inline-block  px-6 rounded-lg text-black mb-12'>
          Proceso de <span className='text-sky-500'>diseño</span> y creacion
        </h2>


      <div className='flex relative justify-center gap-6'>

         <div className='relative z-[1000] border-[1px] border-solid shadow-lg rounded-xl overflow-hidden w-[600px] bg-white'>
          <div className='border-b-[1px] border-solid p-4 hover_section relative z-[100] bg-gray-100'>
            <h3 className='font-semibold text-[1.5rem] text-slate-900'>Identidad de marca</h3>
            <p className='text-slate-500 text-[1.2rem]'>Nos familiarizamos con tu marca y sus objetivos</p>
          </div>
          <div className='border-b-[1px] border-solid p-4 hover_section relative z-[100] bg-gray-100'>
            <h3 className='font-semibold text-[1.5rem] text-slate-900'>Creacion del diseño</h3>
            <p className='text-slate-500 text-[1.2rem]'>Generamos un diseño enfocado en tus objetivos de mercado y tu identidad</p>
          </div>
          <div className='border-b-[1px] border-solid p-4 hover_section relative z-[100] bg-gray-100'>
            <h3 className='font-semibold text-[1.5rem] text-slate-900'>Creacion de pagina</h3>
            <p className='text-slate-500 text-[1.2rem]'>Utilizamos las ultimas tecnologias para hacer tu pagina rapida y accesible</p>
          </div>
          <div className='border-b-[1px] border-solid p-4 hover_section relative z-[100] bg-gray-100'>
            <h3 className='font-semibold text-[1.5rem] text-slate-900'>Posicionamiento</h3>
            <p className='text-slate-500 text-[1.2rem]'>Utilizamos estrategias de seo para posicionar tu pagina</p>
          </div>
         
         </div>
        
         <img className='absolute bottom-[-200px] left-[-400px] z-[50] rotate-45' src={'/blob.svg'} width={600} height={600} alt='blob' />
          <img className='absolute top-[-300px] left-[-400px] z-[50] ' src={'/blob.svg'} width={500} height={300} alt='blob' />
         
        <img className='rounded-2xl z-[5]' src="/ilustracion.jpg" width={450} height={450} alt="" />
        
      </div>

    
    </div>
  )
}

export default Strategies