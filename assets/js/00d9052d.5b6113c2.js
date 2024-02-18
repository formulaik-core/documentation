"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[3216],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55152:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(11504),a=n(86212),o=n(22440),l=n(35784),i=n(73608);const c=e=>{const t=e.npm?e.npm:(0,i.c)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.c)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(o.default,{value:"npm",label:"npm",default:!0},r.createElement(l.default,{language:"bash"},t)),r.createElement(o.default,{value:"bash",label:"yarn"},r.createElement(l.default,{language:"bash"},n)))}},59348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(45072),a=(n(11504),n(95788)),o=n(55152);const l={sidebar_position:1},i="Quick Start \u26a1\ufe0f",c={unversionedId:"quickStart",id:"version-1.0/quickStart",title:"Quick Start \u26a1\ufe0f",description:"For people in a hurry",source:"@site/versioned_docs/version-1.0/quickStart.mdx",sourceDirName:".",slug:"/quickStart",permalink:"/documentation/docs/quickStart",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/quickStart.mdx",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/overview"},next:{title:"Getting started \ud83d\ude80",permalink:"/documentation/docs/category/getting-started-"}},p={},s=[{value:"Step 1: Install Node JS",id:"step-1-install-node-js",level:3},{value:"Step 2: Create a new Formulaik app",id:"step-2-create-a-new-formulaik-app",level:3},{value:"Step 3: Add a command",id:"step-3-add-a-command",level:3},{value:"Step 4: Link the CLI",id:"step-4-link-the-cli",level:3},{value:"Step 5: Use the CLI",id:"step-5-use-the-cli",level:3}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"quick-start-\ufe0f"},"Quick Start \u26a1\ufe0f"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"For people in a hurry")),(0,a.yg)("h3",{id:"step-1-install-node-js"},"Step 1: Install ",(0,a.yg)("a",{parentName:"h3",href:"https://nodejs.org/en/download/"},"Node JS")),(0,a.yg)("p",null,"Before you install Formulaik, make sure to download and install Node.js (version 18.x or higher), a JavaScript runtime.\nWhen installing Node.js, you are recommended to check all checkboxes related to dependencies."),(0,a.yg)("h3",{id:"step-2-create-a-new-formulaik-app"},"Step 2: Create a new Formulaik app"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'npx formulaik new --appId "mycli"\n')),(0,a.yg)("h3",{id:"step-3-add-a-command"},"Step 3: Add a command"),(0,a.yg)("p",null,"Create a folder name ",(0,a.yg)("i",null,"mycommand")," in src/commands\nAdd a file named ",(0,a.yg)("i",null,"index.js"),"\nDeclare a new command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default ({\n  _formulaikType: 'command',\n  position: 1,\n  name: 'mycommand',\n  description: `My command`,\n  questions: [\n  ],\n  example: \"$0 mycommand\",\n  handler: async () => {\n    console.log('Hello world')\n  }\n})\n")),(0,a.yg)("h3",{id:"step-4-link-the-cli"},"Step 4: Link the CLI"),(0,a.yg)(o.c,{yarn:"yarn link",mdxType:"BashTabs"}),(0,a.yg)("h3",{id:"step-5-use-the-cli"},"Step 5: Use the CLI"),(0,a.yg)("p",null,"At this point the local Formulaik app is linked and can be used throughout the system"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mycli mycommand -h\n")))}m.isMDXComponent=!0}}]);