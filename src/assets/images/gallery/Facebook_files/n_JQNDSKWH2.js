if (self.CavalryLogger) { CavalryLogger.start_js(["MprIJbo"]); }

__d("XCometVolunteeringComposerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/volunteer/create/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("XCometVolunteeringShiftsComposerControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/volunteer/signups/composer/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("getVolunteeringComposerURI",["XCometJobsComposerControllerRouteBuilder","XCometVolunteeringComposerControllerRouteBuilder","XCometVolunteeringShiftsComposerControllerRouteBuilder"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){a=a===void 0?{}:a;var c=a.composerType;c=c===void 0?"product_selector":c;var d=a.loggingProps,e=a.pageID;a=a.upsoldStoryProps;switch(c){case"product_selector":return b("XCometVolunteeringComposerControllerRouteBuilder").buildUri(babelHelpers["extends"]({page_id:e,upsold_story_id:(c=a==null?void 0:a.id)!=null?c:void 0},d)).toString();case"roles":return b("XCometJobsComposerControllerRouteBuilder").buildUri({job_description:(c=a==null?void 0:a.message)!=null?c:void 0,page_id:e,source:"community_help_volunteering_composer_selector"}).toString();case"shifts":return b("XCometVolunteeringShiftsComposerControllerRouteBuilder").buildUri(babelHelpers["extends"]({page_id:e,upsold_story_id:(c=a==null?void 0:a.id)!=null?c:void 0},d)).toString()}}}),null);
__d("CommunityHelpClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1909379");c=b("FalcoLoggerInternal").create("community_help_click",a);e.exports=c}),null);