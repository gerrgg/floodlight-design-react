(this["webpackJsonpcustom-modules"]=this["webpackJsonpcustom-modules"]||[]).push([[0],{45:function(e,t,n){},49:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(33),i=n.n(o),l=(n(45),n(6)),a=n(13),j=n(3),u=(n(46),n(49),n.p+"static/media/logo.93f6a9f0.svg"),d=n(34),h=n.n(d),b=function(e){var t=e.show,n=e.setShow;return Object(c.jsx)("button",{id:"menuButton",onClick:function(){return n(!t)},children:Array(2).fill("").map((function(e){return Object(c.jsx)("span",{className:"bar ".concat(t?"show":"")},Math.random(1e3))}))})},O=function(){return Object(c.jsx)(a.b,{id:"logo",to:"/",children:Object(c.jsx)("img",{src:u,alt:"Floodlight Design"})})},x=function(e){var t=e.show,n=e.setShow;return Object(c.jsx)(h.a,{disableInlineStyles:!0,children:Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)(O,{}),Object(c.jsx)(b,{show:t,setShow:n})]})})},f=function(e){var t=e.show?{opacity:"100%",zIndex:1}:{opacity:"0%",zIndex:-1};return Object(c.jsx)("nav",{id:"navigation",style:t})},p=n(20),m=n.n(p),v=n(36),g=n(23),y=n(37),w=n(38),S=n(21),C=n(22),k={root:{margin:"0 auto"}},N=function(e){var t=e.slide,n=e.color;return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("button",{onClick:function(){return t("left")},style:{color:n},children:Object(c.jsx)(S.a,{icon:C.a})}),Object(c.jsx)("button",{onClick:function(){return t("right")},style:{color:n},children:Object(c.jsx)(S.a,{icon:C.b})})]})},T=function(e){var t=e.children,n=e.color,s=window.innerWidth>900?900:window.innerWidth,o=Object(r.useState)(0),i=Object(l.a)(o,2),a=i[0],j=i[1],u=Object(r.useState)(0),d=Object(l.a)(u,2),h=d[0],b=d[1],O=Object(r.useRef)(null),x=Object(w.useSwipeable)({onSwiped:function(e){console.log(e),f("left"===e.dir.toLowerCase()?"right":"left")},trackTouch:!0,trackMouse:!0});Object(r.useEffect)((function(){setTimeout((function(){var e=0;if(O){var t,n=O.current.offsetParent.children,c=Object(y.a)(n);try{for(c.s();!(t=c.n()).done;){var r=t.value;"item"===r.className&&(e+=r.clientWidth)}}catch(s){c.e(s)}finally{c.f()}}b(e)}),500)}),[b]);var f=function(e){Math.abs(a-s)>h?j(0):j("left"===e?a+s>0?-(h-s):a+s:a-s)};return Object(c.jsxs)("div",Object(g.a)(Object(g.a)({className:"slider",style:k.root},x),{},{children:[Object(c.jsx)(N,{slide:f,color:n}),t.map((function(e,t){return Object(c.jsx)("div",{ref:O,className:"item",style:{transform:"translateX(".concat(a,"px)")},children:e},Math.random(1e3))}))]}))},I=function(e){var t=e.children,n=e.color,s=e.setColor,o=Object(r.useState)(!1),i=Object(l.a)(o,2),a=i[0],j=i[1],u={button:{border:"1px solid #fff",padding:".5rem 1rem",color:"black"===n?"white":n,fontWeight:900}};return Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsxs)("button",{className:"button",onClick:function(){return j(!a)},style:u.button,children:["Click to ",a?"close":"open","!"]}),Object(c.jsx)("div",{class:"inner",children:Object(c.jsx)("ul",{class:"".concat(a?"show":""," ").concat(n),style:{maxHeight:a?"500px":0,backgroundColor:n},children:t.map((function(e){return Object(c.jsx)("li",{onClick:function(e){var t=e.target;return s(t.innerText.toLowerCase())},children:e},e)}))})})]})},F=function(e){var t=e.children,n=e.color;return Object(c.jsx)("span",{style:{color:n,fontWeight:"900"},children:t})},E=function(e){var t=e.setFilter,n=e.filter;return Object(c.jsx)("button",{className:"button",onClick:function(){return t("")},style:{fontSize:"2rem",position:"absolute",right:5,top:13,opacity:""===n?.1:1},children:"\xd7"})},W=function(e){var t=e.item,n=e.color,r=e.setFilter,s=e.show;return Object(c.jsx)("li",{className:"item",style:{backgroundColor:n},onClick:function(e){var t=e.target;!1===s&&r(t.innerText)},children:!1===s?t.name:Object(c.jsx)(M,{item:t})})},M=function(e){var t=e.item;return Object(c.jsx)("div",{class:"details",children:Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:Object.keys(t).map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"string"===typeof t[e]?e.split("_").join(" ").replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()}))+":":null}),Object(c.jsx)("td",{children:"string"===typeof t[e]?t[e]:null})]})}))})})})},A=function(e){var t=e.data,n=e.color,s=Object(r.useState)(""),o=Object(l.a)(s,2),i=o[0],a=o[1],j=""===i?t:t.filter((function(e){return e.name.includes(i)}));return Object(c.jsxs)("div",{className:"filter",style:{maxWidth:400},children:[Object(c.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},placeholder:"Who is your favorite starwars character?",value:i}),Object(c.jsx)(E,{setFilter:a,filter:i}),Object(c.jsx)("ul",{children:j.length>0?j.map((function(e,t){return Object(c.jsx)(W,{item:e,color:n,setFilter:a,show:1===j.length},t)})):Object(c.jsx)("li",{className:"item no-results",children:"No results"})})]})},D=n(39),L=n.n(D),P={root:{textAlign:"center",fontFamily:"Montserrat, sans-serif"},section:{height:"".concat(500,"px"),display:"flex",justifyContent:"center",flexDirection:"column"},header:{textTransform:"uppercase",textAlign:"center",letterSpacing:"10px",lineHeight:"50px"},subheader:{letterSpacing:"5px",lineHeight:"25px"},description:{margin:"1rem"},component:{height:"".concat(700,"px"),marginTop:250}},B=function(){return Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)("div",{style:P.section,children:Object(c.jsxs)("h2",{style:P.header,children:["I'M A",Object(c.jsx)("br",{}),"FRONTEND ",Object(c.jsx)("br",{}),Object(c.jsx)(F,{color:"#71f971",children:"ENGINEER"})," ",Object(c.jsx)("br",{})]})}),Object(c.jsx)("div",{style:P.section,children:Object(c.jsxs)("h4",{style:P.subheader,children:["I BUILD ",Object(c.jsx)("br",{})," COMPONENTS WITH",Object(c.jsx)("br",{})," ",Object(c.jsx)(F,{color:"#0d9ddb",children:"REACT / SCSS"})]})})]})},R=function(){return Object(c.jsxs)("div",{id:"slider-section",style:P.component,children:[Object(c.jsx)(F,{color:"rgb(238, 65, 195)",children:"Click or swipe"}),Object(c.jsx)("h2",{style:P.header,children:"Sliders"}),Object(c.jsx)(z,{qoute:"Have no fear of perfection - you'll never reach it.",author:"Salvador Dali"}),Object(c.jsx)(T,{color:"rgb(238, 65, 195)",children:Array(10).fill("").map((function(e,t){return Object(c.jsx)("img",{src:"https://place-hold.it/150x100/fff/?text=".concat(t),alt:"placeholder img"},Math.random(1e3))}))})]})},q=function(){var e=Object(r.useState)("#ee4141"),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{id:"slider-section",style:{height:500,marginTop:250},children:[Object(c.jsx)(F,{color:n,children:"Pick and Choose"}),Object(c.jsx)("h2",{style:P.header,children:"Dropdowns"}),Object(c.jsx)(z,{qoute:"I have not failed. I've just found 10,000 ways that won't work.",author:"Thomas A. Edison"}),Object(c.jsx)(I,{color:n,setColor:s,children:["Black","Red","Green","Blue","Violet","Pink","Yellow","Orange"]})]})},H=function(){var e="#ffc0e9",t=Object(r.useState)([]),n=Object(l.a)(t,2),s=n[0],o=n[1],i=Object(r.useState)(""),a=Object(l.a)(i,1)[0],j=function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===a?"http://swapi.dev/api/people/":"http://swapi.dev/api/people/?search=".concat(a),e.next=3,L.a.get(t);case 3:(n=e.sent).data&&o(n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(s),Object(r.useEffect)((function(){j()}),[]),Object(c.jsxs)("div",{id:"filter-section",style:{height:500,margin:"250px 0"},children:[Object(c.jsx)(F,{color:e,children:"Search and Click"}),Object(c.jsx)("h2",{style:P.header,children:"FILTERING LISTS"}),Object(c.jsx)(z,{qoute:"Success is stumbling from failure to failure with no loss of enthusiasm.",author:"Winston S. Churchill"}),Object(c.jsx)(A,{needle:a,data:s,color:"#ffc0e9"}),Object(c.jsxs)("p",{children:["Thank you"," ",Object(c.jsx)(F,{color:e,children:Object(c.jsx)("a",{href:"https://swapi.dev/documentation#intro",rel:"nofollow",children:"Star Wars API"})})]})]})},z=function(e){var t=e.qoute,n=e.author;return Object(c.jsxs)("p",{style:P.description,children:[Object(c.jsx)("span",{className:"quote",children:'"'.concat(t,'" - ')}),Object(c.jsx)("b",{className:"author",children:n})]})},G=function(){return Object(c.jsx)("div",{className:"content home",style:P.root,children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(B,{}),Object(c.jsx)(R,{}),Object(c.jsx)(q,{}),Object(c.jsx)(H,{})]})})},J=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)(a.a,{children:[Object(c.jsx)(x,{show:n,setShow:s}),Object(c.jsx)(f,{show:n,setShow:s}),Object(c.jsx)(j.c,{children:Object(c.jsx)(j.a,{path:"/",children:Object(c.jsx)(G,{})})})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),U()}},[[82,1,2]]]);
//# sourceMappingURL=main.c6553b6f.chunk.js.map