import { MdDone } from 'react-icons/md'
import book from '../assets/book2.png'

function BenefitUpper() {
  return (
    <div className='flex items-center justify-center p-4 py-10 pt-10 font-dm-sans md:px-28'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:basis-1/2'>
          <p className='py-2 text-sm uppercase tracking-widest text-primary'>
            - Manfaat buku
          </p>
          <h3 className='py-2 text-2xl text-dark md:text-4xl'>
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </h3>
          <p className='py-2 text-justify leading-relaxed tracking-wider text-dark/80'>
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
            yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
            yang jenius." - J.K Rowling
          </p>
          <ul className='flex flex-col justify-between'>
            <li className='wider flex items-center space-x-3 py-2 text-dark/80'>
              <div className='rounded-full bg-[#20D27D] p-1'>
                <MdDone className='text-[#EDFCFD]' size={18} />
              </div>
              <p>
                Buku ini cocok untuk seorang yang ingin memperdalam front-end
                development agar tidak hanya sekadar Bootstrap
              </p>
            </li>
            <li className='wider flex items-center space-x-3 py-2 text-dark/80'>
              <div className='rounded-full bg-[#20D27D] p-1'>
                <MdDone className='text-[#EDFCFD]' size={18} />
              </div>
              <p>
                Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS
                langsung, agar meminimalisir terjadinya miskonsepsi
              </p>
            </li>
            <li className='wider flex items-center space-x-3 py-2 text-dark/80'>
              <div className='rounded-full bg-[#20D27D] p-1'>
                <MdDone className='text-[#EDFCFD]' size={18} />
              </div>
              <p>
                Sangat ramah untuk back-end developer yang phobia terhadap CSS
                dan mudah dipahami bagi UI designer
              </p>
            </li>
            <li className='wider flex items-center space-x-3 py-2 text-dark/80'>
              <div className='rounded-full bg-[#20D27D] p-1'>
                <MdDone className='text-[#EDFCFD]' size={18} />
              </div>
              <p>
                Studi kasus membangun sebuah website responsive dengan Tailwind
                CSS tanpa ngoding CSS
              </p>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-center py-2 md:basis-1/2'>
          <div className='relative'>
            <img className='object-scale-down' src={book} />
            <div className='absolute bottom-[5%] z-[10] w-full rounded-3xl bg-primary p-6 shadow-bottom'>
              <div className='flex justify-between'>
                <div>
                  <h2 className='text-3xl font-bold text-white'>19</h2>
                  <p className=' text-sm text-white/80'>Jumlah Chapter</p>
                </div>
                <div>
                  <h2 className='text-3xl font-bold text-white'>253</h2>
                  <p className=' text-sm text-white/80'>Jumlah Halaman</p>
                </div>
                <div>
                  <h2 className='text-3xl font-bold text-white'>60</h2>
                  <p className=' text-sm text-white/80'>Hari Menulis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitUpper
