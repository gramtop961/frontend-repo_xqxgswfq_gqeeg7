import { useEffect, useState } from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function AgeGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem('age_verified') : null;
    if (!consent) setVisible(true);
  }, []);

  const verify = (val) => {
    localStorage.setItem('age_verified', val ? 'yes' : 'no');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900/90 p-6 text-white shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300"><ShieldAlert /></div>
          <div>
            <h2 className="text-xl font-semibold">18+ content disclaimer</h2>
            <p className="mt-1 text-sm text-white/80">This store includes mature game previews intended for adults. All previews and descriptions are non-explicit. Please verify your age to continue.</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onClick={() => verify(true)} className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600/90 hover:bg-emerald-600 px-4 py-2.5 text-sm font-medium">
            <ShieldCheck size={18}/> I am 18 or older
          </button>
          <a href="https://www.google.com" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 px-4 py-2.5 text-sm font-medium">
            Exit
          </a>
        </div>

        <p className="mt-4 text-xs text-white/60">By continuing you agree to the Terms of Service, Privacy Policy, and 18+ Disclaimer.</p>
      </div>
    </div>
  );
}
