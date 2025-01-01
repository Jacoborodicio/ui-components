import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import { Link } from "react-router-dom";
import EllipsisTooltip from "../EllipsisTooltip/EllipsisTooltip";

const S = {
  LinkSection: styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  ActionParagraph: styled("p")`
    display: inline;
    position: relative;
    font-size: 0.9rem;
    color: #5b9cd5;
    cursor: pointer;
    margin: 0;
  `,
  Underline: styled.div`
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #5b9cd5;
    transform: ${({ hover }) => (hover ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: ${({ hover }) => (hover ? "left" : "right")};
    transition: transform 0.2s ease-in;
  `,
};

const ActionParagraphWithUnderline = ({ children }) => {
  const [hover, toggleHover] = useToggle(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <S.ActionParagraph>{children}</S.ActionParagraph>
      <S.Underline hover={hover} />
    </div>
  );
};

const CustomLink = ({
  title,
  path,
  width = "auto",
  style = {},
  configuration = { isExternal: false, newTab: false },
}) => {
  return configuration?.isExternal ? (
    <div style={style}>
      <a
        href={path}
        target={configuration.newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
      >
        <ActionParagraphWithUnderline>
          <EllipsisTooltip width={width} text={title} />
        </ActionParagraphWithUnderline>
      </a>
    </div>
  ) : (
    <S.LinkSection to={path} style={style}>
      <ActionParagraphWithUnderline>
        <EllipsisTooltip width={width} text={title} />
      </ActionParagraphWithUnderline>{" "}
    </S.LinkSection>
  );
};

CustomLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  configuration: PropTypes.shape({
    isExternal: PropTypes.bool,
    newTab: PropTypes.bool,
  }),
  style: PropTypes.object,
  width: PropTypes.string,
};

export default CustomLink;
