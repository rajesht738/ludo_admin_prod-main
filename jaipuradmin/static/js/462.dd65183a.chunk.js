"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[462],{7727:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var s=r(4165),a=r(5861),t=r(9439),o=r(4569),l=r.n(o),i=r(2791),c=r(9271),d=r(184);function m(){var e,n=(0,c.k6)(),r=(0,i.useState)(),o=(0,t.Z)(r,2),m=o[0],u=o[1],h=(0,i.useState)(),p=(0,t.Z)(h,2),f=p[0],x=p[1],g=(0,i.useState)(),j=(0,t.Z)(g,2),w=j[0],b=j[1],v=(0,i.useState)(),N=(0,t.Z)(v,2),k=N[0],C=N[1],y=(0,i.useState)("Admin"),A=(0,t.Z)(y,2),Z=A[0],P=A[1];e="https://api.rkludo.in/";var _=function(){var r=(0,a.Z)((0,s.Z)().mark((function r(a){return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),w===k){r.next=5;break}alert("Passwords don't match"),r.next=8;break;case 5:return r.next=7,l().post(e+"admin/register",{Name:m,Phone:f,Password:w,user_type:Z}).then((function(e){n.push("/admin/alladmins")}));case 7:r.sent;case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{className:"text-uppercase font-weight-bold my-3 text-light",children:"Add New Admin"}),(0,d.jsxs)("form",{id:"add_admin_form text-white",action:"",method:"post",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,d.jsxs)("div",{className:"form-row",children:[(0,d.jsxs)("div",{className:"form-group col-md-4",children:[(0,d.jsx)("label",{htmlFor:"name",children:"Name"}),(0,d.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Name",onChange:function(e){u(e.target.value)}})]}),(0,d.jsxs)("div",{className:"form-group col-md-4",children:[(0,d.jsx)("label",{htmlFor:"mobile",children:"Mobile"}),(0,d.jsx)("input",{type:"text",className:"form-control form-control",maxLength:10,id:"mobile",name:"mobile",placeholder:"MObile",onChange:function(e){return x(e.target.value)}})]})]}),(0,d.jsxs)("div",{className:"form-row",children:[(0,d.jsxs)("div",{className:"form-group col-md-4",children:[(0,d.jsx)("label",{htmlFor:"passowrd",children:"Type"}),(0,d.jsxs)("select",{class:"form-control",name:"",id:"",onChange:function(e){return P(e.target.value)},children:[(0,d.jsx)("option",{value:"Admin",children:"Admin"}),(0,d.jsx)("option",{value:"Agent",children:"Agent"})]})]}),(0,d.jsxs)("div",{className:"form-group col-md-4",children:[(0,d.jsx)("label",{htmlFor:"passowrd",children:"Password"}),(0,d.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Passowrd",onChange:function(e){b(e.target.value)}})]}),(0,d.jsxs)("div",{className:"form-group col-md-4",children:[(0,d.jsx)("label",{htmlFor:"mobile",children:"Confirm Password"}),(0,d.jsx)("input",{type:"password",className:"form-control",id:"confirm_password",name:"confirm_password",placeholder:"Confirm Passowrd",onChange:function(e){return C(e.target.value)}})]}),(0,d.jsx)("div",{className:"form-group col-md-8",children:(0,d.jsx)("button",{type:"submit",className:"btn btn-success float-right",onClick:function(e){return _(e)},children:"ADD ADMIN"})})]})]})]})}}}]);
//# sourceMappingURL=462.dd65183a.chunk.js.map