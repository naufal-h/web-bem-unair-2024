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
                    paddingX: "1.5rem",
                    paddingY: "1rem",
                    backgroundColor: "#850E09",
                    width: "fit-content",
                    height: "fit-content",
                    borderRadius: "10px",
                    position: "relative",
                    transform: "translateX(30%)",
                    zIndex: 1,
                }}
            >
                <Typography
                    variant={"h6"}
                    color={"#FFF9F9"}
                    fontFamily={"Open Sans"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    {index}
                </Typography>
            </Card>
            <Card
                sx={{
                    marginTop: "2rem",
                    paddingX: "2rem",
                    paddingY: "1rem",
                    backgroundColor: "#FFF9F9",
                    width: "50vw",
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
                >
                    {children}
                </Typography>
            </Card>
        </Box>
    );
};

export default Misi;
