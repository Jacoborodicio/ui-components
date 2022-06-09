import {styled} from "@mui/material";
import {MenuItem} from "@mui/material";

export const CustomMenuItem = styled(MenuItem)`
    padding-left: ${props => (props.level * 30 + 10) + 'px'};
`;