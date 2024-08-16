import exp from "constants";
import styled from "styled-components";

export const BannerBottom = styled.div`
    top: -500px;
`;


export const GlowingBlur = styled.div`
// overflow: hidden;
    width: 100%;
    position: relative;
    .gradient-color {
    overflow: hidden;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    }
    
    .bg-shape2{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        animation: two 15s infinite;
    }
    .bg-shape1 {
    z-index: 99;
    overflow: hidden;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    position: relative;
    // right: 100px;
    top: -1200px;
    // animation: one 15s infinite ease-in-out;
    }
    
    .bg-shape3 {
        z-index: 99;
        overflow: hidden;
        width: 650px;
        height: 650px;
        border-radius: 50%;
        position: relative;
        top: -350px;
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
        0%{left: 0px; top: 0px;}
        25%{left: 50px; top: 10px;}
        50%{left: 100px; top: 50px;}
        75%{left: 50; top: 100px;}
        100%{left: 0px; top: 0px;}
    }

    .opacity-50 {
        opacity: 0.5;
    }

    .bg-blur {
        filter: blur(90px);
    }

    .bg-shape1 {
        background: #D0757D;
    }

    .bg-shape2 {
        background: #FF4C60;
    }

    .bg-shape3 {
        background: #0770DF;
    }

`

export const StarOne = styled.div`
    scale: 0.75;
    top: 130px;
    right: 460px;
    position: absolute;
    z-index: 5;
`
export const StarTwo = styled.div`
    top: 320px;
    left: 450px;
    position: absolute;
    z-index: 5;
`

export const StarThree = styled.div`
    top: 260px;
    right: 500px;
    position: absolute;
    z-index: 5;
`

export const StarFour = styled.div`
    width: 100%;
    z-index: 5;
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 100px;
`