import CardLogo from "@/Components/Card/CardLogo";
import { Box, Typography } from "@mui/material";

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
        text: `“STRONG ROOTS RIPPING”`,
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
                backgroundColor: "#850E09",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingBottom: "4rem",
            }}
        >
            <Box
                sx={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    textAlign: "center",
                    "@media (max-width: 600px)": {
                        flexDirection: "column",
                        gap: "0.5rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        marginTop: "1rem",
                        fontFamily: "Open Sans",
                        fontSize: "4rem",
                        fontWeight: "bold",
                        color: "#850E09",
                        WebkitTextStrokeColor: "#FFF9F9",
                        WebkitTextStrokeWidth: "1px",
                        "@media (max-width: 900px)": {
                            fontSize: "3rem", // Ukuran font lebih kecil untuk layar menengah
                        },
                        "@media (max-width: 600px)": {
                            fontSize: "2rem", // Ukuran font lebih kecil untuk layar kecil
                        },
                    }}
                >
                    FILOSOFI
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Open Sans",
                        fontSize: { xs: "1.5rem", md: "2.5rem", lg: "4rem" },
                        fontWeight: "bold",
                        color: "#FFF9F9",
                        "@media (max-width: 900px)": {
                            fontSize: "3rem", // Ukuran font lebih kecil untuk layar menengah
                        },
                        "@media (max-width: 600px)": {
                            fontSize: "2rem", // Ukuran font lebih kecil untuk layar kecil
                        },
                    }}
                >
                    LOGO
                </Typography>
            </Box>
            <Box
                sx={{
                    marginTop: "2rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 4,
                    padding: { xs: "0.75rem", md: "0px" },
                }}
            >
                {LogoContent.map((logo, index) => (
                    <CardLogo key={index} image={logo.image} text={logo.text} />
                ))}
            </Box>
        </Box>
    );
};

export default SecondSection;
