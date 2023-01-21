const Header = () => {
  return (
    <header className='flex w-full items-center justify-between pt-5'>
      <hgroup>
        <h3 className='text-2xl font-semibold text-black'>Jobless</h3>
      </hgroup>
      <nav className='hidden md:inline-block'>
        <ul className='flex gap-x-10 text-base'>
          <li className='font-medium'>Home</li>
          <li>Discover</li>
          <li>Post a Job</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <button className='px-5 py-1 outline outline-1 outline-black/20'>
        <p className='text-base font-semibold'>Sign Up</p>
      </button>
    </header>
  )
}

export default Header
