"use strict";(self.webpackChunkjacko_ui_components=self.webpackChunkjacko_ui_components||[]).push([[561],{"./src/stories/Card.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullCard:()=>FullCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");const ContentContainer=(0,styled.Ay)("div")`
    background-color: lightgrey;
`,Content=_ref=>{let{children}=_ref;return react.createElement(ContentContainer,null,children)},Content_Content=Content;Content.__docgenInfo={description:"",methods:[],displayName:"Content"};const HeaderStyles=(0,styled.Ay)("div")`
  background-color: red;  
`,Header=_ref=>{let{children}=_ref;return react.createElement(HeaderStyles,null,children)},Header_Header=Header;Header.__docgenInfo={description:"",methods:[],displayName:"Header"};const FooterContainer=(0,styled.Ay)("div")`
  background-color: blue;
`,Footer=_ref=>{let{children}=_ref;return react.createElement(FooterContainer,null,children)},Footer_Footer=Footer;Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};const CardContainer=(0,styled.Ay)("div")`
  width: 100%;
  border: 1px solid lightslategrey;
  border-radius: 5px;
`,Card=_ref=>{let{header,content,footer,width}=_ref;return react.createElement(CardContainer,{width},header&&react.createElement(Header_Header,null,header),content&&react.createElement(Content_Content,null,content),footer&&react.createElement(Footer_Footer,null,footer))},Card_Card=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card"};const Card_stories={title:"Example/MY-Card",component:Card_Card},FullCard=(args=>react.createElement(Card_Card,args)).bind({});FullCard.args={width:20,header:"lola",content:"cont",footer:"haha"};const __namedExportsOrder=["FullCard"];FullCard.parameters={...FullCard.parameters,docs:{...FullCard.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...FullCard.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-Card-stories.53bf5835.iframe.bundle.js.map