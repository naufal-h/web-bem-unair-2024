import CardKemenkoan from "@/Components/Card/CardKemenkoan";
import { Box } from "@mui/material";

type KementrianContentType = {
    image: string;
    title: string;
    text: string;
    link: string;
};

const KementrianContent: KementrianContentType[] = [
    {
        image: "/images/logo/Logo-mini.png",
        title: `Kementrian Lorem Ipsum`,
        text: "Cillum amet sint cupidatat ut ad dolore ipsum deserunt pariatur. Incididunt adipisicing amet aute nulla officia magna deserunt ut qui reprehenderit enim irure. Ullamco et ullamco reprehenderit in nisi irure ex laborum.",
        link: `/Struktur/Kementrian`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `Kementrian Lorem Ipsum`,
        text: "In ipsum ea fugiat eiusmod non. Aliquip consectetur tempor ipsum consectetur aliqua cillum qui pariatur deserunt sint excepteur et. Cillum ipsum qui sint consequat sint laboris.",
        link: `/#`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `Kementrian Lorem Ipsum`,
        text: "Deserunt est ex laboris ex nostrud nisi ut elit incididunt ipsum velit consequat in. Deserunt do laborum laboris elit nulla commodo esse adipisicing proident elit excepteur occaecat. Nostrud deserunt quis Lorem ad est excepteur laboris.",
        link: `/#`,
    },
    {
        image: "/images/logo/Logo-mini.png",
        title: `Kementrian Lorem Ipsum`,
        text: "Incididunt eu anim minim commodo irure voluptate ut nulla adipisicing non laborum. Pariatur duis exercitation Lorem occaecat. Occaecat elit commodo nulla culpa qui nisi nulla occaecat voluptate quis commodo sunt.",
        link: `/#`,
    },
];

const ThirdSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                padding: "2rem",
                position: "relative", // Set relative for absolute positioning of the typography image
            }}
        >
            {/* Teks vertikal yang berada di sebelah kanan */}
            <Box
                component="img"
                src="/images/typography/Asa_pro.svg"
                alt="Logo"
                sx={{
                    position: "absolute",
                    right: "2%",  // Letakkan di sisi kanan
                    top: "20%",  // Adjust to vertically align with content
                    height: "75%",  // Adjust height as needed
                    zIndex: 1,  // Set to 1 so cards will be on top
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
                    gap: "5rem",
                    position: "relative",  // Relative to ensure zIndex works
                    zIndex: 2,  // Higher than the text to appear on top
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
