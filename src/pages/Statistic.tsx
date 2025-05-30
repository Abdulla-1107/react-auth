import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

function Statistic() {
  return (
    <div className="container mx-auto grid grid-cols-3">
      <div>
        <PieChart/>
      </div>
      <div>
        <LineChart/>
      </div>
    </div>
  );
}

export default Statistic
