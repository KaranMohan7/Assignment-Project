import React, { useContext, useEffect, useState } from "react";
import FetchData from "../Utils/FetchData";
import { chartcontext } from "../Context/Context";
import Piechart from "./Statistics/Piechart";
import Barchart from "./Statistics/Barchart";
import Areachart from "./Statistics/Areachart";
import Cards from "./Cards";

const Home = () => {
  const { setpie, setbar, setarea } = useContext(chartcontext);
  const [dataApi, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [cate, setcategory] = useState(null);

  const searcher = async () => {
    const data = await FetchData(`https://fakestoreapi.com/products`);
    setdata(data);

    const categoryList = data.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);
    setUniqueCategories(categoryList);

    setFilteredData(data);

    updateCharts(data);
  };

  const updateCharts = (data) => {
    const categoryCount = data.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    const pieData = Object.keys(categoryCount).map((category) => ({
      name: category,
      value: categoryCount[category],
    }));

    const countBar = data.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + product.price;
      return acc;
    }, {});

    const barData = Object.keys(countBar).map((category) => ({
      name: category,
      value: countBar[category],
    }));

    const rating = data.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = { total: 0, count: 0 };
      }
      acc[product.category].total += product.rating.rate;
      acc[product.category].count += 1;
      return acc;
    }, {});

    const averageRating = Object.keys(rating).map((category) => ({
      category,
      averageRating: rating[category].total / rating[category].count,
    }));

    setbar(barData);
    setpie(pieData);
    setarea(averageRating);
  };

  useEffect(() => {
    if (cate) {
      const filtered = dataApi.filter((item) => item.category === cate);
      setFilteredData(filtered);

      updateCharts(filtered);
    } else {
      setFilteredData(dataApi);
      updateCharts(dataApi);
    }
  }, [cate, dataApi]);
 
  useEffect(() => {
    searcher();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-16">
        <select
          className="p-3 rounded-md bg-blue-400 text-white font-semibold"
          onChange={(e) => setcategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full min-h-screen flex items-center justify-evenly flex-wrap pr-7">
        <div className="border border-zinc-500 rounded-md p-2 bg-red-300">
          <Piechart />
        </div>

        <div className="border border-zinc-500 rounded-md p-2 bg-yellow-300">
          <Barchart />
        </div>
        <div>
          <Areachart />
        </div>
      </div>

      <div className="w-full flex items-center gap-8 overflow-auto h-72">
        {filteredData.map((item, index) => (
          <div key={index}>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
