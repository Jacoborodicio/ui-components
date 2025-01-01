"use strict";(self.webpackChunkjacko_ui_components=self.webpackChunkjacko_ui_components||[]).push([[291],{"./src/stories/WorkflowHeader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FirstStory:()=>FirstStory,SecondStory:()=>SecondStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WorkflowHeader_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const WorkflowHeaderContainer=(0,styled.Ay)("div")`
  width: 100%;
  height: 2rem;
  background-color: lightblue;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`,WorkflowHeaderItem=(0,styled.Ay)("div")`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,WorkflowHeader=_ref=>{let{steps}=_ref;return react.createElement(WorkflowHeaderContainer,null,steps.map((step=>react.createElement(WorkflowHeaderItem,{key:step.id},react.createElement("div",null,react.createElement("h3",null,step.name))))))},WorkflowHeader_WorkflowHeader=WorkflowHeader;WorkflowHeader.__docgenInfo={description:"",methods:[],displayName:"WorkflowHeader"};const WorkflowHeader_stories={title:"Example/Workflow Header",component:WorkflowHeader_WorkflowHeader},Template=args=>react.createElement(WorkflowHeader_WorkflowHeader,args),FirstStory=Template.bind({});FirstStory.args={steps:[{id:1,name:"Step 1"},{id:2,name:"Step 2"},{id:3,name:"Step 3"}]};const SecondStory=Template.bind({});SecondStory.args={steps:[{id:1,name:"Step 1"},{id:2,name:"Step 2"},{id:3,name:"Step 3"},{id:4,name:"Step 4"}]};const __namedExportsOrder=["FirstStory","SecondStory"];FirstStory.parameters={...FirstStory.parameters,docs:{...FirstStory.parameters?.docs,source:{originalSource:"args => <WorkflowHeader {...args} />",...FirstStory.parameters?.docs?.source}}},SecondStory.parameters={...SecondStory.parameters,docs:{...SecondStory.parameters?.docs,source:{originalSource:"args => <WorkflowHeader {...args} />",...SecondStory.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-WorkflowHeader-stories.d83da0f2.iframe.bundle.js.map