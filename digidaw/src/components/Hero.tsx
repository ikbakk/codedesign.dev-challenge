import { FC, ReactElement } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import img from '../assets/unliBlock.png'
import Skeletons from './Skeletons'

const Hero: FC = (): ReactElement => {
  return (
    <section className='grid grid-cols-1 pt-2 outline md:grid-cols-2'>
      <section className=''>
        <h1 className='py-3 text-4xl font-light text-white md:text-6xl'>
          Experience the power of{' '}
          <span className='font-semibold'>professional UI kits</span>
        </h1>
        <p className='py-3 pb-5 text-white/80'>
          Choose from a wide range of styles and themes to find the perfect fit
          for your project
        </p>
        <div className='py-5'>
          <button className='flex items-center space-x-5 rounded-full bg-[#FFB802] px-5 py-4'>
            <p className='font-semibold'>Discover</p>
            <div>
              <BsArrowRight size={18} />
            </div>
          </button>
        </div>
        <section className='flex flex-col py-5 md:w-[90%] md:flex-row'>
          <figure>
            <img src={img} />
          </figure>
          <article className='p-2'>
            <h3 className='text-lg text-white'>Unlimited Blocks</h3>
            <p className='text-justify text-sm text-white/80'>
              Having access to unlimited blocks means that users can create a
              wide range of designs without running out of elements to work
              with.
            </p>
          </article>
        </section>
      </section>
      <section className='relative hidden scale-75 md:inline-block'>
        <Skeletons />
      </section>
    </section>
  )
}

export default Hero
