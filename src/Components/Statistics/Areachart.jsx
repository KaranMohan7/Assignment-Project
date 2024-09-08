import React, { useContext } from "react";
import { chartcontext } from "../../Context/Context";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Areachart = () => {
  const { area } = useContext(chartcontext);

  return (
    <>
      {area && area.length > 0 ? (
        <ResponsiveContainer width={400} height={400} >
        <AreaChart data={area}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="averageRating"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p>No data available for the pie chart</p>
      )}
    </>
  );
};

export default Areachart;
