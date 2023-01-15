import { Price } from '../vite-env'
import PriceCard from './PriceCard'

function PriceSection() {
  const price: Price = [
    {
      name: 'Basic',
      price: 5,

      description:
        'A budget-friendly option for individuals and small businesses.',
      available: [
        true,
        true,
        true,
        true,
        true,
        'showOnly',
        'showOnly',
        'notShow',
        'notShow'
      ]
    },
    {
      name: 'Professional',
      price: 15,
      description:
        'A comprehensive option for businesses with more advanced needs.',
      available: [true, true, true, true, true, true, true, true, 'notShow'],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description:
        'A customizable plan for large organizations with specific needs.',
      available: [true, true, true, true, true, true, true, true, true]
    }
  ]
  return (
    <section className='flex w-full justify-center '>
      <div className='flex flex-col justify-between gap-5 md:flex-row'>
        {price.map((price, i) => (
          <PriceCard
            key={i}
            name={price.name}
            price={price.price}
            description={price.description}
            available={price.available}
            recommended={price.recommended}
          />
        ))}
      </div>
    </section>
  )
}

export default PriceSection
