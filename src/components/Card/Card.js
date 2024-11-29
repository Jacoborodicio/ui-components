import React from "react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { CardContainer } from "./CardStyles";

const Card = ({ header, content, footer, width }) => {
  return (
    <CardContainer width={width}>
      {header && <Header>{header}</Header>}
      {content && <Content>{content}</Content>}
      {footer && <Footer>{footer}</Footer>}
    </CardContainer>
  );
};

export default Card;
