(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[8],{104:function(e,n,t){},107:function(e,n,t){"use strict";t.r(n);var o,r,i,a=t(1),c=t.n(a),s=t(58),l=t.n(s),d=t(29),u=(t(98),t(91)),p=t(120),b=t(119),_=t(57),h=t(7),m=t(8),f=t(118),g=t(122),j=function(e){return"(max-width:".concat(e,"px) ")},x=function(e){return"(min-width:".concat(e,"px) ")},v=function(e){return{viewport:{width:window.innerWidth,height:window.innerHeight},mobile:Object(g.a)(x(e.mobile)),mobilePlus:Object(g.a)(x(e.mobilePlus)),tablet:Object(g.a)(x(e.tablet)),desktop:Object(g.a)(x(e.desktop)),mobileMax:Object(g.a)(j(e.mobileMax)),mobilePlusMax:Object(g.a)(j(e.mobimobilePlusMaxlePlus)),tabletMax:Object(g.a)(j(e.tabletMax)),desktopMax:Object(g.a)(j(e.desktopMax))}},O=t(12),w=t(11),C=t(76),k=Object(C.a)(o||(o=Object(w.a)(["\n  fragment AllViews on View {\n    title\n    path\n  }\n"]))),y=Object(C.a)(r||(r=Object(w.a)(["\n  ","\n  query {\n    getAllViews {\n      id\n      ...AllViews\n    }\n  }\n"])),k),N=(Object(C.a)(i||(i=Object(w.a)(["\n  ","\n  query getView($id: ID) {\n    getView(id: $id) {\n      id\n      ...AllViews\n    }\n  }\n"])),k),t(83)),L=t(77),A=t(59),S=t(55),V=t.n(S),M=t(3),F=function(e){var n=e.children;return Object(M.jsx)("div",{className:V.a.HeaderContainer,children:n})},D=function(e){var n=e.children;return Object(M.jsx)("div",{className:V.a.FooterContainer,children:n})},H=t(28),R=t.n(H),W=t.p+"static/media/header_react_logo.6ce24c58.svg",P=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("img",{src:W,className:R.a.Header__logoImg,alt:"react logo"}),Object(M.jsx)("h1",{className:R.a.Header__logoName,children:"codebox"})]})},B=t(121),I=t(13),z=t(44),q=t.n(z),E=Object(m.g)((function(e){var n=e.location,t=Object(a.useContext)(I.a),o=t.views,r=t.setShowNavModal;return Object(M.jsx)("nav",{className:q.a.Nav,children:Object(M.jsx)("ul",{className:q.a.Nav__list,children:o.map((function(e){var t=e.title,o=e.path;return Object(M.jsx)(a.Fragment,{children:"/"!==o&&Object(M.jsx)("li",{className:q.a.Nav__item,children:Object(M.jsx)(d.b,{exact:!0,to:{pathname:o,state:{from:n}},className:q.a.Nav__link,activeClassName:q.a.Nav__activeLink,onClick:function(){return r()},children:t})},B.a)},o)}))})})})),T=t(35),G=function(){var e=Object(a.useContext)(I.a),n=e.showNavModal,t=e.toggleNavMenu;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("button",{className:R.a.Header__menuBtn,type:"button",onClick:t,children:n?Object(M.jsx)("svg",{className:R.a.Header__menuBtnSvg,children:Object(M.jsx)("use",{href:T.a+"#icon-close"})}):Object(M.jsx)("svg",{className:R.a.Header__menuBtnSvg,children:Object(M.jsx)("use",{href:T.a+"#menu-dots"})})})})};function $(){var e=Object(a.useContext)(I.a).media,n=A.a.path.home;return Object(M.jsx)("header",{className:R.a.Header,children:Object(M.jsxs)(F,{children:[Object(M.jsx)(d.b,{className:R.a.Header__logoLink,to:n,children:Object(M.jsx)(P,{})}),e.tabletMax?Object(M.jsx)(G,{}):Object(M.jsx)(E,{})]})})}var J=t(71),Y=t.n(J),U=function(){var e=Object(a.useContext)(I.a).media;return Object(M.jsx)(M.Fragment,{children:e.tabletMax&&Object(M.jsx)("div",{className:Y.a.navbar__backdrop,children:Object(M.jsx)("div",{className:Y.a.navbar,children:Object(M.jsx)(E,{})})})})},Q=t(85),X=t.n(Q),K=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,163))})),Z=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,164))})),ee=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,158))})),ne=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3)]).then(t.bind(null,159))})),te=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,160))})),oe=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,161))})),re=function(){var e=A.a.path,n=e.admin,t=e.layout,o=e.components,r=e.functions,i=e.hooks;return Object(M.jsx)(a.Suspense,{fallback:Object(M.jsx)("div",{className:X.a.loadingSuspense,children:"Loading..."}),children:Object(M.jsxs)(m.d,{children:[Object(M.jsx)(m.b,{path:n,component:K}),Object(M.jsx)(m.b,{exact:!0,path:"/",component:Z}),Object(M.jsx)(m.b,{path:t,component:ee}),Object(M.jsx)(m.b,{path:o,component:ne}),Object(M.jsx)(m.b,{path:r,component:te}),Object(M.jsx)(m.b,{path:i,component:oe}),Object(M.jsx)(m.a,{to:"/"})]})})};function ie(e){var n=e.children;return Object(M.jsx)("div",{className:V.a.Container,children:n})}var ae,ce,se,le,de,ue=Object(m.g)((function(){return Object(M.jsx)("main",{className:"main",children:Object(M.jsx)(ie,{children:re()})})})),pe=t(45),be=t.n(pe),_e=function(){return Object(M.jsx)("div",{className:be.a.Footer,children:Object(M.jsx)(D,{children:Object(M.jsxs)("div",{className:be.a.Footer__cotyrightWrap,children:[Object(M.jsx)("svg",{className:be.a.Footer__logoImg,width:"22",height:"22",children:Object(M.jsx)("use",{href:T.a+"#icon-react-logo"})}),Object(M.jsxs)("span",{className:be.a.Footer__cotyright,children:[Object(M.jsx)("a",{href:"/",children:"codebox"})," \xa9"," ",Object(M.jsx)("time",{className:be.a.Footer__cotyrightYear,children:(new Date).getFullYear()})]})]})})})},he=(t(104),t(18)),me=he.a.div(ae||(ae=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  width: 100%;\n  height: 100vh;\n  background: rgba(60, 63, 67, 0.6);\n  cursor: pointer;\n  // z-index: 9;\n\n  @media screen and (min-width: 451px) {\n    padding: 25px;\n  }\n"]))),fe=he.a.div(ce||(ce=Object(w.a)(["\n  position: relative;\n  min-width: 100px;\n  min-height: 100px;\n  cursor: auto;\n  box-shadow: ",";\n"])),O.a.secondaryShadow),ge=he.a.button(se||(se=Object(w.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 10px;\n  right: 10px;\n  height: 24px;\n  width: 24px;\n  line-heught: 1.2;\n  fill: #fff;\n  cursor: pointer;\n  z-index: 3;\n"]))),je=he.a.div(le||(le=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  border-radius: 6px;\n"])),(function(e){return e.backgroundColor})),xe=(he.a.button.attrs()(de||(de=Object(w.a)(["\n  padding: 10px 25px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  color: #fff;\n  background-color: ",";\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  &:hover { \n    background-color: ",";\n    cursor: pointer;\n  }\n\n  tabIndex={-1}\n\n  &:focus {\n    outline: 0;\n  }\n"])),O.a.linkColor,(function(e){return e.bgColor})),function(e){var n=e.children,t=Object(a.useContext)(I.a).toggleAppModal;Object(a.useEffect)((function(){return document.addEventListener("keydown",o),function(){return document.removeEventListener("keydown",o)}}));var o=function(e){return"Escape"===e.code&&t("esc")};return Object(s.createPortal)(Object(M.jsx)(me,{onClick:function(e){return e.currentTarget===e.target&&t("backdrop")},children:Object(M.jsxs)(fe,{children:[Object(M.jsx)(ge,{onClick:function(){return t("close")},children:Object(M.jsx)("svg",{width:"14",height:"14",children:Object(M.jsx)("use",{href:T.a+"#icon-close"})})}),n]})}),document.body)}),ve=t(32),Oe=t.n(ve),we=t(48),Ce=t(113),ke=t(39),ye=t.n(ke),Ne=t(36),Le=t(60),Ae=function(){var e=Object(a.useState)(""),n=Object(h.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),i=Object(h.a)(r,2),c=i[0],s=i[1],l=Object(a.useContext)(I.a),d=l.toggleAppModal,u=l.refetch,p=Object(Ce.a)(Le.a),b=Object(h.a)(p,1)[0],_=function(){var e=Object(we.a)(Oe.a.mark((function e(n){var r,i;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,b({variables:{input:{title:t,path:c}}});case 4:r=e.sent,i=r.data,console.log("new view !!!",i.createView),u(),o(""),s(""),d(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("ERROR in GqlFormAndList > addView:",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}();return Object(M.jsxs)("form",{className:ye.a.CreateView__form,onSubmit:function(e){return _(e)},children:[Object(M.jsx)(Ne.c,{className:"admin-create-view-title-input",padding:"15px",border:"1px solid ".concat(O.a.primaryTextColor),borderRadius:"4px",outline:"none",placeholder:"Title",value:t,onChange:function(e){return o(e.target.value)}}),Object(M.jsx)(Ne.c,{className:"admin-create-view-path-input",padding:"15px",border:"1px solid ".concat(O.a.primaryTextColor),borderRadius:"4px",outline:"none",placeholder:"path",value:c,onChange:function(e){return s(e.target.value)}}),Object(M.jsx)(Ne.b,{className:"admin-create-view-btn",padding:"15px 25px",borderRadius:"4px",type:"sybmit",children:"Create"})]})},Se=function(){var e=Object(a.useContext)(I.a),n=e.modalAppConfig,t=n.id,o=n.refetch,r=e.toggleAppModal,i=Object(Ce.a)(Le.b,{variables:{id:t}}),c=Object(h.a)(i,1)[0],s=function(){var e=Object(we.a)(Oe.a.mark((function e(){var n,t;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:n=e.sent,t=n.data,console.log("deleted id !!!",t.deleteView.id),o(),r("remove-modal"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR in GqlFormAndList > deleteView:",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(we.a)(Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r("remove-modal"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsxs)("div",{className:ye.a.DeleteViewConfirm,children:[Object(M.jsx)("h3",{className:ye.a.DeleteViewConfirm__title,children:"Confirm deletion"}),Object(M.jsxs)("div",{className:ye.a.DeleteViewConfirm__btnWrap,children:[Object(M.jsx)(Ne.b,{padding:"10px 20px",borderRadius:"4px",margin:"0 20px 0 0",backgroundColor:O.a.activeLinkColor,onClick:s,children:"Confirm"}),Object(M.jsx)(Ne.b,{padding:"10px 20px",borderRadius:"4px",backgroundColor:"tomato",onClick:l,children:"Cancel"})]})]})},Ve=function(e){var n=e.config;return Object(M.jsxs)(je,{className:"app-modal-content",children:["create-view-btn"===n.content&&Object(M.jsx)(Ae,{}),"delete-view-btn"===n.content&&Object(M.jsx)(Se,{})]})},Me=Object(m.g)((function(e){var n=e.location,t=N.views,o=v(O.a),r=Object(a.useState)(!1),i=Object(h.a)(r,2),c=i[0],s=i[1],l=Object(a.useState)(null),d=Object(h.a)(l,2),u=d[0],p=d[1],b=Object(a.useState)(),m=Object(h.a)(b,2),g=m[0],j=m[1],x=Object(L.a)(n,t),w=Object(f.a)(y),C=w.data,k=w.loading,A=(w.error,w.refetch);Object(a.useEffect)((function(){return function(e){document.querySelector("body").style.overflow=e?"hidden":"auto"}(c)}),[c]),Object(a.useEffect)((function(){return p(Object(_.a)({},x))}),[]),Object(a.useEffect)((function(){return!k&&j(C.getAllViews)}),[C]);var S=Object(a.useState)(!1),V=Object(h.a)(S,2),F=V[0],D=V[1],H=Object(a.useState)(null),R=Object(h.a)(H,2),W=R[0],P=R[1],B={localState:u,views:t,media:o,showNavModal:c,setLocalState:p,setShowNavModal:s,toggleNavMenu:function(){return s(!c)},showAppModal:F,allViews:g,loading:k,refetch:A,toggleAppModal:function(e){P(Object(_.a)(Object(_.a)({},e),{},{refetch:A})),"remove-modal"!==e.content&&D(!F),"remove-modal"===e.content&&D(!1)},modalAppConfig:W};return Object(M.jsx)(I.a.Provider,{value:B,children:Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)($,{}),c&&Object(M.jsx)(U,{}),Object(M.jsx)(ue,{}),Object(M.jsx)(_e,{}),F&&Object(M.jsx)(xe,{children:Object(M.jsx)(Ve,{config:W})})]})})})),Fe=function(e){e&&e instanceof Function&&t.e(11).then(t.bind(null,162)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))},De=(t(106),new u.a({uri:"https://graphql-mongoose-server.herokuapp.com/",cache:new p.a}));l.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(b.a,{client:De,children:Object(M.jsx)(d.a,{children:Object(M.jsx)(Me,{})})})}),document.getElementById("root")),Fe()},12:function(e,n,t){"use strict";n.a={mobile:"375",mobilePlus:"414",tablet:"768",desktop:"1200",desktopLarge:"1440",mobileMax:"374",mobilePlusMax:"413",tabletMax:"767",desktopMax:"1199",desktopLargeMax:"1439",primaryBlackColor:"#282c34",primaryBlackColor75:"#282c34bf",primaryBlackColor50:"#282c3480",primaryBlackColor25:"#282c3440",primaryWhiteColor:"#ffffff",primaryWhiteColor75:"#ffffffbf",primaryWhiteColor50:"#ffffff80",primaryWhiteColor35:"#ffffff59",primaryWhiteColor25:"#ffffff40",primaryWhiteColor15:"#ffffff26",primaryTextColor:"#6b85a3",primaryTitleColor:"#1a2533",conditionsTextColor:"#324964",linkColor:"#5b78ad",activeLinkColor:"#6ecab6",BG__Light:"#f9fbfd",BG__GreyBlue:"#425368da",primaryBorderColor:"#e8f1fb",primaryShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",secondaryShadow:"rgba(0, 0, 0, 0.45) 0px 25px 15px -20px",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}},13:function(e,n,t){"use strict";var o=t(1),r=Object(o.createContext)();n.a=r},28:function(e,n,t){e.exports={Header:"Header_Header__239sf",Header__logoLink:"Header_Header__logoLink___qZD1",Header__logoImg:"Header_Header__logoImg__1QgY2",HeaderLogoSpin:"Header_HeaderLogoSpin__2O3F3",Header__logoName:"Header_Header__logoName__2gRX0",Header__menuBtn:"Header_Header__menuBtn__1HYJo"}},35:function(e,n,t){"use strict";n.a=t.p+"static/media/sprite.13ba2e8e.svg"},36:function(e,n,t){"use strict";t.d(n,"c",(function(){return f})),t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return j}));var o,r,i,a,c,s=t(11),l=t(18),d=t(12),u=l.a.input(o||(o=Object(s.a)(["\n  position: ",";\n  top: ",";\n  right: ",";\n  margin: ",";\n  padding: ",";\n  width: ",";\n  height: ",";\n  text-align: ",";\n  color: ",";\n  white-space: ",";\n  overflow: ",";\n  text-overflow: ",";\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  outline: ",";\n\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    color: ",";\n  }\n  :-ms-input-placeholder {\n    color: ",";\n  }\n  :focus::-webkit-input-placeholder {\n    color: transparent;\n  }\n  :focus::-moz-placeholder {\n    color: transparent;\n  }\n  :focus:-moz-placeholder {\n    color: transparent;\n  }\n  :focus:-ms-input-placeholder {\n    color: transparent;\n  }\n"])),(function(e){return e.position}),(function(e){return e.top}),(function(e){return e.right}),(function(e){return e.margin}),(function(e){return e.padding}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.textAlign}),(function(e){return e.color}),(function(e){return e.whiteSpace}),(function(e){return e.overflow}),(function(e){return e.textOverflow}),(function(e){return e.backgroundColor}),(function(e){return e.border}),(function(e){return e.borderRadius}),(function(e){return e.outline}),d.a.primaryBlackColor25,d.a.primaryBlackColor25),p=Object(l.a)(u)(r||(r=Object(s.a)(["\n  :focus {\n    padding: ",";\n    border: 2px solid ",";\n    outline: none;\n  }\n"])),(function(e){return function(e){return e&&e.split("px").filter(Boolean).map((function(e){return"".concat(+e-1,"px")})).join(" ")}(e.padding)}),d.a.activeLinkColor),b=Object(l.a)(u)(i||(i=Object(s.a)([""]))),_=l.a.button(a||(a=Object(s.a)(["\n  position: ",";\n  top: ",";\n  right: ",";\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  display: ",";\n  padding: ",";\n  margin: ",";\n  width: ",";\n  height: ",";\n  font-size: ",";\n  color: ",";\n  white-space: ",";\n  background-color: ",";\n  border-radius: ",";\n  transform: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"])),(function(e){return e.position}),(function(e){return e.top}),(function(e){return e.right}),(function(e){return e.display}),(function(e){return e.flexDirection}),(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.display}),(function(e){return e.padding}),(function(e){return e.margin}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.fontSize}),(function(e){return e.color}),(function(e){return e.whiteSpace}),(function(e){return e.backgroundColor}),(function(e){return e.borderRadius}),(function(e){return e.transform})),h=Object(l.a)(_)(c||(c=Object(s.a)(["\n  &:hover {\n    background-color: ",";\n  }\n"])),d.a.BG__GreyBlue),m=t(3),f=function(e){var n=e.className,t=void 0===n?"admin-custom-modal-input":n,o=e.position,r=e.top,i=void 0===r?0:r,a=e.right,c=void 0===a?0:a,s=e.margin,l=e.padding,d=e.width,u=e.height,b=e.textAlign,_=e.color,h=e.whiteSpace,f=e.overflow,g=e.textOverflow,j=e.backgroundColor,x=e.border,v=e.borderRadius,O=e.outline,w=e.type,C=void 0===w?"text":w,k=e.placeholder,y=e.value,N=e.onChange,L=e.children;return Object(m.jsx)(p,{className:t,position:o,top:i,right:c,margin:s,padding:l,width:d,height:u,textAlign:b,color:_,whiteSpace:h,overflow:f,textOverflow:g,backgroundColor:j,border:x,borderRadius:v,outline:O,type:C,placeholder:k,value:y,onChange:N,children:L})},g=function(e){var n=e.className,t=void 0===n?"admin-card-modal-input":n,o=e.position,r=e.top,i=void 0===r?0:r,a=e.right,c=void 0===a?0:a,s=e.margin,l=e.padding,d=e.width,u=e.height,p=e.textAlign,_=e.color,h=e.whiteSpace,f=e.overflow,g=e.textOverflow,j=e.backgroundColor,x=e.border,v=e.borderRadius,O=e.outline,w=e.type,C=void 0===w?"text":w,k=e.placeholder,y=e.value,N=e.onChange,L=e.children;return Object(m.jsx)(b,{className:t,position:o,top:i,right:c,margin:s,padding:l,width:d,height:u,textAlign:p,color:_,whiteSpace:h,overflow:f,textOverflow:g,backgroundColor:j,border:x,borderRadius:v,outline:O,type:C,placeholder:k,value:y,onChange:N,children:L})},j=function(e){var n=e.className,t=void 0===n?"admin-custom-btn":n,o=e.position,r=e.top,i=void 0===r?0:r,a=e.right,c=void 0===a?0:a,s=e.display,l=void 0===s?"flex":s,u=e.flexDirection,p=e.justifyContent,b=void 0===p?"center":p,_=e.alignItems,f=void 0===_?"center":_,g=e.padding,j=e.margin,x=e.width,v=e.height,O=e.fontSize,w=e.color,C=void 0===w?"white":w,k=e.whiteSpace,y=void 0===k?"nowrap":k,N=e.backgroundColor,L=void 0===N?d.a.primaryTextColor:N,A=e.borderRadius,S=e.transform,V=e.type,M=void 0===V?"button":V,F=e.onClick,D=e.children;return Object(m.jsx)(h,{className:t,position:o,top:i,right:c,display:l,flexDirection:u,justifyContent:b,alignItems:f,padding:g,margin:j,width:x,height:v,color:C,fontSize:O,whiteSpace:y,backgroundColor:L,borderRadius:A,transform:S,type:M,onClick:F,children:D})}},39:function(e,n,t){e.exports={AdminDashboard:"Admin_AdminDashboard__17kOn",AdminDashboard__loadingWrap:"Admin_AdminDashboard__loadingWrap__1e3MK",AdminDashboard__contentWrap:"Admin_AdminDashboard__contentWrap__1X285",content__btnWrap:"Admin_content__btnWrap__3UUeG",Login:"Admin_Login__RzspV",Login__form:"Admin_Login__form__3at5p",Login__title:"Admin_Login__title__3ooQ7",Login__passwordEye:"Admin_Login__passwordEye__vD0oA",Login__error:"Admin_Login__error__2V6s4",Login__toggleLink:"Admin_Login__toggleLink__3DYnw",Search__wrap:"Admin_Search__wrap__2pJPb",Search__iconWrap:"Admin_Search__iconWrap__Cmnjq",CreateView__form:"Admin_CreateView__form__tXYLm",ViewList__wrap:"Admin_ViewList__wrap__34_aP",ViewList__list:"Admin_ViewList__list__5Ir-h",ViewList__item:"Admin_ViewList__item__3nrvH",ViewList__card:"Admin_ViewList__card__L-7Dv",ViewList__cardModal:"Admin_ViewList__cardModal__3Mp7x",ViewList__cardRow:"Admin_ViewList__cardRow__1uLee",ViewList__btnWrap:"Admin_ViewList__btnWrap__MMOWO",card__contentRow:"Admin_card__contentRow__i5UNy",DeleteViewConfirm:"Admin_DeleteViewConfirm__1KEcm",DeleteViewConfirm__title:"Admin_DeleteViewConfirm__title__34_tJ",DeleteViewConfirm__btnWrap:"Admin_DeleteViewConfirm__btnWrap__1Tu0q",cardModal__contentRow:"Admin_cardModal__contentRow__23jFl",cardModal__btnWrap:"Admin_cardModal__btnWrap__J1GCV"}},44:function(e,n,t){e.exports={Nav__list:"Nav_Nav__list__2UPXS",Nav__item:"Nav_Nav__item__MfSFp",Nav__link:"Nav_Nav__link__1wEMj"}},45:function(e,n,t){e.exports={Footer:"Footer_Footer__V1Ckn",Footer__cotyrightWrap:"Footer_Footer__cotyrightWrap__QrmWh",Footer__logoImg:"Footer_Footer__logoImg__36woc",FooterLogoSpin:"Footer_FooterLogoSpin__1Q9mQ",Footer__cotyright:"Footer_Footer__cotyright__4WPdN"}},55:function(e,n,t){e.exports={Container:"Container_Container__3I8SX",HeaderContainer:"Container_HeaderContainer__2q2PG",FooterContainer:"Container_FooterContainer__25MOD"}},59:function(e,n,t){"use strict";n.a={path:{admin:"/admin",home:"/#",layout:"/layout",components:"/components",functions:"/functions",hooks:"/hooks"}}},60:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return d}));var o,r,i,a=t(11),c=t(76),s=Object(c.a)(o||(o=Object(a.a)(["\n  mutation createView($input: CreateViewInput) {\n    createView(input: $input) {\n      id\n      title\n      path\n    }\n  }\n"]))),l=Object(c.a)(r||(r=Object(a.a)(["\n  mutation deleteView($id: ID) {\n    deleteView(id: $id) {\n      id\n    }\n  }\n"]))),d=Object(c.a)(i||(i=Object(a.a)(["\n  mutation updateView($id: ID, $input: UpdateViewInput) {\n    updateView(id: $id, input: $input) {\n      id\n      title\n      path\n    }\n  }\n"])))},71:function(e,n,t){e.exports={navbar__backdrop:"NavModal_navbar__backdrop__37riq",navbar:"NavModal_navbar__YFp5K"}},77:function(e,n,t){"use strict";n.a=function(e,n){var t=e.pathname,o=e.pathname.split("/").filter(Boolean),r="/".concat(o[0]),i={views:n.length,features:0},a=n.find((function(e){return r===e.path}));n.forEach((function(e){return i.features+=e.links.length}));return function(){var e=(2===o.length?{feature:a.links.find((function(e){return t===e.href&&e}))}:{feature:null}).feature;return 0!==o.length?{view:{path:a.path,title:a.title},feature:2===o.length?{path:t,title:e.anchor}:null,nesting:2===o.length?2:1===o.length?1:0===o.length&&0,quantity:i}:{view:{path:t,title:"Home"},feature:null,nesting:0,quantity:i}}()}},83:function(e){e.exports=JSON.parse('{"views":[{"v_id":"v0","title":"Admin","path":"/admin","links":[]},{"v_id":"v1","title":"Home","path":"/","links":[{"l_id":"v1-l1","href":"/","anchor":"Home","source":""}]},{"v_id":"v2","title":"Layout","path":"/layout","links":[{"l_id":"v2-l1","href":"/layout/styled-components","anchor":"Styled Components","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Layout/StyledComponents"},{"l_id":"v2-l2","href":"/layout/moving-square","anchor":"Moving square","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Layout/MovingSquare"}]},{"v_id":"v3","title":"Components","path":"/components","links":[{"l_id":"v3-l1","href":"/components/dragndrop","anchor":"Drag and Drop","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/DragAndDrop"},{"l_id":"v3-l2","href":"/components/dropdown","anchor":"Dropdown","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Dropdown"},{"l_id":"v3-l3","href":"/components/feature","anchor":"Feature","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Feature"},{"l_id":"v3-l4","href":"/components/inputs","anchor":"Inputs","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Inputs"},{"l_id":"v3-l5","href":"/components/pagination","anchor":"Pagination","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Pagination"},{"l_id":"v3-l6","href":"/components/reused-modal","anchor":"Reused Modal","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/ReusedModal"}]},{"v_id":"v4","title":"Functions","path":"/functions","links":[{"l_id":"v4-l1","href":"/functions/closures","anchor":"Closures","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Functions/Closures"},{"l_id":"v4-l2","href":"/functions/recursion","anchor":"Recursion","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Functions/Recursion"}]},{"v_id":"v5","title":"Hooks","path":"/hooks","links":[{"l_id":"v5-l1","href":"/hooks/usecontext","anchor":"useContext","source":"https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Hooks/UseContext"}]}]}')},85:function(e,n,t){e.exports={loadingSuspense:"Routes_loadingSuspense__1DaSI"}},98:function(e,n,t){}},[[107,9,10]]]);
//# sourceMappingURL=main.c7973374.chunk.js.map