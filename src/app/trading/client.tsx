/*
 * This component implements the trading page that was missing from the original
 * project.  It is responsible for rendering a simple market overview along
 * with a placeholder for future trade execution functionality.  The page
 * reuses the shared `DashboardNav` to maintain a consistent navigation
 * experience across pages.
 */
'use client';

import DashboardNav from '@/components/DashboardNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Mock market data to populate the table.  In a real application this data
// would be fetched from an API.
const markets = [
  { name: 'Bitcoin', symbol: 'BTC', price: 45000.23, change: 2.4 },
  { name: 'Ethereum', symbol: 'ETH', price: 3200.87, change: 1.1 },
  { name: 'S&P 500 ETF', symbol: 'SPY', price: 430.12, change: -0.5 },
  { name: 'Tesla Inc.', symbol: 'TSLA', price: 248.78, change: 3.2 },
  { name: 'Apple Inc.', symbol: 'AAPL', price: 176.54, change: -1.7 },
];

const TradingClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8 mt-16 space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Trading</h1>
          <p className="text-muted-foreground max-w-2xl">
            Execute trades and monitor live market data.  This sample page
            provides a simple market overview and a placeholder for future
            order entry features.
          </p>
        </div>

        {/* Search and filter controls */}
        <Card className="glass-card p-6 animate-scale-in">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-bold">Market Overview</h3>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Input
                  placeholder="Search markets..."
                  className="pl-10 bg-secondary/50"
                />
              </div>
              <Button variant="outline" size="sm">
                Refresh
              </Button>
            </div>
          </div>

          {/* Market table */}
          <div className="space-y-2">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-5 gap-4 pb-3 border-b border-border/50 text-sm text-muted-foreground font-medium">
              <div className="col-span-2">Market</div>
              <div className="col-span-1 text-right">Price</div>
              <div className="col-span-1 text-right">24h Change</div>
              <div className="col-span-1" />
            </div>
            {/* Table rows */}
            {markets.map((mkt, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="md:col-span-2 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">
                    {mkt.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold">{mkt.name}</p>
                    <p className="text-sm text-muted-foreground">{mkt.symbol}</p>
                  </div>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <p className="font-semibold">${mkt.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <p
                    className={`font-semibold ${mkt.change >= 0 ? 'text-success' : 'text-destructive'}`}
                  >
                    {mkt.change >= 0 ? '+' : ''}{mkt.change.toFixed(1)}%
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <Button size="sm">Trade</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Placeholder for order panel */}
        <Card className="glass-card p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xl font-bold mb-2">Order Entry</h3>
          <p className="text-muted-foreground mb-4">
            Build a buy or sell order by selecting a market and specifying your
            quantity.  In a future iteration this panel will connect to a
            brokerage API to execute trades.
          </p>
          <Button disabled size="lg">
            Coming Soon
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default TradingClient;