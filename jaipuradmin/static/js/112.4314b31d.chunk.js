"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[112],{2864:function(e,s,l){l.r(s),l.d(s,{default:function(){return r}});var d=l(9439),i=l(4569),n=l.n(i),t=l(2791),a=l(1523),c=l(184);function r(){var e,s=(0,t.useState)([]),l=(0,d.Z)(s,2),i=l[0],r=l[1],h=(0,t.useState)([]),o=(0,d.Z)(h,2),x=o[0],j=o[1];return e="https://api.rkludo.in/",(0,t.useEffect)((function(){var s=localStorage.getItem("token"),l={Authorization:"Bearer ".concat(s)};n().get(e+"admin/all",{headers:l}).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)})),n().get(e+"agent/all",{headers:l}).then((function(e){j(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),void 0===i?null:(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"row bg-dark ",children:[(0,c.jsx)("div",{className:"col-12 grid-margin",children:(0,c.jsx)("div",{className:"card bg-dark",children:(0,c.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,c.jsx)("h4",{className:"card-title text-light",children:"all Admin list"}),(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"#"}),(0,c.jsx)("th",{children:" ID"}),(0,c.jsx)("th",{children:" Name"}),(0,c.jsx)("th",{children:" Mobile "}),(0,c.jsx)("th",{children:" Verified "})]})}),i.map((function(e,s){return(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:s+1}),(0,c.jsx)("td",{children:e._id}),(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:"pl-2",children:e.Name})}),(0,c.jsx)("td",{children:e.Phone}),(0,c.jsx)("td",{children:(0,c.jsx)("div",{className:"badge badge-outline-success",children:"Verified"})})]})},e._id)}))]})})]})})}),(0,c.jsx)("div",{className:"col-12 grid-margin",children:(0,c.jsx)("div",{className:"card bg-dark",children:(0,c.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,c.jsx)("h4",{className:"card-title text-light",children:"All Agent List"}),(0,c.jsx)("div",{className:"table-responsive",children:(0,c.jsxs)("table",{className:"table",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"#"}),(0,c.jsx)("th",{children:" ID"}),(0,c.jsx)("th",{children:" Name"}),(0,c.jsx)("th",{children:" Mobile "}),(0,c.jsx)("th",{children:" Verified "}),(0,c.jsx)("th",{children:" Permissions "})]})}),x.map((function(e,s){return(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:s+1}),(0,c.jsx)("td",{children:e._id}),(0,c.jsx)("td",{children:(0,c.jsx)("span",{className:"pl-2",children:e.Name})}),(0,c.jsx)("td",{children:e.Phone}),(0,c.jsx)("td",{children:(0,c.jsx)("div",{className:"badge badge-outline-success",children:"Verified"})}),(0,c.jsx)("td",{children:(0,c.jsx)(a.rU,{to:"/agent/permissions/".concat(e._id),type:"button",className:"btn btn-outline-info ",children:"Grant Permission"})})]})},s)}))]})})]})})})]})})}}}]);
//# sourceMappingURL=112.4314b31d.chunk.js.map