import Card from './Card'
import for1 from '../assets/for1.png'
import for2 from '../assets/for2.png'
import for3 from '../assets/for3.png'

interface CardText {
  src: string
  title: string
  subtitle: string
}

type Cards = CardText[]

function ForUpper() {
  const cardText: Cards = [
    {
      src: for1,
      title: 'Utility-First Framework',
      subtitle:
        'Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.'
    },
    {
      src: for2,
      title: 'Tailwind JIT Engine',
      subtitle:
        'JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.'
    },
    {
      src: for3,
      title: 'Unopinionated-Framework',
      subtitle:
        'Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.'
    }
  ]
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center justify-center p-4 py-10 pt-10 font-dm-sans md:px-28'>
        <div className='flex flex-col space-y-4 space-x-0 md:flex-row md:items-center md:space-x-10 md:space-y-0'>
          <div className='space-y-4 md:basis-1/2'>
            <p className='text-sm uppercase tracking-widest text-primary'>
              - Buku ini untuk siapa
            </p>
            <h3 className='text-4xl text-dark'>
              Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
              designer!
            </h3>
          </div>
          <div className='md:basis-1/2'>
            <p className='text-justify text-dark/80'>
              Buku ini bukan hanya untuk front-end developer yang ingin
              meningkatkan skill, buku ini juga cocok untuk back-end developer
              dan UI designer agar dapat menulis style tanpa harus menulis kode
              CSS dan tanpa mengandalkan front-end developer!
            </p>
          </div>
        </div>
        <div className='xl:scale125 flex scale-90 flex-col space-y-4 py-8 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6'>
          {cardText.map((card, index: number) => (
            <Card
              key={index}
              src={card.src}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ForUpper
