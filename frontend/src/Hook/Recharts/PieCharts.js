import React, { useState, useEffect } from "react";
import {
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PieCharts = ({ data, DataKey, data768, data576, data992, data1400, irr, orr }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  let asp;
  let ir;
  let or;
  if (windowWidth <= 364) {
    asp = 1;
    ir = 70;
    or = 90;
  } else if (windowWidth <= 576 && windowWidth > 364) {
    asp = 1.3;
    ir = 70;
    or = 90;
  } else if (windowWidth > 576 && windowWidth < 768) {
    asp = data576 ? data576 : 2;
    ir = 70;
    or = 90;
  } else if (windowWidth >= 768 && windowWidth < 992) {
    asp = data768 ? data768 : 2;
    ir = irr ? irr : 100;
    or = orr ? orr : 130;
  } else if (windowWidth >= 992 && windowWidth < 1400) {
    asp = data992 ? data992 : 2;
    ir = irr ? irr : 100;
    or = orr ? orr : 150;
  } else {
    asp = data1400 ? data1400 : 1.6;
    ir = 50;
    or = 70;
  }
  return (
    <ResponsiveContainer width="100%" aspect={asp}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={ir}
          outerRadius={or}
          fill="#8884d8"
          paddingAngle={1}
          dataKey={DataKey}
        >
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            );
          })}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};


export default PieCharts;
