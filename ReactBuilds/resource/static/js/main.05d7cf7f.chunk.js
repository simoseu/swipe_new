(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{61:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r(0),i=r.n(c),l=r(7),n=r.n(l),s=r(38),d=(r(34),r(61),r(23)),j=r(24),o=r(17),u=r(37),b=r(9),p=r(13),h=r(36),x=r.p+"static/media/grip.8bc37f34.svg";function O(e){return e.value.editing?Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"text",name:"propertyValue",id:"values",value:e.value.label||e.value.value}),Object(a.jsx)("label",{htmlFor:"valueType",children:"Seleziona il tipo di confronto vuoi che avvenga:"}),Object(a.jsxs)("select",{id:"valueType",name:"valueTypes",value:e.value.comparison,children:[Object(a.jsx)("option",{value:"default",children:"Default (exactString or equal)"}),Object(a.jsx)("option",{value:"substring",children:"Substring"}),Object(a.jsx)("option",{value:"numeric",children:"Numeric"}),Object(a.jsx)("option",{value:"regex",children:"Regular Expression"})]}),Object(a.jsx)("span",{id:"editButtonSpan",children:"[ Apply | Undo]"})]}):Object(a.jsxs)("li",{className:e.value.edited?"modified":"non-modified",children:[e.value.label?e.value.label:e.value.value,Object(a.jsx)("span",{id:"editButtonSpan",children:"[Edit]"})]})}function v(e){return Object(a.jsx)(p.b,{draggableId:e.attribute.ID,index:e.index,children:function(t,r){return Object(a.jsxs)("tr",Object(b.a)(Object(b.a)({},t.draggableProps),{},{ref:t.innerRef,style:Object(b.a)({backgroundColor:r.isDragging&&"#abcdef"},t.draggableProps.style),className:"attribute-row",children:[Object(a.jsx)("td",Object(b.a)(Object(b.a)({className:"drag-cell"},t.dragHandleProps),{},{children:Object(a.jsx)("img",{src:x,alt:"drag"})})),Object(a.jsx)("td",{className:"property-cell",children:e.attribute.property.label||e.attribute.property.uri}),Object(a.jsx)("td",{className:"value-cell",children:Object(a.jsx)("ul",{children:e.attribute.value.map((function(e){return Object(a.jsx)(O,{value:e},e.ID)}))})}),Object(a.jsx)("td",{className:"show-cell",children:Object(a.jsx)("input",{type:"checkbox",name:e.attribute.ID,checked:e.attribute.show})})]}))}})}function m(e){return Object(a.jsx)(p.a,{onDragEnd:function(t){var r=t.destination,a=t.source;if(r&&(r.droppableId!==a.droppableId||r.index!==a.index)){var c=e.data.splice(a.index,1)[0];e.data.splice(r.index,0,c)}},children:Object(a.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,id:"resource-table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"drag-cell",children:"#"}),Object(a.jsx)("th",{className:"property-cell",children:"Propriet\xe0"}),Object(a.jsx)("th",{className:"value-cell",children:"Valori"}),Object(a.jsx)("th",{className:"show-cell",children:"Show"})]})}),Object(a.jsx)(p.c,{droppableId:"droppable",children:function(t){return Object(a.jsxs)("tbody",Object(b.a)(Object(b.a)({ref:t.innerRef},t.droppableProps),{},{children:[e.resource.map((function(e,t){return Object(a.jsx)(v,{attribute:e,index:t},e.ID)})),t.placeholder]}))}})]})})}var f=function(e){var t=Object(c.useState)(e.resource),r=Object(s.a)(t,2),i=r[0];return r[1],Object(a.jsxs)(d.a,{fluid:!0,id:"main-container",children:[Object(a.jsxs)(j.a,{variant:"dark",id:"navbar",children:[Object(a.jsx)(j.a.Brand,{href:"/home",children:"Swipe"}),Object(a.jsxs)(o.a,{className:"mr-auto",children:[Object(a.jsx)(o.a.Link,{href:"/home",children:"Home"}),Object(a.jsx)(o.a.Link,{href:"#about",children:"About"})]})]}),Object(a.jsx)(m,{resource:i}),Object(a.jsxs)(d.a,{fluid:!0,id:"footer",children:[Object(a.jsx)("p",{children:"Dopo aver modificato gli attributi per effettuare una query clicca il tasto QUERY presente sulla destra"}),Object(a.jsx)(u.a,{variant:"success",size:"lg",children:"Esegui Query"})]})]})};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{resource:window.resource})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.05d7cf7f.chunk.js.map