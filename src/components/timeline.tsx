import type { TrackingStep } from '../types/order';

interface TimelineProps {
  steps: TrackingStep[];
  noTracking: boolean;
}

export default function Timeline({ steps, noTracking }: TimelineProps) {
  
  if (noTracking || steps.length === 0) {
    return (
      <div className="timelineWrapper emptyState">
        <div className="emptyDot" />
        <p className="emptyTitle">Tracking info isn't available yet</p>
        <span className="emptySubText">
          Your order has been placed and is being prepared. We'll update this as soon as it ships.
        </span>
      </div>
    );
  }

  return (
    <div className="timelineWrapper">
      
      {steps.map(({ id, completed, label, timestamp }) => (
        <div 
          key={id} 
          className={`timelineStep ${completed ? 'completed' : ''}`}
        >
          <div className="stepDot" />
          <div className="stepContent">
            <p className="stepLabel">{label}</p>
            {}
            {Boolean(timestamp) && (
              <span className="stepTime">{timestamp}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
