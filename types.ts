
export interface BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface DetectionEvent {
    id: number;
    timestamp: number; // in seconds
    duration: number; // how long the box should be visible
    box: BoundingBox;
    label: string;
    confidence: number;
}
