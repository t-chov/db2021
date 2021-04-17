import { Container, FormControlLabel, Switch } from "@material-ui/core";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { invertDatapoints, WIN_RATE } from "./winrate";

function App() {
  const [inverted, setInverted] = useState(false);
  const [datapoints, setDatapoints] = useState(WIN_RATE);
  const invertedDatapoints = invertDatapoints(WIN_RATE);

  return (
    <div>
      <Container maxWidth="md">
        <h1>Baystars(2021) vs. Pearls(1958)</h1>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={inverted}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const checked = event.target.checked;
                setInverted(checked);
                if (checked) {
                  setDatapoints(invertedDatapoints);
                } else {
                  setDatapoints(WIN_RATE);
                }
              }}
            />
          }
          label={"inverted mode"}
        />
        <p>
          横浜DeNAベイスターズ(2021), 近鉄パールス(1958), トンボユニオンズ(1955)
          の勝率を試合数ベースで比較します。
        </p>
        <LineChart
          width={960}
          height={600}
          data={datapoints}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis domain={[0, 1]} />
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
