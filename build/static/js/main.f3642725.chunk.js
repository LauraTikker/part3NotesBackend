(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return a.a.createElement("li",{className:"note"},e.content,a.a.createElement("button",{onClick:n},r))},f=n(3),m=n.n(f),s=function(){var t=m.a.get("/notes"),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},p=function(t){return m.a.post("/notes",t).then((function(t){return t.data}))},b=function(t,e){return m.a.put("".concat("/notes","/").concat(t),e).then((function(t){return t.data}))};function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var v=function(t){var e=t.message;return null===e?null:a.a.createElement("div",{className:"error"},e)},O=function(){var t=Object(r.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(""),f=Object(i.a)(c,2),m=f[0],O=f[1],E=Object(r.useState)(!0),g=Object(i.a)(E,2),h=g[0],j=g[1],y=Object(r.useState)("some error happened..."),S=Object(i.a)(y,2),w=S[0],k=S[1],P=h?n:n.filter((function(t){return t.important})),D=function(t){var e=n.find((function(e){return e.id===t})),r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{important:!e.important});b(t,r).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){k("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3),o(n.filter((function(e){return e.id!==t})))}))};Object(r.useEffect)((function(){s().then((function(t){o(t)}))}),[]);return a.a.createElement("div",null,a.a.createElement("h1",null,"Notes"),a.a.createElement(v,{message:w}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return j(!h)}},"show ",h?"important":"all")),a.a.createElement("ul",null,P.map((function(t){return a.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return D(t.id)}})}))),a.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:m,date:(new Date).toISOString(),important:Math.random()>.5};p(e).then((function(t){o(n.concat(t)),O("")}))}},a.a.createElement("input",{value:m,onChange:function(t){console.log(t.target.value),O(t.target.value)}}),a.a.createElement("button",{type:"Submit"},"save")),a.a.createElement((function(){return a.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},a.a.createElement("br",null),a.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))}),null))};n(37);c.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f3642725.chunk.js.map