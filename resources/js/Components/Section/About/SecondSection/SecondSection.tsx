import CardLogo from "@/Components/Card/CardLogo";
import { Box, Typography } from "@mui/material";
import { CardSectionStyled } from "../../Landing/FifthSection/FifthSectionStyled";

type LogoContentType = {
    image: string;
    text: string;
};

const LogoContent: LogoContentType[] = [
    {
        image: "/images/logo/Logo1.png",
        text: `“TREE FIRE ABOVES”`,
    },
    {
        image: "/images/logo/Logo2.png",
        text: `“TREE WITH 15 LEAVES”`,
    },
    {
        image: "/images/logo/Logo3.png",
        text: `“STRONG ROOTS RIPPING AND STURDY TRUNK AND SPREADING BRANCHES”`,
    },
    {
        image: "/images/logo/Logo4.png",
        text: `"CIRCLE”`,
    },
];

const SecondSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginY: "4rem",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: "#850E09",
                    fontSize: "2.5rem",
                    textAlign: "center",
                    fontFamily: "Open Sans",
                    fontWeight: 900,
                    WebkitTextStroke: "2.5px #fff", // Adds a white stroke around the text
                    WebkitTextFillColor: "#850E09", // Ensures the text fill color remains black
                    filter: "blur(0.5px)", // Slight blur to soften the edges of the shadow
                    textShadow:
                        "0px 0px 20px #850E09, 0px 0px 5px rgba(0,0,0,0.7)",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    marginBottom: "3rem",
                }}
            >
                FILOSOFI LOGO
            </Typography>
            <Box
                display="flex"
                justifyContent="space-around"
                flexWrap="wrap"
                gap={4}
            >
                {LogoContent.map((logo, index) => (
                    <CardLogo key={index} image={logo.image} text={logo.text} />
                ))}
            </Box>
        </Box>
    );
};

export default SecondSection;
