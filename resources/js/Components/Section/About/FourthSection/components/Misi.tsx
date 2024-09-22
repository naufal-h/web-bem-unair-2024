import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

interface VisiProps {
    index: number;
    children: ReactNode;
}

const Misi = ({ index, children }: VisiProps) => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
            <Card
                sx={{
                    marginTop: "2rem",
                    paddingX: { xs: "1rem", sm: "1.5rem" }, // Smaller padding on mobile
                    paddingY: { xs: "0.5rem", sm: "1rem" },
                    backgroundColor: "#850E09",
                    width: "fit-content",
                    height: "fit-content",
                    borderRadius: "10px",
                    position: "relative",
                    transform: { xs: "translateX(0%)", sm: "translateX(30%)" }, // No transform on mobile
                    zIndex: 1,
                }}
            >
                <Typography
                    variant={"h6"}
                    color={"#FFF9F9"}
                    fontFamily={"Open Sans"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }} // Adjust font size for mobile
                >
                    {index}
                </Typography>
            </Card>
            <Card
                sx={{
                    marginTop: "2rem",
                    paddingX: { xs: "1rem", sm: "2rem" }, // Smaller padding for mobile
                    paddingY: { xs: "1rem", sm: "2rem" },
                    backgroundColor: "#FFF9F9",
                    width: { xs: "80%", sm: "50vw" }, // Adjust width for mobile
                    borderRadius: "10px",
                    boxShadow: "0px 10px 20px 0px rgba(154,57,53,0.3)",
                }}
            >
                <Typography
                    variant={"h6"}
                    color={"#251A1A"}
                    fontFamily={"Open Sans"}
                    fontWeight={"bold"}
                    textAlign={"justify"}
                    sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" } }} // Adjust font size for mobile
                >
                    {children}
                </Typography>
            </Card>
        </Box>
    );
};

export default Misi;
