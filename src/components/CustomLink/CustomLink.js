import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./CustomLink.styled";

const CustomLink = ({ to, children, action }) => {
  console.log(
    "%c 🔰 to, children, action 🔰:",
    "color:orange",
    to,
    children,
    action
  );
  const getActionIcon = () => {
    switch (action?.toLowerCase()) {
      case "save":
        return <p style={{ background: "blue" }}>save</p>;
      case "linkedin":
        return <LinkedInIcon />;
      case "email":
        return <EmailIcon />;
      default:
        return null;
    }
  };
  return (
    <S.CustomLink href={to} target="_blank" rel="noopener noreferrer">
      {action && <S.ActionIcon>{getActionIcon()}</S.ActionIcon>}
      {children}
    </S.CustomLink>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomLink;
