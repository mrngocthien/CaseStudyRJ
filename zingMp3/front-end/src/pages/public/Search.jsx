import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

const Search = () => {
  const [isActive, setIsActive] = useState(0)
  return (
    <div className='px-[59px]'>
      <div className='flex gap-4 h-[50px] mb-7 items-center border-b border-gray-600'>
        <span className='text-[24px] font-bold border-r border-gray-600 pr-4'>Kết quả tìm kiếm</span>
        <span 
          onClick={() => setIsActive(0)} 
          className={`text-gray-300 font-semibold pr-2 cursor-pointer hover:text-white ${isActive === 0 && 'text-light-violet'}`}>TẤT CẢ</span>
        <span 
          onClick={() => setIsActive(1)} 
          className={`text-gray-300 font-semibold px-3 cursor-pointer hover:text-white ${isActive === 1 && 'text-light-violet'}`}>BÀI HÁT</span>
        <span 
          onClick={() => setIsActive(2)} 
          className={`text-gray-300 font-semibold px-3 cursor-pointer hover:text-white ${isActive === 2 && 'text-light-violet'}`}>PLAYLIST/ALBUM</span>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Search