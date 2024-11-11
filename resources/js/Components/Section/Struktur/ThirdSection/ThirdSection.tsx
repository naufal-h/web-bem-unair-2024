import CardKemenkoan from "@/Components/Card/CardKemenkoan";
import { Box } from "@mui/material";
import { MainKemenkoanInterface } from "../../Kementrian/type";
import { KemenkoanList } from "../../Kementrian/data";






const ThirdSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                padding: { xs: "1rem", sm: "2rem" }, // Adjust padding for xs and sm screens
                position: "relative", 
                backgroundColor: "#FFF9F9",
            }}
        >
            {/* Teks vertikal yang berada di sebelah kanan */}
            <Box
                component="img"
                src="/images/typography/Asa_pro.svg"
                alt="Logo"
                sx={{
                    position: "absolute",
                    right: { xs: "0%", sm: "2%" }, // Adjust right positioning for xs
                    top: { xs: "10%", sm: "20%" },  // Adjust top positioning for xs
                    height: { xs: "50%", sm: "75%" },  // Adjust height for xs screens
                    zIndex: 1, 
                }}
            />

            {/* Bagian kartu di tengah */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: { xs: "2rem", sm: "5rem" }, // Smaller gap for xs screens
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {KemenkoanList.map((content, index) => (
                    <CardKemenkoan
                        key={index}
                        title={content.nama_kementrian}
                        text={content.text_kementrian}
                        link={`/Struktur/Kementrian/${content.id}`}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ThirdSection;
