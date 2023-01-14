import image from '../assets/selainitu.png'
import { FiLayout, FiArrowRight } from 'react-icons/fi'
import { MdChatBubbleOutline } from 'react-icons/md'

function BenefitLower() {
  return (
    <div className='flex items-center justify-center p-4 py-10 pt-10 font-dm-sans md:px-28'>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='md:basis-1/2'>
          <div>
            <img className='' src={image} alt='/' />
          </div>
        </div>
        <div className='md:basis-1/2'>
          <p className='py-2 text-sm uppercase tracking-widest text-primary'>
            - Selain itu
          </p>
          <h3 className='py-2 text-2xl text-dark md:text-4xl'>
            Buku dengan studi kasus nyata, juga komunitas yang ramah
          </h3>
          <p className='py-2 text-justify leading-relaxed tracking-wider text-dark/80'>
            Buku ini diakhiri dengan membangun website yang responsive dengan
            Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
            untuk bertanya ketika mengalami kesulitan.
          </p>
          <div className='w-full space-y-3 py-5'>
            <div className='flex justify-between space-x-2 rounded-2xl bg-white p-3 shadow-md hover:cursor-pointer hover:bg-black/10 md:p-8'>
              <div className='flex justify-center pt-1 text-primary'>
                <FiLayout size={24} />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-lg font-semibold text-primary'>
                  Live Demo Project
                </h3>
                <p className='text-dark/80'>
                  Lihat live demo project yang akan kamu buat di akhir buku ini.
                </p>
              </div>
              <div className='flex items-center'>
                <div className='rounded-full bg-primary/10 p-1 text-primary'>
                  <FiArrowRight size={20} />
                </div>
              </div>
            </div>
            <div className='flex justify-between space-x-2 rounded-2xl bg-white p-3 shadow-md hover:cursor-pointer hover:bg-black/10 md:p-8'>
              <div className='flex justify-center pt-1 text-primary'>
                <FiLayout size={24} />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-lg font-semibold text-primary'>
                  Dukungan Komunitas
                </h3>
                <p className='text-dark/80'>
                  Sebuah server Discord berisi teman-teman yang akan membantu
                  kamu.
                </p>
              </div>
              <div className='flex items-center'>
                <div className='rounded-full bg-primary/10 p-1 text-primary'>
                  <MdChatBubbleOutline size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitLower
