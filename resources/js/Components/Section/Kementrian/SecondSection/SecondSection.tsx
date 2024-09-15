import CardAnggota from "@/Components/Card/CardAnggota";
import { Box, Typography } from "@mui/material";

type AnggotaContentType = {
    image: string;
    title: string;
    text: string;
};

const AnggotaContent: AnggotaContentType[] = [
    {
        image: "/images/cards/real-pip.png",
        title: "Lorem Ipsum",
        text: `Sekretaris Kabinet.`,
    },
    {
        image: "/images/cards/real-pip.png",
        title: "Lorem Ipsum",
        text: `Menteri Keuangan.`,
    },
    {
        image: "/images/cards/real-pip.png",
        title: "Lorem Ipsum",
        text: `Pemberdayaan Aparatur Kabinet.`,
    },
];

const SecondSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "auto", md: "100vh" }, // Adjust height for mobile
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#850E09",
                position: "relative", // Set parent as relative for absolute positioning
                padding: { xs: "1rem", md: "2rem" }, // Responsive padding
            }}
        >
            <Box
                component="img"
                src="/images/logo/mark_3.svg"
                alt="Logo"
                sx={{
                    position: "absolute", // Absolute positioning for the logo
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center the logo
                    zIndex: 1, // Lower z-index to be behind other elements
                    opacity: 0.2, // Adjust opacity for background effect
                    maxWidth: { xs: "300px", md: "600px" }, // Responsive size for logo
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    zIndex: 2, // Ensure cards are above the logo
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: { xs: "1rem", md: "1.5rem" }, // Responsive gap
                }}
            >
                <Box
                    sx={{
                        width: { xs: "90%", md: "80%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: "0.5rem", md: "1rem" }, // Adjust gap for mobile
                        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Open Sans",
                            fontSize: { xs: "2.5rem", md: "4rem" }, // Responsive font size
                            fontWeight: "bold",
                            color: "#850E09",
                            WebkitTextStrokeColor: "#FFF9F9",
                            WebkitTextStrokeWidth: "1px",
                        }}
                    >
                        KEMENKOAN
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Open Sans",
                            fontSize: { xs: "2.5rem", md: "4rem" }, // Responsive font size
                            fontWeight: "bold",
                            color: "#FFF9F9",
                        }}
                    >
                        KOMINFO
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        textAlign: "center",
                        width: { xs: "90%", md: "60%" },
                        fontFamily: "Montserrat",
                        fontSize: { xs: "1rem", md: "1.5rem" }, // Responsive text size
                        color: "#FFF9F9",
                    }}
                >
                    Menjadi pusat informasi BEM UNAIR kepada publik dengan
                    menyajikan berbagai data dan informasi berbasis digital
                    serta menjadi wadah pengembangan digitalisasi.
                </Typography>
                <Box
                    sx={{
                        width: { xs: "90%", md: "70%" }, // Adjust width for mobile
                    }}
                    display="flex"
                    justifyContent="space-around"
                    flexWrap="wrap"
                    gap={2}
                >
                    {AnggotaContent.map((anggota, index) => (
                        <CardAnggota
                            key={index}
                            image={anggota.image}
                            title={anggota.title}
                            text={anggota.text}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SecondSection;
