if (self.CavalryLogger) { CavalryLogger.start_js(["vpT63gi"]); }

__d("LWICometConsolidatedProductCreationViewCtaOptionsRefetchableQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"goal"},{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"objective"}],b={kind:"Variable",name:"input",variableName:"input"},c={kind:"Variable",name:"objective",variableName:"objective"},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LWICometConsolidatedProductCreationViewCtaOptionsRefetchableQuery",selections:[{args:[{kind:"Variable",name:"goal",variableName:"goal"},b,c],kind:"FragmentSpread",name:"LWICometConsolidatedProductCreationView_ctaOptions"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LWICometConsolidatedProductCreationViewCtaOptionsRefetchableQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:[b],concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[d,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"options",plural:!1,selections:[d,{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentOptions"},{alias:"ctas",args:[{kind:"Variable",name:"lwi_goal",variableName:"goal"},c],concreteType:"AdsLWICallToAction",kind:"LinkedField",name:"eligible_ctas",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"app_destination",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"event_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"app_link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"whatsapp_number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3679251232173239",metadata:{},name:"LWICometConsolidatedProductCreationViewCtaOptionsRefetchableQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("LWICometConsolidatedProductCreationViewadgroupRefetchableQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"goal"},{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"shouldFetch"}],b={kind:"Variable",name:"input",variableName:"input"},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"image_hash",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"image_url",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"instagram_actor_id",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"event_id",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"whatsapp_number",storageKey:null},j={alias:null,args:null,concreteType:"AdCallToActionSpecification",kind:"LinkedField",name:"call_to_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"call_to_action_type",storageKey:null},{alias:null,args:null,concreteType:"AdCallToActionValueSpecification",kind:"LinkedField",name:"call_to_action_value",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"app_destination",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"lead_gen_form_id",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"page_id",storageKey:null},i],storageKey:null}],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"picture",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"video_id",storageKey:null},o=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],p={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LWICometConsolidatedProductCreationViewadgroupRefetchableQuery",selections:[{args:[{kind:"Variable",name:"goal",variableName:"goal"},b,{kind:"Variable",name:"shouldFetch",variableName:"shouldFetch"}],kind:"FragmentSpread",name:"LWICometConsolidatedProductCreationView_adgroup"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LWICometConsolidatedProductCreationViewadgroupRefetchableQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:[b],concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[c,{condition:"shouldFetch",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"spec",plural:!1,selections:[c,{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentSpec"},{alias:null,args:[{kind:"Variable",name:"lwi_goal",variableName:"goal"}],concreteType:"AdsLWIAdGroupSpec",kind:"LinkedField",name:"adgroup_spec",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"adgroup_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"adgroup_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conversion_domain",storageKey:null},{alias:null,args:null,concreteType:"AdsCreativeSpecification",kind:"LinkedField",name:"creative",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asset_feed_spec_string",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"authorization_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},d,e,f,{alias:null,args:null,kind:"ScalarField",name:"instagram_story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"object_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"object_story_id",storageKey:null},{alias:null,args:null,concreteType:"AdObjectStorySpecification",kind:"LinkedField",name:"object_story_spec",plural:!1,selections:[f,{alias:null,args:null,concreteType:"AdObjectStoryLinkDataSpecification",kind:"LinkedField",name:"link_data",plural:!1,selections:[j,{alias:null,args:null,concreteType:"AdObjectStoryChildLinkDataSpecification",kind:"LinkedField",name:"child_attachments",plural:!0,selections:[k,d,h,l,m,n],storageKey:null},k,g,{alias:null,args:null,concreteType:"AdImageCropsSpecification",kind:"LinkedField",name:"image_crops",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"crop_dimension",storageKey:null},{alias:null,args:null,concreteType:"PointPositionSpecification",kind:"LinkedField",name:"lower_right",plural:!1,selections:o,storageKey:null},{alias:null,args:null,concreteType:"PointPositionSpecification",kind:"LinkedField",name:"upper_left",plural:!1,selections:o,storageKey:null}],storageKey:null},d,h,p,l,m,{alias:null,args:null,kind:"ScalarField",name:"retailer_item_ids",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_flexible_image_aspect_ratio",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"NodeWrapper",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,q],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdObjectStoryPhotoDataSpecification",kind:"LinkedField",name:"photo_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"caption",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdObjectStoryVideoDataSpecification",kind:"LinkedField",name:"video_data",plural:!1,selections:[j,d,e,{alias:null,args:null,kind:"ScalarField",name:"link_description",storageKey:null},p,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},n],storageKey:null},{alias:null,args:null,concreteType:"AdObjectStoryTemplateDataSpecification",kind:"LinkedField",name:"template_data",plural:!1,selections:[j,h,l,k,{alias:null,args:null,kind:"ScalarField",name:"format_option",storageKey:null},p,{alias:null,args:null,kind:"ScalarField",name:"multi_share_end_card",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"object_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"product_set_id",storageKey:null},{alias:null,args:null,concreteType:"AdShopSpecification",kind:"LinkedField",name:"shop_spec",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"landing_view",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shop_id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_page_actor_override",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"creative_spec_json",storageKey:null},q],storageKey:null},{alias:null,args:null,concreteType:"AdsLWICallToAction",kind:"LinkedField",name:"cta",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"app_link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},h,i],storageKey:null}],storageKey:null}]},q],storageKey:null}],storageKey:null}]},params:{id:"3818667618200630",metadata:{},name:"LWICometConsolidatedProductCreationViewadgroupRefetchableQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("LWICometConsolidatedProductCreationView_adgroup.graphql",["LWICometConsolidatedProductCreationViewadgroupRefetchableQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"goal"},{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"shouldFetch"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:[],operation:b("LWICometConsolidatedProductCreationViewadgroupRefetchableQuery.graphql")}},name:"LWICometConsolidatedProductCreationView_adgroup",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[{condition:"shouldFetch",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"spec",plural:!1,selections:[{args:[{kind:"Variable",name:"lwi_goal",variableName:"goal"}],kind:"FragmentSpread",name:"useLWICometInitialAdgroups_spec"}],storageKey:null}]}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("LWICometConsolidatedProductCreationView_boostedComponent.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LWICometConsolidatedProductCreationView_boostedComponent",selections:[{args:null,kind:"FragmentSpread",name:"LWICometAudienceSection_boostedComponent"},{args:null,kind:"FragmentSpread",name:"LWICometDurationBudgetSection_boostedComponent"},{args:null,kind:"FragmentSpread",name:"LWICometGenericCreationNotices_boostedComponent"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"options",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"LWICometPlacementsSection_options"},{args:null,kind:"FragmentSpread",name:"LWICometRegulatedCategoriesQuerySection_options"}],storageKey:null}],type:"BoostedComponentCommonWrapper",abstractKey:"__isBoostedComponentCommonWrapper"};e.exports=a}),null);
__d("LWICometConsolidatedProductCreationView_ctaOptions.graphql",["LWICometConsolidatedProductCreationViewCtaOptionsRefetchableQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"goal"},{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"objective"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:[],operation:b("LWICometConsolidatedProductCreationViewCtaOptionsRefetchableQuery.graphql")}},name:"LWICometConsolidatedProductCreationView_ctaOptions",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"options",plural:!1,selections:[{args:[{kind:"Variable",name:"goal",variableName:"goal"},{kind:"Variable",name:"objective",variableName:"objective"}],kind:"FragmentSpread",name:"useLWICometEligibleCTAs_options"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null};e.exports=a}),null);
__d("LWICometTypedLoggerLite",["BoostedComponentTypedLoggerLite","LWICometLogger","USID"],(function(a,b,c,d,e,f){"use strict";f.getLogger=i;f.log=a;var g=b("BoostedComponentTypedLoggerLite").log,h;function i(){h==null&&(h=new(b("LWICometLogger"))(g));return h}function a(a){i().log(babelHelpers["extends"]({},a,{usid_override:b("USID").get().serializeForRequest()}))}}),null);
__d("LWICometBrandedPromotionalProgramLoggerUtils",["LWICometProductUtils","LWICometTypedLoggerLite"],(function(a,b,c,d,e,f){"use strict";f.logEvent=a;function a(a,c,d,e,f,g){b("LWICometTypedLoggerLite").log({action:a,ending_value:c,entry_point:e.entryPoint,event:d,flow:e.flow,flow_id:e.flowID,page_id:e.pageID,product:b("LWICometProductUtils").productFromGraphQLEnumToJSEnumStrict(e.product),side:f,starting_value:g})}}),null);
__d("lwiCometFranchiseGlobalConfigReducer",["FBImmer"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c){a=b("FBImmer").produce(a,function(a){switch(c.type){case"global_branded_config_reducer.update_spec":c.globalBrandedConfig.adAccountData!=null&&(a.adAccountData=c.globalBrandedConfig.adAccountData);a.globalBrandedConfig={audiences:c.globalBrandedConfig.audiences,defaultFranchiseConfigImage:{image_hash:c.globalBrandedConfig.image_hash,image_url:c.globalBrandedConfig.image_url}};if(c.globalBrandedConfig.audiences.length>0&&a.lwiAudiences!=null){var b;a.audienceData=a.lwiAudiences.MULT_CUSTOM_AUDIENCES;var d=(b=a.lwiAudiences.MULT_CUSTOM_AUDIENCES.targetSpec.custom_audiences)!=null?b:[];c.globalBrandedConfig.audiences.forEach(function(a){(a==null?void 0:a.id)!=null&&(a==null?void 0:a.name)!=null&&!d.find(function(b){b=b.id;return b===a.id})&&d.push({id:a.id,name:a.name})});a.audienceData.targetSpec.custom_audiences=d}b=a.adgroupSpecs[a.selectedAdgroupID];if(b.creative==null||b.creative.object_story_spec==null||c.globalBrandedConfig.image_url==null||c.globalBrandedConfig.image_hash==null)return;a=b.assetFeedSpecPlus;if(a!=null){var e;e=(e=a.images)!=null?e:[];e=[].concat(e);e[0]={hash:c.globalBrandedConfig.image_hash};a.images=e;a.videos=[];a.ad_formats=["SINGLE_IMAGE"];a.carousel_cards=null}else{e=b.creative.object_story_spec;b=(a=e.link_data)!=null?a:{};b.image_hash=c.globalBrandedConfig.image_hash;b.picture=c.globalBrandedConfig.image_url;e.link_data=b}break}});return[a,null]}}),null);
__d("LWICometBrandedPromotedProgramContent.react",["CometRouteParams","LWICometBrandedPromotionalProgramComponent.react","LWICometBrandedPromotionalProgramLoggerUtils","lwiCometBrandedTemplateReducer","lwiCometFranchiseGlobalConfigReducer","react","unrecoverableViolation","useLWICometAdAccounts_DEPRECATED","useLWICometBrandedTemplates","useLWILoggerContext","useLWIReducers","withLWICometSpecPart"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function a(a){var c=a.defaultPageImage,d=a.lwiAudiences;a=a.specImages;var e=b("CometRouteParams").useRouteParams();e=e.branded_template_program_id!=null?String(e.branded_template_program_id):null;var f=h.useState(e!=null),g=f[0],i=f[1];f=h.useState(c);var j=f[0],k=b("useLWILoggerContext")();c=k.pageID;f=b("useLWICometBrandedTemplates")({pageID:c});var l=f[0],m=f[1],n=f[2];c=h.useState(e);var o=c[0],p=c[1],q=b("useLWIReducers")([b("lwiCometBrandedTemplateReducer"),b("lwiCometFranchiseGlobalConfigReducer")]);c=(f=a)!=null?f:[];var r=(a=c[0])!=null?a:{hash:null,url:null},s=!!(d!=null&&d.MULT_CUSTOM_AUDIENCES),t=h.useCallback(function(a){q({adAccountData:null,bodyText:null,businessCreativeFolderID:null,businessID:null,ctaType:"NO_BUTTON",ctaValue:null,headline:null,imageHash:r.hash,imageUrl:j,programEndDate:null,programID:null,programName:null,sharedAudience:null,type:"branded_template_reducer.update_spec"},{side:a})},[r,j]);f=o!=null?l.get(o):null;var u=b("useLWICometAdAccounts_DEPRECATED")(null,f==null?void 0:f.member_business_id),v=function(a){p(a),b("LWICometBrandedPromotionalProgramLoggerUtils").logEvent("select",a,"select_branded_template",k,"client_side",null)};c=function(){i(!g),g?(b("LWICometBrandedPromotionalProgramLoggerUtils").logEvent("toggle",o,"toggle_off_branded_template",k,"client_side",null),t("user_action"),x("user_action")):(b("LWICometBrandedPromotionalProgramLoggerUtils").logEvent("toggle",null,"toggle_on_branded_template",k,"client_side",null),w("client_side"))};var w=h.useCallback(function(a){var c;o!=null?c=l.get(o):(c=Array.from(l.values())[0],v(c.id));if(c==null){var d;throw b("unrecoverableViolation")("Program should never be undefined here with the given selectedProgramID: "+((d=o)!=null?d:"null"),"vpa")}d=Object.keys(u);var e=c;e=e.member_legacy_ad_account_id;e=e!=null&&d.includes(e)?u[e]:u[d[0]];q({adAccountData:e,bodyText:(d=c)==null?void 0:d.template_spec.body_text,businessCreativeFolderID:(e=c)==null?void 0:e.creative_folder_id,businessID:(d=c)==null?void 0:d.member_business_id,ctaType:(e=c)==null?void 0:(d=e.template_spec.cta)==null?void 0:d.type,ctaValue:(e=c)==null?void 0:(d=e.template_spec.cta)==null?void 0:d.value,headline:(e=c)==null?void 0:e.template_spec.headline,imageHash:(d=c)==null?void 0:d.default_image.image_hash,imageUrl:null,programEndDate:(e=c)==null?void 0:e.end_date,programID:(d=c)==null?void 0:d.id,programName:(e=c)==null?void 0:e.name,sharedAudience:s?(d=c)==null?void 0:d.shared_custom_audience:null,type:"branded_template_reducer.update_spec"},{side:a})},[u,l,o,d]);h.useEffect(function(){l.size>0&&m.length>0&&g&&o!=null&&w("client_side")},[l,o,m,g,s]);var x=h.useCallback(function(a){var b=Object.keys(u);b=n.adAccountID!=null&&b.includes(n.adAccountID)?u[n.adAccountID]:u[b[0]];q({globalBrandedConfig:{adAccountData:b,audiences:s?n.audiences:[],image_hash:n.image_hash,image_url:n.image_url},type:"global_branded_config_reducer.update_spec"},{side:a})},[r,j,d,s]);h.useEffect(function(){o==null&&(n.image_hash!=null||n.image_url!=null||n.audiences.length>0)&&x("client_side")},[n,o,s]);return l.size>0?h.jsx(b("LWICometBrandedPromotionalProgramComponent.react"),{isDisabled:e!=null,onChange:v,onToggle:c,templateOptions:m,toggleOn:g,value:o}):null}c=b("withLWICometSpecPart")(a,function(a){var b;return{defaultPageImage:(b=a.adgroupSpecs[a.selectedAdgroupID])==null?void 0:(b=b.creative)==null?void 0:(b=b.object_story_spec)==null?void 0:(b=b.link_data)==null?void 0:b.picture,lwiAudiences:a.lwiAudiences,specImages:(b=a.adgroupSpecs[a.selectedAdgroupID].assetFeedSpecPlus)==null?void 0:b.images}});e.exports=c}),null);
__d("LWICometBrandedPromotedProgramSection.react",["CometPlaceholder.react","LWICometBrandedPromotedProgramContent.react","LWICometSectionGlimmer.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("LWICometSectionGlimmer.react"),{}),children:h.jsx(b("LWICometBrandedPromotedProgramContent.react"),babelHelpers["extends"]({},a))})}}),null);
__d("LWICometNoFundingSourceNotice.react",["fbt","CometRow.react","CometRowItem.react","LWICometNoticeCard.react","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react");function a(){return i.jsx(b("CometRow.react"),{paddingTop:0,children:i.jsx(b("CometRowItem.react"),{children:i.jsx(b("LWICometNoticeCard.react"),{body:g._("When you publish your ad, you'll be asked to add a payment method to your ad account. This payment method will be charged for any amount spent beyond the value of your ad credit."),category:"WARNING",header:g._("Payment Method Required")})})})}}),null);
__d("LWICometConsolidatedProductCreationView.react",["CometRelay","LWICometAdAccountPicker.react","LWICometAdPreviewRightColumnSection.react","LWICometAdgroupUtils","LWICometAudienceSection.react","LWICometBrandedPromotedProgramSection.react","LWICometCTAUtils","LWICometCarouselAdsUtils","LWICometCatalogSalesCreativeSection.react","LWICometCatalogSalesValidationContextProvider.react","LWICometConsolidatedProductButtonDestinationConfigUtils","LWICometConsolidatedProductCreationView_adgroup.graphql","LWICometConsolidatedProductCreationView_boostedComponent.graphql","LWICometConsolidatedProductCreationView_ctaOptions.graphql","LWICometConsolidatedProductUtils","LWICometCreativeSection.react","LWICometDurationBudgetSection.react","LWICometEstimationSection.react","LWICometExpandableSectionWrapper.react","LWICometGenericCreationNotices.react","LWICometHeaderAuxiliaryWithHelpWrapper.react","LWICometNoFundingSourceNotice.react","LWICometObjectiveSection.react","LWICometPaymentMethodSection.react","LWICometPaymentSummarySection.react","LWICometPixelSection.react","LWICometPlacementsSection.react","LWICometProductTwoColumnLayoutContainer.react","LWICometRegulatedCategoriesQuerySection.react","LWICometSimplifiedCTASection.react","LWICometSubmissionSection.react","cr:1392678","lwiCometButtonDestinationReducer","lwiCometCreativeReducer","react","unrecoverableViolation","useDebouncedValue","useLWICometEligibleCTAs","useLWICometEnableCarousel","useLWICometInitialAdgroups","useLWICometPostsAsCreativesEntrypointDialog","useLWIReducers","useOnUpdateEffect","withLWICometSpecPart"],(function(a,b,c,d,e,f){"use strict";var g,h,i,j,k=j||b("react"),l=200,m=g!==void 0?g:g=b("LWICometConsolidatedProductCreationView_ctaOptions.graphql"),n=h!==void 0?h:h=b("LWICometConsolidatedProductCreationView_adgroup.graphql"),o=["FACEBOOK","INSTAGRAM","MESSENGER"];function a(a){var c=a.adgroup$key,d=a.assetFeedSpecPlus,e=a.boostedComponent,f=a.boostedComponentInput,g=a.creativeSpec,h=a.ctaOptions$key,j=a.goal,p=a.hasFundingSource,q=a.inferredGoal;a=a.title;e=b("CometRelay").useFragment(i!==void 0?i:i=b("LWICometConsolidatedProductCreationView_boostedComponent.graphql"),e);var r=e==null?void 0:e.options;if(!r)throw b("unrecoverableViolation")("options should not be empty or else none of the LWI sections can be rendered","pages_lwi");var s=b("useLWICometPostsAsCreativesEntrypointDialog")(f.page_id);s=s[0];var t=b("useLWICometEnableCarousel")();h=b("CometRelay").useRefetchableFragment(m,h);var u=h[0],v=h[1];h=k.useTransition();var w=h[0],x=h[1];h=b("useDebouncedValue")(w,l)&&w;w=b("useLWICometEligibleCTAs")(u==null?void 0:(w=u.lwi)==null?void 0:(u=w.boosted_component)==null?void 0:u.options,!1);u=b("CometRelay").useRefetchableFragment(n,c);c=u[0];var y=u[1];u=k.useCallback(function(a){x(function(){v({goal:a.goal,input:f,objective:a.objective},{fetchPolicy:"store-or-network"})}),b("LWICometConsolidatedProductUtils").shouldUpdateWithRefetchedCreative(a.goal,j)&&k.startTransition(function(){y({goal:a.goal,input:f,shouldFetch:!0},{fetchPolicy:"store-or-network"})})},[y,f,v,j,x]);c=b("useLWICometInitialAdgroups")(c==null?void 0:(c=c.lwi)==null?void 0:(c=c.boosted_component)==null?void 0:c.spec,b("LWICometCarouselAdsUtils").shouldUseAFS(),!0);var z=c[0],A=c[1],B=b("useLWIReducers")([b("lwiCometCreativeReducer")]);b("useOnUpdateEffect")(function(){A!=null&&Object.keys(z).length!==0&&(z[A]!=null&&B({adgroup:z[A],type:"creative_reducer.update_adgroup"},{side:"client_side"}))},[z,A]);c=(g==null?void 0:(c=g.object_story_spec)==null?void 0:(c=c.template_data)==null?void 0:c.format_option)==="carousel_images_multi_items";c=c&&j==="GET_CATALOG_SALES"?k.jsx(b("LWICometCatalogSalesValidationContextProvider.react"),{children:k.jsx(b("LWICometCatalogSalesCreativeSection.react"),{boostedComponentInput:f,ctaOptions:w,isEditingView:!1})}):c?k.jsx(k.Fragment,{}):k.jsx(b("LWICometCreativeSection.react"),{aux:s,boostedComponentInput:f,ctaSection:k.jsx(b("LWICometSimplifiedCTASection.react"),{buttonDestinationOptionsConfig:b("LWICometConsolidatedProductButtonDestinationConfigUtils").buttonDestinationOptions,ctaOptions:w,isLoading:h,shouldShowCTASectionWithOneEligibleCTA:!0}),enableCarousel:t,showHeadline:!0});var C=b("useLWIReducers")([b("lwiCometButtonDestinationReducer")]),D=(s=b("LWICometCTAUtils").getLWICometCTA(g,d))==null?void 0:s.type,E=k.useRef(!1);k.useEffect(function(){E.current||(E.current=!0,C({buttonDestination:b("LWICometConsolidatedProductButtonDestinationConfigUtils").getInitialButtonDestination(j,q,D),type:"button_detination_reducer.update_button_destination"}))},[D,C,j,q]);w=b("LWICometConsolidatedProductUtils").isConversionGoal(j,q);return k.jsx(b("LWICometProductTwoColumnLayoutContainer.react"),{footer:k.jsx(b("LWICometSubmissionSection.react"),{postAdDialogType:"DEFAULT"}),headerAuxiliary:k.jsx(b("LWICometHeaderAuxiliaryWithHelpWrapper.react"),{additionalAuxiliary:k.jsx(b("LWICometAdAccountPicker.react"),{useTwoColumnLayout:!0})}),leftContent:[k.jsx(b("LWICometBrandedPromotedProgramSection.react"),{}),k.jsx(b("LWICometObjectiveSection.react"),{boostedComponentInput:f,onChangeGoal:u}),c,k.jsx(b("LWICometRegulatedCategoriesQuerySection.react"),{optionsRef:r}),k.jsx(b("LWICometAudienceSection.react"),{boostedComponent:e,boostedComponentInput:f}),k.jsx(b("LWICometDurationBudgetSection.react"),{boostedComponent:e,boostedComponentInput:f,fetchRecommendation:!0}),k.jsxs(b("LWICometExpandableSectionWrapper.react"),{children:[k.jsx(b("LWICometPlacementsSection.react"),{clientSideEffectivePublisherPlatforms:q!=="GET_PURCHASES"&&j!=="GET_PURCHASES"?o:null,options:r}),k.jsx(b("LWICometPixelSection.react"),{conversionsEventType:(h=b("LWICometConsolidatedProductUtils").getConversionsEventType(j,q))!=null?h:void 0,isPixelOptional:!w}),p?null:k.jsx(b("LWICometNoFundingSourceNotice.react"),{}),k.jsx(b("LWICometPaymentMethodSection.react"),{})]})],rightContent:[k.jsx(b("LWICometAdPreviewRightColumnSection.react"),{getValidatedCreativeSpec:b("LWICometAdgroupUtils").getValidatedCTALinkInCreativeSpecForAdPreview}),k.jsx(b("LWICometEstimationSection.react"),{}),k.jsx(b("LWICometPaymentSummarySection.react"),{})],title:a,topContent:[b("cr:1392678")?[k.jsx(b("cr:1392678"),{leadSource:"BOOSTED_CONSOLIDATED_PRODUCT"})]:[],k.jsx(b("LWICometGenericCreationNotices.react"),{boostedComponent:e,boostedComponentProduct:f.product,disableRenderSimilarAdsNotice:!0,pageID:f.page_id})]})}c=b("withLWICometSpecPart")(a,function(a){return{assetFeedSpecPlus:a.adgroupSpecs[a.selectedAdgroupID].assetFeedSpecPlus,creativeSpec:a.adgroupSpecs[a.selectedAdgroupID].creative,goal:a.goal,hasFundingSource:a.adAccountData.hasFundingSource,inferredGoal:a.inferredGoal}});e.exports=c}),null);