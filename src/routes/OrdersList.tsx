import Header from '../components/Header/Header';
import RightSideBar from '../components/RightSideBar/RightSideBar';
import Sidebar from '../components/LeftSidebar/Sidebar';
import useMenu from '../store/useMenu';
import OrdersListComp from '../components/OrdersList/OrdersListComp';

const OrdersList = () => {
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
            <OrdersListComp />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
