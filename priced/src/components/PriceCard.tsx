import { useEffect, useState } from 'react'
import { Categories, Available } from '../vite-env'
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

type Features = (string | Available)[]

function PriceCard({
  name,
  price,
  description,
  available,
  recommended
}: Categories) {
  const [features, setFeatures] = useState<Features[]>([])
  const allType = [
    'Mobile app access',
    'File synchronization across devices',
    'Support for common file types',
    'Automatic file backup',
    'Advanced security features',
    'Purchase additional features',
    'Customizable features'
  ]
  const basic = ['10 GB storage', 'Basic file collaboration']
    .concat(allType)
    .slice(0, -2)
  const professional = ['100 GB storage', 'Advanced file collaboration']
    .concat(allType)
    .slice(0, -1)
  const enterprise = [
    'Customizable GB storage',
    'Advanced file collaboration'
  ].concat(allType)

  const featureArr = (name: string[]) => {
    setFeatures(name.map((element, index) => [element, available[index]]))
  }

  useEffect(() => {
    if (name === 'Basic') {
      featureArr(basic)
    }
    if (name === 'Professional') {
      featureArr(professional)
    }
    if (name === 'Enterprise') {
      featureArr(enterprise)
    }
  }, [])
  return (
    <div className='relative h-fit max-w-sm rounded-lg bg-white p-10 font-dm-sans '>
      {recommended === true ? (
        <div className='absolute top-0 left-0 z-10 -mt-6 w-full rounded-t-lg bg-[#160E4B] py-2 '>
          <p className='text-center text-xs font-bold uppercase text-white'>
            Recommended
          </p>
        </div>
      ) : null}
      <div className='space-y-2'>
        <p className='font-bold text-[#160E4B]'>{name}</p>
        {price === 'Custom' ? (
          <h3 className='text-4xl font-bold text-[#160E4B]'>{price}</h3>
        ) : (
          <h3 className='text-4xl font-bold text-[#160E4B]'>
            ${price}
            <span className='text-sm text-black/60'>/month</span>
          </h3>
        )}
        <p className='text-sm text-black/60'>{description}</p>
      </div>
      <div className='flex justify-center py-2'>
        <button className='w-[80%] rounded bg-[#7C67FE] px-3 py-2 text-sm font-semibold text-white'>
          Get Started
        </button>
      </div>
      <div>
        <p className='py-2 text-sm text-black/60'>Features</p>
        <ul>
          {features.map((feature, i) => {
            const mark =
              typeof feature[1] === 'boolean' ? (
                <div className='rounded-full bg-[#7C67FE] md:p-1'>
                  <AiOutlineCheck className='text-white' />
                </div>
              ) : feature[1] === 'showOnly' ? (
                <div className='rounded-full bg-[#FF4794] md:p-1'>
                  <AiOutlineClose className='text-white' />
                </div>
              ) : null
            return (
              <li
                className='flex items-center space-x-1 py-1 text-sm text-black/60 md:space-x-5 md:text-base'
                key={i}>
                <span>{mark}</span>
                <span>{feature[0]}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PriceCard
