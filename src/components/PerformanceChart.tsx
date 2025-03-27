
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PerformanceTrend } from '../utils/mockData';

interface PerformanceChartProps {
  data: PerformanceTrend[];
  title?: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, title = 'Performance Trends' }) => {
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-3 rounded-lg shadow-lg border border-slate-200/50">
          <p className="text-sm font-medium">{`Week ${label}`}</p>
          <p className="text-sm text-primary font-semibold">{`Average Score: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-80 w-full">
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
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="week" 
              label={{ value: 'Week', position: 'insideBottomRight', offset: -10 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              domain={[0, 100]} 
              label={{ value: 'Average Score (%)', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="averageScore"
              name="Average Score"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
