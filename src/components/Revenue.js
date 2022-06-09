import React from "react";
import {
  RiMoneyDollarCircleLine,
  RiUser6Line,
  RiDashboardLine,
  RiPieChartLine,
} from "react-icons/ri";

const Revenue = () => {
  const revenue = [
    { icon: <RiMoneyDollarCircleLine />, result: "120k", name: "Sales" },
    { icon: <RiUser6Line />, result: "232k", name: "Customers" },
    { icon: <RiDashboardLine />, result: "543k", name: "Products" },
    { icon: <RiPieChartLine />, result: "$8324", name: "Revenue" },
  ];

  return (
    <div className="py-6 pr-4 h-auto flex items-center">
      <div className="bg-slate-900 h-screen w-72 rounded-3xl text-white">
        <div className="px-9 pt-8">
          <h3 className="text-xl font-semibold mb-7">Sales Revenue</h3>
          {revenue.map((item) => (
            <div className="flex items-center mb-7">
              <span className="w-10 h-10 bg-slate-50 text-slate-700 rounded-full flex justify-center items-center text-2xl">
                {item.icon}
              </span>
              <div className="ml-7">
                <p className="text-2xl font-bold">{item.result}</p>
                <p className="text-slate-300 text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-9 mt-14">
          <h3 className="text-xl font-semibold">Statistics</h3>
          <div className="w-auto flex justify-between items-center mt-8">
            <div className="flex flex-col items-center">
              <span className="w-20 h-20 rounded-full border-8 border-slate-50 bg-none flex justify-center items-center">
                <p className="font-semibold text-lg">32%</p>
              </span>
              <p className="mt-3 text-slate-300">a month</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="w-20 h-20 rounded-full border-8 border-slate-50 bg-none flex justify-center items-center">
                <p className="font-semibold text-lg">64%</p>
              </span>
              <p className="mt-3 text-slate-300">a year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
