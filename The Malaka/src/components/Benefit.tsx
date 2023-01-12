import BenefitLower from './BenefitLower'
import BenefitUpper from './BenefitUpper'

function Benefit() {
  return (
    <section id='benefit' className='bg-[#EDFCFD] py-[2.5rem]'>
      <BenefitUpper />
      <BenefitLower />
    </section>
  )
}

export default Benefit
