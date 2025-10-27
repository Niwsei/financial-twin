import { Button } from "../components/ui/button";
import { TrendingUp, TrendingDown, MoreVertical } from "lucide-react";

const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    type: "Crypto",
    holdings: "0.5 BTC",
    value: "$22,450.00",
    costBasis: "$15,800.00",
    return: "+42.1%",
    returnValue: "+$6,650.00",
    isPositive: true,
    weight: "18%"
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    type: "Crypto",
    holdings: "8.3 ETH",
    value: "$22,400.32",
    costBasis: "$18,200.00",
    return: "+23.1%",
    returnValue: "+$4,200.32",
    isPositive: true,
    weight: "18%"
  },
  {
    name: "Apple Inc.",
    symbol: "AAPL",
    type: "Stock",
    holdings: "125 shares",
    value: "$18,920.45",
    costBasis: "$17,500.00",
    return: "+8.1%",
    returnValue: "+$1,420.45",
    isPositive: true,
    weight: "15%"
  },
  {
    name: "Tesla Inc.",
    symbol: "TSLA",
    type: "Stock",
    holdings: "75 shares",
    value: "$15,963.84",
    costBasis: "$16,800.00",
    return: "-5.0%",
    returnValue: "-$836.16",
    isPositive: false,
    weight: "13%"
  },
  {
    name: "S&P 500 ETF",
    symbol: "SPY",
    type: "ETF",
    holdings: "320 shares",
    value: "$16,300.55",
    costBasis: "$15,200.00",
    return: "+7.2%",
    returnValue: "+$1,100.55",
    isPositive: true,
    weight: "13%"
  },
  {
    name: "Microsoft Corp.",
    symbol: "MSFT",
    type: "Stock",
    holdings: "85 shares",
    value: "$14,233.78",
    costBasis: "$13,100.00",
    return: "+8.7%",
    returnValue: "+$1,133.78",
    isPositive: true,
    weight: "11%"
  },
  {
    name: "Vanguard Bond ETF",
    symbol: "BND",
    type: "ETF",
    holdings: "540 shares",
    value: "$12,421.38",
    costBasis: "$12,000.00",
    return: "+3.5%",
    returnValue: "+$421.38",
    isPositive: true,
    weight: "10%"
  },
  {
    name: "Solana",
    symbol: "SOL",
    type: "Crypto",
    holdings: "45 SOL",
    value: "$1,594.00",
    costBasis: "$2,036.42",
    return: "-21.7%",
    returnValue: "-$442.42",
    isPositive: false,
    weight: "1.3%"
  }
];

const AssetList = () => {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-border/50 text-sm text-muted-foreground font-medium">
        <div className="col-span-3">Asset</div>
        <div className="col-span-2 text-right">Holdings</div>
        <div className="col-span-2 text-right">Value</div>
        <div className="col-span-2 text-right">Return</div>
        <div className="col-span-2 text-right">Weight</div>
        <div className="col-span-1"></div>
      </div>

      {/* Asset Rows */}
      {assets.map((asset, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
        >
          {/* Asset Info */}
          <div className="md:col-span-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">
              {asset.symbol.slice(0, 2)}
            </div>
            <div>
              <p className="font-semibold">{asset.name}</p>
              <p className="text-sm text-muted-foreground">
                {asset.symbol} • {asset.type}
              </p>
            </div>
          </div>

          {/* Holdings */}
          <div className="md:col-span-2 md:text-right">
            <p className="font-medium">{asset.holdings}</p>
            <p className="text-sm text-muted-foreground md:hidden">Holdings</p>
          </div>

          {/* Value */}
          <div className="md:col-span-2 md:text-right">
            <p className="font-semibold">{asset.value}</p>
            <p className="text-xs text-muted-foreground">Basis: {asset.costBasis}</p>
          </div>

          {/* Return */}
          <div className="md:col-span-2 md:text-right">
            <p className={`font-semibold ${asset.isPositive ? 'text-success' : 'text-destructive'}`}>
              {asset.return}
            </p>
            <p className={`text-xs ${asset.isPositive ? 'text-success' : 'text-destructive'}`}>
              {asset.returnValue}
            </p>
          </div>

          {/* Weight */}
          <div className="md:col-span-2 md:text-right">
            <p className="font-medium">{asset.weight}</p>
            <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
              <div 
                className="h-full rounded-full gradient-primary"
                style={{ width: asset.weight }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="md:col-span-1 flex justify-end">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetList;
