(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3974:function(e,t,n){Promise.resolve().then(n.bind(n,1164)),Promise.resolve().then(n.bind(n,5739)),Promise.resolve().then(n.t.bind(n,956,23)),Promise.resolve().then(n.t.bind(n,4978,23)),Promise.resolve().then(n.t.bind(n,3054,23))},3054:function(){},956:function(e){e.exports={style:{fontFamily:"'__grandstander_800398', '__grandstander_Fallback_800398'"},className:"__className_800398"}},4978:function(e){e.exports={style:{fontFamily:"'__LuckiestGuy_6e7ceb', '__LuckiestGuy_Fallback_6e7ceb'",fontWeight:400},className:"__className_6e7ceb",variable:"__variable_6e7ceb"}},1164:function(e,t,n){"use strict";n.d(t,{Analytics:function(){return i}});var r=n(2265),a=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function o(){return"undefined"!=typeof window}function c(){return"production"}function s(){return"development"===((o()?window.vam:c())||"production")}function i(e){return(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!o())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=c();return}window.vam=e})(t.mode),a(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(s()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.3.1",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},s()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}},5739:function(e,t,n){"use strict";n.d(t,{SpeedInsights:function(){return w}});var r=n(2265),a=n(1169),o=()=>{window.si||(window.si=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.siq=window.siq||[]).push(t)})};function c(){return false}function s(e){return new RegExp("/".concat(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}var i="https://va.vercel-scripts.com/v1/speed-insights",l="".concat(i,"/script.js"),u="".concat(i,"/script.debug.js");function d(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(t.current)e.route&&t.current(e.route);else{let n=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===t.route)return null;o();let n=!!t.dsn,r=t.scriptSrc||(n?l:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(r,'"]')))return null;t.beforeSend&&(null==(e=window.si)||e.call(window,"beforeSend",t.beforeSend));let a=document.createElement("script");return a.src=r,a.defer=!0,a.dataset.sdkn="@vercel/speed-insights"+(t.framework?"/".concat(t.framework):""),a.dataset.sdkv="1.0.12",t.sampleRate&&(a.dataset.sampleRate=t.sampleRate.toString()),t.route&&(a.dataset.route=t.route),t.endpoint&&(a.dataset.endpoint=t.endpoint),t.dsn&&(a.dataset.dsn=t.dsn),a.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(r,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(a),{setRoute:e=>{a.dataset.route=null!=e?e:void 0}}}({framework:e.framework||"react",...e});n&&(t.current=n.setRoute)}},[e.route]),null}var f=()=>{let e=(0,a.useParams)(),t=(0,a.useSearchParams)()||new URLSearchParams,n=(0,a.usePathname)(),r={...Object.fromEntries(t.entries()),...e||{}};return e?function(e,t){if(!e||!t)return e;let n=e;try{let e=Object.entries(t);for(let[t,r]of e)if(!Array.isArray(r)){let e=s(r);e.test(n)&&(n=n.replace(e,"/[".concat(t,"]")))}for(let[t,r]of e)if(Array.isArray(r)){let e=s(r.join("/"));e.test(n)&&(n=n.replace(e,"/[...".concat(t,"]")))}return n}catch(t){return e}}(n,r):null};function p(e){let t=f();return r.createElement(d,{route:t,...e,framework:"next"})}function w(e){return r.createElement(r.Suspense,{fallback:null},r.createElement(p,{...e}))}}},function(e){e.O(0,[873,971,23,744],function(){return e(e.s=3974)}),_N_E=e.O()}]);