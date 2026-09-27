export interface TrackingStep {
  id: string;
  label: string;
  completed: boolean;
  timestamp?: string;
}

export type OrderStatus = 'processing' | 'shipped' | 'outForDelivery' | 'delivered';

export type IssueType = 'none' | 'delayed' | 'deliveredNotReceived' | 'noTracking';

export interface Order {
  id: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  status: OrderStatus;
  estimatedDelivery: string;
  steps: TrackingStep[];
  issue: IssueType;
}
