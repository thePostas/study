var lib=function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var i=function(){function e(n){var t=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=document.createElement("p"),this.el.classList.add("counter"),this.value=0,n.subscribe("CHANGE_TEXT",function(e){t.value=e,t.render()})}var n,t,i;return n=e,(t=[{key:"render",value:function(){return this.el.textContent="Количество символов: "+this.value,this.el}}])&&r(n.prototype,t),i&&r(n,i),e}();function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._subscribers={}}var n,t,r;return n=e,(t=[{key:"subscribe",value:function(e,n){var t=this;void 0!==this._subscribers[e]&&null!==this._subscribers[e]||(this._subscribers[e]=[]);var r=this._subscribers[e].push(n)-1;return function(){t._subscribers[e][r]=void 0}}},{key:"dispatch",value:function(e,n){var t=this._subscribers[e];null!=t&&t.forEach(function(e){"function"==typeof e&&e(n)})}}])&&u(n.prototype,t),r&&u(n,r),e}();function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=document.createElement("form"),this.el.classList.add("form"),this.el.addEventListener("input",function(e){var t=e.target.value.length;n.dispatch("CHANGE_TEXT",t)})}var n,t,r;return n=e,(t=[{key:"render",value:function(){return this.el.innerHTML='<label class="form__input-wrapper"><span class="form__label">Введите текст</span><input class="form__input" type="text" placeholder="Привет"></label>',this.el}}])&&o(n.prototype,t),r&&o(n,r),e}(),s=new a,c=new l(s).render(),f=new i(s).render(),b=document.getElementById("app");b.appendChild(c),b.appendChild(f)}]);
//# sourceMappingURL=app.js.map