import BarChart from '../components/Charts/BarChart';
import SalesDonutChart from '../components/Charts/DonutChart';
import MapChart from '../components/Charts/MapChart';
import RevenueLineChart from '../components/Charts/RevenueLineChart';
import Header from '../components/Header/Header';
import DashboardStats from '../components/Charts/DashboardStats';
import TopSellingProducts from '../components/Charts/TopSellingProducts';
import RightSideBar from '../components/RightSideBar/RightSideBar';
import Sidebar from '../components/LeftSidebar/Sidebar';
import useMenu from '../store/useMenu';

const HomePage = () => {
  const { isCollapsed, setIsCollapsed } = useMenu();
  return (
    <div className="flex flex-row min-h-screen relative">
      <div className="w-1/6">
        <Sidebar isCollapsed={isCollapsed} toggleCollapse={(v) => setIsCollapsed(v)} />
      </div>
      <div id="main-page" className="flex-grow max-h-screen scrollbar overflow-y-auto overflow-x-hidden">
        <div className="relative min-h-[calc(100vh_-_50px)] flex items-start">
          <div className="flex-grow">
            <Header />
            <div className="w-full flex flex-row items-start px-4">
              <div className="w-1/2">
                <DashboardStats />
              </div>
              <div className="w-1/2">
                <BarChart />
              </div>
            </div>
            <div className="w-full flex flex-row items-start px-4 mt-4">
              <div className="w-4/5">
                <RevenueLineChart />
              </div>
              <div className="w-1/5">
                <MapChart />
              </div>
            </div>
            <div className="w-full flex flex-row items-start px-4 mt-6">
              <div className="w-3/5">
                <TopSellingProducts />
              </div>
              <div className="w-2/5">
                <SalesDonutChart />
              </div>
            </div>
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
