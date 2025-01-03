import CardNews from "@/Components/Card/CardNews";
import { articleType } from "@/Pages/Welcome";
import { Box, Grid, Typography } from "@mui/material";
import * as S from "./FifthSectionStyled";

interface ArticleProps {
    articles: articleType[];
}

const FifthSection: React.FC<ArticleProps> = ({ articles }) => {
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
                    paddingBottom: "2rem",
                    marginBottom: "2rem",
                    backgroundColor: "#850E09",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        fontFamily: "Open Sans",
                        color: "#FFF9F9",
                        fontWeight: "bold",
                        marginY: "2rem",
                    }}
                >
                    News Update <br />
                    BEM UNAIR 2024
                </Typography>
                <S.CardSectionStyled>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {articles.map((article) => {
                            const dateObj = new Date(article.published_at);
                            const year = dateObj.getFullYear();
                            const month = `0${dateObj.getMonth() + 1}`.slice(
                                -2
                            );
                            const day = `0${dateObj.getDate()}`.slice(-2);

                            const url = `/artikel/${year}/${month}/${day}/${article.slug}`;

                            return (
                                <Grid
                                    item
                                    xs={4}
                                    sm={4}
                                    md={4}
                                    key={article.slug}
                                >
                                    <CardNews
                                        content={article.content}
                                        image={article.image1}
                                        title={article.title}
                                        url={url}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </S.CardSectionStyled>
            </Box>
        </>
    );
};

export default FifthSection;
