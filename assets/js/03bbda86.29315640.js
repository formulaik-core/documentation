"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[7747],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80076:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(96540),a=n(49489),o=n(7227),i=n(23833),l=n(68316);const c=e=>{const t=e.npm?e.npm:(0,l.A)(e.yarn,"npm"),n=e.yarn?e.yarn:(0,l.A)(e.npm,"yarn");return r.createElement(a.default,null,r.createElement(o.default,{value:"npm",label:"npm",default:!0},r.createElement(i.default,{language:"bash"},t)),r.createElement(o.default,{value:"bash",label:"yarn"},r.createElement(i.default,{language:"bash"},n)))}},25377:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(23833),o=n(80076);const i=e=>{let{}=e;return r.createElement("div",{class:"                     \n        "},r.createElement("p",{className:"text-lg font-bold"},"1. Install formulaik, yup for validation and a component library"),r.createElement(o.A,{npm:"npm install @formulaik/engine-react"}),r.createElement(a.default,{language:"jsx"},"import Formulaik from '@formulaik/engine-react'\nimport FormulaikMui from '@formulaik-community/react-mui'\nimport * as Yup from 'yup'"),r.createElement("p",{className:"text-lg font-bold"},"2. Define inputs"),r.createElement(a.default,{language:"jsx"},"const inputs = [\n  {\n    type: 'input',\n    schema: 'email',\n    id: 'email',\n    label: 'Email',\n    params: {\n      type: 'email',\n      placeholder: \"email@domain.com\"\n    }\n  },\n  {\n    type: 'inputPassword',\n    schema: 'password',\n    label: 'Password',\n    id: 'password',\n    params: {\n      type: 'password',\n      autoComplete: \"current-password\",\n      placeholder: \"xxxx-xxxx-xxxx\"\n    }\n  },\n  {\n    type: 'submit',\n    params: {\n      text: 'Continue'\n    }\n  },\n]"),r.createElement("p",{className:"text-lg font-bold"},"3. Provide initial values"),r.createElement(a.default,{language:"jsx"},"const initialValues = {\n    email: cookies.get('email'),\n}"),r.createElement("p",{className:"text-lg font-bold"},"4. Define validation"),r.createElement(a.default,{language:"jsx"},"const validationSchema = Yup.object().shape({\n  email: Yup.string()\n    .email('Invalid email format')\n    .required(\"This field can't be blank\"),\n  password: Yup.string()\n    .required(\"This field can't be blank\")\n    .min(7, 'Must contain at least 8 characters')\n    .max(18, 'Must contain at most 18 characters')\n    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')\n})"),r.createElement("p",{className:"text-lg font-bold"},"5. Render forms and handle submit"),r.createElement(a.default,{language:"jsx"},"export default (props) => {\n  const onSubmit = async (values, { setSubmitting }) => {\n    try {\n      const { email, password } = values\n      //... do login\n      setError(null)      \n    } catch (e) {\n      console.log(e)\n      setError(e)\n    }\n\n    setSubmitting(false)\n  }\n\n  return <div>      \n      <h1>Login</h1>            \n      <Formulaik\n        componentsLibraries={[FormulaikLocal,]}\n        initialValues={initialValues}\n        validationSchema={validationSchema}\n        inputs={inputs}\n        onSubmit={onSubmit}\n        error={error} />      \n    </div>\n}"))}},48684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(58168),a=(n(96540),n(15680)),o=(n(80076),n(25377));const i={sidebar_position:1},l="Quick start \ud83d\ude80",c={unversionedId:"quickStart",id:"quickStart",title:"Quick start \ud83d\ude80",description:"For people in a hurry",source:"@site/docs/quickStart.mdx",sourceDirName:".",slug:"/quickStart",permalink:"/documentation/docs/next/quickStart",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/quickStart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/documentation/docs/next/overview"},next:{title:"Getting started",permalink:"/documentation/docs/next/category/getting-started"}},s={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"quick-start-"},"Quick start \ud83d\ude80"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"For people in a hurry")),(0,a.yg)(o.A,{hideTitle:!0,mdxType:"QuickStart"}))}d.isMDXComponent=!0}}]);