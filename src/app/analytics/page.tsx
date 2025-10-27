import AnalyticsClient from './client';

// Similar to the other pages, define a lightweight server component so
// Next.js can perform server-side work in the future without coupling to
// the client.  It simply renders the client component today.
export default function AnalyticsPage() {
  return <AnalyticsClient />;
}
