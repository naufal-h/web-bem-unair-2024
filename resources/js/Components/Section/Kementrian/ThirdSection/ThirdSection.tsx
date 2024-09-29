import { Box, Card, Typography } from "@mui/material";

const ThirdSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "auto", md: "100vh" }, // Adjust height for mobile
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#FFF9F9",
                padding: { xs: "2rem 1rem", md: "0" }, // Add padding for mobile
            }}
        >
            <Box
                component="img"
                src="/images/logo/mark_3_kem.svg"
                alt="Logo"
                sx={{
                    position: "absolute",
                    height: "100%", // Adjust height as needed
                    zIndex: 1, // Set to 1 so cards will be on top
                    maxWidth: { xs: "80%", md: "100%" }, // Responsive logo size
                    top: 0, 
                    left: "50%",
                    transform: "translateX(-50%)", // Center logo horizontally
                }}
            />
            <Box
                sx={{
                    zIndex: 2,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: "5px", md: "10px" }, // Adjust gap for mobile
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" }, // Stack on mobile
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                            color: "#FFF9F9",
                            fontFamily: "open sans",
                            WebkitTextStrokeColor: "#7A2D35",
                            WebkitTextStrokeWidth: "1px",
                        }}
                    >
                        PROGRAM
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                            fontFamily: "open sans",
                            color: "#7A2D35",
                        }}
                    >
                        KERJA
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: "90%", md: "60%" }, // Adjust width for mobile
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, // Responsive grid
                        gridGap: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "1rem",
                    }}
                >
                    {Array.from({ length: 9 }).map((_, index) => (
                        <Card
                            key={index}
                            sx={{
                                paddingY: "0.5rem",
                                paddingX: "1rem",
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow: "0px 4px 4px rgba(122, 45, 53, 0.12)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                flexDirection: "column",
                                textAlign: "center", // Ensure text stays centered on mobile
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "open sans",
                                    fontWeight: "bold",
                                    color: "#7A2D35",
                                    fontSize: { xs: "1rem", md: "1.25rem" }, // Responsive font size
                                }}
                            >
                                {`${index + 1}. Judul Proker`}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "open sans",
                                    color: "#251A1A",
                                    fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
                                }}
                            >
                                Wadah untuk mahasiswa dalam melatih skill Desain, Video, Copywriting, dan beberapa skill lainnya yang berhubungan dengan media dan publikasi.
                            </Typography>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ThirdSection;
