import React from "react";
import "./Charbar.css";
const ChartBar = (props) => {
  let Barfill = "0%";
  if (props.maxValue > 0) {
    Barfill = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: Barfill }}></div>
      </div>
      <div className="chart-bar__babel">{props.label}</div>
    </div>
  );
};

export default ChartBar;
