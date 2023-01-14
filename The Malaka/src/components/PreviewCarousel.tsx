import { useState } from 'react'
import Slider from 'react-slick'
import page from '../assets/page.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PreviewCarousel() {
  const [index, setIndex] = useState<number>(0)
  return (
    <>
      <Slider
        className='-mb-20 '
        centerMode
        infinite
        afterChange={(current) => {
          setIndex(current)
        }}
        centerPadding='-260px'
        slidesToShow={3}>
        <div className='w-32'>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
        <div className='w-32 '>
          <img src={page} />
        </div>
      </Slider>
      <p className='pt-5'>Halaman {index + 1} dari 257</p>
    </>
  )
}

export default PreviewCarousel
