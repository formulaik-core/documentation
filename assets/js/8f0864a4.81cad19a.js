"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[8004],{3299:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=t(8168),r=(t(6540),t(3299));const i={sidebar_position:2},o="Terms and components",l={unversionedId:"concepts/terms",id:"concepts/terms",title:"Terms and components",description:"Input",source:"@site/docs/2.concepts/terms.mdx",sourceDirName:"2.concepts",slug:"/concepts/terms",permalink:"/documentation/docs/next/concepts/terms",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/2.concepts/terms.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Philosophy",permalink:"/documentation/docs/next/concepts/philosophy"},next:{title:"Getting started",permalink:"/documentation/docs/next/category/getting-started"}},p={},m=[{value:"Input",id:"input",level:2},{value:"Illustration",id:"illustration",level:3},{value:"Component",id:"component",level:2},{value:"Illustration",id:"illustration-1",level:3},{value:"Component Library",id:"component-library",level:2},{value:"Structure",id:"structure",level:3},{value:"Illustration",id:"illustration-2",level:3},{value:"First approach",id:"first-approach",level:4},{value:"Validations",id:"validations",level:2}],s={toc:m},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"terms-and-components"},"Terms and components"),(0,r.yg)("h2",{id:"input"},"Input"),(0,r.yg)("p",null,"An input is a JSON declaration for formulaik to show a component referenced by a the ",(0,r.yg)("inlineCode",{parentName:"p"},"component")," key."),(0,r.yg)("h3",{id:"illustration"},"Illustration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const inputs = [\n{\n      component: 'input',\n      id: 'email',\n      label: 'Email',\n      type: \"string\",\n      params: {        \n        placeholder: \"email@domain.com\"\n      },\n      validations: [\n        {\n          kind: \"format\",\n          value: \"email\",\n          message: 'Invalid email format',\n        },\n        {\n          kind: \"required\",\n          value: true,\n          message: \"This field can't be blank\",\n        },\n      ],\n    },\n    {\n      component: 'inputPassword',\n      label: 'Password',\n      id: 'password',\n      type: \"string\",\n      params: {\n        autoComplete: \"current-password\",\n        placeholder: \"xxxx-xxxx-xxxx\"\n      },\n      validations: [\n        {\n          kind: \"required\",\n          value: true,\n          message: \"This field can't be blank\",\n        },\n        {\n          kind: \"matches\",\n          value: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,\n          message: 'Invalid password, must contain at least 8 characters and at most 18 characters',\n        },\n      ]\n    },\n    {\n        component: 'checkbox',        \n        id: 'rememberMe',\n        type: \"boolean\",\n        params: {\n            label: 'Remember me',\n        }\n    },\n    {\n      component: 'submit',\n      id: 'submit',\n      params: {\n        text: 'Continue'\n      }\n    },\n]\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The input with the ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),' "email" tells formulaik '),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"to use the ",(0,r.yg)("inlineCode",{parentName:"li"},"component")," with the ",(0,r.yg)("inlineCode",{parentName:"li"},"email")," id"),(0,r.yg)("li",{parentName:"ul"},"to label the ",(0,r.yg)("inlineCode",{parentName:"li"},"component")," ",(0,r.yg)("em",{parentName:"li"},"Email")),(0,r.yg)("li",{parentName:"ul"},"to expect a ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," data type "),(0,r.yg)("li",{parentName:"ul"},"to forward the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," to the component, namely the ",(0,r.yg)("em",{parentName:"li"},"placeholder")," customization"),(0,r.yg)("li",{parentName:"ul"},"to use the ",(0,r.yg)("inlineCode",{parentName:"li"},"validations")," rules:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"format"),": make sure it's an email"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"required"),": this field is required"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The input with the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," ",(0,r.yg)("em",{parentName:"p"},"password")," tells formulaik "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"to use the ",(0,r.yg)("inlineCode",{parentName:"li"},"component")," with the ",(0,r.yg)("inlineCode",{parentName:"li"},"password")," id"),(0,r.yg)("li",{parentName:"ul"},"to label the ",(0,r.yg)("inlineCode",{parentName:"li"},"component")," ",(0,r.yg)("em",{parentName:"li"},"Password")),(0,r.yg)("li",{parentName:"ul"},"to expect a ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," data type "),(0,r.yg)("li",{parentName:"ul"},"to forward the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," to the component, namely the ",(0,r.yg)("em",{parentName:"li"},"placeholder")," and the ",(0,r.yg)("em",{parentName:"li"},"autoComplete")," customizations"),(0,r.yg)("li",{parentName:"ul"},"to use the ",(0,r.yg)("inlineCode",{parentName:"li"},"validations")," rules:      ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"required"),": this field is required"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"matches"),": this field matches the provided regex, if not, display the error message")))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The input with the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," ",(0,r.yg)("em",{parentName:"p"},"rememberMe")," tells formulaik "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"to use the ",(0,r.yg)("inlineCode",{parentName:"li"},"component")," with the ",(0,r.yg)("inlineCode",{parentName:"li"},"checkbox")," id    "),(0,r.yg)("li",{parentName:"ul"},"to expect a ",(0,r.yg)("inlineCode",{parentName:"li"},"boolean")," data type "),(0,r.yg)("li",{parentName:"ul"},"to forward the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," to the component, namely the ",(0,r.yg)("em",{parentName:"li"},"label")," customizations"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The input with the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," ",(0,r.yg)("em",{parentName:"p"},"submit")," tells formulaik "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"to use the ",(0,r.yg)("inlineCode",{parentName:"li"},"component")," with the ",(0,r.yg)("inlineCode",{parentName:"li"},"submit")," id        "),(0,r.yg)("li",{parentName:"ul"},"to forward the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," to the component, namely the ",(0,r.yg)("em",{parentName:"li"},"text")," (label) customizations")))),(0,r.yg)("p",null,"As you can see the inputs come as an ordered array and are fed to your Formulaik engine of choice.\nThey are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Platform agnostic"),(0,r.yg)("li",{parentName:"ul"},"Language agnostic")),(0,r.yg)("p",null,"This means they can easily be store in a shared repository and shared across your teams."),(0,r.yg)("h2",{id:"component"},"Component"),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"component")," is an input wrapper that adapts an actual input component to the Formulaik api."),(0,r.yg)("h3",{id:"illustration-1"},"Illustration"),(0,r.yg)("p",null,"In the previous example we used a checkbox component, here is how we declare its component. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport FormControlLabel from '@mui/material/FormControlLabel'\nimport Checkbox from '@mui/material/Checkbox'\n\nexport default (props) => {\n  const { \n    onValueChanged, \n    disabled,\n    readOnly,\n    value, \n    item: { \n        label, \n        id, \n        params \n        }} = props\n\n\n  return <div className=\"\">\n    <FormControlLabel control={\n      <Checkbox\n        color=\"default\"\n        disabled={disabled}\n        readOnly={readOnly}\n        {...params}\n        checked={value}\n        onChange={({ target: { checked } }) => {\n          onValueChanged(checked)\n        }}\n      />}\n      label={params.label ? params.label : label} />\n  </div>\n}\n")),(0,r.yg)("p",null,"This component adapts a Google Material UI (Mui) Switch input to Formulaik.\nIt is available as a free community components library on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/formulaik-community/formulaik-mui-react"},"Github"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It forwards the ",(0,r.yg)("inlineCode",{parentName:"li"},"disabled")," and the ",(0,r.yg)("inlineCode",{parentName:"li"},"readOnly")," states to the Mui component"),(0,r.yg)("li",{parentName:"ul"},"It forwards the rest of the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," the Mui component for a pass-through customization"),(0,r.yg)("li",{parentName:"ul"},"It binds the current ",(0,r.yg)("inlineCode",{parentName:"li"},"value")," the Mui component prop ",(0,r.yg)("inlineCode",{parentName:"li"},"checked")),(0,r.yg)("li",{parentName:"ul"},"It binds the Formulaik provided ",(0,r.yg)("inlineCode",{parentName:"li"},"onValueChanged")," to the Mui component prop ",(0,r.yg)("inlineCode",{parentName:"li"},"onChange"),"\nBy doing these simple bindings and forwarding, this component has now a minimal Formulaik compatibility and can be used on any Formulaik form that references a component library that includes this component.")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"../guides/componentlibrary/inputcomponent"},"Guide")),(0,r.yg)("h2",{id:"component-library"},"Component Library"),(0,r.yg)("p",null,"A Formulaik component library is a set of Formulaik compatible inputs each with a unique key.\nUsually it comes in a form of a repository folder with each component\nFormulaik's strength lies in the modularity of the components library.\nYou can quickly switch from one component to the other by referring different component libraries."),(0,r.yg)("h3",{id:"structure"},"Structure"),(0,r.yg)("p",null,"A component library is basically a function that returns a component when given a key (the ",(0,r.yg)("inlineCode",{parentName:"p"},"component")," part of an ",(0,r.yg)("inlineCode",{parentName:"p"},"input"),")."),(0,r.yg)("p",null,"Nevertheless it can be advantageous to follow a common organization across the components libraries to ease debugging, improve readability and copy or paste components.\nThis is the recommended structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 my-component-library\n\u2502   \u251c\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 myInputA\n\u2502   \u251c\u2500\u2500\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 myInputB\n\u2502   \u251c\u2500\u2500\u2500\u2500 index.js\n")),(0,r.yg)("h3",{id:"illustration-2"},"Illustration"),(0,r.yg)("p",null,"As mentioned before, we are using the Mui components library available as a free community components library on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/formulaik-community/formulaik-mui-react"},"Github"),"."),(0,r.yg)("h4",{id:"first-approach"},"First approach"),(0,r.yg)("p",null,"One way to serve the components is to make a basic switch on the key value and return the existing component.\nFor instance, for our inputs, we would have:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import Input from './input'\nimport Submit from './submit'\nimport Checkbox from './checkbox'\nimport InputPassword from './inputPassword'\n\nexport default (props) => {\n  const { type } = props\n  switch (type) {\n    case 'input':\n      return Input  \n    case 'inputPassword':\n      return InputPassword\n    case 'submit':\n      return Submit    \n    case 'checkbox':\n      return Checkbox    \n    default:\n      return null\n  }\n}\n")),(0,r.yg)("h2",{id:"validations"},"Validations"),(0,r.yg)("p",null,"A validation is a JSON representation of validation rules used by your formulaik engine.\n",(0,r.yg)("a",{parentName:"p",href:"../guides/input/validations"},"Guide")))}c.isMDXComponent=!0}}]);