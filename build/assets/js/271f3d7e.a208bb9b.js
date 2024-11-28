"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[1550],{48033:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(74848),r=n(28453);const o={sidebar_position:6},a="Accessing the Cluster Dashboard",i={id:"Subscribers/Compute/Kubernetes/AccessingtheClusterDashboard",title:"Accessing the Cluster Dashboard",description:"The Kubernetes Dashboard is a web-based user interface that provides a visual representation of a cluster's resources and enables easier management and monitoring. Here's an overview of the dashboard:",source:"@site/docs/Subscribers/Compute/Kubernetes/AccessingtheClusterDashboard.md",sourceDirName:"Subscribers/Compute/Kubernetes",slug:"/Subscribers/Compute/Kubernetes/AccessingtheClusterDashboard",permalink:"/docs/Subscribers/Compute/Kubernetes/AccessingtheClusterDashboard",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar2",previous:{title:"Accessing a Cluster using the Command Line",permalink:"/docs/Subscribers/Compute/Kubernetes/AccessingaClusterusingtheCommandLine"},next:{title:"Ingress Networking on Kubernetes Clusters",permalink:"/docs/Subscribers/Compute/Kubernetes/IngressNetworkingonKubernetesClusters"}},c={},d=[{value:"Getting Token for Dashboard Login",id:"getting-token-for-dashboard-login",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"accessing-the-cluster-dashboard",children:"Accessing the Cluster Dashboard"})}),"\n",(0,t.jsx)(s.p,{children:"The Kubernetes Dashboard is a web-based user interface that provides a visual representation of a cluster's resources and enables easier management and monitoring. Here's an overview of the dashboard:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Features:"}),"\xa0The dashboard displays various cluster resources, such as pods, services, nodes, deployments, and more. It offers an interactive view of the cluster's current state."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Access Control:"}),"\xa0Access to the dashboard is subject to RBAC (Role-Based Access Control) policies. Users need appropriate permissions to view and modify resources."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Monitoring:"}),"\xa0While the dashboard provides essential monitoring, more comprehensive monitoring solutions like Prometheus and Grafana can be integrated for in-depth insights."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Details of services, pods, namespaces, controllers etc. for a Kubernetes cluster are available on the Kubernetes Dashboard UI. To access the dashboard, the\xa0",(0,t.jsx)(s.em,{children:"kubeconfig"}),"\xa0manifest needs to be downloaded and used."]}),"\n",(0,t.jsxs)(s.p,{children:["If not, navigate to the\xa0",(0,t.jsx)(s.strong,{children:"Access"}),"\xa0section of a cluster to first\xa0",(0,t.jsxs)(s.a,{href:"AccessingaClusterusingtheCommandLine",children:["set up\xa0kubectl\xa0and\xa0",(0,t.jsx)(s.em,{children:"kubeconfig"})]}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Once done, a local proxy needs to be run using the command given below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"kubectl --kubeconfig /custom/path/kube.conf proxy\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If everything is set up correctly, opening this URL in your browser (or using the\xa0",(0,t.jsx)(s.strong,{children:"OPEN DASHBOARD"}),"\xa0button in the\xa0",(0,t.jsx)(s.strong,{children:"Dashboard"}),"\xa0section of cluster details) -\xa0",(0,t.jsx)(s.a,{href:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/",children:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"}),"\xa0- should open the cluster dashboard."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Each Kubernetes cluster has its own dashboard."})}),"\n",(0,t.jsx)(s.h2,{id:"getting-token-for-dashboard-login",children:"Getting Token for Dashboard Login"}),"\n",(0,t.jsx)(s.p,{children:"To login to the cluster dashboard, a token needs to be obtained which can be done using the following command on the CLI:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"kubectl --kubeconfig /custom/path/kube.conf describe secret $(kubectl --kubeconfig /custom/path/kube.conf get secrets -n kubernetes-dashboard | grep kubernetes-dashboard-token | awk '{print $1}') -n kubernetes-dashboard\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["More information about accessing the Kubernetes Dashboard UI can be found on\xa0",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/#accessing-the-dashboard-ui",children:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/#accessing-the-dashboard-ui"})]})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var t=n(96540);const r={},o=t.createContext(r);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);