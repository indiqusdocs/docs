"use strict";(self.webpackChunkApiculus=self.webpackChunkApiculus||[]).push([[6102],{1269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const o={sidebar_position:2},a="Working with Instance Volumes",l={id:"Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes",title:"Working with Instance Volumes",description:"Each Instance on Apiculus (Linux or Windows) includes a 'root' disk or volume. This is the primary disk partition on the Instance, and by default, all operating systems, data, components and files reside on the root disk.",source:"@site/docs/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes.md",sourceDirName:"Subscribers/Storage/BlockVolumes",slug:"/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes",permalink:"/docs/Subscribers/Storage/BlockVolumes/WorkingwithInstanceVolumes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar2",previous:{title:"About Block Volumes",permalink:"/docs/Subscribers/Storage/BlockVolumes/AboutBlockVolumes"},next:{title:"Working with Volume Snapshots",permalink:"/docs/Subscribers/Storage/BlockVolumes/WorkingwithVolumeSnapshots"}},r={},d=[{value:"Creating Data Disk",id:"creating-data-disk",level:2},{value:"Attaching/Detaching Volumes",id:"attachingdetaching-volumes",level:2},{value:"Downloading a Volume",id:"downloading-a-volume",level:2},{value:"Deleting a Volume",id:"deleting-a-volume",level:2}];function c(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"working-with-instance-volumes",children:"Working with Instance Volumes"})}),"\n",(0,i.jsx)(n.p,{children:"Each Instance on Apiculus (Linux or Windows) includes a 'root' disk or volume. This is the primary disk partition on the Instance, and by default, all operating systems, data, components and files reside on the root disk."}),"\n",(0,i.jsx)(n.p,{children:"Further, Instances can have addon or 'data' disks attached to them which act as additional disk partitions. These data disks are modular and can be moved between multiple Instances."}),"\n",(0,i.jsx)(n.p,{children:"Apart from this, there is no difference between a root disk and a data disk. Both types of Volumes are managed using the Block Volumes Service. However, based on the volume type, certain operations may not be available."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Root Disks"}),(0,i.jsx)(n.th,{children:"Data Disks"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Overview & Volume Information"}),(0,i.jsx)(n.td,{children:"Available"}),(0,i.jsx)(n.td,{children:"Available"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Snapshot Management"}),(0,i.jsx)(n.td,{children:"Available"}),(0,i.jsx)(n.td,{children:"Available"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Recurring Snapshot Schedules"}),(0,i.jsx)(n.td,{children:"Available"}),(0,i.jsx)(n.td,{children:"Available"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resizing Volumes"}),(0,i.jsx)(n.td,{children:"Available (via parent Instance)"}),(0,i.jsx)(n.td,{children:"Available"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Volume Operations"}),(0,i.jsx)(n.td,{children:"Not Available"}),(0,i.jsx)(n.td,{children:"Available"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"creating-data-disk",children:"Creating Data Disk"}),"\n",(0,i.jsx)(n.p,{children:"To create a Block Volume data disk, follow the below steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to\xa0",(0,i.jsx)(n.strong,{children:"Storage > Block Volumes."})]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the\xa0",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"+ NEW DATA DISK"})}),"\xa0from the top right."]}),"\n",(0,i.jsx)(n.li,{children:"Enter the name for your Data Disk by following the naming convention mentioned below in the helper text."}),"\n",(0,i.jsx)(n.li,{children:"Choose an Availability Zone."}),"\n",(0,i.jsx)(n.li,{children:"Select an Instance from the list available in the dropdown to which you want to attach your Disk To. This is not mandatory; it can also be done later."}),"\n",(0,i.jsx)(n.li,{children:"Choose the disk configuration from the available Disk packs, or you can use the free size option to specify the Disk configuration."}),"\n",(0,i.jsxs)(n.li,{children:["Verify the Estimated Cost of your Data Disk based on the options that you have chosen from the Summary and Estimated Costs Section(\xa0",(0,i.jsx)(n.em,{children:"Here, both the Hourly and Monthly Prices summary will be displayed)"})]}),"\n",(0,i.jsx)(n.li,{children:"Click on the check box after going through the policies mentioned by your cloud service provider."}),"\n",(0,i.jsxs)(n.li,{children:["Clicking on the BUY HOURLY or BUY MONTHLY button, a confirmation pop-over will open up, and the price summary will be displayed along with the discount codes if you have any in your account.\xa0","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You can apply any of the discount codes listed by clicking on the\xa0",(0,i.jsx)(n.strong,{children:"APPLY"}),"\xa0button.\xa0"]}),"\n",(0,i.jsxs)(n.li,{children:["You can also remove the applied discount code by clicking the\xa0",(0,i.jsx)(n.strong,{children:"REMOVE"}),"\xa0button.\xa0"]}),"\n",(0,i.jsxs)(n.li,{children:["Clicking on the\xa0",(0,i.jsx)(n.strong,{children:"CANCEL"}),"\xa0button, this action will be canceled."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the\xa0",(0,i.jsx)(n.strong,{children:"CONFIRM"}),"\xa0to create the Data Disk."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Working with Instance Volumes",src:t(75686).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.p,{children:"Please note that this might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window."}),"\n",(0,i.jsxs)(n.p,{children:["Once ready, you\u2019ll be notified of this purchase on your email address on record. The newly created Data Disk can be accessed from\xa0",(0,i.jsx)(n.strong,{children:"Storage >"}),"\xa0",(0,i.jsx)(n.strong,{children:"Block Volumes"}),"\xa0on the main navigation panel."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Working with Instance Volumes",src:t(43101).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.h2,{id:"attachingdetaching-volumes",children:"Attaching/Detaching Volumes"}),"\n",(0,i.jsx)(n.p,{children:"Data disks can be attached to or detached from Instances. This action can be considered similar or equivalent to using an external disk drive on a laptop or computer. The following points should be considered while working with data disks:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Data disks can be attached to only one Instance at any given point in time;"}),"\n",(0,i.jsx)(n.li,{children:"Data disks can remain detached/unattached;"}),"\n",(0,i.jsx)(n.li,{children:"Data disks can be used across Instances with different operating systems;"}),"\n",(0,i.jsx)(n.li,{children:"Data disks can only be used on Instances in the same Availability Zone."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Attachment/detachment actions can be performed from the\xa0",(0,i.jsx)(n.strong,{children:"Operations"}),"\xa0section/tab under data disk details."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Working with Instance Volumes",src:t(21972).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(n.h2,{id:"downloading-a-volume",children:"Downloading a Volume"}),"\n",(0,i.jsxs)(n.p,{children:["Detached data disks can be downloaded as 'virtual hard disk' files for portability. This option is also available in the\xa0",(0,i.jsx)(n.strong,{children:"Operations"}),"\xa0section/tab of data disk details."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Data disks will be downloaded as .ova files."})}),"\n",(0,i.jsx)(n.h2,{id:"deleting-a-volume",children:"Deleting a Volume"}),"\n",(0,i.jsxs)(n.p,{children:["Data disks can be deleted from the\xa0",(0,i.jsx)(n.strong,{children:"Operations"}),"\xa0section/tab in the data disk details. Deleting a data disk will remove the Volume and all associated snapshots and snapshot schedules, and is an irreversible action."]}),"\n",(0,i.jsx)(n.p,{children:"To delete a root disk/volume, simply delete the parent Instance."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},75686:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/WorkingwithInstanceVolumes1-12ec44de4d94a6468f181be2360df1cd.png"},43101:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/WorkingwithInstanceVolumes2-e9ad4771096096b56b2e00a5e368ec18.png"},21972:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/WorkingwithInstanceVolumes3-10948a5809b475d7675be6cb3f7c59df.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);