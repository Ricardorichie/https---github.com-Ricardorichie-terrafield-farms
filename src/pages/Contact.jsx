import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <section className="section bg-light" style={{background: 'var(--color-bg-alt)'}}>
        <div className="container contact-layout">
            
            {/* Left Side Info */}
            <div>
                <h1>Get in Touch</h1>
                <p className="text-accent" style={{fontWeight: '500', fontSize: '1.2rem', marginBottom: '2rem'}}>TerraField Farms - Growing across Nigeria and beyond.</p>

                <div className="card" style={{marginBottom: '2rem'}}>
                    <h3 style={{fontSize: '1.1rem'}}>Need a quick response?</h3>
                    <a href="#" className="btn btn-primary" style={{width: '100%', marginTop: '1rem', background: '#25D366', color:'white'}}>
                        <MessageSquare size={20} /> Chat on WhatsApp
                    </a>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <div className="flex" style={{gap: '1rem', alignItems: 'flex-start'}}>
                        <div className="card-icon" style={{marginBottom: 0, width:'40px', height:'40px'}}><Mail size={20} /></div>
                        <div>
                            <h4>Email Us</h4>
                            <p style={{marginBottom: 0}}>hello@terrafield.com</p>
                        </div>
                    </div>

                    <div className="flex" style={{gap: '1rem', alignItems: 'flex-start'}}>
                        <div className="card-icon" style={{marginBottom: 0, width:'40px', height:'40px'}}><Phone size={20} /></div>
                        <div>
                            <h4>Call Us</h4>
                            <p style={{marginBottom: 0}}>+234 800 TERRAFIELD</p>
                        </div>
                    </div>

                     <div className="flex" style={{gap: '1rem', alignItems: 'flex-start'}}>
                        <div className="card-icon" style={{marginBottom: 0, width:'40px', height:'40px'}}><MapPin size={20} /></div>
                        <div>
                            <h4>Operating Base</h4>
                            <p style={{marginBottom: 0}}>Ondo State, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Form */}
            <div>
                <div className="card contact-form">
                    <h2 style={{fontSize: '1.8rem'}}>Send us a message</h2>
                    <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                    
                    <form>
                        <div className="grid grid-2" style={{gap: '1rem', marginBottom: '1rem'}}>
                            <div>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="you@example.com" />
                            </div>
                        </div>

                        <div className="grid grid-2" style={{gap: '1rem', marginBottom: '1rem'}}>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+234..." />
                            </div>
                            <div>
                                <label htmlFor="type">Nature of Inquiry</label>
                                <select id="type">
                                    <option>Choose inquiry type...</option>
                                    <option>Wholesale Supply</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="How can we help you grow?"></textarea>

                        <button className="btn btn-primary" style={{width: '100%', padding: '1rem'}}>
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
