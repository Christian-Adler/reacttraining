import Chart from "../chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((month) => {
    return { label: month, value: 0 };
  });

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Jan is 0
    chartDataPoints[expenseMonth].value = expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
