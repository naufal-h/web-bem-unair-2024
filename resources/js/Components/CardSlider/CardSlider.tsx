import * as S from './CardSlider.Styled';
import CardVerticalRatings from '../CardRating/CardVerticalRatings';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper'; // Import navigation separately
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { ArrowBackOutline, ArrowForwardOutline } from 'react-ionicons';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { ProkerContext } from '@/hooks';
import { ProkerType } from '../Section/Kementrian/type';

interface CardSliderProps {
    content: ProkerType[];
}

const CardSlider = ({ content }: CardSliderProps) => {
    const navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    };

    return (
        <S.StyledCardSlider>
            <div className="container" 
            // style={{ margin: '0 ' }}
            style={{ maxWidth: '100vw' }}
            >
                <Swiper
                    effect={'coverflow' as any}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ clickable: true }}
                    navigation={navigation} // Use the navigation object here
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                    style={
                        {maxWidth: '100vw',
                                                   }
                    }
                >
                    {content.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardVerticalRatings content={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowBackOutline height="32px" width="32px" />
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowForwardOutline height="32px" width="32px" />
                    </div>
                </div>
            </div>
        </S.StyledCardSlider>
    );
};

export default CardSlider;
