(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["karyawan"],{"12b2":function(t,a,e){"use strict";var i=e("2b0e");a["a"]=i["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,a){var e=a.data,i=a.props,s=a.children;return e.staticClass=("v-card__title "+(e.staticClass||"")).trim(),i.primaryTitle&&(e.staticClass+=" v-card__title--primary"),t("div",e,s)}})},"23bf":function(t,a,e){"use strict";var i=e("80d2"),s=e("2b0e");a["a"]=s["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},a=Object(i["b"])(this.height),e=Object(i["b"])(this.minHeight),s=Object(i["b"])(this.minWidth),n=Object(i["b"])(this.maxHeight),r=Object(i["b"])(this.maxWidth),c=Object(i["b"])(this.width);return a&&(t.height=a),e&&(t.minHeight=e),s&&(t.minWidth=s),n&&(t.maxHeight=n),r&&(t.maxWidth=r),c&&(t.width=c),t}}})},"253d":function(t,a,e){},"4c34":function(t,a,e){},"4c94":function(t,a,e){},"8dea":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",[e("v-card",[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.karyawan,function(a,i){return e("v-flex",{key:i,attrs:{xs12:""}},[e("v-card",{staticClass:"white--text",attrs:{color:"primary"}},[e("v-layout",[e("v-flex",{attrs:{xs5:""}},[e("v-img",{attrs:{src:a.foto,height:"125px",contain:""}})],1),e("v-flex",{attrs:{xs7:""}},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("div",{staticClass:"headline"},[t._v(t._s(a.nama))]),e("div",{staticClass:"headline"},[t._v(t._s(a.NIK))]),e("div",[t._v(t._s(a.alamat))])])])],1)],1),e("v-divider",{attrs:{light:""}}),e("v-card-actions",{staticClass:"pa-3"},[e("v-btn",{attrs:{flat:"",dark:""}},[e("span",[t._v("CP: "+t._s(a.cp))])]),e("v-spacer"),e("v-btn",{attrs:{flat:"",dark:""}},[e("span",[t._v("Gaji: "+t._s(a.gaji))])])],1)],1)],1)}),1),e("v-btn",{attrs:{absolute:"",dark:"",fab:"",top:"",right:"",color:"pink"}},[e("v-icon",[t._v("add")])],1)],1)],1)],1)},s=[],n=(e("cadf"),e("551c"),e("f751"),e("097d"),{name:"karyawan",data:function(){return{karyawan:[{id:1,NIK:"12345678",foto:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",nama:"Palui",cp:"08123456789",alamat:"Jalan Nama Jalan, No. 1, Nama Kota",gaji:2e5},{id:2,NIK:"12345678",foto:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",nama:"Waluh",cp:"08123456789",alamat:"Jalan Nama Jalan, No. 1, Nama Kota",gaji:3e5},{id:3,NIK:"12345678",foto:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",nama:"Gober",cp:"08123456789",alamat:"Jalan Nama Jalan, No. 1, Nama Kota",gaji:4e5},{id:4,NIK:"12345678",foto:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",nama:"Jahil",cp:"08123456789",alamat:"Jalan Nama Jalan, No. 1, Nama Kota",gaji:5e5},{id:5,NIK:"12345678",foto:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",nama:"Bless",cp:"08123456789",alamat:"Jalan Nama Jalan, No. 1, Nama Kota",gaji:6e5}]}}}),r=n,c=e("2877"),o=e("6544"),l=e.n(o),d=e("8336"),h=e("b0af"),u=e("99d9"),m=e("12b2"),g=e("a523"),v=e("ce7e"),p=e("0e8f"),f=e("132d"),b=e("adda"),y=e("a722"),S=e("9910"),_=Object(c["a"])(r,i,s,!1,null,null,null);a["default"]=_.exports;l()(_,{VBtn:d["a"],VCard:h["a"],VCardActions:u["a"],VCardTitle:m["a"],VContainer:g["a"],VDivider:v["a"],VFlex:p["a"],VIcon:f["a"],VImg:b["a"],VLayout:y["a"],VSpacer:S["a"]})},"99d9":function(t,a,e){"use strict";var i=e("80d2"),s=e("b0af"),n=e("adda"),r=e("d9bd"),c=n["a"].extend({name:"v-card-media",mounted:function(){Object(r["c"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),o=e("12b2");e.d(a,"a",function(){return l});var l=Object(i["d"])("v-card__actions"),d=Object(i["d"])("v-card__text");s["a"],o["a"]},adda:function(t,a,e){"use strict";e("253d"),e("4c34");var i=e("23bf"),s=e("58df"),n=Object(s["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),r=n,c=e("d9bd");a["a"]=r.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],a=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),a&&t.push('url("'+a+'")');var e=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[e]):e}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,a=new Image;this.image=a,a.onload=function(){a.decode?a.decode().catch(function(a){Object(c["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(a.message?"\nOriginal error: "+a.message:""),t)}).then(t.onLoad):t.onLoad()},a.onerror=this.onError,a.src=this.normalisedSrc.src,this.sizes&&(a.sizes=this.sizes),this.normalisedSrc.srcset&&(a.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(a),this.getSrc()},pollForSize:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var s=t.naturalHeight,n=t.naturalWidth;s||n?a.calculatedAspectRatio=n/s:null!=e&&setTimeout(i,e)};i()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var a=r.options.render.call(this,t);return a.data.staticClass+=" v-image",a.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},a.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(a.tag,a.data,a.children)}})},b0af:function(t,a,e){"use strict";e("4c94"),e("d0e7");var i=e("b64a"),s=e("2b0e");function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var r=s["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?n({},"elevation-"+this.computedElevation,!0):{}}}}),c=e("23bf"),o=e("6a18"),l=e("58df"),d=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},h=Object(l["a"])(i["a"],r,c["a"],o["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return d({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var a={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,a),this.$slots.default)}}),u=h,m=e("0d01"),g=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};a["a"]=Object(l["a"])(m["a"],u).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return g({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},u.options.computed.classes.call(this))},styles:function(){var t=g({},u.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var a=this.generateRouteLink(this.classes),e=a.tag,i=a.data;return i.style=this.styles,t(e,this.setBackgroundColor(this.color,i),this.$slots.default)}})},d0e7:function(t,a,e){}}]);
//# sourceMappingURL=karyawan.44221e21.js.map