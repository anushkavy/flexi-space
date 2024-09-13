import { BarChart } from "@mui/x-charts";
import { axisClasses } from "@mui/x-charts";
import { chartsGridClasses } from "@mui/x-charts/ChartsGrid";
import { dataset } from "../../Dataset/TotalIncome";

export default function Income() {
  const chartSetting = {
    height: 420,
  };

  const valueFormatter = (value) => `$${value}k`;

  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <div className="dash-income-container">
      <div className="dash-income-graph">
        <h2>Income</h2>
        <h3 className="dash-income-title">
          Last <span className="dash-income-title-span">30 days</span>
        </h3>
        <h2 className="dash-head-detail-income">$2,260</h2>

        <BarChart
          className="income-bargraph"
          dataset={dataset}
          yAxis={[
            {
              scaleType: "band",
              dataKey: "month",
              disableTicks: true,
              colorMap: {
                type: "ordinal",
                colors: ["#FFEAD0", "#FF8C38"],
              },
            },
          ]}
          series={[{ dataKey: "total", valueFormatter }]}
          layout="horizontal"
          grid={{ vertical: true }}
          {...chartSetting}
          sx={{
            [`.${axisClasses.root}`]: {
              [`.${axisClasses.tickLabel}`]: {
                fill: "#4D4D4D",
              },
            },
            [`& .${chartsGridClasses.line}`]: {
              strokeDasharray: "10 10",
              strokeWidth: 1,
            },
            marginTop: -10,
          }}
          leftAxis={{
            disableLine: true,
            disableTicks: true,
            tickLabelStyle: {
              fontSize: 15,
            },
          }}
          bottomAxis={{
            disableLine: true,
            disableTicks: true,
            tickLabelStyle: {
              fontSize: 15,
            },
          }}
          borderRadius={5}
        />
      </div>
      <div className="dash-income-transactions">
        <h3>Your Transactions ({transactionsData.length})</h3>
        <div className="transactions">
          {transactionsData.map((item) => (
            <div key={item.id} className="transaction">
              <h3>${item.amount}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
