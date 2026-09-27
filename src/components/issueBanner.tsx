import type { IssueType } from '../types/order';

interface IssueContent {
  title: string;
  message: string;
}


const ISSUE_CONTENT: Record<Exclude<IssueType, 'none' | 'noTracking'>, IssueContent> = {
  delayed: {
    title: 'Your order is delayed',
    message: "It's taking longer than expected to reach you. We're actively tracking it and will keep you posted.",
  },
  deliveredNotReceived: {
    title: 'Marked as delivered',
    message: "Our system shows this order was delivered, but we understand it hasn't reached you. Let us know below.",
  },
};

interface IssueBannerProps {
  issue: IssueType;
}

export default function IssueBanner({ issue }: IssueBannerProps) {
  
  if (issue === 'none' || issue === 'noTracking') {
    return null;
  }

  const content = ISSUE_CONTENT[issue];
  const bannerClass = issue === 'delayed' ? 'delayedBanner' : 'notReceivedBanner';

  return (
    <div className={`issueBanner ${bannerClass}`}>
      <p className="issueTitle">{content.title}</p>
      <span className="issueMessage">{content.message}</span>
    </div>
  );
}
