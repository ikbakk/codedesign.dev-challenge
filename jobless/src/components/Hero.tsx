const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-y-10 md:h-full'>
      <article className='flex max-w-2xl flex-col gap-y-10 text-center'>
        <h1 className='text-4xl font-semibold text-black'>
          Get Connected to the Best Remote Jobs in Your Field
        </h1>
        <p className='text-black/60'>
          Discover a wide range of remote opportunities on our platform and take
          control of your career
        </p>
      </article>
      <section className='flex items-center justify-center gap-x-10'>
        <button className='rounded-full bg-[#001AFF] px-5 py-2 shadow'>
          <p className='text-base font-semibold text-white'>
            Explore Remote Jobs
          </p>
        </button>
        <button>
          <p className='text-base font-semibold text-[#001AFF] underline'>
            How it works?
          </p>
        </button>
      </section>
    </section>
  )
}

export default Hero
