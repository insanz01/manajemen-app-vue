(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)i=s[u],r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9d62e569"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e),o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-side-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"headline text-uppercase white--text"},[n("span",[e._v("Manajemen")]),n("span",{staticClass:"font-weight-light"},[e._v("Perusahaan")])]),n("v-spacer"),n("v-btn",{attrs:{small:"",flat:""},on:{click:function(t){return e.refresh()}}},[n("v-icon",[e._v("refresh")]),e._v(" Segarkan\n    ")],1)],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-list",[n("v-list-tile",[n("v-list-tile-title",{staticClass:"title"},[e._v("Super Admin")])],1)],1)],1),n("v-divider"),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},e._l(e.items,function(t){return n("v-list-tile",{key:t.title,attrs:{route:"",to:t.link}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),1)],1),n("v-content",[n("router-view")],1)],1)},i=[],s={name:"App",data:function(){return{drawer:!1,items:[{title:"Home",icon:"home",link:"/"},{title:"About",icon:"question_answer",link:"/about"}]}},methods:{refresh:function(){location.reload()}}},l=s,c=n("2877"),u=n("6544"),f=n.n(u),d=n("7496"),p=n("8336"),v=n("549c"),b=n("ce7e"),m=n("132d"),h=n("8860"),g=n("ba95"),w=n("40fe"),k=n("5d23"),y=n("f774"),_=n("9910"),V=n("71d9"),x=n("706c"),j=n("2a7f"),T=Object(c["a"])(l,o,i,!1,null,null,null),C=T.exports;f()(T,{VApp:d["a"],VBtn:p["a"],VContent:v["a"],VDivider:b["a"],VIcon:m["a"],VList:h["a"],VListTile:g["a"],VListTileAction:w["a"],VListTileContent:k["a"],VListTileTitle:k["b"],VNavigationDrawer:y["a"],VSpacer:_["a"],VToolbar:V["a"],VToolbarSideIcon:x["a"],VToolbarTitle:j["a"]});var O=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout")},P=[],A={data:function(){return{}}},L=A,E=n("a722"),F=Object(c["a"])(L,S,P,!1,null,null,null),M=F.exports;f()(F,{VLayout:E["a"]});var N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:"",lg4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-container",[n("v-form",{attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.login()}}},[n("v-text-field",{attrs:{label:"Nama Pengguna",rules:[e.aturan.is_isset]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{attrs:{type:"password",label:"Kata Sandi",rules:[e.aturan.is_isset]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{type:"submit",color:"info",block:""}},[e._v("Masuk")])],1)],1)],1)],1)],1)],1),n("v-snackbar",{attrs:{top:"",timeout:e.timeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.text)+"\n    "),n("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},$=[],q={name:"login",data:function(){return{snackbar:!1,timeout:6e3,text:"Tidak ada status error",username:"",password:"",aturan:{is_isset:function(e){return!!e||"Form tidak boleh kosong"}}}},methods:{login:function(){""!==this.username&&""!==this.password||(this.text="username atau password tidak boleh kosong",this.snackbar=!0)}}},B=q,D=n("b0af"),I=n("a523"),J=n("0e8f"),z=n("4bd4"),H=n("2db4"),K=n("2677"),G=Object(c["a"])(B,N,$,!1,null,null,null),Q=G.exports;f()(G,{VBtn:p["a"],VCard:D["a"],VContainer:I["a"],VContent:v["a"],VFlex:J["a"],VForm:z["a"],VLayout:E["a"],VSnackbar:H["a"],VTextField:K["a"]}),a["a"].use(O["a"]);var R=new O["a"]({base:"/",routes:[{path:"/",name:"home",component:M},{path:"/login",name:"login",component:Q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),U=n("2f62");a["a"].use(U["a"]);var W=new U["a"].Store({state:{},mutations:{},actions:{}}),X=n("9483");Object(X["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:R,store:W,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.3ca03bda.js.map