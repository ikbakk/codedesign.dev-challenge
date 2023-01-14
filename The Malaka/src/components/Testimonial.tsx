function Testimonial() {
  return (
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
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Testimonial
