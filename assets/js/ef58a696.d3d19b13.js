"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[4257],{3299:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(8168),o=(r(6540),r(3299));const i={sidebar_position:1},a="Overview",s={unversionedId:"overview",id:"version-1.0/overview",title:"Overview",description:"logo",source:"@site/versioned_docs/version-1.0/0.overview.md",sourceDirName:".",slug:"/overview",permalink:"/documentation/docs/overview",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/0.overview.md",tags:[],version:"1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick start \ud83d\ude80",permalink:"/documentation/docs/quickstart"}},c={},u=[{value:"Formulaik documentation",id:"formulaik-documentation",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.yg)(p,(0,n.A)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"overview"},"Overview"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"logo",src:r(6755).A,width:"100",height:"143"})),(0,o.yg)("p",null,"Formulaik is built from the ground up to be easy to use, convention driven and extensible so that it's easy to kickstart a project and maintain it. It's api makes it easy to fetch steps remotely and execute them with powerful side effects, transformers and validators."),(0,o.yg)("h2",{id:"formulaik-documentation"},"Formulaik documentation"),(0,o.yg)("p",null,"This is the official documentation site for Formulaik. Content on this site is sourced in GitHub. For more information, see ",(0,o.yg)("a",{parentName:"p",href:"/documentation/docs/contributing"},"Contributing to Formulaik")," documentation."),(0,o.yg)("p",null,"This site is based on ",(0,o.yg)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),"."),(0,o.yg)("p",null,"This site is deployed on ",(0,o.yg)("a",{parentName:"p",href:"https://pages.github.com"},"Github Pages"),"."),(0,o.yg)("p",null,"We use the ",(0,o.yg)("a",{parentName:"p",href:"https://diataxis.fr"},"Di\xe1taxis documentation authoring framework")," which organizes technical documentation into a system based on four quadrants:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Learning-oriented Tutorials provide hands-on lessons where users can learn the framework by doing.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Problem-oriented How-to Guides provide recipes to solve specific goals you may encounter while building a LoopBack project.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Understanding-oriented Concepts pages provide the explanation of architecture concepts, wider view and deeper knowledge about the framework.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Information-oriented Reference guides provide technical description of the machinery and how to use it."))))}d.isMDXComponent=!0},6755:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/icon_xs-7562b03da1d8a40ad122e31d24f1cfe1.svg"}}]);