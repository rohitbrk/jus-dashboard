import React from 'react';

interface Product {
  name: string;
  price: number;
  quantity: number;
  amount: number;
}

const products: Product[] = [
  { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
  { name: 'Marco Lightweight Shirt', price: 128.5, quantity: 37, amount: 4754.5 },
  { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
  { name: 'Lightweight Jacket', price: 20.0, quantity: 184, amount: 3680.0 },
  { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
];

const TopSellingProducts: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-sm text-gray-500">Name</th>
              <th className="px-4 py-2 text-sm text-gray-500">Price</th>
              <th className="px-4 py-2 text-sm text-gray-500">Quantity</th>
              <th className="px-4 py-2 text-sm text-gray-500">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">${product.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
