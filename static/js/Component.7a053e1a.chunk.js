(this.webpackJsonpcodebox=this.webpackJsonpcodebox||[]).push([[1],{47:function(e,a,r){e.exports={Article:"Article_Article__3XQP8"}},48:function(e,a,r){"use strict";r.d(a,"a",(function(){return c}));var n=r(52),t=r(15),c=Object(n.a)({viewTitle:{marginBottom:35,fontSize:24,color:t.a.primeryBlackColor},cateogryNavList:{margin:0,padding:20,listStyle:"none",backgroundColor:t.a.BG__Light,border:"1px solid ".concat(t.a.primaryBorderColor),borderRadius:4},categoryLink:{display:"block",fontSize:14,"&:not(:last-child)":{marginBottom:5}},activeCategoryLink:{color:t.a.activelinkColor,cursor:"default","&:hover":{textDecoration:"none"}}})},49:function(e,a,r){"use strict";r.d(a,"a",(function(){return o}));var n=r(47),t=r.n(n),c=r(1),o=function(e){var a=e.children;return Object(c.jsx)("article",{className:t.a.Article,children:a})}},50:function(e,a,r){"use strict";r.d(a,"a",(function(){return o}));var n=r(51),t=r.n(n),c=r(1),o=function(e){var a=e.children;return Object(c.jsx)("section",{className:t.a.CategorySection,children:a})}},51:function(e,a,r){e.exports={CategorySection:"CategorySection_CategorySection__20uGY"}},68:function(e,a,r){e.exports={dnd:"DnD_dnd__1-Lk7",dnd__header:"DnD_dnd__header__gWYlc",dnd__title:"DnD_dnd__title__3mKPH",dnd__p:"DnD_dnd__p__gd07M",dropArea:"DnD_dropArea__3NzWg",dropAreaActive:"DnD_dropAreaActive__eTCcd",dropArea__info:"DnD_dropArea__info__1yA4U",dropArea__thumb:"DnD_dropArea__thumb__2Uy6A",dropArea__image:"DnD_dropArea__image__3_nRC",dropArea__conditionsText:"DnD_dropArea__conditionsText__2ZQnj",dropArea__input:"DnD_dropArea__input__3QxAO",dropArea__btnCancel:"DnD_dropArea__btnCancel__20Nwz",preloader:"DnD_preloader__3tmHM",preloader__inner:"DnD_preloader__inner__2mnqH",preloader__thumb:"DnD_preloader__thumb__637N_",preloader__bar:"DnD_preloader__bar__3yFbn",preloader__barLeft:"DnD_preloader__barLeft__1qjDS",preloader__barRight:"DnD_preloader__barRight__-ZjnR",preloader__progress:"DnD_preloader__progress__1RJq3",left:"DnD_left__3KUEt",reght:"DnD_reght__16D4w",right:"DnD_right__1q-Gc"}},69:function(e,a,r){e.exports={Free:"Free_Free__181yy",Free__p:"Free_Free__p__hBXv_"}},72:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return g}));var n=r(0),t=r(2),c=r(9),o=r(49),i=r(22),_=r(50),d=r(68),s=r.n(d),l=r(1),p=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),r=a[0],t=a[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),d=o[0],p=o[1],u=Object(n.useState)("initial"),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)("Select file to upload"),g=Object(i.a)(h,2),x=g[0],f=g[1],O=Object(n.useState)(null),D=Object(i.a)(O,2),v=D[0],A=D[1],N=function(e){A(setTimeout((function(){t(e),C()}),2e3))},y=function(){m("uploading"),f("Cancel")},C=function(){m("uploaded"),f("Select file to replace")},L=function(){""===r||"initial"===b?(m("initial"),f("Select file to upload")):""===r&&"uploading"!==b||C()};return Object(l.jsx)(_.a,{children:Object(l.jsxs)("div",{className:s.a.dnd,children:[Object(l.jsxs)("div",{className:s.a.dnd__header,children:[Object(l.jsx)("h1",{className:s.a.dnd__title,children:"Company Logo"}),Object(l.jsx)("p",{className:s.a.dnd__p,children:"Logo should be square, max 100px, png or jpeg file format."})]}),Object(l.jsxs)("div",{className:s.a.dropArea,children:[d&&Object(l.jsx)("div",{className:s.a.dropAreaActive}),Object(l.jsxs)("div",{className:s.a.dropArea__info,children:["uploading"!==b&&Object(l.jsx)("div",{className:s.a.dropArea__thumb,children:"uploaded"===b&&Object(l.jsx)("img",{className:s.a.dropArea__image,src:r,alt:"company logo"})}),"uploading"===b&&Object(l.jsxs)("div",{className:s.a.preloader,children:[Object(l.jsx)("div",{className:s.a.preloader__inner,children:Object(l.jsx)("div",{className:s.a.preloader__thumb})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:s.a.preloader__barLeft,children:Object(l.jsx)("div",{className:s.a.preloader__progress})}),Object(l.jsx)("div",{className:s.a.preloader__barRight,children:Object(l.jsx)("div",{className:s.a.preloader__progress})})]})]}),"initial"===b&&Object(l.jsx)("span",{className:s.a.dropArea__conditionsText,children:"Drag & drop here"}),"uploading"===b&&Object(l.jsx)("span",{className:s.a.dropArea__conditionsText,children:"Uploading"}),"uploaded"===b&&Object(l.jsx)("span",{className:s.a.dropArea__conditionsText,children:"Drag & drop here to replace"}),Object(l.jsx)("span",{children:"- or -"})]}),"uploading"!==b&&Object(l.jsx)("input",{className:s.a.dropArea__input,"data-btn-content":x,type:"file",accept:"image/png, image/jpeg",onChange:function(e){p(!1),y();var a=e.currentTarget.files[0],r=new FileReader;r.readAsDataURL(e.currentTarget.files[0]),r.onload=function(){var e=new Image;e.src=r.result,y(),"image/png"===a.type||"image/jpeg"===a.type?e.onload=function(){var a=e.naturalWidth,r=e.naturalHeight;a<=100||r<=100?N(e.src):(alert("\nOops! \n\nThe uploaded image size is (".concat(a," x ").concat(r," px) \nBut it should only be max 100 x 100 px")),L())}:(alert('\nOops! \n\nThe uploaded image type is "'.concat(a.type.split("/")[1],'" \nBut it should only be png or jpeg')),L())}},onDragOver:function(e){return function(e){e.preventDefault(),p(!0)}(e)},onDragLeave:function(e){return function(e){e.preventDefault(),p(!1)}(e)}}),"uploading"===b&&Object(l.jsx)("span",{className:s.a.dropArea__btnCancel,onClick:function(){clearTimeout(v),L()},children:"Cancel"})]})]})})},u=r(69),j=r.n(u),b=function(){return Object(l.jsx)(_.a,{children:Object(l.jsx)("div",{className:j.a.Free,children:Object(l.jsx)("p",{className:j.a.Free__p,children:"Free section"})})})},m=r(48),h=r(7);function g(){var e=Object(m.a)(),a=Object(n.useContext)(h.a).views;return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h1",{className:e.viewTitle,children:"Components"}),Object(l.jsx)(t.d,{children:Object(l.jsx)(t.b,{path:"/components/dnd",component:p})}),Object(l.jsx)(t.d,{children:Object(l.jsx)(t.b,{path:"/components/free",component:b})}),Object(l.jsx)("ul",{className:e.cateogryNavList,children:a.map((function(a){return Object(l.jsx)(n.Fragment,{children:"Components"===a.title&&Object(l.jsx)("li",{className:e.cateogryLinkItem,children:a.links.map((function(a){return Object(l.jsx)(c.b,{exact:!0,to:a.href,className:e.categoryLink,activeClassName:e.activeCategoryLink,children:a.anchor},a.l_id)}))})},a.v_id)}))})]})}}}]);
//# sourceMappingURL=Component.7a053e1a.chunk.js.map