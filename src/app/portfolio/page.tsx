"use client";

import dynamic from "next/dynamic";
import AssetAllocation from "@/components/AssetAllocation";
import RecentTransactions from "@/components/RecentTransactions";
import AssetList from "@/components/AssetList";

const PortfolioChart = dynamic(() => import("@/components/PortfolioChart"), {
  ssr: false,
});

const PortfolioPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <PortfolioChart />
          <AssetList />
        </div>
        <div className="md:col-span-1">
          <AssetAllocation />
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
