"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[7574],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35516:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const o={sidebar_position:2},l="Usage",i={unversionedId:"gettingstarted/react/usage",id:"gettingstarted/react/usage",title:"Usage",description:"Create a components library",source:"@site/docs/gettingstarted/react/usage.mdx",sourceDirName:"gettingstarted/react",slug:"/gettingstarted/react/usage",permalink:"/documentation/docs/next/gettingstarted/react/usage",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/gettingstarted/react/usage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/documentation/docs/next/gettingstarted/react/installation"},next:{title:"Troubleshooting \ud83d\udc1e",permalink:"/documentation/docs/next/gettingstarted/react/troubleshooting"}},s={},u=[{value:"Create a components library",id:"create-a-components-library",level:2},{value:"index.js",id:"indexjs",level:3},{value:"Create input components",id:"create-input-components",level:3},{value:"Build the form",id:"build-the-form",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"usage"},"Usage"),(0,r.yg)("h2",{id:"create-a-components-library"},"Create a components library"),(0,r.yg)("p",null,"We will put our components in a folder and return the appropriate input by calling the default function in ",(0,r.yg)("inlineCode",{parentName:"p"},"index.js"),".\nFor example we will name our folder ",(0,r.yg)("inlineCode",{parentName:"p"},"components/formulaik-library"),"."),(0,r.yg)("h3",{id:"indexjs"},"index.js"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import input from './input'\nimport inputPassword from './inputPassword'\nimport submit from './submit'\n\nexport default (props) => {\n    const { type } = props\n    switch (type) {\n        case 'input':\n            return input                \n        case 'inputPassword':\n            return inputPassword                \n        case 'submit':\n            return submit                \n        default:\n            return null;\n    }\n}\n")),(0,r.yg)("h3",{id:"create-input-components"},"Create input components"),(0,r.yg)("p",null,"An input component is standardized, it follows the ",(0,r.yg)("a",{parentName:"p",href:"../../reference/input"},"input interface api")),(0,r.yg)("p",null,"Text input: *",(0,r.yg)("em",{parentName:"p"},"/input/index.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { useCallback, useEffect, useState, } from 'react'\nimport TextField from '@mui/material/TextField'\nimport { useDebouncedCallback } from 'use-debounce'\n\nexport default (props) => {\n  const {\n    value,\n    error,\n    disabled,\n    onValueChanged,\n    item: {\n      layoutMode = 'form',\n      label,\n      params = {},\n      id }\n  } = props\n\n  const {\n    placeholder,\n    inputDelay = 1000,\n    className = '',\n    multiline = true,\n    inputPropsStyle = {},\n    inputLabelPropsStyle = {},\n    variant = \"outlined\" } = params\n\n  const [innerValue, setInnerValue] = useState(value ? value : '')\n\n  useEffect(() => {\n    setInnerValue(value ? value : '')\n  }, [value])\n\n  const debouncedHandleOnChange = useDebouncedCallback(\n    (event) => {\n      const value = event.target.value\n      onValueChanged(value)\n      console.log('textArea debouncedHandleOnChange', value)\n    },\n    inputDelay\n  )\n\n  const handleOnChange = useCallback((event) => {\n    event.persist()\n    const newValue = event.target.value\n    setInnerValue(newValue)\n    debouncedHandleOnChange(event)\n    console.log('textArea handleOnChange', value)\n  }, [])\n\n  const layoutModeProps = () => {\n    switch (layoutMode) {\n      default:\n      case 'form': {\n        return {\n\n        }\n      }\n      case 'inline': {\n        return {\n          variant: \"standard\",\n        }\n      }\n    }\n  }\n\n  const layoutModeClassName = () => {\n    switch (layoutMode) {\n      default:\n      case 'form': {\n        return `\n          `\n      }\n      case 'inline': {\n        return `                    \n            `\n      }\n    }\n  }\n\n  const onBlur = () => {\n    console.log('onblur')\n  }\n\n  return <TextField\n    variant={variant}\n    fullWidth\n    disabled={props.disabled}\n    inputProps={{\n      style: {\n        ...inputPropsStyle,\n      }\n    }}\n    InputLabelProps={{ style: inputLabelPropsStyle }}\n    value={innerValue}\n    multiline={multiline}\n    className={`transition-all ease-in-out duration-1000 ${error ? 'bg-red-50' : ''}\n    ${className}    \n    ${layoutModeClassName()}`}\n    onBlur={onBlur}\n    onChange={handleOnChange}\n    {...layoutModeProps()}\n    {...params}\n  />\n}\n")),(0,r.yg)("h2",{id:"build-the-form"},"Build the form"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\nimport Formulaik from '@formulaik/react'\nimport FormulaikLocal from 'components/formulaik-library'\nimport * as Yup from 'yup'\n\nconst inputs = [\n  {\n    type: 'input',\n    schema: 'email',\n    id: 'email',\n    label: 'Email',\n    params: {\n      type: 'email',\n      placeholder: \"email@domain.com\"\n    }\n  },\n  {\n    type: 'inputPassword',\n    schema: 'password',\n    label: 'Password',\n    id: 'password',\n    params: {\n      type: 'password',\n      autoComplete: \"current-password\",\n      placeholder: \"xxxx-xxxx-xxxx\"\n    }\n  },\n  {\n    type: 'submit',\n    params: {\n      text: 'Continue'\n    }\n  },\n]\n\nconst validationSchema = Yup.object().shape({\n  email: Yup.string()\n    .email('Invalid email format')\n    .required(\"This field can't be blank\"),\n  password: Yup.string()\n    .required(\"This field can't be blank\")\n    .min(7, 'Must contain at least 8 characters')\n    .max(18, 'Must contain at most 18 characters')\n    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')\n})\n\nexport default (props) => {\n  const [error, setError] = useState(null)\n\n  const onSubmit = async (values, { setSubmitting }) => {\n    try {\n      const { email, password } = values\n      //... do login\n      setError(null)      \n    } catch (e) {\n      console.log(e)\n      setError(e)\n    }\n\n    setSubmitting(false)\n  }\n\n  const values = {\n\n  }\n\n  return <div>      \n      <h1>Login</h1>            \n      <Formulaik\n        components={[FormulaikLocal,]}\n        values={values}\n        validationSchema={validationSchema}\n        inputs={inputs}\n        onSubmit={onSubmit}\n        error={error} />      \n    </div>\n}\n")))}d.isMDXComponent=!0}}]);