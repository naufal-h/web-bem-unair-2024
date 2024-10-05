import CardKemenkoan from "@/Components/Card/CardKemenkoan";
import { Box } from "@mui/material";

interface KementrianContentType {
    image: string;
    title: string;
    text: string;
    link: string;
};

const KementrianContent: KementrianContentType[] = [
    {
        image: "/images/logo/Logo-mini.png",
        title: `KEMENTRIAN KEMAHASISWAAN`,
        text: "Cillum amet sint cupidatat ut ad dolore ipsum deserunt pariatur. Incididunt adipisicing amet aute nulla officia magna deserunt ut qui reprehenderit enim irure.",
        link: `/Struktur/Kementrian`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `KEMENTRIAN PERGERAKAN`,
        text: "Cillum amet sint cupidatat ut ad dolore ipsum deserunt pariatur. Incididunt adipisicing amet aute nulla officia magna deserunt ut qui reprehenderit enim irure.",
        link: `/#`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `KEMENKOAN KEMASYARAKATAN`,
        text: "Cillum amet sint cupidatat ut ad dolore ipsum deserunt pariatur. Incididunt adipisicing amet aute nulla officia magna deserunt ut qui reprehenderit enim irure.",
        link: `/#`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `KEMENKOAN KOMINFO`,
        text: "Cillum amet sint cupidatat ut ad dolore ipsum deserunt pariatur. Incididunt adipisicing amet aute nulla officia magna deserunt ut qui reprehenderit enim irure..",
        link: `/#`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `KEMENKOAN PPK`,
        text: "Cillum amet sint cupidatat ut ad dolore ipsum deserunt pariatur. Incididunt adipisicing amet aute nulla officia magna deserunt ut qui reprehenderit enim irure..",
        link: `/#`,
    },
];

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
                {KementrianContent.map((content, index) => (
                    <CardKemenkoan
                        key={index}
                        image={content.image}
                        title={content.title}
                        text={content.text}
                        link={content.link}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ThirdSection;
