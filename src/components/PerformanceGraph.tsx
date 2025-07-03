import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { useRecoilValue } from 'recoil';
import { performanceState } from '../recoil/performanceState';

export const PerformanceGraph = () => {
  const data = useRecoilValue(performanceState);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>Page Transition Performance (s)</h2>
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="route" />
          <YAxis domain={[0, 'auto']} />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="time" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};
