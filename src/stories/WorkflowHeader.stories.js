// import React from "react";
// import { storiesOf } from "@storybook/react";
// import WorkflowHeader from "../components/WorkflowHeader/WorkflowHeader";
// import { workflowStepsDummy } from "../components/constants";
//
// const stories = storiesOf("Workflow Header", module);
// stories.add("Full functionality", () => {
//   return <WorkflowHeader steps={workflowStepsDummy} />;
// });
//
import React from "react";
import WorkflowHeader from "../components/WorkflowHeader/WorkflowHeader";
export default {
  title: "Workflow Header",
  component: WorkflowHeader,
};

const Template = (args) => <WorkflowHeader {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  steps: [
    { id: 1, name: "Step 1" },
    { id: 2, name: "Step 2" },
    { id: 3, name: "Step 3" },
  ],
};

export const SecondStory = Template.bind({});
SecondStory.args = {
  steps: [
    { id: 1, name: "Step 1" },
    { id: 2, name: "Step 2" },
    { id: 3, name: "Step 3" },
    { id: 4, name: "Step 4" },
  ],
};
