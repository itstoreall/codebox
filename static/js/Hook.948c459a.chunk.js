(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[4],{69:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(68),r=n(23),a=Object(o.a)((function(){return{viewTitle:{marginBottom:35,fontSize:24,color:r.a.primeryBlackColor}}}))},70:function(e,t,n){e.exports={Article:"Article_Article__3XQP8"}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(3),r=n(37),a=n(68),c=n(23),i=Object(a.a)((function(){return{historyButtonWrap:Object(r.a)({display:"none"},"@media screen and (min-width: ".concat(c.a.tablet,"px)"),{padding:"10px 0 10px 15px",display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(c.a.primaryBorderColor)}),homeButton:{cursor:"pointer",fill:c.a.linkColor,"&:hover svg":{fill:c.a.activeLinkColor}},homeIcon:{fill:c.a.activeLinkColor},fromButton:{fontSize:14,cursor:"pointer","& span":{color:c.a.linkColor},"&:hover span":{color:c.a.activeLinkColor}},arrowIcon:{marginLeft:10,marginRight:10,width:14,height:15,fill:c.a.primaryBlackColor25,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},currentPathname:{color:c.a.activeLinkColor,fontSize:14,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}})),s=n(14),l=n(0),u=function(){var e=i();return Object(l.jsx)("span",{className:e.arrowIcon,children:Object(l.jsx)("svg",{width:"14",height:"14",children:Object(l.jsx)("use",{href:s.a+"#icon-arrow-right"})})})},h=function(e){var t=e.path,n=i();return Object(l.jsx)("span",{className:"/"===t?n.homeIcon:null,children:Object(l.jsx)("svg",{width:"13",height:"13",children:Object(l.jsx)("use",{href:s.a+"#icon-home"})})})},j=Object(o.g)((function(e){var t=e.props,n=e.history,o=i(),r=t.stateFrom,a=t.fromPathname,c=t.createPathname;return Object(l.jsx)("button",{type:"button",className:o.fromButton,onClick:function(){return n.push(r)},children:c(a)})})),m=Object(o.g)((function(e){var t=e.history,n=e.location,o=i();return"/"!==n.pathname?Object(l.jsx)("button",{type:"button",className:o.homeButton,onClick:function(){return t.push("/")},children:Object(l.jsx)(h,{path:n.pathname})}):Object(l.jsx)(h,{path:n.pathname})})),d=Object(o.g)((function(e){e.history;var t,n,o=e.location,r=i(),a=null===(t=o.state)||void 0===t?void 0:t.from,c=null===(n=o.state)||void 0===n?void 0:n.from.pathname.substr(1),s=o.pathname.substr(1),h=function(e){return e&&Object(l.jsx)("span",{className:e===s?r.currentPathname:e===c&&null,children:(null===e||void 0===e?void 0:e.includes("/"))?null===e||void 0===e?void 0:e.split("/")[1]:e})};return Object(l.jsxs)("div",{className:r.historyButtonWrap,children:[Object(l.jsx)(m,{}),"/"!==o.pathname&&Object(l.jsx)(u,{}),Object(l.jsx)(j,{props:{stateFrom:a,fromPathname:c,createPathname:h}}),c&&Object(l.jsx)(u,{}),h(s)]})}))},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(70),r=n.n(o),a=n(0),c=function(e){var t=e.children;return Object(a.jsx)("article",{className:r.a.Article,children:t})}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n(1),r=n(15),a=n(3),c=n(68),i=n(23),s=Object(c.a)({navPanel:{margin:0,padding:20,listStyle:"none",backgroundColor:i.a.BG__Light,border:"1px solid ".concat(i.a.primaryBorderColor),borderRadius:4},categoryLink:{display:"block",fontSize:14,"&:not(:last-child)":{marginBottom:7},"&:hover":{color:i.a.activeLinkColor}},activeCategoryLink:{color:i.a.activeLinkColor,cursor:"default","&:hover":{textDecoration:"none"}}}),l=n(13),u=n(0),h=Object(a.g)((function(e){var t=e.viewTitle,n=e.location,a=s(),c=Object(o.useContext)(l.a).views;return Object(u.jsx)("ul",{className:a.navPanel,children:c.map((function(e){return Object(u.jsx)(o.Fragment,{children:e.title===t&&Object(u.jsx)("li",{className:a.cateogryLinkItem,children:e.links.map((function(e){return Object(u.jsx)(r.b,{exact:!0,to:{pathname:e.href,state:{from:n}},className:a.categoryLink,activeClassName:a.activeCategoryLink,children:e.anchor},e.l_id)}))})},e.v_id)}))})}))},86:function(e,t,n){"use strict";n.r(t);var o=n(38),r=n(3),a=n(71),c=n(69),i=n(72),s=n(73),l=n(0);t.default=Object(r.g)((function(){var e="Hooks",t=Object(c.a)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{}),Object(l.jsxs)(i.a,{children:[Object(l.jsx)("h1",{className:t.viewTitle,children:"Hooks"}),Object(l.jsx)(o.a,{viewTitle:e}),Object(l.jsx)(s.a,{viewTitle:e})]})]})}))}}]);
//# sourceMappingURL=Hook.948c459a.chunk.js.map