import CardProf, { CardProfProps } from "@/Components/Card/CardProf";
import { Box, Typography } from "@mui/material";

type LogoContentType = {
    image: string;
    text: string;
};

const ImagePresWapres: CardProfProps[] = [
    {
        direction: "left",
        images: "/images/fungsionaris/Pres_dan_Wapres/Presbem.png",
        nama: "Aulia Thaariq Akbar",
        posisi: "Presiden BEM Kabinet ASA PROGRESIF"

    },
    {
        direction: "right",
        images: "/images/fungsionaris/Pres_dan_Wapres/Wapresbem.png",
        nama:" Ricky Rivaldi",
        posisi: "Wakil Presiden BEM Kabinet ASA PROGRESIF"
    },
]

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
                            width: { xs: "80%", sm: "85%", md: "90%" }, // Responsive image size
                            display: {
                                xs: "none",
                                md: "block",
                            }
                        }}
                    />
                </Box>
                <Typography
                    sx={{
                        fontSize: { xs: "1.25rem", sm: "3rem", md: "4rem" }, // Responsive font size
                        fontWeight: "bold",
                        color: "#7A2D35",
                        position: "absolute",
                        textAlign: "center",
                    }}
                >
                    STRUKTUR BEM <br /> UNIVERSITAS AIRLANGGA 2024
                </Typography>
            </Box>
            <Box
                sx={{
                    width: { xs: "95%", sm: "90%" }, // Responsive width
                    marginTop: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive margin
                    display: "flex",
                    flexDirection:"column", // Responsive flex direction
                    gap: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive gap
                    marginX: { xs: "2rem" }, // Responsive margin
                }}
            >
                {ImagePresWapres.map((person, index) => (
                    <CardProf
                        key={index}
                        direction={person.direction}
                        images={person.images}
                        nama={person.nama}
                        posisi={person.posisi}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default FirstSection;
