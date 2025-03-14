import { LandingPage, Navbar, Marquee, About, Eyes, Featured, Cards, Footer } from "./components"
import LocomotiveScroll from "locomotive-scroll"

export default function App() {

  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}