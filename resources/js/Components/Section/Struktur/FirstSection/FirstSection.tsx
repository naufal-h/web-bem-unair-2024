import CardProf from "@/Components/Card/CardProf";
import { Box, Typography } from "@mui/material";

type LogoContentType = {
    image: string;
    text: string;
};

const LogoContent: LogoContentType[] = [
    {
        image: "/images/cards/real-pip.png",
        text: `“Sint pariatur nulla commodo cupidatat non Lorem enim velit ex sit occaecat mollit elit nisi. Voluptate occaecat cillum consequat laboris incididunt dolore est enim ut quis. Aute anim elit nostrud sunt labore. Laborum nulla elit laboris deserunt occaecat eu elit.”`,
    },
    {
        image: "/images/cards/real-pip.png",
        text: `“Sint pariatur nulla commodo cupidatat non Lorem enim velit ex sit occaecat mollit elit nisi. Voluptate occaecat cillum consequat laboris incididunt dolore est enim ut quis. Aute anim elit nostrud sunt labore. Laborum nulla elit laboris deserunt occaecat eu elit.”`,
    },
    {
        image: "/images/cards/real-pip.png",
        text: `“Sint pariatur nulla commodo cupidatat non Lorem enim velit ex sit occaecat mollit elit nisi. Voluptate occaecat cillum consequat laboris incididunt dolore est enim ut quis. Aute anim elit nostrud sunt labore. Laborum nulla elit laboris deserunt occaecat eu elit.”`,
    },
];

const FirstSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                paddingY: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive padding
                backgroundColor: "#FFF9F9",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        paddingY: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive padding
                        width: { xs: "100%", sm: "85%", md: "90%" }, // Responsive width
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <Box
                        component="img"
                        src="/images/typography/ASA_PROGRESIF.svg"
                        alt="ASA PROGRESIF"
                        sx={{ 
                            opacity: 0.8, 
                            width: { xs: "80%", sm: "85%", md: "90%" } // Responsive image size
                        }}
                    />
                </Box>
                <Typography
                    sx={{
                        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
                        fontWeight: "bold",
                        color: "#800000",
                        position: "absolute",
                        textAlign: "center",
                    }}
                >
                    STRUKTUR BEM <br /> UNIVERSITAS AIRLANGGA 2024
                </Typography>
            </Box>
            <Box
                sx={{
                    width: { xs: "100%", sm: "90%" }, // Responsive width
                    marginTop: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive margin
                    display: "flex",
                    flexDirection:"column", // Responsive flex direction
                    gap: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive gap
                }}
            >
                {/* Image on the left, card on the right */}
                <CardProf direction="left" />

                {/* Image on the right, card on the left */}
                <CardProf direction="right" />
            </Box>
        </Box>
    );
};

export default FirstSection;
