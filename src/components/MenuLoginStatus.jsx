import React from 'react'

function MenuLoginStatus() {
  return (
    <div className='w-full px-[5%]'>
        <button className='bg-green h-[48px] w-full rounded-xl text-[white]'>Регистрация</button>
        <div className='border-green rounded-xl border-[1px] w-full h-[48px] text-green flex items-center justify-center mt-[15px]'>
           <img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/0f8040/enter-2.png" alt="enter-2"/>
           <span>Вход</span>
        </div>

    </div>
  )
}

export default MenuLoginStatus