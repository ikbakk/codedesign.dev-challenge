import React, { FC, ReactElement } from 'react'
import skelOrg from '../assets/skel-orange.png'
import skelPrpl from '../assets/skel-prpl.png'
import skelLGreen from '../assets/skel-light-green.png'
import skelDGreen from '../assets/skel-dark-green.png'
import skelDashed from '../assets/skel-dashed-brdr.png'
import skelStacked from '../assets/skel-stacked.png'

const Skeletons: FC = (): ReactElement => {
  return (
    <div className='relative'>
      <figure className='absolute left-0'>
        <img src={skelPrpl} />
      </figure>
      <figure className='absolute right-0 -top-5'>
        <img src={skelDGreen} />
      </figure>
      <figure className='absolute top-48 -left-16'>
        <img src={skelOrg} />
      </figure>
      <figure className='absolute top-56 -right-16'>
        <img src={skelStacked} />
      </figure>
      <figure className='absolute left-0 top-96 z-10'>
        <img src={skelLGreen} />
      </figure>
      <figure className='absolute right-0 top-96'>
        <img className='pt-8' src={skelDashed} />
      </figure>
    </div>
  )
}

export default Skeletons
