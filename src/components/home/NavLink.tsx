import React from 'react'
import Fades from '../utility/Fades';
import { useNavigate } from 'react-router-dom';
import { TRANSITION } from '../../constants';

type Props = {
    delay: number,
    link: string,
    icon: React.ReactNode,
    name: string
}
//border dark:border-zinc-700 border-zinc-200 rounded-sm py-1 px-2

const NavLink = ({ delay, link, icon, name }: Props) => {
    const navigate = useNavigate()
    return (
        <Fades delay={delay} style={`flex w-full`}>
            <button onClick={() => navigate(link)} className={'flex flex-row justify-center items-center hover:animate-pulse' + TRANSITION}>
                {icon}
                <h1 className=''>{name}</h1>
            </button>
        </Fades>
        
  )
}

export default NavLink;