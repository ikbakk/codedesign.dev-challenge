import { AiOutlineCheck } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'

interface lists {
  [key: string]: boolean
}

interface Categories {
  type: string
  price: number
  lists: lists
}

type List = [string, boolean][]

function PricingCard({ type, price, lists }: Categories) {
  const listsArr: List = Object.entries(lists)
  return (
    <>
      <div className='max-w-md rounded-xl bg-white py-12 px-10'>
        <p className='py-1 text-[1rem] text-primary lg:text-[1.5rem]'>{type}</p>
        <h3 className='py-2 text-4xl text-dark lg:text-5xl'>Rp{price}.000</h3>
        <ul>
          {listsArr.map((list, index) => {
            const symbol = list[1] ? (
              <div className='rounded-full bg-[#20D27D] p-1 text-white'>
                <AiOutlineCheck />
              </div>
            ) : (
              <div className='rounded-full bg-[#F52E52] p-1 text-white'>
                <RxCross2 />
              </div>
            )
            return (
              <li key={index}>
                <div className='flex items-center space-x-3 py-2'>
                  {symbol}
                  <p className='text-dark lg:text-[1.2rem]'>{list[0]}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default PricingCard
