"use client";
import { cn } from "@/lib/utils";
import { DotPattern } from "../components/ui/dot-pattern";
import React from 'react'

const Background = () => {
  return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden    md:shadow-xl">

            <DotPattern
                className="w-full h-full opacity-100 -z-50"
            />
    </div>
  
  )
}

export default Background
