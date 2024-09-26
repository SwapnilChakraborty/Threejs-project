import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import {Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import HpContainer from "./HpContainer"



const App = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-sky-900  to-blue-200'>
      <div className='absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 z-10 '>
      <h3 className="text-7xl tracking-tighter font-[700]  hover:underline cursor-pointer ">Welcome to Hp Laptops </h3>
      <p className='text-3xl shadow-2xl text-opacity-10 text-gray-200 hover:underline cursor-pointer '>Scroll to see more </p></div>
     
    <Canvas camera={{fov :12, position:[0,-20,220]}}>
     

     <Environment files ={[
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr"]} />
     <ScrollControls pages={3} >
     
     
     
     <HpContainer />
     
     </ScrollControls>

     
      

    </Canvas>
   </div>

  )
}

export default App