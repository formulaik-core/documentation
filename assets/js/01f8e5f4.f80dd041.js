"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[4244],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>g});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const o={sidebar_position:6},l="Roadmap",i={unversionedId:"roadmap",id:"version-1.0/roadmap",title:"Roadmap",description:"| Feature  | Description  | Target version  | Status |",source:"@site/versioned_docs/version-1.0/roadmap.mdx",sourceDirName:".",slug:"/roadmap",permalink:"/documentation/docs/roadmap",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/roadmap.mdx",tags:[],version:"1.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Extensions \ud83d\udce6",permalink:"/documentation/docs/ecosystem/extensions"},next:{title:"Code of conduct",permalink:"/documentation/docs/codeofconduct"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"roadmap"},"Roadmap"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Feature"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Target version"),(0,a.yg)("th",{parentName:"tr",align:null},"Status"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"}," Command events")),(0,a.yg)("td",{parentName:"tr",align:null},"Create command hooks for success, failures, etc"),(0,a.yg)("td",{parentName:"tr",align:null},"1.x"),(0,a.yg)("td",{parentName:"tr",align:null},"TODO")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"}," Loading directive ")),(0,a.yg)("td",{parentName:"tr",align:null},"Make it possible to animate loading states"),(0,a.yg)("td",{parentName:"tr",align:null},"1.x"),(0,a.yg)("td",{parentName:"tr",align:null},"TODO")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"}," Custom UI ")),(0,a.yg)("td",{parentName:"tr",align:null},"Make it possible to customize the UI for headlines"),(0,a.yg)("td",{parentName:"tr",align:null},"2.x"),(0,a.yg)("td",{parentName:"tr",align:null},"TODO")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"}," Extension object ")),(0,a.yg)("td",{parentName:"tr",align:null},"Make it possible to call an object returned by a registered extension"),(0,a.yg)("td",{parentName:"tr",align:null},"2.x"),(0,a.yg)("td",{parentName:"tr",align:null},"TODO")))),(0,a.yg)("p",null,"Submit a feature request at ",(0,a.yg)("a",{parentName:"p",href:"mailto:yelounak@gmail.com"},"yelounak@gmail.com")))}m.isMDXComponent=!0}}]);