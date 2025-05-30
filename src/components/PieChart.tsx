import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [products, setProducts] = useState<any>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products", {
        params: { limit: 5, skip: count * 5 },
      })
      .then((res) => {
        setProducts(res.data?.products);
      });
  }, [count]);

  const data = {
    labels: products?.map((i: any) => i.title),
    datasets: [
      {
        label: "O'quvchi soni: ",
        data: products?.map((i: any) => i.stock),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 5,
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
      <button onClick={() => setCount(count + 1)}>Next</button>
    </div>
  );
};

export default React.memo(PieChart);
