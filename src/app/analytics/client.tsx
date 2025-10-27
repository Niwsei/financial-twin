/*
 * The analytics page provides investors with deeper insights into portfolio
 * performance.  It reuses existing components like PortfolioChart and
 * AssetAllocation from the dashboard and portfolio pages to visualise
 * performance and allocation.  Additional analytics such as risk metrics or
 * projections could be integrated here in the future.
 */
'use client';

import DashboardNav from '@/components/DashboardNav';
import { Card } from '@/components/ui/card';
import PortfolioChart from '@/components/PortfolioChart';
import AssetAllocation from '@/components/AssetAllocation';

const AnalyticsClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8 mt-16 space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground max-w-2xl">
            Dive deeper into your portfolio performance with interactive charts
            and allocation breakdowns.  These tools help you understand how
            your assets are performing over time and where your capital is
            concentrated.
          </p>
        </div>

        {/* Performance and allocation */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart section */}
          <div className="lg:col-span-2 animate-scale-in">
            <PortfolioChart />
          </div>
          {/* Allocation section */}
          <div className="lg:col-span-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <AssetAllocation />
          </div>
        </div>

        {/* Placeholder for advanced analytics */}
        <Card className="glass-card p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
          <p className="text-muted-foreground mb-4">
            Future versions of FinTwin will include advanced analytics such as
            risk metrics, scenario analysis, and predictive forecasting.  Stay
            tuned for updates.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default AnalyticsClient;