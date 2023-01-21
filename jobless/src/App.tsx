import Featured from './components/Featured'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <main className='flex h-screen w-full flex-col gap-y-10 overflow-y-scroll bg-gradient-to-tr from-rose-100 to-teal-100 px-8 font-poppins md:overflow-hidden'>
      <Header />
      <Hero />
      <Featured />
    </main>
  )
}

export default App
