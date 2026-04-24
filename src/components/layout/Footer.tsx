import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-bold text-lg">
                P
              </div>
              <span className="font-bold text-2xl tracking-tight">PentacoreSolution</span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              We engineer premium digital experiences. Web, App, and AI solutions for bold startups and visionary enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="#services" className="text-white/60 hover:text-white flex items-center gap-1 group">Web Development <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-white flex items-center gap-1 group">App Development <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-white flex items-center gap-1 group">AI Solutions <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#process" className="text-white/60 hover:text-white flex items-center gap-1 group">Our Process <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="#about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#work" className="text-white/60 hover:text-white transition-colors">Client Work</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} PentacoreSolution. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
