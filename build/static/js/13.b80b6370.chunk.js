(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{702:function(e,t,c){"use strict";t.a=[{title:"Packages",id:"1"},{title:"Dashboard",id:"2"},{title:"CRM",id:"3"},{title:"Product",id:"4"},{title:"Instructor",id:"5"},{title:"Bookings",id:"6"},{title:"Billing",id:"7"},{title:"Expenses",id:"8"},{title:"Reports",id:"9"},{title:"Billing",id:"10"},{title:"Holidays",id:"11"},{title:"Calender",id:"12"},{title:"Membership",id:"13"},{title:"Users",id:"14"},{title:"Gymprofile",id:"15"}]},819:function(e,t,c){"use strict";c.r(t);var s=c(664),n=c.n(s),i=c(665),r=c(659),a=c(2),l=c(657),o=(c(658),c(661)),d=c(660),j=c(702),u=c(666),b=c.n(u),h=c(24),m=new d.a;console.log(j.a);t.default=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=(t[0],t[1],Object(a.useState)(!1)),d=Object(r.a)(s,2),u=(d[0],d[1],Object(a.useState)(!1)),O=Object(r.a)(u,2),x=(O[0],O[1],Object(a.useState)(!1)),p=Object(r.a)(x,2),f=p[0],g=p[1],v=Object(a.useState)(!1),y=Object(r.a)(v,2),_=y[0],w=y[1],k=Object(a.useState)(!1),N=Object(r.a)(k,2),S=(N[0],N[1],Object(a.useState)(!1)),C=Object(r.a)(S,2),P=(C[0],C[1],Object(a.useState)(!1)),A=Object(r.a)(P,2),B=(A[0],A[1],Object(a.useState)([])),R=Object(r.a)(B,2),E=R[0],I=R[1],M=Object(a.useState)([]),z=Object(r.a)(M,2),J=(z[0],z[1],Object(a.useState)([])),U=Object(r.a)(J,2),D=U[0],F=U[1],G=c(662);Object(a.useEffect)((function(){G.get(o.a+"user/roles/permissions/?gym="+m.get("gym_uuid")).then((function(e){console.log(e.data),F(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){G.get(o.a+"gymprofile/gymroles/?gym="+m.get("gym_uuid")).then((function(e){console.log(e.data),I(e.data)})).catch((function(e){console.log(e)}))}),[]);var H=Object(a.useState)([]),V=Object(r.a)(H,2),q=V[0],K=(V[1],Object(a.useState)([])),L=Object(r.a)(K,2),Q=L[0];L[1];function T(){return(T=Object(i.a)(n.a.mark((function e(){var t,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.a+"user/roles/permissions/",c=new Array,s=document.getElementById("role").value,j.a.map((function(e){b()("#"+e.id).is(":checked")&&c.push(e.title)})),i={url:t,method:"post",data:{permissions_list:c,for_role:s,gym:m.get("gym_uuid")}},G(i).then((function(e){alert(e.data),window.location.reload()})).catch((function(e){}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(i.a)(n.a.mark((function e(t){var c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=o.a+"user/roles/permissions/"+t+"/",s=new Array,i=document.getElementById("update_role").value,j.a.map((function(e){b()("#update_"+e.id).is(":checked")&&s.push(e.title)})),G({url:c,method:"put",data:{permissions_list:s,for_role:i}}).then((function(e){alert(e.data),window.location.reload()})).catch((function(e){}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(i.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.a+"user/roles/permissions/"+t,e.next=3,G.delete(c);case 3:204===e.sent.status&&window.location.reload();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return m.get("perms").includes("Role and Permissions")?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(l.wb,{children:[Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("div",{className:"manage_top_btn",children:Object(h.jsxs)("div",{className:"manage-btn-left",children:[Object(h.jsxs)("button",{className:"mn_btn_1 mr-1",onClick:function(){return g(!f)},children:[" ",Object(h.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"})," Add Permission "]}),Object(h.jsxs)("button",{className:"mn_btn_1 mr-1",onClick:function(){return window.location.href="#/base/roles"},children:[" ",Object(h.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"})," Manage Roles "]})]})})}),Object(h.jsx)(l.u,{xs:"12",lg:"12",children:Object(h.jsx)(l.j,{children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsx)("div",{className:"manage-table-main",children:Object(h.jsxs)("table",{class:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Role"}),Object(h.jsx)("th",{children:"Permissions"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:D.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.for_role}),Object(h.jsx)("td",{children:e.permissions_list}),Object(h.jsx)("td",{children:"Admin"!==e.for_role&&Object(h.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return function(e){return X.apply(this,arguments)}(e.uuid)},children:Object(h.jsx)("i",{class:"fa fa-trash-o","aria-hidden":"true"})})})]})}))})]})})})})})]}),Object(h.jsxs)(l.gb,{show:f,onClose:g,size:"lg",children:[Object(h.jsx)(l.jb,{closeButton:!0,className:"add-user-modal",children:Object(h.jsx)(l.kb,{children:"Add Permission"})}),Object(h.jsx)(l.hb,{children:Object(h.jsx)("div",{class:"col-md-12",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-sm-6",children:Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{class:"form-label",for:"expense_name",children:"Role"}),Object(h.jsx)("select",{id:"role",class:"form-control",children:E.map((function(e){return"Admin"!==e.user_roles&&Object(h.jsxs)("option",{value:e.uuid,children:[" ",e.user_roles," "]})}))})]})}),Object(h.jsx)(l.u,{md:"12",children:Object(h.jsx)(l.cb,{className:"mr-0",children:"Permissions"})}),Object(h.jsx)(l.u,{md:"12",children:Object(h.jsx)("div",{className:"row",children:j.a.map((function(e){return Object(h.jsx)("div",{className:"col-xs-4",children:Object(h.jsxs)("label",{className:"container_signup",children:[e.title,Object(h.jsx)("input",{id:e.id,value:e.title,type:"checkbox"}),Object(h.jsx)("span",{className:"checkmark"})]})})}))})})]})})}),Object(h.jsx)(l.ib,{children:Object(h.jsxs)("div",{className:"col-md-12 text-center",children:[Object(h.jsx)(l.f,{color:"primary",onClick:function(){return function(){return T.apply(this,arguments)}()},children:"Save"})," ",Object(h.jsx)(l.f,{color:"secondary",onClick:function(){return g(!1)},children:"Close"})]})})]}),Object(h.jsxs)(l.gb,{show:_,onClose:w,size:"lg",children:[Object(h.jsx)(l.jb,{closeButton:!0,className:"add-user-modal",children:Object(h.jsx)(l.kb,{children:"Update Permission"})}),Object(h.jsx)(l.hb,{children:Object(h.jsx)("div",{class:"card-body",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-sm-6",children:Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{class:"form-label",for:"expense_name",children:"Role"}),Object(h.jsx)("input",{type:"text",defaultValue:q.for_role,id:"update_role",name:"first_name",class:"form-control"})]})}),Object(h.jsx)(l.u,{md:"12",children:Object(h.jsx)(l.cb,{className:"mr-0",children:"Permissions"})}),Object(h.jsx)(l.u,{md:"12",children:j.a.map((function(e){return Object(h.jsx)("div",{className:"col-xs-4",children:Object(h.jsxs)("label",{className:"container_signup",children:[e.title,Q.includes(e.title)?Object(h.jsx)("input",{id:"update_"+e.title,value:e.title,checked:!0,type:"checkbox"}):Object(h.jsx)("input",{id:"update_"+e.title,value:e.title,type:"checkbox"}),Object(h.jsx)("span",{className:"checkmark"})]})})}))})]})})}),Object(h.jsxs)(l.ib,{children:[Object(h.jsx)(l.f,{color:"primary",onClick:function(){return function(e){return W.apply(this,arguments)}(q.uuid)},children:"Save"})," ",Object(h.jsx)(l.f,{color:"secondary",onClick:function(){return w(!1)},children:"Close"})]})]})]}):window.location.href="#/dashboard"}}}]);
//# sourceMappingURL=13.b80b6370.chunk.js.map