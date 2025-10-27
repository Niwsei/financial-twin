import PortfolioScore from "@/components/PortfolioScore";
import GamificationSystem from "@/components/GamificationSystem";

const DashboardPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <PortfolioScore score={75} />
        </div>
        <div className="md:col-span-1">
          <GamificationSystem level={5} xp={50} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
