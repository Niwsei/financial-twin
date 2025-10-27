'use client';

import { Card } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const allocationData = [
  { name: "Crypto", value: 36, amount: 44850.32, color: "hsl(var(--primary))" },
  { name: "Stocks", value: 28, amount: 34883.61, color: "hsl(var(--accent))" },
  { name: "ETFs", value: 23, amount: 28654.39, color: "hsl(var(--chart-3))" },
  { name: "Bonds", value: 13, amount: 16196.00, color: "hsl(var(--chart-4))" },
];

const AssetAllocation = () => {
  return (
    <Card className="glass-card p-6 h-full">
      <h3 className="text-xl font-bold mb-6">Asset Allocation</h3>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={allocationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {allocationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                backdropFilter: "blur(20px)"
              }}
              formatter={(value: number, name: string, props: any) => [
                `${value}% ($${props.payload.amount.toLocaleString()})`,
                props.payload.name
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-6">
        {allocationData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">{item.value}%</p>
              <p className="text-xs text-muted-foreground">
                ${item.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AssetAllocation;
