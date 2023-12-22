import React from 'react'
import SearchIcon from '../icons/searchIcon'

function HeaderSearch() {
  return (<>
    <div className='h-[48px] w-[424px] bg-[#fcfcfc] rounded-lg border-gray border-[1px] flex'>
        <div className='mt-[8px] ml-[8px]'>
        <SearchIcon width={30} height={30} />
        </div>
        <input className='ml-[15px] w-[100%] bg-[transparent]' placeholder='Поиск по сайту'></input>
    </div>
    </>
  )
}

export default HeaderSearch