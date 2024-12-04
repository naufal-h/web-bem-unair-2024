// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// ** Custom Components Imports

type CardLogoProps = {
    image: string;
    text: string;
};

const CardLogo = ({ image, text }: CardLogoProps) => {
    return (
        <Card
            sx={{
                maxWidth: "380px",
                minWidth: "100px",
                maxHeight: "280px",
                backgroundColor: "#FFF9F9",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                    backgroundColor: "#80413e",
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
                    p: (theme) => `${theme.spacing(2.5, 2, 7.5)} !important`,
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%", lg: "50%" },
                    }}
                    component="img"
                    src={image}
                    alt={text}
                />

                <Typography
                    className="headline-text"
                    sx={{
                        width: "100%",
                        color: "#211D1D",
                        fontWeight: "bold",
                        fontFamily: "Sansation",
                        transition: "color 0.3s",
                        fontSize: { xs: "1rem", md: "1.5rem" },
                    }}
                    variant="h5"
                >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardLogo;
