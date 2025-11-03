import { useState } from 'react';
import { Rocket, User, ShoppingCart, ShieldCheck, Menu } from 'lucide-react';

export default function Navbar({ onLoginClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Rocket className="text-fuchsia-400" />
            <span className="font-semibold tracking-tight text-white">Flames Arcade</span>
            <span className="ml-3 text-xs text-white/50 hidden sm:inline-flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-400"/> 18+ verified access</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#featured" className="text-white/80 hover:text-white transition">Featured</a>
            <a href="#trending" className="text-white/80 hover:text-white transition">Trending</a>
            <a href="#catalog" className="text-white/80 hover:text-white transition">Catalog</a>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={onLoginClick} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-white/10 hover:bg-white/15 text-white transition">
              <User size={18} /> Sign in
            </button>
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-fuchsia-600/90 hover:bg-fuchsia-600 text-white transition">
              <ShoppingCart size={18} /> Cart
            </button>
            <button className="md:hidden inline-flex p-2 rounded-md hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              <Menu className="text-white" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a href="#featured" className="text-white/80 hover:text-white transition py-2">Featured</a>
              <a href="#trending" className="text-white/80 hover:text-white transition py-2">Trending</a>
              <a href="#catalog" className="text-white/80 hover:text-white transition py-2">Catalog</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
