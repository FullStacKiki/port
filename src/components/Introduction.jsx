import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Icon } from 'lucide-react'
import { IconCloudDemo } from './Tech'
import ScriptCopyBtn from './ui/script-copy-btn'
import Work, { ScriptCopyBtnDemo } from './Work'
import {Button} from './ui/button'
import BlurFade from "@/components/ui/blur-fade";
import WordPullUp from "@/components/ui/word-pull-up";




const Introduction = () => {
  return (
    <div className=' mx-auto w-1/2 mt-10 flex items-center'>

    <div>
      <BlurFade delay={0}>
        <h1 className='text-3xl font-bold'>Hey, I'm Alex</h1>
      </BlurFade>
      
      <BlurFade delay={0.5}>
      <p className=' mt-5 text-pretty  text-xl'>
   A 16 y/o Italian Front-End Developer, proficient in the React ecosystem. <br />
      Currently working independently and building my  own projects.

      </p>
      </BlurFade>
      <BlurFade delay={1}>
      <Button className="mt-2 text-wrap text-1xl rounded-lg z-99999" variant="default">  Available for Work  </Button>
      </BlurFade>
    </div>
    <BlurFade delay={1.5}>
    <IconCloudDemo />
    </BlurFade>
    </div>

  )
}

export default Introduction