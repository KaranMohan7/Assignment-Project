import React, { Children, createContext, useState } from 'react'
export const chartcontext = createContext();


const Context = ({children}) => {
  const  [pie, setpie] = useState([])
  const [bar,setbar] = useState([])
  const [area,setarea] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <chartcontext.Provider value={{pie,setpie,bar,setbar,area,setarea,selectedCategory,setSelectedCategory}}>
      {children}
    </chartcontext.Provider>
  )
}

export default Context