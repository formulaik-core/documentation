"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[4304],{95788:(e,r,n)=>{n.d(r,{Iu:()=>c,yg:()=>b});var t=n(11504);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?t.createElement(b,i(i({ref:r},c),{},{components:n})):t.createElement(b,i({ref:r},c))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55152:(e,r,n)=>{n.d(r,{c:()=>s});var t=n(11504),a=n(86212),o=n(22440),i=n(17438),l=n(73608);const s=e=>{const r=e.npm?e.npm:(0,l.c)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,l.c)(e.npm,"yarn");return t.createElement(a.default,null,t.createElement(o.default,{value:"npm",label:"npm",default:!0},t.createElement(i.default,{language:"bash"},r)),t.createElement(o.default,{value:"bash",label:"yarn"},t.createElement(i.default,{language:"bash"},n)))}},62364:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=n(45072),a=(n(11504),n(95788));n(55152);const o={sidebar_position:2},i="Use @loadable in input libraries",l={unversionedId:"guides/libraries/loadable",id:"version-1.0/guides/libraries/loadable",title:"Use @loadable in input libraries",description:"",source:"@site/versioned_docs/version-1.0/guides/libraries/loadable.mdx",sourceDirName:"guides/libraries",slug:"/guides/libraries/loadable",permalink:"/documentation/docs/guides/libraries/loadable",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/libraries/loadable.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a components library",permalink:"/documentation/docs/guides/libraries/usage"},next:{title:"Samples",permalink:"/documentation/docs/guides/samples"}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.c)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"use-loadable-in-input-libraries"},"Use @loadable in input libraries"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import Formulaik from '@formulaik/react'\nimport FormulaikLocal from 'components/shared/formulaik-library'\nimport * as Yup from 'yup'\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import loadable from '@loadable/component'\nconst keys = [        \n    'submit',    \n    'input',            \n    'textArea',\n]\n\nexport default (props) => {\n    const { type } = props\n    if (!keys.includes(type)) {\n        return null\n    }\n    try {\n        const Component = loadable(props => import(`./${type}`), {\n            cacheKey: props => type,\n        })\n        return Component\n    } catch (e) {\n        return null\n    }\n}\n\n\n\n")))}m.isMDXComponent=!0}}]);