import { useAppSelector } from "../../../../redux/store/store";
import { ContentWrapper } from "../../../shared/content_wrapper/content_wrapper";
import { CustomSwiper } from "../../../shared/custom_swiper/custom_swiper";
import { ErrorMessage } from "../../../shared/error_message/error_message";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
export const Home = () => {
    const errorMessage = useAppSelector((state) => state.appContentReducer.errorMessage);
    const popularMovies = useAppSelector((state) => state.appContentReducer.popularMovies.results);
    return (<>
      {errorMessage ? (<ErrorMessage errorText={errorMessage}/>) : (<>
          <Header />
          <CustomSwiper moviesArr={popularMovies} swiperFor="banners" swiperClassPostfix={"banner"}/>
          <ContentWrapper groupType={"main"}/>
          <Footer />
        </>)}
    </>);
};
