import { Box, Card, Typography } from "@mui/material";

const SecondSection = () => {
    return (
        <Box marginY={5} marginX={{ xs: 2, md: 10 }}>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={"column"}
            >
                <Box
                    sx={{
                        paddingX: { xs: "1.5rem", md: "2.5rem" },
                        paddingY: "1rem",
                        backgroundColor: "#850E09",
                        width: { xs: "70vw", md: "40vw" },
                        borderRadius: "10px",
                        zIndex: "1",
                        position: "relative",
                        top: "2rem",
                    }}
                >
                    <Typography
                        variant={"h4"}
                        color={"#FFF9F9"}
                        fontFamily={"Open Sans"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        sx={{
                            fontSize: { xs: "1.25rem", md: "2rem" },
                        }}
                    >
                        TENTANG ASA PROGRESIF
                    </Typography>
                </Box>
                <Card
                    sx={{
                        paddingX: { xs: "1rem", md: "2rem" },
                        paddingY: { xs: "2rem", md: "4rem" },
                        backgroundColor: "#FFF9F9",
                        width: { xs: "80vw", md: "60vw" },
                        borderRadius: "10px",
                        boxShadow: "0px 10px 20px 0px rgba(154,57,53,0.3)",
                    }}
                >
                    <Typography
                        variant={"h6"}
                        color={"#251A1A"}
                        fontFamily={"Open Sans"}
                        textAlign={"justify"}
                        fontWeight={"bold"}
                        sx={{
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            marginTop: { xs: "1.5rem" },
                        }}
                    >
                        BEM UNAIR Sebagai organisasi dengan spirit Asa Progresif
                        untuk mewujudkan kebermanfaatan nyata bagi Universitas
                        Airlangga dan Indonesia. BEM UNAIR Sebagai organisasi
                        dengan spirit Asa Progresif untuk mewujudkan
                        kebermanfaatan nyata bagi Universitas Airlangga dan
                        Indonesia. BEM UNAIR Sebagai organisasi dengan spirit
                        Asa Progresif untuk mewujudkan kebermanfaatan nyata bagi
                        Universitas Airlangga dan Indonesia.
                    </Typography>
                </Card>
            </Box>
        </Box>
    );
};

export default SecondSection;
