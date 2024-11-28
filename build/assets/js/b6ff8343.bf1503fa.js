"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[3007],{53708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=r(74848),a=r(28453),s=r(11470),l=r(19365);const i={sidebar_position:2},o="Tax Categories",u={id:"APIs/Helpers/TaxCategories",title:"Tax Categories",description:"This API will return available tax categories, tax types and currencies.",source:"@site/docs/APIs/Helpers/TaxCategories.md",sourceDirName:"APIs/Helpers",slug:"/APIs/Helpers/TaxCategories",permalink:"/docs/APIs/Helpers/TaxCategories",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar3",previous:{title:"ACS Keys and Regions",permalink:"/docs/APIs/Helpers/ACSKeysandRegions"},next:{title:"Country List",permalink:"/docs/APIs/Helpers/CountryList"}},c={},d=[{value:"Request Headers",id:"request-headers",level:2},{value:"Sample Request",id:"sample-request",level:2},{value:"Sample Response",id:"sample-response",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tax-categories",children:"Tax Categories"})}),"\n",(0,t.jsx)(n.p,{children:"This API will return available tax categories, tax types and currencies."}),"\n",(0,t.jsx)("div",{className:"custom-block-peach",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Endpoint: ",(0,t.jsx)(n.code,{children:"/api/pass/signUpHelper"})]}),"\n",(0,t.jsxs)(n.li,{children:["Method: ",(0,t.jsx)(n.code,{children:"GET"})]}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This endpoint will only work with authenticated admin tokens, i.e., ",(0,t.jsx)(n.code,{children:"<user_token>"})," obtained from the ",(0,t.jsx)(n.code,{children:"/auth/login"})," endpoint with valid admin credentials."]})}),"\n",(0,t.jsx)(n.h2,{id:"request-headers",children:"Request Headers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Header name"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x-access-token"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["Pass the ",(0,t.jsx)(n.code,{children:"<user_token>"})," as obtained from the ",(0,t.jsx)(n.code,{children:"/auth/login"})," endpoint."]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"sample-request",children:"Sample Request"}),"\n",(0,t.jsx)("div",{className:"custom-block-green",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET"}),": ",(0,t.jsx)(n.code,{children:"https://<api_url>/api/pass/signUpHelper"})]})}),"\n",(0,t.jsx)(n.h2,{id:"sample-response",children:"Sample Response"}),"\n",(0,t.jsx)(s.A,{children:(0,t.jsx)(l.A,{value:"ResponseJSON",label:"Response JSON",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="JSON"',children:'{\r\n"httpStatus": 200,\r\n"success": true,\r\n"error": {},\r\n"sync": true,\r\n"jobId": "9db5b9e8-3dc4-4dc7-8df8-a60fef3a8d88",\r\n"jobStatusCode": 1,\r\n"cached": false,\r\n"replayed": false,\r\n"result": {\r\n "currency": ["INR", "RWF", "OMR"],\r\n "acsRegion": ["noida"],\r\n "tax_category": [\r\n     {\r\n         "displayText": "Indian Organisation or Individual (Non-SEZ)",\r\n         "value": "Taxable"\r\n     },\r\n     {\r\n         "displayText": "Indian Organisation or Individual (Located in a SEZ)",\r\n         "value": "SEZ"\r\n     },\r\n     {\r\n         "displayText": "Non-Indian Organisation or Individual (Located Outside India)",\r\n         "value": "EMBASSY"\r\n     }\r\n ],\r\n "tax_types": [\r\n     {\r\n         "name": "CNPJ",\r\n         "validation": {\r\n             "alpha_num": true,\r\n             "required": true,\r\n             "min": 11,\r\n             "max": 15\r\n         }\r\n     },\r\n     {\r\n         "name": "GSTIN",\r\n         "validation": {\r\n             "alpha_num": true,\r\n             "required": false,\r\n             "min": 10,\r\n             "max": 10\r\n         }\r\n     }\r\n ]\r\n}\r\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>I});var t=r(96540),a=r(34164),s=r(23104),l=r(56347),i=r(205),o=r(57485),u=r(31682),c=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[b,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function I(e){const n=(0,x.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);