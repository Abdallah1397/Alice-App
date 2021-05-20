if (self.CavalryLogger) { CavalryLogger.start_js(["i4t1vGf"]); }

__d("useSearchCometFilterTypeaheadCompositeNetworkDataSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"filterID"},{defaultValue:null,kind:"LocalArgument",name:"profile_picture_size"},{defaultValue:null,kind:"LocalArgument",name:"query"}],b=[{kind:"Variable",name:"id",variableName:"filterID"}],c=[{kind:"Variable",name:"first",variableName:"count"},{kind:"Variable",name:"named",variableName:"query"}],d={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},e={alias:"filterValue",args:null,kind:"ScalarField",name:"value",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g=[{alias:null,args:[{kind:"Variable",name:"width",variableName:"profile_picture_size"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],h={kind:"InlineFragment",selections:g,type:"Event",abstractKey:null},i={kind:"InlineFragment",selections:g,type:"Group",abstractKey:null},j={kind:"InlineFragment",selections:g,type:"Page",abstractKey:null};g={kind:"InlineFragment",selections:g,type:"User",abstractKey:null};var k={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useSearchCometFilterTypeaheadCompositeNetworkDataSourceQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"GraphSearchQueryFilterValuesConnection",kind:"LinkedField",name:"filter_values",plural:!1,selections:[{alias:null,args:null,concreteType:"GraphSearchQueryFilterValuesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GraphSearchQueryFilterValue",kind:"LinkedField",name:"node",plural:!1,selections:[d,e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"value_object",plural:!1,selections:[f,h,i,j,g],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"GraphSearchQueryFilter",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useSearchCometFilterTypeaheadCompositeNetworkDataSourceQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[k,{kind:"InlineFragment",selections:[{alias:null,args:c,concreteType:"GraphSearchQueryFilterValuesConnection",kind:"LinkedField",name:"filter_values",plural:!1,selections:[{alias:null,args:null,concreteType:"GraphSearchQueryFilterValuesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"GraphSearchQueryFilterValue",kind:"LinkedField",name:"node",plural:!1,selections:[d,e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"value_object",plural:!1,selections:[k,f,h,i,j,g],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"GraphSearchQueryFilter",abstractKey:null},f],storageKey:null}]},params:{id:"3877383158963762",metadata:{},name:"useSearchCometFilterTypeaheadCompositeNetworkDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("SearchCometFilterTypeaheadTextOnlyViewItem.react",["CometTypeaheadViewItem.react","TetraText.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.entry;a.queryString;a=babelHelpers.objectWithoutPropertiesLoose(a,["entry","queryString"]);return h.jsx(b("CometTypeaheadViewItem.react"),babelHelpers["extends"]({},a,{entry:c,children:h.jsx("div",{className:"hzawbc8m hyh9befq cehpxlet rs0gx3tq",children:h.jsx(b("TetraText.react"),{numberOfLines:1,type:"headline4",children:c.getLabel()})})}))}}),null);
__d("SearchCometFilterTypeaheadTextWithPhotoViewItem.react",["CometImageIcon.react","CometTypeaheadViewItem.react","TetraText.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.entry;a.queryString;a=babelHelpers.objectWithoutPropertiesLoose(a,["entry","queryString"]);var d=c.getRawData();d=d.photo;return h.jsx(b("CometTypeaheadViewItem.react"),babelHelpers["extends"]({},a,{entry:c,children:h.jsx("div",{className:"i1fnvgqd btwxx1t3 j83agx80",children:h.jsxs("div",{className:"a8nywdso r8blr3vg rz4wbd8a jwdofwj8 stjgntxs ni8dbmo4 dumg13m2 jifvfom9 btwxx1t3 j83agx80",children:[h.jsx("div",{className:"b3onmgus",children:d!=null&&d!==""?h.jsx(b("CometImageIcon.react"),{size:36,src:d,style:"roundedRect"}):h.jsx(b("CometImageIcon.react"),{size:36,src:"/images/tiles/typeahead_default.png",style:"roundedRect"})}),h.jsx("div",{className:"ni8dbmo4 kwzhilbh cbu4d94t j83agx80",children:h.jsx("div",{className:"hzawbc8m tw6a2znq",children:h.jsx(b("TetraText.react"),{numberOfLines:1,type:"body3",children:c.getLabel()})})})]})})}))}}),null);
__d("SearchCometFilterTypeaheadViewItem.react",["SearchCometFilterTypeaheadTextOnlyViewItem.react","SearchCometFilterTypeaheadTextWithPhotoViewItem.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.entry;a=babelHelpers.objectWithoutPropertiesLoose(a,["entry"]);var d=c.getRawData();d=d.photo;return d!=null?h.jsx(b("SearchCometFilterTypeaheadTextWithPhotoViewItem.react"),babelHelpers["extends"]({},a,{entry:c})):h.jsx(b("SearchCometFilterTypeaheadTextOnlyViewItem.react"),babelHelpers["extends"]({},a,{entry:c}))}}),null);
__d("SearchCometFilterTypeaheadViewStrategy.react",["fbt","CometTypeaheadProgressGlimmer.react","CometTypeaheadViewEmptyState.react","CometTypeaheadViewList.react","SearchCometFilterTypeaheadViewItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(a){var c=a.ariaProps,d=a.entries;a.extraViewProps;var e=a.highlightedEntry,f=a.isLoading;a.onAbandonTypeahead_DO_NOT_USE;var h=babelHelpers.objectWithoutPropertiesLoose(a,["ariaProps","entries","extraViewProps","highlightedEntry","isLoading","onAbandonTypeahead_DO_NOT_USE"]);return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"scb9dxdr sj5x9vvc dflh9lhu cxgpxx05","data-testid":void 0,children:d.length>0?i.jsx(b("CometTypeaheadViewList.react"),{ariaProps:c,entries:d,highlightedEntry:e,children:function(a){var c=a.entry,d=a.isActive;a=a.itemRole;return i.createElement(b("SearchCometFilterTypeaheadViewItem.react"),babelHelpers["extends"]({},h,{entry:c,isActive:d,key:c.getKey(),role:a}))}}):i.jsx(b("CometTypeaheadViewEmptyState.react"),{children:g._("We couldn't find anything for {query_string}",[g._param("query_string",(a=h.queryString)!=null?a:"")])})}),f&&i.jsx(b("CometTypeaheadProgressGlimmer.react"),{})]})}}),null);
__d("CometPivotLinkSearchDropdownMenu.react",["BaseTypeahead.react","CometTypeaheadInputRoundedStrategy.react","CometTypeaheadLayoutInlineStrategy.react","SearchCometFilterTypeaheadViewStrategy.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i={input:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"discj3wi"},view:{backgroundColor:"cwj9ozl2",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxShadow:"o55z2nyb",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"cbu4d94t",flexGrow:"buofh1pr",width:"k4urcfbm"}};function a(a){var c=a.dataSource,d=a.label,e=a.onPressEntry,f=a.onQueryChange,g=a.placeholder;g=g===void 0?"":g;a=a.queryString;return h.jsx(b("BaseTypeahead.react"),{dataSource:c,inputStrategyRenderer:b("CometTypeaheadInputRoundedStrategy.react"),label:d,layoutStrategyRenderer:b("CometTypeaheadLayoutInlineStrategy.react"),onChange:f,onPressEntry:e,placeholder:g,queryString:a,shouldQueryStringUpdateFromSelectedEntryOnClick:!1,viewStrategyRenderer:b("SearchCometFilterTypeaheadViewStrategy.react"),xstyles:{inputXStyle:i.input,layoutXStyle:i.view}})}}),null);
__d("CometPivotLinkWithSearchDropdown.react",["fbt","ix","CometDeferredPopoverTrigger.react","CometPopoverLoadingState.react","TetraButton.react","TetraIcon.react","fbicon","react","requireDeferred"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=i||b("react"),k=b("requireDeferred")("CometPivotLinkSearchDropdownMenu.react").__setRef("CometPivotLinkWithSearchDropdown.react");function a(a){var c=a.dataSource,d=a.label,e=a.onClearButtonPress,f=a.onPressEntry,i=a.onQueryChange,l=a.placeholder;l=l===void 0?"":l;var m=a.queryString,n=a.selectedEntry;a=j.useState(!1);var o=a[0];a=a[1];var p={"aria-label":d,"aria-pressed":o};return j.jsx(b("CometDeferredPopoverTrigger.react"),{align:"middle",fallback:j.jsx(b("CometPopoverLoadingState.react"),{}),onVisibilityChange:a,popoverProps:{dataSource:c,label:d,onPressEntry:f,onQueryChange:i,placeholder:l,queryString:m},popoverResource:k,position:"below",children:function(a,c){var f,i=n!=null&&n.name!=null&&n.name.length>0;return j.jsx(b("TetraButton.react"),babelHelpers["extends"]({},p,{addOnSecondary:i?j.jsx(b("TetraIcon.react"),{"aria-label":g._("Clear {buttonText}",[g._param("buttonText",d)]),color:"highlight",icon:b("fbicon")._(h("491580"),16),onPress:e}):j.jsx(b("TetraIcon.react"),{color:o?"highlight":"secondary",icon:b("fbicon")._(h("481882"),16)}),label:i?(f=n==null?void 0:n.name)!=null?f:"":d,onPress:c,reduceEmphasis:o||i,ref:a,type:o||i?"primary":"secondary"}))}})}}),null);
__d("SearchCometFilterTypeaheadBaseInputLabel.react",["fbt","ix","CometPressable.react","TetraIcon.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=i||b("react");function a(a){return j.jsx("div",{className:a.shouldBeHidden?"mkhogb32":"",children:j.jsxs(b("CometPressable.react"),{"aria-expanded":!1,"aria-haspopup":"listbox",display:"block",onPress:a.onPress,overlayRadius:8,role:"combobox",children:[j.jsx("div",{className:"k4urcfbm hzawbc8m sj5x9vvc cxgpxx05 scb9dxdr j83agx80 rq0escxv",children:j.jsx("div",{className:"n8z77nuh knvmm38d qzhwtbm6 buofh1pr",children:j.jsx(b("TetraText.react"),{color:"primary",numberOfLines:1,type:"body3",children:g._("{label}",[g._param("label",a.label)])})})}),j.jsx("div",{className:"plgsh5y4 pmk7jnqg ditlmg2l dpjh1vo5",children:j.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(h("481884"),20)})})]})})}}),null);
__d("SearchCometFilterTypeaheadInputStrategy.react",["ix","BaseTextInput_DEPRECATED.react","SearchCometFilterTypeaheadBaseInputLabel.react","TetraIcon.react","cometTypeaheadInputWebkitStyles","emptyFunction","fbicon","react","stylex","useCometTypeaheadInputRefs","useCometTypeaheadInputStrategyOnChangeHandler","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||b("react"),k={hidden:{display:"mkhogb32"},iconEnd:{end:"dpjh1vo5",marginEnd:"ditlmg2l",position:"pmk7jnqg",top:"plgsh5y4"},root:{position:"l9j0dhe7"},textInput:{borderTop:"qur5y5es",borderEnd:"ld3qfrls",borderBottom:"lscdqw11",borderStart:"isb582sq",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxSizing:"rq0escxv",color:"oo9gr5id",fontSize:"jq4qci2q",height:"datstx6m",outline:"lzcic4wl",paddingBottom:"osnr6wyh",paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr",paddingTop:"pwkaztap",width:"k4urcfbm"},textInputEndIcon:{paddingTop:"jb3vyjys",paddingEnd:"bowiujrr",paddingBottom:"qt6c0cv9",paddingStart:"h4z51re5"},textInputFocused:{backgroundColor:"qsy8amke"}};function a(a,c){var d=a.ariaProps;a.description;a.errorMessage;var e=a.id,f=a.inputEndContent;a.inputExtraProps;var h=a.inputStartContent,l=a.isDisabled,m=a.label,n=a.onBlur,o=a.onChange,p=a.onClick,q=a.onFocus,r=a.placeholder,s=a.queryString,t=a.testid;t=babelHelpers.objectWithoutPropertiesLoose(a,["ariaProps","description","errorMessage","id","inputEndContent","inputExtraProps","inputStartContent","isDisabled","label","onBlur","onChange","onClick","onFocus","placeholder","queryString","testid"]);a=j.useState(!1);var u=a[0],v=a[1];a=j.useState(!1);var w=a[0],x=a[1];a=b("useCometTypeaheadInputRefs")(c);c=a.composedRef;var y=a.inputRef;j.useEffect(function(){var a=y.current;w&&a&&a.focus()},[c,y,w]);j.useEffect(function(){u||x(!1)},[u]);a=j.useCallback(function(){v(!1),n&&n()},[n]);o=b("useCometTypeaheadInputStrategyOnChangeHandler")({onChange:o});var z=j.useCallback(function(){v(!0),q&&q()},[q]),A=j.useCallback(function(){x(!0),p&&p()},[p]);e=(e=e)!=null?e:b("useCometUniqueID")();return j.jsxs("div",{className:(i||(i=b("stylex")))(k.root),"data-testid":void 0,children:[h,j.jsx(b("SearchCometFilterTypeaheadBaseInputLabel.react"),{label:m,onPress:A,shouldBeHidden:w}),j.jsxs("div",{className:i(!w&&k.hidden),children:[j.jsx(b("BaseTextInput_DEPRECATED.react"),babelHelpers["extends"]({},d,t,{autoComplete:"off",className:i(k.textInputEndIcon,k.textInput,u&&k.textInputFocused,b("cometTypeaheadInputWebkitStyles")["default"]),"data-testid":void 0,disabled:l,id:e,onBlur:a,onChange:o,onClick:b("emptyFunction"),onFocus:z,placeholder:(h=r)!=null?h:"",ref:c,type:"search",value:s})),j.jsx("div",{className:i(k.iconEnd),children:j.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(g("481884"),20)})})]}),f]})}c=j.forwardRef(a);e.exports=c}),null);
__d("SearchCometFilterTypeaheadSelectedValue.react",["fbt","ix","CometPressable.react","TetraIcon.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";e.exports=a;var i,j=i||b("react");function a(a){var c=a.label,d=a.onClearButtonPress;a=a.value;return j.jsxs("div",{className:"k4urcfbm scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 taijpn5t j83agx80 rq0escxv",children:[j.jsx("div",{className:"hpfvmrgz knvmm38d qzhwtbm6 buofh1pr",children:j.jsx(b("TetraText.react"),{color:"highlight",numberOfLines:1,testid:void 0,type:"bodyLink3",children:a})}),j.jsx("div",{className:"kkf49tns cgat1ltu",children:j.jsx(b("CometPressable.react"),{"aria-label":g._("Clear {buttonText}",[g._param("buttonText",c)]),display:"inline",onPress:d,overlayRadius:"50%",children:j.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(h("491581"),20),testid:void 0})})})]})}}),null);
__d("SearchCometFilterTypeahead.react",["BaseTypeahead.react","CometTypeaheadLayoutContextualStrategy.react","SearchCometFilterTypeaheadInputStrategy.react","SearchCometFilterTypeaheadSelectedValue.react","SearchCometFilterTypeaheadViewStrategy.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.dataSource,d=a.entry,e=a.label,f=a.onClearButtonPress,g=a.onPressEntry,i=a.onQueryChange,j=a.placeholder;j=j===void 0?"":j;a=a.queryString;return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:d!=null?"mkhogb32":"",children:h.jsx(b("BaseTypeahead.react"),{dataSource:c,inputStrategyRenderer:b("SearchCometFilterTypeaheadInputStrategy.react"),label:e,layoutStrategyRenderer:b("CometTypeaheadLayoutContextualStrategy.react"),onChange:i,onPressEntry:g,placeholder:j,queryString:a,shouldQueryStringUpdateFromSelectedEntryOnClick:!1,viewStrategyRenderer:b("SearchCometFilterTypeaheadViewStrategy.react")})}),d!=null?h.jsx(b("SearchCometFilterTypeaheadSelectedValue.react"),{label:e,onClearButtonPress:f,value:d.name}):null]})}}),null);
__d("useSearchCometFilterTypeaheadCompositeNetworkDataSource",["CometTypeaheadDataEntry","useCometTypeaheadGraphQLDataSource","useSearchCometFilterTypeaheadCompositeNetworkDataSourceQuery.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g!==void 0?g:g=b("useSearchCometFilterTypeaheadCompositeNetworkDataSourceQuery.graphql");function a(a){var c=a.filterID;a=a.limit;return b("useCometTypeaheadGraphQLDataSource")({gqlQuery:h,limit:a,normalize:i,queryVariablesBuilderFunction:function(a){a=a.query;return{count:8,filterID:c,query:a}}})}function i(a){a=a==null?void 0:(a=a.node)==null?void 0:(a=a.filter_values)==null?void 0:a.edges;return!a?[]:a.map(function(a){a=a.node;a=(a=a)!=null?a:{};var c=a.filterValue,d=a.text;a=a.value_object;if(c==null||a==null||d==null)return null;var e=a.id;a=a.profile_picture;return e==null||(a==null?void 0:a.uri)==null?null:new(b("CometTypeaheadDataEntry"))({key:e,label:d,rawData:{name:d,photo:a.uri,value:c}})}).filter(Boolean)}}),null);
__d("useCometTypeaheadCompositeStaticDataSource",["Promise","react","useCometTypeaheadStaticDataSource"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=b("useCometTypeaheadStaticDataSource")(a);return h.useMemo(function(){return{fetchCache:function(a){return c.fetchCache(a)},fetchNetwork:function(a){return b("Promise").resolve(c.fetchCache(a))}}},[c])}}),null);
__d("SearchCometFiltersTypeaheadFilter.react",["CometPivotLinkWithSearchDropdown.react","SearchCometFilterTypeahead.react","SearchCometFiltersContext","SearchCometResultsUIContext","react","useCometTypeaheadCompositeDataSource","useCometTypeaheadCompositeStaticDataSource","useSearchCometFilterTypeaheadCompositeNetworkDataSource"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react"),i="__UNDEFINED__",j=5;function a(a){var c=a.entries,d=a.filterID,e=a.filterViewID,f=a.label,g=a.placeholder;a=a.value;var k=h.useState(""),l=k[0],m=k[1];h.useEffect(function(){m("")},[a]);var n=b("SearchCometFiltersContext").useSearchFiltersDispatcher(),o=h.useCallback(function(a,b){if(a==null)return;b=b===i?null:b;n({filterViewID:e,type:"DROPDOWN_SELECT",value:{name:a,value:b}})},[n,e]);k=h.useCallback(function(){m(""),o(e,void 0)},[e,o]);var p=h.useCallback(function(a){a=a.getRawData();m("");o(e,(a=a.value)!=null?a:"")},[e,o]);d=b("useCometTypeaheadCompositeDataSource")({limit:j,networkDataSource:b("useSearchCometFilterTypeaheadCompositeNetworkDataSource")({filterID:d,limit:j}),nullstateDataSource:b("useCometTypeaheadCompositeStaticDataSource")({entries:c,limit:j})});c=h.useContext(b("SearchCometResultsUIContext"));c=c.isResponsive;var q=h.jsx(b("SearchCometFilterTypeahead.react"),{dataSource:d,entry:a,label:f,onClearButtonPress:k,onPressEntry:p,onQueryChange:m,placeholder:g,queryString:l});if(!c)return q;c=h.jsx(b("CometPivotLinkWithSearchDropdown.react"),{dataSource:d,label:f,onClearButtonPress:k,onPressEntry:p,onQueryChange:m,placeholder:g,queryString:l,selectedEntry:a});return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"hlyrhctz l9j0dhe7",children:q}),h.jsx("div",{className:"en3zacjc l9j0dhe7",children:c})]})}}),null);