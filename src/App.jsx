import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import OrdersList from "./components/OrdersList/OrdersList";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders-list" element={<OrdersList />} />
        </Routes>
      </Router>
    </div>
  );
}
