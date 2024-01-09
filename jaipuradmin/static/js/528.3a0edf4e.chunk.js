"use strict";(self.webpackChunkludo_admin=self.webpackChunkludo_admin||[]).push([[528],{3528:function(e,s,d){d.r(s),d.d(s,{BasicTable:function(){return y},default:function(){return f}});var r=d(5671),l=d(3144),i=d(136),c=d(8557),a=d(2791),n=d(7462),t=d(3366),h=d(1694),x=d.n(h),j=d(162);var m=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],o=["isChild"],b=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function N(e,s,d){var r=(e-s)/(d-s)*100;return Math.round(1e3*r)/1e3}function g(e,s){var d,r=e.min,l=e.now,i=e.max,c=e.label,h=e.srOnly,j=e.striped,o=e.animated,b=e.className,g=e.style,p=e.variant,u=e.bsPrefix,v=(0,t.Z)(e,m);return a.createElement("div",(0,n.Z)({ref:s},v,{role:"progressbar",className:x()(b,u+"-bar",(d={},d["bg-"+p]=p,d[u+"-bar-animated"]=o,d[u+"-bar-striped"]=o||j,d)),style:(0,n.Z)({width:N(l,r,i)+"%"},g),"aria-valuenow":l,"aria-valuemin":r,"aria-valuemax":i}),h?a.createElement("span",{className:"sr-only"},c):c)}var p=a.forwardRef((function(e,s){var d=e.isChild,r=(0,t.Z)(e,o);if(r.bsPrefix=(0,j.vE)(r.bsPrefix,"progress"),d)return g(r,s);var l=r.min,i=r.now,c=r.max,h=r.label,m=r.srOnly,N=r.striped,p=r.animated,u=r.bsPrefix,v=r.variant,y=r.className,f=r.children,w=(0,t.Z)(r,b);return a.createElement("div",(0,n.Z)({ref:s},w,{className:x()(y,u)}),f?function(e,s){var d=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?s(e,d++):e}))}(f,(function(e){return(0,a.cloneElement)(e,{isChild:!0})})):g({min:l,now:i,max:c,label:h,srOnly:m,striped:N,animated:p,bsPrefix:u,variant:v},s))}));p.displayName="ProgressBar",p.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var u=p,v=d(184),y=function(e){(0,i.Z)(a,e);var s=(0,c.Z)(a);function a(){return(0,r.Z)(this,a),s.apply(this,arguments)}return(0,l.Z)(a,[{key:"render",value:function(){return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"page-header",children:[(0,v.jsx)("h3",{className:"page-title",children:" Basic Tables "}),(0,v.jsx)("nav",{"aria-label":"breadcrumb",children:(0,v.jsxs)("ol",{className:"breadcrumb",children:[(0,v.jsx)("li",{className:"breadcrumb-item",children:(0,v.jsx)("a",{href:"!#",onClick:function(e){return e.preventDefault()},children:"Tables"})}),(0,v.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Basic tables"})]})})]}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-lg-6 grid-margin stretch-card",children:(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h4",{className:"card-title",children:"Basic Table"}),(0,v.jsxs)("p",{className:"card-description",children:[" Add className ",(0,v.jsx)("code",{children:".table"})]}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Profile"}),(0,v.jsx)("th",{children:"VatNo."}),(0,v.jsx)("th",{children:"Created"}),(0,v.jsx)("th",{children:"Status"})]})}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Jacob"}),(0,v.jsx)("td",{children:"53275531"}),(0,v.jsx)("td",{children:"12 May 2017"}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-danger",children:"Pending"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Messsy"}),(0,v.jsx)("td",{children:"53275532"}),(0,v.jsx)("td",{children:"15 May 2017"}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-warning",children:"In progress"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"John"}),(0,v.jsx)("td",{children:"53275533"}),(0,v.jsx)("td",{children:"14 May 2017"}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-info",children:"Fixed"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Peter"}),(0,v.jsx)("td",{children:"53275534"}),(0,v.jsx)("td",{children:"16 May 2017"}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-success",children:"Completed"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Dave"}),(0,v.jsx)("td",{children:"53275535"}),(0,v.jsx)("td",{children:"20 May 2017"}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-warning",children:"In progress"})})]})]})]})})]})})}),(0,v.jsx)("div",{className:"col-lg-6 grid-margin stretch-card",children:(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h4",{className:"card-title",children:"Hoverable Table"}),(0,v.jsxs)("p",{className:"card-description",children:[" Add className ",(0,v.jsx)("code",{children:".table-hover"})]}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-hover",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"User"}),(0,v.jsx)("th",{children:"Product"}),(0,v.jsx)("th",{children:"Sale"}),(0,v.jsx)("th",{children:"Status"})]})}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Jacob"}),(0,v.jsx)("td",{children:"Photoshop"}),(0,v.jsxs)("td",{className:"text-danger",children:[" 28.76% ",(0,v.jsx)("i",{className:"mdi mdi-arrow-down"})]}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-danger",children:"Pending"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Messsy"}),(0,v.jsx)("td",{children:"Flash"}),(0,v.jsxs)("td",{className:"text-danger",children:[" 21.06% ",(0,v.jsx)("i",{className:"mdi mdi-arrow-down"})]}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-warning",children:"In progress"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"John"}),(0,v.jsx)("td",{children:"Premier"}),(0,v.jsxs)("td",{className:"text-danger",children:[" 35.00% ",(0,v.jsx)("i",{className:"mdi mdi-arrow-down"})]}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-info",children:"Fixed"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Peter"}),(0,v.jsx)("td",{children:"After effects"}),(0,v.jsxs)("td",{className:"text-success",children:[" 82.00% ",(0,v.jsx)("i",{className:"mdi mdi-arrow-up"})]}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-success",children:"Completed"})})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:"Dave"}),(0,v.jsx)("td",{children:"53275535"}),(0,v.jsxs)("td",{className:"text-success",children:[" 98.05% ",(0,v.jsx)("i",{className:"mdi mdi-arrow-up"})]}),(0,v.jsx)("td",{children:(0,v.jsx)("label",{className:"badge badge-warning",children:"In progress"})})]})]})]})})]})})}),(0,v.jsx)("div",{className:"col-lg-12 grid-margin stretch-card",children:(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h4",{className:"card-title",children:"Striped Table"}),(0,v.jsxs)("p",{className:"card-description",children:[" Add className ",(0,v.jsx)("code",{children:".table-striped"})]}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-striped",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:" User "}),(0,v.jsx)("th",{children:" First name "}),(0,v.jsx)("th",{children:" Progress "}),(0,v.jsx)("th",{children:" Amount "}),(0,v.jsx)("th",{children:" Deadline "})]})}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(8392),alt:"user icon"})}),(0,v.jsx)("td",{children:" Herman Beck "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"success",now:25})}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(7682),alt:"user icon"})}),(0,v.jsx)("td",{children:" Messsy Adam "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"danger",now:75})}),(0,v.jsx)("td",{children:" $245.30 "}),(0,v.jsx)("td",{children:" July 1, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(5558),alt:"user icon"})}),(0,v.jsx)("td",{children:" John Richards "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"warning",now:90})}),(0,v.jsx)("td",{children:" $138.00 "}),(0,v.jsx)("td",{children:" Apr 12, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(1421),alt:"user icon"})}),(0,v.jsx)("td",{children:" Peter Meggik "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"primary",now:50})}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(3179),alt:"user icon"})}),(0,v.jsx)("td",{children:" Edward "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"danger",now:60})}),(0,v.jsx)("td",{children:" $ 160.25 "}),(0,v.jsx)("td",{children:" May 03, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(4056),alt:"user icon"})}),(0,v.jsx)("td",{children:" John Doe "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"info",now:65})}),(0,v.jsx)("td",{children:" $ 123.21 "}),(0,v.jsx)("td",{children:" April 05, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"py-1",children:(0,v.jsx)("img",{src:d(9135),alt:"user icon"})}),(0,v.jsx)("td",{children:" Henry Tom "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"warning",now:20})}),(0,v.jsx)("td",{children:" $ 150.00 "}),(0,v.jsx)("td",{children:" June 16, 2015 "})]})]})]})})]})})}),(0,v.jsx)("div",{className:"col-lg-12 grid-margin stretch-card",children:(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h4",{className:"card-title",children:"Bordered table"}),(0,v.jsxs)("p",{className:"card-description",children:[" Add className ",(0,v.jsx)("code",{children:".table-bordered"})]}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-bordered",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:" # "}),(0,v.jsx)("th",{children:" First name "}),(0,v.jsx)("th",{children:" Progress "}),(0,v.jsx)("th",{children:" Amount "}),(0,v.jsx)("th",{children:" Deadline "})]})}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 1 "}),(0,v.jsx)("td",{children:" Herman Beck "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"success",now:25})}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 2 "}),(0,v.jsx)("td",{children:" Messsy Adam "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"danger",now:75})}),(0,v.jsx)("td",{children:" $245.30 "}),(0,v.jsx)("td",{children:" July 1, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 3 "}),(0,v.jsx)("td",{children:" John Richards "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"warning",now:90})}),(0,v.jsx)("td",{children:" $138.00 "}),(0,v.jsx)("td",{children:" Apr 12, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 4 "}),(0,v.jsx)("td",{children:" Peter Meggik "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"primary",now:50})}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 5 "}),(0,v.jsx)("td",{children:" Edward "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"danger",now:35})}),(0,v.jsx)("td",{children:" $ 160.25 "}),(0,v.jsx)("td",{children:" May 03, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 6 "}),(0,v.jsx)("td",{children:" John Doe "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"info",now:65})}),(0,v.jsx)("td",{children:" $ 123.21 "}),(0,v.jsx)("td",{children:" April 05, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 7 "}),(0,v.jsx)("td",{children:" Henry Tom "}),(0,v.jsx)("td",{children:(0,v.jsx)(u,{variant:"warning",now:20})}),(0,v.jsx)("td",{children:" $ 150.00 "}),(0,v.jsx)("td",{children:" June 16, 2015 "})]})]})]})})]})})}),(0,v.jsx)("div",{className:"col-lg-12 grid-margin stretch-card",children:(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h4",{className:"card-title",children:"Inverse table"}),(0,v.jsxs)("p",{className:"card-description",children:[" Add className ",(0,v.jsx)("code",{children:".table-dark"})]}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-dark",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:" # "}),(0,v.jsx)("th",{children:" First name "}),(0,v.jsx)("th",{children:" Amount "}),(0,v.jsx)("th",{children:" Deadline "})]})}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 1 "}),(0,v.jsx)("td",{children:" Herman Beck "}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 2 "}),(0,v.jsx)("td",{children:" Messsy Adam "}),(0,v.jsx)("td",{children:" $245.30 "}),(0,v.jsx)("td",{children:" July 1, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 3 "}),(0,v.jsx)("td",{children:" John Richards "}),(0,v.jsx)("td",{children:" $138.00 "}),(0,v.jsx)("td",{children:" Apr 12, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 4 "}),(0,v.jsx)("td",{children:" Peter Meggik "}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 5 "}),(0,v.jsx)("td",{children:" Edward "}),(0,v.jsx)("td",{children:" $ 160.25 "}),(0,v.jsx)("td",{children:" May 03, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 6 "}),(0,v.jsx)("td",{children:" John Doe "}),(0,v.jsx)("td",{children:" $ 123.21 "}),(0,v.jsx)("td",{children:" April 05, 2015 "})]}),(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:" 7 "}),(0,v.jsx)("td",{children:" Henry Tom "}),(0,v.jsx)("td",{children:" $ 150.00 "}),(0,v.jsx)("td",{children:" June 16, 2015 "})]})]})]})})]})})}),(0,v.jsx)("div",{className:"col-lg-12 stretch-card",children:(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"card-body",children:[(0,v.jsx)("h4",{className:"card-title",children:"Table with contextual classNames"}),(0,v.jsxs)("p",{className:"card-description",children:[" Add className ",(0,v.jsx)("code",{children:".table-{color}"})]}),(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-bordered",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:" # "}),(0,v.jsx)("th",{children:" First name "}),(0,v.jsx)("th",{children:" Product "}),(0,v.jsx)("th",{children:" Amount "}),(0,v.jsx)("th",{children:" Deadline "})]})}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)("tr",{className:"table-info",children:[(0,v.jsx)("td",{children:" 1 "}),(0,v.jsx)("td",{children:" Herman Beck "}),(0,v.jsx)("td",{children:" Photoshop "}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{className:"table-warning",children:[(0,v.jsx)("td",{children:" 2 "}),(0,v.jsx)("td",{children:" Messsy Adam "}),(0,v.jsx)("td",{children:" Flash "}),(0,v.jsx)("td",{children:" $245.30 "}),(0,v.jsx)("td",{children:" July 1, 2015 "})]}),(0,v.jsxs)("tr",{className:"table-danger",children:[(0,v.jsx)("td",{children:" 3 "}),(0,v.jsx)("td",{children:" John Richards "}),(0,v.jsx)("td",{children:" Premeire "}),(0,v.jsx)("td",{children:" $138.00 "}),(0,v.jsx)("td",{children:" Apr 12, 2015 "})]}),(0,v.jsxs)("tr",{className:"table-success",children:[(0,v.jsx)("td",{children:" 4 "}),(0,v.jsx)("td",{children:" Peter Meggik "}),(0,v.jsx)("td",{children:" After effects "}),(0,v.jsx)("td",{children:" $ 77.99 "}),(0,v.jsx)("td",{children:" May 15, 2015 "})]}),(0,v.jsxs)("tr",{className:"table-primary",children:[(0,v.jsx)("td",{children:" 5 "}),(0,v.jsx)("td",{children:" Edward "}),(0,v.jsx)("td",{children:" Illustrator "}),(0,v.jsx)("td",{children:" $ 160.25 "}),(0,v.jsx)("td",{children:" May 03, 2015 "})]})]})]})})]})})})]})]})}}]),a}(a.Component),f=y},8392:function(e,s,d){e.exports=d.p+"static/media/face1.f4bf350550cb6ece8685.jpg"},7682:function(e,s,d){e.exports=d.p+"static/media/face2.f14e69481b20aa9de777.jpg"},5558:function(e,s,d){e.exports=d.p+"static/media/face3.543e4d2726491ee4a2b1.jpg"},1421:function(e,s,d){e.exports=d.p+"static/media/face4.ade8a387199e4e1315f1.jpg"},3179:function(e,s,d){e.exports=d.p+"static/media/face5.ce96410462651322ad77.jpg"},4056:function(e,s,d){e.exports=d.p+"static/media/face6.164f91038a743b7600ec.jpg"},9135:function(e,s,d){e.exports=d.p+"static/media/face7.b9b0b2e7772a192fb700.jpg"}}]);
//# sourceMappingURL=528.3a0edf4e.chunk.js.map