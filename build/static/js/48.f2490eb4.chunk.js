(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[48],{804:function(e,t,c){"use strict";c.r(t);var l=c(664),s=c.n(l),a=c(665),n=c(659),o=c(2),r=(c(666),c(657)),i=(c(658),c(660)),d=c(661),j=c(24),u=new i.a;console.log(u.get("gym_uuid"));t.default=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),l=t[0],i=t[1];Object(o.useEffect)((function(){b.get(d.a+"gymprofile/policy/?gym_id="+u.get("gym_uuid")).then((function(e){console.log(e),i(e.data)})).catch((function(e){console.log(e)}))}),[]);var b=c(662),p=Object(o.useState)(["ffgyu","fghj"]),x=Object(n.a)(p,2),O=x[0],h=x[1];function y(){return(y=Object(a.a)(s.a.mark((function e(){var t,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("policy_title").value,c=document.getElementById("policy_text").value,console.log("Trying to send request"),e.prev=3,console.log("Trying"),e.next=7,b.post(d.a+"gymprofile/policy/",{policy_title:t,policy_text:c,gym:u.get("gym_uuid")});case 7:return 200===(l=e.sent).status&&(console.log(l.status),console.log(l.data),window.location.reload()),e.abrupt("return",l.data);case 12:e.prev=12,e.t0=e.catch(3),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}function m(){return(m=Object(a.a)(s.a.mark((function e(){var t,c,l,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("update_policy_title").value,c=document.getElementById("update_policy_text").value,l=document.getElementById("update_uuid").value,console.log("Trying to send request"),e.prev=4,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=9,b.patch(d.a+"gymprofile/policy/"+l+"/",{policy_title:t,policy_text:c,uuid:l});case 9:return 200===(a=e.sent).status&&(console.log(a.status),console.log(a.data),window.location.reload()),e.abrupt("return",a.data);case 14:e.prev=14,e.t0=e.catch(4),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}function g(){return(g=Object(a.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log("Trying to send request"),e.prev=2,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=7,b.delete(d.a+"gymprofile/policy/"+t+"/",{uuid:t});case 7:return 200===(c=e.sent).status&&(console.log(c.status),console.log(c.data),window.location.reload()),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(2),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}var f=Object(o.useState)(!1),v=Object(n.a)(f,2),_=(v[0],v[1],Object(o.useState)(!1)),w=Object(n.a)(_,2),S=(w[0],w[1],Object(o.useState)(!1)),k=Object(n.a)(S,2),C=(k[0],k[1],Object(o.useState)(!1)),N=Object(n.a)(C,2),P=N[0],B=N[1],E=Object(o.useState)(!1),T=Object(n.a)(E,2),I=T[0],F=T[1],q=Object(o.useState)(!1),A=Object(n.a)(q,2),z=(A[0],A[1],Object(o.useState)(!1)),J=Object(n.a)(z,2),V=(J[0],J[1],Object(o.useState)(!1)),G=Object(n.a)(V,2),M=(G[0],G[1],Object(o.useState)([])),Q=Object(n.a)(M,2);Q[0],Q[1];return u.get("perms").includes("Gymprofile")?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(r.wb,{children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)("div",{className:"manage_top_btn",children:Object(j.jsx)("div",{className:"manage-btn-left",children:Object(j.jsx)(r.Q,{children:Object(j.jsxs)("button",{className:"mn_btn_1 mr-1",onClick:function(){return B(!P)},children:[" ",Object(j.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"})," Add New Policy "]})})})})}),Object(j.jsx)(r.u,{xs:"12",lg:"12",children:Object(j.jsx)(r.j,{children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)("div",{className:"manage-table-main",children:Object(j.jsxs)("table",{class:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Policy"}),Object(j.jsx)("th",{children:"Action"})]})}),l[0]?l.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.policy_title}),Object(j.jsxs)("td",{children:[Object(j.jsx)(r.f,{color:"primary",onClick:function(){return t=e.uuid,F(!I),void b.get(d.a+"gymprofile/policy/"+t).then((function(e){console.log(e),h(e.data)}));var t},children:"Manage"})," ",Object(j.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return function(e){return g.apply(this,arguments)}(e.uuid)},children:Object(j.jsx)("i",{class:"fa fa-trash-o","aria-hidden":"true"})})]})]})})})):Object(j.jsx)("tbody",{children:Object(j.jsx)("tr",{})})]})})})})})]}),Object(j.jsxs)(r.gb,{show:P,onClose:B,size:"lg",children:[Object(j.jsx)(r.jb,{closeButton:!0,className:"add-user-modal",children:Object(j.jsx)(r.kb,{children:"Add New Policy"})}),Object(j.jsx)(r.hb,{children:Object(j.jsx)("div",{class:"col-md-12",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"policy_title",children:["Policy title",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"text",id:"policy_title",name:"policy_title",class:"form-control"})]})}),Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"policy_text",children:["Policy text",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("textarea",{type:"text",id:"policy_text",name:"policy_text",class:"form-control"})]})})]})})}),Object(j.jsx)(r.ib,{children:Object(j.jsxs)("div",{className:"col-md-12 text-center",children:[Object(j.jsx)(r.f,{color:"primary",onClick:function(){return y.apply(this,arguments)},children:"Save"})," ",Object(j.jsx)(r.f,{color:"secondary",onClick:function(){return B(!1)},children:"Close"})]})})]}),Object(j.jsxs)(r.gb,{show:I,onClose:F,size:"lg",children:[Object(j.jsx)(r.jb,{closeButton:!0,className:"add-user-modal",children:Object(j.jsx)(r.kb,{children:"Update Policy"})}),Object(j.jsx)(r.hb,{children:Object(j.jsx)("div",{class:"card-body",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"update_policy_title",children:["Policy title",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"text",id:"update_policy_title",defaultValue:O.policy_title,name:"update_policy_title",class:"form-control"}),Object(j.jsx)("input",{type:"hidden",id:"update_uuid",name:"update_uuid",value:O.uuid})]})}),Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"update_policy_text",children:["Policy text",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("textarea",{type:"text",id:"update_policy_text",defaultValue:O.policy_text,name:"update_policy_text",class:"form-control"})]})})]})})}),Object(j.jsxs)(r.ib,{children:[Object(j.jsx)(r.f,{color:"primary",onClick:function(){return m.apply(this,arguments)},children:"Save"})," ",Object(j.jsx)(r.f,{color:"secondary",onClick:function(){return F(!1)},children:"Close"})]})]})]}):window.location.href="#/dashboard"}}}]);
//# sourceMappingURL=48.f2490eb4.chunk.js.map