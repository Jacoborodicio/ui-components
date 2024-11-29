import React from "react";
import { HeaderStyles } from "./HeaderStyles";

const Header = ({ children }) => {
  return <HeaderStyles>{children}</HeaderStyles>;
};

export default Header;

