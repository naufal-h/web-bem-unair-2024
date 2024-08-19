import { pdfUrlType } from "@/Pages/Standar";
import { Box, Card, Typography } from "@mui/material";

const Standar = (pdfUrl: pdfUrlType) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingX: "5rem",
                paddingY: "3rem",
                flexDirection: "column",
            }}
        >
            {/* Section for Text */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    marginY: "4rem",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{ fontWeight: "500", fontSize: "2.5rem" }}
                >
                    Lorem ipsum dolor.
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "500", fontSize: "1rem" }}
                >
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum.
                </Typography>
            </Box>

            {/* Section for PDF Viewer */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginY: "2rem",
                    flexDirection: "column",
                }}
            >
                <Card sx={{ minHeight: "65vh" }}>
                    <iframe
                        src={pdfUrl.pdfUrl as unknown as string}
                        style={{ height: "65vh", width: "60vw" }}
                    />
                </Card>
            </Box>
        </Box>
    );
};

export default Standar;
