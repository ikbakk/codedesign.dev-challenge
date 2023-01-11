import ellipse from '../assets/ellipse_1.svg'
import book from '../assets/book.png'
import { FiDownload } from 'react-icons/fi'
import { IoMdArrowForward } from 'react-icons/io'

function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center p-2  pt-20 font-dm-sans md:flex-row md:justify-center md:px-28 xl:pt-32'>
      <div className='bg absolute left-0 top-0 z-[0] h-full w-full bg-dark'></div>
      <div className='absolute right-0 top-0 z-[0] overflow-hidden'>
        <img
          className='w-40 translate-x-[1rem] translate-y-[-1rem] md:w-full md:translate-x-[4rem] md:translate-y-[-10rem] '
          src={ellipse}
          alt='/'
        />
      </div>
      <div className='prose z-[1]'>
        <div>
          <h3 className='text-3xl tracking-wide text-white'>
            Sebuah framework CSS untuk developer yang memiliki phobia terhadap
            CSS
          </h3>
          <p className='justify-text text-white/80'>
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
            diakhiri dengan membangun sebuah website yang responsive dengan
            Tailwind CSS.
          </p>
        </div>
        <div className='flex items-center justify-between space-x-10 md:justify-start'>
          <div className='flex items-center space-x-3 rounded-full bg-primary px-2 py-4 text-white shadow-lg shadow-primary sm:px-5 sm:py-4'>
            <button className=''>Beli Sekarang</button>
            <div className='rounded-full outline'>
              <IoMdArrowForward size={18} />
            </div>
          </div>
          <div className='flex items-center justify-center space-x-3'>
            <div className='-mt-5'>
              <FiDownload size={24} />
            </div>
            <div>
              <h4 className='uppercase'>sudah terjual</h4>
              <h4>501,234+</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='z-[2] w-72 md:scale-125 lg:scale-150'>
        <img src={book} alt='' />
      </div>
    </div>
  )
}

export default Home
