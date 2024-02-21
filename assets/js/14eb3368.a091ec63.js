"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[6969],{44168:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(58168),r=a(96540),i=a(20053),l=a(18630),s=a(5215),c=a(80260),o=a(35358),m=a(23230),d=a(98180);function u(e){return r.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.A)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.A,{"aria-label":(0,m.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function g(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.A,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:a,index:l,addMicrodata:s}=e;return r.createElement("li",(0,n.A)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.A)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,s.OF)(),t=(0,c.Dt)();return e?r.createElement("nav",{className:(0,i.A)(l.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:n},t.label))})))):null}},73533:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(96540),r=a(69817),i=a(5215),l=a(98180),s=a(20053),c=a(35358),o=a(40877),m=a(23230);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return n.createElement(c.A,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer)},a)}function h(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.A)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const a=(0,i._o)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const a=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const a=(0,i.$S)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(p,e);const r=(0,i.d1)(t);return n.createElement("section",{className:(0,s.A)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}var f=a(63682),N=a(84799),A=a(79436),k=a(44168),_=a(85225);const L={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.A)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.$S)();return n.createElement("div",{className:L.generatedIndexPage},n.createElement(N.A,null),n.createElement(k.A,null),n.createElement(A.A,null),n.createElement("header",null,n.createElement(_.A,{as:"h1",className:L.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(E,{items:a.items,className:L.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(f.A,{previous:t.navigation.previous,next:t.navigation.next})))}function x(e){return n.createElement(n.Fragment,null,n.createElement(T,e),n.createElement(y,e))}},63682:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(58168),r=a(96540),i=a(23230),l=a(13555);function s(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.A,(0,n.A)({},t,{subLabel:r.createElement(i.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.A,(0,n.A)({},a,{subLabel:r.createElement(i.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},79436:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(96540),r=a(20053),i=a(23230),l=a(18630),s=a(33403);function c(e){let{className:t}=e;const a=(0,s.r)();return a.badge?n.createElement("span",{className:(0,r.A)(t,l.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},84799:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(96540),r=a(20053),i=a(97639),l=a(35358),s=a(23230),c=a(19802),o=a(18630),m=a(2780),d=a(33403);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.A,{to:a,onClick:r},n.createElement(s.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.A)(),{pluginId:s}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,m.g1)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.HW)(s),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.r)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},85225:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(58168),r=a(96540),i=a(20053),l=a(23230),s=a(86957),c=a(35358);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.p)();if("h1"===t||!a)return r.createElement(t,(0,n.A)({},m,{id:void 0}));const u=(0,l.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.A)({},m,{className:(0,i.A)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(c.A,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},13555:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053),i=a(35358);function l(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return n.createElement(i.A,{className:(0,r.A)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);