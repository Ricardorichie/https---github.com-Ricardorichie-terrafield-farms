import React from 'react';
import { Section, Card, Button } from '../components/common/UI';
import { ShoppingBag, Truck, Map, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partnerships = () => {
  return (
    <>
      <div className="hero" style={{height: '400px', marginBottom: '0'}}>
         <img src="https://images.unsplash.com/photo-1574943320219-553eb213da96?q=80&w=2000&auto=format&fit=crop" className="hero-bg" alt="Partnerships Hero" />
         <div className="container hero-content text-center">
            <h1>Growing Together: Partner with TerraField</h1>
            <p className="text-white" style={{fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem auto'}}>
               Sourcing, distribution, and expansion opportunities for agribusiness leaders in Nigeria and beyond.
            </p>
            <div className="flex gap-md justify-center">
                <a href="#opportunities" className="btn btn-primary">View Opportunities</a>
                <Link to="/contact" className="btn btn-outline-white">Contact Sales</Link>
            </div>
         </div>
      </div>

      <Section id="opportunities" className="bg-light">
        <div className="container text-center" style={{marginBottom: '3rem'}}>
             <span className="uppercase text-accent font-bold text-sm">Collaborate</span>
             <h2>Select Your Partnership Pathway</h2>
             <p style={{maxWidth: '600px', margin: '1rem auto 0', color: '#666'}}>
                Whether you are a buyer, logistics expert, landowner, or processor, we have a model designed for mutual growth.
             </p>
        </div>

        <div className="container">
            <div className="gap-8 grid grid-2" style={{alignItems: 'start'}}>
                {/* Wholesale Supply - Large Card */}
                <div className="card" style={{padding: '0', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
                    <div style={{padding: '2.5rem'}}>
                        <div className="flex items-center gap-sm mb-4">
                            <ShoppingBag className="text-primary" size={24} />
                            <h3 className="mb-0">Wholesale Supply</h3>
                        </div>
                        <p className="mb-6 text-sm text-gray-600">
                            For bulk buyers, distributors, processors, and hospitality chains. Get consistent quality and volume directly from our farms. We guarantee freshness and reliable delivery schedules.
                        </p>
                        
                        <div style={{background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', border: '1px solid #eee'}}>
                            <h4 className="text-accent text-xs font-bold uppercase mb-3">Quick Quote Request</h4>
                            <div className="grid grid-2 gap-sm mb-3">
                                <select className="p-2 border rounded text-sm w-full"><option>Select Crop...</option><option>Tomatoes</option><option>Peppers</option></select>
                                <input type="text" placeholder="Est. Volume (Kg/Tons)" className="p-2 border rounded text-sm w-full" />
                            </div>
                            <div className="grid grid-2 gap-sm mb-4">
                                <select className="p-2 border rounded text-sm w-full"><option>Frequency: One-time</option><option>Weekly</option><option>Monthly</option></select>
                                <input type="text" placeholder="Location (City/State)" className="p-2 border rounded text-sm w-full" />
                            </div>
                            <Button to="/contact" className="w-full justify-center">Request Quote</Button>
                        </div>
                    </div>
                    <div style={{background: 'url(https://images.unsplash.com/photo-1627920760451-2e11e03c0b2d?q=80&w=1000) center/cover', minHeight: '300px'}}></div>
                </div>
            </div>

            <div className="grid grid-3 gap-8 mt-8">
                 {/* Distribution */}
                 <div className="card">
                     <div className="badge badge-neutral mb-4 inline-block"><Truck size={14} className="inline mr-1"/> Distribution</div>
                     <img src="https://images.unsplash.com/photo-1601600640528-502725adca6d?q=80&w=800&auto=format&fit=crop" alt="Truck" style={{width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem'}} />
                     <h3>Become a Distribution Partner</h3>
                     <p className="text-sm text-gray-600 mb-6">Join our logistics network. We are looking for reliable partners with cold chain capabilities to help move produce across Nigeria.</p>
                     <Button to="/contact" variant="outline" className="w-full justify-center">Apply Now</Button>
                 </div>

                 {/* Land Partner */}
                 <div className="card">
                     <div className="badge badge-accent mb-4 inline-block"><Map size={14} className="inline mr-1"/> Land Partner</div>
                     <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" alt="Land" style={{width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem'}} />
                     <h3>Host a TerraField Branch</h3>
                     <p className="text-sm text-gray-600 mb-6">Turn idle land into profit. We provide the operations, expertise, and market access. You provide the land. We share the profits.</p>
                     <div className="flex flex-col gap-2">
                         <input type="text" placeholder="Land Size (Hectares)" className="p-2 border rounded text-sm" />
                          <input type="text" placeholder="Location (LGA/State)" className="p-2 border rounded text-sm" />
                         <Button to="/contact" variant="outline" className="w-full justify-center mt-2">Start Discussion</Button>
                     </div>
                 </div>

                 {/* Processing */}
                 <div className="card bg-white border-dashed border-2 border-gray-200 flex flex-col items-center text-center justify-center p-8">
                     <div className="badge badge-neutral bg-yellow-100 text-yellow-800 mb-6">In Development</div>
                     <Factory size={48} className="text-gray-300 mb-4" />
                     <h3>Processing & Export</h3>
                     <p className="text-sm text-gray-500 mb-6">We are actively developing capacity for food processing and international export. Strategic partners are invited to register early interest.</p>
                     <a href="#" className="text-primary font-bold text-sm flex items-center">Register Interest <ArrowRight size={16} className="ml-1"/></a>
                 </div>
            </div>
        </div>
      </Section>

      {/* Trusted By */}
      <section className="section py-12">
          <div className="container text-center">
              <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-8">Trusted by Growing Businesses</h4>
              <div className="flex justify-center gap-12 flex-wrap opacity-50 grayscale">
                  {/* Mock Logos */}
                  <h3 className="text-2xl font-bold text-gray-400">CHEF'S CHOICE</h3>
                  <h3 className="text-2xl font-bold text-gray-400">SUPERMART</h3>
                  <h3 className="text-2xl font-bold text-gray-400">GOLDGRAIN</h3>
                  <h3 className="text-2xl font-bold text-gray-400">GRAND HOTELS</h3>
              </div>
          </div>
      </section>
    </>
  );
};

export default Partnerships;
