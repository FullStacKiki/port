import ScriptCopyBtn from "@/components/ui/script-copy-btn";



import React from 'react'

export function ScriptCopyBtnDemo() {
    const customCommandMap = {
      npm: "Contact me",
      yarn: "yarn shadcn add button",
      pnpm: "pnpm dlx shadcn@latest add button",
      bun: "bun x shadcn@latest add button",
    };
}
const Work = () => {
  return (
   
    <>
      <ScriptCopyBtn
        showMultiplePackageOptions={true}
        codeLanguage="shell"
        lightTheme="nord"
        darkTheme="vitesse-dark"
        commandMap={customCommandMap}
      />
    </>
   
  )
}

export default Work

