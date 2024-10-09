"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[9325],{3299:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>f});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?o.createElement(f,u(u({ref:t},i),{},{components:r})):o.createElement(f,u({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,u[1]=c;for(var s=2;s<a;s++)u[s]=r[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(8168),n=(r(6540),r(3299));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["aboubacar"],tags:["docusaurus"]},u=void 0,c={permalink:"/documentation/blog/mdx-blog-post",editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/documentation/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"Aboubacar Doucoure",title:"Creator of Formulaik",url:"https://github.com/formulaik-core",imageURL:"https://github.com/formulaik-core.png",key:"aboubacar"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["aboubacar"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/documentation/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/documentation/blog/long-blog-post"}},l={authorsImageUrls:[void 0]},s=[],i={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Blog posts support ",(0,n.yg)("a",{parentName:"p",href:"https://docusaurus.io/docs/guides/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,n.yg)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.yg)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}m.isMDXComponent=!0}}]);