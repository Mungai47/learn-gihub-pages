window.theme = window.theme || {};

/* Run function after window resize */
var afterResize=(function(){var t={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId";}if(t[uniqueId]){clearTimeout(t[uniqueId]);}t[uniqueId]=setTimeout(callback,ms);};})();

window.timber = window.timber || {};

/* ================ VENDOR ================ */
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});


/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;g>f;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&10>m&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),1===Math.abs(b)?d:c}var f=[],g=[],h={precision:100,elapse:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&0>b?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});


/*
 * DarkTooltip v0.4.0
 * Simple customizable tooltip with confirm option and 3d effects
 * (c)2014 Ruben Torres - rubentdlh@gmail.com
 * Released under the MIT license
 */
!function(t){function i(t,i){this.bearer=t,this.options=i,this.hideEvent,this.mouseOverMode="hover"==this.options.trigger||"mouseover"==this.options.trigger||"onmouseover"==this.options.trigger}i.prototype={show:function(){var t=this;this.options.modal&&this.modalLayer.css("display","block"),this.tooltip.css("display","block"),t.mouseOverMode&&(this.tooltip.mouseover(function(){clearTimeout(t.hideEvent)}),this.tooltip.mouseout(function(){clearTimeout(t.hideEvent),t.hide()}))},hide:function(){var t=this;this.hideEvent=setTimeout(function(){t.tooltip.hide()},100),t.options.modal&&t.modalLayer.hide(),this.options.onClose()},toggle:function(){this.tooltip.is(":visible")?this.hide():this.show()},addAnimation:function(){switch(this.options.animation){case"none":break;case"fadeIn":this.tooltip.addClass("animated"),this.tooltip.addClass("fadeIn");break;case"flipIn":this.tooltip.addClass("animated"),this.tooltip.addClass("flipIn")}},setContent:function(){if(t(this.bearer).css("cursor","pointer"),this.options.content)this.content=this.options.content;else{if(!this.bearer.attr("data-tooltip"))return;this.content=this.bearer.attr("data-tooltip")}if("#"==this.content.charAt(0)){if(this.options.delete_content){var i=t(this.content).html();t(this.content).html(""),this.content=i,delete i}else t(this.content).hide(),this.content=t(this.content).html();this.contentType="html"}else this.contentType="text";tooltipId="",""!=this.bearer.attr("id")&&(tooltipId="id='darktooltip-"+this.bearer.attr("id")+"'"),this.modalLayer=t("<ins class='darktooltip-modal-layer'></ins>"),this.tooltip=t("<ins "+tooltipId+" class = 'dark-tooltip "+this.options.theme+" "+this.options.size+" "+this.options.gravity+"'><div>"+this.content+"</div><div class = 'tip'></div></ins>"),this.tip=this.tooltip.find(".tip"),t("body").append(this.modalLayer),t("body").append(this.tooltip),"html"==this.contentType&&this.tooltip.css("max-width","none"),this.tooltip.css("opacity",this.options.opacity),this.addAnimation(),this.options.confirm&&this.addConfirm()},setPositions:function(){var t=this.bearer.offset().left,i=this.bearer.offset().top;switch(this.options.gravity){case"south":t+=this.bearer.outerWidth()/2-this.tooltip.outerWidth()/2,i+=-this.tooltip.outerHeight()-this.tip.outerHeight()/2;break;case"west":t+=this.bearer.outerWidth()+this.tip.outerWidth()/2,i+=this.bearer.outerHeight()/2-this.tooltip.outerHeight()/2;break;case"north":t+=this.bearer.outerWidth()/2-this.tooltip.outerWidth()/2,i+=this.bearer.outerHeight()+this.tip.outerHeight()/2;break;case"east":t+=-this.tooltip.outerWidth()-this.tip.outerWidth()/2,i+=this.bearer.outerHeight()/2-this.tooltip.outerHeight()/2}this.options.autoLeft&&this.tooltip.css("left",t),this.options.autoTop&&this.tooltip.css("top",i)},setEvents:function(){var i,o=this,s=o.options.hoverDelay;o.mouseOverMode?this.bearer.mouseenter(function(){i=setTimeout(function(){o.setPositions(),o.show()},s)}).mouseleave(function(){clearTimeout(i),o.hide()}):("click"==this.options.trigger||"onclik"==this.options.trigger)&&(this.tooltip.click(function(t){t.stopPropagation()}),this.bearer.click(function(t){t.preventDefault(),o.setPositions(),o.toggle(),t.stopPropagation()}),t("html").click(function(){o.hide()}))},activate:function(){this.setContent(),this.content&&this.setEvents()},addConfirm:function(){this.tooltip.append("<ul class = 'confirm'><li class = 'darktooltip-yes'>"+this.options.yes+"</li><li class = 'darktooltip-no'>"+this.options.no+"</li></ul>"),this.setConfirmEvents()},setConfirmEvents:function(){var t=this;this.tooltip.find("li.darktooltip-yes").click(function(i){t.onYes(),i.stopPropagation()}),this.tooltip.find("li.darktooltip-no").click(function(i){t.onNo(),i.stopPropagation()})},finalMessage:function(){if(this.options.finalMessage){var t=this;t.tooltip.find("div:first").html(this.options.finalMessage),t.tooltip.find("ul").remove(),t.setPositions(),setTimeout(function(){t.hide(),t.setContent()},t.options.finalMessageDuration)}else this.hide()},onYes:function(){this.options.onYes(this.bearer),this.finalMessage()},onNo:function(){this.options.onNo(this.bearer),this.hide()}},t.fn.darkTooltip=function(o){return this.each(function(){o=t.extend({},t.fn.darkTooltip.defaults,o);var s=new i(t(this),o);s.activate()})},t.fn.darkTooltip.defaults={animation:"none",confirm:!1,content:"",finalMessage:"",finalMessageDuration:1e3,gravity:"south",hoverDelay:0,modal:!1,no:"No",onNo:function(){},onYes:function(){},opacity:.9,size:"medium",theme:"dark",trigger:"hover",yes:"Yes",autoTop:!0,autoLeft:!0,onClose:function(){}}}(jQuery);


/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
}return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
!r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
}),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);

