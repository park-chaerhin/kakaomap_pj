(function(){"use strict";var e={768:function(e,t,n){var o=n(1902);const r=o.Z.initializeApp({apiKey:"AIzaSyCKlSeSdc92kzC0K7THpPhouW4Qx-Rr3dM",authDomain:"my-project-5e5b2.firebaseapp.com"});r.auth()},7617:function(e,t,n){var o=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[e._l(e.fnGetMenuItems,(function(t,o){return n("v-list-item",{key:o,attrs:{value:"true",to:t.to}},[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)})),e.fnGetAuthStatus?n("v-list-item",{on:{click:e.fnDoLogout}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-arrow-right-bold-box-outline")])],1),n("v-list-item-title",[e._v("로그아웃")])],1):e._e()],2)],1),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"#2c38a8",dark:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/"}},["intro_page"==e.$route.name?n("v-icon",{staticClass:"hidden-xs-only",attrs:{color:"#fff lighten-4"}},[e._v("mdi-home")]):e._e(),"intro_page"!==e.$route.name?n("v-icon",{staticClass:"hidden-xs-only",attrs:{color:"#fff lighten-4"}},[e._v("mdi-map-outline")]):e._e()],1),n("v-spacer"),n("v-btn",{attrs:{variant:"plain",color:"#2c38a8",dark:""},on:{click:e.toIndex}},[e._v(" PooPoo ")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-xs-only"},[e._l(e.fnGetMenuItems,(function(t){return n("v-btn",{key:t.title,attrs:{text:"",to:t.to}},[e._v(" "+e._s(t.title)+" ")])})),e.fnGetAuthStatus?n("v-btn",{attrs:{text:""},on:{click:e.fnDoLogout}},[e._v(" 로그아웃 ")]):e._e()],2)],1),n("v-main",[n("router-view")],1)],1)},i=[],a={name:"App",data(){return{drawer:!1}},computed:{fnGetAuthStatus(){return this.$store.getters.fnGetAuthStatus},fnGetMenuItems(){return this.fnGetAuthStatus?[{title:"마이페이지",to:"/my"}]:[{title:"로그인",to:"/login"}]}},methods:{fnDoLogout(){this.$store.dispatch("fnDoLogout")},toLink(){this.$router.push({name:"register_page"})},toIndex(){"/intro_page"!==this.$route.path&&this.$router.push({name:"intro_page"})}}},s=a,u=n(1001),l=n(3453),c=n.n(l),f=n(7524),d=n(8320),p=n(5206),m=n(3150),g=n(6428),h=n(6816),v=n(7620),b=n(3099),y=n(9507),S=n(7877),w=n(4216),_=n(9762),L=n(7921),A=(0,u.Z)(s,r,i,!1,null,null,null),k=A.exports;c()(A,{VApp:f.Z,VAppBar:d.Z,VAppBarNavIcon:p.Z,VBtn:m.Z,VIcon:g.Z,VList:h.Z,VListItem:v.Z,VListItemAction:b.Z,VListItemTitle:y.V9,VMain:S.Z,VNavigationDrawer:w.Z,VSpacer:_.Z,VToolbarItems:L.lj});var Z=n(5205);(0,Z.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var E=n(8345),P=n(1902);o.Z.use(E.Z);const C=[{path:"/",name:"intro_page",component:()=>Promise.all([n.e(446),n.e(185)]).then(n.bind(n,2541))},{path:"/detail",name:"detail_page",component:()=>n.e(124).then(n.bind(n,1124))},{path:"/login",name:"login_page",component:()=>Promise.all([n.e(72),n.e(228)]).then(n.bind(n,3228))},{path:"/my",name:"my_page",component:()=>n.e(491).then(n.bind(n,4491)),meta:{bAuth:!0}},{path:"/register",name:"register_page",component:()=>Promise.all([n.e(72),n.e(332)]).then(n.bind(n,3332))},{path:"/add",name:"add_page",component:()=>Promise.all([n.e(72),n.e(446),n.e(179)]).then(n.bind(n,7219))},{path:"/inquire",name:"inquire_page",component:()=>Promise.all([n.e(72),n.e(825)]).then(n.bind(n,3825))},{path:"/*",name:"error_page",component:()=>n.e(282).then(n.bind(n,3282))}],U=new E.Z({mode:"history",routes:C});U.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.bAuth)),r=P.Z.auth().currentUser;o&&!r?n("/login"):n()}));var M=U,x=n(629),O=n(3168),j=(n(3204),{state:{oUser:null},mutations:{fnSetUser(e,t){e.oUser=t}},getters:{fnGetUser(e){return e.oUser},fnGetAuthStatus(e){return null!=e.oUser}},actions:{fnRegisterUser({commit:e},t){e("fnSetLoading",!0),P.Z.auth().createUserWithEmailAndPassword(t.pEmail,t.pPassword).then((t=>{e("fnSetUser",{email:t.user.email}),e("fnSetLoading",!1),e("fnSetErrorMessage",""),M.push("/my")})).catch((t=>{e("fnSetErrorMessage",t.message),e("fnSetLoading",!1)}))},fnDoLogin({commit:e},t){e("fnSetLoading",!0),P.Z.auth().signInWithEmailAndPassword(t.pEmail,t.pPassword).then((t=>{e("fnSetUser",{id:t.user.uid,name:t.user.displayName,email:t.user.email,photoURL:t.user.photoURL}),e("fnSetLoading",!1),e("fnSetErrorMessage",""),M.push("/my")})).catch((t=>{e("fnSetErrorMessage",t.message),e("fnSetLoading",!1)}))},fnDoGoogleLogin_Popup({commit:e}){e("fnSetLoading",!0);var t=new P.Z.auth.GoogleAuthProvider;t.addScope("profile"),t.addScope("email"),P.Z.auth().signInWithPopup(t).then((t=>{e("fnSetUser",{id:t.user.uid,name:t.user.displayName,email:t.user.email,photoURL:t.user.photoURL}),e("fnSetLoading",!1),e("fnSetErrorMessage",""),M.push("/my")})).catch((t=>{e("fnSetErrorMessage",t.message),e("fnSetLoading",!1)}))},fnDoLoginAuto({commit:e},t){e("fnSetUser",{id:t.uid,name:t.displayName,email:t.email,photoURL:t.photoURL}),e("fnSetLoading",!1),e("fnSetErrorMessage","")},fnDoLogout({commit:e}){P.Z.auth().signOut(),e("fnSetUser",null),M.push("/intro")}}}),I={state:{blsLoading:!1,sErrorMessage:""},mutations:{fnSetLoading(e,t){e.blsLoading=t},fnSetErrorMessage(e,t){e.sErrorMessage=t}},getters:{fnGetLoading(e){return e.blsLoading},fnGetErrorMessage(e){return e.sErrorMessage}}};o.Z.use(x.ZP);var N=new x.ZP.Store({modules:{common:I,provider:j},plugins:[new O.ZP({storage:window.localStorage}).plugin]}),G=n(1910);o.Z.use(G.Z);var V=new G.Z({});n(768);o.Z.config.productionTip=!1,new o.Z({router:M,store:N,vuetify:V,created(){P.Z.auth().onAuthStateChanged((e=>{null!==e&&N.dispatch("fnDoLoginAuto",e)}))},render:e=>e(k)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{72:"abc85b62",124:"2edfb6b7",179:"2959735d",185:"dc5198b6",228:"a6789dd2",282:"ff1323e1",332:"bc24cfd2",446:"53603c74",491:"86f31db0",825:"f6536156"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{72:"b75b97bc",179:"d37feaa8",185:"3cce383b",282:"1ecf3cab",332:"d54629c5",491:"1d6c9635",825:"b6df6704"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="google_login:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={72:1,179:1,185:1,282:1,332:1,491:1,825:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkgoogle_login"]=self["webpackChunkgoogle_login"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7617)}));o=n.O(o)})();
//# sourceMappingURL=app.4d539557.js.map