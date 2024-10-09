"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[2896],{3299:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(y,i(i({ref:n},s),{},{components:t})):a.createElement(y,i({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(8168),r=(t(6540),t(3299));const o={},i="Use your own components library",l={unversionedId:"guides/componentlibrary/overview",id:"version-1.0/guides/componentlibrary/overview",title:"Use your own components library",description:"Create your own components library",source:"@site/versioned_docs/version-1.0/guides/2.componentlibrary/0.overview.md",sourceDirName:"guides/2.componentlibrary",slug:"/guides/componentlibrary/overview",permalink:"/documentation/docs/guides/componentlibrary/overview",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/guides/2.componentlibrary/0.overview.md",tags:[],version:"1.0",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Component library",permalink:"/documentation/docs/category/component-library"},next:{title:"Inline function",permalink:"/documentation/docs/guides/componentlibrary/inline"}},u={},p=[{value:"Create your own components library",id:"create-your-own-components-library",level:2},{value:"Structure",id:"structure",level:3},{value:"<code>index.js</code>",id:"indexjs",level:3},{value:"<em>Input</em> component",id:"input-component",level:3},{value:"<em>Checkbox</em> component",id:"checkbox-component",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2}],s={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"use-your-own-components-library"},"Use your own components library"),(0,r.yg)("h2",{id:"create-your-own-components-library"},"Create your own components library"),(0,r.yg)("p",null,"A Formulaik ",(0,r.yg)("a",{parentName:"p",href:"../../concepts/terms#component-library"},"component library")," is a set of Formulaik compatible inputs each with a unique key.\nFormulaik's strength lies in the modularity of the components library.\nYou can quickly switch from one component to the other by referring different component libraries."),(0,r.yg)("p",null,"In this guide we will create a local component library for the ",(0,r.yg)("inlineCode",{parentName:"p"},"input"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"inputPassword"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"submit")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"checkbox")," components."),(0,r.yg)("h3",{id:"structure"},"Structure"),(0,r.yg)("p",null,"A component library is basically a function that returns a component when given a key (the ",(0,r.yg)("inlineCode",{parentName:"p"},"component")," part of an ",(0,r.yg)("inlineCode",{parentName:"p"},"input"),").\nWe will use the recommended structure in this tutorial:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 formulaik-local-library\n\u2502   \u251c\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 input\n\u2502   \u251c\u2500\u2500\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 inputPassword\n\u2502   \u251c\u2500\u2500\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 submit\n\u2502   \u251c\u2500\u2500\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 checkbox\n\u2502   \u251c\u2500\u2500\u2500\u2500 index.js\n")),(0,r.yg)("p",null,"An input component is standardized, it follows the ",(0,r.yg)("a",{parentName:"p",href:"./inputcomponent"},"input interface api")),(0,r.yg)("h3",{id:"indexjs"},(0,r.yg)("inlineCode",{parentName:"h3"},"index.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import Input from './input'\nimport Submit from './submit'\nimport Checkbox from './checkbox'\nimport InputPassword from './inputPassword'\n\nexport default (props) => {\n  const { type } = props\n  switch (type) {\n    case 'input':\n      return Input  \n    case 'inputPassword':\n      return InputPassword\n    case 'submit':\n      return Submit    \n    case 'checkbox':\n      return Checkbox    \n    default:\n      return null\n  }\n}\n")),(0,r.yg)("h3",{id:"input-component"},(0,r.yg)("em",{parentName:"h3"},"Input")," component"),(0,r.yg)("p",null,"This component is the default one line text input component."),(0,r.yg)("p",null,"At path: ",(0,r.yg)("inlineCode",{parentName:"p"},"input/index.js"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import { useCallback, useEffect, useState, } from 'react'\nimport TextField from '@mui/material/TextField'\nimport { useDebouncedCallback } from 'use-debounce'\n\nexport default (props) => {\n  const {\n    value,\n    error,\n    disabled,\n    onValueChanged,\n    item: {\n      layoutMode = 'form',\n      label,\n      params = {},\n      id }\n  } = props\n\n  const {\n    placeholder,\n    inputDelay = 1000,\n    className = '',\n    multiline = true,\n    inputPropsStyle = {},\n    inputLabelPropsStyle = {},\n    variant = \"outlined\" } = params\n\n  const [innerValue, setInnerValue] = useState(value ? value : '')\n\n  useEffect(() => {\n    setInnerValue(value ? value : '')\n  }, [value])\n\n  const debouncedHandleOnChange = useDebouncedCallback(\n    (event) => {\n      const value = event.target.value\n      onValueChanged(value)\n      console.log('textArea debouncedHandleOnChange', value)\n    },\n    inputDelay\n  )\n\n  const handleOnChange = useCallback((event) => {\n    event.persist()\n    const newValue = event.target.value\n    setInnerValue(newValue)\n    debouncedHandleOnChange(event)\n    console.log('textArea handleOnChange', value)\n  }, [])\n\n  const layoutModeProps = () => {\n    switch (layoutMode) {\n      default:\n      case 'form': {\n        return {\n\n        }\n      }\n      case 'inline': {\n        return {\n          variant: \"standard\",\n        }\n      }\n    }\n  }\n\n  return <TextField\n    variant={variant}\n    fullWidth\n    disabled={props.disabled}\n    inputProps={{\n      style: {\n        ...inputPropsStyle,\n      }\n    }}\n    InputLabelProps={{ style: inputLabelPropsStyle }}\n    value={innerValue}\n    multiline={multiline}\n    className={`transition-all ease-in-out duration-1000 ${error ? 'bg-red-50' : ''} ${className}`} \n    onChange={handleOnChange}\n    {...layoutModeProps()}\n    {...params}\n  />\n}\n")),(0,r.yg)("p",null,"This component adapts a Google Material UI (Mui) Text input to Formulaik."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It forwards the ",(0,r.yg)("inlineCode",{parentName:"li"},"disabled")," state to the Mui component"),(0,r.yg)("li",{parentName:"ul"},"It forwards the rest of the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," the Mui component for a pass-through customization"),(0,r.yg)("li",{parentName:"ul"},"It binds the current ",(0,r.yg)("inlineCode",{parentName:"li"},"value")," the Mui component prop ",(0,r.yg)("inlineCode",{parentName:"li"},"checked")),(0,r.yg)("li",{parentName:"ul"},"It binds the Formulaik provided ",(0,r.yg)("inlineCode",{parentName:"li"},"onValueChanged")," to the Mui component prop ",(0,r.yg)("inlineCode",{parentName:"li"},"onChange")," and debounces it")),(0,r.yg)("h3",{id:"checkbox-component"},(0,r.yg)("em",{parentName:"h3"},"Checkbox")," component"),(0,r.yg)("p",null,"At path: ",(0,r.yg)("inlineCode",{parentName:"p"},"checkbox/index.js"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport FormControlLabel from '@mui/material/FormControlLabel'\nimport Checkbox from '@mui/material/Checkbox'\n\nexport default (props) => {\n  const { \n    onValueChanged, \n    disabled,\n    readOnly,\n    value, \n    item: { \n        label, \n        id, \n        params \n        }} = props\n\n\n  return <div className=\"\">\n    <FormControlLabel control={\n      <Checkbox\n        color=\"default\"\n        disabled={disabled}\n        readOnly={readOnly}\n        {...params}\n        checked={value}\n        onChange={({ target: { checked } }) => {\n          onValueChanged(checked)\n        }}\n      />}\n      label={params.label ? params.label : label} />\n  </div>\n}\n")),(0,r.yg)("p",null,"This component adapts a Google Material UI (Mui) Switch input to Formulaik.\nIt is available as a free community components library on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/formulaik-community/formulaik-mui-react"},"Github"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It forwards the ",(0,r.yg)("inlineCode",{parentName:"li"},"disabled")," and the ",(0,r.yg)("inlineCode",{parentName:"li"},"readOnly")," states to the Mui component"),(0,r.yg)("li",{parentName:"ul"},"It forwards the rest of the ",(0,r.yg)("inlineCode",{parentName:"li"},"params")," the Mui component for a pass-through customization"),(0,r.yg)("li",{parentName:"ul"},"It binds the current ",(0,r.yg)("inlineCode",{parentName:"li"},"value")," the Mui component prop ",(0,r.yg)("inlineCode",{parentName:"li"},"checked")),(0,r.yg)("li",{parentName:"ul"},"It binds the Formulaik provided ",(0,r.yg)("inlineCode",{parentName:"li"},"onValueChanged")," to the Mui component prop ",(0,r.yg)("inlineCode",{parentName:"li"},"onChange"),"\nBy doing these simple bindings and forwarding, this component has now a minimal Formulaik compatibility and can be used on any Formulaik form that references a component library that includes this component.")),(0,r.yg)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import Formulaik from '@formulaik/react'\nimport FormulaikMui from '@formulaik-community/react-mui'\nimport FormulaikLocal from 'components/formulaik-local-library'\n\nexport default (props) => {\n  \n  const inputs = [\n  {\n    component: 'input',\n    id: 'email',\n    label: 'Email',\n    type: \"string\",\n    params: {        \n      placeholder: \"email@domain.com\"\n    },\n    validations: [\n      {\n        kind: \"format\",\n        value: \"email\",\n        message: 'Invalid email format',\n      },\n      {\n        kind: \"required\",\n        value: true,\n        message: \"This field can't be blank\",\n      },\n    ],\n  },\n  {\n    component: 'inputPassword',\n    label: 'Password',\n    id: 'password',\n    type: \"string\",\n    params: {\n      autoComplete: \"current-password\",\n      placeholder: \"xxxx-xxxx-xxxx\"\n    },\n    validations: [\n      {\n        kind: \"required\",\n        value: true,\n        message: \"This field can't be blank\",\n      },\n      {\n        kind: \"matches\",\n        value: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,\n        message: 'Invalid password, must contain at least 8 characters and at most 18 characters',\n      },\n    ]\n  },\n  {\n      component: 'checkbox',        \n      id: 'rememberMe',\n      type: \"boolean\",\n      params: {\n          label: 'Remember me',\n      }\n  },\n  {\n    component: 'submit',\n    id: 'submit',\n    params: {\n      text: 'Continue'\n    }\n  },]\n\n const onSubmit = async (values) => {\n    const { email, password } = values\n    try { \n      await myapi.submit({ email, password })\n    }\n    catch(e) {\n      throw (new Error('Could not sign in: ', e.message))\n    }\n    return { message: t(\"Email validated\") }  \n  }\n\n  return <>      \n      <h3>Login</h3>            \n      <Formulaik\n        components={[FormulaikLocal, FormulaikMui]}\n        values={values}        \n        inputs={inputs}\n        onSubmit={onSubmit}\n         />      \n    </>\n}\n\n")),(0,r.yg)("p",null,"We give a few props to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Formulaik")," component:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"components={[FormulaikLocal, FormulaikMui]}"),": a list of component libraries to pick the input components from. The order is important as Formulaik picks the first occurence it finds when searching libraries."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"values={values}"),":  Formulaik the default values "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"inputs={inputs}"),": the inputs list"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"onSubmit={onSubmit}"),": the submission handler")),(0,r.yg)("p",null,"Voil\xe0."))}c.isMDXComponent=!0}}]);