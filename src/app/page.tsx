import Hero from './components/hero'
import ProjectGrid from './components/projectGrid'
import AboutSection from './components/aboutSection'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950">
        <div className="pt-24 md:pt-28 pb-10 md:pb-14"> {/* ปรับระยะห่างจาก Navbar */}
          <Hero />

        <AboutSection />
        <ProjectGrid />
        </div>
      </main >
      <Footer />
    </>
  )
}