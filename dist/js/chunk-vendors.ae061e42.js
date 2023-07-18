(self["webpackChunkgoogle_login"]=self["webpackChunkgoogle_login"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return b},L:function(){return c},LL:function(){return L},Pz:function(){return y},UG:function(){return k},ZB:function(){return l},ZR:function(){return x},aH:function(){return g},b$:function(){return C},eu:function(){return O},hl:function(){return T},jU:function(){return I},m9:function(){return Z},ne:function(){return U},pd:function(){return V},r3:function(){return N},ru:function(){return S},tV:function(){return u},uI:function(){return w},vZ:function(){return M},w1:function(){return E},xO:function(){return j},xb:function(){return $},z$:function(){return _},zd:function(){return B}});
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(d=64)),r.push(n[u],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,a=o?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,d=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==d)throw new s;const h=t<<2|a>>4;if(r.push(h),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==d){const e=u<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&d(n)&&(e[n]=l(e[n],t[n]));return e}function d(e){return"__proto__"!==e}
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
 */function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const p=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},v=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},m=()=>{try{return p()||f()||v()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=()=>{var e;return null===(e=m())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=m())||void 0===t?void 0:t[`_${e}`]};
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
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function w(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function k(){var e;const t=null===(e=m())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){return"object"===typeof self&&self.self===self}function S(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function C(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function T(){try{return"object"===typeof indexedDB}catch(e){return!1}}function O(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const A="FirebaseError";class x extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,x.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?P(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new x(r,s,n);return a}}function P(e,t){return e.replace(R,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const R=/\{\$([^}]+)}/g;
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
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(D(n)&&D(o)){if(!M(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
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
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function V(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function U(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
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
function Z(e){return e&&e._delegate?e._delegate:e}},1001:function(e,t,n){"use strict";function r(e,t,n,r,i,o,s,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},9662:function(e,t,n){var r=n(614),i=n(6330),o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,o=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},9670:function(e,t,n){var r=n(111),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),o=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!s(e,"length").writable)throw o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),o=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&o(n,u,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,o=r("".replace),s=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=o(e,a,"");return e}},5392:function(e,t,n){var r=n(8880),i=n(1060),o=n(2914),s=Error.captureStackTrace;e.exports=function(e,t,n,a){o&&(s?s(e,t):r(e,"stack",i(n,a)))}},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,d,h,p,f,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(d in t){if(p=t[d],e.dontCallGetSet?(f=i(l,d),h=f&&f.value):h=l[d],n=u(m?d:v+(g?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof p==typeof h)continue;c(p,h)}(e.sham||h&&h.sham)&&o(p,"sham",!0),s(l,d,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(e,t,n){var r=n(1702),i=n(9662);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);e.exports=r?s:function(e){return function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),o=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a(e,""):s(e)}:s},9587:function(e,t,n){var r=n(614),i=n(111),o=n(7674);e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),d=n(5465),h=n(6200),p=n(3501),f="Object already initialized",v=a.TypeError,m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw v(f);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},o=function(e){return b.has(e)}}else{var _=h("state");p[_]=!0,r=function(e,t){if(l(e,_))throw v(f);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},o=function(e){return l(e,_)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===o}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),i=n(7293),o=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),d=l.enforce,h=l.get,p=String,f=Object.defineProperty,v=r("".slice),m=r("".replace),g=r([].join),y=a&&!i((function(){return 8!==f((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===v(p(t),0,7)&&(t="["+m(p(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||c&&e.name!==t)&&(a?f(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&s(n,"arity")&&e.length!==n.arity&&f(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=d(e);return s(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return o(this)&&h(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",p="writable";t.f=r?o?function(e,t,n){if(s(e),t=a(t),s(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=l(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(s(e),t=a(t),s(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(5668),i=n(9670),o=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!o(a=r(n,e)))return a;if(i(n=e.valueOf)&&!o(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!o(a=r(n,e)))return a;throw s("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293),o=n(7854),s=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!s(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=s(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},5112:function(e,t,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),d=c?u["for"]||u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)||(l[e]=a&&o(u,e)?u[e]:d("Symbol."+e)),l[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),o=n(8880),s=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),d=n(6277),h=n(8340),p=n(5392),f=n(9781),v=n(1913);e.exports=function(e,t,n,m){var g="stackTraceLimit",y=m?2:1,b=e.split("."),_=b[b.length-1],w=r.apply(null,b);if(w){var k=w.prototype;if(!v&&i(k,"cause")&&delete k.cause,!n)return w;var I=r("Error"),S=t((function(e,t){var n=d(m?t:e,void 0),r=m?new w(e):new w;return void 0!==n&&o(r,"message",n),p(r,S,r.stack,2),this&&s(k,this)&&l(r,this,S),arguments.length>y&&h(r,arguments[y]),r}));if(S.prototype=k,"Error"!==_?a?a(S,I):c(S,I,{name:!0}):f&&g in w&&(u(S,w,g),u(S,w,"prepareStackTrace")),c(S,w),!v)try{k.name!==_&&o(k,"name",_),k.constructor=S}catch(C){}return S}}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=u||!l();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=i(this),n=o(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return s(t,n),n}})},1703:function(e,t,n){var r=n(2109),i=n(7854),o=n(2104),s=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},d=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return o(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return o(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return o(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return o(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return o(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return o(e,this,arguments)}})),l("URIError",(function(e){return function(t){return o(e,this,arguments)}})),d("CompileError",(function(e){return function(t){return o(e,this,arguments)}})),d("LinkError",(function(e){return function(t){return o(e,this,arguments)}})),d("RuntimeError",(function(e){return function(t){return o(e,this,arguments)}}))},9027:function(){},5205:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var o=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)}))):(a(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return s(o,e)})))}))}function s(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return s(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return s(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return s(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},6232:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});n(7658);var r=n(6313);function i(e,t,n){const{self:r=!1}=t.modifiers||{},i=t.value,o="object"===typeof i&&i.options||{passive:!0},s="function"===typeof i||"handleEvent"in i?i:i.handler,a=r?e:t.arg?document.querySelector(t.arg):window;a&&(a.addEventListener("scroll",s,o),e._onScroll=Object(e._onScroll),e._onScroll[n.context._uid]={handler:s,options:o,target:r?void 0:a})}function o(e,t,n){var r;if(!(null===(r=e._onScroll)||void 0===r?void 0:r[n.context._uid]))return;const{handler:i,options:o,target:s=e}=e._onScroll[n.context._uid];s.removeEventListener("scroll",i,o),delete e._onScroll[n.context._uid]}const s={inserted:i,unbind:o};var a=s,c=n(3347),u=n(4101),l=n(144),d=l.ZP.extend({name:"scrollable",directives:{Scroll:s},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,u.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),h=n(9131),p=n(1444),f=n(5352),v=n(7678);const m=(0,v.Z)(r.Z,d,h.Z,p.Z,(0,c.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var g=m.extend({name:"v-app-bar",directives:{Scroll:a},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return d.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const e=this.computedScrollThreshold;return Math.max((e-this.currentScroll)/e,0)},computedContentHeight(){if(!this.shrinkOnScroll)return r.Z.options.computed.computedContentHeight.call(this);const e=this.dense?48:56,t=this.computedOriginalHeight;return e+(t-e)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const e=1.25,t=1.5;return e+(t-e)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let e=r.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(e+=parseInt(this.extensionHeight)),e},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const e=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?e:-e},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:r.Z.options.computed.isCollapsed.call(this)},isProminent(){return r.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...r.Z.options.computed.styles.call(this),fontSize:(0,f.kb)(this.computedFontSize,"rem"),marginTop:(0,f.kb)(this.computedMarginTop),transform:`translateY(${(0,f.kb)(this.computedTransform)})`,left:(0,f.kb)(this.computedLeft),right:(0,f.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(e){this.isActive=!e||0!==this.currentScroll},hideOnScroll(e){this.isActive=!e||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const e=r.Z.options.methods.genBackground.call(this);return e.data=this._b(e.data||{},e.tag,{style:{opacity:this.computedOpacity}}),e},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(e){const t=r.Z.options.render.call(this,e);return t.data=t.data||{},this.canScroll&&(t.data.directives=t.data.directives||[],t.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t}})},5550:function(e,t,n){"use strict";var r=n(2240),i=n(4562),o=n(144);t.Z=o.ZP.extend({name:"v-app-bar-nav-icon",functional:!0,render(e,{slots:t,listeners:n,props:o,data:s}){const a=Object.assign(s,{staticClass:`v-app-bar__nav-icon ${s.staticClass||""}`.trim(),props:{...o,icon:!0},on:n}),c=t().default;return e(i.Z,a,c||[e(r.Z,"$menu")])}})},998:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(1703);var r=n(6669),i=n(7678),o=(0,i.Z)(r.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://v2.vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},3423:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(6878),i=n(8846),o=n(2637),s=n(5352),a=n(7678),c=(0,a.Z)(r.Z,i.Z,o.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,s.kb)(this.size),minWidth:(0,s.kb)(this.size),width:(0,s.kb)(this.size),...this.measurableStyles}}},render(e){const t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},4562:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(3434),i=n(3305),o=i.Z,s=n(3037),a=n(1444),c=n(4390),u=n(4263),l=n(8860),d=n(4338),h=n(7678),p=n(4101);const f=(0,h.Z)(r.Z,l.Z,u.Z,d.Z,(0,s.d)("btnToggle"),(0,a.d)("inputValue"));var v=f.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...l.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return c.Z.options.computed.computedElevation.call(this)},computedRipple(){var e;const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(e=this.ripple)&&void 0!==e?e:t)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,p.fK)(e,t,this)}))},methods:{click(e){!this.retainFocusOnClick&&!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o,{props:{indeterminate:!0,size:23,width:2}})])}},render(e){const t=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:r}=this.generateRouteLink(),i=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),e(n,this.disabled?r:i(this.color,r),t)}})},3687:function(e,t,n){"use strict";n(9027);var r=n(5352);t.Z=(0,r.Ji)("spacer","div","v-spacer")},4324:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});n(7658);var r,i=n(2500),o=n(6878),s=n(4338),a=n(6669),c=n(5352),u=n(144),l=n(7678);function d(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function h(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(r||(r={}));const p=(0,l.Z)(i.Z,o.Z,s.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,c.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,c.XP)(e).find((t=>e[t]));return t&&r[t]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const n=[],r=this.getDefaultData();let i="material-icons";const o=e.indexOf("-"),s=o<=-1;s?n.push(e):(i=e.slice(0,o),d(i)&&(i="")),r.class[i]=!0,r.class[e]=!s;const a=this.getSize();return a&&(r.style={fontSize:a}),this.applyColors(r),t(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon(e,t){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const n={class:{"v-icon__component":!0}},r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);const i=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(i,n)])}},render(e){const t=this.getIcon();return"string"===typeof t?h(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var f=u.ZP.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(e,{data:t,children:n}){let r="";return t.domProps&&(r=t.domProps.textContent||t.domProps.innerHTML||r,delete t.domProps.textContent,delete t.domProps.innerHTML),e(p,t,r?[r]:n)}})},2240:function(e,t,n){"use strict";var r=n(4324);t.Z=r.Z},1625:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});n(7658);var r=n(6750),i=n(9422),o=i.Z,s=n(6669),a=n(7678),c=n(1767),u=n(4101),l=n(5352);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var h=(0,a.Z)(o,s.Z).extend({name:"v-img",directives:{intersect:r.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push(`linear-gradient(${this.gradient})`),t&&e.push(`url("${t}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(e,t,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const e=new Image;this.image=e,e.onload=()=>{e.decode?e.decode().catch((e=>{(0,u.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(e.message?`\nOriginal error: ${e.message}`:""),this)})).then(this.onLoad):this.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize(e,t=100){const n=()=>{const{naturalHeight:r,naturalWidth:i}=e;r||i?(this.naturalWidth=i,this.calculatedAspectRatio=i/r):e.complete||!this.isLoading||this.hasError||null==t||setTimeout(n,t)};n()},genContent(){const e=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:`${this.naturalWidth}px`}}),e},__genPlaceholder(){const e=(0,l.z9)(this,"placeholder");if(e){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},e)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(e){const t=o.options.render.call(this,e),n=(0,c.ZP)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,n,t.children)}})},5808:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(7658);var r=n(7423),i=r.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(e){this.groups.push(e)},unregister(e){const t=this.groups.findIndex((t=>t._uid===e._uid));t>-1&&this.groups.splice(t,1)},listClick(e){if(!this.expand)for(const t of this.groups)t.toggle(e)}},render(e){const t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}})},4525:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(6878),i=n(8860),o=n(3037),s=n(6669),a=n(1444),c=n(7069),u=n(5352),l=n(4101),d=n(7678);const h=(0,d.Z)(r.Z,i.Z,s.Z,(0,o.d)("listItemGroup"),(0,a.d)("inputValue"));var p=h.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...i.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(i.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,l.Jk)("avatar",this)},methods:{click(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs(){const e={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="option",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||`list-item-${this._uid}`):this.isInList&&(e.role="listitem")),e},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(e){let{tag:t,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:e=>{this.disabled||(e.keyCode===u.Do.enter&&this.click(e),this.$emit("keydown",e))}},this.inactive&&(t="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(t,this.isActive?this.setTextColor(this.color,n):n,r)}})},5187:function(e,t,n){"use strict";var r=n(144);t.Z=r.ZP.extend({name:"v-list-item-action",functional:!0,render(e,{data:t,children:n=[]}){t.staticClass=t.staticClass?`v-list-item__action ${t.staticClass}`:"v-list-item__action";const r=n.filter((e=>!1===e.isComment&&" "!==e.text));return r.length>1&&(t.staticClass+=" v-list-item__action--stack"),e("div",t,n)}})},8507:function(e,t,n){"use strict";n.d(t,{V9:function(){return L}});var r=n(5352),i=n(5808),o=n(2240),s=n(4525),a=n(144),c=a.ZP.extend({name:"v-list-item-icon",functional:!0,render(e,{data:t,children:n}){return t.staticClass=`v-list-item__icon ${t.staticClass||""}`.trim(),e("div",t,n)}}),u=n(2500),l=n(4101),d=a.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,l.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}}),h=n(6878),p=n(1444),f=n(4712),v=n(7069),m=n(7394),g=n(7678);const y=(0,g.Z)(u.Z,d,h.Z,(0,f.f)("list"),p.Z);var b=y.extend().extend({name:"v-list-group",directives:{ripple:v.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(e){!this.subGroup&&e&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(e){this.disabled||(this.isBooted=!0,this.$emit("click",e),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(e){return this.$createElement(o.Z,e)},genAppendIcon(){const e=!this.subGroup&&this.appendIcon;return e||this.$slots.appendIcon?this.$createElement(c,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(e)]):null},genHeader(){return this.$createElement(s.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,r.z9)(this))]))},genPrependIcon(){const e=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return e||this.$slots.prependIcon?this.$createElement(c,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(e)]):null},onRouteChange(e){if(!this.group)return;const t=this.matchRoute(e.path);t&&this.isActive!==t&&this.list&&this.list.listClick(this._uid),this.isActive=t},toggle(e){const t=this._uid===e;t&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=t))},matchRoute(e){return null!==e.match(this.group)}},render(e){return e("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),e(m.Fx,this.genItems())])}}),_=(n(7658),n(6174)),w=n(3457),k=n(6669);const I=(0,g.Z)(_.Z,w.Z,k.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((e,t)=>this.toggleMethod(this.getValue(e,t))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some((e=>this.valueComparator(e,t))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,l.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",(()=>this.onClick(e))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);const r=this.selectedValues.indexOf(n);if(!(r<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((e=>e!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const n=t.find((e=>!e.disabled));if(!n)return;const r=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,r))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),r=n.findIndex((t=>this.valueComparator(t,e)));this.mandatory&&r>-1&&n.length-1<1||null!=this.max&&r<0&&n.length+1>this.max||(r>-1?n.splice(r,1):n.push(e),this.internalValue=n)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});I.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var S=(0,g.Z)(I,h.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...I.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...I.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),C=n(5187),E=n(3423),T=E.Z,O=T.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...T.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(e){const t=T.options.render.call(this,e);return t.data=t.data||{},t.data.staticClass+=" v-list-item__avatar",t}});const A=(0,r.Ji)("v-list-item__action-text","span"),x=(0,r.Ji)("v-list-item__content","div"),L=(0,r.Ji)("v-list-item__title","div"),P=(0,r.Ji)("v-list-item__subtitle","div");i.Z,s.Z,C.Z},3059:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9131),i=r.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:e,top:t,right:n,footer:r,insetFooter:i,bottom:o,left:s}=this.$vuetify.application;return{paddingTop:`${t+e}px`,paddingRight:`${n}px`,paddingBottom:`${r+i+o}px`,paddingLeft:`${s}px`}}},render(e){const t={staticClass:"v-main",style:this.styles,ref:"main"};return e(this.tag,t,[e("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},6975:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});n(7658);var r=n(1625),i=n(3347),o=n(6878),s=n(7678);function a(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];r.isActive&&r.isDependent?t.push(r):t.push(...a(r.$children))}return t}var c=(0,s.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(e){if(e)return;const t=this.getOpenDependents();for(let n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements(){const e=[],t=this.getOpenDependents();for(let n=0;n<t.length;n++)e.push(...t[n].getClickableDependentElements());return e},getClickableDependentElements(){const e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push(...this.getOpenDependentElements()),e}}}),u=n(4101),l=n(144),d=l.ZP.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:e=>!isNaN(Number(e))||["xs","sm","md","lg","xl"].includes(String(e))}},computed:{isMobile(){const{mobile:e,width:t,name:n,mobileBreakpoint:r}=this.$vuetify.breakpoint;if(r===this.mobileBreakpoint)return e;const i=parseInt(this.mobileBreakpoint,10),o=!isNaN(i);return o?t<i:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,u.Rn)("mobile-break-point","mobile-breakpoint",this)}}),h=n(6669),p=n(1444),f=(0,s.Z)(o.Z,h.Z,p.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),v=f,m=n(5352),g=l.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new v({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,m.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,m.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[m.Do.up,m.Do.pageup],n=[m.Do.down,m.Do.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const n=t.shiftKey||t.deltaX?"x":"y",r="y"===n?t.deltaY:t.deltaX||t.deltaY;let i,o;"y"===n?(i=0===e.scrollTop,o=e.scrollTop+e.clientHeight===e.scrollHeight):(i=0===e.scrollLeft,o=e.scrollLeft+e.clientWidth===e.scrollWidth);const s=r<0,a=r>0;return!(i||!s)||(!(o||!a)||!(!i&&!o)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,m.iZ)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,n=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(n,t))||!this.shouldScroll(t,e)}for(let n=0;n<t.length;n++){const r=t[n];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,m.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),y=n(9131),b=n(8856);function _(){return!0}function w(e,t,n){if(!e||!1===k(e,n))return!1;const r=(0,b.e)(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(t),!i.some((t=>t.contains(e.target)))}function k(e,t){const n="object"===typeof t.value&&t.value.closeConditional||_;return n(e)}function I(e,t,n){const r="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&w(e,t,n)&&setTimeout((()=>{k(e,n)&&r&&r(e)}),0)}function S(e,t){const n=(0,b.e)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const C={inserted(e,t,n){const r=n=>I(n,e,t),i=n=>{e._clickOutside.lastMousedownWasOutside=w(n,e,t)};S(e,(e=>{e.addEventListener("click",r,!0),e.addEventListener("mousedown",i,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:r,onMousedown:i}},unbind(e,t,n){e._clickOutside&&(S(e,(t=>{var r;if(!t||!(null===(r=e._clickOutside)||void 0===r?void 0:r[n.context._uid]))return;const{onClick:i,onMousedown:o}=e._clickOutside[n.context._uid];t.removeEventListener("click",i,!0),t.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[n.context._uid])}};var E=C,T=n(6746);const O=e=>{const{touchstartX:t,touchendX:n,touchstartY:r,touchendY:i}=e,o=.5,s=16;e.offsetX=n-t,e.offsetY=i-r,Math.abs(e.offsetY)<o*Math.abs(e.offsetX)&&(e.left&&n<t-s&&e.left(e),e.right&&n>t+s&&e.right(e)),Math.abs(e.offsetX)<o*Math.abs(e.offsetY)&&(e.up&&i<r-s&&e.up(e),e.down&&i>r+s&&e.down(e))};function A(e,t){const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,t.start&&t.start(Object.assign(e,t))}function x(e,t){const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,t.end&&t.end(Object.assign(e,t)),O(t)}function L(e,t){const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,t.move&&t.move(Object.assign(e,t))}function P(e){const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>A(e,t),touchend:e=>x(e,t),touchmove:e=>L(e,t)}}function R(e,t,n){const r=t.value,i=r.parent?e.parentElement:e,o=r.options||{passive:!0};if(!i)return;const s=P(t.value);i._touchHandlers=Object(i._touchHandlers),i._touchHandlers[n.context._uid]=s,(0,m.XP)(s).forEach((e=>{i.addEventListener(e,s[e],o)}))}function N(e,t,n){const r=t.value.parent?e.parentElement:e;if(!r||!r._touchHandlers)return;const i=r._touchHandlers[n.context._uid];(0,m.XP)(i).forEach((e=>{r.removeEventListener(e,i[e])})),delete r._touchHandlers[n.context._uid]}const $={inserted:R,unbind:N};var M=$;const D=(0,s.Z)((0,i.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),o.Z,c,d,g,y.Z,h.Z);var j=D.extend({name:"v-navigation-drawer",directives:{ClickOutside:E,Resize:T.Z,Touch:M},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const e=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?e+this.$vuetify.application.top:e},computedTop(){if(!this.hasApp)return 0;let e=this.$vuetify.application.bar;return e+=this.clipped?this.$vuetify.application.top:0,e},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&d.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const e=this.isBottom?"translateY":"translateX";return{height:(0,m.kb)(this.height),top:this.isBottom?"auto":(0,m.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,m.kb)(this.computedMaxHeight)})`:void 0,transform:`${e}(${(0,m.kb)(this.computedTransform,"%")})`,width:(0,m.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(e){this.$emit("input",e)},isMobile(e,t){!e&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=t&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!e)},permanent(e){e&&(this.isActive=!0)},showOverlay(e){e?this.genOverlay():this.removeOverlay()},value(e){this.permanent||(null!=e?e!==this.isActive&&(this.isActive=e):this.init())},expandOnHover:"updateMiniVariant",isMouseover(e){this.updateMiniVariant(!e)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const e=this.$el.parentNode;if(!e)return;const t=e.getBoundingClientRect();this.touchArea={left:t.left+50,right:t.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const e={height:"100%",width:"100%",src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img(e):this.$createElement(r.Z,{props:e});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[t])},genDirectives(){const e=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners(){const e={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:e=>{if(e.target!==e.currentTarget)return;this.$emit("transitionend",e);const t=document.createEvent("UIEvents");t.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(t)}};return this.miniVariant&&(e.click=()=>this.$emit("update:mini-variant",!1)),e},genPosition(e){const t=(0,m.z9)(this,e);return t?this.$createElement("div",{staticClass:`v-navigation-drawer__${e}`},t):t},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(e){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(e.touchendX-e.touchstartX)<100||(this.right&&e.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(e){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(e.touchendX-e.touchstartX)<100||(!this.right&&e.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const e=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(e)?this.$el.clientWidth:e},updateMiniVariant(e){this.expandOnHover&&this.miniVariant!==e&&this.$emit("update:mini-variant",e)}},render(e){const t=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,m.z9)(this,"img"))&&t.unshift(this.genBackground()),e(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),t)}})},3305:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(6750),i=n(6878),o=n(5352),s=i.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(e,t){return this.$createElement("circle",{class:`v-progress-circular__${e}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg(){const e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},e)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(e,t,n){this.isVisible=n}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},9422:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(8846),i=n(7678),o=n(5352),s=(0,i.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})},7423:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2500),i=n(6878),o=n(4390),s=n(8846),a=n(2637),c=n(6669),u=n(7678),l=(0,u.Z)(r.Z,i.Z,o.Z,s.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(e){const t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},3434:function(e,t,n){"use strict";var r=n(7423);t.Z=r.Z},6313:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(7658);var r=n(7423),i=n(1625),o=n(5352),s=n(4101),a=r.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const e=this.computedContentHeight;if(!this.isExtended)return e;const t=parseInt(this.extensionHeight);return this.isCollapsed?e:e+(isNaN(t)?0:t)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...r.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,o.kb)(this.computedHeight)}}},created(){const e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,s.fK)(e,t,this)}))},methods:{genBackground(){const e={height:(0,o.kb)(this.computedHeight),src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img({props:e}):this.$createElement(i.Z,{props:e});return this.$createElement("div",{staticClass:"v-toolbar__image"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,o.kb)(this.computedContentHeight)}},(0,o.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,o.kb)(this.extensionHeight)}},(0,o.z9)(this,"extension"))}},render(e){this.isExtended=this.extended||!!this.$scopedSlots.extension;const t=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&t.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&t.unshift(this.genBackground()),e(this.tag,n,t)}})},7953:function(e,t,n){"use strict";n.d(t,{lj:function(){return s}});var r=n(6313),i=n(5352);const o=(0,i.Ji)("v-toolbar__title"),s=(0,i.Ji)("v-toolbar__items");r.Z},7394:function(e,t,n){"use strict";n.d(t,{Fx:function(){return d},Z5:function(){return u},Qn:function(){return l}});var r=n(1767);function i(e=[],...t){return Array().concat(e,...t)}function o(e,t="top center 0",n){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render(t,n){const o="transition"+(n.props.group?"-group":""),s={props:{name:e,mode:n.props.mode},on:{beforeEnter(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=i(s.on.leave,(e=>{const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=r+"px",e.style.height=i+"px"})),s.on.afterLeave=i(s.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:o}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=o||""}}))),n.props.hideOnLeave&&(s.on.leave=i(s.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(o,(0,r.ZP)(n.data,s),n.children)}}}function s(e,t,n="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:n}},render(n,i){return n("transition",(0,r.ZP)(i.data,{props:{name:e},on:t}),i.children)}}}var a=n(5352);function c(e="",t=!1){const n=t?"width":"height",r=`offset${(0,a.jC)(n)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},enter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const o=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=o}))},afterEnter:o,enterCancelled:o,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),o(t)}function o(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("carousel-transition"),o("carousel-reverse-transition"),o("tab-transition"),o("tab-reverse-transition"),o("menu-transition"),o("fab-transition","center center","out-in"),o("dialog-transition"),o("dialog-bottom-transition"),o("dialog-top-transition");const u=o("fade-transition"),l=(o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition")),d=(o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition"),s("expand-transition",c()));s("expand-x-transition",c("",!0))},6750:function(e,t,n){"use strict";function r(e,t,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const r=t.modifiers||{},o=t.value,{handler:s,options:a}="object"===typeof o?o:{handler:o,options:{}},c=new IntersectionObserver(((o=[],a)=>{var c;const u=null===(c=e._observe)||void 0===c?void 0:c[n.context._uid];if(!u)return;const l=o.some((e=>e.isIntersecting));!s||r.quiet&&!u.init||r.once&&!l&&!u.init||s(o,a,l),l&&r.once?i(e,t,n):u.init=!0}),a);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:c},c.observe(e)}function i(e,t,n){var r;const i=null===(r=e._observe)||void 0===r?void 0:r[n.context._uid];i&&(i.observer.unobserve(e),delete e._observe[n.context._uid])}const o={inserted:r,unbind:i};t.Z=o},6746:function(e,t,n){"use strict";function r(e,t,n){const r=t.value,i=t.options||{passive:!0};window.addEventListener("resize",r,i),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:r,options:i},t.modifiers&&t.modifiers.quiet||r()}function i(e,t,n){var r;if(!(null===(r=e._onResize)||void 0===r?void 0:r[n.context._uid]))return;const{callback:i,options:o}=e._onResize[n.context._uid];window.removeEventListener("resize",i,o),delete e._onResize[n.context._uid]}const o={inserted:r,unbind:i};t.Z=o},7069:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(5352);const i=80;function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function s(e){return"TouchEvent"===e.constructor.name}function a(e){return"KeyboardEvent"===e.constructor.name}const c=(e,t,n={})=>{let r=0,i=0;if(!a(e)){const n=t.getBoundingClientRect(),o=s(e)?e.touches[e.touches.length-1]:e;r=o.clientX-n.left,i=o.clientY-n.top}let o=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,o=t.clientWidth/2,o=n.center?o:o+Math.sqrt((r-o)**2+(i-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=(t.clientWidth-2*o)/2+"px",l=(t.clientHeight-2*o)/2+"px",d=n.center?u:r-o+"px",h=n.center?l:i-o+"px";return{radius:o,scale:c,x:d,y:h,centerX:u,centerY:l}},u={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:s,scale:a,x:u,y:l,centerX:d,centerY:h}=c(e,t,n),p=2*s+"px";i.className="v-ripple__animation",i.style.width=p,i.style.height=p,t.appendChild(r);const f=window.getComputedStyle(t);f&&"static"===f.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),o(i,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),i.dataset.activated=String(performance.now()),setTimeout((()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),o(i,`translate(${d}, ${h}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{var t;const r=e.getElementsByClassName("v-ripple__animation");1===r.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),i)}};function l(e){return"undefined"===typeof e||!!e}function d(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,s(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||a(e),n._ripple.class&&(t.class=n._ripple.class),s(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{u.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),i)}else u.show(e,n,t)}}function h(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{h(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function p(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let f=!1;function v(e){f||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(f=!0,d(e))}function m(e){f=!1,h(e)}function g(e){!0===f&&(f=!1,h(e))}function y(e,t,n){const r=l(t.value);r||u.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=r;const i=t.value||{};i.center&&(e._ripple.centered=!0),i.class&&(e._ripple.class=t.value.class),i.circle&&(e._ripple.circle=i.circle),r&&!n?(e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchend",h,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("touchcancel",h),e.addEventListener("mousedown",d),e.addEventListener("mouseup",h),e.addEventListener("mouseleave",h),e.addEventListener("keydown",v),e.addEventListener("keyup",m),e.addEventListener("blur",g),e.addEventListener("dragstart",h,{passive:!0})):!r&&n&&b(e)}function b(e){e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",h),e.removeEventListener("touchmove",p),e.removeEventListener("touchcancel",h),e.removeEventListener("mouseup",h),e.removeEventListener("mouseleave",h),e.removeEventListener("keydown",v),e.removeEventListener("keyup",m),e.removeEventListener("dragstart",h),e.removeEventListener("blur",g)}function _(e,t,n){y(e,t,!1)}function w(e){delete e._ripple,b(e)}function k(e,t){if(t.value===t.oldValue)return;const n=l(t.oldValue);y(e,t,n)}const I={bind:_,unbind:w,update:k};var S=I},8864:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r={};n.r(r),n.d(r,{easeInCubic:function(){return y},easeInOutCubic:function(){return _},easeInOutQuad:function(){return g},easeInOutQuart:function(){return I},easeInOutQuint:function(){return E},easeInQuad:function(){return v},easeInQuart:function(){return w},easeInQuint:function(){return S},easeOutCubic:function(){return b},easeOutQuad:function(){return m},easeOutQuart:function(){return k},easeOutQuint:function(){return C},linear:function(){return f}});n(7658);var i=n(144),o=n(4101);function s(e,t={}){if(s.installed)return;s.installed=!0,i.ZP!==e&&(0,o.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},r=t.directives||{};for(const i in r){const t=r[i];e.directive(i,t)}(function t(n){if(n){for(const r in n){const i=n[r];i&&!t(i.$_vuetify_subcomponents)&&e.component(r,i)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var u=n(5352);class l{constructor(){this.framework={}}init(e,t){}}class d extends l{constructor(e,t){super();const n=(0,u.Ee)({},c),{userPreset:r}=t,{preset:i={},...s}=r;null!=i.preset&&(0,o.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=(0,u.Ee)((0,u.Ee)(n,i),s)}}d.property="presets";class h extends l{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce(((e,t)=>e+t),0)}}h.property="application";class p extends l{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:r}=e[p.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=r}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),r=n<this.thresholds.xs,i=n<this.thresholds.sm&&!r,o=n<this.thresholds.md-this.scrollBarWidth&&!(i||r),s=n<this.thresholds.lg-this.scrollBarWidth&&!(o||i||r),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=r,this.sm=i,this.md=o,this.lg=s,this.xl=a,this.xsOnly=r,this.smOnly=i,this.smAndDown=(r||i)&&!(o||s||a),this.smAndUp=!r&&(i||o||s||a),this.mdOnly=o,this.mdAndDown=(r||i||o)&&!(s||a),this.mdAndUp=!(r||i)&&(o||s||a),this.lgOnly=s,this.lgAndDown=(r||i||o||s)&&!a,this.lgAndUp=!(r||i||o)&&(s||a),this.xlOnly=a,!0){case r:this.name="xs";break;case i:this.name="sm";break;case o:this.name="md";break;case s:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}p.property="breakpoint";n(1703);const f=e=>e,v=e=>e**2,m=e=>e*(2-e),g=e=>e<.5?2*e**2:(4-2*e)*e-1,y=e=>e**3,b=e=>--e**3+1,_=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,w=e=>e**4,k=e=>1- --e**4,I=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,S=e=>e**5,C=e=>1+--e**5,E=e=>e<.5?16*e**5:1+16*--e**5;function T(e){if("number"===typeof e)return e;let t=x(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function O(e){const t=x(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(e)} instead.`)}function A(e){return null==e?e:e.constructor.name}function x(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function L(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},i=O(n.container);if(n.appOffset&&L.framework.application){const e=i.classList.contains("v-navigation-drawer"),t=i.classList.contains("v-navigation-drawer--clipped"),{bar:r,top:o}=L.framework.application;n.offset+=r,e&&!t||(n.offset+=o)}const o=performance.now();let s;s="number"===typeof e?T(e)-n.offset:T(e)-T(i)-n.offset;const a=i.scrollTop;if(s===a)return Promise.resolve(s);const c="function"===typeof n.easing?n.easing:r[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(r){const u=r-o,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);i.scrollTop=Math.floor(a+(s-a)*c(l));const d=i===document.body?document.documentElement.clientHeight:i.clientHeight,h=d+i.scrollTop>=i.scrollHeight;if(1===l||s>i.scrollTop&&h)return e(s);requestAnimationFrame(t)}))))}L.framework={},L.init=()=>{};class P extends l{constructor(){return super(),L}}P.property="goTo";const R={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var N=R;const $={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var M=$;const D={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var j=D;const B={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var V=B;const U={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var F=U;function H(e,t){const n={};for(const r in t)n[r]={component:e,props:{icon:t[r].split(" fa-")}};return n}var z=H("font-awesome-icon",V),Z=Object.freeze({mdiSvg:N,md:M,mdi:j,fa:V,fa4:F,faSvg:z});class W extends l{constructor(e){super();const{iconfont:t,values:n,component:r}=e[W.property];this.component=r,this.iconfont=t,this.values=(0,u.Ee)(Z[t],n)}}W.property="icons";const q="$vuetify.",G=Symbol("Lang fallback");function K(e,t,n=!1,r){const i=t.replace(q,"");let s=(0,u.vO)(e,i,G);return s===G&&(n?((0,o.N6)(`Translation key "${i}" not found in fallback`),s=t):((0,o.Kd)(`Translation key "${i}" not found, falling back to default`),s=K(r,t,!0,r))),s}class J extends l{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:r}=e[J.property];this.current=t,this.locales=n,this.translator=r||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return K(t,e,!1,n)}t(e,...t){return e.startsWith(q)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n])))}}J.property="lang";var Y=n(937);const X=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Q=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,ee=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],te=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ne(e){const t=Array(3),n=Q,r=X;for(let i=0;i<3;++i)t[i]=Math.round(255*(0,u.uZ)(n(r[i][0]*e[0]+r[i][1]*e[1]+r[i][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function re(e){const t=[0,0,0],n=te,r=ee,i=n((e>>16&255)/255),o=n((e>>8&255)/255),s=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*o+r[a][2]*s;return t}const ie=.20689655172413793,oe=e=>e>ie**3?Math.cbrt(e):e/(3*ie**2)+4/29,se=e=>e>ie?e**3:3*ie**2*(e-4/29);function ae(e){const t=oe,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function ce(e){const t=se,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function ue(e,t=!1,n=!0){const{anchor:r,...i}=e,o=Object.keys(i),s={};for(let a=0;a<o.length;++a){const r=o[a],i=e[r];null!=i&&(n?t?("base"===r||r.startsWith("lighten")||r.startsWith("darken"))&&(s[r]=(0,Y.hq)(i)):s[r]="object"===typeof i?ue(i,!0,n):ve(r,(0,Y.jx)(i)):s[r]={base:(0,Y.I4)((0,Y.jx)(i))})}return t||(s.anchor=r||s.base||s.primary.base),s}const le=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,de=(e,t,n)=>{const[r,i]=t.split(/(\d)/,2);return`\n.v-application .${e}.${r}-${i} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${r}-${i} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},he=(e,t="base")=>`--v-${e}-${t}`,pe=(e,t="base")=>`var(${he(e,t)})`;function fe(e,t=!1){const{anchor:n,...r}=e,i=Object.keys(r);if(!i.length)return"";let o="",s="";const a=t?pe("anchor"):n;s+=`.v-application a { color: ${a}; }`,t&&(o+=`  ${he("anchor")}: ${n};\n`);for(let c=0;c<i.length;++c){const n=i[c],r=e[n];s+=le(n,t?pe(n):r.base),t&&(o+=`  ${he(n)}: ${r.base};\n`);const a=(0,u.XP)(r);for(let e=0;e<a.length;++e){const i=a[e],c=r[i];"base"!==i&&(s+=de(n,i,t?pe(n,i):c),t&&(o+=`  ${he(n,i)}: ${c};\n`))}}return t&&(o=`:root {\n${o}}\n\n`),o+s}function ve(e,t){const n={base:(0,Y.I4)(t)};for(let r=5;r>0;--r)n[`lighten${r}`]=(0,Y.I4)(me(t,r));for(let r=1;r<=4;++r)n[`darken${r}`]=(0,Y.I4)(ge(t,r));return n}function me(e,t){const n=ae(re(e));return n[0]=n[0]+10*t,ne(ce(n))}function ge(e,t){const n=ae(re(e));return n[0]=n[0]-10*t,ne(ce(n))}class ye extends l{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:r,themes:i}=e[ye.property];this.dark=Boolean(t),this.defaults=this.themes=i,this.options=r,n?this.disabled=!0:this.themes={dark:this.fillVariant(i.dark,!0),light:this.fillVariant(i.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick((()=>{this.applyVueMeta23()}));const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find((e=>"vuetify-theme-stylesheet"===e.id));return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(()=>{const t=i.ZP.observable({themes:this.themes});this.unwatch=e.$watch((()=>t.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=fe(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return ue(this.currentTheme||{},void 0,(0,u.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}ye.property="theme";class be{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(d),this.use(h),this.use(p),this.use(P),this.use(W),this.use(J),this.use(ye)}init(e,t){this.installed.forEach((n=>{const r=this.framework[n];r.framework=this.framework,r.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}be.install=s,be.installed=!1,be.version="2.6.15",be.config={silent:!1}},3347:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4263),i=n(7678);function o(e,t=[]){return(0,i.Z)((0,r.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return e}},watch:{app(e,t){t?this.removeApplication(!0):this.callUpdate()},applicationProperty(e,t){this.$vuetify.application.unregister(this._uid,t)}},activated(){this.callUpdate()},created(){for(let e=0,n=t.length;e<n;e++)this.$watch(t[e],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(e=!1){(e||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},2500:function(e,t,n){"use strict";var r=n(144);function i(e){return function(t,n){for(const r in n)Object.prototype.hasOwnProperty.call(t,r)||this.$delete(this.$data[e],r);for(const r in t)this.$set(this.$data[e],r,t[r])}}t.Z=r.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},6878:function(e,t,n){"use strict";var r=n(144),i=n(4101),o=n(937);t.Z=r.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?((0,i.N6)("style must be an object",this),t):"string"===typeof t.class?((0,i.N6)("class must be an object",this),t):((0,o.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return(0,i.N6)("style must be an object",this),t;if("string"===typeof t.class)return(0,i.N6)("class must be an object",this),t;if((0,o.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,r]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},r&&(t.class["text--"+r]=!0)}return t}}})},6174:function(e,t,n){"use strict";var r=n(144),i=n(5352);t.Z=r.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:i.vZ}}})},4390:function(e,t,n){"use strict";var r=n(144);t.Z=r.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:{[`elevation-${this.elevation}`]:!0}}}})},3037:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(4712);function i(e,t,n){return(0,r.f)(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}i("itemGroup")},8846:function(e,t,n){"use strict";var r=n(5352),i=n(144);t.Z=i.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const e={},t=(0,r.kb)(this.height),n=(0,r.kb)(this.minHeight),i=(0,r.kb)(this.minWidth),o=(0,r.kb)(this.maxHeight),s=(0,r.kb)(this.maxWidth),a=(0,r.kb)(this.width);return t&&(e.height=t),n&&(e.minHeight=n),i&&(e.minWidth=i),o&&(e.maxHeight=o),s&&(e.maxWidth=s),a&&(e.width=a),e}}})},4263:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(144),i=n(5352);const o={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function s(e=[]){return r.ZP.extend({name:"positionable",props:e.length?(0,i.ji)(o,e):o})}t.Z=s()},3457:function(e,t,n){"use strict";var r=n(144);function i(e="value",t="change"){return r.ZP.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const o=i();t.Z=o},4712:function(e,t,n){"use strict";n.d(t,{J:function(){return a},f:function(){return s}});var r=n(144),i=n(4101);function o(e,t){return()=>(0,i.Kd)(`The ${e} component must be used inside a ${t}`)}function s(e,t,n){const i=t&&n?{register:o(t,n),unregister:o(t,n)}:null;return r.ZP.extend({name:"registrable-inject",inject:{[e]:{default:i}}})}function a(e,t=!1){return r.ZP.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},2637:function(e,t,n){"use strict";n(7658);var r=n(144);t.Z=r.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){const n=t.split(" ");for(const t of n)e.push(`rounded-${t}`)}else t&&e.push("rounded");return e.length>0?{[e.join(" ")]:!0}:{}}}})},8860:function(e,t,n){"use strict";var r=n(144),i=n(7069),o=n(5352);t.Z=r.ZP.extend({name:"routable",directives:{Ripple:i.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!==(e=this.ripple)&&void 0!==e?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let e,t=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let r=this.activeClass,i=this.exactActiveClass||r;this.proxyClass&&(r=`${r} ${this.proxyClass}`.trim(),i=`${i} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:r,exactActiveClass:i,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||e,n="_vnode.data.class."+(this.exact?t:e);this.$nextTick((()=>{!(0,o.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},4338:function(e,t,n){"use strict";var r=n(144);t.Z=r.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},9131:function(e,t,n){"use strict";var r=n(144);t.Z=r.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},6669:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var r=n(144);const i=r.ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function o(e){const t={...e.props,...e.injections},n=i.options.computed.isDark.call(t);return i.options.computed.themeClasses.call({isDark:n})}t.Z=i},1444:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(144);function i(e="value",t="input"){return r.ZP.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}const o=i();t.Z=o},937:function(e,t,n){"use strict";n.d(t,{I4:function(){return s},NA:function(){return i},hq:function(){return a},jx:function(){return o}});n(1703);var r=n(4101);function i(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function o(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function s(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return s(o(e))}},4101:function(e,t,n){"use strict";n.d(t,{Jk:function(){return u},Kd:function(){return o},N6:function(){return s},Rn:function(){return a},fK:function(){return c}});n(7658);var r=n(8864);function i(e,t,n){if(!r.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?p(t):"")}}function o(e,t,n){const r=i(e,t,n);null!=r&&console.warn(r)}function s(e,t,n){const r=i(e,t,n);null!=r&&console.error(r)}function a(e,t,n,r){o(`[UPGRADE] '${e}' is deprecated, use '${t}' instead.`,n,r)}function c(e,t,n,r){s(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,r)}function u(e,t,n){o(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,n)}const l=/(?:^|[-_])(\w)/g,d=e=>e.replace(l,(e=>e.toUpperCase())).replace(/[-_]/g,"");function h(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=e&&e[1]}return(r?`<${d(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function p(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${h(e[0])}... (${e[1]} recursive calls)`:h(e)}`)).join("\n")}return`\n\n(found in ${h(e)})`}},8856:function(e,t,n){"use strict";function r(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,{e:function(){return r}})},5352:function(e,t,n){"use strict";n.d(t,{Do:function(){return m},Ee:function(){return C},GL:function(){return f},Ji:function(){return i},KK:function(){return d},RB:function(){return g},TI:function(){return k},XP:function(){return y},_A:function(){return _},iZ:function(){return E},jC:function(){return w},ji:function(){return h},kb:function(){return p},lj:function(){return a},qh:function(){return o},qw:function(){return c},uZ:function(){return S},vO:function(){return l},vZ:function(){return u},z9:function(){return I}});n(7658);var r=n(144);function i(e,t="div",n){return r.ZP.extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render(t,{data:n,props:r,children:i}){return n.staticClass=`${e} ${n.staticClass||""}`.trim(),t(r.tag,n,i)}})}function o(e,t,n,r=!1){const i=o=>{n(o),e.removeEventListener(t,i,r)};e.addEventListener(t,i,r)}let s=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{s=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(T){console.warn(T)}function a(e,t,n,r){e.addEventListener(t,n,!!s&&r)}function c(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function u(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>u(e[n],t[n])))}function l(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),c(e,t.split("."),n)):n}function d(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||d(e.parentNode)}function h(e,t){const n={};for(let r=0;r<t.length;r++){const i=t[r];"undefined"!==typeof e[i]&&(n[i]=e[i])}return n}function p(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function f(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function v(e){return null!==e&&"object"===typeof e}const m=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function g(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,r=l(e,n,t);if("string"!==typeof r)return r;t=r}return null==n?t:{component:n,props:{icon:t}}}function y(e){return Object.keys(e)}const b=/-(\w)/g,_=e=>e.replace(b,((e,t)=>t?t.toUpperCase():""));function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function k(e){return null!=e?Array.isArray(e)?e:[e]:[]}function I(e,t="default",n,r=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!r?void 0:e.$slots[t]}function S(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function C(e={},t={}){for(const n in t){const r=e[n],i=t[n];v(r)&&v(i)?e[n]=C(r,i):e[n]=i}return e}function E(e){if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}},1767:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s}});var r=n(5352);const i={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function o(e){const t={};for(const n of e.split(i.styleList)){let[e,o]=n.split(i.styleProp);e=e.trim(),e&&("string"===typeof o&&(o=o.trim()),t[(0,r._A)(e)]=o)}return t}function s(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=a(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function a(e,t){return e?t?(e=(0,r.TI)("string"===typeof e?o(e):e),e.concat("string"===typeof t?o(t):t)):e:t}function c(e,t){return t?e&&e?(0,r.TI)(e).concat(t):t:e}function u(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const r=e[n];for(const e in r)r[e]&&(t[e]?t[e]=[].concat(r[e],t[e]):t[e]=r[e])}return t}},7678:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(144);function i(...e){return r.ZP.extend({mixins:e})}},8345:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}n.d(t,{ZP:function(){return kt}});var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,a=function(e){return encodeURIComponent(e).replace(i,o).replace(s,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||d;try{r=i(e||"")}catch(a){r={}}for(var o in t){var s=t[o];r[o]=Array.isArray(s)?s.map(l):l(s)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function d(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(a(t)):r.push(a(t)+"="+a(e)))})),r.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var p=/\/?$/;function f(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=v(o)}catch(a){}var s={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:y(t,i),matched:e?g(e):[]};return n&&(s.redirectedFrom=y(n,i)),Object.freeze(s)}function v(e){if(Array.isArray(e))return e.map(v);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=v(e[n]);return t}return e}var m=f(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||h;return(n||"/")+o(r)+i}function b(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(p,"")===t.path.replace(p,"")&&(n||e.hash===t.hash&&_(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&_(e.query,t.query)&&_(e.params,t.params))))}function _(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],s=r[i];if(s!==n)return!1;var a=t[n];return null==o||null==a?o===a:"object"===typeof o&&"object"===typeof a?_(o,a):String(o)===String(a)}))}function w(e,t){return 0===e.path.replace(p,"/").indexOf(t.path.replace(p,"/"))&&(!t.hash||e.hash===t.hash)&&k(e.query,t.query)}function k(e,t){for(var n in t)if(!(n in e))return!1;return!0}function I(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var s=0;s<o.length;s++)i._isBeingDestroyed||o[s](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,s=t.data;s.routerView=!0;var a=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),d=0,h=!1;while(o&&o._routerRoot!==o){var p=o.$vnode?o.$vnode.data:{};p.routerView&&d++,p.keepAlive&&o._directInactive&&o._inactive&&(h=!0),o=o.$parent}if(s.routerViewDepth=d,h){var f=l[c],v=f&&f.component;return v?(f.configProps&&C(v,s,f.route,f.configProps),a(v,s,i)):a()}var m=u.matched[d],g=m&&m.components[c];if(!m||!g)return l[c]=null,a();l[c]={component:g},s.registerRouteInstance=function(e,t){var n=m.instances[c];(t&&n!==e||!t&&n===e)&&(m.instances[c]=t)},(s.hook||(s.hook={})).prepatch=function(e,t){m.instances[c]=t.componentInstance},s.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==m.instances[c]&&(m.instances[c]=e.componentInstance),I(u)};var y=m.props&&m.props[c];return y&&(r(l[c],{route:u,configProps:y}),C(g,s,u,y)),a(g,s,i)}};function C(e,t,n,i){var o=t.props=E(n,i);if(o){o=t.props=r({},o);var s=t.attrs=t.attrs||{};for(var a in o)e.props&&a in e.props||(s[a]=o[a],delete o[a])}}function E(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function T(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function O(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var x=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},L=J,P=D,R=j,N=U,$=K,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(e,t){var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";while(null!=(n=M.exec(e))){var c=n[0],u=n[1],l=n.index;if(s+=e.slice(o,l),o=l+c.length,u)s+=u[1];else{var d=e[o],h=n[2],p=n[3],f=n[4],v=n[5],m=n[6],g=n[7];s&&(r.push(s),s="");var y=null!=h&&null!=d&&d!==h,b="+"===m||"*"===m,_="?"===m||"*"===m,w=n[2]||a,k=f||v;r.push({name:p||i++,prefix:h||"",delimiter:w,optional:_,repeat:b,partial:y,asterisk:!!g,pattern:k?H(k):g?".*":"[^"+F(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function j(e,t){return U(D(e,t),t)}function B(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function V(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Z(t)));return function(t,r){for(var i="",o=t||{},s=r||{},a=s.pretty?B:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,d=o[u.name];if(null==d){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(d)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var h=0;h<d.length;h++){if(l=a(d[h]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(d):a(d),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function F(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function H(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function z(e,t){return e.keys=t,e}function Z(e){return e&&e.sensitive?"":"i"}function W(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(e,t)}function q(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(J(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",Z(n));return z(o,t)}function G(e,t,n){return K(D(e,n),t,n)}function K(e,t,n){x(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"===typeof a)o+=F(a);else{var c=F(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=F(n.delimiter||"/"),d=o.slice(-l.length)===l;return r||(o=(d?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&d?"":"(?="+l+"|$)",z(new RegExp("^"+o,Z(n)),t)}function J(e,t,n){return x(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?W(e,t):x(e)?q(e,t,n):G(e,t,n)}L.parse=P,L.compile=R,L.tokensToFunction=N,L.tokensToRegExp=$;var Y=Object.create(null);function X(e,t,n){t=t||{};try{var r=Y[e]||(Y[e]=L.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Q(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var s=o.params;return s&&"object"===typeof s&&(o.params=r({},s)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var a=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=X(c,a,"path "+t.path)}else 0;return o}var l=O(o.path||""),d=t&&t.path||"/",h=l.path?T(l.path,d,n||o.append):d,p=u(l.query,o.query,i&&i.options.parseQuery),f=o.hash||l.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:h,query:p,hash:f}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),s=o.location,a=o.route,c=o.href,u={},l=n.options.linkActiveClass,d=n.options.linkExactActiveClass,h=null==l?"router-link-active":l,p=null==d?"router-link-exact-active":d,v=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?p:this.exactActiveClass,g=a.redirectedFrom?f(null,Q(a.redirectedFrom),null,n):a;u[m]=b(i,g,this.exactPath),u[v]=this.exact||this.exactPath?u[m]:w(i,g);var y=u[m]?this.ariaCurrentValue:null,_=function(e){oe(e)&&(t.replace?n.replace(s,re):n.push(s,re))},k={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){k[e]=_})):k[this.event]=_;var I={class:u},S=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[v],isExactActive:u[m]});if(S){if(1===S.length)return S[0];if(S.length>1||!S.length)return 0===S.length?e():e("span",{},S)}if("a"===this.tag)I.on=k,I.attrs={href:c,"aria-current":y};else{var C=se(this.$slots.default);if(C){C.isStatic=!1;var E=C.data=r({},C.data);for(var T in E.on=E.on||{},E.on){var O=E.on[T];T in k&&(E.on[T]=Array.isArray(O)?O:[O])}for(var A in k)A in E.on?E.on[A].push(k[A]):E.on[A]=_;var x=C.data.attrs=r({},C.data.attrs);x.href=c,x["aria-current"]=y}else I.on=k}return e(this.tag,I,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",S),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],s=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){le(o,s,a,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:s,nameMap:a}}function le(e,t,n,r,i,o){var s=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=he(s,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:de(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?A(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var d=Array.isArray(r.alias)?r.alias:[r.alias],h=0;h<d.length;++h){var p=d[h];0;var f={path:p,children:r.children};le(e,t,n,f,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function de(e,t){var n=L(e,[],t);return n}function he(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function pe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function s(e){ue(e,r,i,o)}function a(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,s){var a=Q(e,n,!1,t),c=a.name;if(c){var u=o[c];if(!u)return h(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var d in n.params)!(d in a.params)&&l.indexOf(d)>-1&&(a.params[d]=n.params[d]);return a.path=X(u.path,a.params,'named route "'+c+'"'),h(u,a,s)}if(a.path){a.params={};for(var p=0;p<r.length;p++){var f=r[p],v=i[f];if(fe(v.regex,a.path,a.params))return h(v,a,s)}}return h(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(f(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return h(null,n);var s=i,a=s.name,c=s.path,l=n.query,d=n.hash,p=n.params;if(l=s.hasOwnProperty("query")?s.query:l,d=s.hasOwnProperty("hash")?s.hash:d,p=s.hasOwnProperty("params")?s.params:p,a){o[a];return u({_normalized:!0,name:a,query:l,hash:d,params:p},void 0,n)}if(c){var v=ve(c,e),m=X(v,p,'redirect route with path "'+v+'"');return u({_normalized:!0,path:m,query:l,hash:d},void 0,n)}return h(null,n)}function d(e,t,n){var r=X(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,s=o[o.length-1];return t.params=i.params,h(s,t)}return h(null,t)}function h(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?d(e,n,e.matchAs):f(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:s}}function fe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var s=e.keys[i-1];s&&(n[s.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function ve(e,t){return T(e,t.parent?t.parent.path:"/",!0)}var me=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return me.now().toFixed(3)}var ye=ge();function be(){return ye}function _e(e){return ye=e}var we=Object.create(null);function ke(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=be(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Ce),function(){window.removeEventListener("popstate",Ce)}}function Ie(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Ee(),s=i.call(e,t,n,r?o:null);s&&("function"===typeof s.then?s.then((function(e){Re(e,o)})).catch((function(e){0})):Re(s,o))}))}}function Se(){var e=be();e&&(we[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ce(e){Se(),e.state&&e.state.key&&_e(e.state.key)}function Ee(){var e=be();if(e)return we[e]}function Te(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Oe(e){return Le(e.x)||Le(e.y)}function Ae(e){return{x:Le(e.x)?e.x:window.pageXOffset,y:Le(e.y)?e.y:window.pageYOffset}}function xe(e){return{x:Le(e.x)?e.x:0,y:Le(e.y)?e.y:0}}function Le(e){return"number"===typeof e}var Pe=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Pe.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=xe(i),t=Te(r,i)}else Oe(e)&&(t=Ae(e))}else n&&Oe(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Ne=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function $e(e,t){Se();var n=window.history;try{if(t){var i=r({},n.state);i.key=be(),n.replaceState(i,"",e)}else n.pushState({key:_e(ge())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function Me(e){$e(e,!0)}var De={redirected:2,aborted:4,cancelled:8,duplicated:16};function je(e,t){return Fe(e,t,De.redirected,'Redirected when going from "'+e.fullPath+'" to "'+ze(t)+'" via a navigation guard.')}function Be(e,t){var n=Fe(e,t,De.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ve(e,t){return Fe(e,t,De.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ue(e,t){return Fe(e,t,De.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Fe(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var He=["params","query","hash"];function ze(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return He.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function Ze(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function We(e,t){return Ze(e)&&e._isRouter&&(null==t||e.type===t)}function qe(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function Ge(e){return function(t,n,r){var i=!1,o=0,s=null;Ke(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Qe((function(t){Xe(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,o--,o<=0&&r()})),l=Qe((function(e){var t="Failed to resolve async component "+a+": "+e;s||(s=Ze(e)?e:new Error(t),r(s))}));try{c=e(u,l)}catch(h){l(h)}if(c)if("function"===typeof c.then)c.then(u,l);else{var d=c.component;d&&"function"===typeof d.then&&d.then(u,l)}}})),i||r()}}function Ke(e,t){return Je(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Je(e){return Array.prototype.concat.apply([],e)}var Ye="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xe(e){return e.__esModule||Ye&&"Module"===e[Symbol.toStringTag]}function Qe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Ke(e,(function(e,r,i,o){var s=it(e,t);if(s)return Array.isArray(s)?s.map((function(e){return n(e,r,i,o)})):n(s,r,i,o)}));return Je(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",at,!0)}function st(e){return rt(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(e){e(s)})),s}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(We(e,De.redirected)&&o===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!We(e)&&Ze(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},s=e.matched.length-1,a=i.matched.length-1;if(b(e,i)&&s===a&&e.matched[s]===i.matched[a])return this.ensureURL(),e.hash&&Ie(this.router,i,e,!1),o(Be(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,d=c.activated,h=[].concat(ot(l),this.router.beforeHooks,st(u),d.map((function(e){return e.beforeEnter})),Ge(d)),p=function(t,n){if(r.pending!==e)return o(Ve(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(Ue(i,e))):Ze(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(je(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(s){o(s)}};qe(h,p,(function(){var n=ct(d),s=n.concat(r.router.resolveHooks);qe(s,p,(function(){if(r.pending!==e)return o(Ve(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){I(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=dt(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Ne&&n;r&&this.listeners.push(ke());var i=function(){var n=e.current,i=dt(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ie(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){$e(A(r.base+e.fullPath)),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Me(A(r.base+e.fullPath)),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(dt(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?$e(t):Me(t)}},t.prototype.getCurrentLocation=function(){return dt(this.base)},t}(et);function dt(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(A(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ht=function(e){function t(t,n,r){e.call(this,t,n),r&&pt(this.base)||ft()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Ne&&n;r&&this.listeners.push(ke());var i=function(){var t=e.current;ft()&&e.transitionTo(vt(),(function(n){r&&Ie(e.router,n,t,!0),Ne||yt(n.fullPath)}))},o=Ne?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),Ie(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;vt()!==t&&(e?gt(t):yt(t))},t.prototype.getCurrentLocation=function(){return vt()},t}(et);function pt(e){var t=dt(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function ft(){var e=vt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function vt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function mt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){Ne?$e(mt(e)):window.location.hash=e}function yt(e){Ne?Me(mt(e)):window.location.replace(mt(e))}var bt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){We(e,De.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),_t=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Ne&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new ht(this,e.base,this.fallback);break;case"abstract":this.history=new bt(this,e.base);break;default:0}},wt={currentRoute:{configurable:!0}};_t.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},wt.currentRoute.get=function(){return this.history&&this.history.current},_t.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof ht){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=Ne&&i;o&&"fullPath"in e&&Ie(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},_t.prototype.beforeEach=function(e){return It(this.beforeHooks,e)},_t.prototype.beforeResolve=function(e){return It(this.resolveHooks,e)},_t.prototype.afterEach=function(e){return It(this.afterHooks,e)},_t.prototype.onReady=function(e,t){this.history.onReady(e,t)},_t.prototype.onError=function(e){this.history.onError(e)},_t.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},_t.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},_t.prototype.go=function(e){this.history.go(e)},_t.prototype.back=function(){this.go(-1)},_t.prototype.forward=function(){this.go(1)},_t.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},_t.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Q(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,s=this.history.base,a=St(s,o,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_t.prototype.getRoutes=function(){return this.matcher.getRoutes()},_t.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},_t.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_t.prototype,wt);var kt=_t;function It(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function St(e,t,n){var r="hash"===n?"#"+t:t;return e?A(e+"/"+r):r}_t.install=ae,_t.version="3.6.5",_t.isNavigationFailure=We,_t.NavigationFailureType=De,_t.START_LOCATION=m,ce&&window.Vue&&window.Vue.use(_t)},144:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Jr}});
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function d(e){return null!==e&&"object"===typeof e}var h=Object.prototype.toString;function p(e){return"[object Object]"===h.call(e)}function f(e){return"[object RegExp]"===h.call(e)}function v(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function m(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function g(e){return null==e?"":Array.isArray(e)||p(e)&&e.toString===h?JSON.stringify(e,null,2):String(e)}function y(e){var t=parseFloat(e);return isNaN(t)?e:t}function b(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}b("slot,component",!0);var _=b("key,ref,slot,slot-scope,is");function w(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var k=Object.prototype.hasOwnProperty;function I(e,t){return k.call(e,t)}function S(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var C=/-(\w)/g,E=S((function(e){return e.replace(C,(function(e,t){return t?t.toUpperCase():""}))})),T=S((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),O=/\B([A-Z])/g,A=S((function(e){return e.replace(O,"-$1").toLowerCase()}));function x(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function L(e,t){return e.bind(t)}var P=Function.prototype.bind?L:x;function R(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function N(e,t){for(var n in t)e[n]=t[n];return e}function $(e){for(var t={},n=0;n<e.length;n++)e[n]&&N(t,e[n]);return t}function M(e,t,n){}var D=function(e,t,n){return!1},j=function(e){return e};function B(e,t){if(e===t)return!0;var n=d(e),r=d(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return B(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var s=Object.keys(e),a=Object.keys(t);return s.length===a.length&&s.every((function(n){return B(e[n],t[n])}))}catch(c){return!1}}function V(e,t){for(var n=0;n<e.length;n++)if(B(e[n],t))return n;return-1}function U(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function F(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var H="data-server-rendered",z=["component","directive","filter"],Z=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],W={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:M,parsePlatformTagName:j,mustUseProp:D,async:!0,_lifecycleHooks:Z},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function K(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(q.source,".$_\\d]"));function Y(e){if(!J.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var X="__proto__"in{},Q="undefined"!==typeof window,ee=Q&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var oe,se=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(Q)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Ys){}var le=function(){return void 0===oe&&(oe=!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},de=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function he(e){return"function"===typeof e&&/native code/.test(e.toString())}var pe,fe="undefined"!==typeof Symbol&&he(Symbol)&&"undefined"!==typeof Reflect&&he(Reflect.ownKeys);pe="undefined"!==typeof Set&&he(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ve=null;function me(e){void 0===e&&(e=null),e||ve&&ve._scope.off(),ve=e,e&&e._scope.on()}var ge=function(){function e(e,t,n,r,i,o,s,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ye=function(e){void 0===e&&(e="");var t=new ge;return t.text=e,t.isComment=!0,t};function be(e){return new ge(void 0,void 0,void 0,String(e))}function _e(e){var t=new ge(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var we=0,ke=[],Ie=function(){for(var e=0;e<ke.length;e++){var t=ke[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}ke.length=0},Se=function(){function e(){this._pending=!1,this.id=we++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,ke.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Se.target=null;var Ce=[];function Ee(e){Ce.push(e),Se.target=e}function Te(){Ce.pop(),Se.target=Ce[Ce.length-1]}var Oe=Array.prototype,Ae=Object.create(Oe),xe=["push","pop","shift","unshift","splice","sort","reverse"];xe.forEach((function(e){var t=Oe[e];K(Ae,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),s=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Le=Object.getOwnPropertyNames(Ae),Pe={},Re=!0;function Ne(e){Re=e}var $e={notify:M,depend:M,addSub:M,removeSub:M},Me=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?$e:new Se,this.vmCount=0,K(e,"__ob__",this),i(e)){if(!n)if(X)e.__proto__=Ae;else for(var r=0,o=Le.length;r<o;r++){var s=Le[r];K(e,s,Ae[s])}t||this.observeArray(e)}else{var a=Object.keys(e);for(r=0;r<a.length;r++){s=a[r];je(e,s,Pe,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)De(e[t],!1,this.mock)},e}();function De(e,t,n){return e&&I(e,"__ob__")&&e.__ob__ instanceof Me?e.__ob__:!Re||!n&&le()||!i(e)&&!p(e)||!Object.isExtensible(e)||e.__v_skip||Ze(e)||e instanceof ge?void 0:new Me(e,t,n)}function je(e,t,n,r,o,s){var a=new Se,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Pe&&2!==arguments.length||(n=e[t]);var d=!o&&De(n,!1,s);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Se.target&&(a.depend(),d&&(d.dep.depend(),i(t)&&Ue(t))),Ze(t)&&!o?t.value:t},set:function(t){var r=u?u.call(e):n;if(F(r,t)){if(l)l.call(e,t);else{if(u)return;if(!o&&Ze(r)&&!Ze(t))return void(r.value=t);n=t}d=!o&&De(t,!1,s),a.notify()}}}),a}}function Be(e,t,n){if(!ze(e)){var r=e.__ob__;return i(e)&&v(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&De(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function Ve(e,t){if(i(e)&&v(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||ze(e)||I(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ue(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&Ue(t)}function Fe(e){return He(e,!0),K(e,"__v_isShallow",!0),e}function He(e,t){if(!ze(e)){De(e,t,le());0}}function ze(e){return!(!e||!e.__v_isReadonly)}function Ze(e){return!(!e||!0!==e.__v_isRef)}function We(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(Ze(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];Ze(r)&&!Ze(e)?r.value=e:t[n]=e}})}var qe="watcher";"".concat(qe," callback"),"".concat(qe," getter"),"".concat(qe," cleanup");var Ge;var Ke=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!e&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ge;try{return Ge=this,e()}finally{Ge=t}}else 0},e.prototype.on=function(){Ge=this},e.prototype.off=function(){Ge=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Je(e,t){void 0===t&&(t=Ge),t&&t.active&&t.effects.push(e)}function Ye(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Xe=S((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Qe(e,t){function n(){var e=n.fns;if(!i(e))return Kt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Kt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,r,i,s){var c,u,l,d;for(c in e)u=e[c],l=t[c],d=Xe(c),o(u)||(o(l)?(o(u.fns)&&(u=e[c]=Qe(u,s)),a(d.once)&&(u=e[c]=i(d.name,u,d.capture)),n(d.name,u,d.capture,d.passive,d.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)o(e[c])&&(d=Xe(c),r(d.name,t[c],d.capture))}function tt(e,t,n){var r;e instanceof ge&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),w(r.fns,c)}o(i)?r=Qe([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Qe([i,c]),r.merged=!0,e[t]=r}function nt(e,t,n){var r=t.options.props;if(!o(r)){var i={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in r){var l=A(u);rt(i,c,u,l,!0)||rt(i,a,u,l,!1)}return i}}function rt(e,t,n,r,i){if(s(t)){if(I(t,n))return e[n]=t[n],i||delete t[n],!0;if(I(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function it(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function ot(e){return u(e)?[be(e)]:i(e)?at(e):void 0}function st(e){return s(e)&&s(e.text)&&c(e.isComment)}function at(e,t){var n,r,c,l,d=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=d.length-1,l=d[c],i(r)?r.length>0&&(r=at(r,"".concat(t||"","_").concat(n)),st(r[0])&&st(l)&&(d[c]=be(l.text+r[0].text),r.shift()),d.push.apply(d,r)):u(r)?st(l)?d[c]=be(l.text+r):""!==r&&d.push(be(r)):st(r)&&st(l)?d[c]=be(l.text+r.text):(a(e._isVList)&&s(r.tag)&&o(r.key)&&s(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),d.push(r)));return d}function ct(e,t){var n,r,o,a,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(d(e))if(fe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=t(e[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=N(N({},r),n)),i=o(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function lt(e){return Ir(this.$options,"filters",e,!0)||j}function dt(e,t){return i(e)?-1===e.indexOf(t):e!==t}function ht(e,t,n,r,i){var o=W.keyCodes[t]||n;return i&&r&&!W.keyCodes[t]?dt(i,r):o?dt(o,e):r?A(r)!==t:void 0===e}function pt(e,t,n,r,o){if(n)if(d(n)){i(n)&&(n=$(n));var s=void 0,a=function(i){if("class"===i||"style"===i||_(i))s=e;else{var a=e.attrs&&e.attrs.type;s=r||W.mustUseProp(t,a,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=E(i),u=A(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)a(c)}else;return e}function ft(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),mt(r,"__static__".concat(e),!1)),r}function vt(e,t,n){return mt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function mt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&gt(e[r],"".concat(t,"_").concat(r),n);else gt(e,t,n)}function gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function yt(e,t){if(t)if(p(t)){var n=e.on=e.on?N({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function bt(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var s=e[o];i(s)?bt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function _t(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function wt(e,t){return"string"===typeof e?t+e:e}function kt(e){e._o=vt,e._n=y,e._s=g,e._l=ct,e._t=ut,e._q=B,e._i=V,e._m=ft,e._f=lt,e._k=ht,e._b=pt,e._v=be,e._e=ye,e._u=bt,e._g=yt,e._d=_t,e._p=wt}function It(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==t&&o.fnContext!==t||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(St)&&delete n[u];return n}function St(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ct(e){return e.isComment&&e.asyncFactory}function Et(e,t,n,i){var o,s=Object.keys(n).length>0,a=t?!!t.$stable:!s,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Tt(e,n,u,t[u]))}else o={};for(var l in n)l in o||(o[l]=Ot(n,l));return t&&Object.isExtensible(t)&&(t._normalized=o),K(o,"$stable",a),K(o,"$key",c),K(o,"$hasNormal",s),o}function Tt(e,t,n,r){var o=function(){var t=ve;me(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ot(n);var o=n&&n[0];return me(t),n&&(!o||1===n.length&&o.isComment&&!Ct(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Ot(e,t){return function(){return e[t]}}function At(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=xt(e);me(e),Ee();var i=Kt(n,null,[e._props||Fe({}),r],e,"setup");if(Te(),me(),l(i))t.render=i;else if(d(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var s in i)"__sfc"!==s&&We(o,i,s)}else for(var s in i)G(s)||We(e,i,s);else 0}}function xt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};K(t,"_v_attr_proxy",!0),Lt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Lt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Rt(e)},emit:P(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return We(e,t,n)}))}}}function Lt(e,t,n,r,i){var o=!1;for(var s in t)s in e?t[s]!==n[s]&&(o=!0):(o=!0,Pt(e,s,r,i));for(var s in e)s in t||(o=!0,delete e[s]);return o}function Pt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Rt(e){return e._slotsProxy||Nt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Nt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function $t(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=It(t._renderChildren,i),e.$scopedSlots=n?Et(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return zt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return zt(e,t,n,r,i,!0)};var o=n&&n.data;je(e,"$attrs",o&&o.attrs||r,null,!0),je(e,"$listeners",t._parentListeners||r,null,!0)}var Mt=null;function Dt(e){kt(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Et(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Nt(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{me(t),Mt=t,e=r.call(t._renderProxy,t.$createElement)}catch(Ys){Gt(Ys,t,"render"),e=t._vnode}finally{Mt=null,me()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ge||(e=ye()),e.parent=o,e}}function jt(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),d(e)?t.extend(e):e}function Bt(e,t,n,r,i){var o=ye();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Vt(e,t){if(a(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=Mt;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},h=U((function(n){e.resolved=jt(n,t),i?r.length=0:l(!0)})),p=U((function(t){s(e.errorComp)&&(e.error=!0,l(!0))})),f=e(h,p);return d(f)&&(m(f)?o(e.resolved)&&f.then(h,p):m(f.component)&&(f.component.then(h,p),s(f.error)&&(e.errorComp=jt(f.error,t)),s(f.loading)&&(e.loadingComp=jt(f.loading,t),0===f.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,l(!1))}),f.delay||200)),s(f.timeout)&&(u=setTimeout((function(){u=null,o(e.resolved)&&p(null)}),f.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function Ut(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Ct(n)))return n}}var Ft=1,Ht=2;function zt(e,t,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=Ht),Zt(e,t,n,r,o)}function Zt(e,t,n,r,o){if(s(n)&&s(n.__ob__))return ye();if(s(n)&&s(n.is)&&(t=n.is),!t)return ye();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===Ht?r=ot(r):o===Ft&&(r=it(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||W.getTagNamespace(t),a=W.isReservedTag(t)?new ge(W.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(u=Ir(e.$options,"components",t))?new ge(t,n,r,void 0,void 0,e):sr(u,n,e,r,t)}else a=sr(t,n,e,r);return i(a)?a:s(a)?(s(c)&&Wt(a,c),s(n)&&qt(n),a):ye()}function Wt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Wt(c,t,n)}}function qt(e){d(e.style)&&pn(e.style),d(e.class)&&pn(e.class)}function Gt(e,t,n){Ee();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,e,t,n);if(s)return}catch(Ys){Jt(Ys,r,"errorCaptured hook")}}}Jt(e,t,n)}finally{Te()}}function Kt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(e){return Gt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ys){Gt(Ys,r,i)}return o}function Jt(e,t,n){if(W.errorHandler)try{return W.errorHandler.call(null,e,t,n)}catch(Ys){Ys!==e&&Yt(Ys,null,"config.errorHandler")}Yt(e,t,n)}function Yt(e,t,n){if(!Q||"undefined"===typeof console)throw e;console.error(e)}var Xt,Qt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&he(Promise)){var rn=Promise.resolve();Xt=function(){rn.then(nn),ie&&setTimeout(M)},Qt=!0}else if(te||"undefined"===typeof MutationObserver||!he(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xt="undefined"!==typeof setImmediate&&he(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,sn=new MutationObserver(nn),an=document.createTextNode(String(on));sn.observe(an,{characterData:!0}),Xt=function(){on=(on+1)%2,an.data=String(on)},Qt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Ys){Gt(Ys,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Xt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function un(e){return function(t,n){if(void 0===n&&(n=ve),n)return ln(n,e,t)}}function ln(e,t,n){var r=e.$options;r[t]=vr(r[t],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var dn="2.7.14";var hn=new pe;function pn(e){return fn(e,hn),hn.clear(),e}function fn(e,t){var n,r,o=i(e);if(!(!o&&!d(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ge)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(o){n=e.length;while(n--)fn(e[n],t)}else if(Ze(e))fn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)fn(e[r[n]],t)}}}var vn,mn=0,gn=function(){function e(e,t,n,r,i){Je(this,Ge&&!Ge._vm?Ge:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pe,this.newDepIds=new pe,this.expression="",l(t)?this.getter=t:(this.getter=Y(t),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Ee(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Ys){if(!this.user)throw Ys;Gt(Ys,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&pn(e),Te(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Kn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||d(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Kt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function yn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&kn(e,t)}function bn(e,t){vn.$on(e,t)}function _n(e,t){vn.$off(e,t)}function wn(e,t){var n=vn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function kn(e,t,n){vn=e,et(t,n||{},bn,_n,wn,e),vn=void 0}function In(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,s=e.length;o<s;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var s,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'.concat(e,'"'),o=0,s=n.length;o<s;o++)Kt(n[o],t,r,t,i)}return t}}var Sn=null;function Cn(e){var t=Sn;return Sn=e,function(){Sn=t}}function En(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Tn(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Cn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||w(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function On(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=ye),Rn(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Rn(e,"beforeUpdate")}};new gn(e,r,M,i,!0),n=!1;var o=e._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==e.$vnode&&(e._isMounted=!0,Rn(e,"mounted")),e}function An(e,t,n,i,o){var s=i.data.scopedSlots,a=e.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&e.$scopedSlots.$key!==s.$key||!s&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var d=i.data.attrs||r;e._attrsProxy&&Lt(e._attrsProxy,d,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=d,n=n||r;var h=e.$options._parentListeners;if(e._listenersProxy&&Lt(e._listenersProxy,n,h||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,kn(e,n,h),t&&e.$options.props){Ne(!1);for(var p=e._props,f=e.$options._propKeys||[],v=0;v<f.length;v++){var m=f[v],g=e.$options.props;p[m]=Sr(m,g,t,e)}Ne(!0),e.$options.propsData=t}u&&(e.$slots=It(o,i.context),e.$forceUpdate())}function xn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ln(e,t){if(t){if(e._directInactive=!1,xn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Ln(e.$children[n]);Rn(e,"activated")}}function Pn(e,t){if((!t||(e._directInactive=!0,!xn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Pn(e.$children[n]);Rn(e,"deactivated")}}function Rn(e,t,n,r){void 0===r&&(r=!0),Ee();var i=ve;r&&me(e);var o=e.$options[t],s="".concat(t," hook");if(o)for(var a=0,c=o.length;a<c;a++)Kt(o[a],e,n||null,e,s);e._hasHookEvent&&e.$emit("hook:"+t),r&&me(i),Te()}var Nn=[],$n=[],Mn={},Dn=!1,jn=!1,Bn=0;function Vn(){Bn=Nn.length=$n.length=0,Mn={},Dn=jn=!1}var Un=0,Fn=Date.now;if(Q&&!te){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&Fn()>document.createEvent("Event").timeStamp&&(Fn=function(){return Hn.now()})}var zn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Zn(){var e,t;for(Un=Fn(),jn=!0,Nn.sort(zn),Bn=0;Bn<Nn.length;Bn++)e=Nn[Bn],e.before&&e.before(),t=e.id,Mn[t]=null,e.run();var n=$n.slice(),r=Nn.slice();Vn(),Gn(n),Wn(r),Ie(),de&&W.devtools&&de.emit("flush")}function Wn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function qn(e){e._inactive=!1,$n.push(e)}function Gn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Ln(e[t],!0)}function Kn(e){var t=e.id;if(null==Mn[t]&&(e!==Se.target||!e.noRecurse)){if(Mn[t]=!0,jn){var n=Nn.length-1;while(n>Bn&&Nn[n].id>e.id)n--;Nn.splice(n+1,0,e)}else Nn.push(e);Dn||(Dn=!0,cn(Zn))}}function Jn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!d(n))return;for(var r=Ye(e),i=fe?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Yn(e){var t=Xn(e.$options.inject,e);t&&(Ne(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),Ne(!0))}function Xn(e,t){if(e){for(var n=Object.create(null),r=fe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=e[o].from;if(s in t._provided)n[o]=t._provided[s];else if("default"in e[o]){var a=e[o].default;n[o]=l(a)?a.call(t):a}else 0}}return n}}function Qn(e,t,n,o,s){var c,u=this,l=s.options;I(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var d=a(l._compiled),h=!d;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=Xn(l.inject,o),this.slots=function(){return u.$slots||Et(o,e.scopedSlots,u.$slots=It(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Et(o,e.scopedSlots,this.slots())}}),d&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Et(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var s=zt(c,e,t,n,r,h);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(e,t,n,r){return zt(c,e,t,n,r,h)}}function er(e,t,n,o,a){var c=e.options,u={},l=c.props;if(s(l))for(var d in l)u[d]=Sr(d,l,t||r);else s(n.attrs)&&nr(u,n.attrs),s(n.props)&&nr(u,n.props);var h=new Qn(n,u,a,o,e),p=c.render.call(null,h._c,h);if(p instanceof ge)return tr(p,n,h.parent,c,h);if(i(p)){for(var f=ot(p)||[],v=new Array(f.length),m=0;m<f.length;m++)v[m]=tr(f[m],n,h.parent,c,h);return v}}function tr(e,t,n,r,i){var o=_e(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nr(e,t){for(var n in t)e[E(n)]=t[n]}function rr(e){return e.name||e.__name||e._componentTag}kt(Qn.prototype);var ir={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ir.prepatch(n,n)}else{var r=e.componentInstance=ar(e,Sn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;An(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),e.data.keepAlive&&(t._isMounted?qn(n):Ln(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Pn(t,!0):t.$destroy())}},or=Object.keys(ir);function sr(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(d(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(o(e.cid)&&(u=e,e=Vt(u,c),void 0===e))return Bt(u,t,n,r,i);t=t||{},Gr(e),s(t.model)&&lr(e.options,t);var l=nt(t,e,i);if(a(e.options.functional))return er(e,l,t,n,r);var h=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}cr(t);var f=rr(e.options)||i,v=new ge("vue-component-".concat(e.cid).concat(f?"-".concat(f):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:h,tag:i,children:r},u);return v}}}function ar(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cr(e){for(var t=e.hook||(e.hook={}),n=0;n<or.length;n++){var r=or[n],i=t[r],o=ir[r];i===o||i&&i._merged||(t[r]=i?ur(o,i):o)}}function ur(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function lr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),a=o[r],c=t.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var dr=M,hr=W.optionMergeStrategies;function pr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,o,s=fe?Reflect.ownKeys(t):Object.keys(t),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=e[r],o=t[r],n&&I(e,r)?i!==o&&p(i)&&p(o)&&pr(i,o):Be(e,r,o));return e}function fr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?pr(r,i):i}:t?e?function(){return pr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function vr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?mr(n):n}function mr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function gr(e,t,n,r){var i=Object.create(e||null);return t?N(i,t):i}hr.data=function(e,t,n){return n?fr(e,t,n):t&&"function"!==typeof t?e:fr(e,t)},Z.forEach((function(e){hr[e]=vr})),z.forEach((function(e){hr[e+"s"]=gr})),hr.watch=function(e,t,n,r){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var s in N(o,e),t){var a=o[s],c=t[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},hr.props=hr.methods=hr.inject=hr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return N(i,e),t&&N(i,t),i},hr.provide=function(e,t){return e?function(){var n=Object.create(null);return pr(n,l(e)?e.call(this):e),t&&pr(n,l(t)?t.call(this):t,!1),n}:t};var yr=function(e,t){return void 0===t?e:t};function br(e,t){var n=e.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=E(o),a[s]={type:null})}else if(p(n))for(var c in n)o=n[c],s=E(c),a[s]=p(o)?o:{type:o};else 0;e.props=a}}function _r(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(p(n))for(var s in n){var a=n[s];r[s]=p(a)?N({from:s},a):{from:a}}else 0}}function wr(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function kr(e,t,n){if(l(t)&&(t=t.options),br(t,n),_r(t,n),wr(t),!t._base&&(t.extends&&(e=kr(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=kr(e,t.mixins[r],n);var o,s={};for(o in e)a(o);for(o in t)I(e,o)||a(o);function a(r){var i=hr[r]||yr;s[r]=i(e[r],t[r],n,r)}return s}function Ir(e,t,n,r){if("string"===typeof n){var i=e[t];if(I(i,n))return i[n];var o=E(n);if(I(i,o))return i[o];var s=T(o);if(I(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Sr(e,t,n,r){var i=t[e],o=!I(n,e),s=n[e],a=Ar(Boolean,i.type);if(a>-1)if(o&&!I(i,"default"))s=!1;else if(""===s||s===A(e)){var c=Ar(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Cr(r,i,e);var u=Re;Ne(!0),De(s),Ne(u)}return s}function Cr(e,t,n){if(I(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Tr(t.type)?r.call(e):r}}var Er=/^\s*function (\w+)/;function Tr(e){var t=e&&e.toString().match(Er);return t?t[1]:""}function Or(e,t){return Tr(e)===Tr(t)}function Ar(e,t){if(!i(t))return Or(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Or(t[n],e))return n;return-1}var xr={enumerable:!0,configurable:!0,get:M,set:M};function Lr(e,t,n){xr.get=function(){return this[t][n]},xr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,xr)}function Pr(e){var t=e.$options;if(t.props&&Rr(e,t.props),At(e),t.methods&&Ur(e,t.methods),t.data)Nr(e);else{var n=De(e._data={});n&&n.vmCount++}t.computed&&Dr(e,t.computed),t.watch&&t.watch!==ae&&Fr(e,t.watch)}function Rr(e,t){var n=e.$options.propsData||{},r=e._props=Fe({}),i=e.$options._propKeys=[],o=!e.$parent;o||Ne(!1);var s=function(o){i.push(o);var s=Sr(o,t,n,e);je(r,o,s),o in e||Lr(e,"_props",o)};for(var a in t)s(a);Ne(!0)}function Nr(e){var t=e.$options.data;t=e._data=l(t)?$r(t,e):t||{},p(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&I(r,o)||G(o)||Lr(e,"_data",o)}var s=De(t);s&&s.vmCount++}function $r(e,t){Ee();try{return e.call(t,t)}catch(Ys){return Gt(Ys,t,"data()"),{}}finally{Te()}}var Mr={lazy:!0};function Dr(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var o=t[i],s=l(o)?o:o.get;0,r||(n[i]=new gn(e,s||M,M,Mr)),i in e||jr(e,i,o)}}function jr(e,t,n){var r=!le();l(n)?(xr.get=r?Br(t):Vr(n),xr.set=M):(xr.get=n.get?r&&!1!==n.cache?Br(t):Vr(n.get):M,xr.set=n.set||M),Object.defineProperty(e,t,xr)}function Br(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Se.target&&t.depend(),t.value}}function Vr(e){return function(){return e.call(this,this)}}function Ur(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?M:P(t[n],e)}function Fr(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)Hr(e,n,r[o]);else Hr(e,n,r)}}function Hr(e,t,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function zr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Be,e.prototype.$delete=Ve,e.prototype.$watch=function(e,t,n){var r=this;if(p(t))return Hr(r,e,t,n);n=n||{},n.user=!0;var i=new gn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ee(),Kt(t,r,[i.value],r,o),Te()}return function(){i.teardown()}}}var Zr=0;function Wr(e){e.prototype._init=function(e){var t=this;t._uid=Zr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Ke(!0),t._scope._vm=!0,e&&e._isComponent?qr(t,e):t.$options=kr(Gr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,En(t),yn(t),$t(t),Rn(t,"beforeCreate",void 0,!1),Yn(t),Pr(t),Jn(t),Rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function qr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Gr(e){var t=e.options;if(e.super){var n=Gr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Kr(e);i&&N(e.extendOptions,i),t=e.options=kr(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Kr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Jr(e){this._init(e)}function Yr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=R(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Xr(e){e.mixin=function(e){return this.options=kr(this.options,e),this}}function Qr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=rr(e)||rr(n.options);var s=function(e){this._init(e)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=t++,s.options=kr(n.options,e),s["super"]=n,s.options.props&&ei(s),s.options.computed&&ti(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,z.forEach((function(e){s[e]=n[e]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=e,s.sealedOptions=N({},s.options),i[r]=s,s}}function ei(e){var t=e.options.props;for(var n in t)Lr(e.prototype,"_props",n)}function ti(e){var t=e.options.computed;for(var n in t)jr(e.prototype,n,t[n])}function ni(e){z.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&p(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ri(e){return e&&(rr(e.Ctor.options)||e.tag)}function ii(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!f(e)&&e.test(t)}function oi(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!t(a)&&si(n,o,r,i)}}}function si(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,w(n,t)}Wr(Jr),zr(Jr),In(Jr),Tn(Jr),Dt(Jr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;t[i]={name:ri(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&si(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)si(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){oi(e,(function(e){return ii(t,e)}))})),this.$watch("exclude",(function(t){oi(e,(function(e){return!ii(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Ut(e),n=t&&t.componentOptions;if(n){var r=ri(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ii(o,r))||s&&r&&ii(s,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ui={KeepAlive:ci};function li(e){var t={get:function(){return W}};Object.defineProperty(e,"config",t),e.util={warn:dr,extend:N,mergeOptions:kr,defineReactive:je},e.set=Be,e.delete=Ve,e.nextTick=cn,e.observable=function(e){return De(e),e},e.options=Object.create(null),z.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,N(e.options.components,ui),Yr(e),Xr(e),Qr(e),ni(e)}li(Jr),Object.defineProperty(Jr.prototype,"$isServer",{get:le}),Object.defineProperty(Jr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Jr,"FunctionalRenderContext",{value:Qn}),Jr.version=dn;var di=b("style,class"),hi=b("input,textarea,option,select,progress"),pi=function(e,t,n){return"value"===n&&hi(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},fi=b("contenteditable,draggable,spellcheck"),vi=b("events,caret,typing,plaintext-only"),mi=function(e,t){return wi(t)||"false"===t?"false":"contenteditable"===e&&vi(t)?t:"true"},gi=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yi="http://www.w3.org/1999/xlink",bi=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},_i=function(e){return bi(e)?e.slice(6,e.length):""},wi=function(e){return null==e||!1===e};function ki(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Ii(r.data,t));while(s(n=n.parent))n&&n.data&&(t=Ii(t,n.data));return Si(t.staticClass,t.class)}function Ii(e,t){return{staticClass:Ci(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Si(e,t){return s(e)||s(t)?Ci(e,Ei(t)):""}function Ci(e,t){return e?t?e+" "+t:e:t||""}function Ei(e){return Array.isArray(e)?Ti(e):d(e)?Oi(e):"string"===typeof e?e:""}function Ti(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=Ei(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Oi(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Ai={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},xi=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Li=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Pi=function(e){return xi(e)||Li(e)};function Ri(e){return Li(e)?"svg":"math"===e?"math":void 0}var Ni=Object.create(null);function $i(e){if(!Q)return!0;if(Pi(e))return!1;if(e=e.toLowerCase(),null!=Ni[e])return Ni[e];var t=document.createElement(e);return e.indexOf("-")>-1?Ni[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Ni[e]=/HTMLUnknownElement/.test(t.toString())}var Mi=b("text,number,password,search,email,tel,url");function Di(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function ji(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Bi(e,t){return document.createElementNS(Ai[e],t)}function Vi(e){return document.createTextNode(e)}function Ui(e){return document.createComment(e)}function Fi(e,t,n){e.insertBefore(t,n)}function Hi(e,t){e.removeChild(t)}function zi(e,t){e.appendChild(t)}function Zi(e){return e.parentNode}function Wi(e){return e.nextSibling}function qi(e){return e.tagName}function Gi(e,t){e.textContent=t}function Ki(e,t){e.setAttribute(t,"")}var Ji=Object.freeze({__proto__:null,createElement:ji,createElementNS:Bi,createTextNode:Vi,createComment:Ui,insertBefore:Fi,removeChild:Hi,appendChild:zi,parentNode:Zi,nextSibling:Wi,tagName:qi,setTextContent:Gi,setStyleScope:Ki}),Yi={create:function(e,t){Xi(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Xi(e,!0),Xi(t))},destroy:function(e){Xi(e,!0)}};function Xi(e,t){var n=e.data.ref;if(s(n)){var r=e.context,o=e.componentInstance||e.elm,a=t?null:o,c=t?void 0:o;if(l(n))Kt(n,r,[a],r,"template ref function");else{var u=e.data.refInFor,d="string"===typeof n||"number"===typeof n,h=Ze(n),p=r.$refs;if(d||h)if(u){var f=d?p[n]:n.value;t?i(f)&&w(f,o):i(f)?f.includes(o)||f.push(o):d?(p[n]=[o],Qi(r,n,p[n])):n.value=[o]}else if(d){if(t&&p[n]!==o)return;p[n]=c,Qi(r,n,a)}else if(h){if(t&&n.value!==o)return;n.value=a}else 0}}}function Qi(e,t,n){var r=e._setupState;r&&I(r,t)&&(Ze(r[t])?r[t].value=n:r[t]=n)}var eo=new ge("",{},[]),to=["create","activate","update","remove","destroy"];function no(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&ro(e,t)||a(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function ro(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||Mi(r)&&Mi(i)}function io(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function oo(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<to.length;++t)for(r[to[t]]=[],n=0;n<c.length;++n)s(c[n][to[t]])&&r[to[t]].push(c[n][to[t]]);function d(e){return new ge(l.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&p(e)}return n.listeners=t,n}function p(e){var t=l.parentNode(e);s(t)&&l.removeChild(t,e)}function f(e,t,n,r,i,o,c){if(s(e.elm)&&s(o)&&(e=o[c]=_e(e)),e.isRootInsert=!i,!v(e,t,n,r)){var u=e.data,d=e.children,h=e.tag;s(h)?(e.elm=e.ns?l.createElementNS(e.ns,h):l.createElement(h,e),I(e),_(e,d,t),s(u)&&k(e,t),y(n,e.elm,r)):a(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,r)):(e.elm=l.createTextNode(e.text),y(n,e.elm,r))}}function v(e,t,n,r){var i=e.data;if(s(i)){var o=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return m(e,t),y(n,e.elm,r),a(o)&&g(e,t,n,r),!0}}function m(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(k(e,t),I(e)):(Xi(e),t.push(e))}function g(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){s(e)&&(s(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function _(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function k(e,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(eo,e),s(t.insert)&&n.push(e))}function I(e){var t;if(s(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}s(t=Sn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function S(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function C(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)C(e.children[n])}function E(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(T(r),C(r)):p(r.elm))}}function T(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=h(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&T(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else p(e.elm)}function O(e,t,n,r,i){var a,c,u,d,h=0,p=0,v=t.length-1,m=t[0],g=t[v],y=n.length-1,b=n[0],_=n[y],w=!i;while(h<=v&&p<=y)o(m)?m=t[++h]:o(g)?g=t[--v]:no(m,b)?(x(m,b,r,n,p),m=t[++h],b=n[++p]):no(g,_)?(x(g,_,r,n,y),g=t[--v],_=n[--y]):no(m,_)?(x(m,_,r,n,y),w&&l.insertBefore(e,m.elm,l.nextSibling(g.elm)),m=t[++h],_=n[--y]):no(g,b)?(x(g,b,r,n,p),w&&l.insertBefore(e,g.elm,m.elm),g=t[--v],b=n[++p]):(o(a)&&(a=io(t,h,v)),c=s(b.key)?a[b.key]:A(b,t,h,v),o(c)?f(b,r,e,m.elm,!1,n,p):(u=t[c],no(u,b)?(x(u,b,r,n,p),t[c]=void 0,w&&l.insertBefore(e,u.elm,m.elm)):f(b,r,e,m.elm,!1,n,p)),b=n[++p]);h>v?(d=o(n[y+1])?null:n[y+1].elm,S(e,d,n,p,y,r)):p>y&&E(t,h,v)}function A(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&no(e,o))return i}}function x(e,t,n,i,c,u){if(e!==t){s(t.elm)&&s(i)&&(t=i[c]=_e(t));var d=t.elm=e.elm;if(a(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var h,p=t.data;s(p)&&s(h=p.hook)&&s(h=h.prepatch)&&h(e,t);var f=e.children,v=t.children;if(s(p)&&w(t)){for(h=0;h<r.update.length;++h)r.update[h](e,t);s(h=p.hook)&&s(h=h.update)&&h(e,t)}o(t.text)?s(f)&&s(v)?f!==v&&O(d,f,v,n,u):s(v)?(s(e.text)&&l.setTextContent(d,""),S(d,null,v,0,v.length-1,n)):s(f)?E(f,0,f.length-1):s(e.text)&&l.setTextContent(d,""):e.text!==t.text&&l.setTextContent(d,t.text),s(p)&&s(h=p.hook)&&s(h=h.postpatch)&&h(e,t)}}}function L(e,t,n){if(a(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var P=b("attrs,class,staticClass,staticStyle,key");function R(e,t,n,r){var i,o=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,a(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return m(t,n),!0;if(s(o)){if(s(u))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,d=e.firstChild,h=0;h<u.length;h++){if(!d||!R(d,u[h],n,r)){l=!1;break}d=d.nextSibling}if(!l||d)return!1}else _(t,u,n);if(s(c)){var p=!1;for(var f in c)if(!P(f)){p=!0,k(t,n);break}!p&&c["class"]&&pn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,u=[];if(o(e))c=!0,f(t,u);else{var h=s(e.nodeType);if(!h&&no(e,t))x(e,t,u,null,null,i);else{if(h){if(1===e.nodeType&&e.hasAttribute(H)&&(e.removeAttribute(H),n=!0),a(n)&&R(e,t,u))return L(t,u,!0),e;e=d(e)}var p=e.elm,v=l.parentNode(p);if(f(t,u,p._leaveCb?null:v,l.nextSibling(p)),s(t.parent)){var m=t.parent,g=w(t);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=t.elm,g){for(var b=0;b<r.create.length;++b)r.create[b](eo,m);var _=m.data.hook.insert;if(_.merged)for(var k=1;k<_.fns.length;k++)_.fns[k]()}else Xi(m);m=m.parent}}s(v)?E([e],0,0):s(e.tag)&&C(e)}}return L(t,u,c),t.elm}s(e)&&C(e)}}var so={create:ao,update:ao,destroy:function(e){ao(e,eo)}};function ao(e,t){(e.data.directives||t.data.directives)&&co(e,t)}function co(e,t){var n,r,i,o=e===eo,s=t===eo,a=lo(e.data.directives,e.context),c=lo(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,po(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(po(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var d=function(){for(var n=0;n<u.length;n++)po(u[n],"inserted",t,e)};o?tt(t,"insert",d):d()}if(l.length&&tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)po(l[n],"componentUpdated",t,e)})),!o)for(n in a)c[n]||po(a[n],"unbind",e,e,s)}var uo=Object.create(null);function lo(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=uo),i[ho(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||Ir(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Ir(t.$options,"directives",r.name,!0)}return i}function ho(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function po(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Ys){Gt(Ys,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var fo=[Yi,so];function vo(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},d=t.data.attrs||{};for(r in(s(d.__ob__)||a(d._v_attr_proxy))&&(d=t.data.attrs=N({},d)),d)i=d[r],c=l[r],c!==i&&mo(u,r,i,t.data.pre);for(r in(te||re)&&d.value!==l.value&&mo(u,"value",d.value),l)o(d[r])&&(bi(r)?u.removeAttributeNS(yi,_i(r)):fi(r)||u.removeAttribute(r))}}function mo(e,t,n,r){r||e.tagName.indexOf("-")>-1?go(e,t,n):gi(t)?wi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):fi(t)?e.setAttribute(t,mi(t,n)):bi(t)?wi(n)?e.removeAttributeNS(yi,_i(t)):e.setAttributeNS(yi,t,n):go(e,t,n)}function go(e,t,n){if(wi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var yo={create:vo,update:vo};function bo(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=ki(t),c=n._transitionClasses;s(c)&&(a=Ci(a,Ei(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _o,wo={create:bo,update:bo},ko="__r",Io="__c";function So(e){if(s(e[ko])){var t=te?"change":"input";e[t]=[].concat(e[ko],e[t]||[]),delete e[ko]}s(e[Io])&&(e.change=[].concat(e[Io],e.change||[]),delete e[Io])}function Co(e,t,n){var r=_o;return function i(){var o=t.apply(null,arguments);null!==o&&Oo(e,i,n,r)}}var Eo=Qt&&!(se&&Number(se[1])<=53);function To(e,t,n,r){if(Eo){var i=Un,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}_o.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function Oo(e,t,n,r){(r||_o).removeEventListener(e,t._wrapper||t,n)}function Ao(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};_o=t.elm||e.elm,So(n),et(n,r,To,Oo,Co,t.context),_o=void 0}}var xo,Lo={create:Ao,update:Ao,destroy:function(e){return Ao(e,eo)}};function Po(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=N({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Ro(i,l)&&(i.value=l)}else if("innerHTML"===n&&Li(i.tagName)&&o(i.innerHTML)){xo=xo||document.createElement("div"),xo.innerHTML="<svg>".concat(r,"</svg>");var d=xo.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(d.firstChild)i.appendChild(d.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Ys){}}}}function Ro(e,t){return!e.composing&&("OPTION"===e.tagName||No(e,t)||$o(e,t))}function No(e,t){var n=!0;try{n=document.activeElement!==e}catch(Ys){}return n&&e.value!==t}function $o(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return y(n)!==y(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var Mo={create:Po,update:Po},Do=S((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function jo(e){var t=Bo(e.style);return e.staticStyle?N(e.staticStyle,t):t}function Bo(e){return Array.isArray(e)?$(e):"string"===typeof e?Do(e):e}function Vo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=jo(i.data))&&N(r,n)}(n=jo(e.data))&&N(r,n);var o=e;while(o=o.parent)o.data&&(n=jo(o.data))&&N(r,n);return r}var Uo,Fo=/^--/,Ho=/\s*!important$/,zo=function(e,t,n){if(Fo.test(t))e.style.setProperty(t,n);else if(Ho.test(n))e.style.setProperty(A(t),n.replace(Ho,""),"important");else{var r=Wo(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Zo=["Webkit","Moz","ms"],Wo=S((function(e){if(Uo=Uo||document.createElement("div").style,e=E(e),"filter"!==e&&e in Uo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Zo.length;n++){var r=Zo[n]+t;if(r in Uo)return r}}));function qo(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},d=u||l,h=Bo(t.data.style)||{};t.data.normalizedStyle=s(h.__ob__)?N({},h):h;var p=Vo(t,!0);for(a in d)o(p[a])&&zo(c,a,"");for(a in p)i=p[a],i!==d[a]&&zo(c,a,null==i?"":i)}}var Go={create:qo,update:qo},Ko=/\s+/;function Jo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ko).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Yo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ko).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Xo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&N(t,Qo(e.name||"v")),N(t,e),t}return"string"===typeof e?Qo(e):void 0}}var Qo=S((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),es=Q&&!ne,ts="transition",ns="animation",rs="transition",is="transitionend",os="animation",ss="animationend";es&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(rs="WebkitTransition",is="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(os="WebkitAnimation",ss="webkitAnimationEnd"));var as=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function cs(e){as((function(){as(e)}))}function us(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Jo(e,t))}function ls(e,t){e._transitionClasses&&w(e._transitionClasses,t),Yo(e,t)}function ds(e,t,n){var r=ps(e,t),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===ts?is:ss,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),e.addEventListener(a,l)}var hs=/\b(transform|all)(,|$)/;function ps(e,t){var n,r=window.getComputedStyle(e),i=(r[rs+"Delay"]||"").split(", "),o=(r[rs+"Duration"]||"").split(", "),s=fs(i,o),a=(r[os+"Delay"]||"").split(", "),c=(r[os+"Duration"]||"").split(", "),u=fs(a,c),l=0,d=0;t===ts?s>0&&(n=ts,l=s,d=o.length):t===ns?u>0&&(n=ns,l=u,d=c.length):(l=Math.max(s,u),n=l>0?s>u?ts:ns:null,d=n?n===ts?o.length:c.length:0);var h=n===ts&&hs.test(r[rs+"Property"]);return{type:n,timeout:l,propCount:d,hasTransform:h}}function fs(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return vs(t)+vs(e[n])})))}function vs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ms(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Xo(e.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,h=r.enterActiveClass,p=r.appearClass,f=r.appearToClass,v=r.appearActiveClass,m=r.beforeEnter,g=r.enter,b=r.afterEnter,_=r.enterCancelled,w=r.beforeAppear,k=r.appear,I=r.afterAppear,S=r.appearCancelled,C=r.duration,E=Sn,T=Sn.$vnode;while(T&&T.parent)E=T.context,T=T.parent;var O=!E._isMounted||!e.isRootInsert;if(!O||k||""===k){var A=O&&p?p:c,x=O&&v?v:h,L=O&&f?f:u,P=O&&w||m,R=O&&l(k)?k:g,N=O&&I||b,$=O&&S||_,M=y(d(C)?C.enter:C);0;var D=!1!==i&&!ne,j=bs(R),B=n._enterCb=U((function(){D&&(ls(n,L),ls(n,x)),B.cancelled?(D&&ls(n,A),$&&$(n)):N&&N(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,B)})),P&&P(n),D&&(us(n,A),us(n,x),cs((function(){ls(n,A),B.cancelled||(us(n,L),j||(ys(M)?setTimeout(B,M):ds(n,a,B)))}))),e.data.show&&(t&&t(),R&&R(n,B)),D||j||B()}}}function gs(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Xo(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,h=r.beforeLeave,p=r.leave,f=r.afterLeave,v=r.leaveCancelled,m=r.delayLeave,g=r.duration,b=!1!==i&&!ne,_=bs(p),w=y(d(g)?g.leave:g);0;var k=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(ls(n,u),ls(n,l)),k.cancelled?(b&&ls(n,c),v&&v(n)):(t(),f&&f(n)),n._leaveCb=null}));m?m(I):I()}function I(){k.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),h&&h(n),b&&(us(n,c),us(n,l),cs((function(){ls(n,c),k.cancelled||(us(n,u),_||(ys(w)?setTimeout(k,w):ds(n,a,k)))}))),p&&p(n,k),b||_||k())}}function ys(e){return"number"===typeof e&&!isNaN(e)}function bs(e){if(o(e))return!1;var t=e.fns;return s(t)?bs(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function _s(e,t){!0!==t.data.show&&ms(t)}var ws=Q?{create:_s,activate:_s,remove:function(e,t){!0!==e.data.show?gs(e,t):t()}}:{},ks=[yo,wo,Lo,Mo,Go,ws],Is=ks.concat(fo),Ss=oo({nodeOps:Ji,modules:Is});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Ps(e,"input")}));var Cs={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?tt(n,"postpatch",(function(){Cs.componentUpdated(e,t,n)})):Es(e,t,n.context),e._vOptions=[].map.call(e.options,As)):("textarea"===n.tag||Mi(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",xs),e.addEventListener("compositionend",Ls),e.addEventListener("change",Ls),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Es(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,As);if(i.some((function(e,t){return!B(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return Os(e,i)})):t.value!==t.oldValue&&Os(t.value,i);o&&Ps(e,"change")}}}};function Es(e,t,n){Ts(e,t,n),(te||re)&&setTimeout((function(){Ts(e,t,n)}),0)}function Ts(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=e.options.length;a<c;a++)if(s=e.options[a],i)o=V(r,As(s))>-1,s.selected!==o&&(s.selected=o);else if(B(As(s),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function Os(e,t){return t.every((function(t){return!B(t,e)}))}function As(e){return"_value"in e?e._value:e.value}function xs(e){e.target.composing=!0}function Ls(e){e.target.composing&&(e.target.composing=!1,Ps(e.target,"input"))}function Ps(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Rs(e){return!e.componentInstance||e.data&&e.data.transition?e:Rs(e.componentInstance._vnode)}var Ns={bind:function(e,t,n){var r=t.value;n=Rs(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,ms(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Rs(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ms(n,(function(){e.style.display=e.__vOriginalDisplay})):gs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},$s={model:Cs,show:Ns},Ms={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ds(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Ds(Ut(t.children)):e}function js(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[E(r)]=i[r];return t}function Bs(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Vs(e){while(e=e.parent)if(e.data.transition)return!0}function Us(e,t){return t.key===e.key&&t.tag===e.tag}var Fs=function(e){return e.tag||Ct(e)},Hs=function(e){return"show"===e.name},zs={name:"transition",props:Ms,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Fs),n.length)){0;var r=this.mode;0;var i=n[0];if(Vs(this.$vnode))return i;var o=Ds(i);if(!o)return i;if(this._leaving)return Bs(e,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=js(this),c=this._vnode,l=Ds(c);if(o.data.directives&&o.data.directives.some(Hs)&&(o.data.show=!0),l&&l.data&&!Us(o,l)&&!Ct(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var d=l.data.transition=N({},a);if("out-in"===r)return this._leaving=!0,tt(d,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Bs(e,i);if("in-out"===r){if(Ct(o))return c;var h,p=function(){h()};tt(a,"afterEnter",p),tt(a,"enterCancelled",p),tt(d,"delayLeave",(function(e){h=e}))}}return i}}},Zs=N({tag:String,moveClass:String},Ms);delete Zs.mode;var Ws={props:Zs,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Cn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=js(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(qs),e.forEach(Gs),e.forEach(Ks),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;us(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(is,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(is,e),n._moveCb=null,ls(n,t))})}})))},methods:{hasMove:function(e,t){if(!es)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Yo(n,e)})),Jo(n,t),n.style.display="none",this.$el.appendChild(n);var r=ps(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function qs(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Gs(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ks(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Js={Transition:zs,TransitionGroup:Ws};Jr.config.mustUseProp=pi,Jr.config.isReservedTag=Pi,Jr.config.isReservedAttr=di,Jr.config.getTagNamespace=Ri,Jr.config.isUnknownElement=$i,N(Jr.options.directives,$s),N(Jr.options.components,Js),Jr.prototype.__patch__=Q?Ss:M,Jr.prototype.$mount=function(e,t){return e=e&&Q?Di(e):void 0,On(this,e,t)},Q&&setTimeout((function(){W.devtools&&de&&de.emit("init",Jr)}),0)},3168:function(e,t,n){"use strict";var r=n(2861),i=n.n(r);let o;o=class{get length(){return Object.keys(this).length}key(e){return Object.keys(this)[e]}setItem(e,t){this[e]=t.toString()}getItem(e){return this[e]}removeItem(e){delete this[e]}clear(){for(let e of Object.keys(this))delete this[e]}};class s{constructor(){this._queue=[],this._flushing=!1}enqueue(e){return this._queue.push(e),this._flushing?Promise.resolve():this.flushQueue()}flushQueue(){this._flushing=!0;const e=()=>{const t=this._queue.shift();if(t)return t.then(e);this._flushing=!1};return Promise.resolve(e())}}const a={replaceArrays:{arrayMerge:(e,t,n)=>t},concatArrays:{arrayMerge:(e,t,n)=>e.concat(...t)}};function c(e,t,n){return i()(e,t,a[n])}let u=JSON;class l{constructor(e){this._mutex=new s,this.subscriber=e=>t=>e.subscribe(t),"undefined"===typeof e&&(e={}),this.key=null!=e.key?e.key:"vuex",this.subscribed=!1,this.supportCircular=e.supportCircular||!1,this.supportCircular&&(u=n(939)),this.mergeOption=e.mergeOption||"replaceArrays";let t=!0;try{window.localStorage.getItem("")}catch(r){t=!1}if(e.storage)this.storage=e.storage;else if(t)this.storage=window.localStorage;else{if(!o)throw new Error("Neither 'window' is defined, nor 'MockStorage' is available");this.storage=new o}this.reducer=null!=e.reducer?e.reducer:null==e.modules?e=>e:t=>e.modules.reduce(((e,n)=>c(e,{[n]:t[n]},this.mergeOption)),{}),this.filter=e.filter||(e=>!0),this.strictMode=e.strictMode||!1,this.RESTORE_MUTATION=function(e,t){const n=c(e,t||{},this.mergeOption);for(const r of Object.keys(n))this._vm.$set(e,r,n[r])},this.asyncStorage=e.asyncStorage||!1,this.asyncStorage?(this.restoreState=null!=e.restoreState?e.restoreState:(e,t)=>t.getItem(e).then((e=>"string"===typeof e?this.supportCircular?u.parse(e||"{}"):JSON.parse(e||"{}"):e||{})),this.saveState=null!=e.saveState?e.saveState:(e,t,n)=>n.setItem(e,this.asyncStorage?c({},t||{},this.mergeOption):this.supportCircular?u.stringify(t):JSON.stringify(t)),this.plugin=e=>{e.restored=this.restoreState(this.key,this.storage).then((t=>{this.strictMode?e.commit("RESTORE_MUTATION",t):e.replaceState(c(e.state,t||{},this.mergeOption)),this.subscriber(e)(((e,t)=>{this.filter(e)&&this._mutex.enqueue(this.saveState(this.key,this.reducer(t),this.storage))})),this.subscribed=!0}))}):(this.restoreState=null!=e.restoreState?e.restoreState:(e,t)=>{const n=t.getItem(e);return"string"===typeof n?this.supportCircular?u.parse(n||"{}"):JSON.parse(n||"{}"):n||{}},this.saveState=null!=e.saveState?e.saveState:(e,t,n)=>n.setItem(e,this.supportCircular?u.stringify(t):JSON.stringify(t)),this.plugin=e=>{const t=this.restoreState(this.key,this.storage);this.strictMode?e.commit("RESTORE_MUTATION",t):e.replaceState(c(e.state,t||{},this.mergeOption)),this.subscriber(e)(((e,t)=>{this.filter(e)&&this.saveState(this.key,this.reducer(t),this.storage)})),this.subscribed=!0})}}t.ZP=l},2861:function(e){"use strict";var t=function(e){return n(e)&&!r(e)};function n(e){return!!e&&"object"===typeof e}function r(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||s(e)}var i="function"===typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103;function s(e){return e.$$typeof===o}function a(e){return Array.isArray(e)?[]:{}}function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?m(a(e),e,t):e}function u(e,t,n){return e.concat(t).map((function(e){return c(e,n)}))}function l(e,t){if(!t.customMerge)return m;var n=t.customMerge(e);return"function"===typeof n?n:m}function d(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}function h(e){return Object.keys(e).concat(d(e))}function p(e,t){try{return t in e}catch(n){return!1}}function f(e,t){return p(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function v(e,t,n){var r={};return n.isMergeableObject(e)&&h(e).forEach((function(t){r[t]=c(e[t],n)})),h(t).forEach((function(i){f(e,i)||(p(e,i)&&n.isMergeableObject(t[i])?r[i]=l(i,n)(e[i],t[i],n):r[i]=c(t[i],n))})),r}function m(e,n,r){r=r||{},r.arrayMerge=r.arrayMerge||u,r.isMergeableObject=r.isMergeableObject||t,r.cloneUnlessOtherwiseSpecified=c;var i=Array.isArray(n),o=Array.isArray(e),s=i===o;return s?i?r.arrayMerge(e,n,r):v(e,n,r):c(n,r)}m.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return m(e,n,t)}),{})};var g=m;e.exports=g},629:function(e,t,n){"use strict";
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */function r(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:r});else{var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[r].concat(e.init):r,n.call(this,e)}}function r(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(e){o&&(e._devtoolHook=o,o.emit("vuex:init",e),o.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){o.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){o.emit("vuex:action",e,t)}),{prepend:!0}))}function a(e,t){return e.filter(t)[0]}function c(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var n=a(t,(function(t){return t.original===e}));if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach((function(n){r[n]=c(e[n],t)})),r}function u(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function l(e){return null!==e&&"object"===typeof e}function d(e){return e&&"function"===typeof e.then}function h(e,t){return function(){return e(t)}}var p=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},p.prototype.addChild=function(e,t){this._children[e]=t},p.prototype.removeChild=function(e){delete this._children[e]},p.prototype.getChild=function(e){return this._children[e]},p.prototype.hasChild=function(e){return e in this._children},p.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},p.prototype.forEachChild=function(e){u(this._children,e)},p.prototype.forEachGetter=function(e){this._rawModule.getters&&u(this._rawModule.getters,e)},p.prototype.forEachAction=function(e){this._rawModule.actions&&u(this._rawModule.actions,e)},p.prototype.forEachMutation=function(e){this._rawModule.mutations&&u(this._rawModule.mutations,e)},Object.defineProperties(p.prototype,f);var v=function(e){this.register([],e,!1)};function m(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;m(e.concat(r),t.getChild(r),n.modules[r])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},v.prototype.update=function(e){m([],this.root,e)},v.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new p(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&u(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g;var y=function(e){var t=this;void 0===e&&(e={}),!g&&"undefined"!==typeof window&&window.Vue&&P(window.Vue);var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new g,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;I(this,u,[],this._modules.root),k(this,u),n.forEach((function(e){return e(t)}));var l=void 0!==e.devtools?e.devtools:g.config.devtools;l&&s(this)},b={state:{configurable:!0}};function _(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function w(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;I(e,n,[],e._modules.root,!0),k(e,n,t)}function k(e,t,n){var r=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};u(i,(function(t,n){o[n]=h(t,e),Object.defineProperty(e.getters,n,{get:function(){return e._vm[n]},enumerable:!0})}));var s=g.config.silent;g.config.silent=!0,e._vm=new g({data:{$$state:t},computed:o}),g.config.silent=s,e.strict&&A(e),r&&(n&&e._withCommit((function(){r._data.$$state=null})),g.nextTick((function(){return r.$destroy()})))}function I(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=x(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){g.set(a,c,r.state)}))}var u=r.context=S(e,s,n);r.forEachMutation((function(t,n){var r=s+n;E(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;T(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;O(e,r,t,u)})),r.forEachChild((function(r,o){I(e,t,n.concat(o),r,i)}))}function S(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=L(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=t+c),e.dispatch(c,s)},commit:r?e.commit:function(n,r,i){var o=L(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c),e.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return C(e,t)}},state:{get:function(){return x(e.state,n)}}}),i}function C(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function E(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return d(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function O(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function x(e,t){return t.reduce((function(e,t){return e[t]}),e)}function L(e,t,n){return l(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}function P(e){g&&e===g||(g=e,r(g))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(e){0},y.prototype.commit=function(e,t,n){var r=this,i=L(e,t,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},y.prototype.dispatch=function(e,t){var n=this,r=L(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){0}t(e)}))}))}},y.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return _(n,this._actionSubscribers,t)},y.prototype.watch=function(e,t,n){var r=this;return this._watcherVM.$watch((function(){return e(r.state,r.getters)}),t,n)},y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),I(this,this.state,e,this._modules.get(e),n.preserveState),k(this,this.state)},y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=x(t.state,e.slice(0,-1));g.delete(n,e[e.length-1])})),w(this)},y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},y.prototype.hotUpdate=function(e){this._modules.update(e),w(this,!0)},y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(y.prototype,b);var R=V((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=U(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),N=V((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=U(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),$=V((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||U(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),M=V((function(e,t){var n={};return j(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=U(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),D=function(e){return{mapState:R.bind(null,e),mapGetters:$.bind(null,e),mapMutations:N.bind(null,e),mapActions:M.bind(null,e)}};function j(e){return B(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function B(e){return Array.isArray(e)||l(e)}function V(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function U(e,t,n){var r=e._modulesNamespaceMap[n];return r}function F(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var n=e.filter;void 0===n&&(n=function(e,t,n){return!0});var r=e.transformer;void 0===r&&(r=function(e){return e});var i=e.mutationTransformer;void 0===i&&(i=function(e){return e});var o=e.actionFilter;void 0===o&&(o=function(e,t){return!0});var s=e.actionTransformer;void 0===s&&(s=function(e){return e});var a=e.logMutations;void 0===a&&(a=!0);var u=e.logActions;void 0===u&&(u=!0);var l=e.logger;return void 0===l&&(l=console),function(e){var d=c(e.state);"undefined"!==typeof l&&(a&&e.subscribe((function(e,o){var s=c(o);if(n(e,d,s)){var a=Z(),u=i(e),h="mutation "+e.type+a;H(l,h,t),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(d)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),z(l)}d=s})),u&&e.subscribeAction((function(e,n){if(o(e,n)){var r=Z(),i=s(e),a="action "+e.type+r;H(l,a,t),l.log("%c action","color: #03A9F4; font-weight: bold",i),z(l)}})))}}function H(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch(i){e.log(t)}}function z(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function Z(){var e=new Date;return" @ "+q(e.getHours(),2)+":"+q(e.getMinutes(),2)+":"+q(e.getSeconds(),2)+"."+q(e.getMilliseconds(),3)}function W(e,t){return new Array(t+1).join(e)}function q(e,t){return W("0",t-e.toString().length)+e}var G={Store:y,install:P,version:"3.6.2",mapState:R,mapMutations:N,mapGetters:$,mapActions:M,createNamespacedHelpers:D,createLogger:F};t.ZP=G},939:function(e,t){"use strict";
/*! (c) 2020 Andrea Giammarchi */const{parse:n,stringify:r}=JSON,{keys:i}=Object,o=String,s="string",a={},c="object",u=(e,t)=>t,l=e=>e instanceof o?o(e):e,d=(e,t)=>typeof t===s?new o(t):t,h=(e,t,n,r)=>{const s=[];for(let u=i(n),{length:l}=u,d=0;d<l;d++){const i=u[d],l=n[i];if(l instanceof o){const o=e[l];typeof o!==c||t.has(o)?n[i]=r.call(n,i,o):(t.add(o),n[i]=a,s.push({k:i,a:[e,t,o,r]}))}else n[i]!==a&&(n[i]=r.call(n,i,l))}for(let{length:i}=s,o=0;o<i;o++){const{k:e,a:t}=s[o];n[e]=r.call(n,e,h.apply(null,t))}return n},p=(e,t,n)=>{const r=o(t.push(n)-1);return e.set(n,r),r},f=(e,t)=>{const r=n(e,d).map(l),i=r[0],o=t||u,s=typeof i===c&&i?h(r,new Set,i,o):i;return o.call({"":s},"",s)};t.parse=f;const v=(e,t,n)=>{const i=t&&typeof t===c?(e,n)=>""===e||-1<t.indexOf(e)?n:void 0:t||u,o=new Map,a=[],l=[];let d=+p(o,a,i.call({"":e},"",e)),h=!d;while(d<a.length)h=!0,l[d]=r(a[d++],f,n);return"["+l.join(",")+"]";function f(e,t){if(h)return h=!h,t;const n=i.call(this,e,t);switch(typeof n){case c:if(null===n)return n;case s:return o.get(n)||p(o,a,n)}return n}};t.stringify=v;const m=e=>n(v(e));t.toJSON=m;const g=e=>f(r(e));t.fromJSON=g},8180:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(4444),i=n(8463),o=n(5816),s=n(3333);
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
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:d,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o.initializeApp(i,s);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function d(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
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
 */function d(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:d,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const h=d(),p=new s.Yd("@firebase/app-compat"),f="@firebase/app-compat",v="0.2.13";
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
 */if((0,r.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const g=h;m()},5816:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return o.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return oe},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return fe},_components:function(){return ce},_getProvider:function(){return he},_registerComponent:function(){return de},_removeServiceInstance:function(){return pe},deleteApp:function(){return ke},getApp:function(){return _e},getApps:function(){return we},initializeApp:function(){return be},onLog:function(){return Se},registerVersion:function(){return Ie},setLogLevel:function(){return Ce}});var r=n(8463),i=n(3333),o=n(4444);const s=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,v=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(k(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),v.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||p.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(I(this),t),k(d.get(this))}:function(...t){return k(e.apply(I(this),t))}:function(t,...n){const r=e.call(I(this),t,...n);return p.set(r,t.sort?t.sort():[t]),k(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&g(e),s(e,u())?new Proxy(e,y):e)}function k(e){if(e instanceof IDBRequest)return m(e);if(f.has(e))return f.get(e);const t=w(e);return t!==e&&(f.set(e,t),v.set(t,e)),t}const I=e=>v.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=k(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(k(s.result),e.oldVersion,e.newVersion,k(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],T=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return T.set(t,o),o}b((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
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
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const L="@firebase/app",P="0.9.13",R=new i.Yd("@firebase/app"),N="@firebase/app-compat",$="@firebase/analytics-compat",M="@firebase/analytics",D="@firebase/app-check-compat",j="@firebase/app-check",B="@firebase/auth",V="@firebase/auth-compat",U="@firebase/database",F="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",Z="@firebase/installations",W="@firebase/installations-compat",q="@firebase/messaging",G="@firebase/messaging-compat",K="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.23.0",oe="[DEFAULT]",se={[L]:"fire-core",[N]:"fire-core-compat",[M]:"fire-analytics",[$]:"fire-analytics-compat",[j]:"fire-app-check",[D]:"fire-app-check-compat",[B]:"fire-auth",[V]:"fire-auth-compat",[U]:"fire-rtdb",[F]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[Z]:"fire-iid",[W]:"fire-iid-compat",[q]:"fire-fcm",[G]:"fire-fcm-compat",[K]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function de(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e,t,n=oe){he(e,t).clearInstance(n)}function fe(){ce.clear()}
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
 */const ve={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},me=new o.LL("app","Firebase",ve);
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
class ge{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
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
 */const ye=ie;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!==typeof s||!s)throw me.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw me.create("no-options");const a=ae.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw me.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ce.values())c.addComponent(r);const u=new ge(n,i,c);return ae.set(s,u),u}function _e(e=oe){const t=ae.get(e);if(!t&&e===oe&&(0,o.aH)())return be();if(!t)throw me.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function ke(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ie(e,t,n){var i;let o=null!==(i=se[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}de(new r.wA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}function Se(e,t){if(null!==e&&"function"!==typeof e)throw me.create("invalid-log-argument");(0,i.Am)(e,t)}function Ce(e){(0,i.Ub)(e)}
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
 */const Ee="firebase-heartbeat-database",Te=1,Oe="firebase-heartbeat-store";let Ae=null;function xe(){return Ae||(Ae=S(Ee,Te,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oe)}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function Le(e){try{const t=await xe(),n=await t.transaction(Oe).objectStore(Oe).get(Re(e));return n}catch(t){if(t instanceof o.ZR)R.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function Pe(e,t){try{const n=await xe(),r=n.transaction(Oe,"readwrite"),i=r.objectStore(Oe);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof o.ZR)R.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
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
 */const Ne=1024,$e=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Be(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=De();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=$e})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=De(),{heartbeatsToSend:t,unsentEntries:n}=je(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function De(){const e=new Date;return e.toISOString().substring(0,10)}function je(e,t=Ne){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Be{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Le(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ve(e){return(0,o.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Ue(e){de(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),de(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),Ie(L,P,e),Ie(L,P,"esm2017"),Ie("fire-js","")}Ue("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Am:function(){return d},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},4866:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(8180),i="firebase",o="9.23.0";
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
r.Z.registerVersion(i,o,"app-compat")},938:function(e,t,n){"use strict";var r=n(8180),i=n(4444),o=n(5816);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(3333),c=n(8463);
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
function d(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p=d,f=h,v=new i.LL("auth","Firebase",h()),m=new a.Yd("@firebase/auth");function g(e,...t){m.logLevel<=a["in"].WARN&&m.warn(`Auth (${o.SDK_VERSION}): ${e}`,...t)}function y(e,...t){m.logLevel<=a["in"].ERROR&&m.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}
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
 */function b(e,...t){throw I(e,...t)}function _(e,...t){return I(e,...t)}function w(e,t,n){const r=Object.assign(Object.assign({},f()),{[t]:n}),o=new i.LL("auth","Firebase",r);return o.create(t,{appName:e.name})}function k(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&b(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return v.create(e,...t)}function S(e,t,...n){if(!e)throw I(t,...n)}function C(e){const t="INTERNAL ASSERTION FAILED: "+e;throw y(t),new Error(t)}function E(e,t){e||C(t)}
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
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===A()||"https:"===A()}function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function L(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function R(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const $={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},M=new P(3e4,6e4);
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
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,r,o={}){return B(e,o,(async()=>{let o={},s={};r&&("GET"===t?s=r:o={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function B(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$),t);try{const t=new F(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw H(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw H(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw w(e,a,s);b(e,a)}}catch(o){if(o instanceof i.ZR)throw o;b(e,"network-request-failed",{message:String(o)})}}async function V(e,t,n,r,i={}){const o=await j(e,t,n,r,i);return"mfaPendingCredential"in o&&b(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_(this.auth,"network-request-failed"))),M.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function z(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function Z(e,t){return j(e,"POST","/v1/accounts:update",t)}async function W(e,t){return j(e,"POST","/v1/accounts:lookup",t)}
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
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function G(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),o=J(r);S(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:r,authTime:q(K(o.auth_time)),issuedAtTime:q(K(o.iat)),expirationTime:q(K(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function J(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return y("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(y("Failed to decode base64 JWT payload"),null)}catch(o){return y("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function Y(e){const t=J(e);return S(t,"internal-error"),S("undefined"!==typeof t.exp,"internal-error"),S("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&Q(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ne(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,W(n,{idToken:r}));S(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?oe(o.providerUserInfo):[],a=ie(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new te(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function re(e){const t=(0,i.m9)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function oe(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function se(e,t){const n=await B(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,s=U(e,r,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S("undefined"!==typeof e.idToken,"internal-error"),S("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ae;return n&&(S("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(S("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(S("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return C("not implemented")}}
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
 */function ce(e,t){S("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new te(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return re(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await X(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:k}=t;S(y&&k,e,"internal-error");const I=ae.fromJSON(this.name,k);S("string"===typeof y,e,"internal-error"),ce(l,e.name),ce(d,e.name),S("boolean"===typeof b,e,"internal-error"),S("boolean"===typeof _,e,"internal-error"),ce(h,e.name),ce(p,e.name),ce(f,e.name),ce(v,e.name),ce(m,e.name),ce(g,e.name);const C=new ue({uid:y,auth:e,email:d,emailVerified:b,displayName:l,isAnonymous:_,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:I,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ue({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ne(i),i}}
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
 */const le=new Map;function de(e){E(e instanceof Function,"Expected a class definition");let t=le.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,le.set(e,t),t)}
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
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const pe=he;
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
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class ve{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ve(de(pe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||de(pe);const o=fe(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=ue._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new ve(i,e,n)):new ve(i,e,n)}}
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
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ke(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,i.z$)()){return/crios\//i.test(e)}function _e(e=(0,i.z$)()){return/iemobile/i.test(e)}function we(e=(0,i.z$)()){return/android/i.test(e)}function ke(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ie(e=(0,i.z$)()){return/webos/i.test(e)}function Se(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ce(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ee(e=(0,i.z$)()){var t;return Se(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Te(){return(0,i.w1)()&&10===document.documentMode}function Oe(e=(0,i.z$)()){return Se(e)||we(e)||Ie(e)||ke(e)||/windows phone/i.test(e)||_e(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */async function Le(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Pe(e,t){return j(e,"GET","/v2/recaptchaConfig",D(e,t))}
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
 */function Re(e){return void 0!==e&&void 0!==e.getResponse}function Ne(e){return void 0!==e&&void 0!==e.enterprise}class $e{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Me(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function De(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Me().appendChild(r)}))}function je(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="https://www.google.com/recaptcha/enterprise.js?render=",Ve="recaptcha-enterprise",Ue="NO_RECAPTCHA";class Fe{constructor(e){this.type=Ve,this.auth=We(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Pe(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $e(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;Ne(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ue)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&Ne(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));De(Be+n).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function He(e,t,n,r=!1){const i=new Fe(e);let o;try{o=await i.verify(n)}catch(a){o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
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
 */class ze{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class Ze{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qe(this),this.idTokenSubscription=new qe(this),this.beforeStateQueue=new ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=de(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ve.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===r||void 0===r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null===s||void 0===s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(de(e))}))}async initializeRecaptchaConfig(){const e=await Pe(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new $e(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Fe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&de(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[de(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&g(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function We(e){return(0,i.m9)(e)}class qe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Ge(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(de);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ke(e,t,n){const r=We(e);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),o=Je(t),{host:s,port:a}=Ye(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Qe()}function Je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Xe(t)}}}function Xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Qe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return C("not implemented")}_getIdTokenResponse(e){return C("not implemented")}_linkToIdToken(e,t){return C("not implemented")}_getReauthenticationResolver(e){return C("not implemented")}}
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
 */async function tt(e,t){return j(e,"POST","/v1/accounts:resetPassword",D(e,t))}async function nt(e,t){return j(e,"POST","/v1/accounts:update",t)}async function rt(e,t){return j(e,"POST","/v1/accounts:update",D(e,t))}
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
 */async function it(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function ot(e,t){return j(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function st(e,t){return ot(e,t)}async function at(e,t){return ot(e,t)}async function ct(e,t){return ot(e,t)}async function ut(e,t){return ot(e,t)}
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
 */async function lt(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function dt(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
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
 */class ht extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ht(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ht(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await He(e,n,"signInWithPassword");return it(e,t)}return it(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await He(e,n,"signInWithPassword");return it(e,t)}return Promise.reject(t)}));case"emailLink":return lt(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dt(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function pt(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
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
 */const ft="http://localhost";class vt extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new vt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,pt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pt(e,t)}buildRequest(){const e={requestUri:ft,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
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
 */async function mt(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function gt(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function yt(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const bt={["USER_NOT_FOUND"]:"user-not-found"};async function _t(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),bt)}
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
 */class wt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new wt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new wt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return gt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return yt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _t(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new wt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function kt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function It(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],o=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return o||r||n||t||e}class St{constructor(e){var t,n,r,o,s,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=kt(null!==(r=c["mode"])&&void 0!==r?r:null);S(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=It(e);try{return new St(t)}catch(n){return null}}}
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
class Ct{constructor(){this.providerId=Ct.PROVIDER_ID}static credential(e,t){return ht._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=St.parseLink(t);return S(n,"argument-error"),ht._fromEmailAndCode(e,n.code,n.tenantId)}}Ct.PROVIDER_ID="password",Ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Tt extends Et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ot extends Tt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return S("providerId"in t&&"signInMethod"in t,"argument-error"),vt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),vt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ot.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ot.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:s}=e;if(!n&&!r&&!t&&!i)return null;if(!s)return null;try{return new Ot(s)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch(a){return null}}}
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
 */class At extends Tt{constructor(){super("facebook.com")}static credential(e){return vt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch(t){return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
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
class xt extends Tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return xt.credential(t,n)}catch(r){return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com",xt.PROVIDER_ID="google.com";
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
class Lt extends Tt{constructor(){super("github.com")}static credential(e){return vt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch(t){return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com",Lt.PROVIDER_ID="github.com";
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
const Pt="http://localhost";class Rt extends et{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return pt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,pt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Rt(n,i):null}static _create(e,t){return new Rt(e,t)}buildRequest(){return{requestUri:Pt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */const Nt="saml.";class $t extends Et{constructor(e){S(e.startsWith(Nt),"argument-error"),super(e)}static credentialFromResult(e){return $t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Rt.fromJSON(e);return S(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Rt._create(n,t)}catch(r){return null}}}
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
 */class Mt extends Tt{constructor(){super("twitter.com")}static credential(e,t){return vt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mt.credential(t,n)}catch(r){return null}}}
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
async function Dt(e,t){return V(e,"POST","/v1/accounts:signUp",D(e,t))}
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
 */Mt.TWITTER_SIGN_IN_METHOD="twitter.com",Mt.PROVIDER_ID="twitter.com";class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ue._fromIdTokenResponse(e,n,r),o=Bt(n),s=new jt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Bt(n);return new jt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function Vt(e){var t;const n=We(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new jt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Dt(n,{returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
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
 */class Ut extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ut(e,t,n,r)}}function Ft(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ut._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Ht(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
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
 */async function zt(e,t){const n=(0,i.m9)(e);await Wt(!0,n,t);const{providerUserInfo:r}=await Z(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),o=Ht(r||[]);return n.providerData=n.providerData.filter((e=>o.has(e.providerId))),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Zt(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return jt._forOperation(e,"link",r)}async function Wt(e,t,n){await ne(t);const r=Ht(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";S(r.has(n)===e,t.auth,i)}
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
 */async function qt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await X(e,Ft(r,i,t,e),n);S(o.idToken,r,"internal-error");const s=J(o.idToken);S(s,r,"internal-error");const{sub:a}=s;return S(e.uid===a,r,"user-mismatch"),jt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&b(r,"user-mismatch"),o}}
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
 */async function Gt(e,t,n=!1){const r="signIn",i=await Ft(e,r,t),o=await jt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Kt(e,t){return Gt(We(e),t)}async function Jt(e,t){const n=(0,i.m9)(e);return await Wt(!1,n,t.providerId),Zt(n,t)}async function Yt(e,t){return qt((0,i.m9)(e),t)}
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
 */async function Xt(e,t){return V(e,"POST","/v1/accounts:signInWithCustomToken",D(e,t))}
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
 */async function Qt(e,t){const n=We(e),r=await Xt(n,{token:t,returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
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
 */class en{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tn._fromServerResponse(e,t):"totpInfo"in t?nn._fromServerResponse(e,t):b(e,"internal-error")}}class tn extends en{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tn(t)}}class nn extends en{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new nn(t)}}
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
 */function rn(e,t,n){var r;S((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),S("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function on(e,t,n){var r;const i=We(e),o={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await He(i,o,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}else n&&rn(i,o,n),await at(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const e=await He(i,o,"getOobCode",!0);n&&rn(i,e,n),await at(i,e)}}))}async function sn(e,t,n){await tt((0,i.m9)(e),{oobCode:t,newPassword:n})}async function an(e,t){await rt((0,i.m9)(e),{oobCode:t})}async function cn(e,t){const n=(0,i.m9)(e),r=await tt(n,{oobCode:t}),o=r.requestType;switch(S(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=en._fromServerResponse(We(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:o}}async function un(e,t){const{data:n}=await cn((0,i.m9)(e),t);return n.email}async function ln(e,t,n){var r;const i=We(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await He(i,o,"signUpPassword");s=Dt(i,e)}else s=Dt(i,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await He(i,o,"signUpPassword");return Dt(i,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await jt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function dn(e,t,n){return Kt((0,i.m9)(e),Ct.credential(t,n))}
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
 */async function hn(e,t,n){var r;const i=We(e),o={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function s(e,t){S(t.handleCodeInApp,i,"argument-error"),t&&rn(i,e,t)}if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await He(i,o,"getOobCode",!0);s(e,n),await ct(i,e)}else s(o,n),await ct(i,o).catch((async e=>{if("auth/missing-recaptcha-token"!==e.code)return Promise.reject(e);{console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await He(i,o,"getOobCode",!0);s(e,n),await ct(i,e)}}))}function pn(e,t){const n=St.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function fn(e,t,n){const r=(0,i.m9)(e),o=Ct.credentialWithLink(t,n||T());return S(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Kt(r,o)}
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
 */async function vn(e,t){return j(e,"POST","/v1/accounts:createAuthUri",D(e,t))}
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
 */async function mn(e,t){const n=O()?T():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:o}=await vn((0,i.m9)(e),r);return o||[]}async function gn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),o={requestType:"VERIFY_EMAIL",idToken:r};t&&rn(n.auth,o,t);const{email:s}=await st(n.auth,o);s!==e.email&&await e.reload()}async function yn(e,t,n){const r=(0,i.m9)(e),o=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:o,newEmail:t};n&&rn(r.auth,s,n);const{email:a}=await ut(r.auth,s);a!==e.email&&await e.reload()}
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
 */async function bn(e,t){return j(e,"POST","/v1/accounts:update",t)}
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
 */async function _n(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),o=await r.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(r,bn(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function wn(e,t){return In((0,i.m9)(e),t,null)}function kn(e,t){return In((0,i.m9)(e),null,t)}async function In(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await X(e,nt(r,o));await e._updateTokensIfNecessary(s,!0)}
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
 */function Sn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new Cn(o,e)}}if(!r)return null;switch(r){case"facebook.com":return new Tn(o,i);case"github.com":return new On(o,i);case"google.com":return new An(o,i);case"twitter.com":return new xn(o,i,e.screenName||null);case"custom":case"anonymous":return new Cn(o,null);default:return new Cn(o,r,i)}}class Cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class En extends Cn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Tn extends Cn{constructor(e,t){super(e,"facebook.com",t)}}class On extends En{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class An extends Cn{constructor(e,t){super(e,"google.com",t)}}class xn extends En{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Ln(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Sn(n)}
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
 */class Pn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Pn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Pn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Pn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Pn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class Rn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=We(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>en._fromServerResponse(n,e)));S(r.mfaPendingCredential,n,"internal-error");const o=Pn._fromMfaPendingCredential(r.mfaPendingCredential);return new Rn(o,i,(async e=>{const i=await e._process(n,o);delete r.mfaInfo,delete r.mfaPendingCredential;const s=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await jt._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return S(t.user,n,"internal-error"),jt._forOperation(t.user,t.operationType,s);default:b(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Nn(e,t){var n;const r=(0,i.m9)(e),o=t;return S(t.customData.operationType,r,"argument-error"),S(null===(n=o.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Rn._fromError(r,o)}
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
 */function $n(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function Mn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Dn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function jn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}function Bn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:withdraw",D(e,t))}class Vn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>en._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Vn(e)}async getSession(){return Pn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await X(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await X(this.user,Bn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(r){throw r}}}const Un=new WeakMap;function Fn(e){const t=(0,i.m9)(e);return Un.has(t)||Un.set(t,Vn._fromUser(t)),Un.get(t)}const Hn="__sak";
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
 */class zn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hn,"1"),this.storage.removeItem(Hn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Zn(){const e=(0,i.z$)();return ye(e)||Se(e)}const Wn=1e3,qn=10;class Gn extends zn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zn()&&Ae(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Wn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gn.type="LOCAL";const Kn=Gn;
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
 */class Jn extends zn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jn.type="SESSION";const Yn=Jn;
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
 */function Xn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class Qn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Qn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await Xn(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function er(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Qn.receivers=[];class tr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const c=er("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
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
 */function nr(){return window}function rr(e){nr().location.href=e}
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
 */function ir(){return"undefined"!==typeof nr()["WorkerGlobalScope"]&&"function"===typeof nr()["importScripts"]}async function or(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function sr(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ar(){return ir()?self:null}
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
 */const cr="firebaseLocalStorageDb",ur=1,lr="firebaseLocalStorage",dr="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function pr(e,t){return e.transaction([lr],t?"readwrite":"readonly").objectStore(lr)}function fr(){const e=indexedDB.deleteDatabase(cr);return new hr(e).toPromise()}function vr(){const e=indexedDB.open(cr,ur);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(lr,{keyPath:dr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(lr)?t(n):(n.close(),await fr(),t(await vr()))}))}))}async function mr(e,t,n){const r=pr(e,!0).put({[dr]:t,value:n});return new hr(r).toPromise()}async function gr(e,t){const n=pr(e,!1).get(t),r=await new hr(n).toPromise();return void 0===r?null:r.value}function yr(e,t){const n=pr(e,!0).delete(t);return new hr(n).toPromise()}const br=800,_r=3;class wr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vr()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>_r)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qn._getInstance(ar()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await or(),!this.activeServiceWorker)return;this.sender=new tr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&sr()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vr();return await mr(e,Hn,"1"),await yr(e,Hn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>mr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>gr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>yr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=pr(e,!1).getAll();return new hr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),br)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wr.type="LOCAL";const kr=wr;
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
 */function Ir(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function Sr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}function Cr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
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
 */const Er=500,Tr=6e4,Or=1e12;class Ar{constructor(e){this.auth=e,this.counter=Or,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new xr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Or;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Or;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Or;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class xr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;S(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Lr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Tr)}),Er))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Lr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
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
 */const Pr=je("rcb"),Rr=new P(3e4,6e4),Nr="https://www.google.com/recaptcha/api.js?";class $r{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=nr().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return S(Mr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Re(nr().grecaptcha)?Promise.resolve(nr().grecaptcha):new Promise(((n,r)=>{const o=nr().setTimeout((()=>{r(_(e,"network-request-failed"))}),Rr.get());nr()[Pr]=()=>{nr().clearTimeout(o),delete nr()[Pr];const i=nr().grecaptcha;if(!i||!Re(i))return void r(_(e,"internal-error"));const s=i.render;i.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const s=`${Nr}?${(0,i.xO)({onload:Pr,render:"explicit",hl:t})}`;De(s).catch((()=>{clearTimeout(o),r(_(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=nr().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Mr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Dr{async load(e){return new Ar(e)}clearedOneInstance(){}}
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
 */const jr="recaptcha",Br={theme:"light",type:"image"};class Vr{constructor(e,t=Object.assign({},Br),n){this.parameters=t,this.type=jr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(n),this.isInvisible="invisible"===this.parameters.size,S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;S(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Dr:new $r,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=nr()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(O()&&!ir(),this.auth,"internal-error"),await Ur(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Le(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ur(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
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
 */class Fr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=wt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Hr(e,t,n){const r=We(e),o=await Wr(r,t,(0,i.m9)(n));return new Fr(o,(e=>Kt(r,e)))}async function zr(e,t,n){const r=(0,i.m9)(e);await Wt(!1,r,"phone");const o=await Wr(r.auth,t,(0,i.m9)(n));return new Fr(o,(e=>Jt(r,e)))}async function Zr(e,t,n){const r=(0,i.m9)(e),o=await Wr(r.auth,t,(0,i.m9)(n));return new Fr(o,(e=>Yt(r,e)))}async function Wr(e,t,n){var r;const i=await n.verify();try{let o;if(S("string"===typeof i,e,"argument-error"),S(n.type===jr,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){S("enroll"===t.type,e,"internal-error");const n=await $n(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{S("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;S(n,e,"missing-multi-factor-info");const s=await Ir(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await mt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function qr(e,t){await Zt((0,i.m9)(e),t)}
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
 */class Gr{constructor(e){this.providerId=Gr.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,t){return Wr(this.auth,e,(0,i.m9)(t))}static credential(e,t){return wt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Gr.credentialFromTaggedObject(t)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?wt._fromTokenResponse(t,n):null}}
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
function Kr(e,t){return t?de(t):(S(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Gr.PROVIDER_ID="phone",Gr.PHONE_SIGN_IN_METHOD="phone";class Jr extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yr(e){return Gt(e.auth,new Jr(e),e.bypassAuthState)}function Xr(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),qt(n,new Jr(e),e.bypassAuthState)}async function Qr(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Zt(n,new Jr(e),e.bypassAuthState)}
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
 */class ei{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yr;case"linkViaPopup":case"linkViaRedirect":return Qr;case"reauthViaPopup":case"reauthViaRedirect":return Xr;default:b(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const ti=new P(2e3,1e4);async function ni(e,t,n){const r=We(e);k(e,t,Et);const i=Kr(r,n),o=new oi(r,"signInViaPopup",t,i);return o.executeNotNull()}async function ri(e,t,n){const r=(0,i.m9)(e);k(r.auth,t,Et);const o=Kr(r.auth,n),s=new oi(r.auth,"reauthViaPopup",t,o,r);return s.executeNotNull()}async function ii(e,t,n){const r=(0,i.m9)(e);k(r.auth,t,Et);const o=Kr(r.auth,n),s=new oi(r.auth,"linkViaPopup",t,o,r);return s.executeNotNull()}class oi extends ei{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,oi.currentPopupAction&&oi.currentPopupAction.cancel(),oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,ti.get())};e()}}oi.currentPopupAction=null;
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
const si="pendingRedirect",ai=new Map;class ci extends ei{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ai.get(this.auth._key());if(!e){try{const t=await ui(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ai.set(this.auth._key(),e)}return this.bypassAuthState||ai.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ui(e,t){const n=fi(t),r=pi(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function li(e,t){return pi(e)._set(fi(t),"true")}function di(){ai.clear()}function hi(e,t){ai.set(e._key(),t)}function pi(e){return de(e._redirectPersistence)}function fi(e){return fe(si,e.config.apiKey,e.name)}
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
 */function vi(e,t,n){return mi(e,t,n)}async function mi(e,t,n){const r=We(e);k(e,t,Et),await r._initializationPromise;const i=Kr(r,n);return await li(i,r),i._openRedirect(r,t,"signInViaRedirect")}function gi(e,t,n){return yi(e,t,n)}async function yi(e,t,n){const r=(0,i.m9)(e);k(r.auth,t,Et),await r.auth._initializationPromise;const o=Kr(r.auth,n);await li(o,r.auth);const s=await Ii(r);return o._openRedirect(r.auth,t,"reauthViaRedirect",s)}function bi(e,t,n){return _i(e,t,n)}async function _i(e,t,n){const r=(0,i.m9)(e);k(r.auth,t,Et),await r.auth._initializationPromise;const o=Kr(r.auth,n);await Wt(!1,r,t.providerId),await li(o,r.auth);const s=await Ii(r);return o._openRedirect(r.auth,t,"linkViaRedirect",s)}async function wi(e,t){return await We(e)._initializationPromise,ki(e,t,!1)}async function ki(e,t,n=!1){const r=We(e),i=Kr(r,t),o=new ci(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function Ii(e){const t=er(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */const Si=6e5;class Ci{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Oi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ti(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Si&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ei(e))}saveEventToCache(e){this.cachedEventUids.add(Ei(e)),this.lastProcessedEventTime=Date.now()}}function Ei(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ti({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Oi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ti(e);default:return!1}}
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
 */async function Ai(e,t={}){return j(e,"GET","/v1/projects",t)}
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
 */const xi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Li=/^https?/;async function Pi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ai(e);for(const r of t)try{if(Ri(r))return}catch(n){}b(e,"unauthorized-domain")}function Ri(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Li.test(n))return!1;if(xi.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const Ni=new P(3e4,6e4);function $i(){const e=nr().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Mi(e){return new Promise(((t,n)=>{var r,i,o;function s(){$i(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$i(),n(_(e,"network-request-failed"))},timeout:Ni.get()})}if(null===(i=null===(r=nr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=nr().gapi)||void 0===o?void 0:o.load)){const t=je("iframefcb");return nr()[t]=()=>{gapi.load?s():n(_(e,"network-request-failed"))},De(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Di=null,e}))}let Di=null;function ji(e){return Di=Di||Mi(e),Di}
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
 */const Bi=new P(5e3,15e3),Vi="__/auth/iframe",Ui="emulator/auth/iframe",Fi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zi(e){const t=e.config;S(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Ui):`https://${e.config.authDomain}/${Vi}`,r={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},s=Hi.get(e.config.apiHost);s&&(r.eid=s);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Zi(e){const t=await ji(e),n=nr().gapi;return S(n,e,"internal-error"),t.open({where:document.body,url:zi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_(e,"network-request-failed"),o=nr().setTimeout((()=>{r(i)}),Bi.get());function s(){nr().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}
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
 */const Wi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qi=500,Gi=600,Ki="_blank",Ji="http://localhost";class Yi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Xi(e,t,n,r=qi,o=Gi){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Wi),{width:r.toString(),height:o.toString(),top:s,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=be(l)?Ki:n),ge(l)&&(t=t||Ji,u.scrollbars="yes");const d=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ee(l)&&"_self"!==c)return Qi(t||"",c),new Yi(null);const h=window.open(t||"",c,d);S(h,e,"popup-blocked");try{h.focus()}catch(p){}return new Yi(h)}function Qi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const eo="__/auth/handler",to="emulator/auth/handler",no=encodeURIComponent("fac");async function ro(e,t,n,r,s,a){S(e.config.authDomain,e,"auth-domain-config-required"),S(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:o.SDK_VERSION,eventId:s};if(t instanceof Et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];const l=await e._getAppCheckToken(),d=l?`#${no}=${encodeURIComponent(l)}`:"";return`${io(e)}?${(0,i.xO)(u).slice(1)}${d}`}function io({config:e}){return e.emulator?R(e,to):`https://${e.authDomain}/${eo}`}
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
 */const oo="webStorageSupport";class so{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=ki,this._overrideRedirectResult=hi}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ro(e,t,n,T(),r);return Xi(e,o,er())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await ro(e,t,n,T(),r);return rr(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zi(e),n=new Ci(e);return t.register("authEvent",(t=>{S(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(oo,{type:oo},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[oo];void 0!==i&&t(!!i),b(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ye()||Se()}}const ao=so;class co{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return C("unexpected MultiFactorSessionType")}}}class uo extends co{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uo(e)}_finalizeEnroll(e,t,n){return Mn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Sr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lo{constructor(){}static assertion(e){return uo._fromCredential(e)}}lo.FACTOR_ID="phone";class ho{static assertionForEnrollment(e,t){return po._fromSecret(e,t)}static assertionForSignIn(e,t){return po._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;S("undefined"!==typeof t.auth,"internal-error");const n=await Dn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return fo._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}ho.FACTOR_ID="totp";class po extends co{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new po(t,void 0,e)}static _fromEnrollmentId(e,t){return new po(t,e)}async _finalizeEnroll(e,t,n){return S("undefined"!==typeof this.secret,e,"argument-error"),jn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){S(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Cr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class fo{constructor(e,t,n,r,i,o,s){this.sessionInfo=o,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new fo(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(vo(e)||vo(t))&&(r=!0),r&&(vo(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),vo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function vo(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var mo="@firebase/auth",go="0.23.2";
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
class yo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function bo(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _o(e){(0,o._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;S(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},u=new Ze(r,i,o,c);return Ge(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o._registerComponent)(new c.wA("auth-internal",(e=>{const t=We(e.getProvider("auth").getImmediate());return(e=>new yo(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)(mo,go,bo(e)),(0,o.registerVersion)(mo,go,"esm2017")}
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
 */const wo=300;(0,i.Pz)("authIdTokenMaxAge");
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
function ko(){return window}
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
 */_o("Browser");const Io=2e3;async function So(e,t,n){var r;const{BuildInfo:i}=ko();E(t.sessionId,"AuthEvent did not contain a session ID");const o=await Ao(t.sessionId),s={};return Se()?s["ibi"]=i.packageName:we()?s["apn"]=i.packageName:b(e,"operation-not-supported-in-this-environment"),i.displayName&&(s["appDisplayName"]=i.displayName),s["sessionId"]=o,ro(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,s)}async function Co(e){const{BuildInfo:t}=ko(),n={};Se()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:b(e,"operation-not-supported-in-this-environment"),await Ai(e,n)}function Eo(e){const{cordova:t}=ko();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ce()?"_blank":"_system","location=yes"),n(i)}))}))}async function To(e,t,n){const{cordova:r}=ko();let i=()=>{};try{await new Promise(((o,s)=>{let a=null;function c(){var e;o();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{s(_(e,"redirect-cancelled-by-user"))}),Io))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function Oo(e){var t,n,r,i,o,s,a,c,u,l;const d=ko();S("function"===typeof(null===(t=null===d||void 0===d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S("undefined"!==typeof(null===(n=null===d||void 0===d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S("function"===typeof(null===(o=null===(i=null===(r=null===d||void 0===d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(c=null===(a=null===(s=null===d||void 0===d?void 0:d.cordova)||void 0===s?void 0:s.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(l=null===(u=null===d||void 0===d?void 0:d.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Ao(e){const t=xo(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function xo(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
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
 */const Lo=20;class Po extends Ci{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ro(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Do(),postBody:null,tenantId:e.tenantId,error:_(e,"no-auth-event")}}function No(e,t){return jo()._set(Bo(e),t)}async function $o(e){const t=await jo()._get(Bo(e));return t&&await jo()._remove(Bo(e)),t}function Mo(e,t){var n,r;const i=Uo(t);if(i.includes("/__/auth/callback")){const t=Fo(i),o=t["firebaseError"]?Vo(decodeURIComponent(t["firebaseError"])):null,s=null===(r=null===(n=null===o||void 0===o?void 0:o["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=s?_(s):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Do(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Lo;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function jo(){return de(Kn)}function Bo(e){return fe("authEvent",e.config.apiKey,e.name)}function Vo(e){try{return JSON.parse(e)}catch(t){return null}}function Uo(e){const t=Fo(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Fo(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,o=Fo(i)["link"];return o||i||r||n||e}function Fo(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
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
 */const Ho=500;class zo{constructor(){this._redirectPersistence=Yn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ki,this._overrideRedirectResult=hi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Po(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){b(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){Oo(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),di(),await this._originValidation(e);const o=Ro(e,n,r);await No(e,o);const s=await So(e,o,t),a=await Eo(s);return To(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Co(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ko(),o=setTimeout((async()=>{await $o(e),t.onEvent(Wo())}),Ho),s=async n=>{clearTimeout(o);const r=await $o(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Mo(r,n["url"])),t.onEvent(i||Wo())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,s);const a=r,c=`${i.packageName.toLowerCase()}://`;ko().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Zo=zo;function Wo(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_("no-auth-event")}}
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
 */function qo(e,t){We(e)._logFramework(t)}var Go="@firebase/auth-compat",Ko="0.4.2";
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
const Jo=1e3;function Yo(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Xo(){return"http:"===Yo()||"https:"===Yo()}function Qo(e=(0,i.z$)()){return!("file:"!==Yo()&&"ionic:"!==Yo()&&"capacitor:"!==Yo()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function es(){return(0,i.b$)()||(0,i.UG)()}function ts(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function ns(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function rs(e=(0,i.z$)()){return ts()||ns(e)}function is(){try{const e=self.localStorage,t=er();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!rs()||(0,i.hl)()}catch(e){return os()&&(0,i.hl)()}return!1}function os(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function ss(){return(Xo()||(0,i.ru)()||Qo())&&!es()&&is()&&!os()}function as(){return Qo()&&"undefined"!==typeof document}async function cs(){return!!as()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Jo);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function us(){return"undefined"!==typeof window?window:null}
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
 */const ls={LOCAL:"local",NONE:"none",SESSION:"session"},ds=S,hs="persistence";function ps(e,t){ds(Object.values(ls).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?ds(t!==ls.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?ds(t===ls.NONE,e,"unsupported-persistence-type"):os()?ds(t===ls.NONE||t===ls.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):ds(t===ls.NONE||is(),e,"unsupported-persistence-type")}async function fs(e){await e._initializationPromise;const t=ms(),n=fe(hs,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function vs(e,t){const n=ms();if(!n)return[];const r=fe(hs,e,t),i=n.getItem(r);switch(i){case ls.NONE:return[pe];case ls.LOCAL:return[kr,Yn];case ls.SESSION:return[Yn];default:return[]}}function ms(){var e;try{return(null===(e=us())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
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
 */const gs=S;class ys{constructor(){this.browserResolver=de(ao),this.cordovaResolver=de(Zo),this.underlyingResolver=null,this._redirectPersistence=Yn,this._completeRedirectFn=ki,this._overrideRedirectResult=hi}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return as()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return gs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await cs();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function bs(e){return e.unwrap()}function _s(e){return e.wrapped()}
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
 */function ws(e){return Is(e)}function ks(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new Es(e,Nn(e,t))}else if(r){const e=Is(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function Is(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Gr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=xt;break;case u.FACEBOOK:r=At;break;case u.GITHUB:r=Lt;break;case u.TWITTER:r=Mt;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:s,nonce:a}=t;return i||o||e||s?s?n.startsWith("saml.")?Rt._create(n,s):vt._fromParams({providerId:n,signInMethod:n,pendingToken:s,idToken:e,accessToken:i}):new Ot(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function Ss(e,t){return t.catch((t=>{throw t instanceof i.ZR&&ks(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:ws(e),additionalUserInfo:Ln(e),user:Ts.getOrCreate(n)}}))}async function Cs(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>Ss(e,n.confirm(t))}}class Es{constructor(e,t){this.resolver=t,this.auth=_s(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ss(bs(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class Ts{constructor(e){this._delegate=e,this.multiFactor=Fn(e)}static getOrCreate(e){return Ts.USER_MAP.has(e)||Ts.USER_MAP.set(e,new Ts(e)),Ts.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ss(this.auth,Jt(this._delegate,e))}async linkWithPhoneNumber(e,t){return Cs(this.auth,zr(this._delegate,e,t))}async linkWithPopup(e){return Ss(this.auth,ii(this._delegate,e,ys))}async linkWithRedirect(e){return await fs(We(this.auth)),bi(this._delegate,e,ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ss(this.auth,Yt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Cs(this.auth,Zr(this._delegate,e,t))}reauthenticateWithPopup(e){return Ss(this.auth,ri(this._delegate,e,ys))}async reauthenticateWithRedirect(e){return await fs(We(this.auth)),gi(this._delegate,e,ys)}sendEmailVerification(e){return gn(this._delegate,e)}async unlink(e){return await zt(this._delegate,e),this}updateEmail(e){return wn(this._delegate,e)}updatePassword(e){return kn(this._delegate,e)}updatePhoneNumber(e){return qr(this._delegate,e)}updateProfile(e){return _n(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return yn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ts.USER_MAP=new WeakMap;
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
const Os=S;class As{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Os(n,"invalid-api-key",{appName:e.name}),Os(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?ys:void 0;this._delegate=t.initialize({options:{persistence:Ls(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(p),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ts.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ke(this._delegate,e,t)}applyActionCode(e){return an(this._delegate,e)}checkActionCode(e){return cn(this._delegate,e)}confirmPasswordReset(e,t){return sn(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ss(this._delegate,ln(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return mn(this._delegate,e)}isSignInWithEmailLink(e){return pn(this._delegate,e)}async getRedirectResult(){Os(ss(),this._delegate,"operation-not-supported-in-this-environment");const e=await wi(this._delegate,ys);return e?Ss(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qo(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:o}=xs(e,t,n);return this._delegate.onAuthStateChanged(r,i,o)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:o}=xs(e,t,n);return this._delegate.onIdTokenChanged(r,i,o)}sendSignInLinkToEmail(e,t){return hn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return on(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(ps(this._delegate,e),e){case ls.SESSION:t=Yn;break;case ls.LOCAL:const e=await de(kr)._isAvailable();t=e?kr:Kn;break;case ls.NONE:t=pe;break;default:return b("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ss(this._delegate,Vt(this._delegate))}signInWithCredential(e){return Ss(this._delegate,Kt(this._delegate,e))}signInWithCustomToken(e){return Ss(this._delegate,Qt(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ss(this._delegate,dn(this._delegate,e,t))}signInWithEmailLink(e,t){return Ss(this._delegate,fn(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Cs(this._delegate,Hr(this._delegate,e,t))}async signInWithPopup(e){return Os(ss(),this._delegate,"operation-not-supported-in-this-environment"),Ss(this._delegate,ni(this._delegate,e,ys))}async signInWithRedirect(e){return Os(ss(),this._delegate,"operation-not-supported-in-this-environment"),await fs(this._delegate),vi(this._delegate,e,ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return un(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function xs(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,o=e=>i(e&&Ts.getOrCreate(e));return{next:o,error:t,complete:n}}function Ls(e,t){const n=vs(e,t);if("undefined"===typeof self||n.includes(kr)||n.push(kr),"undefined"!==typeof window)for(const r of[Kn,Yn])n.includes(r)||n.push(r);return n.includes(pe)||n.push(pe),n}
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
 */As.Persistence=ls;class Ps{constructor(){this.providerId="phone",this._delegate=new Gr(bs(r.Z.auth()))}static credential(e,t){return Gr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Ps.PHONE_SIGN_IN_METHOD=Gr.PHONE_SIGN_IN_METHOD,Ps.PROVIDER_ID=Gr.PROVIDER_ID;
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
const Rs=S;class Ns{constructor(e,t,n=r.Z.app()){var i;Rs(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Vr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const $s="auth-compat";function Ms(e){e.INTERNAL.registerComponent(new c.wA($s,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new As(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:Ct,FacebookAuthProvider:At,GithubAuthProvider:Lt,GoogleAuthProvider:xt,OAuthProvider:Ot,SAMLAuthProvider:$t,PhoneAuthProvider:Ps,PhoneMultiFactorGenerator:lo,RecaptchaVerifier:Ns,TwitterAuthProvider:Mt,Auth:As,AuthCredential:et,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Go,Ko)}Ms(r.Z)}}]);
//# sourceMappingURL=chunk-vendors.ae061e42.js.map