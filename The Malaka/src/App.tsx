import Benefit from './components/Benefit'
import ForSection from './components/ForSection'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='h-screen bg-white'>
      <Navbar />
      <Home />
      <ForSection />
      <Benefit />
    </div>
  )
}

export default App
