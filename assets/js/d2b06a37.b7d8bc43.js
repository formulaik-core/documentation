"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[8240],{30124:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(45072),o=(n(11504),n(95788)),a=n(51944),t=n.n(a);const s={sidebar_position:1},c="Config",l={unversionedId:"reference/config",id:"reference/config",title:"Config",description:"- Location `/formulaik.config.js`",source:"@site/docs/reference/config.mdx",sourceDirName:"reference",slug:"/reference/config",permalink:"/documentation/docs/next/reference/config",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/reference/config.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a Formulaik app",permalink:"/documentation/docs/next/reference/anatomy"},next:{title:"Formulaik",permalink:"/documentation/docs/next/reference/formulaik"}},m={},p=[{value:"Schema",id:"schema",level:3},{value:"Example",id:"example",level:3}],u={toc:p},d="wrapper";function f(e){let{components:i,...n}=e;return(0,o.yg)(d,(0,r.c)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"config"},"Config"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Location ",(0,o.yg)("inlineCode",{parentName:"li"},"/formulaik.config.js"))),(0,o.yg)("h3",{id:"schema"},"Schema"),(0,o.yg)(t(),{schema:{title:"Formulaik",type:"object",description:"",properties:{__formulaikApiVersion:{type:"string",description:"Semver value of compatible Formulaik versions."},name:{type:"string",description:"CLI name (actual bin value)"},epilog:{type:"string",description:"CLI epilog"},usage:{type:"string",description:"Usage description"},extensions:{type:"array",description:"Extension list"}},required:["__formulaikApiVersion","name"]},mdxType:"JSONSchemaViewer"}),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},'export default ({\n  __formulaikApiVersion: "1.0.0",\n  name: "@servable/cli",\n  usage: "servable <command>",\n  epilog: "Made by servable",\n  extensions: [\n    "@formulaik/chunks-extension"\n  ]\n})\n')))}f.isMDXComponent=!0}}]);