"use strict";(self.webpackChunk_re_docs=self.webpackChunk_re_docs||[]).push([[85],{3092:(e,a,l)=>{l.r(a),l.d(a,{default:()=>d});var t=l(1672),n=l(4722),r=l(45),i=l(7616),c=l(7521),s=l(79),o=l(1391);const m="mdxPageWrapper_DUIs";function d(e){const{content:a}=e,{metadata:{title:l,description:d,permalink:f,frontMatter:v}}=a,{wrapperClassName:p,hide_table_of_contents:u}=v;return t.createElement(r.Z,{title:l,description:d,permalink:f,wrapperClassName:null!=p?p:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,n.Z)("row",m)},t.createElement("div",{className:(0,n.Z)("col",!u&&"col--8")},t.createElement(i.Zo,{components:c.Z},t.createElement(a,null))),!u&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:a.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})))))}},79:(e,a,l)=>{l.d(a,{Z:()=>p});var t=l(1672),n=l(4722),r=l(7659);const i="tableOfContents_pLT7";var c=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,a,l)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;function p(e){var a,l=e,{className:c}=l,p=((e,a)=>{var l={};for(var t in e)d.call(e,t)&&a.indexOf(t)<0&&(l[t]=e[t]);if(null!=e&&m)for(var t of m(e))a.indexOf(t)<0&&f.call(e,t)&&(l[t]=e[t]);return l})(l,["className"]);return t.createElement("div",{className:(0,n.Z)(i,"thin-scrollbar",c)},t.createElement(r.Z,(a=((e,a)=>{for(var l in a||(a={}))d.call(a,l)&&v(e,l,a[l]);if(m)for(var l of m(a))f.call(a,l)&&v(e,l,a[l]);return e})({},p),s(a,o({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}},7659:(e,a,l)=>{l.d(a,{Z:()=>d});var t=l(1672),n=l(1391),r=Object.defineProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(e,a,l)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;function m({toc:e,className:a,linkClassName:l,isChild:n}){return e.length?t.createElement("ul",{className:n?void 0:a},e.map((e=>t.createElement("li",{key:e.id},t.createElement("a",{href:`#${e.id}`,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),t.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function d(e){var a=e,{toc:l,className:r="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:f,minHeadingLevel:v,maxHeadingLevel:p}=a,u=((e,a)=>{var l={};for(var t in e)c.call(e,t)&&a.indexOf(t)<0&&(l[t]=e[t]);if(null!=e&&i)for(var t of i(e))a.indexOf(t)<0&&s.call(e,t)&&(l[t]=e[t]);return l})(a,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const b=(0,n.LU)(),g=null!=v?v:b.tableOfContents.minHeadingLevel,N=null!=p?p:b.tableOfContents.maxHeadingLevel,_=(0,n.b9)({toc:l,minHeadingLevel:g,maxHeadingLevel:N}),k=(0,t.useMemo)((()=>{if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:g,maxHeadingLevel:N}}),[d,f,g,N]);return(0,n.Si)(k),t.createElement(m,((e,a)=>{for(var l in a||(a={}))c.call(a,l)&&o(e,l,a[l]);if(i)for(var l of i(a))s.call(a,l)&&o(e,l,a[l]);return e})({toc:_,className:r,linkClassName:d},u))}}}]);