import { Box, Typography } from "@mui/material";

const FirstSection = () => {
    return (
        <>
            <Box
                component="section"
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    overflow: "hidden",
                    marginBottom: "1rem",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        component="img"
                        src="/images/logo/Logo_Bem.png"
                        alt="Logo"
                        sx={{
                            maxWidth: "52%",
                        }}
                    />

                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ></Box>
                </Box>
            </Box>
        </>
    );
};

export default FirstSection;
