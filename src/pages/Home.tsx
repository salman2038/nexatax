import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { 
  ArrowRight, LayoutDashboard, FileText, Settings, 
  LogOut, Search, Bell, ShieldCheck, Scale, Calculator, 
  Lock, MessageSquare, Users, CheckCircle2, ChevronDown, 
  ChevronUp, TrendingDown, Clock, Shield
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- Data Arrays ---
const brands = ['Inc 5000', 'Deloitte Fast 500', 'Forbes 1000', 'Clutch Top 1000', 'Dot Comm Award', 'Horizon Gold'];

const features = [
  { title: "Tax Consultation", desc: "Strategic advice tailored to your unique financial situation and long-term goals.", icon: MessageSquare },
  { title: "Tax Negotiation", desc: "Expert mediation with tax authorities on your behalf to significantly reduce liabilities.", icon: Scale },
  { title: "Tax Preparation", desc: "Accurate, compliant, and optimized tax return filing for both individuals and businesses.", icon: FileText },
  { title: "Tax Relief & Resolution", desc: "Alleviate the heavy burden of back taxes, levies, and immediate IRS collection actions.", icon: ShieldCheck },
  { title: "Tax Settlement", desc: "Negotiating an Offer in Compromise (OIC) to settle your debt for far less than you owe.", icon: Calculator },
  { title: "Protection Plans", desc: "Ongoing tax monitoring, audit defense, and strict compliance to prevent future issues.", icon: Lock }
];

const steps = [
  { step: 1, title: "Free Case Evaluation", desc: "Schedule a confidential review of your tax situation with our licensed financial professionals." },
  { step: 2, title: "Strategy & Negotiation", desc: "We build a customized defense strategy and handle all aggressive communications with the IRS." },
  { step: 3, title: "Resolution & Freedom", desc: "We secure the best possible settlement, allowing you to move forward financially debt-free." }
];

const pricingPlans = [
  { name: "Basic Tax Prep", desc: "Accurate filing for individuals and small businesses to ensure full IRS compliance.", price: 299, features: ["Federal & State Returns", "Deduction Optimization", "Error-Free Guarantee", "Basic Audit Support", "Secure Document Portal"], isPopular: false },
  { name: "Tax Resolution", desc: "Comprehensive relief for those facing active IRS collections, liens, or wage garnishments.", price: 1499, features: ["Immediate Stay of Collections", "Direct IRS Negotiation", "Penalty Abatement filings", "Offer in Compromise prep", "Dedicated Case Manager"], isPopular: true },
  { name: "Protection Plan", desc: "Year-round active monitoring and audit defense for total financial peace of mind.", price: 99, features: ["24/7 Tax Status Monitoring", "Identity Theft Restoration", "Full Audit Representation", "Quarterly Consultations", "Priority Client Support"], isPopular: false }
];

const testimonials = [
  { quote: '"They stopped my bank levy in 48 hours."', text: "I was panicking when the IRS froze my accounts. JITFS stepped in, negotiated a release, and eventually settled my entire tax debt.", author: "Michael R.", role: "Small Business Owner" },
  { quote: '"Professional and highly effective."', text: "The team at JITFS handled my complex corporate tax audit with incredible precision. They are highly recommended for any corporate entity.", author: "Sarah Jenkins", role: "CEO" },
  { quote: '"I finally have peace of mind."', text: "After years of ignoring my unfiled returns out of fear, they helped me get compliant without facing massive penalties. Life changing.", author: "David T.", role: "Freelancer" },
  { quote: '"Saved me over $40,000 in penalties."', text: "Their negotiation skills are completely unmatched. They qualified me for an Offer in Compromise I didn't even know existed.", author: "Elena M.", role: "Restaurant Owner" }
];

const faqs = [
  { q: "Can you guarantee that my tax debt will be reduced?", a: "While we cannot guarantee a specific outcome as the IRS has final approval, our licensed experts have a proven track record of significantly reducing tax liabilities through programs like Offer in Compromise and Penalty Abatement." },
  { q: "Do I have to speak with the IRS directly?", a: "No. Once you sign a Power of Attorney, we take over all communications with the IRS and state tax agencies on your behalf, protecting your rights and alleviating your stress immediately." },
  { q: "How long does the tax resolution process typically take?", a: "Simple cases can be resolved in a few weeks, while complex negotiations like an Offer in Compromise may take 6-12 months. However, we act immediately to stop aggressive collection actions like levies and liens." },
];

export function Home() {
  const [isBusiness, setIsBusiness] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="flex-1 w-full bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background styling inspired by reference */}
        <AnimatedBackground />
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-brand/10 via-brand/5 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        {/* Decorative subtle orbs */}
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-slate-400" />
        <div className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-slate-900" />
        <div className="absolute top-80 left-[20%] w-1.5 h-1.5 rounded-full bg-brand" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-sm font-semibold mb-8">
              Expert Tax & Financial Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1] text-slate-900">
              Resolve Your Tax Problems <br className="hidden md:block" /> With Confidence
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
              Professional Tax Consultation, Relief, and Resolution services tailored to protect your assets and secure your financial future.
            </p>
            
            <div className="max-w-md mx-auto relative flex items-center bg-white rounded-full border border-slate-200 shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-brand focus-within:border-transparent transition-all">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full pl-6 pr-4 py-3 bg-transparent border-none focus:outline-none text-slate-900" 
              />
              <Link to="/contact" className="bg-brand text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-hover transition-colors whitespace-nowrap">
                Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Client Portal Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 w-full max-w-5xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-4 md:p-6 flex flex-col md:flex-row gap-6 relative z-20 text-left"
          >
          {/* Sidebar */}
          <div className="hidden md:flex w-64 bg-slate-50 rounded-2xl p-4 flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-8 px-2">
              <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
              </div> 
              NexaTax Portal
            </div>
            <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-xl font-medium text-sm"><LayoutDashboard size={18}/> Case Overview</div>
            <div className="flex items-center gap-3 text-slate-500 hover:bg-slate-100 transition-colors p-3 rounded-xl font-medium text-sm"><FileText size={18}/> Tax Documents</div>
            <div className="flex items-center gap-3 text-white bg-slate-900 p-3 rounded-xl font-medium text-sm mt-4 shadow-lg shadow-slate-900/20"><Bell size={18}/> IRS Notices</div>
            <div className="flex items-center gap-3 text-slate-500 hover:bg-slate-100 transition-colors p-3 rounded-xl font-medium text-sm mt-auto"><Settings size={18}/> Settings</div>
            <div className="flex items-center gap-3 text-slate-500 hover:bg-slate-100 transition-colors p-3 rounded-xl font-medium text-sm"><LogOut size={18}/> Logout</div>
          </div>
          
          {/* Main Area */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl md:text-2xl text-slate-900">Case Status</h3>
              <div className="flex gap-3">
                 <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100"><Search size={18}/></div>
                 <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100 relative">
                   <Bell size={18}/>
                   <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                 <div className="text-sm text-slate-700 mb-1 font-medium">Initial IRS Liability</div>
                 <div className="text-3xl font-bold text-slate-900 mb-2">$124,500</div>
                 {/* Mini Chart SVG mockup */}
                 <svg className="w-full h-12 text-slate-300" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,25 C20,25 20,10 40,15 C60,20 80,5 100,10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
               </div>
               <div className="bg-brand/20 p-5 rounded-2xl border border-brand/30">
                 <div className="text-sm text-slate-700 mb-1 font-medium">Settled Amount</div>
                 <div className="text-3xl font-bold text-slate-900 mb-2">$14,200</div>
                 <svg className="w-full h-12 text-slate-800" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,5 C25,5 30,20 50,15 C70,10 80,25 100,25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
               </div>
               <div className="hidden lg:block bg-slate-50 p-5 rounded-2xl border border-slate-100">
                 <div className="text-sm text-slate-500 mb-1 font-medium">Total Savings</div>
                 <div className="text-3xl font-bold text-slate-900 mb-2 text-green-600">$110,300</div>
                 <svg className="w-full h-12 text-slate-400" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,25 C30,20 40,5 60,10 C80,15 90,25 100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
               </div>
            </div>
            
            <div className="flex-1 grid lg:grid-cols-3 gap-4">
               <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col">
                 <div className="text-sm font-semibold mb-6 text-slate-900">Liability vs Settlement Timeline</div>
                 <div className="flex items-end gap-2 h-40 mt-auto px-2">
                    {[90, 85, 70, 50, 30, 15].map((h, i) => (
                      <div key={i} className="flex-1 flex gap-1.5 items-end h-full">
                         <div className="w-full bg-slate-200 rounded-t-md transition-all hover:bg-slate-300" style={{height: `${h}%`}}></div>
                         <div className="w-full bg-brand rounded-t-md transition-all hover:bg-brand-hover" style={{height: `${h * 0.3}%`}}></div>
                      </div>
                    ))}
                 </div>
               </div>
               <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                 <div className="text-sm font-semibold mb-6 text-slate-900">Resolution Progress</div>
                 {/* Circle Chart Mockup */}
                 <div className="relative w-32 h-32 mx-auto mt-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="20" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#FA5A2A" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="62.8" className="transition-all" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#0f172a" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="188.4" className="transition-all" />
                    </svg>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
      </section>

      {/* Brands Ticker */}
      <section className="py-12 border-b border-slate-100 relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-sm font-medium text-slate-500 mb-8"
          >
            Nationally Recognized & Award-Winning Firm
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {brands.map((brand, i) => (
              <motion.span 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} className="text-xl font-bold tracking-tight text-slate-700"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center flex-1"
              >
                <div className="w-24 h-24 relative mb-6">
                  {/* Mock node graphic */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 rounded-xl rotate-45 z-10 flex items-center justify-center">
                    <ShieldCheck size={24} className="text-white -rotate-45" />
                  </div>
                  <div className="absolute top-2 left-2 w-6 h-6 bg-slate-200 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-brand rounded-full" />
                  <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 100 100"><line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="2"/><line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <h3 className="font-semibold text-lg text-slate-900">Expert Tax Relief</h3>
                <p className="text-slate-500 text-sm mt-2">Protect your assets from IRS action</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center flex-1"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                   <div className="w-10 h-10 bg-blue-500 rounded-full absolute z-10"></div>
                   <div className="w-3 h-3 bg-red-400 rounded-full absolute top-0 right-0"></div>
                   <div className="w-4 h-4 bg-yellow-400 rounded-full absolute bottom-2 left-0"></div>
                </div>
                <h3 className="font-semibold text-lg text-slate-900">Comprehensive Solutions</h3>
                <p className="text-slate-500 text-sm mt-2">For individuals and businesses</p>
              </motion.div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex-1"
              >
                <div className="flex justify-between text-sm text-slate-500 mb-6">
                  <span>Average<br/>Reduction</span>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-slate-900">65% <span className="text-brand text-sm">▼</span></div>
                    Average liability reduction
                  </div>
                  <span className="text-right">Success<br/>Rate</span>
                </div>
                <div className="flex items-end justify-center gap-3 h-32 mt-4">
                  {[80, 70, 60, 50, 40, 30, 20].map((h, i) => (
                    <div key={i} className={cn("w-8 rounded-t-md", i === 6 ? "bg-brand" : "bg-slate-200")} style={{height: `${h}%`}}></div>
                  ))}
                </div>
              </motion.div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xl text-slate-900 mb-4">Direct IRS Representation</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  We handle all communications with tax authorities so you don't have to. Experience relief from aggressive collection calls immediately.
                </p>
                <h3 className="font-bold text-xl text-slate-900 mb-4">Financial Clarity</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Gain complete visibility into your tax situation and a clear, actionable path to permanent resolution.
                </p>
                <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand"/> Licensed Tax Attorneys & CPAs</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand"/> Flat-Fee Transparency</div>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center flex-1">
                <div className="w-full bg-slate-50 rounded-2xl p-4 mb-6 space-y-3">
                  <div className="bg-brand/20 text-slate-800 text-xs px-3 py-2 rounded-xl rounded-tl-none self-start inline-block">I received an IRS levy notice.</div>
                  <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-xl rounded-tr-none self-end inline-block float-right">We're on it. Upload it to your portal.</div>
                  <div className="clear-both"></div>
                  <div className="bg-brand/20 text-slate-800 text-xs px-3 py-2 rounded-xl rounded-tl-none self-start inline-block">Uploaded. What's next?</div>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 text-center">24/7 dedicated support from our tax experts.</h3>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center flex-1">
                <div className="w-24 h-24 relative mb-6">
                   <div className="absolute inset-0 border-2 border-slate-200 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                      <div className="w-8 h-3 border-2 border-slate-900 rounded-full" />
                      <div className="w-8 h-3 border-2 border-slate-900 rounded-full" />
                      <div className="w-8 h-3 border-2 border-slate-900 rounded-full" />
                   </div>
                   <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-sm border border-slate-100">
                     <Lock className="w-4 h-4 text-slate-900" />
                   </div>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 text-center">Secure, encrypted document management.</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-brand/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6"
            >
              Our Core Services
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900"
            >
              Comprehensive Tax Services
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / Steps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6"
          >
            How it Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-16"
          >
            Easy Steps To Get Started
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-200 border-t-2 border-dashed border-slate-300" />
            
            {steps.map((step, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative z-10 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center text-slate-900 font-bold text-xl mb-6">
                  {i === 0 ? <Users size={24} /> : i === 1 ? <Settings size={24} /> : <TrendingDown size={24} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side: Simplify Workflow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold mb-6 border border-slate-200">
                Proven Approach
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                A Comprehensive Solution to <br/> Resolve Tax Debt
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Seamlessly navigate complex tax codes with the industry's leading experts. Whether it's individual tax preparation, corporate compliance, or aggressive IRS collections, our team is designed to protect you—so you can focus on what matters most.
              </p>
              <Link to="/contact" className="inline-flex bg-slate-900 text-white px-6 py-3 rounded-full font-semibold items-center gap-2 hover:bg-brand hover:text-white transition-colors">
                Free Case Review <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative">
              <div className="aspect-square relative flex items-center justify-center">
                 {/* CSS donut chart graphic */}
                 <svg viewBox="0 0 100 100" className="w-3/4 h-3/4 transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f8fafc" strokeWidth="20" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#0f172a" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="50" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#FA5A2A" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="150" />
                 </svg>
                 <div className="absolute bottom-10 flex gap-4 bg-white p-4 rounded-2xl shadow-xl text-sm">
                   <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-900 rounded-full"/> <span className="font-semibold">Total Debt</span></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-400 rounded-full"/> <span className="font-semibold">Penalties</span></div>
                   <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand rounded-full"/> <span className="font-semibold">Settlement</span></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6">
              Transparent Engagement
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
              Engagement Models & Pricing
            </h2>
            
            <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1.5 shadow-sm">
              <button 
                onClick={() => setIsBusiness(false)}
                className={cn("px-6 py-2 rounded-full font-semibold text-sm transition-colors", !isBusiness ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100")}
              >
                Personal
              </button>
              <button 
                onClick={() => setIsBusiness(true)}
                className={cn("px-6 py-2 rounded-full font-semibold text-sm transition-colors flex items-center gap-2", isBusiness ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100")}
              >
                Business
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => {
              const displayPrice = isBusiness ? Math.floor(plan.price * 1.8) : plan.price;
              
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  key={i} className={cn(
                  "p-8 rounded-3xl border transition-all",
                  plan.isPopular ? "bg-white border-brand shadow-xl relative" : "bg-white border-slate-200 shadow-sm"
                )}>
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-white mb-6">
                    {i === 0 ? <FileText size={20}/> : i === 1 ? <Scale size={20}/> : <Shield size={20}/>}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 h-10">{plan.desc}</p>
                  <div className="flex items-end gap-1 mb-8">
                    <span className="text-slate-900 font-bold text-xl pb-2">From</span>
                    <span className="text-5xl font-bold text-slate-900 ml-1">${displayPrice}</span>
                  </div>
                  
                  <Link to="/contact" className={cn(
                    "w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors mb-8",
                    plan.isPopular ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  )}>
                    Consult with an Expert <ArrowRight size={16}/>
                  </Link>
                  
                  <div className="space-y-4">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 size={16} className="text-slate-900"/> {feat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold mb-6 border border-slate-200"
            >
              Our Testimonials
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900"
            >
              Success Stories From <br/> Our Clients
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col"
              >
                <h4 className="font-bold text-slate-900 mb-4">{t.quote}</h4>
                <p className="text-slate-500 text-sm mb-8 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold mb-6 border border-slate-200"
            >
              FAQs
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Frequently Asked <br/> Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg"
            >
              We know that dealing with the IRS can be intimidating. Here are answers to some of the most common questions our clients ask.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                key={i} className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-lg text-slate-900 text-left">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    {openFaq === i ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-2 text-slate-500 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="bg-brand rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-block bg-white text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 shadow-sm">
              Regain your freedom
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Take the First Step Toward Financial Freedom
            </h2>
            <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
              Schedule your confidential consultation today. Let our experts review your case and build a customized defense strategy.
            </p>
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-xl mx-auto text-lg">
              Book Your Free Consultation <ArrowRight size={20}/>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
