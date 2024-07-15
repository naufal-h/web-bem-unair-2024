import { AppBar, Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import * as S from "./FirstSectionStyled";
import SwiperControls from "@/Components/Swiper/SwiperControls";
import KeenSliderWrapper from "@/Components/Swiper/keen-slider";

export type ImageTypeSwiper = {
    image: string;
    imageWebp?: string;
    alt?: string;
    className?: string;
    text?: string;
    variant?: "default" | "poppins";
    fontFamily?: "autone" | "poppins";
    titleText?: string;
    variantSize?: "default" | "swiperEvent";
};

const FirstSection = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box
                component="div"
                sx={{
                    marginTop: "2rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Sansation",
                        color: "#D0757D",
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // responsive font size
                    }}
                >
                    KABINET ASA PROGRESIF
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "center",
                        fontFamily: "Open Sans",
                        fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" }, // responsive font size
                    }}
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa ipsa est sapiente beatae, illum sit saepe.
                </Typography>
            </Box>

            <Box
                component="div"
                sx={{
                    marginTop: "2rem",
                    // border: "2px solid red",
                    borderRadius: "10px",
                    width: "75%",
                    height: "600px",
                }}
            >
                    <KeenSliderWrapper>
               
                        <SwiperControls direction={"ltr"} />
             
                    </KeenSliderWrapper>
            </Box>

            <S.FirstSectionStyled>
                <div className="gradient-color">
                    <div className="bg-shape1 opacity-50 bg-blur"></div>
                    <div className="bg-shape3 opacity-50 bg-blur"></div>
                </div>
                {/* <div className="trapezium"></div> */}
            </S.FirstSectionStyled>
        </Box>
    );
};

export default FirstSection;
