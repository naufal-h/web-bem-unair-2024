import CardAnggota from "@/Components/Card/CardAnggota";
import { Box } from "@mui/material";

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
                    top: { xs: "20%", sm: "50%" },  // Set top to 0% for xs and 50% for sm and above
                    left: { xs: "5%", sm: "50%" }, // Set left to 0% for xs and 50% for sm and above
                    transform: { xs: "none", sm: "translate(-50%, -50%)" }, // Disable transform on xs
                    zIndex: 1, // Lower z-index to be behind other elements
                    opacity: 0.2, // Adjust opacity for background effect
                    maxWidth: { xs: "350px", sm: "400px", md: "600px" }, // Adjust size as needed
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    padding: "2rem",
                    zIndex: 2, // Ensure cards are above the logo
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, // Responsiveness for width
                        display: "flex",
                        justifyContent: { xs: "center", sm: "space-around" }, // Center on small screens
                        alignItems: "center", // Center content vertically
                        flexWrap: "wrap",
                        gap: 2,
                        flexDirection: { xs: "column", sm: "row" }, // Change layout to column at small screens
                    }}
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
