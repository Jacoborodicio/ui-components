import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "@mui/material";
import * as S from "./EllipsisTooltip.styled.js";
import PropTypes from "prop-types";

// It takes into account the padding applied to the container
const ELLIPSIS_INTERNAL_RANGE = 4;
const EllipsisTooltip = ({
  text,
  handleItemClick,
  mainContainerStyle = {},
  mainEllipsisStyle = {},
  internalEllipsisStyle,
  width = "auto",
}) => {
  const textRef = useRef(null);
  const tempRef = useRef(null);
  const [isEllipsisActive, setIsEllipsisActive] = useState(false);

  const checkEllipsis = () => {
    const element = textRef.current;
    if (element) {
      const { offsetWidth, scrollWidth } = element;
      if (offsetWidth === scrollWidth) {
        const input = window.document.createElement("input");
        const { value } = element.dataset;
        input.value = value;
        input.style.width = width ? width : "calc( 100% - 8px)"; // ELLIPSIS_INTERNAL_RANGE * 2
        input.ref = tempRef;
        const container = window.document.getElementById(value);
        container.appendChild(input);
        const { offsetWidth: newOffsetWidth, scrollWidth: newScrollWidth } =
          input;
        setIsEllipsisActive(
          newOffsetWidth < newScrollWidth - ELLIPSIS_INTERNAL_RANGE,
        );
        input.remove();
      } else {
        setIsEllipsisActive(element.offsetWidth < element.scrollWidth);
      }
    }
  };

  useEffect(() => {
    checkEllipsis();
  }, [text]);

  return (
    <S.EllipsisTooltipContainer style={{ ...mainContainerStyle, width: width }}>
      <S.EllipsisTooltipContent
        key={text}
        id={text}
        data-value={text}
        ref={textRef}
        style={mainEllipsisStyle}
        width={width}
      >
        {isEllipsisActive ? (
          <Tooltip title={text}>
            <div
              className="ellipsisInternal"
              style={
                internalEllipsisStyle
                  ? { ...internalEllipsisStyle, overflow: "hidden" }
                  : { overflow: "hidden" }
              }
            >
              {text}
            </div>
          </Tooltip>
        ) : (
          <div className="ellipsisInternal">{text}</div>
        )}
      </S.EllipsisTooltipContent>
    </S.EllipsisTooltipContainer>
  );
};

EllipsisTooltip.propTypes = {
  text: PropTypes.string,
  handleItemClick: PropTypes.func,
  mainContainerStyle: PropTypes.object,
  mainEllipsisStyle: PropTypes.object,
  internalEllipsisStyle: PropTypes.object,
  width: PropTypes.string,
};

EllipsisTooltip.defaultProps = {
  handleItemClick: null,
};

export default EllipsisTooltip;
