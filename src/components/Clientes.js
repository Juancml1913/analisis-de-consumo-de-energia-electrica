import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import clientes from "../db/clientes";
import SimpleBars from "./SimpleBars";
import StackedBarExample from "./StackedBarExample";

const Clientes = ({ changeHash }) => {
  useEffect(() => {
    changeHash("#/clientes");
  }, []);

  const [cliente, setCliente] = useState(2508);

  const handleChange = (e) => {
    setCliente(e.target.value);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Apartamento</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cliente}
              label="Apartamento"
              onChange={handleChange}
            >
              <MenuItem value={2505}>2505</MenuItem>
              <MenuItem value={2506}>2506</MenuItem>
              <MenuItem value={2507}>2507</MenuItem>
              <MenuItem value={2508}>2508</MenuItem>
              <MenuItem value={2605}>2605</MenuItem>
              <MenuItem value={2606}>2606</MenuItem>
              <MenuItem value={2607}>2607</MenuItem>
              <MenuItem value={2608}>2608</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 400,
          }}
        >
          <SimpleBars cliente={clientes.find((item) => item.apt === cliente)} />
        </Paper>
      </Grid>
      {cliente === 2505 && (
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 400,
            }}
          >
            <StackedBarExample />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Clientes;
