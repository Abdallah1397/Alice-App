if (self.CavalryLogger) { CavalryLogger.start_js(["Wnqeqaj"]); }

__d("memoizeByReference",["MemoizationInstrumentation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=typeof WeakMap==="function";function a(a,c){c===void 0&&(c=a.name||"unknown");var d=g?new WeakMap():new Map(),e=function(e){var f=b("MemoizationInstrumentation").onFunctionCall("memoizeByReference",c);if(d.has(e)){var g=d.get(e);if(g!==void 0){f&&f(!0);return g[0]}}g=a(e);d.set(e,[g]);f&&f(!1);return g};return e}}),null);
__d("getGraphQLEnumSafe",["flipObject","memoizeByReference"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b){if(b==null)return null;a=g(a);return!Object.prototype.hasOwnProperty.call(a,b)?null:a[b]}var g=b("memoizeByReference")(b("flipObject"))}),null);