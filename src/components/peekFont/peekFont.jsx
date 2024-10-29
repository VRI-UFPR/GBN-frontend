
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FontAccordion from "../accordion/accordion"; // Import the Accordion component

export default function PeekFont() {
  return (
    <Box
      sx={{
        marginTop: "auto",
        margin: "1vw",
        padding: "1vw",
        border: "1px solid #ECECEC",
        borderRadius: "0.25vw",
      }}
    >
      <Typography variant="h6" gutterBottom >
        Alfabeto das Fontes Góticas
      </Typography>
      <FontAccordion title="Fraktur" />
      <FontAccordion title="Textur" />
      <FontAccordion title="Kanzlei" />
    </Box>
  );
}
