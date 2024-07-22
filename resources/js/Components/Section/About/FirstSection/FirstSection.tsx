import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Typography } from '@mui/material';
import * as S from './FirstSectionStyled';
import StarIcon from '@/Components/Icons/svg/StarOne';
import { Opacity } from '@mui/icons-material';

const FirstSection = () => {
  const sparklingAnimation = useSpring({
    loop: true, // Ensure the animation continues indefinitely
    from: { opacity: 0.5, transform: 'scale(0.75)' },
    to: [
        { opacity: 1, transform: 'scale(0.85)' },
        { opacity: 0.5, transform: 'scale(0.75)' }
    ],
    config: { duration: 2000 },
});
  const sparklingAnimationSec = useSpring({
    loop: true, // Ensure the animation continues indefinitely
    from: { opacity: 1, transform: 'scale(0.75)' },
    to: [
        { opacity: 0.5, transform: 'scale(0.85)' },
        { opacity: 1, transform: 'scale(0.75)' }
    ],
    config: { duration: 2000 },
});

const starAnimation = useSpring({
    loop: true, // Ensure the animation continues indefinitely
    from: { opacity: 1, top: 0 },
    to: [
      { opacity: 0, top: 600 },
      { opacity: 1, top: 0 },
    ],
    config: { duration: 7000 },
  });
  
    return (
        <>
            <Box
                component="section"
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                <Box
                    component="div"
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <img
                        src="/images/logo/Logo_Bem.png"
                        style={{ maxWidth: '32%' }}
                        alt="Logo"
                    />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '-15rem',
                            marginBottom: '4rem',
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#000',
                                fontSize: '2.5rem',
                                textAlign: 'center',
                                fontFamily: 'Open Sans',
                                fontWeight: 600,
                                bottom: '200px',
                                transform: 'translateY(160px)',
                            }}
                        >
                            Gerak Progresif <br /> Ciptakan Asa
                        </Typography>
                        <img
                            src="/images/banner-bottom.png"
                            alt="banner"
                            style={{
                                width: '85%',
                                zIndex: 1,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <S.GlowingBlur>
                <div className="gradient-color">
                    <div className="bg-shape1 opacity-50 bg-blur"></div>
                    <div className="bg-shape3 opacity-50 bg-blur"></div>
                </div>
            </S.GlowingBlur>
            <S.StarOne>
                <animated.img
                    src="/images/starOne.png"
                    alt="StarOne"
                    style={{ width: '100%', ...sparklingAnimation }}
                />
            </S.StarOne>
            <S.StarTwo>
                <animated.img
                    src="/images/secondStar.png"
                    alt="StarOne"
                    style={{ width: '100%', ...sparklingAnimation }}
                />
            </S.StarTwo>
            <S.StarThree>
                <animated.img
                    src="/images/thirdStar.png"
                    alt="StarOne"
                    style={{ width: '100%', ...sparklingAnimationSec }}
                />
            </S.StarThree>
            <S.StarFour>
                <animated.img
                    src="/images/sparkling.png"
                    alt="StarOne"
                    style={{position:'relative',  ...starAnimation }}
                />
                <animated.img
                    src="/images/sparkling.png"
                    alt="StarOne"
                    style={{position:'relative',  ...starAnimation }}
                />
            </S.StarFour>
        </>
    );
};

export default FirstSection;
