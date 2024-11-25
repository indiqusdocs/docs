"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[7673],{8065:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(74848),t=i(28453);const r={sidebar_position:5},a="Configuring Alerts on Linux Instances",o={id:"Subscribers/Compute/LinuxInstances/ConfiguringAlertsonLinuxInstances",title:"Configuring Alerts on Linux Instances",description:"From Operating Linux Instances, navigate into a Linux Instance and access the Alerts tab to view the configured alerts or configure new ones.",source:"@site/docs/Subscribers/Compute/LinuxInstances/ConfiguringAlertsonLinuxInstances.md",sourceDirName:"Subscribers/Compute/LinuxInstances",slug:"/Subscribers/Compute/LinuxInstances/ConfiguringAlertsonLinuxInstances",permalink:"/docs/Subscribers/Compute/LinuxInstances/ConfiguringAlertsonLinuxInstances",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar2",previous:{title:"Viewing Graphs and Utilization of Linux Instances",permalink:"/docs/Subscribers/Compute/LinuxInstances/ViewingGraphsandUtilizationofLinuxInstances"},next:{title:"Volume Management with Linux Instances",permalink:"/docs/Subscribers/Compute/LinuxInstances/VolumeManagementwithLinuxInstances"}},l={},c=[{value:"Instance Alerts",id:"instance-alerts",level:2},{value:"Adding an Alert",id:"adding-an-alert",level:2},{value:"Configuring Recipients",id:"configuring-recipients",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configuring-alerts-on-linux-instances",children:"Configuring Alerts on Linux Instances"})}),"\n",(0,s.jsxs)(n.p,{children:["From ",(0,s.jsx)(n.a,{href:"/docs/Subscribers/Compute/LinuxInstances/AboutLinuxInstances",children:"Operating Linux Instances"}),", navigate into a Linux Instance and access the ",(0,s.jsx)(n.strong,{children:"Alerts"})," tab to view the configured alerts or configure new ones."]}),"\n",(0,s.jsx)(n.p,{children:"Alerts get triggered whenever a configured condition is met. You can create multiple alerts on an instance. Alerts are sent to recipients that you can define and manage."}),"\n",(0,s.jsx)(n.p,{children:"You can configure alerts for instances running on the Apiculus. You can define alerts for Instances and configure the email recipients for these alerts using a straightforward and easy-to-use interface."}),"\n",(0,s.jsx)(n.h2,{id:"instance-alerts",children:"Instance Alerts"}),"\n",(0,s.jsx)(n.p,{children:"The Alerts tab lists all the alerts already configured for that particular Linux Instance. In addition, it will show the following details:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ID"}),"\n",(0,s.jsx)(n.li,{children:"Name for the alert"}),"\n",(0,s.jsx)(n.li,{children:"Parameter"}),"\n",(0,s.jsx)(n.li,{children:"Trigger When"}),"\n",(0,s.jsx)(n.li,{children:"Value"}),"\n",(0,s.jsx)(n.li,{children:"Reading Duration"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configuring Alerts on Linux Instances",src:i(75053).A+"",width:"1600",height:"749"})}),"\n",(0,s.jsx)(n.h2,{id:"adding-an-alert",children:"Adding an Alert"}),"\n",(0,s.jsxs)(n.p,{children:["To create or add alerts, click the\xa0",(0,s.jsx)(n.strong,{children:"Create Alert"}),"\xa0button. The Create Alert window opens."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configuring Alerts on Linux Instances",src:i(84374).A+"",width:"1600",height:"746"})}),"\n",(0,s.jsx)(n.p,{children:"The various fields of the Create Alert screen are as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name"}),"\xa0-\xa0You can define the name for your alert."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Choose Parameter"}),"\xa0-\xa0This option will allow you to define what parameter needs to be monitored to trigger the alert email. Apiculus Cloud supports CPU, RAM, Disk, 1-min Load Average, 5-min Load Average, 15-min Load Average parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Trigger when"}),"\xa0-\xa0This set of options lets you define whether to trigger above or below a custom value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Value"}),"\xa0-\xa0You can define the trigger value/threshold."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reading duration"}),"\xa0-\xa0This option lets you define the breach window, that is, the duration for which the breach must be consistent to trigger the alert email."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Send email to"}),"\xa0-\xa0Email IDs can be added here, or also you can add them by using the configure recipients."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-recipients",children:"Configuring Recipients"}),"\n",(0,s.jsx)(n.p,{children:"This section list and display all the email IDs already configured for the alerts. You can delete the existing email IDs and add other email IDs by following these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on the\xa0",(0,s.jsx)(n.strong,{children:"Manage Recipients"}),"\xa0button."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on\xa0",(0,s.jsx)(n.strong,{children:"+ Add More Recipients"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Add the email IDs; You can add multiple IDs separated by comma."}),"\n",(0,s.jsxs)(n.li,{children:["Click on the\xa0",(0,s.jsx)(n.strong,{children:"+"}),"\xa0icon."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on the\xa0",(0,s.jsx)(n.strong,{children:"Update"}),"\xa0button, and update the recipient's list."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configuring Alerts on Linux Instances",src:i(62463).A+"",width:"1600",height:"751"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"All the recipients configured will receive all the setup alerts. If no email ID is configured or added, then no email will be sent for the already configured alerts."})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75053:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ConfiguringAlerts1-2e84791052ea4297c130fd1c85e81710.png"},84374:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ConfiguringAlerts2-1053bc56dd1dc587f0767462f90d8198.png"},62463:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ConfiguringAlerts3-5ad0bf2d683f82785fc4591eb52287cb.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);