function Footer() {
  return (
    <div className='rounded-tr-3xl bg-dark p-4 py-10 pt-10 font-dm-sans md:px-28'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div>
          <h3 className='py-2 text-2xl text-white md:text-4xl'>
            Sudah siap meningkatkan skill kamu?
          </h3>
          <p className='py-1 text-white/80'>
            Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
            pertanyaan kamu di halaman bantuan.
          </p>
        </div>
        <div className='flex space-x-5 py-5'>
          <div>
            <button className='text-whtie rounded-lg bg-white/5 p-5 hover:bg-white/10'>
              Pusat Bantuan
            </button>
          </div>
          <div>
            <button className='rounded-lg bg-primary p-5 text-white shadow-md shadow-primary hover:bg-primary/90'>
              Mendaftar
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex flex-col pt-5 md:flex-row md:justify-between'>
        <div className='basis-1/2'>
          <div className='placeholder avatar hover:cursor-pointer'>
            <div className='w-8 rounded-full bg-primary text-white'>
              <span className='text-md mt-1 font-serif'>M</span>
            </div>
          </div>
          <h3 className='py-2 font-semibold tracking-wide text-white hover:cursor-pointer'>
            The Malaka
          </h3>
          <p className='text-white/80'>
            Malaka adalah situs penyedia kursus ilmu komputer berbahasa
            Indonesia, mulai dari pengembangan hingga desain grafis.
          </p>
        </div>
        <div className='basis-1/2 pt-5'>
          <div className='grid grid-cols-3 gap-2 md:gap-4'>
            <div className='text-white/80'>
              <ul>
                <li className='py-2 uppercase text-white'>Products</li>
                <li className='py-1'>
                  <a href='#'>Courses</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Books</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Freebies</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Classes</a>
                </li>
              </ul>
            </div>
            <div className='text-white/80'>
              <ul>
                <li className='py-2 uppercase text-white'>Company</li>
                <li className='py-1'>
                  <a href='#'>About Us</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Contact</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Privacy Policies</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Terms of Service</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Help</a>
                </li>
              </ul>
            </div>
            <div className='text-white/80'>
              <ul>
                <li className='py-2 uppercase text-white'>Get in touch</li>
                <li className='py-1'>
                  <a href='#'>Twitter</a>
                </li>
                <li className='py-1'>
                  <a href='#'>Faceboo</a>k
                </li>
                <li className='py-1'>
                  <a href='#'>Dribble</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
