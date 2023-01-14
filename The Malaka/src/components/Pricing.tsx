import PricingCard from './PricingCard'

interface lists {
  [key: string]: boolean
}

interface Categories {
  type: string
  price: number
  lists: lists
}

type Pricing = Categories[]

function Pricing() {
  const pricingCategories: Pricing = [
    {
      type: 'Buku Digital',
      price: 100,
      lists: {
        'Buku lengkap': true,
        'Akses secara digital': true,
        'Buku fisik': false,
        'Mendapat pembaruan': true,
        Konsultasi: true,
        'Dapat diunduh': true
      }
    },
    {
      type: 'Buku Fisik',
      price: 185,
      lists: {
        'Buku lengkap': true,
        'Akses secara digital': false,
        'Buku fisik': true,
        'Mendapat pembaruan': false,
        Konsultasi: true,
        'Dapat diunduh': true
      }
    },
    {
      type: 'Buku Digital + Fisik',
      price: 250,
      lists: {
        'Buku lengkap': true,
        'Akses secara digital': true,
        'Buku fisik': true,
        'Mendapat pembaruan': true,
        Konsultasi: true,
        'Dapat diunduh': true
      }
    }
  ]

  return (
    <div className='bg-[#EDFCFD]'>
      <div className='flex h-full w-full -skew-y-6 flex-col items-center justify-center rounded-tr-[3rem] rounded-bl-[3rem] bg-dark p-4 py-16 pt-10 font-dm-sans md:px-28'>
        <div className='flex max-w-4xl skew-y-6 flex-col items-center space-y-4 py-5 text-center'>
          <p className='rounded-full bg-[#C6F4F8] px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary'>
            Harga buku
          </p>
          <h2 className='py-2 text-2xl font-semibold text-white md:text-4xl'>
            Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
            perangkat kamu
          </h2>
          <p className='max-w-lg py-2 text-lg text-white/80'>
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
            Hak cipta dilindungi undang-undang.
          </p>
        </div>
        <div className='grid w-full skew-y-6 grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12'>
          {pricingCategories.map((category) => (
            <PricingCard
              lists={category.lists}
              price={category.price}
              type={category.type}
            />
          ))}
        </div>
        <div className='skew-y-6 pt-10 text-center text-lg text-white/80'>
          <p>*Buku digital akan dikirimkan ke alamat email kamu</p>
          <p>*Buku fisik dikirim 7 hari setelah pemesanan</p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
