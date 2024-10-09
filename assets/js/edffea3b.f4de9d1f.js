"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[3145],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={sidebar_position:3},o="Samples",s={unversionedId:"guides/samples",id:"version-1.0/guides/samples",title:"Samples",description:"Verify email",source:"@site/versioned_docs/version-1.0/guides/samples.mdx",sourceDirName:"guides",slug:"/guides/samples",permalink:"/documentation/docs/guides/samples",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/samples.mdx",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Input array",permalink:"/documentation/docs/guides/array"},next:{title:"Advanced",permalink:"/documentation/docs/category/advanced"}},l={},c=[{value:"Verify email",id:"verify-email",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"samples"},"Samples"),(0,a.yg)("h3",{id:"verify-email"},"Verify email"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"import Formulaik from '@formulaik/react'\nimport FormulaikMui from '@formulaik-community/react-mui'\nimport * as Yup from 'yup'\n\nexport default (props) => {\n  const onSubmit = async (values, { setSubmitting }) => {    \n    const { code, } = values\n\n    setSubmitting(false)\n  }\n\n  const inputs = [\n    {\n      component: 'input',\n      schema: 'code',\n      id: 'code',\n      label: 'Code',\n    },\n    {\n      type: 'submit',\n      id: 'submit',\n      value: t('Validate'),\n    },\n  ]\n\n  const values = {\n\n  }\n\n  const validationSchema = Yup.object().shape({\n    code: Yup.string()\n        .max(20, 'Too Long!')\n        .required(VALIDATION_BLANK_TEXT),\n    })\n\n  return <div>    \n    <h3>Verify email</h3>                \n    <Formulaik\n      components={[FormulaikMui]}\n      values={values}\n      validationSchema={validationSchema}\n      inputs={inputs}\n      onSubmit={onSubmit}\n      error={error} />\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))}m.isMDXComponent=!0}}]);