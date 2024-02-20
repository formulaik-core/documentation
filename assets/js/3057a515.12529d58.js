"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[8720],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(45072),r=(n(11504),n(95788));const i={sidebar_position:0},a="Philosophy",l={unversionedId:"concepts/philosophy",id:"concepts/philosophy",title:"Philosophy",description:"logo",source:"@site/docs/concepts/philosophy.mdx",sourceDirName:"concepts",slug:"/concepts/philosophy",permalink:"/documentation/docs/next/concepts/philosophy",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/philosophy.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/documentation/docs/next/concepts/motivation"},next:{title:"Terms, definitions and components",permalink:"/documentation/docs/next/concepts/components"}},s={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Principles",id:"principles",level:2},{value:"Convention over configuration",id:"convention-over-configuration",level:3},{value:"Break the Form into Small Reusable Components",id:"break-the-form-into-small-reusable-components",level:3},{value:"Standardize Input Interfaces: \u201cvalue\u201d and \u201conChange\u201d",id:"standardize-input-interfaces-value-and-onchange",level:3},{value:"Don&#39;t repeat yourself (DRY)",id:"dont-repeat-yourself-dry",level:3},{value:"Extreme refactoring",id:"extreme-refactoring",level:3},{value:"Functional programming",id:"functional-programming",level:3},{value:"Other influences",id:"other-influences",level:3},{value:"Should you use Formulaik?",id:"should-you-use-formulaik",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(p,(0,o.c)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"philosophy"},"Philosophy"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"logo",src:n(62180).c,width:"100",height:"143"})),(0,r.yg)("h2",{id:"motivation"},"Motivation"),(0,r.yg)("p",null,"Forms are hard. They are tough to get right and maintain. We usually end up with dozens of form artefacts spread across our projects, from inputs, styling, validation, submission logic, user input behavior, etc.\nWe used Formik as our main form management library, it is a great way of writing form inputs and manage their lifecycle.\nBut what if we want to reuse the whole reasonning that goes with creating a one, fully functional form, to other views in our app?\nThe answer to that question if what led to the creation of ",(0,r.yg)("strong",{parentName:"p"},"Formulaik"),"."),(0,r.yg)("h2",{id:"principles"},"Principles"),(0,r.yg)("h3",{id:"convention-over-configuration"},"Convention over configuration"),(0,r.yg)("i",null,"Convention over configuration (also known as coding by convention) is a software design paradigm used by software frameworks that attempts to decrease the number of decisions that a developer using the framework is required to make without necessarily losing flexibility and don't repeat yourself (DRY) principles."),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://en.wikipedia.org/wiki/Convention_over_configuration"},"Wikipedia"),(0,r.yg)("h3",{id:"break-the-form-into-small-reusable-components"},"Break the Form into Small Reusable Components"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"One of the fundamental principles of React is the concept of componentization. Apply this principle to your forms by breaking them down into small, reusable components. Each component should encapsulate a specific piece of the form\u2019s functionality. This approach makes your code more modular and easier to maintain, and when combined with TypeScript, it enables strong type checking for each component."),"\n",(0,r.yg)("a",{parentName:"p",href:"https://orizens.com/blog/best_practices_for_developing_complex_form-based_apps_with_react_hook_form_and_typescript_support/"},"Read more")),(0,r.yg)("h3",{id:"standardize-input-interfaces-value-and-onchange"},"Standardize Input Interfaces: \u201cvalue\u201d and \u201conChange\u201d"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"To ensure consistency and compatibility, follow the standard input interface of providing \u201cvalue\u201d and \u201conChange\u201d handlers for your form inputs. This approach allows React Hook Form to seamlessly integrate with your components while providing TypeScript with the necessary information to perform type checking."),"\n",(0,r.yg)("a",{parentName:"p",href:"https://orizens.com/blog/best_practices_for_developing_complex_form-based_apps_with_react_hook_form_and_typescript_support/"},"Read more")),(0,r.yg)("h3",{id:"dont-repeat-yourself-dry"},"Don't repeat yourself (DRY)"),(0,r.yg)("i",null,'"Don\'t repeat yourself" (DRY) is a principle of software development aimed at reducing repetition of information which is likely to change, replacing it with abstractions that are less likely to change, or using data normalization which avoids redundancy in the first place.'),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"Wikipedia"),(0,r.yg)("h3",{id:"extreme-refactoring"},"Extreme refactoring"),(0,r.yg)("i",null,"Refactor mercilessly"),(0,r.yg)("br",null),"Formulaik takes refactoring to the extreme by decluttering the app from the underlying features that different models use into a single package called feature. Contrarily to a middleware or an extension, a feature is a high level, conventioned, Predictable and versioned piece of code that provides a functional feature. Extreme refactoring with features yield extreme reusability from the ground-up by instilling a feature driven culture in your teams.",(0,r.yg)("br",null),(0,r.yg)("i",null,"Variable \u2192 Function \u2192 Class \u2192 Module \u2192 Extension \u2192 ",(0,r.yg)("b",null,"Feature")),(0,r.yg)("br",null),(0,r.yg)("a",{href:"http://www.extremeprogramming.org/rules/refactor.html"},"Extreme refactoring"),(0,r.yg)("h3",{id:"functional-programming"},"Functional programming"),(0,r.yg)("p",null,"(over object programming)"),(0,r.yg)("i",null,"Functional programming is a paradigm of building computer programs using expressions and functions without mutating state and data. By respecting these restrictions, functional programming aims to write code that is clearer to understand and more bug resistant."),(0,r.yg)("h3",{id:"other-influences"},"Other influences"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{href:"https://blog.ploeh.dk/2021/06/14/new-book-code-that-fits-in-your-head/"},(0,r.yg)("i",null,"Code That Fits in Your Head"))," book by Mark Seemann"),(0,r.yg)("li",{parentName:"ul"},"Formik")),(0,r.yg)("h2",{id:"should-you-use-formulaik"},"Should you use Formulaik?"),(0,r.yg)("p",null,"Formulaik is likely a good fit for you if"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You want to quickly build a form for your project"),(0,r.yg)("li",{parentName:"ul"},"You want to reuse an input over different forms without copying it over and over")))}d.isMDXComponent=!0},62180:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/icon_xs-7562b03da1d8a40ad122e31d24f1cfe1.svg"}}]);