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
import { articleType } from "@/Pages/Article";

interface MainSectionProps {
    title: string;
    published_at: string;
    image1: string;
    content: string; // Keep content as part of the props
    slug?: string;
    articles: articleType[];
}

const MainSection: React.FC<MainSectionProps> = ({
    title,
    published_at,
    image1,
    content,
    slug,
    articles,
}) => {
    // Function to split the text into paragraphs
    // const paragraphs = content.split("\n\n");
    const date = new Date(published_at)
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);  // Extract and format the month (0-based index)
    const day = (`0${date.getDate()}`).slice(-2);
    const time = published_at.split("T")[1].substring(0, 5);
    return (
        <Box
            sx={{
                backgroundColor: "#FFF9F9",
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
                    {/* <Box
                        sx={{
                            display: "flex",
                            gap: "0.75rem",
                        }}
                    >
                        <PermIdentityIcon />
                        <Typography>BEM UNAIR</Typography>
                    </Box> */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.75rem",
                        }}
                    >
                        <CalendarMonthIcon />
                        <Typography>{date.toDateString()}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "0.75rem",
                        }}
                    >
                        <AccessTimeIcon />
                        <Typography>{time}</Typography>
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
                    {title}
                </Typography>
                {/* <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "500", fontSize: "1rem" }}
                >
                    Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum.
                </Typography> */}
            </Box>

            {/* Article Content */}
            <Card
                sx={{
                    width: "100%",
                    borderRadius: "12px",
                    padding: "5rem 2rem 2rem 2rem",
                    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CardMedia
                    component="img"
                    image={image1}
                    sx={{
                        borderRadius: "6px",
                        // width: "50%",
                        // height: "50%",
                        objectFit: "fit-content",
                        // scale: "0.5",
                        maxHeight: "500px",
                        maxWidth: "500px",
                        backgroundColor: "rgba(0,0,0,0.08)",
                    }}
                />
                <CardContent
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "start",
                    }}
                >
                    {/* Loop through each paragraph and render it */}
                    {/* {paragraphs.map(
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
                            <Typography variant="body1" paragraph >
                                {paragraph}
                            </Typography>
                        )
                    )} */}
                    <Box dangerouslySetInnerHTML={{ __html: content }} />
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
                        {articles.map((article) => (
                            <Grid item xs={2} sm={4} md={4} key={article.slug}>
                                <CardNews
                                    content={article.content}
                                    image={article.image1}
                                    title={article.title}
                                    // publishedAt={article.published_at}
                                    url={`/artikel/${year}/${month}/${day}/${article.slug}`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default MainSection;
