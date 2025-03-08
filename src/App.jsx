import { LandingPage, Navbar, Marquee } from "./components"

export default function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}