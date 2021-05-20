if (self.CavalryLogger) { CavalryLogger.start_js(["2y7QzB2"]); }

__d("LWICometEditingRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5583847871690362",metadata:{},name:"LWICometEditingRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useListingPostalCode_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useListingPostalCode_target",selections:[{alias:null,args:null,concreteType:"DeliveryData",kind:"LinkedField",name:"delivery_data",plural:!1,selections:[{alias:null,args:null,concreteType:"CalculatedRateAddressInfo",kind:"LinkedField",name:"delivery_address",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"postal_code",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shipping_label_rate_type",storageKey:null}],type:"MarketplaceListingWithDeliveryOptions",abstractKey:"__isMarketplaceListingWithDeliveryOptions"};e.exports=a}),null);
__d("useListingShippingPriceOnLocationInfoRefetchQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"id"},b={defaultValue:null,kind:"LocalArgument",name:"postalCode"},c=[{kind:"Variable",name:"id",variableName:"id"}];return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"useListingShippingPriceOnLocationInfoRefetchQuery",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"postalCode",variableName:"postalCode"}],kind:"FragmentSpread",name:"useListingShippingPriceOnLocationInfo_target"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"useListingShippingPriceOnLocationInfoRefetchQuery",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:"formattedShippingPriceListWithZipcode",args:[{kind:"Variable",name:"delivery_zipcode",variableName:"postalCode"}],kind:"ScalarField",name:"formatted_shipping_price_list_price_only",storageKey:null}],type:"MarketplaceListingWithDeliveryOptions",abstractKey:"__isMarketplaceListingWithDeliveryOptions"}],storageKey:null}]},params:{id:"4175759075822157",metadata:{},name:"useListingShippingPriceOnLocationInfoRefetchQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useListingShippingPriceOnLocationInfo_target.graphql",["useListingShippingPriceOnLocationInfoRefetchQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"postalCode"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:b("useListingShippingPriceOnLocationInfoRefetchQuery.graphql"),identifierField:"id"}},name:"useListingShippingPriceOnLocationInfo_target",selections:[{alias:"formattedShippingPriceListWithZipcode",args:[{kind:"Variable",name:"delivery_zipcode",variableName:"postalCode"}],kind:"ScalarField",name:"formatted_shipping_price_list_price_only",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"MarketplaceListingWithDeliveryOptions",abstractKey:"__isMarketplaceListingWithDeliveryOptions"};e.exports=a}),null);
__d("MarketplacePDPC2CHeaderPromotionsInfo_discount.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MarketplacePDPC2CHeaderPromotionsInfo_discount",selections:[{alias:"listing_discounts",args:[{kind:"Literal",name:"first",value:1}],concreteType:null,kind:"LinkedField",name:"buyer_visible_discounts",plural:!1,selections:[{alias:null,args:null,concreteType:"ProductDiscount",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_date",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"amount_type",storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"fixed_amount_off",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"percent_off",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"minimum_quantity",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offer_target_type",storageKey:null}],storageKey:null}],storageKey:"buyer_visible_discounts(first:1)"}],type:"MarketplaceListingWithDiscounts",abstractKey:"__isMarketplaceListingWithDiscounts"};e.exports=a}),null);
__d("MarketplacePDPC2CHeaderShippingInfo_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MarketplacePDPC2CHeaderShippingInfo_target",selections:[{args:null,kind:"FragmentSpread",name:"useListingPostalCode_target"},{args:null,kind:"FragmentSpread",name:"useListingShippingPriceOnLocationInfo_target"}],type:"MarketplaceListingWithDeliveryOptions",abstractKey:"__isMarketplaceListingWithDeliveryOptions"};e.exports=a}),null);
__d("MarketplacePDPC2CHeader_target.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MarketplacePDPC2CHeader_target",selections:[{args:null,kind:"FragmentSpread",name:"MarketplacePDPCreationInfo_target"},{args:null,kind:"FragmentSpread",name:"useListingDeliveryType"},{args:null,kind:"FragmentSpread",name:"useListingShippingLabel"},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:[{alias:"formatted_amount_zeros_stripped",args:[{kind:"Literal",name:"strip_currency_zeros",value:!0}],kind:"ScalarField",name:"formatted_amount",storageKey:"formatted_amount(strip_currency_zeros:true)"}],storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"strikethrough_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"currency",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"amount_with_offset",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"VirtualProductCategory",kind:"LinkedField",name:"seo_virtual_category",plural:!1,selections:[{alias:null,args:null,concreteType:"VirtualProductCategory",kind:"LinkedField",name:"taxonomy_path",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"ProductTaxonomySEOInfo",kind:"LinkedField",name:"seo_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"seo_url",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"MarketplaceListingWithTaxonomy",abstractKey:"__isMarketplaceListingWithTaxonomy"},{alias:null,args:null,concreteType:"GroupSellCategory",kind:"LinkedField",name:"marketplace_listing_category",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_children",storageKey:null}],type:"MarketplaceListingWithChildListings",abstractKey:"__isMarketplaceListingWithChildListings"},{alias:null,args:null,kind:"ScalarField",name:"listing_inventory_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"marketplace_listing_category_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"marketplace_listing_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inventory_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_pending",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_sold",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"MarketplacePDPC2CHeaderShippingInfo_target"},{alias:null,args:null,concreteType:"DeliveryWindow",kind:"LinkedField",name:"estimated_delivery_window",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"minimum_date",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"maximum_date",storageKey:null}],storageKey:null}],type:"MarketplaceListingWithDeliveryOptions",abstractKey:"__isMarketplaceListingWithDeliveryOptions"},{args:null,kind:"FragmentSpread",name:"MarketplacePDPC2CHeaderPromotionsInfo_discount"}],type:"MarketplaceListingRenderable",abstractKey:"__isMarketplaceListingRenderable"};e.exports=a}),null);
__d("AdsLWICoBEditingDialog.entrypoint",["JSResourceForInteraction","LWICometEditingRootContentQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){return{queries:{editingRootQueryRef:{parameters:b("LWICometEditingRootContentQuery$Parameters"),variables:{boostID:a.boostID,scale:b("WebPixelRatio").get(),shouldFetchBrandedTemplate:!1}}}}},root:b("JSResourceForInteraction")("AdsLWICoBEditingDialog.react").__setRef("AdsLWICoBEditingDialog.entrypoint")};e.exports=a}),null);
__d("useListingPostalCode",["CometRelay","CommerceShippingLabelOptionType","getJSEnumSafe","useListingPostalCode_target.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g!==void 0?g:g=b("useListingPostalCode_target.graphql");function a(a){var c;a=b("CometRelay").useFragment(h,a);c=a==null?void 0:(c=a.delivery_data)==null?void 0:(c=c.delivery_address)==null?void 0:c.postal_code;a=b("getJSEnumSafe")(b("CommerceShippingLabelOptionType"),a==null?void 0:a.shipping_label_rate_type);a=c!=null&&(a===4||a===5);return a?c:null}}),null);
__d("useListingShippingPriceOnLocationInfo",["CometRelay","react","useListingShippingPriceOnLocationInfo_target.graphql","useNullthrowsViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=h||b("react"),j=g!==void 0?g:g=b("useListingShippingPriceOnLocationInfo_target.graphql");function a(a){a=b("CometRelay").useRefetchableFragment(j,b("useNullthrowsViolation")(a));var c=a[0],d=a[1];c=(a=c.formattedShippingPriceListWithZipcode)==null?void 0:a[0];a=i.useCallback(function(a){d({postalCode:a},{fetchPolicy:"store-and-network"})},[d]);return c==null?null:{refetchData:a,shippingPrice:c}}}),null);
__d("MarketplacePDPC2CHeaderPromotionsInfo.react",["ix","CometMarketplaceYouPromotionsUtils","MarketplacePDPC2CHeaderPromotionsInfo_discount.graphql","RelayFlight.hybrid","TetraContextRow.react","fbicon","formatDate","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react"),k=h!==void 0?h:h=b("MarketplacePDPC2CHeaderPromotionsInfo_discount.graphql");function a(a){var c=a.isViewerSeller;a=b("RelayFlight.hybrid").useFragment(k,a.discount);a=((a==null?void 0:(a=a.listing_discounts)==null?void 0:a.nodes)||[]).filter(function(a){return!b("CometMarketplaceYouPromotionsUtils").isBulkDiscount(a.minimum_quantity)}).filter(function(a){return!b("CometMarketplaceYouPromotionsUtils").isFreeShipping(a.offer_target_type)});if(a==null||a.length===0)return null;a=a[0];var d=a.end_date;d=d!=null&&d!==0?b("formatDate")(d,"M j"):null;c=b("CometMarketplaceYouPromotionsUtils").getPromotionsInfoForPDP(a==null?void 0:a.amount_type,c,a==null?void 0:(c=a.fixed_amount_off)==null?void 0:c.formatted_amount,a==null?void 0:a.percent_off,d);return j.jsx("div",{className:"stjgntxs ni8dbmo4",children:c!==null&&j.jsx(b("TetraContextRow.react"),{bodyColor:"secondary",icon:b("fbicon")._(g("656387"),20),paddingHorizontal:0,children:c})})}}),null);
__d("MarketplacePDPC2CShippingInfoPostalCode.react",["fbt","CometLazyPopoverTrigger.react","CometPressable.react","JSResourceForInteraction","TetraText.react","parseNumber","react"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j=b("JSResourceForInteraction")("MarketplacePDPC2CShippingInfoPostalCodeCalculator.react").__setRef("MarketplacePDPC2CShippingInfoPostalCode.react");function a(a){var c=a.buyerPostalCode,d=a.refetchData,e=a.shippingInfo;a=i.useState(c);var f=a[0],g=a[1];c=i.useCallback(function(a){g(a),d(a)},[g,d]);return i.jsx(b("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{onSavePostalCode:c,postalCode:f},popoverResource:j,position:"above",children:function(a,c){return i.jsx(b("TetraText.react"),{color:"secondary",type:"body3",children:k(e,f,a,c)})}})}function k(a,c,d,e){if(b("parseNumber")(a)===0)return g._("Ships for free");return c==null?g._("Ships for {Shipping price}",[g._param("Shipping price",a)]):g._("Ships for {Shipping price on PDP} to {Zip code on PDP}",[g._param("Shipping price on PDP",a),g._param("Zip code on PDP",i.jsx(b("CometPressable.react"),{onPress:e,ref:d,xstyle:l.pressable,children:i.jsx(b("TetraText.react"),{color:"primary",type:"body3",children:c})}))])}var l={pressable:{borderTopStartRadius:"dwerhba3",borderTopEndRadius:"kgjeooe1",borderBottomEndRadius:"kxcb68kb",borderBottomStartRadius:"mwvzfrdb",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingBottom:"e5nlhep0",paddingStart:"b3onmgus"}}}),null);
__d("MarketplacePDPC2CHeaderShippingInfo.react",["ix","CometRelay","MarketplacePDPC2CHeaderShippingInfo_target.graphql","MarketplacePDPC2CShippingInfoPostalCode.react","TetraContextRow.react","fbicon","react","useListingPostalCode","useListingShippingPriceOnLocationInfo"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react"),k=h!==void 0?h:h=b("MarketplacePDPC2CHeaderShippingInfo_target.graphql");function a(a){var c=b("CometRelay").useFragment(k,a.target),d=b("useListingPostalCode")(c);c=b("useListingShippingPriceOnLocationInfo")(c);return a.estimatedDelivery==null||c==null?null:j.jsxs("div",{className:"stjgntxs ni8dbmo4",children:[j.jsx(b("TetraContextRow.react"),{bodyColor:"secondary",icon:b("fbicon")._(g("513112"),20),paddingHorizontal:0,children:j.jsx(b("MarketplacePDPC2CShippingInfoPostalCode.react"),{buyerPostalCode:d,refetchData:c.refetchData,shippingInfo:c.shippingPrice})}),a.estimatedDelivery!==null&&j.jsx(b("TetraContextRow.react"),{bodyColor:"secondary",icon:b("fbicon")._(g("481127"),20),paddingHorizontal:0,children:a.estimatedDelivery})]})}}),null);
__d("MarketplacePDPC2CHeader.react",["fbt","BaseGlimmer.react","CometLink.react","CometMarketplaceUtils","CometMiddot.react","CometPlaceholder.react","CometRelay","MarketplaceApplicationContext.hybrid","MarketplacePDPC2CHeaderPromotionsInfo.react","MarketplacePDPC2CHeaderShippingInfo.react","MarketplacePDPC2CHeader_target.graphql","MarketplacePDPC2CTitleModifier.hybrid","MarketplacePDPContext.hybrid","MarketplacePDPCreationInfo.hybrid","MarketplacePDPPreviewDisabledWrapper.hybrid","TetraText.react","TetraTextPairing.react","XCometMarketplaceCategoryControllerRouteBuilder","cometMarketplacePDPUtils.hybrid","formatDisplayPrice","getInlineDeliveryTimeText","getMarketplaceMultiQuantityListingStatus","gkx","marketplaceComposerDispatchers.hybrid","react","useListingDeliveryType.hybrid","useListingShippingLabel.hybrid"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i,j=i||b("react");function k(a){var c=a.children,d=a.defaultColor,e=a.defaultPlaceholder,f=a.field,g=a.testid;g=a.textType;a=b("marketplaceComposerDispatchers.hybrid").usePDPPreviewConfig(f);f=a.isGrayedOut;a=a.isHovered;return j.jsx(b("MarketplacePDPPreviewDisabledWrapper.hybrid"),{shouldGrayOut:f&&!a,children:j.jsx(b("TetraText.react"),{color:b("cometMarketplacePDPUtils.hybrid").getPreviewTextColor(a,d),testid:void 0,type:g,children:f?e:c})})}var l=function(a){var c=a.title;a=a.titleModifier;var d=b("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerCommonViewState();d=d.title;var e=b("MarketplacePDPContext.hybrid").usePDPContext();e=e.isPreview;e=e===void 0?!1:e;return!e&&c==null?null:j.jsxs(k,{defaultColor:"primary",defaultPlaceholder:g._("Title"),field:d,testid:void 0,textType:"headlineEmphasized1",children:[!e&&a,c]})},m=function(a){var c=a.formatted_price,d=a.isMultiQuantity,e=a.stockSection;a=a.strikethrough_price;var f=b("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerCommonViewState();f=f.price;var h=b("MarketplacePDPContext.hybrid").usePDPContext();h=h.isPreview;h=h===void 0?!1:h;return!h&&c==null?null:j.jsx("div",{className:"aov4n071",children:j.jsxs(k,{defaultColor:"primary",defaultPlaceholder:g._("Price"),field:f,testid:void 0,textType:"headline3",children:[c,a!=null?j.jsx("span",{className:"chjz5byy l89fnc2e ggphbty4",children:j.jsx(b("TetraText.react"),{color:"secondary",type:"headline4",children:a})}):null,d?j.jsx(b("CometMiddot.react"),{}):null,d?e:null]})})},n=function(a){var c=a.categoryName;a=a.categoryUrl;var d=b("marketplaceComposerDispatchers.hybrid").useMarketplaceComposerC2CViewState();d=d.selectedCategory;var e=b("marketplaceComposerDispatchers.hybrid").usePDPPreviewConfig(d);e=e.isGrayedOut;var f=b("MarketplacePDPContext.hybrid").usePDPContext();f=f.isPreview;f=f===void 0?!1:f;return!f&&(a==null||c==null)?null:j.jsx("div",{className:"aov4n071",style:{display:"inline-block"},children:j.jsx(b("CometLink.react"),{disabled:e,href:a,children:j.jsx(k,{defaultColor:"secondary",defaultPlaceholder:g._("Category"),field:d,testid:void 0,textType:"body4",children:c})})})};function a(a){var c,d,e,f,g,i,k=b("CometRelay").useFragment(h!==void 0?h:h=b("MarketplacePDPC2CHeader_target.graphql"),a.target);a=b("MarketplaceApplicationContext.hybrid").useMarketplaceState();var o=a.location;a=k==null?void 0:(a=k.strikethrough_price)==null?void 0:a.formatted_amount;var p=k==null?void 0:k.marketplace_listing_title;c=k==null?void 0:(c=k.listing_price)==null?void 0:c.formatted_amount_zeros_stripped;d=k==null?void 0:(d=k.seo_virtual_category)==null?void 0:d.taxonomy_path;d&&d.length>1&&(d=[d[0],d[d.length-1]]);var q=[];d&&d.length>0&&(q=d.map(function(a){var c;c=(c=(c=a.seo_info)==null?void 0:c.seo_url)!=null?c:k==null?void 0:(c=k.marketplace_listing_category)==null?void 0:c.slug;var d=o.vanityPageId;if(c!=null&&d!=null&&a.name!=null){return{label:(a=a.name)!=null?a:k==null?void 0:k.marketplace_listing_category_name,url:b("XCometMarketplaceCategoryControllerRouteBuilder").buildURL({category_id:c,location_id:d})}}return null}));d=(k==null?void 0:k.has_children)===!0;var r=b("MarketplacePDPContext.hybrid").usePDPContext();r=r.isPreview;r=r===void 0?!1:r;var s=k.listing_inventory_type;s=b("CometMarketplaceUtils").isMultiQuantityListing(s);var t=k.inventory_count;t=(k==null?void 0:k.is_sold)||t===0;var u=null;!d&&!r&&(u=Boolean(!s)&&j.jsx(b("MarketplacePDPC2CTitleModifier.hybrid"),{isLive:k.is_live,isPending:k.is_pending,isSold:t,isViewerSeller:k.is_viewer_seller}));var v=" \u203a ";r=q.map(function(a,c){return j.jsxs(j.Fragment,{children:[c===0?null:j.jsx(b("TetraText.react"),{color:"tertiary",type:"meta3",children:v}),j.jsx(n,{categoryName:a==null?void 0:a.label,categoryUrl:a==null?void 0:a.url})]},c)});q=b("getMarketplaceMultiQuantityListingStatus")({isMultiQuantity:s,isSold:t});t=Boolean(t)?j.jsx(b("TetraText.react"),{color:"negative",type:"headline3",children:q}):j.jsx(b("TetraText.react"),{color:"primary",type:"headline3",children:q});q=b("useListingDeliveryType.hybrid")(k);var w=b("useListingShippingLabel.hybrid").useListingShippingLabel(k);e=k==null?void 0:(e=k.estimated_delivery_window)==null?void 0:e.minimum_date;f=k==null?void 0:(f=k.estimated_delivery_window)==null?void 0:f.maximum_date;g=k==null?void 0:(g=k.strikethrough_price)==null?void 0:g.currency;i=k==null?void 0:(i=k.strikethrough_price)==null?void 0:i.amount_with_offset;g!=null&&g!==""&&i!=null&&i!==""&&(a=b("formatDisplayPrice")(Number(i),g,!1));return j.jsxs("div",{className:"dati1w0a qt6c0cv9 hv4rvrfc discj3wi","data-testid":void 0,children:[j.jsx(l,{title:p,titleModifier:u}),!d&&j.jsx(m,{formatted_price:c,isMultiQuantity:s,stockSection:t,strikethrough_price:a}),j.jsx(b("TetraTextPairing.react"),{body:r,level:2}),j.jsxs("div",{className:"aov4n071",children:[j.jsx(b("MarketplacePDPC2CHeaderPromotionsInfo.react"),{discount:k,isViewerSeller:(i=k.is_viewer_seller)!=null?i:!1}),q!=="local_only"&&b("gkx")("1858231")&&j.jsx(b("CometPlaceholder.react"),{fallback:j.jsxs(j.Fragment,{children:[j.jsx(b("BaseGlimmer.react"),{className:"fbgwweev aov4n071 k7cz35w2 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0}),j.jsx(b("BaseGlimmer.react"),{className:"fbgwweev aov4n071 k7cz35w2 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:1})]}),children:j.jsx(b("MarketplacePDPC2CHeaderShippingInfo.react"),{estimatedDelivery:b("getInlineDeliveryTimeText").getInlineDeliveryTimeText(e,f),shippingText:w,target:k})}),q==="local_only"||!b("gkx")("1858231")?j.jsx(b("MarketplacePDPCreationInfo.hybrid"),{target:k}):null]})]})}}),null);