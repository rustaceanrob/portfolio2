import React from 'react'
import { Stack } from './Project'
import { SiBitcoin, SiExpo, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

type Props = {
    tool: Stack
}

const ProjectIcon = ({ tool }: Props) => {
    const render = (): React.ReactNode => {
        if (tool === 0) {
            return <SiReact/>
        } else if (tool === 1) {
            return <SiReact/>
        } else if (tool === 2) {
            return <SiExpo/>
        } else if (tool === 3) {
            return <SiTypescript/>
        } else if (tool === 4) {
            return <SiTailwindcss/>
        } else if (tool === 5) {
            return <SiNodedotjs/>
        } else if (tool === 6) {
            return <SiBitcoin/>
        } 
    }
    return (render())
}

export default ProjectIcon