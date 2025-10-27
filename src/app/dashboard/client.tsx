'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical
} from "lucide-react";
import DashboardNav from "@/components/DashboardNav";
import PortfolioChart from "@/components/PortfolioChart";
import RecentTransactions from "@/components/RecentTransactions";

const portfolioStats = [
  {
    title: "Total Balance",
    value: "$124,584.32",
    change: "+12.5%",
    isPositive: true,
    icon: Wallet,
    color: "text-primary"
  },
  {
    title: "Total Profit",
    value: "$32,847.90",
    change: "+8.2%",
    isPositive: true,
    icon: TrendingUp,
    color: "text-success"
  },
  {
    title: "Active Positions",
    value: "24",
    change: "+3",
    isPositive: true,
    icon: Activity,
    color: "text-accent"
  },
  {
    title: "Monthly Returns",
    value: "6.8%",
    change: "-0.4%",
    isPositive: false,
    icon: DollarSign,
    color: "text-primary"
  }
];

const topAssets = [
  { name: "Bitcoin", symbol: "BTC", value: "$45,234.12", allocation: "36%", change: "+5.2%", isPositive: true },
  { name: "Ethereum", symbol: "ETH", value: "$28,450.90", allocation: "23%", change: "+3.8%", isPositive: true },
  { name: "Apple Inc.", symbol: "AAPL", value: "$18,920.45", allocation: "15%", change: "-1.2%", isPositive: false },
  { name: "Tesla Inc.", symbol: "TSLA", value: "$15,678.30", allocation: "13%", change: "+7.5%", isPositive: true },
  { name: "S&P 500 ETF", symbol: "SPY", value: "$16,300.55", allocation: "13%", change: "+2.1%", isPositive: true },
];

const DashboardClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex</h1>
          <p className="text-muted-foreground">Here's what's happening with your portfolio today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portfolioStats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl gradient-primary flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center gap-1">
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4 text-success" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-destructive" />
                  )}
                  <span className={stat.isPositive ? "text-success text-sm font-medium" : "text-destructive text-sm font-medium"}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Portfolio Chart */}
          <div className="lg:col-span-2">
            <PortfolioChart />
          </div>

          {/* Top Assets */}
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Top Assets</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            
            <div className="space-y-4">
              {topAssets.map((asset, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">
                      {asset.symbol.slice(0, 2)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{asset.name}</p>
                      <p className="text-xs text-muted-foreground">{asset.symbol}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-sm">{asset.value}</p>
                    <p className={`text-xs ${asset.isPositive ? 'text-success' : 'text-destructive'}`}>
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />
      </main>
    </div>
  );
};

export default DashboardClient;
