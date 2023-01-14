import image from '../assets/profileimg.png'

interface Testimonial {
  comment: string
  name: string
  occupation: string
}

function TestimonialCard({ comment, name, occupation }: Testimonial) {
  return (
    <div className='rounded-xl bg-white p-4'>
      <div className='py-2'>
        <p className='text-justify text-dark'>{comment}</p>
      </div>
      <div className='flex space-x-5 py-2'>
        <img src={image} className='h-12 w-12 rounded-full object-cover' />
        <div>
          <h3 className='text-dark'>{name}</h3>
          <p className='text-dark/80'>{occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
