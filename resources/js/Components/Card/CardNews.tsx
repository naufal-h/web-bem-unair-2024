import React from "react";
// ** MUI Imports
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Fab, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface CardNewsProps {
    image: string;
    title: string;
    url: string;
    content: string;
}

const CardNews: React.FC<CardNewsProps> = ({ image, title, url, content }) => {
    return (
        <Card
            sx={{
                backgroundColor: "#FFF9F9",
                borderRadius: "8px",
                padding: {
                    xs: "1rem", // For extra small screens
                    md: "1.5rem", // For medium screens
                    lg: "2rem", // For large screens
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                margin: "0",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                    backgroundColor: "#850E09",
                    transform: "scale(1.02)",
                    "& .headline-text": {
                        color: "#FFF9F9",
                    },
                    "& .description-text": {
                        color: "#FFF9F9",
                    },
                },
            }}
        >
            <Box
                sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: {
                        xs: "column", // Stack title and button on small screens
                        md: "row", // Align title and button in a row on medium and up
                    },
                    justifyContent: "space-between",
                    alignItems: "center", // Align items in the center on larger screens
                }}
            >
                <Typography
                    className="headline-text"
                    sx={{
                        color: "#850E09",
                        fontWeight: "bold",
                        fontFamily: "Sansation",
                        fontSize: {
                            xs: "1.5rem", // Smaller font size on extra small screens
                            md: "2rem",   // Larger font size on medium screens
                            lg: "2.5rem", // Even larger on large screens
                        },
                        transition: "color 0.3s",
                    }}
                    variant="h4"
                >
                    {title}
                </Typography>
                <CardActions sx={{ paddingTop: { xs: "0.5rem", md: "0" } }}>
                    <Link href={url}>
                        <Fab
                            sx={{
                                backgroundColor: "#850E09",
                                transition: "background-color 0.3s",
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiSvgIcon-root": {
                                        color: "#850E09",
                                    },
                                },
                                width: {
                                    xs: "40px", // Smaller button for mobile
                                    md: "50px", // Larger button for medium
                                    lg: "60px", // Larger button for large
                                },
                                height: {
                                    xs: "40px",
                                    md: "50px",
                                    lg: "60px",
                                },
                            }}
                            aria-label="add"
                        >
                            <ArrowForwardIcon
                                sx={{
                                    color: "#fff",
                                    transition: "color 0.3s",
                                    fontSize: {
                                        xs: "1rem",
                                        md: "1.25rem",
                                        lg: "1.5rem",
                                    },
                                }}
                            />
                        </Fab>
                    </Link>
                </CardActions>
            </Box>
            <Divider
                sx={{
                    borderColor: "#fff",
                    borderBottomWidth: 1,
                    mt: (theme) => `${theme.spacing(1)} !important`,
                    mb: (theme) => `${theme.spacing(1)} !important`,
                }}
            />
            <CardContent sx={{ padding: 0 }}>
                <Typography
                    className="description-text"
                    sx={{
                        mb: 2,
                        color: "#847F80",
                        fontFamily: "Open Sans",
                        fontSize: {
                            xs: "0.875rem", // Smaller text for extra small screens
                            md: "1rem",     // Default text size for medium screens
                            lg: "1.125rem", // Larger text for large screens
                        },
                        transition: "color 0.3s",
                    }}
                >
                    <Box
                        sx={{ marginTop: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: content }} // Use dangerouslySetInnerHTML here
                    />
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={image}
                alt="news-image"
                sx={{
                    borderRadius: "8px",
                    width: "100%",
                    height: {
                        xs: "200px", // Shorter image on extra small screens
                        md: "300px", // Default size on medium screens
                        lg: "400px", // Larger image on large screens
                    },
                    transition: "height 0.3s",
                }}
            />
        </Card>
    );
};

export default CardNews;
