"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[3588],{3299:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(8168),a=(t(6540),t(3299));const i={},o="Remarkable inputs",l={unversionedId:"guides/input/remarkable",id:"guides/input/remarkable",title:"Remarkable inputs",description:"Submit",source:"@site/docs/guides/1.input/4.remarkable.md",sourceDirName:"guides/1.input",slug:"/guides/input/remarkable",permalink:"/documentation/docs/next/guides/input/remarkable",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/guides/1.input/4.remarkable.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validations",permalink:"/documentation/docs/next/guides/input/validations"},next:{title:"Styling",permalink:"/documentation/docs/next/guides/input/styling"}},u={},p=[{value:"Submit",id:"submit",level:2},{value:"Inert input",id:"inert-input",level:2}],s={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"remarkable-inputs"},"Remarkable inputs"),(0,a.yg)("h2",{id:"submit"},"Submit"),(0,a.yg)("p",null,"Submit inputs have the ",(0,a.yg)("inlineCode",{parentName:"p"},"submit")," id."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"}," {\n    type: 'submit',\n    id: 'submit',\n    params: {\n        text: 'Send code',        \n    }\n}\n")),(0,a.yg)("p",null,"To handle submission ",(0,a.yg)("a",{parentName:"p",href:"../submission"},"see submission"),"."),(0,a.yg)("h2",{id:"inert-input"},"Inert input"),(0,a.yg)("p",null,"You can use html elements in a component to render a header or display a paragraph.\nThis is particularly useful when you want to incorporate text blocks or improve your form presentation between inputs."),(0,a.yg)("p",null,"For instance the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/formulaik-community/formulaik-mui-react"},"Mui component library")," offers inputs for:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"html"),": raw "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"divider")," displays a divider (hr) between inputs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"h1"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"h2"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"h3"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"h4")," renders the respective headers")),(0,a.yg)("p",null,"Examples: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"{\n    type: 'html',\n    params: {\n        content: \"If the user doesn't exist, provide these informations\"\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"}," {\n    type: 'h2',\n    params: {\n        content: 'General informations'\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"{\n    type: 'divider',\n}\n")))}c.isMDXComponent=!0}}]);