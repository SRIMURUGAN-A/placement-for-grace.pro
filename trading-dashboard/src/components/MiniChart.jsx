import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

const MiniChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={40}>
    <AreaChart data={data.map((value) => ({ value }))}>
      <Area
        type="monotone"
        dataKey="value"
        stroke={data[data.length - 1] > data[0] ? "#22c55e" : "#ef4444"}
        fill={data[data.length - 1] > data[0] ? "#22c55e20" : "#ef444420"}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default MiniChart;
