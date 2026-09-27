# Order Tracking Screen

A modern, mobile-first order tracking screen for an e-commerce app, built with **React + TypeScript + Vite**. It replaces a plain 4-step status view with a clearer, more informative tracking experience and handles edge cases (delayed orders, delivered-but-not-received, and tracking-not-available-yet) gracefully instead of showing a broken or empty screen.

## Features

- Clear visual delivery timeline (Processing → Shipped → Out for Delivery → Delivered)
- Current order status shown at a glance, with a contextual banner for problem states
- Estimated delivery date/time
- Order/product summary card
- Contact Support action, plus a "Report an issue" flow for delivered-but-not-received orders
- Loading, error, and empty states handled explicitly
- Responsive layout, designed for ~360–430px mobile widths

## Handles all three required situations

The same UI adapts to three scenarios using mock data:

1. **Delayed order** — estimated delivery time has passed; shows a delay banner and support action
2. **Delivered but not received** — status says delivered, but the customer can report otherwise
3. **Tracking not available yet** — order exists, but no tracking steps yet; shows a proper empty state instead of a blank/broken screen

## Tech Stack

- React 19 + TypeScript
- Vite (build tool / dev server)
- Plain CSS (no external UI framework)
- Mock/static data only — no backend required

## Setup & Run

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Viewing different order states

By default the app shows the **delayed** order scenario. You can preview the other states by adding a `scenario` query parameter to the URL:

| Scenario | URL |
|---|---|
| Delayed order | `http://localhost:5173/?scenario=delayed` |
| Delivered but not received | `http://localhost:5173/?scenario=deliveredNotReceived` |
| Tracking not available yet | `http://localhost:5173/?scenario=noTracking` |
| Normal / on-time order | `http://localhost:5173/?scenario=normal` |

The same pattern works on the deployed URL as well.

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure
src/
├── main.tsx # App entry point
├── orderTracking.tsx # Main tracking screen (composes the components below)
├── mockOrder.ts # Mock order data for all four scenarios
├── orderTracking.css # Styles
├── types/order.ts # TypeScript types for Order / TrackingStep
└── components/
├── timeline.tsx # Visual delivery timeline
├── orderInfo.tsx # Product/order summary card
├── issueBanner.tsx # Contextual banner for delayed/not-received states
└── supportActions.tsx # Contact support / report issue actions

## AI Tool Usage
To explain the problem.
## Live Demo & Repository

- **Live URL:** _https://order-tracking-proj.netlify.app
- **GitHub Repository:** _https://github.com/NadiaSultanaSuchi/01_Order-Tracking
