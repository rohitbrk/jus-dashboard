import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { CiSearch } from 'react-icons/ci';

const AddUserIcon = () => {
  return (
    <div>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.625 8.375C14.625 8.02982 14.3452 7.75 14 7.75C13.6548 7.75 13.375 8.02982 13.375 8.375V13.375H8.375C8.02982 13.375 7.75 13.6548 7.75 14C7.75 14.3452 8.02982 14.625 8.375 14.625H13.375V19.625C13.375 19.9702 13.6548 20.25 14 20.25C14.3452 20.25 14.625 19.9702 14.625 19.625V14.625H19.625C19.9702 14.625 20.25 14.3452 20.25 14C20.25 13.6548 19.9702 13.375 19.625 13.375H14.625V8.375Z"
          fill="#1C1C1C"
        />
      </svg>
    </div>
  );
};

const FilterIcon = () => {
  return (
    <div>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.625 14C19.625 14.1658 19.5592 14.3247 19.4419 14.4419C19.3247 14.5592 19.1658 14.625 19 14.625H9C8.83424 14.625 8.67527 14.5592 8.55806 14.4419C8.44085 14.3247 8.375 14.1658 8.375 14C8.375 13.8342 8.44085 13.6753 8.55806 13.5581C8.67527 13.4408 8.83424 13.375 9 13.375H19C19.1658 13.375 19.3247 13.4408 19.4419 13.5581C19.5592 13.6753 19.625 13.8342 19.625 14ZM22.125 9.625H5.875C5.70924 9.625 5.55027 9.69085 5.43306 9.80806C5.31585 9.92527 5.25 10.0842 5.25 10.25C5.25 10.4158 5.31585 10.5747 5.43306 10.6919C5.55027 10.8092 5.70924 10.875 5.875 10.875H22.125C22.2908 10.875 22.4497 10.8092 22.5669 10.6919C22.6842 10.5747 22.75 10.4158 22.75 10.25C22.75 10.0842 22.6842 9.92527 22.5669 9.80806C22.4497 9.69085 22.2908 9.625 22.125 9.625ZM15.875 17.125H12.125C11.9592 17.125 11.8003 17.1908 11.6831 17.3081C11.5658 17.4253 11.5 17.5842 11.5 17.75C11.5 17.9158 11.5658 18.0747 11.6831 18.1919C11.8003 18.3092 11.9592 18.375 12.125 18.375H15.875C16.0408 18.375 16.1997 18.3092 16.3169 18.1919C16.4342 18.0747 16.5 17.9158 16.5 17.75C16.5 17.5842 16.4342 17.4253 16.3169 17.3081C16.1997 17.1908 16.0408 17.125 15.875 17.125Z"
          fill="#1C1C1C"
        />
      </svg>
    </div>
  );
};

const SortIcon = () => {
  return (
    <div>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.19194 17.3081C8.07473 17.1908 7.91576 17.125 7.75 17.125C7.58424 17.125 7.42527 17.1908 7.30806 17.3081C7.19085 17.4253 7.125 17.5842 7.125 17.75C7.125 17.9158 7.19085 18.0747 7.30806 18.1919L9.80806 20.6919C9.92527 20.8092 10.0842 20.875 10.25 20.875C10.4158 20.875 10.5747 20.8092 10.6919 20.6919L13.1917 18.1922C13.3089 18.075 13.375 17.9158 13.375 17.75C13.375 17.5842 13.3092 17.4253 13.1919 17.3081C13.0747 17.1908 12.9158 17.125 12.75 17.125C12.5842 17.125 12.4253 17.1908 12.3081 17.3081L10.25 19.3661L8.19194 17.3081Z"
          fill="#1C1C1C"
        />
        <path
          d="M9.625 7.75V20.25C9.625 20.5952 9.90482 20.875 10.25 20.875C10.5952 20.875 10.875 20.5952 10.875 20.25V7.75C10.875 7.40482 10.5952 7.125 10.25 7.125C9.90482 7.125 9.625 7.40482 9.625 7.75Z"
          fill="#1C1C1C"
        />
        <path
          d="M19.8077 10.6916C19.9249 10.8088 20.0842 10.875 20.25 10.875C20.4158 10.875 20.5747 10.8092 20.6919 10.6919C20.8092 10.5747 20.875 10.4158 20.875 10.25C20.875 10.0842 20.8092 9.92527 20.6919 9.80806L18.1919 7.30806C18.0747 7.19085 17.9158 7.125 17.75 7.125C17.5842 7.125 17.4253 7.19085 17.3081 7.30806L14.8081 9.80806C14.6908 9.92527 14.625 10.0842 14.625 10.25C14.625 10.26 14.6252 10.27 14.6257 10.28C14.6332 10.4352 14.6982 10.5821 14.8081 10.6919C14.9253 10.8092 15.0842 10.875 15.25 10.875C15.4158 10.875 15.5747 10.8092 15.6919 10.6919L17.75 8.63388L19.8077 10.6916Z"
          fill="#1C1C1C"
        />
        <path
          d="M18.375 20.25V7.75C18.375 7.40482 18.0952 7.125 17.75 7.125C17.4048 7.125 17.125 7.40482 17.125 7.75V20.25C17.125 20.5952 17.4048 20.875 17.75 20.875C18.0952 20.875 18.375 20.5952 18.375 20.25Z"
          fill="#1C1C1C"
        />
      </svg>
    </div>
  );
};

type Order = {
  selected: boolean;
  orderId: string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
  avatar: string;
};

const data: Order[] = [
  {
    selected: false,
    orderId: '#CM9801',
    user: 'Natali Craig',
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress',
    avatar: '/public/assets/contact1.png',
  },
  {
    selected: false,

    orderId: '#CM9802',
    user: 'Kate Morrison',
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete',
    avatar: '/public/assets/contact5.png',
  },
  {
    selected: false,

    orderId: '#CM9803',
    user: 'Drew Cano',
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending',
    avatar: '/public/assets/contact2.png',
  },
  {
    selected: false,

    orderId: '#CM9804',
    user: 'Orlando Diggs',
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved',
    avatar: '/public/assets/contact3.png',
  },
  {
    selected: false,

    orderId: '#CM9805',
    user: 'Andi Lane',
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'Rejected',
    avatar: '/public/assets/contact4.png',
  },
];

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order ID',
  },
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img src={row.original.avatar} alt={row.original.user} className="w-8 h-8 rounded-full" />
        {row.original.user}
      </div>
    ),
  },
  {
    accessorKey: 'project',
    header: 'Project',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const statusColor = {
        'In Progress': 'text-blue-500',
        Complete: 'text-green-500',
        Pending: 'text-yellow-500',
        Approved: 'text-orange-500',
        Rejected: 'text-gray-500',
      }[row.original.status];
      return <span className={`font-medium ${statusColor}`}>{row.original.status}</span>;
    },
  },
];

const OrdersListComp: React.FC = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Order List</h2>
      <div className="flex-grow flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
        <div className="flex-grow flex justify-start items-center">
          <div className="flex justify-center items-center">
            <AddUserIcon />
          </div>
          <div className="flex justify-center items-center">
            <FilterIcon />
          </div>
          <div className="flex justify-center items-center">
            <SortIcon />
          </div>
        </div>
        <div>
          <div className="relative w-40 dark:bg-gray-100 rounded-lg">
            <div className="absolute inset-y-0 left-2 flex items-center">
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1 pl-8 pr-8 bg-transparent rounded-lg text-sm text-gray-700 dark:text-gray-200 outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            />
          </div>
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="text-left text-gray-400 px-4 py-2">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 bg-gray-100 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 bg-white hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OrdersListComp;
