"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[9148],{15169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=n(74848),a=n(28453);n(11470),n(19365);const s={sidebar_position:2},l="Disable Account",i={id:"APIs/AccountManagement/DisableAccount",title:"Disable Account",description:"This will put the account in a disabled state and the subscriber will not be able to purchase any new resources or access any existing resources. Accounts in this state can only make payments which will automatically enable their accounts. This action is reversible using the Enable Account endpoint.",source:"@site/docs/APIs/AccountManagement/DisableAccount.md",sourceDirName:"APIs/AccountManagement",slug:"/APIs/AccountManagement/DisableAccount",permalink:"/docs/APIs/AccountManagement/DisableAccount",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar3",previous:{title:"Restrict Account",permalink:"/docs/APIs/AccountManagement/RestrictAccount"},next:{title:"Enable Account",permalink:"/docs/APIs/AccountManagement/EnableAccount"}},c={},o=[{value:"Request Headers",id:"request-headers",level:2},{value:"Request Query Parameters",id:"request-query-parameters",level:2},{value:"Sample Request",id:"sample-request",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"disable-account",children:"Disable Account"})}),"\n",(0,r.jsxs)(t.p,{children:["This will put the account in a ",(0,r.jsx)(t.code,{children:"disabled"})," state and the subscriber will not be able to purchase any new resources or access any existing resources. Accounts in this state can only make payments which will automatically enable their accounts. This action is reversible using the ",(0,r.jsx)(t.strong,{children:"Enable Account"})," endpoint."]}),"\n",(0,r.jsx)("div",{className:"custom-block-peach",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Endpoint: ",(0,r.jsx)(t.code,{children:"/api/v1/serv_disableUserAccount/<user_id>"})]}),"\n",(0,r.jsxs)(t.li,{children:["Method: ",(0,r.jsx)(t.code,{children:"PUT"})]}),"\n"]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This endpoint will only work with authenticated admin tokens, i.e., ",(0,r.jsx)(t.code,{children:"<user_token>"})," obtained from the ",(0,r.jsx)(t.code,{children:"/auth/login"})," endpoint with valid admin credentials."]})}),"\n",(0,r.jsx)(t.h2,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Header name"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"x-access-token"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsxs)(t.td,{children:["Pass the ",(0,r.jsx)(t.code,{children:"<user_token"}),"> as obtained from the ",(0,r.jsx)(t.code,{children:"/auth/login"})," endpoint."]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"request-query-parameters",children:"Request Query Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter name"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"manual"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{children:"true"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"sample-request",children:"Sample Request"}),"\n",(0,r.jsx)("div",{className:"custom-block-green",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"PUT"}),": ",(0,r.jsx)(t.code,{children:"https://<api_url>/api/v1/serv_disableUserAccount/123?manual=true"})]})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),s=n(23104),l=n(56347),i=n(205),c=n(57485),o=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,d]=p({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=o??m;return b({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function A(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);