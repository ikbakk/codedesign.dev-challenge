import { FiDownload } from 'react-icons/fi'
import { IoMdArrowForward } from 'react-icons/io'

function BuyBook() {
  return (
    <section>
      <div className='flex flex-col items-center p-4 py-10 pt-10 font-dm-sans md:px-28'>
        <div className='flex max-w-4xl flex-col items-center space-y-4 text-center'>
          <p className='rounded-full bg-[#C6F4F8] px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary'>
            Beli Buku
          </p>
          <h2 className='text-2xl font-semibold text-dark md:text-4xl'>
            Anda ingin segera memesan buku ini?
          </h2>
          <p className='text-lg text-dark/80'>
            Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
          </p>
        </div>
        <div className='flex items-center justify-between space-x-10 py-5 md:justify-start md:py-16'>
          <div className='flex items-center justify-center space-x-3'>
            <div className='-mt-5'>
              <FiDownload size={24} />
            </div>
            <div>
              <h4 className='uppercase'>sudah terjual</h4>
              <h4>501,234+</h4>
            </div>
          </div>
          <div className='flex items-center space-x-3 rounded-full bg-primary px-2 py-4 text-white shadow-lg shadow-primary sm:px-5 sm:py-4'>
            <button className=''>Beli Sekarang</button>
            <div className='rounded-full outline'>
              <IoMdArrowForward size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyBook
