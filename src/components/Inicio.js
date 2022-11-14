import { ImageListItem, Typography } from "@mui/material";
import { useEffect } from "react";

const Inicio = ({ changeHash }) => {
  useEffect(() => {
    changeHash("#/");
  }, []);
  return (
    <>
      <Typography sx={{ textAlign: "center" }} component="h2" variant="h6">
        <strong>Análisis de Consumo de Energía Eléctrica</strong>
      </Typography>
      <Typography component="h4" variant="h6" sx={{ mb: 2 }}>
        {
          "Nos aseguramos de informarte sobre tu consumo de la mejor manera, te invitamos a que te desplaces por la página si ya eres cliente y si no que te permitas la oportunidad de descubrir lo que tenemos para ti."
        }
      </Typography>
      <ImageListItem rows={2}>
        <img src="/Electricidad.jpg" alt="Electricidad" />
      </ImageListItem>
    </>
  );
};

export default Inicio;
