(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[1],{51:function(e,t,n){e.exports={Information:"Information_Information__29eRd",Information__btn:"Information_Information__btn__2QVzF",Information__listWrap:"Information_Information__listWrap__1ICll",Information__title:"Information_Information__title__2ouS9",Information__currentlist:"Information_Information__currentlist__9v-hJ",Information__item:"Information_Information__item__2TSkr",Information__itemKey:"Information_Information__itemKey__Vszyb",Information__generalList:"Information_Information__generalList__3lcxG",Information__generalValueWrap:"Information_Information__generalValueWrap__1G_MX",Information__generalKey:"Information_Information__generalKey__2QNgG",Information__generalValue:"Information_Information__generalValue__2p8hD"}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(55),a=n(23),i=Object(r.a)((function(){return{viewTitle:{marginBottom:30,fontSize:24,color:a.a.primeryBlackColor}}}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n(58),a=n.n(r),i=n(2),c=n(55),o=n(23),s=Object(c.a)((function(){return{History:{display:"flex",alignItems:"center",width:"calc(100% - 50px)"},homeButton:{cursor:"pointer",fill:o.a.primaryBlackColor50,"&:hover svg":{fill:o.a.primaryBlackColor75}},homeIcon:{fill:o.a.primaryBlackColor50},fromButton:{fontSize:14,cursor:"pointer","& span":{color:o.a.primaryBlackColor50},"&:hover span":{color:o.a.primaryBlackColor75}},codebox:{fontSize:14,color:o.a.primaryBlackColor50,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},arrowIcon:{marginLeft:10,marginRight:10,width:14,height:15,fill:o.a.primaryBlackColor25,"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},currentPathname:{color:o.a.primaryBlackColor50,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}}})),l=n(13),u=n(0),d=function(){var e=s();return Object(u.jsx)("span",{className:e.arrowIcon,children:Object(u.jsx)("svg",{width:"14",height:"14",children:Object(u.jsx)("use",{href:l.a+"#icon-arrow-right"})})})},j=function(e){var t=e.path,n=s();return Object(u.jsx)("span",{className:"/"===t?n.homeIcon:null,children:Object(u.jsx)("svg",{width:"13",height:"13",children:Object(u.jsx)("use",{href:l.a+"#icon-home"})})})},_=Object(i.g)((function(e){var t=e.props,n=e.history,r=s(),a=t.stateFrom,i=t.fromPathname,c=t.createPathname;return Object(u.jsx)("button",{type:"button",className:r.fromButton,onClick:function(){return n.push(a)},children:c(i)})})),p=Object(i.g)((function(e){var t=e.history,n=e.location,r=s();return"/"!==n.pathname?Object(u.jsx)("button",{type:"button",className:r.homeButton,onClick:function(){return t.push("/")},children:Object(u.jsx)(j,{path:n.pathname})}):Object(u.jsx)(j,{path:n.pathname})})),b=Object(i.g)((function(e){e.history;var t,n,r=e.location,a=s(),i=null===(t=r.state)||void 0===t?void 0:t.from,c=null===(n=r.state)||void 0===n?void 0:n.from.pathname.substr(1),o=r.pathname.substr(1),l=function(e){return e&&Object(u.jsx)("span",{className:e===o?a.currentPathname:e===c&&null,children:(null===e||void 0===e?void 0:e.includes("/"))?null===e||void 0===e?void 0:e.split("/")[1]:e})};return Object(u.jsxs)("div",{className:a.History,children:[Object(u.jsx)(p,{}),Object(u.jsx)(d,{}),"/"!==r.pathname?Object(u.jsx)(_,{props:{stateFrom:i,fromPathname:c,createPathname:l}}):Object(u.jsx)("span",{className:a.codebox,children:"codebox"}),c&&Object(u.jsx)(d,{}),l(o)]})})),h=n(24),f=n(18),m=n(1),x=n(7),O=n(51),g=n.n(O),v=function(e){var t=e.showInformation,n=e.toggleInformationModal;return t?Object(u.jsx)("button",{className:g.a.Information__btn,onClick:n,children:Object(u.jsx)("svg",{width:"14",height:"14",children:Object(u.jsx)("use",{href:l.a+"#menu-close"})})}):Object(u.jsx)("button",{className:g.a.Information__btn,onClick:n,children:Object(u.jsx)("svg",{width:"18",height:"18",children:Object(u.jsx)("use",{href:l.a+"#icon-info"})})})},k=function(e){var t,n=e.information;return Object(u.jsxs)("ul",{className:g.a.Information__currentlist,children:[Object(u.jsxs)("li",{className:g.a.Information__item,children:[Object(u.jsx)("span",{className:g.a.Information__itemKey,children:"View: "}),0!==n.nesting?null===n||void 0===n||null===(t=n.view)||void 0===t?void 0:t.title:"Home"]}),2===n.nesting&&Object(u.jsxs)("li",{className:g.a.Information__item,children:[Object(u.jsx)("span",{className:g.a.Information__itemKey,children:"Feature: "}),n.feature.title]})]})},w=function(){var e=Object(m.useContext)(x.a).localState;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:g.a.Information__title,children:"General:"}),Object(u.jsx)("ul",{className:g.a.Information__generalList,children:Object(u.jsx)("li",{className:g.a.Information__generalItem,children:Object(u.jsxs)("div",{className:g.a.Information__generalValueWrap,children:[Object(u.jsxs)("span",{className:g.a.Information__generalKey,children:["Views:"," ",Object(u.jsx)("span",{className:g.a.Information__generalValue,children:e.quantity.views})]}),Object(u.jsxs)("span",{className:g.a.Information__generalKey,children:["Features:"," ",Object(u.jsx)("span",{className:g.a.Information__generalValue,children:e.quantity.features})]})]})})})]})},T=function(e){var t=e.information;return Object(u.jsxs)("div",{className:g.a.Information__listWrap,children:[Object(u.jsx)(k,{information:t}),Object(u.jsx)(w,{})]})},N=n(26),y=Object(i.g)((function(e){var t=e.location,n=Object(m.useState)(!1),r=Object(f.a)(n,2),a=r[0],i=r[1],c=Object(m.useState)(null),o=Object(f.a)(c,2),s=o[0],l=o[1],d=Object(m.useContext)(x.a),j=d.localState,_=d.setLocalState,p=d.views,b=Object(N.a)(t,p);Object(m.useEffect)((function(){return l(b)}),[t.pathname]),Object(m.useEffect)((function(){return _(Object(h.a)(Object(h.a)({},j),s))}),[s]);return Object(u.jsxs)("div",{className:g.a.Information,children:[Object(u.jsx)(v,{showInformation:a,toggleInformationModal:function(){return i(!a)}}),a&&Object(u.jsx)(T,{information:s})]})})),I=function(){return Object(u.jsxs)("div",{className:a.a.infoPanel,children:[Object(u.jsx)(b,{}),Object(u.jsx)(y,{})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(59),a=n.n(r),i=n(0),c=function(e){var t=e.children;return Object(i.jsx)("article",{className:a.a.Article,children:t})}},56:function(e,t,n){"use strict";var r,a,i,c,o,s,l,u,d,j,_,p,b=n(24),h=n(2),f=n(18),m=n(1),x=n(74),O=n.n(x),g=n(75),v=n.n(g),k=n(0),w=function(e){var t=e.children;return Object(k.jsx)("section",{className:v.a.CategorySection,children:t})},T=n(76),N=n.n(T),y=n(64),I=n.n(y),F=function(e){var t=e.featureTitle,n=e.description;return Object(k.jsxs)("div",{className:I.a.App__header,children:[Object(k.jsx)("h1",{className:I.a.App__title,children:t}),Object(k.jsx)("p",{className:I.a.App__description,children:n})]})},C=function(e){var t=e.featureTitle,n=e.description,r=e.children;return Object(k.jsxs)("div",{className:I.a.App,children:[Object(k.jsx)(F,{featureTitle:t,description:n}),r]})},A=function(e){var t=e.featureTitle,n=e.description,r=e.children;return Object(k.jsx)("div",{className:N.a.Template__content,children:Object(k.jsx)(C,{featureTitle:t,description:n,children:r})})},S=n(77),P=n.n(S),L=n(7),z=n(13),B=function(e){var t=e.viewTitle,n=e.featureTitle,r=Object(m.useContext)(L.a).views;return Object(k.jsx)("div",{className:P.a.SourcePanel__wrap,children:r.map((function(e){var r=e.title,a=e.links;return r===t&&a.map((function(e){return e.source&&e.anchor===n&&Object(k.jsxs)("a",{className:P.a.SourcePanel__link,href:e.source,target:"_blanck",children:[Object(k.jsx)("svg",{className:P.a.SourcePanel__svgSource,width:"17",height:"17",children:Object(k.jsx)("use",{href:z.a+"#github"})}),Object(k.jsx)("span",{className:P.a.SourcePanel__linkAnchor,children:"".concat(e.anchor," source")})]},e.l_id)}))}))})},V=function(e){var t=e.viewTitle,n=e.featureTitle,r=e.description,a=e.children;return Object(k.jsxs)(w,{children:[Object(k.jsx)(A,{viewTitle:t,featureTitle:n,description:r,children:a}),Object(k.jsx)(B,{viewTitle:t,featureTitle:n})]})},W=n(60),D=n(61),E=n(23),M=D.a.div(r||(r=Object(W.a)(["\n  margin-bottom: 20px;\n  padding-bottom: 100px;\n  width: 100%;\n  background-color: yellowgreen;\n"]))),K=D.a.div(a||(a=Object(W.a)(["\n  padding: 20px;\n  width: 100%;\n  height: 100px;\n  font-size: 20px;\n  color: white;\n  background-color: skyblue;\n"]))),R=D.a.div(i||(i=Object(W.a)(["\n  padding: 20px;\n  width: 100%;\n  height: 100px;\n  font-size: 20px;\n  color: white;\n  background-color: palevioletred;\n"]))),Y=D.a.div(c||(c=Object(W.a)(["\n  padding: 20px;\n  width: 100%;\n  height: 100px;\n  font-size: 20px;\n  color: white;\n  background-color: pink;\n"]))),G=D.a.button(o||(o=Object(W.a)(["\n  padding: 0px;\n  width: 48%;\n  height: 50px;\n  font-size: 16px;\n  color: white;\n  background-color: grey;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  @media screen and (max-width: ","px) {\n    &:not(:last-child) {\n      margin-right: 4%;\n    }\n  }\n\n  @media screen and (min-width: ","px) {\n    width: 150px;\n\n    &:not(:last-child) {\n      margin-right: 15px;\n    }\n  }\n\n  &:hover {\n    background-color: black;\n  }\n"])),E.a.tabletMax,E.a.tablet),J=Object(h.g)((function(e){var t=e.viewTitle,n=e.featureTitle,r=(e.location,Object(m.useState)(0)),a=Object(f.a)(r,2),i=a[0],c=a[1],o=Object(m.useState)(0),s=Object(f.a)(o,2),l=s[0],u=s[1],d=function(e,t){c(e),u(t)};return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:"Here is an example of using the Styled Components library.",children:Object(k.jsxs)("div",{className:O.a.Feature,children:[Object(k.jsxs)(M,{children:[Object(k.jsx)(K,{children:"Basic"}),i?i&&l?Object(k.jsx)(Y,{children:"Vip"}):Object(k.jsx)(R,{children:"Middle"}):null]}),Object(k.jsx)(G,{onClick:function(){return d(1,0)},children:"Middle"}),Object(k.jsx)(G,{onClick:function(){return d(1,1)},children:"Vip"})]})})})),X=n(82),H=n.n(X),Q=function(e){var t=e.viewTitle,n=e.featureTitle,r=Object(m.useState)(""),a=Object(f.a)(r,2),i=a[0],c=a[1],o=Object(m.useState)(!1),s=Object(f.a)(o,2),l=s[0],u=s[1],d=Object(m.useState)("initial"),j=Object(f.a)(d,2),_=j[0],p=j[1],b=Object(m.useState)("Select file to upload"),h=Object(f.a)(b,2),x=h[0],O=h[1],g=Object(m.useState)(null),v=Object(f.a)(g,2),w=v[0],T=v[1],N=function(e){T(setTimeout((function(){c(e),I()}),2e3))},y=function(){p("uploading"),O("Cancel")},I=function(){p("uploaded"),O("Select file to replace")},F=function(){""===i||"initial"===_?(p("initial"),O("Select file to upload")):""===i&&"uploading"!==_||I()};return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:"The image should be square, max 100px, png or jpeg file format.",children:Object(k.jsx)("div",{className:H.a.dnd,children:Object(k.jsxs)("div",{className:H.a.dropArea,children:[l&&Object(k.jsx)("div",{className:H.a.dropAreaActive}),Object(k.jsxs)("div",{className:H.a.dropArea__info,children:["uploading"!==_&&Object(k.jsx)("div",{className:H.a.dropArea__thumb,children:"uploaded"===_&&Object(k.jsx)("img",{className:H.a.dropArea__image,src:i,alt:"company logo"})}),"uploading"===_&&Object(k.jsxs)("div",{className:H.a.preloader,children:[Object(k.jsx)("div",{className:H.a.preloader__inner,children:Object(k.jsx)("div",{className:H.a.preloader__thumb})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:H.a.preloader__barLeft,children:Object(k.jsx)("div",{className:H.a.preloader__progress})}),Object(k.jsx)("div",{className:H.a.preloader__barRight,children:Object(k.jsx)("div",{className:H.a.preloader__progress})})]})]}),"initial"===_&&Object(k.jsx)("span",{className:H.a.dropArea__conditionsText,children:"Drag & drop here"}),"uploading"===_&&Object(k.jsx)("span",{className:H.a.dropArea__conditionsText,children:"Uploading"}),"uploaded"===_&&Object(k.jsx)("span",{className:H.a.dropArea__conditionsText,children:"Drag & drop here to replace"}),Object(k.jsx)("span",{className:H.a.dropArea__orConditionsText,children:"- or -"})]}),"uploading"!==_&&Object(k.jsx)("input",{className:H.a.dropArea__input,"data-btn-content":x,type:"file",accept:"image/png, image/jpeg",onChange:function(e){u(!1),y();var t=e.currentTarget.files[0],n=new FileReader;n.readAsDataURL(e.currentTarget.files[0]),n.onload=function(){var e=new Image;e.src=n.result,y(),"image/png"===t.type||"image/jpeg"===t.type?e.onload=function(){var t=e.naturalWidth,n=e.naturalHeight;t<=100||n<=100?N(e.src):(alert("\nOops! \n\nThe uploaded image size is (".concat(t," x ").concat(n," px) \nBut it should only be max 100 x 100 px")),F())}:(alert('\nOops! \n\nThe uploaded image type is "'.concat(t.type.split("/")[1],'" \nBut it should only be png or jpeg')),F())}},onDragOver:function(e){return function(e){e.preventDefault(),u(!0)}(e)},onDragLeave:function(e){return function(e){e.preventDefault(),u(!1)}(e)}}),"uploading"===_&&Object(k.jsx)("span",{className:H.a.dropArea__btnCancel,onClick:function(){clearTimeout(w),F()},children:"Cancel"})]})})})},U=n(62),q=n.n(U),Z=function(e){var t,n=e.data,r=e.currentRows;return Object(k.jsx)(k.Fragment,{children:(null===(t=n.users)||void 0===t?void 0:t.length)>0?Object(k.jsx)("ul",{className:q.a.list,children:r.map((function(e){return Object(k.jsxs)("li",{className:q.a.list__item,children:[Object(k.jsx)("span",{className:q.a.list__itemText,children:"Number of user: "}),Object(k.jsx)("span",{className:q.a.list__itemElement,children:e})]},e)}))}):Object(k.jsx)("div",{children:"Loading..."})})},$=function(e){var t=e.paginatedList,n=e.currentList,r=e.paginate;return Object(k.jsxs)("div",{className:q.a.navPanel,children:[Object(k.jsx)("button",{className:q.a.navPanel__button,onClick:function(){return r("prev")},children:Object(k.jsx)("svg",{width:"18",height:"18",fill:"white",children:Object(k.jsx)("use",{href:z.a+"#icon-arrow-left"})})}),Object(k.jsx)("span",{className:q.a.navPanel__counter,children:"".concat(n," / ").concat(Math.ceil((null===t||void 0===t?void 0:t.length)/10)||1)}),Object(k.jsx)("button",{className:q.a.navPanel__button,onClick:function(){return r("next")},children:Object(k.jsx)("svg",{width:"18",height:"18",fill:"white",children:Object(k.jsx)("use",{href:z.a+"#icon-arrow-right"})})})]})},ee=n(83),te=function(e){var t=e.viewTitle,n=e.featureTitle,r=Object(m.useState)([]),a=Object(f.a)(r,2),i=a[0],c=a[1],o=Object(m.useState)(1),s=Object(f.a)(o,2),l=s[0],u=s[1],d=Object(m.useState)(10),j=Object(f.a)(d,1)[0],_=l*j,p=_-j,b=null===i||void 0===i?void 0:i.slice(p,_);Object(m.useEffect)((function(){c(ee.users)}),[]);return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:"This pagination allows you to divide the list into pages of ten items.",children:Object(k.jsxs)("div",{className:q.a.Feature,children:[Object(k.jsx)(Z,{data:ee,currentRows:b}),Object(k.jsx)($,{paginatedList:i,currentList:l,paginate:function(e){0!==p&&"prev"===e&&u((function(e){return e-1})),p+b.length!==(null===i||void 0===i?void 0:i.length)&&"next"===e&&u((function(e){return e+1}))}})]})})},ne=n(84),re=n.n(ne),ae=Object(m.createContext)(),ie=n(28),ce=D.a.div(s||(s=Object(W.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  width: 100%;\n  height: 100vh;\n  background: rgba(60, 63, 67, 0.6);\n  cursor: pointer;\n  // z-index: 9;\n\n  @media screen and (min-width: 451px) {\n    padding: 25px;\n  }\n"]))),oe=D.a.div(l||(l=Object(W.a)(["\n  position: relative;\n  min-width: 240px;\n  hin-height: 240px;\n  cursor: auto;\n"]))),se=D.a.button(u||(u=Object(W.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 24px;\n  right: 24px;\n  height: 24px;\n  width: 24px;\n  line-heught: 1.2;\n  fill: #fff;\n  cursor: pointer;\n"]))),le=D.a.div(d||(d=Object(W.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 250px;\n  background-color: ",";\n  border-radius: 6px;\n"])),(function(e){return e.backgroundColor})),ue=D.a.button.attrs()(j||(j=Object(W.a)(["\n  padding: 10px 25px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  color: #fff;\n  background-color: ",";\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  &:hover { \n    background-color: ",";\n    cursor: pointer;\n  }\n\n  tabIndex={-1}\n\n  &:focus {\n    outline: 0;\n  }\n"])),E.a.linkColor,(function(e){return e.bgColor})),de=function(e){var t=e.children,n=Object(m.useContext)(ae),r=n.toggleModal,a=n.modalContent;Object(m.useEffect)((function(){return document.addEventListener("keydown",i),function(){return document.removeEventListener("keydown",i)}}));var i=function(e){return"Escape"===e.code&&r("esc")};return Object(ie.createPortal)(Object(k.jsx)(ce,{onClick:function(e){return e.currentTarget===e.target&&r("backdrop")},children:Object(k.jsxs)(oe,{children:["swap-modal-btn"!==a&&Object(k.jsx)(se,{onClick:function(){return r("close")},children:Object(k.jsx)("svg",{width:"17",height:"17",children:Object(k.jsx)("use",{href:z.a+"#menu-close"})})}),t]})}),document.body)},je=function(){var e=Object(m.useContext)(ae).toggleModal;return Object(k.jsxs)("div",{children:[Object(k.jsx)(ue,{type:"button",bgColor:"pink",onClick:function(){return e("app-open-pink")},children:"Pink"}),Object(k.jsx)(ue,{type:"button",bgColor:"skyblue",onClick:function(){return e("app-open-skyblue")},children:"Skyblue"}),Object(k.jsx)(ue,{type:"button",bgColor:"yellowgreen",onClick:function(){return e("app-open-yellowgreen")},children:"Yellowgreen"})]})},_e=n(89),pe=Object(D.b)(_||(_=Object(W.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),be=D.a.svg(p||(p=Object(W.a)(["\n  animation: 1s "," linear infinite;\n  height: ",";\n  width: ",";\n  min-height: ",";\n  min-width: ",";\n  // background-color: #e8fdf2;\n  border-radius: 50%;\n  padding: 0px;\n  path {\n    stroke: ",";\n  }\n"])),pe,(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.size}),(function(e){var t=e.stroke,n=e.theme;return null!==t&&void 0!==t?t:n.primary1})),he=function(e){var t=e.strokeWidth;return Object(k.jsx)("path",{d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",strokeWidth:t,strokeLinecap:"round",strokeLinejoin:"round"})},fe=["size","stroke","strokeWidth"],me=function(e){var t=e.size,n=e.stroke,r=void 0===n?"#fff":n,a=e.strokeWidth,i=void 0===a?1:a,c=Object(_e.a)(e,fe);return Object(k.jsx)(be,Object(b.a)(Object(b.a)({viewBox:"0 0 24 24",fill:"none",size:t,stroke:r},c),{},{children:Object(k.jsx)(he,{strokeWidth:i})}))},xe=function(e){var t=e.backgroundColor;return Object(k.jsx)(le,{backgroundColor:t,className:"reused-modal",children:Object(k.jsx)(me,{size:"46px",strokeWidth:1})})},Oe=function(e){var t,n=Object(m.useState)(!1),r=Object(f.a)(n,2),a=r[0],i=r[1],c=Object(m.useState)(null),o=Object(f.a)(c,2),s=o[0],l=o[1],u=function(e){l(e),"remove-modal"!==e&&i(!a),"remove-modal"===e&&i(!1)};return Object(k.jsxs)(ae.Provider,{value:{showModal:a,toggleModal:u,modalContent:s},children:[Object(k.jsx)(je,{toggleModal:u}),a&&Object(k.jsx)(de,{children:(t=s,Object(k.jsx)(xe,{backgroundColor:"app-open-pink"===t?"pink":"app-open-skyblue"===t?"skyblue":"app-open-yellowgreen"===t&&"yellowgreen",children:Object(k.jsx)(me,{size:"45px",strokeWidth:2})}))})]})},ge=function(e){var t=e.viewTitle,n=e.featureTitle;return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:"You can use one reused modal for several features in a project.",children:Object(k.jsx)("div",{className:re.a.Feature,children:Object(k.jsx)(Oe,{})})})},ve=n(65),ke=n.n(ve),we=function(){var e=Object(m.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(m.useState)("input is empty"),i=Object(f.a)(a,2),c=i[0],o=i[1],s=function(e){var t="."===e.slice(-1);e.length<=8&&Number.isInteger(+e)&&!t?r(e):r(null===n?"":n),function(e){e.length<=8&&e.length>0&&!Number(e.slice(-1))?o("numbers only"):e.length>0&&e.length<8?o("must be eight characters..."):8===e.length&&Number(e.slice(-1))?o("successful"):e.length>8?o("it is done"):o("enter something...")}(e)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("p",{className:ke.a.inputTitle,children:"The input in which only numbers can be entered:"}),Object(k.jsx)("input",{className:ke.a.Input,type:"text",placeholder:"0",value:n,onChange:function(e){s(e.target.value)}}),Object(k.jsx)("div",{className:ke.a.Input__status,error:!0,children:Object(k.jsx)("span",{className:"numbers only"===c?ke.a.Input__error:"successful"===c?ke.a.Input__successful:"it is done"===c&&ke.a.Input__done,children:c})})]})},Te=Object(h.g)((function(e){var t=e.viewTitle,n=e.featureTitle;e.location;return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:"Different settings for using the input tag",children:Object(k.jsx)("div",{className:ke.a.Feature,children:Object(k.jsx)(we,{})})})})),Ne=n(85),ye=n.n(Ne),Ie=Object(h.g)((function(e){var t=e.viewTitle,n=e.featureTitle,r=(e.location,"[write a description of the ".concat(n," here...]"));return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:r,children:Object(k.jsx)("div",{className:ye.a.Feature,children:Object(k.jsx)("p",{className:ye.a.Feature__text,children:"[write your code here]"})})})})),Fe=n(86),Ce=n.n(Fe),Ae=function(e){var t,n=e.viewTitle,r=e.featureTitle,a=0;(t=10,function(e){return a=t+e})(7);var i,c="";(i="google",function(e){return c="https://".concat(e,".").concat(i,".com.ua")})("blog");var o="";var s,l;return(s={name:"Serhii",age:39,job:"Developer"},l=function(){o="Person: ".concat(this.name,", ").concat(this.age,", ").concat(this.job)},function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l.apply(s,t)})(),Object(k.jsx)(V,{viewTitle:n,featureTitle:r,description:"Different ways of using closures in functions.",children:Object(k.jsx)("div",{className:Ce.a.Feature,children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)("span",{className:"increment",children:"Incrementor - ".concat(a)})}),Object(k.jsx)("li",{children:Object(k.jsx)("span",{className:"domains",children:"Domain - ".concat(c)})}),Object(k.jsx)("li",{children:Object(k.jsx)("span",{className:"domains",children:"Bind - ".concat(o)})})]})})})},Se=n(87),Pe=n.n(Se),Le=Object(m.createContext)(),ze=n(49),Be=function(){var e=Object(m.useContext)(Le),t=e.contextValue,n=e.setContextValue;return Object(m.useEffect)((function(){return n(Object(ze.a)())}),[]),Object(k.jsx)("div",{children:"BlockOne sent - ".concat(t&&t.slice(0,-28))})},Ve=function(){var e=Object(m.useContext)(Le).contextValue;return Object(k.jsx)("div",{children:"BlockTwo got - ".concat(e&&e.slice(0,-28))})},We=function(e){var t=e.viewTitle,n=e.featureTitle,r=Object(m.useState)(null),a=Object(f.a)(r,2),i=a[0],c=a[1];return Object(k.jsx)(V,{viewTitle:t,featureTitle:n,description:"An example of using the useContext react hook.",children:Object(k.jsx)("div",{className:Pe.a.Feature,children:Object(k.jsx)(Le.Provider,{value:{contextValue:i,setContextValue:c},children:Object(k.jsxs)("div",{className:Pe.a.Feature__blockWrap,children:[Object(k.jsx)(Be,{}),Object(k.jsx)(Ve,{})]})})})})};t.a=function(e){var t=e.viewTitle;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(h.d,{children:[Object(k.jsx)(h.b,{path:"/layout/styled-components",render:function(e){return Object(k.jsx)(J,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Styled Components"}))}}),Object(k.jsx)(h.b,{path:"/components/dragndrop",render:function(e){return Object(k.jsx)(Q,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Drag and Drop"}))}}),Object(k.jsx)(h.b,{path:"/components/pagination",render:function(e){return Object(k.jsx)(te,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Pagination"}))}}),Object(k.jsx)(h.b,{path:"/components/reused-modal",render:function(e){return Object(k.jsx)(ge,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Reused Modal"}))}}),Object(k.jsx)(h.b,{path:"/components/inputs",render:function(e){return Object(k.jsx)(Te,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Inputs"}))}}),Object(k.jsx)(h.b,{path:"/components/feature",render:function(e){return Object(k.jsx)(Ie,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Feature"}))}}),Object(k.jsx)(h.b,{path:"/functions/closures",render:function(e){return Object(k.jsx)(Ae,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"Closures"}))}}),Object(k.jsx)(h.b,{path:"/hooks/usecontext",render:function(e){return Object(k.jsx)(We,Object(b.a)(Object(b.a)({},e),{},{viewTitle:t,featureTitle:"useContext"}))}})]})})}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1),a=n(9),i=n(2),c=n(55),o=n(23),s=Object(c.a)({navPanelList:{margin:0,padding:20,listStyle:"none",backgroundColor:o.a.BG__Light,border:"1px solid ".concat(o.a.primaryBorderColor),borderRadius:4},navPanelItem:{display:"inline-block"},categoryLink:{display:"block",fontSize:14,"&:not(:last-child)":{marginBottom:7},"&:hover":{color:o.a.activeLinkColor}},activeCategoryLink:{color:o.a.activeLinkColor,cursor:"default","&:hover":{textDecoration:"none"}}}),l=n(7),u=n(0),d=Object(i.g)((function(e){var t=e.viewTitle,n=e.location,i=s(),c=Object(r.useContext)(l.a).views;return Object(u.jsx)("ul",{className:i.navPanelList,children:c.map((function(e){return Object(u.jsx)(r.Fragment,{children:e.title===t&&Object(u.jsx)("li",{className:i.navPanelItem,children:e.links.map((function(e){return Object(u.jsx)(a.b,{exact:!0,to:{pathname:e.href,state:{from:n}},className:i.categoryLink,activeClassName:i.activeCategoryLink,children:e.anchor},e.l_id)}))})},e.v_id)}))})}))},58:function(e,t,n){e.exports={infoPanel:"InfoPanel_infoPanel__2Wnih"}},59:function(e,t,n){e.exports={Article:"Article_Article__3XQP8"}},62:function(e,t,n){e.exports={Feature:"Feature_Feature__3S-bD",list:"Feature_list__2EmSQ",list__item:"Feature_list__item__3pkur",list__itemText:"Feature_list__itemText__2jxDE",list__itemElement:"Feature_list__itemElement__2a4Ct",navPanel:"Feature_navPanel__30zU7",navPanel__button:"Feature_navPanel__button__3LtcB",navPanel__counter:"Feature_navPanel__counter__2Iig5"}},64:function(e,t,n){e.exports={App:"App_App__2GL9d",App__header:"App_App__header__2Ke8Z",App__title:"App_App__title__1Y5nn",App__description:"App_App__description__1U75n",App__content:"App_App__content__2aWgg"}},65:function(e,t,n){e.exports={Feature:"Feature_Feature__1sPnu",inputTitle:"Feature_inputTitle__2aEgf",Input:"Feature_Input__P9Y1_",Input__status:"Feature_Input__status__Xi-pf",Input__successful:"Feature_Input__successful__RnII2",Input__done:"Feature_Input__done__2mQIJ",Input__error:"Feature_Input__error__LjdpE"}},74:function(e,t,n){e.exports={Feature:"Feature_Feature__2mkmX"}},75:function(e,t,n){e.exports={CategorySection:"CategorySection_CategorySection__20uGY"}},76:function(e,t,n){e.exports={Template__content:"Template_Template__content__1Fxw3"}},77:function(e,t,n){e.exports={SourcePanel__wrap:"SourcePanel_SourcePanel__wrap__LFYtd",SourcePanel__link:"SourcePanel_SourcePanel__link__1kBKY",SourcePanel__svgSource:"SourcePanel_SourcePanel__svgSource__36yJT",SourcePanel__linkAnchor:"SourcePanel_SourcePanel__linkAnchor__2eEFz"}},82:function(e,t,n){e.exports={dnd:"Feature_dnd__1z4lz",dropArea:"Feature_dropArea__3lkW6",dropAreaActive:"Feature_dropAreaActive__TZGZr",dropArea__info:"Feature_dropArea__info__3CV_k",dropArea__thumb:"Feature_dropArea__thumb__1D-PN",dropArea__image:"Feature_dropArea__image__174lY",dropArea__conditionsText:"Feature_dropArea__conditionsText__3V9M4",dropArea__input:"Feature_dropArea__input__1i4TF",dropArea__btnCancel:"Feature_dropArea__btnCancel__1vT-7",preloader:"Feature_preloader__aK4vc",preloader__inner:"Feature_preloader__inner__9mbop",preloader__thumb:"Feature_preloader__thumb__2GR7x",preloader__bar:"Feature_preloader__bar__1Kf5v",preloader__barLeft:"Feature_preloader__barLeft__3rPOh",preloader__barRight:"Feature_preloader__barRight__2xYCY",preloader__progress:"Feature_preloader__progress__268OB",left:"Feature_left__XA_M4",reght:"Feature_reght__3-tdb",right:"Feature_right__1yKAK"}},83:function(e){e.exports=JSON.parse('{"users":["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025"]}')},84:function(e,t,n){e.exports={Feature:"Feature_Feature__3kAjX"}},85:function(e,t,n){e.exports={Feature:"Feature_Feature__2aWIV",Feature__text:"Feature_Feature__text__1uKlu"}},86:function(e,t,n){e.exports={Feature:"Feature_Feature__1On8P"}},87:function(e,t,n){e.exports={Feature:"Feature_Feature__15CUN",Feature__blockWrap:"Feature_Feature__blockWrap__kPkka"}}}]);
//# sourceMappingURL=1.deaece47.chunk.js.map