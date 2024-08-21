import { AppBar, Box, Card, Container, Typography } from "@mui/material";

const SecondSection = () => {
    return (
        <Box marginY={5} marginX={10}>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={"column"}
            >
                <Box
                    sx={{
                        paddingX: "2.5rem",
                        paddingY: "1rem",
                        backgroundColor: "#850E09",
                        width: "40vw",
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
                    >
                        TENTANG ASA PROGRESIF
                    </Typography>
                </Box>
                <Card
                    sx={{
                        paddingX: "2rem",
                        paddingY: "4rem",
                        backgroundColor: "#FFF9F9",
                        width: "60vw",
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
