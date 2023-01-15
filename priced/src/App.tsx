import Navbar from './components/Navbar'
import PriceSection from './components/PriceSection'
import UpperSection from './components/UpperSection'

function App() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 px-10 py-10 xl:px-32 2xl:h-screen'>
      <Navbar />
      <UpperSection />
      <PriceSection />
    </div>
  )
}

export default App
