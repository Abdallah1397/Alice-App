if (self.CavalryLogger) { CavalryLogger.start_js(["uiQBGZe"]); }

__d("VideoBlurBackgroundContainer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoBlurBackgroundContainer_video",selections:[{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometBlurryImagePreview.react",["getComputedStyle","mergeRefs","react","useCometAriaID","useCometUniqueID","useLayoutEffect_SAFE_FOR_SSR","useSetAttributeRef"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=a.alt,d=a.blur,e=a.height,f=a.previewData,g=a.width,i=babelHelpers.objectWithoutPropertiesLoose(a,["alt","blur","height","previewData","width"]);a=(a=a.style)!=null?a:{};var j=a.height,k=a.width;d=(a=d)!=null?a:1.2;a=b("useCometUniqueID")();var l=b("useSetAttributeRef")("id",a),m="url(#"+a+")",n=b("useSetAttributeRef")("filter",m),o=b("useCometAriaID")("aria-labelledby"),p=o[0],q=p[0];p=p[1];o=o[1];var r=o[0],s=o[1],t=h.useRef(null);o=h.useMemo(function(){return c!=null?b("mergeRefs")(s,t):t},[c,s,t]);var u=h.useState(e!==void 0||j!==void 0||g!==void 0||k!==void 0),v=u[0],w=u[1];b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=t.current;if(!(a instanceof SVGSVGElement))return;if(e!==void 0||j!==void 0||g!==void 0||k!==void 0){w(!0);return}var c=a.style.display,d=b("getComputedStyle")(a);a.style.display="none";w(d!=null&&(d.height!==f.height+"px"||d.width!==f.width+"px"));a.style.display=c},[e,f.height,f.width,j,k,g]);return h.jsxs("svg",babelHelpers["extends"]({},i,c!=null?r:null,{height:(u=e)!=null?u:v?void 0:f.height,preserveAspectRatio:"none",ref:o,role:"img",viewBox:"0 0 "+f.width+" "+f.height,width:(i=g)!=null?i:v?void 0:f.width,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[c!=null&&h.jsx("title",babelHelpers["extends"]({},q,{ref:p,children:c})),h.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",id:a,ref:l,suppressHydrationWarning:!0,children:[h.jsx("feGaussianBlur",{edgeMode:"duplicate",stdDeviation:d}),h.jsx("feComponentTransfer",{children:h.jsx("feFuncA",{tableValues:"1 1",type:"discrete"})})]}),h.jsx("image",{filter:m,height:f.height,ref:n,suppressHydrationWarning:!0,width:f.width,x:"0",xlinkHref:f.dataURI,y:"0"})]}))}}),null);
__d("videoTimeFormatter",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var b=a.time;if(b==null)return"--:--";var c=b;(a.inSeconds==null||a.inSeconds===!1)&&(c=Math.round(b/1e3));a=Math.floor(c/3600);b=String(c%60).padStart(2,"0");a=a>0?a+":"+String(Math.floor(c/60)-a*60).padStart(2,"0")+":"+b:Math.floor(c/60)+":"+b;return a}}),null);
__d("getPreviewDataFromImagePreviewPayload",["FBLogger","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="data:image/jpeg;base64,",h=160,i=162,j=42;function k(a,c){c===void 0&&(c=0);a=atob(a);if(a.length<=3)throw b("unrecoverableViolation")("The preview payload was "+a.length+" byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.","comet_infra");var d=new Uint8Array(a.length+c);for(var e=0;e<a.length;e++)d[c+e]=a.charCodeAt(e);return d}var l;function m(){l==null&&(l=k("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA=="));return l}function a(a){var c=m();try{a=k(a,c.length-3);var d=a[c.length-1],e=a[c.length-3],f=a[c.length-2];if(d>j)throw b("unrecoverableViolation")("Tried to decode a payload whose height was "+d+". The maximum "+("is "+j+"."),"comet_infra");if(f>j)throw b("unrecoverableViolation")("Tried to decode a payload whose width was "+f+". The maximum "+("is "+j+"."),"comet_infra");a.set(c,0);a[h]=d;a[i]=f;c=btoa(String.fromCharCode.apply(null,a));return{dataURI:""+g+c,height:d,width:f,version:e}}catch(c){a=b("FBLogger")("images_infra");c instanceof Error&&a.catching(c);a.warn("Failed to decode a preview image payload. Falling back with a blank image.");return null}}}),null);
__d("VideoBlurBackgroundContainer.react",["CometBlurryImagePreview.react","CometImage.react","CometRelay","VideoBlurBackgroundContainer_video.graphql","getPreviewDataFromImagePreviewPayload","react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h,i,j=h||b("react"),k={blurryImage:{filter:"nq2o82sz",transform:"cyijgrg9"},image:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",height:"datstx6m",opacity:"ggwglk7f",width:"k4urcfbm",zIndex:"du4w35lb"},lightBackgroundInLightMode:{backgroundColor:"hybvsw6c"},root:{backgroundColor:"tqsryivl",height:"datstx6m",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}};function a(a,c){var d,e=a.children,f=a.lightBackgroundInLightMode,h=a.video;a=a.xstyle;h=b("CometRelay").useFragment(g!==void 0?g:g=b("VideoBlurBackgroundContainer_video.graphql"),h);d=(d=h.preferred_thumbnail)==null?void 0:d.image_preview_payload;var l;if(d!=null){d=b("getPreviewDataFromImagePreviewPayload")(d);d!=null&&(l=j.jsx(b("CometBlurryImagePreview.react"),{className:(i||(i=b("stylex")))(k.image),previewData:d}))}d=(d=h.preferred_thumbnail)==null?void 0:(h=d.image)==null?void 0:h.uri;l==null&&d!=null&&(l=j.jsx(b("CometImage.react"),{src:d,xstyle:[k.blurryImage,k.image]}));return j.jsxs("div",{className:(i||(i=b("stylex")))(k.root,a,f===!0&&k.lightBackgroundInLightMode),ref:c,children:[l,e]})}c=j.forwardRef(a);e.exports=c}),null);