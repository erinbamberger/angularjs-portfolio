!function(a){a.module("ng-polymer-elements",[]).config(["$compileProvider","$injector",function(b,c){"use strict";var d={ngModel:"=value",ngDisabled:"=disabled",ngFocused:"=focused"},e={ngModel:"=selected"},f={ngModel:function(a){return a.hasAttribute("multi")?"selectedValues":"selected"}},g={ngModel:"=checked",ngDisabled:"=disabled",ngChange:"&iron-change"},h={ironSelector:f,paperInput:d,paperTextArea:d,paperRadioGroup:e,paperTabs:e,paperMenu:f,paperCheckbox:g,paperToggleButton:g,paperDialog:{ngOpened:"=opened",ngOverlayOpened:"&iron-overlay-opened",ngOverlayClosed:"&iron-overlay-closed"},paperSlider:{ngModel:"=value",ngChange:"&value-change",ngDisabled:"=disabled"},goldEmailInput:d,goldPhoneInput:d,goldCcInput:{ngModel:"=value",ngDisabled:"=disabled",ngFocused:"=focused",ngCardType:"=cardType"},goldCcExpirationInput:d,goldCcCvcInput:d,goldZipInput:d,googleFeeds:{ngModel:"=results",loading:"=loading",ngError:"&google-feeds-error",ngQueryError:"&google-feeds-queryerror",ngQueryResponse:"&google-feeds-queryresponse",ngResponse:"&google-feeds-response",ngMultiResponse:"&google-multi-feeds-response"},googleMap:{ngMap:"=map",ngLatitude:"=latitude",ngLongitude:"=longitude"},googleSheets:{ngRows:"=rows",ngSheet:"=sheet",ngTab:"=tab"}};if(c.has("$ngPolymerMappings")){var i=c.get("$ngPolymerMappings");a.extend(h,i)}Object.keys(h).forEach(function(c){var d=h[c];b.directive(c,["$parse","$window",function(b,c){var e={},f=Object.keys(d);return f.forEach(function(a){var b,c=d[a];switch(typeof c){case"string":if(b=c.charAt(0),"="!==b&&"&"!==b)throw'Invalid mapping: "'+c+'" - must begin with "=" or "&"';c=c.substr(1);break;case"function":switch(c.name){case"property":b="=";break;case"event":b="&";break;default:throw'Invalid mapping for "'+a+'" - function name must be "property" or "event"'}break;default:throw'Invalid mapped type for "'+a+'" - must be string or function'}e[a]=b}),{restrict:"E",scope:e,link:function(c,e,g){var h=e[0],i={};c.$on("$destroy",function(){Object.keys(i).forEach(function(a){var b=i[a];Object.unobserve(h[a],b)})}),f.forEach(function(e){if(g[e]){var f,j=d[e];if("function"==typeof j?(f="property"===j.name?"=":"&",j=j(h)):(f=j.charAt(0),j=j.substr(1)),"&"===f){var k=b(g[e]);h.addEventListener(j,function(a){c.$apply(function(){k(c.$parent,{$event:a})})})}else{var l=j,m=h.getPropertyInfo(j),n=m.type,o=m.readOnly;if(!o&&!h[l])switch(n){case Array:h[l]=[];break;case Object:h[l]={}}var p=function(){if(!o)switch(i[l]&&(Object.unobserve(h[l],i[l]),delete i[l]),n){case Array:case Object:i[l]=function(){c.$apply(function(){c[e]||(c[e]=n===Array?[]:{}),a.copy(h[l],c[e])})},Object.observe(h[l],i[l])}};p();var q=function(){setTimeout(function(){var b=c[e];n!=Array&&n!=Object?void 0!==b&&(h[l]=b):b&&(h[l]=a.copy(b),p())})};o||(c.$watch(e,q,!0),q(c[e]));var r=l.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})+"-changed";h.addEventListener(r,function(b){var d=h[l];h.async(function(){c.$apply(function(){n===Array||n===Object?c[e]=a.copy(d):c[e]!=d&&(c[e]=d)}),p()})})}}})}}}])})}])}(angular);