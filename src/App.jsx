import { LandingPage, Navbar, Marquee, About, Eyes, Featured, Cards } from "./components"

export default function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  )
}