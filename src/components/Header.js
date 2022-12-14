import React, { useContext } from 'react'
import { AppConfig } from './context/AppConfig'

export const Header = () => {
  const {loggedinstatus,connectwallet} = useContext(AppConfig);
  // console.log(loggedinstatus)
  return (
    <div className='flex flex-row justify-between bg-[#984063]'>
        <div className='flex flex-col font-bold text-3xl ml-3 justify-center'>RENT_IT</div>
    {!loggedinstatus && <button onClick={connectwallet} className='m-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 '>CONNECT WALLET</button>}
    {loggedinstatus && <div className='m-5 font-mono text-black text-2xl animate-pulse'>connected</div>}
    
    </div>
  )
}
