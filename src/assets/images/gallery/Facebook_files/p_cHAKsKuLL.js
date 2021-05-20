if (self.CavalryLogger) { CavalryLogger.start_js(["lZrHIzw"]); }

__d("EventCometActionLogger",["EventsLoggerActionMechanism","EventsLoggerActionSurface","requireDeferred"],(function(a,b,c,d,e,f){"use strict";f.createForNewSurface=a;f.log=c;var g=b("requireDeferred")("EventsActionsSrCoreFalcoEvent").__setRef("EventCometActionLogger"),h={mechanism:"unknown",surface:"unknown"},i=3;function a(a,b){var c=[].concat(a.event_action_history||[]);c.length>=i&&(c=c.slice(c.length-i+1));var d=j(a);c.push({event_tracking:d.event_tracking,extra_data:d.extra_data,mechanism:b.mechanism,surface:b.surface});return babelHelpers["extends"]({},a,{event_action_history:c})}function j(a){a=a.event_action_history;if(a==null||a[a.length-1]==null)return h;return a.length>=2?a[a.length-2]:a[a.length-1]}function c(a,c,d){var e=j(c.acontext),f="unknown";e.mechanism!=null&&(e.mechanism==="null"?f="null":f=b("EventsLoggerActionMechanism")[e.mechanism.toUpperCase()]);var h="unknown";e.surface!=null&&(h=b("EventsLoggerActionSurface")[e.surface.toUpperCase()]);g.onReady(function(b){return b.log(function(){return{action_target:c.target,action_type:c.type,callsite_identifier:"297102331577706",event_id:a,extras:d,mechanism:c.mechanism!=null?c.mechanism:"unknown",ref_mechanism:f,ref_surface:h,surface:c.surface!=null?c.surface:"unknown"}})})}}),null);
__d("useEventActionLoggerParams",["CometRouteParams","EventCometActionLogger","react","recoverableViolation","useRouteReferrer"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i={event_action_history:[]};function j(a,c,d){var e,f=a.acontext,g=a.notif_t;f=k(f);if(!((e=f.event_action_history)==null?void 0:e.length)){e=n(a,d);e&&(f=babelHelpers["extends"]({},f,{event_action_history:[{surface:e}]}))}f.ref_notif_type=(a=f.ref_notif_type)!=null?a:g;d=b("EventCometActionLogger").createForNewSurface(f,c);return[f,d]}function k(a){if(a==null||a==="")return i;var c=null;try{c=JSON.parse(a)}catch(a){b("recoverableViolation")("Unable to parse action_context string"+a.toString(),"events")}if(c==null)return i;a=c;c=a.action_history;var d=a.event_action_history,e=a.ref,f=a.ref_notif_type;a=a.source;d=(d=d)!=null?d:c;c=[];typeof d==="string"?c=o(d):Array.isArray(d)&&(c=p(d));return{event_action_history:c,ref:e,ref_notif_type:f,source:a}}var l=["google","bing","yahoo"],m={colleges:"campus_feed",gaming:"games_feed",group:"group",groups:"group",marketplace:"marketplace",page:"page",profile:"user_timeline",save:"saved_dashboard",watch:"video_feed"};function n(a,b){if(a.ref==="notif"||a.notif_id!=null)return"notifications_tab";b=b==null?void 0:b.split(".");b=b!=null&&b.length>=2&&b[0]==="comet"?b[1]:null;if(b!=null&&Object.prototype.hasOwnProperty.call(m,b))return m[b];if(a.ref==="newsfeed")return"newsfeed";b=(b=document.referrer)==null?void 0:(a=b.match(/\/\/[^\/]*?([\w-]+)\.\w+(\/|$)/))==null?void 0:a[1];if(b!=null){if(l.includes(b))return"external_search_engine";if(b!=="facebook")return"external"}return null}function o(a){if(a==="")return[];var c=[];try{c=JSON.parse(a)}catch(a){b("recoverableViolation")("Unable to parse action_history string"+a.toString(),"events");return c}return p(c)}function p(a){return!Array.isArray(a)?[]:a.map(function(a){var b=a.event_tracking,c=a.extra_data,d=a.mechanism;a=a.surface;return{event_tracking:typeof b==="string"?b:void 0,extra_data:typeof c==="object"?JSON.stringify(c):"",mechanism:typeof d==="string"?d:"unknown",surface:typeof a==="string"?a:"unknown"}})}function a(a){var c=b("CometRouteParams").useRouteParams(),d=b("useRouteReferrer")();return h.useMemo(function(){return j(c,a,d==null?void 0:d.tracePolicy)},[c,a,d==null?void 0:d.tracePolicy])}}),null);