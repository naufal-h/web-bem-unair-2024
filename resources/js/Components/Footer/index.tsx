import Box from "@mui/material/Box";
import * as S from "./FooterSection.Styled";

const FooterSection = () => {
    return (
        <S.StyledFooterSection>
            <Box
                sx={{
                    width: "90%",
                    height: "420px",
                    position: "relative",
                    backgroundColor: "#4AA2FF",
                    borderRadius: "20px",
                    maxWidth: "1600px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        // alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        height: "100%", // Ensures the height is taken into account
                    }}
                >
                    <S.LogoContainer>
                        <img src="/images/logo/mark_white.png" alt="Logo" />
                    </S.LogoContainer>
                    <S.FooterImage src="/images/footer/Vector (3).png" alt="" />
                    <Box
                        sx={{
                            zIndex: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            height: "256px",
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: "500px",
                                display: "flex",
                                alignItems: "center",
                                marginTop:"80px"
                            }}
                        >
                            <Box sx={{ ml: "50px" }}>
                                <img
                                    src="/images/logo/secondary logo white 2.png"
                                    alt="Logo"
                                />
                            </Box>
                        </Box>
                        {/* <Box>
                            <Box>
                                Copyright 2023 Badan Eksekutif Mahasiswa
                                Universitas Airlangga
                            </Box>
                        </Box> */}
                        <Box sx={{ color: "white", fontSize: "16px", marginRight: "63px",marginTop:"80px", fontFamily: "Open Sans",textAlign:"right" }}>
                            <Box >
                                Universitas Airlangga, Surabaya
                            </Box>
                            <Box >
                                Jl. Dr. Ir. H. Soekarno, Mulyorejo, Kec. Mulyorejo, 
                            </Box>
                            <Box>
                            Kota Surabaya, Jawa Timur 60115
                            </Box>
                            <Box sx={{ mt: "50px", fontWeight: "bold", fontSize: "20px" }}>
                            Kenali Kami Lebih Dalam!
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{position:"absolute",bottom: 0, zIndex: 1, mb: "26px", color: "white", fontSize: "16px", fontFamily: "Open Sans"}}>
                        Copyright 2024 Badan Eksekutif Mahasiswa Universitas Airlangga
                    </Box>
                </Box>
            </Box>
        </S.StyledFooterSection>
    );
};

export default FooterSection;
