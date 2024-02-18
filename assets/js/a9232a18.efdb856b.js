"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[4228],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>y});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66932:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(45072),o=(t(11504),t(95788));const i={sidebar_position:2},a="Use",l={unversionedId:"guides/componentlibrary/use",id:"version-1.0/guides/componentlibrary/use",title:"Use",description:"Declare / import",source:"@site/versioned_docs/version-1.0/guides/componentlibrary/use.mdx",sourceDirName:"guides/componentlibrary",slug:"/guides/componentlibrary/use",permalink:"/documentation/docs/guides/componentlibrary/use",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/componentlibrary/use.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/documentation/docs/guides/componentlibrary/create"},next:{title:"Questions",permalink:"/documentation/docs/category/questions"}},c={},s=[{value:"Declare / import",id:"declare--import",level:3}],u={toc:s},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"use"},"Use"),(0,o.yg)("h3",{id:"declare--import"},"Declare / import"),(0,o.yg)("p",null,"For inline extensions no need to explicitely import.\nFor standalone modules, "),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Declare the module in package.json"),(0,o.yg)("li",{parentName:"ol"},"Declare the module in formulaik.config.js")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n  __formulaikApiVersion: "1.0.0",\n  name: "<%= name %>",\n  usage: "<%= usage %>",  \n  extensions: [\n    "<%= moduleId %>"\n  ]\n})\n')),(0,o.yg)("p",null,"Then check the extension documentation."))}m.isMDXComponent=!0}}]);