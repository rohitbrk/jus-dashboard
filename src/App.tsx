import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import OrdersList from './routes/OrdersList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders-list" element={<OrdersList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
