import Benefit from './components/Benefit'
import ForSection from './components/ForSection'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Preview from './components/Preview'

function App() {
  return (
    <div className='h-screen bg-white'>
      <Navbar />
      <Home />
      <ForSection />
      <Benefit />
      <Preview />
    </div>
  )
}

export default App
