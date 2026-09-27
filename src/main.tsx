import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import OrderTracking from "./orderTracking"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OrderTracking />
  </StrictMode>,
)