import Slider from 'react-slick'
import TestimonialCarousel from './TestimonialCarousel'
function Testimonial() {
  return (
    <div className='p-4 py-10 pt-10 font-dm-sans md:px-28'>
      <div className='flex flex-col items-center justify-center rounded-3xl bg-[#EDFCFD] py-16 px-5 '>
        <div className='flex  flex-col space-y-4 space-x-0 md:flex-row md:items-center md:space-x-10 md:space-y-0'>
          <div className='space-y-4 p-10 md:basis-1/2'>
            <p className='text-sm uppercase tracking-widest text-primary'>
              - Testimonial
            </p>
            <h3 className='text-4xl text-dark'>
              Apa kata orang-orang yang membaca buku ini?
            </h3>
          </div>
          <div className='md:basis-1/2'>
            <p className='text-justify text-dark/80'>
              Kalo seandainya kamu belum percaya dengan buku ini maka tidak
              apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi,
              mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk
              membeli buku ini.
            </p>
          </div>
        </div>
        <div className='flex h-[80vh] w-full items-center  p-4'>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
