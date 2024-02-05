import { useAppSelector } from "../../../../redux/store/store";
import { ContentWrapper } from "../../../shared/content_wrapper/content_wrapper";
import { ErrorMessage } from "../../../shared/error_message/error_message";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

export const Genres = () => {
  const errorMessage = useAppSelector(
    (state) => state.appContentReducer.errorMessage,
  );

  return (
    <>
      {errorMessage ? (
        <ErrorMessage errorText={errorMessage} />
      ) : (
        <>
          <Header />
          <ContentWrapper groupType={"genres"} />
          <Footer />
        </>
      )}
    </>
  );
};
