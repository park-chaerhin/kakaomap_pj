(self["webpackChunkgoogle_login"]=self["webpackChunkgoogle_login"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return h},L:function(){return a},LL:function(){return I},UG:function(){return f},X3:function(){return z},ZB:function(){return u},ZR:function(){return k},b$:function(){return g},eu:function(){return _},hl:function(){return b},jU:function(){return v},m9:function(){return D},ne:function(){return $},pd:function(){return R},r3:function(){return E},ru:function(){return m},tV:function(){return c},uI:function(){return p},vZ:function(){return O},w1:function(){return y},xO:function(){return x},xb:function(){return T},z$:function(){return d},zd:function(){return L}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function f(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function v(){return"object"===typeof self&&self.self===self}function m(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function y(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b(){return"object"===typeof indexedDB}function _(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=w,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new k(r,s,n);return a}}function S(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(A(n)&&A(o)){if(!O(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function R(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new N(e,t);return n.subscribe.bind(n)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=P(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class V{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new B(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new U(this._db.createObjectStore(e,t))}close(){this._db.close()}}class B{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new U(this._transaction.objectStore(e))}}class U{constructor(e){this._store=e}index(e){return new F(this._store.index(e))}createIndex(e,t,n){return new F(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return j(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return j(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return j(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return j(e,"Error clearing IndexedDB object store")}}class F{constructor(e){this._index=e}get(e){const t=this._index.get(e);return j(t,"Error reading from IndexedDB")}}function z(e,t,n){return new Promise(((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=e=>{r(new V(e.target.result))},o.onerror=e=>{var t;i(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},o.onupgradeneeded=e=>{n(new V(o.result),e.oldVersion,e.newVersion,new B(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}}))}},1001:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},9662:function(e,t,n){var r=n(7854),i=n(614),o=n(6330),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},6077:function(e,t,n){var r=n(7854),i=n(614),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},9670:function(e,t,n){var r=n(7854),i=n(111),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(7854),i=n(1694),o=n(614),s=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),i=r("".replace),o=function(e){return String(Error(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(o);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=i(e,s,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(1320),a=n(3505),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,p,f,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(h in t){if(p=t[h],e.noTargetGet?(f=i(l,h),d=f&&f.value):d=l[h],n=u(m?h:v+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),s(l,h,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),i=n(1702),o=n(7293),s=n(4326),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,o,s=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),p=n(6200),f=n(3501),v="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(e){return o(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var _=d.state||(d.state=new g),w=c(_.get),k=c(_.has),I=c(_.set);r=function(e,t){if(k(_,e))throw new m(v);return t.facade=e,I(_,e,t),t},i=function(e){return w(_,e)||{}},o=function(e){return k(_,e)}}else{var S=p("state");f[S]=!0,r=function(e,t){if(h(e,S))throw new m(v);return t.facade=e,l(e,S,t),t},i=function(e){return h(e,S)?e[S]:{}},o=function(e){return h(e,S)}}e.exports={set:r,get:i,has:o,enforce:y,getterFor:b}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),i=n(5005),o=n(614),s=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),o=n(2788),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(7854),i=n(9781),o=n(4664),s=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",f="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=h(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(7854),i=n(6916),o=n(614),s=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),i=n(614),o=n(2597),s=n(8880),a=n(3505),c=n(2788),u=n(9909),l=n(6530).CONFIGURABLE,h=u.get,d=u.enforce,p=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=d(n),u.source||(u.source=p.join("string"==typeof m?m:""))),e!==r?(h?!v&&e[t]&&(f=!0):delete e[t],f?e[t]=n:s(e,t,n)):f?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},4488:function(e,t,n){var r=n(7854),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3505),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),i=n(4488),o=r.Object;e.exports=function(e){return o(i(e))}},7593:function(e,t,n){var r=n(7854),i=n(6916),o=n(111),s=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(7854),i=n(648),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e,t,n){var r=n(7854),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),s=n(7976),a=n(7674),c=n(9920),u=n(9587),l=n(6277),h=n(8340),d=n(7741),p=n(2914),f=n(1913);e.exports=function(e,t,n,v){var m=v?2:1,g=e.split("."),y=g[g.length-1],b=r.apply(null,g);if(b){var _=b.prototype;if(!f&&i(_,"cause")&&delete _.cause,!n)return b;var w=r("Error"),k=t((function(e,t){var n=l(v?t:e,void 0),r=v?new b(e):new b;return void 0!==n&&o(r,"message",n),p&&o(r,"stack",d(r.stack,2)),this&&s(_,this)&&u(r,this,k),arguments.length>m&&h(r,arguments[m]),r}));if(k.prototype=_,"Error"!==y&&(a?a(k,w):c(k,w,{name:!0})),c(k,b),!f)try{_.name!==y&&o(_,"name",y),_.constructor=k}catch(I){}return k}}},1703:function(e,t,n){var r=n(2109),i=n(7854),o=n(2104),s=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},1902:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(8180),i="firebase",o="9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,o,"app-compat")},3204:function(e,t,n){"use strict";var r=n(8180),i=n(4444),o=n(2238);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(3333),c=n(8463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p=h,f=d,v=new i.LL("auth","Firebase",d()),m=new a.Yd("@firebase/auth");function g(e,...t){m.logLevel<=a["in"].ERROR&&m.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw k(e,...t)}function b(e,...t){return k(e,...t)}function _(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n}),o=new i.LL("auth","Firebase",r);return o.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function k(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return v.create(e,...t)}function I(e,t,...n){if(!e)throw k(t,...n)}function S(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function C(e,t){e||S(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Map;function T(e){C(e instanceof Function,"Expected a class definition");let t=E.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,E.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(T);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function x(){return"http:"===L()||"https:"===L()}function L(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(x()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function $(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void S("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void S("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void S("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,o={}){return U(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),M.fetch()(z(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function U(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D),t);try{const t=new H(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Z(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Z(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Z(e,"email-already-in-use",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw _(e,a,s);y(e,a)}}catch(o){if(o instanceof i.ZR)throw o;y(e,"network-request-failed")}}async function F(e,t,n,r,i={}){const o=await B(e,t,n,r,i);return"mfaPendingCredential"in o&&y(e,"multi-factor-auth-required",{_serverResponse:o}),o}function z(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class H{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),j.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return B(e,"POST","/v1/accounts:update",t)}async function G(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),o=X(r);I(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:K(Y(o.auth_time)),issuedAtTime:K(Y(o.iat)),expirationTime:K(Y(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function X(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(o){return g("Caught error parsing JWT payload as JSON",o),null}}function Q(e){const t=X(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,G(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ae(o.providerUserInfo):[],a=se(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new re(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function oe(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await U(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=z(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ue;return n&&(I("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return oe(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:k}=t;I(y&&k,e,"internal-error");const S=ue.fromJSON(this.name,k);I("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof _,e,"internal-error"),le(d,e.name),le(p,e.name),le(f,e.name),le(v,e.name),le(m,e.name),le(g,e.name);const C=new he({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const pe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class ve{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ve(T(pe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||T(pe);const o=fe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=he._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ve(i,e,n)):new ve(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ke(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,i.z$)()){return/crios\//i.test(e)}function _e(e=(0,i.z$)()){return/iemobile/i.test(e)}function we(e=(0,i.z$)()){return/android/i.test(e)}function ke(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ie(e=(0,i.z$)()){return/webos/i.test(e)}function Se(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function Ce(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ee(e=(0,i.z$)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return(0,i.w1)()&&10===document.documentMode}function Oe(e=(0,i.z$)()){return Se(e)||we(e)||Ie(e)||ke(e)||/windows phone/i.test(e)||_e(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.z$)());break;case"Worker":n=`${me((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=T(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ve.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(T(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&T(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[T(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Re(e){return(0,i.m9)(e)}class $e{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ne(e,t,n){const r=Re(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Pe(t),{host:s,port:a}=Me(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||je()}function Pe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Pe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:De(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:De(t)}}}function De(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return S("not implemented")}_getIdTokenResponse(e){return S("not implemented")}_linkToIdToken(e,t){return S("not implemented")}_getReauthenticationResolver(e){return S("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return B(e,"POST","/v1/accounts:resetPassword",V(e,t))}async function Ue(e,t){return B(e,"POST","/v1/accounts:update",t)}async function Fe(e,t){return B(e,"POST","/v1/accounts:update",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",V(e,t))}async function He(e,t){return B(e,"POST","/v1/accounts:sendOobCode",V(e,t))}async function Ze(e,t){return He(e,t)}async function We(e,t){return He(e,t)}async function qe(e,t){return He(e,t)}async function Ge(e,t){return He(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}async function Je(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Ve{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ze(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ue(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="http://localhost";class et extends Ve{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new et(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Qe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",V(e,t))}async function nt(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t))}async function rt(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t));if(n.temporaryProof)throw Z(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Ve{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new st({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],o=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return o||r||n||t||e}class ut{constructor(e){var t,n,r,o,s,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(r=c["mode"])&&void 0!==r?r:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return I(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!n&&!r&&!t&&!i)return null;if(!s)return null;try{return new pt(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com",vt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class yt extends Ve{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class _t extends ht{constructor(e){I(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function kt(e,t){return F(e,"POST","/v1/accounts:signUp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.TWITTER_SIGN_IN_METHOD="twitter.com",wt.PROVIDER_ID="twitter.com";class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),o=St(n),s=new It({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=St(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function St(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e){var t;const n=Re(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new It({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await kt(n,{returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Et.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Et(e,t,n,r)}}function Tt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Et._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e,t){const n=(0,i.m9)(e);await Lt(!0,n,t);const{providerUserInfo:r}=await q(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Ot(r||[]);return n.providerData=n.providerData.filter((e=>o.has(e.providerId))),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}async function Lt(e,t,n){await ie(t);const r=Ot(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await ee(e,Tt(r,i,t,e),n);I(o.idToken,r,"internal-error");const s=X(o.idToken);I(s,r,"internal-error");const{sub:a}=s;return I(e.uid===a,r,"user-mismatch"),It._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&y(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t,n=!1){const r="signIn",i=await Tt(e,r,t),o=await It._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Nt(e,t){return $t(Re(e),t)}async function Pt(e,t){const n=(0,i.m9)(e);return await Lt(!1,n,t.providerId),xt(n,t)}async function Mt(e,t){return Rt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t){return F(e,"POST","/v1/accounts:signInWithCustomToken",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){const n=Re(e),r=await Dt(n,{token:t,returnSecureToken:!0}),i=await It._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Bt._fromServerResponse(e,t):y(e,"internal-error")}}class Bt extends Vt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Bt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t,n){const r=(0,i.m9)(e),o={requestType:"PASSWORD_RESET",email:t};n&&Ut(r,o,n),await We(r,o)}async function zt(e,t,n){await Be((0,i.m9)(e),{oobCode:t,newPassword:n})}async function Ht(e,t){await Fe((0,i.m9)(e),{oobCode:t})}async function Zt(e,t){const n=(0,i.m9)(e),r=await Be(n,{oobCode:t}),o=r.requestType;switch(I(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Vt._fromServerResponse(Re(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:o}}async function Wt(e,t){const{data:n}=await Zt((0,i.m9)(e),t);return n.email}async function qt(e,t,n){const r=Re(e),i=await kt(r,{returnSecureToken:!0,email:t,password:n}),o=await It._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Gt(e,t,n){return Nt((0,i.m9)(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t,n){const r=(0,i.m9)(e),o={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,r,"argument-error"),n&&Ut(r,o,n),await qe(r,o)}function Jt(e,t){const n=ut.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Yt(e,t,n){const r=(0,i.m9)(e),o=lt.credentialWithLink(t,n||A());return I(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Nt(r,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t){const n=x()?A():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:o}=await Xt((0,i.m9)(e),r);return o||[]}async function en(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:r};t&&Ut(n.auth,o,t);const{email:s}=await Ze(n.auth,o);s!==e.email&&await e.reload()}async function tn(e,t,n){const r=(0,i.m9)(e),o=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};n&&Ut(r.auth,s,n);const{email:a}=await Ge(r.auth,s);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),o=await r.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,nn(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function on(e,t){return an((0,i.m9)(e),t,null)}function sn(e,t){return an((0,i.m9)(e),null,t)}async function an(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await ee(e,Ue(r,o));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new un(o,e)}}if(!r)return null;switch(r){case"facebook.com":return new hn(o,i);case"github.com":return new dn(o,i);case"google.com":return new pn(o,i);case"twitter.com":return new fn(o,i,e.screenName||null);case"custom":case"anonymous":return new un(o,null);default:return new un(o,r,i)}}class un{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ln extends un{constructor(e,t,n,r){super(e,t,n),this.username=r}}class hn extends un{constructor(e,t){super(e,"facebook.com",t)}}class dn extends ln{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends un{constructor(e,t){super(e,"google.com",t)}}class fn extends ln{constructor(e,t,n){super(e,"twitter.com",t,n)}}function vn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Vt._fromServerResponse(n,e)));I(r.mfaPendingCredential,n,"internal-error");const o=mn._fromMfaPendingCredential(r.mfaPendingCredential);return new gn(o,i,(async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await It._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),It._forOperation(t.user,t.operationType,s);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const r=(0,i.m9)(e),o=t;return I(t.customData.operationType,r,"argument-error"),I(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),gn._fromError(r,o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}function wn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",V(e,t))}class kn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Vt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new kn(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const In=new WeakMap;function Sn(e){const t=(0,i.m9)(e);return In.has(t)||In.set(t,kn._fromUser(t)),In.get(t)}const Cn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cn,"1"),this.storage.removeItem(Cn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){const e=(0,i.z$)();return ye(e)||Se(e)}const On=1e3,An=10;class xn extends En{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tn()&&Ae(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,An):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),On)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xn.type="LOCAL";const Ln=xn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends En{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rn.type="SESSION";const $n=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Pn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Nn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.receivers=[];class Dn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=Mn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function Vn(e){jn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return"undefined"!==typeof jn()["WorkerGlobalScope"]&&"function"===typeof jn()["importScripts"]}async function Un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Fn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function zn(){return Bn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="firebaseLocalStorageDb",Zn=1,Wn="firebaseLocalStorage",qn="fbase_key";class Gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Kn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Jn(){const e=indexedDB.deleteDatabase(Hn);return new Gn(e).toPromise()}function Yn(){const e=indexedDB.open(Hn,Zn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:qn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Jn(),t(await Yn()))}))}))}async function Xn(e,t,n){const r=Kn(e,!0).put({[qn]:t,value:n});return new Gn(r).toPromise()}async function Qn(e,t){const n=Kn(e,!1).get(t),r=await new Gn(n).toPromise();return void 0===r?null:r.value}function er(e,t){const n=Kn(e,!0).delete(t);return new Gn(n).toPromise()}const tr=800,nr=3;class rr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>nr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(zn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Un(),!this.activeServiceWorker)return;this.sender=new Dn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Fn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yn();return await Xn(e,Cn,"1"),await er(e,Cn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>er(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Kn(e,!1).getAll();return new Gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),tr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rr.type="LOCAL";const ir=rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}function sr(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ur(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",cr().appendChild(r)}))}function lr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=500,dr=6e4,pr=1e12;class fr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new vr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class vr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=mr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),dr)}),hr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=lr("rcb"),yr=new N(3e4,6e4),br="https://www.google.com/recaptcha/api.js?";class _r{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!jn().grecaptcha}load(e,t=""){return I(wr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(jn().grecaptcha):new Promise(((n,r)=>{const o=jn().setTimeout((()=>{r(b(e,"network-request-failed"))}),yr.get());jn()[gr]=()=>{jn().clearTimeout(o),delete jn()[gr];const i=jn().grecaptcha;if(!i)return void r(b(e,"internal-error"));const s=i.render;i.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const s=`${br}?${(0,i.xO)({onload:gr,render:"explicit",hl:t})}`;ur(s).catch((()=>{clearTimeout(o),r(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!jn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class kr{async load(e){return new fr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="recaptcha",Sr={theme:"light",type:"image"};class Cr{constructor(e,t=Object.assign({},Sr),n){this.parameters=t,this.type=Ir,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new kr:new _r,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(x()&&!Bn(),this.auth,"internal-error"),await Er(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ar(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Er(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=st._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Or(e,t,n){const r=Re(e),o=await Lr(r,t,(0,i.m9)(n));return new Tr(o,(e=>Nt(r,e)))}async function Ar(e,t,n){const r=(0,i.m9)(e);await Lt(!1,r,"phone");const o=await Lr(r.auth,t,(0,i.m9)(n));return new Tr(o,(e=>Pt(r,e)))}async function xr(e,t,n){const r=(0,i.m9)(e),o=await Lr(r.auth,t,(0,i.m9)(n));return new Tr(o,(e=>Mt(r,e)))}async function Lr(e,t,n){var r;const i=await n.verify();try{let o;if(I("string"===typeof i,e,"argument-error"),I(n.type===Ir,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){I("enroll"===t.type,e,"internal-error");const n=await bn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;I(n,e,"missing-multi-factor-info");const s=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Rr(e,t){await xt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.providerId=$r.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return Lr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $r.credentialFromTaggedObject(t)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr(e,t){return t?T(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$r.PROVIDER_ID="phone",$r.PHONE_SIGN_IN_METHOD="phone";class Pr extends Ve{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mr(e){return $t(e.auth,new Pr(e),e.bypassAuthState)}function Dr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Rt(n,new Pr(e),e.bypassAuthState)}async function jr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),xt(n,new Pr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return jr;case"reauthViaPopup":case"reauthViaRedirect":return Dr;default:y(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new N(2e3,1e4);async function Ur(e,t,n){const r=Re(e);w(e,t,ht);const i=Nr(r,n),o=new Hr(r,"signInViaPopup",t,i);return o.executeNotNull()}async function Fr(e,t,n){const r=(0,i.m9)(e);w(r.auth,t,ht);const o=Nr(r.auth,n),s=new Hr(r.auth,"reauthViaPopup",t,o,r);return s.executeNotNull()}async function zr(e,t,n){const r=(0,i.m9)(e);w(r.auth,t,ht);const o=Nr(r.auth,n),s=new Hr(r.auth,"linkViaPopup",t,o,r);return s.executeNotNull()}class Hr extends Vr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Br.get())};e()}}Hr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zr="pendingRedirect",Wr=new Map;class qr extends Vr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const t=await Gr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gr(e,t){const n=Xr(t),r=Yr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Kr(e,t){return Yr(e)._set(Xr(t),"true")}function Jr(){Wr.clear()}function Yr(e){return T(e._redirectPersistence)}function Xr(e){return fe(Zr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t,n){return ei(e,t,n)}async function ei(e,t,n){const r=Re(e);w(e,t,ht);const i=Nr(r,n);return await Kr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=(0,i.m9)(e);w(r.auth,t,ht);const o=Nr(r.auth,n);await Kr(o,r.auth);const s=await ai(r);return o._openRedirect(r.auth,t,"reauthViaRedirect",s)}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);w(r.auth,t,ht);const o=Nr(r.auth,n);await Lt(!1,r,t.providerId),await Kr(o,r.auth);const s=await ai(r);return o._openRedirect(r.auth,t,"linkViaRedirect",s)}async function oi(e,t){return await Re(e)._initializationPromise,si(e,t,!1)}async function si(e,t,n=!1){const r=Re(e),i=Nr(r,t),o=new qr(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function ai(e){const t=Mn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=6e5;class ui{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!di(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ci&&this.cachedEventUids.clear(),this.cachedEventUids.has(li(e))}saveEventToCache(e){this.cachedEventUids.add(li(e)),this.lastProcessedEventTime=Date.now()}}function li(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function di(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vi=/^https?/;async function mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pi(e);for(const r of t)try{if(gi(r))return}catch(n){}y(e,"unauthorized-domain")}function gi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vi.test(n))return!1;if(fi.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new N(3e4,6e4);function bi(){const e=jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function _i(e){return new Promise(((t,n)=>{var r,i,o;function s(){bi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bi(),n(b(e,"network-request-failed"))},timeout:yi.get()})}if(null===(i=null===(r=jn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=jn().gapi)||void 0===o?void 0:o.load)){const t=lr("iframefcb");return jn()[t]=()=>{gapi.load?s():n(b(e,"network-request-failed"))},ur(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw wi=null,e}))}let wi=null;function ki(e){return wi=wi||_i(e),wi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new N(5e3,15e3),Si="__/auth/iframe",Ci="emulator/auth/iframe",Ei={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ti=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Oi(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,Ci):`https://${e.config.authDomain}/${Si}`,r={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},s=Ti.get(e.config.apiHost);s&&(r.eid=s);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Ai(e){const t=await ki(e),n=jn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Oi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ei,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),o=jn().setTimeout((()=>{r(i)}),Ii.get());function s(){jn().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Li=500,Ri=600,$i="_blank",Ni="http://localhost";class Pi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mi(e,t,n,r=Li,o=Ri){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},xi),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=be(l)?$i:n),ge(l)&&(t=t||Ni,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ee(l)&&"_self"!==c)return Di(t||"",c),new Pi(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(p){}return new Pi(d)}function Di(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="__/auth/handler",Vi="emulator/auth/handler";function Bi(e,t,n,r,s,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:o.SDK_VERSION,eventId:s};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Ui(e)}?${(0,i.xO)(u).slice(1)}`}function Ui({config:e}){return e.emulator?P(e,Vi):`https://${e.authDomain}/${ji}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="webStorageSupport";class zi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$n,this._completeRedirectFn=si}async _openPopup(e,t,n,r){var i;C(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Bi(e,t,n,A(),r);return Mi(e,o,Mn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Vn(Bi(e,t,n,A(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ai(e),n=new ui(e);return t.register("authEvent",(t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Fi,{type:Fi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Fi];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ye()||Se()}}const Hi=zi;class Zi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return S("unexpected MultiFactorSessionType")}}}class Wi extends Zi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wi(e)}_finalizeEnroll(e,t,n){return _n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qi{constructor(){}static assertion(e){return Wi._fromCredential(e)}}qi.FACTOR_ID="phone";var Gi="@firebase/auth",Ki="0.19.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xi(e){(0,o._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{I(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},a=new Le(t,r,i);return O(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o._registerComponent)(new c.wA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Ji(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)(Gi,Ki,Yi(e)),(0,o.registerVersion)(Gi,Ki,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xi("Browser");const eo=2e3;async function to(e,t,n){var r;const{BuildInfo:i}=Qi();C(t.sessionId,"AuthEvent did not contain a session ID");const o=await so(t.sessionId),s={};return Se()?s["ibi"]=i.packageName:we()?s["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(s["appDisplayName"]=i.displayName),s["sessionId"]=o,Bi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}async function no(e){const{BuildInfo:t}=Qi(),n={};Se()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await pi(e,n)}function ro(e){const{cordova:t}=Qi();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ce()?"_blank":"_system","location=yes"),n(i)}))}))}async function io(e,t,n){const{cordova:r}=Qi();let i=()=>{};try{await new Promise(((o,s)=>{let a=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{s(b(e,"redirect-cancelled-by-user"))}),eo))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function oo(e){var t,n,r,i,o,s,a,c,u,l;const h=Qi();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(o=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(s=null===h||void 0===h?void 0:h.cordova)||void 0===s?void 0:s.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function so(e){const t=ao(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function ao(e){if(C(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=20;class uo extends ui{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function lo(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:vo(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function ho(e,t){return mo()._set(go(e),t)}async function po(e){const t=await mo()._get(go(e));return t&&await mo()._remove(go(e)),t}function fo(e,t){var n,r;const i=bo(t);if(i.includes("/__/auth/callback")){const t=_o(i),o=t["firebaseError"]?yo(decodeURIComponent(t["firebaseError"])):null,s=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=s?b(s):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function vo(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<co;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function mo(){return T(Ln)}function go(e){return fe("authEvent",e.config.apiKey,e.name)}function yo(e){try{return JSON.parse(e)}catch(t){return null}}function bo(e){const t=_o(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=_o(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,o=_o(i)["link"];return o||i||r||n||e}function _o(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=500;class ko{constructor(){this._redirectPersistence=$n,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=si}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new uo(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){oo(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Jr(),await this._originValidation(e);const o=lo(e,n,r);await ho(e,o);const s=await to(e,o,t),a=await ro(s);return io(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=no(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Qi(),o=setTimeout((async()=>{await po(e),t.onEvent(So())}),wo),s=async n=>{clearTimeout(o);const r=await po(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=fo(r,n["url"])),t.onEvent(i||So())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,s);const a=r,c=`${i.packageName.toLowerCase()}://`;Qi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Io=ko;function So(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(e,t){Re(e)._logFramework(t)}var Eo="@firebase/auth-compat",To="0.2.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=1e3;function Ao(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function xo(){return"http:"===Ao()||"https:"===Ao()}function Lo(e=(0,i.z$)()){return!("file:"!==Ao()&&"ionic:"!==Ao()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ro(){return(0,i.b$)()||(0,i.UG)()}function $o(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function No(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Po(e=(0,i.z$)()){return $o()||No(e)}function Mo(){try{const e=self.localStorage,t=Mn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Po()||(0,i.hl)()}catch(e){return Do()&&(0,i.hl)()}return!1}function Do(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function jo(){return(xo()||(0,i.ru)()||Lo())&&!Ro()&&Mo()&&!Do()}function Vo(){return Lo()&&"undefined"!==typeof document}async function Bo(){return!!Vo()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Oo);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Uo(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo={LOCAL:"local",NONE:"none",SESSION:"session"},zo=I,Ho="persistence";function Zo(e,t){zo(Object.values(Fo).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?zo(t!==Fo.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?zo(t===Fo.NONE,e,"unsupported-persistence-type"):Do()?zo(t===Fo.NONE||t===Fo.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):zo(t===Fo.NONE||Mo(),e,"unsupported-persistence-type")}async function Wo(e){await e._initializationPromise;const t=Go(),n=fe(Ho,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function qo(e,t){const n=Go();if(!n)return[];const r=fe(Ho,e,t),i=n.getItem(r);switch(i){case Fo.NONE:return[pe];case Fo.LOCAL:return[ir,$n];case Fo.SESSION:return[$n];default:return[]}}function Go(){var e;try{return(null===(e=Uo())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=I;class Jo{constructor(){this.browserResolver=T(Hi),this.cordovaResolver=T(Io),this.underlyingResolver=null,this._redirectPersistence=$n,this._completeRedirectFn=si}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vo()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Ko(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Bo();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e){return e.unwrap()}function Xo(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e){return ts(e)}function es(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new is(e,yn(e,t))}else if(r){const e=ts(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function ts(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return $r.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=vt;break;case u.FACEBOOK:r=ft;break;case u.GITHUB:r=mt;break;case u.TWITTER:r=wt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:s,nonce:a}=t;return i||o||e||s?s?n.startsWith("saml.")?yt._create(n,s):et._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:i}):new pt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function ns(e,t){return t.catch((t=>{throw t instanceof i.ZR&&es(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:Qo(e),additionalUserInfo:vn(e),user:os.getOrCreate(n)}}))}async function rs(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>ns(e,n.confirm(t))}}class is{constructor(e,t){this.resolver=t,this.auth=Xo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ns(Yo(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._delegate=e,this.multiFactor=Sn(e)}static getOrCreate(e){return os.USER_MAP.has(e)||os.USER_MAP.set(e,new os(e)),os.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ns(this.auth,Pt(this._delegate,e))}async linkWithPhoneNumber(e,t){return rs(this.auth,Ar(this._delegate,e,t))}async linkWithPopup(e){return ns(this.auth,zr(this._delegate,e,Jo))}async linkWithRedirect(e){return await Wo(Re(this.auth)),ri(this._delegate,e,Jo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ns(this.auth,Mt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return rs(this.auth,xr(this._delegate,e,t))}reauthenticateWithPopup(e){return ns(this.auth,Fr(this._delegate,e,Jo))}async reauthenticateWithRedirect(e){return await Wo(Re(this.auth)),ti(this._delegate,e,Jo)}sendEmailVerification(e){return en(this._delegate,e)}async unlink(e){return await At(this._delegate,e),this}updateEmail(e){return on(this._delegate,e)}updatePassword(e){return sn(this._delegate,e)}updatePhoneNumber(e){return Rr(this._delegate,e)}updateProfile(e){return rn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return tn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}os.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss=I;class as{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;ss(n,"invalid-api-key",{appName:e.name}),ss(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Jo:void 0;this._delegate=t.initialize({options:{persistence:us(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(p),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?os.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ne(this._delegate,e,t)}applyActionCode(e){return Ht(this._delegate,e)}checkActionCode(e){return Zt(this._delegate,e)}confirmPasswordReset(e,t){return zt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ns(this._delegate,qt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Qt(this._delegate,e)}isSignInWithEmailLink(e){return Jt(this._delegate,e)}async getRedirectResult(){ss(jo(),this._delegate,"operation-not-supported-in-this-environment");const e=await oi(this._delegate,Jo);return e?ns(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Co(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=cs(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=cs(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return Kt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Ft(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(Zo(this._delegate,e),e){case Fo.SESSION:t=$n;break;case Fo.LOCAL:const e=await T(ir)._isAvailable();t=e?ir:Ln;break;case Fo.NONE:t=pe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ns(this._delegate,Ct(this._delegate))}signInWithCredential(e){return ns(this._delegate,Nt(this._delegate,e))}signInWithCustomToken(e){return ns(this._delegate,jt(this._delegate,e))}signInWithEmailAndPassword(e,t){return ns(this._delegate,Gt(this._delegate,e,t))}signInWithEmailLink(e,t){return ns(this._delegate,Yt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return rs(this._delegate,Or(this._delegate,e,t))}async signInWithPopup(e){return ss(jo(),this._delegate,"operation-not-supported-in-this-environment"),ns(this._delegate,Ur(this._delegate,e,Jo))}async signInWithRedirect(e){return ss(jo(),this._delegate,"operation-not-supported-in-this-environment"),await Wo(this._delegate),Qr(this._delegate,e,Jo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Wt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function cs(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,o=e=>i(e&&os.getOrCreate(e));return{next:o,error:t,complete:n}}function us(e,t){const n=qo(e,t);if("undefined"===typeof self||n.includes(ir)||n.push(ir),"undefined"!==typeof window)for(const r of[Ln,$n])n.includes(r)||n.push(r);return n.includes(pe)||n.push(pe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as.Persistence=Fo;class ls{constructor(){this.providerId="phone",this._delegate=new $r(Yo(r.Z.auth()))}static credential(e,t){return $r.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ls.PHONE_SIGN_IN_METHOD=$r.PHONE_SIGN_IN_METHOD,ls.PROVIDER_ID=$r.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hs=I;class ds{constructor(e,t,n=r.Z.app()){var i;hs(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Cr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="auth-compat";function fs(e){e.INTERNAL.registerComponent(new c.wA(ps,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new as(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:lt,FacebookAuthProvider:ft,GithubAuthProvider:mt,GoogleAuthProvider:vt,OAuthProvider:pt,SAMLAuthProvider:_t,PhoneAuthProvider:ls,PhoneMultiFactorGenerator:qi,RecaptchaVerifier:ds,TwitterAuthProvider:wt,Auth:as,AuthCredential:Ve,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Eo,To)}fs(r.Z)},8582:function(){},5205:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var o=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)}))):(a(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)})))}))}function s(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return s(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return s(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return s(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},8320:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(6656);function i(e,t,n){const{self:r=!1}=t.modifiers||{},i=t.value,o="object"===typeof i&&i.options||{passive:!0},s="function"===typeof i||"handleEvent"in i?i:i.handler,a=r?e:t.arg?document.querySelector(t.arg):window;a&&(a.addEventListener("scroll",s,o),e._onScroll=Object(e._onScroll),e._onScroll[n.context._uid]={handler:s,options:o,target:r?void 0:a})}function o(e,t,n){var r;if(null==(r=e._onScroll)||!r[n.context._uid])return;const{handler:i,options:o,target:s=e}=e._onScroll[n.context._uid];s.removeEventListener("scroll",i,o),delete e._onScroll[n.context._uid]}const s={inserted:i,unbind:o};var a=s,c=n(3358),u=n(1824),l=n(144),h=l.Z.extend({name:"scrollable",directives:{Scroll:s},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,u.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),d=n(9177),p=n(2936),f=n(4589),v=n(3325);const m=(0,v.Z)(r.Z,h,d.Z,p.Z,(0,c.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var g=m.extend({name:"v-app-bar",directives:{Scroll:a},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return h.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const e=this.computedScrollThreshold;return Math.max((e-this.currentScroll)/e,0)},computedContentHeight(){if(!this.shrinkOnScroll)return r.Z.options.computed.computedContentHeight.call(this);const e=this.dense?48:56,t=this.computedOriginalHeight;return e+(t-e)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const e=1.25,t=1.5;return e+(t-e)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let e=r.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(e+=parseInt(this.extensionHeight)),e},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const e=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?e:-e},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:r.Z.options.computed.isCollapsed.call(this)},isProminent(){return r.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...r.Z.options.computed.styles.call(this),fontSize:(0,f.kb)(this.computedFontSize,"rem"),marginTop:(0,f.kb)(this.computedMarginTop),transform:`translateY(${(0,f.kb)(this.computedTransform)})`,left:(0,f.kb)(this.computedLeft),right:(0,f.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(e){this.isActive=!e||0!==this.currentScroll},hideOnScroll(e){this.isActive=!e||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const e=r.Z.options.methods.genBackground.call(this);return e.data=this._b(e.data||{},e.tag,{style:{opacity:this.computedOpacity}}),e},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(e){const t=r.Z.options.render.call(this,e);return t.data=t.data||{},this.canScroll&&(t.data.directives=t.data.directives||[],t.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t}})},5206:function(e,t,n){"use strict";var r=n(172),i=n(3150),o=n(144);t["Z"]=o.Z.extend({name:"v-app-bar-nav-icon",functional:!0,render(e,{slots:t,listeners:n,props:o,data:s}){const a=Object.assign(s,{staticClass:`v-app-bar__nav-icon ${s.staticClass||""}`.trim(),props:{...o,icon:!0},on:n}),c=t().default;return e(i.Z,a,c||[e(r.Z,"$menu")])}})},7524:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(1703);var r=n(8085),i=n(3325),o=(0,i.Z)(r.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},6370:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(6952),i=n(2529),o=n(3712),s=n(4589),a=n(3325),c=(0,a.Z)(r.Z,i.Z,o.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,s.kb)(this.size),minWidth:(0,s.kb)(this.size),width:(0,s.kb)(this.size),...this.measurableStyles}}},render(e){const t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},3150:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5648),i=n(624),o=i.Z,s=n(7352),a=n(2936),c=n(3377),u=n(3536),l=n(6505),h=n(9131),d=n(3325),p=n(1824);const f=(0,d.Z)(r.Z,l.Z,u.Z,h.Z,(0,s.d)("btnToggle"),(0,a.d)("inputValue"));var v=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...l.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return c.Z.options.computed.computedElevation.call(this)},computedRipple(){var e;const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(e=this.ripple)?e:t)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,p.fK)(e,t,this)}))},methods:{click(e){!this.retainFocusOnClick&&!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o,{props:{indeterminate:!0,size:23,width:2}})])}},render(e){const t=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:r}=this.generateRouteLink(),i=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),e(n,this.disabled?r:i(this.color,r),t)}})},9762:function(e,t,n){"use strict";n(8582);var r=n(4589);t["Z"]=(0,r.Ji)("spacer","div","v-spacer")},6428:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r,i=n(6210),o=n(6952),s=n(9131),a=n(8085),c=n(4589),u=n(144),l=n(3325);function h(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function d(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(r||(r={}));const p=(0,l.Z)(i.Z,o.Z,s.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,c.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,c.XP)(e).find((t=>e[t]));return t&&r[t]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const n=[],r=this.getDefaultData();let i="material-icons";const o=e.indexOf("-"),s=o<=-1;s?n.push(e):(i=e.slice(0,o),h(i)&&(i="")),r.class[i]=!0,r.class[e]=!s;const a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),t(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon(e,t){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);const i=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(i,n)])}},render(e){const t=this.getIcon();return"string"===typeof t?d(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var f=u.Z.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(e,{data:t,children:n}){let r="";return t.domProps&&(r=t.domProps.textContent||t.domProps.innerHTML||r,delete t.domProps.textContent,delete t.domProps.innerHTML),e(p,t,r?[r]:n)}})},172:function(e,t,n){"use strict";var r=n(6428);t["Z"]=r.Z},2829:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(8083),i=n(3857),o=i.Z,s=n(8085),a=n(3325),c=n(6290),u=n(1824);const l="undefined"!==typeof window&&"IntersectionObserver"in window;var h=(0,a.Z)(o,s.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push(`linear-gradient(${this.gradient})`),t&&e.push(`url("${t}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(e,t,n){if(!l||n||this.eager){if(this.normalisedSrc.lazySrc){const e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const e=new Image;this.image=e,e.onload=()=>{e.decode?e.decode().catch((e=>{(0,u.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(e.message?`\nOriginal error: ${e.message}`:""),this)})).then(this.onLoad):this.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize(e,t=100){const n=()=>{const{naturalHeight:r,naturalWidth:i}=e;r||i?(this.naturalWidth=i,this.calculatedAspectRatio=i/r):e.complete||!this.isLoading||this.hasError||null==t||setTimeout(n,t)};n()},genContent(){const e=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:`${this.naturalWidth}px`}}),e},__genPlaceholder(){if(this.$slots.placeholder){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(e){const t=o.options.render.call(this,e),n=(0,c.ZP)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:l?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,n,t.children)}})},6816:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3385),i=r.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(e){this.groups.push(e)},unregister(e){const t=this.groups.findIndex((t=>t._uid===e._uid));t>-1&&this.groups.splice(t,1)},listClick(e){if(!this.expand)for(const t of this.groups)t.toggle(e)}},render(e){const t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}})},7620:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6952),i=n(6505),o=n(7352),s=n(8085),a=n(2936),c=n(6286),u=n(4589),l=n(1824),h=n(3325);const d=(0,h.Z)(r.Z,i.Z,s.Z,(0,o.d)("listItemGroup"),(0,a.d)("inputValue"));var p=d.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...i.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(i.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,l.Jk)("avatar",this)},methods:{click(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs(){const e={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="option",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||`list-item-${this._uid}`):this.isInList&&(e.role="listitem")),e},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(e){let{tag:t,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:e=>{e.keyCode===u.Do.enter&&this.click(e),this.$emit("keydown",e)}},this.inactive&&(t="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(t,this.isActive?this.setTextColor(this.color,n):n,r)}})},3099:function(e,t,n){"use strict";var r=n(144);t["Z"]=r.Z.extend({name:"v-list-item-action",functional:!0,render(e,{data:t,children:n=[]}){t.staticClass=t.staticClass?`v-list-item__action ${t.staticClass}`:"v-list-item__action";const r=n.filter((e=>!1===e.isComment&&" "!==e.text));return r.length>1&&(t.staticClass+=" v-list-item__action--stack"),e("div",t,n)}})},9507:function(e,t,n){"use strict";n.d(t,{V9:function(){return L}});var r=n(4589),i=n(6816),o=n(172),s=n(7620),a=n(144),c=a.Z.extend({name:"v-list-item-icon",functional:!0,render(e,{data:t,children:n}){return t.staticClass=`v-list-item__icon ${t.staticClass||""}`.trim(),e("div",t,n)}}),u=n(6210),l=n(1824),h=a.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,l.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}}),d=n(6952),p=n(2936),f=n(6257),v=n(6286),m=n(5827),g=n(3325);const y=(0,g.Z)(u.Z,h,d.Z,(0,f.f)("list"),p.Z);var b=y.extend().extend({name:"v-list-group",directives:{ripple:v.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(e){!this.subGroup&&e&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(e){this.disabled||(this.isBooted=!0,this.$emit("click",e),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(e){return this.$createElement(o.Z,e)},genAppendIcon(){const e=!this.subGroup&&this.appendIcon;return e||this.$slots.appendIcon?this.$createElement(c,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(e)]):null},genHeader(){return this.$createElement(s.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,r.z9)(this))]))},genPrependIcon(){const e=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return e||this.$slots.prependIcon?this.$createElement(c,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(e)]):null},onRouteChange(e){if(!this.group)return;const t=this.matchRoute(e.path);t&&this.isActive!==t&&this.list&&this.list.listClick(this._uid),this.isActive=t},toggle(e){const t=this._uid===e;t&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=t))},matchRoute(e){return null!==e.match(this.group)}},render(e){return e("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),e(m.Fx,this.genItems())])}}),_=n(4419),w=n(1431),k=n(8085);const I=(0,g.Z)(_.Z,w.Z,k.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((e,t)=>this.toggleMethod(this.getValue(e,t))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some((e=>this.valueComparator(e,t))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,l.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",(()=>this.onClick(e))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);const r=this.selectedValues.indexOf(n);if(!(r<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((e=>e!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const n=t.find((e=>!e.disabled));if(!n)return;const r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),r=n.findIndex((t=>t===e));this.mandatory&&r>-1&&n.length-1<1||null!=this.max&&r<0&&n.length+1>this.max||(r>-1?n.splice(r,1):n.push(e),this.internalValue=n)},updateSingle(e){const t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});I.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var S=(0,g.Z)(I,d.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...I.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...I.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),C=n(3099),E=n(6370),T=E.Z,O=T.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...T.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(e){const t=T.options.render.call(this,e);return t.data=t.data||{},t.data.staticClass+=" v-list-item__avatar",t}});const A=(0,r.Ji)("v-list-item__action-text","span"),x=(0,r.Ji)("v-list-item__content","div"),L=(0,r.Ji)("v-list-item__title","div"),R=(0,r.Ji)("v-list-item__subtitle","div");i.Z,s.Z,C.Z},7877:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9177),i=r.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:e,top:t,right:n,footer:r,insetFooter:i,bottom:o,left:s}=this.$vuetify.application;return{paddingTop:`${t+e}px`,paddingRight:`${n}px`,paddingBottom:`${r+i+o}px`,paddingLeft:`${s}px`}}},render(e){const t={staticClass:"v-main",style:this.styles,ref:"main"};return e(this.tag,t,[e("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},4216:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(2829),i=n(3358),o=n(6952),s=n(3325);function a(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];r.isActive&&r.isDependent?t.push(r):t.push(...a(r.$children))}return t}var c=(0,s.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(e){if(e)return;const t=this.getOpenDependents();for(let n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements(){const e=[],t=this.getOpenDependents();for(let n=0;n<t.length;n++)e.push(...t[n].getClickableDependentElements());return e},getClickableDependentElements(){const e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push(...this.getOpenDependentElements()),e}}}),u=n(1824),l=n(144),h=l.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:e=>!isNaN(Number(e))||["xs","sm","md","lg","xl"].includes(String(e))}},computed:{isMobile(){const{mobile:e,width:t,name:n,mobileBreakpoint:r}=this.$vuetify.breakpoint;if(r===this.mobileBreakpoint)return e;const i=parseInt(this.mobileBreakpoint,10),o=!isNaN(i);return o?t<i:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,u.Rn)("mobile-break-point","mobile-breakpoint",this)}}),d=n(8085),p=n(2936),f=(0,s.Z)(o.Z,d.Z,p.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),v=f,m=n(4589),g=l.Z.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new v({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,m.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,m.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[m.Do.up,m.Do.pageup],n=[m.Do.down,m.Do.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const n=t.shiftKey||t.deltaX?"x":"y",r="y"===n?t.deltaY:t.deltaX||t.deltaY;let i,o;"y"===n?(i=0===e.scrollTop,o=e.scrollTop+e.clientHeight===e.scrollHeight):(i=0===e.scrollLeft,o=e.scrollLeft+e.clientWidth===e.scrollWidth);const s=r<0,a=r>0;return!(i||!s)||(!(o||!a)||!(!i&&!o)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,m.iZ)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,n=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(n,t))||!this.shouldScroll(t,e)}for(let n=0;n<t.length;n++){const r=t[n];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,m.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),y=n(9177),b=n(1706);function _(){return!0}function w(e,t,n){if(!e||!1===k(e,n))return!1;const r=(0,b.e)(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(t),!i.some((t=>t.contains(e.target)))}function k(e,t){const n="object"===typeof t.value&&t.value.closeConditional||_;return n(e)}function I(e,t,n,r){const i="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&w(e,t,n)&&setTimeout((()=>{k(e,n)&&i&&i(e)}),0)}function S(e,t){const n=(0,b.e)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const C={inserted(e,t,n){const r=r=>I(r,e,t,n),i=n=>{e._clickOutside.lastMousedownWasOutside=w(n,e,t)};S(e,(e=>{e.addEventListener("click",r,!0),e.addEventListener("mousedown",i,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:r,onMousedown:i}},unbind(e,t,n){e._clickOutside&&(S(e,(t=>{var r;if(!t||null==(r=e._clickOutside)||!r[n.context._uid])return;const{onClick:i,onMousedown:o}=e._clickOutside[n.context._uid];t.removeEventListener("click",i,!0),t.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[n.context._uid])}};var E=C,T=n(549);const O=e=>{const{touchstartX:t,touchendX:n,touchstartY:r,touchendY:i}=e,o=.5,s=16;e.offsetX=n-t,e.offsetY=i-r,Math.abs(e.offsetY)<o*Math.abs(e.offsetX)&&(e.left&&n<t-s&&e.left(e),e.right&&n>t+s&&e.right(e)),Math.abs(e.offsetX)<o*Math.abs(e.offsetY)&&(e.up&&i<r-s&&e.up(e),e.down&&i>r+s&&e.down(e))};function A(e,t){const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,t.start&&t.start(Object.assign(e,t))}function x(e,t){const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,t.end&&t.end(Object.assign(e,t)),O(t)}function L(e,t){const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,t.move&&t.move(Object.assign(e,t))}function R(e){const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>A(e,t),touchend:e=>x(e,t),touchmove:e=>L(e,t)}}function $(e,t,n){const r=t.value,i=r.parent?e.parentElement:e,o=r.options||{passive:!0};if(!i)return;const s=R(t.value);i._touchHandlers=Object(i._touchHandlers),i._touchHandlers[n.context._uid]=s,(0,m.XP)(s).forEach((e=>{i.addEventListener(e,s[e],o)}))}function N(e,t,n){const r=t.value.parent?e.parentElement:e;if(!r||!r._touchHandlers)return;const i=r._touchHandlers[n.context._uid];(0,m.XP)(i).forEach((e=>{r.removeEventListener(e,i[e])})),delete r._touchHandlers[n.context._uid]}const P={inserted:$,unbind:N};var M=P;const D=(0,s.Z)((0,i.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),o.Z,c,h,g,y.Z,d.Z);var j=D.extend({name:"v-navigation-drawer",directives:{ClickOutside:E,Resize:T.Z,Touch:M},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const e=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?e+this.$vuetify.application.top:e},computedTop(){if(!this.hasApp)return 0;let e=this.$vuetify.application.bar;return e+=this.clipped?this.$vuetify.application.top:0,e},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&h.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const e=this.isBottom?"translateY":"translateX";return{height:(0,m.kb)(this.height),top:this.isBottom?"auto":(0,m.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,m.kb)(this.computedMaxHeight)})`:void 0,transform:`${e}(${(0,m.kb)(this.computedTransform,"%")})`,width:(0,m.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(e){this.$emit("input",e)},isMobile(e,t){!e&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=t&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!e)},permanent(e){e&&(this.isActive=!0)},showOverlay(e){e?this.genOverlay():this.removeOverlay()},value(e){this.permanent||(null!=e?e!==this.isActive&&(this.isActive=e):this.init())},expandOnHover:"updateMiniVariant",isMouseover(e){this.updateMiniVariant(!e)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const e=this.$el.parentNode;if(!e)return;const t=e.getBoundingClientRect();this.touchArea={left:t.left+50,right:t.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const e={height:"100%",width:"100%",src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img(e):this.$createElement(r.Z,{props:e});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[t])},genDirectives(){const e=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners(){const e={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:e=>{if(e.target!==e.currentTarget)return;this.$emit("transitionend",e);const t=document.createEvent("UIEvents");t.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(t)}};return this.miniVariant&&(e.click=()=>this.$emit("update:mini-variant",!1)),e},genPosition(e){const t=(0,m.z9)(this,e);return t?this.$createElement("div",{staticClass:`v-navigation-drawer__${e}`},t):t},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(e){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(e.touchendX-e.touchstartX)<100||(this.right&&e.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(e){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(e.touchendX-e.touchstartX)<100||(!this.right&&e.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const e=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(e)?this.$el.clientWidth:e},updateMiniVariant(e){this.expandOnHover&&this.miniVariant!==e&&this.$emit("update:mini-variant",e)}},render(e){const t=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,m.z9)(this,"img"))&&t.unshift(this.genBackground()),e(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),t)}})},624:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(8083),i=n(6952),o=n(4589),s=i.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(e,t){return this.$createElement("circle",{class:`v-progress-circular__${e}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg(){const e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},e)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(e,t,n){this.isVisible=n}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},3857:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2529),i=n(3325),o=(0,i.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},3385:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(6210),i=n(6952),o=n(3377),s=n(2529),a=n(3712),c=n(8085),u=n(3325),l=(0,u.Z)(r.Z,i.Z,o.Z,s.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(e){const t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},5648:function(e,t,n){"use strict";var r=n(3385);t["Z"]=r.Z},6656:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3385),i=n(2829),o=n(4589),s=n(1824),a=r.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const e=this.computedContentHeight;if(!this.isExtended)return e;const t=parseInt(this.extensionHeight);return this.isCollapsed?e:e+(isNaN(t)?0:t)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,o.kb)(this.computedHeight)}}},created(){const e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,s.fK)(e,t,this)}))},methods:{genBackground(){const e={height:(0,o.kb)(this.computedHeight),src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img({props:e}):this.$createElement(i.Z,{props:e});return this.$createElement("div",{staticClass:"v-toolbar__image"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,o.kb)(this.computedContentHeight)}},(0,o.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,o.kb)(this.extensionHeight)}},(0,o.z9)(this,"extension"))}},render(e){this.isExtended=this.extended||!!this.$scopedSlots.extension;const t=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&t.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&t.unshift(this.genBackground()),e(this.tag,n,t)}})},7921:function(e,t,n){"use strict";n.d(t,{lj:function(){return s}});var r=n(6656),i=n(4589);const o=(0,i.Ji)("v-toolbar__title"),s=(0,i.Ji)("v-toolbar__items");r.Z},5827:function(e,t,n){"use strict";n.d(t,{Fx:function(){return h},Z5:function(){return u},Qn:function(){return l}});var r=n(6290);function i(e=[],...t){return Array().concat(e,...t)}function o(e,t="top center 0",n){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render(t,n){const o="transition"+(n.props.group?"-group":""),s={props:{name:e,mode:n.props.mode},on:{beforeEnter(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(e=>{const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=r+"px",e.style.height=i+"px"})),s.on.afterLeave=i(s.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:o}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=o||""}}))),n.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(o,(0,r.ZP)(n.data,s),n.children)}}}function s(e,t,n="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:n}},render(n,i){return n("transition",(0,r.ZP)(i.data,{props:{name:e},on:t}),i.children)}}}var a=n(4589);function c(e="",t=!1){const n=t?"width":"height",r=`offset${(0,a.jC)(n)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},enter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const o=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=o}))},afterEnter:o,enterCancelled:o,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),o(t)}function o(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition"),o("tab-reverse-transition"),o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-transition"),o("dialog-bottom-transition"),o("dialog-top-transition");const u=o("fade-transition"),l=(o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition")),h=(o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition"),s("expand-transition",c()));s("expand-x-transition",c("",!0))},8083:function(e,t,n){"use strict";function r(e,t,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const r=t.modifiers||{},o=t.value,{handler:s,options:a}="object"===typeof o?o:{handler:o,options:{}},c=new IntersectionObserver(((o=[],a)=>{var c;const u=null==(c=e._observe)?void 0:c[n.context._uid];if(!u)return;const l=o.some((e=>e.isIntersecting));!s||r.quiet&&!u.init||r.once&&!l&&!u.init||s(o,a,l),l&&r.once?i(e,t,n):u.init=!0}),a);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:c},c.observe(e)}function i(e,t,n){var r;const i=null==(r=e._observe)?void 0:r[n.context._uid];i&&(i.observer.unobserve(e),delete e._observe[n.context._uid])}const o={inserted:r,unbind:i};t["Z"]=o},549:function(e,t,n){"use strict";function r(e,t,n){const r=t.value,i=t.options||{passive:!0};window.addEventListener("resize",r,i),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:r,options:i},t.modifiers&&t.modifiers.quiet||r()}function i(e,t,n){var r;if(null==(r=e._onResize)||!r[n.context._uid])return;const{callback:i,options:o}=e._onResize[n.context._uid];window.removeEventListener("resize",i,o),delete e._onResize[n.context._uid]}const o={inserted:r,unbind:i};t["Z"]=o},6286:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(4589);const i=80;function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function s(e){return"TouchEvent"===e.constructor.name}function a(e){return"KeyboardEvent"===e.constructor.name}const c=(e,t,n={})=>{let r=0,i=0;if(!a(e)){const n=t.getBoundingClientRect(),o=s(e)?e.touches[e.touches.length-1]:e;r=o.clientX-n.left,i=o.clientY-n.top}let o=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,o=t.clientWidth/2,o=n.center?o:o+Math.sqrt((r-o)**2+(i-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=(t.clientWidth-2*o)/2+"px",l=(t.clientHeight-2*o)/2+"px",h=n.center?u:r-o+"px",d=n.center?l:i-o+"px";return{radius:o,scale:c,x:h,y:d,centerX:u,centerY:l}},u={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:s,scale:a,x:u,y:l,centerX:h,centerY:d}=c(e,t,n),p=2*s+"px";i.className="v-ripple__animation",i.style.width=p,i.style.height=p,t.appendChild(r);const f=window.getComputedStyle(t);f&&"static"===f.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),o(i,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),i.dataset.activated=String(performance.now()),setTimeout((()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),o(i,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),i)}};function l(e){return"undefined"===typeof e||!!e}function h(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,s(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||a(e),n._ripple.class&&(t.class=n._ripple.class),s(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{u.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),i)}else u.show(e,n,t)}}function d(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{d(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function p(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let f=!1;function v(e){f||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(f=!0,h(e))}function m(e){f=!1,d(e)}function g(e){!0===f&&(f=!1,d(e))}function y(e,t,n){const r=l(t.value);r||u.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;const i=t.value||{};i.center&&(e._ripple.centered=!0),i.class&&(e._ripple.class=t.value.class),i.circle&&(e._ripple.circle=i.circle),r&&!n?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",h),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",v),e.addEventListener("keyup",m),e.addEventListener("blur",g),e.addEventListener("dragstart",d,{passive:!0})):!r&&n&&b(e)}function b(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",p),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",v),e.removeEventListener("keyup",m),e.removeEventListener("dragstart",d),e.removeEventListener("blur",g)}function _(e,t,n){y(e,t,!1)}function w(e){delete e._ripple,b(e)}function k(e,t){if(t.value===t.oldValue)return;const n=l(t.oldValue);y(e,t,n)}const I={bind:_,unbind:w,update:k};var S=I},1910:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r={};n.r(r),n.d(r,{easeInCubic:function(){return y},easeInOutCubic:function(){return _},easeInOutQuad:function(){return g},easeInOutQuart:function(){return I},easeInOutQuint:function(){return E},easeInQuad:function(){return v},easeInQuart:function(){return w},easeInQuint:function(){return S},easeOutCubic:function(){return b},easeOutQuad:function(){return m},easeOutQuart:function(){return k},easeOutQuint:function(){return C},linear:function(){return f}});var i=n(144),o=n(1824);function s(e,t={}){if(s.installed)return;s.installed=!0,i.Z!==e&&(0,o.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},r=t.directives||{};for(const i in r){const t=r[i];e.directive(i,t)}(function t(n){if(n){for(const r in n){const i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var u=n(4589);class l{constructor(){this.framework={}}init(e,t){}}class h extends l{constructor(e,t){super();const n=(0,u.Ee)({},c),{userPreset:r}=t,{preset:i={},...s}=r;null!=i.preset&&(0,o.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=(0,u.Ee)((0,u.Ee)(n,i),s)}}h.property="presets";class d extends l{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce(((e,t)=>e+t),0)}}d.property="application";class p extends l{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:r}=e[p.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=r}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,o=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),s=n<this.thresholds.lg-this.scrollBarWidth&&!(o||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=o,this.lg=s,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(o||s||a),this.smAndUp=!r&&(i||o||s||a),this.mdOnly=o,this.mdAndDown=(r||i||o)&&!(s||a),this.mdAndUp=!(r||i)&&(o||s||a),this.lgOnly=s,this.lgAndDown=(r||i||o||s)&&!a,this.lgAndUp=!(r||i||o)&&(s||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case o:this.name="md";break;case s:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}p.property="breakpoint";n(1703);const f=e=>e,v=e=>e**2,m=e=>e*(2-e),g=e=>e<.5?2*e**2:(4-2*e)*e-1,y=e=>e**3,b=e=>--e**3+1,_=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,w=e=>e**4,k=e=>1- --e**4,I=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,S=e=>e**5,C=e=>1+--e**5,E=e=>e<.5?16*e**5:1+16*--e**5;function T(e){if("number"===typeof e)return e;let t=x(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function O(e){const t=x(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(e)} instead.`)}function A(e){return null==e?e:e.constructor.name}function x(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function L(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},i=O(n.container);if(n.appOffset&&L.framework.application){const e=i.classList.contains("v-navigation-drawer"),t=i.classList.contains("v-navigation-drawer--clipped"),{bar:r,top:o}=L.framework.application;n.offset+=r,e&&!t||(n.offset+=o)}const o=performance.now();let s;s="number"===typeof e?T(e)-n.offset:T(e)-T(i)-n.offset;const a=i.scrollTop;if(s===a)return Promise.resolve(s);const c="function"===typeof n.easing?n.easing:r[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(r){const u=r-o,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);i.scrollTop=Math.floor(a+(s-a)*c(l));const h=i===document.body?document.documentElement.clientHeight:i.clientHeight,d=h+i.scrollTop>=i.scrollHeight;if(1===l||s>i.scrollTop&&d)return e(s);requestAnimationFrame(t)}))))}L.framework={},L.init=()=>{};class R extends l{constructor(){return super(),L}}R.property="goTo";const $={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var N=$;const P={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var M=P;const D={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var j=D;const V={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var B=V;const U={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var F=U;function z(e,t){const n={};for(const r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var H=z("font-awesome-icon",B),Z=Object.freeze({mdiSvg:N,md:M,mdi:j,fa:B,fa4:F,faSvg:H});class W extends l{constructor(e){super();const{iconfont:t,values:n,component:r}=e[W.property];this.component=r,this.iconfont=t,this.values=(0,u.Ee)(Z[t],n)}}W.property="icons";const q="$vuetify.",G=Symbol("Lang fallback");function K(e,t,n=!1,r){const i=t.replace(q,"");let s=(0,u.vO)(e,i,G);return s===G&&(n?((0,o.N6)(`Translation key "${i}" not found in fallback`),s=t):((0,o.Kd)(`Translation key "${i}" not found, falling back to default`),s=K(r,t,!0,r))),s}class J extends l{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:r}=e[J.property];this.current=t,this.locales=n,this.translator=r||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return K(t,e,!1,n)}t(e,...t){return e.startsWith(q)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n])))}}J.property="lang";var Y=n(7093);const X=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Q=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,ee=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],te=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ne(e){const t=Array(3),n=Q,r=X;for(let i=0;i<3;++i)t[i]=Math.round(255*(0,u.uZ)(n(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function re(e){const t=[0,0,0],n=te,r=ee,i=n((e>>16&255)/255),o=n((e>>8&255)/255),s=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*o+r[a][2]*s;return t}const ie=.20689655172413793,oe=e=>e>ie**3?Math.cbrt(e):e/(3*ie**2)+4/29,se=e=>e>ie?e**3:3*ie**2*(e-4/29);function ae(e){const t=oe,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function ce(e){const t=se,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function ue(e,t=!1,n=!0){const{anchor:r,...i}=e,o=Object.keys(i),s={};for(let a=0;a<o.length;++a){const r=o[a],i=e[r];null!=i&&(n?t?("base"===r||r.startsWith("lighten")||r.startsWith("darken"))&&(s[r]=(0,Y.hq)(i)):s[r]="object"===typeof i?ue(i,!0,n):ve(r,(0,Y.jx)(i)):s[r]={base:(0,Y.I4)((0,Y.jx)(i))})}return t||(s.anchor=r||s.base||s.primary.base),s}const le=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,he=(e,t,n)=>{const[r,i]=t.split(/(\d)/,2);return`\n.v-application .${e}.${r}-${i} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${r}-${i} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},de=(e,t="base")=>`--v-${e}-${t}`,pe=(e,t="base")=>`var(${de(e,t)})`;function fe(e,t=!1){const{anchor:n,...r}=e,i=Object.keys(r);if(!i.length)return"";let o="",s="";const a=t?pe("anchor"):n;s+=`.v-application a { color: ${a}; }`,t&&(o+=`  ${de("anchor")}: ${n};\n`);for(let c=0;c<i.length;++c){const n=i[c],r=e[n];s+=le(n,t?pe(n):r.base),t&&(o+=`  ${de(n)}: ${r.base};\n`);const a=(0,u.XP)(r);for(let e=0;e<a.length;++e){const i=a[e],c=r[i];"base"!==i&&(s+=he(n,i,t?pe(n,i):c),t&&(o+=`  ${de(n,i)}: ${c};\n`))}}return t&&(o=`:root {\n${o}}\n\n`),o+s}function ve(e,t){const n={base:(0,Y.I4)(t)};for(let r=5;r>0;--r)n[`lighten${r}`]=(0,Y.I4)(me(t,r));for(let r=1;r<=4;++r)n[`darken${r}`]=(0,Y.I4)(ge(t,r));return n}function me(e,t){const n=ae(re(e));return n[0]=n[0]+10*t,ne(ce(n))}function ge(e,t){const n=ae(re(e));return n[0]=n[0]-10*t,ne(ce(n))}class ye extends l{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:r,themes:i}=e[ye.property];this.dark=Boolean(t),this.defaults=this.themes=i,this.options=r,n?this.disabled=!0:this.themes={dark:this.fillVariant(i.dark,!0),light:this.fillVariant(i.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick((()=>{this.applyVueMeta23()}));const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find((e=>"vuetify-theme-stylesheet"===e.id));return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(()=>{const t=i.Z.observable({themes:this.themes});this.unwatch=e.$watch((()=>t.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=fe(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return ue(this.currentTheme||{},void 0,(0,u.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}ye.property="theme";class be{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(h),this.use(d),this.use(p),this.use(R),this.use(W),this.use(J),this.use(ye)}init(e,t){this.installed.forEach((n=>{const r=this.framework[n];r.framework=this.framework,r.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}be.install=s,be.installed=!1,be.version="2.6.4",be.config={silent:!1}},3358:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3536),i=n(3325);function o(e,t=[]){return(0,i.Z)((0,r.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return e}},watch:{app(e,t){t?this.removeApplication(!0):this.callUpdate()},applicationProperty(e,t){this.$vuetify.application.unregister(this._uid,t)}},activated(){this.callUpdate()},created(){for(let e=0,n=t.length;e<n;e++)this.$watch(t[e],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(e=!1){(e||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},6210:function(e,t,n){"use strict";var r=n(144);function i(e){return function(t,n){for(const r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(const r in t)this.$set(this.$data[e],r,t[r])}}t["Z"]=r.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},6952:function(e,t,n){"use strict";var r=n(144),i=n(1824),o=n(7093);t["Z"]=r.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?((0,i.N6)("style must be an object",this),t):"string"===typeof t.class?((0,i.N6)("class must be an object",this),t):((0,o.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return(0,i.N6)("style must be an object",this),t;if("string"===typeof t.class)return(0,i.N6)("class must be an object",this),t;if((0,o.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,r]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},r&&(t.class["text--"+r]=!0)}return t}}})},4419:function(e,t,n){"use strict";var r=n(144),i=n(4589);t["Z"]=r.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:i.vZ}}})},3377:function(e,t,n){"use strict";var r=n(144);t["Z"]=r.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7352:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(6257);function i(e,t,n){return(0,r.f)(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}i("itemGroup")},2529:function(e,t,n){"use strict";var r=n(4589),i=n(144);t["Z"]=i.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const e={},t=(0,r.kb)(this.height),n=(0,r.kb)(this.minHeight),i=(0,r.kb)(this.minWidth),o=(0,r.kb)(this.maxHeight),s=(0,r.kb)(this.maxWidth),a=(0,r.kb)(this.width);return t&&(e.height=t),n&&(e.minHeight=n),i&&(e.minWidth=i),o&&(e.maxHeight=o),s&&(e.maxWidth=s),a&&(e.width=a),e}}})},3536:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(144),i=n(4589);const o={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function s(e=[]){return r.Z.extend({name:"positionable",props:e.length?(0,i.ji)(o,e):o})}t["Z"]=s()},1431:function(e,t,n){"use strict";var r=n(144);function i(e="value",t="change"){return r.Z.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const o=i();t["Z"]=o},6257:function(e,t,n){"use strict";n.d(t,{J:function(){return a},f:function(){return s}});var r=n(144),i=n(1824);function o(e,t){return()=>(0,i.Kd)(`The ${e} component must be used inside a ${t}`)}function s(e,t,n){const i=t&&n?{register:o(t,n),unregister:o(t,n)}:null;return r.Z.extend({name:"registrable-inject",inject:{[e]:{default:i}}})}function a(e,t=!1){return r.Z.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},3712:function(e,t,n){"use strict";var r=n(144);t["Z"]=r.Z.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){const n=t.split(" ");for(const t of n)e.push(`rounded-${t}`)}else t&&e.push("rounded");return e.length>0?{[e.join(" ")]:!0}:{}}}})},6505:function(e,t,n){"use strict";var r=n(144),i=n(6286),o=n(4589);t["Z"]=r.Z.extend({name:"routable",directives:{Ripple:i.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let e,t=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let r=this.activeClass,i=this.exactActiveClass||r;this.proxyClass&&(r=`${r} ${this.proxyClass}`.trim(),i=`${i} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:r,exactActiveClass:i,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||e,n="_vnode.data.class."+(this.exact?t:e);this.$nextTick((()=>{!(0,o.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},9131:function(e,t,n){"use strict";var r=n(144);t["Z"]=r.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9177:function(e,t,n){"use strict";var r=n(144);t["Z"]=r.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},8085:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var r=n(144);const i=r.Z.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function o(e){const t={...e.props,...e.injections},n=i.options.computed.isDark.call(t);return i.options.computed.themeClasses.call({isDark:n})}t["Z"]=i},2936:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(144);function i(e="value",t="input"){return r.Z.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}const o=i();t["Z"]=o},7093:function(e,t,n){"use strict";n.d(t,{I4:function(){return s},NA:function(){return i},hq:function(){return a},jx:function(){return o}});n(1703);var r=n(1824);function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function o(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function s(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return s(o(e))}},1824:function(e,t,n){"use strict";n.d(t,{Jk:function(){return u},Kd:function(){return o},N6:function(){return s},Rn:function(){return a},fK:function(){return c}});var r=n(1910);function i(e,t,n){if(!r.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?p(t):"")}}function o(e,t,n){const r=i(e,t,n);null!=r&&console.warn(r)}function s(e,t,n){const r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){o(`[UPGRADE] '${e}' is deprecated, use '${t}' instead.`,n,r)}function c(e,t,n,r){s(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,r)}function u(e,t,n){o(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,n)}const l=/(?:^|[-_])(\w)/g,h=e=>e.replace(l,(e=>e.toUpperCase())).replace(/[-_]/g,"");function d(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=e&&e[1]}return(r?`<${h(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function p(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${d(e[0])}... (${e[1]} recursive calls)`:d(e)}`)).join("\n")}return`\n\n(found in ${d(e)})`}},1706:function(e,t,n){"use strict";function r(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,{e:function(){return r}})},4589:function(e,t,n){"use strict";n.d(t,{Do:function(){return m},Ee:function(){return C},GL:function(){return f},Ji:function(){return i},KK:function(){return h},RB:function(){return g},TI:function(){return k},XP:function(){return y},_A:function(){return _},iZ:function(){return E},jC:function(){return w},ji:function(){return d},kb:function(){return p},lj:function(){return a},qh:function(){return o},qw:function(){return c},uZ:function(){return S},vO:function(){return l},vZ:function(){return u},z9:function(){return I}});var r=n(144);function i(e,t="div",n){return r.Z.extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render(t,{data:n,props:r,children:i}){return n.staticClass=`${e} ${n.staticClass||""}`.trim(),t(r.tag,n,i)}})}function o(e,t,n,r=!1){const i=o=>{n(o),e.removeEventListener(t,i,r)};e.addEventListener(t,i,r)}let s=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{s=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(T){console.warn(T)}function a(e,t,n,r){e.addEventListener(t,n,!!s&&r)}function c(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function u(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>u(e[n],t[n])))}function l(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),c(e,t.split("."),n)):n}function h(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||h(e.parentNode)}function d(e,t){const n={};for(let r=0;r<t.length;r++){const i=t[r];"undefined"!==typeof e[i]&&(n[i]=e[i])}return n}function p(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function f(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function v(e){return null!==e&&"object"===typeof e}const m=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function g(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,r=l(e,n,t);if("string"!==typeof r)return r;t=r}return null==n?t:{component:n,props:{icon:t}}}function y(e){return Object.keys(e)}const b=/-(\w)/g,_=e=>e.replace(b,((e,t)=>t?t.toUpperCase():""));function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function k(e){return null!=e?Array.isArray(e)?e:[e]:[]}function I(e,t="default",n,r=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function S(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function C(e={},t={}){for(const n in t){const r=e[n],i=t[n];v(r)&&v(i)?e[n]=C(r,i):e[n]=i}return e}function E(e){if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}},6290:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s}});var r=n(4589);const i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function o(e){const t={};for(const n of e.split(i.styleList)){let[e,o]=n.split(i.styleProp);e=e.trim(),e&&("string"===typeof o&&(o=o.trim()),t[(0,r._A)(e)]=o)}return t}function s(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=a(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function a(e,t){return e?t?(e=(0,r.TI)("string"===typeof e?o(e):e),e.concat("string"===typeof t?o(t):t)):e:t}function c(e,t){return t?e&&e?(0,r.TI)(e).concat(t):t:e}function u(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const r=e[n];for(const e in r)r[e]&&(t[e]?t[e]=[].concat(r[e],t[e]):t[e]=r[e])}return t}},3325:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(144);function i(...e){return r.Z.extend({mixins:e})}},8345:function(e,t){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(e,t){for(var n in t)e[n]=t[n];return e}var r=/[!'()*]/g,i=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,s=function(e){return encodeURIComponent(e).replace(r,i).replace(o,",")};function a(e){try{return decodeURIComponent(e)}catch(t){0}return e}function c(e,t,n){void 0===t&&(t={});var r,i=n||l;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(u):u(s)}return r}var u=function(e){return null==e||"object"===typeof e?e:String(e)};function l(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=a(n.shift()),i=n.length>0?a(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return s(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(s(t)):r.push(s(t)+"="+s(e)))})),r.join("&")}return s(t)+"="+s(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var d=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=f(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:g(t,i),matched:e?m(e):[]};return n&&(s.redirectedFrom=g(n,i)),Object.freeze(s)}function f(e){if(Array.isArray(e))return e.map(f);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=f(e[n]);return t}return e}var v=p(null,{path:"/"});function m(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function g(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||h;return(n||"/")+o(r)+i}function y(e,t,n){return t===v?e===t:!!t&&(e.path&&t.path?e.path.replace(d,"")===t.path.replace(d,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?b(o,a):String(o)===String(a)}))}function _(e,t){return 0===e.path.replace(d,"/").indexOf(t.path.replace(d,"/"))&&(!t.hash||e.hash===t.hash)&&w(e.query,t.query)}function w(e,t){for(var n in t)if(!(n in e))return!1;return!0}function k(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var I={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var r=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=r.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var p=o.$vnode?o.$vnode.data:{};p.routerView&&h++,p.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(s.routerViewDepth=h,d){var f=l[c],v=f&&f.component;return v?(f.configProps&&S(v,s,f.route,f.configProps),a(v,s,i)):a()}var m=u.matched[h],g=m&&m.components[c];if(!m||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=m.instances[c];(t&&n!==e||!t&&n===e)&&(m.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){m.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==m.instances[c]&&(m.instances[c]=e.componentInstance),k(u)};var y=m.props&&m.props[c];return y&&(n(l[c],{route:u,configProps:y}),S(g,s,u,y)),a(g,s,i)}};function S(e,t,r,i){var o=t.props=C(r,i);if(o){o=t.props=n({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function C(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function E(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function T(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function O(e){return e.replace(/\/+/g,"/")}var A=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},x=K,L=M,R=D,$=B,N=G,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=P.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var h=e[o],d=n[2],p=n[3],f=n[4],v=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=d&&null!=h&&h!==d,b="+"===m||"*"===m,_="?"===m||"*"===m,w=n[2]||a,k=f||v;r.push({name:p||i++,prefix:d||"",delimiter:w,optional:_,repeat:b,partial:y,asterisk:!!g,pattern:k?F(k):g?".*":"[^"+U(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function D(e,t){return B(M(e,t),t)}function j(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function V(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function B(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",H(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?j:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(A(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function U(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function z(e,t){return e.keys=t,e}function H(e){return e&&e.sensitive?"":"i"}function Z(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(e,t)}function W(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(K(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",H(n));return z(o,t)}function q(e,t,n){return G(M(e,n),t,n)}function G(e,t,n){A(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=U(a);else{var c=U(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=U(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",z(new RegExp("^"+o,H(n)),t)}function K(e,t,n){return A(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?Z(e,t):A(e)?W(e,t,n):q(e,t,n)}x.parse=L,x.compile=R,x.tokensToFunction=$,x.tokensToRegExp=N;var J=Object.create(null);function Y(e,t,n){t=t||{};try{var r=J[e]||(J[e]=x.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function X(e,t,r,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=n({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=n({},s)),o}if(!o.path&&o.params&&t){o=n({},o),o._normalized=!0;var a=n(n({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var u=t.matched[t.matched.length-1].path;o.path=Y(u,a,"path "+t.path)}else 0;return o}var l=T(o.path||""),h=t&&t.path||"/",d=l.path?E(l.path,h,r||o.append):h,p=c(l.query,o.query,i&&i.options.parseQuery),f=o.hash||l.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var Q,ee=[String,Object],te=[String,Array],ne=function(){},re={name:"RouterLink",props:{to:{type:ee,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:te,default:"click"}},render:function(e){var t=this,r=this.$router,i=this.$route,o=r.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=r.options.linkActiveClass,h=r.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,v=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?f:this.exactActiveClass,g=a.redirectedFrom?p(null,X(a.redirectedFrom),null,r):a;u[m]=y(i,g,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:_(i,g);var b=u[m]?this.ariaCurrentValue:null,w=function(e){ie(e)&&(t.replace?r.replace(s,ne):r.push(s,ne))},k={click:ie};Array.isArray(this.event)?this.event.forEach((function(e){k[e]=w})):k[this.event]=w;var I={class:u},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[v],isExactActive:u[m]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?e():e("span",{},S)}if("a"===this.tag)I.on=k,I.attrs={href:c,"aria-current":b};else{var C=oe(this.$slots.default);if(C){C.isStatic=!1;var E=C.data=n({},C.data);for(var T in E.on=E.on||{},E.on){var O=E.on[T];T in k&&(E.on[T]=Array.isArray(O)?O:[O])}for(var A in k)A in E.on?E.on[A].push(k[A]):E.on[A]=w;var x=C.data.attrs=n({},C.data.attrs);x.href=c,x["aria-current"]=b}else I.on=k}return e(this.tag,I,this.$slots.default)}};function ie(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function se(e){if(!se.installed||Q!==e){se.installed=!0,Q=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",I),e.component("RouterLink",re);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ae="undefined"!==typeof window;function ce(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){ue(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function ue(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=he(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:le(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?O(o+"/"+r.path):void 0;ue(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:r.children};ue(e,t,n,f,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function le(e,t){var n=x(e,[],t);return n}function he(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:O(t.path+"/"+e)}function de(e,t){var n=ce(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ce(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ce([t||e],r,i,o,n),n&&n.alias.length&&ce(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=X(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(u.path,a.params,'named route "'+c+'"'),d(u,a,s)}if(a.path){a.params={};for(var p=0;p<r.length;p++){var f=r[p],v=i[f];if(pe(v.regex,a.path,a.params))return d(v,a,s)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var s=i,a=s.name,c=s.path,l=n.query,h=n.hash,f=n.params;if(l=s.hasOwnProperty("query")?s.query:l,h=s.hasOwnProperty("hash")?s.hash:h,f=s.hasOwnProperty("params")?s.params:f,a){o[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var v=fe(c,e),m=Y(v,f,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Y(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,d(s,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?a(r[i]):r[i])}return!0}function fe(e,t){return E(e,t.parent?t.parent.path:"/",!0)}var ve=ae&&window.performance&&window.performance.now?window.performance:Date;function me(){return ve.now().toFixed(3)}var ge=me();function ye(){return ge}function be(e){return ge=e}var _e=Object.create(null);function we(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),r=n({},window.history.state);return r.key=ye(),window.history.replaceState(r,"",t),window.addEventListener("popstate",Se),function(){window.removeEventListener("popstate",Se)}}function ke(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Ce(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Re(e,o)})).catch((function(e){0})):Re(s,o))}))}}function Ie(){var e=ye();e&&(_e[e]={x:window.pageXOffset,y:window.pageYOffset})}function Se(e){Ie(),e.state&&e.state.key&&be(e.state.key)}function Ce(){var e=ye();if(e)return _e[e]}function Ee(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Te(e){return xe(e.x)||xe(e.y)}function Oe(e){return{x:xe(e.x)?e.x:window.pageXOffset,y:xe(e.y)?e.y:window.pageYOffset}}function Ae(e){return{x:xe(e.x)?e.x:0,y:xe(e.y)?e.y:0}}function xe(e){return"number"===typeof e}var Le=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Le.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Ae(i),t=Ee(r,i)}else Te(e)&&(t=Oe(e))}else n&&Te(e)&&(t=Oe(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var $e=ae&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Ne(e,t){Ie();var r=window.history;try{if(t){var i=n({},r.state);i.key=ye(),r.replaceState(i,"",e)}else r.pushState({key:be(me())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Pe(e){Ne(e,!0)}function Me(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var De={redirected:2,aborted:4,cancelled:8,duplicated:16};function je(e,t){return Fe(e,t,De.redirected,'Redirected when going from "'+e.fullPath+'" to "'+He(t)+'" via a navigation guard.')}function Ve(e,t){var n=Fe(e,t,De.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Be(e,t){return Fe(e,t,De.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ue(e,t){return Fe(e,t,De.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Fe(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function He(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function Ze(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function We(e,t){return Ze(e)&&e._isRouter&&(null==t||e.type===t)}function qe(e){return function(t,n,r){var i=!1,o=0,s=null;Ge(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Xe((function(t){Ye(t)&&(t=t.default),e.resolved="function"===typeof t?t:Q.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Xe((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=Ze(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Ge(e,t){return Ke(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ke(e){return Array.prototype.concat.apply([],e)}var Je="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ye(e){return e.__esModule||Je&&"Module"===e[Symbol.toStringTag]}function Xe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var Qe=function(e,t){this.router=e,this.base=et(t),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function et(e){if(!e)if(ae){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function tt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function nt(e,t,n,r){var i=Ge(e,(function(e,r,i,o){var s=rt(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Ke(r?i.reverse():i)}function rt(e,t){return"function"!==typeof e&&(e=Q.extend(e)),e.options[t]}function it(e){return nt(e,"beforeRouteLeave",st,!0)}function ot(e){return nt(e,"beforeRouteUpdate",st)}function st(e,t){if(t)return function(){return e.apply(t,arguments)}}function at(e){return nt(e,"beforeRouteEnter",(function(e,t,n,r){return ct(e,n,r)}))}function ct(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}Qe.prototype.listen=function(e){this.cb=e},Qe.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Qe.prototype.onError=function(e){this.errorCbs.push(e)},Qe.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(We(e,De.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},Qe.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!We(e)&&Ze(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(y(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&ke(this.router,i,e,!1),o(Ve(i,e));var c=tt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(it(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),qe(h)),p=function(t,n){if(r.pending!==e)return o(Be(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(Ue(i,e))):Ze(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(je(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};Me(d,p,(function(){var n=at(h),s=n.concat(r.router.resolveHooks);Me(s,p,(function(){if(r.pending!==e)return o(Be(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){k(e)}))}))}))},Qe.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Qe.prototype.setupListeners=function(){},Qe.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=v,this.pending=null};var ut=function(e){function t(t,n){e.call(this,t,n),this._startLocation=lt(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=$e&&n;r&&this.listeners.push(we());var i=function(){var n=e.current,i=lt(e.base);e.current===v&&i===e._startLocation||e.transitionTo(i,(function(e){r&&ke(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Ne(O(r.base+e.fullPath)),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Pe(O(r.base+e.fullPath)),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(lt(this.base)!==this.current.fullPath){var t=O(this.base+this.current.fullPath);e?Ne(t):Pe(t)}},t.prototype.getCurrentLocation=function(){return lt(this.base)},t}(Qe);function lt(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(O(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ht=function(e){function t(t,n,r){e.call(this,t,n),r&&dt(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=$e&&n;r&&this.listeners.push(we());var i=function(){var t=e.current;pt()&&e.transitionTo(ft(),(function(n){r&&ke(e.router,n,t,!0),$e||gt(n.fullPath)}))},o=$e?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){mt(e.fullPath),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;ft()!==t&&(e?mt(t):gt(t))},t.prototype.getCurrentLocation=function(){return ft()},t}(Qe);function dt(e){var t=lt(e);if(!/^\/#/.test(t))return window.location.replace(O(e+"/#"+t)),!0}function pt(){var e=ft();return"/"===e.charAt(0)||(gt("/"+e),!1)}function ft(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function vt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function mt(e){$e?Ne(vt(e)):window.location.hash=e}function gt(e){$e?Pe(vt(e)):window.location.replace(vt(e))}var yt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){We(e,De.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Qe),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=de(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!$e&&!1!==e.fallback,this.fallback&&(t="hash"),ae||(t="abstract"),this.mode=t,t){case"history":this.history=new ut(this,e.base);break;case"hash":this.history=new ht(this,e.base,this.fallback);break;case"abstract":this.history=new yt(this,e.base);break;default:0}},_t={currentRoute:{configurable:!0}};function wt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function kt(e,t,n){var r="hash"===n?"#"+t:t;return e?O(e+"/"+r):r}bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},_t.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof ut||n instanceof ht){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=$e&&i;o&&"fullPath"in e&&ke(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return wt(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return wt(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return wt(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=X(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=kt(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,_t),bt.install=se,bt.version="3.5.3",bt.isNavigationFailure=We,bt.NavigationFailureType=De,bt.START_LOCATION=v,ae&&window.Vue&&window.Vue.use(bt),t["Z"]=bt},144:function(e,t,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var r=Object.freeze({});function i(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function s(e){return!0===e}function a(e){return!1===e}function c(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var l=Object.prototype.toString;function h(e){return"[object Object]"===l.call(e)}function d(e){return"[object RegExp]"===l.call(e)}function p(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function f(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||h(e)&&e.toString===l?JSON.stringify(e,null,2):String(e)}function m(e){var t=parseFloat(e);return isNaN(t)?e:t}function g(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function b(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function w(e,t){return _.call(e,t)}function k(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var I=/-(\w)/g,S=k((function(e){return e.replace(I,(function(e,t){return t?t.toUpperCase():""}))})),C=k((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),E=/\B([A-Z])/g,T=k((function(e){return e.replace(E,"-$1").toLowerCase()}));function O(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function A(e,t){return e.bind(t)}var x=Function.prototype.bind?A:O;function L(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function R(e,t){for(var n in t)e[n]=t[n];return e}function $(e){for(var t={},n=0;n<e.length;n++)e[n]&&R(t,e[n]);return t}function N(e,t,n){}var P=function(e,t,n){return!1},M=function(e){return e};function D(e,t){if(e===t)return!0;var n=u(e),r=u(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return D(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return D(e[n],t[n])}))}catch(c){return!1}}function j(e,t){for(var n=0;n<e.length;n++)if(D(e[n],t))return n;return-1}function V(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var B="data-server-rendered",U=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:N,parsePlatformTagName:M,mustUseProp:P,async:!0,_lifecycleHooks:F},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Z(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=new RegExp("[^"+H.source+".$_\\d]");function G(e){if(!q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var K,J="__proto__"in{},Y="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=X&&WXEnvironment.platform.toLowerCase(),ee=Y&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0,ie=(ee&&ee.indexOf("android"),ee&&/iphone|ipad|ipod|ios/.test(ee)||"ios"===Q),oe=(ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee),ee&&ee.match(/firefox\/(\d+)/)),se={}.watch,ae=!1;if(Y)try{var ce={};Object.defineProperty(ce,"passive",{get:function(){ae=!0}}),window.addEventListener("test-passive",null,ce)}catch(Cs){}var ue=function(){return void 0===K&&(K=!Y&&!X&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),K},le=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function he(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,pe="undefined"!==typeof Symbol&&he(Symbol)&&"undefined"!==typeof Reflect&&he(Reflect.ownKeys);de="undefined"!==typeof Set&&he(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var fe=N,ve=0,me=function(){this.id=ve++,this.subs=[]};me.prototype.addSub=function(e){this.subs.push(e)},me.prototype.removeSub=function(e){b(this.subs,e)},me.prototype.depend=function(){me.target&&me.target.addDep(this)},me.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},me.target=null;var ge=[];function ye(e){ge.push(e),me.target=e}function be(){ge.pop(),me.target=ge[ge.length-1]}var _e=function(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},we={child:{configurable:!0}};we.child.get=function(){return this.componentInstance},Object.defineProperties(_e.prototype,we);var ke=function(e){void 0===e&&(e="");var t=new _e;return t.text=e,t.isComment=!0,t};function Ie(e){return new _e(void 0,void 0,void 0,String(e))}function Se(e){var t=new _e(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ce=Array.prototype,Ee=Object.create(Ce),Te=["push","pop","shift","unshift","splice","sort","reverse"];Te.forEach((function(e){var t=Ce[e];W(Ee,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Oe=Object.getOwnPropertyNames(Ee),Ae=!0;function xe(e){Ae=e}var Le=function(e){this.value=e,this.dep=new me,this.vmCount=0,W(e,"__ob__",this),Array.isArray(e)?(J?Re(e,Ee):$e(e,Ee,Oe),this.observeArray(e)):this.walk(e)};function Re(e,t){e.__proto__=t}function $e(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(e,o,t[o])}}function Ne(e,t){var n;if(u(e)&&!(e instanceof _e))return w(e,"__ob__")&&e.__ob__ instanceof Le?n=e.__ob__:Ae&&!ue()&&(Array.isArray(e)||h(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Le(e)),t&&n&&n.vmCount++,n}function Pe(e,t,n,r,i){var o=new me,s=Object.getOwnPropertyDescriptor(e,t);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Ne(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return me.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&je(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Ne(t),o.notify())}})}}function Me(e,t,n){if(Array.isArray(e)&&p(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Pe(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function De(e,t){if(Array.isArray(e)&&p(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||w(e,t)&&(delete e[t],n&&n.dep.notify())}}function je(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&je(t)}Le.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Pe(e,t[n])},Le.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ne(e[t])};var Ve=z.optionMergeStrategies;function Be(e,t){if(!t)return e;for(var n,r,i,o=pe?Reflect.ownKeys(t):Object.keys(t),s=0;s<o.length;s++)n=o[s],"__ob__"!==n&&(r=e[n],i=t[n],w(e,n)?r!==i&&h(r)&&h(i)&&Be(r,i):Me(e,n,i));return e}function Ue(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?Be(r,i):i}:t?e?function(){return Be("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function Fe(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?ze(n):n}function ze(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function He(e,t,n,r){var i=Object.create(e||null);return t?R(i,t):i}Ve.data=function(e,t,n){return n?Ue(e,t,n):t&&"function"!==typeof t?e:Ue(e,t)},F.forEach((function(e){Ve[e]=Fe})),U.forEach((function(e){Ve[e+"s"]=He})),Ve.watch=function(e,t,n,r){if(e===se&&(e=void 0),t===se&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in R(i,e),t){var s=i[o],a=t[o];s&&!Array.isArray(s)&&(s=[s]),i[o]=s?s.concat(a):Array.isArray(a)?a:[a]}return i},Ve.props=Ve.methods=Ve.inject=Ve.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return R(i,e),t&&R(i,t),i},Ve.provide=Ue;var Ze=function(e,t){return void 0===t?e:t};function We(e,t){var n=e.props;if(n){var r,i,o,s={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(o=S(i),s[o]={type:null})}else if(h(n))for(var a in n)i=n[a],o=S(a),s[o]=h(i)?i:{type:i};else 0;e.props=s}}function qe(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(h(n))for(var o in n){var s=n[o];r[o]=h(s)?R({from:o},s):{from:s}}else 0}}function Ge(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ke(e,t,n){if("function"===typeof t&&(t=t.options),We(t,n),qe(t,n),Ge(t),!t._base&&(t.extends&&(e=Ke(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ke(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)w(e,o)||a(o);function a(r){var i=Ve[r]||Ze;s[r]=i(e[r],t[r],n,r)}return s}function Je(e,t,n,r){if("string"===typeof n){var i=e[t];if(w(i,n))return i[n];var o=S(n);if(w(i,o))return i[o];var s=C(o);if(w(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Ye(e,t,n,r){var i=t[e],o=!w(n,e),s=n[e],a=nt(Boolean,i.type);if(a>-1)if(o&&!w(i,"default"))s=!1;else if(""===s||s===T(e)){var c=nt(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Xe(r,i,e);var u=Ae;xe(!0),Ne(s),xe(u)}return s}function Xe(e,t,n){if(w(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==et(t.type)?r.call(e):r}}var Qe=/^\s*function (\w+)/;function et(e){var t=e&&e.toString().match(Qe);return t?t[1]:""}function tt(e,t){return et(e)===et(t)}function nt(e,t){if(!Array.isArray(t))return tt(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(tt(t[n],e))return n;return-1}function rt(e,t,n){ye();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Cs){ot(Cs,r,"errorCaptured hook")}}}ot(e,t,n)}finally{be()}}function it(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch((function(e){return rt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Cs){rt(Cs,r,i)}return o}function ot(e,t,n){if(z.errorHandler)try{return z.errorHandler.call(null,e,t,n)}catch(Cs){Cs!==e&&st(Cs,null,"config.errorHandler")}st(e,t,n)}function st(e,t,n){if(!Y&&!X||"undefined"===typeof console)throw e;console.error(e)}var at,ct=!1,ut=[],lt=!1;function ht(){lt=!1;var e=ut.slice(0);ut.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&he(Promise)){var dt=Promise.resolve();at=function(){dt.then(ht),ie&&setTimeout(N)},ct=!0}else if(te||"undefined"===typeof MutationObserver||!he(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())at="undefined"!==typeof setImmediate&&he(setImmediate)?function(){setImmediate(ht)}:function(){setTimeout(ht,0)};else{var pt=1,ft=new MutationObserver(ht),vt=document.createTextNode(String(pt));ft.observe(vt,{characterData:!0}),at=function(){pt=(pt+1)%2,vt.data=String(pt)},ct=!0}function mt(e,t){var n;if(ut.push((function(){if(e)try{e.call(t)}catch(Cs){rt(Cs,t,"nextTick")}else n&&n(t)})),lt||(lt=!0,at()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var gt=new de;function yt(e){bt(e,gt),gt.clear()}function bt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!u(e)||Object.isFrozen(e)||e instanceof _e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i){n=e.length;while(n--)bt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)bt(e[r[n]],t)}}}var _t=k((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function wt(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return it(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)it(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function kt(e,t,n,r,o,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=_t(c),i(u)||(i(l)?(i(u.fns)&&(u=e[c]=wt(u,a)),s(h.once)&&(u=e[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)i(e[c])&&(h=_t(c),r(h.name,t[c],h.capture))}function It(e,t,n){var r;e instanceof _e&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),b(r.fns,c)}i(a)?r=wt([c]):o(a.fns)&&s(a.merged)?(r=a,r.fns.push(c)):r=wt([a,c]),r.merged=!0,e[t]=r}function St(e,t,n){var r=t.options.props;if(!i(r)){var s={},a=e.attrs,c=e.props;if(o(a)||o(c))for(var u in r){var l=T(u);Ct(s,c,u,l,!0)||Ct(s,a,u,l,!1)}return s}}function Ct(e,t,n,r,i){if(o(t)){if(w(t,n))return e[n]=t[n],i||delete t[n],!0;if(w(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function Et(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function Tt(e){return c(e)?[Ie(e)]:Array.isArray(e)?At(e):void 0}function Ot(e){return o(e)&&o(e.text)&&a(e.isComment)}function At(e,t){var n,r,a,u,l=[];for(n=0;n<e.length;n++)r=e[n],i(r)||"boolean"===typeof r||(a=l.length-1,u=l[a],Array.isArray(r)?r.length>0&&(r=At(r,(t||"")+"_"+n),Ot(r[0])&&Ot(u)&&(l[a]=Ie(u.text+r[0].text),r.shift()),l.push.apply(l,r)):c(r)?Ot(u)?l[a]=Ie(u.text+r):""!==r&&l.push(Ie(r)):Ot(r)&&Ot(u)?l[a]=Ie(u.text+r.text):(s(e._isVList)&&o(r.tag)&&i(r.key)&&o(t)&&(r.key="__vlist"+t+"_"+n+"__"),l.push(r)));return l}function xt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Lt(e){var t=Rt(e.$options.inject,e);t&&(xe(!1),Object.keys(t).forEach((function(n){Pe(e,n,t[n])})),xe(!0))}function Rt(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from,a=t;while(a){if(a._provided&&w(a._provided,s)){n[o]=a._provided[s];break}a=a.$parent}if(!a)if("default"in e[o]){var c=e[o].default;n[o]="function"===typeof c?c.call(t):c}else 0}}return n}}function $t(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Nt)&&delete n[u];return n}function Nt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Pt(e){return e.isComment&&e.asyncFactory}function Mt(e,t,n){var i,o=Object.keys(t).length>0,s=e?!!e.$stable:!o,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(s&&n&&n!==r&&a===n.$key&&!o&&!n.$hasNormal)return n;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=Dt(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=jt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),W(i,"$stable",s),W(i,"$key",a),W(i,"$hasNormal",o),i}function Dt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:Tt(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Pt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function jt(e,t){return function(){return e[t]}}function Vt(e,t){var n,r,i,s,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))if(pe&&e[Symbol.iterator]){n=[];var c=e[Symbol.iterator](),l=c.next();while(!l.done)n.push(t(l.value,n.length)),l=c.next()}else for(s=Object.keys(e),n=new Array(s.length),r=0,i=s.length;r<i;r++)a=s[r],n[r]=t(e[a],a,r);return o(n)||(n=[]),n._isVList=!0,n}function Bt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=R(R({},r),n)),i=o(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Ut(e){return Je(this.$options,"filters",e,!0)||M}function Ft(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function zt(e,t,n,r,i){var o=z.keyCodes[t]||n;return i&&r&&!z.keyCodes[t]?Ft(i,r):o?Ft(o,e):r?T(r)!==t:void 0===e}function Ht(e,t,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=$(n));var s=function(s){if("class"===s||"style"===s||y(s))o=e;else{var a=e.attrs&&e.attrs.type;o=r||z.mustUseProp(t,a,s)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=S(s),u=T(s);if(!(c in o)&&!(u in o)&&(o[s]=n[s],i)){var l=e.on||(e.on={});l["update:"+s]=function(e){n[s]=e}}};for(var a in n)s(a)}else;return e}function Zt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),qt(r,"__static__"+e,!1)),r}function Wt(e,t,n){return qt(e,"__once__"+t+(n?"_"+n:""),!0),e}function qt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Gt(e[r],t+"_"+r,n);else Gt(e,t,n)}function Gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Kt(e,t){if(t)if(h(t)){var n=e.on=e.on?R({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Jt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Jt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function Yt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Xt(e,t){return"string"===typeof e?t+e:e}function Qt(e){e._o=Wt,e._n=m,e._s=v,e._l=Vt,e._t=Bt,e._q=D,e._i=j,e._m=Zt,e._f=Ut,e._k=zt,e._b=Ht,e._v=Ie,e._e=ke,e._u=Jt,e._g=Kt,e._d=Yt,e._p=Xt}function en(e,t,n,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=Rt(u.inject,i),this.slots=function(){return c.$slots||Mt(e.scopedSlots,c.$slots=$t(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Mt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Mt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var o=fn(a,e,t,n,r,h);return o&&!Array.isArray(o)&&(o.fnScopeId=u._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return fn(a,e,t,n,r,h)}}function tn(e,t,n,i,s){var a=e.options,c={},u=a.props;if(o(u))for(var l in u)c[l]=Ye(l,u,t||r);else o(n.attrs)&&rn(c,n.attrs),o(n.props)&&rn(c,n.props);var h=new en(n,c,s,i,e),d=a.render.call(null,h._c,h);if(d instanceof _e)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var p=Tt(d)||[],f=new Array(p.length),v=0;v<p.length;v++)f[v]=nn(p[v],n,h.parent,a,h);return f}}function nn(e,t,n,r,i){var o=Se(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function rn(e,t){for(var n in t)e[S(n)]=t[n]}Qt(en.prototype);var on={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;on.prepatch(n,n)}else{var r=e.componentInstance=cn(e,Rn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Dn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),e.data.keepAlive&&(t._isMounted?er(n):Vn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Bn(t,!0):t.$destroy())}},sn=Object.keys(on);function an(e,t,n,r,a){if(!i(e)){var c=n.$options._base;if(u(e)&&(e=c.extend(e)),"function"===typeof e){var l;if(i(e.cid)&&(l=e,e=Sn(l,c),void 0===e))return In(l,t,n,r,a);t=t||{},Ir(e),o(t.model)&&hn(e.options,t);var h=St(t,e,a);if(s(e.options.functional))return tn(e,h,t,n,r);var d=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}un(t);var f=e.options.name||a,v=new _e("vue-component-"+e.cid+(f?"-"+f:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:r},l);return v}}}function cn(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function un(e){for(var t=e.hook||(e.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=t[r],o=on[r];i===o||i&&i._merged||(t[r]=i?ln(o,i):o)}}function ln(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function hn(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),s=i[r],a=t.model.callback;o(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[r]=[a].concat(s)):i[r]=a}var dn=1,pn=2;function fn(e,t,n,r,i,o){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),s(o)&&(i=pn),vn(e,t,n,r,i)}function vn(e,t,n,r,i){if(o(n)&&o(n.__ob__))return ke();if(o(n)&&o(n.is)&&(t=n.is),!t)return ke();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===pn?r=Tt(r):i===dn&&(r=Et(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||z.getTagNamespace(t),s=z.isReservedTag(t)?new _e(z.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(c=Je(e.$options,"components",t))?new _e(t,n,r,void 0,void 0,e):an(c,n,e,r,t)):s=an(t,n,e,r);return Array.isArray(s)?s:o(s)?(o(a)&&mn(s,a),o(n)&&gn(n),s):ke()}function mn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var r=0,a=e.children.length;r<a;r++){var c=e.children[r];o(c.tag)&&(i(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,t,n)}}function gn(e){u(e.style)&&yt(e.style),u(e.class)&&yt(e.class)}function yn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=$t(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return fn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return fn(e,t,n,r,i,!0)};var o=n&&n.data;Pe(e,"$attrs",o&&o.attrs||r,null,!0),Pe(e,"$listeners",t._parentListeners||r,null,!0)}var bn,_n=null;function wn(e){Qt(e.prototype),e.prototype.$nextTick=function(e){return mt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Mt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{_n=t,e=r.call(t._renderProxy,t.$createElement)}catch(Cs){rt(Cs,t,"render"),e=t._vnode}finally{_n=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof _e||(e=ke()),e.parent=i,e}}function kn(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?t.extend(e):e}function In(e,t,n,r,i){var o=ke();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Sn(e,t){if(s(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=_n;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),s(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var h=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=V((function(n){e.resolved=kn(n,t),a?r.length=0:h(!0)})),p=V((function(t){o(e.errorComp)&&(e.error=!0,h(!0))})),v=e(d,p);return u(v)&&(f(v)?i(e.resolved)&&v.then(d,p):f(v.component)&&(v.component.then(d,p),o(v.error)&&(e.errorComp=kn(v.error,t)),o(v.loading)&&(e.loadingComp=kn(v.loading,t),0===v.delay?e.loading=!0:c=setTimeout((function(){c=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,h(!1))}),v.delay||200)),o(v.timeout)&&(l=setTimeout((function(){l=null,i(e.resolved)&&p(null)}),v.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function Cn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||Pt(n)))return n}}function En(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&xn(e,t)}function Tn(e,t){bn.$on(e,t)}function On(e,t){bn.$off(e,t)}function An(e,t){var n=bn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function xn(e,t,n){bn=e,kt(t,n||{},Tn,On,An,e),bn=void 0}function Ln(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;var a=s.length;while(a--)if(o=s[a],o===t||o.fn===t){s.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?L(n):n;for(var r=L(arguments,1),i='event handler for "'+e+'"',o=0,s=n.length;o<s;o++)it(n[o],t,r,t,i)}return t}}var Rn=null;function $n(e){var t=Rn;return Rn=e,function(){Rn=t}}function Nn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Pn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=$n(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Un(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||b(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Un(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Mn(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ke),Un(e,"beforeMount"),r=function(){e._update(e._render(),n)},new ir(e,r,N,{before:function(){e._isMounted&&!e._isDestroyed&&Un(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Un(e,"mounted")),e}function Dn(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){xe(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var p=h[d],f=e.$options.props;l[p]=Ye(p,f,t,e)}xe(!0),e.$options.propsData=t}n=n||r;var v=e.$options._parentListeners;e.$options._parentListeners=n,xn(e,n,v),u&&(e.$slots=$t(o,i.context),e.$forceUpdate())}function jn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Vn(e,t){if(t){if(e._directInactive=!1,jn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Vn(e.$children[n]);Un(e,"activated")}}function Bn(e,t){if((!t||(e._directInactive=!0,!jn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Bn(e.$children[n]);Un(e,"deactivated")}}function Un(e,t){ye();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)it(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),be()}var Fn=[],zn=[],Hn={},Zn=!1,Wn=!1,qn=0;function Gn(){qn=Fn.length=zn.length=0,Hn={},Zn=Wn=!1}var Kn=0,Jn=Date.now;if(Y&&!te){var Yn=window.performance;Yn&&"function"===typeof Yn.now&&Jn()>document.createEvent("Event").timeStamp&&(Jn=function(){return Yn.now()})}function Xn(){var e,t;for(Kn=Jn(),Wn=!0,Fn.sort((function(e,t){return e.id-t.id})),qn=0;qn<Fn.length;qn++)e=Fn[qn],e.before&&e.before(),t=e.id,Hn[t]=null,e.run();var n=zn.slice(),r=Fn.slice();Gn(),tr(n),Qn(r),le&&z.devtools&&le.emit("flush")}function Qn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Un(r,"updated")}}function er(e){e._inactive=!1,zn.push(e)}function tr(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Vn(e[t],!0)}function nr(e){var t=e.id;if(null==Hn[t]){if(Hn[t]=!0,Wn){var n=Fn.length-1;while(n>qn&&Fn[n].id>e.id)n--;Fn.splice(n+1,0,e)}else Fn.push(e);Zn||(Zn=!0,mt(Xn))}}var rr=0,ir=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=G(t),this.getter||(this.getter=N)),this.value=this.lazy?void 0:this.get()};ir.prototype.get=function(){var e;ye(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Cs){if(!this.user)throw Cs;rt(Cs,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&yt(e),be(),this.cleanupDeps()}return e},ir.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ir.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ir.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},ir.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';it(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},ir.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ir.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ir.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||b(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var or={enumerable:!0,configurable:!0,get:N,set:N};function sr(e,t,n){or.get=function(){return this[t][n]},or.set=function(e){this[t][n]=e},Object.defineProperty(e,n,or)}function ar(e){e._watchers=[];var t=e.$options;t.props&&cr(e,t.props),t.methods&&mr(e,t.methods),t.data?ur(e):Ne(e._data={},!0),t.computed&&dr(e,t.computed),t.watch&&t.watch!==se&&gr(e,t.watch)}function cr(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;o||xe(!1);var s=function(o){i.push(o);var s=Ye(o,t,n,e);Pe(r,o,s),o in e||sr(e,"_props",o)};for(var a in t)s(a);xe(!0)}function ur(e){var t=e.$options.data;t=e._data="function"===typeof t?lr(t,e):t||{},h(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&w(r,o)||Z(o)||sr(e,"_data",o)}Ne(t,!0)}function lr(e,t){ye();try{return e.call(t,t)}catch(Cs){return rt(Cs,t,"data()"),{}}finally{be()}}var hr={lazy:!0};function dr(e,t){var n=e._computedWatchers=Object.create(null),r=ue();for(var i in t){var o=t[i],s="function"===typeof o?o:o.get;0,r||(n[i]=new ir(e,s||N,N,hr)),i in e||pr(e,i,o)}}function pr(e,t,n){var r=!ue();"function"===typeof n?(or.get=r?fr(t):vr(n),or.set=N):(or.get=n.get?r&&!1!==n.cache?fr(t):vr(n.get):N,or.set=n.set||N),Object.defineProperty(e,t,or)}function fr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),me.target&&t.depend(),t.value}}function vr(e){return function(){return e.call(this,this)}}function mr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?N:x(t[n],e)}function gr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(e,n,r[i]);else yr(e,n,r)}}function yr(e,t,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function br(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Me,e.prototype.$delete=De,e.prototype.$watch=function(e,t,n){var r=this;if(h(t))return yr(r,e,t,n);n=n||{},n.user=!0;var i=new ir(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'+i.expression+'"';ye(),it(t,r,[i.value],r,o),be()}return function(){i.teardown()}}}var _r=0;function wr(e){e.prototype._init=function(e){var t=this;t._uid=_r++,t._isVue=!0,e&&e._isComponent?kr(t,e):t.$options=Ke(Ir(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Nn(t),En(t),yn(t),Un(t,"beforeCreate"),Lt(t),ar(t),xt(t),Un(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function kr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ir(e){var t=e.options;if(e.super){var n=Ir(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Sr(e);i&&R(e.extendOptions,i),t=e.options=Ke(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Sr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Cr(e){this._init(e)}function Er(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=L(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Tr(e){e.mixin=function(e){return this.options=Ke(this.options,e),this}}function Or(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=Ke(n.options,e),s["super"]=n,s.options.props&&Ar(s),s.options.computed&&xr(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,U.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=R({},s.options),i[r]=s,s}}function Ar(e){var t=e.options.props;for(var n in t)sr(e.prototype,"_props",n)}function xr(e){var t=e.options.computed;for(var n in t)pr(e.prototype,n,t[n])}function Lr(e){U.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&h(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Rr(e){return e&&(e.Ctor.options.name||e.tag)}function $r(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function Nr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&Pr(n,o,r,i)}}}function Pr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,b(n,t)}wr(Cr),br(Cr),Ln(Cr),Pn(Cr),wn(Cr);var Mr=[String,RegExp,Array],Dr={name:"keep-alive",abstract:!0,props:{include:Mr,exclude:Mr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:Rr(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&Pr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Pr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Nr(e,(function(e){return $r(t,e)}))})),this.$watch("exclude",(function(t){Nr(e,(function(e){return!$r(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Cn(e),n=t&&t.componentOptions;if(n){var r=Rr(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!$r(o,r))||s&&r&&$r(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,b(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},jr={KeepAlive:Dr};function Vr(e){var t={get:function(){return z}};Object.defineProperty(e,"config",t),e.util={warn:fe,extend:R,mergeOptions:Ke,defineReactive:Pe},e.set=Me,e.delete=De,e.nextTick=mt,e.observable=function(e){return Ne(e),e},e.options=Object.create(null),U.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,R(e.options.components,jr),Er(e),Tr(e),Or(e),Lr(e)}Vr(Cr),Object.defineProperty(Cr.prototype,"$isServer",{get:ue}),Object.defineProperty(Cr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Cr,"FunctionalRenderContext",{value:en}),Cr.version="2.6.14";var Br=g("style,class"),Ur=g("input,textarea,option,select,progress"),Fr=function(e,t,n){return"value"===n&&Ur(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},zr=g("contenteditable,draggable,spellcheck"),Hr=g("events,caret,typing,plaintext-only"),Zr=function(e,t){return Jr(t)||"false"===t?"false":"contenteditable"===e&&Hr(t)?t:"true"},Wr=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),qr="http://www.w3.org/1999/xlink",Gr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kr=function(e){return Gr(e)?e.slice(6,e.length):""},Jr=function(e){return null==e||!1===e};function Yr(e){var t=e.data,n=e,r=e;while(o(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Xr(r.data,t));while(o(n=n.parent))n&&n.data&&(t=Xr(t,n.data));return Qr(t.staticClass,t.class)}function Xr(e,t){return{staticClass:ei(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Qr(e,t){return o(e)||o(t)?ei(e,ti(t)):""}function ei(e,t){return e?t?e+" "+t:e:t||""}function ti(e){return Array.isArray(e)?ni(e):u(e)?ri(e):"string"===typeof e?e:""}function ni(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=ti(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ri(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ii={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},oi=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(e){return oi(e)||si(e)};function ci(e){return si(e)?"svg":"math"===e?"math":void 0}var ui=Object.create(null);function li(e){if(!Y)return!0;if(ai(e))return!1;if(e=e.toLowerCase(),null!=ui[e])return ui[e];var t=document.createElement(e);return e.indexOf("-")>-1?ui[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ui[e]=/HTMLUnknownElement/.test(t.toString())}var hi=g("text,number,password,search,email,tel,url");function di(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function pi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(e,t){return document.createElementNS(ii[e],t)}function vi(e){return document.createTextNode(e)}function mi(e){return document.createComment(e)}function gi(e,t,n){e.insertBefore(t,n)}function yi(e,t){e.removeChild(t)}function bi(e,t){e.appendChild(t)}function _i(e){return e.parentNode}function wi(e){return e.nextSibling}function ki(e){return e.tagName}function Ii(e,t){e.textContent=t}function Si(e,t){e.setAttribute(t,"")}var Ci=Object.freeze({createElement:pi,createElementNS:fi,createTextNode:vi,createComment:mi,insertBefore:gi,removeChild:yi,appendChild:bi,parentNode:_i,nextSibling:wi,tagName:ki,setTextContent:Ii,setStyleScope:Si}),Ei={create:function(e,t){Ti(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ti(e,!0),Ti(t))},destroy:function(e){Ti(e,!0)}};function Ti(e,t){var n=e.data.ref;if(o(n)){var r=e.context,i=e.componentInstance||e.elm,s=r.$refs;t?Array.isArray(s[n])?b(s[n],i):s[n]===i&&(s[n]=void 0):e.data.refInFor?Array.isArray(s[n])?s[n].indexOf(i)<0&&s[n].push(i):s[n]=[i]:s[n]=i}}var Oi=new _e("",{},[]),Ai=["create","activate","update","remove","destroy"];function xi(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&Li(e,t)||s(e.isAsyncPlaceholder)&&i(t.asyncFactory.error))}function Li(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||hi(r)&&hi(i)}function Ri(e,t,n){var r,i,s={};for(r=t;r<=n;++r)i=e[r].key,o(i)&&(s[i]=r);return s}function $i(e){var t,n,r={},a=e.modules,u=e.nodeOps;for(t=0;t<Ai.length;++t)for(r[Ai[t]]=[],n=0;n<a.length;++n)o(a[n][Ai[t]])&&r[Ai[t]].push(a[n][Ai[t]]);function l(e){return new _e(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);o(t)&&u.removeChild(t,e)}function p(e,t,n,r,i,a,c){if(o(e.elm)&&o(a)&&(e=a[c]=Se(e)),e.isRootInsert=!i,!f(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;o(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),k(e),b(e,h,t),o(l)&&w(e,t),y(n,e.elm,r)):s(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function f(e,t,n,r){var i=e.data;if(o(i)){var a=o(e.componentInstance)&&i.keepAlive;if(o(i=i.hook)&&o(i=i.init)&&i(e,!1),o(e.componentInstance))return v(e,t),y(n,e.elm,r),s(a)&&m(e,t,n,r),!0}}function v(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(w(e,t),k(e)):(Ti(e),t.push(e))}function m(e,t,n,i){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<r.activate.length;++s)r.activate[s](Oi,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){o(e)&&(o(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function b(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else c(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return o(e.tag)}function w(e,n){for(var i=0;i<r.create.length;++i)r.create[i](Oi,e);t=e.data.hook,o(t)&&(o(t.create)&&t.create(Oi,e),o(t.insert)&&n.push(e))}function k(e){var t;if(o(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)o(t=n.context)&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}o(t=Rn)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function I(e,t,n,r,i,o){for(;r<=i;++r)p(n[r],o,e,t,!1,n,r)}function S(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)S(e.children[n])}function C(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?(E(r),S(r)):d(r.elm))}}function E(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=h(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&E(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else d(e.elm)}function T(e,t,n,r,s){var a,c,l,h,d=0,f=0,v=t.length-1,m=t[0],g=t[v],y=n.length-1,b=n[0],_=n[y],w=!s;while(d<=v&&f<=y)i(m)?m=t[++d]:i(g)?g=t[--v]:xi(m,b)?(A(m,b,r,n,f),m=t[++d],b=n[++f]):xi(g,_)?(A(g,_,r,n,y),g=t[--v],_=n[--y]):xi(m,_)?(A(m,_,r,n,y),w&&u.insertBefore(e,m.elm,u.nextSibling(g.elm)),m=t[++d],_=n[--y]):xi(g,b)?(A(g,b,r,n,f),w&&u.insertBefore(e,g.elm,m.elm),g=t[--v],b=n[++f]):(i(a)&&(a=Ri(t,d,v)),c=o(b.key)?a[b.key]:O(b,t,d,v),i(c)?p(b,r,e,m.elm,!1,n,f):(l=t[c],xi(l,b)?(A(l,b,r,n,f),t[c]=void 0,w&&u.insertBefore(e,l.elm,m.elm)):p(b,r,e,m.elm,!1,n,f)),b=n[++f]);d>v?(h=i(n[y+1])?null:n[y+1].elm,I(e,h,n,f,y,r)):f>y&&C(t,d,v)}function O(e,t,n,r){for(var i=n;i<r;i++){var s=t[i];if(o(s)&&xi(e,s))return i}}function A(e,t,n,a,c,l){if(e!==t){o(t.elm)&&o(a)&&(t=a[c]=Se(t));var h=t.elm=e.elm;if(s(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,p=t.data;o(p)&&o(d=p.hook)&&o(d=d.prepatch)&&d(e,t);var f=e.children,v=t.children;if(o(p)&&_(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=p.hook)&&o(d=d.update)&&d(e,t)}i(t.text)?o(f)&&o(v)?f!==v&&T(h,f,v,n,l):o(v)?(o(e.text)&&u.setTextContent(h,""),I(h,null,v,0,v.length-1,n)):o(f)?C(f,0,f.length-1):o(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),o(p)&&o(d=p.hook)&&o(d=d.postpatch)&&d(e,t)}}}function x(e,t,n){if(s(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var L=g("attrs,class,staticClass,staticStyle,key");function R(e,t,n,r){var i,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,s(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(i=c.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return v(t,n),!0;if(o(a)){if(o(u))if(e.hasChildNodes())if(o(i=c)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(o(c)){var p=!1;for(var f in c)if(!L(f)){p=!0,w(t,n);break}!p&&c["class"]&&yt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!i(t)){var c=!1,h=[];if(i(e))c=!0,p(t,h);else{var d=o(e.nodeType);if(!d&&xi(e,t))A(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(B)&&(e.removeAttribute(B),n=!0),s(n)&&R(e,t,h))return x(t,h,!0),e;e=l(e)}var f=e.elm,v=u.parentNode(f);if(p(t,h,f._leaveCb?null:v,u.nextSibling(f)),o(t.parent)){var m=t.parent,g=_(t);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=t.elm,g){for(var b=0;b<r.create.length;++b)r.create[b](Oi,m);var w=m.data.hook.insert;if(w.merged)for(var k=1;k<w.fns.length;k++)w.fns[k]()}else Ti(m);m=m.parent}}o(v)?C([e],0,0):o(e.tag)&&S(e)}}return x(t,h,c),t.elm}o(e)&&S(e)}}var Ni={create:Pi,update:Pi,destroy:function(e){Pi(e,Oi)}};function Pi(e,t){(e.data.directives||t.data.directives)&&Mi(e,t)}function Mi(e,t){var n,r,i,o=e===Oi,s=t===Oi,a=ji(e.data.directives,e.context),c=ji(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Bi(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Bi(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Bi(u[n],"inserted",t,e)};o?It(t,"insert",h):h()}if(l.length&&It(t,"postpatch",(function(){for(var n=0;n<l.length;n++)Bi(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||Bi(a[n],"unbind",e,e,s)}var Di=Object.create(null);function ji(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=Di),i[Vi(r)]=r,r.def=Je(t.$options,"directives",r.name,!0);return i}function Vi(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Bi(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Cs){rt(Cs,n.context,"directive "+e.name+" "+t+" hook")}}var Ui=[Ei,Ni];function Fi(e,t){var n=t.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(e.data.attrs)||!i(t.data.attrs))){var r,s,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(r in o(l.__ob__)&&(l=t.data.attrs=R({},l)),l)s=l[r],a=u[r],a!==s&&zi(c,r,s,t.data.pre);for(r in(te||re)&&l.value!==u.value&&zi(c,"value",l.value),u)i(l[r])&&(Gr(r)?c.removeAttributeNS(qr,Kr(r)):zr(r)||c.removeAttribute(r))}}function zi(e,t,n,r){r||e.tagName.indexOf("-")>-1?Hi(e,t,n):Wr(t)?Jr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):zr(t)?e.setAttribute(t,Zr(t,n)):Gr(t)?Jr(n)?e.removeAttributeNS(qr,Kr(t)):e.setAttributeNS(qr,t,n):Hi(e,t,n)}function Hi(e,t,n){if(Jr(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var Zi={create:Fi,update:Fi};function Wi(e,t){var n=t.elm,r=t.data,s=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(s)||i(s.staticClass)&&i(s.class)))){var a=Yr(t),c=n._transitionClasses;o(c)&&(a=ei(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var qi,Gi={create:Wi,update:Wi},Ki="__r",Ji="__c";function Yi(e){if(o(e[Ki])){var t=te?"change":"input";e[t]=[].concat(e[Ki],e[t]||[]),delete e[Ki]}o(e[Ji])&&(e.change=[].concat(e[Ji],e.change||[]),delete e[Ji])}function Xi(e,t,n){var r=qi;return function i(){var o=t.apply(null,arguments);null!==o&&to(e,i,n,r)}}var Qi=ct&&!(oe&&Number(oe[1])<=53);function eo(e,t,n,r){if(Qi){var i=Kn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}qi.addEventListener(e,t,ae?{capture:n,passive:r}:n)}function to(e,t,n,r){(r||qi).removeEventListener(e,t._wrapper||t,n)}function no(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};qi=t.elm,Yi(n),kt(n,r,eo,to,Xi,t.context),qi=void 0}}var ro,io={create:no,update:no};function oo(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,s=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in o(c.__ob__)&&(c=t.data.domProps=R({},c)),a)n in c||(s[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===a[n])continue;1===s.childNodes.length&&s.removeChild(s.childNodes[0])}if("value"===n&&"PROGRESS"!==s.tagName){s._value=r;var u=i(r)?"":String(r);so(s,u)&&(s.value=u)}else if("innerHTML"===n&&si(s.tagName)&&i(s.innerHTML)){ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+r+"</svg>";var l=ro.firstChild;while(s.firstChild)s.removeChild(s.firstChild);while(l.firstChild)s.appendChild(l.firstChild)}else if(r!==a[n])try{s[n]=r}catch(Cs){}}}}function so(e,t){return!e.composing&&("OPTION"===e.tagName||ao(e,t)||co(e,t))}function ao(e,t){var n=!0;try{n=document.activeElement!==e}catch(Cs){}return n&&e.value!==t}function co(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return m(n)!==m(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var uo={create:oo,update:oo},lo=k((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function ho(e){var t=po(e.style);return e.staticStyle?R(e.staticStyle,t):t}function po(e){return Array.isArray(e)?$(e):"string"===typeof e?lo(e):e}function fo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ho(i.data))&&R(r,n)}(n=ho(e.data))&&R(r,n);var o=e;while(o=o.parent)o.data&&(n=ho(o.data))&&R(r,n);return r}var vo,mo=/^--/,go=/\s*!important$/,yo=function(e,t,n){if(mo.test(t))e.style.setProperty(t,n);else if(go.test(n))e.style.setProperty(T(t),n.replace(go,""),"important");else{var r=_o(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},bo=["Webkit","Moz","ms"],_o=k((function(e){if(vo=vo||document.createElement("div").style,e=S(e),"filter"!==e&&e in vo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<bo.length;n++){var r=bo[n]+t;if(r in vo)return r}}));function wo(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var s,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=po(t.data.style)||{};t.data.normalizedStyle=o(d.__ob__)?R({},d):d;var p=fo(t,!0);for(a in h)i(p[a])&&yo(c,a,"");for(a in p)s=p[a],s!==h[a]&&yo(c,a,null==s?"":s)}}var ko={create:wo,update:wo},Io=/\s+/;function So(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Io).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Co(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Io).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Eo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&R(t,To(e.name||"v")),R(t,e),t}return"string"===typeof e?To(e):void 0}}var To=k((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Oo=Y&&!ne,Ao="transition",xo="animation",Lo="transition",Ro="transitionend",$o="animation",No="animationend";Oo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Lo="WebkitTransition",Ro="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&($o="WebkitAnimation",No="webkitAnimationEnd"));var Po=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Mo(e){Po((function(){Po(e)}))}function Do(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),So(e,t))}function jo(e,t){e._transitionClasses&&b(e._transitionClasses,t),Co(e,t)}function Vo(e,t,n){var r=Uo(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===Ao?Ro:No,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var Bo=/\b(transform|all)(,|$)/;function Uo(e,t){var n,r=window.getComputedStyle(e),i=(r[Lo+"Delay"]||"").split(", "),o=(r[Lo+"Duration"]||"").split(", "),s=Fo(i,o),a=(r[$o+"Delay"]||"").split(", "),c=(r[$o+"Duration"]||"").split(", "),u=Fo(a,c),l=0,h=0;t===Ao?s>0&&(n=Ao,l=s,h=o.length):t===xo?u>0&&(n=xo,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?Ao:xo:null,h=n?n===Ao?o.length:c.length:0);var d=n===Ao&&Bo.test(r[Lo+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Fo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return zo(t)+zo(e[n])})))}function zo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ho(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Eo(e.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){var s=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,h=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,f=r.appearActiveClass,v=r.beforeEnter,g=r.enter,y=r.afterEnter,b=r.enterCancelled,_=r.beforeAppear,w=r.appear,k=r.afterAppear,I=r.appearCancelled,S=r.duration,C=Rn,E=Rn.$vnode;while(E&&E.parent)C=E.context,E=E.parent;var T=!C._isMounted||!e.isRootInsert;if(!T||w||""===w){var O=T&&d?d:c,A=T&&f?f:h,x=T&&p?p:l,L=T&&_||v,R=T&&"function"===typeof w?w:g,$=T&&k||y,N=T&&I||b,P=m(u(S)?S.enter:S);0;var M=!1!==s&&!ne,D=qo(R),j=n._enterCb=V((function(){M&&(jo(n,x),jo(n,A)),j.cancelled?(M&&jo(n,O),N&&N(n)):$&&$(n),n._enterCb=null}));e.data.show||It(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,j)})),L&&L(n),M&&(Do(n,O),Do(n,A),Mo((function(){jo(n,O),j.cancelled||(Do(n,x),D||(Wo(P)?setTimeout(j,P):Vo(n,a,j)))}))),e.data.show&&(t&&t(),R&&R(n,j)),M||D||j()}}}function Zo(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Eo(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var s=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,h=r.leaveActiveClass,d=r.beforeLeave,p=r.leave,f=r.afterLeave,v=r.leaveCancelled,g=r.delayLeave,y=r.duration,b=!1!==s&&!ne,_=qo(p),w=m(u(y)?y.leave:y);0;var k=n._leaveCb=V((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(jo(n,l),jo(n,h)),k.cancelled?(b&&jo(n,c),v&&v(n)):(t(),f&&f(n)),n._leaveCb=null}));g?g(I):I()}function I(){k.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),b&&(Do(n,c),Do(n,h),Mo((function(){jo(n,c),k.cancelled||(Do(n,l),_||(Wo(w)?setTimeout(k,w):Vo(n,a,k)))}))),p&&p(n,k),b||_||k())}}function Wo(e){return"number"===typeof e&&!isNaN(e)}function qo(e){if(i(e))return!1;var t=e.fns;return o(t)?qo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Go(e,t){!0!==t.data.show&&Ho(t)}var Ko=Y?{create:Go,activate:Go,remove:function(e,t){!0!==e.data.show?Zo(e,t):t()}}:{},Jo=[Zi,Gi,io,uo,ko,Ko],Yo=Jo.concat(Ui),Xo=$i({nodeOps:Ci,modules:Yo});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&ss(e,"input")}));var Qo={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?It(n,"postpatch",(function(){Qo.componentUpdated(e,t,n)})):es(e,t,n.context),e._vOptions=[].map.call(e.options,rs)):("textarea"===n.tag||hi(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",is),e.addEventListener("compositionend",os),e.addEventListener("change",os),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){es(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,rs);if(i.some((function(e,t){return!D(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return ns(e,i)})):t.value!==t.oldValue&&ns(t.value,i);o&&ss(e,"change")}}}};function es(e,t,n){ts(e,t,n),(te||re)&&setTimeout((function(){ts(e,t,n)}),0)}function ts(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=j(r,rs(s))>-1,s.selected!==o&&(s.selected=o);else if(D(rs(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function ns(e,t){return t.every((function(t){return!D(t,e)}))}function rs(e){return"_value"in e?e._value:e.value}function is(e){e.target.composing=!0}function os(e){e.target.composing&&(e.target.composing=!1,ss(e.target,"input"))}function ss(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function as(e){return!e.componentInstance||e.data&&e.data.transition?e:as(e.componentInstance._vnode)}var cs={bind:function(e,t,n){var r=t.value;n=as(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Ho(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=as(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?Ho(n,(function(){e.style.display=e.__vOriginalDisplay})):Zo(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},us={model:Qo,show:cs},ls={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function hs(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?hs(Cn(t.children)):e}function ds(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[S(o)]=i[o];return t}function ps(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fs(e){while(e=e.parent)if(e.data.transition)return!0}function vs(e,t){return t.key===e.key&&t.tag===e.tag}var ms=function(e){return e.tag||Pt(e)},gs=function(e){return"show"===e.name},ys={name:"transition",props:ls,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(ms),n.length)){0;var r=this.mode;0;var i=n[0];if(fs(this.$vnode))return i;var o=hs(i);if(!o)return i;if(this._leaving)return ps(e,i);var s="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?s+"comment":s+o.tag:c(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=ds(this),u=this._vnode,l=hs(u);if(o.data.directives&&o.data.directives.some(gs)&&(o.data.show=!0),l&&l.data&&!vs(o,l)&&!Pt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=R({},a);if("out-in"===r)return this._leaving=!0,It(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),ps(e,i);if("in-out"===r){if(Pt(o))return u;var d,p=function(){d()};It(a,"afterEnter",p),It(a,"enterCancelled",p),It(h,"delayLeave",(function(e){d=e}))}}return i}}},bs=R({tag:String,moveClass:String},ls);delete bs.mode;var _s={props:bs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=$n(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=ds(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=s,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(ws),e.forEach(ks),e.forEach(Is),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Do(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ro,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ro,e),n._moveCb=null,jo(n,t))})}})))},methods:{hasMove:function(e,t){if(!Oo)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Co(n,e)})),So(n,t),n.style.display="none",this.$el.appendChild(n);var r=Uo(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function ws(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function ks(e){e.data.newPos=e.elm.getBoundingClientRect()}function Is(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Ss={Transition:ys,TransitionGroup:_s};Cr.config.mustUseProp=Fr,Cr.config.isReservedTag=ai,Cr.config.isReservedAttr=Br,Cr.config.getTagNamespace=ci,Cr.config.isUnknownElement=li,R(Cr.options.directives,us),R(Cr.options.components,Ss),Cr.prototype.__patch__=Y?Xo:N,Cr.prototype.$mount=function(e,t){return e=e&&Y?di(e):void 0,Mn(this,e,t)},Y&&setTimeout((function(){z.devtools&&le&&le.emit("init",Cr)}),0),t["Z"]=Cr},3453:function(e){e.exports=function(e,t){var n="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"===typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[r]=n.components[r]||t[r]}},3168:function(e,t,n){"use strict";var r=n(3072),i=n.n(r);let o;o=class{get length(){return Object.keys(this).length}key(e){return Object.keys(this)[e]}setItem(e,t){this[e]=t.toString()}getItem(e){return this[e]}removeItem(e){delete this[e]}clear(){for(let e of Object.keys(this))delete this[e]}};class s{constructor(){this._queue=[],this._flushing=!1}enqueue(e){return this._queue.push(e),this._flushing?Promise.resolve():this.flushQueue()}flushQueue(){this._flushing=!0;const e=()=>{const t=this._queue.shift();if(t)return t.then(e);this._flushing=!1};return Promise.resolve(e())}}const a={replaceArrays:{arrayMerge:(e,t,n)=>t},concatArrays:{arrayMerge:(e,t,n)=>e.concat(...t)}};function c(e,t,n){return i()(e,t,a[n])}let u=JSON;class l{constructor(e){this._mutex=new s,this.subscriber=e=>t=>e.subscribe(t),"undefined"===typeof e&&(e={}),this.key=null!=e.key?e.key:"vuex",this.subscribed=!1,this.supportCircular=e.supportCircular||!1,this.supportCircular&&(u=n(939)),this.mergeOption=e.mergeOption||"replaceArrays";let t=!0;try{window.localStorage.getItem("")}catch(r){t=!1}if(e.storage)this.storage=e.storage;else if(t)this.storage=window.localStorage;else{if(!o)throw new Error("Neither 'window' is defined, nor 'MockStorage' is available");this.storage=new o}this.reducer=null!=e.reducer?e.reducer:null==e.modules?e=>e:t=>e.modules.reduce(((e,n)=>c(e,{[n]:t[n]},this.mergeOption)),{}),this.filter=e.filter||(e=>!0),this.strictMode=e.strictMode||!1,this.RESTORE_MUTATION=function(e,t){const n=c(e,t||{},this.mergeOption);for(const r of Object.keys(n))this._vm.$set(e,r,n[r])},this.asyncStorage=e.asyncStorage||!1,this.asyncStorage?(this.restoreState=null!=e.restoreState?e.restoreState:(e,t)=>t.getItem(e).then((e=>"string"===typeof e?this.supportCircular?u.parse(e||"{}"):JSON.parse(e||"{}"):e||{})),this.saveState=null!=e.saveState?e.saveState:(e,t,n)=>n.setItem(e,this.asyncStorage?c({},t||{},this.mergeOption):this.supportCircular?u.stringify(t):JSON.stringify(t)),this.plugin=e=>{e.restored=this.restoreState(this.key,this.storage).then((t=>{this.strictMode?e.commit("RESTORE_MUTATION",t):e.replaceState(c(e.state,t||{},this.mergeOption)),this.subscriber(e)(((e,t)=>{this.filter(e)&&this._mutex.enqueue(this.saveState(this.key,this.reducer(t),this.storage))})),this.subscribed=!0}))}):(this.restoreState=null!=e.restoreState?e.restoreState:(e,t)=>{const n=t.getItem(e);return"string"===typeof n?this.supportCircular?u.parse(n||"{}"):JSON.parse(n||"{}"):n||{}},this.saveState=null!=e.saveState?e.saveState:(e,t,n)=>n.setItem(e,this.supportCircular?u.stringify(t):JSON.stringify(t)),this.plugin=e=>{const t=this.restoreState(this.key,this.storage);this.strictMode?e.commit("RESTORE_MUTATION",t):e.replaceState(c(e.state,t||{},this.mergeOption)),this.subscriber(e)(((e,t)=>{this.filter(e)&&this.saveState(this.key,this.reducer(t),this.storage)})),this.subscribed=!0})}}t["ZP"]=l},3072:function(e){"use strict";var t=function(e){return n(e)&&!r(e)};function n(e){return!!e&&"object"===typeof e}function r(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||s(e)}var i="function"===typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103;function s(e){return e.$$typeof===o}function a(e){return Array.isArray(e)?[]:{}}function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?m(a(e),e,t):e}function u(e,t,n){return e.concat(t).map((function(e){return c(e,n)}))}function l(e,t){if(!t.customMerge)return m;var n=t.customMerge(e);return"function"===typeof n?n:m}function h(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}function d(e){return Object.keys(e).concat(h(e))}function p(e,t){try{return t in e}catch(n){return!1}}function f(e,t){return p(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function v(e,t,n){var r={};return n.isMergeableObject(e)&&d(e).forEach((function(t){r[t]=c(e[t],n)})),d(t).forEach((function(i){f(e,i)||(p(e,i)&&n.isMergeableObject(t[i])?r[i]=l(i,n)(e[i],t[i],n):r[i]=c(t[i],n))})),r}function m(e,n,r){r=r||{},r.arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||t,r.cloneUnlessOtherwiseSpecified=c;var i=Array.isArray(n),o=Array.isArray(e),s=i===o;return s?i?r.arrayMerge(e,n,r):v(e,n,r):c(n,r)}m.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return m(e,n,t)}),{})};var g=m;e.exports=g},629:function(e,t,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function d(e,t){return function(){return e(t)}}var p=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(e,t){this._children[e]=t},p.prototype.removeChild=function(e){delete this._children[e]},p.prototype.getChild=function(e){return this._children[e]},p.prototype.hasChild=function(e){return e in this._children},p.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},p.prototype.forEachChild=function(e){u(this._children,e)},p.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},p.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},p.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(p.prototype,f);var v=function(e){this.register([],e,!1)};function m(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;m(e.concat(r),t.getChild(r),n.modules[r])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},v.prototype.update=function(e){m([],this.root,e)},v.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new p(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var y=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;I(this,u,[],this._modules.root),k(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:g.config.devtools;l&&s(this)},b={state:{configurable:!0}};function _(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function w(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;I(e,n,[],e._modules.root,!0),k(e,n,t)}function k(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:o}),g.config.silent=s,e.strict&&A(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function I(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=x(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=S(e,s,n);r.forEachMutation((function(t,n){var r=s+n;E(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;T(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;O(e,r,t,u)})),r.forEachChild((function(r,o){I(e,t,n.concat(o),r,i)}))}function S(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=L(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=L(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return C(e,t)}},state:{get:function(){return x(e.state,n)}}}),i}function C(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function E(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return h(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function O(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(e,t){return t.reduce((function(e,t){return e[t]}),e)}function L(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function R(e){g&&e===g||(g=e,r(g))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=L(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},y.prototype.dispatch=function(e,t){var n=this,r=L(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return _(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),I(this,this.state,e,this._modules.get(e),n.preserveState),k(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=x(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),w(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),w(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,b);var $=B((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=U(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),N=B((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=U(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),P=B((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||U(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=B((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=U(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),D=function(e){return{mapState:$.bind(null,e),mapGetters:P.bind(null,e),mapMutations:N.bind(null,e),mapActions:M.bind(null,e)}};function j(e){return V(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function V(e){return Array.isArray(e)||l(e)}function B(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function U(e,t,n){var r=e._modulesNamespaceMap[n];return r}function F(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var h=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,o){var s=c(o);if(n(e,h,s)){var a=Z(),u=i(e),d="mutation "+e.type+a;z(l,d,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),H(l)}h=s})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=Z(),i=s(e),a="action "+e.type+r;z(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),H(l)}})))}}function z(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function H(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function Z(){var e=new Date;return" @ "+q(e.getHours(),2)+":"+q(e.getMinutes(),2)+":"+q(e.getSeconds(),2)+"."+q(e.getMilliseconds(),3)}function W(e,t){return new Array(t+1).join(e)}function q(e,t){return W("0",t-e.toString().length)+e}var G={Store:y,install:R,version:"3.6.2",mapState:$,mapMutations:N,mapGetters:P,mapActions:M,createNamespacedHelpers:D,createLogger:F};t["ZP"]=G},939:function(e,t){"use strict";
/*! (c) 2020 Andrea Giammarchi */const{parse:n,stringify:r}=JSON,{keys:i}=Object,o=String,s="string",a={},c="object",u=(e,t)=>t,l=e=>e instanceof o?o(e):e,h=(e,t)=>typeof t===s?new o(t):t,d=(e,t,n,r)=>{const s=[];for(let u=i(n),{length:l}=u,h=0;h<l;h++){const i=u[h],l=n[i];if(l instanceof o){const o=e[l];typeof o!==c||t.has(o)?n[i]=r.call(n,i,o):(t.add(o),n[i]=a,s.push({k:i,a:[e,t,o,r]}))}else n[i]!==a&&(n[i]=r.call(n,i,l))}for(let{length:i}=s,o=0;o<i;o++){const{k:e,a:t}=s[o];n[e]=r.call(n,e,d.apply(null,t))}return n},p=(e,t,n)=>{const r=o(t.push(n)-1);return e.set(n,r),r},f=(e,t)=>{const r=n(e,h).map(l),i=r[0],o=t||u,s=typeof i===c&&i?d(r,new Set,i,o):i;return o.call({"":s},"",s)};t.parse=f;const v=(e,t,n)=>{const i=t&&typeof t===c?(e,n)=>""===e||-1<t.indexOf(e)?n:void 0:t||u,o=new Map,a=[],l=[];let h=+p(o,a,i.call({"":e},"",e)),d=!h;while(h<a.length)d=!0,l[h]=r(a[h++],f,n);return"["+l.join(",")+"]";function f(e,t){if(d)return d=!d,t;const n=i.call(this,e,t);switch(typeof n){case c:if(null===n)return n;case s:return o.get(n)||p(o,a,n)}return n}};t.stringify=v;const m=e=>n(v(e));t.toJSON=m;const g=e=>f(r(e));t.fromJSON=g},8180:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(4444),i=n(8463),o=n(2238),s=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,o._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,o.deleteApp)(this._delegate))))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o.initializeApp(i,s);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),p=new s.Yd("@firebase/app-compat"),f="@firebase/app-compat",v="0.1.21";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){(0,o.registerVersion)(f,v,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=d;m()},2238:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return o.ZR},SDK_VERSION:function(){return K},_DEFAULT_ENTRY_NAME:function(){return M},_addComponent:function(){return B},_addOrOverwriteComponent:function(){return U},_apps:function(){return j},_clearComponents:function(){return Z},_components:function(){return V},_getProvider:function(){return z},_registerComponent:function(){return F},_removeServiceInstance:function(){return H},deleteApp:function(){return Q},getApp:function(){return Y},getApps:function(){return X},initializeApp:function(){return J},onLog:function(){return te},registerVersion:function(){return ee},setLogLevel:function(){return ne}});var r=n(8463),i=n(3333),o=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.20",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",f="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",k="@firebase/installations",I="@firebase/installations-compat",S="@firebase/messaging",C="@firebase/messaging-compat",E="@firebase/performance",T="@firebase/performance-compat",O="@firebase/remote-config",A="@firebase/remote-config-compat",x="@firebase/storage",L="@firebase/storage-compat",R="@firebase/firestore",$="@firebase/firestore-compat",N="firebase",P="9.6.10",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[f]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[k]:"fire-iid",[I]:"fire-iid-compat",[S]:"fire-fcm",[C]:"fire-fcm-compat",[E]:"fire-perf",[T]:"fire-perf-compat",[O]:"fire-rc",[A]:"fire-rc-compat",[x]:"fire-gcs",[L]:"fire-gcs-compat",[R]:"fire-fst",[$]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},j=new Map,V=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function U(e,t){e.container.addOrOverwriteComponent(t)}function F(e){const t=e.name;if(V.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of j.values())B(n,e);return!0}function z(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function H(e,t,n=M){z(e,t).clearInstance(n)}function Z(){V.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},q=new o.LL("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=P;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw q.create("bad-app-name",{appName:String(i)});const s=j.get(i);if(s){if((0,o.vZ)(e,s.options)&&(0,o.vZ)(n,s.config))return s;throw q.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of V.values())a.addComponent(r);const c=new G(e,n,a);return j.set(i,c),c}function Y(e=M){const t=j.get(e);if(!t)throw q.create("no-app",{appName:e});return t}function X(){return Array.from(j.values())}async function Q(e){const t=e.name;j.has(t)&&(j.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}F(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw q.create("invalid-log-argument");(0,i.Am)(e,t)}function ne(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="firebase-heartbeat-database",ie=1,oe="firebase-heartbeat-store";let se=null;function ae(){return se||(se=(0,o.X3)(re,ie,((e,t)=>{switch(t){case 0:e.createObjectStore(oe)}})).catch((e=>{throw q.create("storage-open",{originalErrorMessage:e.message})}))),se}async function ce(e){try{const t=await ae();return t.transaction(oe).objectStore(oe).get(le(e))}catch(t){throw q.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await ae(),r=n.transaction(oe,"readwrite"),i=r.objectStore(oe);return await i.put(t,le(e)),r.complete}catch(n){throw q.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=1024,de=2592e6;class pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=de})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:n}=ve(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fe(){const e=new Date;return e.toISOString().substring(0,10)}function ve(e,t=he){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ge(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class me{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ge(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){F(new r.wA("platform-logger",(e=>new s(e)),"PRIVATE")),F(new r.wA("heartbeat",(e=>new pe(e)),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ye("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.9a0bf6ce.js.map