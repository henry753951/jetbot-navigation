(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function ev(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function tv(){if(Ap)return ft;Ap=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function v(F,ie,Le){this.props=F,this.context=ie,this.refs=T,this.updater=Le||S}v.prototype.isReactComponent={},v.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function g(){}g.prototype=v.prototype;function U(F,ie,Le){this.props=F,this.context=ie,this.refs=T,this.updater=Le||S}var L=U.prototype=new g;L.constructor=U,E(L,v.prototype),L.isPureReactComponent=!0;var R=Array.isArray,Y=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function N(F,ie,Le){var J,fe={},Me=null,ve=null;if(ie!=null)for(J in ie.ref!==void 0&&(ve=ie.ref),ie.key!==void 0&&(Me=""+ie.key),ie)Y.call(ie,J)&&!I.hasOwnProperty(J)&&(fe[J]=ie[J]);var we=arguments.length-2;if(we===1)fe.children=Le;else if(1<we){for(var Ue=Array(we),Ze=0;Ze<we;Ze++)Ue[Ze]=arguments[Ze+2];fe.children=Ue}if(F&&F.defaultProps)for(J in we=F.defaultProps,we)fe[J]===void 0&&(fe[J]=we[J]);return{$$typeof:s,type:F,key:Me,ref:ve,props:fe,_owner:O.current}}function P(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Le){return ie[Le]})}var ee=/\/+/g;function $(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):ie.toString(36)}function le(F,ie,Le,J,fe){var Me=typeof F;(Me==="undefined"||Me==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case s:case e:ve=!0}}if(ve)return ve=F,fe=fe(ve),F=J===""?"."+$(ve,0):J,R(fe)?(Le="",F!=null&&(Le=F.replace(ee,"$&/")+"/"),le(fe,ie,Le,"",function(Ze){return Ze})):fe!=null&&(C(fe)&&(fe=P(fe,Le+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(ee,"$&/")+"/")+F)),ie.push(fe)),1;if(ve=0,J=J===""?".":J+":",R(F))for(var we=0;we<F.length;we++){Me=F[we];var Ue=J+$(Me,we);ve+=le(Me,ie,Le,Ue,fe)}else if(Ue=x(F),typeof Ue=="function")for(F=Ue.call(F),we=0;!(Me=F.next()).done;)Me=Me.value,Ue=J+$(Me,we++),ve+=le(Me,ie,Le,Ue,fe);else if(Me==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ve}function ue(F,ie,Le){if(F==null)return F;var J=[],fe=0;return le(F,J,"","",function(Me){return ie.call(Le,Me,fe++)}),J}function oe(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Le){(F._status===0||F._status===-1)&&(F._status=1,F._result=Le)},function(Le){(F._status===0||F._status===-1)&&(F._status=2,F._result=Le)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},z={transition:null},K={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:O};function te(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ue,forEach:function(F,ie,Le){ue(F,function(){ie.apply(this,arguments)},Le)},count:function(F){var ie=0;return ue(F,function(){ie++}),ie},toArray:function(F){return ue(F,function(ie){return ie})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ft.Component=v,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,ft.act=te,ft.cloneElement=function(F,ie,Le){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var J=E({},F.props),fe=F.key,Me=F.ref,ve=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Me=ie.ref,ve=O.current),ie.key!==void 0&&(fe=""+ie.key),F.type&&F.type.defaultProps)var we=F.type.defaultProps;for(Ue in ie)Y.call(ie,Ue)&&!I.hasOwnProperty(Ue)&&(J[Ue]=ie[Ue]===void 0&&we!==void 0?we[Ue]:ie[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=Le;else if(1<Ue){we=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)we[Ze]=arguments[Ze+2];J.children=we}return{$$typeof:s,type:F.type,key:fe,ref:Me,props:J,_owner:ve}},ft.createContext=function(F){return F={$$typeof:f,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:u,_context:F},F.Consumer=F},ft.createElement=N,ft.createFactory=function(F){var ie=N.bind(null,F);return ie.type=F,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(F){return{$$typeof:d,render:F}},ft.isValidElement=C,ft.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:oe}},ft.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},ft.startTransition=function(F){var ie=z.transition;z.transition={};try{F()}finally{z.transition=ie}},ft.unstable_act=te,ft.useCallback=function(F,ie){return ce.current.useCallback(F,ie)},ft.useContext=function(F){return ce.current.useContext(F)},ft.useDebugValue=function(){},ft.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},ft.useEffect=function(F,ie){return ce.current.useEffect(F,ie)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(F,ie,Le){return ce.current.useImperativeHandle(F,ie,Le)},ft.useInsertionEffect=function(F,ie){return ce.current.useInsertionEffect(F,ie)},ft.useLayoutEffect=function(F,ie){return ce.current.useLayoutEffect(F,ie)},ft.useMemo=function(F,ie){return ce.current.useMemo(F,ie)},ft.useReducer=function(F,ie,Le){return ce.current.useReducer(F,ie,Le)},ft.useRef=function(F){return ce.current.useRef(F)},ft.useState=function(F){return ce.current.useState(F)},ft.useSyncExternalStore=function(F,ie,Le){return ce.current.useSyncExternalStore(F,ie,Le)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var Cp;function Hm(){return Cp||(Cp=1,vc.exports=tv()),vc.exports}var Kn=Hm();const qe=ev(Kn);var Za={},xc={exports:{}},Rn={},yc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function nv(){return Rp||(Rp=1,(function(s){function e(z,K){var te=z.length;z.push(K);e:for(;0<te;){var F=te-1>>>1,ie=z[F];if(0<a(ie,K))z[F]=K,z[te]=ie,te=F;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],te=z.pop();if(te!==K){z[0]=te;e:for(var F=0,ie=z.length,Le=ie>>>1;F<Le;){var J=2*(F+1)-1,fe=z[J],Me=J+1,ve=z[Me];if(0>a(fe,te))Me<ie&&0>a(ve,fe)?(z[F]=ve,z[Me]=te,F=Me):(z[F]=fe,z[J]=te,F=J);else if(Me<ie&&0>a(ve,te))z[F]=ve,z[Me]=te,F=Me;else break e}}return K}function a(z,K){var te=z.sortIndex-K.sortIndex;return te!==0?te:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,y=null,x=3,S=!1,E=!1,T=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var K=n(m);K!==null;){if(K.callback===null)r(m);else if(K.startTime<=z)r(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=n(m)}}function R(z){if(T=!1,L(z),!E)if(n(p)!==null)E=!0,oe(Y);else{var K=n(m);K!==null&&ce(R,K.startTime-z)}}function Y(z,K){E=!1,T&&(T=!1,g(N),N=-1),S=!0;var te=x;try{for(L(K),y=n(p);y!==null&&(!(y.expirationTime>K)||z&&!B());){var F=y.callback;if(typeof F=="function"){y.callback=null,x=y.priorityLevel;var ie=F(y.expirationTime<=K);K=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),L(K)}else r(p);y=n(p)}if(y!==null)var Le=!0;else{var J=n(m);J!==null&&ce(R,J.startTime-K),Le=!1}return Le}finally{y=null,x=te,S=!1}}var O=!1,I=null,N=-1,P=5,C=-1;function B(){return!(s.unstable_now()-C<P)}function ee(){if(I!==null){var z=s.unstable_now();C=z;var K=!0;try{K=I(!0,z)}finally{K?$():(O=!1,I=null)}}else O=!1}var $;if(typeof U=="function")$=function(){U(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=ee,$=function(){ue.postMessage(null)}}else $=function(){v(ee,0)};function oe(z){I=z,O||(O=!0,$())}function ce(z,K){N=v(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(Y))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var te=x;x=K;try{return z()}finally{x=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=x;x=z;try{return K()}finally{x=te}},s.unstable_scheduleCallback=function(z,K,te){var F=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?F+te:F):te=F,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=te+ie,z={id:_++,callback:K,priorityLevel:z,startTime:te,expirationTime:ie,sortIndex:-1},te>F?(z.sortIndex=te,e(m,z),n(p)===null&&z===n(m)&&(T?(g(N),N=-1):T=!0,ce(R,te-F))):(z.sortIndex=ie,e(p,z),E||S||(E=!0,oe(Y))),z},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(z){var K=x;return function(){var te=x;x=K;try{return z.apply(this,arguments)}finally{x=te}}}})(Sc)),Sc}var Pp;function iv(){return Pp||(Pp=1,yc.exports=nv()),yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function rv(){if(bp)return Rn;bp=1;var s=Hm(),e=iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);v[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);v[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);v[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var Le=!1;function J(t,i){if(!t||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var l=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){l=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){l=ne}t()}}catch(ne){if(ne&&l&&typeof ne.stack=="string"){for(var c=ne.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var k=`
`+c[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=D);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function fe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case O:return"Portal";case P:return"Profiler";case N:return"StrictMode";case $:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ee:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Ze(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function pn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||bt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ye=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Q(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ye(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function pe(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Oe=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,ae=null,he=null;function be(t){if(t=ho(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=da(i),Ce(t.stateNode,t.type,i))}}function Pe(t){ae?he?he.push(t):he=[t]:ae=t}function rt(){if(ae){var t=ae,i=he;if(he=ae=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function Wt(){}var _t=!1;function Sn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Dt(t,i,o)}finally{_t=!1,(ae!==null||he!==null)&&(Wt(),rt())}}function mn(t,i){var o=t.stateNode;if(o===null)return null;var l=da(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Qr=!1}function Mi(t,i,o,l,c,h,M,D,k){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(_e){this.onError(_e)}}var Ei=!1,Sr=null,Mr=!1,Wi=null,Yo={onError:function(t){Ei=!0,Sr=t}};function Jr(t,i,o,l,c,h,M,D,k){Ei=!1,Sr=null,Mi.apply(Yo,arguments)}function qo(t,i,o,l,c,h,M,D,k){if(Jr.apply(this,arguments),Ei){if(Ei){var ne=Sr;Ei=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Wi=ne)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function $o(t){if(fi(t)!==t)throw Error(n(188))}function zl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return $o(c),t;if(h===l)return $o(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=zl(t),t!==null?G(t):null}function G(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=G(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,se=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Se=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Et=null,mt=null;function on(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:St,Xe=Math.log,Zn=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(Xe(t)/Zn|0)|0}var an=64,Qn=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=Xt(D):(h&=M,h!==0&&(l=Xt(h)))}else M=o&~c,M!==0?l=Xt(M):h!==0&&(l=Xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),D=1<<M,k=c[M];k===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Pt(D,i)):k<=i&&(t.expiredLanes|=D),h&=~D}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=an;return an<<=1,(an&4194240)===0&&(an=64),t}function zn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Mn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Ko(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Hl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var At=0;function rd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sd,Vl,od,ad,ld,Gl=!1,Zo=[],Xi=null,Yi=null,qi=null,Ks=new Map,Zs=new Map,ji=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ho(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Eg(t,i,o,l,c){switch(i){case"focusin":return Xi=Qs(Xi,t,i,o,l,c),!0;case"dragenter":return Yi=Qs(Yi,t,i,o,l,c),!0;case"mouseover":return qi=Qs(qi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Ks.set(h,Qs(Ks.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Zs.set(h,Qs(Zs.get(h)||null,t,i,o,l,c)),!0}return!1}function cd(t){var i=Er(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=jo(o),i!==null){t.blockedOn=i,ld(t.priority,function(){od(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=ho(o),i!==null&&Vl(i),t.blockedOn=o,!1;i.shift()}return!0}function fd(t,i,o){Qo(t)&&o.delete(i)}function Tg(){Gl=!1,Xi!==null&&Qo(Xi)&&(Xi=null),Yi!==null&&Qo(Yi)&&(Yi=null),qi!==null&&Qo(qi)&&(qi=null),Ks.forEach(fd),Zs.forEach(fd)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tg)))}function eo(t){function i(c){return Js(c,t)}if(0<Zo.length){Js(Zo[0],t);for(var o=1;o<Zo.length;o++){var l=Zo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Js(Xi,t),Yi!==null&&Js(Yi,t),qi!==null&&Js(qi,t),Ks.forEach(i),Zs.forEach(i),o=0;o<ji.length;o++)l=ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(o=ji[0],o.blockedOn===null);)cd(o),o.blockedOn===null&&ji.shift()}var es=R.ReactCurrentBatchConfig,Jo=!0;function wg(t,i,o,l){var c=At,h=es.transition;es.transition=null;try{At=1,Wl(t,i,o,l)}finally{At=c,es.transition=h}}function Ag(t,i,o,l){var c=At,h=es.transition;es.transition=null;try{At=4,Wl(t,i,o,l)}finally{At=c,es.transition=h}}function Wl(t,i,o,l){if(Jo){var c=Xl(t,i,o,l);if(c===null)lu(t,i,l,ea,o),ud(t,l);else if(Eg(c,t,i,o,l))l.stopPropagation();else if(ud(t,l),i&4&&-1<Mg.indexOf(t)){for(;c!==null;){var h=ho(c);if(h!==null&&sd(h),h=Xl(t,i,o,l),h===null&&lu(t,i,l,ea,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else lu(t,i,l,null,o)}}var ea=null;function Xl(t,i,o,l){if(ea=null,t=V(l),t=Er(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ea=t,null}function dd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case Be:return 1;case et:return 4;case nt:case Ge:return 16;case gt:return 536870912;default:return 16}default:return 16}}var $i=null,Yl=null,ta=null;function hd(){if(ta)return ta;var t,i=Yl,o=i.length,l,c="value"in $i?$i.value:$i.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return ta=c.slice(t,1<l?1-l:void 0)}function na(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function pd(){return!1}function Un(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ia:pd,this.isPropagationStopped=pd,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Un(ts),to=te({},ts,{view:0,detail:0}),Cg=Un(to),jl,$l,no,ra=te({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(jl=t.screenX-no.screenX,$l=t.screenY-no.screenY):$l=jl=0,no=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),md=Un(ra),Rg=te({},ra,{dataTransfer:0}),Pg=Un(Rg),bg=te({},to,{relatedTarget:0}),Kl=Un(bg),Lg=te({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Un(Lg),Ug=te({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ig=Un(Ug),Ng=te({},ts,{data:0}),gd=Un(Ng),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kg[t])?!!i[t]:!1}function Zl(){return Bg}var zg=te({},to,{key:function(t){if(t.key){var i=Fg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Og[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hg=Un(zg),Vg=te({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=Un(Vg),Gg=te({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Wg=Un(Gg),Xg=te({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Un(Xg),qg=te({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=Un(qg),$g=[9,13,27,32],Ql=d&&"CompositionEvent"in window,io=null;d&&"documentMode"in document&&(io=document.documentMode);var Kg=d&&"TextEvent"in window&&!io,vd=d&&(!Ql||io&&8<io&&11>=io),xd=" ",yd=!1;function Sd(t,i){switch(t){case"keyup":return $g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Zg(t,i){switch(t){case"compositionend":return Md(i);case"keypress":return i.which!==32?null:(yd=!0,xd);case"textInput":return t=i.data,t===xd&&yd?null:t;default:return null}}function Qg(t,i){if(ns)return t==="compositionend"||!Ql&&Sd(t,i)?(t=hd(),ta=Yl=$i=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vd&&i.locale!=="ko"?null:i.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Jg[t.type]:i==="textarea"}function Td(t,i,o,l){Pe(l),i=ua(i,"onChange"),0<i.length&&(o=new ql("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ro=null,so=null;function e_(t){Vd(t,0)}function sa(t){var i=as(t);if(pt(i))return t}function t_(t,i){if(t==="change")return i}var wd=!1;if(d){var Jl;if(d){var eu="oninput"in document;if(!eu){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),eu=typeof Ad.oninput=="function"}Jl=eu}else Jl=!1;wd=Jl&&(!document.documentMode||9<document.documentMode)}function Cd(){ro&&(ro.detachEvent("onpropertychange",Rd),so=ro=null)}function Rd(t){if(t.propertyName==="value"&&sa(so)){var i=[];Td(i,so,t,V(t)),Sn(e_,i)}}function n_(t,i,o){t==="focusin"?(Cd(),ro=i,so=o,ro.attachEvent("onpropertychange",Rd)):t==="focusout"&&Cd()}function i_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sa(so)}function r_(t,i){if(t==="click")return sa(i)}function s_(t,i){if(t==="input"||t==="change")return sa(i)}function o_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:o_;function oo(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Jn(t[c],i[c]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,i){var o=Pd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function Ld(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ld(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dd(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=bt(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function a_(t){var i=Dd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ld(o.ownerDocument.documentElement,o)){if(l!==null&&tu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=bd(o,h);var M=bd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l_=d&&"documentMode"in document&&11>=document.documentMode,is=null,nu=null,ao=null,iu=!1;function Ud(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iu||is==null||is!==bt(l)||(l=is,"selectionStart"in l&&tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=ua(nu,"onSelect"),0<l.length&&(i=new ql("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function oa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},ru={},Id={};d&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function aa(t){if(ru[t])return ru[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Id)return ru[t]=i[o];return t}var Nd=aa("animationend"),Fd=aa("animationiteration"),Od=aa("animationstart"),kd=aa("transitionend"),Bd=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Bd.set(t,i),u(i,[t])}for(var su=0;su<zd.length;su++){var ou=zd[su],u_=ou.toLowerCase(),c_=ou[0].toUpperCase()+ou.slice(1);Ki(u_,"on"+c_)}Ki(Nd,"onAnimationEnd"),Ki(Fd,"onAnimationIteration"),Ki(Od,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(kd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f_=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Hd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,qo(l,i,void 0,t),t.currentTarget=null}function Vd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],k=D.instance,ne=D.currentTarget;if(D=D.listener,k!==h&&c.isPropagationStopped())break e;Hd(c,D,ne),h=k}else for(M=0;M<l.length;M++){if(D=l[M],k=D.instance,ne=D.currentTarget,D=D.listener,k!==h&&c.isPropagationStopped())break e;Hd(c,D,ne),h=k}}}if(Mr)throw t=Wi,Mr=!1,Wi=null,t}function Ut(t,i){var o=i[pu];o===void 0&&(o=i[pu]=new Set);var l=t+"__bubble";o.has(l)||(Gd(i,t,2,!1),o.add(l))}function au(t,i,o){var l=0;i&&(l|=4),Gd(o,t,l,i)}var la="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[la]){t[la]=!0,r.forEach(function(o){o!=="selectionchange"&&(f_.has(o)||au(o,!1,t),au(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[la]||(i[la]=!0,au("selectionchange",!1,i))}}function Gd(t,i,o,l){switch(dd(i)){case 1:var c=wg;break;case 4:c=Ag;break;default:c=Wl}o=c.bind(null,i,o,t),c=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function lu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Er(D),M===null)return;if(k=M.tag,k===5||k===6){l=h=M;continue e}D=D.parentNode}}l=l.return}Sn(function(){var ne=h,_e=V(o),xe=[];e:{var me=Bd.get(t);if(me!==void 0){var De=ql,ke=t;switch(t){case"keypress":if(na(o)===0)break e;case"keydown":case"keyup":De=Hg;break;case"focusin":ke="focus",De=Kl;break;case"focusout":ke="blur",De=Kl;break;case"beforeblur":case"afterblur":De=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Wg;break;case Nd:case Fd:case Od:De=Dg;break;case kd:De=Yg;break;case"scroll":De=Cg;break;case"wheel":De=jg;break;case"copy":case"cut":case"paste":De=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=_d}var ze=(i&4)!==0,Ht=!ze&&t==="scroll",q=ze?me!==null?me+"Capture":null:me;ze=[];for(var H=ne,Z;H!==null;){Z=H;var Ee=Z.stateNode;if(Z.tag===5&&Ee!==null&&(Z=Ee,q!==null&&(Ee=mn(H,q),Ee!=null&&ze.push(co(H,Ee,Z)))),Ht)break;H=H.return}0<ze.length&&(me=new De(me,ke,null,o,_e),xe.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&o!==Tt&&(ke=o.relatedTarget||o.fromElement)&&(Er(ke)||ke[wi]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ke=o.relatedTarget||o.toElement,De=ne,ke=ke?Er(ke):null,ke!==null&&(Ht=fi(ke),ke!==Ht||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(De=null,ke=ne),De!==ke)){if(ze=md,Ee="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(ze=_d,Ee="onPointerLeave",q="onPointerEnter",H="pointer"),Ht=De==null?me:as(De),Z=ke==null?me:as(ke),me=new ze(Ee,H+"leave",De,o,_e),me.target=Ht,me.relatedTarget=Z,Ee=null,Er(_e)===ne&&(ze=new ze(q,H+"enter",ke,o,_e),ze.target=Z,ze.relatedTarget=Ht,Ee=ze),Ht=Ee,De&&ke)t:{for(ze=De,q=ke,H=0,Z=ze;Z;Z=ss(Z))H++;for(Z=0,Ee=q;Ee;Ee=ss(Ee))Z++;for(;0<H-Z;)ze=ss(ze),H--;for(;0<Z-H;)q=ss(q),Z--;for(;H--;){if(ze===q||q!==null&&ze===q.alternate)break t;ze=ss(ze),q=ss(q)}ze=null}else ze=null;De!==null&&Wd(xe,me,De,ze,!1),ke!==null&&Ht!==null&&Wd(xe,Ht,ke,ze,!0)}}e:{if(me=ne?as(ne):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var We=t_;else if(Ed(me))if(wd)We=s_;else{We=i_;var $e=n_}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=r_);if(We&&(We=We(t,ne))){Td(xe,We,o,_e);break e}$e&&$e(t,me,ne),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch($e=ne?as(ne):window,t){case"focusin":(Ed($e)||$e.contentEditable==="true")&&(is=$e,nu=ne,ao=null);break;case"focusout":ao=nu=is=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Ud(xe,o,_e);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":Ud(xe,o,_e)}var Ke;if(Ql)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ns?Sd(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(vd&&o.locale!=="ko"&&(ns||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ns&&(Ke=hd()):($i=_e,Yl="value"in $i?$i.value:$i.textContent,ns=!0)),$e=ua(ne,tt),0<$e.length&&(tt=new gd(tt,t,null,o,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=Md(o),Ke!==null&&(tt.data=Ke)))),(Ke=Kg?Zg(t,o):Qg(t,o))&&(ne=ua(ne,"onBeforeInput"),0<ne.length&&(_e=new gd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:ne}),_e.data=Ke))}Vd(xe,i)})}function co(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=mn(t,o),h!=null&&l.unshift(co(t,h,c)),h=mn(t,i),h!=null&&l.push(co(t,h,c))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,k=D.alternate,ne=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&ne!==null&&(D=ne,c?(k=mn(o,h),k!=null&&M.unshift(co(o,k,D))):c||(k=mn(o,h),k!=null&&M.push(co(o,k,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var d_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function Xd(t){return(typeof t=="string"?t:""+t).replace(d_,`
`).replace(h_,"")}function ca(t,i,o){if(i=Xd(i),Xd(t)!==i&&o)throw Error(n(425))}function fa(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(t){return Yd.resolve(null).then(t).catch(g_)}:du;function g_(t){setTimeout(function(){throw t})}function hu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),eo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);eo(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),hi="__reactFiber$"+os,fo="__reactProps$"+os,wi="__reactContainer$"+os,pu="__reactEvents$"+os,__="__reactListeners$"+os,v_="__reactHandles$"+os;function Er(t){var i=t[hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=qd(t);t!==null;){if(o=t[hi])return o;t=qd(t)}return i}t=o,o=t.parentNode}return null}function ho(t){return t=t[hi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function da(t){return t[fo]||null}var mu=[],ls=-1;function Qi(t){return{current:t}}function It(t){0>ls||(t.current=mu[ls],mu[ls]=null,ls--)}function Lt(t,i){ls++,mu[ls]=t.current,t.current=i}var Ji={},ln=Qi(Ji),En=Qi(!1),Tr=Ji;function us(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Tn(t){return t=t.childContextTypes,t!=null}function ha(){It(En),It(ln)}function jd(t,i,o){if(ln.current!==Ji)throw Error(n(168));Lt(ln,i),Lt(En,o)}function $d(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return te({},o,l)}function pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=ln.current,Lt(ln,t),Lt(En,En.current),!0}function Kd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=$d(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(En),It(ln),Lt(ln,t)):It(En),Lt(En,o)}var Ai=null,ma=!1,gu=!1;function Zd(t){Ai===null?Ai=[t]:Ai.push(t)}function x_(t){ma=!0,Zd(t)}function er(){if(!gu&&Ai!==null){gu=!0;var t=0,i=At;try{var o=Ai;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,ma=!1}catch(c){throw Ai!==null&&(Ai=Ai.slice(t+1)),re(Be,er),c}finally{At=i,gu=!1}}return null}var cs=[],fs=0,ga=null,_a=0,Hn=[],Vn=0,wr=null,Ci=1,Ri="";function Ar(t,i){cs[fs++]=_a,cs[fs++]=ga,ga=t,_a=i}function Qd(t,i,o){Hn[Vn++]=Ci,Hn[Vn++]=Ri,Hn[Vn++]=wr,wr=t;var l=Ci;t=Ri;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ci=1<<32-st(i)+c|o<<c|l,Ri=h+t}else Ci=1<<h|o<<c|l,Ri=t}function _u(t){t.return!==null&&(Ar(t,1),Qd(t,1,0))}function vu(t){for(;t===ga;)ga=cs[--fs],cs[fs]=null,_a=cs[--fs],cs[fs]=null;for(;t===wr;)wr=Hn[--Vn],Hn[Vn]=null,Ri=Hn[--Vn],Hn[Vn]=null,Ci=Hn[--Vn],Hn[Vn]=null}var In=null,Nn=null,Ft=!1,ei=null;function Jd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Nn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Ft){var i=Nn;if(i){var o=i;if(!eh(t,i)){if(xu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=In;i&&eh(t,i)?Jd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,In=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,In=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function va(t){if(t!==In)return!1;if(!Ft)return th(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=Nn)){if(xu(t))throw nh(),Error(n(418));for(;i;)Jd(t,i),i=Zi(i.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Nn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Zi(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=Nn;t;)t=Zi(t.nextSibling)}function ds(){Nn=In=null,Ft=!1}function Su(t){ei===null?ei=[t]:ei.push(t)}var y_=R.ReactCurrentBatchConfig;function po(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function xa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ih(t){var i=t._init;return i(t._payload)}function rh(t){function i(q,H){if(t){var Z=q.deletions;Z===null?(q.deletions=[H],q.flags|=16):Z.push(H)}}function o(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function c(q,H){return q=lr(q,H),q.index=0,q.sibling=null,q}function h(q,H,Z){return q.index=Z,t?(Z=q.alternate,Z!==null?(Z=Z.index,Z<H?(q.flags|=2,H):Z):(q.flags|=2,H)):(q.flags|=1048576,H)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,H,Z,Ee){return H===null||H.tag!==6?(H=dc(Z,q.mode,Ee),H.return=q,H):(H=c(H,Z),H.return=q,H)}function k(q,H,Z,Ee){var We=Z.type;return We===I?_e(q,H,Z.props.children,Ee,Z.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===oe&&ih(We)===H.type)?(Ee=c(H,Z.props),Ee.ref=po(q,H,Z),Ee.return=q,Ee):(Ee=Ga(Z.type,Z.key,Z.props,null,q.mode,Ee),Ee.ref=po(q,H,Z),Ee.return=q,Ee)}function ne(q,H,Z,Ee){return H===null||H.tag!==4||H.stateNode.containerInfo!==Z.containerInfo||H.stateNode.implementation!==Z.implementation?(H=hc(Z,q.mode,Ee),H.return=q,H):(H=c(H,Z.children||[]),H.return=q,H)}function _e(q,H,Z,Ee,We){return H===null||H.tag!==7?(H=Ir(Z,q.mode,Ee,We),H.return=q,H):(H=c(H,Z),H.return=q,H)}function xe(q,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number")return H=dc(""+H,q.mode,Z),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return Z=Ga(H.type,H.key,H.props,null,q.mode,Z),Z.ref=po(q,null,H),Z.return=q,Z;case O:return H=hc(H,q.mode,Z),H.return=q,H;case oe:var Ee=H._init;return xe(q,Ee(H._payload),Z)}if(Ye(H)||K(H))return H=Ir(H,q.mode,Z,null),H.return=q,H;xa(q,H)}return null}function me(q,H,Z,Ee){var We=H!==null?H.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return We!==null?null:D(q,H,""+Z,Ee);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Y:return Z.key===We?k(q,H,Z,Ee):null;case O:return Z.key===We?ne(q,H,Z,Ee):null;case oe:return We=Z._init,me(q,H,We(Z._payload),Ee)}if(Ye(Z)||K(Z))return We!==null?null:_e(q,H,Z,Ee,null);xa(q,Z)}return null}function De(q,H,Z,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(Z)||null,D(H,q,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case Y:return q=q.get(Ee.key===null?Z:Ee.key)||null,k(H,q,Ee,We);case O:return q=q.get(Ee.key===null?Z:Ee.key)||null,ne(H,q,Ee,We);case oe:var $e=Ee._init;return De(q,H,Z,$e(Ee._payload),We)}if(Ye(Ee)||K(Ee))return q=q.get(Z)||null,_e(H,q,Ee,We,null);xa(H,Ee)}return null}function ke(q,H,Z,Ee){for(var We=null,$e=null,Ke=H,tt=H=0,en=null;Ke!==null&&tt<Z.length;tt++){Ke.index>tt?(en=Ke,Ke=null):en=Ke.sibling;var Mt=me(q,Ke,Z[tt],Ee);if(Mt===null){Ke===null&&(Ke=en);break}t&&Ke&&Mt.alternate===null&&i(q,Ke),H=h(Mt,H,tt),$e===null?We=Mt:$e.sibling=Mt,$e=Mt,Ke=en}if(tt===Z.length)return o(q,Ke),Ft&&Ar(q,tt),We;if(Ke===null){for(;tt<Z.length;tt++)Ke=xe(q,Z[tt],Ee),Ke!==null&&(H=h(Ke,H,tt),$e===null?We=Ke:$e.sibling=Ke,$e=Ke);return Ft&&Ar(q,tt),We}for(Ke=l(q,Ke);tt<Z.length;tt++)en=De(Ke,q,tt,Z[tt],Ee),en!==null&&(t&&en.alternate!==null&&Ke.delete(en.key===null?tt:en.key),H=h(en,H,tt),$e===null?We=en:$e.sibling=en,$e=en);return t&&Ke.forEach(function(ur){return i(q,ur)}),Ft&&Ar(q,tt),We}function ze(q,H,Z,Ee){var We=K(Z);if(typeof We!="function")throw Error(n(150));if(Z=We.call(Z),Z==null)throw Error(n(151));for(var $e=We=null,Ke=H,tt=H=0,en=null,Mt=Z.next();Ke!==null&&!Mt.done;tt++,Mt=Z.next()){Ke.index>tt?(en=Ke,Ke=null):en=Ke.sibling;var ur=me(q,Ke,Mt.value,Ee);if(ur===null){Ke===null&&(Ke=en);break}t&&Ke&&ur.alternate===null&&i(q,Ke),H=h(ur,H,tt),$e===null?We=ur:$e.sibling=ur,$e=ur,Ke=en}if(Mt.done)return o(q,Ke),Ft&&Ar(q,tt),We;if(Ke===null){for(;!Mt.done;tt++,Mt=Z.next())Mt=xe(q,Mt.value,Ee),Mt!==null&&(H=h(Mt,H,tt),$e===null?We=Mt:$e.sibling=Mt,$e=Mt);return Ft&&Ar(q,tt),We}for(Ke=l(q,Ke);!Mt.done;tt++,Mt=Z.next())Mt=De(Ke,q,tt,Mt.value,Ee),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?tt:Mt.key),H=h(Mt,H,tt),$e===null?We=Mt:$e.sibling=Mt,$e=Mt);return t&&Ke.forEach(function(J_){return i(q,J_)}),Ft&&Ar(q,tt),We}function Ht(q,H,Z,Ee){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Y:e:{for(var We=Z.key,$e=H;$e!==null;){if($e.key===We){if(We=Z.type,We===I){if($e.tag===7){o(q,$e.sibling),H=c($e,Z.props.children),H.return=q,q=H;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===oe&&ih(We)===$e.type){o(q,$e.sibling),H=c($e,Z.props),H.ref=po(q,$e,Z),H.return=q,q=H;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}Z.type===I?(H=Ir(Z.props.children,q.mode,Ee,Z.key),H.return=q,q=H):(Ee=Ga(Z.type,Z.key,Z.props,null,q.mode,Ee),Ee.ref=po(q,H,Z),Ee.return=q,q=Ee)}return M(q);case O:e:{for($e=Z.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===Z.containerInfo&&H.stateNode.implementation===Z.implementation){o(q,H.sibling),H=c(H,Z.children||[]),H.return=q,q=H;break e}else{o(q,H);break}else i(q,H);H=H.sibling}H=hc(Z,q.mode,Ee),H.return=q,q=H}return M(q);case oe:return $e=Z._init,Ht(q,H,$e(Z._payload),Ee)}if(Ye(Z))return ke(q,H,Z,Ee);if(K(Z))return ze(q,H,Z,Ee);xa(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,H!==null&&H.tag===6?(o(q,H.sibling),H=c(H,Z),H.return=q,q=H):(o(q,H),H=dc(Z,q.mode,Ee),H.return=q,q=H),M(q)):o(q,H)}return Ht}var hs=rh(!0),sh=rh(!1),ya=Qi(null),Sa=null,ps=null,Mu=null;function Eu(){Mu=ps=Sa=null}function Tu(t){var i=ya.current;It(ya),t._currentValue=i}function wu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Sa=t,Mu=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(wn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Sa===null)throw Error(n(308));ps=t,Sa.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Cr=null;function Au(t){Cr===null?Cr=[t]:Cr.push(t)}function oh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,Au(i)):(o.next=c.next,c.next=o),i.interleaved=o,Pi(t,l)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Pi(t,o)}return c=l.interleaved,c===null?(i.next=i,Au(l)):(i.next=c.next,c.next=i),l.interleaved=i,Pi(t,o)}function Ma(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Hl(t,o)}}function lh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ea(t,i,o,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var k=D,ne=k.next;k.next=null,M===null?h=ne:M.next=ne,M=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=ne:D.next=ne,_e.lastBaseUpdate=k))}if(h!==null){var xe=c.baseState;M=0,_e=ne=k=null,D=h;do{var me=D.lane,De=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ke=t,ze=D;switch(me=i,De=o,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){xe=ke.call(De,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(De,xe,me):ke,me==null)break e;xe=te({},xe,me);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else De={eventTime:De,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(ne=_e=De,k=xe):_e=_e.next=De,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(k=xe),c.baseState=k,c.firstBaseUpdate=ne,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);br|=M,t.lanes=M,t.memoizedState=xe}}function uh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var mo={},pi=Qi(mo),go=Qi(mo),_o=Qi(mo);function Rr(t){if(t===mo)throw Error(n(174));return t}function Ru(t,i){switch(Lt(_o,i),Lt(go,t),Lt(pi,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}It(pi),Lt(pi,i)}function gs(){It(pi),It(go),It(_o)}function ch(t){Rr(_o.current);var i=Rr(pi.current),o=He(i,t.type);i!==o&&(Lt(go,t),Lt(pi,o))}function Pu(t){go.current===t&&(It(pi),It(go))}var Ot=Qi(0);function Ta(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bu=[];function Lu(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var wa=R.ReactCurrentDispatcher,Du=R.ReactCurrentBatchConfig,Pr=0,kt=null,Yt=null,Qt=null,Aa=!1,vo=!1,xo=0,S_=0;function un(){throw Error(n(321))}function Uu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Iu(t,i,o,l,c,h){if(Pr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wa.current=t===null||t.memoizedState===null?w_:A_,t=o(l,c),vo){h=0;do{if(vo=!1,xo=0,25<=h)throw Error(n(301));h+=1,Qt=Yt=null,i.updateQueue=null,wa.current=C_,t=o(l,c)}while(vo)}if(wa.current=Pa,i=Yt!==null&&Yt.next!==null,Pr=0,Qt=Yt=kt=null,Aa=!1,i)throw Error(n(300));return t}function Nu(){var t=xo!==0;return xo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Wn(){if(Yt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Qt===null?kt.memoizedState:Qt.next;if(i!==null)Qt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Qt===null?kt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function yo(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,k=null,ne=h;do{var _e=ne.lane;if((Pr&_e)===_e)k!==null&&(k=k.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),l=ne.hasEagerState?ne.eagerState:t(l,ne.action);else{var xe={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};k===null?(D=k=xe,M=l):k=k.next=xe,kt.lanes|=_e,br|=_e}ne=ne.next}while(ne!==null&&ne!==h);k===null?M=l:k.next=D,Jn(l,i.memoizedState)||(wn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,br|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ou(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Jn(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function fh(){}function dh(t,i){var o=kt,l=Wn(),c=i(),h=!Jn(l.memoizedState,c);if(h&&(l.memoizedState=c,wn=!0),l=l.queue,ku(mh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Qt!==null&&Qt.memoizedState.tag&1){if(o.flags|=2048,So(9,ph.bind(null,o,l,c,i),void 0,null),Jt===null)throw Error(n(349));(Pr&30)!==0||hh(o,i,c)}return c}function hh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ph(t,i,o,l){i.value=o,i.getSnapshot=l,gh(i)&&_h(t)}function mh(t,i,o){return o(function(){gh(i)&&_h(t)})}function gh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function _h(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function vh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=T_.bind(null,kt,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function xh(){return Wn().memoizedState}function Ca(t,i,o,l){var c=mi();kt.flags|=t,c.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function Ra(t,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Uu(l,M.deps)){c.memoizedState=So(i,o,h,l);return}}kt.flags|=t,c.memoizedState=So(1|i,o,h,l)}function yh(t,i){return Ca(8390656,8,t,i)}function ku(t,i){return Ra(2048,8,t,i)}function Sh(t,i){return Ra(4,2,t,i)}function Mh(t,i){return Ra(4,4,t,i)}function Eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Th(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4,4,Eh.bind(null,i,t),o)}function Bu(){}function wh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Ah(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Ch(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=o):(Jn(o,i)||(o=gn(),kt.lanes|=o,br|=o,t.baseState=!0),i)}function M_(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=Du.transition;Du.transition={};try{t(!1),i()}finally{At=o,Du.transition=l}}function Rh(){return Wn().memoizedState}function E_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ph(t))bh(i,o);else if(o=oh(t,i,o,l),o!==null){var c=vn();ri(o,t,l,c),Lh(o,i,l)}}function T_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))bh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,Jn(D,M)){var k=i.interleaved;k===null?(c.next=c,Au(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}o=oh(t,i,c,l),o!==null&&(c=vn(),ri(o,t,l,c),Lh(o,i,l))}}function Ph(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function bh(t,i){vo=Aa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Lh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Hl(t,o)}}var Pa={readContext:Gn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},w_={readContext:Gn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:yh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4194308,4,Eh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ca(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ca(4,2,t,i)},useMemo:function(t,i){var o=mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=E_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:vh,useDebugValue:Bu,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=vh(!1),i=t[0];return t=M_.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=mi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Jt===null)throw Error(n(349));(Pr&30)!==0||hh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,yh(mh.bind(null,l,h,t),[t]),l.flags|=2048,So(9,ph.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=mi(),i=Jt.identifierPrefix;if(Ft){var o=Ri,l=Ci;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=S_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},A_={readContext:Gn,useCallback:wh,useContext:Gn,useEffect:ku,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Fu,useRef:xh,useState:function(){return Fu(yo)},useDebugValue:Bu,useDeferredValue:function(t){var i=Wn();return Ch(i,Yt.memoizedState,t)},useTransition:function(){var t=Fu(yo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Rh,unstable_isNewReconciler:!1},C_={readContext:Gn,useCallback:wh,useContext:Gn,useEffect:ku,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Ou,useRef:xh,useState:function(){return Ou(yo)},useDebugValue:Bu,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:Ch(i,Yt.memoizedState,t)},useTransition:function(){var t=Ou(yo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Rh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=te({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:te({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ba={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=vn(),c=or(t),h=bi(l,c);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ri(i,t,c,l),Ma(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=vn(),c=or(t),h=bi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ri(i,t,c,l),Ma(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=vn(),l=or(t),c=bi(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ri(i,t,l,o),Ma(i,t,l))}};function Dh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!oo(o,l)||!oo(c,h):!0}function Uh(t,i,o){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=Tn(i)?Tr:ln.current,l=i.contextTypes,h=(l=l!=null)?us(t,c):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ih(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&ba.enqueueReplaceState(i,i.state,null)}function Hu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Cu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=Tn(i)?Tr:ln.current,c.context=us(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(zu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&ba.enqueueReplaceState(c,c.state,null),Ea(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Vu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var R_=typeof WeakMap=="function"?WeakMap:Map;function Nh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Oa||(Oa=!0,rc=l),Gu(t,i)},o}function Fh(t,i,o){o=bi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Gu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Gu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Oh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new R_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=V_.bind(null,t,i,o),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var P_=R.ReactCurrentOwner,wn=!1;function _n(t,i,o,l){i.child=t===null?sh(i,null,o,l):hs(i,t.child,o,l)}function zh(t,i,o,l,c){o=o.render;var h=i.ref;return ms(i,c),l=Iu(t,i,o,l,h,c),o=Nu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Ft&&o&&_u(i),i.flags|=1,_n(t,i,l,c),i.child)}function Hh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!fc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Vh(t,i,h,l,c)):(t=Ga(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:oo,o(M,l)&&t.ref===i.ref)return Li(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Vh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(oo(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Li(t,i,c)}return Wu(t,i,o,l,c)}function Gh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(xs,Fn),Fn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(xs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(xs,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(xs,Fn),Fn|=l;return _n(t,i,c,o),i.child}function Wh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,o,l,c){var h=Tn(o)?Tr:ln.current;return h=us(i,h),ms(i,c),o=Iu(t,i,o,l,h,c),l=Nu(),t!==null&&!wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Ft&&l&&_u(i),i.flags|=1,_n(t,i,o,c),i.child)}function Xh(t,i,o,l,c){if(Tn(o)){var h=!0;pa(i)}else h=!1;if(ms(i,c),i.stateNode===null)Da(t,i),Uh(i,o,l),Hu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Gn(ne):(ne=Tn(o)?Tr:ln.current,ne=us(i,ne));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||k!==ne)&&Ih(i,M,l,ne),tr=!1;var me=i.memoizedState;M.state=me,Ea(i,l,M,c),k=i.memoizedState,D!==l||me!==k||En.current||tr?(typeof _e=="function"&&(zu(i,o,_e,l),k=i.memoizedState),(D=tr||Dh(i,o,D,l,me,k,ne))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=ne,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ah(t,i),D=i.memoizedProps,ne=i.type===i.elementType?D:ti(i.type,D),M.props=ne,xe=i.pendingProps,me=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=Gn(k):(k=Tn(o)?Tr:ln.current,k=us(i,k));var De=o.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==k)&&Ih(i,M,l,k),tr=!1,me=i.memoizedState,M.state=me,Ea(i,l,M,c);var ke=i.memoizedState;D!==xe||me!==ke||En.current||tr?(typeof De=="function"&&(zu(i,o,De,l),ke=i.memoizedState),(ne=tr||Dh(i,o,ne,l,me,ke,k)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ke,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ke,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),M.props=l,M.state=ke,M.context=k,l=ne):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Xu(t,i,o,l,h,c)}function Xu(t,i,o,l,c,h){Wh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Kd(i,o,!1),Li(t,i,h);l=i.stateNode,P_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,D,h)):_n(t,i,D,h),i.memoizedState=l.state,c&&Kd(i,o,!0),i.child}function Yh(t){var i=t.stateNode;i.pendingContext?jd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&jd(t,i.context,!1),Ru(t,i.containerInfo)}function qh(t,i,o,l,c){return ds(),Su(c),i.flags|=256,_n(t,i,o,l),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function jh(t,i,o){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ot,c&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Wa(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=qu(o),i.memoizedState=Yu,t):ju(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return b_(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=lr(c,k),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?qu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Yu,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ju(t,i){return i=Wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function La(t,i,o,l){return l!==null&&Su(l),hs(i,t.child,null,o),t=ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function b_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Vu(Error(n(422))),La(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Wa({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=qu(M),i.memoizedState=Yu,h);if((i.mode&1)===0)return La(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Vu(h,l,void 0),La(t,i,M,l)}if(D=(M&t.childLanes)!==0,wn||D){if(l=Jt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Pi(t,c),ri(l,t,c,-1))}return cc(),l=Vu(Error(n(421))),La(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=G_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Zi(c.nextSibling),In=i,Ft=!0,ei=null,t!==null&&(Hn[Vn++]=Ci,Hn[Vn++]=Ri,Hn[Vn++]=wr,Ci=t.id,Ri=t.overflow,wr=i),i=ju(i,l.children),i.flags|=4096,i)}function $h(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),wu(t.return,i,o)}function $u(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Kh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(_n(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,o,i);else if(t.tag===19)$h(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ta(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),$u(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ta(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}$u(i,!0,o,null,h);break;case"together":$u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function L_(t,i,o){switch(i.tag){case 3:Yh(i),ds();break;case 5:ch(i);break;case 1:Tn(i.type)&&pa(i);break;case 4:Ru(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(ya,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?jh(t,i,o):(Lt(Ot,Ot.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Kh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Gh(t,i,o)}return Li(t,i,o)}var Zh,Ku,Qh,Jh;Zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},Qh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(pi.current);var h=null;switch(o){case"input":c=X(t,c),l=X(t,l),h=[];break;case"select":c=te({},c,{value:void 0}),l=te({},l,{value:void 0}),h=[];break;case"textarea":c=w(t,c),l=w(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fa)}ct(o,l);var M;o=null;for(ne in c)if(!l.hasOwnProperty(ne)&&c.hasOwnProperty(ne)&&c[ne]!=null)if(ne==="style"){var D=c[ne];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?h||(h=[]):(h=h||[]).push(ne,null));for(ne in l){var k=l[ne];if(D=c!=null?c[ne]:void 0,l.hasOwnProperty(ne)&&k!==D&&(k!=null||D!=null))if(ne==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(h||(h=[]),h.push(ne,o)),o=k;else ne==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(h=h||[]).push(ne,k)):ne==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(ne,""+k):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(k!=null&&ne==="onScroll"&&Ut("scroll",t),h||D===k||(h=[])):(h=h||[]).push(ne,k))}o&&(h=h||[]).push("style",o);var ne=h;(i.updateQueue=ne)&&(i.flags|=4)}},Jh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Mo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function D_(t,i,o){var l=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return Tn(i.type)&&ha(),cn(i),null;case 3:return l=i.stateNode,gs(),It(En),It(ln),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(ac(ei),ei=null))),Ku(t,i),cn(i),null;case 5:Pu(i);var c=Rr(_o.current);if(o=i.type,t!==null&&i.stateNode!=null)Qh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Rr(pi.current),va(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[fo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<lo.length;c++)Ut(lo[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":pn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Q(l,h),Ut("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Ct(l),je(l,h,!0);break;case"textarea":Ct(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=fa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[hi]=i,t[fo]=l,Zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<lo.length;c++)Ut(lo[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":pn(t,l),c=X(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=te({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Q(t,l),c=w(t,l),Ut("invalid",t);break;default:c=l}ct(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var k=D[h];h==="style"?Je(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ie(t,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&lt(t,k):typeof k=="number"&&lt(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&Ut("scroll",t):k!=null&&L(t,h,k,M))}switch(o){case"input":Ct(t),je(t,l,!1);break;case"textarea":Ct(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=fa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Jh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(_o.current),Rr(pi.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:ca(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return cn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)nh(),ds(),i.flags|=98560,h=!1;else if(h=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[hi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else ei!==null&&(ac(ei),ei=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?qt===0&&(qt=3):cc())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return gs(),Ku(t,i),t===null&&uo(i.stateNode.containerInfo),cn(i),null;case 10:return Tu(i.type._context),cn(i),null;case 17:return Tn(i.type)&&ha(),cn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Mo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ta(t),M!==null){for(i.flags|=128,Mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Se()>ys&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ta(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return cn(i),null}else 2*Se()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Se(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(cn(i),null);case 22:case 23:return uc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function U_(t,i){switch(vu(i),i.tag){case 1:return Tn(i.type)&&ha(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),It(En),It(ln),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Pu(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return gs(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Ua=!1,fn=!1,I_=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function Zu(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var ep=!1;function N_(t,i){if(uu=Jo,t=Dd(),tu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,ne=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==o||c!==0&&xe.nodeType!==3||(D=M+c),xe!==h||l!==0&&xe.nodeType!==3||(k=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===o&&++ne===c&&(D=M),me===h&&++_e===l&&(k=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(cu={focusedElem:t,selectionRange:o},Jo=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Ht=ke.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?ze:ti(i.type,ze),Ht);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Bt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return ke=ep,ep=!1,ke}function Eo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Zu(i,o,h)}c=c.next}while(c!==l)}}function Ia(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Qu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[fo],delete i[pu],delete i[__],delete i[v_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}function ec(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,o),t=t.sibling;t!==null;)ec(t,i,o),t=t.sibling}var rn=null,ni=!1;function ir(t,i,o){for(o=o.child;o!==null;)rp(t,i,o),o=o.sibling}function rp(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 5:fn||vs(o,i);case 6:var l=rn,c=ni;rn=null,ir(t,i,o),rn=l,ni=c,rn!==null&&(ni?(t=rn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):rn.removeChild(o.stateNode));break;case 18:rn!==null&&(ni?(t=rn,o=o.stateNode,t.nodeType===8?hu(t.parentNode,o):t.nodeType===1&&hu(t,o),eo(t)):hu(rn,o.stateNode));break;case 4:l=rn,c=ni,rn=o.stateNode.containerInfo,ni=!0,ir(t,i,o),rn=l,ni=c;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Zu(o,i,M),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!fn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Bt(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,ir(t,i,o),fn=l):ir(t,i,o);break;default:ir(t,i,o)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new I_),i.forEach(function(l){var c=W_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:rn=D.stateNode,ni=!1;break e;case 3:rn=D.stateNode.containerInfo,ni=!0;break e;case 4:rn=D.stateNode.containerInfo,ni=!0;break e}D=D.return}if(rn===null)throw Error(n(160));rp(h,M,c),rn=null,ni=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(ne){Bt(c,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),gi(t),l&4){try{Eo(3,t,t.return),Ia(3,t)}catch(ze){Bt(t,t.return,ze)}try{Eo(5,t,t.return)}catch(ze){Bt(t,t.return,ze)}}break;case 1:ii(i,t),gi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ii(i,t),gi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(ze){Bt(t,t.return,ze)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),it(D,M);var ne=it(D,h);for(M=0;M<k.length;M+=2){var _e=k[M],xe=k[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ie(c,xe):_e==="children"?lt(c,xe):L(c,_e,xe,ne)}switch(D){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?b(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[fo]=h}catch(ze){Bt(t,t.return,ze)}}break;case 6:if(ii(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(ze){Bt(t,t.return,ze)}}break;case 3:if(ii(i,t),gi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(ze){Bt(t,t.return,ze)}break;case 4:ii(i,t),gi(t);break;case 13:ii(i,t),gi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ic=Se())),l&4&&sp(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(ne=fn)||_e,ii(i,t),fn=ne):ii(i,t),gi(t),l&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!_e&&(t.mode&1)!==0)for(Ne=t,_e=t.child;_e!==null;){for(xe=Ne=_e;Ne!==null;){switch(me=Ne,De=me.child,me.tag){case 0:case 11:case 14:case 15:Eo(4,me,me.return);break;case 1:vs(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){Bt(l,o,ze)}}break;case 5:vs(me,me.return);break;case 22:if(me.memoizedState!==null){up(xe);continue}}De!==null?(De.return=me,Ne=De):up(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,ne?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,k=xe.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Qe("display",M))}catch(ze){Bt(t,t.return,ze)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ne?"":xe.memoizedProps}catch(ze){Bt(t,t.return,ze)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ii(i,t),gi(t),l&4&&sp(t);break;case 21:break;default:ii(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=ip(t);ec(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=ip(t);Ju(t,D,M);break;default:throw Error(n(161))}}catch(k){Bt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function F_(t,i,o){Ne=t,ap(t)}function ap(t,i,o){for(var l=(t.mode&1)!==0;Ne!==null;){var c=Ne,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ua;if(!M){var D=c.alternate,k=D!==null&&D.memoizedState!==null||fn;D=Ua;var ne=fn;if(Ua=M,(fn=k)&&!ne)for(Ne=c;Ne!==null;)M=Ne,k=M.child,M.tag===22&&M.memoizedState!==null?cp(c):k!==null?(k.return=M,Ne=k):cp(c);for(;h!==null;)Ne=h,ap(h),h=h.sibling;Ne=c,Ua=D,fn=ne}lp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ne=h):lp(t)}}function lp(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Ia(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&uh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&eo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Qu(i)}catch(me){Bt(i,i.return,me)}}if(i===t){Ne=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function up(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function cp(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ia(4,i)}catch(k){Bt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){Bt(i,c,k)}}var h=i.return;try{Qu(i)}catch(k){Bt(i,h,k)}break;case 5:var M=i.return;try{Qu(i)}catch(k){Bt(i,M,k)}}}catch(k){Bt(i,i.return,k)}if(i===t){Ne=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ne=D;break}Ne=i.return}}var O_=Math.ceil,Na=R.ReactCurrentDispatcher,tc=R.ReactCurrentOwner,Xn=R.ReactCurrentBatchConfig,vt=0,Jt=null,Vt=null,sn=0,Fn=0,xs=Qi(0),qt=0,To=null,br=0,Fa=0,nc=0,wo=null,An=null,ic=0,ys=1/0,Di=null,Oa=!1,rc=null,rr=null,ka=!1,sr=null,Ba=0,Ao=0,sc=null,za=-1,Ha=0;function vn(){return(vt&6)!==0?Se():za!==-1?za:za=Se()}function or(t){return(t.mode&1)===0?1:(vt&2)!==0&&sn!==0?sn&-sn:y_.transition!==null?(Ha===0&&(Ha=gn()),Ha):(t=At,t!==0||(t=window.event,t=t===void 0?16:dd(t.type)),t)}function ri(t,i,o,l){if(50<Ao)throw Ao=0,sc=null,Error(n(185));Mn(t,o,l),((vt&2)===0||t!==Jt)&&(t===Jt&&((vt&2)===0&&(Fa|=o),qt===4&&ar(t,sn)),Cn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(ys=Se()+500,ma&&er()))}function Cn(t,i){var o=t.callbackNode;Bn(t,i);var l=di(t,t===Jt?sn:0);if(l===0)o!==null&&se(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&se(o),i===1)t.tag===0?x_(dp.bind(null,t)):Zd(dp.bind(null,t)),m_(function(){(vt&6)===0&&er()}),o=null;else{switch(rd(l)){case 1:o=Be;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=gt;break;default:o=nt}o=yp(o,fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function fp(t,i){if(za=-1,Ha=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=di(t,t===Jt?sn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Va(t,l);else{i=l;var c=vt;vt|=2;var h=pp();(Jt!==t||sn!==i)&&(Di=null,ys=Se()+500,Dr(t,i));do try{z_();break}catch(D){hp(t,D)}while(!0);Eu(),Na.current=h,vt=c,Vt!==null?i=0:(Jt=null,sn=0,i=qt)}if(i!==0){if(i===2&&(c=Ti(t),c!==0&&(l=c,i=oc(t,c))),i===1)throw o=To,Dr(t,0),ar(t,l),Cn(t,Se()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,(l&30)===0&&!k_(c)&&(i=Va(t,l),i===2&&(h=Ti(t),h!==0&&(l=h,i=oc(t,h))),i===1))throw o=To,Dr(t,0),ar(t,l),Cn(t,Se()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,An,Di);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=ic+500-Se(),10<i)){if(di(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){vn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=du(Ur.bind(null,t,An,Di),i);break}Ur(t,An,Di);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Se()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*O_(l/1960))-l,10<l){t.timeoutHandle=du(Ur.bind(null,t,An,Di),l);break}Ur(t,An,Di);break;case 5:Ur(t,An,Di);break;default:throw Error(n(329))}}}return Cn(t,Se()),t.callbackNode===o?fp.bind(null,t):null}function oc(t,i){var o=wo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Va(t,i),t!==2&&(i=An,An=o,i!==null&&ac(i)),t}function ac(t){An===null?An=t:An.push.apply(An,t)}function k_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Jn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~nc,i&=~Fa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function dp(t){if((vt&6)!==0)throw Error(n(327));Ss();var i=di(t,0);if((i&1)===0)return Cn(t,Se()),null;var o=Va(t,i);if(t.tag!==0&&o===2){var l=Ti(t);l!==0&&(i=l,o=oc(t,l))}if(o===1)throw o=To,Dr(t,0),ar(t,i),Cn(t,Se()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,An,Di),Cn(t,Se()),null}function lc(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(ys=Se()+500,ma&&er())}}function Lr(t){sr!==null&&sr.tag===0&&(vt&6)===0&&Ss();var i=vt;vt|=1;var o=Xn.transition,l=At;try{if(Xn.transition=null,At=1,t)return t()}finally{At=l,Xn.transition=o,vt=i,(vt&6)===0&&er()}}function uc(){Fn=xs.current,It(xs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,p_(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(vu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ha();break;case 3:gs(),It(En),It(ln),Lu();break;case 5:Pu(l);break;case 4:gs();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Tu(l.type._context);break;case 22:case 23:uc()}o=o.return}if(Jt=t,Vt=t=lr(t.current,null),sn=Fn=i,qt=0,To=null,nc=Fa=br=0,An=wo=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Cr=null}return t}function hp(t,i){do{var o=Vt;try{if(Eu(),wa.current=Pa,Aa){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Aa=!1}if(Pr=0,Qt=Yt=kt=null,vo=!1,xo=0,tc.current=null,o===null||o.return===null){qt=1,To=i,Vt=null;break}e:{var h=t,M=o.return,D=o,k=i;if(i=sn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=k,_e=D,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=kh(M);if(De!==null){De.flags&=-257,Bh(De,M,D,h,i),De.mode&1&&Oh(h,ne,i),i=De,k=ne;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(k),i.updateQueue=ze}else ke.add(k);break e}else{if((i&1)===0){Oh(h,ne,i),cc();break e}k=Error(n(426))}}else if(Ft&&D.mode&1){var Ht=kh(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Bh(Ht,M,D,h,i),Su(_s(k,D));break e}}h=k=_s(k,D),qt!==4&&(qt=2),wo===null?wo=[h]:wo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Nh(h,k,i);lh(h,q);break e;case 1:D=k;var H=h.type,Z=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(rr===null||!rr.has(Z)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Fh(h,D,i);lh(h,Ee);break e}}h=h.return}while(h!==null)}gp(o)}catch(We){i=We,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function pp(){var t=Na.current;return Na.current=Pa,t===null?Pa:t}function cc(){(qt===0||qt===3||qt===2)&&(qt=4),Jt===null||(br&268435455)===0&&(Fa&268435455)===0||ar(Jt,sn)}function Va(t,i){var o=vt;vt|=2;var l=pp();(Jt!==t||sn!==i)&&(Di=null,Dr(t,i));do try{B_();break}catch(c){hp(t,c)}while(!0);if(Eu(),vt=o,Na.current=l,Vt!==null)throw Error(n(261));return Jt=null,sn=0,qt}function B_(){for(;Vt!==null;)mp(Vt)}function z_(){for(;Vt!==null&&!W();)mp(Vt)}function mp(t){var i=xp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?gp(t):Vt=i,tc.current=null}function gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=D_(o,i,Fn),o!==null){Vt=o;return}}else{if(o=U_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);qt===0&&(qt=5)}function Ur(t,i,o){var l=At,c=Xn.transition;try{Xn.transition=null,At=1,H_(t,i,o,l)}finally{Xn.transition=c,At=l}return null}function H_(t,i,o,l){do Ss();while(sr!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Ko(t,h),t===Jt&&(Vt=Jt=null,sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ka||(ka=!0,yp(nt,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var M=At;At=1;var D=vt;vt|=4,tc.current=null,N_(t,o),op(o,t),a_(cu),Jo=!!uu,cu=uu=null,t.current=o,F_(o),Te(),vt=D,At=M,Xn.transition=h}else t.current=o;if(ka&&(ka=!1,sr=t,Ba=c),h=t.pendingLanes,h===0&&(rr=null),on(o.stateNode),Cn(t,Se()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Oa)throw Oa=!1,t=rc,rc=null,t;return(Ba&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===sc?Ao++:(Ao=0,sc=t):Ao=0,er(),null}function Ss(){if(sr!==null){var t=rd(Ba),i=Xn.transition,o=At;try{if(Xn.transition=null,At=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ba=0,(vt&6)!==0)throw Error(n(331));var c=vt;for(vt|=4,Ne=t.current;Ne!==null;){var h=Ne,M=h.child;if((Ne.flags&16)!==0){var D=h.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ne=D[k];for(Ne=ne;Ne!==null;){var _e=Ne;switch(_e.tag){case 0:case 11:case 15:Eo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Ne=xe;else for(;Ne!==null;){_e=Ne;var me=_e.sibling,De=_e.return;if(tp(_e),_e===ne){Ne=null;break}if(me!==null){me.return=De,Ne=me;break}Ne=De}}}var ke=h.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Ht=ze.sibling;ze.sibling=null,ze=Ht}while(ze!==null)}}Ne=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ne=M;else e:for(;Ne!==null;){if(h=Ne,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Eo(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Ne=q;break e}Ne=h.return}}var H=t.current;for(Ne=H;Ne!==null;){M=Ne;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Ne=Z;else e:for(M=H;Ne!==null;){if(D=Ne,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ia(9,D)}}catch(We){Bt(D,D.return,We)}if(D===M){Ne=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Ne=Ee;break e}Ne=D.return}}if(vt=c,er(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Et,t)}catch{}l=!0}return l}finally{At=o,Xn.transition=i}}return!1}function _p(t,i,o){i=_s(o,i),i=Nh(t,i,1),t=nr(t,i,1),i=vn(),t!==null&&(Mn(t,1,i),Cn(t,i))}function Bt(t,i,o){if(t.tag===3)_p(t,t,o);else for(;i!==null;){if(i.tag===3){_p(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=_s(o,t),t=Fh(i,t,1),i=nr(i,t,1),t=vn(),i!==null&&(Mn(i,1,t),Cn(i,t));break}}i=i.return}}function V_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=vn(),t.pingedLanes|=t.suspendedLanes&o,Jt===t&&(sn&o)===o&&(qt===4||qt===3&&(sn&130023424)===sn&&500>Se()-ic?Dr(t,0):nc|=o),Cn(t,i)}function vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=vn();t=Pi(t,i),t!==null&&(Mn(t,i,o),Cn(t,o))}function G_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),vp(t,o)}function W_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),vp(t,o)}var xp;xp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)wn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return wn=!1,L_(t,i,o);wn=(t.flags&131072)!==0}else wn=!1,Ft&&(i.flags&1048576)!==0&&Qd(i,_a,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Da(t,i),t=i.pendingProps;var c=us(i,ln.current);ms(i,o),c=Iu(null,i,l,t,c,o);var h=Nu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Tn(l)?(h=!0,pa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Cu(i),c.updater=ba,i.stateNode=c,c._reactInternals=i,Hu(i,l,t,o),i=Xu(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&_u(i),_n(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Da(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Y_(l),t=ti(l,t),c){case 0:i=Wu(null,i,l,t,o);break e;case 1:i=Xh(null,i,l,t,o);break e;case 11:i=zh(null,i,l,t,o);break e;case 14:i=Hh(null,i,l,ti(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Wu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Xh(t,i,l,c,o);case 3:e:{if(Yh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,ah(t,i),Ea(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=_s(Error(n(423)),i),i=qh(t,i,l,o,c);break e}else if(l!==c){c=_s(Error(n(424)),i),i=qh(t,i,l,o,c);break e}else for(Nn=Zi(i.stateNode.containerInfo.firstChild),In=i,Ft=!0,ei=null,o=sh(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===c){i=Li(t,i,o);break e}_n(t,i,l,o)}i=i.child}return i;case 5:return ch(i),t===null&&yu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,fu(l,c)?M=null:h!==null&&fu(l,h)&&(i.flags|=32),Wh(t,i),_n(t,i,M,o),i.child;case 6:return t===null&&yu(i),null;case 13:return jh(t,i,o);case 4:return Ru(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):_n(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),zh(t,i,l,c,o);case 7:return _n(t,i,i.pendingProps,o),i.child;case 8:return _n(t,i,i.pendingProps.children,o),i.child;case 12:return _n(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(ya,l._currentValue),l._currentValue=M,h!==null)if(Jn(h.value,M)){if(h.children===c.children&&!En.current){i=Li(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=bi(-1,o&-o),k.tag=2;var ne=h.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),ne.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),wu(h.return,o,i),D.lanes|=o;break}k=k.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),wu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}_n(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ms(i,o),c=Gn(c),l=l(c),i.flags|=1,_n(t,i,l,o),i.child;case 14:return l=i.type,c=ti(l,i.pendingProps),c=ti(l.type,c),Hh(t,i,l,c,o);case 15:return Vh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ti(l,c),Da(t,i),i.tag=1,Tn(l)?(t=!0,pa(i)):t=!1,ms(i,o),Uh(i,l,c),Hu(i,l,c,o),Xu(null,i,l,!0,t,o);case 19:return Kh(t,i,o);case 22:return Gh(t,i,o)}throw Error(n(156,i.tag))};function yp(t,i){return re(t,i)}function X_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new X_(t,i,o,l)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y_(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ee)return 11;if(t===ue)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ga(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")fc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Ir(o.children,c,h,i);case N:M=8,c|=8;break;case P:return t=Yn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case $:return t=Yn(13,o,i,c),t.elementType=$,t.lanes=h,t;case le:return t=Yn(19,o,i,c),t.elementType=le,t.lanes=h,t;case ce:return Wa(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case B:M=9;break e;case ee:M=11;break e;case ue:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function Wa(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function dc(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function hc(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function q_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function pc(t,i,o,l,c,h,M,D,k){return t=new q_(t,i,o,D,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(h),t}function j_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Sp(t){if(!t)return Ji;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Tn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Tn(o))return $d(t,o,i)}return i}function Mp(t,i,o,l,c,h,M,D,k){return t=pc(o,l,!0,t,c,h,M,D,k),t.context=Sp(null),o=t.current,l=vn(),c=or(o),h=bi(l,c),h.callback=i??null,nr(o,h,c),t.current.lanes=c,Mn(t,c,l),Cn(t,l),t}function Xa(t,i,o,l){var c=i.current,h=vn(),M=or(c);return o=Sp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ri(t,c,M,h),Ma(t,c,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function mc(t,i){Ep(t,i),(t=t.alternate)&&Ep(t,i)}function $_(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}qa.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xa(t,i,null,null)},qa.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){Xa(null,t,null,null)}),i[wi]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=ad();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ji.length&&i!==0&&i<ji[o].priority;o++);ji.splice(o,0,t),o===0&&cd(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function K_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ne=Ya(M);h.call(ne)}}var M=Mp(i,l,t,0,null,!1,!1,"",wp);return t._reactRootContainer=M,t[wi]=M.current,uo(t.nodeType===8?t.parentNode:t),Lr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var ne=Ya(k);D.call(ne)}}var k=pc(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=k,t[wi]=k.current,uo(t.nodeType===8?t.parentNode:t),Lr(function(){Xa(i,k,o,l)}),k}function $a(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var k=Ya(M);D.call(k)}}Xa(i,M,t,c)}else M=K_(o,i,t,c,l);return Ya(M)}sd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Xt(i.pendingLanes);o!==0&&(Hl(i,o|1),Cn(i,Se()),(vt&6)===0&&(ys=Se()+500,er()))}break;case 13:Lr(function(){var l=Pi(t,1);if(l!==null){var c=vn();ri(l,t,1,c)}}),mc(t,1)}},Vl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=vn();ri(i,t,134217728,o)}mc(t,134217728)}},od=function(t){if(t.tag===13){var i=or(t),o=Pi(t,i);if(o!==null){var l=vn();ri(o,t,i,l)}mc(t,i)}},ad=function(){return At},ld=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=da(l);if(!c)throw Error(n(90));pt(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Dt=lc,Wt=Lr;var Z_={usingClientEntryPoint:!1,Events:[ho,as,da,Pe,rt,lc]},Co={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q_={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||$_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Et=Ka.inject(Q_),mt=Ka}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_,Rn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(i))throw Error(n(200));return j_(t,i,null,o)},Rn.createRoot=function(t,i){if(!_c(t))throw Error(n(299));var o=!1,l="",c=Tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=pc(t,1,!1,null,null,o,!1,l,c),t[wi]=i.current,uo(t.nodeType===8?t.parentNode:t),new gc(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Lr(t)},Rn.hydrate=function(t,i,o){if(!ja(i))throw Error(n(200));return $a(null,t,i,!0,o)},Rn.hydrateRoot=function(t,i,o){if(!_c(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=Tp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Mp(i,null,t,1,o??null,c,!1,h,M),t[wi]=i.current,uo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new qa(i)},Rn.render=function(t,i,o){if(!ja(i))throw Error(n(200));return $a(null,t,i,!1,o)},Rn.unmountComponentAtNode=function(t){if(!ja(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){$a(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Rn.unstable_batchedUpdates=lc,Rn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $a(t,i,o,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Lp;function sv(){if(Lp)return xc.exports;Lp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xc.exports=rv(),xc.exports}var Dp;function ov(){if(Dp)return Za;Dp=1;var s=sv();return Za.createRoot=s.createRoot,Za.hydrateRoot=s.hydrateRoot,Za}var av=ov();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="170",lv=0,Up=1,uv=2,Vm=1,cv=2,ki=3,xr=0,Ln=1,vi=2,_r=0,ks=1,Ip=2,Np=3,Fp=4,fv=5,Wr=100,dv=101,hv=102,pv=103,mv=104,gv=200,_v=201,vv=202,xv=203,ef=204,tf=205,yv=206,Sv=207,Mv=208,Ev=209,Tv=210,wv=211,Av=212,Cv=213,Rv=214,nf=0,rf=1,sf=2,Hs=3,of=4,af=5,lf=6,uf=7,Gm=0,Pv=1,bv=2,vr=0,Lv=1,Dv=2,Uv=3,Iv=4,Nv=5,Fv=6,Ov=7,Wm=300,Vs=301,Gs=302,cf=303,ff=304,Nl=306,df=1e3,Yr=1001,hf=1002,ci=1003,kv=1004,Qa=1005,xi=1006,Mc=1007,qr=1008,Vi=1009,Xm=1010,Ym=1011,Bo=1012,Xf=1013,jr=1014,Bi=1015,zo=1016,Yf=1017,qf=1018,Ws=1020,qm=35902,jm=1021,$m=1022,ui=1023,Km=1024,Zm=1025,Bs=1026,Xs=1027,Qm=1028,jf=1029,Jm=1030,$f=1031,Kf=1033,Tl=33776,wl=33777,Al=33778,Cl=33779,pf=35840,mf=35841,gf=35842,_f=35843,vf=36196,xf=37492,yf=37496,Sf=37808,Mf=37809,Ef=37810,Tf=37811,wf=37812,Af=37813,Cf=37814,Rf=37815,Pf=37816,bf=37817,Lf=37818,Df=37819,Uf=37820,If=37821,Rl=36492,Nf=36494,Ff=36495,eg=36283,Of=36284,kf=36285,Bf=36286,Bv=3200,zv=3201,tg=0,Hv=1,gr="",jn="srgb",qs="srgb-linear",Fl="linear",Rt="srgb",Ms=7680,Op=519,Vv=512,Gv=513,Wv=514,ng=515,Xv=516,Yv=517,qv=518,jv=519,kp=35044,Bp="300 es",zi=2e3,bl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,zf=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function bn(s,e,n){return Math.max(e,Math.min(n,s))}function $v(s,e){return(s%e+e)%e}function Tc(s,e,n){return(1-n)*s+n*e}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],E=r[8],T=a[0],v=a[3],g=a[6],U=a[1],L=a[4],R=a[7],Y=a[2],O=a[5],I=a[8];return u[0]=f*T+d*U+p*Y,u[3]=f*v+d*L+p*O,u[6]=f*g+d*R+p*I,u[1]=m*T+_*U+y*Y,u[4]=m*v+_*L+y*O,u[7]=m*g+_*R+y*I,u[2]=x*T+S*U+E*Y,u[5]=x*v+S*L+E*O,u[8]=x*g+S*R+E*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=_*f-d*m,x=d*p-_*u,S=m*u-f*p,E=n*y+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(a*m-_*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(_*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new ot;function ig(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ll(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kv(){const s=Ll("canvas");return s.style.display="block",s}const zp={};function Fo(s){s in zp||(zp[s]=!0,console.warn(s))}function Zv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Qv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Rt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Rt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?Fl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Hp=[.64,.33,.3,.6,.15,.06],Vp=[.2126,.7152,.0722],Gp=[.3127,.329],Wp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[qs]:{primaries:Hp,whitePoint:Gp,transfer:Fl,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:Vp,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:Hp,whitePoint:Gp,transfer:Rt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:Vp,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Es;class e0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Ll("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Hi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t0=0;class rg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ac(a[f].image)):u.push(Ac(a[f]))}else u=Ac(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class Dn extends js{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Yr,a=Yr,u=xi,f=qr,d=ui,p=Vi,m=Dn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ho(),this.name="",this.source=new rg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Wm;Dn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],E=p[9],T=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-T)<.01&&Math.abs(E-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+T)<.1&&Math.abs(E+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(S+1)/2,Y=(g+1)/2,O=(_+x)/4,I=(y+T)/4,N=(E+v)/4;return L>R&&L>Y?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=O/r,u=I/r):R>Y?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=O/a,u=N/a):Y<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Y),r=I/u,a=N/u),this.set(r,a,u,n),this}let U=Math.sqrt((v-E)*(v-E)+(y-T)*(y-T)+(x-_)*(x-_));return Math.abs(U)<.001&&(U=1),this.x=(v-E)/U,this.y=(y-T)/U,this.z=(x-_)/U,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i0 extends js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends i0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class sg extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r0 extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(y!==T||p!==x||m!==S||_!==E){let v=1-d;const g=p*x+m*S+_*E+y*T,U=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const Y=Math.sqrt(L),O=Math.atan2(Y,g*U);v=Math.sin(v*O)/Y,d=Math.sin(d*O)/Y}const R=d*U;if(p=p*v+x*R,m=m*v+S*R,_=_*v+E*R,y=y*v+T*R,v===1-d){const Y=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=Y,m*=Y,_*=Y,y*=Y}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=u[f],x=u[f+1],S=u[f+2],E=u[f+3];return e[n]=d*E+_*y+p*S-m*x,e[n+1]=p*E+_*x+m*y-d*S,e[n+2]=m*E+_*S+d*x-p*y,e[n+3]=_*E-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),E=p(u/2);switch(f){case"XYZ":this._x=x*_*y+m*S*E,this._y=m*S*y-x*_*E,this._z=m*_*E+x*S*y,this._w=m*_*y-x*S*E;break;case"YXZ":this._x=x*_*y+m*S*E,this._y=m*S*y-x*_*E,this._z=m*_*E-x*S*y,this._w=m*_*y+x*S*E;break;case"ZXY":this._x=x*_*y-m*S*E,this._y=m*S*y+x*_*E,this._z=m*_*E+x*S*y,this._w=m*_*y-x*S*E;break;case"ZYX":this._x=x*_*y-m*S*E,this._y=m*S*y+x*_*E,this._z=m*_*E-x*S*y,this._w=m*_*y+x*S*E;break;case"YZX":this._x=x*_*y+m*S*E,this._y=m*S*y+x*_*E,this._z=m*_*E-x*S*y,this._w=m*_*y-x*S*E;break;case"XZY":this._x=x*_*y-m*S*E,this._y=m*S*y-x*_*E,this._z=m*_*E+x*S*y,this._w=m*_*y+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*_,this.y=r+p*_+d*m-u*y,this.z=a+p*y+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new j,Yp=new Vo;class Go{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,si):si.fromBufferAttribute(u,f),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ja.copy(r.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),el.subVectors(this.max,Po),Ts.subVectors(e.a,Po),ws.subVectors(e.b,Po),As.subVectors(e.c,Po),cr.subVectors(ws,Ts),fr.subVectors(As,ws),Nr.subVectors(Ts,As);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Nr.z,Nr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Nr.z,0,-Nr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Nr.y,Nr.x,0];return!Rc(n,Ts,ws,As,el)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Ts,ws,As,el))?!1:(tl.crossVectors(cr,fr),n=[tl.x,tl.y,tl.z],Rc(n,Ts,ws,As,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new j,new j,new j,new j,new j,new j,new j,new j],si=new j,Ja=new Go,Ts=new j,ws=new j,As=new j,cr=new j,fr=new j,Nr=new j,Po=new j,el=new j,tl=new j,Fr=new j;function Rc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const s0=new Go,bo=new j,Pc=new j;class Wo{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):s0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Pc)),this.expandByPoint(bo.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new j,bc=new j,nl=new j,dr=new j,Lc=new j,il=new j,Dc=new j;class Ol{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bc.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(bc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(nl),d=dr.dot(this.direction),p=-dr.dot(nl),m=dr.lengthSq(),_=Math.abs(1-f*f);let y,x,S,E;if(_>0)if(y=f*p-d,x=f*d-p,E=u*_,y>=0)if(x>=-E)if(x<=E){const T=1/_;y*=T,x*=T,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-E?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=E?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(bc).addScaledVector(nl,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,u){Lc.subVectors(n,e),il.subVectors(r,e),Dc.crossVectors(Lc,il);let f=this.direction.dot(Dc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(il.crossVectors(dr,il));if(p<0)return null;const m=d*this.direction.dot(Lc.cross(dr));if(m<0||p+m>f)return null;const _=-d*dr.dot(Dc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,r,a,u,f,d,p,m,_,y,x,S,E,T,v){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,y,x,S,E,T,v)}set(e,n,r,a,u,f,d,p,m,_,y,x,S,E,T,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=x,g[3]=S,g[7]=E,g[11]=T,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),u=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*y,E=d*_,T=d*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=S+E*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=E+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,E=m*_,T=m*y;n[0]=x+T*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*_,n[9]=-d,n[2]=S*d-E,n[6]=T+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,E=m*_,T=m*y;n[0]=x-T*d,n[4]=-f*y,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*_,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*y,E=d*_,T=d*y;n[0]=p*_,n[4]=E*m-S,n[8]=x*m+T,n[1]=p*y,n[5]=T*m+x,n[9]=S*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,E=d*p,T=d*m;n[0]=p*_,n[4]=T-x*y,n[8]=E*y+S,n[1]=y,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*y+E,n[10]=x-T*y}else if(e.order==="XZY"){const x=f*p,S=f*m,E=d*p,T=d*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=x*y+T,n[5]=f*_,n[9]=S*y-E,n[2]=E*y-S,n[6]=d*_,n[10]=T*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,a0)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(r,On),hr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(r,On)),hr.normalize(),rl.crossVectors(On,hr),a[0]=hr.x,a[4]=rl.x,a[8]=On.x,a[1]=hr.y,a[5]=rl.y,a[9]=On.y,a[2]=hr.z,a[6]=rl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],E=r[2],T=r[6],v=r[10],g=r[14],U=r[3],L=r[7],R=r[11],Y=r[15],O=a[0],I=a[4],N=a[8],P=a[12],C=a[1],B=a[5],ee=a[9],$=a[13],le=a[2],ue=a[6],oe=a[10],ce=a[14],z=a[3],K=a[7],te=a[11],F=a[15];return u[0]=f*O+d*C+p*le+m*z,u[4]=f*I+d*B+p*ue+m*K,u[8]=f*N+d*ee+p*oe+m*te,u[12]=f*P+d*$+p*ce+m*F,u[1]=_*O+y*C+x*le+S*z,u[5]=_*I+y*B+x*ue+S*K,u[9]=_*N+y*ee+x*oe+S*te,u[13]=_*P+y*$+x*ce+S*F,u[2]=E*O+T*C+v*le+g*z,u[6]=E*I+T*B+v*ue+g*K,u[10]=E*N+T*ee+v*oe+g*te,u[14]=E*P+T*$+v*ce+g*F,u[3]=U*O+L*C+R*le+Y*z,u[7]=U*I+L*B+R*ue+Y*K,u[11]=U*N+L*ee+R*oe+Y*te,u[15]=U*P+L*$+R*ce+Y*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],E=e[3],T=e[7],v=e[11],g=e[15];return E*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+T*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+v*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*y+n*d*x+a*f*y-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],E=e[12],T=e[13],v=e[14],g=e[15],U=y*v*m-T*x*m+T*p*S-d*v*S-y*p*g+d*x*g,L=E*x*m-_*v*m-E*p*S+f*v*S+_*p*g-f*x*g,R=_*T*m-E*y*m+E*d*S-f*T*S-_*d*g+f*y*g,Y=E*y*p-_*T*p-E*d*x+f*T*x+_*d*v-f*y*v,O=n*U+r*L+a*R+u*Y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=U*I,e[1]=(T*x*u-y*v*u-T*a*S+r*v*S+y*a*g-r*x*g)*I,e[2]=(d*v*u-T*p*u+T*a*m-r*v*m-d*a*g+r*p*g)*I,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*I,e[4]=L*I,e[5]=(_*v*u-E*x*u+E*a*S-n*v*S-_*a*g+n*x*g)*I,e[6]=(E*p*u-f*v*u-E*a*m+n*v*m+f*a*g-n*p*g)*I,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*I,e[8]=R*I,e[9]=(E*y*u-_*T*u-E*r*S+n*T*S+_*r*g-n*y*g)*I,e[10]=(f*T*u-E*d*u+E*r*m-n*T*m-f*r*g+n*d*g)*I,e[11]=(_*d*u-f*y*u-_*r*m+n*y*m+f*r*S-n*d*S)*I,e[12]=Y*I,e[13]=(_*T*a-E*y*a+E*r*x-n*T*x-_*r*v+n*y*v)*I,e[14]=(E*d*a-f*T*a-E*r*p+n*T*p+f*r*v-n*d*v)*I,e[15]=(f*y*a-_*d*a+_*r*p-n*y*p-f*r*x+n*d*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,y=d+d,x=u*m,S=u*_,E=u*y,T=f*_,v=f*y,g=d*y,U=p*m,L=p*_,R=p*y,Y=r.x,O=r.y,I=r.z;return a[0]=(1-(T+g))*Y,a[1]=(S+R)*Y,a[2]=(E-L)*Y,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(x+g))*O,a[6]=(v+U)*O,a[7]=0,a[8]=(E+L)*I,a[9]=(v-U)*I,a[10]=(1-(x+T))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Cs.set(a[0],a[1],a[2]).length();const f=Cs.set(a[4],a[5],a[6]).length(),d=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/u,_=1/f,y=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=y,oi.elements[9]*=y,oi.elements[10]*=y,n.setFromRotationMatrix(oi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=zi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(d===zi)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===bl)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=zi){const p=this.elements,m=1/(n-e),_=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*_;let E,T;if(d===zi)E=(f+u)*y,T=-2*y;else if(d===bl)E=u*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new j,oi=new Nt,o0=new j(0,0,0),a0=new j(1,1,1),hr=new j,rl=new j,On=new j,qp=new Nt,jp=new Vo;class Si{constructor(e=0,n=0,r=0,a=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(bn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-bn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const $p=new j,Rs=new Vo,Ni=new Nt,sl=new j,Lo=new j,u0=new j,c0=new Vo,Kp=new j(1,0,0),Zp=new j(0,1,0),Qp=new j(0,0,1),Jp={type:"added"},f0={type:"removed"},Ps={type:"childadded",child:null},Uc={type:"childremoved",child:null};class $t extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new j,n=new Si,r=new Vo,a=new j(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ot}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,n){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Lo,sl,this.up):Ni.lookAt(sl,Lo,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Ni),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(f0),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}$t.DEFAULT_UP=new j(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new j,Fi=new j,Ic=new j,Oi=new j,bs=new j,Ls=new j,em=new j,Nc=new j,Fc=new j,Oc=new j,kc=new zt,Bc=new zt,zc=new zt;class li{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ai.subVectors(a,n),Fi.subVectors(r,n),Ic.subVectors(e,n);const f=ai.dot(ai),d=ai.dot(Fi),p=ai.dot(Ic),m=Fi.dot(Fi),_=Fi.dot(Ic),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*_)*x,E=(f*_-d*p)*x;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Oi.x),p.addScaledVector(f,Oi.y),p.addScaledVector(d,Oi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return kc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),kc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,r),zc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(kc,u.x),f.addScaledVector(Bc,u.y),f.addScaledVector(zc,u.z),f}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Fi.subVectors(e,n),ai.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;bs.subVectors(a,r),Ls.subVectors(u,r),Nc.subVectors(e,r);const p=bs.dot(Nc),m=Ls.dot(Nc);if(p<=0&&m<=0)return n.copy(r);Fc.subVectors(e,a);const _=bs.dot(Fc),y=Ls.dot(Fc);if(_>=0&&y<=_)return n.copy(a);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(bs,f);Oc.subVectors(e,u);const S=bs.dot(Oc),E=Ls.dot(Oc);if(E>=0&&S<=E)return n.copy(u);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Ls,d);const v=_*E-S*y;if(v<=0&&y-_>=0&&S-E>=0)return em.subVectors(u,a),d=(y-_)/(y-_+(S-E)),n.copy(a).addScaledVector(em,d);const g=1/(v+T+x);return f=T*g,d=x*g,n.copy(r).addScaledVector(bs,f).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Hc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=$v(e,1),n=bn(n,0,1),r=bn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Hc(f,u,e+1/3),this.g=Hc(f,u,e),this.b=Hc(f,u,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=og[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return xt.fromWorkingColorSpace(hn.copy(this),e),Math.round(bn(hn.r*255,0,255))*65536+Math.round(bn(hn.g*255,0,255))*256+Math.round(bn(hn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(hn.copy(this),n);const r=hn.r,a=hn.g,u=hn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=_<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=jn){xt.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,r=hn.g,a=hn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(ol);const r=Tc(pr.h,ol.h,n),a=Tc(pr.s,ol.s,n),u=Tc(pr.l,ol.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new dt;dt.NAMES=og;let d0=0;class Zr extends js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ho(),this.name="",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ef&&(r.blendSrc=this.blendSrc),this.blendDst!==tf&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Op&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qf extends Zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new j,al=new yt;class yi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=kp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}}class ag extends yi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class lg extends yi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class nn extends yi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let h0=0;const qn=new Nt,Vc=new $t,Ds=new j,kn=new Go,Do=new Go,tn=new j;class jt extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?lg:ag)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new nn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(tn.addVectors(kn.min,Do.min),kn.expandByPoint(tn),tn.addVectors(kn.max,Do.max),kn.expandByPoint(tn)):(kn.expandByPoint(Do.min),kn.expandByPoint(Do.max))}kn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)tn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(tn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)tn.fromBufferAttribute(d,m),p&&(Ds.fromBufferAttribute(e,m),tn.add(Ds)),a=Math.max(a,r.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let N=0;N<r.count;N++)d[N]=new j,p[N]=new j;const m=new j,_=new j,y=new j,x=new yt,S=new yt,E=new yt,T=new j,v=new j;function g(N,P,C){m.fromBufferAttribute(r,N),_.fromBufferAttribute(r,P),y.fromBufferAttribute(r,C),x.fromBufferAttribute(u,N),S.fromBufferAttribute(u,P),E.fromBufferAttribute(u,C),_.sub(m),y.sub(m),S.sub(x),E.sub(x);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(y,-S.y).multiplyScalar(B),v.copy(y).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(B),d[N].add(T),d[P].add(T),d[C].add(T),p[N].add(v),p[P].add(v),p[C].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let N=0,P=U.length;N<P;++N){const C=U[N],B=C.start,ee=C.count;for(let $=B,le=B+ee;$<le;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new j,R=new j,Y=new j,O=new j;function I(N){Y.fromBufferAttribute(a,N),O.copy(Y);const P=d[N];L.copy(P),L.sub(Y.multiplyScalar(Y.dot(P))).normalize(),R.crossVectors(O,P);const B=R.dot(p[N])<0?-1:1;f.setXYZW(N,L.x,L.y,L.z,B)}for(let N=0,P=U.length;N<P;++N){const C=U[N],B=C.start,ee=C.count;for(let $=B,le=B+ee;$<le;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new j,u=new j,f=new j,d=new j,p=new j,m=new j,_=new j,y=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,v),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,y=d.normalized,x=new m.constructor(p.length*_);let S=0,E=0;for(let T=0,v=p.length;T<v;T++){d.isInterleavedBufferAttribute?S=p[T]*d.data.stride+d.offset:S=p[T]*_;for(let g=0;g<_;g++)x[E++]=m[S++]}return new yi(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jt,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tm=new Nt,Or=new Ol,ll=new Wo,nm=new j,ul=new j,cl=new j,fl=new j,Gc=new j,dl=new j,im=new j,hl=new j;class yn extends $t{constructor(e=new jt,n=new Qf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){dl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],y=u[p];_!==0&&(Gc.fromBufferAttribute(y,e),f?dl.addScaledVector(Gc,_):dl.addScaledVector(Gc.sub(n),_))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(ll.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ll,nm)===null||Or.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(u).invert(),Or.copy(e.ray).applyMatrix4(tm),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const v=x[E],g=f[v.materialIndex],U=Math.max(v.start,S.start),L=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let R=U,Y=L;R<Y;R+=3){const O=d.getX(R),I=d.getX(R+1),N=d.getX(R+2);a=pl(this,g,e,r,m,_,y,O,I,N),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let v=E,g=T;v<g;v+=3){const U=d.getX(v),L=d.getX(v+1),R=d.getX(v+2);a=pl(this,f,e,r,m,_,y,U,L,R),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=x.length;E<T;E++){const v=x[E],g=f[v.materialIndex],U=Math.max(v.start,S.start),L=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let R=U,Y=L;R<Y;R+=3){const O=R,I=R+1,N=R+2;a=pl(this,g,e,r,m,_,y,O,I,N),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let v=E,g=T;v<g;v+=3){const U=v,L=v+1,R=v+2;a=pl(this,f,e,r,m,_,y,U,L,R),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function p0(s,e,n,r,a,u,f,d){let p;if(e.side===Ln?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===xr,d),p===null)return null;hl.copy(d),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ul),s.getVertexPosition(p,cl),s.getVertexPosition(m,fl);const _=p0(s,e,n,r,ul,cl,fl,im);if(_){const y=new j;li.getBarycoord(im,ul,cl,fl,y),a&&(_.uv=li.getInterpolatedAttribute(a,d,p,m,y,new yt)),u&&(_.uv1=li.getInterpolatedAttribute(u,d,p,m,y,new yt)),f&&(_.normal=li.getInterpolatedAttribute(f,d,p,m,y,new j),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new j,materialIndex:0};li.getNormal(ul,cl,fl,x.normal),_.face=x,_.barycoord=y}return _}class Kr extends jt{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],y=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(y,2));function E(T,v,g,U,L,R,Y,O,I,N,P){const C=R/I,B=Y/N,ee=R/2,$=Y/2,le=O/2,ue=I+1,oe=N+1;let ce=0,z=0;const K=new j;for(let te=0;te<oe;te++){const F=te*B-$;for(let ie=0;ie<ue;ie++){const Le=ie*C-ee;K[T]=Le*U,K[v]=F*L,K[g]=le,m.push(K.x,K.y,K.z),K[T]=0,K[v]=0,K[g]=O>0?1:-1,_.push(K.x,K.y,K.z),y.push(ie/I),y.push(1-te/N),ce+=1}}for(let te=0;te<N;te++)for(let F=0;F<I;F++){const ie=x+F+ue*te,Le=x+F+ue*(te+1),J=x+(F+1)+ue*(te+1),fe=x+(F+1)+ue*te;p.push(ie,Le,fe),p.push(Le,J,fe),z+=6}d.addGroup(S,z,P),S+=z,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function xn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function m0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const g0={clone:Ys,merge:xn};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class cg extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new j,rm=new yt,sm=new yt;class $n extends cg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,rm,sm),n.subVectors(sm,rm)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Is=1;class x0 extends $t{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Us,Is,e,n);a.layers=this.layers,this.add(a);const u=new $n(Us,Is,e,n);u.layers=this.layers,this.add(u);const f=new $n(Us,Is,e,n);f.layers=this.layers,this.add(f);const d=new $n(Us,Is,e,n);d.layers=this.layers,this.add(d);const p=new $n(Us,Is,e,n);p.layers=this.layers,this.add(p);const m=new $n(Us,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class fg extends Dn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new fg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Kr(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:_r});u.uniforms.tEquirect.value=n;const f=new yn(a,u),d=n.minFilter;return n.minFilter===qr&&(n.minFilter=xi),new x0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Wc=new j,S0=new j,M0=new ot;class Vr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Wc.subVectors(r,n).cross(S0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||M0.getNormalMatrix(e),a=this.coplanarPoint(Wc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Wo,ml=new j;class Jf{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,f=new Vr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],E=a[9],T=a[10],v=a[11],g=a[12],U=a[13],L=a[14],R=a[15];if(r[0].setComponents(p-u,x-m,v-S,R-g).normalize(),r[1].setComponents(p+u,x+m,v+S,R+g).normalize(),r[2].setComponents(p+f,x+_,v+E,R+U).normalize(),r[3].setComponents(p-f,x-_,v-E,R-U).normalize(),r[4].setComponents(p-d,x-y,v-T,R-L).normalize(),n===zi)r[5].setComponents(p+d,x+y,v+T,R+L).normalize();else if(n===bl)r[5].setComponents(d,y,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function E0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<y.length;S++){const E=y[x],T=y[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,y[x]=T)}y.length=x+1;for(let S=0,E=y.length;S<E;S++){const T=y[S];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Xo extends jt{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,y=e/d,x=n/p,S=[],E=[],T=[],v=[];for(let g=0;g<_;g++){const U=g*x-f;for(let L=0;L<m;L++){const R=L*y-u;E.push(R,-U,0),T.push(0,0,1),v.push(L/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let U=0;U<d;U++){const L=U+m*g,R=U+m*(g+1),Y=U+1+m*(g+1),O=U+1+m*g;S.push(L,R,O),S.push(R,Y,O)}this.setIndex(S),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(T,3)),this.setAttribute("uv",new nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var T0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_y=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,by=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ly=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:T0,alphahash_pars_fragment:w0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:R0,alphatest_pars_fragment:P0,aomap_fragment:b0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:I0,beginnormal_vertex:N0,bsdfs:F0,iridescence_fragment:O0,bumpmap_pars_fragment:k0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:Y0,common:q0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:Z0,emissivemap_fragment:Q0,emissivemap_pars_fragment:J0,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:sx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:ux,fog_pars_fragment:cx,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:yx,lights_physical_fragment:Sx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:wx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Px,map_fragment:bx,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Fx,morphcolor_vertex:Ox,morphnormal_vertex:kx,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Vx,normal_pars_fragment:Gx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:Qx,premultiplied_alpha_fragment:Jx,project_vertex:ey,dithering_fragment:ty,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:ry,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:ly,skinbase_vertex:uy,skinning_pars_vertex:cy,skinning_vertex:fy,skinnormal_vertex:dy,specularmap_fragment:hy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:_y,transmission_pars_fragment:vy,uv_pars_fragment:xy,uv_pars_vertex:yy,uv_vertex:Sy,worldpos_vertex:My,background_vert:Ey,background_frag:Ty,backgroundCube_vert:wy,backgroundCube_frag:Ay,cube_vert:Cy,cube_frag:Ry,depth_vert:Py,depth_frag:by,distanceRGBA_vert:Ly,distanceRGBA_frag:Dy,equirect_vert:Uy,equirect_frag:Iy,linedashed_vert:Ny,linedashed_frag:Fy,meshbasic_vert:Oy,meshbasic_frag:ky,meshlambert_vert:By,meshlambert_frag:zy,meshmatcap_vert:Hy,meshmatcap_frag:Vy,meshnormal_vert:Gy,meshnormal_frag:Wy,meshphong_vert:Xy,meshphong_frag:Yy,meshphysical_vert:qy,meshphysical_frag:jy,meshtoon_vert:$y,meshtoon_frag:Ky,points_vert:Zy,points_frag:Qy,shadow_vert:Jy,shadow_frag:eS,sprite_vert:tS,sprite_frag:nS},Re={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:xn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:xn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:xn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:xn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:xn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:xn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:xn([Re.common,Re.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:xn([Re.lights,Re.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};_i.physical={uniforms:xn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const gl={r:0,b:0,g:0},Br=new Si,iS=new Nt;function rS(s,e,n,r,a,u,f){const d=new dt(0);let p=u===!0?0:1,m,_,y=null,x=0,S=null;function E(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?n:e).get(L)),L}function T(U){let L=!1;const R=E(U);R===null?g(d,p):R&&R.isColor&&(g(R,1),L=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,f):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(U,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===Nl)?(_===void 0&&(_=new yn(new Kr(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Ys(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(L.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(iS.makeRotationFromEuler(Br)),_.material.toneMapped=xt.getTransfer(R.colorSpace)!==Rt,(y!==R||x!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=R,x=R.version,S=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new yn(new Xo(2,2),new yr({name:"BackgroundMaterial",uniforms:Ys(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=xt.getTransfer(R.colorSpace)!==Rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||x!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=R,x=R.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function g(U,L){U.getRGB(gl,ug(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,L,f)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),p=L,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,g(d,p)},render:T,addToRenderList:v}}function sS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(C,B,ee,$,le){let ue=!1;const oe=y($,ee,B);u!==oe&&(u=oe,m(u.object)),ue=S(C,$,ee,le),ue&&E(C,$,ee,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,R(C,B,ee,$),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function y(C,B,ee){const $=ee.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let ue=le[B.id];ue===void 0&&(ue={},le[B.id]=ue);let oe=ue[$];return oe===void 0&&(oe=x(p()),ue[$]=oe),oe}function x(C){const B=[],ee=[],$=[];for(let le=0;le<n;le++)B[le]=0,ee[le]=0,$[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:$,object:C,attributes:{},index:null}}function S(C,B,ee,$){const le=u.attributes,ue=B.attributes;let oe=0;const ce=ee.getAttributes();for(const z in ce)if(ce[z].location>=0){const te=le[z];let F=ue[z];if(F===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),te===void 0||te.attribute!==F||F&&te.data!==F.data)return!0;oe++}return u.attributesNum!==oe||u.index!==$}function E(C,B,ee,$){const le={},ue=B.attributes;let oe=0;const ce=ee.getAttributes();for(const z in ce)if(ce[z].location>=0){let te=ue[z];te===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const F={};F.attribute=te,te&&te.data&&(F.data=te.data),le[z]=F,oe++}u.attributes=le,u.attributesNum=oe,u.index=$}function T(){const C=u.newAttributes;for(let B=0,ee=C.length;B<ee;B++)C[B]=0}function v(C){g(C,0)}function g(C,B){const ee=u.newAttributes,$=u.enabledAttributes,le=u.attributeDivisors;ee[C]=1,$[C]===0&&(s.enableVertexAttribArray(C),$[C]=1),le[C]!==B&&(s.vertexAttribDivisor(C,B),le[C]=B)}function U(){const C=u.newAttributes,B=u.enabledAttributes;for(let ee=0,$=B.length;ee<$;ee++)B[ee]!==C[ee]&&(s.disableVertexAttribArray(ee),B[ee]=0)}function L(C,B,ee,$,le,ue,oe){oe===!0?s.vertexAttribIPointer(C,B,ee,le,ue):s.vertexAttribPointer(C,B,ee,$,le,ue)}function R(C,B,ee,$){T();const le=$.attributes,ue=ee.getAttributes(),oe=B.defaultAttributeValues;for(const ce in ue){const z=ue[ce];if(z.location>=0){let K=le[ce];if(K===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const te=K.normalized,F=K.itemSize,ie=e.get(K);if(ie===void 0)continue;const Le=ie.buffer,J=ie.type,fe=ie.bytesPerElement,Me=J===s.INT||J===s.UNSIGNED_INT||K.gpuType===Xf;if(K.isInterleavedBufferAttribute){const ve=K.data,we=ve.stride,Ue=K.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)g(z.location+Ze,ve.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)v(z.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ze=0;Ze<z.locationSize;Ze++)L(z.location+Ze,F/z.locationSize,J,te,we*fe,(Ue+F/z.locationSize*Ze)*fe,Me)}else{if(K.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)g(z.location+ve,K.meshPerAttribute);C.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<z.locationSize;ve++)v(z.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ve=0;ve<z.locationSize;ve++)L(z.location+ve,F/z.locationSize,J,te,F*fe,F/z.locationSize*ve*fe,Me)}}else if(oe!==void 0){const te=oe[ce];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(z.location,te);break;case 3:s.vertexAttrib3fv(z.location,te);break;case 4:s.vertexAttrib4fv(z.location,te);break;default:s.vertexAttrib1fv(z.location,te)}}}}U()}function Y(){N();for(const C in r){const B=r[C];for(const ee in B){const $=B[ee];for(const le in $)_($[le].object),delete $[le];delete B[ee]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ee in B){const $=B[ee];for(const le in $)_($[le].object),delete $[le];delete B[ee]}delete r[C.id]}function I(C){for(const B in r){const ee=r[B];if(ee[C.id]===void 0)continue;const $=ee[C.id];for(const le in $)_($[le].object),delete $[le];delete ee[C.id]}}function N(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:N,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:v,disableUnusedAttributes:U}}function oS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let E=0;E<y;E++)S+=_[E];n.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let E=0;for(let T=0;T<y;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function aS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(I){return!(I!==ui&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const N=I===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Vi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!N)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Y=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:Y,maxSamples:O}}function lS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Vr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const E=y.clippingPlanes,T=y.clipIntersection,v=y.clipShadows,g=s.get(y);if(!a||E===null||E.length===0||u&&!v)u?_(null):m();else{const U=u?0:r,L=U*4;let R=g.clippingState||null;p.value=R,R=_(E,x,L,S);for(let Y=0;Y!==L;++Y)R[Y]=n[Y];g.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,E){const T=y!==null?y.length:0;let v=null;if(T!==0){if(v=p.value,E!==!0||v===null){const g=S+T*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(v===null||v.length<g)&&(v=new Float32Array(g));for(let L=0,R=S;L!==T;++L,R+=4)f.copy(y[L]).applyMatrix4(U,d),f.normal.toArray(v,R),v[R+3]=f.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function uS(s){let e=new WeakMap;function n(f,d){return d===cf?f.mapping=Vs:d===ff&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===cf||d===ff)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new y0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class hg extends cg{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,om=[.125,.215,.35,.446,.526,.582],Xr=20,Xc=new hg,am=new dt;let Yc=null,qc=0,jc=0,$c=!1;const Gr=(1+Math.sqrt(5))/2,Ns=1/Gr,lm=[new j(-Gr,Ns,0),new j(Gr,Ns,0),new j(-Ns,0,Gr),new j(Ns,0,Gr),new j(0,Gr,-Ns),new j(0,Gr,Ns),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,qc,jc),this._renderer.xr.enabled=$c,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:zo,format:ui,colorSpace:qs,depthBuffer:!1},a=cm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cS(u)),this._blurMaterial=fS(u,e,n)}return a}_compileMaterial(e){const n=new yn(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,r,a){const d=new $n(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(am),_.toneMapping=vr,_.autoClear=!1;const S=new Qf({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new yn(new Kr,S);let T=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,T=!0):(S.color.copy(am),T=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):U===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;_l(a,U*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new yn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;_l(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Xc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=lm[(a-u-1)%lm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new yn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),T=u/E,v=isFinite(u)?1+Math.floor(_*T):Xr;v>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);const g=[];let U=0;for(let I=0;I<Xr;++I){const N=I/T,P=Math.exp(-N*N/2);g.push(P),I===0?U+=P:I<v&&(U+=2*P)}for(let I=0;I<g.length;I++)g[I]=g[I]/U;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const R=this._sizeLods[a],Y=3*R*(a>L-Fs?a-L+Fs:0),O=4*(this._cubeSize-R);_l(n,Y,O,3*R,2*R),p.setRenderTarget(n),p.render(y,Xc)}}function cS(s){const e=[],n=[],r=[];let a=s;const u=s-Fs+1+om.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Fs?p=om[f-s+Fs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,E=6,T=3,v=2,g=1,U=new Float32Array(T*E*S),L=new Float32Array(v*E*S),R=new Float32Array(g*E*S);for(let O=0;O<S;O++){const I=O%3*2/3-1,N=O>2?0:-1,P=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];U.set(P,T*E*O),L.set(x,v*E*O);const C=[O,O,O,O,O,O];R.set(C,g*E*O)}const Y=new jt;Y.setAttribute("position",new yi(U,T)),Y.setAttribute("uv",new yi(L,v)),Y.setAttribute("faceIndex",new yi(R,g)),e.push(Y),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function cm(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function fS(s,e,n){const r=new Float32Array(Xr),a=new j(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function fm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function dm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ed(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===cf||p===ff,_=p===Vs||p===Gs;if(m||_){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new um(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new um(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function hS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function pS(s,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const T=x.morphAttributes[E];for(let v=0,g=T.length;v<g;v++)e.remove(T[v])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const E in S){const T=S[E];for(let v=0,g=T.length;v<g;v++)e.update(T[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,E=y.attributes.position;let T=0;if(S!==null){const U=S.array;T=S.version;for(let L=0,R=U.length;L<R;L+=3){const Y=U[L+0],O=U[L+1],I=U[L+2];x.push(Y,O,O,I,I,Y)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const Y=L+0,O=L+1,I=L+2;x.push(Y,O,O,I,I,Y)}}else return;const v=new(ig(x)?lg:ag)(x,1);v.version=T;const g=u.get(y);g&&e.remove(g),u.set(y,v)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:_}}function mS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,x*f,E),n.update(S,r,E))}function _(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,E);let v=0;for(let g=0;g<E;g++)v+=S[g];n.update(v,r,1)}function y(x,S,E,T){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],T[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,T,0,E);let g=0;for(let U=0;U<E;U++)g+=S[U]*T[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function gS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function _S(s,e,n){const r=new WeakMap,a=new zt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let C=function(){N.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),v===!0&&(R=3);let Y=d.attributes.position.count*R,O=1;Y>e.maxTextureSize&&(O=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const I=new Float32Array(Y*O*4*y),N=new sg(I,Y,O,y);N.type=Bi,N.needsUpdate=!0;const P=R*4;for(let B=0;B<y;B++){const ee=g[B],$=U[B],le=L[B],ue=Y*O*4*B;for(let oe=0;oe<ee.count;oe++){const ce=oe*P;E===!0&&(a.fromBufferAttribute(ee,oe),I[ue+ce+0]=a.x,I[ue+ce+1]=a.y,I[ue+ce+2]=a.z,I[ue+ce+3]=0),T===!0&&(a.fromBufferAttribute($,oe),I[ue+ce+4]=a.x,I[ue+ce+5]=a.y,I[ue+ce+6]=a.z,I[ue+ce+7]=0),v===!0&&(a.fromBufferAttribute(le,oe),I[ue+ce+8]=a.x,I[ue+ce+9]=a.y,I[ue+ce+10]=a.z,I[ue+ce+11]=le.itemSize===4?a.w:1)}}x={count:y,texture:N,size:new yt(Y,O)},r.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let v=0;v<m.length;v++)E+=m[v];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function vS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class pg extends Dn{constructor(e,n,r,a,u,f,d,p,m,_=Bs){if(_!==Bs&&_!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Bs&&(r=jr),r===void 0&&_===Xs&&(r=Ws),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const mg=new Dn,hm=new pg(1,1),gg=new sg,_g=new r0,vg=new fg,pm=[],mm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=pm[a];if(u===void 0&&(u=new Float32Array(a),pm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Kt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Zt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function xS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2fv(this.addr,e),Zt(n,e)}}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;s.uniform3fv(this.addr,e),Zt(n,e)}}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4fv(this.addr,e),Zt(n,e)}}function ES(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;vm.set(r),s.uniformMatrix2fv(this.addr,!1,vm),Zt(n,r)}}function TS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;_m.set(r),s.uniformMatrix3fv(this.addr,!1,_m),Zt(n,r)}}function wS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Kt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,r))return;gm.set(r),s.uniformMatrix4fv(this.addr,!1,gm),Zt(n,r)}}function AS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2iv(this.addr,e),Zt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3iv(this.addr,e),Zt(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4iv(this.addr,e),Zt(n,e)}}function bS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;s.uniform2uiv(this.addr,e),Zt(n,e)}}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;s.uniform3uiv(this.addr,e),Zt(n,e)}}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;s.uniform4uiv(this.addr,e),Zt(n,e)}}function IS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(hm.compareFunction=ng,u=hm):u=mg,n.setTexture2D(e||u,a)}function NS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||_g,a)}function FS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||vg,a)}function OS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||gg,a)}function kS(s){switch(s){case 5126:return xS;case 35664:return yS;case 35665:return SS;case 35666:return MS;case 35674:return ES;case 35675:return TS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return CS;case 35668:case 35672:return RS;case 35669:case 35673:return PS;case 5125:return bS;case 36294:return LS;case 36295:return DS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return IS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function BS(s,e){s.uniform1fv(this.addr,e)}function zS(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function HS(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function VS(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function GS(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function WS(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function XS(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function YS(s,e){s.uniform1iv(this.addr,e)}function qS(s,e){s.uniform2iv(this.addr,e)}function jS(s,e){s.uniform3iv(this.addr,e)}function $S(s,e){s.uniform4iv(this.addr,e)}function KS(s,e){s.uniform1uiv(this.addr,e)}function ZS(s,e){s.uniform2uiv(this.addr,e)}function QS(s,e){s.uniform3uiv(this.addr,e)}function JS(s,e){s.uniform4uiv(this.addr,e)}function eM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||mg,u[f])}function tM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||_g,u[f])}function nM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||vg,u[f])}function iM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Kt(r,u)||(s.uniform1iv(this.addr,u),Zt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||gg,u[f])}function rM(s){switch(s){case 5126:return BS;case 35664:return zS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return YS;case 35667:case 35671:return qS;case 35668:case 35672:return jS;case 35669:case 35673:return $S;case 5125:return KS;case 36294:return ZS;case 36295:return QS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=kS(n.type)}}class oM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rM(n.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function xm(s,e){s.seq.push(e),s.map[e.id]=e}function lM(s,e,n){const r=s.name,a=r.length;for(Kc.lastIndex=0;;){const u=Kc.exec(r),f=Kc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){xm(n,m===void 0?new sM(d,s,e):new oM(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new aM(d),xm(n,y)),n=y}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);lM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function ym(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const uM=37297;let cM=0;function fM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Sm=new ot;function dM(s){xt._getMatrix(Sm,xt.workingColorSpace,s);const e=`mat3( ${Sm.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+fM(s.getShaderSource(e),f)}else return a}function hM(s,e){const n=dM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pM(s,e){let n;switch(e){case Lv:n="Linear";break;case Dv:n="Reinhard";break;case Uv:n="Cineon";break;case Iv:n="ACESFilmic";break;case Fv:n="AgX";break;case Ov:n="Neutral";break;case Nv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new j;function mM(){xt.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function _M(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Oo(s){return s!==""}function Em(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(s){return s.replace(xM,SM)}const yM=new Map;function SM(s,e){let n=at[e];if(n===void 0){const r=yM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(s){return s.replace(MM,EM)}function EM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Am(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function CM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gm:e="ENVMAP_BLENDING_MULTIPLY";break;case Pv:e="ENVMAP_BLENDING_MIX";break;case bv:e="ENVMAP_BLENDING_ADD";break}return e}function RM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function PM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=TM(n),m=wM(n),_=AM(n),y=CM(n),x=RM(n),S=gM(n),E=_M(u),T=a.createProgram();let v,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(v=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?at.tonemapping_pars_fragment:"",n.toneMapping!==vr?pM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,hM("linearToOutputTexel",n.outputColorSpace),mM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Hf(f),f=Em(f,n),f=Tm(f,n),d=Hf(d),d=Em(d,n),d=Tm(d,n),f=wm(f),d=wm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=U+v+f,R=U+g+d,Y=ym(a,a.VERTEX_SHADER,L),O=ym(a,a.FRAGMENT_SHADER,R);a.attachShader(T,Y),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function I(B){if(s.debug.checkShaderErrors){const ee=a.getProgramInfoLog(T).trim(),$=a.getShaderInfoLog(Y).trim(),le=a.getShaderInfoLog(O).trim();let ue=!0,oe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,Y,O);else{const ce=Mm(a,Y,"vertex"),z=Mm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+ce+`
`+z)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):($===""||le==="")&&(oe=!1);oe&&(B.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:$,prefix:v},fragmentShader:{log:le,prefix:g}})}a.deleteShader(Y),a.deleteShader(O),N=new Pl(a,T),P=vM(a,T)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,uM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Y,this.fragmentShader=O,this}let bM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new DM(e),n.set(e,r)),r}}class DM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function UM(s,e,n,r,a,u,f){const d=new Zf,p=new LM,m=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function v(P,C,B,ee,$){const le=ee.fog,ue=$.geometry,oe=P.isMeshStandardMaterial?ee.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),z=ce&&ce.mapping===Nl?ce.image.height:null,K=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const te=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,F=te!==void 0?te.length:0;let ie=0;ue.morphAttributes.position!==void 0&&(ie=1),ue.morphAttributes.normal!==void 0&&(ie=2),ue.morphAttributes.color!==void 0&&(ie=3);let Le,J,fe,Me;if(K){const _t=_i[K];Le=_t.vertexShader,J=_t.fragmentShader}else Le=P.vertexShader,J=P.fragmentShader,p.update(P),fe=p.getVertexShaderID(P),Me=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ue=$.isInstancedMesh===!0,Ze=$.isBatchedMesh===!0,Ct=!!P.map,pt=!!P.matcap,bt=!!ce,X=!!P.aoMap,pn=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,je=!!P.displacementMap,wt=!!P.emissiveMap,Ye=!!P.metalnessMap,b=!!P.roughnessMap,w=P.anisotropy>0,Q=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,de=P.sheen>0,He=P.transmission>0,Ae=w&&!!P.anisotropyMap,Ie=Q&&!!P.clearcoatMap,lt=Q&&!!P.clearcoatNormalMap,ye=Q&&!!P.clearcoatRoughnessMap,Fe=ge&&!!P.iridescenceMap,Qe=ge&&!!P.iridescenceThicknessMap,Je=de&&!!P.sheenColorMap,Oe=de&&!!P.sheenRoughnessMap,ct=!!P.specularMap,it=!!P.specularColorMap,Tt=!!P.specularIntensityMap,V=He&&!!P.transmissionMap,Ce=He&&!!P.thicknessMap,ae=!!P.gradientMap,he=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,rt=!!P.extensions;let Dt=vr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Wt={shaderID:K,shaderType:P.type,shaderName:P.name,vertexShader:Le,fragmentShader:J,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&$._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,instancingMorph:Ue&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:pt,envMap:bt,envMapMode:bt&&ce.mapping,envMapCubeUVHeight:z,aoMap:X,lightMap:pn,bumpMap:ht,normalMap:ut,displacementMap:x&&je,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===Hv,normalMapTangentSpace:ut&&P.normalMapType===tg,metalnessMap:Ye,roughnessMap:b,anisotropy:w,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:Ie,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:Fe,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:ct,specularColorMap:it,specularIntensityMap:Tt,transmission:He,transmissionMap:V,thicknessMap:Ce,gradientMap:ae,opaque:P.transparent===!1&&P.blending===ks&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Ct&&T(P.map.channel),aoMapUv:X&&T(P.aoMap.channel),lightMapUv:pn&&T(P.lightMap.channel),bumpMapUv:ht&&T(P.bumpMap.channel),normalMapUv:ut&&T(P.normalMap.channel),displacementMapUv:je&&T(P.displacementMap.channel),emissiveMapUv:wt&&T(P.emissiveMap.channel),metalnessMapUv:Ye&&T(P.metalnessMap.channel),roughnessMapUv:b&&T(P.roughnessMap.channel),anisotropyMapUv:Ae&&T(P.anisotropyMap.channel),clearcoatMapUv:Ie&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(P.sheenRoughnessMap.channel),specularMapUv:ct&&T(P.specularMap.channel),specularColorMapUv:it&&T(P.specularColorMap.channel),specularIntensityMapUv:Tt&&T(P.specularIntensityMap.channel),transmissionMapUv:V&&T(P.transmissionMap.channel),thicknessMapUv:Ce&&T(P.thicknessMap.channel),alphaMapUv:he&&T(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ut||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ue.attributes.uv&&(Ct||he),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:we,skinning:$.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&xt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&xt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===vi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)C.push(B),C.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(U(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function U(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=E[P.type];let B;if(C){const ee=_i[C];B=g0.clone(ee.uniforms)}else B=P.uniforms;return B}function Y(P,C){let B;for(let ee=0,$=_.length;ee<$;ee++){const le=_[ee];if(le.cacheKey===C){B=le,++B.usedTimes;break}}return B===void 0&&(B=new PM(s,C,P,u),_.push(B)),B}function O(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function I(P){p.remove(P)}function N(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:R,acquireProgram:Y,releaseProgram:O,releaseShaderCache:I,programs:_,dispose:N}}function IM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function NM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,E,T,v){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:E,renderOrder:y.renderOrder,z:T,group:v},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=y.renderOrder,g.z=T,g.group=v),e++,g}function d(y,x,S,E,T,v){const g=f(y,x,S,E,T,v);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(y,x,S,E,T,v){const g=f(y,x,S,E,T,v);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(y,x){n.length>1&&n.sort(y||NM),r.length>1&&r.sort(x||Cm),a.length>1&&a.sort(x||Cm)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function FM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Rm,s.set(r,[f])):a>=u.length?(f=new Rm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function OM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new dt};break;case"SpotLight":n={position:new j,direction:new j,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=n,n}}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let BM=0;function zM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function HM(s){const e=new OM,n=kM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new j);const a=new j,u=new Nt,f=new Nt;function d(m){let _=0,y=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,T=0,v=0,g=0,U=0,L=0,R=0,Y=0,O=0,I=0;m.sort(zM);for(let P=0,C=m.length;P<C;P++){const B=m[P],ee=B.color,$=B.intensity,le=B.distance,ue=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ee.r*$,y+=ee.g*$,x+=ee.b*$;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],$);I++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,z=n.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=B.shadow.matrix,U++}r.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ee).multiplyScalar($),oe.distance=le,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[T]=oe;const ce=B.shadow;if(B.map&&(r.spotLightMap[Y]=B.map,Y++,ce.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[T]=ce.matrix,B.castShadow){const z=n.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[T]=z,r.spotShadowMap[T]=ue,R++}T++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ee).multiplyScalar($),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=oe,v++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ce=B.shadow,z=n.get(B);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=B.shadow.matrix,L++}r.point[E]=oe,E++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar($),oe.groundColor.copy(B.groundColor).multiplyScalar($),r.hemi[g]=oe,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const N=r.hash;(N.directionalLength!==S||N.pointLength!==E||N.spotLength!==T||N.rectAreaLength!==v||N.hemiLength!==g||N.numDirectionalShadows!==U||N.numPointShadows!==L||N.numSpotShadows!==R||N.numSpotMaps!==Y||N.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=v,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+Y-O,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,N.directionalLength=S,N.pointLength=E,N.spotLength=T,N.rectAreaLength=v,N.hemiLength=g,N.numDirectionalShadows=U,N.numPointShadows=L,N.numSpotShadows=R,N.numSpotMaps=Y,N.numLightProbes=I,r.version=BM++)}function p(m,_){let y=0,x=0,S=0,E=0,T=0;const v=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const L=m[g];if(L.isDirectionalLight){const R=r.directional[y];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),y++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),S++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),f.identity(),u.copy(L.matrixWorld),u.premultiply(v),f.extractRotation(u),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),x++}else if(L.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(v),T++}}}return{setup:d,setupView:p,state:r}}function Pm(s){const e=new HM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function VM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Pm(s),e.set(a,[d])):u>=f.length?(d=new Pm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class GM extends Zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WM extends Zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qM(s,e,n){let r=new Jf;const a=new yt,u=new yt,f=new zt,d=new GM({depthPacking:zv}),p=new WM,m={},_=n.maxTextureSize,y={[xr]:Ln,[Ln]:xr,[vi]:vi},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:XM,fragmentShader:YM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new jt;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new yn(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vm;let g=this.type;this.render=function(O,I,N){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(_r),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const $=g!==ki&&this.type===ki,le=g===ki&&this.type!==ki;for(let ue=0,oe=O.length;ue<oe;ue++){const ce=O[ue],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const K=z.getFrameExtents();if(a.multiply(K),u.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/K.x),a.x=u.x*K.x,z.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/K.y),a.y=u.y*K.y,z.mapSize.y=u.y)),z.map===null||$===!0||le===!0){const F=this.type!==ki?{minFilter:ci,magFilter:ci}:{};z.map!==null&&z.map.dispose(),z.map=new $r(a.x,a.y,F),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const te=z.getViewportCount();for(let F=0;F<te;F++){const ie=z.getViewport(F);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ee.viewport(f),z.updateMatrices(ce,F),r=z.getFrustum(),R(I,N,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===ki&&U(z,N),z.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(P,C,B)};function U(O,I){const N=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(I,null,N,x,T,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(I,null,N,S,T,null)}function L(O,I,N,P){let C=null;const B=N.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)C=B;else if(C=N.isPointLight===!0?p:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ee=C.uuid,$=I.uuid;let le=m[ee];le===void 0&&(le={},m[ee]=le);let ue=le[$];ue===void 0&&(ue=C.clone(),le[$]=ue,I.addEventListener("dispose",Y)),C=ue}if(C.visible=I.visible,C.wireframe=I.wireframe,P===ki?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:y[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,N.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=s.properties.get(C);ee.light=N}return C}function R(O,I,N,P,C){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,O.matrixWorld);const $=e.update(O),le=O.material;if(Array.isArray(le)){const ue=$.groups;for(let oe=0,ce=ue.length;oe<ce;oe++){const z=ue[oe],K=le[z.materialIndex];if(K&&K.visible){const te=L(O,K,P,C);O.onBeforeShadow(s,O,I,N,$,te,z),s.renderBufferDirect(N,null,$,te,O,z),O.onAfterShadow(s,O,I,N,$,te,z)}}}else if(le.visible){const ue=L(O,le,P,C);O.onBeforeShadow(s,O,I,N,$,ue,null),s.renderBufferDirect(N,null,$,ue,O,null),O.onAfterShadow(s,O,I,N,$,ue,null)}}const ee=O.children;for(let $=0,le=ee.length;$<le;$++)R(ee[$],I,N,P,C)}function Y(O){O.target.removeEventListener("dispose",Y);for(const N in m){const P=m[N],C=O.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const jM={[nf]:rf,[sf]:lf,[of]:uf,[Hs]:af,[rf]:nf,[lf]:sf,[uf]:of,[af]:Hs};function $M(s,e){function n(){let V=!1;const Ce=new zt;let ae=null;const he=new zt(0,0,0,0);return{setMask:function(be){ae!==be&&!V&&(s.colorMask(be,be,be,be),ae=be)},setLocked:function(be){V=be},setClear:function(be,Pe,rt,Dt,Wt){Wt===!0&&(be*=Dt,Pe*=Dt,rt*=Dt),Ce.set(be,Pe,rt,Dt),he.equals(Ce)===!1&&(s.clearColor(be,Pe,rt,Dt),he.copy(Ce))},reset:function(){V=!1,ae=null,he.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,ae=null,he=null,be=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!V&&(s.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(Ce&&(Pe=jM[Pe]),he!==Pe){switch(Pe){case nf:s.depthFunc(s.NEVER);break;case rf:s.depthFunc(s.ALWAYS);break;case sf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case of:s.depthFunc(s.EQUAL);break;case af:s.depthFunc(s.GEQUAL);break;case lf:s.depthFunc(s.GREATER);break;case uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){be!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){V=!1,ae=null,he=null,be=null,Ce=!1}}}function a(){let V=!1,Ce=null,ae=null,he=null,be=null,Pe=null,rt=null,Dt=null,Wt=null;return{setTest:function(_t){V||(_t?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(_t){Ce!==_t&&!V&&(s.stencilMask(_t),Ce=_t)},setFunc:function(_t,Sn,mn){(ae!==_t||he!==Sn||be!==mn)&&(s.stencilFunc(_t,Sn,mn),ae=_t,he=Sn,be=mn)},setOp:function(_t,Sn,mn){(Pe!==_t||rt!==Sn||Dt!==mn)&&(s.stencilOp(_t,Sn,mn),Pe=_t,rt=Sn,Dt=mn)},setLocked:function(_t){V=_t},setClear:function(_t){Wt!==_t&&(s.clearStencil(_t),Wt=_t)},reset:function(){V=!1,Ce=null,ae=null,he=null,be=null,Pe=null,rt=null,Dt=null,Wt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},y={},x=new WeakMap,S=[],E=null,T=!1,v=null,g=null,U=null,L=null,R=null,Y=null,O=null,I=new dt(0,0,0),N=0,P=!1,C=null,B=null,ee=null,$=null,le=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=ce>=2);let K=null,te={};const F=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Le=new zt().fromArray(F),J=new zt().fromArray(ie);function fe(V,Ce,ae,he){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(V,Pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ae;rt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Me={};Me[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Hs),ht(!1),ut(Up),ve(s.CULL_FACE),X(_r);function ve(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function we(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Ue(V,Ce){return y[V]!==Ce?(s.bindFramebuffer(V,Ce),y[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(V,Ce){let ae=S,he=!1;if(V){ae=x.get(Ce),ae===void 0&&(ae=[],x.set(Ce,ae));const be=V.textures;if(ae.length!==be.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=be.length;Pe<rt;Pe++)ae[Pe]=s.COLOR_ATTACHMENT0+Pe;ae.length=be.length,he=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,he=!0);he&&s.drawBuffers(ae)}function Ct(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const pt={[Wr]:s.FUNC_ADD,[dv]:s.FUNC_SUBTRACT,[hv]:s.FUNC_REVERSE_SUBTRACT};pt[pv]=s.MIN,pt[mv]=s.MAX;const bt={[gv]:s.ZERO,[_v]:s.ONE,[vv]:s.SRC_COLOR,[ef]:s.SRC_ALPHA,[Tv]:s.SRC_ALPHA_SATURATE,[Mv]:s.DST_COLOR,[yv]:s.DST_ALPHA,[xv]:s.ONE_MINUS_SRC_COLOR,[tf]:s.ONE_MINUS_SRC_ALPHA,[Ev]:s.ONE_MINUS_DST_COLOR,[Sv]:s.ONE_MINUS_DST_ALPHA,[wv]:s.CONSTANT_COLOR,[Av]:s.ONE_MINUS_CONSTANT_COLOR,[Cv]:s.CONSTANT_ALPHA,[Rv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(V,Ce,ae,he,be,Pe,rt,Dt,Wt,_t){if(V===_r){T===!0&&(we(s.BLEND),T=!1);return}if(T===!1&&(ve(s.BLEND),T=!0),V!==fv){if(V!==v||_t!==P){if((g!==Wr||R!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,R=Wr),_t)switch(V){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.ONE,s.ONE);break;case Np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ip:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Np:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,L=null,Y=null,O=null,I.set(0,0,0),N=0,v=V,P=_t}return}be=be||Ce,Pe=Pe||ae,rt=rt||he,(Ce!==g||be!==R)&&(s.blendEquationSeparate(pt[Ce],pt[be]),g=Ce,R=be),(ae!==U||he!==L||Pe!==Y||rt!==O)&&(s.blendFuncSeparate(bt[ae],bt[he],bt[Pe],bt[rt]),U=ae,L=he,Y=Pe,O=rt),(Dt.equals(I)===!1||Wt!==N)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Wt),I.copy(Dt),N=Wt),v=V,P=!1}function pn(V,Ce){V.side===vi?we(s.CULL_FACE):ve(s.CULL_FACE);let ae=V.side===Ln;Ce&&(ae=!ae),ht(ae),V.blending===ks&&V.transparent===!1?X(_r):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function ut(V){V!==lv?(ve(s.CULL_FACE),V!==B&&(V===Up?s.cullFace(s.BACK):V===uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),B=V}function je(V){V!==ee&&(oe&&s.lineWidth(V),ee=V)}function wt(V,Ce,ae){V?(ve(s.POLYGON_OFFSET_FILL),($!==Ce||le!==ae)&&(s.polygonOffset(Ce,ae),$=Ce,le=ae)):we(s.POLYGON_OFFSET_FILL)}function Ye(V){V?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(V){V===void 0&&(V=s.TEXTURE0+ue-1),K!==V&&(s.activeTexture(V),K=V)}function w(V,Ce,ae){ae===void 0&&(K===null?ae=s.TEXTURE0+ue-1:ae=K);let he=te[ae];he===void 0&&(he={type:void 0,texture:void 0},te[ae]=he),(he.type!==V||he.texture!==Ce)&&(K!==ae&&(s.activeTexture(ae),K=ae),s.bindTexture(V,Ce||Me[V]),he.type=V,he.texture=Ce)}function Q(){const V=te[K];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Le.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function Oe(V){J.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function ct(V,Ce){let ae=m.get(Ce);ae===void 0&&(ae=new WeakMap,m.set(Ce,ae));let he=ae.get(V);he===void 0&&(he=s.getUniformBlockIndex(Ce,V.name),ae.set(V,he))}function it(V,Ce){const he=m.get(Ce).get(V);p.get(Ce)!==he&&(s.uniformBlockBinding(Ce,he,V.__bindingPointIndex),p.set(Ce,he))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},K=null,te={},y={},x=new WeakMap,S=[],E=null,T=!1,v=null,g=null,U=null,L=null,R=null,Y=null,O=null,I=new dt(0,0,0),N=0,P=!1,C=null,B=null,ee=null,$=null,le=null,Le.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:we,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Ct,setBlending:X,setMaterial:pn,setFlipSided:ht,setCullFace:ut,setLineWidth:je,setPolygonOffset:wt,setScissorTest:Ye,activeTexture:b,bindTexture:w,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:ye,texSubImage2D:de,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:Je,viewport:Oe,reset:Tt}}function bm(s,e,n,r){const a=KM(r);switch(n){case jm:return s*e;case Km:return s*e;case Zm:return s*e*2;case Qm:return s*e/a.components*a.byteLength;case jf:return s*e/a.components*a.byteLength;case Jm:return s*e*2/a.components*a.byteLength;case $f:return s*e*2/a.components*a.byteLength;case $m:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case Kf:return s*e*4/a.components*a.byteLength;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:case _f:return Math.max(s,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(s,8)*Math.max(e,8)/2;case vf:case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Nf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case eg:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KM(s){switch(s){case Vi:case Xm:return{byteLength:1,components:1};case Bo:case Ym:case zo:return{byteLength:2,components:1};case Yf:case qf:return{byteLength:2,components:4};case jr:case Xf:case Bi:return{byteLength:4,components:1};case qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ZM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,w){return S?new OffscreenCanvas(b,w):Ll("canvas")}function T(b,w,Q){let pe=1;const ge=Ye(b);if((ge.width>Q||ge.height>Q)&&(pe=Q/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(pe*ge.width),He=Math.floor(pe*ge.height);y===void 0&&(y=E(de,He));const Ae=w?E(de,He):y;return Ae.width=de,Ae.height=He,Ae.getContext("2d").drawImage(b,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+He+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function v(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,w,Q,pe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=w;if(w===s.RED&&(Q===s.FLOAT&&(de=s.R32F),Q===s.HALF_FLOAT&&(de=s.R16F),Q===s.UNSIGNED_BYTE&&(de=s.R8)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.R8UI),Q===s.UNSIGNED_SHORT&&(de=s.R16UI),Q===s.UNSIGNED_INT&&(de=s.R32UI),Q===s.BYTE&&(de=s.R8I),Q===s.SHORT&&(de=s.R16I),Q===s.INT&&(de=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(de=s.RG32F),Q===s.HALF_FLOAT&&(de=s.RG16F),Q===s.UNSIGNED_BYTE&&(de=s.RG8)),w===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RG8UI),Q===s.UNSIGNED_SHORT&&(de=s.RG16UI),Q===s.UNSIGNED_INT&&(de=s.RG32UI),Q===s.BYTE&&(de=s.RG8I),Q===s.SHORT&&(de=s.RG16I),Q===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Q===s.UNSIGNED_INT&&(de=s.RGB32UI),Q===s.BYTE&&(de=s.RGB8I),Q===s.SHORT&&(de=s.RGB16I),Q===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Q===s.UNSIGNED_INT&&(de=s.RGBA32UI),Q===s.BYTE&&(de=s.RGBA8I),Q===s.SHORT&&(de=s.RGBA16I),Q===s.INT&&(de=s.RGBA32I)),w===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),w===s.RGBA){const He=ge?Fl:xt.getTransfer(pe);Q===s.FLOAT&&(de=s.RGBA32F),Q===s.HALF_FLOAT&&(de=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(de=He===Rt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(b,w){let Q;return b?w===null||w===jr||w===Ws?Q=s.DEPTH24_STENCIL8:w===Bi?Q=s.DEPTH32F_STENCIL8:w===Bo&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===jr||w===Ws?Q=s.DEPTH_COMPONENT24:w===Bi?Q=s.DEPTH_COMPONENT32F:w===Bo&&(Q=s.DEPTH_COMPONENT16),Q}function Y(b,w){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function O(b){const w=b.target;w.removeEventListener("dispose",O),N(w),w.isVideoTexture&&_.delete(w)}function I(b){const w=b.target;w.removeEventListener("dispose",I),C(w)}function N(b){const w=r.get(b);if(w.__webglInit===void 0)return;const Q=b.source,pe=x.get(Q);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&x.delete(Q)}r.remove(b)}function P(b){const w=r.get(b);s.deleteTexture(w.__webglTexture);const Q=b.source,pe=x.get(Q);delete pe[w.__cacheKey],f.memory.textures--}function C(b){const w=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=b.textures;for(let pe=0,ge=Q.length;pe<ge;pe++){const de=r.get(Q[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(Q[pe])}r.remove(b)}let B=0;function ee(){B=0}function $(){const b=B;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),B+=1,b}function le(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function ue(b,w){const Q=r.get(b);if(b.isVideoTexture&&je(b),b.isRenderTargetTexture===!1&&b.version>0&&Q.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,b,w);return}}n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function oe(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){J(Q,b,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function ce(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){J(Q,b,w);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function z(b,w){const Q=r.get(b);if(b.version>0&&Q.__version!==b.version){fe(Q,b,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const K={[df]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[hf]:s.MIRRORED_REPEAT},te={[ci]:s.NEAREST,[kv]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Mc]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},F={[Vv]:s.NEVER,[jv]:s.ALWAYS,[Gv]:s.LESS,[ng]:s.LEQUAL,[Wv]:s.EQUAL,[qv]:s.GEQUAL,[Xv]:s.GREATER,[Yv]:s.NOTEQUAL};function ie(b,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===Mc||w.magFilter===Qa||w.magFilter===qr||w.minFilter===xi||w.minFilter===Mc||w.minFilter===Qa||w.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,K[w.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,K[w.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,K[w.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,te[w.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==Qa&&w.minFilter!==qr||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Le(b,w){let Q=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",O));const pe=w.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const de=le(w);if(de!==b.__cacheKey){ge[de]===void 0&&(ge[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),ge[de].usedTimes++;const He=ge[b.__cacheKey];He!==void 0&&(ge[b.__cacheKey].usedTimes--,He.usedTimes===0&&P(w)),b.__cacheKey=de,b.__webglTexture=ge[de].texture}return Q}function J(b,w,Q){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Le(b,w),de=w.source;n.bindTexture(pe,b.__webglTexture,s.TEXTURE0+Q);const He=r.get(de);if(de.version!==He.__version||ge===!0){n.activeTexture(s.TEXTURE0+Q);const Ae=xt.getPrimaries(xt.workingColorSpace),Ie=w.colorSpace===gr?null:xt.getPrimaries(w.colorSpace),lt=w.colorSpace===gr||Ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=T(w.image,!1,a.maxTextureSize);ye=wt(w,ye);const Fe=u.convert(w.format,w.colorSpace),Qe=u.convert(w.type);let Je=L(w.internalFormat,Fe,Qe,w.colorSpace,w.isVideoTexture);ie(pe,w);let Oe;const ct=w.mipmaps,it=w.isVideoTexture!==!0,Tt=He.__version===void 0||ge===!0,V=de.dataReady,Ce=Y(w,ye);if(w.isDepthTexture)Je=R(w.format===Xs,w.type),Tt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Fe,Qe,null));else if(w.isDataTexture)if(ct.length>0){it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let ae=0,he=ct.length;ae<he;ae++)Oe=ct[ae],it?V&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,Fe,Qe,Oe.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Oe.width,Oe.height,0,Fe,Qe,Oe.data);w.generateMipmaps=!1}else it?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ye.width,ye.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,Qe,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Fe,Qe,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ct[0].width,ct[0].height,ye.depth);for(let ae=0,he=ct.length;ae<he;ae++)if(Oe=ct[ae],w.format!==ui)if(Fe!==null)if(it){if(V)if(w.layerUpdates.size>0){const be=bm(Oe.width,Oe.height,w.format,w.type);for(const Pe of w.layerUpdates){const rt=Oe.data.subarray(Pe*be/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*be/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Pe,Oe.width,Oe.height,1,Fe,rt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Qe,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Oe.width,Oe.height,ye.depth,0,Fe,Qe,Oe.data)}else{it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let ae=0,he=ct.length;ae<he;ae++)Oe=ct[ae],w.format!==ui?Fe!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Oe.width,Oe.height,Fe,Qe,Oe.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Oe.width,Oe.height,0,Fe,Qe,Oe.data)}else if(w.isDataArrayTexture)if(it){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ye.width,ye.height,ye.depth),V)if(w.layerUpdates.size>0){const ae=bm(ye.width,ye.height,w.format,w.type);for(const he of w.layerUpdates){const be=ye.data.subarray(he*ae/ye.data.BYTES_PER_ELEMENT,(he+1)*ae/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,Qe,be)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Qe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,Fe,Qe,ye.data);else if(w.isData3DTexture)it?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ce,Je,ye.width,ye.height,ye.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Qe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,Fe,Qe,ye.data);else if(w.isFramebufferTexture){if(Tt)if(it)n.texStorage2D(s.TEXTURE_2D,Ce,Je,ye.width,ye.height);else{let ae=ye.width,he=ye.height;for(let be=0;be<Ce;be++)n.texImage2D(s.TEXTURE_2D,be,Je,ae,he,0,Fe,Qe,null),ae>>=1,he>>=1}}else if(ct.length>0){if(it&&Tt){const ae=Ye(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Je,ae.width,ae.height)}for(let ae=0,he=ct.length;ae<he;ae++)Oe=ct[ae],it?V&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Fe,Qe,Oe):n.texImage2D(s.TEXTURE_2D,ae,Je,Fe,Qe,Oe);w.generateMipmaps=!1}else if(it){if(Tt){const ae=Ye(ye);n.texStorage2D(s.TEXTURE_2D,Ce,Je,ae.width,ae.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Qe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Je,Fe,Qe,ye);v(w)&&g(pe),He.__version=de.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function fe(b,w,Q){if(w.image.length!==6)return;const pe=Le(b,w),ge=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Q);const de=r.get(ge);if(ge.version!==de.__version||pe===!0){n.activeTexture(s.TEXTURE0+Q);const He=xt.getPrimaries(xt.workingColorSpace),Ae=w.colorSpace===gr?null:xt.getPrimaries(w.colorSpace),Ie=w.colorSpace===gr||He===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const lt=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!lt&&!ye?Fe[he]=T(w.image[he],!0,a.maxCubemapSize):Fe[he]=ye?w.image[he].image:w.image[he],Fe[he]=wt(w,Fe[he]);const Qe=Fe[0],Je=u.convert(w.format,w.colorSpace),Oe=u.convert(w.type),ct=L(w.internalFormat,Je,Oe,w.colorSpace),it=w.isVideoTexture!==!0,Tt=de.__version===void 0||pe===!0,V=ge.dataReady;let Ce=Y(w,Qe);ie(s.TEXTURE_CUBE_MAP,w);let ae;if(lt){it&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,Qe.width,Qe.height);for(let he=0;he<6;he++){ae=Fe[he].mipmaps;for(let be=0;be<ae.length;be++){const Pe=ae[be];w.format!==ui?Je!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Pe.width,Pe.height,Je,Oe,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Pe.width,Pe.height,0,Je,Oe,Pe.data)}}}else{if(ae=w.mipmaps,it&&Tt){ae.length>0&&Ce++;const he=Ye(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,he.width,he.height)}for(let he=0;he<6;he++)if(ye){it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Je,Oe,Fe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Fe[he].width,Fe[he].height,0,Je,Oe,Fe[he].data);for(let be=0;be<ae.length;be++){const rt=ae[be].image[he].image;it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,rt.width,rt.height,Je,Oe,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,rt.width,rt.height,0,Je,Oe,rt.data)}}else{it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Oe,Fe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Je,Oe,Fe[he]);for(let be=0;be<ae.length;be++){const Pe=ae[be];it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Je,Oe,Pe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,Je,Oe,Pe.image[he])}}}v(w)&&g(s.TEXTURE_CUBE_MAP),de.__version=ge.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Me(b,w,Q,pe,ge,de){const He=u.convert(Q.format,Q.colorSpace),Ae=u.convert(Q.type),Ie=L(Q.internalFormat,He,Ae,Q.colorSpace),lt=r.get(w),ye=r.get(Q);if(ye.__renderTarget=w,!lt.__hasExternalTextures){const Fe=Math.max(1,w.width>>de),Qe=Math.max(1,w.height>>de);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,de,Ie,Fe,Qe,w.depth,0,He,Ae,null):n.texImage2D(ge,de,Ie,Fe,Qe,0,He,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,ht(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,b),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,de=R(w.stencilBuffer,ge),He=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ht(w);ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,b)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const de=pe[ge],He=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),Ie=L(de.internalFormat,He,Ae,de.colorSpace),lt=ht(w);Q&&ut(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ie,w.width,w.height):ut(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const ge=pe.__webglTexture,de=ht(w);if(w.depthTexture.format===Bs)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Xs)ut(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const w=r.get(b),Q=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,b)}else if(Q){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(w.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ve(w.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,w,Q){const pe=r.get(b);w!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ue(b)}function Ct(b){const w=b.texture,Q=r.get(b),pe=r.get(w);b.addEventListener("dispose",I);const ge=b.textures,de=b.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,f.memory.textures++),de){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)Q.__webglFramebuffer[Ae][Ie]=s.createFramebuffer()}else Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(He)for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=r.get(ge[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ut(b)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ie=ge[Ae];Q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const lt=u.convert(Ie.format,Ie.colorSpace),ye=u.convert(Ie.type),Fe=L(Ie.internalFormat,lt,ye,Ie.colorSpace,b.isXRRenderTarget===!0),Qe=ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Fe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Q.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)Me(Q.__webglFramebuffer[Ae][Ie],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Me(Q.__webglFramebuffer[Ae],b,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=ge[Ae],ye=r.get(lt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ie(s.TEXTURE_2D,lt),Me(Q.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),v(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),ie(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)Me(Q.__webglFramebuffer[Ie],b,w,s.COLOR_ATTACHMENT0,Ae,Ie);else Me(Q.__webglFramebuffer,b,w,s.COLOR_ATTACHMENT0,Ae,0);v(w)&&g(Ae),n.unbindTexture()}b.depthBuffer&&Ue(b)}function pt(b){const w=b.textures;for(let Q=0,pe=w.length;Q<pe;Q++){const ge=w[Q];if(v(ge)){const de=U(b),He=r.get(ge).__webglTexture;n.bindTexture(de,He),g(de),n.unbindTexture()}}}const bt=[],X=[];function pn(b){if(b.samples>0){if(ut(b)===!1){const w=b.textures,Q=b.width,pe=b.height;let ge=s.COLOR_BUFFER_BIT;const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(b),Ae=w.length>1;if(Ae)for(let Ie=0;Ie<w.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const lt=r.get(w[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ge,s.NEAREST),p===!0&&(bt.length=0,X.length=0,bt.push(s.COLOR_ATTACHMENT0+Ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(de),X.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<w.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const lt=r.get(w[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const w=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ht(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const w=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(b){const w=f.render.frame;_.get(b)!==w&&(_.set(b,w),b.update())}function wt(b,w){const Q=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Q!==qs&&Q!==gr&&(xt.getTransfer(Q)===Rt?(pe!==ui||ge!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function QM(s,e){function n(r,a=gr){let u;const f=xt.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===Yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Xm)return s.BYTE;if(r===Ym)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Xf)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===jm)return s.ALPHA;if(r===$m)return s.RGB;if(r===ui)return s.RGBA;if(r===Km)return s.LUMINANCE;if(r===Zm)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===Qm)return s.RED;if(r===jf)return s.RED_INTEGER;if(r===Jm)return s.RG;if(r===$f)return s.RG_INTEGER;if(r===Kf)return s.RGBA_INTEGER;if(r===Tl||r===wl||r===Al||r===Cl)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pf||r===mf||r===gf||r===_f)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===pf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vf||r===xf||r===yf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===vf||r===xf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===Pf||r===bf||r===Lf||r===Df||r===Uf||r===If)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Df)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===If)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Nf||r===Ff)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Rl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ff)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===eg||r===Of||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Rl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class JM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eE={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const v=n.getJointPose(T,r),g=this._getHandJoint(m,T);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Dn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:tE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new Xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends js{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,E=null;const T=new iE,v=n.getContextAttributes();let g=null,U=null;const L=[],R=[],Y=new yt;let O=null;const I=new $n;I.viewport=new zt;const N=new $n;N.viewport=new zt;const P=[I,N],C=new JM;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=L[J];return fe===void 0&&(fe=new Zc,L[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=L[J];return fe===void 0&&(fe=new Zc,L[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=L[J];return fe===void 0&&(fe=new Zc,L[J]=fe),fe.getHandSpace()};function $(J){const fe=R.indexOf(J.inputSource);if(fe===-1)return;const Me=L[fe];Me!==void 0&&(Me.update(J.inputSource,J.frame,m||f),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ue);for(let J=0;J<L.length;J++){const fe=R[J];fe!==null&&(R[J]=null,L[J].disconnect(fe))}B=null,ee=null,T.reset(),e.setRenderTarget(g),S=null,x=null,y=null,a=null,U=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(Y),a.renderState.layers===void 0){const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new $r(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,Me=null,ve=null;v.depth&&(ve=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=v.stencil?Xs:Bs,Me=v.stencil?Ws:jr);const we={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(we),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new $r(x.textureWidth,x.textureHeight,{format:ui,type:Vi,depthTexture:new pg(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Le.setContext(a),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ue(J){for(let fe=0;fe<J.removed.length;fe++){const Me=J.removed[fe],ve=R.indexOf(Me);ve>=0&&(R[ve]=null,L[ve].disconnect(Me))}for(let fe=0;fe<J.added.length;fe++){const Me=J.added[fe];let ve=R.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=R.length){R.push(Me),ve=Ue;break}else if(R[Ue]===null){R[Ue]=Me,ve=Ue;break}if(ve===-1)break}const we=L[ve];we&&we.connect(Me)}}const oe=new j,ce=new j;function z(J,fe,Me){oe.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(ce),we=fe.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ze=we[14]/(we[10]-1),Ct=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],X=(we[8]-1)/we[0],pn=(Ue[8]+1)/Ue[0],ht=Ze*X,ut=Ze*pn,je=ve/(-X+pn),wt=je*-X;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(wt),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Ze+je,b=Ct+je,w=ht-wt,Q=ut+(ve-wt),pe=pt*Ct/b*Ye,ge=bt*Ct/b*Ye;J.projectionMatrix.makePerspective(w,Q,pe,ge,Ye,b),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function K(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let fe=J.near,Me=J.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),C.near=N.near=I.near=fe,C.far=N.far=I.far=Me,(B!==C.near||ee!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ee=C.far),I.layers.mask=J.layers.mask|2,N.layers.mask=J.layers.mask|4,C.layers.mask=I.layers.mask|N.layers.mask;const ve=J.parent,we=C.cameras;K(C,ve);for(let Ue=0;Ue<we.length;Ue++)K(we[Ue],ve);we.length===2?z(C,I,N):C.projectionMatrix.copy(I.projectionMatrix),te(J,C,ve)};function te(J,fe,Me){Me===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let F=null;function ie(J,fe){if(_=fe.getViewerPose(m||f),E=fe,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ve=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ze=Me[Ue];let Ct=null;if(S!==null)Ct=S.getViewport(Ze);else{const bt=y.getViewSubImage(x,Ze);Ct=bt.viewport,Ue===0&&(e.setRenderTargetTextures(U,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(U))}let pt=P[Ue];pt===void 0&&(pt=new $n,pt.layers.enable(Ue),pt.viewport=new zt,P[Ue]=pt),pt.matrix.fromArray(Ze.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ze.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ue===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(pt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=y.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,a.renderState)}}for(let Me=0;Me<L.length;Me++){const ve=R[Me],we=L[Me];ve!==null&&we!==void 0&&we.update(ve,fe,m||f)}F&&F(J,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Le=new dg;Le.setAnimationLoop(ie),this.setAnimationLoop=function(J){F=J},this.dispose=function(){}}}const zr=new Si,sE=new Nt;function oE(s,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,ug(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,U,L,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(v,g):g.isMeshToonMaterial?(u(v,g),y(v,g)):g.isMeshPhongMaterial?(u(v,g),_(v,g)):g.isMeshStandardMaterial?(u(v,g),x(v,g),g.isMeshPhysicalMaterial&&S(v,g,R)):g.isMeshMatcapMaterial?(u(v,g),E(v,g)):g.isMeshDepthMaterial?u(v,g):g.isMeshDistanceMaterial?(u(v,g),T(v,g)):g.isMeshNormalMaterial?u(v,g):g.isLineBasicMaterial?(f(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,U,L):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Ln&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Ln&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const U=e.get(g),L=U.envMap,R=U.envMapRotation;L&&(v.envMap.value=L,zr.copy(R),zr.x*=-1,zr.y*=-1,zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(zr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,U,L){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*U,v.scale.value=L*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function y(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,U){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,g){g.matcap&&(v.matcap.value=g.matcap)}function T(v,g){const U=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function aE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,L){const R=L.program;r.uniformBlockBinding(U,R)}function m(U,L){let R=a[U.id];R===void 0&&(E(U),R=_(U),a[U.id]=R,U.addEventListener("dispose",v));const Y=L.program;r.updateUBOMapping(U,Y);const O=e.render.frame;u[U.id]!==O&&(x(U),u[U.id]=O)}function _(U){const L=y();U.__bindingPointIndex=L;const R=s.createBuffer(),Y=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,Y,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function y(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=a[U.id],R=U.uniforms,Y=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,I=R.length;O<I;O++){const N=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,C=N.length;P<C;P++){const B=N[P];if(S(B,O,P,Y)===!0){const ee=B.__offset,$=Array.isArray(B.value)?B.value:[B.value];let le=0;for(let ue=0;ue<$.length;ue++){const oe=$[ue],ce=T(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ee+le,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,L,R,Y){const O=U.value,I=L+"_"+R;if(Y[I]===void 0)return typeof O=="number"||typeof O=="boolean"?Y[I]=O:Y[I]=O.clone(),!0;{const N=Y[I];if(typeof O=="number"||typeof O=="boolean"){if(N!==O)return Y[I]=O,!0}else if(N.equals(O)===!1)return N.copy(O),!0}return!1}function E(U){const L=U.uniforms;let R=0;const Y=16;for(let I=0,N=L.length;I<N;I++){const P=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,B=P.length;C<B;C++){const ee=P[C],$=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,ue=$.length;le<ue;le++){const oe=$[le],ce=T(oe),z=R%Y,K=z%ce.boundary,te=z+K;R+=K,te!==0&&Y-te<ce.storage&&(R+=Y-te),ee.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=R,R+=ce.storage}}}const O=R%Y;return O>0&&(R+=Y-O),U.__size=R,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function v(U){const L=U.target;L.removeEventListener("dispose",v);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class lE{constructor(e={}){const{canvas:n=Kv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let v=null,g=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=vr,this.toneMappingExposure=1;const R=this;let Y=!1,O=0,I=0,N=null,P=-1,C=null;const B=new zt,ee=new zt;let $=null;const le=new dt(0);let ue=0,oe=n.width,ce=n.height,z=1,K=null,te=null;const F=new zt(0,0,oe,ce),ie=new zt(0,0,oe,ce);let Le=!1;const J=new Jf;let fe=!1,Me=!1;const ve=new Nt,we=new Nt,Ue=new j,Ze=new zt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function bt(){return N===null?z:1}let X=r;function pn(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const G="webgl2";if(X=pn(G,A),X===null)throw pn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ut,je,wt,Ye,b,w,Q,pe,ge,de,He,Ae,Ie,lt,ye,Fe,Qe,Je,Oe,ct,it,Tt,V;function Ce(){ht=new hS(X),ht.init(),it=new QM(X,ht),ut=new aS(X,ht,e,it),je=new $M(X,ht),ut.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),wt=new gS(X),Ye=new IM,b=new ZM(X,ht,je,Ye,ut,it,wt),w=new uS(R),Q=new dS(R),pe=new E0(X),Tt=new sS(X,pe),ge=new pS(X,pe,wt,Tt),de=new vS(X,ge,pe,wt),Je=new _S(X,ut,b),ye=new lS(Ye),He=new UM(R,w,Q,ht,ut,Tt,ye),Ae=new oE(R,Ye),Ie=new FM,lt=new VM(ht),Qe=new rS(R,w,Q,je,de,S,p),Fe=new qM(R,de,ut),V=new aE(X,wt,ut,je),Oe=new oS(X,ht,wt),ct=new mS(X,ht,wt),wt.programs=He.programs,R.capabilities=ut,R.extensions=ht,R.properties=Ye,R.renderLists=Ie,R.shadowMap=Fe,R.state=je,R.info=wt}Ce();const ae=new rE(R,X);this.xr=ae,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(oe,ce,!1))},this.getSize=function(A){return A.set(oe,ce)},this.setSize=function(A,G,re=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ce=G,n.width=Math.floor(A*z),n.height=Math.floor(G*z),re===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(oe*z,ce*z).floor()},this.setDrawingBufferSize=function(A,G,re){oe=A,ce=G,z=re,n.width=Math.floor(A*re),n.height=Math.floor(G*re),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,G,re,se){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,G,re,se),je.viewport(B.copy(F).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,G,re,se){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,G,re,se),je.scissor(ee.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){je.setScissorTest(Le=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,G=!0,re=!0){let se=0;if(A){let W=!1;if(N!==null){const Te=N.texture.format;W=Te===Kf||Te===$f||Te===jf}if(W){const Te=N.texture.type,Se=Te===Vi||Te===jr||Te===Bo||Te===Ws||Te===Yf||Te===qf,Ve=Qe.getClearColor(),Be=Qe.getClearAlpha(),et=Ve.r,nt=Ve.g,Ge=Ve.b;Se?(E[0]=et,E[1]=nt,E[2]=Ge,E[3]=Be,X.clearBufferuiv(X.COLOR,0,E)):(T[0]=et,T[1]=nt,T[2]=Ge,T[3]=Be,X.clearBufferiv(X.COLOR,0,T))}else se|=X.COLOR_BUFFER_BIT}G&&(se|=X.DEPTH_BUFFER_BIT),re&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ie.dispose(),lt.dispose(),Ye.dispose(),w.dispose(),Q.dispose(),de.dispose(),Tt.dispose(),V.dispose(),He.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Qr),ae.removeEventListener("sessionend",Gi),Mi.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const A=wt.autoReset,G=Fe.enabled,re=Fe.autoUpdate,se=Fe.needsUpdate,W=Fe.type;Ce(),wt.autoReset=A,Fe.enabled=G,Fe.autoUpdate=re,Fe.needsUpdate=se,Fe.type=W}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const G=A.target;G.removeEventListener("dispose",rt),Dt(G)}function Dt(A){Wt(A),Ye.remove(A)}function Wt(A){const G=Ye.get(A).programs;G!==void 0&&(G.forEach(function(re){He.releaseProgram(re)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,re,se,W,Te){G===null&&(G=Ct);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Ve=jo(A,G,re,se,W);je.setMaterial(se,Se);let Be=re.index,et=1;if(se.wireframe===!0){if(Be=ge.getWireframeAttribute(re),Be===void 0)return;et=2}const nt=re.drawRange,Ge=re.attributes.position;let gt=nt.start*et,Et=(nt.start+nt.count)*et;Te!==null&&(gt=Math.max(gt,Te.start*et),Et=Math.min(Et,(Te.start+Te.count)*et)),Be!==null?(gt=Math.max(gt,0),Et=Math.min(Et,Be.count)):Ge!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,Ge.count));const mt=Et-gt;if(mt<0||mt===1/0)return;Tt.setup(W,se,Ve,re,Be);let on,st=Oe;if(Be!==null&&(on=pe.get(Be),st=ct,st.setIndex(on)),W.isMesh)se.wireframe===!0?(je.setLineWidth(se.wireframeLinewidth*bt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(W.isLine){let Xe=se.linewidth;Xe===void 0&&(Xe=1),je.setLineWidth(Xe*bt()),W.isLineSegments?st.setMode(X.LINES):W.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else W.isPoints?st.setMode(X.POINTS):W.isSprite&&st.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,Zn=W._multiDrawCounts,St=W._multiDrawCount,an=Be?pe.get(Be).bytesPerElement:1,Qn=Ye.get(se).currentProgram.getUniforms();for(let Xt=0;Xt<St;Xt++)Qn.setValue(X,"_gl_DrawID",Xt),st.render(Xe[Xt]/an,Zn[Xt])}else if(W.isInstancedMesh)st.renderInstances(gt,mt,W.count);else if(re.isInstancedBufferGeometry){const Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Zn=Math.min(re.instanceCount,Xe);st.renderInstances(gt,mt,Zn)}else st.render(gt,mt)};function _t(A,G,re){A.transparent===!0&&A.side===vi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,Jr(A,G,re),A.side=xr,A.needsUpdate=!0,Jr(A,G,re),A.side=vi):Jr(A,G,re)}this.compile=function(A,G,re=null){re===null&&(re=A),g=lt.get(re),g.init(G),L.push(g),re.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==re&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const se=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Se=0;Se<Te.length;Se++){const Ve=Te[Se];_t(Ve,re,W),se.add(Ve)}else _t(Te,re,W),se.add(Te)}),L.pop(),g=null,se},this.compileAsync=function(A,G,re=null){const se=this.compile(A,G,re);return new Promise(W=>{function Te(){if(se.forEach(function(Se){Ye.get(Se).currentProgram.isReady()&&se.delete(Se)}),se.size===0){W(A);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Sn=null;function mn(A){Sn&&Sn(A)}function Qr(){Mi.stop()}function Gi(){Mi.start()}const Mi=new dg;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Sn=A,ae.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ae.addEventListener("sessionstart",Qr),ae.addEventListener("sessionend",Gi),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,N),g=lt.get(A,L.length),g.init(G),L.push(g),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(we),Me=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,Me),v=Ie.get(A,U.length),v.init(),U.push(v),ae.enabled===!0&&ae.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Ei(Te,G,-1/0,R.sortObjects)}Ei(A,G,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(K,te),pt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pt&&Qe.addToRenderList(v,A),this.info.render.frame++,fe===!0&&ye.beginShadows();const re=g.state.shadowsArray;Fe.render(re,A,G),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=v.opaque,W=v.transmissive;if(g.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Se=0,Ve=Te.length;Se<Ve;Se++){const Be=Te[Se];Mr(se,W,A,Be)}pt&&Qe.render(A);for(let Se=0,Ve=Te.length;Se<Ve;Se++){const Be=Te[Se];Sr(v,A,Be,Be.viewport)}}else W.length>0&&Mr(se,W,A,G),pt&&Qe.render(A),Sr(v,A,G);N!==null&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(R,A,G),Tt.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],fe===!0&&ye.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?v=U[U.length-1]:v=null};function Ei(A,G,re,se){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){se&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Se=de.update(A),Ve=A.material;Ve.visible&&v.push(A,Se,Ve,re,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Se=de.update(A),Ve=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ze.copy(Se.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const Be=Se.groups;for(let et=0,nt=Be.length;et<nt;et++){const Ge=Be[et],gt=Ve[Ge.materialIndex];gt&&gt.visible&&v.push(A,Se,gt,re,Ze.z,Ge)}}else Ve.visible&&v.push(A,Se,Ve,re,Ze.z,null)}}const Te=A.children;for(let Se=0,Ve=Te.length;Se<Ve;Se++)Ei(Te[Se],G,re,se)}function Sr(A,G,re,se){const W=A.opaque,Te=A.transmissive,Se=A.transparent;g.setupLightsView(re),fe===!0&&ye.setGlobalState(R.clippingPlanes,re),se&&je.viewport(B.copy(se)),W.length>0&&Wi(W,G,re),Te.length>0&&Wi(Te,G,re),Se.length>0&&Wi(Se,G,re),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Mr(A,G,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[se.id]===void 0&&(g.state.transmissionRenderTarget[se.id]=new $r(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?zo:Vi,minFilter:qr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[se.id],Se=se.viewport||B;Te.setSize(Se.z,Se.w);const Ve=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(le),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Qe.render(re);const Be=R.toneMapping;R.toneMapping=vr;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),g.setupLightsView(se),fe===!0&&ye.setGlobalState(R.clippingPlanes,se),Wi(A,re,se),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ge=0,gt=G.length;Ge<gt;Ge++){const Et=G[Ge],mt=Et.object,on=Et.geometry,st=Et.material,Xe=Et.group;if(st.side===vi&&mt.layers.test(se.layers)){const Zn=st.side;st.side=Ln,st.needsUpdate=!0,Yo(mt,re,se,on,st,Xe),st.side=Zn,st.needsUpdate=!0,nt=!0}}nt===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}R.setRenderTarget(Ve),R.setClearColor(le,ue),et!==void 0&&(se.viewport=et),R.toneMapping=Be}function Wi(A,G,re){const se=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=A.length;W<Te;W++){const Se=A[W],Ve=Se.object,Be=Se.geometry,et=se===null?Se.material:se,nt=Se.group;Ve.layers.test(re.layers)&&Yo(Ve,G,re,Be,et,nt)}}function Yo(A,G,re,se,W,Te){A.onBeforeRender(R,G,re,se,W,Te),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,G,re,se,A,Te),W.transparent===!0&&W.side===vi&&W.forceSinglePass===!1?(W.side=Ln,W.needsUpdate=!0,R.renderBufferDirect(re,G,se,W,A,Te),W.side=xr,W.needsUpdate=!0,R.renderBufferDirect(re,G,se,W,A,Te),W.side=vi):R.renderBufferDirect(re,G,se,W,A,Te),A.onAfterRender(R,G,re,se,W,Te)}function Jr(A,G,re){G.isScene!==!0&&(G=Ct);const se=Ye.get(A),W=g.state.lights,Te=g.state.shadowsArray,Se=W.state.version,Ve=He.getParameters(A,W.state,Te,G,re),Be=He.getProgramCacheKey(Ve);let et=se.programs;se.environment=A.isMeshStandardMaterial?G.environment:null,se.fog=G.fog,se.envMap=(A.isMeshStandardMaterial?Q:w).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,se.programs=et);let nt=et.get(Be);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Se)return fi(A,Ve),nt}else Ve.uniforms=He.getUniforms(A),A.onBeforeCompile(Ve,R),nt=He.acquireProgram(Ve,Be),et.set(Be,nt),se.uniforms=Ve.uniforms;const Ge=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),fi(A,Ve),se.needsLights=zl(A),se.lightsStateVersion=Se,se.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function qo(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Pl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function fi(A,G){const re=Ye.get(A);re.outputColorSpace=G.outputColorSpace,re.batching=G.batching,re.batchingColor=G.batchingColor,re.instancing=G.instancing,re.instancingColor=G.instancingColor,re.instancingMorph=G.instancingMorph,re.skinning=G.skinning,re.morphTargets=G.morphTargets,re.morphNormals=G.morphNormals,re.morphColors=G.morphColors,re.morphTargetsCount=G.morphTargetsCount,re.numClippingPlanes=G.numClippingPlanes,re.numIntersection=G.numClipIntersection,re.vertexAlphas=G.vertexAlphas,re.vertexTangents=G.vertexTangents,re.toneMapping=G.toneMapping}function jo(A,G,re,se,W){G.isScene!==!0&&(G=Ct),b.resetTextureUnits();const Te=G.fog,Se=se.isMeshStandardMaterial?G.environment:null,Ve=N===null?R.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:qs,Be=(se.isMeshStandardMaterial?Q:w).get(se.envMap||Se),et=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ge=!!re.morphAttributes.position,gt=!!re.morphAttributes.normal,Et=!!re.morphAttributes.color;let mt=vr;se.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(mt=R.toneMapping);const on=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,st=on!==void 0?on.length:0,Xe=Ye.get(se),Zn=g.state.lights;if(fe===!0&&(Me===!0||A!==C)){const gn=A===C&&se.id===P;ye.setState(se,A,gn)}let St=!1;se.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Zn.state.version||Xe.outputColorSpace!==Ve||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Be||se.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ye.numPlanes||Xe.numIntersection!==ye.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==nt||Xe.morphTargets!==Ge||Xe.morphNormals!==gt||Xe.morphColors!==Et||Xe.toneMapping!==mt||Xe.morphTargetsCount!==st)&&(St=!0):(St=!0,Xe.__version=se.version);let an=Xe.currentProgram;St===!0&&(an=Jr(se,G,W));let Qn=!1,Xt=!1,di=!1;const Pt=an.getUniforms(),Bn=Xe.uniforms;if(je.useProgram(an.program)&&(Qn=!0,Xt=!0,di=!0),se.id!==P&&(P=se.id,Xt=!0),Qn||C!==A){je.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),Qv(ve),Jv(ve),Pt.setValue(X,"projectionMatrix",ve)):Pt.setValue(X,"projectionMatrix",A.projectionMatrix),Pt.setValue(X,"viewMatrix",A.matrixWorldInverse);const zn=Pt.map.cameraPosition;zn!==void 0&&zn.setValue(X,Ue.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Xt=!0,di=!0)}if(W.isSkinnedMesh){Pt.setOptional(X,W,"bindMatrix"),Pt.setOptional(X,W,"bindMatrixInverse");const gn=W.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Pt.setValue(X,"boneTexture",gn.boneTexture,b))}W.isBatchedMesh&&(Pt.setOptional(X,W,"batchingTexture"),Pt.setValue(X,"batchingTexture",W._matricesTexture,b),Pt.setOptional(X,W,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",W._indirectTexture,b),Pt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",W._colorsTexture,b));const Ti=re.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Je.update(W,re,an),(Xt||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Pt.setValue(X,"receiveShadow",W.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Bn.envMap.value=Be,Bn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&G.environment!==null&&(Bn.envMapIntensity.value=G.environmentIntensity),Xt&&(Pt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&$o(Bn,di),Te&&se.fog===!0&&Ae.refreshFogUniforms(Bn,Te),Ae.refreshMaterialUniforms(Bn,se,z,ce,g.state.transmissionRenderTarget[A.id]),Pl.upload(X,qo(Xe),Bn,b)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Pl.upload(X,qo(Xe),Bn,b),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Pt.setValue(X,"center",W.center),Pt.setValue(X,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(X,"normalMatrix",W.normalMatrix),Pt.setValue(X,"modelMatrix",W.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const gn=se.uniformsGroups;for(let zn=0,Mn=gn.length;zn<Mn;zn++){const Ko=gn[zn];V.update(Ko,an),V.bind(Ko,an)}}return an}function $o(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,G,re){Ye.get(A.texture).__webglTexture=G,Ye.get(A.depthTexture).__webglTexture=re;const se=Ye.get(A);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const re=Ye.get(A);re.__webglFramebuffer=G,re.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,re=0){N=A,O=G,I=re;let se=!0,W=null,Te=!1,Se=!1;if(A){const Be=Ye.get(A);if(Be.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(X.FRAMEBUFFER,null),se=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Be.__hasExternalTextures)b.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&Ye.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Se=!0);const nt=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?W=nt[G][re]:W=nt[G],Te=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?W=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[re]:W=nt,B.copy(A.viewport),ee.copy(A.scissor),$=A.scissorTest}else B.copy(F).multiplyScalar(z).floor(),ee.copy(ie).multiplyScalar(z).floor(),$=Le;if(je.bindFramebuffer(X.FRAMEBUFFER,W)&&se&&je.drawBuffers(A,W),je.viewport(B),je.scissor(ee),je.setScissorTest($),Te){const Be=Ye.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,re)}else if(Se){const Be=Ye.get(A.texture),et=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,et)}P=-1},this.readRenderTargetPixels=function(A,G,re,se,W,Te,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ve=Ve[Se]),Ve){je.bindFramebuffer(X.FRAMEBUFFER,Ve);try{const Be=A.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-se&&re>=0&&re<=A.height-W&&X.readPixels(G,re,se,W,it.convert(et),it.convert(nt),Te)}finally{const Be=N!==null?Ye.get(N).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,G,re,se,W,Te,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ve=Ve[Se]),Ve){const Be=A.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-se&&re>=0&&re<=A.height-W){je.bindFramebuffer(X.FRAMEBUFFER,Ve);const Ge=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(G,re,se,W,it.convert(et),it.convert(nt),0);const gt=N!==null?Ye.get(N).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,gt);const Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Zv(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(Ge),X.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,re=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const se=Math.pow(2,-re),W=Math.floor(A.image.width*se),Te=Math.floor(A.image.height*se),Se=G!==null?G.x:0,Ve=G!==null?G.y:0;b.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,Se,Ve,W,Te),je.unbindTexture()},this.copyTextureToTexture=function(A,G,re=null,se=null,W=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,re=null);let Te,Se,Ve,Be,et,nt,Ge,gt,Et;const mt=A.isCompressedTexture?A.mipmaps[W]:A.image;re!==null?(Te=re.max.x-re.min.x,Se=re.max.y-re.min.y,Ve=re.isBox3?re.max.z-re.min.z:1,Be=re.min.x,et=re.min.y,nt=re.isBox3?re.min.z:0):(Te=mt.width,Se=mt.height,Ve=mt.depth||1,Be=0,et=0,nt=0),se!==null?(Ge=se.x,gt=se.y,Et=se.z):(Ge=0,gt=0,Et=0);const on=it.convert(G.format),st=it.convert(G.type);let Xe;G.isData3DTexture?(b.setTexture3D(G,0),Xe=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),Xe=X.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),Xe=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const Zn=X.getParameter(X.UNPACK_ROW_LENGTH),St=X.getParameter(X.UNPACK_IMAGE_HEIGHT),an=X.getParameter(X.UNPACK_SKIP_PIXELS),Qn=X.getParameter(X.UNPACK_SKIP_ROWS),Xt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Be),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const di=A.isDataArrayTexture||A.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=Ye.get(A),Ti=Ye.get(G),gn=Ye.get(Bn.__renderTarget),zn=Ye.get(Ti.__renderTarget);je.bindFramebuffer(X.READ_FRAMEBUFFER,gn.__webglFramebuffer),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Mn=0;Mn<Ve;Mn++)di&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,W,nt+Mn),A.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(G).__webglTexture,W,Et+Mn),X.blitFramebuffer(Be,et,Te,Se,Ge,gt,Te,Se,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(Xe,W,Ge,gt,Et+Mn,Be,et,Te,Se):X.copyTexSubImage2D(Xe,W,Ge,gt,Et+Mn,Be,et,Te,Se);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Xe,W,Ge,gt,Et,Te,Se,Ve,on,st,mt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,W,Ge,gt,Et,Te,Se,Ve,on,mt.data):X.texSubImage3D(Xe,W,Ge,gt,Et,Te,Se,Ve,on,st,mt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,Ge,gt,Te,Se,on,st,mt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,Ge,gt,mt.width,mt.height,on,mt.data):X.texSubImage2D(X.TEXTURE_2D,W,Ge,gt,Te,Se,on,st,mt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Zn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St),X.pixelStorei(X.UNPACK_SKIP_PIXELS,an),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Xt),W===0&&G.generateMipmaps&&X.generateMipmap(Xe),je.unbindTexture()},this.copyTextureToTexture3D=function(A,G,re=null,se=null,W=0){return A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,re,se,W)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){O=0,I=0,N=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}class td{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=n,this.far=r}clone(){return new td(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uE extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Os extends Zr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new j,Ul=new j,Lm=new Nt,Uo=new Ol,xl=new Wo,Qc=new j,Dm=new j;class Il extends $t{constructor(e=new jt,n=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Dl.fromBufferAttribute(n,a-1),Ul.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Dl.distanceTo(Ul);e.setAttribute("lineDistance",new nn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(a),xl.radius+=u,e.ray.intersectsSphere(xl)===!1)return;Lm.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(Lm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=S,v=E-1;T<v;T+=m){const g=_.getX(T),U=_.getX(T+1),L=yl(this,e,Uo,p,g,U);L&&n.push(L)}if(this.isLineLoop){const T=_.getX(E-1),v=_.getX(S),g=yl(this,e,Uo,p,T,v);g&&n.push(g)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=S,v=E-1;T<v;T+=m){const g=yl(this,e,Uo,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=yl(this,e,Uo,p,E-1,S);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function yl(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Dl.fromBufferAttribute(f,a),Ul.fromBufferAttribute(f,u),n.distanceSqToSegment(Dl,Ul,Qc,Dm)>r)return;Qc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Qc);if(!(p<e.near||p>e.far))return{distance:p,point:Dm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Um=new j,Im=new j;class xg extends Il{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Um.fromBufferAttribute(n,a),Im.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Um.distanceTo(Im);e.setAttribute("lineDistance",new nn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cE extends Il{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class yg extends Zr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nm=new Nt,Vf=new Ol,Sl=new Wo,Ml=new j;class fE extends $t{constructor(e=new jt,n=new yg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=u,e.ray.intersectsSphere(Sl)===!1)return;Nm.copy(a).invert(),Vf.copy(e.ray).applyMatrix4(Nm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let E=x,T=S;E<T;E++){const v=m.getX(E);Ml.fromBufferAttribute(y,v),Fm(Ml,v,p,a,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(y.count,f.start+f.count);for(let E=x,T=S;E<T;E++)Ml.fromBufferAttribute(y,E),Fm(Ml,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Fm(s,e,n,r,a,u,f){const d=Vf.distanceSqToPoint(s);if(d<n){const p=new j;Vf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Bl extends jt{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],y=[],x=[],S=[];let E=0;const T=[],v=r/2;let g=0;U(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new nn(y,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(S,2));function U(){const R=new j,Y=new j;let O=0;const I=(n-e)/r;for(let N=0;N<=u;N++){const P=[],C=N/u,B=C*(n-e)+e;for(let ee=0;ee<=a;ee++){const $=ee/a,le=$*p+d,ue=Math.sin(le),oe=Math.cos(le);Y.x=B*ue,Y.y=-C*r+v,Y.z=B*oe,y.push(Y.x,Y.y,Y.z),R.set(ue,I,oe).normalize(),x.push(R.x,R.y,R.z),S.push($,1-C),P.push(E++)}T.push(P)}for(let N=0;N<a;N++)for(let P=0;P<u;P++){const C=T[P][N],B=T[P+1][N],ee=T[P+1][N+1],$=T[P][N+1];(e>0||P!==0)&&(_.push(C,B,$),O+=3),(n>0||P!==u-1)&&(_.push(B,ee,$),O+=3)}m.addGroup(g,O,0),g+=O}function L(R){const Y=E,O=new yt,I=new j;let N=0;const P=R===!0?e:n,C=R===!0?1:-1;for(let ee=1;ee<=a;ee++)y.push(0,v*C,0),x.push(0,C,0),S.push(.5,.5),E++;const B=E;for(let ee=0;ee<=a;ee++){const le=ee/a*p+d,ue=Math.cos(le),oe=Math.sin(le);I.x=P*oe,I.y=v*C,I.z=P*ue,y.push(I.x,I.y,I.z),x.push(0,C,0),O.x=ue*.5+.5,O.y=oe*.5*C+.5,S.push(O.x,O.y),E++}for(let ee=0;ee<a;ee++){const $=Y+ee,le=B+ee;R===!0?_.push(le,le+1,$):_.push(le+1,le,$),N+=3}m.addGroup(g,N,R===!0?1:2),g+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nd extends Bl{constructor(e=1,n=1,r=32,a=1,u=!1,f=0,d=Math.PI*2){super(0,e,n,r,a,u,f,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:f,thetaLength:d}}static fromJSON(e){return new nd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class id extends jt{constructor(e=.5,n=1,r=32,a=1,u=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:a,thetaStart:u,thetaLength:f},r=Math.max(3,r),a=Math.max(1,a);const d=[],p=[],m=[],_=[];let y=e;const x=(n-e)/a,S=new j,E=new yt;for(let T=0;T<=a;T++){for(let v=0;v<=r;v++){const g=u+v/r*f;S.x=y*Math.cos(g),S.y=y*Math.sin(g),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/n+1)/2,E.y=(S.y/n+1)/2,_.push(E.x,E.y)}y+=x}for(let T=0;T<a;T++){const v=T*(r+1);for(let g=0;g<r;g++){const U=g+v,L=U,R=U+r+1,Y=U+r+2,O=U+1;d.push(L,R,O),d.push(R,Y,O)}}this.setIndex(d),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(m,3)),this.setAttribute("uv",new nn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Io extends Zr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tg,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sg extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class dE extends Sg{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Jc=new Nt,Om=new j,km=new j;class hE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),n.position.copy(Om),km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(km),n.updateMatrixWorld(),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pE extends hE{constructor(){super(new hg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mE extends Sg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new pE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bm=new Nt;class gE{constructor(e,n,r=0,a=1/0){this.ray=new Ol(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Bm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bm),this}intersectObject(e,n=!0,r=[]){return Gf(e,this,r,n),r.sort(zm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,u=e.length;a<u;a++)Gf(e[a],this,r,n);return r.sort(zm),r}}function zm(s,e){return s.distance-e.distance}function Gf(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const u=s.children;for(let f=0,d=u.length;f<d;f++)Gf(u[f],e,n,!0)}}class _E extends xg{constructor(e=10,n=10,r=4473924,a=8947848){r=new dt(r),a=new dt(a);const u=n/2,f=e/n,d=e/2,p=[],m=[];for(let x=0,S=0,E=-d;x<=n;x++,E+=f){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const T=x===u?r:a;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const _=new jt;_.setAttribute("position",new nn(p,3)),_.setAttribute("color",new nn(m,3));const y=new Os({vertexColors:!0,toneMapped:!1});super(_,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);const vE={mode:"connecting",status:"Connecting to JetBot…",pose:[0,0,0],path:[],motors:[0,0],controller_mode:"manual",controller_available:!1,camera:{available:!1,width:0,height:0},host:"—",uptime_s:0,cpu_temp_c:null,memory_percent:null,map:{points:0,boundary:0,path:0,bounds:null,source:"none"}},xE={points:[],boundary:[],path:[],bounds:null,source:"none"};function No(s,e=2){return Number.isFinite(s)?Number(s).toFixed(e):"—"}function Hr(s,e=.03){const n=Number(s==null?void 0:s[0])||0,r=Number(s==null?void 0:s[1])||0,a=Number(s==null?void 0:s[2])||0;return new j(n,(s==null?void 0:s.length)>2?a:e,-r)}function El(s,e,n=[new j,new j]){s.geometry.dispose(),s.geometry=new jt().setFromPoints(e.length>1?e:n)}function yE({state:s,mapData:e,onGoal:n}){const r=Kn.useRef(null),a=Kn.useRef(null),u=Kn.useRef(n);return u.current=n,Kn.useEffect(()=>{const f=r.current,d=new uE;d.background=new dt("#071017"),d.fog=new td("#071017",10,42);const p=new $n(48,1,.01,100),m=new lE({antialias:!0,alpha:!0});m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,f.appendChild(m.domElement),d.add(new dE("#b8e7ff","#0d1720",2.4));const _=new mE("#b1dfff",3);_.position.set(4,8,2),_.castShadow=!0,d.add(_);const y=new yn(new Xo(60,60),new Io({color:"#0a1a22",roughness:.95}));y.rotation.x=-Math.PI/2,y.receiveShadow=!0,d.add(y);const x=new _E(40,40,"#1f5962","#102d37");x.position.y=.006,d.add(x);const S=new ko,E=new yn(new Kr(.62,.24,.48),new Io({color:"#eeb34d",metalness:.2,roughness:.5}));E.position.y=.23,E.castShadow=!0,S.add(E);const T=new yn(new Kr(.38,.08,.34),new Io({color:"#d8f2f3",emissive:"#183940",roughness:.35}));T.position.set(0,.39,-.02),T.castShadow=!0,S.add(T);const v=new Io({color:"#172532",roughness:.65});for(const K of[-.36,.36]){const te=new yn(new Bl(.13,.13,.08,24),v);te.rotation.z=Math.PI/2,te.position.set(K,.14,0),te.castShadow=!0,S.add(te)}const g=new yn(new nd(.1,.28,3),new Io({color:"#35e0d0",emissive:"#0b4b4b"}));g.rotation.x=Math.PI/2,g.position.set(0,.29,-.34),S.add(g),d.add(S);const U=new xg(new jt,new Os({color:"#ef75ae",transparent:!0,opacity:.8})),L=new Il(new jt,new Os({color:"#35e0d0",transparent:!0,opacity:.9})),R=new Il(new jt,new Os({color:"#f1c95b",transparent:!0,opacity:.95})),Y=new cE(new jt,new Os({color:"#d26bff",transparent:!0,opacity:.85})),O=new fE(new jt,new yg({color:"#8be9ff",size:.035,sizeAttenuation:!0,transparent:!0,opacity:.8})),I=new yn(new id(.12,.16,24),new Qf({color:"#ffcf5b",side:vi,transparent:!0,opacity:.95}));I.rotation.x=-Math.PI/2,I.position.y=.035,I.visible=!1,d.add(U,L,R,Y,O,I);const N={yaw:.65,pitch:.62,distance:5.2,dragging:!1,lastX:0,lastY:0,keys:{}},P=()=>{const K=f.clientWidth||1,te=f.clientHeight||1;p.aspect=K/te,p.updateProjectionMatrix(),m.setSize(K,te,!1)},C=K=>{N.dragging=!0,N.moved=!1,N.lastX=K.clientX,N.lastY=K.clientY,N.downX=K.clientX,N.downY=K.clientY,f.setPointerCapture(K.pointerId)},B=K=>{N.dragging&&(Math.hypot(K.clientX-N.downX,K.clientY-N.downY)>5&&(N.moved=!0),N.yaw-=(K.clientX-N.lastX)*.008,N.pitch+=(K.clientY-N.lastY)*.006,N.pitch=Math.max(.2,Math.min(1.35,N.pitch)),N.lastX=K.clientX,N.lastY=K.clientY)},ee=K=>{if(N.dragging&&!N.moved){const te=f.getBoundingClientRect(),F=new yt((K.clientX-te.left)/te.width*2-1,-((K.clientY-te.top)/te.height)*2+1),ie=new gE;ie.setFromCamera(F,p);const Le=ie.intersectObject(y,!1)[0];Le&&u.current&&u.current([Le.point.x,-Le.point.z])}N.dragging=!1},$=K=>{K.preventDefault(),N.distance=Math.max(2,Math.min(15,N.distance+K.deltaY*.006))},le=K=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(K.key)&&(N.keys[K.key]=!0,K.preventDefault())},ue=K=>{delete N.keys[K.key]};f.addEventListener("pointerdown",C),f.addEventListener("pointermove",B),f.addEventListener("pointerup",ee),f.addEventListener("pointercancel",ee),f.addEventListener("wheel",$,{passive:!1}),window.addEventListener("keydown",le),window.addEventListener("keyup",ue);const oe=new ResizeObserver(P);oe.observe(f),P();let ce;const z=()=>{var ie;ce=requestAnimationFrame(z),N.keys.ArrowLeft&&(N.yaw+=.018),N.keys.ArrowRight&&(N.yaw-=.018),N.keys.ArrowUp&&(N.pitch=Math.min(1.35,N.pitch+.012)),N.keys.ArrowDown&&(N.pitch=Math.max(.2,N.pitch-.012));const K=((ie=a.current)==null?void 0:ie.followTarget)||new j,te=Math.cos(N.pitch)*N.distance,F=new j(K.x+Math.sin(N.yaw)*te,K.y+Math.sin(N.pitch)*N.distance,K.z+Math.cos(N.yaw)*te);p.position.lerp(F,.12),p.lookAt(K),m.render(d,p)};return a.current={camera:p,renderer:m,robot:S,frustum:U,trail:L,mapPath:R,boundary:Y,cloud:O,goalMarker:I,followTarget:new j},z(),()=>{cancelAnimationFrame(ce),oe.disconnect(),m.dispose(),f.removeEventListener("pointerdown",C),f.removeEventListener("pointermove",B),f.removeEventListener("pointerup",ee),f.removeEventListener("pointercancel",ee),f.removeEventListener("wheel",$),window.removeEventListener("keydown",le),window.removeEventListener("keyup",ue),f.removeChild(m.domElement),a.current=null}},[]),Kn.useEffect(()=>{var $,le;const f=a.current;if(!f)return;const{robot:d,frustum:p,trail:m,mapPath:_,boundary:y,cloud:x,goalMarker:S}=f,[E,T,v]=s.pose||[0,0,0];d.position.set(E,0,-T),d.rotation.y=-v;const g=new j(E,0,-T);f.followTarget=g;const U=(s.path||[]).map(([ue,oe])=>new j(ue,.028,-oe));El(m,U,[g,g]);const L=(e.path||[]).map(Hr);El(_,L,[g,g]);const R=(e.boundary||[]).map(ue=>Hr(ue,.045));if(!R.length&&(($=e.bounds)!=null&&$.min)&&((le=e.bounds)!=null&&le.max)){const ue=e.bounds.min,oe=e.bounds.max;R.push(Hr([ue[0],ue[1]]),Hr([oe[0],ue[1]]),Hr([oe[0],oe[1]]),Hr([ue[0],oe[1]]))}El(y,R,[g,g]);const Y=e.points||[],O=new Float32Array(Y.length*3);Y.forEach((ue,oe)=>Hr(ue).toArray(O,oe*3)),x.geometry.dispose(),x.geometry=new jt,x.geometry.setAttribute("position",new nn(O,3));const I=new j(E,.34,-T),N=new j(Math.sin(v),0,-Math.cos(v)),P=new j(Math.cos(v),0,Math.sin(v)),C=I.clone().addScaledVector(N,1.3),B=C.clone().addScaledVector(P,.55),ee=C.clone().addScaledVector(P,-.55);El(p,[I,B,I,ee,B,ee]),s.goal&&s.goal.length===2?(S.position.set(s.goal[0],.035,-s.goal[1]),S.visible=!0):S.visible=!1},[s,e]),qe.createElement("div",{className:"scene",ref:r,"aria-label":"Interactive Three.js third-person SLAM map"})}function SE({available:s}){const[e,n]=Kn.useState(!1);return qe.createElement("div",{className:"camera-panel"},s&&!e?qe.createElement("img",{src:"/api/camera.mjpg",alt:"Live JetBot camera",onError:()=>n(!0)}):qe.createElement("div",{className:"camera-empty"},"CAMERA WAITING"),qe.createElement("div",{className:"camera-label"},qe.createElement("span",{className:"live-dot"})," LIVE CAMERA"))}function ME({mode:s,onMotor:e,onCmdVel:n,onStop:r}){const a=(f,d,p,m)=>s==="rl"?n(p,m):e(f,d);Kn.useEffect(()=>{const f={w:[.35,.35,.12,0],s:[-.3,-.3,-.1,0],a:[-.25,.25,0,.9],d:[.25,-.25,0,-.9]},d=m=>{const _=f[m.key.toLowerCase()];_&&m.target.tagName!=="INPUT"&&(m.preventDefault(),a(..._))},p=m=>{f[m.key.toLowerCase()]&&r()};return window.addEventListener("keydown",d),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)}});const u=(f,d,p,m,_,y="")=>qe.createElement("button",{className:`drive-button ${y}`,onPointerDown:()=>a(d,p,m,_),onPointerUp:r,onPointerLeave:r,"aria-label":f},f);return qe.createElement("div",{className:"controls"},qe.createElement("div",{className:"dpad"},qe.createElement("div",null),u("▲",.35,.35,.12,0),qe.createElement("div",null),u("◀",-.25,.25,0,.9),u("■",0,0,0,0,"stop-button"),u("▶",.25,-.25,0,-.9),qe.createElement("div",null),u("▼",-.3,-.3,-.1,0),qe.createElement("div",null)),qe.createElement("span",{className:"control-hint"},"WASD drive · drag to orbit · wheel zoom"))}function EE({state:s,onChange:e}){return qe.createElement("div",{className:"controller-panel"},qe.createElement("span",null,s.controller_mode==="rl"?"RL WHEEL POLICY":"MANUAL MOTORS"),qe.createElement("div",null,qe.createElement("button",{className:s.controller_mode==="manual"?"selected":"",onClick:()=>e("manual")},"MANUAL"),qe.createElement("button",{className:s.controller_mode==="rl"?"selected":"",disabled:!s.controller_available,onClick:()=>e("rl")},"RL")))}function TE(){var T,v,g,U;const[s,e]=Kn.useState(vE),[n,r]=Kn.useState(xE),[a,u]=Kn.useState("");Kn.useEffect(()=>{let L=!0;const R=async()=>{try{const[O,I]=await Promise.all([fetch("/api/state",{cache:"no-store"}),fetch("/api/map",{cache:"no-store"})]);if(!O.ok||!I.ok)throw new Error("dashboard request failed");const[N,P]=await Promise.all([O.json(),I.json()]);L&&(e(N),r(P),u(""))}catch{L&&u("LINK LOST")}};R();const Y=setInterval(R,500);return()=>{L=!1,clearInterval(Y)}},[]);const f=async(L,R)=>{try{await fetch("/api/motor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({left:L,right:R})})}catch{u("MOTOR COMMAND FAILED")}},d=async(L,R)=>{try{if(!(await fetch("/api/cmd_vel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({v:L,w:R})})).ok)throw new Error("RL COMMAND FAILED")}catch(Y){u(Y.message)}},p=()=>fetch("/api/stop",{method:"POST"}).catch(()=>u("STOP COMMAND FAILED")),m=async L=>{try{const R=await fetch("/api/controller",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:L})});if(!R.ok){const Y=await R.json();throw new Error(Y.error||"CONTROLLER SWITCH FAILED")}}catch(R){u(R.message)}},[_,y,x]=s.pose||[0,0,0],S=s.map||{},E=async L=>{try{if(!(await fetch("/api/goal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({point:L})})).ok)throw new Error("GOAL COMMAND FAILED")}catch(R){u(R.message)}};return qe.createElement("main",{className:"game-shell"},qe.createElement("div",{className:"viewport"},qe.createElement(yE,{state:s,mapData:n,onGoal:E}),qe.createElement("div",{className:"crosshair"}),qe.createElement("header",{className:"hud hud-top"},qe.createElement("div",null,qe.createElement("span",{className:"brand"},"JETBOT // NAVIGATION LAB"),qe.createElement("span",{className:"scene-title"},"THIRD-PERSON SLAM VIEW")),qe.createElement("div",{className:`connection ${a?"offline":""}`},qe.createElement("span",{className:"status-dot"}),a||(s.mode==="hardware"?"JETBOT ONLINE":"SIMULATION"))),qe.createElement("div",{className:"hud hud-camera"},qe.createElement(SE,{available:(T=s.camera)==null?void 0:T.available})),qe.createElement("div",{className:"hud hud-left"},qe.createElement("div",{className:"readout"},qe.createElement("span",null,"POSE"),qe.createElement("b",null,No(_)," / ",No(y)," m"),qe.createElement("b",null,No(x*180/Math.PI,1),"°")),qe.createElement("div",{className:"readout"},qe.createElement("span",null,"SLAM MAP"),qe.createElement("b",null,S.points||((v=n.points)==null?void 0:v.length)||0," POINTS"),qe.createElement("b",null,S.boundary||((g=n.boundary)==null?void 0:g.length)||0," BOUNDARY NODES"),qe.createElement("small",null,S.source||n.source||"NO MAP")),qe.createElement("div",{className:"readout"},qe.createElement("span",null,"SYSTEM"),qe.createElement("b",null,s.cpu_temp_c==null?"—":`${No(s.cpu_temp_c,1)}°C`," · ",s.memory_percent==null?"—":`${No(s.memory_percent,0)}% RAM`))),qe.createElement("div",{className:"hud hud-right"},qe.createElement(EE,{state:s,onChange:m}),qe.createElement(ME,{mode:s.controller_mode,onMotor:f,onCmdVel:d,onStop:p})),qe.createElement("div",{className:"hud hud-bottom"},qe.createElement("span",null,"CLICK GROUND: SET GOAL"),qe.createElement("span",null,"MAP: ",n.source||"waiting for SLAM telemetry"),qe.createElement("span",null,"POINT CLOUD ",((U=n.points)==null?void 0:U.length)||0),qe.createElement("span",null,"POSE SOURCE: ",s.pose_source||"wheel dead-reckoning"))))}av.createRoot(document.getElementById("root")).render(qe.createElement(TE,null));
