import React from 'react';
import { Section } from '../components/common/UI';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const Updates = () => {
  const posts = [
    {
        id: 1,
        title: "TerraField Lagos Branch Now Open for Business",
        date: "October 24, 2024",
        category: "Expansion",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b1e?q=80&w=800&auto=format&fit=crop",
        excerpt: "We are thrilled to announce the opening of our new distribution hub in Lagos, bringing fresh produce closer to our partners."
    },
    {
        id: 2,
        title: "Q3 Harvest Report: Tomato Yields Exceed Expectations",
        date: "September 15, 2024",
        category: "Production",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop",
        excerpt: "Our pilot greenhouse project has delivered record yields this quarter, proving the viability of our controlled-environment model."
    },
    {
        id: 3,
        title: "Partnership Announcement: Logistics Alliance",
        date: "August 30, 2024",
        category: "Partnership",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        excerpt: "TerraField has signed a strategic MOU with top logistics providers to ensure 24-hour delivery windows."
    }
  ];

  return (
    <>
      <div className="section" style={{paddingTop: '6rem', paddingBottom: '2rem'}}>
          <div className="container text-center">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">TerraField News</span>
              <h1 className="text-4xl font-heading font-bold mb-4 mt-2">Latest Updates</h1>
              <p className="max-w-2xl mx-auto text-gray-600">
                  Stay informed about our harvest cycles, expansion milestones, and community impact.
              </p>
          </div>
      </div>

      <Section className="bg-light">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {posts.map((post) => (
                    <div key={post.id} className="card p-0 overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full rounded-xl border border-gray-100">
                        <div className="h-48 overflow-hidden relative">
                             <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                             <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">{post.category}</span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs text-gray-400 mb-2 block">{post.date}</span>
                            <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                                <Link to="#" style={{textDecoration: 'none', color: 'inherit'}}>{post.title}</Link>
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Link to="#" className="text-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                Read Full Story <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter Section */}
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10 max-w-xl mx-auto">
                    <Mail size={48} className="mx-auto mb-6 text-accent" />
                    <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-gray-300 mb-8">
                        Get quarterly reports, harvest notifications, and partnership opportunities delivered directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email address" className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent" />
                        <button className="btn btn-accent px-8 py-3 whitespace-nowrap">Subscribe</button>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

        </div>
      </Section>
    </>
  );
};

export default Updates;
