if (self.CavalryLogger) { CavalryLogger.start_js(["O3omT5P"]); }

__d("CometAIProductTagSuggestionsQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"max_suggestions_per_photo"},b={defaultValue:null,kind:"LocalArgument",name:"photo_ids"},c=[{kind:"Variable",name:"max_suggestions_per_photo",variableName:"max_suggestions_per_photo"},{kind:"Variable",name:"photo_ids",variableName:"photo_ids"}],d={alias:null,args:null,kind:"ScalarField",name:"photo_id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"top_left",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"bottom_right",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"center_x",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"center_y",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},l={alias:null,args:[{kind:"Literal",name:"height",value:64},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:64}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:64,sizing:"cover-fill-cropped",width:64)'},m={alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:c,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[d,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[e,f,g,h,i,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[j,k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[l],storageKey:null},m],storageKey:null},i],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:c,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[d,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[e,f,g,h,i,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[j,k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},l,j],storageKey:null},m],storageKey:null},i],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4201423586556764",metadata:{},name:"CometAIProductTagSuggestionsQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("CometPhotoViewer_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={kind:"Literal",name:"bool_default",value:!1},c=[a];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometPhotoViewer_photo",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_add_tags",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:"user_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:"additional_profile_has_taggable_products",args:null,kind:"ScalarField",name:"has_taggable_products",storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"page_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_admin",storageKey:null},{alias:"page_shop_has_taggable_products",args:null,kind:"ScalarField",name:"has_taggable_products",storageKey:null},{kind:"InlineDataFragmentSpread",name:"FBShopsLegacyUpgradeProductTaggingUtils_page",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"legacy_shop_upgrade_admin_and_page_eligibility",storageKey:null},{alias:null,args:[{kind:"Literal",name:"disable_auto_log_exposures",value:!0},{kind:"Literal",name:"qe_universe",value:"legacy_shop_admins_on_page"}],concreteType:"QECheck",kind:"LinkedField",name:"qe_check",plural:!1,selections:[{alias:"is_in_experiment",args:[b,{kind:"Literal",name:"param_name",value:"in_product_tagging_friction_experiment"}],kind:"ScalarField",name:"bool",storageKey:'bool(bool_default:false,param_name:"in_product_tagging_friction_experiment")'},{alias:"should_show_modal",args:[b,{kind:"Literal",name:"param_name",value:"show_product_tagging_friction_modal"}],kind:"ScalarField",name:"bool",storageKey:'bool(bool_default:false,param_name:"show_product_tagging_friction_modal")'}],storageKey:'qe_check(disable_auto_log_exposures:true,qe_universe:"legacy_shop_admins_on_page")'}]}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometRemote360PhotoViewer_photo"},{args:null,kind:"FragmentSpread",name:"CometRemote3DPhotoViewer_photo"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"immersive_photo_encodings",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"projection_type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:c,storageKey:null},{kind:"InlineDataFragmentSpread",name:"CometAIProductTagSuggestionsUtil_photo",selections:[a,{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:[a,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"xy_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],storageKey:null}],storageKey:null}]},{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"photo_viewer"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometPhotoViewer_photo",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"photo_viewer")'}],type:"Photo",abstractKey:null}}();e.exports=a}),null);
__d("CometAIProductTagSuggestionsQuery.react",["CometAIProductTagSuggestionsQuery.graphql"],(function(a,b,c,d,e,f){"use strict";var g;a=g!==void 0?g:g=b("CometAIProductTagSuggestionsQuery.graphql");e.exports=a}),null);
__d("SharedAIProductTagUtils",[],(function(a,b,c,d,e,f){"use strict";f.processAIProductTagSuggestionsQueryResponse=a;f.isPointNearbyPoint=b;c=35;f.PRETAGGING_PRODUCT_THRESHOLD=c;var g=90;f.PRODUCT_SCORE_THRESHOLD=g;var h=.35;f.BOX_SCORE_THRESHOLD=h;var i=5;f.USER_TAGGING_TOLERANCE=i;function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.photo_id;a=a.suggestions;if(c==null||a==null)return;var d=[],e=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,f=a.center_y,i=a.products,j=a.score;a=a.top_left;if(c==null||f==null||j==null)return;c=c*100;f=f*100;i=i==null?void 0:i[0];var k=i==null?void 0:i.score;i=(i=i==null?void 0:i.product_item)!=null?i:{};var l=i.id,m=i.listing_price,n=i.name;i=i.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,productID:l,productScore:k};if(k!=null&&k<g&&d.length===0){if(l==null||n==null)return null;k={id:l,image_uri:i==null?void 0:(a=i.image)==null?void 0:a.uri,metadata:{product_tag_type:"AI_HIGH_CONFIDENCE"},name:n,product_price:m==null?void 0:m.formatted_amount};l=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:k,x:c,y:f});d.push(l)}else j>h&&e.push(babelHelpers["extends"]({},b,{x:c,y:f}))});b.set(c,{knownSuggestions:d,unknownSuggestions:e})});return b}function b(a,b,c,d){return a>=c-i&&a<=c+i&&b>=d-i&&b<=d+i}}),null);
__d("CometAIProductTagSuggestionsUtil.react",["CometAIProductTagSuggestionsUtil_photo.graphql","CometRelay","SharedAIProductTagUtils"],(function(a,b,c,d,e,f){"use strict";f.getUntaggedKnownTags=a;f.getUntaggedUnknownTags=c;f.canUsePretagExperience=d;var g,h=g!==void 0?g:g=b("CometAIProductTagSuggestionsUtil_photo.graphql");function i(a,c){return a.productID===c.productID||b("SharedAIProductTagUtils").isPointNearbyPoint(a.x,a.y,c.x,c.y)}function j(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.product_item)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c===void 0||c===null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function a(a,c){a=b("CometRelay").readInlineData(h,a);c=c==null?void 0:c.get((c=a==null?void 0:a.id)!=null?c:"");var d=j(a);if(!c)return[];a=c==null?void 0:c.filter(function(a){var b=(d==null?void 0:d.filter(function(b){return i({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b});return a}function c(a,c){a=b("CometRelay").readInlineData(h,a);c=c==null?void 0:c.get((c=a==null?void 0:a.id)!=null?c:"");var d=j(a);if(!c)return[];a=c==null?void 0:c.filter(function(a){var b=(d==null?void 0:d.filter(function(b){return i({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b});return a}function d(a){return!a}}),null);
__d("HoveredProductIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({hoveredProductID:null,setHoveredProductID:b("emptyFunction")});e.exports=c}),null);
__d("CometFeedStoryDropdownMenuLoggerContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({nodeID:null});e.exports=c}),null);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;f.BOX_BORDER_SIZE=a;b=1;f.INITIAL_PHOTO_RENDER_SCALE=b;c=94;f.TAGGING_BOX_SIZE=c}),null);
__d("CometPhotoViewerZoomUtils",[],(function(a,b,c,d,e,f){"use strict";f.isOverflown=a;function a(a,b,c){return c[0]===0||c[1]===0?!1:c[1]<a.clientHeight*b||c[0]<a.clientWidth*b}}),null);
__d("CometPhotoViewerImgRenderer.react",["CometHeroHoldTrigger.react","CometImage.react","react","useStable"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i={img:{objectFit:"r0294ipz"}};function j(a){var c=a.alt,d=a.currentImgSrc,e=a.height,f=a.origSrc,g=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","currentImgSrc","height","origSrc","xstyle"]);var j=b("useStable")(function(){var a=new Image();a.src=d;return a}),k=h.useState(j.complete),l=k[0],m=k[1];k=h.useState(!1);var n=k[0],o=k[1];h.useLayoutEffect(function(){if(j.complete)m(!0);else{j.onload=function(){m(!0)};j.onerror=function(){o(!0)};return function(){j.onload=null,j.onerror=null}}},[j,m,o]);return h.jsxs(h.Fragment,{children:[h.jsx(b("CometHeroHoldTrigger.react"),{description:"Progressive Image",hold:!l&&!n&&f!=null}),h.jsx(b("CometImage.react"),babelHelpers["extends"]({},a,{alt:c,height:l||f==null?void 0:e,src:l||f==null?d:f,testid:void 0,xstyle:[g,i.img]}))]})}function a(a){return h.jsx(j,babelHelpers["extends"]({},a),a.currentImgSrc)}}),null);
__d("CometPhotoViewerZoom.react",["CometMediaViewerDispatcherContext","CometMediaViewerViewStateContext","CometPhotoViewerContainerContext","CometPhotoViewerZoomUtils","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){a=a.children;var c=h.useContext(b("CometMediaViewerViewStateContext")),d=h.useContext(b("CometMediaViewerDispatcherContext")),e=h.useContext(b("CometPhotoViewerContainerContext")),f=h.useRef(null),g=h.useCallback(function(){if(e!=null&&e.current!=null){var a=e.current.getBoundingClientRect();return{height:a.height,left:a.left,top:a.top,width:a.width}}return null},[e]),i=h.useCallback(function(a){var b;b=(b=f.current)==null?void 0:b.getBoundingClientRect();var c=g();b&&c&&d({clientX:a.clientX,clientY:a.clientY,currentRectCoord:[b.top,b.left],currentRectSize:[b.width,b.height],height:c.height,type:"DRAG",width:c.width})},[d,g]),j=h.useCallback(function(){window.removeEventListener("mouseup",j),window.removeEventListener("mousemove",i)},[i]),k=h.useCallback(function(a){if(c.scale<=1)return;var e=g();if(f&&f.current&&e&&!b("CometPhotoViewerZoomUtils").isOverflown(f.current,c.scale,[e.width,e.height]))return;a.preventDefault();d({clientX:a.clientX,clientY:a.clientY,type:"DRAG_START"});window.addEventListener("mouseup",j);window.addEventListener("mousemove",i)},[d,g,i,j,c.scale]);return h.jsx("div",{onMouseDown:k,children:h.jsx("div",{className:c.prevScale!==c.scale?"heur4gxb flx89l3n tn0ko95a":"",ref:f,style:{transform:"translate("+c.translateX+"px, "+c.translateY+"px) scale("+c.scale+")"},children:a})})}}),null);
__d("CometPhotoViewerResponsiveInnerWrapper.react",["CometPhotoViewerZoom.react","CometRouteRenderType","gkx","react","stylex"],(function(a,b,c,d,e,f){"use strict";f.useCometPhotoViewerContainerStyles=k;var g,h,i=g||b("react"),j={backgroundContainerDialog:{"@media (max-width: 899px)":{height:"nos9j3a5"}},backgroundContainerDialogWithFooter:{height:"n626y76b","@media (max-width: 899px)":{height:"aessy0lw"}},backgroundContainerResponsive:{alignItems:"bp9cbjyn",display:"j83agx80",position:"l9j0dhe7","@media (max-width: 899px)":{height:"spskuzq3"}},backgroundContainerTabs:{height:"bkyfam09","@media (max-width: 899px)":{height:"pw8zj2ei"}},backgroundContainerTabsWithFooter:{height:"bekozo2m","@media (max-width: 899px)":{height:"f6tgzqhp"}},ie11PhotoWrapperWidth:{width:"k4urcfbm"},ie11minHeight:{minHeight:"kltspiyx"},image:{maxWidth:"d2edcug0","@media (max-width: 899px)":{maxHeight:"r9f5tntg"}},maxImageHeightDialog:{maxHeight:"ji94ytn4","@media (max-width: 899px)":{maxHeight:"bnxxjg7g"}},maxImageHeightDialogWithFooter:{maxHeight:"nskh8ow2","@media (max-width: 899px)":{maxHeight:"dx5evmzu"}},maxImageHeightTabs:{maxHeight:"gitj76qy","@media (max-width: 899px)":{maxHeight:"bnxxjg7g"}},maxImageHeightTabsWithFooter:{maxHeight:"kgqd366c","@media (max-width: 899px)":{maxHeight:"a7lra598"}},passthroughImage:{backgroundPosition:"d2hbt3d9",backgroundRepeat:"qb00l2mb",backgroundSize:"gj6al65z",height:"datstx6m",width:"k4urcfbm"},photoWrapperPlaceholder:{height:"datstx6m",width:"k4urcfbm"},photoWrapperResponsive:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",position:"l9j0dhe7"},placeholderContainer:{height:"datstx6m",width:"k4urcfbm"}};function k(a,c){a===void 0&&(a=!1);c===void 0&&(c=!1);var d=b("CometRouteRenderType").useIsPushView();return(h||(h=b("stylex")))(j.backgroundContainerResponsive,!a&&d&&j.backgroundContainerDialog,!a&&!d&&j.backgroundContainerTabs,a&&d&&j.backgroundContainerDialogWithFooter,a&&!d&&j.backgroundContainerTabsWithFooter,c&&j.placeholderContainer)}function l(a,c){var d=b("CometRouteRenderType").useIsPushView();return(h||(h=b("stylex")))(!a&&d&&j.maxImageHeightDialog,!a&&!d&&j.maxImageHeightTabs,a&&d&&j.maxImageHeightDialogWithFooter,a&&!d&&j.maxImageHeightTabsWithFooter,c&&j.passthroughImage,!c&&j.image,b("gkx")("1299319")&&j.ie11minHeight)}function m(a,c){var d=b("CometRouteRenderType").useIsPushView();return[!a&&d&&j.maxImageHeightDialog,!a&&!d&&j.maxImageHeightTabs,a&&d&&j.maxImageHeightDialogWithFooter,a&&!d&&j.maxImageHeightTabsWithFooter,c&&j.passthroughImage,!c&&j.image,b("gkx")("1299319")&&j.ie11minHeight]}function a(a,c){var d=a.height,e=a.imageUri,f=a.showPlaceholderImage;f=f===void 0?!0:f;var g=a.width;a=a.withFooter;a=a===void 0?!1:a;a=l(a,!0);var m=k(!1,!0);return i.jsx("div",{className:m,ref:(m=c)!=null?m:null,children:e!=null&&f&&i.jsx("div",{className:(h||(h=b("stylex")))(j.photoWrapperResponsive,j.photoWrapperPlaceholder),children:i.jsx("div",{className:a,style:d!=null&&g!=null?{backgroundImage:"url("+e+")",maxHeight:d,maxWidth:g}:{backgroundImage:"url("+e+")"}},e)})})}function c(a,c){var d=a.imageComponent,e=a.imageComponentWithXStyle;a=a.withFooter;a=a===void 0?!1:a;var f=l(a,!1);a=m(a,!1);c=i.jsx("div",{className:(h||(h=b("stylex")))(j.photoWrapperResponsive,b("gkx")("1299319")&&j.ie11PhotoWrapperWidth),ref:c,children:d!=null?d(f):e!=null?e(a):null});return i.jsx(b("CometPhotoViewerZoom.react"),{children:c})}d=i.forwardRef(c);f.CometPhotoViewerImageWrapper=d;e=i.forwardRef(a);f.CometPhotoViewerPlaceholderWrapper=e}),null);
__d("CometPhotoViewerViewStateContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});e.exports=c}),null);
__d("CometPhotoViewerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext(b("emptyFunction"));e.exports=c}),null);
__d("NumAiSuggestionsBubbleImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1746400");c=b("FalcoLoggerInternal").create("num_ai_suggestions_bubble_impression",a);e.exports=c}),null);
__d("ProductTagPhotoViewerDoneClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744225");c=b("FalcoLoggerInternal").create("product_tag_photo_viewer_done_click",a);e.exports=c}),null);
__d("CometPhotoViewer.react",["fbt","Actor","CometAIProductTagSuggestionsUtil.react","CometHero.react","CometImage.react","CometMediaViewerStage.react","CometPagelet.react","CometPhotoTaggingConstants","CometPhotoViewerContainerContext","CometPhotoViewerImgRenderer.react","CometPhotoViewerResponsiveInnerWrapper.react","CometPhotoViewerViewStateContext","CometPhotoViewerViewStateDispatcherContext","CometPhotoViewer_photo.graphql","CometPlaceholder.react","CometRelay","CometRouteParams","CometRouteRenderType","CometTheme.react","CometVisualCompletionAttributes","CometWarningScreenContext","FBShopsLegacyUpgradeProductTaggingUtils","JSResourceForInteraction","NumAiSuggestionsBubbleImpressionFalcoEvent","ProductTagPhotoViewerDoneClickFalcoEvent","TetraButton.react","TetraText.react","WebSession","deferredLoadComponent","react","recoverableViolation","requireDeferred","requireDeferredForDisplay","stylex","useCometLazyDialog","useCurrentRoute","useMediaViewerVPVDLogger","useMergeRefs","useRoutePassthroughProps","useStoryViewabilityLogger"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j,k=i||b("react"),l=b("requireDeferred")("CometMediaTagFalcoEvent").__setRef("CometPhotoViewer.react");c=b("requireDeferred")("CometPhotoTagLayer.react").__setRef("CometPhotoViewer.react");d=b("requireDeferredForDisplay")("CometPhotoViewerTopRightIcons.react").__setRef("CometPhotoViewer.react");f=b("requireDeferredForDisplay")("CometRemote360PhotoViewer.react").__setRef("CometPhotoViewer.react");e=b("requireDeferredForDisplay")("CometRemote3DPhotoViewer.react").__setRef("CometPhotoViewer.react");var m=b("JSResourceForInteraction")("CometPhotoViewerProductTagEducationDialog.react").__setRef("CometPhotoViewer.react"),n=b("deferredLoadComponent")(c),o=b("deferredLoadComponent")(d),p=b("deferredLoadComponent")(f),q=b("deferredLoadComponent")(e),r={container:{display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",position:"l9j0dhe7"},noPointerEvents:{pointerEvents:"hzruof5a"},peopleTagInstructionText:{paddingBottom:"ihqw7lf3"},productTagInstructions:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3"},tagDoneDiv:{pointerEvents:"oqq733wu"},tagInstruction:{position:"pmk7jnqg",start:"kfkz5moi",transform:"cj5g2342"},tagInstructionRow:{alignItems:"aovydwv3",backgroundImage:"kpb67iw4",bottom:"i09qtzwb",display:"j83agx80",height:"fdipuqhw",justifyContent:"taijpn5t",paddingBottom:"jfpizvyy",pointerEvents:"hzruof5a",position:"pmk7jnqg",width:"k4urcfbm"},tagInstructionText:{alignItems:"bp9cbjyn",display:"j83agx80",paddingEnd:"rv4hoivh"},tagLayer:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"}};function aa(a){return(a||[]).some(function(a){a=a.projection_type;return a==="tiled_cubemap"})}function ba(a){return(a||[]).some(function(a){a=a.projection_type;return a==="three_d"})}var ca=h!==void 0?h:h=b("CometPhotoViewer_photo.graphql");function a(a){var c,d,e,f,h,i,s,t,u=k.useContext(b("CometPhotoViewerViewStateDispatcherContext")),v=k.useContext(b("CometPhotoViewerViewStateContext")),w=b("useCometLazyDialog")(m),da=w[0];w=k.useRef(null);var x=b("Actor").useActor(),y=x[0];x[1];x=a.origHeight;var z=a.origSrc,A=a.origWidth,B=a.photo,C=a.photoTagLayerQueryReference,D=a.showTag;D=D===void 0?!1:D;var ea=a.storyRenderLocation,fa=babelHelpers.objectWithoutPropertiesLoose(a,["origHeight","origSrc","origWidth","photo","photoTagLayerQueryReference","showTag","storyRenderLocation"]),E=b("CometRelay").useFragment(ca,B);B=k.useCallback(function(){u({tagData:{isProductTagging:!1,tagModeEnabled:!1},type:"UPDATE_TAG_DATA"})},[u]);var F=E==null?void 0:(c=E.image)==null?void 0:c.uri,G=E==null?void 0:E.accessibility_caption,H=E==null?void 0:E.id,I=E==null?void 0:(c=E.owner)==null?void 0:c.id;c=(c=E==null?void 0:(c=E.tags)==null?void 0:c.edges)!=null?c:[];var J=k.useRef(new Set(c.map(function(a){return a==null?void 0:(a=a.node)==null?void 0:a.name}))),K=E==null?void 0:E.created_time,L=E==null?void 0:(c=E.container_story)==null?void 0:c.post_id;c=(E==null?void 0:E.can_viewer_add_tags)===!0;d=E==null?void 0:(d=E.cix_screen)==null?void 0:d.view_model;var M=k.useMemo(function(){return{authorId:I,createdTime:K,fbid:H,source:6,storyContainerId:L}},[I,K,H,L]);M=b("useMediaViewerVPVDLogger")(M);var N=M[0],O=M[1];M=E==null?void 0:(M=E.container_story)==null?void 0:M.encrypted_tracking;e=E==null?void 0:(e=E.container_story)==null?void 0:e.viewability_config;f=(f=E==null?void 0:E.container_story)!=null?f:{};f=f.client_view_config;f={can_delay_log_impression:f==null?void 0:f.can_delay_log_impression,use_banzai_signal_imp:f==null?void 0:f.use_banzai_signal_imp,use_banzai_vital_imp:f==null?void 0:f.use_banzai_vital_imp};f=b("useStoryViewabilityLogger")({clientViewConfig:f,disabledViewabilityEventTypes:[5],encryptedTracking:M,position:0,viewabilityConfig:e});M=f.ref;e=b("useMergeRefs")(N,M);f=b("CometPhotoViewerResponsiveInnerWrapper.react").useCometPhotoViewerContainerStyles();var P=b("CometWarningScreenContext").useIsOverlayShown();N=b("CometAIProductTagSuggestionsUtil.react").getUntaggedKnownTags(E,v.knownAITags);M=b("CometAIProductTagSuggestionsUtil.react").getUntaggedUnknownTags(E,v.unknownAITags);var Q=N.length+M.length,R=k.useRef(function(){b("NumAiSuggestionsBubbleImpressionFalcoEvent").log(function(){var a;return{creator_id:E==null?void 0:(a=E.owner)==null?void 0:a.page_id,media_id:H,media_type:"photo",platform:"comet",referral_source:"post_viewer"}})});k.useEffect(function(){Q>0&&(R.current&&R.current())},[Q]);N=function(){var a;u({tagData:{isProductTagging:!1,tagModeEnabled:!1},type:"UPDATE_TAG_DATA"});if(H==null){b("recoverableViolation")("photo id can not be null","comet_feed");return}a=(a=E==null?void 0:(a=E.tags)==null?void 0:a.edges)!=null?a:[];a=a.map(function(a){return a==null?void 0:(a=a.node)==null?void 0:a.name});var c=b("WebSession").getId(),d=J.current.size?a.filter(function(a){return!J.current.has(a)}):a;S?b("ProductTagPhotoViewerDoneClickFalcoEvent").log(function(){return{container_post_id:L,creator_id:y,media_id:H,media_type:"photo",platform:"comet",referral_source:"post_viewer"}}):l.onReady(function(a){a.log(function(){return{media_fbid:H,num_users_tagged:d.length,session_id:c}})});J.current=new Set(a)};M=Boolean(E==null?void 0:(M=E.tags)==null?void 0:M.edges.some(function(a){return!(a==null?void 0:(a=a.tag)==null?void 0:a.is_product_tag)}));h=((E==null?void 0:(h=E.photo_product_tags)==null?void 0:h.length)||0)>0;i=Boolean(E==null?void 0:(i=E.owner)==null?void 0:i.page_shop_has_taggable_products)&&Boolean(E==null?void 0:(i=E.owner)==null?void 0:i.is_viewer_admin);s=E==null?void 0:(s=E.owner)==null?void 0:s.additional_profile_has_taggable_products;s=s!==null&&s!==void 0?Boolean(s)&&y===(E==null?void 0:(s=E.owner)==null?void 0:s.user_id):i&&Boolean((E==null?void 0:(s=E.owner)==null?void 0:s.page_id)!=null)&&y===(E==null?void 0:(s=E.owner)==null?void 0:s.page_id);h=M||!h&&!M&&!i;var S=s&&!M;s=(E==null?void 0:E.owner)&&(E==null?void 0:(i=E.owner)==null?void 0:i.page_id)!=null?b("FBShopsLegacyUpgradeProductTaggingUtils").getProductTaggingLegacyUpgradeStatus(E==null?void 0:E.owner):null;M=b("CometRouteParams").useRouteParams();i=b("useCurrentRoute")();i=(i=i==null?void 0:i.transparent)!=null?i:!1;var T=M.aymt_channel!==null&&M.aymt_channel!==void 0,U=k.useRef(!1);k.useEffect(function(){T&&(U.current||da({})),U.current=!0});M=b("CometRouteRenderType").useIsPushView();var V=b("CometWarningScreenContext").useParentRenderInstructions(),W=E==null?void 0:(t=E.image)==null?void 0:t.width,X=E==null?void 0:(t=E.image)==null?void 0:t.height;t=b("useRoutePassthroughProps")();var Y=(t==null?void 0:t.glbFileURI)!=null?String(t==null?void 0:t.glbFileURI):null;t=k.useMemo(function(){var a;if(E==null||F==null||W==null||X==null)return null;a=k.jsx(b("CometImage.react"),{alt:(a=G)!=null?a:void 0,height:X,src:F,width:W},F);if(ba(E==null?void 0:E.immersive_photo_encodings))return k.jsx(q,{fallback:a,photo:E});else if(aa(E==null?void 0:E.immersive_photo_encodings))return k.jsx(p,{fallback:a,headingIndicationLocationTop:!0,photo:E});else if(Y!=null)return k.jsx(q,{fallback:a,glbFileURI:String(Y),photo:E})},[F,X,E,W,Y]);if(F==null){b("recoverableViolation")("Error loading media. More investigation is needed, might be an invalid photo, a special type of MediaSet, or something else.","comet_ui");return g._("No valid photo to display.")}var Z=V==="CLIP_TO_MEDIA",$=d!=null?k.jsx(b("CometRelay").MatchContainer,{match:d,props:{alwaysShowDetails:!0,data:d,isFullScreenMediaPlayerStyle:!0,mediaUri:F,surface:"photo_viewer"}}):null,ga=(V=x)!=null?V:X,ha=D&&C!=null?k.jsx(b("CometPlaceholder.react"),{fallback:null,children:k.jsx("div",babelHelpers["extends"]({},b("CometVisualCompletionAttributes").IGNORE,{className:(j||(j=b("stylex")))(r.tagLayer,!v.tagModeEnabled&&r.noPointerEvents),children:k.jsx(n,{isTaggingProducts:v.isProductTagging,photoTagLayerQueryReference:C,tagBoxSize:b("CometPhotoTaggingConstants").TAGGING_BOX_SIZE,tagModeEnabled:v.tagModeEnabled})}))}):null,ia=b("CometVisualCompletionAttributes").MEDIA_VC_IMAGE;d=k.jsx(b("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponentWithXStyle:function(a){var c;return k.jsxs(k.Fragment,{children:[O,k.jsx(b("CometHero.react"),{description:"MainPhoto"}),k.jsx(b("CometPhotoViewerImgRenderer.react"),babelHelpers["extends"]({},ia,{alt:(c=G)!=null?c:void 0,currentImgSrc:F,height:(c=ga)!=null?c:void 0,origSrc:z,xstyle:a})),Z&&$,ha]})}});V=k.jsx(b("CometPagelet.react").Placeholder,{className:f,fallback:z!=null?k.jsx(b("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerPlaceholderWrapper,{height:x,imageUri:z,ref:e,showPlaceholderImage:z!=null&&A!=null&&x!=null&&!P,width:A}):k.jsx("div",{className:f,ref:e,children:k.jsx(b("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerImageWrapper,{imageComponentWithXStyle:function(a){var c;return k.jsxs(k.Fragment,{children:[O,!P&&k.jsx(b("CometImage.react"),{alt:(c=G)!=null?c:void 0,src:F,testid:void 0,xstyle:a},F)]})}})}),name:"MediaViewerPhoto",pageletType:"media",ref:e,children:t!=null?t:d},F);x=v.isProductTagging?(j||(j=b("stylex")))(r.productTagInstructions):(j||(j=b("stylex")))(r.tagInstruction);A=v.isProductTagging?g._("Click on the photo to start product tagging"):g._("Click on the photo to start tagging");f=D&&C!=null&&c===!0&&!t;return k.jsx("div",{className:(j||(j=b("stylex")))(r.container),"data-testid":void 0,ref:w,children:k.jsxs(b("CometPhotoViewerContainerContext").Provider,{value:w,children:[k.jsx(b("CometMediaViewerStage.react"),babelHelpers["extends"]({backgroundColor:i&&M?"dark":"default",initialTracePolicy:a.initialTracePolicy,onNavigatePhoto:B,storyRenderLocation:ea,subOrigin:a.subOrigin},fa,{children:V})),P?null:k.jsx(o,{authorId:I,canTag:f,fromAYMTRetroTagNotification:T,numNewAISuggestions:Q,photoID:H,shouldShowPeopleTagButton:h,shouldShowProductTagButton:S,storyContainerId:L,upgradeShopModalInfo:s}),f&&v.tagModeEnabled?k.jsx(b("CometTheme.react"),{theme:"dark",xstyle:r.tagInstructionRow,children:k.jsxs("div",{className:x,children:[k.jsx("div",{className:(j||(j=b("stylex")))(r.tagInstructionText),children:k.jsx("div",{className:S!==!0?(j||(j=b("stylex")))(r.peopleTagInstructionText):null,children:k.jsx(b("TetraText.react"),{color:"primary",numberOfLines:1,type:"headline4",children:A})})}),k.jsx("div",{className:(j||(j=b("stylex")))(r.tagDoneDiv),children:k.jsx(b("TetraButton.react"),{label:g._("Done Tagging"),onPress:N,testid:void 0,type:"primary"})})]})}):null,!Z&&$]})})}}),null);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744233");c=b("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e.exports=c}),null);