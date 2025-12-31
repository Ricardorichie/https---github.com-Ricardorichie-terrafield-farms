import React from 'react';
import { Section, Card } from '../components/common/UI';
import { Link } from 'react-router-dom';
import { Flag, TrendingUp, Target, Factory, Printer, Download, CheckCircle, Sprout, Droplets, MapPin } from 'lucide-react';

const FarmPlan = () => {
    
    // Data matched to Design 1
    const roadmapPhases = [
        {
            id: 1,
            title: "Operational Foundation",
            year: "Phase 1",
            status: "Completed",
            icon: <Flag size={20} />,
            color: "var(--color-primary)",
            description: "Establishing the core infrastructure required for long-term agricultural success.",
            points: [
                "Start with high-yield Tomatoes",
                "Establish initial irrigation infrastructure"
            ]
        },
        {
            id: 2,
            title: "Scaling & Expansion",
            year: "Phase 2",
            status: "In Progress",
            icon: <TrendingUp size={20} />,
            color: "var(--color-accent)",
            description: "Moving beyond pilot crops to maximize greenhouse output and crop variety.",
            points: [
                "Expand Greenhouse Capacity (2x)",
                "Introduce Peppers & Cucumbers"
            ]
        },
         {
            id: 3,
            title: "Multi-Branch Rollout",
            year: "Phase 3",
            status: "Upcoming",
            icon: <Target size={20} />,
            color: "#999",
            description: "Taking our standardized model to open fields and new geographic locations.",
            points: [
                "Expand Open-Field Cultivation",
                "Standardize Ops Across Branches"
            ]
        },
        {
            id: 4,
            title: "Industrialization & Export",
            year: "Phase 4",
            status: "Future",
            icon: <Factory size={20} />,
            color: "#ccc",
            description: "Vertical integration and preparing our produce for the international market.",
            points: [
                "Add Tree Plantations",
                "Processing & Export Readiness"
            ]
        }
    ];

  return (
    <>
      {/* Header */}
      <div className="section bg-light" style={{paddingBottom: '2rem'}}>
          <div className="container">
              <div style={{marginBottom: '1rem'}}>
                 <Link to="/" style={{color: '#999', textDecoration: 'none', fontSize: '0.9rem'}}>Home</Link> <span style={{color: '#ccc'}}>/</span> <span style={{color: '#666', fontSize: '0.9rem'}}>Strategy</span>
              </div>
              
              <h1 style={{fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem'}}>
                  Strategic Farm Plan & <br/>Roadmap
              </h1>
              <p style={{maxWidth: '700px', fontSize: '1.1rem', color: '#666', marginBottom: '2rem'}}>
                  From Local Roots to Global Exports: Our 4-Phase Growth Strategy outlining our journey from initial crop establishment to industrial-scale processing and export readiness.
              </p>

              <div className="flex gap-md">
                  <button className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <Printer size={16} /> Print View
                  </button>
                   <button className="btn btn-neutral" style={{padding: '0.5rem 1rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#eee'}}>
                      <Download size={16} /> Download PDF Plan
                  </button>
              </div>
          </div>
      </div>

      <div className="container" style={{marginBottom: '4rem'}}>
          <div className="border border-green-200 bg-green-50 p-6 rounded-xl flex items-start gap-4">
             <div style={{background: 'var(--color-accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)'}}>
                 <CheckCircle size={24} />
             </div>
             <div>
                 <h4 className="font-bold text-primary mb-1">CURRENT STATUS: Phase 2 Active</h4>
                 <p className="text-sm text-gray-700 m-0">
                     We are currently executing <strong>Phase 2: Scaling & Expansion</strong>. Greenhouse capacity is at 65% utilization.
                 </p>
             </div>
          </div>
      </div>

      <Section>
        <div className="container">
            <h2 className="mb-8">Growth Phases Timeline</h2>
            
            <div className="grid grid-4 gap-4">
                {roadmapPhases.map((phase) => (
                    <div key={phase.id} className="card" style={{
                        border: phase.status === 'In Progress' ? '2px solid var(--color-accent)' : '1px solid #eee',
                        position: 'relative',
                        paddingTop: '3rem'
                    }}>
                        {/* Icon Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '20px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: phase.color,
                            color: phase.id < 3 ? 'var(--color-primary)' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}>
                            {phase.icon}
                        </div>

                        <div className="flex justify-between items-center mb-3">
                            <span className="badge" style={{background: '#f0f0f0', fontWeight: 'bold'}}>{phase.year}</span>
                            <span style={{fontSize: '0.75rem', fontWeight: 'bold', color: phase.status === 'In Progress' ? 'var(--color-accent)' : phase.status === 'Completed' ? 'green' : '#999'}}>
                                {phase.status}
                            </span>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                        <p className="text-sm text-gray-600 mb-6">{phase.description}</p>
                        
                        <div style={{borderTop: '1px solid #f0f0f0', paddingTop: '1rem'}}>
                             {phase.points.map((p, i) => (
                                 <div key={i} className="flex gap-2 text-sm text-gray-700 mb-2">
                                     <span style={{color: phase.color}}>●</span> {p}
                                 </div>
                             ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 grid grid-2 gap-8" style={{alignItems: 'start'}}>
                <div>
                    <h2 className="mb-4">Key Operational Milestones</h2>
                    <div className="flex flex-col gap-4">
                        <div className="card flex items-center justify-between p-4">
                            <div className="flex items-center gap-4">
                                <div style={{padding:'10px', background:'#eef', borderRadius:'8px'}}><Sprout size={20} className="text-primary"/></div>
                                <div>
                                    <h4 className="mb-0 text-sm font-bold">Crop Diversification Program</h4>
                                    <p className="text-xs text-gray-500 m-0">Research and trial of new resistant hybrid seeds.</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-primary m-0">Q3 2024</p>
                                <span className="badge badge-neutral text-xs px-2 py-0.5">Planning</span>
                            </div>
                        </div>
                        <div className="card flex items-center justify-between p-4">
                            <div className="flex items-center gap-4">
                                <div style={{padding:'10px', background:'#eef', borderRadius:'8px'}}><Droplets size={20} className="text-primary"/></div>
                                <div>
                                    <h4 className="mb-0 text-sm font-bold">Irrigation Automation Upgrade</h4>
                                    <p className="text-xs text-gray-500 m-0">Deploying IoT sensors for smart water management.</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-primary m-0">Q4 2024</p>
                                <span className="badge badge-accent text-xs px-2 py-0.5">Sourcing</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light p-8 rounded-2xl">
                    <h2 className="mb-2">Vision Map</h2>
                     <p className="text-gray-500 text-sm mb-6">Geographic reach expansion plan.</p>
                     
                     <div style={{background: '#333', height: '200px', borderRadius: '12px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                         {/* Placeholder for map */}
                         <img src="https://images.unsplash.com/photo-1555500601-389f41b223d6?q=80&w=1000&auto=format&fit=crop" style={{opacity: 0.4, width: '100%', height: '100%', objectFit: 'cover'}} alt="Nigeria Map" />
                         <div className="absolute bottom-4 left-4 text-white">
                             <div className="text-xs font-bold uppercase opacity-80">Active Zone</div>
                             <div className="font-bold">South-West Region</div>
                         </div>
                     </div>
                     
                     <div className="flex justify-between mt-6 text-center">
                         <div>
                             <h2 className="mb-0 text-4xl">4</h2>
                             <span className="text-xs text-gray-500 uppercase">Active Branches</span>
                         </div>
                         <div style={{width: '1px', background: '#ddd'}}></div>
                         <div>
                             <h2 className="mb-0 text-4xl">12</h2>
                             <span className="text-xs text-gray-500 uppercase">Planned Sites</span>
                         </div>
                     </div>
                     
                     <div className="mt-8 pt-6 border-t border-gray-200">
                         <p className="text-xs uppercase font-bold text-gray-500 mb-2">Next Location Launch</p>
                         <div className="flex items-center gap-3">
                             <div style={{width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: '1px solid #ccc', display:'flex', alignItems:'center', justifyContent:'center'}}><MapPin size={16}/></div>
                             <div>
                                 <h4 className="m-0 text-sm">Ibadan Outpost</h4>
                                 <p className="m-0 text-xs text-gray-500">Scheduled: Oct 2024</p>
                             </div>
                         </div>
                         <button className="btn btn-primary w-full mt-4 text-sm py-2">View Interactive Map</button>
                     </div>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default FarmPlan;
