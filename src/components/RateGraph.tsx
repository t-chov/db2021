import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { WinrateDatapoint } from '../winrate'

export default function RateGraph(props: { datapoints: WinrateDatapoint[] }) {
  return (
    <LineChart
      width={960}
      height={600}
      data={props.datapoints}
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
      <Line type="monotone" dataKey="pearls" stroke="#C90F0E" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="baystars" stroke="#004091" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="unions" stroke="#C6972F" activeDot={{ r: 8 }} />
    </LineChart>
  )
}
