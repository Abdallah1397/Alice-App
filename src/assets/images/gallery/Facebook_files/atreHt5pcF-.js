if (self.CavalryLogger) { CavalryLogger.start_js(["eLBQmpa"]); }

__d("PagesCometAdminPhotosCreateAlbumButton_page$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesCometAdminPhotosCreateAlbumButton_page$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_profile_permissions",storageKey:null}]};e.exports=a}),null);
__d("PagesCometAdminPhotosCreateAlbumButton_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometAdminPhotosCreateAlbumButton_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"uri_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_profile_permissions",storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("XCometPageVanityPhotosCreateAlbumControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/{vanity}/photos/album/create/",Object.freeze({ref:""}),void 0);c=a;e.exports=c}),null);
__d("PagesCometAdminPhotosCreateAlbumButton.react",["fbt","ix","CometRelay","PagesCometAdminPhotosCreateAlbumButton_page.graphql","PagesCometPageContext.react","TetraButton.react","XCometPageVanityPhotosCreateAlbumControllerRouteBuilder","fbicon","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j,k=j||b("react");function a(a){a=b("CometRelay").useFragment(i!==void 0?i:i=b("PagesCometAdminPhotosCreateAlbumButton_page.graphql"),a.page);var c=k.useContext(b("PagesCometPageContext.react").PagesCometPageContext);c=c.isAdminView;if(!c)return null;c=a.viewer_profile_permissions;var d=a==null?void 0:a.uri_token;if(a==null||c==null||d==null)return b("recoverableViolation")("Failed to fetch page data for Create Album Button.","pages_consumer_experience_www");a=c.includes("CREATE_CONTENT");return a?k.jsx(b("TetraButton.react"),{icon:b("fbicon")._(h("483768"),16),label:g._("Create Album"),linkProps:{url:b("XCometPageVanityPhotosCreateAlbumControllerRouteBuilder").buildURL({vanity:d})},reduceEmphasis:!0,size:"medium",type:"secondary"}):null}}),null);