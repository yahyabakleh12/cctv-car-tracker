
import React from 'react';
import { PlayIcon } from './icons/PlayIcon';
import { PauseIcon } from './icons/PauseIcon';
import { CarIcon } from './icons/CarIcon';

interface ControlPanelProps {
    isPlaying: boolean;
    onPlayPause: () => void;
    totalDetections: number;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ isPlaying, onPlayPause, totalDetections }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-4">
                <button
                    onClick={onPlayPause}
                    className="flex items-center justify-center w-12 h-12 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 transition-transform duration-150 ease-in-out active:scale-95"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                </button>
                <div>
                     <p className="text-sm text-gray-400">Status</p>
                     <p className={`text-lg font-bold ${isPlaying ? 'text-green-400' : 'text-yellow-400'}`}>
                        {isPlaying ? 'ANALYZING' : 'PAUSED'}
                    </p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-400">Total Unique Cars Logged</p>
                <p className="text-2xl font-bold text-cyan-400 flex items-center justify-end">
                    <CarIcon className="w-6 h-6 mr-2" />
                    {totalDetections}
                </p>
            </div>
        </div>
    );
};
