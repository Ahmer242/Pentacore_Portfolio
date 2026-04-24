"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  const params = useParams();
  const slug = params.slug as string;

  // Formatting slug to title
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Link href="/#work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group text-sm font-medium">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Deployments
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <p className="text-sm font-semibold text-white/60 uppercase tracking-widest">Case Study</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">{title}</h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-16">
            A comprehensive overview of how we architected, engineered, and scaled this solution.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video bg-zinc-900 border border-white/10 rounded-3xl mb-16 overflow-hidden relative flex items-center justify-center shadow-2xl"
        >
          {/* Placeholder for project dashboard/screenshots */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <p className="text-white/20 font-mono tracking-widest relative z-10">PROJECT VISUAL ASSET</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
           <div className="md:col-span-2 prose prose-invert max-w-none">
             <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
             <p className="text-white/70 leading-relaxed mb-8">
               Our client faced massive scalability issues. Their existing infrastructure was bottlenecking during peak traffic, and their UI felt outdated. They needed an architecture that could handle sudden exponential growth while maintaining sub-second load times.
             </p>
             <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
             <p className="text-white/70 leading-relaxed">
               We completely decoupled the frontend from their monolithic backend. By migrating to a Next.js framework backed by a serverless architecture, we instantly improved performance metrics by 300%. Furthermore, we integrated a custom AI automation layer to handle tier-1 customer inquiries, drastically reducing operational overhead.
             </p>
           </div>
           
           <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 h-fit">
              <h4 className="font-bold text-lg mb-6 tracking-tight">Deployment Stats</h4>
              <ul className="space-y-6">
                 <li>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Tech Stack</p>
                    <p className="font-medium">Next.js, Node, Three.js</p>
                 </li>
                 <li>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Timeline</p>
                    <p className="font-medium">6 Weeks</p>
                 </li>
                 <li>
                    <p className="text-sm text-white/50 mb-1 uppercase tracking-wider">Impact</p>
                    <p className="font-medium text-emerald-400">40% Cost Reduction</p>
                 </li>
              </ul>
           </div>
        </motion.div>
      </div>
    </main>
  );
}
