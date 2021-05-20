if (self.CavalryLogger) { CavalryLogger.start_js(["Qv0B+c5"]); }

__d("CometMegaMenuSectionProductGrid_folderBookmarksConnection.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometMegaMenuSectionProductGrid_folderBookmarksConnection",selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"FolderBookmarksConnection",abstractKey:null};e.exports=a}),null);
__d("CometMegaMenuSectionProductListItem_bookmark.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"scale",variableName:"scale"},b={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometMegaMenuSectionProductListItem_bookmark",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},a],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[b],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},a,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[b,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null}],type:"Bookmark",abstractKey:null}}();e.exports=a}),null);
__d("CometMegaMenuSectionProductList_folderBookmarksConnection.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMegaMenuSectionProductList_folderBookmarksConnection",selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometMegaMenuSectionProductListItem_bookmark"}],storageKey:null}],type:"FolderBookmarksConnection",abstractKey:null};e.exports=a}),null);
__d("CometSettingsDropdownAllProductsSection_folderBookmark.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"bookmarkNameFilter"},{kind:"RootArgument",name:"useGridLayout"}],kind:"Fragment",metadata:null,name:"CometSettingsDropdownAllProductsSection_folderBookmark",selections:[{condition:"useGridLayout",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}]},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Variable",name:"bookmark_name_filter",variableName:"bookmarkNameFilter"},{kind:"Literal",name:"environment",value:"COMET"}],concreteType:"FolderBookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"visible_count",storageKey:null},{condition:"useGridLayout",kind:"Condition",passingValue:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometMegaMenuSectionProductList_folderBookmarksConnection"}]},{condition:"useGridLayout",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometMegaMenuSectionProductGrid_folderBookmarksConnection"}]}],storageKey:null}],type:"FolderBookmark",abstractKey:null};e.exports=a}),null);
__d("CometSettingsDropdownAllProductsSectionsQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkNameFilter"},b={defaultValue:null,kind:"LocalArgument",name:"scale"},c={defaultValue:null,kind:"LocalArgument",name:"useGridLayout"},d=[{kind:"Literal",name:"folder",value:"SOCIAL"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f=[{kind:"Variable",name:"bookmark_name_filter",variableName:"bookmarkNameFilter"},{kind:"Literal",name:"environment",value:"COMET"}],g={alias:null,args:null,kind:"ScalarField",name:"visible_count",storageKey:null},h=[e,{alias:null,args:f,concreteType:"FolderBookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[g],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometSettingsDropdownAllProductsSection_folderBookmark"}],i=[{kind:"Literal",name:"folder",value:"ENTERTAINMENT"}],j=[{kind:"Literal",name:"folder",value:"SHOPPING"}],k=[{kind:"Literal",name:"folder",value:"PERSONAL"}],l=[{kind:"Literal",name:"folder",value:"PROFESSIONAL"}],m=[{kind:"Literal",name:"folder",value:"COMMUNITY_RESOURCES"}],n=[{kind:"Literal",name:"folder",value:"APPS_FROM_FACEBOOK"}],o={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},s={kind:"Variable",name:"scale",variableName:"scale"},t={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},u={alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},s],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[t],storageKey:null};f=[e,{alias:null,args:f,concreteType:"FolderBookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[g,{condition:"useGridLayout",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[e,o,p,q,r,u,{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},s,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null}],storageKey:null}]},{condition:"useGridLayout",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[e,o,p,r,u],storageKey:null}]}],storageKey:null},{condition:"useGridLayout",kind:"Condition",passingValue:!0,selections:[q]},o];return{fragment:{argumentDefinitions:[a,b,c],kind:"Fragment",metadata:null,name:"CometSettingsDropdownAllProductsSectionsQuery",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"social",args:d,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"SOCIAL")'},{alias:"entertainment",args:i,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"ENTERTAINMENT")'},{alias:"shopping",args:j,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"SHOPPING")'},{alias:"personal",args:k,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"PERSONAL")'},{alias:"professional",args:l,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"PROFESSIONAL")'},{alias:"communityResources",args:m,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"COMMUNITY_RESOURCES")'},{alias:"appsFromFacebook",args:n,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:h,storageKey:'bookmark_folder(folder:"APPS_FROM_FACEBOOK")'}],storageKey:null},action:"THROW",path:"viewer"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a,c],kind:"Operation",name:"CometSettingsDropdownAllProductsSectionsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:"social",args:d,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"SOCIAL")'},{alias:"entertainment",args:i,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"ENTERTAINMENT")'},{alias:"shopping",args:j,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"SHOPPING")'},{alias:"personal",args:k,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"PERSONAL")'},{alias:"professional",args:l,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"PROFESSIONAL")'},{alias:"communityResources",args:m,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"COMMUNITY_RESOURCES")'},{alias:"appsFromFacebook",args:n,concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:f,storageKey:'bookmark_folder(folder:"APPS_FROM_FACEBOOK")'}],storageKey:null}]},params:{id:"5215813221822707",metadata:{},name:"CometSettingsDropdownAllProductsSectionsQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometMegaMenuSearchInput.react",["fbt","ix","CometRoundedTextInput.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=i||b("react");function a(a){var c=a.onSearchInputChange;a=a.placeholder;return j.jsx(b("CometRoundedTextInput.react"),{icon:j.jsx(b("TetraIcon.react"),{color:"tertiary",icon:b("fbicon")._(h("491282"),16)}),label:g._("Search"),onChange:function(a){return c(a.target.value)},placeholder:a,size:"medium"})}}),null);
__d("CometMegaMenuNullState.react",["fbt","CometAccessibilityAnnouncement.react","NullStateNoResults","TetraNullState.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(){return i.jsx(b("CometAccessibilityAnnouncement.react"),{isVisible:!0,children:i.jsx(b("TetraNullState.react"),{body:g._("Try different keywords or make sure everything is spelled correctly."),headline:g._("We didn't find anything"),icon:b("NullStateNoResults")})})}}),null);
__d("CometSettingsDropdownAllProductsSection.react",["CometColumn.react","CometColumnItem.react","CometRelay","CometSettingsDropdownAllProductsSection_folderBookmark.graphql","TetraText.react","TetraUnitHeader.react","cr:2050580","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.folderBookmark,d=a.hasTopDivider;d=d===void 0?!0:d;a=a.onPress;c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometSettingsDropdownAllProductsSection_folderBookmark.graphql"),c);var e=c.bookmarks,f=c.name;return(e==null?void 0:e.visible_count)===0?null:i.jsxs(b("CometColumn.react"),{paddingHorizontal:0,paddingTop:0,paddingVertical:20,children:[i.jsx(b("CometColumnItem.react"),{paddingHorizontal:0,paddingTop:0,paddingVertical:8,children:i.jsx(b("TetraUnitHeader.react"),{body:(c==null?void 0:c.description)!=null?i.jsx(b("TetraText.react"),{color:"secondary",type:"body4",children:c.description}):null,hasTopDivider:d,headline:f,level:3,paddingHorizontal:8,paddingTop:d?20:8})}),c.bookmarks&&b("cr:2050580")&&i.jsx(b("cr:2050580"),{bookmarks:c.bookmarks,onPress:a})]})}}),null);
__d("CometSettingsDropdownAllProductsSections.react",["fbt","CometMegaMenuNullState.react","CometSettingsDropdownAllProductsSection.react","CometSettingsDropdownAllProductsSectionsQuery.graphql","RelayHooks","react","useAccessibilityAlerts"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react");function a(a){var c=a.nameFilter,d=a.onPress;a=a.queryRef;a=b("RelayHooks").usePreloadedQuery(h!==void 0?h:h=b("CometSettingsDropdownAllProductsSectionsQuery.graphql"),a);a=a.viewer;var e=a.appsFromFacebook,f=a.communityResources,i=a.entertainment,k=a.personal,l=a.professional,m=a.shopping;a=a.social;a=[a,i,m,k,l,f,e].filter(Boolean);var n=a.reduce(function(a,b){return a+((b=(a=b.bookmarks)==null?void 0:a.visible_count)!=null?b:0)},0);i=b("useAccessibilityAlerts")();m=i[0];var o=i[1],p=n>0&&c;j.useEffect(function(){p&&p&&o(g._({"*":"Found {number} shortcuts matching your search term. Press Tab to navigate results.","_1":"Found 1 shortcut matching your search term. Press Tab to navigate results."},[g._plural(n,"number")]))},[n,o,p]);if(n===0)return j.jsx("div",{className:"datstx6m j83agx80",children:j.jsx(b("CometMegaMenuNullState.react"),{})});k=a.map(function(a,c){return j.jsx(b("CometSettingsDropdownAllProductsSection.react"),{folderBookmark:a,hasTopDivider:c>0,onPress:d},a.id)});return j.jsxs(j.Fragment,{children:[p&&m,k]})}}),null);
__d("CometHomeMegaMenuAllProducts.react",["fbt","CometCard.react","CometColumn.react","CometColumnItem.react","CometMegaMenuListOrGridSectionsLoadingState.react","CometMegaMenuSearchInput.react","CometPlaceholder.react","CometRelay","CometSettingsDropdownAllProductsSections.react","CometSettingsDropdownAllProductsSectionsQuery.graphql","qex","react","useDebounced"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j={cardWidth:{width:"o36gj0jk"},minHeight:{minHeight:"pxmt8ct2"}};function a(a){var c=a.onClose;a=a.queryRef;var d=b("CometRelay").useQueryLoader(b("CometSettingsDropdownAllProductsSectionsQuery.graphql"),a),e=d[0],f=d[1];d=i.useState("");var h=d[0],k=d[1];d=b("useDebounced")(function(a){f({bookmarkNameFilter:a,useGridLayout:b("qex")._("2007682")!=="mega_menu_v3"}),k(a)});return i.jsx(b("CometCard.react"),{background:"white",dropShadow:1,xstyle:j.minHeight,children:i.jsxs(b("CometColumn.react"),{paddingHorizontal:8,xstyle:j.cardWidth,children:[i.jsx(b("CometColumnItem.react"),{paddingHorizontal:16,paddingVertical:16,children:i.jsx(b("CometMegaMenuSearchInput.react"),{onSearchInputChange:d,placeholder:g._("Search Menu")})}),i.jsx(b("CometColumnItem.react"),{children:i.jsx(b("CometPlaceholder.react"),{fallback:i.jsx(b("CometMegaMenuListOrGridSectionsLoadingState.react"),{}),children:i.jsx(b("CometSettingsDropdownAllProductsSections.react"),{nameFilter:h,onPress:c,queryRef:(d=e)!=null?d:a})})})]})})}}),null);
__d("CometHomeMegaMenuCreateMenu.react",["fbt","CometCard.react","CometHomeCreateMenuContent.react","CometRow.react","CometRowItem.react","TetraText.react","react","useCreateMenuComposerDialog"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){a=a.onClose;var c=b("useCreateMenuComposerDialog")();c=c[0];return i.jsxs(b("CometCard.react"),{background:"white",dropShadow:1,children:[i.jsx(b("CometRow.react"),{paddingVertical:16,children:i.jsx(b("CometRowItem.react"),{children:i.jsx(b("TetraText.react"),{type:"headlineEmphasized2",children:g._("Create")})})}),i.jsx(b("CometHomeCreateMenuContent.react"),{hideBody:!0,onClose:a,showComposerDialog:c})]})}}),null);
__d("CometHomeMegaMenuRoot.react",["fbt","CometCard.react","CometColumn.react","CometColumnItem.react","CometHomeMegaMenuAllProducts.react","CometHomeMegaMenuCreateMenu.react","CometPopover.react","CometResponsiveColumns.react","CometScrollView.react","CometStickyView.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j={card:{minHeight:"lusp5ytr"},createMenu:{maxWidth:"cxpb2tes",overflowAnchor:"rek2kq2y"},scrollView:{height:"b4l40cvg",paddingBottom:"ihqw7lf3",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}};function a(a){var c=a.props.onClose;a=a.queries;a=a.megaMenuQueryRef;return i.jsx(b("CometPopover.react"),{children:i.jsxs(b("CometCard.react"),{background:"card-flat",xstyle:j.card,children:[i.jsx(b("CometColumn.react"),{paddingHorizontal:16,paddingVertical:16,children:i.jsx(b("CometColumnItem.react"),{children:i.jsx(b("TetraText.react"),{type:"headlineEmphasized1",children:g._("Menu")})})}),i.jsx(b("CometScrollView.react"),{xstyle:j.scrollView,children:i.jsxs(b("CometResponsiveColumns.react").Container,{children:[i.jsx(b("CometResponsiveColumns.react").Column,{children:i.jsx(b("CometHomeMegaMenuAllProducts.react"),{onClose:c,queryRef:a})}),i.jsx(b("CometResponsiveColumns.react").Column,{xstyle:j.createMenu,children:i.jsx(b("CometStickyView.react"),{bottom:0,top:0,children:i.jsx(b("CometHomeMegaMenuCreateMenu.react"),{onClose:c})})})]})})]})})}}),null);
__d("CometMegaMenuSectionProductGridItem.react",["CometPressable.react","CometRow.react","CometRowItem.react","CometTooltip.react","ImageIconSource","TetraIcon.react","TetraText.react","react","useBookmarkFalcoFullViewLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i={product:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",width:"k4urcfbm"}},j=2,k=function(a){return(a==null?void 0:a.getBoundingClientRect==null?void 0:a.getBoundingClientRect().width)||0},l=function(a){return(a==null?void 0:a.getBoundingClientRect==null?void 0:a.getBoundingClientRect().height)||0},m=function(a){var b;if(!a||!document.body)return 0;var c=a.cloneNode(!0);c.style.contain="content";c.style.position="fixed";c.style.top="0";c.style.visibility="hidden";c.style.width=k(a)+"px";c.style.maxHeight="";c.style.WebkitLineClamp="";(a=document.body)==null?void 0:a.appendChild(c);a=l(c);(b=c.parentNode)==null?void 0:b.removeChild(c);return a};function a(a){var c=a.bookmarkName,d=a.iconUrl,e=a.index,f=a.onPress,g=a.tracking;a=a.url;var k=h.useState(!1),n=k[0],o=k[1];k=h.useCallback(function(a){a=a==null?void 0:a.children[0];var b=m(a);a=l(a);o(a<Math.round(b))},[]);g=b("useBookmarkFalcoFullViewLogger")(g,e,null,"COMET_MEGA_MENU");return h.jsx(b("CometTooltip.react"),{tooltip:n?c:null,children:h.jsxs(b("CometPressable.react"),{linkProps:{url:a},onPress:f,ref:g,xstyle:i.product,children:[h.jsx(b("CometRow.react"),{align:"center",expanding:!0,paddingVertical:8,children:h.jsx(b("CometRowItem.react"),{children:h.jsx(b("TetraIcon.react"),{icon:new(b("ImageIconSource"))(d,36,36)})})}),h.jsx(b("CometRow.react"),{align:"center",paddingTop:0,paddingVertical:8,children:h.jsx(b("CometRowItem.react"),{children:h.jsx(b("TetraText.react"),{align:"center",numberOfLines:j,ref:k,type:"body4",children:c.trim()})})})]})})}}),null);
__d("logMegaMenuClick",["requireDeferred"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("requireDeferred")("WebBookmarkClickFalcoEvent").__setRef("logMegaMenuClick");function a(a){var b=a.index,c=a.tracking;g.onReady(function(a){var d=b.toString();a.log(function(){return{interface_override:"comet_www",item_rank:d,surface:"COMET_MEGA_MENU",tracking_data:c}})})}}),null);
__d("CometMegaMenuSectionProductGrid.react",["CometColumnItem.react","CometMegaMenuSectionProductGridItem.react","CometMegaMenuSectionProductGrid_folderBookmarksConnection.graphql","CometRelay","CometSimpleGrid.react","FBLogger","logMegaMenuClick","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.bookmarks,d=a.onPress;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometMegaMenuSectionProductGrid_folderBookmarksConnection.graphql"),c);c=a.nodes;return i.jsx(b("CometColumnItem.react"),{children:i.jsx(b("CometSimpleGrid.react"),{minWidth:112,children:c.map(function(a,c){var e=a.bookmark_icon_image,f=a.id,g=a.name,h=a.tracking;a=a.url;e=e==null?void 0:e.uri;if(e==null){b("FBLogger")("comet_mega_menu").mustfix("Bookmark %s icon cannot be null",g);return null}if(g==null){b("FBLogger")("comet_mega_menu").mustfix("Bookmark %s name cannot be null",f);return null}return i.jsx(b("CometMegaMenuSectionProductGridItem.react"),{bookmarkName:g,iconUrl:e,index:c,onPress:function(){d&&d(),h!=null&&b("logMegaMenuClick")({index:c,tracking:h})},tracking:h,url:a},f)}).filter(Boolean)})})}}),null);
__d("CometMegaMenuSectionProductListItem.react",["CometBookmarksAddOnUtils","CometColumnItem.react","CometMegaMenuSectionProductListItem_bookmark.graphql","CometRelay","FBLogger","TetraAccessoryListCell.react","logMegaMenuClick","react","useBookmarkFalcoFullViewLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.bookmark,d=a.index,e=a.onPress;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometMegaMenuSectionProductListItem_bookmark.graphql"),c);c=a.bookmark_icon_image;var f=a.description,h=a.image,j=a.name,k=a.section,l=a.tracking;a=a.url;var m=b("useBookmarkFalcoFullViewLogger")(l,d,null,"COMET_MEGA_MENU");c=b("CometBookmarksAddOnUtils").getBookmarkAddOnPrimary(c==null?void 0:c.uri,h==null?void 0:h.uri,h==null?void 0:h.is_silhouette,k);if(c==null){b("FBLogger")("comet_mega_menu").mustfix("Bookmark %s icon cannot be null",j);return null}return i.jsx(b("CometColumnItem.react"),{ref:m,children:i.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:c,body:f,headline:j,level:4,linkProps:{url:a},onPress:function(){e&&e(),l!=null&&b("logMegaMenuClick")({index:d,tracking:l})},paddingHorizontal:0})})}}),null);
__d("CometMegaMenuSectionProductList.react",["CometColumnItem.react","CometMegaMenuSectionProductListItem.react","CometMegaMenuSectionProductList_folderBookmarksConnection.graphql","CometRelay","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){var c=a.bookmarks,d=a.onPress;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometMegaMenuSectionProductList_folderBookmarksConnection.graphql"),c);c=a.nodes;return i.jsx(b("CometColumnItem.react"),{children:c.map(function(a,c){return i.jsx(b("CometMegaMenuSectionProductListItem.react"),{bookmark:a,index:c,onPress:d},(a=a==null?void 0:a.id)!=null?a:c)})})}}),null);