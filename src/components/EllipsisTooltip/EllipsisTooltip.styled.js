import styled from "styled-components";

export const EllipsisTooltipContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.mainContainerStyle ? { ...props.mainContainerStyle } : {}}
`;

export const EllipsisTooltipContent = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => (props.width ? props.width : "100%")};
  overflow: hidden;
  white-space: nowrap;
  ${(props) => (props.mainEllipsisStyle ? { ...props.mainEllipsisStyle } : {})}
  & .ellipsisInternal {
    text-overflow: ellipsis;
    white-space: nowrap;
    ${(props) =>
      props.internalEllipsisStyle ? { ...props.internalEllipsisStyle } : {}}
  }
`;
