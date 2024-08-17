import CardProf from "@/Components/Card/CardProf";
import { Box, Typography } from "@mui/material";

const MainSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        marginY: "4rem",
                        width: "90%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <Box
                        component="img"
                        src="/images/typography/ASA_PROGRESIF.svg"
                        alt="ASA PROGRESIF"
                        sx={{ opacity: 0.8, width: "90%" }}
                    />
                </Box>
                <Typography
                    sx={{
                        fontSize: "4rem",
                        fontWeight: "bold",
                        color: "#800000",
                        position: "absolute",
                        textAlign: "center",
                    }}
                >
                    STRUKTUR BEM <br /> UNIVERSITAS AIRLANGGA 2024
                </Typography>
                {/* <Box>
                <CardProf />
            </Box> */}
            </Box>
            <Box
                sx={{
                    width: "90%",
                }}
            >
                {/* Image on the left, card on the right */}
                <CardProf direction="left" />

                {/* Image on the right, card on the left */}
                <CardProf direction="right" />
            </Box>
        </Box>
    );
};

export default MainSection;
