(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[45],{801:function(e,t,s){"use strict";s.r(t);var c=s(664),r=s.n(c),n=s(665),l=s(659),a=s(2),i=s(666),o=s.n(i),d=s(657),m=(s(658),s(660)),u=s(661),b=s(24);t.default=function(){var e=new m.a;console.log(e.get("gym_uuid"));var t=Object(a.useState)(!1),c=Object(l.a)(t,2),i=(c[0],c[1],Object(a.useState)(!1)),j=Object(l.a)(i,2),p=(j[0],j[1],Object(a.useState)(!1)),h=Object(l.a)(p,2),O=(h[0],h[1],Object(a.useState)(!1)),x=Object(l.a)(O,2),g=x[0],f=x[1],_=Object(a.useState)(!1),v=Object(l.a)(_,2),y=v[0],w=v[1],S=Object(a.useState)(!1),k=Object(l.a)(S,2),E=(k[0],k[1],Object(a.useState)(!1)),B=Object(l.a)(E,2),C=(B[0],B[1],Object(a.useState)(!1)),I=Object(l.a)(C,2),N=(I[0],I[1],Object(a.useState)([])),M=Object(l.a)(N,2),T=M[0],A=M[1],V=Object(a.useState)([]),D=Object(l.a)(V,2),F=D[0],P=D[1],q=Object(a.useState)([]),z=Object(l.a)(q,2),G=z[0],J=z[1],L=s(662);function U(){return(U=Object(n.a)(r.a.mark((function t(){var s,c,n,l,a,i,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=document.getElementById("membership_title").value,c=document.getElementById("membership_description").value,n=document.getElementById("membership_duration").value,l=document.getElementById("membership_amount").value,a=document.getElementById("membership_age_group").value,i=o()("#select_location").val(),console.log("Trying to send request"),t.prev=7,'<div><div class="loader centered"/></div>',console.log("Trying"),t.next=12,L.post(u.a+"gymprofile/membership/",{membership_title:s,membership_description:c,membership_duration:n,membership_amount:l,membership_age_group:a,select_location:i,gym:e.get("gym_uuid")});case 12:return 200===(d=t.sent).status&&(console.log(d.status),console.log(d.data),window.location.reload()),t.abrupt("return",d.data);case 17:t.prev=17,t.t0=t.catch(7),console.error("Signup Failed , Please try again."),window.location.reload(),alert(t.t0);case 22:case"end":return t.stop()}}),t,null,[[7,17]])})))).apply(this,arguments)}Object(a.useEffect)((function(){L.get(u.a+"gymprofile/membership/?gym_id="+e.get("gym_uuid")).then((function(e){console.log(e),A(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){L.get(u.a+"gymprofile/age_group/").then((function(e){console.log(e),P(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){L.get(u.a+"gymprofile/location/?gym="+e.get("gym_uuid")).then((function(e){console.log(e),J(e.data)})).catch((function(e){console.log(e)}))}),[]);var W=Object(a.useState)(["ffgyu","fghj"]),H=Object(l.a)(W,2),K=H[0],Q=H[1];function R(){return(R=Object(n.a)(r.a.mark((function e(){var t,s,c,n,l,a,i,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("update_membership_title").value,s=document.getElementById("update_membership_description").value,c=document.getElementById("update_membership_duration").value,n=document.getElementById("update_membership_amount").value,l=document.getElementById("update_membership_age_group").value,a=document.getElementById("update_uuid").value,i=o()("#update_select_location").val(),console.log("Trying to send request"),e.prev=8,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=13,L.patch(u.a+"gymprofile/membership/"+a+"/",{membership_title:t,membership_description:s,membership_duration:c,membership_amount:n,membership_age_group:l,select_location:i,uuid:a});case 13:return 200===(d=e.sent).status&&(console.log(d.status),console.log(d.data),window.location.reload()),e.abrupt("return",d.data);case 18:e.prev=18,e.t0=e.catch(8),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 23:case"end":return e.stop()}}),e,null,[[8,18]])})))).apply(this,arguments)}function X(){return(X=Object(n.a)(r.a.mark((function e(t){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log("Trying to send request"),e.prev=2,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=7,L.delete(u.a+"gymprofile/membership/"+t+"/",{uuid:t});case 7:return 200===(s=e.sent).status&&(console.log(s.status),console.log(s.data),window.location.reload()),e.abrupt("return",s.data);case 12:e.prev=12,e.t0=e.catch(2),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return e.get("perms").includes("Product")?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(d.wb,{children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"manage_top_btn",children:[Object(b.jsx)("div",{className:"manage-btn-left",children:Object(b.jsxs)("button",{className:"mn_btn_1 mr-1",onClick:function(){return f(!g)},children:[" ",Object(b.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"})," Add New Membership "]})}),Object(b.jsxs)("div",{class:"btn-group group-btn-main",children:[Object(b.jsx)("button",{type:"button",class:"btn btn-success",children:"Active"}),Object(b.jsx)("button",{type:"button",class:"btn btn-danger",children:"Inactive"})]})]})}),Object(b.jsx)(d.u,{xs:"12",lg:"12",children:Object(b.jsx)(d.j,{children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("div",{className:"manage-table-main",children:Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Duration"}),Object(b.jsx)("th",{children:"Fees"}),Object(b.jsx)("th",{children:"Action"})]})}),Object(b.jsx)("tbody",{children:T.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.membership_title}),Object(b.jsx)("td",{children:e.membership_duration}),Object(b.jsx)("td",{children:e.membership_amount}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.f,{color:"primary",onClick:function(){return t=e.uuid,w(!y),void L.get(u.a+"gymprofile/membership/"+t).then((function(e){console.log(e),Q(e.data)}));var t},children:"Manage"})," ",Object(b.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return function(e){return X.apply(this,arguments)}(e.uuid)},children:Object(b.jsx)("i",{class:"fa fa-trash-o","aria-hidden":"true"})})]})]})}))})]})})})})})]}),Object(b.jsxs)(d.gb,{show:g,onClose:f,size:"lg",children:[Object(b.jsx)(d.jb,{closeButton:!0,className:"add-user-modal",children:Object(b.jsx)(d.kb,{children:"Add New Membership"})}),Object(b.jsx)(d.hb,{children:Object(b.jsx)("div",{class:"col-md-12",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Membership Title ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"membership_title",name:"membership_title",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"membership_description",children:["Membership Description  ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"membership_description",name:"membership_description",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"membership_duration",children:["Duration(Weeks) ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"membership_duration",name:"membership_duration",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"select_location",children:["Location ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("select",{id:"select_location",name:"select_location",class:"form-control",children:G.map((function(e){return Object(b.jsxs)("option",{value:e.uuid,children:[" ",e.gym_location," "]})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Age Group ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("select",{id:"membership_age_group",name:"membership_age_group",class:"form-control",children:F.map((function(e){return Object(b.jsxs)("option",{value:e.uuid,children:[" ",e.age," "]})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Amount ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"membership_amount",name:"membership_amount",class:"form-control"})]})})]})})}),Object(b.jsx)(d.ib,{children:Object(b.jsxs)("div",{className:"col-md-12 text-center",children:[Object(b.jsx)(d.f,{color:"primary",onClick:function(){return U.apply(this,arguments)},children:"Save"})," ",Object(b.jsx)(d.f,{color:"secondary",onClick:function(){return f(!1)},children:"Close"})]})})]}),Object(b.jsxs)(d.gb,{show:y,onClose:w,size:"lg",children:[Object(b.jsx)(d.jb,{closeButton:!0,className:"add-user-modal",children:Object(b.jsx)(d.kb,{children:"Update Membership"})}),Object(b.jsx)(d.hb,{children:Object(b.jsx)("div",{class:"card-body",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Membership Title ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"update_membership_title",name:"update_membership_title",class:"form-control",defaultValue:K.membership_title}),Object(b.jsx)("input",{type:"hidden",id:"update_uuid",name:"update_uuid",value:K.uuid})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Membership Description ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("textarea",{type:"text",id:"update_membership_description",name:"update_membership_description",class:"form-control",defaultValue:K.membership_description})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Membership Duration ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"update_membership_duration",name:"update_membership_duration",class:"form-control",defaultValue:K.membership_duration})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Membership Amount",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"update_membership_amount",name:"update_membership_amount",class:"form-control",defaultValue:K.membership_amount})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Age Group",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:"hint form-label",for:"first_name",children:["Current -",K.membership_age_group]}),Object(b.jsx)("select",{name:"update_membership_age_group",class:"form-control",defaultValue:K.membership_age_group,id:"update_membership_age_group",children:F.map((function(e){return Object(b.jsx)("option",{value:e.uuid,children:e.age})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"gender",children:["Location",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:"hint form-label",for:"first_name",children:["Current -",K.select_location]}),Object(b.jsx)("select",{id:"update_select_location",defaultValue:K.select_location,name:"update_select_location",class:"form-control",children:G.map((function(e){return Object(b.jsx)("option",{value:e.uuid,children:e.gym_location})}))})]})})]})})}),Object(b.jsxs)(d.ib,{children:[Object(b.jsx)(d.f,{color:"primary",onClick:function(){return R.apply(this,arguments)},children:"Save"})," ",Object(b.jsx)(d.f,{color:"secondary",onClick:function(){return w(!1)},children:"Close"})]})]})]}):window.location.href="#/dashboard"}}}]);
//# sourceMappingURL=45.0b19e6e1.chunk.js.map