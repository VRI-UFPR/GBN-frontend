import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
import { ImageListItem } from "@mui/material";

export default function PeekFont() {
  const idArray = Array.from({ length: 26 }, (_, i) => i + 1);
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="subtitle2" sx={{ paddingLeft: "1vw" }}>Franktur</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ImageList sx={{ width: "100%" }} cols={5}>
            {idArray.map((id) => (
              <ImageListItem key={id}>
                <img
                  src={`/fonts/fraktur/${id}.png`}
                  alt="Franktur Alphabet"
                  loading="lazy"
                  sx={{ maxWidth: "1vw", maxHeight: "1vw" }}
                ></img>
              </ImageListItem>
            ))}
          </ImageList>
          <Typography variant="caption" sx={{ color: "grey" }}>Font glyphs created by Peter Wiegel</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
