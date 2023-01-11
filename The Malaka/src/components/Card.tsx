interface Card {
  src: string
  title: string
  subtitle: string
}

function Card({ src, title, subtitle }: Card) {
  return (
    <div className='card w-96'>
      <figure>
        <img src={src} alt='Shoes' />
      </figure>
      <div className='card-body bg-white text-center'>
        <h2 className='text-center text-xl font-bold text-dark'>{title}</h2>
        <p className='text-dark/80'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Card
