parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hwyT":[function(require,module,exports) {

},{}],"8en1":[function(require,module,exports) {
"use strict";function e(t,r){var n,i;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array&&(i=t.length)===r.length){for(;i--&&e(t[i],r[i]););return-1===i}if(n===Object){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(i in t)if(!(i in r&&e(t[i],r[i])))return!1;return!0}}return t!=t&&r!=r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Y+vS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("dequal"));function t(e){return e&&e.__esModule?e:{default:e}}var n=function t(n,r,a){return function(o){return function(u){var i=a(o,u);if(!(0,e.default)(o,i))try{n.innerHTML=r(i)}catch(c){throw new Error("On calling an updater on the component at id=".concat(n.id,", passing the merged data to the view function failed with message: ").concat(c.message))}return t(n,r,a)(i)}}},r=n;exports.default=r;
},{"dequal":"8en1"}],"2Xr3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./updater"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(t,r,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e,t){return n({},e,{},t)},a=t.getElementById(r);if(!a)throw new Error('On calling setComponent(doc, id, view, [data, [merge]]) with id="'.concat(r,'", doc.getElementById(id) returned ').concat(a,"."));try{a.innerHTML=o(i)}catch(u){throw new Error('On calling setComponent(doc, id, view, [data, [merge]]) with id="'.concat(r,'", passing data to the view function failed with message: ').concat(u.message))}return(0,e.default)(a,o,c)(i)},c=i;exports.default=c;
},{"./updater":"Y+vS"}],"xB+R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.getElementById("root");if(!r)throw new Error('On calling setRoot(doc, view, [data]), doc.getElementById("root") returned '.concat(r,"."));try{r.innerHTML=t(o)}catch(a){throw new Error("On calling setRoot(doc, view, [data]), passing data to the view function failed with message: ".concat(a.message))}},t=e;exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("mini.css");var e=t(require("../src/set-component")),n=t(require("../src/set-root"));function t(e){return e&&e.__esModule?e:{default:e}}!function(){try{(0,n.default)(document,function(e){return"<header><h1>".concat(e.message,"</h1></header><main id='x'></main>")},{message:"Hello, Everybody"});var t=(0,e.default)(document,"x",function(e){return"<p>This is a component, ".concat(e.name,"</p>")},{name:"Dude"});window.setTimeout(t,2e3,{name:"I mean, Sir"})}catch(r){console.log(r)}}();
},{"mini.css":"hwyT","../src/set-component":"2Xr3","../src/set-root":"xB+R"}]},{},["Focm"], null)