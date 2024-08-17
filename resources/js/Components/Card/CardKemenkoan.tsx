import { Box, Card, CardActions, CardContent, IconButton, Link, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type CardKemenkoanProps = {
    image: string;
    title: string;
    text: string;
    link: string;
};

const CardKemenkoan = ({ image, title, text, link }: CardKemenkoanProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                width: "90%",
                position: "relative", // Mengontrol posisi elemen anak
                transition: "transform 0.3s ease-in-out",
                backgroundColor: "#FFF9F9",
                '&:hover': {
                    // transform: "scale(1.05)", // Membuat efek zoom saat hover
                    '& .hoverFab': { // Targetkan elemen hanya ketika Card di-hover
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateX(0)", // Geser ke posisi normal saat di-hover
                    },
                },
            }}
        >
            <Box sx={{
                width: "95%",
                display: "flex",
            }}>

                <Box component="img" src={image}></Box>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            width: "100%",
                            color: "#7A2D35",
                            fontWeight: "bold",
                            fontFamily: "open sans",
                            transition: "color 0.3s",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            width: "100%",
                            color: "#7A2D35",
                            fontWeight: "normal",
                            fontFamily: "montserrat",
                            transition: "color 0.3s",
                        }}
                    >
                        {text}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{ 
                width: "5%",
                backgroundColor: "#850E09",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0, // Mulai disembunyikan
                visibility: "hidden", // Mulai tidak terlihat
                position: "absolute", // Posisi tetap di kanan
                right: 0, // Posisikan di sisi kanan
                height: "100%",
                transform: "translateX(100%)", // Mulai di luar tampilan (kanan)
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out", // Transisi smooth
            }}
            className="hoverFab" // Kelas untuk menargetkan elemen saat di-hover
            >
                <CardActions>
                <Link href={link}>
                    <IconButton
                        sx={{
                            color: "#fff", // Warna awal ikon
                            transition: "color 0.3s", // Transisi warna
                            '&:hover': {
                                color: "#f0a500",
                            },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                    </Link>
                </CardActions>
            </Box>
        </Card>
    );
};

export default CardKemenkoan;
