import { useAppSelector } from "../../../../redux/store/store";
import { CustomSwiper } from "../../../shared/custom_swiper/custom_swiper";
import { ErrorMessage } from "../../../shared/error_message/error_message";
import { Loader } from "../../../shared/loader/loader";
import { Header } from "../../header/header";

export const Home = () => {
  const loading = useAppSelector((state) => state.appContentReducer.loading);
  const errorMessage = useAppSelector(
    (state) => state.appContentReducer.errorMessage,
  );
  const popularMovies = useAppSelector(
    (state) => state.appContentReducer.popularMovies.results,
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {errorMessage ? (
        <ErrorMessage errorText={errorMessage} />
      ) : (
        <>
          <Header />
          <CustomSwiper movieArr={popularMovies} swiperFor="banners" />
        </>
      )}
    </>
  );
};
