interface IJob {
  role: string
  platform: string
  description: string
  skill: string
  price: string
  img: string
  active: boolean
}

const Card = ({
  role,
  platform,
  description,
  skill,
  price,
  img,
  active
}: IJob) => {
  const isActiveBg = active ? 'bg-[#001AFF]' : 'bg-white'
  const isActiveTxt = active ? 'text-white' : 'text-black'
  return (
    <div className={`w-96 p-5 ${isActiveBg} flex flex-col gap-5 rounded-xl`}>
      <section className='flex gap-5'>
        <figure>
          <img src={img} />
        </figure>
        <hgroup>
          <h3 className={`text-lg font-semibold ${isActiveTxt}`}>{role}</h3>
          <h5 className={`${isActiveTxt}/80`}>{platform}</h5>
        </hgroup>
      </section>
      <article>
        <p className={`${isActiveTxt}/80 text-justify`}>{description}</p>
      </article>
      <section className={`flex items-center justify-between ${isActiveTxt}`}>
        <div className='rounded-full bg-white/20 px-3 py-1'>
          <p className='text-sm font-semibold'>{skill}</p>
        </div>
        <div>
          <p className='text-sm font-semibold'>{price}</p>
        </div>
      </section>
    </div>
  )
}

export default Card
