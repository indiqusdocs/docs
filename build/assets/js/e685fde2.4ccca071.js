"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[6160],{63986:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(74848),n=t(28453);const i={sidebar_position:3},o="DNS Requirements",a={id:"ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/DNSRequirements",title:"DNS Requirements",description:"A53 is a nameserver system. Therefore, enabling the Service requires certain prerequisites to be handled at the domain level.",source:"@site/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/DNSRequirements.md",sourceDirName:"ServicesandSystemRequirements/ApiculusAuthoritiveNameserver",slug:"/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/DNSRequirements",permalink:"/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/DNSRequirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar1",previous:{title:"System Requirements",permalink:"/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/SystemRequirements"},next:{title:"Supported Record Types",permalink:"/docs/ServicesandSystemRequirements/ApiculusAuthoritiveNameserver/SupportedRecordTypes"}},u={},d=[];function c(e){const r={admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"dns-requirements",children:"DNS Requirements"})}),"\n",(0,s.jsx)(r.p,{children:"A53 is a nameserver system. Therefore, enabling the Service requires certain prerequisites to be handled at the domain level."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"There should be at least two nameserver records (ns1.your.cloud, ns2.your.cloud, etc.) configured on your domain's DNS."}),"\n",(0,s.jsxs)(r.li,{children:["The records should be registered as nameserver records on your domain provider's system - these may need to be created as A records as well\xa0","\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"Each domain name provider will offer a different means of handling this - it is recommended to check your domain name provider's documentation for this purpose)."})}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"Nameserver records should point to a public IPv4 with port 53 open and propagated all the way through to the VM where PowerDNS is installed; multiple nameservers may point to the same IPv4."}),"\n"]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var s=t(96540);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);