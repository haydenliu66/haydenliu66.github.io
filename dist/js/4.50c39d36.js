(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"454f":function(e,t,n){n("46a7");var i=n("584a").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},"46a7":function(e,t,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4e4d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MainContainer",[n("div",{staticClass:"content"},[n("div",{class:["waterfall","column-count-2"]},e._l(e.photos,(function(t,i){return n("div",{key:i,staticClass:"waterfall-item"},[n("div",{staticClass:"img-box",attrs:{title:t.title},on:{click:function(){return e.toggleCarousel(i)}}},[n("el-image",{staticStyle:{width:"100%"},attrs:{src:t.img,lazy:""}},[n("div",{staticClass:"flex-center-row image-slot",staticStyle:{"min-height":"320px"},attrs:{slot:"placeholder"},slot:"placeholder"},[n("img",{staticClass:"loading",attrs:{src:"/public/images/loading.gif"}})]),n("div",{staticClass:"flex-center-row image-slot",staticStyle:{"min-height":"320px",color:"#c0c4cc","line-height":"1.8"},attrs:{slot:"error"},slot:"error"},[e._v('\n              ("▔□▔) 图片拒绝了你的查看\n              '),n("br")])])],1),n("p",{staticClass:"description"},[e._v("\n          "+e._s(t.desc)+"\n        ")])])})),0)]),e.showViewer?n("el-image-viewer",{ref:"imageViewer",attrs:{"on-close":e.closeViewer,"url-list":e.photos.map((function(e){return e.img}))}}):e._e()],1)},o=[],s=n("e6fe"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"viewer-fade"}},[n("div",{staticClass:"el-image-viewer__wrapper",style:{"z-index":e.zIndex}},[n("div",{staticClass:"el-image-viewer__mask"}),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__close",on:{click:e.hide}},[n("i",{staticClass:"el-icon-circle-close"})]),e.isSingle?e._e():[n("span",{staticClass:"el-image-viewer__btn el-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[n("i",{staticClass:"el-icon-arrow-left"})]),n("span",{staticClass:"el-image-viewer__btn el-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[n("i",{staticClass:"el-icon-arrow-right"})])],n("div",{staticClass:"el-image-viewer__btn el-image-viewer__actions"},[n("div",{staticClass:"el-image-viewer__actions__inner"},[n("i",{staticClass:"el-icon-zoom-out",on:{click:function(t){return e.handleActions("zoomOut")}}}),n("i",{staticClass:"el-icon-zoom-in",on:{click:function(t){return e.handleActions("zoomIn")}}}),n("i",{staticClass:"el-image-viewer__actions__divider"}),n("i",{class:e.mode.icon,on:{click:e.toggleMode}}),n("i",{staticClass:"el-image-viewer__actions__divider"}),n("i",{staticClass:"el-icon-refresh-left",on:{click:function(t){return e.handleActions("anticlocelise")}}}),n("i",{staticClass:"el-icon-refresh-right",on:{click:function(t){return e.handleActions("clocelise")}}})])]),n("div",{staticClass:"el-image-viewer__canvas"},[e._l(e.urlList,(function(t,i){return[i===e.index?n("img",{key:t,ref:"img",refInFor:!0,staticClass:"el-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()]}))],2)],2)])},a=[],c=(n("8e6e"),n("85f2")),l=n.n(c);function u(e,t,n){return t in e?l()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("8615"),n("ac6a"),n("456d"),n("c5f6"),n("6762"),n("2fdb"),n("4917"),n("7618"),n("28a5"),n("a481");var f=n("2b0e"),d=f["default"].prototype.$isServer,h=(d||Number(document.documentMode),function(){return!d&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}()),m=function(){return!d&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}();n("6b54");Object.prototype.hasOwnProperty;var g=function(){return!f["default"].prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)};function v(e){var t=!1;return function(){for(var n=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];t||(t=!0,window.requestAnimationFrame((function(i){e.apply(n,o),t=!1})))}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={CONTAIN:{name:"contain",icon:"el-icon-full-screen"},ORIGINAL:{name:"original",icon:"el-icon-c-scale-to-original"}},_=g()?"DOMMouseScroll":"mousewheel",y={name:"ElImageViewer",props:{urlList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:function(){}},onClose:{type:Function,default:function(){}}},data:function(){return{index:0,isShow:!1,infinite:!0,loading:!1,mode:b.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},computed:{isSingle:function(){return this.urlList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.urlList.length-1},currentImg:function(){return this.urlList[this.index]},imgStyle:function(){var e=this.transform,t=e.scale,n=e.deg,i=e.offsetX,o=e.offsetY,s=e.enableTransition,r={transform:"scale(".concat(t,") rotate(").concat(n,"deg)"),transition:s?"transform .3s":"","margin-left":"".concat(i,"px"),"margin-top":"".concat(o,"px")};return this.mode===b.CONTAIN&&(r.maxWidth=r.maxHeight="100%"),r}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg:function(e){var t=this;this.$nextTick((function(e){var n=t.$refs.img[0];n.complete||(t.loading=!0)}))}},mounted:function(){this.deviceSupportInstall()},methods:{hide:function(){this.deviceSupportUninstall(),this.onClose()},deviceSupportInstall:function(){var e=this;this._keyDownHandler=v((function(t){var n=t.keyCode;switch(n){case 27:e.hide();break;case 32:e.toggleMode();break;case 37:e.prev();break;case 38:e.handleActions("zoomIn");break;case 39:e.next();break;case 40:e.handleActions("zoomOut");break}})),this._mouseWheelHandler=v((function(t){var n=t.wheelDelta?t.wheelDelta:-t.detail;n>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})})),h(document,"keydown",this._keyDownHandler),h(document,_,this._mouseWheelHandler)},deviceSupportUninstall:function(){m(document,"keydown",this._keyDownHandler),m(document,_,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad:function(e){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var n=this.transform,i=n.offsetX,o=n.offsetY,s=e.pageX,r=e.pageY;this._dragHandler=v((function(e){t.transform.offsetX=i+e.pageX-s,t.transform.offsetY=o+e.pageY-r})),h(document,"mousemove",this._dragHandler),h(document,"mouseup",(function(e){m(document,"mousemove",t._dragHandler)})),e.preventDefault()}},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode:function(){if(!this.loading){var e=Object.keys(b),t=Object.values(b),n=t.indexOf(this.mode),i=(n+1)%e.length;this.mode=b[e[i]],this.reset()}},prev:function(){if(!this.isFirst||this.infinite){var e=this.urlList.length;this.index=(this.index-1+e)%e}},next:function(){if(!this.isLast||this.infinite){var e=this.urlList.length;this.index=(this.index+1)%e}},setActiveIndex:function(e){this.index=e},handleActions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.loading){var n=w({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),i=n.zoomRate,o=n.rotateDeg,s=n.enableTransition,r=this.transform;switch(e){case"zoomOut":r.scale>.2&&(r.scale=parseFloat((r.scale-i).toFixed(3)));break;case"zoomIn":r.scale=parseFloat((r.scale+i).toFixed(3));break;case"clocelise":r.deg+=o;break;case"anticlocelise":r.deg-=o;break}r.enableTransition=s}}}},x=y,O=n("2877"),k=Object(O["a"])(x,r,a,!1,null,null,null),C=k.exports,I=n("365c"),S=(n("c00e"),{components:{ElImageViewer:C,MainContainer:s["a"]},data:function(){return{photos:[],showViewer:!1}},mounted:function(){var e=this;Object(I["c"])().then((function(t){console.log(t),e.photos=t.photoList,e.photoUrls=e.photos.map((function(e){return e.img}))}))},methods:{toggleCarousel:function(e){var t=this;this.showViewer=!0,this.$nextTick((function(){t.$refs.imageViewer.setActiveIndex(e)}))},closeViewer:function(){this.showViewer=!1}}}),A=S,j=Object(O["a"])(A,i,o,!1,null,null,null);t["default"]=j.exports},"85f2":function(e,t,n){e.exports=n("454f")},"8e6e":function(e,t,n){var i=n("5ca1"),o=n("990b"),s=n("6821"),r=n("11e9"),a=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(e){var t,n,i=s(e),c=r.f,l=o(i),u={},f=0;while(l.length>f)n=c(i,t=l[f++]),void 0!==n&&a(u,t,n);return u}})},"990b":function(e,t,n){var i=n("9093"),o=n("2621"),s=n("cb7c"),r=n("7726").Reflect;e.exports=r&&r.ownKeys||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},c00e:function(e,t,n){},f1ae:function(e,t,n){"use strict";var i=n("86cc"),o=n("4630");e.exports=function(e,t,n){t in e?i.f(e,t,o(0,n)):e[t]=n}}}]);
//# sourceMappingURL=4.50c39d36.js.map