import React, { useState } from 'react'
import Fades from '../utility/Fades'
import Project from './Project'
import { FaArrowDown } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import ProjectIcon from './ProjectIcon'

type Props = {
    delay: number,
    project: Project,
}

const ProjectItem = ({ delay, project }: Props) => {
    return (
        <Fades delay={delay} style={`flex flex-col justify-center items-start w-full px-5 py-5 border rounded-sm dark:border-zinc-700 border-zinc-200 `}>
            <div className='flex flex-row justify-between items-center pb-2 w-full'>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='pr-2 font-extralight '>{project.name}</h1>
                    <div className='flex flex-row  space-x-2'>
                        {
                            project.stack.map((id) => {
                                return <ProjectIcon tool={id}/>
                            })
                        }
                    </div>
                </div>
                <a href={'https://github.com/xorizon/' + project.link} target='_blank'>
                    <SiGithub className='hover:text-blue-500 duration-200'/>
                </a>
            </div>
            <p className='text-xs pt-2'>{project.desc}</p>
        </Fades>
    )
}

export default ProjectItem