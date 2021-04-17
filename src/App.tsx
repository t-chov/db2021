import { Container } from "@material-ui/core";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { WIN_RATE } from "./winrate";

function App() {
  return (
    <div>
      <Container maxWidth="md">
        <h1>Baystars(2021) vs. Pearls(1958)</h1>
        <LineChart
          width={960}
          height={300}
          data={WIN_RATE}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pearls"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Container>
    </div>
  );
}

export default App;
