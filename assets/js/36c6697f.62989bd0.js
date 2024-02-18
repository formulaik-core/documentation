"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[6182],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(45072),o=(t(11504),t(95788));const i={sidebar_position:0},a="Philosophy",l={unversionedId:"guides/philosophy",id:"version-1.0/guides/philosophy",title:"Philosophy",description:"logo",source:"@site/versioned_docs/version-1.0/guides/philosophy.mdx",sourceDirName:"guides",slug:"/guides/philosophy",permalink:"/documentation/docs/guides/philosophy",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/philosophy.mdx",tags:[],version:"1.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/guides/overview"},next:{title:"Use local library",permalink:"/documentation/docs/guides/uselocal"}},u={},s=[{value:"Motivation Why another framework?",id:"motivation-why-another-framework",level:2},{value:"Principles",id:"principles",level:2},{value:"Convention over configuration",id:"convention-over-configuration",level:3},{value:"Don&#39;t repeat yourself (DRY)",id:"dont-repeat-yourself-dry",level:3},{value:"Extreme refactoring",id:"extreme-refactoring",level:3},{value:"Functional programming",id:"functional-programming",level:3},{value:"Other influences",id:"other-influences",level:3},{value:"Should you use Formulaik?",id:"should-you-use-formulaik",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...i}=e;return(0,o.yg)(p,(0,r.c)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"philosophy"},"Philosophy"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"logo",src:t(62180).c,width:"100",height:"143"})),(0,o.yg)("details",null,(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsx"},"import Formulaik from '@formulaik/react'\nimport FormulaikMui from '@formulaik-community/formulaik-mui-react'\nimport * as Yup from 'yup'\n\nexport default (props) => {\n  const onSubmit = async (values, { setSubmitting }) => {\n    try {\n      const { code, } = values\n     //\n    } catch (e) {\n      //\n    }\n\n    setSubmitting(false)\n  }\n\n  const inputs = [\n    {\n      type: 'input',\n      schema: 'code',\n      id: 'code',\n      label: 'Code',\n    },\n    {\n      type: 'submit',\n      id: 'submit',\n      value: t('Validate'),\n    },\n  ]\n\n  const initialValues = {\n\n  }\n\n  const validationSchema = Yup.object().shape({\n    code: Yup.string()\n        .max(20, 'Too Long!')\n        .required(VALIDATION_BLANK_TEXT),\n    })\n\n  return <div>    \n    <h3>Verify email</h3>                \n    <Formulaik\n      componentsLibraries={[FormulaikMui]}\n      initialValues={initialValues}\n      validationSchema={validationSchema}\n      inputs={inputs}\n      onSubmit={onSubmit}\n      error={error} />\n}\n"))),(0,o.yg)("h2",{id:"motivation-why-another-framework"},"Motivation Why another framework?"),(0,o.yg)("p",null,"We used yeoman as our CLI framework in the past. Yeoman quickly became hard to maintain.\n#TODO"),(0,o.yg)("h2",{id:"principles"},"Principles"),(0,o.yg)("h3",{id:"convention-over-configuration"},"Convention over configuration"),(0,o.yg)("i",null,"Convention over configuration (also known as coding by convention) is a software design paradigm used by software frameworks that attempts to decrease the number of decisions that a developer using the framework is required to make without necessarily losing flexibility and don't repeat yourself (DRY) principles."),(0,o.yg)("br",null),(0,o.yg)("a",{href:"https://en.wikipedia.org/wiki/Convention_over_configuration"},"Wikipedia"),(0,o.yg)("h3",{id:"dont-repeat-yourself-dry"},"Don't repeat yourself (DRY)"),(0,o.yg)("i",null,'"Don\'t repeat yourself" (DRY) is a principle of software development aimed at reducing repetition of information which is likely to change, replacing it with abstractions that are less likely to change, or using data normalization which avoids redundancy in the first place.'),(0,o.yg)("br",null),(0,o.yg)("a",{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"},"Wikipedia"),(0,o.yg)("h3",{id:"extreme-refactoring"},"Extreme refactoring"),(0,o.yg)("i",null,"Refactor mercilessly"),(0,o.yg)("br",null),"Formulaik takes refactoring to the extreme by decluttering the app from the underlying features that different models use into a single package called feature. Contrarily to a middleware or an extension, a feature is a high level, conventioned, predicatable and versioned piece of code that provides a functional feature. Extreme refactoring with features yield extreme reusability from the ground-up by instilling a feature driven culture in your teams.",(0,o.yg)("br",null),(0,o.yg)("i",null,"Variable \u2192 Function \u2192 Class \u2192 Module \u2192 Extension \u2192 ",(0,o.yg)("b",null,"Feature")),(0,o.yg)("br",null),(0,o.yg)("a",{href:"http://www.extremeprogramming.org/rules/refactor.html"},"Extreme refactoring"),(0,o.yg)("h3",{id:"functional-programming"},"Functional programming"),(0,o.yg)("p",null,"(over object programming)"),(0,o.yg)("i",null,"Functional programming is a paradigm of building computer programs using expressions and functions without mutating state and data. By respecting these restrictions, functional programming aims to write code that is clearer to understand and more bug resistant."),(0,o.yg)("h3",{id:"other-influences"},"Other influences"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://blog.ploeh.dk/2021/06/14/new-book-code-that-fits-in-your-head/"},(0,o.yg)("i",null,"Code That Fits in Your Head"))," book by Mark Seemann"),(0,o.yg)("li",{parentName:"ul"},"Gluegun"),(0,o.yg)("li",{parentName:"ul"},"Yargs")),(0,o.yg)("h2",{id:"should-you-use-formulaik"},"Should you use Formulaik?"),(0,o.yg)("p",null,"Formulaik is likely a good fit for you if"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You want to quickly build a CLI for your project"),(0,o.yg)("li",{parentName:"ul"},"You want to reuse an option over different commands without copying it over and over"),(0,o.yg)("li",{parentName:"ul"},"You want to use conventionned validators and transformers"),(0,o.yg)("li",{parentName:"ul"},"You want to use validators, transformers and side effects programmatically")),(0,o.yg)("p",null,"{/* ",(0,o.yg)("img",{alt:"logo",src:t(98168).c,width:"846",height:"1198"})),(0,o.yg)("small",null,"Simon Buret, The blessings, 2022")," */}")}d.isMDXComponent=!0},98168:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/buret-20d7c177699d7e5e6871dbe4bce605c7.png"},62180:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/icon_xs-7562b03da1d8a40ad122e31d24f1cfe1.svg"}}]);