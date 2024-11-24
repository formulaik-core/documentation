"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[1718],{3299:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,y=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(8168),a=(n(6540),n(3299));const i={},o="Remarkable inputs",l={unversionedId:"guides/input/remarkable",id:"guides/input/remarkable",title:"Remarkable inputs",description:"Submit",source:"@site/docs/4.guides/1.input/4.remarkable.md",sourceDirName:"4.guides/1.input",slug:"/guides/input/remarkable",permalink:"/documentation/docs/next/guides/input/remarkable",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/4.guides/1.input/4.remarkable.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validations",permalink:"/documentation/docs/next/guides/input/validations"},next:{title:"Styling",permalink:"/documentation/docs/next/guides/input/styling"}},u={},p=[{value:"Submit",id:"submit",level:2},{value:"Static input",id:"static-input",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"remarkable-inputs"},"Remarkable inputs"),(0,a.yg)("h2",{id:"submit"},"Submit"),(0,a.yg)("p",null,"Submit inputs have the ",(0,a.yg)("inlineCode",{parentName:"p"},"submit")," id."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"}," {\n    type: 'submit',\n    id: 'submit',\n    params: {\n        text: 'Send code',        \n    }\n}\n")),(0,a.yg)("p",null,"To handle submission ",(0,a.yg)("a",{parentName:"p",href:"../submission"},"see submission"),"."),(0,a.yg)("h2",{id:"static-input"},"Static input"),(0,a.yg)("p",null,"You can use html elements in a component to render a header or display a paragraph.\nThis is particularly useful when you want to incorporate text blocks or improve your form presentation between inputs."),(0,a.yg)("p",null,"For instance the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/formulaik-community/formulaik-mui-react"},"Mui component library")," offers inputs for:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"html"),": raw "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"divider")," displays a divider (hr) between inputs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"h1"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"h2"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"h3"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"h4")," renders the respective headers")),(0,a.yg)("p",null,"Examples: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"{\n    type: 'html',\n    params: {\n        content: \"If the user doesn't exist, provide these informations\"\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"}," {\n    type: 'h2',\n    params: {\n        content: 'General informations'\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"{\n    type: 'divider',\n}\n")))}m.isMDXComponent=!0}}]);