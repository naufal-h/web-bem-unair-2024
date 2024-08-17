import React from "react";
// ** MUI Imports
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Fab, Link } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CardNewsProps {
    image: string;
    title: string;
    url: string;
    content: string
}

const CardNews: React.FC<CardNewsProps> = ({
    image,
    title,
    url,
    content
}) => {
    return (
        <Card
            sx={{
                backgroundColor: "#FFF9F9",
                borderRadius: "10px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                transition: "background-color 0.3s, transform 0.3s",
                "&:hover": {
                    // borderBottomLeftRadius: "25%",
                    backgroundColor: "#9A3935",
                    transform: "scale(1.02)",
                    '& .headline-text': {
                        color: "#850E09",
                    },
                    '& .description-text': {
                        color: "#850E09",
                    }
                }
            }}
        >
            <Box
                sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    className="headline-text"
                    sx={{
                        color: "#D0757D",
                        fontWeight: "bold",
                        fontFamily: "Sansation",
                        transition: "color 0.3s",
                    }}
                    variant="h4"
                >
                    {title}
                </Typography>
                <CardActions>
                    <Link href={url}>
                        <Fab
                            sx={{
                                backgroundColor: "#D0757D",
                                transition: "background-color 0.3s",
                                "&:hover": {
                                    backgroundColor: "#fff",
                                    "& .MuiSvgIcon-root": {
                                        color: "#D0757D",
                                    },
                                },
                            }}
                            aria-label="add"
                        >
                            <ArrowForwardIcon
                                sx={{
                                    color: "#fff",
                                    transition: "color 0.3s",
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
                        transition: "color 0.3s",
                    }}
                >
                    <Box
                    sx={{ marginTop: '1rem' }}
                    dangerouslySetInnerHTML={{ __html: content }} // Use dangerouslySetInnerHTML here
                />
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={image}
                alt="collab"
                sx={{
                    borderRadius: "20px",
                    width: "100%",
                    height: "400px",
                    "&:hover": {
                        // borderBottomLeftRadius: "30%",
                    },
                }}
            />
        </Card>
    );
};

export default CardNews;
