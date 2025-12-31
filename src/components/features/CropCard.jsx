import React from 'react';
import { Badge, Card } from '../common/UI';
import { Leaf, Clock, TrendingUp } from 'lucide-react';

const CropCard = ({ crop }) => {
  // crop: { name, image, cycle, type, status, horizon }
  
  return (
    <Card className="h-full flex flex-col group overflow-hidden p-0 border-0 shadow-sm hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {/* Placeholder for crop image - using a colored div if no image */}
        {crop.image ? (
            <img 
                src={crop.image} 
                alt={crop.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                <Leaf size={48} />
            </div>
        )}
        
        <div className="absolute top-3 right-3">
          <Badge variant={crop.status === 'Active' ? 'accent' : 'neutral'} className="bg-white/90 backdrop-blur shadow-sm">
            {crop.status}
          </Badge>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-heading font-semibold text-xl text-primary">{crop.name}</h3>
            <span className="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-50 rounded-md border border-gray-100">
                {crop.horizon}
            </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{crop.description || "High-quality produce grown with sustainable practices."}</p>
        
        <div className="mt-auto space-y-2">
            <div className="flex items-center text-xs text-gray-500 gap-2">
                <Clock size={14} className="text-secondary" />
                <span>Cycle: {crop.cycle}</span>
            </div>
            {crop.marketUse && (
                <div className="flex items-center text-xs text-gray-500 gap-2">
                    <TrendingUp size={14} className="text-secondary" />
                    <span>Use: {crop.marketUse}</span>
                </div>
            )}
        </div>
      </div>
    </Card>
  );
};

export default CropCard;
