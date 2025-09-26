
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CarIcon } from './icons/CarIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

interface AnalyticsDashboardProps {
    totalDetections: number;
    activeDetections: number;
    analyticsData: { time: number; cars: number }[];
}

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-center space-x-4">
        <div className="bg-cyan-500/20 text-cyan-400 rounded-full p-3">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-3xl font-bold text-gray-100">{value}</p>
        </div>
    </div>
);

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ totalDetections, activeDetections, analyticsData }) => {
    return (
        <div className="bg-gray-800/60 border border-gray-700 rounded-lg shadow-2xl p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-100">Live Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Active Detections" value={activeDetections} icon={<CarIcon className="w-6 h-6" />} />
                <StatCard title="Total Unique Detections" value={totalDetections} icon={<ChartBarIcon className="w-6 h-6" />} />
                <StatCard title="Avg. Confidence" value="91%" icon={<div className="font-bold text-lg">%</div>} />
                <StatCard title="System Status" value="Healthy" icon={<div className="w-6 h-6 bg-green-500 rounded-full border-2 border-green-300"></div>} />
            </div>
            <div className="h-72">
                 <h3 className="text-lg font-semibold text-gray-200 mb-4">Car Detections Over Time</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={analyticsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorCars" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                        <XAxis dataKey="time" stroke="#a0aec0" unit="s" />
                        <YAxis stroke="#a0aec0" allowDecimals={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1a202c', border: '1px solid #4a5568' }}
                            labelStyle={{ color: '#cbd5e0' }}
                        />
                        <Area type="monotone" dataKey="cars" stroke="#22d3ee" fillOpacity={1} fill="url(#colorCars)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
