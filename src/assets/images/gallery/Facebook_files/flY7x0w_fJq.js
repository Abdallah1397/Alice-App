if (self.CavalryLogger) { CavalryLogger.start_js(["G7fKF8R"]); }

__d("SearchCometResultsInitialResultsQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4212599582125277",metadata:{},name:"SearchCometResultsInitialResultsQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometInfoBoxQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5272001469538950",metadata:{},name:"SearchCometInfoBoxQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("searchCometEncodeQuery",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return encodeURIComponent(a.trim()).replace(/!/g,"%21").replace(/\'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/~/g,"%7E").replace(/%20/g,"+")}}),null);
__d("SearchCometResultsDefaultQueryVariables",[],(function(a,b,c,d,e,f){"use strict";a={count:5};e.exports=a}),null);
__d("SearchCometResultsBase.entrypoint",["Base64","SearchCometInfoBoxQuery$Parameters","SearchCometResultsDefaultQueryVariables","SearchCometResultsInitialResultsQuery$Parameters","WebPixelRatio","searchCometEncodeQuery"],(function(a,b,c,d,e,f){"use strict";f.getPreloadProps=a;function a(a){var c=a.passthroughProps,d=a.routeParams,e=a.routeProps,f=e.callsite,j=e.decrypted_bqf_title,k=e.encoded_server_defined_params,l=e.entity_id,m=e.experience_type,n=e.fetch_filters,o=e.has_info_box;e=e.render_location;a=a.timeSpentMetaData;var p=d.__hcr__,q=d.__pei__,r=d.__pet__,s=d.__stsd__,t=d.__tsid__,u=d.filters,v=d.q,w=d.spell,x=d.watch_config;a=a==null?void 0:a.search_sid;v=typeof v==="string"?v:null;if(j!=null){var y;v=(y=v)!=null?y:j}else d.hashtag!=null&&(v="#"+d.hashtag);y=typeof t==="string"?String(t):null;j=w==="1";t={};if(u!=null){t=(w=g(u))!=null?w:{}}u=h(t);w=null;if(q!=null)try{w=JSON.parse(b("Base64").decode(q))}catch(a){}t=null;if(r!=null)try{t=JSON.parse(b("Base64").decode(r)).toUpperCase()}catch(a){}q=null;if(p!=null)try{r=JSON.parse(b("Base64").decode(p));q={id:r.id,source:r.source}}catch(a){}p=null;if(s!=null)try{p=JSON.parse(b("Base64").decode(s))}catch(a){}r=null;if(x!=null)try{s=JSON.parse(b("Base64").decode(x));r={watch_serp_type:s.watch_serp_type}}catch(a){}x=m;s=f==="COMET_GLOBAL_SEARCH"&&x==="GLOBAL_SEARCH";m=s?2:0;k={encoded_server_defined_params:k,fbid:l,type:x};x=w!=null&&t!=null?{preloaded_entity_ids:(l=w)!=null?l:[],preloaded_entity_type:t}:null;l={callsite:f,config:{bootstrap_config:x,exact_match:j,high_confidence_config:q,intercept_config:c==null?void 0:c.intercept_config,sts_disambiguation:p,watch_config:r},context:{bsid:a,tsid:y},experience:k,filters:u,text:(w=v)!=null?w:""};t={options:{fetchPolicy:"store-or-network"},parameters:b("SearchCometResultsInitialResultsQuery$Parameters"),variables:babelHelpers["extends"]({},b("SearchCometResultsDefaultQueryVariables"),{allow_streaming:s,args:l,cursor:null,feedbackSource:23,fetch_filters:n,renderLocation:e,scale:b("WebPixelRatio").get(),stream_initial_count:m})};f=o===!0&&v!=null?i({query:v,routeParams:d,sessionID:a}):null;return{queries:f!=null?{infoBoxQuery:f,searchQuery:t}:{searchQuery:t}}}function g(a){try{return JSON.parse(b("Base64").decode(a))}catch(a){return null}}function h(a){return Object.keys(a).length===0?[]:Object.keys(a).map(function(b){return a[b]})}function i(a){var c=a.query,d=a.routeParams;a=a.sessionID;if(a==null)return null;var e=typeof d.debug_ib_kgid==="string"?d.debug_ib_kgid:null,f=null;if(d.ib!==null){d=(d=JSON.stringify(d.ib))!=null?d:"";d=JSON.parse(b("Base64").decode(d));f=d.kgid}f=(d=f)!=null?d:e;return{options:{fetchPolicy:"store-or-network"},parameters:b("SearchCometInfoBoxQuery$Parameters"),variables:{bqf:"keywords_search("+b("searchCometEncodeQuery")(c)+")",id:f,session_id:a,surface:"infobox"}}}}),null);
__d("SearchCometGlobalSearchDefaultTabRoot.entrypoint",["JSResourceForInteraction","SearchCometResultsBase.entrypoint"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:b("SearchCometResultsBase.entrypoint").getPreloadProps,root:b("JSResourceForInteraction")("SearchCometGlobalSearchDefaultTabRoot.react").__setRef("SearchCometGlobalSearchDefaultTabRoot.entrypoint")};e.exports=a}),null);
__d("SearchCometGlobalSearchTopTabRoot.entrypoint",["JSResourceForInteraction","SearchCometResultsBase.entrypoint"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:b("SearchCometResultsBase.entrypoint").getPreloadProps,root:b("JSResourceForInteraction")("SearchCometGlobalSearchTopTabRoot.react").__setRef("SearchCometGlobalSearchTopTabRoot.entrypoint")};e.exports=a}),null);