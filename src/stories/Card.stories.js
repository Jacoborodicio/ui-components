import React from "react";
import { Card } from "../components/Card";

//👇 This default export determines where your story goes in the story list
export default {
  title: "MY-Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />;

export const FullCard = Template.bind({});
FullCard.args = {
  width: 20,
  header: "lola",
  content: "cont",
  footer: "haha",
};
