import avatar from '../../src/assets/profileimg.png'

function ForLower() {
  return (
    <div className='w-full bg-primary font-dm-sans'>
      <div className='flex flex-col justify-center space-y-4 p-4 py-10 md:flex-row md:space-x-10 md:px-28'>
        <div className='basis-1/2 flex-col space-y-5'>
          <p className='text-sm uppercase tracking-widest text-white'>
            - Buku ini untuk siapa
          </p>
          <h3 className='text-2xl text-white md:text-4xl'>
            Kata Pengantar Dari Penulis Buku
          </h3>
          <hr />
          <div className='flex space-x-5'>
            <div className='h-20 w-20 overflow-hidden rounded-full outline outline-white'>
              <img src={avatar} />
            </div>
            <div>
              <h3 className='text-white'>Muhammad Nauval Azhar</h3>
              <p className='text-white'>@rnhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <div className='basis-1/2'>
          <p className='text-justify text-white'>
            "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
            website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
            Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang
            lebih lama ketika membangun sebuah website dengan utility-first
            framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu
            harus memikirkan desain dan mengimplementasikan desain tersebut dari
            awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan
            oleh utility-first framework, sehingga kamu dapat
            mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework
            Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah
            website responsive dengan TailwindCSS. Buku ini tidak untuk semua
            orang, setidaknya kamu memahami cara mengoperasikan komputer,
            memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah
            membangun website sebelumnya dan ingin mempelajari hal baru untuk
            meningkatkan skill."
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForLower
