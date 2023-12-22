import {useState} from 'react'
import Logo from '../icons/Logo'
import MenuLoginStatus from './MenuLoginStatus'
import CategoryItem from './CategoryItem'
import "../styles/BurgerMenu.css"

const categories = {
    'e91d62' : 'Энергия ветра',
    'f44236' : 'Солнечная энергия',
    '643bb3' : 'Гидроэнергетика',
    '2295f0' : 'Энергия приливов',
    '01bbd4': 'Энергия волн',
    '019587': 'Геотермальная энергия',
    '4dae4d': 'Рассеянная тепловая энергия',
    '8cc737': 'Энергия биомассы',
    'fceb39': 'Энергия ветра',
    'ff9800': 'Солнечная энергия',
    'c931e4': 'Гидроэнертетика',
    'bfc3de': 'Энергия приливов' 
}

function BurgerMenu() {
    const [menu, toggleMenu] = useState(false)

    return (
        <>
        {!menu && (
                <div className='cursor-pointer' onClick={() => toggleMenu(!menu)}>
                    <div className='h-[2px] w-[17px] bg-[black]'></div>
                    <div className='h-[2px] w-[17px] bg-[black] my-[4px]'></div>
                    <div className='h-[2px] w-[17px] bg-[black]'></div>
                  </div>
        )}

        {menu && (
            <div className='bg-[black] w-full h-full fixed bg-opacity-50 top-0 left-0 transition-opacity duration-300'>
                <div className='menu-container bg-[white] h-full w-[300px] overflow-y-auto transform translate-x-0 transition-transform duration-300'>
                    <div className='flex pl-[4px] pt-[33.5px]'>
                     <div className='z-10 pt-5 pl-[5px] mx-2 pr-1 cursor-pointer' onClick={() => toggleMenu(!menu)}>
                        <span className='h-[2px] w-[13px] relative top-[0px] block bg-[black] rotate-45'></span>
                        <span className='h-[2px] w-[13px] relative bottom-[1px] block bg-[black] -rotate-45'></span>
                     </div>
                     <div className='pl-[7px] '>
                        <Logo/>
                     </div>
                    </div>
                    <div className='mt-[30px] pb-[30px]'>
                        <MenuLoginStatus/>
                    </div>
                    <div className='pl-[15px] pt-[15px] border-t-[1px] border-[#f0f0f0] border-b-[1px] pb-[15px]'>
                        <h2 className='text-[26px]'>Разделы</h2>
                        {Object.entries(categories).map(([color, name]) => (
                            <CategoryItem key={color} color={color} name={name}/>
                        ))}
                    </div>
                    <nav className='flex flex-col ml-[15px] border-b-[1px] border-[#f0f0f0] '>
                        <span className='my-[10px]'>Библиотека</span>
                        <span className='my-[10px]'>Видеоблог</span>
                        <span className='my-[10px]'>О проекте</span>
                        <span className='my-[10px]'>Контакты</span>
                    </nav>
                    <div className='w-full px-[5%]'>
                        <div className='w-full h-[48px] flex items-center border-[1px] border-green my-[15px] rounded-xl relative'>
                            <img className='mx-2' width="24" height="8" src="https://img.icons8.com/color/48/russian-federation-circular.png" alt="russian-federation-circular"/>
                            <span className='text-green font-[600]'>Русский</span>
                            <img className='absolute right-2' width="10" height="30" src="https://img.icons8.com/ios-glyphs/30/0f8040/sort-down.png" alt="sort-down"/>

                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default BurgerMenu