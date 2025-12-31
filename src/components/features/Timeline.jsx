import React from 'react';
import { Card } from '../common/UI';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Timeline = ({ phases }) => {
  return (
    <div className="relative space-y-8 pl-8 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-200 md:left-1/2 md:-ml-px"></div>

      {phases.map((phase, index) => {
        const isLeft = index % 2 === 0;
        const isCompleted = phase.status === 'completed';
        const isActive = phase.status === 'active';
        
        return (
          <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
             
             {/* Dot on Line */}
             <div className={`absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 bg-white
                ${isCompleted ? 'border-primary bg-primary' : isActive ? 'border-accent bg-accent animate-pulse' : 'border-gray-300'}
             `}
             >
                {/* Icon inside dot for completion */}
             </div>

             {/* Spacer for the other side */}
             <div className="hidden md:block w-5/12"></div>

             {/* Content Card */}
             <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className={`p-6 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow relative
                    ${isActive ? 'border-l-4 border-l-accent' : ''}
                `}>
                    <div className="flex items-center gap-2 mb-2">
                         <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded
                            ${isActive ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-gray-500'}
                         `}>
                            {phase.timeline}
                         </span>
                         <h3 className="font-heading font-semibold text-lg text-primary">{phase.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                    <ul className="space-y-1">
                        {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary flex-shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
