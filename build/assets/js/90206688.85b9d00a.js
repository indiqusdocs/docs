"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[9646],{6638:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(74848),s=a(28453);const r={sidebar_position:2},i="Creating a Load Balancer Instance",o={id:"Subscribers/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance",title:"Creating a Load Balancer Instance",description:"Load Balancer Instances can be created inside a VPC by following these simple steps:",source:"@site/docs/Subscribers/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance.md",sourceDirName:"Subscribers/Networking/LoadBalancerInstances",slug:"/Subscribers/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance",permalink:"/docs/Subscribers/Networking/LoadBalancerInstances/CreatingaLoadBalancerInstance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar2",previous:{title:"About Load Balancer Instances",permalink:"/docs/Subscribers/Networking/LoadBalancerInstances/AboutLoadBalancerInstances"},next:{title:"Activating the NetScaler VPX Control Panel",permalink:"/docs/Subscribers/Networking/LoadBalancerInstances/ActivatingtheNetScalerVPX"}},c={},d=[];function l(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"creating-a-load-balancer-instance",children:"Creating a Load Balancer Instance"})}),"\n",(0,t.jsx)(n.p,{children:"Load Balancer Instances can be created inside a VPC by following these simple steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to\xa0",(0,t.jsx)(n.strong,{children:"Networking > Virtual Private Clouds"}),"\xa0and go into that VPC in which the LBI needs to be placed. If unavailable,\xa0",(0,t.jsx)(n.a,{href:"/docs/Subscribers/Networking/VirtualPrivateClouds/CreateListandViewVPCs",children:"create a new VPC"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In the VPC,\xa0",(0,t.jsx)(n.a,{href:"/docs/Subscribers/Networking/VirtualPrivateClouds/CreatingVPCSubnetsTiers",children:"create a subnet/tier"}),"\xa0with any desired configuration(s)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC",children:"Add an additional IPv4 Address"}),"\xa0to the VPC and keep it 'unused'."]}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to\xa0",(0,t.jsx)(n.strong,{children:"Networking > Load Balancer Instances"}),"\xa0and click on the\xa0",(0,t.jsx)(n.strong,{children:"+ NEW LOAD BALANCER INSTANCE"}),"\xa0button to access the LBI creation options."]}),"\n",(0,t.jsx)(n.li,{children:"In the 'Select VPC and Tier' section, specify the VPC and subnet as created/desired in steps 1 and 2 above. Choose any configurations as required for the rest of the options."}),"\n",(0,t.jsxs)(n.li,{children:["Once the LBI is created, navigate back to the VPC and\xa0",(0,t.jsxs)(n.a,{href:"/docs/Subscribers/Networking/VirtualPrivateClouds/IPv4AddressesandVPC",children:["configure the added IPv4 Address as a\xa0",(0,t.jsx)(n.em,{children:"Static NAT"})]}),"\xa0on the newly-created Load Balancer Instance."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The above steps will create an LBI and place it in the correct spot in the network. To configure traffic management rules and access other options via the NetScaler VPX control panel, additional activation steps are needed. These instructions are sent over email when an LBI is created."})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);