(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function i(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function a(n,t){var r=null==n?0:n.length;return!!r&&b(n,t,0)>-1}function c(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function v(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function _(n){return n.split("")}function g(n){return n.match(Dt)||[]}function y(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function d(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function b(n,t,r){return t===t?K(n,t,r):d(n,m,r)}function w(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function m(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?I(n,t)/r:Ln}function j(n){return function(t){return null==t?X:t[n]}}function A(n){return function(t){return null==n?X:n[t]}}function k(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function O(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function I(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==X&&(r=r===X?i:r+i)}return r}function R(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function z(n,t){return l(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return l(t,function(t){return n[t]})}function W(n,t){return n.has(t)}function L(n,t){for(var r=-1,e=n.length;++r<e&&b(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length;r--&&b(t,n[r],0)>-1;);return r}function U(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function B(n){return"\\"+Yr[n]}function T(n,t){return null==n?X:n[t]}function $(n){return Nr.test(n)}function D(n){return Pr.test(n)}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function N(n,t){return function(r){return n(t(r))}}function P(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==fn||(n[r]=fn,i[u++]=r)}return i}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Z(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function K(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function V(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function G(n){return $(n)?J(n):ve(n)}function H(n){return $(n)?Y(n):_(n)}function J(n){for(var t=Mr.lastIndex=0;Mr.test(n);)++t;return t}function Y(n){return n.match(Mr)||[]}function Q(n){return n.match(Fr)||[]}var X,nn="4.17.2",tn=200,rn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",en="Expected a function",un="__lodash_hash_undefined__",on=500,fn="__lodash_placeholder__",an=1,cn=2,ln=4,sn=1,hn=2,pn=1,vn=2,_n=4,gn=8,yn=16,dn=32,bn=64,wn=128,mn=256,xn=512,jn=30,An="...",kn=800,On=16,In=1,Rn=2,zn=3,En=1/0,Sn=9007199254740991,Wn=1.7976931348623157e308,Ln=NaN,Cn=4294967295,Un=Cn-1,Bn=Cn>>>1,Tn=[["ary",wn],["bind",pn],["bindKey",vn],["curry",gn],["curryRight",yn],["flip",xn],["partial",dn],["partialRight",bn],["rearg",mn]],$n="[object Arguments]",Dn="[object Array]",Mn="[object AsyncFunction]",Fn="[object Boolean]",Nn="[object Date]",Pn="[object DOMException]",qn="[object Error]",Zn="[object Function]",Kn="[object GeneratorFunction]",Vn="[object Map]",Gn="[object Number]",Hn="[object Null]",Jn="[object Object]",Yn="[object Promise]",Qn="[object Proxy]",Xn="[object RegExp]",nt="[object Set]",tt="[object String]",rt="[object Symbol]",et="[object Undefined]",ut="[object WeakMap]",it="[object WeakSet]",ot="[object ArrayBuffer]",ft="[object DataView]",at="[object Float32Array]",ct="[object Float64Array]",lt="[object Int8Array]",st="[object Int16Array]",ht="[object Int32Array]",pt="[object Uint8Array]",vt="[object Uint8ClampedArray]",_t="[object Uint16Array]",gt="[object Uint32Array]",yt=/\b__p \+= '';/g,dt=/\b(__p \+=) '' \+/g,bt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/&(?:amp|lt|gt|quot|#39);/g,mt=/[&<>"']/g,xt=RegExp(wt.source),jt=RegExp(mt.source),At=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,It=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rt=/^\w*$/,zt=/^\./,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Wt=RegExp(St.source),Lt=/^\s+|\s+$/g,Ct=/^\s+/,Ut=/\s+$/,Bt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,Dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mt=/\\(\\)?/g,Ft=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Nt=/\w*$/,Pt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Zt=/^\[object .+?Constructor\]$/,Kt=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht=/($^)/,Jt=/['\n\r\u2028\u2029\\]/g,Yt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",nr="\\u20d0-\\u20ff",tr=Qt+Xt+nr,rr="\\u2700-\\u27bf",er="a-z\\xdf-\\xf6\\xf8-\\xff",ur="\\xac\\xb1\\xd7\\xf7",ir="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",or="\\u2000-\\u206f",fr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ar="A-Z\\xc0-\\xd6\\xd8-\\xde",cr="\\ufe0e\\ufe0f",lr=ur+ir+or+fr,sr="['â€™]",hr="["+Yt+"]",pr="["+lr+"]",vr="["+tr+"]",_r="\\d+",gr="["+rr+"]",yr="["+er+"]",dr="[^"+Yt+lr+_r+rr+er+ar+"]",br="\\ud83c[\\udffb-\\udfff]",wr="(?:"+vr+"|"+br+")",mr="[^"+Yt+"]",xr="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ar="["+ar+"]",kr="\\u200d",Or="(?:"+yr+"|"+dr+")",Ir="(?:"+Ar+"|"+dr+")",Rr="(?:"+sr+"(?:d|ll|m|re|s|t|ve))?",zr="(?:"+sr+"(?:D|LL|M|RE|S|T|VE))?",Er=wr+"?",Sr="["+cr+"]?",Wr="(?:"+kr+"(?:"+[mr,xr,jr].join("|")+")"+Sr+Er+")*",Lr="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",Cr="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",Ur=Sr+Er+Wr,Br="(?:"+[gr,xr,jr].join("|")+")"+Ur,Tr="(?:"+[mr+vr+"?",vr,xr,jr,hr].join("|")+")",$r=RegExp(sr,"g"),Dr=RegExp(vr,"g"),Mr=RegExp(br+"(?="+br+")|"+Tr+Ur,"g"),Fr=RegExp([Ar+"?"+yr+"+"+Rr+"(?="+[pr,Ar,"$"].join("|")+")",Ir+"+"+zr+"(?="+[pr,Ar+Or,"$"].join("|")+")",Ar+"?"+Or+"+"+Rr,Ar+"+"+zr,Cr,Lr,_r,Br].join("|"),"g"),Nr=RegExp("["+kr+Yt+tr+cr+"]"),Pr=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zr=-1,Kr={};Kr[at]=Kr[ct]=Kr[lt]=Kr[st]=Kr[ht]=Kr[pt]=Kr[vt]=Kr[_t]=Kr[gt]=!0,Kr[$n]=Kr[Dn]=Kr[ot]=Kr[Fn]=Kr[ft]=Kr[Nn]=Kr[qn]=Kr[Zn]=Kr[Vn]=Kr[Gn]=Kr[Jn]=Kr[Xn]=Kr[nt]=Kr[tt]=Kr[ut]=!1;var Vr={};Vr[$n]=Vr[Dn]=Vr[ot]=Vr[ft]=Vr[Fn]=Vr[Nn]=Vr[at]=Vr[ct]=Vr[lt]=Vr[st]=Vr[ht]=Vr[Vn]=Vr[Gn]=Vr[Jn]=Vr[Xn]=Vr[nt]=Vr[tt]=Vr[rt]=Vr[pt]=Vr[vt]=Vr[_t]=Vr[gt]=!0,Vr[qn]=Vr[Zn]=Vr[ut]=!1;var Gr={"Ã€":"A","Ã�":"A","Ã‚":"A","Ãƒ":"A","Ã„":"A","Ã…":"A","Ã ":"a","Ã¡":"a","Ã¢":"a","Ã£":"a","Ã¤":"a","Ã¥":"a","Ã‡":"C","Ã§":"c","Ã�":"D","Ã°":"d","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","Ã‹":"E","Ã¨":"e","Ã©":"e","Ãª":"e","Ã«":"e","ÃŒ":"I","Ã�":"I","ÃŽ":"I","Ã�":"I","Ã¬":"i","Ã­":"i","Ã®":"i","Ã¯":"i","Ã‘":"N","Ã±":"n","Ã’":"O","Ã“":"O","Ã”":"O","Ã•":"O","Ã–":"O","Ã˜":"O","Ã²":"o","Ã³":"o","Ã´":"o","Ãµ":"o","Ã¶":"o","Ã¸":"o","Ã™":"U","Ãš":"U","Ã›":"U","Ãœ":"U","Ã¹":"u","Ãº":"u","Ã»":"u","Ã¼":"u","Ã�":"Y","Ã½":"y","Ã¿":"y","Ã†":"Ae","Ã¦":"ae","Ãž":"Th","Ã¾":"th","ÃŸ":"ss","Ä€":"A","Ä‚":"A","Ä„":"A","Ä�":"a","Äƒ":"a","Ä…":"a","Ä†":"C","Äˆ":"C","ÄŠ":"C","ÄŒ":"C","Ä‡":"c","Ä‰":"c","Ä‹":"c","Ä�":"c","ÄŽ":"D","Ä�":"D","Ä�":"d","Ä‘":"d","Ä’":"E","Ä”":"E","Ä–":"E","Ä˜":"E","Äš":"E","Ä“":"e","Ä•":"e","Ä—":"e","Ä™":"e","Ä›":"e","Äœ":"G","Äž":"G","Ä ":"G","Ä¢":"G","Ä�":"g","ÄŸ":"g","Ä¡":"g","Ä£":"g","Ä¤":"H","Ä¦":"H","Ä¥":"h","Ä§":"h","Ä¨":"I","Äª":"I","Ä¬":"I","Ä®":"I","Ä°":"I","Ä©":"i","Ä«":"i","Ä­":"i","Ä¯":"i","Ä±":"i","Ä´":"J","Äµ":"j","Ä¶":"K","Ä·":"k","Ä¸":"k","Ä¹":"L","Ä»":"L","Ä½":"L","Ä¿":"L","Å�":"L","Äº":"l","Ä¼":"l","Ä¾":"l","Å€":"l","Å‚":"l","Åƒ":"N","Å…":"N","Å‡":"N","ÅŠ":"N","Å„":"n","Å†":"n","Åˆ":"n","Å‹":"n","ÅŒ":"O","ÅŽ":"O","Å�":"O","Å�":"o","Å�":"o","Å‘":"o","Å”":"R","Å–":"R","Å˜":"R","Å•":"r","Å—":"r","Å™":"r","Åš":"S","Åœ":"S","Åž":"S","Å ":"S","Å›":"s","Å�":"s","ÅŸ":"s","Å¡":"s","Å¢":"T","Å¤":"T","Å¦":"T","Å£":"t","Å¥":"t","Å§":"t","Å¨":"U","Åª":"U","Å¬":"U","Å®":"U","Å°":"U","Å²":"U","Å©":"u","Å«":"u","Å­":"u","Å¯":"u","Å±":"u","Å³":"u","Å´":"W","Åµ":"w","Å¶":"Y","Å·":"y","Å¸":"Y","Å¹":"Z","Å»":"Z","Å½":"Z","Åº":"z","Å¼":"z","Å¾":"z","Ä²":"IJ","Ä³":"ij","Å’":"Oe","Å“":"oe","Å‰":"'n","Å¿":"s"},Hr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Yr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qr=parseFloat,Xr=parseInt,ne="object"==typeof global&&global&&global.Object===Object&&global,te="object"==typeof self&&self&&self.Object===Object&&self,re=ne||te||Function("return this")(),ee="object"==typeof exports&&exports&&!exports.nodeType&&exports,ue=ee&&"object"==typeof module&&module&&!module.nodeType&&module,ie=ue&&ue.exports===ee,oe=ie&&ne.process,fe=function(){try{return oe&&oe.binding&&oe.binding("util")}catch(n){}}(),ae=fe&&fe.isArrayBuffer,ce=fe&&fe.isDate,le=fe&&fe.isMap,se=fe&&fe.isRegExp,he=fe&&fe.isSet,pe=fe&&fe.isTypedArray,ve=j("length"),_e=A(Gr),ge=A(Hr),ye=A(Jr),de=function _(A){function K(n){if(ca(n)&&!wh(n)&&!(n instanceof Dt)){if(n instanceof Y)return n;if(wl.call(n,"__wrapped__"))return uo(n)}return new Y(n)}function J(){}function Y(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=X}function Dt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Cn,this.__views__=[]}function Yt(){var n=new Dt(this.__wrapped__);return n.__actions__=Fu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Fu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Fu(this.__views__),n}function Qt(){if(this.__filtered__){var n=new Dt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Xt(){var n=this.__wrapped__.value(),t=this.__dir__,r=wh(n),e=t<0,u=r?n.length:0,i=Ii(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Jl(a,this.__takeCount__);if(!r||u<tn||u==a&&p==a)return xu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==Rn)g=w;else if(!w){if(b==In)continue n;break n}}v[h++]=g}return v}function nr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function tr(){this.__data__=os?os(null):{},this.size=0}function rr(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function er(n){var t=this.__data__;if(os){var r=t[n];return r===un?X:r}return wl.call(t,n)?t[n]:X}function ur(n){var t=this.__data__;return os?t[n]!==X:wl.call(t,n)}function ir(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=os&&t===X?un:t,this}function or(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function fr(){this.__data__=[],this.size=0}function ar(n){var t=this.__data__,r=Cr(t,n);if(r<0)return!1;var e=t.length-1;return r==e?t.pop():Cl.call(t,r,1),--this.size,!0}function cr(n){var t=this.__data__,r=Cr(t,n);return r<0?X:t[r][1]}function lr(n){return Cr(this.__data__,n)>-1}function sr(n,t){var r=this.__data__,e=Cr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function hr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function pr(){this.size=0,this.__data__={hash:new nr,map:new(rs||or),string:new nr}}function vr(n){var t=ji(this,n).delete(n);return this.size-=t?1:0,t}function _r(n){return ji(this,n).get(n)}function gr(n){return ji(this,n).has(n)}function yr(n,t){var r=ji(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function dr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new hr;++t<r;)this.add(n[t])}function br(n){return this.__data__.set(n,un),this}function wr(n){return this.__data__.has(n)}function mr(n){var t=this.__data__=new or(n);this.size=t.size}function xr(){this.__data__=new or,this.size=0}function jr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function Ar(n){return this.__data__.get(n)}function kr(n){return this.__data__.has(n)}function Or(n,t){var r=this.__data__;if(r instanceof or){var e=r.__data__;if(!rs||e.length<tn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new hr(e)}return r.set(n,t),this.size=r.size,this}function Ir(n,t){var r=wh(n),e=!r&&bh(n),u=!r&&!e&&xh(n),i=!r&&!e&&!u&&Ih(n),o=r||e||u||i,f=o?R(n.length,pl):[],a=f.length;for(var c in n)!t&&!wl.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ui(c,a))||f.push(c);return f}function Rr(n){var t=n.length;return t?n[eu(0,t-1)]:X}function zr(n,t){return no(Fu(n),Nr(t,0,n.length))}function Er(n){return no(Fu(n))}function Sr(n,t,r,e){return n===X||Hf(n,yl[r])&&!wl.call(e,r)?t:n}function Wr(n,t,r){(r===X||Hf(n[t],r))&&(r!==X||t in n)||Mr(n,t,r)}function Lr(n,t,r){var e=n[t];wl.call(n,t)&&Hf(e,r)&&(r!==X||t in n)||Mr(n,t,r)}function Cr(n,t){for(var r=n.length;r--;)if(Hf(n[r][0],t))return r;return-1}function Ur(n,t,r,e){return ds(n,function(n,u,i){t(e,n,r(n),i)}),e}function Br(n,t){return n&&Nu(t,qa(t),n)}function Tr(n,t){return n&&Nu(t,Za(t),n)}function Mr(n,t,r){"__proto__"==t&&$l?$l(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Fr(n,t){for(var r=-1,e=t.length,u=ol(e),i=null==n;++r<e;)u[r]=i?X:Fa(n,t[r]);return u}function Nr(n,t,r){return n===n&&(r!==X&&(n=n<=r?n:r),t!==X&&(n=n>=t?n:t)),n}function Pr(n,t,r,e,i,o){var f,a=t&an,c=t&cn,l=t&ln;if(r&&(f=i?r(n,e,i,o):r(n)),f!==X)return f;if(!aa(n))return n;var s=wh(n);if(s){if(f=Ei(n),!a)return Fu(n,f)}else{var h=Es(n),p=h==Zn||h==Kn;if(xh(n))return zu(n,a);if(h==Jn||h==$n||p&&!i){if(f=c||p?{}:Si(n),!a)return c?qu(n,Tr(f,n)):Pu(n,Br(f,n))}else{if(!Vr[h])return i?n:{};f=Wi(n,h,Pr,a)}}o||(o=new mr);var v=o.get(n);if(v)return v;o.set(n,f);var _=l?c?bi:di:c?Za:qa,g=s?X:_(n);return u(g||n,function(e,u){g&&(u=e,e=n[u]),Lr(f,u,Pr(e,t,r,u,n,o))}),f}function Gr(n){var t=qa(n);return function(r){return Hr(r,n,t)}}function Hr(n,t,r){var e=r.length;if(null==n)return!e;for(n=sl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===X&&!(u in n)||!i(o))return!1}return!0}function Jr(n,t,r){if("function"!=typeof n)throw new vl(en);return Ls(function(){n.apply(X,r)},t)}function Yr(n,t,r,e){var u=-1,i=a,o=!0,f=n.length,s=[],h=t.length;if(!f)return s;r&&(t=l(t,E(r))),e?(i=c,o=!1):t.length>=tn&&(i=W,o=!1,t=new dr(t));n:for(;++u<f;){var p=n[u],v=null==r?p:r(p);if(p=e||0!==p?p:0,o&&v===v){for(var _=h;_--;)if(t[_]===v)continue n;s.push(p)}else i(t,v,e)||s.push(p)}return s}function ne(n,t){var r=!0;return ds(n,function(n,e,u){return r=!!t(n,e,u)}),r}function te(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===X?o===o&&!wa(o):r(o,f)))var f=o,a=i}return a}function ee(n,t,r,e){var u=n.length;for(r=Oa(r),r<0&&(r=-r>u?0:u+r),e=e===X||e>u?u:Oa(e),e<0&&(e+=u),e=r>e?0:Ia(e);r<e;)n[r++]=t;return n}function ue(n,t){var r=[];return ds(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function oe(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ci),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?oe(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function fe(n,t){return n&&ws(n,t,qa)}function ve(n,t){return n&&ms(n,t,qa)}function de(n,t){return f(t,function(t){return ia(n[t])})}function we(n,t){t=Iu(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[to(t[r++])];return r&&r==e?n:X}function me(n,t,r){var e=t(n);return wh(n)?e:s(e,r(n))}function xe(n){return null==n?n===X?et:Hn:(n=sl(n),Tl&&Tl in n?Oi(n):Gi(n))}function je(n,t){return n>t}function Ae(n,t){return null!=n&&wl.call(n,t)}function ke(n,t){return null!=n&&t in sl(n)}function Oe(n,t,r){return n>=Jl(t,r)&&n<Hl(t,r)}function Ie(n,t,r){for(var e=r?c:a,u=n[0].length,i=n.length,o=i,f=ol(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,E(t))),s=Jl(p.length,s),f[o]=!r&&(t||u>=120&&p.length>=120)?new dr(o&&p):X}p=n[0];var v=-1,_=f[0];n:for(;++v<u&&h.length<s;){var g=p[v],y=t?t(g):g;if(g=r||0!==g?g:0,!(_?W(_,y):e(h,y,r))){for(o=i;--o;){var d=f[o];if(!(d?W(d,y):e(n[o],y,r)))continue n}_&&_.push(y),h.push(g)}}return h}function Re(n,t,r,e){return fe(n,function(n,u,i){t(e,r(n),u,i)}),e}function ze(n,t,e){t=Iu(t,n),n=Ji(n,t);var u=null==n?n:n[to(Ao(t))];return null==u?X:r(u,n,e)}function Ee(n){return ca(n)&&xe(n)==$n}function Se(n){return ca(n)&&xe(n)==ot}function We(n){return ca(n)&&xe(n)==Nn}function Le(n,t,r,e,u){return n===t||(null==n||null==t||!aa(n)&&!ca(t)?n!==n&&t!==t:Ce(n,t,r,e,Le,u))}function Ce(n,t,r,e,u,i){var o=wh(n),f=wh(t),a=Dn,c=Dn;o||(a=Es(n),a=a==$n?Jn:a),f||(c=Es(t),c=c==$n?Jn:c);var l=a==Jn,s=c==Jn,h=a==c;if(h&&xh(n)){if(!xh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new mr),o||Ih(n)?vi(n,t,r,e,u,i):_i(n,t,a,r,e,u,i);if(!(r&sn)){var p=l&&wl.call(n,"__wrapped__"),v=s&&wl.call(t,"__wrapped__");if(p||v){var _=p?n.value():n,g=v?t.value():t;return i||(i=new mr),u(_,g,r,e,i)}}return!!h&&(i||(i=new mr),gi(n,t,r,e,u,i))}function Ue(n){return ca(n)&&Es(n)==Vn}function Be(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=sl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var a=f[0],c=n[a],l=f[1];if(o&&f[2]){if(c===X&&!(a in n))return!1}else{var s=new mr;if(e)var h=e(c,l,a,n,t,s);if(!(h===X?Le(l,c,sn|hn,e,s):h))return!1}}return!0}function Te(n){if(!aa(n)||Mi(n))return!1;var t=ia(n)?Ol:Zt;return t.test(ro(n))}function $e(n){return ca(n)&&xe(n)==Xn}function De(n){return ca(n)&&Es(n)==nt}function Me(n){return ca(n)&&fa(n.length)&&!!Kr[xe(n)]}function Fe(n){return"function"==typeof n?n:null==n?Cc:"object"==typeof n?wh(n)?Ve(n[0],n[1]):Ke(n):Nc(n)}function Ne(n){if(!Fi(n))return Gl(n);var t=[];for(var r in sl(n))wl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Pe(n){if(!aa(n))return Vi(n);var t=Fi(n),r=[];for(var e in n)("constructor"!=e||!t&&wl.call(n,e))&&r.push(e);return r}function qe(n,t){return n<t}function Ze(n,t){var r=-1,e=Jf(n)?ol(n.length):[];return ds(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ke(n){var t=Ai(n);return 1==t.length&&t[0][2]?Pi(t[0][0],t[0][1]):function(r){return r===n||Be(r,n,t)}}function Ve(n,t){return Ti(n)&&Ni(t)?Pi(to(n),t):function(r){var e=Fa(r,n);return e===X&&e===t?Pa(r,n):Le(t,e,sn|hn)}}function Ge(n,t,r,e,u){n!==t&&ws(t,function(i,o){if(aa(i))u||(u=new mr),He(n,t,o,r,Ge,e,u);else{var f=e?e(n[o],i,o+"",n,t,u):X;f===X&&(f=i),Wr(n,o,f)}},Za)}function He(n,t,r,e,u,i,o){var f=n[r],a=t[r],c=o.get(a);if(c)return void Wr(n,r,c);var l=i?i(f,a,r+"",n,t,o):X,s=l===X;if(s){var h=wh(a),p=!h&&xh(a),v=!h&&!p&&Ih(a);l=a,h||p||v?wh(f)?l=f:Yf(f)?l=Fu(f):p?(s=!1,l=zu(a,!0)):v?(s=!1,l=Bu(a,!0)):l=[]:ya(a)||bh(a)?(l=f,bh(f)?l=za(f):(!aa(f)||e&&ia(f))&&(l=Si(a))):s=!1}s&&(o.set(a,l),u(l,a,e,i,o),o.delete(a)),Wr(n,r,l)}function Je(n,t){var r=n.length;if(r)return t+=t<0?r:0,Ui(t,r)?n[t]:X}function Ye(n,t,r){var e=-1;t=l(t.length?t:[Cc],E(xi()));var u=Ze(n,function(n,r,u){var i=l(t,function(t){return t(n)});return{criteria:i,index:++e,value:n}});return O(u,function(n,t){return $u(n,t,r)})}function Qe(n,t){return n=sl(n),Xe(n,t,function(t,r){return Pa(n,r)})}function Xe(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=we(n,o);r(f,o)&&cu(i,Iu(o,n),f)}return i}function nu(n){return function(t){return we(t,n)}}function tu(n,t,r,e){var u=e?w:b,i=-1,o=t.length,f=n;for(n===t&&(t=Fu(t)),r&&(f=l(n,E(r)));++i<o;)for(var a=0,c=t[i],s=r?r(c):c;(a=u(f,s,a,e))>-1;)f!==n&&Cl.call(f,a,1),Cl.call(n,a,1);return n}function ru(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Ui(u)?Cl.call(n,u,1):bu(n,u)}}return n}function eu(n,t){return n+Pl(Xl()*(t-n+1))}function uu(n,t,r,e){for(var u=-1,i=Hl(Nl((t-n)/(r||1)),0),o=ol(i);i--;)o[e?i:++u]=n,n+=r;return o}function iu(n,t){var r="";if(!n||t<1||t>Sn)return r;do t%2&&(r+=n),t=Pl(t/2),t&&(n+=n);while(t);return r}function ou(n,t){return Cs(Hi(n,t,Cc),n+"")}function fu(n){return Rr(ec(n))}function au(n,t){var r=ec(n);return no(r,Nr(t,0,r.length))}function cu(n,t,r,e){if(!aa(n))return n;t=Iu(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=to(t[u]),c=r;if(u!=o){var l=f[a];c=e?e(l,a,f):X,c===X&&(c=aa(l)?l:Ui(t[u+1])?[]:{})}Lr(f,a,c),f=f[a]}return n}function lu(n){return no(ec(n))}function su(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=ol(u);++e<u;)i[e]=n[e+t];return i}function hu(n,t){var r;return ds(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function pu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Bn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wa(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return vu(n,t,Cc,r)}function vu(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,a=wa(t),c=t===X;u<i;){var l=Pl((u+i)/2),s=r(n[l]),h=s!==X,p=null===s,v=s===s,_=wa(s);if(o)var g=e||v;else g=c?v&&(e||h):f?v&&h&&(e||!p):a?v&&h&&!p&&(e||!_):!p&&!_&&(e?s<=t:s<t);g?u=l+1:i=l}return Jl(i,Un)}function _u(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Hf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function gu(n){return"number"==typeof n?n:wa(n)?Ln:+n}function yu(n){if("string"==typeof n)return n;if(wh(n))return l(n,yu)+"";if(wa(n))return gs?gs.call(n):"";var t=n+"";return"0"==t&&1/n==-En?"-0":t}function du(n,t,r){var e=-1,u=a,i=n.length,o=!0,f=[],l=f;if(r)o=!1,u=c;else if(i>=tn){var s=t?null:Os(n);if(s)return q(s);o=!1,u=W,l=new dr}else l=t?[]:f;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,o&&p===p){for(var v=l.length;v--;)if(l[v]===p)continue n;t&&l.push(p),f.push(h)}else u(l,p,r)||(l!==f&&l.push(p),f.push(h))}return f}function bu(n,t){return t=Iu(t,n),n=Ji(n,t),null==n||delete n[to(Ao(t))]}function wu(n,t,r,e){return cu(n,t,r(we(n,t)),e)}function mu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?su(n,e?0:i,e?i+1:u):su(n,e?i+1:0,e?u:i)}function xu(n,t){var r=n;return r instanceof Dt&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function ju(n,t,r){var e=n.length;if(e<2)return e?du(n[0]):[];for(var u=-1,i=ol(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Yr(i[u]||o,n[f],t,r));return du(oe(i,1),t,r)}function Au(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){var f=e<i?t[e]:X;r(o,n[e],f)}return o}function ku(n){return Yf(n)?n:[]}function Ou(n){return"function"==typeof n?n:Cc}function Iu(n,t){return wh(n)?n:Ti(n,t)?[n]:Us(Sa(n))}function Ru(n,t,r){var e=n.length;return r=r===X?e:r,!t&&r>=e?n:su(n,t,r)}function zu(n,t){if(t)return n.slice();var r=n.length,e=El?El(r):new n.constructor(r);return n.copy(e),e}function Eu(n){var t=new n.constructor(n.byteLength);return new zl(t).set(new zl(n)),t}function Su(n,t){var r=t?Eu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}function Wu(t,r,e){var u=r?e(F(t),an):F(t);return h(u,n,new t.constructor)}function Lu(n){var t=new n.constructor(n.source,Nt.exec(n));return t.lastIndex=n.lastIndex,t}function Cu(n,r,e){var u=r?e(q(n),an):q(n);return h(u,t,new n.constructor)}function Uu(n){return _s?sl(_s.call(n)):{}}function Bu(n,t){var r=t?Eu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Tu(n,t){if(n!==t){var r=n!==X,e=null===n,u=n===n,i=wa(n),o=t!==X,f=null===t,a=t===t,c=wa(t);if(!f&&!c&&!i&&n>t||i&&o&&a&&!f&&!c||e&&o&&a||!r&&a||!u)return 1;if(!e&&!i&&!c&&n<t||c&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!a)return-1}return 0}function $u(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Tu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}function Du(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=Hl(i-o,0),l=ol(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function Mu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=Hl(i-f,0),s=ol(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Fu(n,t){var r=-1,e=n.length;for(t||(t=ol(e));++r<e;)t[r]=n[r];return t}function Nu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],a=e?e(r[f],n[f],f,r,n):X;a===X&&(a=n[f]),u?Mr(r,f,a):Lr(r,f,a)}return r}function Pu(n,t){return Nu(n,Rs(n),t)}function qu(n,t){return Nu(n,zs(n),t)}function Zu(n,t){return function(r,u){var i=wh(r)?e:Ur,o=t?t():{};return i(r,n,xi(u,2),o)}}function Ku(n){return ou(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:X,o=u>2?r[2]:X;for(i=n.length>3&&"function"==typeof i?(u--,i):X,o&&Bi(r[0],r[1],o)&&(i=u<3?X:i,u=1),t=sl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Vu(n,t){return function(r,e){if(null==r)return r;if(!Jf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=sl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Gu(n){return function(t,r,e){for(var u=-1,i=sl(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(r(i[a],a,i)===!1)break}return t}}function Hu(n,t,r){function e(){var t=this&&this!==re&&this instanceof e?i:n;return t.apply(u?r:this,arguments)}var u=t&pn,i=Qu(n);return e}function Ju(n){return function(t){t=Sa(t);var r=$(t)?H(t):X,e=r?r[0]:t.charAt(0),u=r?Ru(r,1).join(""):t.slice(1);return e[n]()+u}}function Yu(n){return function(t){return h(zc(cc(t).replace($r,"")),n,"")}}function Qu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ys(n.prototype),e=n.apply(r,t);return aa(e)?e:r}}function Xu(n,t,e){function u(){for(var o=arguments.length,f=ol(o),a=o,c=mi(u);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:P(f,c);if(o-=l.length,o<e)return li(n,t,ri,u.placeholder,X,f,l,X,X,e-o);var s=this&&this!==re&&this instanceof u?i:n;return r(s,this,f)}var i=Qu(n);return u}function ni(n){return function(t,r,e){var u=sl(t);if(!Jf(t)){var i=xi(r,3);t=qa(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:X}}function ti(n){return yi(function(t){var r=t.length,e=r,u=Y.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new vl(en);if(u&&!o&&"wrapper"==wi(i))var o=new Y([],!0)}for(e=o?e:r;++e<r;){i=t[e];var f=wi(i),a="wrapper"==f?Is(i):X;o=a&&Di(a[0])&&a[1]==(wn|gn|dn|mn)&&!a[4].length&&1==a[9]?o[wi(a[0])].apply(o,a[3]):1==i.length&&Di(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&wh(e)&&e.length>=tn)return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function ri(n,t,r,e,u,i,o,f,a,c){function l(){for(var y=arguments.length,d=ol(y),b=y;b--;)d[b]=arguments[b];if(v)var w=mi(l),m=U(d,w);if(e&&(d=Du(d,e,u,v)),i&&(d=Mu(d,i,o,v)),y-=m,v&&y<c){var x=P(d,w);return li(n,t,ri,l.placeholder,r,d,x,f,a,c-y)}var j=h?r:this,A=p?j[n]:n;return y=d.length,f?d=Yi(d,f):_&&y>1&&d.reverse(),s&&a<y&&(d.length=a),this&&this!==re&&this instanceof l&&(A=g||Qu(A)),A.apply(j,d)}var s=t&wn,h=t&pn,p=t&vn,v=t&(gn|yn),_=t&xn,g=p?X:Qu(n);return l}function ei(n,t){return function(r,e){return Re(r,n,t(e),{})}}function ui(n,t){return function(r,e){var u;if(r===X&&e===X)return t;if(r!==X&&(u=r),e!==X){if(u===X)return e;"string"==typeof r||"string"==typeof e?(r=yu(r),e=yu(e)):(r=gu(r),e=gu(e)),u=n(r,e)}return u}}function ii(n){return yi(function(t){return t=l(t,E(xi())),ou(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function oi(n,t){t=t===X?" ":yu(t);var r=t.length;if(r<2)return r?iu(t,n):t;var e=iu(t,Nl(n/G(t)));return $(t)?Ru(H(e),0,n).join(""):e.slice(0,n)}function fi(n,t,e,u){function i(){for(var t=-1,a=arguments.length,c=-1,l=u.length,s=ol(l+a),h=this&&this!==re&&this instanceof i?f:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++t];return r(h,o?e:this,s)}var o=t&pn,f=Qu(n);return i}function ai(n){return function(t,r,e){return e&&"number"!=typeof e&&Bi(t,r,e)&&(r=e=X),t=ka(t),r===X?(r=t,t=0):r=ka(r),e=e===X?t<r?1:-1:ka(e),uu(t,r,e,n)}}function ci(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=Ra(t),r=Ra(r)),n(t,r)}}function li(n,t,r,e,u,i,o,f,a,c){var l=t&gn,s=l?o:X,h=l?X:o,p=l?i:X,v=l?X:i;t|=l?dn:bn,t&=~(l?bn:dn),t&_n||(t&=~(pn|vn));var _=[n,t,u,p,s,v,h,f,a,c],g=r.apply(X,_);return Di(n)&&Ws(g,_),g.placeholder=e,Qi(g,n,t)}function si(n){var t=ll[n];return function(n,r){if(n=Ra(n),r=Jl(Oa(r),292)){var e=(Sa(n)+"e").split("e"),u=t(e[0]+"e"+(+e[1]+r));return e=(Sa(u)+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function hi(n){return function(t){var r=Es(t);return r==Vn?F(t):r==nt?Z(t):z(t,n(t))}}function pi(n,t,r,e,u,i,o,f){var a=t&vn;if(!a&&"function"!=typeof n)throw new vl(en);var c=e?e.length:0;if(c||(t&=~(dn|bn),e=u=X),o=o===X?o:Hl(Oa(o),0),f=f===X?f:Oa(f),c-=u?u.length:0,t&bn){var l=e,s=u;e=u=X}var h=a?X:Is(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Zi(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=null==p[9]?a?0:n.length:Hl(p[9]-c,0),!f&&t&(gn|yn)&&(t&=~(gn|yn)),t&&t!=pn)v=t==gn||t==yn?Xu(n,t,f):t!=dn&&t!=(pn|dn)||u.length?ri.apply(X,p):fi(n,t,r,e);else var v=Hu(n,t,r);var _=h?xs:Ws;return Qi(_(v,p),n,t)}function vi(n,t,r,e,u,i){var o=r&sn,f=n.length,a=t.length;if(f!=a&&!(o&&a>f))return!1;var c=i.get(n);if(c&&i.get(t))return c==t;var l=-1,s=!0,h=r&hn?new dr:X;for(i.set(n,t),i.set(t,n);++l<f;){var p=n[l],_=t[l];if(e)var g=o?e(_,p,l,t,n,i):e(p,_,l,n,t,i);if(g!==X){if(g)continue;s=!1;break}if(h){if(!v(t,function(n,t){if(!W(h,t)&&(p===n||u(p,n,r,e,i)))return h.push(t)})){s=!1;break}}else if(p!==_&&!u(p,_,r,e,i)){s=!1;break}}return i.delete(n),i.delete(t),s}function _i(n,t,r,e,u,i,o){switch(r){case ft:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case ot:return!(n.byteLength!=t.byteLength||!i(new zl(n),new zl(t)));case Fn:case Nn:case Gn:return Hf(+n,+t);case qn:return n.name==t.name&&n.message==t.message;case Xn:case tt:return n==t+"";case Vn:var f=F;case nt:var a=e&sn;if(f||(f=q),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=hn,o.set(n,t);var l=vi(f(n),f(t),e,u,i,o);return o.delete(n),l;case rt:if(_s)return _s.call(n)==_s.call(t)}return!1}function gi(n,t,r,e,u,i){var o=r&sn,f=qa(n),a=f.length,c=qa(t),l=c.length;if(a!=l&&!o)return!1;for(var s=a;s--;){var h=f[s];if(!(o?h in t:wl.call(t,h)))return!1}var p=i.get(n);if(p&&i.get(t))return p==t;var v=!0;i.set(n,t),i.set(t,n);for(var _=o;++s<a;){h=f[s];var g=n[h],y=t[h];if(e)var d=o?e(y,g,h,t,n,i):e(g,y,h,n,t,i);if(!(d===X?g===y||u(g,y,r,e,i):d)){v=!1;break}_||(_="constructor"==h)}if(v&&!_){var b=n.constructor,w=t.constructor;b!=w&&"constructor"in n&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(v=!1);
}return i.delete(n),i.delete(t),v}function yi(n){return Cs(Hi(n,X,_o),n+"")}function di(n){return me(n,qa,Rs)}function bi(n){return me(n,Za,zs)}function wi(n){for(var t=n.name+"",r=as[t],e=wl.call(as,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function mi(n){var t=wl.call(K,"placeholder")?K:n;return t.placeholder}function xi(){var n=K.iteratee||Uc;return n=n===Uc?Fe:n,arguments.length?n(arguments[0],arguments[1]):n}function ji(n,t){var r=n.__data__;return $i(t)?r["string"==typeof t?"string":"hash"]:r.map}function Ai(n){for(var t=qa(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Ni(u)]}return t}function ki(n,t){var r=T(n,t);return Te(r)?r:X}function Oi(n){var t=wl.call(n,Tl),r=n[Tl];try{n[Tl]=X;var e=!0}catch(n){}var u=jl.call(n);return e&&(t?n[Tl]=r:delete n[Tl]),u}function Ii(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Jl(t,n+o);break;case"takeRight":n=Hl(n,t-o)}}return{start:n,end:t}}function Ri(n){var t=n.match(Tt);return t?t[1].split($t):[]}function zi(n,t,r){t=Iu(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=to(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&fa(u)&&Ui(o,u)&&(wh(n)||bh(n)))}function Ei(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&wl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Si(n){return"function"!=typeof n.constructor||Fi(n)?{}:ys(Sl(n))}function Wi(n,t,r,e){var u=n.constructor;switch(t){case ot:return Eu(n);case Fn:case Nn:return new u(+n);case ft:return Su(n,e);case at:case ct:case lt:case st:case ht:case pt:case vt:case _t:case gt:return Bu(n,e);case Vn:return Wu(n,e,r);case Gn:case tt:return new u(n);case Xn:return Lu(n);case nt:return Cu(n,e,r);case rt:return Uu(n)}}function Li(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Bt,"{\n/* [wrapped with "+t+"] */\n")}function Ci(n){return wh(n)||bh(n)||!!(Ul&&n&&n[Ul])}function Ui(n,t){return t=null==t?Sn:t,!!t&&("number"==typeof n||Vt.test(n))&&n>-1&&n%1==0&&n<t}function Bi(n,t,r){if(!aa(r))return!1;var e=typeof t;return!!("number"==e?Jf(r)&&Ui(t,r.length):"string"==e&&t in r)&&Hf(r[t],n)}function Ti(n,t){if(wh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wa(n))||(Rt.test(n)||!It.test(n)||null!=t&&n in sl(t))}function $i(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Di(n){var t=wi(n),r=K[t];if("function"!=typeof r||!(t in Dt.prototype))return!1;if(n===r)return!0;var e=Is(r);return!!e&&n===e[0]}function Mi(n){return!!xl&&xl in n}function Fi(n){var t=n&&n.constructor,r="function"==typeof t&&t.prototype||yl;return n===r}function Ni(n){return n===n&&!aa(n)}function Pi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==X||n in sl(r)))}}function qi(n){var t=Uf(n,function(n){return r.size===on&&r.clear(),n}),r=t.cache;return t}function Zi(n,t){var r=n[1],e=t[1],u=r|e,i=u<(pn|vn|wn),o=e==wn&&r==gn||e==wn&&r==mn&&n[7].length<=t[8]||e==(wn|mn)&&t[7].length<=t[8]&&r==gn;if(!i&&!o)return n;e&pn&&(n[2]=t[2],u|=r&pn?0:_n);var f=t[3];if(f){var a=n[3];n[3]=a?Du(a,f,t[4]):f,n[4]=a?P(n[3],fn):t[4]}return f=t[5],f&&(a=n[5],n[5]=a?Mu(a,f,t[6]):f,n[6]=a?P(n[5],fn):t[6]),f=t[7],f&&(n[7]=f),e&wn&&(n[8]=null==n[8]?t[8]:Jl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Ki(n,t,r,e,u,i){return aa(n)&&aa(t)&&(i.set(t,n),Ge(n,t,X,Ki,i),i.delete(t)),n}function Vi(n){var t=[];if(null!=n)for(var r in sl(n))t.push(r);return t}function Gi(n){return jl.call(n)}function Hi(n,t,e){return t=Hl(t===X?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Hl(u.length-t,0),f=ol(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=ol(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),r(n,this,a)}}function Ji(n,t){return t.length<2?n:we(n,su(t,0,-1))}function Yi(n,t){for(var r=n.length,e=Jl(t.length,r),u=Fu(n);e--;){var i=t[e];n[e]=Ui(i,r)?u[i]:X}return n}function Qi(n,t,r){var e=t+"";return Cs(n,Li(e,eo(Ri(e),r)))}function Xi(n){var t=0,r=0;return function(){var e=Yl(),u=On-(e-r);if(r=e,u>0){if(++t>=kn)return arguments[0]}else t=0;return n.apply(X,arguments)}}function no(n,t){var r=-1,e=n.length,u=e-1;for(t=t===X?e:t;++r<t;){var i=eu(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function to(n){if("string"==typeof n||wa(n))return n;var t=n+"";return"0"==t&&1/n==-En?"-0":t}function ro(n){if(null!=n){try{return bl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function eo(n,t){return u(Tn,function(r){var e="_."+r[0];t&r[1]&&!a(n,e)&&n.push(e)}),n.sort()}function uo(n){if(n instanceof Dt)return n.clone();var t=new Y(n.__wrapped__,n.__chain__);return t.__actions__=Fu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function io(n,t,r){t=(r?Bi(n,t,r):t===X)?1:Hl(Oa(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=ol(Nl(e/t));u<e;)o[i++]=su(n,u,u+=t);return o}function oo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function fo(){var n=arguments.length;if(!n)return[];for(var t=ol(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return s(wh(r)?Fu(r):[r],oe(t,1))}function ao(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Oa(t),su(n,t<0?0:t,e)):[]}function co(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Oa(t),t=e-t,su(n,0,t<0?0:t)):[]}function lo(n,t){return n&&n.length?mu(n,xi(t,3),!0,!0):[]}function so(n,t){return n&&n.length?mu(n,xi(t,3),!0):[]}function ho(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Bi(n,t,r)&&(r=0,e=u),ee(n,t,r,e)):[]}function po(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Oa(r);return u<0&&(u=Hl(e+u,0)),d(n,xi(t,3),u)}function vo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==X&&(u=Oa(r),u=r<0?Hl(e+u,0):Jl(u,e-1)),d(n,xi(t,3),u,!0)}function _o(n){var t=null==n?0:n.length;return t?oe(n,1):[]}function go(n){var t=null==n?0:n.length;return t?oe(n,En):[]}function yo(n,t){var r=null==n?0:n.length;return r?(t=t===X?1:Oa(t),oe(n,t)):[]}function bo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function wo(n){return n&&n.length?n[0]:X}function mo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Oa(r);return u<0&&(u=Hl(e+u,0)),b(n,t,u)}function xo(n){var t=null==n?0:n.length;return t?su(n,0,-1):[]}function jo(n,t){return null==n?"":Vl.call(n,t)}function Ao(n){var t=null==n?0:n.length;return t?n[t-1]:X}function ko(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==X&&(u=Oa(r),u=u<0?Hl(e+u,0):Jl(u,e-1)),t===t?V(n,t,u):d(n,m,u,!0)}function Oo(n,t){return n&&n.length?Je(n,Oa(t)):X}function Io(n,t){return n&&n.length&&t&&t.length?tu(n,t):n}function Ro(n,t,r){return n&&n.length&&t&&t.length?tu(n,t,xi(r,2)):n}function zo(n,t,r){return n&&n.length&&t&&t.length?tu(n,t,X,r):n}function Eo(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=xi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return ru(n,u),r}function So(n){return null==n?n:ns.call(n)}function Wo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Bi(n,t,r)?(t=0,r=e):(t=null==t?0:Oa(t),r=r===X?e:Oa(r)),su(n,t,r)):[]}function Lo(n,t){return pu(n,t)}function Co(n,t,r){return vu(n,t,xi(r,2))}function Uo(n,t){var r=null==n?0:n.length;if(r){var e=pu(n,t);if(e<r&&Hf(n[e],t))return e}return-1}function Bo(n,t){return pu(n,t,!0)}function To(n,t,r){return vu(n,t,xi(r,2),!0)}function $o(n,t){var r=null==n?0:n.length;if(r){var e=pu(n,t,!0)-1;if(Hf(n[e],t))return e}return-1}function Do(n){return n&&n.length?_u(n):[]}function Mo(n,t){return n&&n.length?_u(n,xi(t,2)):[]}function Fo(n){var t=null==n?0:n.length;return t?su(n,1,t):[]}function No(n,t,r){return n&&n.length?(t=r||t===X?1:Oa(t),su(n,0,t<0?0:t)):[]}function Po(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Oa(t),t=e-t,su(n,t<0?0:t,e)):[]}function qo(n,t){return n&&n.length?mu(n,xi(t,3),!1,!0):[]}function Zo(n,t){return n&&n.length?mu(n,xi(t,3)):[]}function Ko(n){return n&&n.length?du(n):[]}function Vo(n,t){return n&&n.length?du(n,xi(t,2)):[]}function Go(n,t){return t="function"==typeof t?t:X,n&&n.length?du(n,X,t):[]}function Ho(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(Yf(n))return t=Hl(n.length,t),!0}),R(t,function(t){return l(n,j(t))})}function Jo(n,t){if(!n||!n.length)return[];var e=Ho(n);return null==t?e:l(e,function(n){return r(t,X,n)})}function Yo(n,t){return Au(n||[],t||[],Lr)}function Qo(n,t){return Au(n||[],t||[],cu)}function Xo(n){var t=K(n);return t.__chain__=!0,t}function nf(n,t){return t(n),n}function tf(n,t){return t(n)}function rf(){return Xo(this)}function ef(){return new Y(this.value(),this.__chain__)}function uf(){this.__values__===X&&(this.__values__=Aa(this.value()));var n=this.__index__>=this.__values__.length,t=n?X:this.__values__[this.__index__++];return{done:n,value:t}}function of(){return this}function ff(n){for(var t,r=this;r instanceof J;){var e=uo(r);e.__index__=0,e.__values__=X,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function af(){var n=this.__wrapped__;if(n instanceof Dt){var t=n;return this.__actions__.length&&(t=new Dt(this)),t=t.reverse(),t.__actions__.push({func:tf,args:[So],thisArg:X}),new Y(t,this.__chain__)}return this.thru(So)}function cf(){return xu(this.__wrapped__,this.__actions__)}function lf(n,t,r){var e=wh(n)?o:ne;return r&&Bi(n,t,r)&&(t=X),e(n,xi(t,3))}function sf(n,t){var r=wh(n)?f:ue;return r(n,xi(t,3))}function hf(n,t){return oe(df(n,t),1)}function pf(n,t){return oe(df(n,t),En)}function vf(n,t,r){return r=r===X?1:Oa(r),oe(df(n,t),r)}function _f(n,t){var r=wh(n)?u:ds;return r(n,xi(t,3))}function gf(n,t){var r=wh(n)?i:bs;return r(n,xi(t,3))}function yf(n,t,r,e){n=Jf(n)?n:ec(n),r=r&&!e?Oa(r):0;var u=n.length;return r<0&&(r=Hl(u+r,0)),ba(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&b(n,t,r)>-1}function df(n,t){var r=wh(n)?l:Ze;return r(n,xi(t,3))}function bf(n,t,r,e){return null==n?[]:(wh(t)||(t=null==t?[]:[t]),r=e?X:r,wh(r)||(r=null==r?[]:[r]),Ye(n,t,r))}function wf(n,t,r){var e=wh(n)?h:k,u=arguments.length<3;return e(n,xi(t,4),r,u,ds)}function mf(n,t,r){var e=wh(n)?p:k,u=arguments.length<3;return e(n,xi(t,4),r,u,bs)}function xf(n,t){var r=wh(n)?f:ue;return r(n,Bf(xi(t,3)))}function jf(n){var t=wh(n)?Rr:fu;return t(n)}function Af(n,t,r){t=(r?Bi(n,t,r):t===X)?1:Oa(t);var e=wh(n)?zr:au;return e(n,t)}function kf(n){var t=wh(n)?Er:lu;return t(n)}function Of(n){if(null==n)return 0;if(Jf(n))return ba(n)?G(n):n.length;var t=Es(n);return t==Vn||t==nt?n.size:Ne(n).length}function If(n,t,r){var e=wh(n)?v:hu;return r&&Bi(n,t,r)&&(t=X),e(n,xi(t,3))}function Rf(n,t){if("function"!=typeof t)throw new vl(en);return n=Oa(n),function(){if(--n<1)return t.apply(this,arguments)}}function zf(n,t,r){return t=r?X:t,t=n&&null==t?n.length:t,pi(n,wn,X,X,X,X,t)}function Ef(n,t){var r;if("function"!=typeof t)throw new vl(en);return n=Oa(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=X),r}}function Sf(n,t,r){t=r?X:t;var e=pi(n,gn,X,X,X,X,X,t);return e.placeholder=Sf.placeholder,e}function Wf(n,t,r){t=r?X:t;var e=pi(n,yn,X,X,X,X,X,t);return e.placeholder=Wf.placeholder,e}function Lf(n,t,r){function e(t){var r=h,e=p;return h=p=X,d=t,_=n.apply(e,r)}function u(n){return d=n,g=Ls(f,t),b?e(n):_}function i(n){var r=n-y,e=n-d,u=t-r;return w?Jl(u,v-e):u}function o(n){var r=n-y,e=n-d;return y===X||r>=t||r<0||w&&e>=v}function f(){var n=ah();return o(n)?a(n):void(g=Ls(f,i(n)))}function a(n){return g=X,m&&h?e(n):(h=p=X,_)}function c(){g!==X&&ks(g),d=0,h=y=p=g=X}function l(){return g===X?_:a(ah())}function s(){var n=ah(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===X)return u(y);if(w)return g=Ls(f,t),e(y)}return g===X&&(g=Ls(f,t)),_}var h,p,v,_,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new vl(en);return t=Ra(t)||0,aa(r)&&(b=!!r.leading,w="maxWait"in r,v=w?Hl(Ra(r.maxWait)||0,t):v,m="trailing"in r?!!r.trailing:m),s.cancel=c,s.flush=l,s}function Cf(n){return pi(n,xn)}function Uf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new vl(en);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Uf.Cache||hr),r}function Bf(n){if("function"!=typeof n)throw new vl(en);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Tf(n){return Ef(2,n)}function $f(n,t){if("function"!=typeof n)throw new vl(en);return t=t===X?t:Oa(t),ou(n,t)}function Df(n,t){if("function"!=typeof n)throw new vl(en);return t=t===X?0:Hl(Oa(t),0),ou(function(e){var u=e[t],i=Ru(e,0,t);return u&&s(i,u),r(n,this,i)})}function Mf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new vl(en);return aa(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Lf(n,t,{leading:e,maxWait:t,trailing:u})}function Ff(n){return zf(n,1)}function Nf(n,t){return vh(Ou(t),n)}function Pf(){if(!arguments.length)return[];var n=arguments[0];return wh(n)?n:[n]}function qf(n){return Pr(n,ln)}function Zf(n,t){return t="function"==typeof t?t:X,Pr(n,ln,t)}function Kf(n){return Pr(n,an|ln)}function Vf(n,t){return t="function"==typeof t?t:X,Pr(n,an|ln,t)}function Gf(n,t){return null==t||Hr(n,t,qa(t))}function Hf(n,t){return n===t||n!==n&&t!==t}function Jf(n){return null!=n&&fa(n.length)&&!ia(n)}function Yf(n){return ca(n)&&Jf(n)}function Qf(n){return n===!0||n===!1||ca(n)&&xe(n)==Fn}function Xf(n){return ca(n)&&1===n.nodeType&&!ya(n)}function na(n){if(null==n)return!0;if(Jf(n)&&(wh(n)||"string"==typeof n||"function"==typeof n.splice||xh(n)||Ih(n)||bh(n)))return!n.length;var t=Es(n);if(t==Vn||t==nt)return!n.size;if(Fi(n))return!Ne(n).length;for(var r in n)if(wl.call(n,r))return!1;return!0}function ta(n,t){return Le(n,t)}function ra(n,t,r){r="function"==typeof r?r:X;var e=r?r(n,t):X;return e===X?Le(n,t,X,r):!!e}function ea(n){if(!ca(n))return!1;var t=xe(n);return t==qn||t==Pn||"string"==typeof n.message&&"string"==typeof n.name&&!ya(n)}function ua(n){return"number"==typeof n&&Kl(n)}function ia(n){if(!aa(n))return!1;var t=xe(n);return t==Zn||t==Kn||t==Mn||t==Qn}function oa(n){return"number"==typeof n&&n==Oa(n)}function fa(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Sn}function aa(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function ca(n){return null!=n&&"object"==typeof n}function la(n,t){return n===t||Be(n,t,Ai(t))}function sa(n,t,r){return r="function"==typeof r?r:X,Be(n,t,Ai(t),r)}function ha(n){return ga(n)&&n!=+n}function pa(n){if(Ss(n))throw new al(rn);return Te(n)}function va(n){return null===n}function _a(n){return null==n}function ga(n){return"number"==typeof n||ca(n)&&xe(n)==Gn}function ya(n){if(!ca(n)||xe(n)!=Jn)return!1;var t=Sl(n);if(null===t)return!0;var r=wl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&bl.call(r)==Al}function da(n){return oa(n)&&n>=-Sn&&n<=Sn}function ba(n){return"string"==typeof n||!wh(n)&&ca(n)&&xe(n)==tt}function wa(n){return"symbol"==typeof n||ca(n)&&xe(n)==rt}function ma(n){return n===X}function xa(n){return ca(n)&&Es(n)==ut}function ja(n){return ca(n)&&xe(n)==it}function Aa(n){if(!n)return[];if(Jf(n))return ba(n)?H(n):Fu(n);if(Bl&&n[Bl])return M(n[Bl]());var t=Es(n),r=t==Vn?F:t==nt?q:ec;return r(n)}function ka(n){if(!n)return 0===n?n:0;if(n=Ra(n),n===En||n===-En){var t=n<0?-1:1;return t*Wn}return n===n?n:0}function Oa(n){var t=ka(n),r=t%1;return t===t?r?t-r:t:0}function Ia(n){return n?Nr(Oa(n),0,Cn):0}function Ra(n){if("number"==typeof n)return n;if(wa(n))return Ln;if(aa(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=aa(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Lt,"");var r=qt.test(n);return r||Kt.test(n)?Xr(n.slice(2),r?2:8):Pt.test(n)?Ln:+n}function za(n){return Nu(n,Za(n))}function Ea(n){return Nr(Oa(n),-Sn,Sn)}function Sa(n){return null==n?"":yu(n)}function Wa(n,t){var r=ys(n);return null==t?r:Br(r,t)}function La(n,t){return y(n,xi(t,3),fe)}function Ca(n,t){return y(n,xi(t,3),ve)}function Ua(n,t){return null==n?n:ws(n,xi(t,3),Za)}function Ba(n,t){return null==n?n:ms(n,xi(t,3),Za)}function Ta(n,t){return n&&fe(n,xi(t,3))}function $a(n,t){return n&&ve(n,xi(t,3))}function Da(n){return null==n?[]:de(n,qa(n))}function Ma(n){return null==n?[]:de(n,Za(n))}function Fa(n,t,r){var e=null==n?X:we(n,t);return e===X?r:e}function Na(n,t){return null!=n&&zi(n,t,Ae)}function Pa(n,t){return null!=n&&zi(n,t,ke)}function qa(n){return Jf(n)?Ir(n):Ne(n)}function Za(n){return Jf(n)?Ir(n,!0):Pe(n)}function Ka(n,t){var r={};return t=xi(t,3),fe(n,function(n,e,u){Mr(r,t(n,e,u),n)}),r}function Va(n,t){var r={};return t=xi(t,3),fe(n,function(n,e,u){Mr(r,e,t(n,e,u))}),r}function Ga(n,t){return Ha(n,Bf(xi(t)))}function Ha(n,t){if(null==n)return{};var r=l(bi(n),function(n){return[n]});return t=xi(t),Xe(n,r,function(n,r){return t(n,r[0])})}function Ja(n,t,r){t=Iu(t,n);var e=-1,u=t.length;for(u||(u=1,n=X);++e<u;){var i=null==n?X:n[to(t[e])];i===X&&(e=u,i=r),n=ia(i)?i.call(n):i}return n}function Ya(n,t,r){return null==n?n:cu(n,t,r)}function Qa(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:cu(n,t,r,e)}function Xa(n,t,r){var e=wh(n),i=e||xh(n)||Ih(n);if(t=xi(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:aa(n)&&ia(o)?ys(Sl(n)):{}}return(i?u:fe)(n,function(n,e,u){return t(r,n,e,u)}),r}function nc(n,t){return null==n||bu(n,t)}function tc(n,t,r){return null==n?n:wu(n,t,Ou(r))}function rc(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:wu(n,t,Ou(r),e)}function ec(n){return null==n?[]:S(n,qa(n))}function uc(n){return null==n?[]:S(n,Za(n))}function ic(n,t,r){return r===X&&(r=t,t=X),r!==X&&(r=Ra(r),r=r===r?r:0),t!==X&&(t=Ra(t),t=t===t?t:0),Nr(Ra(n),t,r)}function oc(n,t,r){return t=ka(t),r===X?(r=t,t=0):r=ka(r),n=Ra(n),Oe(n,t,r)}function fc(n,t,r){if(r&&"boolean"!=typeof r&&Bi(n,t,r)&&(t=r=X),r===X&&("boolean"==typeof t?(r=t,t=X):"boolean"==typeof n&&(r=n,n=X)),n===X&&t===X?(n=0,t=1):(n=ka(n),t===X?(t=n,n=0):t=ka(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=Xl();return Jl(n+u*(t-n+Qr("1e-"+((u+"").length-1))),t)}return eu(n,t)}function ac(n){return Xh(Sa(n).toLowerCase())}function cc(n){return n=Sa(n),n&&n.replace(Gt,_e).replace(Dr,"")}function lc(n,t,r){n=Sa(n),t=yu(t);var e=n.length;r=r===X?e:Nr(Oa(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function sc(n){return n=Sa(n),n&&jt.test(n)?n.replace(mt,ge):n}function hc(n){return n=Sa(n),n&&Wt.test(n)?n.replace(St,"\\$&"):n}function pc(n,t,r){n=Sa(n),t=Oa(t);var e=t?G(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return oi(Pl(u),r)+n+oi(Nl(u),r)}function vc(n,t,r){n=Sa(n),t=Oa(t);var e=t?G(n):0;return t&&e<t?n+oi(t-e,r):n}function _c(n,t,r){n=Sa(n),t=Oa(t);var e=t?G(n):0;return t&&e<t?oi(t-e,r)+n:n}function gc(n,t,r){return r||null==t?t=0:t&&(t=+t),Ql(Sa(n).replace(Ct,""),t||0)}function yc(n,t,r){return t=(r?Bi(n,t,r):t===X)?1:Oa(t),iu(Sa(n),t)}function dc(){var n=arguments,t=Sa(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function bc(n,t,r){return r&&"number"!=typeof r&&Bi(n,t,r)&&(t=r=X),(r=r===X?Cn:r>>>0)?(n=Sa(n),n&&("string"==typeof t||null!=t&&!kh(t))&&(t=yu(t),!t&&$(n))?Ru(H(n),0,r):n.split(t,r)):[]}function wc(n,t,r){return n=Sa(n),r=Nr(Oa(r),0,n.length),t=yu(t),n.slice(r,r+t.length)==t}function mc(n,t,r){var e=K.templateSettings;r&&Bi(n,t,r)&&(t=X),n=Sa(n),t=Wh({},t,e,Sr);var u,i,o=Wh({},t.imports,e.imports,Sr),f=qa(o),a=S(o,f),c=0,l=t.interpolate||Ht,s="__p += '",h=hl((t.escape||Ht).source+"|"+l.source+"|"+(l===Ot?Ft:Ht).source+"|"+(t.evaluate||Ht).source+"|$","g"),p="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Zr+"]")+"\n";n.replace(h,function(t,r,e,o,f,a){return e||(e=o),s+=n.slice(c,a).replace(Jt,B),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),c=a+t.length,t}),s+="';\n";var v=t.variable;v||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(yt,""):s).replace(dt,"$1").replace(bt,"$1;"),s="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var _=np(function(){return cl(f,p+"return "+s).apply(X,a)});if(_.source=s,ea(_))throw _;return _}function xc(n){return Sa(n).toLowerCase()}function jc(n){return Sa(n).toUpperCase()}function Ac(n,t,r){if(n=Sa(n),n&&(r||t===X))return n.replace(Lt,"");if(!n||!(t=yu(t)))return n;var e=H(n),u=H(t),i=L(e,u),o=C(e,u)+1;return Ru(e,i,o).join("")}function kc(n,t,r){if(n=Sa(n),n&&(r||t===X))return n.replace(Ut,"");if(!n||!(t=yu(t)))return n;var e=H(n),u=C(e,H(t))+1;return Ru(e,0,u).join("")}function Oc(n,t,r){if(n=Sa(n),n&&(r||t===X))return n.replace(Ct,"");if(!n||!(t=yu(t)))return n;var e=H(n),u=L(e,H(t));return Ru(e,u).join("")}function Ic(n,t){var r=jn,e=An;if(aa(t)){var u="separator"in t?t.separator:u;r="length"in t?Oa(t.length):r,e="omission"in t?yu(t.omission):e}n=Sa(n);var i=n.length;if($(n)){var o=H(n);i=o.length}if(r>=i)return n;var f=r-G(e);if(f<1)return e;var a=o?Ru(o,0,f).join(""):n.slice(0,f);if(u===X)return a+e;if(o&&(f+=a.length-f),kh(u)){if(n.slice(f).search(u)){var c,l=a;for(u.global||(u=hl(u.source,Sa(Nt.exec(u))+"g")),u.lastIndex=0;c=u.exec(l);)var s=c.index;a=a.slice(0,s===X?f:s)}}else if(n.indexOf(yu(u),f)!=f){var h=a.lastIndexOf(u);h>-1&&(a=a.slice(0,h))}return a+e}function Rc(n){return n=Sa(n),n&&xt.test(n)?n.replace(wt,ye):n}function zc(n,t,r){return n=Sa(n),t=r?X:t,t===X?D(n)?Q(n):g(n):n.match(t)||[]}function Ec(n){var t=null==n?0:n.length,e=xi();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new vl(en);return[e(n[0]),n[1]]}):[],ou(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})}function Sc(n){return Gr(Pr(n,an))}function Wc(n){return function(){return n}}function Lc(n,t){return null==n||n!==n?t:n}function Cc(n){return n}function Uc(n){return Fe("function"==typeof n?n:Pr(n,an))}function Bc(n){return Ke(Pr(n,an))}function Tc(n,t){return Ve(n,Pr(t,an))}function $c(n,t,r){var e=qa(t),i=de(t,e);null!=r||aa(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=de(t,qa(t)));var o=!(aa(r)&&"chain"in r&&!r.chain),f=ia(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__),u=r.__actions__=Fu(this.__actions__);return u.push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function Dc(){return re._===this&&(re._=kl),this}function Mc(){}function Fc(n){return n=Oa(n),ou(function(t){return Je(t,n)})}function Nc(n){return Ti(n)?j(to(n)):nu(n)}function Pc(n){return function(t){return null==n?X:we(n,t)}}function qc(){return[]}function Zc(){return!1}function Kc(){return{}}function Vc(){return""}function Gc(){return!0}function Hc(n,t){if(n=Oa(n),n<1||n>Sn)return[];var r=Cn,e=Jl(n,Cn);t=xi(t),n-=Cn;for(var u=R(e,t);++r<n;)t(r);return u}function Jc(n){return wh(n)?l(n,to):wa(n)?[n]:Fu(Us(Sa(n)))}function Yc(n){var t=++ml;return Sa(n)+t}function Qc(n){return n&&n.length?te(n,Cc,je):X}function Xc(n,t){return n&&n.length?te(n,xi(t,2),je):X}function nl(n){return x(n,Cc)}function tl(n,t){return x(n,xi(t,2))}function rl(n){return n&&n.length?te(n,Cc,qe):X}function el(n,t){return n&&n.length?te(n,xi(t,2),qe):X}function ul(n){return n&&n.length?I(n,Cc):0}function il(n,t){return n&&n.length?I(n,xi(t,2)):0}A=null==A?re:be.defaults(re.Object(),A,be.pick(re,qr));var ol=A.Array,fl=A.Date,al=A.Error,cl=A.Function,ll=A.Math,sl=A.Object,hl=A.RegExp,pl=A.String,vl=A.TypeError,_l=ol.prototype,gl=cl.prototype,yl=sl.prototype,dl=A["__core-js_shared__"],bl=gl.toString,wl=yl.hasOwnProperty,ml=0,xl=function(){var n=/[^.]+$/.exec(dl&&dl.keys&&dl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),jl=yl.toString,Al=bl.call(sl),kl=re._,Ol=hl("^"+bl.call(wl).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Il=ie?A.Buffer:X,Rl=A.Symbol,zl=A.Uint8Array,El=Il?Il.allocUnsafe:X,Sl=N(sl.getPrototypeOf,sl),Wl=sl.create,Ll=yl.propertyIsEnumerable,Cl=_l.splice,Ul=Rl?Rl.isConcatSpreadable:X,Bl=Rl?Rl.iterator:X,Tl=Rl?Rl.toStringTag:X,$l=function(){try{var n=ki(sl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Dl=A.clearTimeout!==re.clearTimeout&&A.clearTimeout,Ml=fl&&fl.now!==re.Date.now&&fl.now,Fl=A.setTimeout!==re.setTimeout&&A.setTimeout,Nl=ll.ceil,Pl=ll.floor,ql=sl.getOwnPropertySymbols,Zl=Il?Il.isBuffer:X,Kl=A.isFinite,Vl=_l.join,Gl=N(sl.keys,sl),Hl=ll.max,Jl=ll.min,Yl=fl.now,Ql=A.parseInt,Xl=ll.random,ns=_l.reverse,ts=ki(A,"DataView"),rs=ki(A,"Map"),es=ki(A,"Promise"),us=ki(A,"Set"),is=ki(A,"WeakMap"),os=ki(sl,"create"),fs=is&&new is,as={},cs=ro(ts),ls=ro(rs),ss=ro(es),hs=ro(us),ps=ro(is),vs=Rl?Rl.prototype:X,_s=vs?vs.valueOf:X,gs=vs?vs.toString:X,ys=function(){function n(){}return function(t){if(!aa(t))return{};if(Wl)return Wl(t);n.prototype=t;var r=new n;return n.prototype=X,r}}();K.templateSettings={escape:At,evaluate:kt,interpolate:Ot,variable:"",imports:{_:K}},K.prototype=J.prototype,K.prototype.constructor=K,Y.prototype=ys(J.prototype),Y.prototype.constructor=Y,Dt.prototype=ys(J.prototype),Dt.prototype.constructor=Dt,nr.prototype.clear=tr,nr.prototype.delete=rr,nr.prototype.get=er,nr.prototype.has=ur,nr.prototype.set=ir,or.prototype.clear=fr,or.prototype.delete=ar,or.prototype.get=cr,or.prototype.has=lr,or.prototype.set=sr,hr.prototype.clear=pr,hr.prototype.delete=vr,hr.prototype.get=_r,hr.prototype.has=gr,hr.prototype.set=yr,dr.prototype.add=dr.prototype.push=br,dr.prototype.has=wr,mr.prototype.clear=xr,mr.prototype.delete=jr,mr.prototype.get=Ar,mr.prototype.has=kr,mr.prototype.set=Or;var ds=Vu(fe),bs=Vu(ve,!0),ws=Gu(),ms=Gu(!0),xs=fs?function(n,t){return fs.set(n,t),n}:Cc,js=$l?function(n,t){return $l(n,"toString",{configurable:!0,enumerable:!1,value:Wc(t),writable:!0})}:Cc,As=ou,ks=Dl||function(n){return re.clearTimeout(n)},Os=us&&1/q(new us([,-0]))[1]==En?function(n){return new us(n)}:Mc,Is=fs?function(n){return fs.get(n)}:Mc,Rs=ql?N(ql,sl):qc,zs=ql?function(n){for(var t=[];n;)s(t,Rs(n)),n=Sl(n);return t}:qc,Es=xe;(ts&&Es(new ts(new ArrayBuffer(1)))!=ft||rs&&Es(new rs)!=Vn||es&&Es(es.resolve())!=Yn||us&&Es(new us)!=nt||is&&Es(new is)!=ut)&&(Es=function(n){var t=xe(n),r=t==Jn?n.constructor:X,e=r?ro(r):"";if(e)switch(e){case cs:return ft;case ls:return Vn;case ss:return Yn;case hs:return nt;case ps:return ut}return t});var Ss=dl?ia:Zc,Ws=Xi(xs),Ls=Fl||function(n,t){return re.setTimeout(n,t)},Cs=Xi(js),Us=qi(function(n){var t=[];return zt.test(n)&&t.push(""),n.replace(Et,function(n,r,e,u){t.push(e?u.replace(Mt,"$1"):r||n)}),t}),Bs=ou(function(n,t){return Yf(n)?Yr(n,oe(t,1,Yf,!0)):[]}),Ts=ou(function(n,t){var r=Ao(t);return Yf(r)&&(r=X),Yf(n)?Yr(n,oe(t,1,Yf,!0),xi(r,2)):[]}),$s=ou(function(n,t){var r=Ao(t);return Yf(r)&&(r=X),Yf(n)?Yr(n,oe(t,1,Yf,!0),X,r):[]}),Ds=ou(function(n){var t=l(n,ku);return t.length&&t[0]===n[0]?Ie(t):[]}),Ms=ou(function(n){var t=Ao(n),r=l(n,ku);return t===Ao(r)?t=X:r.pop(),r.length&&r[0]===n[0]?Ie(r,xi(t,2)):[]}),Fs=ou(function(n){var t=Ao(n),r=l(n,ku);return t="function"==typeof t?t:X,t&&r.pop(),r.length&&r[0]===n[0]?Ie(r,X,t):[]}),Ns=ou(Io),Ps=yi(function(n,t){var r=null==n?0:n.length,e=Fr(n,t);return ru(n,l(t,function(n){return Ui(n,r)?+n:n}).sort(Tu)),e}),qs=ou(function(n){return du(oe(n,1,Yf,!0))}),Zs=ou(function(n){var t=Ao(n);return Yf(t)&&(t=X),du(oe(n,1,Yf,!0),xi(t,2))}),Ks=ou(function(n){var t=Ao(n);return t="function"==typeof t?t:X,du(oe(n,1,Yf,!0),X,t)}),Vs=ou(function(n,t){return Yf(n)?Yr(n,t):[]}),Gs=ou(function(n){return ju(f(n,Yf))}),Hs=ou(function(n){var t=Ao(n);return Yf(t)&&(t=X),ju(f(n,Yf),xi(t,2))}),Js=ou(function(n){var t=Ao(n);return t="function"==typeof t?t:X,ju(f(n,Yf),X,t)}),Ys=ou(Ho),Qs=ou(function(n){var t=n.length,r=t>1?n[t-1]:X;return r="function"==typeof r?(n.pop(),r):X,Jo(n,r)}),Xs=yi(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Fr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Dt&&Ui(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:tf,args:[u],thisArg:X}),new Y(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(X),n})):this.thru(u)}),nh=Zu(function(n,t,r){wl.call(n,r)?++n[r]:Mr(n,r,1)}),th=ni(po),rh=ni(vo),eh=Zu(function(n,t,r){wl.call(n,r)?n[r].push(t):Mr(n,r,[t])}),uh=ou(function(n,t,e){var u=-1,i="function"==typeof t,o=Jf(n)?ol(n.length):[];return ds(n,function(n){o[++u]=i?r(t,n,e):ze(n,t,e)}),o}),ih=Zu(function(n,t,r){Mr(n,r,t)}),oh=Zu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),fh=ou(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Bi(n,t[0],t[1])?t=[]:r>2&&Bi(t[0],t[1],t[2])&&(t=[t[0]]),Ye(n,oe(t,1),[])}),ah=Ml||function(){return re.Date.now()},ch=ou(function(n,t,r){var e=pn;if(r.length){var u=P(r,mi(ch));e|=dn}return pi(n,e,t,r,u)}),lh=ou(function(n,t,r){var e=pn|vn;if(r.length){var u=P(r,mi(lh));e|=dn}return pi(t,e,n,r,u)}),sh=ou(function(n,t){return Jr(n,1,t)}),hh=ou(function(n,t,r){return Jr(n,Ra(t)||0,r)});Uf.Cache=hr;var ph=As(function(n,t){t=1==t.length&&wh(t[0])?l(t[0],E(xi())):l(oe(t,1),E(xi()));var e=t.length;return ou(function(u){for(var i=-1,o=Jl(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),vh=ou(function(n,t){var r=P(t,mi(vh));return pi(n,dn,X,t,r)}),_h=ou(function(n,t){var r=P(t,mi(_h));return pi(n,bn,X,t,r)}),gh=yi(function(n,t){return pi(n,mn,X,X,X,t)}),yh=ci(je),dh=ci(function(n,t){return n>=t}),bh=Ee(function(){return arguments}())?Ee:function(n){return ca(n)&&wl.call(n,"callee")&&!Ll.call(n,"callee")},wh=ol.isArray,mh=ae?E(ae):Se,xh=Zl||Zc,jh=ce?E(ce):We,Ah=le?E(le):Ue,kh=se?E(se):$e,Oh=he?E(he):De,Ih=pe?E(pe):Me,Rh=ci(qe),zh=ci(function(n,t){return n<=t}),Eh=Ku(function(n,t){if(Fi(t)||Jf(t))return void Nu(t,qa(t),n);for(var r in t)wl.call(t,r)&&Lr(n,r,t[r])}),Sh=Ku(function(n,t){Nu(t,Za(t),n)}),Wh=Ku(function(n,t,r,e){Nu(t,Za(t),n,e)}),Lh=Ku(function(n,t,r,e){Nu(t,qa(t),n,e)}),Ch=yi(Fr),Uh=ou(function(n){return n.push(X,Sr),r(Wh,X,n)}),Bh=ou(function(n){return n.push(X,Ki),r(Fh,X,n)}),Th=ei(function(n,t,r){n[t]=r},Wc(Cc)),$h=ei(function(n,t,r){wl.call(n,t)?n[t].push(r):n[t]=[r]},xi),Dh=ou(ze),Mh=Ku(function(n,t,r){Ge(n,t,r)}),Fh=Ku(function(n,t,r,e){Ge(n,t,r,e)}),Nh=yi(function(n,t){var r={};if(null==n)return r;var e=!1;t=l(t,function(t){return t=Iu(t,n),e||(e=t.length>1),t}),Nu(n,bi(n),r),e&&(r=Pr(r,an|cn|ln));for(var u=t.length;u--;)bu(r,t[u]);return r}),Ph=yi(function(n,t){return null==n?{}:Qe(n,t)}),qh=hi(qa),Zh=hi(Za),Kh=Yu(function(n,t,r){return t=t.toLowerCase(),n+(r?ac(t):t)}),Vh=Yu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Gh=Yu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Hh=Ju("toLowerCase"),Jh=Yu(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Yh=Yu(function(n,t,r){return n+(r?" ":"")+Xh(t)}),Qh=Yu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Xh=Ju("toUpperCase"),np=ou(function(n,t){try{return r(n,X,t)}catch(n){return ea(n)?n:new al(n)}}),tp=yi(function(n,t){return u(t,function(t){t=to(t),Mr(n,t,ch(n[t],n))}),n}),rp=ti(),ep=ti(!0),up=ou(function(n,t){return function(r){return ze(r,n,t)}}),ip=ou(function(n,t){return function(r){return ze(n,r,t)}}),op=ii(l),fp=ii(o),ap=ii(v),cp=ai(),lp=ai(!0),sp=ui(function(n,t){return n+t},0),hp=si("ceil"),pp=ui(function(n,t){return n/t},1),vp=si("floor"),_p=ui(function(n,t){return n*t},1),gp=si("round"),yp=ui(function(n,t){return n-t},0);return K.after=Rf,K.ary=zf,K.assign=Eh,K.assignIn=Sh,K.assignInWith=Wh,K.assignWith=Lh,K.at=Ch,K.before=Ef,K.bind=ch,K.bindAll=tp,K.bindKey=lh,K.castArray=Pf,K.chain=Xo,K.chunk=io,K.compact=oo,K.concat=fo,K.cond=Ec,K.conforms=Sc,K.constant=Wc,K.countBy=nh,K.create=Wa,K.curry=Sf,K.curryRight=Wf,K.debounce=Lf,K.defaults=Uh,K.defaultsDeep=Bh,K.defer=sh,K.delay=hh,K.difference=Bs,K.differenceBy=Ts,K.differenceWith=$s,K.drop=ao,K.dropRight=co,
K.dropRightWhile=lo,K.dropWhile=so,K.fill=ho,K.filter=sf,K.flatMap=hf,K.flatMapDeep=pf,K.flatMapDepth=vf,K.flatten=_o,K.flattenDeep=go,K.flattenDepth=yo,K.flip=Cf,K.flow=rp,K.flowRight=ep,K.fromPairs=bo,K.functions=Da,K.functionsIn=Ma,K.groupBy=eh,K.initial=xo,K.intersection=Ds,K.intersectionBy=Ms,K.intersectionWith=Fs,K.invert=Th,K.invertBy=$h,K.invokeMap=uh,K.iteratee=Uc,K.keyBy=ih,K.keys=qa,K.keysIn=Za,K.map=df,K.mapKeys=Ka,K.mapValues=Va,K.matches=Bc,K.matchesProperty=Tc,K.memoize=Uf,K.merge=Mh,K.mergeWith=Fh,K.method=up,K.methodOf=ip,K.mixin=$c,K.negate=Bf,K.nthArg=Fc,K.omit=Nh,K.omitBy=Ga,K.once=Tf,K.orderBy=bf,K.over=op,K.overArgs=ph,K.overEvery=fp,K.overSome=ap,K.partial=vh,K.partialRight=_h,K.partition=oh,K.pick=Ph,K.pickBy=Ha,K.property=Nc,K.propertyOf=Pc,K.pull=Ns,K.pullAll=Io,K.pullAllBy=Ro,K.pullAllWith=zo,K.pullAt=Ps,K.range=cp,K.rangeRight=lp,K.rearg=gh,K.reject=xf,K.remove=Eo,K.rest=$f,K.reverse=So,K.sampleSize=Af,K.set=Ya,K.setWith=Qa,K.shuffle=kf,K.slice=Wo,K.sortBy=fh,K.sortedUniq=Do,K.sortedUniqBy=Mo,K.split=bc,K.spread=Df,K.tail=Fo,K.take=No,K.takeRight=Po,K.takeRightWhile=qo,K.takeWhile=Zo,K.tap=nf,K.throttle=Mf,K.thru=tf,K.toArray=Aa,K.toPairs=qh,K.toPairsIn=Zh,K.toPath=Jc,K.toPlainObject=za,K.transform=Xa,K.unary=Ff,K.union=qs,K.unionBy=Zs,K.unionWith=Ks,K.uniq=Ko,K.uniqBy=Vo,K.uniqWith=Go,K.unset=nc,K.unzip=Ho,K.unzipWith=Jo,K.update=tc,K.updateWith=rc,K.values=ec,K.valuesIn=uc,K.without=Vs,K.words=zc,K.wrap=Nf,K.xor=Gs,K.xorBy=Hs,K.xorWith=Js,K.zip=Ys,K.zipObject=Yo,K.zipObjectDeep=Qo,K.zipWith=Qs,K.entries=qh,K.entriesIn=Zh,K.extend=Sh,K.extendWith=Wh,$c(K,K),K.add=sp,K.attempt=np,K.camelCase=Kh,K.capitalize=ac,K.ceil=hp,K.clamp=ic,K.clone=qf,K.cloneDeep=Kf,K.cloneDeepWith=Vf,K.cloneWith=Zf,K.conformsTo=Gf,K.deburr=cc,K.defaultTo=Lc,K.divide=pp,K.endsWith=lc,K.eq=Hf,K.escape=sc,K.escapeRegExp=hc,K.every=lf,K.find=th,K.findIndex=po,K.findKey=La,K.findLast=rh,K.findLastIndex=vo,K.findLastKey=Ca,K.floor=vp,K.forEach=_f,K.forEachRight=gf,K.forIn=Ua,K.forInRight=Ba,K.forOwn=Ta,K.forOwnRight=$a,K.get=Fa,K.gt=yh,K.gte=dh,K.has=Na,K.hasIn=Pa,K.head=wo,K.identity=Cc,K.includes=yf,K.indexOf=mo,K.inRange=oc,K.invoke=Dh,K.isArguments=bh,K.isArray=wh,K.isArrayBuffer=mh,K.isArrayLike=Jf,K.isArrayLikeObject=Yf,K.isBoolean=Qf,K.isBuffer=xh,K.isDate=jh,K.isElement=Xf,K.isEmpty=na,K.isEqual=ta,K.isEqualWith=ra,K.isError=ea,K.isFinite=ua,K.isFunction=ia,K.isInteger=oa,K.isLength=fa,K.isMap=Ah,K.isMatch=la,K.isMatchWith=sa,K.isNaN=ha,K.isNative=pa,K.isNil=_a,K.isNull=va,K.isNumber=ga,K.isObject=aa,K.isObjectLike=ca,K.isPlainObject=ya,K.isRegExp=kh,K.isSafeInteger=da,K.isSet=Oh,K.isString=ba,K.isSymbol=wa,K.isTypedArray=Ih,K.isUndefined=ma,K.isWeakMap=xa,K.isWeakSet=ja,K.join=jo,K.kebabCase=Vh,K.last=Ao,K.lastIndexOf=ko,K.lowerCase=Gh,K.lowerFirst=Hh,K.lt=Rh,K.lte=zh,K.max=Qc,K.maxBy=Xc,K.mean=nl,K.meanBy=tl,K.min=rl,K.minBy=el,K.stubArray=qc,K.stubFalse=Zc,K.stubObject=Kc,K.stubString=Vc,K.stubTrue=Gc,K.multiply=_p,K.nth=Oo,K.noConflict=Dc,K.noop=Mc,K.now=ah,K.pad=pc,K.padEnd=vc,K.padStart=_c,K.parseInt=gc,K.random=fc,K.reduce=wf,K.reduceRight=mf,K.repeat=yc,K.replace=dc,K.result=Ja,K.round=gp,K.runInContext=_,K.sample=jf,K.size=Of,K.snakeCase=Jh,K.some=If,K.sortedIndex=Lo,K.sortedIndexBy=Co,K.sortedIndexOf=Uo,K.sortedLastIndex=Bo,K.sortedLastIndexBy=To,K.sortedLastIndexOf=$o,K.startCase=Yh,K.startsWith=wc,K.subtract=yp,K.sum=ul,K.sumBy=il,K.template=mc,K.times=Hc,K.toFinite=ka,K.toInteger=Oa,K.toLength=Ia,K.toLower=xc,K.toNumber=Ra,K.toSafeInteger=Ea,K.toString=Sa,K.toUpper=jc,K.trim=Ac,K.trimEnd=kc,K.trimStart=Oc,K.truncate=Ic,K.unescape=Rc,K.uniqueId=Yc,K.upperCase=Qh,K.upperFirst=Xh,K.each=_f,K.eachRight=gf,K.first=wo,$c(K,function(){var n={};return fe(K,function(t,r){wl.call(K.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),K.VERSION=nn,u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){K[n].placeholder=K}),u(["drop","take"],function(n,t){Dt.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new Dt(this);r=r===X?1:Hl(Oa(r),0);var u=this.clone();return e?u.__takeCount__=Jl(r,u.__takeCount__):u.__views__.push({size:Jl(r,Cn),type:n+(u.__dir__<0?"Right":"")}),u},Dt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==In||r==zn;Dt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:xi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Dt.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Dt.prototype[n]=function(){return this.__filtered__?new Dt(this):this[r](1)}}),Dt.prototype.compact=function(){return this.filter(Cc)},Dt.prototype.find=function(n){return this.filter(n).head()},Dt.prototype.findLast=function(n){return this.reverse().find(n)},Dt.prototype.invokeMap=ou(function(n,t){return"function"==typeof n?new Dt(this):this.map(function(r){return ze(r,n,t)})}),Dt.prototype.reject=function(n){return this.filter(Bf(xi(n)))},Dt.prototype.slice=function(n,t){n=Oa(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Dt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==X&&(t=Oa(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Dt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Dt.prototype.toArray=function(){return this.take(Cn)},fe(Dt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=K[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(K.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Dt,a=o[0],c=f||wh(t),l=function(n){var t=u.apply(K,s([n],o));return e&&h?t[0]:t};c&&r&&"function"==typeof a&&1!=a.length&&(f=c=!1);var h=this.__chain__,p=!!this.__actions__.length,v=i&&!h,_=f&&!p;if(!i&&c){t=_?t:new Dt(this);var g=n.apply(t,o);return g.__actions__.push({func:tf,args:[l],thisArg:X}),new Y(g,h)}return v&&_?n.apply(this,o):(g=this.thru(l),v?e?g.value()[0]:g.value():g)})}),u(["pop","push","shift","sort","splice","unshift"],function(n){var t=_l[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);K.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(wh(u)?u:[],n)}return this[r](function(r){return t.apply(wh(r)?r:[],n)})}}),fe(Dt.prototype,function(n,t){var r=K[t];if(r){var e=r.name+"",u=as[e]||(as[e]=[]);u.push({name:t,func:r})}}),as[ri(X,vn).name]=[{name:"wrapper",func:X}],Dt.prototype.clone=Yt,Dt.prototype.reverse=Qt,Dt.prototype.value=Xt,K.prototype.at=Xs,K.prototype.chain=rf,K.prototype.commit=ef,K.prototype.next=uf,K.prototype.plant=ff,K.prototype.reverse=af,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=cf,K.prototype.first=K.prototype.head,Bl&&(K.prototype[Bl]=of),K},be=de();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(re._=be,define(function(){return be})):ue?((ue.exports=be)._=be,ee._=be):re._=be}).call(this);


/* ================ SLATE ================ */
theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});




/* ================ MODULES ================ */
theme.Slideshow = (function() {
  theme.sliders = function (slider) {
    this.$slider = $(slider);
    
    // Set optional parameters
    var auto = this.$slider.data('autoplay') ? this.$slider.data('autoplay') : false,
        rate = this.$slider.data('speed') ? this.$slider.data('speed') : 0;
    
    this.sliderArgs = {
      animation: this.$slider.data('animation-type'),
      animationSpeed: 500,
      pauseOnHover: true,
      keyboard: false,
      slideshow: auto,
      slideshowSpeed: rate
    }
    
    var self = this;
    
    if (this.$slider.length) {

      if (this.$slider.find('li').length === 1) {
        this.sliderArgs.touch = false;
      }

      return(this.$slider.flexslider(this.sliderArgs));
    }
  };
  
  return theme.sliders;
})();


/*================ SECTIONS ================*/

theme.Product = (function() {
  function Product(container) {
    this.selectors = {
      productImageWrap: '.main_image_wrap',
      productImage: '#productPhotoImg',
      productPrice: '#productPrice',
      comparePrice: '#comparePrice',
      addToCart: '#AddToCart',
      addToCartText: '#addToCartText',
      comparePriceA11y: '#comparePriceA11y',
      priceA11y: '#priceA11y',
      quantityElements: '.quantity-selector, label + .js-qty,.qty-box-set',
      SKU: '.variant-sku'
    };

    var $container = this.$container = $(container);
    var sectionId = $container.attr('data-section-id');

    if (!$('#ProductJson-' + sectionId).html()) {
      return;
    }

    this.zoomEnable = $(container).data('zoom-enable');
    this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);

    this.init();
  }

  Product.prototype = _.assignIn({}, Product.prototype, {
    init: function(){
      this.cacheSelectors();
      this.initBreakpoints();
      timber.cacheSelectors();
      this.productImageSwitch();
      if (this.zoomEnable) {
        this.productImageZoom();
      }
      this.initProductVariant();
      timber.responsiveVideos();
      timber.rteBannerImages()
      //this.productImageGallery();
    },

    cacheSelectors: function() {
      window.cache = window.cache || {};
      $.extend(window.cache, {
        $html: $('html'),
        $productImageWrap: $(this.selectors.productImageWrap),
        $productImage: $(this.selectors.productImage),
        $thumbImages: $('#productThumbs').find('a.product-single__thumb'),
       // $productImageGallery: $('.gallery__item'),
        $addToCart: $(this.selectors.addToCart),
        $productPrice: $(this.selectors.productPrice),
        $comparePrice: $(this.selectors.comparePrice),
        $comparePriceA11y: $(this.selectors.comparePriceA11y),
        $priceA11y: $(this.selectors.priceA11y),
        $quantityElements: $(this.selectors.quantityElements),
        $addToCartText: $(this.selectors.addToCartText),
        $SKU: $(this.selectors.SKU)
      });
    },

    initBreakpoints: function() {
      var self = this;
            if (self.zoomEnable) {
              if (cache.$productImageWrap.length) {
                // remove event handlers for product zoom on mobile
                cache.$productImageWrap.trigger('zoom.destroy');
                cache.$productImageWrap.off();
                cache.$productImageWrap.removeClass('image-zoom');
              }
            }
    },
    productImageSwitch: function () {
      var self = this;

      if ( cache.$thumbImages.length ) {
        // Switch the main image with one of the thumbnails
        // Note: this does not change the variant selected, just the image
        cache.$thumbImages.on('click', function(evt) {
          evt.preventDefault();
           var aa = $(this).parents('.slick-slide').parent().find('.slick-slide');
          aa.removeClass('slick-active slick-current');
          $(this).parents('.slick-slide').addClass('slick-active slick-current');
          var newImage = $(this).attr('href'); 
          var data_id = $(this).data('id'); 
          newImage_ = $(this).data('fullsrc');
         $('.product-lightbox-btn.'+data_id).attr('href', newImage_);
          $('.product-lightbox-btn').hide();
          $('.product-lightbox-btn.'+data_id).show();
          self.switchImage(newImage, null, cache.$productImage);
        });
      }
    },

    switchImage: function (src, imgObject, el) {
      // Make sure element is a jquery object
      var $el = $(el);
      var self = this;

      $el.attr('src', src);
      

      if (this.zoomEnable) {
        // Update new image src to grande
        var zoomSrc = src.replace('_medium.','_1024x1024.').replace('_large.','_1024x1024.');
        $el.attr('data-zoom', zoomSrc);

        $(function() {
          self.productImageZoom();
        });
      }

    },

    productImageZoom: function () {
        if (!this.zoomEnable) {
          return;
        }

        // Destroy zoom (in case it was already set), then set it up again
        cache.$productImageWrap.trigger('zoom.destroy');

        cache.$productImageWrap.addClass('image-zoom').zoom({
          url: cache.$productImage.attr('data-zoom')
        });
    },

    productPage: function (options) {
      var self = this,
          moneyFormat = options.money_format,
          variant = options.variant,
          selector = options.selector,
          translations = options.translations;

      if (variant) {

        // Update variant image, if one is set
        if (variant.featured_image) {
          var newImg = variant.featured_image,
              el = cache.$productImage[0],
              zoomSrc = $(newImg).attr('src').replace('.jpg','_1024x1024.jpg').replace('.jpeg','_1024x1024.jpeg').replace('.png','_1024x1024.png'),
              $zoomImg = $('.zoomImg');

          Shopify.Image.switchImage(newImg, el, self.switchImage);

          if (this.zoomEnable) {
            // reint zoom attributes on image variant
            cache.$productImage.attr('data-zoom', zoomSrc);
            $zoomImg.attr('src', zoomSrc);
          }
        }

        // Select a valid variant if available
        if (variant.available) {
          // Available, enable the submit button, change text, show quantity elements
          cache.$addToCart.removeClass('disabled').prop('disabled', false);
          cache.$addToCartText.html(translations.add_to_cart);
          cache.$quantityElements.show();
        } else {
          // Sold out, disable the submit button, change text, hide quantity elements
          cache.$addToCart.addClass('disabled').prop('disabled', true);
          cache.$addToCartText.html(translations.sold_out);
          cache.$quantityElements.hide();
        }

        // Regardless of stock, update the product price
        cache.$productPrice.html( Shopify.formatMoney(variant.price, moneyFormat) );
        // Show Product SKU
        cache.$SKU.html(variant.sku);
        // Also update and show the product's compare price if necessary
        if ( variant.compare_at_price > variant.price ) {
          cache.$comparePrice
            .html(Shopify.formatMoney(variant.compare_at_price, moneyFormat))
            .show();
          cache.$comparePriceA11y.attr('aria-hidden', 'false');
          cache.$priceA11y.attr('aria-hidden', 'false');
        } else {
          cache.$comparePrice.hide();
          cache.$comparePriceA11y.attr('aria-hidden', 'true');
        }
        Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), 'span.money', 'money_format');

      } else {
        // The variant doesn't exist, disable submit button.
        // This may be an error or notice that a specific variant is not available.
        // To only show available variants, implement linked product options:
        //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
        cache.$addToCart.addClass('disabled').prop('disabled', true);
        cache.$addToCartText.html(translations.unavailable);
        cache.$quantityElements.hide();
      }
    },

    initProductVariant: function() {
      var self = this,
          product = this.productSingleObject;

      var selectCallback = function(variant, selector) {
        self.productPage({
          money_format: theme.moneyFormat,
          variant: variant,
          selector: selector,
          translations: {
            add_to_cart : theme.productStrings.addToCart,
            sold_out : theme.productStrings.soldOut,
            unavailable : theme.productStrings.unavailable
          }
        });
      };

      this.optionSelector = new Shopify.OptionSelectors('productSelect', {
        product: product,
        onVariantSelected: selectCallback,
        enableHistoryState: true
      });
	
      // Add label if only one product option and it isn't 'Title'. Could be 'Size'.
      if (product.options.length == 1 && product.options[0] != 'Title') {
        $('.selector-wrapper:eq(0)').prepend('<label>' + product.options[0] + '</label>');
      }

      // Hide selectors if we only have 1 variant and its title contains 'Default'.
      if (product.variants.length == 1 && product.variants[0].title.toLowerCase().indexOf('default') !== -1) {
        $('.product-single__variants').hide();
      }
       Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), 'span.money', 'money_format');
    }
  });

  return Product;
})();

theme.Collection = (function() {
  function Collection(container) {
    this.selectors = {
      filterDropdowns: '.filter-dropdown',
      filterSelect: '.filter-dropdown__select',
      filterLabel: '.filter-dropdown__label',
      sortDropdown: '#sortBy',
      tagList: '#sortTags'
    };
    
    var $container = this.$container = $(container);
    // this.sortEnabled = $(container).data('sort-enabled');
    // this.tagsEnabled = $(container).data('tags-enabled');
    
    this.init();
  }
  
  Collection.prototype = _.assignIn({}, Collection.prototype, {
    init: function() {
      // this.stringOverrides();
      this.cacheSelectors();
      this.collectionSorting();
      this.setFilterLabels();
      this.setQueryParams();

      // Bind Events
      cache.$sortDropdown.on('change', this.sortCollection);
      cache.$tagList.on('change', this.filterCollection);
    },
    
    cacheSelectors: function() {
      window.cache = window.cache || {};
      $.extend(window.cache, {
        $html: $('html'),
        $filterDropdowns: $(this.selectors.filterDropdowns),
        $filterSelect: $(this.selectors.filterSelect),
        $filterLabel: $(this.selectors.filterLabel),
        $sortDropdown: $(this.selectors.sortDropdown),
        $tagList: $(this.selectors.tagList)
      });
    },
    
    collectionSorting: function () {
      if (cache.$tagList.length) {
        cache.$tagList.on('change', function() {
          window.location.href = $(this).val();
        });
      }
    },

    updateFilterLabel: function (evt, element) {
      var $label,
          renderedLabel,
          selectedVariant,
          $select;

      $select = evt ? $(evt.target) : $(element);

      $label = $select.prev('.filter-dropdown__label').find('.filter-dropdown__label--active');
      selectedVariant = $select.find('option:selected').text();
      $label.html(' ' + selectedVariant);
      cache.$filterDropdowns.addClass('loaded');
    },

    setFilterLabels: function () {
      var self = this;
      
      if (cache.$filterSelect.length && cache.$html.hasClass('supports-pointerevents')) {
        cache.$filterSelect.each(function () {
          self.updateFilterLabel(null, this);
        });

        cache.$filterSelect.on('change', self.updateFilterLabel);
      }
    },
    
    setQueryParams: function  () {
      var self = this;
      
      //don't execute if sort dropdown is not present.
      if (!cache.$sortDropdown.length) {
        return;
      }

      Shopify.queryParams = {};
      if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }

      cache.$sortDropdown.val(Shopify.queryParams.sort_by);

      if (cache.$html.hasClass('supports-pointerevents') && Shopify.queryParams.sort_by) {
        self.updateFilterLabel(null, cache.$sortDropdown);
      }
    },

    filterCollection: function () {
      //check to make sure there is a tag dropdown present
      if (!cache.$tagList.length) {
        return;
      }
      
      var queryParams = jQuery.param(Shopify.queryParams);

      if (queryParams) {
        window.location.href = cache.$tagList.val() + '?' + queryParams;
      }
      else {
        window.location.href = cache.$tagList.val();
      }
    },

    sortCollection: function () {
      if (!cache.$sortDropdown) {
        return;
      }

      Shopify.queryParams.sort_by = cache.$sortDropdown.val();
      location.search = jQuery.param(Shopify.queryParams);
    }
  });

  return Collection;
})();

theme.slideshows = {};

theme.SlideshowSection = (function() {
  function SlideshowSection(container) {
    var $container = this.$container = $(container);
    var id = $container.attr('data-section-id');
    var slideshow = this.slideshow = '#flexslider--' + id;

    theme.slideshows[slideshow] = new theme.Slideshow(slideshow);
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
  onUnload: function() {
    $(window).unbind('.slideshow');
    delete theme.slideshows[this.slideshow];
  },

  onBlockSelect: function(evt) {
    var $slideshow = $(this.slideshow);
    var $slide = $('#slide--' + evt.detail.blockId + ':not(.clone)');
    var slideIndex = $slide.data('flexslider-index');
    var $slideImg = $slide.find('img');
    $slideshow.flexslider(slideIndex, true);
    
    $slideImg.on('load', function(){
      var intervalAttempts = 0;
      
      // Needed to resize the slider as the on('load') listener doesn't wait until the image has loaded.
      var imageHeightCheck = setInterval(function() {
        intervalAttempts++;
        if ($slideImg.length && $slideImg.height() === 0 && intervalAttempts < 10)  {
          sizeSlideshow($slideshow);
        } else {
          // clear interval
          sizeSlideshow($slideshow);
          clearInterval(imageHeightCheck);
        }
      }, 500);
    });
    
    function sizeSlideshow($slideshow) {
      $slideshow.resize();
    }
  },

  onBlockDeselect: function() {
    // Resume autoplay
    $(this.slideshow).flexslider("play");
  }
});

theme.FeaturedVideoSection = (function() {
  function FeaturedVideoSection() {
    timber.responsiveVideos();
  }

  return FeaturedVideoSection;
})();

theme.FeaturedVideoSection.prototype = _.assignIn({}, theme.FeaturedVideoSection.prototype, {
  onSelect: function() {
    timber.responsiveVideos();
  }
});

window.theme = window.theme || {};

theme.PasswordHeader = (function() {
  function PasswordHeader() {
    this.init();
  }
  
  PasswordHeader.prototype = _.assignIn({}, PasswordHeader.prototype, {
    init: function() {
      $('.js-toggle-login-modal').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        closeOnBgClick: false,
        closeBtnInside: false,
        closeOnContentClick: false,
        tClose: password.strings.pageClose,
        removalDelay: 500,
        callbacks: {
          open: function() {
            window.setTimeout( function() { document.getElementById('password').focus(); }, 50 );
          },
          close: function() {
            window.setTimeout( function() { document.getElementById('email').focus(); }, 50 );
          }
        }
      });
      if ( $('.storefront-password-form .errors').size() ) {
        $('.js-toggle-login-modal').click();
      }
    }
  });
  
  return PasswordHeader;
})();


$(document).ready(function() {
  var sections = new theme.Sections();
  sections.register('product-template', theme.Product);
  sections.register('collection-template', theme.Collection);
  sections.register('slideshow-section', theme.SlideshowSection);
  sections.register('featured-video-section', theme.FeaturedVideoSection);
  sections.register('password-header', theme.PasswordHeader);
});

timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html                : $('html'),
    $window              : $(window),
        // Home Page
    $slider              : $('.flexslider'),
    $slides              : $('.flexslider li'),

    // Cart Page
    $cartEmpty           : $('#cartEmpty'),
    $ajaxifyCart         : $('#ajaxifyCart'),
    cartNoCookies        : 'cart--no-cookies',

    // RTE content
    $rte                 : $('.rte')
  };
};

timber.init = function () {
  timber.cacheSelectors();
  timber.cartInit();
  timber.responsiveVideos();
  timber.rteBannerImages();
};

timber.cartInit = function () {
  if (!timber.cookiesEnabled()) {
    timber.cache.$cartEmpty.addClass(timber.cache.cartNoCookies);
    timber.cache.$ajaxifyCart.addClass(timber.cache.cartNoCookies);
  }
};

timber.cookiesEnabled = function() {
  var cookieEnabled = navigator.cookieEnabled;

  if (!cookieEnabled){
    document.cookie = 'testcookie';
    cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
  }
  return cookieEnabled;
};


timber.rteBannerImages = function () {
  if (!timber.cache.$rte) {
    return;
  }

  var $imgContainers = timber.cache.$rte.find('img:not([style])').parent('p');

  if ($imgContainers) {
    $imgContainers.addClass('banner-img');
  }
};

timber.responsiveVideos = function () {
  var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $iframeVideo.each(function () {
    // Add wrapper to make video responsive
    if(!$(this).parents('.video-wrapper').length) {
      $(this).wrap('<div class="video-wrapper"></div>');
    }
  });

  $iframeReset.each(function () {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

// Initialize Timber's JS on docready
$(timber.init);
