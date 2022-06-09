import React from "react";

const Charts = () => {
  return (
    <div className="flex-1 h-screen p-6">
      <div className="flex flex-col justify-center items-center mt-20">
        <img
          src={require("../assets/puzzle.png")}
          alt="puzzle"
          className="w-1/2"
        />
        <h2 className="font-medium text-slate-300">need another pieces</h2>
        <h2 className="font-medium text-slate-300">(Charts)</h2>
      </div>
    </div>
  );
};

export default Charts;
