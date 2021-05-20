if (self.CavalryLogger) { CavalryLogger.start_js(["2Yp8Wj1"]); }

__d("getCometMediaURL_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"getCometMediaURL_media"};e.exports=a}),null);
__d("useCometMediaURL_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};a=[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometMediaURL_media",selections:[{kind:"InlineDataFragmentSpread",name:"getCometMediaURL_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_playable",storageKey:null},{kind:"InlineFragment",selections:a,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:a,type:"Video",abstractKey:null}]}],type:"Media",abstractKey:"__isMedia"}}();e.exports=a}),null);
__d("XCometPageVanityNoMediasetPhotoControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/photos/{?set}/{fbid}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometPageVanityPhotoControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/photos/{set}/{fbid}/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometPhotoControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/photo/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVideoControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{page_token}/videos/{?set}/{story_token}/{?*extra_junk}",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("getCometMediaURL",["CometRelay","XCometPageVanityNoMediasetPhotoControllerRouteBuilder","XCometPageVanityPhotoControllerRouteBuilder","XCometPhotoControllerRouteBuilder","XCometVideoControllerRouteBuilder","getCometMediaURL_media.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a,c){var d;a=b("CometRelay").readInlineData(g!==void 0?g:g=b("getCometMediaURL_media.graphql"),a);var e=a==null?void 0:a.id,f=(a==null?void 0:a.is_playable)===!0;d=(d=a==null?void 0:(d=a.owner)==null?void 0:d.uri_token)!=null?d:a==null?void 0:(d=a.owner)==null?void 0:d.id;a=(a==null?void 0:(a=a.owner)==null?void 0:a.__typename)==="Page";if(e==null)return null;if(f)return d==null?null:b("XCometVideoControllerRouteBuilder").buildURL({page_token:d,set:c,story_token:e});else if(a&&d!=null)if(c!=null&&c!=="")return b("XCometPageVanityPhotoControllerRouteBuilder").buildURL({fbid:e,set:c,vanity:d});else return b("XCometPageVanityNoMediasetPhotoControllerRouteBuilder").buildURL({fbid:e,vanity:d});else return b("XCometPhotoControllerRouteBuilder").buildURL({fbid:e,set:c})}}),null);
__d("useCometMediaURL",["CometRelay","getCometMediaURL","useCometMediaURL_media.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g;function a(a,c){a=b("CometRelay").useFragment(g!==void 0?g:g=b("useCometMediaURL_media.graphql"),a);return b("getCometMediaURL")(a,c)}}),null);