import { GITHUB, GLOBAL_LAYOUT, MOTIVATION_1, MOTIVATION_2, TRANSITION } from '../../constants'
import NavLink from '../home/NavLink'
import Fades from '../utility/Fades'
import { SiGithub } from 'react-icons/si'
import { AiOutlineLeft } from 'react-icons/ai'

const Motivations = () => {
  return (
    <div className={'flex flex-col justify-start items-start font-serif bg-gradient-to-b dark:text-white' + GLOBAL_LAYOUT + TRANSITION}>
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
      <div className={'flex flex-col justify-start items-start pl-5 pr-5 md:pl-20 md:pr-20 lg:pl-40 lg:pr-40 xl:pl-80 xl:pr-80 w-full' + TRANSITION}>
        <Fades delay={500} style='pb-5'>
          <h1 className='text-lg font-semibold'>Why I Code</h1>
        </Fades>
        <Fades delay={600} style='border-t dark:border-zinc-700 border-zinc-200 pt-5 pb-5'>
          <p className='font-extralight text-sm xl:text-lg'>{MOTIVATION_1}</p>
        </Fades>
        <Fades delay={700} style='border-t border-b dark:border-zinc-700 border-zinc-200 pt-5 pb-5'>
          <p className='font-extralight text-sm xl:text-lg'>{MOTIVATION_2}</p>
        </Fades>
      </div>
    </div>
  )
}

export default Motivations