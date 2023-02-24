import React, {useState} from 'react'

function Navbar() {
  const [isDarkMode, setDarkMode] = React.useState(true)
  return (
    <div className='bg-black'>
      <div className="navbar bg-base-100 px-20">
        <div className="navbar-start">
          <div className="dropdown">
            
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 ">
              <li><a className='text-base'>Film</a></li>
              <li><a className='text-base'>Tv</a></li>
              <li><a className='text-base'>Podcast</a></li>
              <li><a className='text-base'>Merchandise</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <img src="assets/Images/Navbar/Logo.jpeg" alt="" className='h-12 rounded-md' />
        </div>
        <div className="navbar-end">
          <img src={isDarkMode ? "assets/Images/Navbar/Moon.svg " : " assets/Images/Navbar/Sun.svg "} alt="image" className="w-6 h-6 mr-4" />
          <label className="relative inline-flex items-center ">
            <input
              type="checkbox"
              className="hidden"
              checked={isDarkMode}
              onChange={() => setDarkMode(!isDarkMode)}
            />
            <span className={`toggle-slider rounded-full w-12 h-6 shadow-inner ${isDarkMode ? 'bg-slate-400' : 'bg-white'
              }`}></span>
            <span
              className={`toggle-button absolute w-4 h-4 my-1 rounded-full bg-black shadow inset-y-0 transition-all duration-200 ease-in-out ${isDarkMode ? 'right-1 ' : 'left-1'
                }`}
            ></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
