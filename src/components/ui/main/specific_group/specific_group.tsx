import { ContentWrapper } from "../../../shared/content_wrapper/content_wrapper";
import { Header } from "../../header/header";

export const SpecificGroup = () => {
  return (
    <>
      <Header />
      <ContentWrapper groupType={"specific group"} />
    </>
  );
};
