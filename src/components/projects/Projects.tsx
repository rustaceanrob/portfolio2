import React, { useEffect, useState } from 'react';
import NavLink from '../home/NavLink';
import { AiOutlineLeft } from 'react-icons/ai';
import Fades from '../utility/Fades';
import { SiBitcoin, SiExpo, SiFirebase, SiGithub, SiNodedotjs, SiPython, SiReact, SiRust, SiTailwindcss, SiTauri, SiTypescript } from 'react-icons/si';
import { GITHUB, GLOBAL_LAYOUT, TRANSITION } from '../../constants';
import { PROJECTS } from '../../constants';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const [tip, setTip] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setTip(false), 3000)
  }, [])
  return (
    <div className={'flex flex-col justify-start items-center w-full font-serif bg-gradient-to-b dark:text-white' + GLOBAL_LAYOUT + TRANSITION}>
      <div className='flex flex-row justify-between items-center w-full p-5 dark:text-white'>
          <div className={'flex flex-row justify-between items-start'}>
              <NavLink delay={100} name={''} link='/' icon={<AiOutlineLeft size={12}/>}/>
          </div>
          <Fades delay={200} style='pr-2'>
              <a href={GITHUB} target='_blank'>
                  <SiGithub className='dark:text-white hover:text-blue-500 duration-200'/>
              </a>
          </Fades>
      </div>
      <div className={'p-5 overflow-scroll space-y-2 pl-5 pr-5 md:pl-20 md:pr-20 lg:pl-40 lg:pr-40 xl:pl-80 xl:pr-80' + TRANSITION} >
        {PROJECTS.map((project, index) => {
          return <ProjectItem delay={500 + 100 * index} project={project}/>
        })}
      </div>
    </div>
  )
}

export default Projects;