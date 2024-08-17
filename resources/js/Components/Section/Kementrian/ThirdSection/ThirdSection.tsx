import { Box, Card, Typography } from "@mui/material";

const ThirdSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
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
                        gap: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: "3rem",
                            color: '#FFF9F9',
                            fontFamily: "open sans",
                            WebkitTextStrokeColor: "#7A2D35",
                            WebkitTextStrokeWidth: "1px", //
                        }}
                    >
                        PROGRAM
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: "3rem",
                            fontFamily: "open sans",
                            color: "#7A2D35",
                        }}
                    >
                        KERJA
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "60%",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
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
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "open sans",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    color: "#7A2D35",
                                }}
                            >
                                {`${index + 1}. Judul Proker`}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "open sans",
                                    color: "#251A1A",
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
