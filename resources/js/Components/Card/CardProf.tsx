import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

export interface CardProfProps {
    direction?: "left" | "right";
    images: string;
    nama: string;
    posisi: string;
}


const CardProf = ({ direction , images, nama, posisi }: CardProfProps) => {
    const isLeft = direction === "left";

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                flexDirection: isLeft ? "row" : "row-reverse",
            }}
        >
            <Box
                sx={{
                    maxWidth: { xs: "65%", sm: "200px", md: "330px" },
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    objectFit: "cover",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 1,
                }}
            >
                <Box
                    component="img"
                    src={images}
                    sx={{
                        
                        width: {
                            xs: "100%",
                            sm: "150px",
                            md: "70%",},
                        height: {
                            xs: "150px",
                            sm: "auto",
                            md: "auto",},
                        borderRadius: "inherit",
                    }}
                />
            </Box>
            <Card
                sx={{
                    backgroundColor: "#FFF9F9",
                    position: "relative",
                    bottom: { xs: "-40px", sm: "0", md: -10 },
                    maxWidth: { xs: "200px", sm: "350px", md: "450px" },
                    maxHeight: { xs: "100px", sm: "125px", md: "250px" },
                    minHeight: { xs: "50px", sm: "100px", md: "110px" },
                    zIndex: 1, // Ensure card is below the image
                    [isLeft ? "right" : "left"]: 30,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
                    opacity: 1, // Ensure full opacity
                }}
            >
                <CardContent
                sx={{
                    overflow: "hidden", // Menyembunyikan teks yang keluar dari wadah
                    textOverflow: "ellipsis",
                }}
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            fontFamily: "Open Sans",
                            color: "#7A2D35",
                            fontWeight: 700,
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.5rem",
                            },
                        }}
                    >
                        {nama}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "montserrat",
                            fontWeight: 500,
                            color: "#251A1A",
                            fontSize: {
                                xs: "0.5rem",
                                sm: "0.8rem",
                                md: "1rem",
                            },
                            overflow: "hidden", // Menyembunyikan teks yang keluar dari wadah
                            textOverflow: "ellipsis",
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {posisi}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardProf;
