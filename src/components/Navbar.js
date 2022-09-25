import React, { useState } from 'react'
import Nav from './Nav'
import { navItems } from '../helpers/mock'


function Navbar() {
  const [ activeMenu, setActiveMenu ] = useState(false)
  console.log(activeMenu)
  return (
    <div class="max-w-7xl mx-auto">
      <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-between">
          <div class="pt-2">
            <img src="/images/logo.svg" alt="" />
          </div>
          {/**************** desktop ****************/}
          <div class="hidden space-x-4 lg:space-x-6 md:flex">
            {navItems?.map(({title}) => <Nav title={title} key={title}/>)}
          </div>
          <a class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full transition-all cursor-pointer md:block hover:bg-brightRedLight">Get Started</a>
          <button class="flex md:hidden" onClick={() => setActiveMenu(!activeMenu)}>
            <img src="/images/hamburgers.png" class="h-8" alt="" />
          </button>
          {/**************** mobile ****************/}
          {activeMenu && 
            <div className='flex flex-col items-center justify-between absolute bg-white w-full h-[200px] left-0 top-[80px] space-y-1 py-3 transition-all'>
              {navItems?.map(({ title }) => <a href='#'>{title}</a>)}
            </div>
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar