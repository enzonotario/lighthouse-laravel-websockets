(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{mSFh:function(t,e,n){"use strict";n.r(e);var i={props:{title:String},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | Lighthouse-LaravelWebsockets"):"Lighthouse-LaravelWebsockets"}}},r=n("KHd+"),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex flex-col w-full max-w-xl mx-auto"},[this._t("default")],2)},[],!1,null,"e6f7a796",null).exports,u=n("lTCR"),o=n.n(u);function a(){var t=l(["\n          subscription Test {\n            test\n          }\n        "]);return a=function(){return t},t}function c(){var t=l(["\n      mutation TriggerTestSubscription {\n        triggerTestSubscription\n      }\n    "]);return c=function(){return t},t}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var p={name:"Home",components:{Layout:s},data:function(){return{randomNumber:null}},mutations:{triggerTestSubscription:o()(c())},apollo:{$subscribe:{subscribed:{query:o()(a()),result:function(t){var e=t.data;this.randomNumber=e.test}}}}},f=Object(r.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",[n("div",{staticClass:"flex flex-col items-center p-8"},[n("ApolloMutation",{attrs:{mutation:t.$options.mutations.triggerTestSubscription},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.mutate;return[n("button",{staticClass:"p-2 bg-purple-500 text-white rounded",on:{click:i}},[t._v("Trigger test subscription")])]}}])}),t._v(" "),n("div",{staticClass:"p-8"},[n("label",[t._v("Random number:")]),t._v(" "),n("span",[t._v(t._s(t.randomNumber))])])],1)])},[],!1,null,"1c171451",null);e.default=f.exports}}]);
//# sourceMappingURL=1.js.map?id=81cfbdb7d39a4029ee3a