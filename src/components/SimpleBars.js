import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

const SimpleBars = ({ cliente }) => {
  return (
    <>
      <Title>Consumo de energía (Wh) apartamento {cliente.apt}</Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={cliente.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide={true} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Wh" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleBars;
