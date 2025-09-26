
import React from 'react';
import type { DetectionEvent } from '../types';
import { TagIcon } from './icons/TagIcon';

interface EventLogProps {
    events: DetectionEvent[];
}

export const EventLog: React.FC<EventLogProps> = ({ events }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg h-[40rem] flex flex-col">
            <div className="p-4 border-b border-gray-700">
                <h2 className="text-lg font-bold text-gray-100">Detection Event Log</h2>
                <p className="text-sm text-gray-400">Real-time vehicle detection alerts.</p>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                <ul className="space-y-3">
                    {events.map(event => (
                        <li key={event.id} className="bg-gray-700/50 p-3 rounded-md flex items-start space-x-3 animate-fade-in">
                            <div className="flex-shrink-0 bg-cyan-500/20 text-cyan-400 rounded-full p-2 mt-1">
                                <TagIcon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-200">
                                    {event.label} Detected
                                </p>
                                <p className="text-sm text-gray-400">
                                    Timestamp: {event.timestamp.toFixed(2)}s | Confidence: {Math.round(event.confidence * 100)}%
                                </p>
                            </div>
                        </li>
                    ))}
                    {events.length === 0 && (
                        <p className="text-center text-gray-500 mt-8">Waiting for detections...</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

// Add this to your index.html or a separate CSS file if you have one.
// For simplicity, adding it here. It's better to add this in index.html <style> tag.
const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
`;
document.head.appendChild(style);
