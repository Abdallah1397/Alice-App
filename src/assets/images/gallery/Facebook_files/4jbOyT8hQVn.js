if (self.CavalryLogger) { CavalryLogger.start_js(["vNGqITe"]); }

__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("XIntlSaveXModeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/intl/save_xmode/",{})}),null);
__d("IntlUtils",["invariant","AsyncRequest","Cookie","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","XIntlSaveXModeAsyncController","goURI"],(function(a,b,c,d,e,f,g){f.setXmode=a;f.encodeSpecialCharsForXController=c;f.decodeSpecialCharsFromXController=d;f.setAmode=e;f.setRmode=i;f.setSmode=j;f.setLocale=k;f.appendCookieLocaleHistory=l;f.setCookieLocale=m;var h=b("XIntlSaveXModeAsyncController").getURIBuilder().getURI();function a(a){new(b("AsyncRequest"))().setURI(h).setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()}function c(a){return a.replace(new RegExp("\xa0","g"),"&nbsp;")}function d(a){return a.replace(new RegExp("&nbsp;","g"),"\xa0")}function e(a){new(b("AsyncRequest"))().setURI(h).setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()}function i(a){new(b("AsyncRequest"))().setURI(h).setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()}function j(a){new(b("AsyncRequest"))().setURI(h).setData({string_manager_mode:a}).setHandler(function(){b("ReloadPage").now()}).send()}function k(a,c,d,e){e=d;e||(a!=null||g(0,19476),e=a.options[a.selectedIndex].value);d=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({loc:e,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()}function l(a){var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())}function m(a,c,d,e,f){e===void 0&&(e="unknown"),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}}),null);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f){a.intl_set_string_manager_mode=(c=b("IntlUtils")).setSmode;a.intl_set_xmode=c.setXmode;a.intl_set_amode=c.setAmode;a.intl_set_rmode=c.setRmode;a.intl_set_locale=c.setLocale}),3);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=(c=b("PageHooks"))._domreadyHook;a._onloadHook=c._onloadHook;a.runHook=c.runHook;a.runHooks=c.runHooks;a.keep_window_set_as_loaded=c.keepWindowSetAsLoaded}),3);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){a={setDirection:function(a,c,d){c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(a){a=a.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){var g;function h(a){a.nctr||(a.nctr={})}function i(a){if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)}};e.exports=a}),null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar"],(function(a,b,c,d,e,f){Object.assign(b("AsyncRequest").prototype,{setNectarModuleData:function(a){this.method=="POST"&&b("Nectar").addModuleData(this.data,a)}})}),null);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({cookieName:"dpr"})}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";f.startDetecting=a;var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}function a(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}}),null);
__d("tidyEvent",["Run"],(function(a,b,c,d,e,f){e.exports=a;var g=[];function h(){while(g.length){var a=g.shift();a.remove?a.remove():a.unsubscribe&&a.unsubscribe()}}function i(a){var b,c=a;function d(){if(!b)return;b.apply(c,arguments);b=null;c=null}if(c&&c.remove)b=c.remove,c.remove=d;else{b=(a=c)==null?void 0:a.unsubscribe;c.unsubscribe=d}return c}function a(a){g.length||b("Run").onLeave(h);if(Array.isArray(a))for(var c=0;c<a.length;c++)a[c]&&g.push(i(a[c]));else a&&g.push(i(a));return a}}),null);
__d("BanzaiScubaMigrationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1949898");c=b("FalcoLoggerInternal").create("banzai_scuba_migration",a);e.exports=c}),null);
__d("BanzaiScuba_DEPRECATED",["Banzai","BanzaiScubaMigrationFalcoEvent","FBLogger","gkx"],(function(a,b,c,d,e,f){var g="scuba_sample";a=function(){function a(a,c,d){this.posted=!1,a||b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"),this.dataset=a,this.$1=c,this.options=d}var c=a.prototype;c.$2=function(a,c,d){if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");return a}a=a||{};a[c]=d;return a};c.addNormal=function(a,b){this.normal=this.$2(this.normal,a,b);return this};c.addInteger=function(a,b){this["int"]=this.$2(this["int"],a,b);return this};c.addDenorm=function(a,b){this.denorm=this.$2(this.denorm,a,b);return this};c.addTagSet=function(a,b){this.tags=this.$2(this.tags,a,b);return this};c.addNormVector=function(a,b){this.normvector=this.$2(this.normvector,a,b);return this};c.post=function(a){var c=this;if(this.posted){b("FBLogger")("BanzaiScuba").warn("Trying to re-post");return}if(!this.dataset)return;var d={};d._ds=this.dataset;d._options=this.options;this.normal&&(d.normal=this.normal);this["int"]&&(d["int"]=this["int"]);this.denorm&&(d.denorm=this.denorm);this.tags&&(d.tags=this.tags);this.normvector&&(d.normvector=this.normvector);this.$1!==null&&this.$1!==""&&this.$1!==void 0&&(d._lid=this.$1);b("gkx")("1955413")?b("BanzaiScubaMigrationFalcoEvent").log(function(){return{dataset:c.dataset,payload:d}}):b("Banzai").post(g,d,a);this.posted=!0};return a}();e.exports=a}),null);
__d("VisualCompletionInst",["VisibilityListener","getElementRect","gkx","performance","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g,h,i=/url\(.*(http.*)\)/gi,j=1,k=0;a=function(){function a(a){this.$4=0,this.$8=0,this.$9=0,this.$10=0,this.markerPoints=new Map(),this.annotations=new Map(),this.$5=new Map(),this.$3=new Map(),this.$1=[],this.$2=[],this.$7=0,this.$11=a,this.$6={width:window.innerWidth,height:window.innerHeight}}var c=a.prototype;c.addMarkerPoint=function(a,b){this.markerPoints.set(a,b)};c.addNavigationTiming=function(){var a=((g||(g=b("performance")))==null?void 0:(g||(g=b("performance"))).timing)||{};for(var c in a)typeof a[c]==="number"&&a[c]>=this.$4&&this.addMarkerPoint(c,a[c]-this.$4)};c.calculate=function(a,c,d){var e=this;if(!this.$11.size)return null;k++;var f=(h||(h=b("performanceAbsoluteNow")))();this.$4=a;this.$7=0;this.$9=0;this.$10=0;this.setResourceTimingMap();this.setViewportSize();this.initTree();this.getImages();b("gkx")("676838")&&this.getBackgroundImages();this.$8=this.traverseTree(this.$1,this.$6.width*this.$6.height);var g={annotations:this.annotations,viewport:this.$6,totalPixels:this.$8,paintedPixels:this.$9,bgNum:0,imgNum:0,compNum:0,bgPixels:0,imgPixels:0,compPixels:0,elements:this.$2,calcLatency:0,bgChecked:this.$7,bgCheckLatency:this.$10,markerPoints:this.markerPoints,speedIndex:0,startTime:a,visuallyComplete:0,scrollY:window.scrollY,navSequence:k,pageType:c,page:d};this.$2.length&&(this.$2=this.$2.sort(function(a,b){return b.latency-a.latency}),g.visuallyComplete=this.$2[0].latency,this.addMarkerPoint("FP",this.$2[this.$2.length-1].latency),this.$2.forEach(function(a){!e.markerPoints.has("vcWithoutImage")&&a.type==="component"&&e.addMarkerPoint("vcWithoutImage",a.latency);g.speedIndex+=a.pixels/e.$9*a.latency;switch(a.type){case"component":g.compNum++;g.compPixels+=a.pixels;break;case"img":g.imgNum++;g.imgPixels+=a.pixels;break;case"bg":g.bgNum++;g.bgPixels+=a.pixels;break}}));g.calcLatency=h()-f;this.logPixelProgress();this.setMetadata(g);k===1&&this.addNavigationTiming();return g};c.findParent=function(a){a=a.parentElement;while(a){var b=a.getAttribute("data-veid");if(b!=null&&b!==""&&this.$3.has(b))return this.$3.get(b);a=a.parentElement}return null};c.getBackgroundImages=function(){var a=this,c=(h||(h=b("performanceAbsoluteNow")))();this.$1.forEach(function(c){c=c.element.querySelectorAll(":not(img)");Array.prototype.forEach.call(c,function(c){var d=a.findParent(c);if(!d)return;var e=a.getRectangle(c,d.rectangle),f=a.getPixels(e);if(!f)return;var h=a.trimHash(a.getStyleBackground(c));if(h!=null&&h!==""){var i=a.$5.get(h);if(i!=null){c={veid:String(j++),element:c,rectangle:e,pixels:f,children:[],parent:d,type:"bg",latency:i+(g||(g=b("performance"))).timing.navigationStart-a.$4,timestamp:i+g.timing.navigationStart,url:h};d.children.push(c)}}})});this.$10=h()-c};c.getImages=function(){var a=this,c=document.querySelectorAll("img");Array.prototype.forEach.call(c,function(c){var d=a.findParent(c);if(!d)return;var e=a.getRectangle(c,d.rectangle);if(c.parentElement){var f=a.getRectangle(c.parentElement,d.rectangle);e=a.getRectIntersection(e,f)}f=a.getPixels(e);if(!f)return;var h=a.trimHash(c.getAttribute("src"));if(h!=null&&h!==""&&a.$5.has(h)){var i=a.$5.get(h);if(i!=null){c={veid:String(j++),element:c,rectangle:e,pixels:f,children:[],parent:d,type:"img",latency:i+(g||(g=b("performance"))).timing.navigationStart-a.$4,timestamp:i+g.timing.navigationStart,url:h};d.children.push(c)}}})};c.getPixels=function(a){return(a.right-a.left)*(a.bottom-a.top)};c.getRectangle=function(a,c){a=b("getElementRect")(a);return this.getRectIntersection(a,c)};c.getRectIntersection=function(a,b){return{top:Math.min(Math.max(a.top,b.top),b.bottom),bottom:Math.max(Math.min(a.bottom,b.bottom),b.top),left:Math.min(Math.max(a.left,b.left),b.right),right:Math.max(Math.min(a.right,b.right),b.left)}};c.getStyleBackground=function(a){if(typeof window.getComputedStyle!=="function")return null;this.$7++;a=window.getComputedStyle(a);var b=a["background-image"];if(a.visibility!=="hidden"&&b&&b!=="none"){i.lastIndex=0;a=i.exec(b);if(a&&a.length>1)return a[1].replace('"',"")}return null};c.logPixelProgress=function(){var a=this,b=new Map([["vc98",.02],["vc95",.05]]),c=0,d=0,e=function(e){var f=a.$2[e];c+=f.pixels;if(b.size===0)return"break";b.forEach(function(b,d){!a.markerPoints.has(d)&&c/a.$9>=b&&a.addMarkerPoint(d,f.latency)});f.type==="component"&&(d+=f.pixels,f.children.forEach(function(a){a.type!=="component"&&(d+=a.pixels)}),b.forEach(function(c,e){!a.markerPoints.has(e+"WithoutImage")&&d/a.$9>=c&&(a.addMarkerPoint(e+"WithoutImage",f.latency),b["delete"](e))}))};for(var f=0;f<this.$2.length;f++){var g=e(f);if(g==="break")break}};c.initTree=function(){var a=this,b={top:0,left:0,bottom:this.$6.height,right:this.$6.width};this.$11.forEach(function(c){var d=c[0],e=c[1];c=c[2];var f=a.getRectangle(e,b);if(a.getPixels(f)===0)e.removeAttribute("data-veid"),a.$11["delete"](d);else{e={veid:d,element:e,rectangle:f,pixels:a.getPixels(f),children:[],parent:null,type:"component",latency:c-a.$4,timestamp:c};a.$3.set(d,e)}});this.$3.forEach(function(b){var c=a.findParent(b.element);c?(b.rectangle=a.getRectIntersection(b.rectangle,c.rectangle),b.pixels=a.getPixels(b.rectangle),c.children.push(b),b.parent=c):(a.$1.forEach(function(c){c=a.getRectIntersection(b.rectangle,c.rectangle);a.getPixels(c)>0&&(b.rectangle.top=c.bottom,b.pixels=a.getPixels(b.rectangle))}),a.$1.push(b))})};c.setMetadata=function(a){var c=b("VisibilityListener").getHiddenTime(a.startTime,a.startTime+a.visuallyComplete);c=c!=null&&c>0?1:0;this.annotations.set("height",a.viewport.height);this.annotations.set("width",a.viewport.width);this.annotations.set("page",a.page);this.annotations.set("scrollY",a.scrollY);this.annotations.set("overhead",a.calcLatency);this.annotations.set("navSequence",a.navSequence);this.annotations.set("hidden",c);a.navSequence===1&&(g||(g=b("performance")))&&(g||(g=b("performance"))).timing&&((g||(g=b("performance"))).timing.responseStart&&this.addMarkerPoint("TTFB",(g||(g=b("performance"))).timing.responseStart-a.startTime));a.speedIndex>0&&this.addMarkerPoint("speedIndex",a.speedIndex)};c.setResourceTimingMap=function(){var a=this;if(window.performance&&typeof window.performance.getEntriesByType==="function"){var b=window.performance.getEntriesByType("resource");b.forEach(function(b){var c=a.trimHash(b.name);c!=null&&c!==""&&a.$5.set(c,b.responseEnd)})}};c.setViewportSize=function(){this.$6={width:window.innerWidth,height:window.innerHeight}};c.traverseTree=function(a,b){var c=this,d=b,e=0;a.sort(function(a,b){return b.timestamp-a.timestamp}).forEach(function(a){a.pixels=Math.min(d,a.pixels),e+=a.pixels,d-=a.pixels,a.pixels-=c.traverseTree(a.children,a.pixels),a.timestamp>c.$4&&(a.type!=="component"&&a.parent&&a.parent.timestamp>a.timestamp&&(a.latency=a.parent.latency),c.$9+=a.pixels,c.$2.push(a))});return e};c.trimHash=function(a){return a!=null&&a!==""&&a.indexOf("#")>=0?a.substring(0,a.indexOf("#")):a};return a}();e.exports=a}),null);
__d("VisualCompletionQPL",["QuickPerformanceLogger"],(function(a,b,c,d,e,f){"use strict";f.log=a;function a(a){b("QuickPerformanceLogger").markerStartFromNavStart(27983875),a.markerPoints.forEach(function(c,d){b("QuickPerformanceLogger").markerPoint(27983875,d,{timestamp:c+a.startTime})}),a.annotations.forEach(function(a,c){if(typeof a==="number"){var d;b("QuickPerformanceLogger").markerAnnotate(27983875,{"int":(d={},d[c]=a,d)})}else{b("QuickPerformanceLogger").markerAnnotate(27983875,{string:(d={},d[c]=a,d)})}}),b("QuickPerformanceLogger").markerEnd(27983875,2,0,a.visuallyComplete+a.startTime)}}),null);
__d("VisualCompletion",["csx","NavigationMetrics","VisualCompletionInst","VisualCompletionQPL"],(function(a,b,c,d,e,f,g){"use strict";f.addElements=a;f.getReport=c;f.init=p;f.subscribe=d;f.unsubscribe=e;var h=!1,i,j=[],k=new Set(),l=new Map(),m=1;function n(a,b){if(!a)return;var c="vc_"+m++,d=a.getAttribute("data-veid");d!=null&&d!==""&&l["delete"](d);a.setAttribute("data-veid",c);l.set(c,[c,a,b])}function o(){j.forEach(function(a){a(i)}),i&&b("VisualCompletionQPL").log(i)}function a(a,b,c){h||p();b&&b.forEach(function(a){n(a,c)});if(a==="first_response"){if(k.has(a))return;b=document.getElementById("pagelet_bluebar");if(b!=null){b=b.querySelector("._2s1y");b&&n(b,c)}k.add(a)}else if(a==="pagelet_sidebar"){if(k.has(a))return;b=document.getElementById("pagelet_sidebar");if(b!=null){b=b.querySelector("._51x_");b&&n(b,c)}k.add(a)}}function c(){return i}function p(){b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,c){if(c.pageType!=="normal"&&c.pageType!=="quickling")return;a=new(b("VisualCompletionInst"))(l);i=a.calculate(c.start,c.pageType,c.page);o()}),h=!0}function d(a){j.push(a)}function e(a){j=j.filter(function(b){return b!==a})}}),null);
__d("VisualCompletionGating",["cr:729414"],(function(a,b,c,d,e,f){"use strict";a=b("cr:729414");e.exports=a}),null);
__d("FbtLogging",["cr:1094907"],(function(a,b,c,d,e,f){"use strict";a=b("cr:1094907")==null?void 0:b("cr:1094907").logImpression;f.logImpression=a}),null);
__d("IntlQtEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1848815");c=b("FalcoLoggerInternal").create("intl_qt_event",a);e.exports=c}),null);