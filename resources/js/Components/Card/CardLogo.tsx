// ** MUI Imports
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

// ** Custom Components Imports

type CardLogoProps = {
  image: string;
  text: string;
};

const CardLogo = ({ image, text }: CardLogoProps) => {
  return (
    <Card
      sx={{
        maxWidth: "350px",
        width: "250px",
        minWidth: "100px",
        backgroundColor: "#FFF9F9",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
          backgroundColor: "#850E09",
          transform: "scale(1.02)",
          "& .headline-text": {
            color: "#FFF9F9",
          },
          "& .description-text": {
            color: "#FFF9F9",
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
            width: "100%",
            color: "#D0757D",
            fontWeight: "bold",
            fontFamily: "Sansation",
            transition: "color 0.3s",
          }}
          variant="h6"
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardLogo;
