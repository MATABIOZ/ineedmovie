import { FC, useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/scrollbar";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { IMovie } from "../../../redux/reducers/content_reducer/content_reducer_types";
import { Banner } from "../banner/banner";

import {
  StyledSwiperContainer,
  StyledSwiperController,
} from "./custom_swiper.styled";

import "swiper/css";

interface ICustomSwiperProps {
  movieArr: Array<IMovie>;
  swiperFor: "banners" | "cards";
}

export const CustomSwiper: FC<ICustomSwiperProps> = ({
  movieArr,
  swiperFor,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Scrollbar, Autoplay, Keyboard, A11y]}
        spaceBetween={24}
        slidesPerView={1.3}
        autoplay={{ delay: 7000 }}
        grabCursor={true}
        centeredSlides={true}
        keyboard
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{
          el: ".swiper-scrollbar",
          hide: false,
          draggable: true,
        }}
        className="swiper_container"
      >
        {movieArr?.map((item) => (
          <SwiperSlide key={item.id}>
            {swiperFor === "banners" && (
              <Banner
                movieId={item.id}
                title={item.title}
                overview={item.overview}
                backgroundLink={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledSwiperController $colors={colors}>
        <button className="swiper-button-prev" type="button">
          <ArrowBackIcon />
        </button>
        <div className="swiper-scrollbar" />
        <button className="swiper-button-next" type="button">
          <ArrowForwardIcon />
        </button>
      </StyledSwiperController>
    </StyledSwiperContainer>
  );
};
