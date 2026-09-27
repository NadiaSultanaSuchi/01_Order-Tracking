import type { Order } from "./types/order"
const PLACEHOLDER_IMG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
            <rect width="80" height="80" rx="8" fill="#e8e8e8"/>
            <path d="M24 30h32v24a2 2 0 0 1-2 2H26a2 2 0 0 1-2-2V30z" fill="#b5b5b5"/>
            <path d="M20 24h40l4 6H16l4-6z" fill="#9a9a9a"/>
        </svg>`
    )

const ORDER_DB: Record<string, Order> = {

    delayed: {
        id: "ORD-58213",
        productName: "Wireless Headphones - Black",
        productImage: PLACEHOLDER_IMG,
        quantity: 1,
        price: 2450,
        status: "outForDelivery",
        estimatedDelivery: "27 Sep, 2026 - Before 6:00 PM",
        issue: "delayed",
        steps: [
            { id: "1", label: "Processing", completed: true, timestamp: "24 Sep, 10:20 AM" },
            { id: "2", label: "Shipped", completed: true, timestamp: "25 Sep, 2:15 PM" },
            { id: "3", label: "Out for Delivery", completed: true, timestamp: "27 Sep, 9:00 AM" },
            { id: "4", label: "Delivered", completed: false }
        ]
    },

    deliveredNotReceived: {
        id: "ORD-58214",
        productName: "Ceramic Coffee Mug Set",
        productImage: PLACEHOLDER_IMG,
        quantity: 2,
        price: 890,
        status: "delivered",
        estimatedDelivery: "26 Sep, 2026 - Before 8:00 PM",
        issue: "deliveredNotReceived",
        steps: [
            { id: "1", label: "Processing", completed: true, timestamp: "23 Sep, 11:05 AM" },
            { id: "2", label: "Shipped", completed: true, timestamp: "24 Sep, 4:40 PM" },
            { id: "3", label: "Out for Delivery", completed: true, timestamp: "26 Sep, 10:15 AM" },
            { id: "4", label: "Delivered", completed: true, timestamp: "26 Sep, 3:52 PM" }
        ]
    },

    noTracking: {
        id: "ORD-58215",
        productName: "Bluetooth Speaker - Mini",
        productImage: PLACEHOLDER_IMG,
        quantity: 1,
        price: 1650,
        status: "processing",
        estimatedDelivery: "Calculating...",
        issue: "noTracking",
        steps: []
    },

    normal: {
        id: "ORD-58216",
        productName: "Running Shoes - Size 42",
        productImage: PLACEHOLDER_IMG,
        quantity: 1,
        price: 3200,
        status: "shipped",
        estimatedDelivery: "29 Sep, 2026 - Before 8:00 PM",
        issue: "none",
        steps: [
            { id: "1", label: "Processing", completed: true, timestamp: "25 Sep, 1:00 PM" },
            { id: "2", label: "Shipped", completed: true, timestamp: "26 Sep, 5:30 PM" },
            { id: "3", label: "Out for Delivery", completed: false },
            { id: "4", label: "Delivered", completed: false }
        ]
    }
}

export const getOrder = async (scenario: keyof typeof ORDER_DB): Promise<Order> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = ORDER_DB[scenario]
            if (order) {
                resolve(order)
            }
            else {
                reject(new Error("Order not found"))
            }
        }, 700)
    })
}