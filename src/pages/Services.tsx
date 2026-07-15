import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, Scale, FileText, 
  MessageSquare, Calculator, Lock, 
  CheckCircle2, Mail, Phone, MapPin
} from 'lucide-react';

const services = [
  {
    id: "tax-consultation",
    title: "Tax Consultation",
    desc: "Strategic advice tailored to your unique financial situation and long-term goals.",
    icon: MessageSquare,
  },
  {
    id: "tax-negotiation",
    title: "Tax Negotiation",
    desc: "Expert mediation with tax authorities on your behalf to significantly reduce liabilities.",
    icon: Scale,
  },
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    desc: "Accurate, compliant, and optimized tax return filing for both individuals and businesses.",
    icon: FileText,
  },
  {
    id: "tax-relief",
    title: "Tax Relief & Resolution",
    desc: "Alleviate the heavy burden of back taxes, levies, and immediate IRS collection actions.",
    icon: ShieldCheck,
  },
  {
    id: "tax-settlement",
    title: "Tax Settlement",
    desc: "Negotiating an Offer in Compromise (OIC) to settle your debt for far less than you owe.",
    icon: Calculator,
  },
  {
    id: "protection-plans",
    title: "Protection Plans",
    desc: "Ongoing tax monitoring, audit defense, and strict compliance to prevent future issues.",
    icon: Lock,
  }
];

export function Services() {
  return (
    <main className="flex-1 w-full bg-white overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-brand/10 via-brand/5 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="text-center relative z-10 mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-900">Our Services</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]"
          >
            Services designed for <br className="hidden md:block" /> speed, scale & success
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Our services are designed to support your financial health at every stage—from proactive tax planning to seamless IRS resolutions.
          </motion.p>
        </div>

        {/* Hero Image Grid */}
        <div className="relative z-10 grid md:grid-cols-12 gap-6 max-w-6xl mx-auto mt-12 md:mt-20">
          <div className="md:col-span-7 rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden h-[240px]">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Business meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-slate-950 text-white rounded-3xl p-8 flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full pointer-events-none" />
              <h3 className="text-2xl font-bold mb-4">Empowering your finances with expert insights</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                We provide everything you need to resolve debt, scale your business, and succeed financially.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand text-slate-950 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-hover transition-colors self-start">
                Request a Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gradient-to-b from-brand/5 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6">
              Services We Provide
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              From crisis to clarity—We've <br className="hidden md:block" /> got you covered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-900 mb-8 group-hover:scale-110 transition-transform">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-8 flex-1">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-brand transition-colors border border-slate-200 px-5 py-2.5 rounded-full self-start hover:border-brand">
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6">
                Doing Something Great?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight">
                Let's Make Something <br /> Awesome Together
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-sm font-medium mb-1">Need Help?</h4>
                    <div className="font-semibold text-slate-900 text-lg">800 330 888 55 44</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-sm font-medium mb-1">Email Us</h4>
                    <div className="font-semibold text-slate-900 text-lg">support@jitfs.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 shrink-0">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-sm font-medium mb-1">Office</h4>
                    <div className="font-semibold text-slate-900 text-lg">Houston, TX (HQ)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Need Any Help? Say Hello</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                />
                <textarea 
                  placeholder="Write message" 
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="bg-brand text-slate-950 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-brand-hover transition-colors shadow-sm"
                >
                  Send Message Us <ArrowRight size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* Subtle dotted background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-block bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
              Launch with ease
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Launch Your Free Trial Today
            </h2>
            <p className="text-slate-800 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the full power of our platform—free for 14 days. No credit card required, no strings attached.
            </p>
            <Link to="/contact" className="bg-slate-950 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-2xl mx-auto text-lg group">
              Start Your 14-Day Free Trial 
              <span className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-brand transition-colors">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

