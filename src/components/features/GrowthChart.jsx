import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-100 shadow-lg rounded-lg text-sm">
        <p className="font-bold text-gray-800 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-gray-600 capitalize">{entry.name}:</span>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const GrowthChart = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-lg font-heading font-semibold mb-6 px-2">Capacity Growth Projections (2025-2030)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="year" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
            dy={10}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          
          <Line 
            type="monotone" 
            dataKey="hectares" 
            name="Cultivated Area (Ha)" 
            stroke="#1A3C2A" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#1A3C2A', strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="greenhouses" 
            name="Greenhouse Units" 
            stroke="#789938" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#789938', strokeWidth: 0 }}
          />
          <Line 
            type="monotone" 
            dataKey="branches" 
            name="Farm Branches" 
            stroke="#8B5A2B" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#8B5A2B', strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
