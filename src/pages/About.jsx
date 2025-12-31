import React, { useState } from 'react';
import { Target, Eye, ChevronUp, ChevronDown } from 'lucide-react';

const About = () => {
    const [openValue, setOpenValue] = useState('Stewardship');
    const values = [
        { name: 'Stewardship', desc: 'We act as responsible caretakers of the land, ensuring that our farming practices preserve the environment.' },
        { name: 'Consistency', desc: 'Standardized operations across all branches to ensure reliable quality.' },
        { name: 'Transparency', desc: 'Open communication with investors and buyers. No hype, just operational facts.' },
        { name: 'Continuous Learning', desc: 'We innovate and adapt, using data to improve our yields and sustainability.' }
    ];

  return (
    <>
      <section className="section">
        <div className="container about-hero">
            <div className="order-2">
                <img 
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1500" 
                    alt="Hands holding plant"
                    style={{borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} 
                />
            </div>
            <div>
                <h1>
                    Terra + <span className="text-accent">Field</span><br/>
                    Rooted in Earth,<br/>
                    Expanded by Process.
                </h1>
                <p>
                    <strong>Terra</strong> means Earth. <strong>Field</strong> represents productive land. Together, we bring structure to nature.
                </p>
                <button className="btn btn-primary">Learn Our Story</button>
            </div>
        </div>
      </section>

      <section className="section bg-light" style={{background: 'var(--color-bg-alt)'}}>
        <div className="container">
             <div className="text-center" style={{marginBottom: '4rem'}}>
                 <h2>Our Core Philosophy</h2>
                 <p style={{maxWidth: '600px', margin: '0 auto'}}>Revolutionizing agriculture through standardization.</p>
             </div>

             <div className="grid grid-2" style={{marginBottom: '4rem'}}>
                <div className="card">
                    <div className="card-icon"><Target size={24} /></div>
                    <h3>Mission</h3>
                    <p>To revolutionize Nigerian agriculture through standardized, scalable farming models.</p>
                </div>
                 <div className="card">
                    <div className="card-icon"><Eye size={24} /></div>
                    <h3>Vision</h3>
                    <p>Feeding the future through a connected network of sustainable, high-yield farms.</p>
                </div>
             </div>

             {/* Values Section */}
             <div className="card" style={{padding: '3rem'}}>
                <div className="grid grid-2" style={{gap: '2rem'}}>
                    <div>
                        <span className="uppercase text-accent font-bold text-sm">Our Culture</span>
                        <h2>Our Values</h2>
                        <p>These principles guide every seed we sow.</p>
                    </div>
                    <div className="values-list">
                        {values.map((val) => (
                             <div 
                                key={val.name} 
                                className={`value-item ${openValue === val.name ? 'active' : ''}`}
                                onClick={() => setOpenValue(val.name !== openValue ? val.name : '')}
                             >
                                <div className="flex justify-between items-center">
                                    <span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{val.name}</span>
                                    {openValue === val.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                                {openValue === val.name && (
                                    <div style={{marginTop: '0.5rem', color: '#666', fontSize: '0.9rem'}}>{val.desc}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </div>
      </section>
    </>
  );
};

export default About;
