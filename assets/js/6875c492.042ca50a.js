"use strict";(self.webpackChunkformulaik=self.webpackChunkformulaik||[]).push([[4813],{84934:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(96540),n=a(23230),r=a(13555);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.A,{permalink:a,title:l.createElement(n.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.A,{permalink:s,title:l.createElement(n.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},64331:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(96540),n=a(38322),r=a(83894);function s(e){let{items:t,component:a=r.A}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.i,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},98798:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(96540),n=a(20053),r=a(23230),s=a(57824),o=a(69817),i=a(18630),g=a(35358),c=a(15353),m=a(84934),u=a(51210),p=a(64331);function d(e){const t=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,r.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return l.createElement(l.Fragment,null,l.createElement(o.be,{title:a}),l.createElement(u.A,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const o=d(t);return l.createElement(c.A,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(g.A,{href:t.allTagsPath},l.createElement(r.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(p.A,{items:a}),l.createElement(m.A,{metadata:s}))}function E(e){return l.createElement(o.e3,{className:(0,n.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage)},l.createElement(h,e),l.createElement(b,e))}}}]);