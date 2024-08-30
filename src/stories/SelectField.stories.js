// TODO: Overwrite everything related to Card components by importing MUI ones & allowing overwritten
// import { storiesOf } from "@storybook/react";
// import GroupedSelect from "../components/SelectField/GroupSelectField";
// import MultipleSelectCheckmarks from "../components/SelectField/CheckBoxSelectField/CheckBoxSelectField";
//
// const stories = storiesOf("SelectField", module);
// stories.add("Grouped", () => {
//   return <GroupedSelect />;
// });
// stories.add("CheckBox", () => {
//   return <MultipleSelectCheckmarks />;
// });
//
//

import GroupedSelect from "../components/SelectField/GroupSelectField";

//👇 This default export determines where your story goes in the story list
export default {
  component: GroupedSelect,
};

export const FirstStory = {};
