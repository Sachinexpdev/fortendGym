(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[38],{803:function(e,t,c){"use strict";c.r(t);var s=c(664),a=c.n(s),n=c(665),l=c(659),r=c(2),d=(c(666),c(657)),o=(c(658),c(660)),i=c(661),j=c(24),u=new o.a;console.log(u.get("gym_uuid"));t.default=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),s=t[0],o=t[1];Object(r.useEffect)((function(){b.get(i.a+"gymprofile/holidays/?gym_id="+u.get("gym_uuid")).then((function(e){console.log(e),o(e.data)})).catch((function(e){console.log(e)}))}),[]);var b=c(662),h=Object(r.useState)(["ffgyu","fghj"]),O=Object(l.a)(h,2),p=O[0],x=O[1];function m(){return(m=Object(n.a)(a.a.mark((function e(){var t,c,s,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("occasion").value,c=document.getElementById("start_date").value,s=document.getElementById("end_date").value,console.log("Trying to send request"),e.prev=4,console.log("Trying"),e.next=8,b.post(i.a+"gymprofile/holidays/",{occasion:t,start_date:c,end_date:s,gym:u.get("gym_uuid")});case 8:return 200===(n=e.sent).status&&(console.log(n.status),console.log(n.data),window.location.reload()),e.abrupt("return",n.data);case 13:e.prev=13,e.t0=e.catch(4),console.error("Signup Failed , Please try again."),window.location="/signup",alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function f(){return(f=Object(n.a)(a.a.mark((function e(){var t,c,s,n,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("update_ocassion").value,c=document.getElementById("update_start_date").value,s=document.getElementById("update_end_date").value,n=document.getElementById("update_uuid").value,console.log("Trying to send request"),e.prev=5,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=10,b.patch(i.a+"gymprofile/holidays/"+n+"/",{occasion:t,start_date:c,end_date:s,uuid:n});case 10:return 200===(l=e.sent).status&&(console.log(l.status),console.log(l.data),window.location.reload()),e.abrupt("return",l.data);case 15:e.prev=15,e.t0=e.catch(5),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 20:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}function g(){return(g=Object(n.a)(a.a.mark((function e(t){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log("Trying to send request"),e.prev=2,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=7,b.delete(i.a+"gymprofile/holidays/"+t+"/",{uuid:t});case 7:return 200===(c=e.sent).status&&(console.log(c.status),console.log(c.data),window.location.reload()),e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(2),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}var y=Object(r.useState)(!1),v=Object(l.a)(y,2),_=(v[0],v[1],Object(r.useState)(!1)),w=Object(l.a)(_,2),S=(w[0],w[1],Object(r.useState)(!1)),k=Object(l.a)(S,2),C=(k[0],k[1],Object(r.useState)(!1)),E=Object(l.a)(C,2),N=E[0],B=E[1],I=Object(r.useState)(!1),T=Object(l.a)(I,2),D=T[0],F=T[1],H=Object(r.useState)(!1),q=Object(l.a)(H,2),A=(q[0],q[1],Object(r.useState)(!1)),P=Object(l.a)(A,2),V=(P[0],P[1],Object(r.useState)(!1)),z=Object(l.a)(V,2);z[0],z[1];return u.get("perms").includes("Holidays")?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(d.wb,{children:[Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)("div",{className:"manage_top_btn",children:Object(j.jsx)("div",{className:"manage-btn-left",children:Object(j.jsx)(d.Q,{children:Object(j.jsxs)("button",{className:"mn_btn_1 mr-1",onClick:function(){return B(!N)},children:[" ",Object(j.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"})," Add New Holiday "]})})})})}),Object(j.jsx)(d.u,{xs:"12",lg:"12",children:Object(j.jsx)(d.j,{children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)("div",{className:"manage-table-main",children:Object(j.jsxs)("table",{class:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Ocassion"}),Object(j.jsx)("th",{children:"Start Date"}),Object(j.jsx)("th",{children:"End date"}),Object(j.jsx)("th",{children:"Action"})]})}),s.map((function(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.occasion}),Object(j.jsx)("td",{children:e.start_date}),Object(j.jsx)("td",{children:e.end_date}),Object(j.jsxs)("td",{children:[Object(j.jsx)(d.f,{color:"primary",onClick:function(){return t=e.uuid,F(!D),void b.get(i.a+"gymprofile/holidays/"+t).then((function(e){console.log(e),x(e.data)}));var t},children:"Manage"})," ",Object(j.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return function(e){return g.apply(this,arguments)}(e.uuid)},children:Object(j.jsx)("i",{class:"fa fa-trash-o","aria-hidden":"true"})})]})]})})}))]})})})})})]}),Object(j.jsxs)(d.gb,{show:N,onClose:B,size:"lg",children:[Object(j.jsx)(d.jb,{closeButton:!0,className:"add-user-modal",children:Object(j.jsx)(d.kb,{children:"Add New Holiday"})}),Object(j.jsx)(d.hb,{children:Object(j.jsx)("div",{class:"col-md-12",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"ocassion",children:["Ocassion",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"text",id:"occasion",name:"ocassion",class:"form-control"})]})}),Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"date",children:["Start Date",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"date",id:"start_date",name:"start_date",class:"form-control"})]})}),Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"date",children:["End Date",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"date",id:"end_date",name:"end_date",class:"form-control"})]})})]})})}),Object(j.jsx)(d.ib,{children:Object(j.jsxs)("div",{className:"col-md-12 text-center",children:[Object(j.jsx)(d.f,{color:"primary",onClick:function(){return m.apply(this,arguments)},children:"Save"})," ",Object(j.jsx)(d.f,{color:"secondary",onClick:function(){return B(!1)},children:"Close"})]})})]}),Object(j.jsxs)(d.gb,{show:D,onClose:F,size:"lg",children:[Object(j.jsx)(d.jb,{closeButton:!0,className:"add-user-modal",children:Object(j.jsx)(d.kb,{children:"Update Holiday"})}),Object(j.jsx)(d.hb,{children:Object(j.jsx)("div",{class:"card-body",children:Object(j.jsxs)("div",{class:"row",children:[Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"ocassion",children:["Ocassion ",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"text",id:"update_ocassion",defaultValue:p.occasion,name:"class_topic",class:"form-control"}),Object(j.jsx)("input",{type:"hidden",id:"update_uuid",name:"update_uuid",value:p.uuid})]})}),Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"date",children:["Start Date",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"date",id:"update_start_date",defaultValue:p.start_date,name:"update_date",class:"form-control"})]})}),Object(j.jsx)("div",{class:"col-sm-6",children:Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsxs)("label",{class:"form-label",for:"date",children:["End Date",Object(j.jsx)("span",{class:"text-danger",children:" * "})]}),Object(j.jsx)("input",{type:"date",id:"update_end_date",defaultValue:p.end_date,name:"update_duration",class:"form-control"})]})})]})})}),Object(j.jsxs)(d.ib,{children:[Object(j.jsx)(d.f,{color:"primary",onClick:function(){return f.apply(this,arguments)},children:"Save"})," ",Object(j.jsx)(d.f,{color:"secondary",onClick:function(){return F(!1)},children:"Close"})]})]})]}):window.location.href="#/dashboard"}}}]);
//# sourceMappingURL=38.c00bbf17.chunk.js.map