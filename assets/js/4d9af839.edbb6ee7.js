"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[7544],{95788:(M,D,A)=>{A.d(D,{Iu:()=>w,yg:()=>L});var O=A(11504);function I(M,D,A){return D in M?Object.defineProperty(M,D,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[D]=A,M}function T(M,D){var A=Object.keys(M);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(M);D&&(O=O.filter((function(D){return Object.getOwnPropertyDescriptor(M,D).enumerable}))),A.push.apply(A,O)}return A}function g(M){for(var D=1;D<arguments.length;D++){var A=null!=arguments[D]?arguments[D]:{};D%2?T(Object(A),!0).forEach((function(D){I(M,D,A[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(A)):T(Object(A)).forEach((function(D){Object.defineProperty(M,D,Object.getOwnPropertyDescriptor(A,D))}))}return M}function N(M,D){if(null==M)return{};var A,O,I=function(M,D){if(null==M)return{};var A,O,I={},T=Object.keys(M);for(O=0;O<T.length;O++)A=T[O],D.indexOf(A)>=0||(I[A]=M[A]);return I}(M,D);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(M);for(O=0;O<T.length;O++)A=T[O],D.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(M,A)&&(I[A]=M[A])}return I}var j=O.createContext({}),k=function(M){var D=O.useContext(j),A=D;return M&&(A="function"==typeof M?M(D):g(g({},D),M)),A},w=function(M){var D=k(M.components);return O.createElement(j.Provider,{value:D},M.children)},u="mdxType",y={inlineCode:"code",wrapper:function(M){var D=M.children;return O.createElement(O.Fragment,{},D)}},z=O.forwardRef((function(M,D){var A=M.components,I=M.mdxType,T=M.originalType,j=M.parentName,w=N(M,["components","mdxType","originalType","parentName"]),u=k(A),z=I,L=u["".concat(j,".").concat(z)]||u[z]||y[z]||T;return A?O.createElement(L,g(g({ref:D},w),{},{components:A})):O.createElement(L,g({ref:D},w))}));function L(M,D){var A=arguments,I=D&&D.mdxType;if("string"==typeof M||I){var T=A.length,g=new Array(T);g[0]=z;var N={};for(var j in D)hasOwnProperty.call(D,j)&&(N[j]=D[j]);N.originalType=M,N[u]="string"==typeof M?M:I,g[1]=N;for(var k=2;k<T;k++)g[k]=A[k];return O.createElement.apply(null,g)}return O.createElement.apply(null,A)}z.displayName="MDXCreateElement"},36564:(M,D,A)=>{A.r(D),A.d(D,{assets:()=>j,contentTitle:()=>g,default:()=>y,frontMatter:()=>T,metadata:()=>N,toc:()=>k});var O=A(45072),I=(A(11504),A(95788));const T={sidebar_position:4},g="Deployment",N={unversionedId:"guides/deployment",id:"guides/deployment",title:"Deployment",description:"logo",source:"@site/docs/guides/deployment.mdx",sourceDirName:"guides",slug:"/guides/deployment",permalink:"/documentation/docs/next/guides/deployment",draft:!1,editUrl:"https://github.com/formulaik-core/generator-formulaik/tree/main/packages/create-docusaurus/templates/shared/docs/guides/deployment.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Anatomy of a Formulaik app",permalink:"/documentation/docs/next/guides/anatomy"},next:{title:"Tutorials",permalink:"/documentation/docs/next/category/tutorials"}},j={},k=[],w={toc:k},u="wrapper";function y(M){let{components:D,...T}=M;return(0,I.yg)(u,(0,O.c)({},w,T,{components:D,mdxType:"MDXLayout"}),(0,I.yg)("h1",{id:"deployment"},"Deployment"),(0,I.yg)("p",null,(0,I.yg)("img",{alt:"logo",src:A(61860).c,width:"52",height:"65"})))}y.isMDXComponent=!0},61860:(M,D,A)=>{A.d(D,{c:()=>O});const O="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgUGl4ZWxtYXRvciBQcm8gMy40LjMgLS0+Cjxzdmcgd2lkdGg9IjUyIiBoZWlnaHQ9IjY1IiB2aWV3Qm94PSIwIDAgNTIgNjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBpZD0iUGF0aCIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBkPSJNIDI3LjE1MDAwMiAyOS4wOTk5OTggQyAzMC42MTk5OTkgMjkuMDk5OTk4IDMzLjQ1MDAwMSAyNi4yNzk5OTkgMzMuNDUwMDAxIDIyLjgwOTk5OCBDIDMzLjQ1MDAwMSAxOS4zNCAzMC42MTk5OTkgMTYuNTIwMDA0IDI3LjE1MDAwMiAxNi41MjAwMDQgQyAyMy42OCAxNi41MjAwMDQgMjAuODYwMDAxIDE5LjM0IDIwLjg2MDAwMSAyMi44MDk5OTggQyAyMC44NjAwMDEgMjYuMjc5OTk5IDIzLjY4IDI5LjA5OTk5OCAyNy4xNTAwMDIgMjkuMDk5OTk4IFogTSAyNy4xNTAwMDIgMTguMDIgQyAyOS43OTk5OTkgMTguMDIgMzEuOTUwMDAxIDIwLjE2OTk5OCAzMS45NTAwMDEgMjIuODA5OTk4IEMgMzEuOTUwMDAxIDI1LjQ1MDAwMSAyOS43OTk5OTkgMjcuNTk5OTk4IDI3LjE1MDAwMiAyNy41OTk5OTggQyAyNC41MSAyNy41OTk5OTggMjIuMzYwMDAxIDI1LjQ1MDAwMSAyMi4zNjAwMDEgMjIuODA5OTk4IEMgMjIuMzYwMDAxIDIwLjE2OTk5OCAyNC41MSAxOC4wMiAyNy4xNTAwMDIgMTguMDIgWiIvPgogICAgPHBhdGggaWQ9InBhdGgxIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIGQ9Ik0gOC4xOSAzOC41NDk5OTkgTCAxNC43MyAzOC41NDk5OTkgQyAxNC43OTk5OTkgNDAuNjMwMDAxIDE2LjUgNDIuMzEwMDAxIDE4LjYgNDIuMzEwMDAxIEwgMTkuMDQwMDAxIDQyLjMxMDAwMSBMIDIxLjA0OTk5OSA0NS40OCBDIDIxLjYyMDAwMSA0Ni4zNjk5OTkgMjIuNTkgNDYuOTEgMjMuNjM5OTk5IDQ2LjkxIEwgMjkuOTcwMDAxIDQ2LjkxIEMgMzEuMDI5OTk5IDQ2LjkxIDMyIDQ2LjM4MDAwMSAzMi41NjAwMDEgNDUuNDggTCAzNC41NyA0Mi4zMTAwMDEgTCAzNS4wMDk5OTggNDIuMzEwMDAxIEMgMzcuMTEwMDAxIDQyLjMxMDAwMSAzOC44MTAwMDEgNDAuNjMwMDAxIDM4Ljg4MDAwMSAzOC41NDk5OTkgTCA0NS40MTk5OTggMzguNTQ5OTk5IEMgNDYuOTkwMDAyIDM4LjU0OTk5OSA0OC4yNTk5OTggMzcuMjc5OTk5IDQ4LjI1OTk5OCAzNS43MDk5OTkgTCA0OC4yNTk5OTggMzMuNDkwMDAyIEMgNDguMjU5OTk4IDMxLjE2OTk5OCA0Ny4yMDk5OTkgMjkuMDEwMDAyIDQ1LjM4OTk5OSAyNy41NyBMIDM4Ljg4OTk5OSAyMi40NTAwMDEgTCAzOC44ODk5OTkgMTguNTEwMDAyIEMgMzguODg5OTk5IDE2LjMwMDAwMyAzOC40OCAxNC4xNjAwMDQgMzcuNjY5OTk4IDEyLjE2OTk5OCBDIDM3LjY2OTk5OCAxMi4xNjk5OTggMzcuNjY5OTk4IDEyLjE2OTk5OCAzNy42Njk5OTggMTIuMTY5OTk4IEMgMzcuNjY5OTk4IDEyLjE2OTk5OCAzNy42Njk5OTggMTIuMTYwMDA0IDM3LjY2OTk5OCAxMi4xNjAwMDQgQyAzNy42Njk5OTggMTIuMTUwMDAyIDM3LjY2OTk5OCAxMi4xNTAwMDIgMzcuNjYgMTIuMTM5OTk5IEMgMzcuNjYgMTIuMTM5OTk5IDM3LjY2IDEyLjEzOTk5OSAzNy42NiAxMi4xMjk5OTcgQyAzNy41ODAwMDIgMTEuOTAwMDAyIDM3LjQ4IDExLjY2OTk5OCAzNy4zNjk5OTkgMTEuNDQ5OTk3IEMgMzcuMzQ5OTk4IDExLjQxOTk5OCAzNy4zMzAwMDIgMTEuNDAwMDAyIDM3LjMxMDAwMSAxMS4zNzAwMDMgQyAzNi4zNDk5OTggOS4yMjk5OTYgMzUuMDI5OTk5IDcuMzM5OTk2IDMzLjMzMDAwMiA1Ljc2OTk5NyBMIDI4LjcwOTk5OSAxLjUgQyAyNy42NTAwMDIgMC41MTAwMDIgMjUuOTcwMDAxIDAuNSAyNC45IDEuNSBMIDIwLjI5MDAwMSA1Ljc2OTk5NyBDIDE4LjQxIDcuNSAxNi45Njk5OTkgOS42MTAwMDEgMTYgMTIuMDQwMDAxIEMgMTUuOTggMTIuMDgwMDAyIDE1Ljk1MDAwMSAxMi4wOTk5OTggMTUuOTMgMTIuMTM5OTk5IEMgMTUuMTIwMDAxIDE0LjE2MDAwNCAxNC43MTk5OTkgMTYuMzAwMDAzIDE0LjcxOTk5OSAxOC41IEwgMTQuNzE5OTk5IDIyLjQ1MDAwMSBMIDguMjIgMjcuNTcgQyA2LjQgMjkuMDEwMDAyIDUuMzUgMzEuMTYgNS4zNSAzMy40OTAwMDIgTCA1LjM1IDM1LjcwOTk5OSBDIDUuMzUgMzcuMjcgNi42MyAzOC41NDk5OTkgOC4xOSAzOC41NDk5OTkgWiBNIDM2LjQzOTk5OSAxMy4xNjAwMDQgQyAzNy4wNyAxNC44NDk5OTggMzcuNDAwMDAyIDE2LjYzOTk5OSAzNy40MDAwMDIgMTguNSBMIDM3LjQwMDAwMiAzNS42MTk5OTkgTCAxNi4yMTk5OTkgMzUuNjE5OTk5IEwgMTYuMjE5OTk5IDE4LjUgQyAxNi4yMTk5OTkgMTYuNjYwMDA0IDE2LjU0OTk5OSAxNC44NzAwMDMgMTcuMTcgMTMuMTY5OTk4IEwgMzYuNDM5OTk5IDEzLjE2OTk5OCBaIE0gMzEuMjk5OTk5IDQ0LjY2OTk5OCBDIDMxLjAwOTk5OCA0NS4xMzAwMDEgMzAuNTA5OTk4IDQ1LjQwMDAwMiAyOS45NzAwMDEgNDUuNDAwMDAyIEwgMjMuNjM5OTk5IDQ1LjQwMDAwMiBDIDIzLjEgNDUuNDAwMDAyIDIyLjYgNDUuMTMwMDAxIDIyLjMwOTk5OSA0NC42Njk5OTggTCAyMC44MDk5OTkgNDIuMjk5OTk5IEwgMzIuNzk5OTk5IDQyLjI5OTk5OSBMIDMxLjI5OTk5OSA0NC42Njk5OTggWiBNIDM3LjQwMDAwMiAzOC40MTk5OTggQyAzNy40MDAwMDIgMzkuNzMgMzYuMzMwMDAyIDQwLjc5OTk5OSAzNS4wMiA0MC43OTk5OTkgTCAzNC4xNjk5OTggNDAuNzk5OTk5IEwgMTkuNDUwMDAxIDQwLjc5OTk5OSBMIDE4LjYgNDAuNzk5OTk5IEMgMTcuMjgwMDAxIDQwLjc5OTk5OSAxNi4yMTk5OTkgMzkuNzMgMTYuMjE5OTk5IDM4LjQxOTk5OCBMIDE2LjIxOTk5OSAzNy4xMTk5OTkgTCAzNy40MDAwMDIgMzcuMTE5OTk5IEwgMzcuNDAwMDAyIDM4LjQxOTk5OCBaIE0gNDQuNDcwMDAxIDI4Ljc1IEMgNDUuOTMgMjkuOTAwMDAyIDQ2Ljc3IDMxLjYzMDAwMSA0Ni43NyAzMy40OTAwMDIgTCA0Ni43NyAzNS43MDk5OTkgQyA0Ni43NyAzNi40NTAwMDEgNDYuMTY5OTk4IDM3LjA0OTk5OSA0NS40MyAzNy4wNDk5OTkgTCAzOC45MDAwMDIgMzcuMDQ5OTk5IEwgMzguOTAwMDAyIDM2LjM4OTk5OSBDIDM4LjkwMDAwMiAzNi4zODAwMDEgMzguOTAwMDAyIDM2LjM4MDAwMSAzOC45MDAwMDIgMzYuMzY5OTk5IEwgMzguOTAwMDAyIDI0LjM2MDAwMSBMIDQ0LjQ3MDAwMSAyOC43NSBaIE0gMjEuMjk5OTk5IDYuODcwMDAzIEwgMjUuOTEgMi41OTk5OTggQyAyNi40MSAyLjEzOTk5OSAyNy4xODk5OTkgMi4xMzk5OTkgMjcuNjg5OTk5IDIuNTk5OTk4IEwgMzIuMzEwMDAxIDYuODcwMDAzIEMgMzMuNzc5OTk5IDguMjI5OTk2IDM0Ljk1OTk5OSA5LjgzOTk5NiAzNS44MzAwMDIgMTEuNjY5OTk4IEwgMTcuNzkwMDAxIDExLjY2OTk5OCBDIDE4LjY2IDkuODMwMDAyIDE5Ljg0IDguMjI5OTk2IDIxLjI5OTk5OSA2Ljg3MDAwMyBaIE0gNi44NSAzMy40OTAwMDIgQyA2Ljg1IDMxLjYzMDAwMSA3LjY5IDI5LjkwMDAwMiA5LjE1IDI4Ljc1IEwgMTQuNzE5OTk5IDI0LjM2MDAwMSBMIDE0LjcxOTk5OSAzNi4zNjk5OTkgQyAxNC43MTk5OTkgMzYuMzgwMDAxIDE0LjcxOTk5OSAzNi4zODAwMDEgMTQuNzE5OTk5IDM2LjM4OTk5OSBMIDE0LjcxOTk5OSAzNy4wNDk5OTkgTCA4LjE5IDM3LjA0OTk5OSBDIDcuNDUgMzcuMDQ5OTk5IDYuODUgMzYuNDUwMDAxIDYuODUgMzUuNzA5OTk5IEwgNi44NSAzMy40OTAwMDIgWiIvPgogICAgPHBhdGggaWQ9InBhdGgyIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIGQ9Ik0gNTEuMjA5OTk5IDYyLjc1IEwgNDcuNTIgNjIuNzUgQyA0Ny4xNiA1OS45MDAwMDIgNDQuNzc5OTk5IDU3LjY2OTk5OCA0MS44Njk5OTkgNTcuNTQ5OTk5IEMgNDEuNSA1NC4yMyAzOC42Njk5OTggNTEuNjUwMDAyIDM1LjI1IDUxLjY1MDAwMiBDIDMyLjI3IDUxLjY1MDAwMiAyOS43MDk5OTkgNTMuNjE5OTk5IDI4Ljg4MDAwMSA1Ni4zODAwMDEgQyAyNy4xMTk5OTkgNTUuNDUwMDAxIDI0Ljg4OTk5OSA1NS4zODAwMDEgMjMuMDU5OTk5IDU2LjIwOTk5OSBDIDIyLjE4IDUzLjUwOTk5OCAxOS42NiA1MS42NTAwMDIgMTYuNzMgNTEuNjUwMDAyIEMgMTMuMzIgNTEuNjUwMDAyIDEwLjUxIDU0LjIzIDEwLjEyOTk5OSA1Ny41NDk5OTkgQyA3LjIxIDU3LjY2OTk5OCA0LjgzIDU5LjkwMDAwMiA0LjQ3IDYyLjc1IEwgMC43OSA2Mi43NSBDIDAuMzggNjIuNzUgMC4wNCA2My4wOSAwLjA0IDYzLjUgQyAwLjA0IDYzLjkxMDAwNCAwLjM4IDY0LjI1IDAuNzkgNjQuMjUgTCA1LjE4IDY0LjI1IEwgNDYuODQgNjQuMjUgTCA1MS4yMyA2NC4yNSBDIDUxLjYzOTk5OSA2NC4yNSA1MS45OCA2My45MTAwMDQgNTEuOTggNjMuNSBDIDUxLjk4IDYzLjA5IDUxLjYzMDAwMSA2Mi43NSA1MS4yMDk5OTkgNjIuNzUgWiBNIDUuOTkgNjIuNzUgQyA2LjM2IDYwLjU3IDguMzEgNTguOTcwMDAxIDEwLjYyOTk5OSA1OS4wNjAwMDEgQyAxMS42Mzk5OTkgNTkuMTE5OTk5IDEyLjYxMDAwMSA1OS41IDEzLjM3MDAwMSA2MC4xOCBDIDEzLjUxIDYwLjMxMDAwMSAxMy42OTAwMDEgNjAuMzY5OTk5IDEzLjg3MDAwMSA2MC4zNjk5OTkgQyAxNC4wOCA2MC4zNjk5OTkgMTQuMjgwMDAxIDYwLjI5MDAwMSAxNC40MyA2MC4xMTk5OTkgQyAxNC43MDk5OTkgNTkuODEwMDAxIDE0LjY4IDU5LjM0IDE0LjM3MDAwMSA1OS4wNjAwMDEgQyAxMy42IDU4LjM2MDAwMSAxMi42NiA1Ny45MDAwMDIgMTEuNjUgNTcuNjggQyAxMS45NTAwMDEgNTUuMTMwMDAxIDE0LjEgNTMuMTMwMDAxIDE2Ljc0IDUzLjEzMDAwMSBDIDE5LjI1IDUzLjEzMDAwMSAyMS4zNzAwMDEgNTQuOTAwMDAyIDIxLjgwOTk5OSA1Ny4zNDk5OTggQyAyMS44NjAwMDEgNTcuNjUwMDAyIDIxLjkgNTcuOTU5OTk5IDIxLjkgNTguMjc5OTk5IEMgMjEuOSA1OC45MDAwMDIgMjEuNzkwMDAxIDU5LjUgMjEuNTggNjAuMDgwMDAyIEMgMjEuNDQwMDAxIDYwLjQ3MDAwMSAyMS42Mjk5OTkgNjAuOTAwMDAyIDIyLjAyIDYxLjA0MDAwMSBDIDIyLjExMDAwMSA2MS4wNyAyMi4xOTAwMDEgNjEuMDkgMjIuMjgwMDAxIDYxLjA5IEMgMjIuNTggNjEuMDkgMjIuODcwMDAxIDYwLjkwMDAwMiAyMi45OCA2MC41OTk5OTggQyAyMy4yNiA1OS44NjAwMDEgMjMuNCA1OS4wODAwMDIgMjMuNCA1OC4yNzk5OTkgQyAyMy40IDU4LjA5OTk5OCAyMy4zNzk5OTkgNTcuOTE5OTk4IDIzLjM3MDAwMSA1Ny43NDAwMDIgQyAyNS4wMDk5OTggNTYuODYwMDAxIDI3LjA4MDAwMiA1Ni45NTAwMDEgMjguNjMwMDAxIDU3Ljk3MDAwMSBDIDI4LjYxOTk5OSA1OC4wODAwMDIgMjguNjEwMDAxIDU4LjE4IDI4LjYxMDAwMSA1OC4yOTAwMDEgQyAyOC42MTAwMDEgNTguOTEgMjguNjg5OTk5IDU5LjUyOTk5OSAyOC44NjAwMDEgNjAuMTE5OTk5IEMgMjguOTUwMDAxIDYwLjQ1MDAwMSAyOS4yNSA2MC42NiAyOS41ODAwMDIgNjAuNjYgQyAyOS42NTAwMDIgNjAuNjYgMjkuNzIwMDAxIDYwLjY1MDAwMiAyOS43OTAwMDEgNjAuNjMwMDAxIEMgMzAuMTg5OTk5IDYwLjUyIDMwLjQxOTk5OCA2MC4wOTk5OTggMzAuMzEwMDAxIDU5LjcwMDAwMSBDIDMwLjE4IDU5LjI0MDAwMiAzMC4xMTAwMDEgNTguNzcgMzAuMTEwMDAxIDU4LjI3OTk5OSBDIDMwLjExMDAwMSA1OC4wNyAzMC4xMzAwMDEgNTcuODY5OTk5IDMwLjE1MDAwMiA1Ny42NiBDIDMwLjE1MDAwMiA1Ny42NiAzMC4xNTAwMDIgNTcuNjYgMzAuMTUwMDAyIDU3LjY2IEMgMzAuNDUwMDAxIDU1LjA4MDAwMiAzMi42Mzk5OTkgNTMuMTMwMDAxIDM1LjI1OTk5OCA1My4xMzAwMDEgQyAzNy44ODk5OTkgNTMuMTMwMDAxIDQwLjA0OTk5OSA1NS4xMTAwMDEgNDAuMzYwMDAxIDU3LjY4IEMgMzkuMzY5OTk5IDU3Ljg4OTk5OSAzOC40NTAwMDEgNTguMzQgMzcuNjggNTkuMDIgQyAzNy4zNjk5OTkgNTkuMjkwMDAxIDM3LjM0IDU5Ljc3IDM3LjYxMDAwMSA2MC4wODAwMDIgQyAzNy43NTk5OTggNjAuMjUgMzcuOTU5OTk5IDYwLjMzMDAwMiAzOC4xNjk5OTggNjAuMzMwMDAyIEMgMzguMzQ5OTk4IDYwLjMzMDAwMiAzOC41MiA2MC4yNyAzOC42Njk5OTggNjAuMTM5OTk5IEMgMzkuMzg5OTk5IDU5LjUgNDAuMjc5OTk5IDU5LjExOTk5OSA0MS4yNDAwMDIgNTkuMDQwMDAxIEMgNDEuMjQwMDAyIDU5LjA0MDAwMSA0MS4yNDAwMDIgNTkuMDQwMDAxIDQxLjI1IDU5LjA0MDAwMSBDIDQxLjI1OTk5OCA1OS4wNDAwMDEgNDEuMjU5OTk4IDU5LjA0MDAwMSA0MS4yNyA1OS4wNDAwMDEgQyA0My41OSA1OC44NjAwMDEgNDUuNjYgNjAuNTA5OTk4IDQ2LjA0MDAwMSA2Mi43MyBMIDUuOTkgNjIuNzMgWiIvPgogICAgPHBhdGggaWQ9InBhdGgzIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIGQ9Ik0gMjYuMzQ5OTk4IDQ4Ljc0MDAwMiBMIDI2LjM0OTk5OCA1MS45MyBDIDI2LjM0OTk5OCA1Mi4zNCAyNi42ODk5OTkgNTIuNjggMjcuMDk5OTk4IDUyLjY4IEMgMjcuNTA5OTk4IDUyLjY4IDI3Ljg0OTk5OCA1Mi4zNCAyNy44NDk5OTggNTEuOTMgTCAyNy44NDk5OTggNDguNzQwMDAyIEMgMjcuODQ5OTk4IDQ4LjMzMDAwMiAyNy41MDk5OTggNDcuOTkwMDAyIDI3LjA5OTk5OCA0Ny45OTAwMDIgQyAyNi42ODk5OTkgNDcuOTkwMDAyIDI2LjM0OTk5OCA0OC4zMiAyNi4zNDk5OTggNDguNzQwMDAyIFoiLz4KICAgIDxwYXRoIGlkPSJwYXRoNCIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBkPSJNIDI5LjU3IDQ5LjQ1OTk5OSBMIDI5LjU3IDUxLjIwOTk5OSBDIDI5LjU3IDUxLjYxOTk5OSAyOS45MSA1MS45NTk5OTkgMzAuMzIgNTEuOTU5OTk5IEMgMzAuNzMgNTEuOTU5OTk5IDMxLjA3IDUxLjYxOTk5OSAzMS4wNyA1MS4yMDk5OTkgTCAzMS4wNyA0OS40NTk5OTkgQyAzMS4wNyA0OS4wNDk5OTkgMzAuNzMgNDguNzA5OTk5IDMwLjMyIDQ4LjcwOTk5OSBDIDI5LjkxIDQ4LjcwOTk5OSAyOS41NyA0OS4wNDAwMDEgMjkuNTcgNDkuNDU5OTk5IFoiLz4KICAgIDxwYXRoIGlkPSJwYXRoNSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBkPSJNIDIzLjEzOTk5OSA0OS43NSBMIDIzLjEzOTk5OSA1MC45MDAwMDIgQyAyMy4xMzk5OTkgNTEuMzEwMDAxIDIzLjQ4IDUxLjY1MDAwMiAyMy44ODk5OTkgNTEuNjUwMDAyIEMgMjQuMjk5OTk5IDUxLjY1MDAwMiAyNC42Mzk5OTkgNTEuMzEwMDAxIDI0LjYzOTk5OSA1MC45MDAwMDIgTCAyNC42Mzk5OTkgNDkuNzUgQyAyNC42Mzk5OTkgNDkuMzQgMjQuMjk5OTk5IDQ5IDIzLjg4OTk5OSA0OSBDIDIzLjQ4IDQ5IDIzLjEzOTk5OSA0OS4zNCAyMy4xMzk5OTkgNDkuNzUgWiIvPgo8L3N2Zz4K"}}]);