import React, { useContext } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { chartcontext } from "../../Context/Context";

const Barchart = () => {
  const { bar } = useContext(chartcontext);
  return (
    <>
      {bar && bar.length > 0 ? (
        <ResponsiveContainer width={400} height={400}>
          <BarChart
            data={bar}
            margin={{ top: 20, right: 20, bottom: 20,}}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
          </ResponsiveContainer>
      
      ) : (
        <p>No data available for the pie chart</p>
      )}
    </>
  );
};

export default Barchart;
