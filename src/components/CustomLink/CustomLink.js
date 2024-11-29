import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./CustomLink.styled";

const CustomLink = ({ to, children, action }) => {
  const getActionIcon = () => {
    switch (action?.toLowerCase()) {
      case "save":
        return (
          <p style={{ borderBottom: "1px solid lightblue", display: "inline" }}>
            save
          </p>
        );
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
