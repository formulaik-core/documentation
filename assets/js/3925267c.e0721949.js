"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[3080],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5320:(e,t,n)=>{n(11504)},86660:(e,t,n)=>{n(11504),n(49344)},33768:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(11504),o=n(49344);const a=e=>{let{noLink:t=!1,align:n="center"}=e;return r.createElement("div",{class:"\nflex\njustify-center\n"},r.createElement("div",{class:`\n          ${"center"===n?"justify-center text-center":""}          \n          pt-8     \n          max-w-4xl\n        `},r.createElement("h2",{className:"text-4xl"},"What do we want? \ud83e\udd16"," ",r.createElement("i",null)),r.createElement("p",{className:"text-lg"},"Ok, what would the perfect CLI generator look like ?"),r.createElement("ul",{className:`\n            ${"center"===n?"list-none":"list-decimal"}          \n            text-lg \n            space-y-2\n            `},r.createElement("li",{className:""},"Easy to read"),r.createElement("li",{className:""},"Easy to add commands"),r.createElement("li",{className:""},"Programmatically add steps, inputs, transformers, etc"),r.createElement("li",{className:""},"Extensible")),!t&&r.createElement("p",null,r.createElement(o.c,{className:"button button--secondary button--md",to:"/docs/concepts/motivation"},"Read more about Formulaik motivation"))))}},91872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(45072),o=(n(11504),n(95788));n(5320),n(33768),n(86660);const a={sidebar_position:0},i="Motivation",l={unversionedId:"concepts/motivation",id:"concepts/motivation",title:"Motivation",description:"logo",source:"@site/docs/concepts/motivation.mdx",sourceDirName:"concepts",slug:"/concepts/motivation",permalink:"/documentation/docs/next/concepts/motivation",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/motivation.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/documentation/docs/next/category/concepts"},next:{title:"Components",permalink:"/documentation/docs/next/concepts/components"}},s={},c=[{value:"Why another framework?",id:"why-another-framework",level:2},{value:"Principles",id:"principles",level:2},{value:"Convention over configuration",id:"convention-over-configuration",level:3},{value:"Don&#39;t repeat yourself (DRY)",id:"dont-repeat-yourself-dry",level:3},{value:"Extreme refactoring",id:"extreme-refactoring",level:3},{value:"Functional programming",id:"functional-programming",level:3},{value:"Other influences",id:"other-influences",level:3},{value:"Should you use Formulaik?",id:"should-you-use-formulaik",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,o.yg)(m,(0,r.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"motivation"},"Motivation"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"logo",src:n(62180).c,width:"446",height:"640"})),(0,o.yg)("h2",{id:"why-another-framework"},"Why another framework?"),(0,o.yg)("p",null,"We used yeoman as our CLI framework in the past. Yeoman quickly became hard to maintain.\n#TODO"),(0,o.yg)("h2",{id:"principles"},"Principles"),(0,o.yg)("h3",{id:"convention-over-configuration"},"Convention over configuration"),(0,o.yg)("i",null,"Convention over configuration (also known as coding by convention) is a software design paradigm used by software frameworks that attempts to decrease the number of decisions that a developer using the framework is required to make without necessarily losing flexibility and don't repeat yourself (DRY) principles."),(0,o.yg)("br",null),(0,o.yg)("a",{href:"https://en.wikipedia.org/wiki/Convention_over_configuration"},"Wikipedia"),(0,o.yg)("h3",{id:"dont-repeat-yourself-dry"},"Don't repeat yourself (DRY)"),(0,o.yg)("i",null,'"Don\'t repeat yourself" (DRY) is a principle of software development aimed at reducing repetition of information which is likely to change, replacing it with abstractions that are less likely to change, or using data normalization which avoids redundancy in the first place.'),(0,o.yg)("br",null),(0,o.yg)("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"Wikipedia"),(0,o.yg)("h3",{id:"extreme-refactoring"},"Extreme refactoring"),(0,o.yg)("i",null,"Refactor mercilessly"),(0,o.yg)("br",null),"Formulaik takes refactoring to the extreme by decluttering the app from the underlying features that different models use into a single package called feature. Contrarily to a middleware or an extension, a feature is a high level, conventioned, predicatable and versioned piece of code that provides a functional feature. Extreme refactoring with features yield extreme reusability from the ground-up by instilling a feature driven culture in your teams.",(0,o.yg)("br",null),(0,o.yg)("i",null,"Variable \u2192 Function \u2192 Class \u2192 Module \u2192 Extension \u2192 ",(0,o.yg)("b",null,"Feature")),(0,o.yg)("br",null),(0,o.yg)("a",{href:"http://www.extremeprogramming.org/rules/refactor.html"},"Extreme refactoring"),(0,o.yg)("h3",{id:"functional-programming"},"Functional programming"),(0,o.yg)("p",null,"(over object programming)"),(0,o.yg)("i",null,"Functional programming is a paradigm of building computer programs using expressions and functions without mutating state and data. By respecting these restrictions, functional programming aims to write code that is clearer to understand and more bug resistant."),(0,o.yg)("h3",{id:"other-influences"},"Other influences"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://blog.ploeh.dk/2021/06/14/new-book-code-that-fits-in-your-head/"},(0,o.yg)("i",null,"Code That Fits in Your Head"))," book by Mark Seemann"),(0,o.yg)("li",{parentName:"ul"},"Gluegun"),(0,o.yg)("li",{parentName:"ul"},"Yargs")),(0,o.yg)("h2",{id:"should-you-use-formulaik"},"Should you use Formulaik?"),(0,o.yg)("p",null,"Formulaik is likely a good fit for you if"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You want to quickly build a CLI for your project"),(0,o.yg)("li",{parentName:"ul"},"You want to reuse an option over different commands without copying it over and over"),(0,o.yg)("li",{parentName:"ul"},"You want to use conventionned validators and transformers"),(0,o.yg)("li",{parentName:"ul"},"You want to use validators, transformers and side effects programmatically")),(0,o.yg)("p",null,"{/* ",(0,o.yg)("img",{alt:"logo",src:n(98168).c,width:"846",height:"1198"})),(0,o.yg)("small",null,"Simon Buret, The blessings, 2022")," */}")}p.isMDXComponent=!0},98168:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/buret-20d7c177699d7e5e6871dbe4bce605c7.png"},62180:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/icon_xs-c034b822145a1a399f25e0aabc167938.svg"}}]);