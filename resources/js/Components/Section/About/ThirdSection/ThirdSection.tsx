import { Box, Typography } from "@mui/material";
import { CardSectionStyled } from "./ThirdSectionStyled";


const ThirdSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: "#3089E7",
                    fontSize: "3.5rem",
                    textAlign: "center",
                    fontFamily: "Open Sans",
                    fontWeight: 900,
                    WebkitTextStroke: "2.5px #fff", // Adds a white stroke around the text
                    WebkitTextFillColor: "#3089E7", // Ensures the text fill color remains black
                    filter: "blur(0.5px)", // Slight blur to soften the edges of the shadow
                    textShadow:
                        "0px 0px 20px #3089E7, 0px 0px 5px rgba(0,0,0,0.7)",
                    padding: "10px 20px",
                    borderRadius: "8px",
                }}
            >
                STRUKTUR BEM UNAIR
            </Typography>
            <CardSectionStyled>
            <Typography
                            variant="h1"
                            sx={{
                                color: "#3089E7",
                                fontSize: "2.5rem",
                                textAlign: "center",
                                fontFamily: "Open Sans",
                                fontWeight: 900,
                                WebkitTextStroke: '2.5px #fff', // Adds a white stroke around the text
                                WebkitTextFillColor: '#3089E7', // Ensures the text fill color remains black
                                filter: "blur(0.5px)", // Slight blur to soften the edges of the shadow
                                textShadow: '0px 0px 20px #3089E7, 0px 0px 5px rgba(0,0,0,0.7)',
                                padding: "10px 20px",
                                borderRadius: "8px",
                            }}
                        >
                            FILOSOFI LOGO
                        </Typography>
            </CardSectionStyled>
        </Box>
    );
};
export default ThirdSection;
