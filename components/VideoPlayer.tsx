
import React, { useRef, useEffect } from 'react';
import type { DetectionEvent } from '../types';

interface VideoPlayerProps {
    videoSrc: string;
    isPlaying: boolean;
    onTimeUpdate: (time: number) => void;
    onEnded: () => void;
    activeDetections: DetectionEvent[];
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, isPlaying, onTimeUpdate, onEnded, activeDetections }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.play().catch(error => console.error("Video play failed:", error));
        } else {
            video.pause();
        }
    }, [isPlaying]);

    const handleTimeUpdateEvent = () => {
        if (videoRef.current) {
            onTimeUpdate(videoRef.current.currentTime);
        }
    };
    
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    onTimeUpdate={handleTimeUpdateEvent}
                    onEnded={onEnded}
                    className="w-full h-full"
                    muted
                    loop
                />
                {activeDetections.map(det => (
                    <div
                        key={det.id}
                        className="absolute border-2 border-cyan-400 rounded-md transition-all duration-100"
                        style={{
                            left: `${det.box.x}%`,
                            top: `${det.box.y}%`,
                            width: `${det.box.width}%`,
                            height: `${det.box.height}%`,
                        }}
                    >
                        <div className="absolute -top-6 left-0 bg-cyan-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-t-md whitespace-nowrap">
                            {det.label} ({Math.round(det.confidence * 100)}%)
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
