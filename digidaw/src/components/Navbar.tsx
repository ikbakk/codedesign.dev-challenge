import { FC, ReactElement } from 'react'

const Navbar: FC = (): ReactElement => {
  return (
    <header className='flex w-full items-center justify-between py-2'>
      <div className='flex items-center md:space-x-20'>
        <h3 className='text-2xl font-semibold text-white'>digidaw</h3>
        <nav className='hidden space-x-10 md:inline-block'>
          <a href='#' className='text-base text-white'>
            Home
          </a>
          <a href='#' className='text-base text-white/80'>
            Discover Elements
          </a>
          <a href='#' className='text-base text-white/80'>
            Pricing
          </a>
          <a href='#' className='text-base text-white/80'>
            Contact Us
          </a>
        </nav>
      </div>
      <button className='rounded-full bg-white px-4 py-2'>
        <p className='font-semibold'>Sign In</p>
      </button>
    </header>
  )
}

export default Navbar
