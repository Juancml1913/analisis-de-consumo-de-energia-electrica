import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

const data = [
  {
    name: "01:00-02:00",
    Nevera: 117.31,
    "Modem Internet": 24.0,
    Cocina: 1.0,
    "Baño social": 2.0,
    "Baño Hab Ppal": 2.04,
  },
  {
    name: "02:00-03:00",
    Nevera: 97.9,
    "Modem Internet": 24.0,
  },
  {
    name: "03:00-04:00",
    Nevera: 107.44,
    "Modem Internet": 24.0,
    "Baño social": 3.0,
    "Baño Hab Ppal": 1.0,
  },
  {
    name: "04:00-05:00",
    Nevera: 126.28,
    "TV 1": 29.17,
    "Decodificador TV 1": 2.42,
    "Modem Internet": 24.0,
    "Zona de ropas": 2.0,
    Cocina: 9.0,
    Sala: 4,
    "Baño social": 4.0,
    Corredor: 6,
    "Habitación 1": 4,
    "Habitación Ppal": 24,
    "Vestier Hab Ppal": 3,
    "Baño Hab Ppal": 4.0,
  },
  {
    name: "05:00-06:00",
    Nevera: 70.8,
    "TV 1": 58.33,
    "TV 2": 31.33,
    "Decodificador TV 1": 4.84,
    "Modem Internet": 24.0,
    Cocina: 12,
    Sala: 12,
    Corredor: 12,
    "Baño social": 6.0,
    "Habitación 1": 4,
    "Habitación 2": 9,
    "Habitación Ppal": 24,
    "Baño Hab Ppal": 5,
  },
  {
    name: "06:00-07:00",
    Nevera: 92.08,
    Licuadora: 54.17,
    "TV 1": 87.5,
    "Decodificador TV 1": 7.26,
    "Modem Internet": 24.0,
    Cocina: 12,
    "Baño social": 6.0,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Baño Hab Ppal": 3,
  },
  {
    name: "07:00-08:00",
    Nevera: 89.0,
    "Modem Internet": 24.0,
    "PC 1": 95,
    Cocina: 12,
    "Habitación 1": 12,
    "Habitación 2": 6,
    "Habitación Ppal": 12,
  },
  {
    name: "08:00-09:00",
    Nevera: 136,
    "Modem Internet": 24.0,
    "PC 1": 95,
    "PC 2": 75,
  },
  {
    name: "09:00-10:00",
    Nevera: 76,
    "Modem Internet": 24.0,
    "PC 1": 190,
    "PC 2": 150,
  },
  {
    name: "10:00-11:00",
    Nevera: 76,
    "Modem Internet": 24.0,
    "PC 1": 190,
    "PC 2": 150,
    Cocina: 9,
    Comedor: 12,
    "Baño social": 2,
  },
  {
    name: "11:00-12:00",
    Nevera: 75.08,
    Licuadora: 54.17,
    "TV 1": 87.5,
    "Decodificador TV 1": 7.26,
    "Modem Internet": 24.0,
    "PC 1": 190,
    "PC 2": 150,
    Cocina: 12,
    Comedor: 12,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
  {
    name: "12:00-13:00",
    Nevera: 104.61,
    "TV 1": 131.25,
    "TV 2": 47,
    "Decodificador TV 1": 10.88,
    "Decodificador TV 2": 7.26,
    "Modem Internet": 24.0,
    "PC 1": 142.5,
    "PC 2": 112.5,
  },
  {
    name: "13:00-14:00",
    Nevera: 109.74,
    "TV 2": 47,
    "Decodificador TV 2": 7.26,
    "Modem Internet": 24.0,
    "PC 1": 190,
    "PC 2": 150,
    "Baño social": 2,
  },
  {
    name: "14:00-15:00",
    Nevera: 129.33,
    "Modem Internet": 24.0,
    "PC 1": 126.67,
    "PC 2": 100,
  },
  {
    name: "15:00-16:00",
    Nevera: 111.83,
    "Modem Internet": 24.0,
    "PC 1": 79.17,
    "PC 2": 75,
  },
  {
    name: "16:00-17:00",
    Nevera: 125.17,
    "Modem Internet": 24.0,
    "PC 1": 110.83,
    "PC 2": 100,
  },
  {
    name: "17:00-18:00",
    Nevera: 107.99,
    "TV 1": 87.5,
    "TV 2": 47,
    "Decodificador TV 1": 7.26,
    "Decodificador TV 2": 7.26,
    "Modem Internet": 24.0,
    "PC 1": 95,
    "PC 2": 150,
    Sala: 12,
    Comedor: 12,
    Corredor: 12,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
  {
    name: "18:00-19:00",
    Nevera: 57.57,
    Licuadora: 54.17,
    "TV 1": 175,
    "TV 2": 47,
    "Decodificador TV 1": 14.51,
    "Decodificador TV 2": 7.26,
    "Modem Internet": 24.0,
    "PC 1": 142.5,
    "PC 2": 150,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
  {
    name: "19:00-20:00",
    Nevera: 63.31,
    "TV 1": 175,
    "TV 2": 94,
    "Decodificador TV 1": 14.51,
    "Decodificador TV 2": 14.51,
    "Modem Internet": 24.0,
    "PC 1": 126.67,
    "PC 2": 100,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
  {
    name: "20:00-21:00",
    Nevera: 67.53,
    Lavadora: 320,
    "TV 1": 131.25,
    "TV 2": 62.67,
    "Decodificador TV 1": 10.88,
    "Decodificador TV 2": 9.67,
    "Modem Internet": 24.0,
    Cocina: 8,
    Sala: 8,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
  {
    name: "21:00-22:00",
    Nevera: 54.73,
    "TV 1": 87.5,
    "TV 2": 94,
    "Decodificador TV 1": 7.26,
    "Decodificador TV 2": 14.51,
    "Modem Internet": 24.0,
    "PC 1": 190,
    "PC 2": 150,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
  {
    name: "22:00-23:00",
    Nevera: 98.98,
    "TV 1": 175,
    "TV 2": 94,
    "Decodificador TV 1": 14.51,
    "Decodificador TV 2": 14.51,
    "Modem Internet": 24.0,
    "PC 1": 190,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
    "Baño Hab Ppal": 1,
  },
  {
    name: "23:00-00:00",
    Nevera: 114.24,
    "TV 1": 175,
    "TV 2": 47,
    "Decodificador TV 1": 14.51,
    "Decodificador TV 2": 7.26,
    "Modem Internet": 24.0,
    "Habitación 1": 12,
    "Habitación 2": 12,
    "Habitación Ppal": 24,
  },
];

const StackedBarExample = () => {
  const [showLegend, setShowLegend] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800 && showLegend) {
        setShowLegend(false);
      } else if (window.innerWidth >= 800 && showLegend === false) {
        setShowLegend(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showLegend]);

  return (
    <>
      <Title>Consumo de energía en franja horaria (Wh) apartamento 2505</Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide={true} angle={-90} orientation="top" />
          <YAxis />
          <Tooltip />
          {showLegend && <Legend />}
          <Bar dataKey="Nevera" stackId="a" fill="#943126" />
          <Bar dataKey="Modem Internet" stackId="a" fill="#884EA0" />
          <Bar dataKey="Cocina" stackId="a" fill="#2471A3" />
          <Bar dataKey="Baño social" stackId="a" fill="#16A085" />
          <Bar dataKey="Baño Hab Ppal" stackId="a" fill="#28B463" />

          <Bar dataKey="TV 2" stackId="a" fill="#D4AC0D" />
          <Bar dataKey="PC 1" stackId="a" fill="#F5B041" />
          <Bar dataKey="Sala" stackId="a" fill="#D35400" />
          <Bar dataKey="Corredor" stackId="a" fill="#626567" />
          <Bar dataKey="Vestier Hab Ppal" stackId="a" fill="#2E4053" />
          <Bar dataKey="Lavadora" stackId="a" fill="#ffc658" />
          <Bar dataKey="Decodificador TV 1" stackId="a" fill="#6D4C41" />
          <Bar dataKey="PC 2" stackId="a" fill="#3F51B5" />
          <Bar dataKey="Comedor" stackId="a" fill="#D81B60" />
          <Bar dataKey="Habitación 1" stackId="a" fill="#616161" />

          <Bar dataKey="Licuadora" stackId="a" fill="#873600" />
          <Bar dataKey="Decodificador TV 2" stackId="a" fill="#1F618D" />
          <Bar dataKey="Zona de ropas" stackId="a" fill="#117A65" />
          <Bar dataKey="Balcón" stackId="a" fill="#C0392B" />
          <Bar dataKey="Habitación 2" stackId="a" fill="#212F3D" />
          <Bar dataKey="TV 1" stackId="a" fill="#D35400" />
          <Bar dataKey="Habitación Ppal" stackId="a" fill="#117A65" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default StackedBarExample;
