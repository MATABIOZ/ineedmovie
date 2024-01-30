import { useAppSelector } from "../../../../redux/store/store";
import { ContentWrapper } from "../../../shared/content_wrapper/content_wrapper";
import { ErrorMessage } from "../../../shared/error_message/error_message";
import { Loader } from "../../../shared/loader/loader";
import { Header } from "../../header/header";

export const Genres = () => {
  const loading = useAppSelector((state) => state.appContentReducer.loading);
  const errorMessage = useAppSelector(
    (state) => state.appContentReducer.errorMessage,
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
          <ContentWrapper groupType={"genres"} />
        </>
      )}
    </>
  );
};
