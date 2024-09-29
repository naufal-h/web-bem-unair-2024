import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const CardProf = ({ direction = "left" }) => {
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
                    maxWidth: { xs: "65%", sm: "200px", md: "350px" },
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Box
                    component="img"
                    src="/images/cards/real-pip.png"
                    sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "inherit",
                    }}
                />
            </Box>
            <Card
                sx={{
                    backgroundColor: "#FFF9F9",
                    position: "relative",
                    bottom: -10,
                    maxWidth: { xs: "200px", sm: "350px", md: "450px" },
                    maxHeight: { xs: "100px", sm: "125px", md: "250px" },
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
                                md: "1.1rem",
                            },
                        }}
                    >
                        Aulia Athaariq Akbar
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "montserrat",
                            fontWeight: 500,
                            color: "#251A1A",
                            fontSize: {
                                xs: "0.5rem",
                                sm: "0.8rem",
                                md: "0.85rem",
                            },
                            overflow: "hidden", // Menyembunyikan teks yang keluar dari wadah
                            textOverflow: "ellipsis",
                        }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Sint cillum minim aliquip aliquip et Lorem voluptate
                        laborum aute est sint est do. Reprehenderit irure sit
                        pariatur laborum occaecat fugiat qui magna eu pariatur
                        do.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CardProf;
