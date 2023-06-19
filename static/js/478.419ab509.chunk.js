"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[478],{3478:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var o,a,t,i,s,d,p,l,c,x,u,h,m=r(9434),g=r(168),b=r(7691),f=b.ZP.label(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: white;\n  margin-top: 10px;\n"]))),Z=b.ZP.input(a||(a=(0,g.Z)(["\n  max-width: 200px;\n  border: 2px solid gray;\n  border-radius: 5px;\n  padding: 5px 10px;\n  color: black;\n"]))),j=r(1634),v=r(184),w=function(){var n=(0,m.v9)((function(n){return n.filter})),e=(0,m.I0)();return(0,v.jsx)("div",{children:(0,v.jsxs)(f,{children:["Find contacts by name",(0,v.jsx)(Z,{type:"text",value:n,onChange:function(n){var r=n.target.value;e((0,j.h)(r))}})]})})},y=r(5705),k=r(6052),C=r(2286),P=r(9085),A=(r(5462),r(8007)),z=(0,b.ZP)(y.Bc)(t||(t=(0,g.Z)(["\n  display: block;\n  font-size: 14px;\n  color: red;\n"]))),B=(0,b.ZP)(y.l0)(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 900px;\n"]))),O=b.ZP.label(s||(s=(0,g.Z)(["\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 14px;\n  font-weight: 500;\n"]))),_=(0,b.ZP)(y.gN)(d||(d=(0,g.Z)(["\n  border: 2px solid gray;\n  border-radius: 5px;\n  padding: 5px;\n  max-width: 300px;\n  font-size: 14px;\n  color: black;\n"]))),q=b.ZP.button(p||(p=(0,g.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  border: 2px solid gray;\n  border-radius: 5px;\n  padding: 10px;\n  max-width: 200px;\n  background-color: white;\n  &:hover {\n    cursor: pointer;\n    background-color: orange;\n  }\n"]))),F=function(){var n=(0,m.v9)(C.Af),e=(0,m.I0)(),r=A.Ry().shape({name:A.Z_().required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:A.Rx().required("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")});return(0,v.jsx)(y.J9,{initialValues:{name:"",number:""},onSubmit:function(r,o){var a=r.name,t=r.number,i={name:a,number:t};n.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?P.Am.error("This contact is already in the phone book.",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):(e((0,k.uK)(i)),o.resetForm(),P.Am.success("Contact added.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},validationSchema:r,children:(0,v.jsxs)(B,{children:[(0,v.jsxs)(O,{children:["Name",(0,v.jsx)(_,{name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,v.jsx)(z,{name:"name",component:"span"})]}),(0,v.jsxs)(O,{children:["Number",(0,v.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0}),(0,v.jsx)(z,{name:"number",component:"span"})]}),(0,v.jsx)(q,{type:"submit",children:"Add contacts"})]})})},L=r(5946),N=r(176),H=(b.ZP.ul(l||(l=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 60px;\n  gap: 10px;\n  margin-top: 10px;\n"]))),b.ZP.li(c||(c=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border: 2px solid gray;\n  border-radius: 10px;\n  padding: 10px;\n"])))),I=(b.ZP.button(x||(x=(0,g.Z)(["\n  font-size: 14px;\n  background-color: white;\n  border: 2px solid grey;\n  border-radius: 5px;\n  padding: 2px 10px;\n  &:hover {\n    cursor: pointer;\n    background-color: orange;\n  }\n"]))),b.ZP.p(u||(u=(0,g.Z)(["\n  color: white;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n"])))),T=b.ZP.section(h||(h=(0,g.Z)(["\n  padding-left: 80px;\n"]))),D=r(2791),J=r(4224),K=r(6149),R=r(8656),S=r(9327),E=function(){var n=(0,m.v9)(C.Af),e=(0,m.v9)(C.xU),r=(0,m.v9)(C.AD),o=n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())})),a=(0,m.I0)();return(0,D.useEffect)((function(){a((0,k.yF)())}),[a]),o.map((function(n){var r=n.name,o=n.id,t=n.number;return(0,v.jsxs)(H,{children:[(0,v.jsxs)(I,{children:[(0,v.jsx)(K.r,{}),r,":"]}),(0,v.jsxs)(I,{children:[(0,v.jsx)(R.q,{}),t]}),(0,v.jsxs)(J.z,{display:"flex",gap:"2px",size:"xs",_hover:{bg:"red.500",color:"white"},type:"button",onClick:function(){a((0,k.GK)(o)),e||P.Am.success("The contact has been deleted.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},children:[(0,v.jsx)(S.p,{}),"Delete"]})]},o)}))},G=function(){return(0,v.jsxs)(T,{children:[(0,v.jsx)(L.X,{marginBottom:"12px",color:"white",children:"Contacts"}),(0,v.jsx)(F,{}),(0,v.jsx)(w,{}),(0,v.jsx)(N.k,{gap:"10px",marginTop:"10px",wrap:"wrap",children:(0,v.jsx)(E,{})})]})}}}]);
//# sourceMappingURL=478.419ab509.chunk.js.map