(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(c,e,r){},14:function(c,e,r){},15:function(c,e,r){"use strict";r.r(e);var n=r(0),t=r(1),i=r.n(t),u=r(5),s=r.n(u),d=(r(13),r(6)),a=r(7),l=(r(14),[{id:1,curr:"EUR"},{id:2,curr:"PLN"},{id:3,curr:"GEL"},{id:4,curr:"DKK"},{id:5,curr:"CZK"},{id:6,curr:"GBP"},{id:7,curr:"SEK"},{id:8,curr:"USD"},{id:9,curr:"RUB"}]),o=function(){var c=Object(t.useState)([]),e=Object(a.a)(c,2),r=e[0],i=e[1],u=function(c){var e=c.id,n=c.curr,t=r.find((function(c){return c.id===e}));i(t?r.filter((function(c){return c.id!==t.id})):[].concat(Object(d.a)(r),[{id:e,curr:n}]))};return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"curr-block",children:[r.map((function(c){return Object(n.jsxs)("div",{className:"curr-select",onClick:function(){return u(c)},children:[c.curr,Object(n.jsx)("span",{className:"circle-x",children:"X"})]})})),Object(n.jsx)("div",{className:"cell-wrap",children:l.map((function(c){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("label",{className:"cell",htmlFor:"sel-".concat(c.id),children:[Object(n.jsx)("input",{type:"checkbox",className:"sel-curr",id:"sel-".concat(c.id),onClick:function(){return u(c)},checked:(e=c,void 0!=r.find((function(c){return c.id===e.id})))}),c.curr]})});var e}))})]})})},j=function(c){c&&c instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(e){var r=e.getCLS,n=e.getFID,t=e.getFCP,i=e.getLCP,u=e.getTTFB;r(c),n(c),t(c),i(c),u(c)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(o,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.31870cf1.chunk.js.map