import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Transform from './components/Transform'
import Team from './components/Team'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Transform />
        <Team />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
