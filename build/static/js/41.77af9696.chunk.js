(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{793:function(e,t,c){"use strict";c.r(t);var s=c(659),n=c(2),j=c(657),l=(c(658),c(661)),a=c(660),i=c(24),d=new a.a;console.log(d.get("gym_uuid"));t.default=function(){var e=c(662),t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],b=a[1];Object(n.useEffect)((function(){e.get(l.a+"payments/invoice/?gym="+d.get("gym_uuid")).then((function(e){console.log(e),b(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=Object(n.useState)([]),O=Object(s.a)(h,2),o=O[0],x=O[1];var u=Object(n.useState)(!1),m=Object(s.a)(u,2),p=(m[0],m[1],Object(n.useState)(!1)),v=Object(s.a)(p,2),g=(v[0],v[1],Object(n.useState)(!1)),f=Object(s.a)(g,2),y=(f[0],f[1],Object(n.useState)(!1)),S=Object(s.a)(y,2),_=S[0],w=S[1],P=Object(n.useState)(!1),N=Object(s.a)(P,2),k=N[0],A=N[1],C=Object(n.useState)(!1),D=Object(s.a)(C,2),I=(D[0],D[1],Object(n.useState)(!1)),B=Object(s.a)(I,2),E=(B[0],B[1],Object(n.useState)(!1)),F=Object(s.a)(E,2);F[0],F[1];return d.get("perms").includes("Billing")?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(j.wb,{children:[Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsxs)("div",{className:"manage_top_btn",children:[Object(i.jsx)("div",{className:"manage-btn-left",children:Object(i.jsx)(j.Q,{to:"/base/Promocodes",children:Object(i.jsxs)("button",{className:"mn_btn_1 mr-1",children:[Object(i.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"}),"Promocodes"]})})}),Object(i.jsxs)("div",{class:"btn-group group-btn-main",children:[Object(i.jsx)("button",{type:"button",class:"btn btn-primary",children:"All"}),Object(i.jsx)("button",{type:"button",class:"btn btn-success",children:"Success"}),Object(i.jsx)("button",{type:"button",class:"btn btn-warning",children:"Refund"}),Object(i.jsx)("button",{type:"button",class:"btn btn-danger",children:"Failed"})]})]})}),Object(i.jsx)(j.u,{xs:"12",lg:"12",children:Object(i.jsx)(j.j,{children:Object(i.jsx)("div",{className:"col-md-12",children:Object(i.jsx)("div",{className:"manage-table-main",children:Object(i.jsxs)("table",{class:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{class:"brd-none",children:[Object(i.jsx)("th",{children:"Customer"}),Object(i.jsx)("th",{children:"Type"}),Object(i.jsx)("th",{children:"Order Date"}),Object(i.jsx)("th",{children:"Payment Status"}),Object(i.jsx)("th",{children:"Amount"}),Object(i.jsx)("th",{children:"Action"})]})}),Object(i.jsx)("tbody",{children:r.map((function(t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.subscription_user}),Object(i.jsx)("td",{children:t.package}),Object(i.jsx)("td",{children:t.created_at}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{type:"button",class:"btn btn-success",children:t.fee_status})}),Object(i.jsx)("td",{children:t.amount}),Object(i.jsxs)("td",{children:[Object(i.jsx)(j.f,{color:"primary",onClick:function(){return c=t.uuid,A(!k),w(!_),void e.get(l.a+"payments/invoice/"+c).then((function(e){console.log(e),x(e.data)}));var c},children:"Manage"})," "]})]})}))})]})})})})})]}),Object(i.jsxs)(j.gb,{show:k,onClose:A,size:"lg",children:[Object(i.jsx)(j.jb,{closeButton:!0,className:"add-user-modal",children:Object(i.jsx)(j.kb,{children:"Invoice"})}),Object(i.jsx)(j.hb,{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{class:"row",children:Object(i.jsx)("div",{class:"col-md-12",children:Object(i.jsxs)("div",{class:"card mr-0",children:[Object(i.jsxs)("div",{class:"card-header d-flex align-items-center pd-lr-0 pd-top-0",children:["Invoice",Object(i.jsx)("strong",{}),Object(i.jsx)("a",{class:"btn btn-sm btn-secondary mfs-auto mfe-1 d-print-none",href:"#",children:"Print"}),Object(i.jsx)("a",{class:"btn btn-sm btn-danger mfe-1 d-print-none",href:"#",children:"Delete"})]}),Object(i.jsxs)("div",{class:"card-body pd-lr-0",children:[Object(i.jsxs)("div",{class:"row mb-4",children:[Object(i.jsx)("div",{class:"col-sm-12 ",children:Object(i.jsx)("h5",{class:"",children:"Details "})}),Object(i.jsxs)("div",{class:"col-sm-4 inv-details",children:[Object(i.jsxs)("div",{children:["Invoice Date : ",o.created_at]}),Object(i.jsxs)("div",{children:["Email: ",o.email]}),Object(i.jsxs)("div",{children:["Phone number: ",o.ph_no]})]}),Object(i.jsxs)("div",{class:"col-sm-4 inv-details",children:[Object(i.jsx)("div",{children:"Payment type : CASH "}),Object(i.jsxs)("div",{children:["Payment Status: ",Object(i.jsx)("span",{class:"act",children:" Paid "}),"  "]}),Object(i.jsxs)("div",{children:["Status: ",Object(i.jsx)("span",{class:"act",children:" Active "})," "]})]})]}),Object(i.jsx)("div",{class:"table-responsive-sm",children:Object(i.jsxs)("table",{class:"table table-striped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{class:"center",children:"#"}),Object(i.jsx)("th",{children:"Package"}),Object(i.jsx)("th",{children:"Passes"}),Object(i.jsx)("th",{children:"Valid upto"}),Object(i.jsx)("th",{children:"Price"})]})}),Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{class:"",children:"1"}),Object(i.jsx)("td",{class:"",children:o.package}),Object(i.jsx)("td",{class:"",children:o.passes}),Object(i.jsx)("td",{class:"",children:o.subscription_validity}),Object(i.jsxs)("td",{class:"",children:["$",o.amount]})]})})]})}),Object(i.jsx)("div",{class:"row",children:Object(i.jsx)("div",{class:"col-lg-4 col-sm-5 ml-auto",children:Object(i.jsx)("table",{class:"table table-clear",children:Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{class:"left",children:Object(i.jsx)("strong",{children:"Total"})}),Object(i.jsx)("td",{class:"right",children:Object(i.jsxs)("strong",{children:["$",o.amount]})})]})})})})})]})]})})})})})]})]}):window.location.href="#/dashboard"}}}]);
//# sourceMappingURL=41.77af9696.chunk.js.map