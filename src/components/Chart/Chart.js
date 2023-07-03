import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const values = props.dataPoints.map((item) => item.value);
  const totalMaxium = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={totalMaxium}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
