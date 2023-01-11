import { TfiMenu } from 'react-icons/tfi'

interface MenuItems {
  name: string
  id: string
}

function Navbar() {
  const menus: MenuItems[] = [
    { name: 'Top', id: '/' },
    { name: 'For Everyone', id: '#for' },
    { name: 'Benefit', id: '#benefit' },
    { name: 'Preview', id: '#preview' },
    { name: 'Penulis', id: '#penulis' }
  ]
  return (
    <div className='navbar fixed bg-dark py-4 px-4 font-dm-sans md:py-8 md:px-8 lg:px-16'>
      <div className='navbar-start space-x-2 '>
        <div className='block text-white md:hidden'>
          <TfiMenu size={24} />
        </div>
        <div className='placeholder avatar hover:cursor-pointer'>
          <div className='w-8 rounded-full bg-primary text-white'>
            <span className='text-md mt-1 font-serif'>M</span>
          </div>
        </div>
        <h3 className='font-semibold tracking-wide text-white hover:cursor-pointer'>
          The Malaka
        </h3>
      </div>
      <div className='navbar-center hidden md:flex'>
        <ul className='flex flex-row space-x-5 lg:space-x-8 xl:space-x-10'>
          {menus.map((menu) => (
            <a className='text-white' key={menu.id} href={menu.id}>
              <li>{menu.name}</li>
            </a>
          ))}
        </ul>
      </div>
      <div className='navbar-end space-x-2'>
        <button className='mt-1 flex items-center rounded-full bg-white px-3 py-1 text-dark hover:bg-white/80 active:bg-white/60'>
          <span className='mt-[0.15rem] font-semibold'>Download</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
