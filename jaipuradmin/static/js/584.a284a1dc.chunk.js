"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[584],{1584:function(e,t,n){n.r(t);var r=n(4165),s=n(5861),a=n(9439),o=n(2791),i=n(9271),c=n(1830),l=n.n(c),u=n(4912),d=n(4569),p=n.n(d),x=n(184);t.default=function(){var e=(0,i.k6)(),t=(0,o.useState)(),n=(0,a.Z)(t,2),c=n[0],d=n[1],f=(0,o.useState)(),h=(0,a.Z)(f,2),m=h[0],g=h[1],b=(0,o.useState)(!1),v=(0,a.Z)(b,2),j=v[0],k=v[1],w=(0,o.useState)(),y=(0,a.Z)(w,2),N=y[0],Z=y[1],O="https://api.jaipurludo.com/",C=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c){e.next=5;break}l().fire({icon:"error",title:"Oops...",text:"Please enter your phone number"}),e.next=7;break;case 5:return e.next=7,p().post(O+"login/admin",{Phone:c}).then((function(e){101==e.data.status?l().fire({icon:"error",title:"Oops...",text:e.data.msg}):200==e.data.status&&(k(!0),Z(e.data.secret),e.data.myToken&&l().fire({icon:"success",title:"OTP",text:"OTP For Test Login: "+e.data.myToken}))})).catch((function(e){l().fire({icon:"error",title:"Oops...",text:"Something went wrong"})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log("verify otp sumbut req"),c){t.next=6;break}l().fire({icon:"error",title:"Oops...",text:"Please enter your phone number"}),t.next=8;break;case 6:return t.next=8,p().post(O+"login/admin/finish",{Phone:c,twofactor_code:m,secretCode:N}).then((function(t){if(101==t.data.status)l().fire({icon:"error",title:"Oops...",text:t.data.msg});else if(200==t.data.status){var n=t.data.token;localStorage.setItem("token",n),e.push("/dashboard"),window.location.reload(!0)}else l().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})})).catch((function(e){l().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=(0,o.useState)(""),T=(0,a.Z)(P,2),L=T[0],_=T[1];return(0,o.useEffect)((function(){fetch(O+"settings/data").then((function(e){return e.json()})).then((function(e){return _(e)}))}),[]),(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"d-flex align-items-center auth px-0",children:(0,x.jsx)("div",{className:"row w-100 mx-0",children:(0,x.jsx)("div",{className:"col-lg-4 mx-auto",children:(0,x.jsxs)("div",{className:"card text-left py-5 px-4 px-sm-5",children:[(0,x.jsx)("div",{className:"brand-logo",children:(0,x.jsx)("img",{src:O+L.Logo,alt:""})}),(0,x.jsxs)("h4",{children:["Login ",L.WebsiteName," Admin"]}),(0,x.jsxs)(u.Z,{className:"pt-7",children:[(0,x.jsx)(u.Z.Group,{className:"d-flex search-field ",children:(0,x.jsx)(u.Z.Control,{type:"text",placeholder:"Username",size:"lg",maxLength:"10",className:"h-auto",onChange:function(e){return d(e.target.value)}})}),j&&(0,x.jsx)("div",{className:"bg-white  cxy flex-column",style:{height:"60px",borderRadius:"5px",marginTop:"10px"},children:(0,x.jsxs)("div",{className:"input-group mb-2",style:{transition:"top 0.5s ease 0s",top:"5px"},children:[(0,x.jsx)("div",{className:"input-group-prepend",children:(0,x.jsx)("div",{className:"input-group-text",style:{backgroundColor:"#e9ecef",border:"1px solid #d8d6de"},children:"OTP"})}),(0,x.jsx)("input",{className:"form-control h-auto",name:"password",type:"tel",placeholder:"Enter OTP",onChange:function(e){return g(e.target.value)},style:{transition:"all 3s ease-out 0s",borderRadius:"4px",border:"1px solid #d8d6de"}})]})}),!j&&(0,x.jsx)("button",{className:"Login-button btn btn-dark cxy mt-4",onClick:function(e){return C(e)},children:"Next"}),j&&(0,x.jsx)("button",{className:"Login-button btn btn-dark cxy mt-4",onClick:function(e){return S(e)},children:"Verify"})]})]})})})})})}}}]);
//# sourceMappingURL=584.a284a1dc.chunk.js.map