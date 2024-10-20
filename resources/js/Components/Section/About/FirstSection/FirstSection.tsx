import { Box, Typography } from "@mui/material";

const FirstSection = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: "#FFF9F9",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                overflow: "hidden",
                paddingBottom: "1rem",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                {/* Teks di atas gambar */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 2,
                        position: "absolute",
                        top: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: { xs: "2rem", md: "4rem" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1.5rem",
                                sm: "3.25rem",
                                md: "4.25rem",
                            }, // Ukuran teks responsif
                            fontWeight: "bold",
                            color: "#7A2D35",
                            textAlign: "center",
                        }}
                    >
                        KABINET ASA PROGRESIF
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "2.75rem",
                                md: "3.75rem",
                            }, // Ukuran teks responsif
                            fontWeight: "bold",
                            color: "#211D1D",
                            textAlign: "center",
                        }}
                    >
                        GERAK PROGRESIF CIPTAKAN ASA
                    </Typography>
                </Box>

                {/* Gambar di bawah teks */}
                <Box
                    sx={{
                        paddingY: { xs: "2rem", sm: "3rem", md: "4rem" },
                        width: { xs: "100%", sm: "85%", md: "90%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                        marginTop: { xs: "2rem" },
                    }}
                >
                    <Box
                        component="img"
                        src="/images/typography/ASA_PROGRESIF.svg"
                        alt="ASA PROGRESIF"
                        sx={{
                            opacity: 0.8,
                            width: { xs: "80%", sm: "85%", md: "90%" },
                            display: {
                                xs: "none",
                                md: "block",
                            },
                            zIndex: 1, // Gambar tetap di bawah teks
                        }}
                    />
                </Box>
            </Box>

            {/* Bagian logo */}
            <Box
                component="div"
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    component="img"
                    src="/images/logo/Logo_Bem.png"
                    alt="Logo"
                    sx={{
                        maxWidth: "30%",
                    }}
                />
            </Box>
        </Box>
    );
};

export default FirstSection;
