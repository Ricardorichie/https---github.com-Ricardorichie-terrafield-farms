
import React from 'react';
import { Section, Button } from '../components/common/UI';
import { MapPin, ArrowRight, CheckCircle, Clock, TrendingUp, Tractor, Phone, Mail, Building2, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

// Metrics Data
const akureMetrics = [
  { label: 'Primary Crops', value: 'Maize, Cassava', icon: <Sprout size={16} className="text-accent" /> },
  { label: 'Method', value: 'Hydroponic', icon: <div className="w-2 h-2 rounded-full bg-accent"></div> },
  { label: 'Active Land', value: '500 Hectares', icon: <TrendingUp size={16} className="text-accent" /> },
  { label: 'Next Harvest', value: 'Sept 2024', icon: <Clock size={16} className="text-accent" /> },
];

const futureLocations = [
  {
    id: 1,
    name: 'TerraField Lagos',
    region: 'Epe Region',
    status: 'Coming Soon',
    statusClass: 'coming-soon',
    detail: 'Expected Launch: Q1 2025',
    icon: <Tractor size={16} />,
    statusIcon: 'Site Prep Phase',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'TerraField Abuja',
    region: 'Federal Capital Territory',
    status: 'Scouting',
    statusClass: 'scouting',
    detail: 'Expected Launch: Q3 2025',
    icon: <MapPin size={16} />,
    statusIcon: 'Land Acquisition',
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'TerraField East',
    region: 'Enugu / Anambra Region',
    status: 'Pending',
    statusClass: 'scouting', // Placeholder style
    detail: 'Expected Launch: 2026',
    icon: <Building2 size={16} />,
    statusIcon: 'Feasibility Study',
    image: null // Blank bg
  }
];

const Locations = () => {
  return (
    <>
      {/* Hero - Full Width */}
      <div className="locations-hero">
          <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2500&auto=format&fit=crop" 
              alt="Nigeria Map Background" 
              className="hero-bg"
          />
          <div className="container max-w-3xl px-4 z-10 relative">
              <span className="status-badge active bg-accent/20 text-accent border border-accent/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div> Expanding Network
              </span>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Growing Across the <br/>Nation</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
                TerraField is building a sustainable farming network across Nigeria. From our roots in Akure to upcoming hubs nationwide.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                  <Button className="btn-primary">View Active Locations</Button>
                  <Button className="btn-outline-white">Partnership Opportunities</Button>
              </div>
          </div>
      </div>

      <Section className="pb-0 pt-0">
        <div className="container">

           {/* Active Location: Akure */}
           <div className="mb-24">
              <div className="flex items-center gap-2 mb-4">
                 <MapPin className="text-accent" size={24} />
                 <h2 className="text-3xl font-heading font-bold text-primary m-0">Rooted in Akure</h2>
              </div>
              <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
                 <p className="text-gray-500 max-w-2xl">
                    Our pilot facility establishing the blueprint for sustainable farming. Fully operational and currently serving the Ondo State region.
                 </p>
                 <div className="status-badge active border border-green-200">
                    <CheckCircle size={14}/> Operational Base
                 </div>
              </div>

              <div className="bg-white rounded-2xl border border-border overflow-hidden grid md:grid-cols-2 shadow-sm">
                 {/* Left: Image */}
                 <div className="relative min-h-[300px] md:h-full">
                    <img 
                       src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" 
                       alt="Akure Facility" 
                       className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary shadow-sm">
                       HQ & Pilot Facility
                    </div>
                 </div>

                 {/* Right: Content */}
                 <div className="p-8 md:p-12">
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <h3 className="text-2xl font-bold text-primary mb-1">TerraField Akure</h3>
                          <span className="text-accent font-medium text-sm">Ondo State, Nigeria</span>
                       </div>
                       <div className="flex gap-2">
                          <button className="w-8 h-8 rounded bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary transition">
                             <Phone size={14} />
                          </button>
                           <button className="w-8 h-8 rounded bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary transition">
                             <Mail size={14} />
                          </button>
                       </div>
                    </div>

                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                       Specializing in high-yield maize and cassava production using a hybrid of hydroponic technologies and optimized open-field methods. This facility serves as our central training hub.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                       <div className="metric-grid">
                          {akureMetrics.map((metric, idx) => (
                             <div key={idx}>
                                <div className="metric-item-label">{metric.label}</div>
                                <div className="metric-item-value">
                                   {metric.icon} {metric.value}
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                       <Button className="flex-1 justify-center btn-primary text-sm">View Supply Schedule <ArrowRight size={16}/></Button>
                       <Button className="flex-1 justify-center btn-outline text-sm bg-white">Facility Updates</Button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Upcoming Locations */}
           <div className="mb-24">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">Cultivating the Future</h2>
              <p className="text-gray-500 mb-8">Upcoming locations scheduled for development and launch in the next 24 months.</p>

              <div className="grid md:grid-cols-3 gap-6">
                 {futureLocations.map((loc) => (
                    <div key={loc.id} className="location-card">
                       <div className="location-image flex items-center justify-center bg-gray-100">
                          {loc.image ? (
                             <img src={loc.image} alt={loc.name} className="w-full h-full object-cover grayscale opacity-80" />
                          ) : (
                             <MapPin className="text-gray-300" size={48} />
                          )}
                          <div className={`status-badge ${loc.statusClass} absolute top-4 right-4 shadow-sm`}>
                             {loc.status}
                          </div>
                       </div>
                       <div className="location-content">
                          <h4 className="font-bold text-lg text-primary mb-1">{loc.name}</h4>
                          <p className="text-gray-500 text-sm mb-4">{loc.region}</p>
                          
                          <div className="pt-4 border-t border-gray-100 mt-auto">
                              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                                 {loc.icon} {loc.statusIcon}
                              </div>
                              <div className="text-xs text-gray-400 font-medium">{loc.detail}</div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Partner Banner */}
           <div className="partner-banner mb-12">
               <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">Own Land? Become a Partner.</h2>
                  <p className="text-gray-300 max-w-lg">
                     We are actively looking for land partners and distributors to expand our network. Join us in revolutionizing agriculture across the continent.
                  </p>
               </div>
               <div className="flex gap-4">
                  <Button className="btn-primary">Apply as Land Partner</Button>
                  <Button className="btn-outline-white">Become a Distributor</Button>
               </div>
           </div>

        </div>
      </Section>
    </>
  );
};

export default Locations;
