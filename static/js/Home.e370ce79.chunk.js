(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[5],{51:function(e,t,n){e.exports={Information:"Information_Information__29eRd",Information__btn:"Information_Information__btn__2QVzF",Information__listWrap:"Information_Information__listWrap__1ICll",Information__title:"Information_Information__title__2ouS9",Information__currentlist:"Information_Information__currentlist__9v-hJ",Information__item:"Information_Information__item__2TSkr",Information__itemKey:"Information_Information__itemKey__Vszyb",Information__generalList:"Information_Information__generalList__3lcxG",Information__generalValueWrap:"Information_Information__generalValueWrap__1G_MX",Information__generalKey:"Information_Information__generalKey__2QNgG",Information__generalValue:"Information_Information__generalValue__2p8hD"}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(55),o=n(23),r=Object(a.a)((function(){return{viewTitle:{marginBottom:30,fontSize:24,color:o.a.primeryBlackColor}}}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(58),o=n.n(a),r=n(2),s=n(55),i=n(23),c=Object(s.a)((function(){return{History:{display:"flex",alignItems:"center",width:"calc(100% - 50px)"},homeButton:{cursor:"pointer",fill:i.a.primaryBlackColor50,"&:hover svg":{fill:i.a.primaryBlackColor75}},homeIcon:{fill:i.a.primaryBlackColor50},fromButton:{fontSize:14,cursor:"pointer","& span":{color:i.a.primaryBlackColor50},"&:hover span":{color:i.a.primaryBlackColor75}},codebox:{fontSize:14,color:i.a.primaryBlackColor50,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},arrowIcon:{marginLeft:10,marginRight:10,width:14,height:15,fill:i.a.primaryBlackColor25,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},currentPathname:{color:i.a.primaryBlackColor50,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}})),l=n(13),m=n(0),_=function(){var e=c();return Object(m.jsx)("span",{className:e.arrowIcon,children:Object(m.jsx)("svg",{width:"14",height:"14",children:Object(m.jsx)("use",{href:l.a+"#icon-arrow-right"})})})},u=function(e){var t=e.path,n=c();return Object(m.jsx)("span",{className:"/"===t?n.homeIcon:null,children:Object(m.jsx)("svg",{width:"13",height:"13",children:Object(m.jsx)("use",{href:l.a+"#icon-home"})})})},j=Object(r.g)((function(e){var t=e.props,n=e.history,a=c(),o=t.stateFrom,r=t.fromPathname,s=t.createPathname;return Object(m.jsx)("button",{type:"button",className:a.fromButton,onClick:function(){return n.push(o)},children:s(r)})})),f=Object(r.g)((function(e){var t=e.history,n=e.location,a=c();return"/"!==n.pathname?Object(m.jsx)("button",{type:"button",className:a.homeButton,onClick:function(){return t.push("/")},children:Object(m.jsx)(u,{path:n.pathname})}):Object(m.jsx)(u,{path:n.pathname})})),b=Object(r.g)((function(e){e.history;var t,n,a=e.location,o=c(),r=null===(t=a.state)||void 0===t?void 0:t.from,s=null===(n=a.state)||void 0===n?void 0:n.from.pathname.substr(1),i=a.pathname.substr(1),l=function(e){return e&&Object(m.jsx)("span",{className:e===i?o.currentPathname:e===s&&null,children:(null===e||void 0===e?void 0:e.includes("/"))?null===e||void 0===e?void 0:e.split("/")[1]:e})};return Object(m.jsxs)("div",{className:o.History,children:[Object(m.jsx)(f,{}),Object(m.jsx)(_,{}),"/"!==a.pathname?Object(m.jsx)(j,{props:{stateFrom:r,fromPathname:s,createPathname:l}}):Object(m.jsx)("span",{className:o.codebox,children:"codebox"}),s&&Object(m.jsx)(_,{}),l(i)]})})),h=n(24),d=n(18),O=n(1),x=n(7),p=n(51),g=n.n(p),I=function(e){var t=e.showInformation,n=e.toggleInformationModal;return t?Object(m.jsx)("button",{className:g.a.Information__btn,onClick:n,children:Object(m.jsx)("svg",{width:"14",height:"14",children:Object(m.jsx)("use",{href:l.a+"#menu-close"})})}):Object(m.jsx)("button",{className:g.a.Information__btn,onClick:n,children:Object(m.jsx)("svg",{width:"18",height:"18",children:Object(m.jsx)("use",{href:l.a+"#icon-info"})})})},C=function(e){var t,n=e.information;return Object(m.jsxs)("ul",{className:g.a.Information__currentlist,children:[Object(m.jsxs)("li",{className:g.a.Information__item,children:[Object(m.jsx)("span",{className:g.a.Information__itemKey,children:"View: "}),0!==n.nesting?null===n||void 0===n||null===(t=n.view)||void 0===t?void 0:t.title:"Home"]}),2===n.nesting&&Object(m.jsxs)("li",{className:g.a.Information__item,children:[Object(m.jsx)("span",{className:g.a.Information__itemKey,children:"Feature: "}),n.feature.title]})]})},v=function(){var e=Object(O.useContext)(x.a).localState;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:g.a.Information__title,children:"General:"}),Object(m.jsx)("ul",{className:g.a.Information__generalList,children:Object(m.jsx)("li",{className:g.a.Information__generalItem,children:Object(m.jsxs)("div",{className:g.a.Information__generalValueWrap,children:[Object(m.jsxs)("span",{className:g.a.Information__generalKey,children:["Views:"," ",Object(m.jsx)("span",{className:g.a.Information__generalValue,children:e.quantity.views})]}),Object(m.jsxs)("span",{className:g.a.Information__generalKey,children:["Features:"," ",Object(m.jsx)("span",{className:g.a.Information__generalValue,children:e.quantity.features})]})]})})})]})},y=function(e){var t=e.information;return Object(m.jsxs)("div",{className:g.a.Information__listWrap,children:[Object(m.jsx)(C,{information:t}),Object(m.jsx)(v,{})]})},N=n(26),w=Object(r.g)((function(e){var t=e.location,n=Object(O.useState)(!1),a=Object(d.a)(n,2),o=a[0],r=a[1],s=Object(O.useState)(null),i=Object(d.a)(s,2),c=i[0],l=i[1],_=Object(O.useContext)(x.a),u=_.localState,j=_.setLocalState,f=_.views,b=Object(N.a)(t,f);Object(O.useEffect)((function(){return l(b)}),[t.pathname]),Object(O.useEffect)((function(){return j(Object(h.a)(Object(h.a)({},u),c))}),[c]);return Object(m.jsxs)("div",{className:g.a.Information,children:[Object(m.jsx)(I,{showInformation:o,toggleInformationModal:function(){return r(!o)}}),o&&Object(m.jsx)(y,{information:c})]})})),k=function(){return Object(m.jsxs)("div",{className:o.a.infoPanel,children:[Object(m.jsx)(b,{}),Object(m.jsx)(w,{})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(59),o=n.n(a),r=n(0),s=function(e){var t=e.children;return Object(r.jsx)("article",{className:o.a.Article,children:t})}},58:function(e,t,n){e.exports={infoPanel:"InfoPanel_infoPanel__2Wnih"}},59:function(e,t,n){e.exports={Article:"Article_Article__3XQP8"}},73:function(e,t,n){e.exports={CategoryCards__list:"CategoryCards_CategoryCards__list__16ZYn",CategoryCards__item:"CategoryCards_CategoryCards__item__36jz9",CategoryCards__btn:"CategoryCards_CategoryCards__btn__2e1c5"}},95:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(2),r=n(53),s=n(52),i=n(54),c=n(9),l=n(16),m=n(73),_=n.n(m),u=n(0),j=function(e){e.views;var t=l.a.path,n=t.layout,a=t.components,o=t.functions,r=t.hooks;return Object(u.jsx)("section",{className:_.a.CategoryCards,children:Object(u.jsxs)("ul",{className:_.a.CategoryCards__list,children:[Object(u.jsx)("li",{className:_.a.CategoryCards__item,children:Object(u.jsx)(c.b,{className:_.a.CategoryCards__btn,to:n,children:"Layout"})}),Object(u.jsx)("div",{className:_.a.CategoryCards__item,children:Object(u.jsx)(c.b,{className:_.a.CategoryCards__btn,to:a,children:"Components"})}),Object(u.jsx)("div",{className:_.a.CategoryCards__item,children:Object(u.jsx)(c.b,{className:_.a.CategoryCards__btn,to:o,children:"Functions"})}),Object(u.jsx)("div",{className:_.a.CategoryCards__item,children:Object(u.jsx)(c.b,{className:_.a.CategoryCards__btn,to:r,children:"Hooks"})})]})})},f=n(7);t.default=Object(o.g)((function(){var e=Object(a.useContext)(f.a).views,t=Object(s.a)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(r.a,{}),Object(u.jsxs)(i.a,{children:[Object(u.jsx)("h1",{className:t.viewTitle,children:"Categories"}),Object(u.jsx)(j,{views:e},e.title)]})]})}))}}]);
//# sourceMappingURL=Home.e370ce79.chunk.js.map