import Benefit from './components/Benefit'
import ForSection from './components/ForSection'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Preview from './components/Preview'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Writer from './components/Writer'

function App() {
  return (
    <div className='h-screen bg-white'>
      <Navbar />
      <Home />
      <ForSection />
      <Benefit />
      <Preview />
      <Pricing />
      <Writer />
      <Testimonial />
    </div>
  )
}

export default App
