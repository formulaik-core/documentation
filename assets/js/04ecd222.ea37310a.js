"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[3176],{95788:(e,r,n)=>{n.d(r,{Iu:()=>l,yg:()=>d});var t=n(11504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?t.createElement(d,c(c({ref:r},l),{},{components:n})):t.createElement(d,c({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34012:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=n(45072),o=(n(11504),n(95788));const a={sidebar_position:0},c="Anatomy of a Formulaik app",i={unversionedId:"reference/anatomy",id:"version-1.0/reference/anatomy",title:"Anatomy of a Formulaik app",description:"Project structure",source:"@site/versioned_docs/version-1.0/reference/anatomy.mdx",sourceDirName:"reference",slug:"/reference/anatomy",permalink:"/documentation/docs/reference/anatomy",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/anatomy.mdx",tags:[],version:"1.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/documentation/docs/category/reference"},next:{title:"Config",permalink:"/documentation/docs/reference/config"}},s={},u=[{value:"Project structure",id:"project-structure",level:2}],l={toc:u},p="wrapper";function m(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.c)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"anatomy-of-a-formulaik-app"},"Anatomy of a Formulaik app"),(0,o.yg)("h2",{id:"project-structure"},"Project structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 src\n\u251c\u2500\u2500\u2500\u2500 app.js\n\u251c\u2500\u2500\u2500\u2500 commands\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command A\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command X\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Y\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500 command B\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command Z\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 sub command W\n\u251c\u2500\u2500\u2500\u2500 extensions\n\u251c\u2500\u2500\u2500\u2500 questions\n\u251c\u2500\u2500\u2500\u2500 transformers\n\u251c\u2500\u2500\u2500\u2500 validators\n\u251c\u2500\u2500 formulaik.config.js\n\u251c\u2500\u2500 .env\n\u2514\u2500\u2500 package.json\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The formulaik config is formulaik.config.js"),(0,o.yg)("li",{parentName:"ul"},"The formulaik app entry point is index.js"),(0,o.yg)("li",{parentName:"ul"},"The local extensions are in /src/extensions")))}m.isMDXComponent=!0}}]);