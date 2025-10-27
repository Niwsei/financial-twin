import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  {
    type: "buy",
    asset: "Bitcoin",
    symbol: "BTC",
    amount: "0.5 BTC",
    value: "$22,450.00",
    date: "2 hours ago",
    status: "completed"
  },
  {
    type: "sell",
    asset: "Ethereum",
    symbol: "ETH",
    amount: "2.3 ETH",
    value: "$4,800.50",
    date: "5 hours ago",
    status: "completed"
  },
  {
    type: "buy",
    asset: "Apple Inc.",
    symbol: "AAPL",
    amount: "50 shares",
    value: "$8,750.00",
    date: "1 day ago",
    status: "completed"
  },
  {
    type: "buy",
    asset: "Tesla Inc.",
    symbol: "TSLA",
    amount: "25 shares",
    value: "$5,625.00",
    date: "2 days ago",
    status: "completed"
  },
  {
    type: "sell",
    asset: "S&P 500 ETF",
    symbol: "SPY",
    amount: "15 shares",
    value: "$6,780.00",
    date: "3 days ago",
    status: "completed"
  }
];

const RecentTransactions = () => {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Recent Transactions</h3>
        <Button variant="ghost" size="sm">View All</Button>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === "buy" 
                  ? "bg-success/20" 
                  : "bg-destructive/20"
              }`}>
                {transaction.type === "buy" ? (
                  <ArrowDownRight className="w-5 h-5 text-success" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-destructive" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold capitalize">{transaction.type}</p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-muted-foreground">{transaction.asset}</p>
                </div>
                <p className="text-sm text-muted-foreground">{transaction.amount}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{transaction.value}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentTransactions;
