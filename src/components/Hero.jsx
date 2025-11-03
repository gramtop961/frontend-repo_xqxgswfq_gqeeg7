import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-white/80 bg-white/10 px-2.5 py-1 rounded-full ring-1 ring-white/10">
            <Star size={14} className="text-yellow-300" /> Mature game previews • SFW only
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Discover, buy, and download premium indie games
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            A curated marketplace for verified developers. Explore trending titles, support creators, and build your library. Access requires age verification.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-md bg-fuchsia-600/90 hover:bg-fuchsia-600 text-white px-5 py-2.5 text-sm font-medium transition">
              Browse catalog
            </a>
            <a href="#featured" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 text-sm font-medium transition">
              View featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
