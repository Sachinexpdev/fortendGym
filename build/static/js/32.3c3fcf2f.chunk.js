(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{800:function(e,t,c){"use strict";c.r(t);var s=c(664),n=c.n(s),l=c(665),r=c(659),a=c(2),o=c(666),i=c.n(o),d=c(657),u=(c(658),c(661)),j=c(660),b=c(24),m=new j.a;console.log(m.get("gym_uuid"));t.default=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=(t[0],t[1],Object(a.useState)(!1)),o=Object(r.a)(s,2),j=(o[0],o[1],Object(a.useState)(!1)),f=Object(r.a)(j,2),h=(f[0],f[1],Object(a.useState)(!1)),p=Object(r.a)(h,2),O=p[0],x=p[1],g=Object(a.useState)(!1),_=Object(r.a)(g,2),v=(_[0],_[1],Object(a.useState)(!1)),y=Object(r.a)(v,2),S=(y[0],y[1],Object(a.useState)(!1)),w=Object(r.a)(S,2),C=(w[0],w[1],Object(a.useState)(!1)),E=Object(r.a)(C,2),I=(E[0],E[1],Object(a.useState)([])),A=Object(r.a)(I,2),B=A[0],k=A[1],V=Object(a.useState)([]),N=Object(r.a)(V,2),T=N[0],D=N[1],L=Object(a.useState)([]),F=Object(r.a)(L,2),J=F[0],P=F[1],q=Object(a.useState)([]),Q=Object(r.a)(q,2),U=Q[0],z=Q[1],G=Object(a.useState)([]),M=Object(r.a)(G,2),R=M[0],H=M[1],K=c(662);Object(a.useEffect)((function(){K.get(u.a+"gymprofile/get_courses_admin?gym_id="+m.get("gym_uuid")).then((function(e){console.clear(),console.log(e),k(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){K.get(u.a+"gymprofile/location/?gym="+m.get("gym_uuid")).then((function(e){console.log(e),D(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){K.get(u.a+"gymprofile/age_group/").then((function(e){console.log(e),P(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){K.get(u.a+"gymprofile/instructor/?gym_id="+m.get("gym_uuid")).then((function(e){console.log(e),z(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){K.get(u.a+"gymprofile/weekdays/").then((function(e){console.log(e),H(e.data)})).catch((function(e){console.log(e)}))}),[]);var W=Object(a.useState)([]),X=Object(r.a)(W,2),Y=X[0],Z=X[1];function $(){return($=Object(l.a)(n.a.mark((function e(){var t,c,s,l,r,a,o,d,j,b,m,f,h,p,O,x,g,_;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("course_name").value,c=document.getElementById("course_description").value,s=document.querySelector("#course_image"),l=document.getElementById("start_time").value,r=document.getElementById("end_time").value,a=document.getElementById("course_start_date").value,o=document.getElementById("course_end_date").value,d=document.getElementById("no_of_participants").value,j=document.getElementById("course_price").value,b=document.getElementById("course_age_group").value,m=document.getElementById("instructor_info").value,f=document.getElementById("select_location").value,h=i()("#course_scheduled_on").val(),p=document.getElementById("uuid").value,O=document.getElementById("level").value,(x=new FormData).append("course_name",t),x.append("course_description",c),x.append("start_time",l),x.append("end_time",r),x.append("course_start_date",a),x.append("course_end_date",o),x.append("no_of_participants",d),x.append("course_price",j),x.append("course_age_group",b),x.append("instructor_info",m),x.append("select_location",f),x.append("uuid",p),x.append("level",O),s.files[0]&&x.append("course_image",s.files[0]),h)for(g=0;g<h.length;g++)x.append("course_scheduled_on",h[g]);return e.prev=31,console.log("Trying"),_={method:"patch",url:u.a+"gymprofile/course/"+p+"/",headers:{"content-type":"multipart/form-data; boundary=".concat(x._boundary)},data:x},e.next=36,K(_).then((function(e){return console.log(JSON.stringify(e.data)),200===e.status&&(200===e.status?window.location.reload():alert("BAD REQUEST")),e.data}));case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(31),console.error(e.t0);case 41:case"end":return e.stop()}}),e,null,[[31,38]])})))).apply(this,arguments)}function ee(){return(ee=Object(l.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Trying to send request"),e.prev=1,'<div><div class="loader centered"/></div>',console.log("Trying"),e.next=6,K.delete(u.a+"gymprofile/course/"+t+"/",{uuid:t});case 6:return 200===(c=e.sent).status&&(console.log(c.status),console.log(c.data),window.location.reload()),e.abrupt("return",c.data);case 11:e.prev=11,e.t0=e.catch(1),console.error("Signup Failed , Please try again."),window.location.reload(),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return m.get("perms").includes("Product")?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(d.wb,{children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"manage_top_btn",children:[Object(b.jsx)("div",{className:"manage-btn-left",children:Object(b.jsx)(d.Q,{to:"AddCourse/Addcourse",children:Object(b.jsxs)("button",{className:"mn_btn_1 mr-1",children:[Object(b.jsx)("i",{class:"fa fa-plus-circle","aria-hidden":"true"}),"Add Course"]})})}),Object(b.jsxs)("div",{class:"btn-group group-btn-main",children:[Object(b.jsx)("button",{type:"button",class:"btn btn-primary",children:"All"}),Object(b.jsx)("button",{type:"button",class:"btn btn-success",children:"Adult"}),Object(b.jsx)("button",{type:"button",class:"btn btn-warning",children:"Teen"}),Object(b.jsx)("button",{type:"button",class:"btn btn-danger",children:"Children"})]})]})}),Object(b.jsx)(d.u,{xs:"12",lg:"12",children:Object(b.jsx)(d.j,{children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("div",{className:"manage-table-main",children:Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Age group"}),Object(b.jsx)("th",{children:"Instructor"}),Object(b.jsx)("th",{children:"Active"}),Object(b.jsx)("th",{children:"Cover Image"}),Object(b.jsx)("th",{children:"Action"})]})}),Object(b.jsx)("tbody",{children:B.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.course_name}),Object(b.jsx)("td",{children:"Class"}),Object(b.jsx)("td",{children:"Adult"}),Object(b.jsx)("td",{children:e.instructor_name}),Object(b.jsx)("td",{children:Object(b.jsxs)("label",{class:"switch",children:[Object(b.jsx)("input",{type:"checkbox"}),Object(b.jsx)("span",{class:"slider round"})]})}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)("img",{className:"class-cover-img",src:u.a+e.course_image})," "]}),Object(b.jsxs)("td",{children:[Object(b.jsx)(d.f,{color:"primary",onClick:function(){return t=e.uuid,x(!O),void K.get(u.a+"gymprofile/course/"+t).then((function(e){console.log(e),Z(e.data)}));var t},children:"Manage"})," ",Object(b.jsx)("button",{type:"button",onClick:function(){return function(e){return ee.apply(this,arguments)}(e.uuid)},class:"btn btn-danger",children:Object(b.jsx)("i",{class:"fa fa-trash-o","aria-hidden":"true"})})]})]})}))})]})})})})})]}),Object(b.jsxs)(d.gb,{show:O,onClose:x,size:"lg",children:[Object(b.jsx)(d.jb,{closeButton:!0,className:"add-user-modal",children:Object(b.jsx)(d.kb,{children:"Update Course"})}),Object(b.jsx)(d.hb,{children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group border-bottom-0 ",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Course Title ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("span",{class:"desc"}),Object(b.jsxs)("div",{class:"controls",children:[Object(b.jsx)("input",{type:"text",id:"course_name",defaultValue:Y.course_name,name:"course_name",class:"form-control"}),Object(b.jsx)("input",{type:"hidden",id:"uuid",name:"uuid",value:Y.uuid})]})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group border-bottom-0 ",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Course description",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("span",{class:"desc"}),Object(b.jsx)("div",{class:"controls",children:Object(b.jsx)("textarea",{type:"text",id:"course_description",name:"course_description",defaultValue:Y.course_description,class:"form-control"})})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Participation Number ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",defaultValue:Y.no_of_participants,id:"no_of_participants",name:"no_of_participants",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Course Image  ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:"hint form-label",for:"first_name",children:["Current Image - ",Y.course_image," "]}),Object(b.jsx)("input",{type:"file",id:"course_image",defaultValue:Y.course_image,name:"course_image",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Start Time ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"time",id:"start_time",defaultValue:Y.start_time,name:"start_time",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["End Time ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"time",id:"end_time",name:"end_time",defaultValue:Y.end_time,class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Start Date ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"date",id:"course_start_date",name:"course_start_date",defaultValue:Y.course_start_date,class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["End Date ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"date",id:"course_end_date",defaultValue:Y.course_end_date,name:"course_end_date",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Age Group ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:"hint form-label",children:["Current - ",Y.course_age_group]}),Object(b.jsx)("select",{id:"course_age_group",name:"course_age_group",defaultValue:Y.course_age_group,class:"form-control",children:J.map((function(e){return Object(b.jsxs)("option",{value:e.uuid,children:[" ",e.age," "]})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Course Schedule ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:"hint form-label",for:"first_name",children:["Current Schedule -",Y.course_scheduled_on]}),Object(b.jsx)("select",{name:"course_scheduled_on",class:"form-control",id:"course_scheduled_on",multiple:!0,children:R.map((function(e){return Object(b.jsx)("option",{value:e.uuid,children:e.day})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Location ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:" hint form-label",for:"first_name",children:[" Current  - ",Y.select_location,"  "]}),Object(b.jsx)("select",{id:"select_location",defaultValue:Y.select_location,name:"select_location",class:"form-control",children:T.map((function(e){return Object(b.jsxs)("option",{value:e.uuid,children:[" ",e.gym_location," "]})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Instructor ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:"hint form-label",for:"first_name",children:["Current - ",Y.instructor_info," "]}),Object(b.jsx)("select",{id:"instructor_info",defaultValue:Y.instructor_info,name:"instructor_info",class:"form-control",children:U.map((function(e){return Object(b.jsxs)("option",{value:e.uuid,children:[" ",e.instructor_info," "]})}))})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsxs)("label",{class:"form-label",for:"first_name",children:["Amount ",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsx)("input",{type:"text",id:"course_price",defaultValue:Y.course_price,name:"course_price",class:"form-control"})]})}),Object(b.jsx)("div",{class:"col-sm-6",children:Object(b.jsxs)("div",{class:"form-group border-bottom-0 ",children:[Object(b.jsxs)("label",{class:"form-label",for:"gender",children:["Level",Object(b.jsx)("span",{class:"text-danger",children:" * "})]}),Object(b.jsxs)("label",{class:" hint form-label",for:"first_name",children:["Current - ",Y.level," "]}),Object(b.jsx)("span",{class:"desc"}),Object(b.jsx)("div",{class:"controls",children:Object(b.jsxs)("select",{id:"level",name:"level",class:"form-control",children:[Object(b.jsx)("option",{value:"All Levels",children:"All Levels"}),Object(b.jsx)("option",{value:"Intermediate",children:"Intermediate"}),Object(b.jsx)("option",{value:"Advance",children:"Advance"})]})})]})})]})}),Object(b.jsxs)(d.ib,{children:[Object(b.jsx)(d.f,{color:"primary",onClick:function(){return $.apply(this,arguments)},children:"Save"})," ",Object(b.jsx)(d.f,{color:"secondary",onClick:function(){return x(!1)},children:"Close"})]})]})]}):window.location.href="#/dashboard"}}}]);
//# sourceMappingURL=32.3c3fcf2f.chunk.js.map