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
        <p>
          横浜DeNAベイスターズ(2021), 近鉄パールス(1955), トンボユニオンズ(1955)
          の勝率を試合数ベースで比較します。
        </p>
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
            stroke="#C90F0E"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="baystars"
            stroke="#004091"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="unions"
            stroke="#C6972F"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </Container>
    </div>
  );
}

export default App;
