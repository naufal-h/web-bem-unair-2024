import { Box, Card, Typography } from "@mui/material";
import Misi from "./components/Misi";

const FourthSection = () => {
    return (
        <Box marginBottom={10} marginX={10}>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box display={"flex"} flexDirection={"column"}>
                    <Box
                        sx={{
                            paddingX: "2rem",
                            paddingY: "1rem",
                            backgroundColor: "#850E09",
                            width: "fit-content",
                            borderRadius: "10px",
                        }}
                    >
                        <Typography
                            variant={"h4"}
                            color={"#FFF9F9"}
                            fontFamily={"Open Sans"}
                            fontWeight={"bold"}
                        >
                            Visi
                        </Typography>
                    </Box>
                    <Card
                        sx={{
                            marginTop: "2rem",
                            paddingX: "2rem",
                            paddingY: "4rem",
                            backgroundColor: "#FFF9F9",
                            width: "50vw",
                            borderRadius: "10px",
                            boxShadow: "0px 10px 20px 0px rgba(154,57,53,0.3)",
                        }}
                    >
                        <Typography
                            variant={"h5"}
                            color={"#251A1A"}
                            fontFamily={"Open Sans"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                        >
                            BEM UNAIR Sebagai organisasi dengan spirit Asa
                            Progresif untuk mewujudkan kebermanfaatan nyata bagi
                            Universitas Airlangga dan Indonesia.
                        </Typography>
                    </Card>
                </Box>
                <Box
                    component="img"
                    src="/images/logo/back-drop.png"
                    sx={{
                        overflow: "hidden",
                        width: "37%",
                    }}
                />
            </Box>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box
                    component="img"
                    src="/images/logo/back-drop.png"
                    sx={{
                        overflow: "hidden",
                        width: "50%",
                    }}
                />
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                >
                    <Box
                        sx={{
                            paddingX: "2rem",
                            paddingY: "1rem",
                            backgroundColor: "#850E09",
                            width: "fit-content",
                            borderRadius: "10px",
                        }}
                    >
                        <Typography
                            variant={"h4"}
                            color={"#FFF9F9"}
                            fontFamily={"Open Sans"}
                            fontWeight={"bold"}
                        >
                            Misi
                        </Typography>
                    </Box>

                    <Misi index={1}>
                        Mewujudkan BEM Unair sebagai transenden representasi
                        mahasiswa dalam pengadvokasian kesejahteraan mahasiswa.
                    </Misi>
                    <Misi index={2}>
                        Mewujudkan BEM Unair sebagai transenden representasi
                        mahasiswa dalam pengadvokasian kesejahteraan mahasiswa.
                    </Misi>
                    <Misi index={3}>
                        Mewujudkan BEM Unair sebagai transenden representasi
                        mahasiswa dalam pengadvokasian kesejahteraan mahasiswa.
                    </Misi>
                    <Misi index={4}>
                        Mewujudkan BEM Unair sebagai transenden representasi
                        mahasiswa dalam pengadvokasian kesejahteraan mahasiswa.
                    </Misi>
                    <Misi index={5}>
                        Mewujudkan BEM Unair sebagai transenden representasi
                        mahasiswa dalam pengadvokasian kesejahteraan mahasiswa.
                    </Misi>
                </Box>
            </Box>
        </Box>
    );
};

export default FourthSection;
