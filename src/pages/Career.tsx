import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, HeartHandshake, Laptop, GraduationCap, Plane, Wallet } from 'lucide-react';
import { cn } from '../lib/utils';

const benefits = [
  {
    icon: <Wallet size={24} />,
    title: "Competitive Compensation",
    desc: "Top-tier salary packages, performance bonuses, and equity options for key roles."
  },
  {
    icon: <Heart size={24} />,
    title: "Comprehensive Health",
    desc: "Full medical, dental, and vision coverage for you and your dependents."
  },
  {
    icon: <Laptop size={24} />,
    title: "Remote First",
    desc: "Work from anywhere with our flexible remote and hybrid work policies."
  },
  {
    icon: <Plane size={24} />,
    title: "Generous PTO",
    desc: "Unlimited paid time off policy to ensure you rest and recharge."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Learning & Development",
    desc: "Annual stipend for courses, certifications, and industry conferences."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Great Culture",
    desc: "A supportive, inclusive environment where your voice is heard and valued."
  }
];

const jobs = [
  {
    title: "Senior Tax Attorney",
    department: "Legal & Resolution",
    location: "Remote (US)",
    type: "Full-Time"
  },
  {
    title: "CPA / Tax Preparer",
    department: "Tax Preparation",
    location: "Houston, TX / Hybrid",
    type: "Full-Time"
  },
  {
    title: "Client Success Manager",
    department: "Customer Experience",
    location: "Remote (US)",
    type: "Full-Time"
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-Time"
  }
];

export function Career() {
  return (
    <main className="flex-1 w-full bg-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-brand/10 via-brand/5 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
              <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-slate-900">Career</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Join Our <br />
              <span className="text-brand">Growing Team</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg">
              Help us build the future of tax resolution and financial empowerment. Work with industry experts in a dynamic, supportive environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#open-positions" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2"
              >
                View Open Positions <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            
            {/* Floating element */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Hiring Now</div>
                  <div className="text-2xl font-bold text-slate-900">12+ Roles</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Work With Us?</h2>
            <p className="text-lg text-slate-600">
              We believe in taking care of our team so they can take care of our clients. Here is what we offer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Break / Quote */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
            <img 
                src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Office culture" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                "Our greatest asset is our people. We're building a culture where innovation and empathy drive everything we do."
            </h2>
            <p className="text-brand font-semibold text-lg">Eric Jackson, Founder & Lead Tax Consultant</p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Open Positions</h2>
            <p className="text-lg text-slate-600">
              Don't see a role that fits? Send us your resume anyway. We are always looking for great talent.
            </p>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 hover:border-brand hover:shadow-lg transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div>
                  <div className="text-brand font-semibold text-sm mb-2">{job.department}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</div>
                    <div className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</div>
                  </div>
                </div>
                
                <div className="shrink-0">
                  <a 
                    href="mailto:contact@datarector.com" 
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-900 text-slate-900 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors w-full sm:w-auto"
                  >
                    Apply Now <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
