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
            {/* <Box
                component="img"
                src="/images/logo/mark_3_kem.svg"
                alt="Logo"
                sx={{
                    position: "absolute",
                    top: "15%",
                    height: { xs: "50%", sm: "70%", md: "100%" }, // Responsive height
                    zIndex: 1,
                }}
            /> */}
            <Box
                component="img"
                src="/images/cards/real-pip.png"
                alt="Logo"
                sx={{
                    position: "absolute",
                    top: "37.5%",
                    width: { xs: "150px", sm: "200px", md: "300px" }, // Responsive width
                    zIndex: 2,
                }}
            />
            <Box
                sx={{
                    zIndex: 3,
                    top: "17.5%",
                    transform:{
                        xs: "translateY(-40%)",
                        sm: "none",
                        md: "none",
                    },
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
                        transform: {
                            
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
                            fontFamily: "open sans",
                        }}
                    >
                        KEMENKOAN
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                            fontFamily: "open sans",
                            color: "#7A2D35",
                        }}
                    >
                        KOMINFO
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: "90%", sm: "70%", md: "60%" }, // Responsive width
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
                                    fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
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
                                    fontSize: { xs: "0.8rem", md: "1rem" }, // Responsive font size
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
                            flexDirection: {
                                sx: "row"
                            },
                            justifyContent: "space-between",
                            gap: "10px",
                            flexWrap: {
                                xs: "nowrap",
                                sm: "wrap",
                                md: "wrap",
                            } // Allow items to wrap on smaller screens
                        }}
                    >
                        <Card
                            sx={{
                                paddingY: "0.5rem",
                                width: { xs: "100%", sm: "calc(100%/3 - 20px)" }, // Full width on xs
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow: "0px 4px 4px rgba(122, 45, 53, 0.12)",
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
                                    fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                                }}
                            >
                                KEMENTRIAN MEDIA DAN INFORMASI
                            </Typography>
                        </Card>
                        <Card
                            sx={{
                                paddingY: "0.5rem",
                                width: { xs: "100%", sm: "calc(100%/3 - 20px)" }, // Full width on xs
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow: "0px 4px 4px rgba(122, 45, 53, 0.12)",
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
                                    fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                                }}
                            >
                                KEMENTRIAN SINERGITAS MAHASISWA
                            </Typography>
                        </Card>
                        <Card
                            sx={{
                                paddingY: "0.5rem",
                                width: { xs: "100%", sm: "calc(100%/3 - 20px)" }, // Full width on xs
                                backgroundColor: "rgba(255,249,249,0.8)",
                                boxShadow: "0px 4px 4px rgba(122, 45, 53, 0.12)",
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
                                    fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
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
