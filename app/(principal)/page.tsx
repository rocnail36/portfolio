import { Hero } from '@/components/principal/Hero'
import Strategies from '@/components/principal/Strategies'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
   <div className='max-w-7xl m-auto'>
    <Hero/>
    <Strategies/>
   </div>
)
}

export default page
