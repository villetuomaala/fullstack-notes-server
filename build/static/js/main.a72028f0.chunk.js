(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=n(3),s=n.n(f),p=function(){var t=s.a.get("/api/notes"),e={id:666,content:"HTML is not easy?",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then(function(t){return t.data.concat(e)})},d=function(t){return s.a.post("/api/notes",t).then(function(t){return t.data})},E=function(t,e){return s.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})},v=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},b=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)("a new note..."),f=Object(i.a)(c,2),s=f[0],b=f[1],g=Object(a.useState)(!1),h=Object(i.a)(g,2),O=h[0],S=h[1],j=Object(a.useState)(null),w=Object(i.a)(j,2),k=w[0],y=w[1];Object(a.useEffect)(function(){p().then(function(t){o(t)})},[]);var N=O?n:n.filter(function(t){return t.important});return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:k}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return S(!O)}},"Set showAll to ",O?"false":"true")),r.a.createElement("ul",null,N.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(u.a)({},e,{important:!e.important});E(t,a).then(function(e){o(n.map(function(n){return n.id!==t?n:e}))}).catch(function(t){y("Note ".concat(e.content," was removed from server.")),setTimeout(function(){y(null)},5e3),o(n.filter(function(t){return t.id!==e.id}))})}(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:s,date:(new Date).toISOString(),important:Math.random()>.5};d(e).then(function(t){o(n.concat(t)),b("")})}},r.a.createElement("input",{value:s,onChange:function(t){b(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(v,null))};n(38);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a72028f0.chunk.js.map