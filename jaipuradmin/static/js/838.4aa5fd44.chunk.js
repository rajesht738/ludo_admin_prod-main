"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[838],{4838:function(e,r,a){a.r(r),a.d(r,{default:function(){return d}});var n=a(4165),o=a(5861),t=a(9439),s=a(4569),l=a.n(s),i=a(2791),c=a(9271),m=a(184);function d(){var e,r=(0,c.k6)(),a=(0,i.useState)(),s=(0,t.Z)(a,2),d=s[0],u=s[1],h=(0,i.useState)(),f=(0,t.Z)(h,2),p=f[0],x=f[1],g=(0,i.useState)(),j=(0,t.Z)(g,2),v=j[0],N=j[1],b=(0,i.useState)(),w=(0,t.Z)(b,2),k=w[0],C=w[1],y=(0,i.useState)(),Z=(0,t.Z)(y,2),E=Z[0],P=Z[1];e="https://api.jaipurludo.com/";var F=function(){var a=(0,o.Z)((0,n.Z)().mark((function a(o){return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o.preventDefault(),k==E?l().post(e+"register",{Name:d,Phone:p,Email:v,Password:k,cPassword:E}).then((function(e){r.push("/user/allusers")})):alert("Some thing wrong");case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),S=(0,c.TH)().pathname.split("/")[3],_=function(){var r=(0,o.Z)((0,n.Z)().mark((function r(){var a,o;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=localStorage.getItem("token"),o={Authorization:"Bearer ".concat(a)},r.next=4,l().patch(e+"admin/edit/user/".concat(S),{Name:d,Phone:p,Email:v},{headers:o}).then((function(e){u(e.data.Name),N(e.data.Email),x(e.data.Phone)}));case 4:r.sent;case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){_()}),[S]),void 0==S?(0,m.jsxs)("div",{children:[(0,m.jsx)("h4",{className:"font-weight-bold my-3",children:"ADD NEW USER"}),(0,m.jsxs)("form",{id:"add_user_form",action:"",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,m.jsxs)("div",{className:"form-row",children:[(0,m.jsxs)("div",{className:"form-group col-md-4",children:[(0,m.jsx)("label",{htmlFor:"name",children:"Name"}),(0,m.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Name",onChange:function(e){return u(e.target.value)}})]}),(0,m.jsxs)("div",{className:"form-group col-md-4",children:[(0,m.jsx)("label",{htmlFor:"mobile",children:"Mobile"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control",maxLength:10,id:"mobile",name:"mobile",placeholder:"MObile",onChange:function(e){return x(e.target.value)}})]}),(0,m.jsxs)("div",{className:"form-group col-md-4",children:[(0,m.jsx)("label",{htmlFor:"email",children:"Email"}),(0,m.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Email",onChange:function(e){return N(e.target.value)}})]})]}),(0,m.jsxs)("div",{className:"form-row",children:[(0,m.jsxs)("div",{className:"form-group col-md-6",children:[(0,m.jsx)("label",{htmlFor:"passowrd",children:"Password"}),(0,m.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"Passowrd",onChange:function(e){return C(e.target.value)}})]}),(0,m.jsxs)("div",{className:"form-group col-md-6",children:[(0,m.jsx)("label",{htmlFor:"mobile",children:"Confirm Password"}),(0,m.jsx)("input",{type:"password",className:"form-control",id:"confirm_password",name:"confirm_password",placeholder:"Confirm Passowrd",onChange:function(e){return P(e.target.value)}})]})]}),(0,m.jsx)("div",{className:"form-group",children:(0,m.jsxs)("div",{className:"form-check",children:[(0,m.jsx)("input",{className:"form-check-input",type:"checkbox",id:"verificationrequired",name:"verificationrequired",defaultChecked:!0}),(0,m.jsx)("label",{className:"form-check-label",htmlFor:"verificationrequired",children:"OTP Verification required during first time login."})]})}),(0,m.jsx)("button",{className:"btn btn-success float-right",onClick:function(e){return F(e)},children:" Add User"})]})]}):(0,m.jsxs)("div",{children:[(0,m.jsx)("h4",{className:"font-weight-bold my-3",children:"Update User"}),(0,m.jsxs)("div",{id:"add_user_form",children:[(0,m.jsxs)("div",{className:"form-row",children:[(0,m.jsxs)("div",{className:"form-group col-md-4",children:[(0,m.jsx)("label",{htmlFor:"name",children:"Name"}),(0,m.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",placeholder:"Name",onChange:function(e){return u(e.target.value)},value:d})]}),(0,m.jsxs)("div",{className:"form-group col-md-4",children:[(0,m.jsx)("label",{htmlFor:"mobile",children:"Mobile"}),(0,m.jsx)("input",{type:"text",className:"form-control form-control",maxLength:10,id:"mobile",name:"mobile",placeholder:"MObile",onChange:function(e){return x(e.target.value)},value:p})]}),(0,m.jsxs)("div",{className:"form-group col-md-4",children:[(0,m.jsx)("label",{htmlFor:"email",children:"Email"}),(0,m.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Email",onChange:function(e){return N(e.target.value)},value:v})]})]}),(0,m.jsx)("button",{className:"btn btn-success float-right",onClick:function(e){return _(e)},children:" Update User"})]})]})}}}]);
//# sourceMappingURL=838.4aa5fd44.chunk.js.map