import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GavelIcon from "@mui/icons-material/Gavel";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";

const MainListItems = ({ hash }) => {
  return (
    <React.Fragment>
      <Link to="/">
        <ListItemButton selected={"#/" === hash}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link to="/clientes">
        <ListItemButton selected={"#/clientes" === hash}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItemButton>
      </Link>
      <ListItemButton>
        <ListItemIcon>
          <GasMeterIcon />
        </ListItemIcon>
        <ListItemText primary="Medidores" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <EngineeringIcon />
        </ListItemIcon>
        <ListItemText primary="Técnicos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GavelIcon />
        </ListItemIcon>
        <ListItemText primary="Normativa" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText primary="Base de datos" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MainListItems;
