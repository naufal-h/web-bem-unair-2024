import { Box, Card, Typography } from "@mui/material";

const FirstSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFF9F9",
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
                    top: "15%",
                    height: "100%", // Adjust height as needed
                    zIndex: 1, // Set to 1 so cards will be on top
                }}
            />
            <Box
                component="img"
                src="/images/anggota/pipKetuKem.png"
                alt="Logo"
                sx={{
                    position: "absolute",
                    top: "37.5%",
                    width: "300px",
                    zIndex: 2, // Set to 1 so cards will be on top
                }}
            />
            <Box
                sx={{
                    zIndex: 3,
                    top: "17.5%",
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
                            fontFamily: "open sans",
                        }}
                    >
                        KEMENKOAN
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: "3rem",
                            fontFamily: "open sans",
                            color: "#7A2D35",
                        }}
                    >
                        KOMINFO
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "60%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <Card
                        sx={{
                            paddingY: "0.5rem",
                            width: "100%",
                            backgroundColor: "rgba(255,249,249,0.8)",
                            boxShadow: "0px 4px 4px rgba(122, 45, 53, 0.12)",
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
                                    fontSize: "2rem",
                                    fontFamily: "open sans",
                                    color: "#7A2D35",
                                }}
                            >
                                Nama Lengkap
                            </Typography>
                        </Box>
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
                                    fontSize: "1rem",
                                    fontFamily: "montserrat",
                                }}
                            >
                                Jabatan
                            </Typography>
                        </Box>
                    </Card>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Card
                            sx={{
                                paddingY: "0.5rem",
                                width: "calc(100%/3 - 20px)",
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow:
                                    "0px 4px 4px rgba(122, 45, 53, 0.12)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "montserrat",
                                    textAlign: "center",
                                    color: "#7A2D35",
                                }}
                            >
                                KEMENTRIAN MEDIA DAN INFORMASI
                            </Typography>
                        </Card>
                        <Card
                            sx={{
                                paddingY: "0.5rem",
                                width: "calc(100%/3 - 20px)",
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow:
                                    "0px 4px 4px rgba(122, 45, 53, 0.12)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "montserrat",
                                    textAlign: "center",
                                    color: "#7A2D35",
                                }}
                            >
                                KEMENTRIAN SINERGITAS MAHASISWA
                            </Typography>
                        </Card>
                        <Card
                            sx={{
                                paddingY: "0.5rem",
                                width: "calc(100%/3 - 20px)",
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow:
                                    "0px 4px 4px rgba(122, 45, 53, 0.12)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "montserrat",
                                    textAlign: "center",
                                    color: "#7A2D35",
                                }}
                            >
                                KEMENTRIAN HUBUNGAN LUAR
                            </Typography>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default FirstSection;
