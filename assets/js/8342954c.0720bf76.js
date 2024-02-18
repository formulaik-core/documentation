"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[2152],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={sidebar_position:2},i="$ formulaik extension new",s={unversionedId:"reference/commands/extensionnew",id:"version-1.0/reference/commands/extensionnew",title:"$ formulaik extension new",description:"Create a new extension",source:"@site/versioned_docs/version-1.0/reference/commands/extensionnew.mdx",sourceDirName:"reference/commands",slug:"/reference/commands/extensionnew",permalink:"/documentation/docs/reference/commands/extensionnew",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/commands/extensionnew.mdx",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"$ formulaik app new",permalink:"/documentation/docs/reference/commands/appnew"},next:{title:"Ecosystem",permalink:"/documentation/docs/category/ecosystem"}},l={},c=[{value:"Create a new extension",id:"create-a-new-extension",level:2},{value:"Options",id:"options",level:3},{value:"Example",id:"example",level:3},{value:"Help",id:"help",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"-formulaik-extension-new"},"$ formulaik extension new"),(0,o.yg)("h2",{id:"create-a-new-extension"},"Create a new extension"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"formulaik extension new\n")),(0,o.yg)("h3",{id:"options"},"Options"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"      --extensionId              Extension ID                                                                            [string]\n      --extensionDescription     Extension description                                                                   [string]\n      -d, --destination          Project destination                                                                     [string]\n      -p, --packageManager       Package manager ('npm', 'yarn' or 'pnpm')                              [string] [default: \"npm\"]\n      -i, --installDependencies  Install dependencies                                                   [boolean] [default: true]\n      -l, --license              License                                                                [string] [default: \"MIT\"]\n      -g, --gitInit              Initialize a git repository                                            [boolean] [default: true]\n      -p, --releaseType          Continuous release provider                                           [string] [default: \"none\"]                                                               [string]      \n")),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"formulaik extension new --extensionId='mycli'\n")),(0,o.yg)("h3",{id:"help"},"Help"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"formulaik extension new -h\n")))}m.isMDXComponent=!0}}]);