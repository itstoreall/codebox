(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[5],{70:function(t,e,n){t.exports={infoPanel:"InfoPanel_infoPanel__2Wnih"}},71:function(t,e,n){t.exports={Information:"Information_Information__2Ujhc",Information__btn:"Information_Information__btn__KjCV_",Information__listWrap:"Information_Information__listWrap__2d34r"}},72:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(69),r=n(27),a=Object(o.a)((function(){return{viewTitle:{marginBottom:35,fontSize:24,color:r.a.primeryBlackColor}}}))},73:function(t,e,n){t.exports={Article:"Article_Article__3XQP8"}},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var o=n(70),r=n.n(o),a=n(3),i=n(38),c=n(69),s=n(27),l=Object(c.a)((function(){return{historyButtonWrap:Object(i.a)({display:"none"},"@media screen and (min-width: ".concat(s.a.tablet,"px)"),{display:"flex",alignItems:"center"}),homeButton:{cursor:"pointer",fill:s.a.primaryBlackColor25,"&:hover svg":{fill:s.a.primaryBlackColor50}},homeIcon:{fill:s.a.primaryBlackColor25},fromButton:{fontSize:14,cursor:"pointer","& span":{color:s.a.primaryBlackColor25},"&:hover span":{color:s.a.primaryBlackColor50}},arrowIcon:{marginLeft:10,marginRight:10,width:14,height:15,fill:s.a.primaryBlackColor25,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},currentPathname:{color:s.a.primaryBlackColor25,fontSize:14,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}})),u=n(14),m=n(0),h=function(){var t=l();return Object(m.jsx)("span",{className:t.arrowIcon,children:Object(m.jsx)("svg",{width:"14",height:"14",children:Object(m.jsx)("use",{href:u.a+"#icon-arrow-right"})})})},j=function(t){var e=t.path,n=l();return Object(m.jsx)("span",{className:"/"===e?n.homeIcon:null,children:Object(m.jsx)("svg",{width:"13",height:"13",children:Object(m.jsx)("use",{href:u.a+"#icon-home"})})})},b=Object(a.withRouter)((function(t){var e=t.props,n=t.history,o=l(),r=e.stateFrom,a=e.fromPathname,i=e.createPathname;return Object(m.jsx)("button",{type:"button",className:o.fromButton,onClick:function(){return n.push(r)},children:i(a)})})),f=Object(a.withRouter)((function(t){var e=t.history,n=t.location,o=l();return"/"!==n.pathname?Object(m.jsx)("button",{type:"button",className:o.homeButton,onClick:function(){return e.push("/")},children:Object(m.jsx)(j,{path:n.pathname})}):Object(m.jsx)(j,{path:n.pathname})})),d=Object(a.withRouter)((function(t){t.history;var e,n,o=t.location,r=l(),a=null===(e=o.state)||void 0===e?void 0:e.from,i=null===(n=o.state)||void 0===n?void 0:n.from.pathname.substr(1),c=o.pathname.substr(1),s=function(t){return t&&Object(m.jsx)("span",{className:t===c?r.currentPathname:t===i&&null,children:(null===t||void 0===t?void 0:t.includes("/"))?null===t||void 0===t?void 0:t.split("/")[1]:t})};return Object(m.jsxs)("div",{className:r.historyButtonWrap,children:[Object(m.jsx)(f,{}),"/"!==o.pathname&&Object(m.jsx)(h,{}),Object(m.jsx)(b,{props:{stateFrom:a,fromPathname:i,createPathname:s}}),i&&Object(m.jsx)(h,{}),s(c)]})})),p=n(4),O=n(1),x=n(13),v=n(71),_=n.n(v),k=function(){var t=Object(O.useState)(!1),e=Object(p.a)(t,2),n=e[0],o=e[1],r=Object(O.useContext)(x.a),a=r.localState;r.setLocalState;console.log("Information ---\x3e",a);return Object(m.jsxs)("div",{className:_.a.Information,children:[Object(m.jsx)("button",{className:_.a.Information__btn,onClick:function(){return o(!n)},children:Object(m.jsx)("svg",{width:"18",height:"18",children:Object(m.jsx)("use",{href:u.a+"#icon-info"})})}),n&&Object(m.jsx)("div",{className:_.a.Information__listWrap,children:Object(m.jsxs)("ul",{className:_.a.Information__list,children:[Object(m.jsx)("li",{className:_.a.Information__item,children:"Info 1"}),Object(m.jsx)("li",{className:_.a.Information__item,children:"Info 2"})]})})]})},g=function(){return Object(m.jsxs)("div",{className:r.a.infoPanel,children:[Object(m.jsx)(d,{}),Object(m.jsx)(k,{})]})}},75:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(73),r=n.n(o),a=n(0),i=function(t){var e=t.children;return Object(a.jsx)("article",{className:r.a.Article,children:e})}},76:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var o=n(1),r=n(16),a=n(3),i=n(69),c=n(27),s=Object(i.a)({navPanelList:{margin:0,padding:20,listStyle:"none",backgroundColor:c.a.BG__Light,border:"1px solid ".concat(c.a.primaryBorderColor),borderRadius:4},navPanelItem:{display:"inline-block"},categoryLink:{display:"block",fontSize:14,"&:not(:last-child)":{marginBottom:7},"&:hover":{color:c.a.activeLinkColor}},activeCategoryLink:{color:c.a.activeLinkColor,cursor:"default","&:hover":{textDecoration:"none"}}}),l=n(13),u=n(0),m=Object(a.withRouter)((function(t){var e=t.viewTitle,n=t.location,a=s(),i=Object(o.useContext)(l.a).views;return Object(u.jsx)("ul",{className:a.navPanelList,children:i.map((function(t){return Object(u.jsx)(o.Fragment,{children:t.title===e&&Object(u.jsx)("li",{className:a.navPanelItem,children:t.links.map((function(t){return Object(u.jsx)(r.b,{exact:!0,to:{pathname:t.href,state:{from:n}},className:a.categoryLink,activeClassName:a.activeCategoryLink,children:t.anchor},t.l_id)}))})},t.v_id)}))})}))},86:function(t,e,n){"use strict";n.r(e);var o=n(39),r=n(3),a=n(74),i=n(72),c=n(75),s=n(76),l=n(0);e.default=Object(r.withRouter)((function(){var t="Layout",e=Object(i.a)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{}),Object(l.jsxs)(c.a,{children:[Object(l.jsx)("h1",{className:e.viewTitle,children:t}),Object(l.jsx)(o.a,{viewTitle:t}),Object(l.jsx)(s.a,{viewTitle:t})]})]})}))}}]);
//# sourceMappingURL=Layout.4f19c1c3.chunk.js.map