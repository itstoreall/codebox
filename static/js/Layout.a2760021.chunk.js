(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[5],{68:function(t,e,n){t.exports={Information:"Information_Information__2Ujhc",Information__btn:"Information_Information__btn__KjCV_",Information__listWrap:"Information_Information__listWrap__2d34r",Information__list:"Information_Information__list__1NMq1",Information__item:"Information_Information__item__3Ggrf",Information__itemKey:"Information_Information__itemKey__3RCnH"}},70:function(t,e,n){t.exports={infoPanel:"InfoPanel_infoPanel__2Wnih"}},71:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(69),r=n(27),a=Object(o.a)((function(){return{viewTitle:{marginBottom:35,fontSize:24,color:r.a.primeryBlackColor}}}))},72:function(t,e,n){t.exports={Article:"Article_Article__3XQP8"}},73:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var o=n(70),r=n.n(o),a=n(3),i=n(69),c=n(27),s=Object(i.a)((function(){return{historyButtonWrap:{display:"flex",alignItems:"center",width:"calc(100% - 50px)"},homeButton:{cursor:"pointer",fill:c.a.primaryBlackColor25,"&:hover svg":{fill:c.a.primaryBlackColor50}},homeIcon:{fill:c.a.primaryBlackColor25},fromButton:{fontSize:14,cursor:"pointer","& span":{color:c.a.primaryBlackColor25},"&:hover span":{color:c.a.primaryBlackColor50}},arrowIcon:{marginLeft:10,marginRight:10,width:14,height:15,fill:c.a.primaryBlackColor25,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},currentPathname:{color:c.a.primaryBlackColor25,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}})),l=n(14),u=n(0),m=function(){var t=s();return Object(u.jsx)("span",{className:t.arrowIcon,children:Object(u.jsx)("svg",{width:"14",height:"14",children:Object(u.jsx)("use",{href:l.a+"#icon-arrow-right"})})})},h=function(t){var e=t.path,n=s();return Object(u.jsx)("span",{className:"/"===e?n.homeIcon:null,children:Object(u.jsx)("svg",{width:"13",height:"13",children:Object(u.jsx)("use",{href:l.a+"#icon-home"})})})},j=Object(a.withRouter)((function(t){var e=t.props,n=t.history,o=s(),r=e.stateFrom,a=e.fromPathname,i=e.createPathname;return Object(u.jsx)("button",{type:"button",className:o.fromButton,onClick:function(){return n.push(r)},children:i(a)})})),f=Object(a.withRouter)((function(t){var e=t.history,n=t.location,o=s();return"/"!==n.pathname?Object(u.jsx)("button",{type:"button",className:o.homeButton,onClick:function(){return e.push("/")},children:Object(u.jsx)(h,{path:n.pathname})}):Object(u.jsx)(h,{path:n.pathname})})),b=Object(a.withRouter)((function(t){t.history;var e,n,o=t.location,r=s(),a=null===(e=o.state)||void 0===e?void 0:e.from,i=null===(n=o.state)||void 0===n?void 0:n.from.pathname.substr(1),c=o.pathname.substr(1),l=function(t){return t&&Object(u.jsx)("span",{className:t===c?r.currentPathname:t===i&&null,children:(null===t||void 0===t?void 0:t.includes("/"))?null===t||void 0===t?void 0:t.split("/")[1]:t})};return Object(u.jsxs)("div",{className:r.historyButtonWrap,children:[Object(u.jsx)(f,{}),"/"!==o.pathname&&Object(u.jsx)(m,{}),Object(u.jsx)(j,{props:{stateFrom:a,fromPathname:i,createPathname:l}}),i&&Object(u.jsx)(m,{}),l(c)]})})),d=n(4),p=n(1),_=n(13),x=n(68),v=n.n(x),O=function(t){var e=t.toggleInformationModal;return Object(u.jsx)("button",{className:v.a.Information__btn,onClick:e,children:Object(u.jsx)("svg",{width:"18",height:"18",children:Object(u.jsx)("use",{href:l.a+"#icon-info"})})})},I=function(t){var e=t.localState;return console.log("localState --\x3e",e),Object(u.jsxs)("ul",{className:v.a.Information__list,children:[Object(u.jsxs)("li",{className:v.a.Information__item,children:[Object(u.jsx)("span",{className:v.a.Information__itemKey,children:"Current age: "}),e.page]}),Object(u.jsxs)("li",{className:v.a.Information__item,children:[Object(u.jsx)("span",{className:v.a.Information__itemKey,children:"Width: "}),e.viewport.width]})]})},g=function(){var t=Object(p.useState)(!1),e=Object(d.a)(t,2),n=e[0],o=e[1],r=Object(p.useContext)(_.a),a=r.localState,i=(r.setLocalState,r.views);console.log("Information ---\x3e",a),console.log("views ---\x3e",i),Object(p.useEffect)((function(){console.log("uE ->, ")}),[]);return Object(u.jsxs)("div",{className:v.a.Information,children:[Object(u.jsx)(O,{toggleInformationModal:function(){return o(!n)}}),n&&Object(u.jsx)("div",{className:v.a.Information__listWrap,children:Object(u.jsx)(I,{localState:a})})]})},w=function(){return Object(u.jsxs)("div",{className:r.a.infoPanel,children:[Object(u.jsx)(b,{}),Object(u.jsx)(g,{})]})}},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(72),r=n.n(o),a=n(0),i=function(t){var e=t.children;return Object(a.jsx)("article",{className:r.a.Article,children:e})}},75:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n(1),r=n(16),a=n(3),i=n(69),c=n(27),s=Object(i.a)({navPanelList:{margin:0,padding:20,listStyle:"none",backgroundColor:c.a.BG__Light,border:"1px solid ".concat(c.a.primaryBorderColor),borderRadius:4},navPanelItem:{display:"inline-block"},categoryLink:{display:"block",fontSize:14,"&:not(:last-child)":{marginBottom:7},"&:hover":{color:c.a.activeLinkColor}},activeCategoryLink:{color:c.a.activeLinkColor,cursor:"default","&:hover":{textDecoration:"none"}}}),l=n(13),u=n(0),m=Object(a.withRouter)((function(t){var e=t.viewTitle,n=t.location,a=s(),i=Object(o.useContext)(l.a).views;return Object(u.jsx)("ul",{className:a.navPanelList,children:i.map((function(t){return Object(u.jsx)(o.Fragment,{children:t.title===e&&Object(u.jsx)("li",{className:a.navPanelItem,children:t.links.map((function(t){return Object(u.jsx)(r.b,{exact:!0,to:{pathname:t.href,state:{from:n}},className:a.categoryLink,activeClassName:a.activeCategoryLink,children:t.anchor},t.l_id)}))})},t.v_id)}))})}))},85:function(t,e,n){"use strict";n.r(e);var o=n(38),r=n(3),a=n(73),i=n(71),c=n(74),s=n(75),l=n(0);e.default=Object(r.withRouter)((function(){var t="Layout",e=Object(i.a)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{}),Object(l.jsxs)(c.a,{children:[Object(l.jsx)("h1",{className:e.viewTitle,children:t}),Object(l.jsx)(o.a,{viewTitle:t}),Object(l.jsx)(s.a,{viewTitle:t})]})]})}))}}]);
//# sourceMappingURL=Layout.a2760021.chunk.js.map