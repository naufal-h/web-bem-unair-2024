import { Box, Grid, Typography } from "@mui/material";
import * as S from "./ThirdSectionStyled";
import CardNews from "@/Components/Card/CardNews";

const ThirdSection = () => {
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
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        fontFamily: "Open Sans",
                        color: "#D0757D",
                        fontWeight: "bold",
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
                    
                </S.CardSectionStyled>
            </Box>
        </>
    );
};

export default ThirdSection;
