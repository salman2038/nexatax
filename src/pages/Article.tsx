import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { articles } from '../data/articles';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <main className="flex-1 w-full pt-40 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-500 mb-8">The resource you're looking for doesn't exist.</p>
          <Link to="/resources" className="text-brand font-semibold hover:underline">
            Back to Resources
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 w-full bg-white font-sans">
      <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/resources"
          className="inline-flex items-center text-slate-500 hover:text-brand transition-colors mb-8 font-medium text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Resources
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm mb-6 flex-wrap">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-brand/10 text-brand rounded-full font-semibold">
              <Tag size={14} />
              {article.category}
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Calendar size={14} />
              {article.date}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            {article.title}
          </h1>
          
          <p className="text-xl text-slate-500 leading-relaxed font-light">
            {article.excerpt}
          </p>
        </header>
        
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-xl border border-slate-100">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-slate-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to transform your business?</h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
            Our experts are here to help you navigate complex technological challenges and build scalable solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand hover:text-white transition-all shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
