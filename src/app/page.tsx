// HomePage.js
import Hero from './components/hero'
import ProjectGrid from './components/projectGrid'
import AboutSection from './components/aboutSection'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-950 min-h-screen w-full">
        {/* The container div ensures content doesn't stretch edge-to-edge */}
        {/* px-4 sm:px-6 lg:px-8 handles responsive padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Hero Section */}
          <section className="mb-16 md:mb-20 pt-16 md:pt-20"> {/* pt- to account for fixed Navbar */}
            <Hero />
          </section>

          {/* About Section */}
          <section className="mb-16 md:mb-20">
            <AboutSection />
          </section>

          {/* Project Grid */}
          <section>
            <ProjectGrid />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}