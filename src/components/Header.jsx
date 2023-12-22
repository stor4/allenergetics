import React from 'react'
import HeaderSearch from './HeaderSearch'
import LoginStatus from './LoginStatus'
import Logo from '../icons/Logo'
import '../styles/Header.css'
import HeaderSmallSearch from './HeaderSmallSearch'
import BurgerMenu from './BurgerMenu'

function Header() {

  return (
    <div className='flex justify-center max-w-1920 mx-auto p-4'>
        <div className='h-[112px] w-100 flex justify-between items-center font-Montserrat text-[14px] font-semibold text-white px-0 tablet:px-16 relative' >
            <div className='px-4 desktop:hidden'>
                <BurgerMenu/>
            </div>
            <div>
                <Logo/>
            </div>
            <div className='flex items-center ml-auto'>
                <nav className='hidden desktop:flex whitespace-nowrap'>
                    <div className='flex group hover:color-green'>
                        <div className='mt-1 mr-2 group'>
                            <div className='bg-[black] h-[2px] w-[15px group-hover:bg-green'></div>
                            <div className='ml-[5px] my-1 bg-[black] h-[2px] w-[10px] group-hover:bg-green'></div>
                            <div className='bg-[black] h-[2px] w-[15px] group-hover:bg-green'></div>
                        </div>
                        <span className='nav-item'>Разделы</span>
                    </div>
                    <span className='nav-item'>Библиотека</span>
                    <span className='nav-item'>Видеоблог</span>
                    <span className='nav-item'>О проекте</span>
                    <span className='nav-item'>Контакты</span>
                </nav>
                <div className='ml-[64px] hidden tablet:block desktop:hidden full-screen:block'>
                    <HeaderSearch/>
                </div>
                <div className='mx-4 hidden desktop:block'>
                    <img width="24" height="8" src="https://img.icons8.com/color/48/russian-federation-circular.png" alt="russian-federation-circular"/>
                </div>
                <div className='mx-4'>
                    <img width="24" height="8" src="https://img.icons8.com/material-rounded/24/bababa/shopping-cart.png" alt="shopping-cart"/>
                </div>
                <div className='hidden desktop:block mx-1'>
                    <HeaderSmallSearch/>
                </div>
                <div className='hidden desktop:block'>
                    <LoginStatus/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header