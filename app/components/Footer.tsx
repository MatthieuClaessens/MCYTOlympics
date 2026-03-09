export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-[#333] pt-20 pb-10 font-sans">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-[#E2B714] font-black text-2xl tracking-widest uppercase mb-6">
                        MCYT Olympics
                    </h2>
                    <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                        The ultimate competitive Minecraft summit. Built by the community, for the community. Join us in the pursuit of perfection.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                        Explore
                    </h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        {['Leaderboard', 'Event Schedule', 'Rules & FAQ', 'Apply'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-[#E2B714] transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
                        Community
                    </h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        {['Discord', 'Twitter', 'Twitch', 'Terms of Service'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-[#E2B714] transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-[#333]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                        © 2026 MCYT Olympics. Not affiliated with Mojang AB.
                    </p>

                    <a
                        href="https://matthieuclaessens.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] text-gray-400 hover:text-[#E2B714] uppercase tracking-widest transition-colors duration-300"
                    >
                        Designed & Developed by Matthieu CLAESSENS
                    </a>
                </div>
            </div>
        </footer>
    );
}