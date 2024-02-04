import { ContentWrapper } from "../../../shared/content_wrapper/content_wrapper";
import { Header } from "../../header/header";

export const FavoriteMovies = () => {
  return (
    <>
      <Header />
      <ContentWrapper groupType={"favorites"} />
    </>
  );
};
