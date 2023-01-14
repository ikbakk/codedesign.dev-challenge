function BuyBook() {
  return (
    <section>
      <div className='flex flex-col items-center p-4 py-10 pt-10 font-dm-sans md:px-28'>
        <div className='flex max-w-4xl flex-col items-center space-y-4 text-center'>
          <p className='rounded-full bg-[#C6F4F8] px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary'>
            Beli Buku
          </p>
          <h2 className='text-2xl font-semibold text-dark md:text-4xl'>
            Anda ingin segera memesan buku ini?
          </h2>
          <p className='text-lg text-dark/80'>
            Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BuyBook
