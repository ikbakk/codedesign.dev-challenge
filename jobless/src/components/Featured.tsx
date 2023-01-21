import Card from './Card'

import figma from '../assets/figma.png'
import fb from '../assets/fb.png'
import vercel from '../assets/vercel.png'

interface IJob {
  id: string
  role: string
  platform: string
  description: string
  skill: string
  price: string
  img: string
  active: boolean
}

type FeaturedJobs = IJob[]

const Featured = () => {
  const featuredJobs: FeaturedJobs = [
    {
      id: '1',
      role: 'Front-End Developer',
      platform: 'Figma',
      description:
        'We are looking for an experienced front-end developer to join our team.',
      skill: 'Rust',
      price: '$70.000 - $90.000',
      img: figma,
      active: true
    },
    {
      id: '2',
      role: 'Data Scientist',
      platform: 'Facebook',
      description: 'We are seeking a data scientist to join our team.',
      skill: 'Phyton',
      price: '$100.000 - $130.000',
      img: fb,
      active: false
    },
    {
      id: '3',
      role: 'Technical Writer',
      platform: 'Vercel',
      description: 'We are seeking a technical writer to join our team.',
      skill: 'Documentation',
      price: '$60.000 - $80.000',
      img: vercel,
      active: false
    }
  ]
  return (
    <section className='w-full md:h-full'>
      <p className='w-full font-semibold text-black'>Featured Jobs</p>
      <section className='flex scale-90 flex-col items-center justify-between gap-5 md:scale-100 md:flex-row'>
        {featuredJobs.map((job) => (
          <Card
            key={job.id}
            role={job.role}
            platform={job.platform}
            description={job.description}
            skill={job.skill}
            price={job.price}
            img={job.img}
            active={job.active}
          />
        ))}
      </section>
    </section>
  )
}

export default Featured
