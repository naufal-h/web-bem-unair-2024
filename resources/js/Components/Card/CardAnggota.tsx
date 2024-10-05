import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

type CardAnggotaProps = {
    image: string;
    title: string;
    text: string;
};

const CardAnggota = ({ image, title, text }: CardAnggotaProps) => {
    return (
        <Card
            sx={{
                maxWidth: { xs: "90px", sm: "200px", md: "220px", lg: "300px" },
                maxHeight: {
                    xs: "200px",
                    sm: "150px",
                    md: "350px",
                    lg: "400px",
                },
                minHeight: {
                    xs: "200px",
                    sm: "150px",
                    md: "350px",
                    lg: "400px",
                },
                backgroundColor: "#FFF9F9",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                    backgroundColor: "#850E09",
                    transform: "scale(1.02)",
                    "& .headline-text": {
                        color: "#FFF9F9",
                    },
                    "& .description-text": {
                        color: "#FFF9F9",
                    },
                },
                "@media (max-width: 600px)": {
                    maxWidth: "250px",
                    width: "200px",
                },
                "@media (max-width: 375px)": {
                    maxWidth: "200px",
                    width: "180px",
                },
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    p: {
                        xs: (theme) => `${theme.spacing(5, 2, 5.5)} !important`, // Padding for xs
                        sm: (theme) => `${theme.spacing(6, 2, 6.5)} !important`, // Padding for sm
                        md: (theme) => `${theme.spacing(7, 2, 7.5)} !important`, // Padding for md
                    },
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "50%", // Width for xs
                            sm: "60%", // Width for sm
                            md: "70%", // Width for md
                        },
                    }}
                    component="img"
                    src={image}
                    alt={text}
                />

                <Typography
                    className="headline-text"
                    sx={{
                        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, // Responsiveness for fontSize
                        width: "100%",
                        color: "#7A2D35",
                        fontFamily: "open sans",
                        transition: "color 0.3s",
                        fontWeight: "bold",
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    className="description-text"
                    sx={{
                        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" }, // Responsiveness for fontSize
                        width: "100%",
                        color: "#D0757D",
                        fontFamily: "montserrat",
                        transition: "color 0.3s",
                    }}
                >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardAnggota;
