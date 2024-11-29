import React from "react";
import CustomLink from "../components/CustomLink/CustomLink";

export default {
  title: "Example/CustomLink",
  component: CustomLink,
  parameters: {
    to: "/",
  },
};
const Template = (args) => <CustomLink {...args}>Example</CustomLink>;

export const ActionLinks = Template.bind({});
ActionLinks.args = {
  action: "Save",
};
