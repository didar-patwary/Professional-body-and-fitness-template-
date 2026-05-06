/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Users, 
  Target, 
  DollarSign, 
  Megaphone, 
  ChevronRight, 
  Dumbbell, 
  CheckCircle2,
  Camera,
  HeartPulse,
  TrendingUp,
  Mail,
  Instagram,
  Clapperboard,
  ShieldCheck
} from 'lucide-react';
import { cn } from './lib/utils';

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ id, title, icon, children }: SectionProps) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="py-16 border-b border-white/10"
  >
    <div className="flex items-center gap-3 mb-10">
      <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
        {icon}
      </div>
      <h2 className="text-3xl font-display font-medium tracking-tight uppercase">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('brand');

  const navItems = [
    { id: 'brand', label: 'Brand Strategy', icon: <Trophy className="w-4 h-4" /> },
    { id: 'team', label: 'Team Hierarchy', icon: <Users className="w-4 h-4" /> },
    { id: 'scouting', label: 'Athlete Scouting', icon: <Target className="w-4 h-4" /> },
    { id: 'revenue', label: 'Revenue Model', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'marketing', label: 'Marketing Roadmap', icon: <Megaphone className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-primary/30">
      {/* Editorial Hero */}
      <header className="relative h-screen flex flex-col justify-center px-6 lg:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_10%,#2a2a2a_0%,#0B0B0C_100%)]" />
        
        {/* Animated Wave Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <motion.div 
            animate={{ 
              x: [0, 50, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] rounded-[40%] bg-brand-primary/10 blur-[120px]"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <span className="text-brand-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
            The Wave Evolution
          </span>
          <h1 className="text-7xl md:text-[12rem] font-display font-bold leading-[0.8] uppercase tracking-tighter mb-8">
            Body <br /> <span className="text-brand-primary">Wave</span> Team
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light italic">
            "Forging the next generation of aesthetic dominance and athletic performance."
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-6 lg:left-20 flex items-center gap-4 group cursor-pointer"
          onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-colors">
            <ChevronRight className="w-5 h-5 rotate-90 text-white/50 group-hover:text-brand-primary" />
          </div>
          <span className="text-xs uppercase tracking-widest text-white/30 group-hover:text-white/70 transition-colors">
            View Operational Blueprint
          </span>
        </motion.div>
      </header>

      {/* Main Content Dashboard */}
      <main id="content" className="max-w-7xl mx-auto px-6 lg:px-20 py-20">
        
        {/* Navigation Rail */}
        <nav className="sticky top-10 z-50 mb-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1 flex items-center justify-between shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 uppercase tracking-wider",
                  activeTab === item.id 
                    ? "bg-brand-primary text-black scale-105 shadow-lg shadow-brand-primary/20" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Sections */}
        
        {/* Brand Strategy */}
        <Section id="brand" title="Brand Strategy" icon={<Trophy className="w-6 h-6" />}>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Apex Wave Performance", desc: "Scientific precision meets aesthetic peak." },
              { name: "Titan Body Collective", desc: "For those who build legacies, not just bodies." },
              { name: "Vanguard Aesthetics", desc: "Leading the new standard of physical excellence." }
            ].map((brand, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 group cursor-default"
              >
                <span className="text-brand-primary/40 font-mono text-xs mb-4 block">Option 0{i+1}</span>
                <h3 className="text-xl font-display font-medium mb-3 group-hover:text-brand-primary transition-colors">{brand.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-brand-primary text-black rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-2 block">Official Mission Statement</span>
              <p className="text-2xl md:text-3xl font-display font-bold leading-tight">
                "To cultivate an elite ecosystem where world-class aesthetics meet uncompromising performance through rigorous training, strategic branding, and a culture of relentless evolution."
              </p>
            </div>
            <Dumbbell className="absolute -bottom-10 -right-10 w-64 h-64 text-black/5 rotate-12" />
          </div>
        </Section>

        {/* Team Hierarchy */}
        <Section id="team" title="Team Hierarchy" icon={<Users className="w-6 h-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "Head Coach/Director", icon: <ShieldCheck className="w-5 h-5" />, tasks: ["Overall strategy", "Technical programming", "Core values"] },
              { role: "Operations Manager", icon: <Target className="w-5 h-5" />, tasks: ["Logistics", "Scheduling", "Admin protocol"] },
              { role: "Media & Branding Lead", icon: <Camera className="w-5 h-5" />, tasks: ["Content creation", "Platform growth", "Sponsor relations"] },
              { role: "Athlete Coordinator", icon: <HeartPulse className="w-5 h-5" />, tasks: ["Scouting", "Onboarding", "Success management"] },
              { role: "Lead Nutritionist", icon: <TrendingUp className="w-5 h-5" />, tasks: ["Dietary blueprints", "Supplement strategy", "Metabolic health"] }
            ].map((role, i) => (
              <div key={i} className="flex flex-col p-6 border border-white/10 rounded-xl hover:border-brand-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-brand-primary">{role.icon}</div>
                  <h4 className="font-medium text-lg">{role.role}</h4>
                </div>
                <ul className="space-y-2">
                  {role.tasks.map((task, j) => (
                    <li key={j} className="text-white/40 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-primary" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Athlete Scouting & Onboarding */}
        <Section id="scouting" title="Athlete Scouting & Onboarding" icon={<Target className="w-6 h-6" />}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-display mb-6 opacity-80 uppercase tracking-widest">5-Point Selection Criteria</h3>
              <div className="space-y-4">
                {[
                  { title: "Stage Presence & Posing", detail: "Ability to command attention and showcase anatomy with fluidity." },
                  { title: "Muscle Symmetry & Proportions", detail: "A balanced physique that adheres to the 'Golden Ratio' of aesthetics." },
                  { title: "Social Media Influence", detail: "Marketability and engagement potential across key demographic platforms." },
                  { title: "Work Ethic & Coachability", detail: "Willingness to adapt to team protocols and represent the brand professionally." },
                  { title: "Competitive History", detail: "Proven track record or high potential in regional/pro circuits." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group">
                    <div className="text-brand-primary font-mono text-lg font-bold">0{i+1}.</div>
                    <div>
                      <h4 className="font-medium group-hover:text-brand-primary transition-colors">{item.title}</h4>
                      <p className="text-white/40 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-brand-primary/20 rounded-3xl p-8 h-fit">
              <h3 className="text-xl font-display mb-6 text-brand-primary uppercase">'Welcome' Outline</h3>
              <div className="space-y-6">
                {[
                  { step: "Brand Immersion", text: "Receive the Wave Elite culture deck and digital style guide." },
                  { step: "Initial Assessment", text: "Physical benchmarks, nutrient panel, and aesthetic analysis." },
                  { step: "Communication Pipeline", text: "Exclusive access to Discord/Slack and athlete management portal." },
                  { step: "Gear Deployment", text: "Delivery of first-round team apparel and performance kit." },
                  { step: "Strategic Plan", text: "Customized 12-month competition and marketing roadmap." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-bold text-white/30 uppercase block">{step.step}</span>
                      <p className="text-sm">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full py-4 bg-brand-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4" />
                DRAFT WELCOME EMAIL
              </button>
            </div>
          </div>
        </Section>

        {/* Revenue Model */}
        <Section id="revenue" title="Sustainable Revenue Model" icon={<DollarSign className="w-6 h-6" />}>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { type: "Tiered Memberships", icon: <ShieldCheck className="w-6 h-6" />, val: "$ Elite & Pro levels" },
              { type: "Team Apparel", icon: <Dumbbell className="w-6 h-6" />, val: "$ Drops & Exclusive kits" },
              { type: "Digital Coaching", icon: <TrendingUp className="w-6 h-6" />, val: "$ Specialized blueprints" },
              { type: "Sponsor Equity", icon: <Instagram className="w-6 h-6" />, val: "$ Affiliate & Direct deals" }
            ].map((rev, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border-t-2 border-brand-primary text-center">
                <div className="mx-auto w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-primary">
                  {rev.icon}
                </div>
                <h4 className="font-medium mb-1">{rev.type}</h4>
                <p className="text-xs font-mono text-white/40">{rev.val}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-zinc-900 rounded-3xl p-10 border border-white/5 overflow-hidden relative">
            <h3 className="text-2xl font-display mb-4">Sustainability Thesis</h3>
            <p className="text-white/60 leading-relaxed max-w-3xl">
              Our model moves beyond simple 'coaching fees.' By building a lifestyle brand, we generate revenue through productized knowledge (digital assets) and physical prestige (apparel), creating a diversified ecosystem that funds athlete travel, sponsorships, and team expansion.
            </p>
            <div className="absolute right-0 bottom-0 opacity-[0.03] scale-150 rotate-12">
              <DollarSign className="w-64 h-64" />
            </div>
          </div>
        </Section>

        {/* Marketing Roadmap */}
        <Section id="marketing" title="30-Day Marketing Roadmap" icon={<Megaphone className="w-6 h-6" />}>
          <div className="space-y-4">
            {[
              { phase: "Phase 1: The Incubation (Days 1-10)", focus: "Teaser content, shadowy athlete silhouettes, 'Something is Coming' cryptic posts." },
              { phase: "Phase 2: The Manifest (Days 11-20)", focus: "Official name reveal, core values video, introducing founding athletes via high-fidelity shorts/reels." },
              { phase: "Phase 3: The Surge (Days 21-30)", focus: "Call for talent, 'Day in the Life' series, live Q&A sessions on Instagram/TikTok." }
            ].map((phase, i) => (
              <div key={i} className="flex gap-6 p-8 border border-white/5 rounded-3xl group hover:bg-white/5 transition-all">
                <div className="h-12 w-12 bg-brand-primary text-black rounded-full flex items-center justify-center font-bold shrink-0">
                  {i+1}
                </div>
                <div>
                  <h4 className="text-xl font-display font-medium text-brand-primary mb-2">{phase.phase}</h4>
                  <p className="text-white/50">{phase.focus}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#E1306C]/20 to-[#833AB4]/20 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="w-6 h-6 text-[#E1306C]" />
                <h5 className="font-bold uppercase text-xs tracking-tighter">Instagram Strategy</h5>
              </div>
              <p className="text-sm text-white/60">High-fidelity static carousel posts for educational value + 'Reels' showing aesthetic posing transitions.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Clapperboard className="w-6 h-6" />
                <h5 className="font-bold uppercase text-xs tracking-tighter">TikTok Strategy</h5>
              </div>
              <p className="text-sm text-white/60">Trending audio 'Hard-cuts', training intensity clips, and personality-driven athlete vlogs.</p>
            </div>
          </div>
        </Section>

      </main>

      <footer className="py-20 border-t border-white/10 text-center">
        <p className="text-white/20 font-mono text-xs uppercase tracking-[0.5em]">
          &copy; 2024 WAVE ELITE PERFORMANCE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
