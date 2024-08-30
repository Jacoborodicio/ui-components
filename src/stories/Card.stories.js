// // TODO: Overwrite everything related to Card components by importing MUI ones & allowing overwritten
// import { storiesOf } from "@storybook/react";
// import { Card } from "../components/Card";
//
// const stories = storiesOf("Card", module);
// stories.add("Full Card", () => {
//   return <Card width={20} header={"lola"} content={"cont"} footer={"haha"} />;
// });
//
// stories.add("Header & Content Card", () => {
//   return <Card width={20} header={"lola"} content={"cont"} />;
// });
//
// stories.add("Header only", () => {
//   return <Card width={20} header={"lola"} />;
// });
//
// stories.add("Content & Footer", () => {
//   return <Card width={20} content={"cont"} footer={"haha"} />;
// });
//
// stories.add("Footer only", () => {
//   return <Card width={20} footer={"haha"} />;
// });

import { Card } from "../components/Card";

//👇 This default export determines where your story goes in the story list
export default {
  component: Card,
};

export const FirstStory = {
  args: {
    width: 20,
    header: "lola",
    content: "cont",
    footer: "haha",
  },
};
