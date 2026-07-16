import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Scale, Shield, ArrowRight, Minus, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const pricingPlans = [
  { name: "Basic Tax Prep", desc: "Accurate filing for individuals and small businesses to ensure full IRS compliance.", price: 299, features: ["Federal & State Returns", "Deduction Optimization", "Error-Free Guarantee", "Basic Audit Support", "Secure Document Portal"], isPopular: false },
  { name: "Tax Resolution", desc: "Comprehensive relief for those facing active IRS collections, liens, or wage garnishments.", price: 1499, features: ["Immediate Stay of Collections", "Direct IRS Negotiation", "Penalty Abatement filings", "Offer in Compromise prep", "Dedicated Case Manager"], isPopular: true },
  { name: "Protection Plan", desc: "Year-round active monitoring and audit defense for total financial peace of mind.", price: 99, features: ["24/7 Tax Status Monitoring", "Identity Theft Restoration", "Full Audit Representation", "Quarterly Consultations", "Priority Client Support"], isPopular: false }
];

const comparisonFeatures = [
  { name: "Federal & State Returns", basic: true, resolution: true, protection: true },
  { name: "Deduction Optimization", basic: true, resolution: true, protection: true },
  { name: "Error-Free Guarantee", basic: true, resolution: true, protection: true },
  { name: "Basic Audit Support", basic: true, resolution: true, protection: true },
  { name: "Secure Document Portal", basic: true, resolution: true, protection: true },
  { name: "Direct IRS Negotiation", basic: false, resolution: true, protection: true },
  { name: "Penalty Abatement filings", basic: false, resolution: true, protection: true },
  { name: "Offer in Compromise prep", basic: false, resolution: true, protection: true },
  { name: "Dedicated Case Manager", basic: false, resolution: true, protection: true },
  { name: "24/7 Tax Status Monitoring", basic: false, resolution: false, protection: true },
  { name: "Identity Theft Restoration", basic: false, resolution: false, protection: true },
  { name: "Full Audit Representation", basic: false, resolution: false, protection: true },
  { name: "Quarterly Consultations", basic: false, resolution: false, protection: true }
];

const faqs = [
  { q: "What is included in the free consultation?", a: "During your free consultation, our experts will review your current tax situation, outline potential solutions, and provide a clear overview of how we can help you achieve financial freedom." },
  { q: "Do you offer payment plans?", a: "Yes, we understand that tax issues can be financially stressful. We offer flexible payment plans tailored to your specific circumstances." },
  { q: "How long does the tax resolution process take?", a: "The timeline varies significantly depending on the complexity of your case and the IRS's responsiveness. However, many cases see substantial progress within 3 to 6 months." },
  { q: "Are there any hidden fees?", a: "No. We pride ourselves on transparent pricing. The fees outlined in your engagement letter are the fees you pay—no surprises." }
];

export function Pricing() {
  const [isBusiness, setIsBusiness] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="flex-1 w-full font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand/10 via-brand/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="text-center relative z-10 mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-900">Pricing</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Transparent Pricing, <br className="hidden md:block" /> No Surprises
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            Choose the right plan for your tax situation. From basic preparation to comprehensive resolution and ongoing protection.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1.5 shadow-sm"
          >
            <button 
              onClick={() => setIsBusiness(false)}
              className={cn("px-8 py-3 rounded-full font-semibold text-sm transition-colors", !isBusiness ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100")}
            >
              Personal
            </button>
            <button 
              onClick={() => setIsBusiness(true)}
              className={cn("px-8 py-3 rounded-full font-semibold text-sm transition-colors flex items-center gap-2", isBusiness ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100")}
            >
              Business
            </button>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => {
              const displayPrice = isBusiness ? Math.floor(plan.price * 1.8) : plan.price;
              
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  key={i} className={cn(
                  "p-8 rounded-[2.5rem] border transition-all",
                  plan.isPopular ? "bg-white border-brand shadow-2xl relative scale-100 md:scale-105 z-10" : "bg-white border-slate-200 shadow-sm hover:shadow-md"
                )}>
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6">
                    {i === 0 ? <FileText size={24}/> : i === 1 ? <Scale size={24}/> : <Shield size={24}/>}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 h-12">{plan.desc}</p>
                  <div className="flex items-end gap-1 mb-8">
                    <span className="text-slate-900 font-bold text-xl pb-2">From</span>
                    <span className="text-6xl font-bold text-slate-900 ml-1 tracking-tight">${displayPrice}</span>
                  </div>
                  
                  <Link to="/contact" className={cn(
                    "w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors mb-10 text-lg",
                    plan.isPopular ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  )}>
                    Get Started <ArrowRight size={18}/>
                  </Link>
                  
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">What's included</div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 size={20} className="text-brand shrink-0"/> 
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white hidden md:block">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Compare Plans</h2>
            <p className="text-slate-500 text-lg">Detailed breakdown of what is included in each plan.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-6 px-6 text-xl font-bold text-slate-900 border-b border-slate-200 w-1/3">Features</th>
                  <th className="py-6 px-6 text-xl font-bold text-slate-900 border-b border-slate-200 text-center">Basic</th>
                  <th className="py-6 px-6 text-xl font-bold text-brand border-b border-slate-200 text-center bg-brand/5 rounded-t-2xl">Resolution</th>
                  <th className="py-6 px-6 text-xl font-bold text-slate-900 border-b border-slate-200 text-center">Protection</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feat, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-slate-700 border-b border-slate-100">{feat.name}</td>
                    <td className="py-4 px-6 border-b border-slate-100 text-center">
                      {feat.basic ? <CheckCircle2 size={20} className="text-slate-900 mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 border-b border-slate-100 text-center bg-brand/5">
                      {feat.resolution ? <CheckCircle2 size={20} className="text-brand mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 border-b border-slate-100 text-center">
                      {feat.protection ? <CheckCircle2 size={20} className="text-slate-900 mx-auto" /> : <Minus size={20} className="text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-slate-800 text-sm font-semibold mb-6 border border-slate-200">
              FAQs
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={cn(
                  "bg-white border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                  openFaq === i ? "border-brand shadow-md" : "border-slate-200 hover:border-slate-300"
                )}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 pr-8">{faq.q}</h3>
                  <div className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
                    openFaq === i ? "border-brand text-brand" : "border-slate-200 text-slate-400"
                  )}>
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
