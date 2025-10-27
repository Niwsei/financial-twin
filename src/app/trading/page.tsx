import TradingClient from './client';

// The trading page is implemented as a separate client component.  Defining
// this tiny server component here allows Next.js to perform server-side
// operations (such as data fetching) in the future without modifying the
// client logic.  At the moment it simply renders the client component.
export default function TradingPage() {
  return <TradingClient />;
}
