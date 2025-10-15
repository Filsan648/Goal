import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Compement/Hero.tsx'
import Navbar   from './Compement/navbar.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen w-full bg-white relative text-black/70">
  {/* Purple Gradient Grid Left Background */}
  <div
    className="absolute inset-0 -z-1"
    style={{
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
      `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
  <div className='relative z-30'>
    <Navbar />
  <Hero />
     </div> 
</div>
   
  </StrictMode>,
)
