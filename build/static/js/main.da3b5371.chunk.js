(this["webpackJsonpmy-love"]=this["webpackJsonpmy-love"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/ballon-couple.92f3b88e.gif"},22:function(e,t,a){e.exports=a.p+"static/media/stamp.4b33a72b.webp"},23:function(e,t,a){e.exports=a.p+"static/media/heart-stamp.b4525ec3.png"},26:function(e,t,a){e.exports=a.p+"static/media/butterfly.c2f8bdeb.webm"},30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"BALLOON_COUPLE",(function(){return E.a})),a.d(n,"NORI_STAMP",(function(){return N.a}));var r={};a.r(r),a.d(r,"HEART_STAMP",(function(){return O.a}));var o=a(0),c=a.n(o),l=a(10),s=a.n(l),i=(a(35),a(12)),m=a(14),u=a(13),v=a(29),p=a(28),f=a(2),d=(a(40),a(25)),_=a.n(d),b=a(21),E=a.n(b),h=a(22),N=a.n(h),g=a(23),O=a.n(g),y=(a(41),a(42),c.a.forwardRef((function(e,t){var a=e.message,n=e.stamps;return c.a.createElement("div",{className:"flip-envelope"},c.a.createElement("div",{className:"flip-envelope__design design"},c.a.createElement("div",{ref:t,className:"flip-envelope__envelope envelope","data-focused":"false"},c.a.createElement("div",{className:"flip-envelope__cover cover"},c.a.createElement("div",{className:"flip-envelope__cover-bottom bottom"}," "),c.a.createElement("div",{className:"flip-envelope__cover-left left"}),c.a.createElement("div",{className:"flip-envelope__cover-right right"}," "),c.a.createElement("div",{className:"flip-envelope__cover-top top"})),c.a.createElement("div",{className:"flip-envelope__paper"},c.a.createElement("div",{className:"flip-envelope__message"},a),e.children)),c.a.createElement("div",{className:"flip-envelope__envelope-back envelope-back"},n)))}))),w=(a(43),function(e){var t=e.onPress,a=Object(o.useRef)(null);return c.a.createElement("div",{className:"heart-button"},c.a.createElement("input",{ref:a,id:"click",className:"heart-button__checkbox",type:"checkbox",onClick:t}),c.a.createElement("label",{className:"heart-button__label label",htmlFor:"click"},c.a.createElement("div",{className:"heart-button__favourite favourite"},c.a.createElement("div",{className:"heart-button__favourite-heart favourite_heart"},c.a.createElement("div",{className:"heart-button__favourite-heart-left favourite_heart__left"}),c.a.createElement("div",{className:"heart-button__favourite-heart-right favourite_heart__right"})),c.a.createElement("div",{className:"heart-button__favourite-text favourite_text"},c.a.createElement("span",{className:"heart-button__text-span"},"Feliz Cumplea\xf1os")))))}),k=a(26),R=a.n(k),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,s=new Array(l),m=0;m<l;m++)s[m]=arguments[m];return(e=t.call.apply(t,[this].concat(s))).envelopeRef=Object(o.createRef)(),e.scene={},e.parallaxInstance=Object(o.createRef)(),e.componentDidMount=function(){e.scene=document.getElementById("love-scene"),e.parallaxInstance=new _.a(e.scene)},e.getStampsList=function(){return[c.a.createElement("img",{className:"love__nori-stamp",src:n.NORI_STAMP}),c.a.createElement("img",{className:"love__heart-stamp",src:r.HEART_STAMP})]},e.onHeartButtonClick=function(){var t,a,n=null===(t=e.envelopeRef.current)||void 0===t?void 0:t.getAttribute("data-focused");null===(a=e.envelopeRef.current)||void 0===a||a.setAttribute("data-focused","false"==n?"true":"false")},e.render=function(){return c.a.createElement("div",{className:"love"},c.a.createElement("video",{className:"love__background",muted:!0,autoPlay:!0,playsInline:!0,loop:!0,id:"myVideo"},c.a.createElement("source",{src:R.a,type:"video/webm"}),"Sorry, your browser doesn't support embedded videos."),c.a.createElement("div",{className:"love__envelop-container"},c.a.createElement(y,{ref:e.envelopeRef,stamps:e.getStampsList(),message:"Te Amo"},c.a.createElement("div",{className:"heart"}),c.a.createElement("img",{className:"love__balloons-couple",src:n.BALLOON_COUPLE}))),c.a.createElement("div",{className:"love__heart-button"},c.a.createElement(w,{onPress:e.onHeartButtonClick})),c.a.createElement("div",{id:"love-scene"}))},e}return a}(o.Component),x=a(7),j=a(27),S={},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return"undefined"===typeof e?S:e},C=Object(x.c)({loveReducer:P}),L=[j.a],T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d;var I=function(){var e=T(x.a.apply(void 0,L));return{store:Object(x.e)(C,e)}}().store,B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).render=function(){return c.a.createElement(v.a,{store:I},c.a.createElement(p.a,null,c.a.createElement(f.a,{path:"/",component:A})))},e}return a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.da3b5371.chunk.js.map