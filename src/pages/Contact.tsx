import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <main className="flex-1 w-full font-sans bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand/10 via-brand/5 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-900">Contact Us</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Get In Touch With <br className="hidden md:block" /> Our Expert Team
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Have a question or ready to start your next big project? We are here to help. Reach out to our team of experts.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand/20 text-slate-800 text-sm font-semibold mb-6">
              Doing Something Great?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight">
              Let's Make Something <br /> Awesome Together
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Need Help?</h4>
                  <div className="font-semibold text-slate-900 text-lg">800 330 888 55 44</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Email Us</h4>
                  <div className="font-semibold text-slate-900 text-lg">support@datarector.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 shrink-0 shadow-sm">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-medium mb-1">Office</h4>
                  <div className="font-semibold text-slate-900 text-lg">Houston, TX (HQ)</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 md:p-10"
          >
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
                className="bg-brand text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-brand-hover transition-colors shadow-sm"
              >
                Send Message Us <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-slate-100 border-t border-slate-200 relative overflow-hidden">
        {/* Placeholder for actual map */}
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl max-w-sm">
             <MapPin size={32} className="mx-auto text-brand mb-4" />
             <h3 className="text-xl font-bold text-slate-900 mb-2">Datarector HQ</h3>
             <p className="text-slate-500 text-sm">We are located in Houston, TX and serve clients globally.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
