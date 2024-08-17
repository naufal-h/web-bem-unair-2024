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
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#850E09",
                position: "relative", // Set parent as relative for absolute positioning
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
                    maxWidth: "600px", // Adjust size as needed
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    padding: "2rem",
                    zIndex: 2, // Ensure cards are above the logo
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Open Sans",
                            fontSize: "4rem",
                            fontWeight: "bold",
                            color: "#850E09",
                            WebkitTextStrokeColor: "#FFF9F9",
                            WebkitTextStrokeWidth: "1px", // Add this line
                        }}
                    >
                        KEMENKOAN
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Open Sans",
                            fontSize: "4rem",
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
                        width: "60%",
                        fontFamily: "montserrat",
                        fontSize: "1.5rem",
                        color: "#FFF9F9",
                    }}
                >
                    Menjadi pusat informasi BEM UNAIR kepada publik dengan
                    menyajikan berbagai data dan informasi berbasis digital
                    serta menjadi wadah pengembangan digitalisasi.
                </Typography>
                <Box
                    sx={{
                        width: "70%",
                    }}
                    display="flex"
                    justifyContent="space-around"
                    flexWrap="wrap"
                    gap={1}
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
