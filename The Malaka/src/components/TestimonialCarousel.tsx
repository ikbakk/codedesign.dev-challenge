import TestimonialCard from './TestimonialCard'
import Slider from 'react-slick'
import { IoArrowForward } from 'react-icons/io5'
import { IoMdArrowBack } from 'react-icons/io'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Next = (props: any) => {
  const { onClick } = props
  return (
    <div
      className='absolute right-0 top-[50%] block translate-x-7 cursor-pointer rounded-full bg-primary/90 p-2 text-white shadow-md shadow-primary hover:bg-primary/70 active:bg-primary'
      onClick={onClick}>
      <IoArrowForward size={20} />
    </div>
  )
}
const Back = (props: any) => {
  const { onClick } = props
  return (
    <div
      className='absolute left-0 top-[50%] z-10 block -translate-x-7 cursor-pointer rounded-full bg-primary/90 p-2 text-white shadow-md shadow-primary hover:bg-primary/70 active:bg-primary'
      onClick={onClick}>
      <IoMdArrowBack size={20} />
    </div>
  )
}

function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      comment:
        '“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”',
      name: 'Ahmad Saugi',
      occupation: 'Mahasiswa'
    },
    {
      id: 2,
      comment:
        '“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”',
      name: 'Dedik Sugiharto',
      occupation: 'Front-end Engineer'
    },
    {
      id: 3,
      comment:
        '“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”',
      name: 'Lutfi Hanafiah Ramadhan',
      occupation: 'IT Support'
    },
    {
      id: 4,
      comment:
        '“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”',
      name: 'Lutfi Hanafiah Ramadhan',
      occupation: 'IT Support'
    },
    {
      id: 5,
      comment:
        '“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”',
      name: 'Lutfi Hanafiah Ramadhan',
      occupation: 'IT Support'
    },
    {
      id: 6,
      comment:
        '“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”',
      name: 'Lutfi Hanafiah Ramadhan',
      occupation: 'IT Support'
    }
  ]
  return (
    <div className='flex w-full justify-between'>
      <Slider
        infinite
        slidesToShow={3}
        slidesToScroll={3}
        prevArrow={<Back />}
        nextArrow={<Next />}
        className='w-full'>
        {testimonials.map((testimonial) => (
          <div className='px-4' key={testimonial.id}>
            <TestimonialCard
              comment={testimonial.comment}
              name={testimonial.name}
              occupation={testimonial.occupation}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialCarousel
