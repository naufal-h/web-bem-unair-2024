import { Box, Card, CardContent, Typography } from "@mui/material";

const FourthSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFF",
                padding: { xs: "2rem", md: "4rem" },
                textAlign: "center",
            }}
        >
            <Typography
                variant="h3"
                fontWeight="bold"
                fontFamily="Open Sans"
                color="#fff"
                sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    mb: 3,
                    WebkitTextStrokeColor: "#850E09",
                    WebkitTextStrokeWidth: "1px",
                }}
            >
                LAYANAN <span style={{ color: "#850E09" }}>TERSEDIA</span>
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    gap: { xs: 2, md: 3 },
                }}
            >
                <Card
                    sx={{
                        width: { xs: "100%", md: "30%" },
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10px",
                        backgroundColor: "#FFF9F9",
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="#B71C1C"
                            textAlign="center"
                            gutterBottom
                        >
                            OPEN RECRUITMENT
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily="Open Sans"
                            color="#4A4A4A"
                            textAlign="center"
                        >
                            Wadah untuk mahasiswa dalam melatih skill Desain,
                            Video, Copywriting, dan beberapa skill lainnya yang
                            berhubungan dengan media dan publikasi.
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        width: { xs: "100%", md: "30%" },
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10px",
                        backgroundColor: "#FFF9F9",
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="#B71C1C"
                            textAlign="center"
                            gutterBottom
                        >
                            BERITA TERBARU
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily="Open Sans"
                            color="#4A4A4A"
                            textAlign="center"
                        >
                            Wadah untuk mahasiswa dalam melatih skill Desain,
                            Video, Copywriting, dan beberapa skill lainnya yang
                            berhubungan dengan media dan publikasi.
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        width: { xs: "100%", md: "30%" },
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10px",
                        backgroundColor: "#FFF9F9",
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="#B71C1C"
                            textAlign="center"
                            gutterBottom
                        >
                            FORM
                        </Typography>
                        <Typography
                            variant="body1"
                            fontFamily="Open Sans"
                            color="#4A4A4A"
                            textAlign="center"
                        >
                            Wadah untuk mahasiswa dalam melatih skill Desain,
                            Video, Copywriting, dan beberapa skill lainnya yang
                            berhubungan dengan media dan publikasi.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default FourthSection;
