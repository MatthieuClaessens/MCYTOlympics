import Image from "next/image";
import Olympics from "@/public/olympics.png";
import Owner from "@/public/porkstridebust.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#E5E5E5] font-sans selection:bg-[#E2B714]/30">
      
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f2937_0%,#080808_100%)]" />

      <nav className="relative z-10 border-b border-[#333] bg-[#0c0c0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-4 text-2xl font-black tracking-[0.2em] uppercase text-[#E2B714]">
            <span>MCYT Olympics</span>
            <div className="w-24 h-24 relative">
              <Image 
                src={Olympics} 
                alt="olympics" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>

          <div className="flex gap-6 text-[10px] uppercase items-center font-bold tracking-widest">
            <a href="#" className="hover:text-[#E2B714] transition-colors">Home</a>
            <a href="#" className="hover:text-[#E2B714] transition-colors">Events</a>
            <a href="#" className="hover:text-[#E2B714] transition-colors">Leaderboard</a>
            <a href="#" className="hover:text-[#E2B714] transition-colors">Creators</a>
            <a href="#" className="hover:text-[#E2B714] transition-colors">Staff</a>
            <a href="#" className="hover:text-[#E2B714] transition-colors">Rules & Info</a>
            <a href="#" className="border border-[#E2B714] px-4 py-2 hover:bg-[#E2B714] hover:text-black transition-all">Sign in</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              MCYT<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #E5E5E5' }}>OLYMPICS</span>
            </h1>
            <p className="text-[#999] text-xl mb-10 max-w-md border-l-4 border-[#E2B714] pl-6">
              Gaming for Charity. Every Year. For the Community.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#E2B714] text-black px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Join the Arena
              </button>
            </div>
          </div>

          <div className="bg-[#121212] border border-[#333] p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 font-black text-[#E2B714]">LIVE</div>
            <h3 className="text-xs uppercase font-bold text-[#666] mb-8">Server Status</h3>
            <div className="text-6xl font-black mb-2">342<span className="text-xl text-[#666]">/ 500</span></div>
            <div className="w-full h-2 bg-[#222] mt-4 overflow-hidden">
              <div className="h-full bg-[#E2B714] w-[68%]" />
            </div>
            <p className="mt-6 text-sm text-[#999] font-mono">IP: mc.craftolympics.fr</p>
          </div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-[#333]">
        <h2 className="text-xs uppercase font-bold tracking-[0.3em] text-[#E2B714] mb-12">// The Events</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[ 'Battle Royale', 'Redstone', 'Speed-Build', 'PvP Event' ].map((name, i) => (
            <div key={name} className="h-64 border border-[#333] p-6 flex flex-col justify-end hover:border-[#E2B714] transition-all group cursor-pointer">
              <span className="text-[10px] text-[#666] mb-2 font-mono">0{i+1}</span>
              <h4 className="text-xl font-black uppercase">{name}</h4>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-white">OUR MISSION</h2>
        <div className="grid grid-cols-2 mx-auto">
          <div>
          <Image src={Owner} alt={"Owner Porkstridebust"} className="w-[350px]"/>
          <p className="text-2xl">Founder Porkstridebust</p>
          </div>
          <div>
          <p>test</p>
          </div>
        </div>
      </section>
    </div>
  );
};