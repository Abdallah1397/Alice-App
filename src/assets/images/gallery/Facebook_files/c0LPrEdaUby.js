if (self.CavalryLogger) { CavalryLogger.start_js(["0hBrqaQ"]); }

__d("PerfFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744178");c=b("FalcoLoggerInternal").create("perf",a);e.exports=c}),null);
__d("QPLTimestamp",[],(function(a,b,c,d,e,f){"use strict";f.timestampToSerializedNanoseconds=g;f.calculateDurationAsNanoseconds=a;function g(a){if(a===0)return"0";a=a.toFixed(6).split(".",2);var b=a[0];a=a[1];return b==="0"?a.replace(/^0+/,""):b+a}function a(a,b){b=b-a;return g(b)}}),null);
__d("crc32",[],(function(a,b,c,d,e,f){e.exports=b;function b(a){var b=-1;for(var c=0,d=a.length;c<d;c++)b=b>>>8^g[(b^a.charCodeAt(c))&255];return~b}var g=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];a.Int32Array!==void 0&&(g=new Int32Array(g))}),null);
__d("QPLUtils",["crc32"],(function(a,b,c,d,e,f){"use strict";f.unsignedCrc32=g;f.deriveInstanceKey=a;function g(a){return b("crc32")(a)>>>0}function a(a){return a!=null?g(a):0}}),null);
__d("QuickPerformanceLoggerTypes",[],(function(a,b,c,d,e,f){"use strict";a=1;f.EVENT_BASED_SAMPLING=a;b=3;f.USER_BASED_SAMPLING=b}),null);
__d("QPLCore",["QPLTimestamp","QPLUtils","QuickPerformanceLoggerTypes"],(function(a,b,c,d,e,f){"use strict";function g(a,b,c,d){var e=b[a];if(!e||Object.entries(e).length===0)return null;var f={};Object.keys(e).forEach(function(a){var b=e[a];b===null||b===void 0||b.length===0?delete e[a]:d?f[a]=d(b):f[a]=b});return b={},b[a]=Object.assign({},c&&c[a],f),b}function h(a,b){if(a==null)return b;var c=Object.assign({},b,g("string",a,b),g("int",a,b,Math.trunc),g("double",a,b),g("bool",a,b),g("string_array",a,b),g("int_array",a,b,function(a){return a.map(Math.trunc)}),g("double_array",a,b),g("bool_array",a,b));Object.keys(c).forEach(function(a){var b=c[a];(b===null||b===void 0||Object.entries(b).length===0)&&delete c[a]});return Object.entries(c).length!==0?c:null}function i(a){var b=Array.from(new Set(a.map(function(a){return a.name})));return b.map(function(b){return a.find(function(a){return a.name===b})}).filter(Boolean)}function j(a,c){var d={};c.trackedForLoss===!0&&(d.tracked_for_loss=!0);typeof c.absoluteTimeOrigin==="number"&&(d.absolute_time_origin_ns=b("QPLTimestamp").timestampToSerializedNanoseconds(c.absoluteTimeOrigin));c=babelHelpers["extends"]({},a,d);return c}function k(a,b){if(!b)return a;var c={};b.string&&(c.annotations=b.string);b["int"]&&(c.annotations_int=b["int"]);b["double"]&&(c.annotations_double=b["double"]);b.bool&&(c.annotations_bool=b.bool);b.string_array&&(c.annotations_string_array=b.string_array);b.int_array&&(c.annotations_int_array=b.int_array);b.double_array&&(c.annotations_double_array=b.double_array);b.bool_array&&(c.annotations_bool_array=b.bool_array);return babelHelpers["extends"]({},a,c)}var l=new Map([[b("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,"random_sampling"],[b("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,"per_user"]]);function m(a,c){if(a===0)return!1;if(a<=1)return!0;return typeof c==="string"?b("QPLUtils").unsignedCrc32(c)%a===0:Math.random()*a<=1}a=function(){function a(a){this.$2=1;this.$3=100;this.$4=new Map();this.$5=new Map();this.$8={};this.activeMarkers=new Map();this.$1=a;this.$7=a.logger;this.$5=(a=a.listenersWithMarker)!=null?a:new Map()}var c=a.prototype;c.getMarker=function(a,b){a=this.$9(a);if(!a)return null;a=a.get(b);return!a?null:a};c.$9=function(a){var b;return((b=this.$1.quickLogConfigHelper)==null?void 0:b.isKillswitchOn())?null:this.activeMarkers.get(a)};c.addMarker=function(a,b,c){var d=this.activeMarkers.get(a);d||(d=new Map(),this.activeMarkers.set(a,d));d.set(b,c)};c.deleteMarker=function(a,b){(a=this.activeMarkers.get(a))==null?void 0:a["delete"](b)};c.markerStart=function(a,b,c,d){var e;b===void 0&&(b=0);c===void 0&&(c=this.currentTimestamp());d=d===void 0?{}:d;var f=d.cancelOnUnload;f=f===void 0?!1:f;var g=d.trackedForLoss;g=g===void 0?!1:g;var h=d.type;h=h===void 0?1:h;var i=d.samplingBasis;i=i===void 0?null:i;d=d.qplInternalDoNotUseAbsoluteTimeOrigin;if((e=this.$1.quickLogConfigHelper)==null?void 0:e.isKillswitchOn())return;this.getMarker(a,b)&&this.$7.warn("Duplicate QPL markerId: "+a+" & instanceKey: "+b);e=this.$10(a,i);i=e[0];var j=e[1];e=e[2];var k={passesSampling:i,timestamp:c,sampleRate:j,samplingMethod:e,points:[],cancelOnUnload:f,trackedForLoss:g,type:h};typeof d==="number"&&(k.absoluteTimeOrigin=d);this.$4.forEach(function(d){d.onMarkerStart&&d.onMarkerStart(a,b,c)});this.$5.forEach(function(d){d.onMarkerStartWithMarker(a,b,c,k)});i&&this.addMarker(a,b,k);i&&g===!0&&this.$11({marker_id:27787271,action_id:0,sample_rate:1,annotations_int:{tracked_marker_id:a},marker_type:1})};c.markerAnnotate=function(a,b,c){c=c===void 0?{}:c;c=c.instanceKey;var d=c===void 0?0:c;this.$4.forEach(function(c){Object.keys(b).forEach(function(e){var f=b[e];if(!f)return;Object.keys(f).forEach(function(b){c.onAnnotation&&c.onAnnotation(a,d,b,f[b])})})});c=this.getMarker(a,d);if(!c)return;c.annotations=h(b,c.annotations)};c.markerPoint=function(a,b,c){c=c===void 0?{}:c;var d=c.instanceKey,e=d===void 0?0:d,f=c.data;d=c.timestamp;var g=d===void 0?this.currentTimestamp():d;this.$4.forEach(function(c){if(c.onMarkerPoint){c.onMarkerPoint(a,e,b,f==null?void 0:(c=f.string)==null?void 0:c.__key,g)}});c=this.getMarker(a,e);if(!c)return;d={name:b,timeSinceStart:Math.trunc(g-c.timestamp)};var i=h(f);i&&(d.data=i);c.points.push(d)};c.markerEnd=function(a,c,d,e){d===void 0&&(d=0);e===void 0&&(e=this.currentTimestamp());this.$4.forEach(function(b){b.onMarkerEnd&&b.onMarkerEnd(c,a,d,e)});var f=this.getMarker(a,d);if(!f)return;if(f.passesSampling){if(f.timestampIsApproximate!==!0){var g=f.type===2?f.points:i(f.points);g={marker_id:a,action_id:c,instance_id:d,sample_rate:f.sampleRate,method:l.get(f.samplingMethod),duration_ns:b("QPLTimestamp").calculateDurationAsNanoseconds(f.timestamp,e),points:g,metadata:{application_analytics:{time_since_qpl_module_init:e-this.$1.moduleLoadTimestamp}},marker_type:f.type,flags:1};g=k(g,f.annotations);g=j(g,f);this.$11(g)}this.$6===a&&this.$1.onDebuggingIdEnded&&this.$1.onDebuggingIdEnded()}this.deleteMarker(a,d)};c.markerDrop=function(a,b){b===void 0&&(b=0);this.deleteMarker(a,b);var c=this.currentTimestamp();this.$4.forEach(function(d){d.onMarkerDrop&&d.onMarkerDrop(a,b,c)})};c.markEvent=function(a,b,c,d){var e;d=d===void 0?{}:d;var f=d.timestamp;f=f===void 0?this.currentTimestamp():f;d=d.annotations;if((e=this.$1.quickLogConfigHelper)==null?void 0:e.isKillswitchOn())return;e=this.$10(a);var g=e[0],i=e[1];e=e[2];if(!g)return;g=h(typeof d==="function"?d():d);d={marker_id:a,action_id:0,instance_id:0,sample_rate:i,method:l.get(e),da_type:b,da_level:c,metadata:{application_analytics:{time_since_qpl_module_init:f-this.$1.moduleLoadTimestamp}},marker_type:1,flags:1};this.$11(k(d,g))};c.dropAllMarkers=function(){this.activeMarkers.clear()};c.setAlwaysOnSampleRate=function(a,b){this.$8[a]=b};c.setDefaultSampleRate=function(a){this.$3=a};c.currentTimestamp=function(){return this.$1.performanceNow()};c.enableDebug=function(a){this.$6=parseInt(a,10)};c.disableDebug=function(){this.$6=null};c.addListener=function(a){var b=this,c=this.$2++;this.$4.set(c,a);return{dispose:function(){b.$4["delete"](c)}}};c.$10=function(a,c){var d;if(this.$1.unsampleAllEvents&&this.$1.unsampleAllEvents()||this.$6===a)return[!0,1,b("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING];d=(d=(d=this.$1.quickLogConfigHelper)==null?void 0:d.getEventDetails(a))!=null?d:{sampleRate:0,samplingMethod:b("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING};if(this.$8[a]==null&&d.sampleRate!==0&&d.samplingMethod===b("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING){var e;return[!0,(e=d.sampleRate)!=null?e:1,b("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING]}e=(a=(e=this.$8[a])!=null?e:d.sampleRate)!=null?a:this.$3;d=(a=d.samplingMethod)!=null?a:b("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;a=m(e,c);return[a,e,d]};c.$11=function(a){var b=this.$1.decorateEventBeforeUpload?this.$1.decorateEventBeforeUpload(a):a;this.$1.sendEvent(a,b)};c.getActiveMarkerIDs=function(a){var b=a.type,c=new Set();this.activeMarkers.forEach(function(a,d){a.forEach(function(a){if(a.type===b){c.add(d);return}})});return Array.from(c)};c.forEachMarkerInstance=function(a,b){a=this.$9(a);if(!a)return;for(var a=a.keys(),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b(e)}};return a}();e.exports=a;a.normalizeAnnotations=h}),null);
__d("QuickLogConfigHelper",["QuickLogConfig"],(function(a,b,c,d,e,f){a=function(){function a(){}var c=a.prototype;c.getEventDetails=function(a){a=b("QuickLogConfig").qpl_events[a];return{sampleRate:a==null?void 0:a.sampleRate,samplingMethod:(a=a==null?void 0:a.samplingMethod)!=null?a:1}};c.isKillswitchOn=function(){return b("QuickLogConfig").killswitch};return a}();c=new a();e.exports=c}),null);
__d("QuickPerformanceLogger",["Arbiter","Bootloader","Env","FBLogger","PerfFalcoEvent","PerfXSharedFields","Promise","QPLCore","QuickLogConfigHelper","Run","WebStorage","cr:1367102","cr:1984081","gkx","performanceAbsoluteNow","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";var g,h,i;function j(a){var c=b("PerfXSharedFields").getCommonData();c={memory_stats:{total_mem:c.ram_gb!=null?c.ram_gb*1073741824:null},network_stats:{downlink_megabits:c.downlink_megabits,network_subtype:c.effective_connection_type,rtt_ms:c.rtt_ms},sitedata_info:{client_push_phase:c.client_push_phase,client_revision:c.client_revision,server_revision:c.server_revision},locale_info:{locale:c.locale,isRTL:c.isRTL}};b("gkx")("1224637")&&(c.workplace_info={is_gemini:b("gkx")("1217157")});return babelHelpers["extends"]({},a,{metadata:babelHelpers["extends"]({},a.metadata,c)})}function k(a,c){return new(b("Promise"))(function(){var d=c||a;typeof window.__je2e_recordQPLMarker==="function"&&window.__je2e_recordQPLMarker(d);(g||(g=b("Env"))).enable_qplinspector===!0&&b("Bootloader").loadModules(["QPLInspector"],function(a){a.appendLog(d)},"QuickPerformanceLogger");b("gkx")("1554827")||b("gkx")("708253")?b("PerfFalcoEvent").logImmediately(function(){return d}):b("PerfFalcoEvent").log(function(){return d})})}function l(){return(g||(g=b("Env"))).enable_qplinspector===!0||typeof window.__je2e_recordQPLMarker==="function"||b("gkx")("1738486")}function m(){b("Arbiter").inform("qpl_debugger_finished")}var n=(h||(h=b("performanceAbsoluteNow")))(),o={debug:function(a,b,c){},warn:function(a){b("FBLogger")("qpl").blameToPreviousDirectory().warn(a)}},p="qpl",q=new Map();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,{quickLogConfigHelper:b("QuickLogConfigHelper"),decorateEventBeforeUpload:j,unsampleAllEvents:l,onDebuggingIdEnded:m,performanceNow:h||(h=b("performanceAbsoluteNow")),moduleLoadTimestamp:n,logger:o,sendEvent:k,listenersWithMarker:q})||this;b("Run").onUnload(function(){c.$QuickPerformanceLogger1(),c.$QuickPerformanceLogger2(706,{respectUnloadPolicy:!0,timestamp:c.currentTimestamp()})});c.$QuickPerformanceLogger3();c.initQplFlipperPlugin();c.initQplSapienzPlugin();return c}var d=c.prototype;d.$QuickPerformanceLogger3=function(){var a=this,c=(i||(i=b("WebStorage"))).getSessionStorageForRead();if(!c){this.$QuickPerformanceLogger4("_loadSavedState","sessionStorage is not available");return}var d=c.getItem(p);if(d==null)return;c.removeItem(p);c=JSON.parse(d);if(c==null){this.$QuickPerformanceLogger4("_loadSavedState","Saved state failed to deserialize");return}if(c.markers==null||c.markers.length===0){this.$QuickPerformanceLogger4("_loadSavedState","No saved markers found");return}c.markers.forEach(function(b){var c=b[0],d=b[1];b=b[2];a.addMarker(c,d,b);a.$QuickPerformanceLogger4("_loadSavedState","Marker "+c+" (instanceKey: "+d+") resumed")})};d.$QuickPerformanceLogger1=function(){var a=this,c=[];this.activeMarkers.forEach(function(a,b){a.forEach(function(a,d){a.resumeAfterNavigation===!0&&(delete a.resumeAfterNavigation,c.push([b,d,a]))})});if(c.length>0){var d={markers:c},e=(i||(i=b("WebStorage"))).getSessionStorage();e=i.setItemGuarded(e,p,JSON.stringify(d));e&&(c.forEach(function(b){var c=b[0];b=b[1];a.markerEnd(c,96,b)}),this.$QuickPerformanceLogger4("_storeSavedState","Failed to store saved state: "+e.message),b("FBLogger")("qpl").catching(e).warn("Failed to store QPL state: "+JSON.stringify(d,null,2)));c.forEach(function(b){var c=b[0];b=b[1];a.deleteMarker(c,b)})}};d.markerStoreBeforeNavigation=function(a,b){b=b===void 0?{}:b;b=b.instanceKey;b=b===void 0?0:b;a=this.getMarker(a,b);if(!a)return;a.resumeAfterNavigation=!0};d.markerStartFromNavStart=function(a,c,d){c===void 0&&(c=0);d=d===void 0?{}:d;var e=d.cancelOnUnload;e=e===void 0?!1:e;var f=d.trackedForLoss;f=f===void 0?!1:f;var g=d.type;g=g===void 0?1:g;d=d.qplInternalDoNotUseConvertToTimeOnServer;var h=b("performanceNavigationStart")();d=typeof d==="function"?d(h):void 0;this.markerStart(a,c,h,{cancelOnUnload:e,trackedForLoss:f,type:g,qplInternalDoNotUseAbsoluteTimeOrigin:d});if(b("performanceNavigationStart").isPolyfilled){h=this.getMarker(a,c);h&&(h.timestampIsApproximate=!0)}};d.$QuickPerformanceLogger2=function(a,b){var c=this;b=b===void 0?{}:b;var d=b.timestamp,e=b.respectUnloadPolicy;this.activeMarkers.forEach(function(b,f){b.forEach(function(b,g){(!e||b.cancelOnUnload===!0)&&c.markerEnd(f,a,g,d)})})};d.$QuickPerformanceLogger4=function(a,b,c){o.debug(a,b,c)};d.initQplFlipperPlugin=function(){b("cr:1367102")!=null&&this.addListener(b("cr:1367102").qplFlipperPlugin.listener())};d.initQplSapienzPlugin=function(){b("cr:1984081")!=null&&this.addListener(b("cr:1984081").getQplSapienzListener())};return c}(b("QPLCore"));c=new a();e.exports=c}),null);