if (self.CavalryLogger) { CavalryLogger.start_js(["8qKGBuh"]); }

__d("PagesCometAdminConsolidatedEntryButtonsContainer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"PagesCometAdminConsolidatedEntryButtonsContainer_renderer$normalization",selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"ConsolidatedEntryButton",kind:"LinkedField",name:"consolidated_entry_buttons",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("PagesCometAdminConsolidatedEntryButtonsContainer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometAdminConsolidatedEntryButtonsContainer_renderer",selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons"}],storageKey:null}],type:"CometPageConsolidatedEntryButtonsContainerRenderer",abstractKey:null};e.exports=a}),null);
__d("PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"ConsolidatedEntryButton",kind:"LinkedField",name:"consolidated_entry_buttons",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}],type:"Page",abstractKey:null};e.exports=a}),null);
__d("PagesCometAdminConsolidatedEntryButtonsUtils",["ix","CometMarketplaceLogger","XCometEventCreateControllerRouteBuilder","XCometGroupsTabCreateControllerRouteBuilder","XCometJobsComposerControllerRouteBuilder","XCometLWIProductPickerControllerRouteBuilder","XCometLiveProducerControllerRouteBuilder","XCometMarketplaceComposerControllerRouteBuilder","XCometOfferCreateControllerRouteBuilder","fbicon","getVolunteeringComposerURI","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";f.getButtonIcon=a;f.generateButtonUrl=c;f.getDialogResource=d;f.logClickByButtonType=e;var h=b("requireDeferred")("CommunityHelpClickFalcoEvent").__setRef("PagesCometAdminConsolidatedEntryButtonsUtils");function a(a){switch(a){case"megaphone":return b("fbicon")._(g("534261"),16);case"calendar":return b("fbicon")._(g("481115"),16);case"camcorder-live":return b("fbicon")._(g("480529"),16);case"coupon":return b("fbicon")._(g("599972"),16);case"briefcase":return b("fbicon")._(g("481904"),16);case"group":return b("fbicon")._(g("485088"),16);case"car":return b("fbicon")._(g("485025"),16);case"house":return b("fbicon")._(g("481925"),16);case"volunteer":return b("fbicon")._(g("923867"),16);case"dots-3-horizontal":return b("fbicon")._(g("484386"),16);default:return b("fbicon")._(g("484386"),16)}}function c(a){var c=a.acontext,d=a.pageID;a=a.type;if(d==null)return null;switch(a){case"AD":return b("XCometLWIProductPickerControllerRouteBuilder").buildURL({entry_point:"WWW_CONSOLIDATE_ENTRY_POINT",page_id:d});case"EVENT":return b("XCometEventCreateControllerRouteBuilder").buildURL({acontext:c,actor_id:d,dialog_entry_point:"page_events_tab"});case"GROUP":return b("XCometGroupsTabCreateControllerRouteBuilder").buildURL({actor_id:d});case"JOB":return b("XCometJobsComposerControllerRouteBuilder").buildURL({job_opening_create_surface:"PAGE",page_id:d,referer_mechanism:"page_composer_header",source:"page_composer"});case"LIVE":return b("XCometLiveProducerControllerRouteBuilder").buildURL({entry_point:"pages_feed",target_id:d});case"OFFER":return b("XCometOfferCreateControllerRouteBuilder").buildURL({page_id:d,referrer:"page_composer"});case"VEHICLE":return b("XCometMarketplaceComposerControllerRouteBuilder").buildURL({conversion_source:3,listing_type:"vehicle",ref:"page_home_tab",seller_page_id:d});case"VOLUNTEERING":return b("getVolunteeringComposerURI")({loggingProps:{source_component:"pages_composer_entry_button",source_surface:"pages"},pageID:d});case"REAL_ESTATE":return b("XCometMarketplaceComposerControllerRouteBuilder").buildURL({listing_type:"rental",seller_page_id:d});default:return null}}function d(a){switch(a){default:return null}}function e(a,c){switch(a){case"VEHICLE":b("CometMarketplaceLogger").logClick("verticals_page_create_pill","page_home_tab",null,{otherUserID:c});return;case"VOLUNTEERING":h.onReady(function(a){return a.log(function(){return{component:"pages_composer_entry_button",destination_component:"volunteering_composer_type_selector",destination_surface:"volunteering_composer",display_name:"volunteers",surface:"pages"}})});return;default:return}}}),null);
__d("PagesCometAdminConsolidatedEntryButtonsPopover.react",["ix","CometContextualLayer.react","CometLazyDialogTrigger.react","CometOnOutsideClick.react","CometPopover.react","PagesCometAdminConsolidatedEntryButtonsUtils","TetraCircleButton.react","TetraList.react","TetraListCell.react","emptyFunction","fbicon","react","useEventActionLoggerParams"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j=44;function a(a){var c=i.useState(!1),d=c[0],e=c[1];c=i.useRef();var f=function(){e(!1)},h=function(){e(!d)},k=b("useEventActionLoggerParams")({mechanism:"page_admin_consolidated_entry_buttons_popover",surface:"page"});k[0];var l=k[1],m=c.current;if(a.consolidatedEntryButtons==null)return null;var n=a.consolidatedEntryButtons.map(function(c){var d=c.icon,e=c.label;c=c.type;var f=b("PagesCometAdminConsolidatedEntryButtonsUtils").generateButtonUrl({acontext:JSON.stringify(l),pageID:a.pageID,type:c});d={addOnPrimary:{color:"primary",icon:d,type:"icon"},headline:e,headlineLineLimit:1,key:c,level:4,linkProps:{url:f},onPress:b("emptyFunction")};f==null&&delete d.linkProps;return d}),o={height:n.length*j};return i.jsxs("div",{children:[i.jsx(b("TetraCircleButton.react"),{color:"primary",icon:b("fbicon")._(g("484386"),16),label:"Label",onPress:h,ref:c,size:36}),d&&m!=null&&i.jsx(b("CometOnOutsideClick.react"),{onOutsideClick:f,children:function(a){return i.jsx(b("CometContextualLayer.react"),{align:"end",context_DEPRECATED:m,position:"below",children:i.jsx("div",{className:"aahdfvyu",children:i.jsx(b("CometPopover.react"),{ref:a,children:i.jsx("div",{className:"e6erh6tl discj3wi",style:o,children:i.jsx(b("TetraList.react"),{items:n,children:n.map(function(a){var c=b("PagesCometAdminConsolidatedEntryButtonsUtils").getDialogResource(a.key);return c!=null?i.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{},dialogResource:c,children:function(c,d){return i.jsx(b("TetraListCell.react"),babelHelpers["extends"]({ref:d},a,{onPress:function(){f(),c()}}))}},a.key):i.jsx(b("TetraListCell.react"),babelHelpers["extends"]({},a))})})})})})})}})]})}}),null);
__d("PagesCometAdminConsolidatedEntryButtons.react",["fbt","CometCard.react","CometRelay","PagesCometAdminConsolidatedEntryButtonsPopover.react","PagesCometAdminConsolidatedEntryButtonsUtils","PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons.graphql","TetraText.react","cr:1328514","gkx","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react"),k=b("gkx")("1296384")?25:20;function a(a){a=b("CometRelay").useFragment(h!==void 0?h:h=b("PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons.graphql"),a.page);if(a==null||a.consolidated_entry_buttons==null||a.id==null){b("recoverableViolation")("ConsolidatedEntryButtons menu needs consolidated_entry_buttons and id to render","pages_consumer_experience_www");return null}var c=a.consolidated_entry_buttons.map(function(a){var c=a.icon,d=a.label,e=a.logging_name;a=a.type;return{icon:b("PagesCometAdminConsolidatedEntryButtonsUtils").getButtonIcon(c),label:d,logging_name:e,type:a}});if(c.length===0)return null;var d=j.jsx("div",{className:"dhix69tm oi9244e8",children:j.jsx(b("TetraText.react"),{type:"button2",children:g._("Create")})});a=a.id;var e=0,f=0;for(var i=c,l=Array.isArray(i),m=0,i=l?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var n;if(l){if(m>=i.length)break;n=i[m++]}else{m=i.next();if(m.done)break;n=m.value}n=n;n.label!=null&&(f+=n.label.length);if(f<k)e+=1;else break}b("gkx")("1296384")||(e=Math.min(e,4));n=c.slice(0,e);m=n.length>0&&a!=null?j.jsx(b("cr:1328514"),{consolidatedEntryButtons:n,pageID:a}):null;l=c.slice(e);i=l.length>0&&a!=null?j.jsx(b("PagesCometAdminConsolidatedEntryButtonsPopover.react"),{consolidatedEntryButtons:l,pageID:a}):null;return j.jsx("div",{className:"sjgh65i0",children:j.jsx(b("CometCard.react"),{background:"white",dropShadow:1,children:j.jsxs("div",{className:"k4urcfbm j83agx80 bp9cbjyn",children:[d,m,i]})})})}}),null);
__d("PagesCometAdminConsolidatedEntryButtonsContainer.react",["CometErrorBoundary.react","CometRelay","PagesCometAdminConsolidatedEntryButtons.react","PagesCometAdminConsolidatedEntryButtonsContainer_renderer.graphql","react","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react");function a(a){a=a.containerRenderer$key;a=b("CometRelay").useFragment(g!==void 0?g:g=b("PagesCometAdminConsolidatedEntryButtonsContainer_renderer.graphql"),a);return a.page==null?b("recoverableViolation")("ConsolidatedEntryButtons menu needs a page prop","pages_consumer_experience_www"):i.jsx(b("CometErrorBoundary.react"),{fallback:function(){return i.jsx("div",{})},children:i.jsx(b("PagesCometAdminConsolidatedEntryButtons.react"),{page:a.page})})}}),null);
__d("PagesCometAdminConsolidatedEntryButtonsRow.react",["CometLazyDialogTrigger.react","PagesCometAdminConsolidatedEntryButtonsUtils","TetraPivotLink.react","react","useEventActionLoggerParams"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=b("useEventActionLoggerParams")({mechanism:"page_admin_consolidated_entry_buttons_row",surface:"page"});c[0];var d=c[1];if(a.consolidatedEntryButtons==null)return null;c=a.consolidatedEntryButtons.map(function(c){var e=c.icon,f=c.label,g=c.type;c=b("PagesCometAdminConsolidatedEntryButtonsUtils").generateButtonUrl({acontext:JSON.stringify(d),pageID:a.pageID,type:g});e={image:{icon:e,type:"icon"},key:g,label:f==null?"":f,linkProps:{url:c},onPress:function(){b("PagesCometAdminConsolidatedEntryButtonsUtils").logClickByButtonType(g,a.pageID)}};c==null&&delete e.linkProps;return e});return h.jsx("div",{className:"stjgntxs ni8dbmo4 tr9rh885 sjgh65i0 owycx6da j83agx80 bp9cbjyn",children:c.map(function(a){var c=b("PagesCometAdminConsolidatedEntryButtonsUtils").getDialogResource(a.key);return c!=null?h.jsx("div",{className:"oi9244e8",children:h.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{},dialogResource:c,children:function(c,d){return h.jsx(b("TetraPivotLink.react"),babelHelpers["extends"]({ref:d},a,{onPress:c}))}},a.key)},a.key):h.jsx("div",{className:"oi9244e8",children:h.jsx(b("TetraPivotLink.react"),babelHelpers["extends"]({},a))},a.key)})})}}),null);