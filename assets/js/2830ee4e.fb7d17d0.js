"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[884],{95788:(e,a,t)=>{t.d(a,{Iu:()=>d,yg:()=>f});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return t?r.createElement(f,o(o({ref:a},d),{},{components:t})):r.createElement(f,o({ref:a},d))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46816:(e,a,t)=>{t.d(a,{c:()=>p});var r=t(45072),n=t(11504);const l=e=>{const{data:a}=e,{header:t,rows:r}=a;return n.createElement("table",null,n.createElement("thead",null,t.columns.map((e=>n.createElement("td",{key:e.id,className:"font-bold text-center"}," ",e.label," ")))),n.createElement("tbody",null,r.map((e=>n.createElement("tr",{key:e.id},e.columns.map((e=>n.createElement("td",{key:e.id,className:""},e.value))))))))},o=function(e){void 0===e&&(e={});const{name:a,url:t}=e;return n.createElement("div",{className:"           bg-slate-100 border border-customc-main                      rounded-lg           px-0 py-0        text-center      anakcss-affordance-base                               "},n.createElement("span",{className:"                                             "},`${a}`))},i=function(e){void 0===e&&(e={});const{name:a,url:t,tooltip:r}=e;return n.createElement("div",{className:" has-tooltip                                 "},r&&n.createElement("span",{className:"\n                tooltip\n                bg-slate-600\n                text-slate-100\n                rounded-full\n                shadow-lg \n                px-4 \n                p-2  \n                -mt-12\n                anakcss-affordance-base       \n            "},r),n.createElement("a",{href:`${t}`,className:" anakcss-affordance-base           hover:text-customc-main           no-underline  decoration-customc-main                                                  "},n.createElement("span",{className:"                                                         hover:text-customc-main                                 "},`${a}`)))},s=e=>{let{data:a,types:t}=e;const{header:r,rows:l}=a;let s=l.map((e=>{const{columns:a}=e,r=a.map(((e,a)=>{if(!e)return{id:a,value:n.createElement("span",null)};if("string"===typeof e)return{id:a,value:e};{const{type:r}=e;switch(r){case"boolean":return{id:a,value:n.createElement(o,{name:e.value?"True":"False"})};case"values":return{id:a,value:e.value.map((e=>n.createElement(o,{name:e})))};case"element":{const t=e.value;return{id:a,value:n.createElement(t,null)}}case"type":{const{value:r}=e;let l=t.items.filter((e=>e.id===r));if(!l||!l.length)break;l=l[0];const o=`${l.path}`,{mode:s}=e;let c=l.name;if("array"===s)c=`[${l.name}]`;return{id:a,value:n.createElement(i,{name:c,url:o,tooltip:l.description})}}}}return e}));return{...e,columns:r}}));return s=s.filter((e=>e)),{header:r,rows:s}},c=e=>e.filter(((a,t)=>e.indexOf(a)===t)),d=e=>{let{data:a,types:t,isPlain:r}=e;if(r)return s({data:a,types:t});const n=(e=>{let{data:a}=e;const{header:t,rows:r}=a;let n=[];return r.forEach((e=>{const a=Object.keys(e);n=n.concat(a)})),n=c(n),{header:t,rows:r.map(((e,t)=>({columns:a.header.columns.map((a=>{const{id:t}=a;return e[t]}))})))}})({data:a});return s({data:n,types:t})},p=e=>{const a=d({data:e.data,types:e.types,isPlain:e.isPlain});return n.createElement(l,(0,r.c)({},e,{data:a}))}},94016:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(45072),n=(t(11504),t(95788)),l=t(46816);const o={sidebar_position:4},i="Side Effect",s={unversionedId:"reference/sideeffect",id:"reference/sideeffect",title:"Side Effect",description:"Data structure & behavior",source:"@site/docs/reference/sideeffect.mdx",sourceDirName:"reference",slug:"/reference/sideeffect",permalink:"/documentation/docs/next/reference/sideeffect",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/reference/sideeffect.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Transformer",permalink:"/documentation/docs/next/reference/transformer"},next:{title:"Packages",permalink:"/documentation/docs/next/reference/packages"}},c={},d=[{value:"Data structure &amp; behavior",id:"data-structure--behavior",level:2},{value:"Create a side effect",id:"create-a-side-effect",level:2},{value:"Use",id:"use",level:2},{value:"File based",id:"file-based",level:3},{value:"Inline",id:"inline",level:3},{value:"Template",id:"template",level:3}],p={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"side-effect"},"Side Effect"),(0,n.yg)("h2",{id:"data-structure--behavior"},"Data structure & behavior"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A side effect can be used at any step to change an object (usually the Formulaik payload) as a side effect of the step itself."),(0,n.yg)("li",{parentName:"ul"},"A side effect can be applied following a template"),(0,n.yg)("li",{parentName:"ul"},"A side effect can be applied barring conditions "),(0,n.yg)("li",{parentName:"ul"},"The side effects will be called sequentially as per their order in the array")),(0,n.yg)("p",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'"sideEffects": [\n    {\n    "position": "after",\n    "type": "payload",\n    "name": "databaseURI",\n    "template": "mongodb://root:DATABASE_PASSWORD_TO_CHANGE@localhost:<%= appDatabasePort %>/app?authSource=admin&readPreference=primary&ssl=false",\n    "conditions": [\n        {\n            "name": "appDatabaseType",\n            "operator": "=",\n            "operand": "mongodb"\n        }\n    ]\n    }\n]\n')),(0,n.yg)("h2",{id:"create-a-side-effect"},"Create a side effect"),(0,n.yg)("p",null,"Create a project-wide side effect in the form of a _cliNext file in ",(0,n.yg)("b",null,"src/sideeffects"),"."),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"},{id:"acceptedValues",label:"Accepted values"},{id:"example",label:"Example"}]},rows:[{parameter:"_formulaikType",type:"string",description:"Formulaik module type",defaultValue:"transformer",mandatory:{type:"boolean",value:!0},acceptedValues:{type:"values",value:["transformer"]}},{parameter:"position",type:"string",description:"The type of transformer. Can be in, out or display",defaultValue:"transformer",mandatory:{type:"boolean",value:!0},acceptedValues:{type:"values",value:["in","out","display"]}},{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"handler",type:"function",description:"The handler function.",defaultValue:"{}",mandatory:{type:"boolean",value:!1},example:{type:"element",value:()=>(0,n.yg)("bloc",null,"handler: async ({ input, }) => {\n                        return capitalizeFirstLetter(input)\n                    }")}}]},mdxType:"ReferenceTable"}),(0,n.yg)("h2",{id:"use"},"Use"),(0,n.yg)("h3",{id:"file-based"},"File based"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Quick configuration"),"\nYou can pass the id of the transformer in the corresponding section of the ",(0,n.yg)("i",null,"transformers")," section."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},' sideeffects: ["mysideeffect"]\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"}," Advanced "),"\nYou can pass the id of the transformer in the corresponding section of the ",(0,n.yg)("i",null,"transformers")," section."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},' sideeffects: [{\n    id: "mySideEffect",\n    params: {}\n }]\n')),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("p",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"")),(0,n.yg)("h3",{id:"inline"},"Inline"),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("i",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    out: ['myOutTransformerId']\n  }\n")),(0,n.yg)("h3",{id:"template"},"Template"),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("i",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"transformers: {\n    out: [{\n        template: `<%= destination %>/<%= featureId %>`\n    }]\n}\n")))}m.isMDXComponent=!0}}]);