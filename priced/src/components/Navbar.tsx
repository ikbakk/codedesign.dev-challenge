function Navbar() {
  return (
    <header className='w-full font-dm-sans text-white'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-lg font-bold italic'>Strawrage</h3>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex md:space-x-5 lg:space-x-20'>
            <li className='font-semibold text-white/80'>Home</li>
            <li className='font-semibold text-white/80'>Product</li>
            <li className='font-bold text-white '>Pricing</li>
            <li className='font-semibold text-white/80'>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className='rounded-lg bg-[#160E4B] p-2'>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
