import { styled } from "@mui/material";

export const CustomLink = styled("a")({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const ActionIcon = styled("span")({
  marginRight: "0.5rem",
});
