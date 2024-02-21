"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[6639],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>b});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?t.createElement(b,l(l({ref:r},p),{},{components:n})):t.createElement(b,l({ref:r},p))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80076:(e,r,n)=>{n.d(r,{A:()=>s});var t=n(96540),a=n(49489),o=n(7227),l=n(23833),i=n(68316);const s=e=>{const r=e.npm?e.npm:(0,i.A)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,i.A)(e.npm,"yarn");return t.createElement(a.default,null,t.createElement(o.default,{value:"npm",label:"npm",default:!0},t.createElement(l.default,{language:"bash"},r)),t.createElement(o.default,{value:"bash",label:"yarn"},t.createElement(l.default,{language:"bash"},n)))}},75093:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(58168),a=(n(96540),n(15680));n(80076);const o={sidebar_position:2},l="Use @loadable in input libraries",i={unversionedId:"guides/libraries/loadable",id:"guides/libraries/loadable",title:"Use @loadable in input libraries",description:"",source:"@site/docs/guides/libraries/loadable.mdx",sourceDirName:"guides/libraries",slug:"/guides/libraries/loadable",permalink:"/documentation/docs/next/guides/libraries/loadable",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/guides/libraries/loadable.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a components library",permalink:"/documentation/docs/next/guides/libraries/usage"},next:{title:"Samples",permalink:"/documentation/docs/next/guides/samples"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:r,...n}=e;return(0,a.yg)(c,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"use-loadable-in-input-libraries"},"Use @loadable in input libraries"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import Formulaik from '@formulaik/engine-react'\nimport FormulaikLocal from 'components/shared/formulaik-library'\nimport * as Yup from 'yup'\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import loadable from '@loadable/component'\nconst keys = [        \n    'submit',    \n    'input',            \n    'textArea',\n]\n\nexport default (props) => {\n    const { type } = props\n    if (!keys.includes(type)) {\n        return null\n    }\n    try {\n        const Component = loadable(props => import(`./${type}`), {\n            cacheKey: props => type,\n        })\n        return Component\n    } catch (e) {\n        return null\n    }\n}\n\n\n\n")))}m.isMDXComponent=!0}}]);