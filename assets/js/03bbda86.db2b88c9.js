"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[7747],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80076:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(96540),r=n(49489),o=n(7227),i=n(23833),l=n(68316);const c=e=>{const t=e.npm?e.npm:(0,l.A)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,l.A)(e.npm,"yarn");return a.createElement(r.default,null,a.createElement(o.default,{value:"npm",label:"npm",default:!0},a.createElement(i.default,{language:"bash"},t)),a.createElement(o.default,{value:"bash",label:"yarn"},a.createElement(i.default,{language:"bash"},n)))}},25377:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(23833),o=n(80076);const i=e=>{let{}=e;return a.createElement("div",{class:"                     \n        "},a.createElement("p",{className:"text-lg font-bold"},"1. Install formulaik, yup for validation and a component library"),a.createElement(o.A,{npm:"npm install @formulaik/react"}),a.createElement(r.default,{language:"jsx"},"import Formulaik from '@formulaik/react'\nimport FormulaikMui from '@formulaik-community/react-mui'\n"),a.createElement("p",{className:"text-lg font-bold"},"2. Define inputs"),a.createElement(r.default,{language:"jsx"},"const inputs = [\n  {\n    component: 'input',\n    id: 'email',\n    label: 'Email',\n    type: \"string\",\n    params: {\n      type: 'email',\n      placeholder: \"email@domain.com\"\n    },\n    validation: {\n      format: {\n        value: \"email\",\n        message: 'Invalid email format',\n      },\n      required: {\n        value: true,\n        message: \"This field can't be blank\",\n      },\n    }\n  },\n  {\n    component: 'inputPassword',\n    label: 'Password',\n    id: 'password',\n    type: \"string\",\n    params: {\n      type: 'password',\n      autoComplete: \"current-password\",\n      placeholder: \"xxxx-xxxx-xxxx\"\n    },\n    validation: {\n      matches: {\n        value: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,\n        message: 'Invalid password, must contain at least 8 characters and at most 18 characters',\n      },\n      required: {\n        value: true,\n        message: \"This field can't be blank\",\n      },\n    }\n  },\n  {\n    component: 'submit',\n    params: {\n      text: 'Continue'\n    }\n  },\n]"),a.createElement("p",{className:"text-lg font-bold"},"3. Provide initial values"),a.createElement(r.default,{language:"jsx"},"const initialValues = {\n    email: cookies.get('email'),\n}"),a.createElement("p",{className:"text-lg font-bold"},"4. Render forms and handle submit"),a.createElement(r.default,{language:"jsx"},"export default (props) => {\n  const onSubmit = async (values, { setSubmitting }) => {\n    try {\n      const { email, password } = values\n      //... do login      \n    } catch (e) {\n      console.log(e)      \n    }\n  }\n\n  return <div>      \n      <h1>Login</h1>            \n      <Formulaik\n        components={[FormulaikLocal,]}\n        initialValues={initialValues}        \n        inputs={inputs}\n        onSubmit={onSubmit}\n         />      \n    </div>\n}"))}},48684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(58168),r=(n(96540),n(15680)),o=(n(80076),n(25377));const i={sidebar_position:1},l="Quick start \ud83d\ude80",c={unversionedId:"quickStart",id:"quickStart",title:"Quick start \ud83d\ude80",description:"For people in a hurry",source:"@site/docs/quickStart.mdx",sourceDirName:".",slug:"/quickStart",permalink:"/documentation/docs/next/quickStart",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/quickStart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/next/overview"},next:{title:"Getting started",permalink:"/documentation/docs/next/category/getting-started"}},s={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"quick-start-"},"Quick start \ud83d\ude80"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"For people in a hurry")),(0,r.yg)(o.A,{hideTitle:!0,mdxType:"QuickStart"}))}d.isMDXComponent=!0}}]);