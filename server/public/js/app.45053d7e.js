(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({announc:"announc",news:"news"}[t]||t)+"."+{announc:"a1badbdf",news:"792f3ab9"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={announc:1,news:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({announc:"announc",news:"news"}[t]||t)+"."+{announc:"f3be2e4c",news:"c9af48d3"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"010f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newsComponent"},[a("b-col",[a("b-card",{staticClass:"mb-3 ",staticStyle:{"max-width":"20rem"},attrs:{title:t.title,"img-src":t.urlToImage,"img-alt":"Image","img-top":"",tag:"article"},on:{click:t.showNews}},[a("b-card-text",[t._v(" "+t._s(t.text)+" ")])],1)],1),t.isShowed?a("div",{staticClass:"newsBg",on:{click:function(e){return e.target!==e.currentTarget?null:t.showNews.apply(null,arguments)}}},[a("div",{staticClass:"showedNews",style:t.pageY},[a("span",{staticClass:"d-flex justify-content-end pb-3"},[a("span",{staticClass:"closeIco",on:{click:t.showNews}},[a("i",{staticClass:"fas fa-times"})])]),a("img",{attrs:{src:t.urlToImage,alt:""}}),a("h2",{staticClass:"mt-3 ml-5 mr-5"},[t._v(" "+t._s(t.title))]),a("p",{staticClass:"mt-3 ml-5 mr-5"},[t._v(" "+t._s(t.content)+" ")]),a("h6",[t._v(" Więcej "),a("a",{attrs:{href:t.link,target:"_blank"}},[t._v(" tutaj ")])])])]):t._e()],1)},s=[],r={name:"newsComponent",props:["title","urlToImage","text","link","content"],data:function(){return{isShowed:!1,pageY:""}},methods:{showNews:function(t){this.pageY="top: "+(t.pageY-t.y)+"px",this.isShowed=!this.isShowed}}},i=r,o=(a("c0e2"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"2e8063a0",null);e["a"]=c.exports},"034f":function(t,e,a){"use strict";a("85ec")},"2b96":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"announComponent"},[a("b-col",[a("b-card",{staticClass:"bcard mb-3 ",staticStyle:{"max-width":"20rem"},attrs:{title:t.title,"img-src":t.img,"img-alt":"Image","img-top":"",tag:"article"},on:{dblclick:t.accept}},[a("b-card-text",{staticClass:"bcardText"},[t._v(" "+t._s(t.content)+" ")])],1)],1)],1)},s=[],r={name:"announComponent",props:["img","title","content","user","date"],methods:{clicked:function(t){console.log(t)},accept:function(){this.$emit("accept")}}},i=r,o=(a("a85c"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"5511019e",null);e["a"]=c.exports},3059:function(t,e,a){},"40ef":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var n=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(s["a"]);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("Navbar")],1),a("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{to:"/"}},[n("img",{staticClass:"mr-2",attrs:{src:a("cf05"),alt:"",height:"50"}}),t._v(" News Page ")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto mr-5"},[n("b-nav-item",{attrs:{to:"/"}},[t._v(" Home ")]),n("b-nav-item",{attrs:{to:"/news"}},[t._v(" Wiadomości ")]),n("b-nav-item",{attrs:{to:"/announcements"}},[t._v(" Ogłoszenia ")])],1),n("b-navbar-nav",{attrs:{right:""}},[n("b-nav-form",{staticClass:"mr-3 justify-content-center"},[n("b-form-input",{staticClass:"mr-sm-2 ",attrs:{size:"sm",placeholder:"Szukaj"}}),n("b-button",{staticClass:"my-2 my-sm-0 mr-3",attrs:{size:"sm",type:"submit"}},[n("i",{staticClass:"fas fa-search"})])],1),n("b-nav-item-dropdown",{staticClass:"mr-3",attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("em",[t._v(" więcej ")])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Lista użytkowników ")]),n("b-dropdown-item",{on:{click:t.showLogin}},[t._v(" Zaloguj się ")]),n("b-dropdown-item",{on:{click:t.showRegister}},[t._v(" Zarejestruj się ")])],1)],1)],1)],1),t._m(0),t.isLoginShowed?n("Login",{on:{close:t.showLogin,toggle:t.toggleShowed}}):t._e(),t.isRegisterShowed?n("Register",{on:{close:t.showRegister,toggle:t.toggleShowed}}):t._e()],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hwrap"},[a("div",{staticClass:"hmove"},[a("div",{staticClass:"hitem"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"hwtext"},[t._v(" Dziwny czarny kształt na ciężarówce. Nagranie z zamkniętego ")])])]),a("div",{staticClass:"hitem"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"hwtext"},[t._v(" Formuła 1. Lewis Hamilton wygrał Grand Prix Rosji - Interia ")])])]),a("div",{staticClass:"hitem"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"hwtext"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque quibusdam, ")])])]),a("div",{staticClass:"hitem"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"hwtext"},[t._v(" Wybory w Niemczech. Wszyscy zobaczyli na kogo zagłosował Armin ")])])]),a("div",{staticClass:"hitem"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"hwtext"},[t._v(' Czterej pancerni i pies. Historia prawdziwej załogi czołgu "Rudy" ')])])])])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"LoginComponent"},[a("div",{staticClass:"loginModuleBg",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal.apply(null,arguments)}}},[a("div",{staticClass:"loginModule"},[a("span",{staticClass:"closeBox"},[a("span",{staticClass:"closeIco",on:{click:t.closeModal}},[a("i",{staticClass:"fas fa-times"})])]),a("b-card",{staticClass:"loginForm",attrs:{header:"Zaloguj się!","header-bg-variant":"primary","header-text-variant":"white"}},[a("b-card-text",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{description:"Podaj swoją nazwę użytkownika.",label:"Nazwa użytkownika"}},[a("b-form-input",{attrs:{required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("b-form-group",{attrs:{description:"Podaj swoje hasło.",label:"Hasło"}},[a("b-form-input",{attrs:{type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-form-group",[a("h6",{staticClass:"h6Text"},[t._v("Nie masz konta? Zarejestruj się "),a("span",{on:{click:t.openRegister}},[t._v("tutaj.")])])]),a("b-form-group",{staticClass:"text-center"},[a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:t.acceptableSubmittion}},[t._v("Zaloguj się")])],1)],1)],1)],1)],1)])])},u=[],d=a("5530"),m=a("1da1"),p=a("d4ec"),f=a("bee2"),h=(a("96cf"),a("d3b7"),a("d81d"),a("bc3a")),g=a.n(h),b="api/users/",v=function(){function t(){Object(p["a"])(this,t)}return Object(f["a"])(t,null,[{key:"getUsers",value:function(){return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e,a){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get(b);case 3:n=t.sent,s=n.data,e(s.map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{createdAt:new Date(announcement.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),a(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}())}},{key:"getUser",value:function(t,e){return g.a.post("".concat(b,"login"),{username:t,password:e})}},{key:"insertUser",value:function(t,e,a){return g.a.post("".concat(b,"register"),{username:t,password:e,email:a})}},{key:"updateUser",value:function(t){return g.a.put("".concat(b).concat(t))}},{key:"deleteAnnoucement",value:function(t){return g.a.delete("".concat(b).concat(t))}}]),t}(),w=v,C={name:"LoginComponent",data:function(){return{username:"",password:""}},methods:{onSubmit:function(t){t.preventDefault(),w.getUser(this.username,this.password)},closeModal:function(){this.$emit("close")},openRegister:function(){this.$emit("toggle")}},computed:{acceptableSubmittion:function(){return!(this.username.length>2&&this.password.length>3)}}},x=C,y=(a("e70f"),a("2877")),_=Object(y["a"])(x,l,u,!1,null,null,null),k=_.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"RegisterComponent"},[a("div",{staticClass:"registerModuleBg",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal.apply(null,arguments)}}},[a("div",{staticClass:"registerModule"},[a("span",{staticClass:"closeBox"},[a("span",{staticClass:"closeIco",on:{click:t.closeModal}},[a("i",{staticClass:"fas fa-times"})])]),a("b-card",{staticClass:"registerForm",attrs:{header:"Zarejestruj się!","header-bg-variant":"primary","header-text-variant":"white"}},[a("b-card-text",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{description:"Podaj swoją nazwę użytkownika.",label:"Nazwa użytkownika"}},[a("b-form-input",{attrs:{required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("b-form-group",{attrs:{description:"Podaj swój adres e-mail.",label:"Adres e-mail"}},[a("b-form-input",{attrs:{type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("b-form-group",{attrs:{description:"Podaj swoje hasło.",label:"Hasło"}},[a("b-form-input",{attrs:{type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-form-group",[a("h6",{staticClass:"h6Text"},[t._v("Masz już konto? Zaloguj się "),a("span",{on:{click:t.openLogin}},[t._v("tutaj.")])])]),a("b-form-group",{staticClass:"text-center"},[a("b-button",{attrs:{type:"submit",variant:"outline-primary",disabled:t.acceptableSubmittion}},[t._v("Zarejestruj się")])],1)],1)],1)],1)],1)])])},S=[],O={name:"RegisterComponent",data:function(){return{username:"",password:"",confirmPassword:"",email:""}},methods:{onSubmit:function(t){t.preventDefault(),w.insertUser(this.username,this.password,this.email),alert("udało ci się zarejestrować! Witaj  ".concat(this.username,". Zaloguj się aby korzystać z wszytskich funkcjonalności")),this.$emit("toggle")},closeModal:function(){this.$emit("close")},openLogin:function(){this.$emit("toggle")}},computed:{acceptableSubmittion:function(){return!(this.username.length>2&&this.password.length>3)}}},A=O,z=(a("5821"),Object(y["a"])(A,j,S,!1,null,null,null)),N=z.exports,E={name:"Slider",components:{Login:k,Register:N},data:function(){return{isLoginShowed:!1,isRegisterShowed:!1}},methods:{showLogin:function(){this.isLoginShowed=!this.isLoginShowed,this.isRegisterShowed=!1},showRegister:function(){this.isRegisterShowed=!this.isRegisterShowed,this.isLoginShowed=!1},toggleShowed:function(){this.isRegisterShowed=!this.isRegisterShowed,this.isLoginShowed=!this.isLoginShowed}}},R=E,T=(a("c56b"),Object(y["a"])(R,o,c,!1,null,null,null)),L=T.exports,I={components:{Navbar:L}},P=I,D=(a("034f"),Object(y["a"])(P,r,i,!1,null,null,null)),$=D.exports,M=(a("3ca3"),a("ddb0"),a("8c4f")),Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("b-container",[a("b-row",{staticClass:"d-flex justify-content-center"},[a("b-col",{staticClass:"slides "},[a("div",{staticClass:"d-block ml-3"},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel",interval:1e4,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.sliderData,(function(t){return a("sliderComponent",{key:t.id,attrs:{title:t.title,urlToImage:t.urlToImage,text:t.description,link:t.url}})})),1)],1)])],1),a("div",{staticClass:"news"},[a("b-row",[a("b-col",[a("div",{staticClass:"sub-title"},[a("h1",[t._v(" Wiadomości ")])])])],1),a("b-row",{staticClass:"justify-content-center"},t._l(t.newsData,(function(t){return a("newsComponent",{key:t.id,attrs:{title:t.title,urlToImage:t.urlToImage,text:t.description,link:t.url,content:t.content}})})),1)],1),a("div",{staticClass:"announc"},[a("b-row",[a("b-col",[a("div",{staticClass:"sub-title"},[a("h1",[t._v(" Ogłoszenia ")])])])],1),a("b-row",{staticClass:"justify-content-center"},t._l(t.announcements,(function(t){return a("announComponent",{key:t._id,attrs:{title:t.title,img:t.img,content:t.text}})})),1)],1)],1),a("FooterComponent")],1)},U=[],q=a("2909"),B=(a("a434"),a("010f")),H=a("2b96"),W=a("e741"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("a",{attrs:{href:t.link,title:"przejdź do artykułu",target:"_blank"}},[a("b-carousel-slide",{attrs:{caption:t.title,text:t.text,"img-src":t.urlToImage}})],1)])},Y=[],J={props:["title","urlToImage","text","link"]},K=J,G=Object(y["a"])(K,F,Y,!1,null,"e9ed3364",null),Q=G.exports,V=a("67e9"),X={name:"Home",components:{sliderComponent:Q,newsComponent:B["a"],announComponent:H["a"],FooterComponent:W["a"]},data:function(){return{slide:0,sliding:null,data:[],sliderData:[],newsData:[],announcements:[],announcementsData:[],error:""}},created:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V["a"].getAnnouncements();case 3:t.announcements=e.sent,t.announcements.splice(6,t.announcements.length),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0.message,error&&console.log(t.error);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},mounted:function(){this.fillNews()},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1},fillNews:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.json");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.data=Object(q["a"])(n[0].articles),t.sliderData=Object(q["a"])(n[0].articles),t.newsData=Object(q["a"])(n[0].articles),t.sliderData.splice(5,t.sliderData.length),t.newsData.splice(0,5),t.newsData.splice(6,t.newsData.length);case 12:case"end":return e.stop()}}),e)})))()}}},tt=X,et=(a("cccb"),Object(y["a"])(tt,Z,U,!1,null,null,null)),at=et.exports;n["default"].use(M["a"]);var nt=[{path:"/",name:"Home",component:at},{path:"/news",name:"News",component:function(){return a.e("news").then(a.bind(null,"a2f9"))}},{path:"/announcements",name:"Announc",component:function(){return a.e("announc").then(a.bind(null,"6431"))}}],st=new M["a"]({mode:"history",base:"/",routes:nt}),rt=st,it=a("2f62");n["default"].use(it["a"]);var ot=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("15f5"),a("7051");n["default"].config.productionTip=!1,new n["default"]({router:rt,store:ot,render:function(t){return t($)}}).$mount("#app")},5821:function(t,e,a){"use strict";a("cd17")},"5cd5":function(t,e,a){},"5ced":function(t,e,a){},"67e9":function(t,e,a){"use strict";var n=a("5530"),s=a("1da1"),r=a("d4ec"),i=a("bee2"),o=(a("96cf"),a("d3b7"),a("d81d"),a("bc3a")),c=a.n(o),l="api/announcements/",u=function(){function t(){Object(r["a"])(this,t)}return Object(i["a"])(t,null,[{key:"getNotAcceptedAnnouncements",value:function(){return new Promise(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(l,"notaccepted/null"));case 3:s=t.sent,r=s.data,e(r.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{createdAt:new Date(t.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),a(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}())}},{key:"getAnnouncementsFromCategory",value:function(t){return console.log("jestem tutaj ezzz"),new Promise(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a,s){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("".concat(l,"accepted/").concat(t));case 3:r=e.sent,i=r.data,console.log("getAnnouncementsFromCategory"),a(i.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{createdAt:new Date(t.createdAt)})}))),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),s(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}())}},{key:"getAnnouncements",value:function(){return new Promise(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,a){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(l,"accepted/all"));case 3:s=t.sent,r=s.data,e(r.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{createdAt:new Date(t.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),a(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}())}},{key:"insertAnnouncement",value:function(t,e,a,n){return c.a.post(l,{img:t,title:e,text:a,category:n})}},{key:"updateAnnouncement",value:function(t){return c.a.put("".concat(l).concat(t))}},{key:"deleteAnnoucement",value:function(t){return c.a.delete("".concat(l).concat(t))}}]),t}();e["a"]=u},7494:function(t,e,a){"use strict";a("ceb6a")},"85ec":function(t,e,a){},a226:function(t,e,a){},a85c:function(t,e,a){"use strict";a("5cd5")},c0e2:function(t,e,a){"use strict";a("40ef")},c56b:function(t,e,a){"use strict";a("a226")},cccb:function(t,e,a){"use strict";a("5ced")},cd17:function(t,e,a){},ceb6a:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e70f:function(t,e,a){"use strict";a("3059")},e741:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footerComponent"},[a("footer",{staticClass:"text-center text-lg-start bg-light text-muted mt-5"},[a("section",{staticClass:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom"},[a("div",{staticClass:"ml-5 d-none d-lg-block"},[a("span",[t._v("Get connected with us on social networks:")])]),a("div",[a("a",{staticClass:"ml-4 text-reset",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{staticClass:"ml-4 text-reset",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"ml-4 text-reset",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-google"})]),a("a",{staticClass:"ml-4 text-reset",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram"})]),a("a",{staticClass:"ml-4 text-reset",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{staticClass:"ml-4 text-reset",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-github"})])])]),a("section",{},[a("div",{staticClass:"container text-center text-md-start mt-5"},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"},[a("h6",{staticClass:"text-uppercase fw-bold mb-4"},[t._v(" NEWS ")]),a("p",[t._v(" ZAJEBISTY OPIS ZNAJDUJE SIĘ WŁAŚNIE TUTAJ. "),a("br"),t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus quidem suscipit, architecto nihil pariatur, velit aperiam modi ratione iste animi in. ")])]),a("div",{staticClass:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"},[a("h6",{staticClass:"text-uppercase text-decoration-underline fw-bold mb-4"},[t._v(" Kategorie ")]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"#!"}},[t._v("BIZNES")])]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"#!"}},[t._v("Rozrywka")])]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"#!"}},[t._v("TECHNOLOGIA")])]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"#!"}},[t._v("SPORT")])])]),a("div",{staticClass:"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"},[a("h6",{staticClass:"text-uppercase text-decoration-underline fw-bold mb-4"},[t._v(" UŻYTECZNE LINKI ")]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"https://www.freepik.com"}},[t._v("Freepik")])]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"https://newsapi.org/"}},[t._v("NEWS API")])]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"#!"}},[t._v("COŚ TAM")])]),a("p",[a("a",{staticClass:"text-reset",attrs:{href:"#!"}},[t._v("Help")])])]),a("div",{staticClass:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"},[a("h6",{staticClass:"text-uppercase text-decoration-underline fw-bold mb-4"},[t._v(" KONTAKT ")]),a("p",[a("i",{staticClass:"fas fa-home me-3"}),t._v(" New York, NY 10012, US")]),a("p",[a("i",{staticClass:"fas fa-envelope me-3"}),t._v(" info@example.com ")]),a("p",[a("i",{staticClass:"fas fa-phone me-3"}),t._v(" + 01 234 567 88")]),a("p",[a("i",{staticClass:"fas fa-print me-3"}),t._v(" + 01 234 567 89")])])])])]),a("div",{staticClass:"text-center p-4",staticStyle:{"background-color":"rgba(0, 0, 0, 0.05)"}},[t._v(" © 2021 Copyright: "),a("a",{staticClass:"text-reset fw-bold",attrs:{href:"#"}},[t._v("NEWS")])])])])}],r={name:"footerComponent"},i=r,o=(a("7494"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,null,null);e["a"]=c.exports}});
//# sourceMappingURL=app.45053d7e.js.map