import React from 'react'

function LoginStatus({login}) {
    if (login) {
        return(
            <div>

            </div>
        )
    }

    else {
        return(
            <div className='flex'>
                <div className='flex mx-4'>
                    <span className='mt-[16px] mr-1'>
                      <img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/0f8040/enter-2.png" alt="enter-2"/>
                    </span>
                    <button className='text-green'>Войти</button>
                </div>
                <button className='bg-green h-[48px] w-[176px] rounded-xl text-[white] border-green border-[1px] hover:bg-[white] hover:text-green transition duration-300 ease-in-out'>Регистрация</button>
            
            </div>
        )
    }

    
}

export default LoginStatus