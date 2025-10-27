'use client';

import { Card } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan", value: 95000 },
  { date: "Feb", value: 98500 },
  { date: "Mar", value: 102000 },
  { date: "Apr", value: 99800 },
  { date: "May", value: 106500 },
  { date: "Jun", value: 112000 },
  { date: "Jul", value: 108900 },
  { date: "Aug", value: 115600 },
  { date: "Sep", value: 119200 },
  { date: "Oct", value: 122400 },
  { date: "Nov", value: 120800 },
  { date: "Dec", value: 124584 },
];

const timeframes = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

const PortfolioChart = () => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Portfolio Performance</h3>
          <p className="text-sm text-muted-foreground">Track your investment growth</p>
        </div>
        
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <Button
              key={tf}
              variant={tf === "1Y" ? "default" : "ghost"}
              size="sm"
              className="text-xs"
            >
              {tf}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                backdropFilter: "blur(20px)"
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Portfolio Value"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PortfolioChart;
