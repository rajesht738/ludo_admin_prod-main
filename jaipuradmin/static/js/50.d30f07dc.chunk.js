"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[50],{2050:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var t=n(4165),s=n(5861),l=n(9439),i=n(2791),r=n(4569),c=n.n(r),o=n(6048),d=n.n(o),u=n(184);function h(){var e,a=(0,i.useState)(),n=(0,l.Z)(a,2),r=n[0],o=n[1];e="https://api.rkludo.in/";var h=(0,i.useState)(10),m=(0,l.Z)(h,2),p=m[0],x=m[1],g=(0,i.useState)(0),j=(0,l.Z)(g,2),v=j[0],N=j[1],f=(0,i.useState)(0),b=(0,l.Z)(f,2),y=b[0],k=b[1],C=(0,i.useState)(0),S=(0,l.Z)(C,2),w=S[0],Z=S[1],_=(0,i.useState)(0),P=(0,l.Z)(_,2),A=P[0],L=P[1],B=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(a){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.selected+1,N(n);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),D=function(){var a=localStorage.getItem("token"),n={Authorization:"Bearer ".concat(a)};c().get(e+"User/all/panelty?page=".concat(v,"&_limit=").concat(p,"&_q=").concat(w,"&_stype=").concat(A),{headers:n}).then((function(e){o(e.data.admin),k(e.data.totalPages)}))},I=(0,i.useState)(),U=(0,l.Z)(I,2),W=U[0],z=U[1],E=(0,i.useState)(),J=(0,l.Z)(E,2),O=J[0],T=J[1];return(0,i.useEffect)((function(){D()}),[v,p,w,A]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"row ",children:(0,u.jsx)("div",{className:"col-12 grid-margin",children:(0,u.jsx)("div",{className:"card",children:(0,u.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,u.jsx)("h4",{className:"card-title ",children:"penalty and Bonus"}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("select",{className:"form-control col-sm-3 m-2",id:"searchType",name:"searchtype",onChange:function(e){return L(e.target.value)},children:[(0,u.jsx)("option",{value:"0",children:"Select Search by"}),(0,u.jsx)("option",{value:"Name",children:"Name"}),(0,u.jsx)("option",{value:"Phone",children:"Phone"}),(0,u.jsx)("option",{value:"_id",children:"User Id"})]}),(0,u.jsx)("input",{type:"text",placeholder:"Search...",className:"form-control col-sm-4 m-2",onChange:function(e){var a=e.target.value;Z(a)}}),(0,u.jsxs)("select",{className:"form-control col-sm-1 m-1 bg-dark text-light",id:"pagelimit",name:"pagelimit",onChange:function(e){var a=e.target.value;x(a)},children:[(0,u.jsx)("option",{value:"10",children:"Set limit"}),(0,u.jsx)("option",{value:"20",children:"20"}),(0,u.jsx)("option",{value:"50",children:"50"}),(0,u.jsx)("option",{value:"100",children:"100"}),(0,u.jsx)("option",{value:"500",children:"500"})]})]}),(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"table text-light",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"#"}),(0,u.jsx)("th",{children:" ID"}),(0,u.jsx)("th",{children:" Name"}),(0,u.jsx)("th",{children:" Mobile "}),(0,u.jsx)("th",{children:" Balance "}),(0,u.jsx)("th",{children:" Action "})]})}),(0,u.jsx)("tbody",{children:r&&r.map((function(a,n){return(0,u.jsxs)("tr",{role:"row",className:"odd",children:[(0,u.jsx)("td",{className:"sorting_1",children:n+1}),(0,u.jsx)("td",{children:a._id}),(0,u.jsx)("td",{children:a.Name}),(0,u.jsx)("td",{children:a.Phone}),(0,u.jsx)("td",{children:a.Wallet_balance}),(0,u.jsx)("td",{children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-12 col-lg-5",children:(0,u.jsx)("input",{id:"number",type:"number",className:"form-control input-sm",style:{minWidth:"100px"},placeholder:"Amount",onChange:function(e){return T(e.target.value)}})}),(0,u.jsx)("div",{className:"col-12 col-lg-4",children:(0,u.jsx)("div",{className:"form-group",children:(0,u.jsxs)("select",{className:"form-control input-sm",name:"type",style:{minWidth:"100px"},onChange:function(e){return z(e.target.value)},children:[(0,u.jsx)("option",{value:"penalty",children:"Penalty"}),(0,u.jsx)("option",{value:"bonus",children:"Bonus"})]})})}),(0,u.jsx)("div",{className:"col-12 col-lg-3",children:(0,u.jsx)("button",{className:"btn btn-sm btn-primary",onClick:function(){return function(a){var n=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(n)};"bonus"===W?window.confirm("Are you sure, you want to add bonus to this user?")&&c().post(e+"user/bonus/".concat(a),{bonus:JSON.parse(O)},{headers:t}).then((function(e){D()})):window.confirm("Are you sure, you want to add penalty to this user?")&&c().post(e+"user/penlaty/".concat(a),{bonus:JSON.parse(O)},{headers:t}).then((function(e){D()}))}(a._id)},children:"UPDATE"})})]})})]})}))})]})}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)(d(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:y,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:B,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})})]})})})})})}n(8890).Datatable=n(5657)}}]);
//# sourceMappingURL=50.d30f07dc.chunk.js.map