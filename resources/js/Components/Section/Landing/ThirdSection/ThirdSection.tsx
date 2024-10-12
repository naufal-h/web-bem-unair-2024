import { Box, Card, Typography } from "@mui/material";

const ThirdSection = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#7A2D35",
                    padding: { xs: "2rem", md: "4rem" },
                }}
            >
                <Typography
                    variant="h3"
                    color="#FFF9F9"
                    fontFamily="Open Sans"
                    fontWeight="bold"
                    textAlign="center"
                    sx={{
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        marginBottom: "1.5rem",
                    }}
                >
                    SAMBUTAN
                </Typography>
                <Box
                    sx={{
                        backgroundColor: "#7A2D35",
                        padding: { xs: "2rem", md: "4rem" },
                        display: "flex",
                        flexDirection: { xs: "column-reverse", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", md: "60%" },
                        }}
                    >
                        <Typography
                            variant="body1"
                            color="#FFF9F9"
                            fontFamily="Open Sans"
                            textAlign="justify"
                            sx={{
                                fontSize: { xs: "1rem", md: "1.2rem" },
                                lineHeight: 1.8,
                            }}
                        >
                            Sebagai Ketua Badan Eksekutif Mahasiswa (BEM)
                            Universitas Airlangga periode 2024, saya merasa
                            terhormat dan bangga dapat memimpin organisasi yang
                            menjadi wadah aspirasi dan kreativitas mahasiswa.
                            BEM Universitas adalah rumah bagi kita semua, tempat
                            di mana ide-ide segar lahir dan dieksekusi untuk
                            membawa perubahan positif, baik di dalam lingkungan
                            kampus maupun di tengah masyarakat luas.
                            <br />
                            <br />
                            Kami menyadari bahwa tantangan yang kita hadapi
                            tidaklah mudah. Namun, dengan semangat kebersamaan
                            dan kerja keras, kami yakin bahwa BEM Universitas
                            Airlangga akan mampu menjadi garda terdepan dalam
                            mengawal perubahan menuju kemajuan dan kesejahteraan
                            bersama.
                            <br />
                            <br />
                            Akhir kata, saya mengajak seluruh mahasiswa
                            Universitas Airlangga untuk bersama-sama terlibat
                            aktif dalam setiap program dan kegiatan yang
                            diinisiasi oleh BEM. Mari kita wujudkan kampus yang
                            lebih baik, inklusif, dan berdaya saing tinggi.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: { xs: "100%", md: "30%" },
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-end" },
                            marginBottom: { xs: 3, md: 0 },
                        }}
                    >
                        <Card
                            sx={{
                                padding: "2rem",
                                backgroundColor: "#FFF9F9",
                                borderRadius: "10px",
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <center>
                                <img
                                    alt="Presiden BEM"
                                    src="/images/fungsionaris/Pres_dan_Wapres/Presbem.png"
                                    width={150}
                                    height={150}
                                    style={{
                                        marginBottom: "1rem",
                                    }}
                                />
                            </center>
                            <Typography
                                variant="h6"
                                color="#251A1A"
                                textAlign="center"
                                fontWeight="bold"
                            >
                                Presiden BEM
                            </Typography>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ThirdSection;
