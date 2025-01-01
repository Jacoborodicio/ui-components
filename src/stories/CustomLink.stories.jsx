import React from "react";
import CustomLink from "../components/CustomLink/CustomLink";
import EllipsisTooltip from "../components/EllipsisTooltip/EllipsisTooltip";

export default {
  title: "Example/CustomLink",
  component: CustomLink,
  parameters: {},
};

const Template = (args) => <CustomLink {...args} />;

export const ActionLinks = Template.bind({});
ActionLinks.args = {
  title: "Example of a Text",
  configuration: { isExternal: true, newTab: true },
  path: "/",
};
