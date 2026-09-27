import { useState } from 'react';
import type { IssueType } from '../types/order';

interface SupportActionsProps {
  issue: IssueType;
  orderId: string;
}

export default function SupportActions({ issue, orderId }: SupportActionsProps) {
  
  const [isReported, setIsReported] = useState(false);

  const handleReportIssue = () => {
    setIsReported(true);
  };

  
  const handleCallSupport = () => {
    window.location.href = 'tel:+8809666700000';
  };

  return (
    <div className="supportWrapper">
      <button className="supportBtn" onClick={handleCallSupport}>
        Contact Support
      </button>

      {}
      {issue === 'deliveredNotReceived' && (
        isReported ? (
          <p className="reportedText">
            Thanks, we've flagged order {orderId} for review.
          </p>
        ) : (
          <button className="reportBtn" onClick={handleReportIssue}>
            I Haven't Received This
          </button>
        )
      )}

      {issue === 'delayed' && (
        isReported ? (
          <p className="reportedText">
            We'll notify you as soon as there's an update.
          </p>
        ) : (
          <button className="reportBtn" onClick={handleReportIssue}>
            Notify Me Of Updates
          </button>
        )
      )}
    </div>
  );
}
