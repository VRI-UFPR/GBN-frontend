import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ImageListItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ImageList from "@mui/material/ImageList";
import Typography from "@mui/material/Typography";

export default function FontAccordion(props) {
  /*
    Cria um array com 26 elementos, de 1 a 26, que representam os ids das imagens de cada letra do alfabeto. 
  */
  const idArray = Array.from({ length: 26 }, (_, i) => i + 1);
  return (
    <Accordion sx={{marginTop:"1vh"}}>

      <AccordionSummary
        expandIcon={<ArrowDropDownIcon color="action"/>}
        aria-controls="panel2-content"
        id="panel2-header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "98%",
        }}
      >
        <Typography variant="subtitle2" sx={{ paddingLeft: "1vw" }}>
          {props.title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <ImageList sx={{ width: "100%" }} cols={5}>
          {idArray.map((id) => (
            <ImageListItem key={id}>
              <img
              /*
                Carrega a imagem de cada letra do alfabeto, de acordo com o título da fonte e o id da letra
              */
                src={`/fonts/${props.title.toLowerCase()}/${id}.png`}
                alt={`${props.title} Alphabet`}
                loading="lazy"
                sx={{ maxWidth: "1vw", maxHeight: "1vw" }}
              ></img>
            </ImageListItem>
          ))}
        </ImageList>
        {/* <Typography variant="caption" sx={{ color: "grey" }}>
                    Font glyphs created by Peter Wiegel
            </Typography> */}
      </AccordionDetails>
    </Accordion>
  );
}
