(function(t){function l(l){for(var r,s,c=l[0],i=l[1],a=l[2],p=0,h=[];p<c.length;p++)s=c[p],o[s]&&h.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(l);while(h.length)h.shift()();return n.push.apply(n,a||[]),e()}function e(){for(var t,l=0;l<n.length;l++){for(var e=n[l],r=!0,c=1;c<e.length;c++){var i=e[c];0!==o[i]&&(r=!1)}r&&(n.splice(l--,1),t=s(s.s=e[0]))}return t}var r={},o={0:0},n=[];function s(l){if(r[l])return r[l].exports;var e=r[l]={i:l,l:!1,exports:{}};return t[l].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,l,e){s.o(t,l)||Object.defineProperty(t,l,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,l){if(1&l&&(t=s(t)),8&l)return t;if(4&l&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&l&&"string"!=typeof t)for(var r in t)s.d(e,r,function(l){return t[l]}.bind(null,r));return e},s.n=function(t){var l=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(l,"a",l),l},s.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)},s.p="/fake-scroll/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=l,c=c.slice();for(var a=0;a<c.length;a++)l(c[a]);var f=i;n.push([0,1]),e()})({0:function(t,l,e){t.exports=e("Vtdi")},"A0++":function(t,l,e){"use strict";var r=e("BPUQ"),o=e.n(r);o.a},BPUQ:function(t,l,e){},Oa1v:function(t,l,e){"use strict";var r=e("mez1"),o=e.n(r);o.a},T2lQ:function(t,l,e){},Vtdi:function(t,l,e){"use strict";e.r(l);e("yt8O"),e("VRzm");var r=e("Kw5r"),o=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{attrs:{id:"app"}},[e("FakeScroll",{ref:"fake-scroll",staticClass:"fake-scroll",attrs:{"scroll-width":2e3,"scroll-height":2e3},on:{update:t.handleUpdate}},[e("div",{staticClass:"content"},[e("p",{staticClass:"text"},[t._v("\n        scrollLeft: "+t._s(t.scrollLeft)+"\n        "),e("br"),t._v("\n        scrollTop: "+t._s(t.scrollTop)+"\n        "),e("br"),t._v("\n        scrollWidth: "+t._s(t.scrollWidth)+"\n        "),e("br"),t._v("\n        scrollHeight: "+t._s(t.scrollHeight)+"\n        "),e("br"),t._v("\n        clientWidth: "+t._s(t.clientWidth)+"\n        "),e("br"),t._v("\n        clientHeight: "+t._s(t.clientHeight)+"\n        "),e("br"),t._v("\n        scrollLeftMax: "+t._s(t.scrollLeftMax)+"\n        "),e("br"),t._v("\n        scrollTopMax: "+t._s(t.scrollTopMax)+"\n        "),e("br"),t._v("\n        scrollLeftInterval: "+t._s(t.scrollLeftInterval)+"\n        "),e("br"),t._v("\n        scrollTopInterval: "+t._s(t.scrollTopInterval)+"\n        "),e("br")])])])],1)},n=[],s=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"fake-scroll",on:{scroll:t.update}},[e("ResizeObserver",{on:{notify:t.update}}),e("div",{staticClass:"scroll-area",style:{width:t.scrollWidth+"px",height:t.scrollHeight+"px"}}),e("div",{ref:"fixed-area",staticClass:"fixed-area"},[t._t("default")],2)],1)},c=[],i=e("JSzz"),a={name:"fake-scroll",components:{ResizeObserver:i["a"]},props:{scrollWidth:0,scrollHeight:0},mounted:function(){this.update()},methods:{update:function(){var t=this.$el,l={scrollLeft:t.scrollLeft,scrollTop:t.scrollTop,scrollWidth:this.scrollWidth,scrollHeight:this.scrollHeight,clientWidth:t.clientWidth,clientHeight:t.clientHeight};l.scrollLeftMax=Math.max(l.scrollWidth-l.clientWidth,0),l.scrollTopMax=Math.max(l.scrollHeight-l.clientHeight,0),l.scrollLeft=Math.min(Math.max(l.scrollLeft,0),l.scrollLeftMax),l.scrollTop=Math.min(Math.max(l.scrollTop,0),l.scrollTopMax),l.scrollLeftInterval=l.scrollLeftMax?l.scrollLeft/l.scrollLeftMax:0,l.scrollTopInterval=l.scrollTopMax?l.scrollTop/l.scrollTopMax:0;var e=this.$refs["fixed-area"];e.style.left=l.scrollLeft+"px",e.style.top=l.scrollTop+"px",this.$emit("update",l)}}},f=a,p=(e("Oa1v"),e("KHd+")),h=Object(p["a"])(f,s,c,!1,null,"4cbd0c9c",null),u=h.exports,d={name:"app",components:{FakeScroll:u},data:function(){return{scrollLeft:0,scrollTop:0,scrollWidth:0,scrollHeight:0,clientWidth:0,clientHeight:0,scrollLeftMax:0,scrollTopMax:0,scrollLeftInterval:0,scrollTopInterval:0}},methods:{handleUpdate:function(t){this.scrollLeft=t.scrollLeft,this.scrollTop=t.scrollTop,this.scrollWidth=t.scrollWidth,this.scrollHeight=t.scrollHeight,this.clientWidth=t.clientWidth,this.clientHeight=t.clientHeight,this.scrollLeftMax=t.scrollLeftMax,this.scrollTopMax=t.scrollTopMax,this.scrollLeftInterval=t.scrollLeftInterval,this.scrollTopInterval=t.scrollTopInterval}}},v=d,x=(e("A0++"),e("WfDE"),Object(p["a"])(v,o,n,!1,null,"e4c242f6",null)),b=x.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},WfDE:function(t,l,e){"use strict";var r=e("T2lQ"),o=e.n(r);o.a},mez1:function(t,l,e){}});
//# sourceMappingURL=app.765894a9.js.map