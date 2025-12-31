import React, { useState } from 'react';
import { Section, Card, Button } from '../components/common/UI';
import GrowthChart from '../components/features/GrowthChart';
import { Download, AlertCircle, Map, Sprout, Store, Info, Sliders } from 'lucide-react';

const Projections = () => {
    // Data matched to Design 2 logic
    const data = [
        { year: '2025', hectares: 1, greenhouses: 1, branches: 1 },
        { year: '2026', hectares: 3, greenhouses: 2, branches: 2 },
        { year: '2027', hectares: 5, greenhouses: 4, branches: 3 },
        { year: '2028', hectares: 8, greenhouses: 6, branches: 4 },
        { year: '2029', hectares: 11, greenhouses: 8, branches: 6 },
        { year: '2030', hectares: 13, greenhouses: 10, branches: 8 },
    ];

  return (
    <>
      {/* Header */}
      <div className="section" style={{paddingBottom: '2rem'}}>
          <div className="container">
              <div className="flex justify-between items-start mb-4">
                  <div>
                      <span className="uppercase text-accent font-bold text-sm tracking-widest">Strategic Outlook</span>
                      <h1 style={{fontSize: '3rem', marginTop: '0.5rem'}}>Growth & Expansion <br/>Projections</h1>
                      <p style={{maxWidth: '600px', color: '#666'}}>
                          Detailed capacity targets 2025-2030 for Nigerian operations and West African expansion phases.
                      </p>
                  </div>
                  <button className="btn btn-outline" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <Download size={16} /> Download Growth Plan (PDF)
                  </button>
              </div>
          </div>
      </div>

      <Section className="bg-light">
        <div className="container">
            {/* Top Stats */}
            <div className="grid grid-3 gap-8 mb-8">
                <div className="card p-6">
                    <div className="flex justify-between mb-4">
                        <span className="text-xs font-bold text-gray-500 uppercase">2030 Cultivated Area</span>
                        <div className="badge badge-neutral"><Map size={14} /></div>
                    </div>
                    <h2 className="mb-2">13+ Hectares</h2>
                    <p className="text-xs font-bold text-accent m-0">↗ +1200% Growth Target</p>
                </div>
                <div className="card p-6">
                     <div className="flex justify-between mb-4">
                        <span className="text-xs font-bold text-gray-500 uppercase">2030 Greenhouse Capacity</span>
                        <div className="badge badge-accent"><Sprout size={14} /></div>
                    </div>
                    <h2 className="mb-2">10 Units</h2>
                    <p className="text-xs font-bold text-accent m-0">↗ +900% Capacity Increase</p>
                </div>
                <div className="card p-6">
                     <div className="flex justify-between mb-4">
                        <span className="text-xs font-bold text-gray-500 uppercase">2030 Branch Network</span>
                        <div className="badge badge-neutral"><Store size={14} /></div>
                    </div>
                    <h2 className="mb-2">8 Locations</h2>
                    <p className="text-xs font-bold text-accent m-0">↗ +700% Physical Footprint</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-8" style={{gridTemplateColumns: '2fr 1fr'}}>
                
                {/* Chart Area */}
                <div className="card p-8">
                     <div className="flex justify-between items-center mb-8">
                         <div>
                            <h3 className="mb-1">Infrastructure Scale Projection</h3>
                            <p className="text-sm text-gray-500 m-0">Physical asset accumulation forecast (5-Year Horizon)</p>
                         </div>
                         <div className="flex gap-4 text-xs">
                             <span className="flex items-center gap-1"><span style={{width:8, height:8, borderRadius:'50%', background:'var(--color-accent)'}}></span> Cultivated Area</span>
                             <span className="flex items-center gap-1"><span style={{width:8, height:8, borderRadius:'50%', background:'var(--color-primary)'}}></span> Greenhouse Units</span>
                         </div>
                     </div>
                     
                     <div style={{height: '350px', background: '#f9f9f9', borderRadius: '8px', padding: '1rem'}}>
                        {/* Chart Component would go here. Using placeholder for now */}
                        <GrowthChart data={data} />
                     </div>
                </div>

                {/* Sidebar */}
                <div className="card bg-primary text-white p-8">
                    <div className="flex items-center gap-2 mb-6 opacity-80">
                        <Info size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Legal Disclaimer</span>
                    </div>

                    <h3 className="text-white mb-4">Illustrative Estimates Only</h3>
                    <p className="text-sm text-gray-300 mb-8" style={{lineHeight: '1.6'}}>
                        The projections displayed above are based on current capacity expansion targets and operational modeling. These figures are not financial revenue guarantees.
                    </p>

                    <div className="bg-white text-primary p-6 rounded-xl">
                        <h4 className="flex items-center gap-2 mb-4 font-bold text-sm">
                            <Sliders size={16} /> Model Assumptions
                        </h4>
                        
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Growth Scenario</div>
                                <div className="font-bold text-sm">Conservative Baseline</div>
                            </div>
                             <div style={{height: 1, background: '#eee'}}></div>
                             <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Capital Injection</div>
                                <div className="font-bold text-sm">Series A (Q2 2025)</div>
                            </div>
                            <div style={{height: 1, background: '#eee'}}></div>
                             <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Market Focus</div>
                                <div className="font-bold text-sm">Nigeria (South-West)</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </Section>
    </>
  );
};

export default Projections;
