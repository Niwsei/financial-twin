'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  SlidersHorizontal,
  TrendingUp,
  TrendingDown,
  ArrowUpDown
} from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import AssetAllocation from "@/components/AssetAllocation";
import AssetList from "@/components/AssetList";

const PortfolioClientPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Portfolio Overview</h1>
          <p className="text-muted-foreground">Manage and track all your investments in one place</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6 animate-scale-in">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              <p className="text-3xl font-bold">$124,584.32</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-success text-sm font-medium">+12.5%</span>
                <span className="text-sm text-muted-foreground">($13,847.90)</span>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">24h Change</p>
              <p className="text-3xl font-bold">+$2,847.50</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-success text-sm font-medium">+2.34%</span>
                <span className="text-sm text-muted-foreground">vs yesterday</span>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Best Performer</p>
              <p className="text-3xl font-bold">TSLA</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-success text-sm font-medium">+7.5%</span>
                <span className="text-sm text-muted-foreground">today</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Asset Allocation */}
          <div className="lg:col-span-1">
            <AssetAllocation />
          </div>

          {/* Assets List */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <h3 className="text-xl font-bold">Your Assets</h3>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search assets..." 
                      className="pl-10 bg-secondary/50"
                    />
                  </div>
                  
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <AssetList />
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Invested</p>
              <p className="text-2xl font-bold">$110,736.42</p>
              <p className="text-xs text-muted-foreground">Initial capital</p>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Returns</p>
              <p className="text-2xl font-bold text-success">+$13,847.90</p>
              <p className="text-xs text-muted-foreground">Realized + Unrealized</p>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Best Return</p>
              <p className="text-2xl font-bold text-success">+42.8%</p>
              <p className="text-xs text-muted-foreground">BTC investment</p>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Avg. Return</p>
              <p className="text-2xl font-bold">+12.5%</p>
              <p className="text-xs text-muted-foreground">Across all assets</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PortfolioClientPage;
