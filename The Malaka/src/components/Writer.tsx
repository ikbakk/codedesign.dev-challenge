import profile from '../assets/profileimg.png'

function Writer() {
  return (
    <div
      id='penulis'
      className='mt-32 h-screen items-center justify-center p-4 py-10 pt-20 font-dm-sans md:mt-0 md:px-28'>
      <div className='relative flex h-full w-full flex-col justify-between md:flex-row'>
        <div className='relative flex h-full w-full items-center justify-center'>
          <div className='relative flex h-full w-full scale-50 items-center justify-center'>
            <div className='z-1 absolute [perspective:1100px]'>
              <div className='h-[628px] w-[522px] rounded-3xl bg-dark [transform:rotateX(-15deg)_rotateY(15deg)]'></div>
            </div>
            <div className='absolute z-10 [perspective:1100px]'>
              <img
                className='h-[628px] w-[522px] rounded-3xl [transform:rotateX(-15deg)_rotateY(15deg)_rotateZ(-2.79deg)]'
                src={profile}
              />
            </div>
            <div className=' absolute top-40 left-16 z-20 rounded-md bg-primary p-3 md:top-[70%] lg:left-[20%]'>
              <h3 className='text-xl font-semibold text-white'>
                Muhammad Nauval Azhar
              </h3>
              <p className='text-white/80'>@mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <div className='flex h-full w-full flex-col items-center justify-center pt-56 md:pt-0'>
          <div>
            <p className='text-sm font-bold uppercase tracking-widest text-primary'>
              penulis buku
            </p>
            <h3 className='py-2 text-3xl text-dark'>
              Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
            </h3>
          </div>
          <div>
            <p className='text-justify text-dark/80'>
              “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga
              kamu. Namun, kedepannya saya berharap nama ini tidak lagi
              terdengar asing di telinga kamu sebagai orang yang rajin berbagi
              hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya
              seorang web developer yang masuk kategori
              apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih
              senang fokus di front-end development, karena --menurut saya-- ini
              lebih sederhana saja. Di front-end development pada dasarnya hanya
              perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah
              jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau
              kamu cocoknya pake jQuery, malah maksa pake React.”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Writer
