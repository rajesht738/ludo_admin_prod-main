"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[324],{1324:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var s=t(9439),l=t(2791),r=t(3018),c=t(4569),d=t.n(c),i=t(2461),n=(t(8398),t(9271)),o=t(4165),h=t(5861),m=t(1523),x=t(6048),g=t.n(x),j=t(184);function N(){var e,a=(0,l.useState)(),t=(0,s.Z)(a,2),r=t[0],c=t[1];e="https://api.jaipurludo.com/";var i=(0,l.useState)(0),n=(0,s.Z)(i,2),x=n[0],N=n[1],u=(0,l.useState)(0),y=(0,s.Z)(u,2),f=y[0],v=y[1],p=function(){var e=(0,h.Z)((0,o.Z)().mark((function e(a){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.selected+1,N(t);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var a=(0,h.Z)((0,o.Z)().mark((function a(){var t,s;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=localStorage.getItem("token"),s={Authorization:"Bearer ".concat(t)},d().get(e+"admin/challange/dashboard/all?page=".concat(x,"&_limit=").concat(10),{headers:s}).then((function(e){c(e.data.status),v(e.data.totalPages)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return(0,l.useEffect)((function(){b()}),[x,10]),void 0===r?null:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"row ",children:(0,j.jsx)("div",{className:"col-12 grid-margin",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body",children:[(0,j.jsx)("h4",{className:"card-title",children:"Games"}),(0,j.jsx)("div",{className:"table-responsive",children:(0,j.jsxs)("table",{className:"table",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"#"}),(0,j.jsx)("th",{children:" ID"}),(0,j.jsx)("th",{children:" Player1"}),(0,j.jsx)("th",{children:" Player2"}),(0,j.jsx)("th",{children:" Amount "}),(0,j.jsx)("th",{children:" Status "}),(0,j.jsx)("th",{children:" Game Type "}),(0,j.jsx)("th",{children:"Date"}),(0,j.jsx)("th",{children:" Action "})]})}),(0,j.jsx)("tbody",{children:r&&r.map((function(e,a){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{children:a+1}),(0,j.jsx)("td",{children:e._id}),(0,j.jsx)("td",{children:(0,j.jsx)("span",{className:"pl-2 ",children:e.Created_by.Name})}),(0,j.jsx)("td",{children:(0,j.jsx)("span",{className:"pl-2",children:e.Accepetd_By?e.Accepetd_By.Name:null})}),(0,j.jsx)("td",{children:e.Game_Ammount}),(0,j.jsx)("td",{className:"text-primary font-weight-bold",children:e.Status}),(0,j.jsx)("td",{children:e.Game_type}),(0,j.jsxs)("td",{children:[(t=e.createdAt,new Date(t).toLocaleString("default",{month:"long",day:"numeric",hour:"numeric",hour12:!0,minute:"numeric"})).split(",")[0]," "]}),(0,j.jsx)("td",{children:(0,j.jsx)(m.rU,{type:"button",className:"btn btn-primary mx-1",to:"/view/".concat(e._id),children:"View"})})]},e._id);var t}))})]})}),(0,j.jsx)("div",{className:"mt-4",children:(0,j.jsx)(g(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:f,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:p,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active"})})]})})})})})}t(8890).Datatable=t(5657);var u=t(8890);u.Datatable=t(5657);var y=function(){var e;e="https://api.jaipurludo.com/";var a=(0,n.k6)(),t=(0,l.useState)(),c=(0,s.Z)(t,2),o=c[0],h=c[1],m=(0,l.useState)(!1),x=(0,s.Z)(m,2),g=x[0],u=x[1],y=(0,l.useState)(),f=(0,s.Z)(y,2),v=f[0],p=f[1],b=(0,l.useState)(),w=(0,s.Z)(b,2),S=w[0],A=w[1],Z=(0,l.useState)(),M=(0,s.Z)(Z,2),C=M[0],E=M[1];(0,l.useEffect)((function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"total/block",{headers:t}).then((function(e){E(e.data)}))}),[]);var T=(0,l.useState)(),k=(0,s.Z)(T,2),X=k[0],L=k[1],O=(0,l.useState)(),P=(0,s.Z)(O,2),Y=P[0],I=P[1],D=(0,l.useState)(),R=(0,s.Z)(D,2),G=R[0],W=R[1],B=(0,l.useState)(),U=(0,s.Z)(B,2),z=U[0],H=U[1],V=(0,l.useState)(0),_=(0,s.Z)(V,2),Q=_[0],F=_[1],J=(0,l.useState)(0),K=(0,s.Z)(J,2),q=K[0],$=K[1],ee=(0,l.useState)(0),ae=(0,s.Z)(ee,2),te=ae[0],se=(ae[1],(0,l.useState)(0)),le=(0,s.Z)(se,2),re=le[0],ce=le[1],de=(0,l.useState)(0),ie=(0,s.Z)(de,2),ne=ie[0],oe=ie[1],he=(0,l.useState)(0),me=(0,s.Z)(he,2),xe=me[0],ge=me[1],je=(0,l.useState)(),Ne=(0,s.Z)(je,2),ue=(Ne[0],Ne[1],(0,l.useState)()),ye=(0,s.Z)(ue,2),fe=ye[0],ve=ye[1];return(0,l.useEffect)((function(){!function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"challange/completed",{headers:t}).then((function(e){L(e.data)}))}(),function(){var t=localStorage.getItem("token"),s={Authorization:"Bearer ".concat(t)};d().get(e+"total/active",{headers:s}).then((function(e){A(e.data)})).catch((function(e){401===e.response.status&&(localStorage.removeItem("token"),a.push("/adminlogin"))}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"total/user",{headers:t}).then((function(e){p(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"total/admin",{headers:t}).then((function(e){h(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"challange/active",{headers:t}).then((function(e){I(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"challange/running",{headers:t}).then((function(e){W(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"challange/cancelled",{headers:t}).then((function(e){H(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"total/deposit",{headers:t}).then((function(e){F(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"count/new/deposit",{headers:t}).then((function(e){$(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"total/withdraw",{headers:t}).then((function(e){ce(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"count/new/withdrawl",{headers:t}).then((function(e){oe(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"count/rejected/withdrawl",{headers:t}).then((function(e){ge(e.data)}))}(),function(){var a=localStorage.getItem("token"),t={Authorization:"Bearer ".concat(a)};d().get(e+"all/user/data/get",{headers:t}).then((function(e){ve(e.data)})).catch((function(e){console.log(e)}))}()}),[]),(0,j.jsxs)("div",{className:"",children:[(0,j.jsx)(N,{}),(0,j.jsxs)("div",{className:"custom-control custom-switch float-right",children:[(0,j.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customSwitch1",onClick:function(){return u((function(e){return!e}))}}),(0,j.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:0==g?"OVERVIEW":"TODAY"})]}),!g&&(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{className:"mt-3",children:"ALL USER OVERVIEW"}),(0,j.jsxs)("div",{className:"row mt-5",children:[(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,shadowOffset:50,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card my-atropos",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL ADMIN"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:o&&o})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL USER"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:v&&v})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"ACTIVE USER"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:S&&S})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"BLOCKED USER"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:C&&C})})})]})})})]}),(0,j.jsx)("h3",{className:"mt-3",children:"CHALLANGE OVERVIEW"}),(0,j.jsxs)("div",{className:"row mt-5",children:[(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"COMPLETED CHALLANGE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:X&&X})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"ACTIVE CHALLANGE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:Y&&Y})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"ONGOING CHALLANGE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:G&&G})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"CANCELLED CHALLANGE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:z&&z})})})]})})})]}),(0,j.jsx)("h3",{className:"mt-3",children:"DEPOSITE OVERVIEW"}),(0,j.jsxs)("div",{className:"row mt-5",children:[(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL REQUEST"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:Q&&Q.count})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL DEPOSIT"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:Q&&Q.data})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h6",{className:"text-muted font-weight-normal",children:"PENDING REQUEST"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:q&&q.count})})})]})})}),(0,j.jsx)(i.Z,{className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h6",{className:"text-muted font-weight-normal",children:"REJECTED REQUEST"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:te&&te.count})})})]})})})]}),(0,j.jsx)("h3",{className:"mt-3",children:"WITHDRAWL REQUEST OVERVIEW"}),(0,j.jsxs)("div",{className:"row mt-5",children:[(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL REQUEST"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:re&&re.count})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL WITHDRAWAL"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:re&&re.data})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"PENDING REQUEST"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:ne&&ne.count})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"CANCELLED REQUEST"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:xe&&xe.count})})})]})})})]})]}),g&&(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:"row mt-5",children:[(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL USER"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalUser})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL USER WALLET BALANCE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalWalletbalance})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY USER"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayUser})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY GAME"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalGame})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY ALL GAME"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayAllGame})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY SUCCESS GAME"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todaySuccessGame})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY CANCEL GAME"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayCancelGame})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY CANCEL GAME"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsx)("h3",{className:"pt-4 display-3",children:(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayCancelGame})})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY COMMISSION"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayCommission})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY TOTAL DEPOSIT"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayTotalDeposit})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TODAY TOTAL WITHDRAWAL"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.todayTotalWithdraw})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL WON AMOUNT"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totolWonAmount})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL LOSE AMOUNT"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalLoseAmount})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL HOLD BALANCE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalHoldBalance})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL WITHDRAWAL HOLD BALANCE"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalWithdrawHold})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL DEPOSIT"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalDeposit})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL WITHDRAWAL"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalWithdrawl})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL REFERRAL EARNING"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalReferralEarning})]})})]})})}),(0,j.jsx)(i.Z,{rotateXMax:15,shadowScale:.7,rotateYMax:15,stretchX:50,className:"col-xl-3 col-sm-6 grid-margin stretch-card",style:{height:"11rem"},children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body text-light",style:{backgroundColor:"rgba(0, 27, 11, 0.734)"},children:[(0,j.jsx)("h4",{className:"text-muted font-weight-normal",children:"TOTAL REFERRAL WALLET"}),(0,j.jsx)("div",{className:"d-flex align-items-center align-self-start",children:(0,j.jsxs)("h3",{className:"pt-4 display-3",children:["\u20b9",(0,j.jsx)(r.ZP,{start:0,delay:.1,duration:.2,end:fe&&fe.totalReferralWallet})]})})]})})})]})}),(0,j.jsx)("div",{className:"row",children:(0,j.jsx)("div",{className:"col-md-4 grid-margin stretch-card"})})]})}}}]);
//# sourceMappingURL=324.3051228a.chunk.js.map