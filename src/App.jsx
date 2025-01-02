import { useState } from 'react'
import Introduction from './components/Introduction'
import DotPattern from './components/ui/dot-pattern'
"use client";
import { cn } from "@/lib/utils";
import Marquee from "./components/ui/marquee";
import { MarqueeDemo } from './components/Project';
import BlurFade from './components/ui/blur-fade';
import Skills from './components/Skills';

function App() {

  return (
    <>
        <DotPattern height={50} width={50} className="w-full mb-14 h-full opacity-100 -z-50" />
      <Introduction className="z-99 ml-32 "/>
      <BlurFade delay={1.0}>
        <h1 className='text-center text-3xl font-bold -mb-24'>Skills:</h1>
        <MarqueeDemo className="pt-0"/>
      </BlurFade>
      
  
    </>
  )
}

export default App
