import type { Order } from '../types/order';

interface OrderInfoProps {
  order: Order;
}

export default function OrderInfo({ order }: OrderInfoProps) {
  return (
    <div className="orderCard">
      <img 
        src={order.productImage} 
        alt={order.productName} 
        className="productImg" 
      />
      <div className="orderDetails">
        <p className="productName">{order.productName}</p>
        <span className="qtyText">Qty: {order.quantity}</span>
        <span className="priceText">Tk {order.price}</span>
        <p className="etaText">Estimated delivery: {order.estimatedDelivery}</p>
      </div>
    </div>
  );
}
