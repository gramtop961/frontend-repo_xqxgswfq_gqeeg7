import { useMemo, useState } from 'react';
import { Star, Download, ShoppingCart } from 'lucide-react';

const seedGames = [
  {
    id: 'g1',
    title: 'Neon Drift: Zero',
    developer: 'AstraWorks',
    tags: ['racing', 'arcade'],
    price: 14.99,
    rating: 4.6,
    downloads: 1280,
    cover: 'https://images.unsplash.com/photo-1542759564-ff2dc7f1f38b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g2',
    title: 'Echoes of Aurora',
    developer: 'Moonforge',
    tags: ['adventure', 'story'],
    price: 19.99,
    rating: 4.8,
    downloads: 980,
    cover: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g3',
    title: 'Synth Runner',
    developer: 'ByteBard',
    tags: ['action', 'platformer'],
    price: 9.99,
    rating: 4.2,
    downloads: 2120,
    cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'g4',
    title: 'Stellar Colony',
    developer: 'Quasar Labs',
    tags: ['strategy', 'sim'],
    price: 24.99,
    rating: 4.7,
    downloads: 740,
    cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function Catalog() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('all');
  const [sort, setSort] = useState('trending');

  const tags = ['all', 'racing', 'arcade', 'adventure', 'story', 'action', 'platformer', 'strategy', 'sim'];

  const filtered = useMemo(() => {
    let list = seedGames.filter(g =>
      g.title.toLowerCase().includes(query.toLowerCase()) ||
      g.developer.toLowerCase().includes(query.toLowerCase())
    );
    if (tag !== 'all') list = list.filter(g => g.tags.includes(tag));
    if (sort === 'trending') list = [...list].sort((a, b) => b.downloads - a.downloads);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'price_asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [query, tag, sort]);

  return (
    <section id="catalog" className="relative py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore the catalog</h2>
            <p className="text-white/70 text-sm mt-1">All demos labeled as “Mature game preview” and kept SFW.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full md:w-auto">
            <div className="col-span-2 md:col-span-1">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games or developers"
                className="w-full rounded-md bg-white/10 border border-white/10 text-white placeholder-white/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <select value={tag} onChange={(e) => setTag(e.target.value)} className="rounded-md bg-white/10 border border-white/10 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
              {tags.map(t => (
                <option key={t} value={t} className="bg-zinc-900">{t}</option>
              ))}
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md bg-white/10 border border-white/10 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
              <option value="trending" className="bg-zinc-900">Trending</option>
              <option value="rating" className="bg-zinc-900">Top rated</option>
              <option value="price_asc" className="bg-zinc-900">Price: Low to High</option>
              <option value="price_desc" className="bg-zinc-900">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((g) => (
            <article key={g.id} className="group rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={g.cover} alt={`${g.title} cover`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white/90 ring-1 ring-white/10">
                  Mature game preview
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold truncate" title={g.title}>{g.title}</h3>
                <p className="text-xs text-white/60 mt-0.5">by {g.developer}</p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-300">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-white/90">{g.rating.toFixed(1)}</span>
                  </div>
                  <div className="text-white font-semibold">${g.price.toFixed(2)}</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="inline-flex items-center justify-center gap-2 rounded-md bg-fuchsia-600/90 hover:bg-fuchsia-600 text-white px-3 py-2 text-sm">
                    <ShoppingCart size={16} /> Buy
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-2 text-sm">
                    <Download size={16} /> Demo
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
