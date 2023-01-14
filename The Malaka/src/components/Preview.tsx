import book from '../assets/book3.png'
import PreviewCarousel from './PreviewCarousel'

function Preview() {
  return (
    <section id='preview' className='bg-[#EDFCFD] py-[2.5rem]'>
      <div className='flex flex-col items-center p-4 py-10 pt-10 font-dm-sans md:px-28'>
        <div className='flex max-w-4xl flex-col items-center space-y-4 text-center'>
          <p className='rounded-full bg-[#C6F4F8] px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary'>
            Pratinjau
          </p>
          <h2 className='text-4xl font-semibold text-dark'>
            Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi
            di dalam buku ini
          </h2>
          <p className='text-lg text-dark/80'>
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
            detail halaman buku tersebut dan membaca isinya.
          </p>
        </div>
        <div className='flex w-full flex-col md:justify-between lg:flex-row'>
          <div className='lg:basis-1/3'>
            <img src={book} alt='/' />
          </div>
          <div className='flex flex-col text-center lg:basis-2/3'>
            <div className='flex w-full justify-center'>
              <div className='max-w-lg'>
                <PreviewCarousel />
                <p className='text-white/0'>a</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preview
