import { useSpring, animated } from "@react-spring/web";
import { Box, Typography } from "@mui/material";
import * as S from "./FirstSectionStyled";


const FirstSection = () => {
    const sparklingAnimation = useSpring({
        loop: true, // Ensure the animation continues indefinitely
        from: { opacity: 0.5, transform: "scale(0.75)" },
        to: [
            { opacity: 1, transform: "scale(0.85)" },
            { opacity: 0.5, transform: "scale(0.75)" },
        ],
        config: { duration: 2000 },
    });
    const sparklingAnimationSec = useSpring({
        loop: true, // Ensure the animation continues indefinitely
        from: { opacity: 1, transform: "scale(0.75)" },
        to: [
            { opacity: 0.5, transform: "scale(0.85)" },
            { opacity: 1, transform: "scale(0.75)" },
        ],
        config: { duration: 2000 },
    });

    const starAnimation = useSpring({
        loop: true, // Ensure the animation continues indefinitely
        from: { opacity: 1, top: -250 },
        to: [
            { opacity: 0, top: 609 },
            { opacity: 1, top: -250 },
        ],
        config: { duration: 9000 },
    });

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
                    overflow: "hidden",
                    marginBottom: "1rem",
                }}
            >
                {/* <S.GlowingBlur>
                <div className="gradient-color">
                    <div className="bg-shape3 opacity-50 bg-blur " style={{ left: "-250px" }}></div>
                    <div className="bg-shape3 opacity-50 bg-blur " style={{ right: "-450px" }}></div>
                </div>
            </S.GlowingBlur> */}
                <Box
                    component="div"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <img
                        src="/images/logo/Logo_Bem.png"
                        style={{ maxWidth: "32%" }}
                        alt="Logo"
                    />
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >

                    </Box>
                </Box>
            
            </Box>
            <S.StarOne>
                <animated.img
                    src="/images/starOne.png"
                    alt="StarOne"
                    style={{ width: "100%", ...sparklingAnimation }}
                />
            </S.StarOne>
            <S.StarTwo>
                <animated.img
                    src="/images/secondStar.png"
                    alt="StarOne"
                    style={{ width: "100%", ...sparklingAnimation }}
                />
            </S.StarTwo>
            <S.StarThree>
                <animated.img
                    src="/images/thirdStar.png"
                    alt="StarOne"
                    style={{ width: "100%", ...sparklingAnimationSec }}
                />
            </S.StarThree>
        </>
    );
};

export default FirstSection;
