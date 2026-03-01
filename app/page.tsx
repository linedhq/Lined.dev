import { Download, Github, Zap, Shield, Globe } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white/20">
      {/* Subtle radial gradient for that Resend depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_#171717_0%,_#000_100%)] pointer-events-none" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-10">
        <div className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <div className="h-7 w-7 rounded bg-white" />
          <span>LINED</span>
        </div>
        <div className="flex items-center gap-8 text-[13px] font-medium text-zinc-400">
          <a href="https://github.com/linedhq/Lined" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="h-9 flex items-center justify-center rounded-full bg-white px-5 text-black hover:bg-zinc-200 transition-all">
            Open App
          </a>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-[1200px] px-8 pt-24 pb-40">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-medium text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          Beta 1.0 is live
        </div>
        
        <h1 className="mb-8 max-w-3xl text-6xl font-medium tracking-tighter sm:text-8xl">
          Communication <br /> 
          <span className="text-zinc-500">without the noise.</span>
        </h1>
        
        <p className="mb-14 max-w-xl text-lg leading-relaxed text-zinc-500">
          Lined is an open-source, high-performance chat interface. No tracking, no bloat, just pure speed for the public.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#" className="flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[15px] font-bold text-black transition-transform active:scale-95">
            <Download size={18} strokeWidth={2.5} />
            Download for Windows
          </a>
          <a href="https://github.com/linedhq/Lined" className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-zinc-900/50 px-8 text-[15px] font-bold text-white transition-colors hover:bg-zinc-900">
            <Github size={18} />
            Source Code
          </a>
        </div>

        <div className="mt-40 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
          <Feature icon={<Zap size={20}/>} title="Instant" desc="Sub-millisecond delivery powered by a Rust-based core." />
          <Feature icon={<Shield size={20}/>} title="Secure" desc="E2E encryption is standard. Your data never hits our disks." />
          <Feature icon={<Globe size={20}/>} title="Open" desc="Fully extensible. Build your own plugins and custom themes." />
        </div>
      </main>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-black p-10">
      <div className="mb-4 text-white">{icon}</div>
      <h3 className="mb-2 font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-500">{desc}</p>
    </div>
  );
}
