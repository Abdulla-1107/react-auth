import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Telefon savdosi',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May',];

export const data = {
  labels,
  datasets: [
    {
      label: 'iPhone',
      data: [150, 200, 50, 170, 350],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Honor',
      data:[60, 150, 200, 250, 450],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Redmi',
      data:[200, 300, 220, 110, 320],
      borderColor: 'rgb(53, 235, 60)',
      backgroundColor: 'rgba(53, 235, 50, 0.5)',
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
