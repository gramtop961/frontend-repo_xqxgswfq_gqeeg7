import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import AgeGate from './components/AgeGate';

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <AgeGate />
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <main>
        <Hero />
        <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-indigo-600/10 to-transparent p-6">
            <h2 className="text-xl font-semibold">Featured this week</h2>
            <p className="text-sm text-white/70 mt-1">Hand-picked by our editorial team based on ratings and momentum.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <p className="text-white font-medium">Neon Drift: Zero</p>
                <p className="text-white/70 text-sm">Arcade racing with synthwave vibes.</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <p className="text-white font-medium">Echoes of Aurora</p>
                <p className="text-white/70 text-sm">Narrative adventure with branching paths.</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <p className="text-white font-medium">Stellar Colony</p>
                <p className="text-white/70 text-sm">Deep strategy in a living galaxy.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Trending now</h2>
            <p className="text-sm text-white/60">Updated hourly</p>
          </div>
        </section>
        <Catalog />
      </main>

      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="text-lg font-semibold">Sign in</h3>
            <p className="text-sm text-white/70 mt-1">Authentication will be connected later. For now this is a visual mock.</p>
            <div className="mt-4 grid gap-3">
              <input className="w-full rounded-md bg-white/10 border border-white/10 text-white placeholder-white/50 px-3 py-2 text-sm" placeholder="Email" />
              <input type="password" className="w-full rounded-md bg-white/10 border border-white/10 text-white placeholder-white/50 px-3 py-2 text-sm" placeholder="Password" />
              <button className="rounded-md bg-fuchsia-600/90 hover:bg-fuchsia-600 text-white px-4 py-2 text-sm">Continue</button>
              <button onClick={() => setLoginOpen(false)} className="rounded-md bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm">Close</button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/70">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Flames Arcade • All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">18+ Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
