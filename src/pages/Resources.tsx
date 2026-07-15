import { motion } from 'motion/react';
import { ArrowUpRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export function Resources() {
  return (
    <main className="flex-1 w-full font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-brand/10 via-brand/5 to-white pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-full opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="text-center relative z-10 mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-slate-900">Resources</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Insights & <br className="hidden md:block" /> Engineering Resources
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Deep dives into software architecture, digital marketing strategies, and technology trends for modern businesses.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters & Search */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {["All", "Software Development", "Mobile App Development", "Digital Marketing", "Design"].map((cat, i) => (
              <button 
                key={i}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  i === 0 ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all w-full md:w-64"
            />
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            >
              <Link to={`/resources/${article.id}`} className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="text-brand font-semibold px-3 py-1 bg-brand/10 rounded-full">{article.category}</span>
                    <span className="text-slate-400 font-medium">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-bold text-slate-900 mt-auto">
                    Read Article 
                    <span className="w-8 h-8 ml-3 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand transition-colors">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-brand/20 rounded-full filter blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tech insights, digital marketing strategies, and industry news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand text-white placeholder:text-slate-400"
            />
            <button type="submit" className="px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-white transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
