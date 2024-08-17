// ** MUI Imports
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

// ** Custom Components Imports

type CardAnggotaProps = {
  image: string;
  title:string;
  text: string;
};

const CardAnggota = ({ image, title, text }: CardAnggotaProps) => {
  return (
    <Card
      sx={{
        maxWidth: "350px",
        width: "250px",
        minWidth: "100px",
        backgroundColor: "#FFF9F9",
        // backgroundColor: "rgba(122,45,52,0.12)",
        borderRadius: "20px", 
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
          backgroundColor: "#7A2D35",
          transform: "scale(1.02)",
          "& .headline-text": {
            color: "#850E09",
          },
          "& .description-text": {
            color: "#850E09",
          },
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
          p: (theme) => `${theme.spacing(8.75, 2, 9.25)} !important`,
        }}
      >
        <Box sx={{ 
          width: "75%",
         }} component="img" src={image} alt={text} />

        <Typography
          className="headline-text"
          sx={{
            fontSize: "2rem",
            width: "100%",
            color: "#7A2D35",
            // fontWeight: "bold",
            fontFamily: "open sans",
            transition: "color 0.3s",
            fontWeight: "bold",
          }}
          
        >
          {title}
        </Typography>
        <Typography
          className="headline-text"
          sx={{
            fontSize: "1rem",
            width: "100%",
            color: "#D0757D",
            // fontWeight: "bold",
            fontFamily: "montserrat",
            transition: "color 0.3s",
          }}
          
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardAnggota;
