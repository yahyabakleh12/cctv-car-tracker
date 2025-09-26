
import React, { useState, useCallback, useRef, SetStateAction, Dispatch } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { MOCK_DETECTIONS, VIDEO_URL } from './constants';
import type { DetectionEvent } from './types';
import { Header } from './components/Header';
import { VideoPlayer } from './components/VideoPlayer';
import { ControlPanel } from './components/ControlPanel';
import { EventLog } from './components/EventLog';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';

const App: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [activeDetections, setActiveDetections] = useState<DetectionEvent[]>([]);
    const [loggedEvents, setLoggedEvents] = useState<DetectionEvent[]>([]);
    const [analyticsData, setAnalyticsData] = useState<{ time: number; cars: number }[]>([]);

    const loggedEventIds = useRef<Set<number>>(new Set());
    const lastAnalyticsUpdateTime = useRef<number>(0);

    const handlePlayPause = useCallback(() => {
        setIsPlaying(prev => !prev);
    }, []);

    const handleTimeUpdate = useCallback((time: number) => {
        const newActiveDetections = MOCK_DETECTIONS.filter(
            d => time >= d.timestamp && time < d.timestamp + d.duration
        );
        setActiveDetections(newActiveDetections);

        const newEventsToLog = MOCK_DETECTIONS.filter(
            d => time >= d.timestamp && !loggedEventIds.current.has(d.id)
        );

        if (newEventsToLog.length > 0) {
            newEventsToLog.forEach(event => loggedEventIds.current.add(event.id));
            setLoggedEvents(prev => [...newEventsToLog.reverse(), ...prev]);
        }

        // Update analytics every 2 seconds
        if (time - lastAnalyticsUpdateTime.current >= 2) {
            lastAnalyticsUpdateTime.current = time;
            setAnalyticsData(prev => {
                const newDataPoint = { time: Math.floor(time), cars: newActiveDetections.length };
                const newHistory = [...prev, newDataPoint];
                // Keep only the last 30 data points
                return newHistory.slice(-30);
            });
        }
    }, []);

    const handleVideoEnded = useCallback(() => {
      setIsPlaying(false);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
            <Header />
            <main className="p-4 sm:p-6 lg:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <VideoPlayer 
                            videoSrc={VIDEO_URL}
                            isPlaying={isPlaying}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnded}
                            activeDetections={activeDetections}
                        />
                        <ControlPanel
                            isPlaying={isPlaying}
                            onPlayPause={handlePlayPause}
                            totalDetections={loggedEvents.length}
                        />
                    </div>
                    <EventLog events={loggedEvents} />
                </div>
                <AnalyticsDashboard
                    totalDetections={loggedEvents.length}
                    activeDetections={activeDetections.length}
                    analyticsData={analyticsData}
                />
            </main>
        </div>
    );
};

export default App;
