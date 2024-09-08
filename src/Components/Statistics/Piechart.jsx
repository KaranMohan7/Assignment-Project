import React, { useContext } from 'react'
import { ResponsiveContainer,PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { chartcontext } from '../../Context/Context'



const Piechart = () => {
  const {pie}  = useContext(chartcontext)
  return (
    <>
        {pie && pie.length > 0 ? (
        <ResponsiveContainer width={400} height={400}>
          <PieChart >
            <Pie
           
              data={pie}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#8884d8"
              label
            >
              {pie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index  === 0 && "#0088FE" || index === 1 && "#FFFF00" || index === 2 && '#FF0000' || index === 3 && '#008000' } />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
          </ResponsiveContainer>
  
      ) : (
        <p>No data available for the pie chart</p>
      )}
    </>
  )
}

export default Piechart