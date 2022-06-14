import {styled} from "@mui/material";
import {MenuItem} from "@mui/material";

export const CustomMenuItem = styled(MenuItem)`
    padding-left: ${props => (props.level * 30 + 10) + 'px'};
`;

export const CollapseIcon = styled('div')`
  z-index: 1000;
  width: 0;
  height: 0;
  border-top: ${props => props.collapsed ? '.75rem solid #C1C1C1' : 0};
  border-bottom: ${props => props.collapsed ? 0 : '.75rem solid #C1C1C1'};
  border-right: .5rem solid transparent;
  border-left: .5rem solid transparent;
  transition: border-top-color .2s;
  &:hover {
    border-top: ${props => props.collapsed ? '.75rem solid #D5D5D5' : 0};
    border-bottom: ${props => props.collapsed ? 0 : '.75rem solid #D5D5D5'};
  }
`;