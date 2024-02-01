import { FC, useContext, useEffect, useState } from "react";
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
import {
  ICast,
  IMovie,
} from "../../../redux/reducers/content_reducer/content_reducer_types";
import { Banner } from "../banner/banner";
import { Card } from "../card/card";

import {
  StyledSwiperContainer,
  StyledSwiperController,
} from "./custom_swiper.styled";

import "swiper/css";

interface ICustomSwiperProps {
  moviesArr?: Array<IMovie>;
  castArr?: Array<ICast>;
  swiperFor: "banners" | "cardsForMovies" | "cardsForCast";
  swiperClassPostfix: string;
}

export const CustomSwiper: FC<ICustomSwiperProps> = ({
  moviesArr,
  castArr,
  swiperFor,
  swiperClassPostfix,
}) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const calcSlidesPerView = (windowWidth: number) => {
    switch (true) {
      case windowWidth <= 450:
        return 1.1;
      case windowWidth <= 550:
        return 1.3;
      case windowWidth <= 700:
        return 1.5;
      case windowWidth <= 850:
        return 2;
      case windowWidth <= 1000:
        return 2.5;
      case windowWidth <= 1200:
        return 3;
      case windowWidth <= 1350:
        return 3.5;
      case windowWidth <= 1500:
        return 4;
      default:
        return 4.5;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledSwiperContainer>
      <Swiper
        modules={[Navigation, Scrollbar, Autoplay, Keyboard, A11y]}
        spaceBetween={24}
        slidesPerView={
          swiperFor === "banners" ? 1.3 : calcSlidesPerView(windowWidth)
        }
        autoplay={swiperFor === "banners" ? { delay: 7000 } : false}
        grabCursor={true}
        centeredSlides={
          swiperFor === "banners" || windowWidth <= 450 ? true : false
        }
        keyboard
        navigation={{
          nextEl: `.swiper-button-next__${swiperClassPostfix}`,
          prevEl: `.swiper-button-prev__${swiperClassPostfix}`,
        }}
        scrollbar={{
          el: `.swiper-scrollbar__${swiperClassPostfix}`,
          hide: false,
          draggable: true,
        }}
        style={{ overflow: "hidden", width: "100%", gap: "20px" }}
      >
        {moviesArr &&
          moviesArr?.map(
            (item) =>
              item.backdrop_path &&
              item.poster_path && (
                <SwiperSlide key={item.id}>
                  {swiperFor === "banners" ? (
                    <Banner
                      movieId={item.id}
                      title={item.title}
                      overview={item.overview}
                      backgroundLink={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      inSwiper={true}
                      voteAverage={item.vote_average}
                      releaseDate={item.release_date}
                    />
                  ) : (
                    <Card
                      itemId={item.id}
                      title={item.title}
                      backgroundLink={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      voteAverage={item.vote_average}
                      releaseDate={item.release_date}
                    />
                  )}
                </SwiperSlide>
              ),
          )}
        {castArr &&
          castArr?.map(
            (item) =>
              item.profile_path && (
                <SwiperSlide key={item.id}>
                  <Card
                    itemId={item.id}
                    title={item.name}
                    backgroundLink={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    department={item.known_for_department}
                  />
                </SwiperSlide>
              ),
          )}
      </Swiper>
      <StyledSwiperController $colors={colors}>
        <button
          className={`swiper-button-prev swiper-button-prev__${swiperClassPostfix}`}
          type="button"
        >
          <ArrowBackIcon />
        </button>
        <div
          className={`swiper-scrollbar swiper-scrollbar__${swiperClassPostfix}`}
        />
        <button
          className={`swiper-button-next swiper-button-next__${swiperClassPostfix}`}
          type="button"
        >
          <ArrowForwardIcon />
        </button>
      </StyledSwiperController>
    </StyledSwiperContainer>
  );
};
