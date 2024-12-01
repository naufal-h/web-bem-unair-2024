import styled from 'styled-components';

export const StyledCardSlider = styled.div`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    :root {
        --primary: #6a59ff;
        --white: #ffffff;
        --bg: #f5f5f5;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    @media (min-width: 1180px) {
        zoom: 1;
    }

    @media (min-width: 1440px) {
        html {
            zoom: 1.5;
        }
    }

    @media (min-width: 2560px) {
        html {
            zoom: 1.7;
        }
    }

    @media (min-width: 3860px) {
        html {
            zoom: 2.5;
        }
    }

    ::-webkit-scrollbar {
        width: 1.3rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: #797979;
        transition: all 0.5s ease-in-out;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #222224;
    }

    ::-webkit-scrollbar-track {
        background: #f9f9f9;
    }

    body {
        font-size: 1.6rem;
        background: var(--bg);
    }

    .container {
        display: flex;
        flex-direction: column;
        max-width: 90rem;
        height: 100%;
        margin: 0 auto;
    }

    .heading {
        padding: 1rem 0;
        font-size: 3.5rem;
        text-align: center;
    }

    .swiper_container {
        height: 30rem;
        padding: 2rem 0;
        position: relative;
    }

    .swiper-slide {
        width: 37rem;
        height: 42rem;
        position: relative;
    }

    @media (max-width: 500px) {
        .swiper_container {
            height: 47rem;
        }
        .swiper-slide {
            width: 28rem !important;
            height: 36rem !important;
        }
        .swiper-slide img {
            width: 28rem !important;
            height: 36rem !important;
        }
    }

    .swiper-slide img {
        width: 37rem;
        height: 42rem;
        border-radius: 2rem;
        object-fit: cover;
    }

    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
        display: none;
    }

    .slider-controler {
        position: relative;
        bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider-controler .swiper-button-next {
        left: 58% !important;
        transform: translateX(-58%) !important;
    }

    @media (max-width: 990px) {
        .slider-controler .swiper-button-next {
            left: 70% !important;
            transform: translateX(-70%) !important;
        }
    }

    @media (max-width: 450px) {
        .slider-controler .swiper-button-next {
            left: 80% !important;
            transform: translateX(-80%) !important;
        }
    }

    @media (max-width: 990px) {
        .slider-controler .swiper-button-prev {
            left: 30% !important;
            transform: translateX(-30%) !important;
        }
    }

    @media (max-width: 450px) {
        .slider-controler .swiper-button-prev {
            left: 20% !important;
            transform: translateX(-20%) !important;
        }
    }

    .slider-controler .slider-arrow {
        background: var(--white);
        // width: 3.5rem;
        // height: 3.5rem;
        border-radius: 50%;
        left: 42%;
        transform: translateX(-42%);
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-controler .slider-arrow ion-icon {
        font-size: 2rem;
        color: #222224;
    }

    .slider-controler .slider-arrow::after {
        content: '';
    }

    .swiper-pagination {
        // position: relative;
        // width: 15rem !important;
        // bottom: 1rem;
    }

    .swiper-pagination .swiper-pagination-bullet {
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
        width: 12px;
        height: 12px;
    }

    .swiper-pagination .swiper-pagination-bullet-active {
        background: rgba(82, 82, 82, 1);
    }

    @media (max-width: 768px) {
    .container {
        max-width: 100%;
        padding: 0 1rem;
    }

    .heading {
        font-size: 2.8rem;
        padding: 1rem 0;
    }

    .swiper_container {
        height: 40rem;
    }

    .swiper-slide {
        width: 24rem !important;
        height: 32rem !important;
    }

    .swiper-slide img {
        width: 24rem !important;
        height: 32rem !important;
    }

    .slider-controler {
        bottom: 1rem;
    }

    .slider-controler .swiper-button-next,
    .slider-controler .swiper-button-prev {
        left: 50% !important;
        transform: translateX(-50%) !important;
    }

    .slider-controler .slider-arrow {
        width: 3rem;
        height: 3rem;
    }

    .slider-controler .slider-arrow ion-icon {
        font-size: 1.8rem;
    }
}

@media (max-width: 480px) {

    .container {
        max-width: 28%;
    }
    .heading {
        font-size: 2.4rem;
    }

    .swiper_container {
        height: 35rem;
    }

    .swiper-slide {
        width: 20rem !important;
        height: 28rem !important;
    }

    .swiper-slide img {
        width: 20rem !important;
        height: 28rem !important;
    }

    .slider-controler {
        flex-direction: column;
    }

    .slider-controler .swiper-button-next,
    .slider-controler .swiper-button-prev {
        left: 50% !important;
        transform: translateX(-50%) !important;
        margin: 0.5rem 0;
    }

    .slider-controler .slider-arrow {
        width: 2.8rem;
        height: 2.8rem;
    }

    .slider-controler .slider-arrow ion-icon {
        font-size: 1.6rem;
    }
}

@media (max-width: 426px) {
    .slider-controler {
        display: none;
    }
}

`;