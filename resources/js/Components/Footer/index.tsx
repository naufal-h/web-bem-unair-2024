import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#FFF9F9",
            }}
        >
            {/* Kontainer utama Footer */}
            <Box
                sx={{
                    width: "90%",
                    minHeight: { xs: "350px", sm: "380px", md: "426px" },
                    position: "relative",
                    backgroundColor: "#850E09",
                    borderRadius: "20px",
                    maxWidth: "1600px",
                }}
            >
                {/* Konten Footer */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        height: "100%",
                    }}
                >
                    {/* Logo utama (mark_white.png) */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    >
                        <img src="/images/logo/mark_white.png" alt="Logo" />
                    </Box>

                    {/* Gambar footer (Vector_3.png) */}
                    <Box
                        component="img"
                        src="/images/footer/Vector_3.png"
                        alt=""
                        sx={{
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            zIndex: 1,
                        }}
                    />

                    {/* Kontainer untuk konten lainnya */}
                    <Box
                        sx={{
                            zIndex: 2,
                            display: "flex",
                            textAlign: { xs: "center", md: "left" }, // Center pada xs, left pada md ke atas
                            justifyContent: {
                                xs: "center",
                                md: "space-between",
                            },
                            width: "100%",
                            minHeight: "256px",
                            alignItems: "center",
                            padding: { xs: "1rem", md: "2rem", lg: "3rem" },
                            flexDirection: { xs: "column", md: "row" }, // Kolom pada layar kecil, baris pada layar lebih besar
                        }}
                    >
                        {/* Kontainer untuk logo sekunder */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: "500px",
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    alignItems: "center",
                                    marginTop: { xs: "2rem", md: "80px" },
                                }}
                            >
                                <img
                                    src="/images/logo/secondary logo white 2.png"
                                    alt="Logo"
                                    style={{
                                        // maxWidth: { xs: "150px", md: "200px" },
                                    }} // Sesuaikan ukuran gambar dengan layar
                                />
                            </Box>

                            <Box
                                sx={{
                                    mt: { xs: "16px", md: "0px" },
                                    fontWeight: "bold",
                                    fontSize: {
                                        xs: "12px",
                                        md: "16px",
                                        lg: "18px",
                                    },
                                    color: "white",
                                    fontFamily: "Open Sans",
                                    textAlign: { xs: "center", md: "left" }, // Center di layar kecil, left di layar besar
                                }}
                            >
                                Kenali Kami Lebih Dalam!
                            </Box>

                            {/* Ikon media sosial */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    mt: "8px", // Jarak di atas ikon
                                    gap: "10px", // Jarak antar ikon
                                    justifyContent: {
                                        xs: "center",
                                        md: "flex-start",
                                    }, // Center pada layar kecil, left pada layar besar
                                }}
                            >
                                <Link href="#" sx={{ color: "white" }}>
                                    <InstagramIcon
                                        sx={{
                                            fontSize: {
                                                xs: "28px",
                                                md: "32px",
                                                lg: "36px",
                                            },
                                        }}
                                    />
                                </Link>
                                <Link href="#" sx={{ color: "white" }}>
                                    <LinkedInIcon
                                        sx={{
                                            fontSize: {
                                                xs: "28px",
                                                md: "32px",
                                                lg: "36px",
                                            },
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Box>

                        {/* Kontainer untuk alamat dan narahubung */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { xs: "1rem", md: "2rem" },
                                textAlign: { xs: "center", md: "right" },
                                mt: { xs: "1rem", md: "0" }, // Tambahkan margin atas pada xs agar ada jarak
                            }}
                        >
                            <Box
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                    fontSize: {
                                        xs: "12px",
                                        md: "14px",
                                        lg: "16px",
                                    },
                                }}
                            >
                                <span>Universitas Airlangga, Surabaya</span>
                                <span>Jl. Dr. H. Soekarno, Mulyorejo</span>
                                <span>Kec. Mulyorejo, Kota Surabaya</span>
                                <span>Jawa Timur 60115</span>
                            </Box>
                            <Box
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: {
                                        xs: "12px",
                                        md: "14px",
                                        lg: "16px",
                                    },
                                }}
                            >
                                <span>Media dan Informasi (Naufal - 62856-0762-2950)</span>
                                <span>Eksternal Unair (Mufida - 62821-4182-6030)
                                </span>
                                <span>Internal Unair (Satrio - 62857-2426-9372)
                                </span>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Copyright di bagian bawah */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        zIndex: 1,
                        // paddingTop: "1rem",
                        color: "white",
                        fontSize: { xs: "10px", md: "16px" },
                        fontFamily: "Open Sans",
                        textAlign: { xs: "center", md: "center" },
                        width: "100%",
                    }}
                >
                    Copyright 2024 Badan Eksekutif Mahasiswa Universitas
                    Airlangga
                </Box>
            </Box>
        </Box>
    );
};

export default FooterSection;
