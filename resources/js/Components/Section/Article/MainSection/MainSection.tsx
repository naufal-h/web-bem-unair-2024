import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
} from "react";
import CardNews from "@/Components/Card/CardNews";
import * as S from "./MainSectionStyled";

const MainSection = ({ content }) => {
    // Function to split the text into paragraphs
    const paragraphs = content.split("\n\n");

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
            {/* head */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "1.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.75rem",
                        }}
                    >
                        <PermIdentityIcon />
                        <Typography>BEM UNAIR NEWS</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.75rem",
                        }}
                    >
                        <CalendarMonthIcon />
                        <Typography>Agustus, 01, 2024</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.75rem",
                        }}
                    >
                        <AccessTimeIcon />
                        <Typography>12.00 pm</Typography>
                    </Box>
                </Box>
            </Box>

            {/* Title and Subtitle */}
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

            {/* Article Content */}
            <Card
                sx={{
                    width: "100%",
                    borderRadius: "12px",
                    padding: "5rem 2rem 2rem 2rem",
                    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                }}
            >
                <CardMedia
                    component="img"
                    image="/images/cards/dummy-collab.png"
                    sx={{
                        borderRadius: "6px",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        maxHeight: "500px",
                        backgroundColor: "rgba(0,0,0,0.08)",
                    }}
                />
                <CardContent>
                    {/* Loop through each paragraph and render it */}
                    {paragraphs.map(
                        (
                            paragraph:
                                | string
                                | number
                                | boolean
                                | ReactElement<
                                      any,
                                      string | JSXElementConstructor<any>
                                  >
                                | Iterable<ReactNode>
                                | ReactPortal
                                | null
                                | undefined
                        ) => (
                            <Typography variant="body1" paragraph>
                                {paragraph}
                            </Typography>
                        )
                    )}
                </CardContent>
            </Card>

            {/* Another News */}
            <Box
                sx={{
                    width: "100%",
                    gap: "15rem",
                    marginY: "5rem",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "500",
                    }}
                >
                    BERITA LAINNYA
                </Typography>
                <Box sx={{ marginTop: "3rem" }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={2} sm={4} md={4}>
                            <CardNews />
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <CardNews />
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <CardNews />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default MainSection;
