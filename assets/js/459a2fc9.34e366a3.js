"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[368],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const i={sidebar_position:3},o="Samples",s={unversionedId:"guides/samples",id:"guides/samples",title:"Samples",description:"Verify email",source:"@site/docs/guides/samples.mdx",sourceDirName:"guides",slug:"/guides/samples",permalink:"/documentation/docs/next/guides/samples",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/guides/samples.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Input array",permalink:"/documentation/docs/next/guides/array"},next:{title:"Submission",permalink:"/documentation/docs/next/guides/submission"}},u={},l=[{value:"Verify email",id:"verify-email",level:3}],c={toc:l},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"samples"},"Samples"),(0,a.yg)("h3",{id:"verify-email"},"Verify email"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"import Formulaik from '@formulaik/react'\nimport FormulaikMui from '@formulaik-community/react-mui'\nimport * as Yup from 'yup'\n\nexport default (props) => {\n  const onSubmit = async (values, { setSubmitting }) => {    \n    const { code, } = values\n\n    setSubmitting(false)\n  }\n\n  const inputs = [\n    {\n      component: 'input',\n      schema: 'code',\n      id: 'code',\n      label: 'Code',\n    },\n    {\n      type: 'submit',\n      id: 'submit',\n      value: t('Validate'),\n    },\n  ]\n\n  const values = {\n\n  }\n\n  const validationSchema = Yup.object().shape({\n    code: Yup.string()\n        .max(20, 'Too Long!')\n        .required(VALIDATION_BLANK_TEXT),\n    })\n\n  return <div>    \n    <h3>Verify email</h3>                \n    <Formulaik\n      components={[FormulaikMui]}\n      values={values}\n      validationSchema={validationSchema}\n      inputs={inputs}\n      onSubmit={onSubmit}\n      error={error} />\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))}p.isMDXComponent=!0}}]);