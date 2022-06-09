import React from "react";
import {
  RiSearch2Line,
  RiEqualizerLine,
  RiEyeLine,
  RiCompass3Line,
  RiStore2Line,
  RiArrowRightUpLine,
  RiArrowRightDownLine,
} from "react-icons/ri";

const Home = () => {
  const general = [
    { icon: <RiEyeLine />, title: "Views", count: 500, time: "Day" },
    { icon: <RiCompass3Line />, title: "Visits", count: 3000, time: "Minutes" },
    { icon: <RiStore2Line />, title: "Orders", count: 6200, time: "Day" },
  ];

  return (
    <div className="flex-1 h-screen py-6 px-14 text-slate-700">
      <div className="w-auto relative">
        <RiSearch2Line className="absolute text-2xl text-slate-700 top-2 left-3" />
        <input
          type="text"
          placeholder="search here..."
          className="w-3/4 h-10 border-2 rounded-lg border-slate-300 py-2 pl-11 pr-5 focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <h1 className="font-semibold text-4xl">Hello Calvin</h1>
          <p className="text-slate-400 mt-2 text-sm">Welcome back !</p>
        </div>

        <div class="relative w-auto h-auto">
          <select
            class="form-select appearance-none block w-32 px-3 py-1.5 text-sm font-normal text-slate-400 bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-slate-300 rounded-lg transition ease-in-out m-0 focus:text-slate-400 focus:bg-white focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Filters</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <RiEqualizerLine className="absolute w-5 h-5 text-slate-700 bottom-2 left-24" />
        </div>
      </div>
      <div className="w-auto h-auto mt-7 bg-purple-100 px-16 py-8 rounded-2xl flex justify-between items-center">
        {general.map((item) => (
          <div className="flex flex-col flex-wrap">
            <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center text-xl text-slate-700">
              {item.icon}
            </div>
            <p className="text-lg text-slate-400 mt-5">{item.title}</p>
            <p className="text-5xl font-bold mt-3">{item.count}</p>
            <p className="text-lg text-slate-400 mt-3">Per {item.time}</p>
          </div>
        ))}
      </div>
      <div className="w-auto h-auto flex flex-wrap justify-between mt-8">
        <div className="h-auto w-80 bg-red-100 rounded-2xl flex justify-between py-5 px-7">
          <div>
            <h3 className="font-medium text-xl mb-3">Sales</h3>
            <p className="text-sm text-slate-400 mb-5">Total sales today</p>
            <p className="text-5xl font-bold">$500</p>
          </div>
          <div className="flex flex-col h-auto justify-between items-end">
            <span>
              <RiArrowRightDownLine className="text-3xl text-red-500" />
            </span>
            <div className="w-20 h-20 rounded-full border-4 border-slate-700 flex items-center justify-center">
              <p className="font-bold text-2xl">32%</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-80 bg-green-100 rounded-2xl flex justify-between py-5 px-7">
          <div>
            <h3 className="font-medium text-xl mb-3">Profit</h3>
            <p className="text-sm text-slate-400 mb-5">Per day ratio</p>
            <p className="text-5xl font-bold">$220</p>
          </div>
          <div className="flex flex-col h-auto justify-between items-end">
            <span>
              <RiArrowRightUpLine className="text-3xl text-green-500" />
            </span>
            <div className="w-20 h-20 rounded-full border-4 border-slate-700 flex items-center justify-center">
              <p className="font-bold text-2xl">15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
