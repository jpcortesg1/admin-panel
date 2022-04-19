import Chart from "../../components/chart/Chart";
import Featurednfo from "../../components/featurednfo/Featurednfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

const data = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2000,
  },
  {
    name: "Apr",
    "Active User": 2780,
  },
  {
    name: "May",
    "Active User": 1890,
  },
  {
    name: "Jun",
    "Active User": 2390,
  },
  {
    name: "Jul",
    "Active User": 3490,
  },
  {
    name: "Agu",
    "Active User": 3670,
  },
  {
    name: "Sep",
    "Active User": 3490,
  },
  {
    name: "Oct",
    "Active User": 3567,
  },
  {
    name: "Nov",
    "Active User": 3900,
  },
  {
    name: "Dec",
    "Active User": 4100,
  },
];

const Home = () => {
  return (
    <div className="home">
      <Featurednfo />
      <Chart
        data={data}
        title="User Analytcs"
        dataKey="Active User"
        grid={true}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
