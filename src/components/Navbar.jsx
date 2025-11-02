import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scroll ke bawah → hide
        setShow(false)
      } else {
        // scroll ke atas → show
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 bg-[rgba(144,0,22,0.8)] py-0 shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className='flex items-center justify-between mx-4 md:mx-8 lg:mx-8 px-4 py-2 sm:px-6 sm:py-0'>
        {/* logo section */}
        <div className='flex items-center'>
          <Link to={'/'} className='flex items-center gap-2'>
            <img
              src="/assets/logoTaggallery.png"
              alt='Logo Perusahaan'
              className='w-[75px] h-[50px] object-cover'
            />
            <span className="text-white font-bold text-xl tracking-wide">
              TAGGALLERY
            </span>
          </Link>
        </div>

        {/* Hamburger menu for mobile and tablet */}
        <div className='lg:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label='Toggle menu'
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* menu section */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto absolute lg:static top-14 left-0 bg-[rgba(144,0,22,0.8)] lg:bg-transparent shadow-md lg:shadow-none`}>
          <ul className='flex flex-col lg:flex-row lg:ml-130 lg:gap-8 items-center text-[16px] font-semibold text-white p-4 lg:p-0'>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `${isActive ? 'border-b-3 transition-all' : 'text-white'} cursor-pointer py-2 lg:py-0 w-full lg:w-auto text-center`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={'/profile'}
              className={({ isActive }) =>
                `${isActive ? 'border-b-3 transition-all' : 'text-white'} cursor-pointer py-2 lg:py-0 w-full lg:w-auto text-center`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Profile</li>
            </NavLink>
            <NavLink
              to={'/service'}
              className={({ isActive }) =>
                `${isActive ? 'border-b-3 transition-all' : 'text-white'} cursor-pointer py-2 lg:py-0 w-full lg:w-auto text-center`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Services</li>
            </NavLink>
            <NavLink
              to={'/gallery'}
              className={({ isActive }) =>
                `${isActive ? 'border-b-3 transition-all' : 'text-white'} cursor-pointer py-2 lg:py-0 w-full lg:w-auto text-center`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Gallery</li>
            </NavLink>
            <NavLink
              to={'/articles'}
              className={({ isActive }) =>
                `${isActive ? 'border-b-3 transition-all' : 'text-white'} cursor-pointer py-2 lg:py-0 w-full lg:w-auto text-center`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Articles</li>
            </NavLink>
            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                `${isActive ? 'border-b-3 transition-all' : 'text-white'} cursor-pointer py-2 lg:py-0 w-full lg:w-auto text-center`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar