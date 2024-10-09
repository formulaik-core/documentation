"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[8557],{3299:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(8168),a=(n(6540),n(3299));const o={},i="Params",s={unversionedId:"guides/input/params",id:"version-1.0/guides/input/params",title:"Params",description:"Each input can define custom parameters that will be passed to the input component for a pass-through customization.",source:"@site/versioned_docs/version-1.0/guides/1.input/1.params.md",sourceDirName:"guides/1.input",slug:"/guides/input/params",permalink:"/documentation/docs/guides/input/params",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/1.input/1.params.md",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/guides/input/overview"},next:{title:"Data types",permalink:"/documentation/docs/guides/input/datatypes"}},p={},u=[{value:"Illustration",id:"illustration",level:2}],l={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"params"},"Params"),(0,a.yg)("p",null,"Each input can define custom parameters that will be passed to the input component for a pass-through customization.\nThere is no limit to what you can define in params.\nJust like any other input field, make sure it is a serializable payload."),(0,a.yg)("h2",{id:"illustration"},"Illustration"),(0,a.yg)("p",null,"When defining an ",(0,a.yg)("inlineCode",{parentName:"p"},"email")," input we can define the placeholder to use:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"{\n    component: 'input',\n    id: 'email',\n    label: 'Email',\n    type: \"string\",\n    params: {        \n        placeholder: \"email@domain.com\"\n    }\n},\n")),(0,a.yg)("p",null,"The input component can access the custom parameters:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { useCallback, useEffect, useState, } from 'react'\nimport TextField from '@mui/material/TextField'\nimport { useDebouncedCallback } from 'use-debounce'\n\nexport default (props) => {\n  const {\n    value,\n    error,\n    disabled,\n    onValueChanged,\n    item: {  \n        id\n      params = {},\n       }\n  } = props\n  ...\n}\n")))}m.isMDXComponent=!0}}]);