"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[8504],{95788:(e,a,r)=>{r.d(a,{Iu:()=>d,yg:()=>y});var t=r(11504);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),u=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},d=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return r?t.createElement(y,o(o({ref:a},d),{},{components:r})):t.createElement(y,o({ref:a},d))}));function y(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46816:(e,a,r)=>{r.d(a,{c:()=>p});var t=r(45072),n=r(11504);const l=e=>{const{data:a}=e,{header:r,rows:t}=a;return n.createElement("table",null,n.createElement("thead",null,r.columns.map((e=>n.createElement("td",{key:e.id,className:"font-bold text-center"}," ",e.label," ")))),n.createElement("tbody",null,t.map((e=>n.createElement("tr",{key:e.id},e.columns.map((e=>n.createElement("td",{key:e.id,className:""},e.value))))))))},o=function(e){void 0===e&&(e={});const{name:a,url:r}=e;return n.createElement("div",{className:"           bg-slate-100 border border-customc-main                      rounded-lg           px-0 py-0        text-center      anakcss-affordance-base                               "},n.createElement("span",{className:"                                             "},`${a}`))},i=function(e){void 0===e&&(e={});const{name:a,url:r,tooltip:t}=e;return n.createElement("div",{className:" has-tooltip                                 "},t&&n.createElement("span",{className:"\n                tooltip\n                bg-slate-600\n                text-slate-100\n                rounded-full\n                shadow-lg \n                px-4 \n                p-2  \n                -mt-12\n                anakcss-affordance-base       \n            "},t),n.createElement("a",{href:`${r}`,className:" anakcss-affordance-base           hover:text-customc-main           no-underline  decoration-customc-main                                                  "},n.createElement("span",{className:"                                                         hover:text-customc-main                                 "},`${a}`)))},s=e=>{let{data:a,types:r}=e;const{header:t,rows:l}=a;let s=l.map((e=>{const{columns:a}=e,t=a.map(((e,a)=>{if(!e)return{id:a,value:n.createElement("span",null)};if("string"===typeof e)return{id:a,value:e};{const{type:t}=e;switch(t){case"boolean":return{id:a,value:n.createElement(o,{name:e.value?"True":"False"})};case"values":return{id:a,value:e.value.map((e=>n.createElement(o,{name:e})))};case"element":{const r=e.value;return{id:a,value:n.createElement(r,null)}}case"type":{const{value:t}=e;let l=r.items.filter((e=>e.id===t));if(!l||!l.length)break;l=l[0];const o=`${l.path}`,{mode:s}=e;let u=l.name;if("array"===s)u=`[${l.name}]`;return{id:a,value:n.createElement(i,{name:u,url:o,tooltip:l.description})}}}}return e}));return{...e,columns:t}}));return s=s.filter((e=>e)),{header:t,rows:s}},u=e=>e.filter(((a,r)=>e.indexOf(a)===r)),d=e=>{let{data:a,types:r,isPlain:t}=e;if(t)return s({data:a,types:r});const n=(e=>{let{data:a}=e;const{header:r,rows:t}=a;let n=[];return t.forEach((e=>{const a=Object.keys(e);n=n.concat(a)})),n=u(n),{header:r,rows:t.map(((e,r)=>({columns:a.header.columns.map((a=>{const{id:r}=a;return e[r]}))})))}})({data:a});return s({data:n,types:r})},p=e=>{const a=d({data:e.data,types:e.types,isPlain:e.isPlain});return n.createElement(l,(0,t.c)({},e,{data:a}))}},95820:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(45072),n=(r(11504),r(95788)),l=r(46816);const o={sidebar_position:3},i="Transformer",s={unversionedId:"reference/transformer",id:"version-1.0/reference/transformer",title:"Transformer",description:"Data structure & behavior",source:"@site/versioned_docs/version-1.0/reference/transformer.mdx",sourceDirName:"reference",slug:"/reference/transformer",permalink:"/documentation/docs/reference/transformer",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/reference/transformer.mdx",tags:[],version:"1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Validator",permalink:"/documentation/docs/reference/validator"},next:{title:"Side Effect",permalink:"/documentation/docs/reference/sideeffect"}},u={},d=[{value:"Data structure &amp; behavior",id:"data-structure--behavior",level:2},{value:"In",id:"in",level:4},{value:"Out",id:"out",level:4},{value:"Display",id:"display",level:4},{value:"Create",id:"create",level:2},{value:"Use",id:"use",level:2},{value:"File based",id:"file-based",level:3},{value:"Inline",id:"inline",level:3},{value:"Template",id:"template",level:3}],p={toc:d},c="wrapper";function m(e){let{components:a,...r}=e;return(0,n.yg)(c,(0,t.c)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"transformer"},"Transformer"),(0,n.yg)("h2",{id:"data-structure--behavior"},"Data structure & behavior"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A transformer can either be a display, in or out"),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("i",null,"transformers")," entry holds the information for these three types of transformation"),(0,n.yg)("li",{parentName:"ul"},"A display, in or out is an array of transformers"),(0,n.yg)("li",{parentName:"ul"},"The transformers will be called sequentially as per their order in the array")),(0,n.yg)("p",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},' transformers: {\n    display: ["capitalizeFirstLetter"],\n    in: ["capitalizeFirstLetter"]\n    out: [\n        "capitalizeFirstLetter",\n        {\n          template: `<%= destination %>/<%= featureId %>`\n        }\n    ]\n  }\n')),(0,n.yg)("h4",{id:"in"},"In"),(0,n.yg)("p",null,"An In transformer is applied to a value before it is presented to the inquirer."),(0,n.yg)("h4",{id:"out"},"Out"),(0,n.yg)("p",null,"An Out transformer is applied to a value after it is presented to the inquirer and filled by the user."),(0,n.yg)("h4",{id:"display"},"Display"),(0,n.yg)("p",null,"A Display transformer is applied to a value only for display formatting."),(0,n.yg)("h2",{id:"create"},"Create"),(0,n.yg)("p",null,"Create a project wide transformer in the form of a _cliNext file in ",(0,n.yg)("b",null,"src/transformers/{in|out|display}"),"."),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"},{id:"acceptedValues",label:"Accepted values"},{id:"example",label:"Example"}]},rows:[{parameter:"_formulaikType",type:"string",description:"Formulaik module type",defaultValue:"transformer",mandatory:{type:"boolean",value:!0},acceptedValues:{type:"values",value:["transformer"]}},{parameter:"position",type:"string",description:"The type of transformer. Can be in, out or display",defaultValue:"transformer",mandatory:{type:"boolean",value:!0},acceptedValues:{type:"values",value:["in","out","display"]}},{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"handler",type:"function",description:"The handler function.",defaultValue:"{}",mandatory:{type:"boolean",value:!1},example:{type:"element",value:()=>(0,n.yg)("bloc",null,"handler: async ({ input, }) => {\n                        return capitalizeFirstLetter(input)\n                    }")}}]},mdxType:"ReferenceTable"}),(0,n.yg)("h2",{id:"use"},"Use"),(0,n.yg)("p",null,"You can declare a transformer in three different ways"),(0,n.yg)("h3",{id:"file-based"},"File based"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Quick configuration"),"\nYou can pass the id of the transformer in the corresponding section of the ",(0,n.yg)("i",null,"transformers")," section."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    out: ['myOutTransformerId']\n  }\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"}," Advanced "),"\nYou can pass the id of the transformer in the corresponding section of the ",(0,n.yg)("i",null,"transformers")," section."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    display: [{\n      id: 'myDisplayTransformerId',\n      params: {\n        myParam1: true\n      }\n    }]\n  }\n")),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("p",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    display: [{\n      id: 'isFolderEmpty',\n      params: {\n        excludeHiddenFiles: true\n      }\n    }]\n  }\n")),(0,n.yg)("h3",{id:"inline"},"Inline"),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("i",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"}," transformers: {\n    out: ['myOutTransformerId']\n  }\n")),(0,n.yg)("h3",{id:"template"},"Template"),(0,n.yg)(l.c,{types:{},data:{header:{columns:[{id:"parameter",label:"Parameter"},{id:"type",label:"Type"},{id:"description",label:"Description"},{id:"defaultValue",label:"Default value"},{id:"mandatory",label:"Mandatory"}]},rows:[{parameter:"id",type:"string",description:"Transformer id",defaultValue:"",mandatory:{type:"boolean",value:!0}},{parameter:"params",type:"object",description:"Transformer payload",defaultValue:"{}",mandatory:{type:"boolean",value:!1}}]},mdxType:"ReferenceTable"}),(0,n.yg)("i",null,"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"transformers: {\n    out: [{\n        template: `<%= destination %>/<%= featureId %>`\n    }]\n}\n")))}m.isMDXComponent=!0}}]);