
import React from 'react';
import { CameraIcon } from './icons/CameraIcon';

export const Header: React.FC = () => (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                    <CameraIcon className="w-8 h-8 text-cyan-400" />
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-100 tracking-tight">
                        Smart CCTV Car Tracker
                    </h1>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-sm font-medium text-red-400">LIVE FEED</span>
                </div>
            </div>
        </div>
    </header>
);
