import React from 'react';
import { Link } from 'react-router-dom';
import snapLogo from '../assets/snap_logo.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* SEO Keyword / Service Cloud Section */}
        <div className="mb-16 pb-16 border-b border-slate-100 text-center">
          <div className="max-w-[1000px] mx-auto">
            <h4 className="text-[13px] font-bold text-text-dark mb-6 uppercase tracking-[2px]">
              Snap - Global Software & Design Agency
            </h4>
            <div className="text-[12px] leading-[2.6] text-text-light flex flex-wrap justify-center items-center gap-y-1">
              {[
                "Snap - Premium Software & Web Agency", "Gurugram", "Dubai", "USA", "UK", "Global",
                "Custom Web Development", "Enterprise Web Applications", "SaaS Dashboard Development",
                "Bespoke Software Solutions", "Workflow Automation Systems", "Legacy System Integration",
                "React.js Development Services", "Next.js Specialist Agency", "Node.js Backend Solutions",
                "E-commerce Website Development", 
                "Admin Portal Development", "Cloud-Native Applications", "API Design & Integration",
                "Military Grade Security Systems", "Real-time Data Dashboards", "Progressive Web Apps (PWA)",
                "UI/UX Design Strategy", "Brand Identity Systems", "Digital Transformation Consulting",
                "ERP System Development", "Custom CRM Solutions", "Business Intelligence Tools",
                "Data Analytics Visualization", "Machine Learning Integration", "AI-Powered Chatbots",
                "Search Engine Optimization (SEO)", "Performance Optimization", "Secure Web Hosting",
                "Mobile-Responsive Design", "Cross-Platform Web Apps", "Content Management Systems (CMS)",
                "Full-Stack Development", "Serverless Architecture", "DevOps & Cloud Orchestration",
                "Penetration Testing & Security Audit", "GDPR & Compliance Ready Apps",
                "Headless CMS Implementation", "GraphQL API Development", "RESTful Web Services",
                "Inventory Management Softwares", "Automation Scripts", "Digital Strategy",
                "High-Concurrency Applications", "Scalable Tech Infrastructure", "Snap India",
                "Software Outsourcing Partner", "Dedicated Development Team"
              ].map((keyword, index, array) => (
                <React.Fragment key={index}>
                  <span className="hover:text-primary transition-colors cursor-default inline-block">{keyword}</span>
                  {index < array.length - 1 && <span className="mx-2 text-slate-300 select-none">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={snapLogo} alt="Snap Logo" className="h-6 w-auto group-hover:scale-105 transition-transform" />
              <span className="font-heading font-black text-xl tracking-tighter bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400 bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent ml-0.5 inline-block py-1">Snap</span>
            </Link>
            <p className="text-[13px] text-text-light font-medium">
              &copy; 2021–2026 Snap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
