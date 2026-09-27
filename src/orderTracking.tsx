import { useState, useEffect } from "react"
import "./orderTracking.css"
import type { Order } from "./types/order"
import { getOrder } from "./mockOrder"
import Timeline from "./components/timeline"
import OrderInfo from "./components/orderInfo"
import IssueBanner from "./components/issueBanner"
import SupportActions from "./components/supportActions"

export default function OrderTracking() {

    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setLoading(true)
            
                const data = await getOrder("delayed")
                setOrder(data)
                setLoading(false)
            }
            catch {
                setLoading(false)
                setError(true)
            }
        }

        fetchOrder()
    }, [])

    if (loading) {
        return (
            <div className="trackingWrapper">
                <p className="loadingText">Loading your order...</p>
            </div>
        )
    }

    if (error || !order) {
        return (
            <div className="trackingWrapper">
                <p className="errorText">Couldn't load your order right now. Please try again.</p>
            </div>
        )
    }

    return (
        <div className="trackingWrapper">

            <IssueBanner issue={order.issue}></IssueBanner>

            <OrderInfo order={order}></OrderInfo>

            <Timeline steps={order.steps} noTracking={order.issue === "noTracking"}></Timeline>

            <SupportActions issue={order.issue} orderId={order.id}></SupportActions>

        </div>
    )
}
