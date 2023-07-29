import { GITHUB, GLOBAL_LAYOUT, HOME, TRANSITION } from '../../constants';
import Fades from '../utility/Fades';
import NavLink from './NavLink';
import { FaLocationArrow } from 'react-icons/fa';
import { SiGithub, SiLinkedin, SiYoutube , SiBitcoin, SiExpo, SiFirebase, SiNodedotjs, SiPython, SiReact, SiRust, SiTailwindcss, SiTauri, SiTypescript, SiVisualstudiocode } from 'react-icons/si';

const Home = () => {

    const renderBar = (): React.ReactNode => {
        return (<>
            <div className='flex flex-row justify-between items-center w-full p-5 dark:text-white border-b dark:border-zinc-700 border-zinc-200 '>
                <div className={'flex flex-row justify-between items-start space-x-5'}>
                    <NavLink delay={100} name={'Projects'} link='projects' icon={<></>}/>
                    <NavLink delay={200} name={'Motivation'} link='motivations' icon={<></>}/>
                    <NavLink delay={300} name={'About'} link='about' icon={<></>}/>
                </div>
                <Fades delay={400} style='pr-2'>
                    <a href={GITHUB} target='_blank'>
                        <SiGithub className='dark:text-white hover:text-blue-500 duration-200'/>
                    </a>
                </Fades>
            </div>
        </>)
    }

    return (
        <div className={'flex flex-col justify-start items-start font-serif bg-gradient-to-b ' + GLOBAL_LAYOUT + TRANSITION}>
            {renderBar()}
            <div className={'flex flex-col justify-center items-center pl-15 pr-15 pl-20 pr-20 md:pl-40 md:pr-40 lg:pl-80 lg:pr-80 w-full pt-10 xl:pt-15' + TRANSITION}>
                <Fades delay={500} style='pb-5'>
                    <h1 className='text-xl font-extrabold'>Welcome to my portfolio</h1>
                </Fades>
                <Fades delay={600} style={'flex flex-col space-y-5'}>
                    {/* <div className='border rounded-full px-10 py-10'></div> */}
                    <div className='flex flex-row justify-center items-center space-x-4'>
                        <a href='https://linkedin.com/in/robnetzke' target='_blank'>
                            <SiLinkedin className='hover:text-blue-500 duration-200' size={20}/>
                        </a>
                        <a href='https://www.youtube.com/@mostly.software' target='_blank'>
                            <SiYoutube className='hover:text-red-500 duration-200' size={25}/>
                        </a>
                        <a href='https://github.com/xorizon' target='_blank'>
                            <SiGithub className='hover:text-blue-500 duration-200' size={20}/>
                        </a>
                    </div>
                </Fades> 
                <Fades delay={600} style={'flex flex-col space-y-10 pb-5 pt-5'}>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='flex flex-row justify-center items-center'>
                            {/* <FaLocationArrow className='dark:text-white' color='white' size={8}/> */}
                            <h1 className=' text-xs'>San Diego, California</h1>
                        </div>
                    </div>
                </Fades> 
                <div className={'flex flex-row justify-center items-center w-full space-x-4 pb-5'}>
                    <Fades delay={800} style=''>
                        <SiReact size={15}/>
                    </Fades>
                    <Fades delay={810} style=''>
                        <SiTailwindcss size={15}/>
                    </Fades>
                    <Fades delay={820} style=''>
                        <SiTypescript size={15}/>
                    </Fades>
                    <Fades delay={830} style=''>
                        <SiNodedotjs size={15}/>
                    </Fades>
                    <Fades delay={840} style=''>
                        <SiExpo size={15}/>
                    </Fades>
                    <Fades delay={850} style=''>
                        <SiTauri size={15}/>
                    </Fades>
                    <Fades delay={860} style=''>
                        <SiBitcoin size={15}/>
                    </Fades>
                    <Fades delay={870} style=''>
                        <SiRust size={15}/>
                    </Fades>
                    <Fades delay={880} style=''>
                        <SiPython size={15}/>
                    </Fades>
                </div>   
                <Fades delay={700} style={'flex flex-col border-t dark:border-zinc-700 border-zinc-200 pt-5 w-full'}>
                    <p className='font-extralight text-sm xl:text-lg'>{HOME}</p>
                </Fades>       
            </div>
        </div>
    )
}

export default Home;