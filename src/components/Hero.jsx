import Spline from '@splinetool/react-spline';
import { Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden" aria-label="Hero">
      {/* Background 3D scene (kept per spec) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability overlays (do not block Spline interactions) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          {/* Left: Headline */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-white/85 bg-white/10 px-2.5 py-1 rounded-full ring-1 ring-white/10">
              <Star size={14} className="text-yellow-300" /> Mature game previews • SFW only
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Discover, buy, and download premium indie games
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
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

          {/* Right: Tasteful creator spotlight (SFW) */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-md lg:ml-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-3 sm:p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                {/* SFW portrait representing a brunette gamer/creator */}
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop"
                  alt="SFW brunette creator wearing headphones in neon lighting"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Featured creator</p>
                  <p className="text-sm text-white/70">SFW portrait • Verified developer</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-full ring-1 ring-emerald-400/20">
                  <ShieldCheck size={14} /> Verified
                </span>
              </div>
              <p className="mt-2 text-sm text-white/75">
                We highlight talented women in games with tasteful, non-explicit visuals. Support independent creators and discover your next favorite title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
