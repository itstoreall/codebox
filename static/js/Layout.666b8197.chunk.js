(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[6],{48:function(e,n,t){"use strict";var a=t(0),r=t(9),c=t(51),o=t(15),i=Object(c.a)({navPanel:{margin:0,padding:20,listStyle:"none",backgroundColor:o.a.BG__Light,border:"1px solid ".concat(o.a.primaryBorderColor),borderRadius:4},categoryLink:{display:"block",fontSize:14,"&:not(:last-child)":{marginBottom:5}},activeCategoryLink:{color:o.a.activelinkColor,cursor:"default","&:hover":{textDecoration:"none"}}}),l=t(7),s=t(1);n.a=function(e){var n=e.viewTitle,t=i(),c=Object(a.useContext)(l.a).views;return Object(s.jsx)("ul",{className:t.navPanel,children:c.map((function(e){return Object(s.jsx)(a.Fragment,{children:e.title===n&&Object(s.jsx)("li",{className:t.cateogryLinkItem,children:e.links.map((function(e){return Object(s.jsx)(r.b,{exact:!0,to:e.href,className:t.categoryLink,activeClassName:t.activeCategoryLink,children:e.anchor},e.l_id)}))})},e.v_id)}))})}},49:function(e,n,t){e.exports={Article:"Article_Article__3XQP8"}},50:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(51),r=t(15),c=Object(a.a)({viewTitle:{marginBottom:35,fontSize:24,color:r.a.primeryBlackColor}})},52:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(49),r=t.n(a),c=t(1),o=function(e){var n=e.children;return Object(c.jsx)("article",{className:r.a.Article,children:n})}},53:function(e,n,t){e.exports={CategorySection:"CategorySection_CategorySection__20uGY"}},54:function(e,n,t){e.exports={SourcePanel__wrap:"SourcePanel_SourcePanel__wrap__LFYtd",SourcePanel__link:"SourcePanel_SourcePanel__link__1kBKY",SourcePanel__svgSource:"SourcePanel_SourcePanel__svgSource__36yJT",SourcePanel__linkAnchor:"SourcePanel_SourcePanel__linkAnchor__2eEFz"}},55:function(e,n,t){e.exports={dnd:"DnD_dnd__1-Lk7",dnd__header:"DnD_dnd__header__gWYlc",dnd__title:"DnD_dnd__title__3mKPH",dnd__p:"DnD_dnd__p__gd07M",dropArea:"DnD_dropArea__3NzWg",dropAreaActive:"DnD_dropAreaActive__eTCcd",dropArea__info:"DnD_dropArea__info__1yA4U",dropArea__thumb:"DnD_dropArea__thumb__2Uy6A",dropArea__image:"DnD_dropArea__image__3_nRC",dropArea__conditionsText:"DnD_dropArea__conditionsText__2ZQnj",dropArea__input:"DnD_dropArea__input__3QxAO",dropArea__btnCancel:"DnD_dropArea__btnCancel__20Nwz",preloader:"DnD_preloader__3tmHM",preloader__inner:"DnD_preloader__inner__2mnqH",preloader__thumb:"DnD_preloader__thumb__637N_",preloader__bar:"DnD_preloader__bar__3yFbn",preloader__barLeft:"DnD_preloader__barLeft__1qjDS",preloader__barRight:"DnD_preloader__barRight__-ZjnR",preloader__progress:"DnD_preloader__progress__1RJq3",left:"DnD_left__3KUEt",reght:"DnD_reght__16D4w",right:"DnD_right__1q-Gc"}},56:function(e,n,t){e.exports={Free:"Free_Free__181yy",Free__p:"Free_Free__p__hBXv_"}},57:function(e,n,t){"use strict";t(48);var a,r,c,o,i,l=t(2),s=t(21),d=t(0),_=t(53),p=t.n(_),u=t(1),j=function(e){var n=e.children;return Object(u.jsx)("section",{className:p.a.CategorySection,children:n})},b=t(54),h=t.n(b),x=t(7),g=t(16),m=function(e){var n=e.viewTitle,t=e.featureTitle,a=Object(d.useContext)(x.a).views;return console.log("viewTitle",n,"-",t),Object(u.jsx)("div",{className:h.a.SourcePanel__wrap,children:a.map((function(e){var a=e.title,r=e.links;return a===n&&r.map((function(e){return e.anchor===t&&Object(u.jsxs)("a",{className:h.a.SourcePanel__link,href:e.source,target:"_blanck",children:[Object(u.jsx)("svg",{className:h.a.SourcePanel__svgSource,width:"25",height:"25",children:Object(u.jsx)("use",{href:g.a+"#github"})}),Object(u.jsx)("span",{className:h.a.SourcePanel__linkAnchor,children:"".concat(e.anchor," source")})]})}))}))})},O=t(58),f=t(59),v=f.a.div(a||(a=Object(O.a)(["\n  margin-bottom: 20px;\n  width: 100%;\n  height: 400px;\n  background-color: pink;\n"]))),D=f.a.div(r||(r=Object(O.a)(["\n  padding: 20px;\n  width: 100%;\n  height: 100px;\n  font-size: 20px;\n  color: white;\n  background-color: skyblue;\n"]))),A=f.a.div(c||(c=Object(O.a)(["\n  padding: 20px;\n  width: 100%;\n  height: 100px;\n  font-size: 20px;\n  color: white;\n  background-color: palevioletred;\n"]))),N=f.a.div(o||(o=Object(O.a)(["\n  padding: 20px;\n  width: 100%;\n  height: 100px;\n  font-size: 20px;\n  color: white;\n  background-color: grey;\n"]))),S=f.a.button(i||(i=Object(O.a)(["\n  padding: 0px;\n  width: 120px;\n  height: 50px;\n  font-size: 16px;\n  color: white;\n  background-color: grey;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n\n  &:hover {\n    background-color: black;\n  }\n"]))),y=function(){var e=Object(d.useState)(0),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(d.useState)(0),c=Object(s.a)(r,2),o=c[0],i=c[1],l=function(e,n){a(e),i(n)};return Object(u.jsxs)(j,{children:[Object(u.jsxs)(v,{children:[Object(u.jsx)(D,{children:"Basic"}),t?t&&o?Object(u.jsx)(N,{children:"Vip"}):Object(u.jsx)(A,{children:"Referal"}):null]}),Object(u.jsx)(S,{onClick:function(){return l(1,0)},children:"Referal"}),Object(u.jsx)(S,{onClick:function(){return l(1,1)},children:"Vip"}),Object(u.jsx)(m,{viewTitle:"Layout",featureTitle:"Styled Components"})]})},k=t(55),w=t.n(k),C=function(){var e=Object(d.useState)(""),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(d.useState)(!1),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(d.useState)("initial"),_=Object(s.a)(l,2),p=_[0],b=_[1],h=Object(d.useState)("Select file to upload"),x=Object(s.a)(h,2),g=x[0],m=x[1],O=Object(d.useState)(null),f=Object(s.a)(O,2),v=f[0],D=f[1],A=function(e){D(setTimeout((function(){a(e),S()}),2e3))},N=function(){b("uploading"),m("Cancel")},S=function(){b("uploaded"),m("Select file to replace")},y=function(){""===t||"initial"===p?(b("initial"),m("Select file to upload")):""===t&&"uploading"!==p||S()};return Object(u.jsx)(j,{children:Object(u.jsxs)("div",{className:w.a.dnd,children:[Object(u.jsxs)("div",{className:w.a.dnd__header,children:[Object(u.jsx)("h1",{className:w.a.dnd__title,children:"Company Logo"}),Object(u.jsx)("p",{className:w.a.dnd__p,children:"Logo should be square, max 100px, png or jpeg file format."})]}),Object(u.jsxs)("div",{className:w.a.dropArea,children:[o&&Object(u.jsx)("div",{className:w.a.dropAreaActive}),Object(u.jsxs)("div",{className:w.a.dropArea__info,children:["uploading"!==p&&Object(u.jsx)("div",{className:w.a.dropArea__thumb,children:"uploaded"===p&&Object(u.jsx)("img",{className:w.a.dropArea__image,src:t,alt:"company logo"})}),"uploading"===p&&Object(u.jsxs)("div",{className:w.a.preloader,children:[Object(u.jsx)("div",{className:w.a.preloader__inner,children:Object(u.jsx)("div",{className:w.a.preloader__thumb})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:w.a.preloader__barLeft,children:Object(u.jsx)("div",{className:w.a.preloader__progress})}),Object(u.jsx)("div",{className:w.a.preloader__barRight,children:Object(u.jsx)("div",{className:w.a.preloader__progress})})]})]}),"initial"===p&&Object(u.jsx)("span",{className:w.a.dropArea__conditionsText,children:"Drag & drop here"}),"uploading"===p&&Object(u.jsx)("span",{className:w.a.dropArea__conditionsText,children:"Uploading"}),"uploaded"===p&&Object(u.jsx)("span",{className:w.a.dropArea__conditionsText,children:"Drag & drop here to replace"}),Object(u.jsx)("span",{children:"- or -"})]}),"uploading"!==p&&Object(u.jsx)("input",{className:w.a.dropArea__input,"data-btn-content":g,type:"file",accept:"image/png, image/jpeg",onChange:function(e){i(!1),N();var n=e.currentTarget.files[0],t=new FileReader;t.readAsDataURL(e.currentTarget.files[0]),t.onload=function(){var e=new Image;e.src=t.result,N(),"image/png"===n.type||"image/jpeg"===n.type?e.onload=function(){var n=e.naturalWidth,t=e.naturalHeight;n<=100||t<=100?A(e.src):(alert("\nOops! \n\nThe uploaded image size is (".concat(n," x ").concat(t," px) \nBut it should only be max 100 x 100 px")),y())}:(alert('\nOops! \n\nThe uploaded image type is "'.concat(n.type.split("/")[1],'" \nBut it should only be png or jpeg')),y())}},onDragOver:function(e){return function(e){e.preventDefault(),i(!0)}(e)},onDragLeave:function(e){return function(e){e.preventDefault(),i(!1)}(e)}}),"uploading"===p&&Object(u.jsx)("span",{className:w.a.dropArea__btnCancel,onClick:function(){clearTimeout(v),y()},children:"Cancel"})]})]})})},T=t(56),P=t.n(T),L=function(){return Object(u.jsx)(j,{children:Object(u.jsx)("div",{className:P.a.Free,children:Object(u.jsx)("p",{className:P.a.Free__p,children:"Free section"})})})},F=function(){var e,n=0;(e=10,function(t){return n=e+t})(7);var t,a="";(t="google",function(e){return a="https://".concat(e,".").concat(t,".com.ua")})("blog");var r="";var c,o;return(c={name:"Serhii",age:39,job:"Developer"},o=function(){r="Person: ".concat(this.name,", ").concat(this.age,", ").concat(this.job)},function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];o.apply(c,n)})(),Object(u.jsx)(j,{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("span",{className:"increment",children:"Incrementor - ".concat(n)})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{className:"domains",children:"Domain - ".concat(a)})}),Object(u.jsx)("li",{children:Object(u.jsx)("span",{className:"domains",children:"Bind - ".concat(r)})})]})})},B=function(){return Object(u.jsx)(j,{children:Object(u.jsx)("p",{children:"UseState - component"})})};n.a=function(e){e.viewTitle;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/layout/styled-components",component:y}),Object(u.jsx)(l.b,{path:"/components/dnd",component:C}),Object(u.jsx)(l.b,{path:"/components/free",component:L}),Object(u.jsx)(l.b,{path:"/functions/closures",component:F}),Object(u.jsx)(l.b,{path:"/hooks/usestate",component:B})]})})}},74:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var a=t(57),r=t(48),c=t(52),o=t(50),i=t(1);function l(){var e="Layout",n=Object(o.a)();return Object(i.jsxs)(c.a,{children:[Object(i.jsx)("h1",{className:n.viewTitle,children:e}),Object(i.jsx)(a.a,{viewTitle:e}),Object(i.jsx)(r.a,{viewTitle:e})]})}}}]);
//# sourceMappingURL=Layout.666b8197.chunk.js.map