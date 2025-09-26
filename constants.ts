
import type { DetectionEvent } from './types';

// A free to use stock video from Pexels
export const VIDEO_URL = 'https://videos.pexels.com/video-files/854199/854199-hd_1920_1080_25fps.mp4';

// Manually created mock data to simulate TF Lite model detections
// Coordinates are in percentages of the video container size to be responsive
export const MOCK_DETECTIONS: DetectionEvent[] = [
    { id: 1, timestamp: 2.5, duration: 4, box: { x: 45, y: 55, width: 12, height: 10 }, label: 'Sedan', confidence: 0.92 },
    { id: 2, timestamp: 3, duration: 5, box: { x: 10, y: 58, width: 15, height: 12 }, label: 'SUV', confidence: 0.88 },
    { id: 3, timestamp: 6, duration: 4, box: { x: 70, y: 54, width: 10, height: 9 }, label: 'Sedan', confidence: 0.95 },
    { id: 4, timestamp: 8, duration: 4, box: { x: 30, y: 60, width: 18, height: 15 }, label: 'Truck', confidence: 0.85 },
    { id: 5, timestamp: 9.5, duration: 5, box: { x: 0, y: 62, width: 14, height: 13 }, label: 'SUV', confidence: 0.91 },
    { id: 6, timestamp: 12, duration: 4, box: { x: 55, y: 56, width: 13, height: 11 }, label: 'Sedan', confidence: 0.94 },
    { id: 7, timestamp: 14, duration: 5, box: { x: 22, y: 59, width: 16, height: 14 }, label: 'Van', confidence: 0.82 },
    { id: 8, timestamp: 16, duration: 3, box: { x: 80, y: 55, width: 11, height: 10 }, label: 'Sedan', confidence: 0.96 },
    { id: 9, timestamp: 17, duration: 4, box: { x: 40, y: 58, width: 14, height: 12 }, label: 'SUV', confidence: 0.89 },
    { id: 10, timestamp: 19, duration: 5, box: { x: 5, y: 60, width: 15, height: 14 }, label: 'Truck', confidence: 0.87 },
    { id: 11, timestamp: 21.5, duration: 3, box: { x: 65, y: 54, width: 12, height: 10 }, label: 'Sedan', confidence: 0.93 },
    { id: 12, timestamp: 23, duration: 4, box: { x: 28, y: 59, width: 17, height: 14 }, label: 'SUV', confidence: 0.90 },
];
