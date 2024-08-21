import { styled } from "styled-components";

export const FirstSectionStyled = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    .gradient-color {
        position: absolute;
        top: 50px !important;
        inset: 0px !important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .bg-shape2 {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        animation: two 15s infinite;
    }
    .bg-shape1 {
        z-index: -1;
        width: 400px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        top: -350px;
        // animation: one 15s infinite ease-in-out;
    }

    .bg-shape3 {
        z-index: -1;
        width: 450px;
        height: 350px;
        border-radius: 50%;
        position: relative;
        top: -300px;
        // animation: three 15s infinite ease-in-out;
    }

    // @keyframes one {
    //     0% { top: 0px; }
    //     12.5% { top: 35px; }
    //     25% { top: 70px; }
    //     37.5% { top: 105px; }
    //     50% { top: 350px; }
    //     62.5% { top: 105px; }
    //     75% { top: 70px; }
    //     87.5% { top: 35px; }
    //     100% { top: 0px; }
    // }

    // @keyframes three {
    //     0% { top: 350px; }
    //     12.5% { top: 290px; }
    //     25% { top: 230px; }
    //     37.5% { top: 170px; }
    //     50% { top: 0px; }
    //     62.5% { top: 170px; }
    //     75% { top: 230px; }
    //     87.5% { top: 290px; }
    //     100% { top: 350px; }
    // }

    @keyframes two {
        0% {
            left: 0px;
            top: 0px;
        }
        25% {
            left: 50px;
            top: 10px;
        }
        50% {
            left: 100px;
            top: 50px;
        }
        75% {
            left: 50;
            top: 100px;
        }
        100% {
            left: 0px;
            top: 0px;
        }
    }

    .opacity-50 {
        opacity: 0.5;
    }

    .bg-blur {
        filter: blur(90px);
    }

    // .bg-shape1 {
    //     background: #D0757D;
    // }

    // .bg-shape2 {
    //     background: #FF4C60;
    // }

    // .bg-shape3 {
    //     background: #3089E7;
    // }

    .trapezium {
        width: 100%;
        height: 40%;
        position: absolute; // Position the trapezium at the bottom
        bottom: 0;
        background: #fff;
        transform: skewY(-3deg);
        z-index: 2;
        transform-origin: bottom left;
    }
`;
