(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function V_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var dc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function G_(){if(mp)return ft;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function v(I,ie,Ue){this.props=I,this.context=ie,this.refs=w,this.updater=Ue||S}v.prototype.isReactComponent={},v.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=v.prototype;function U(I,ie,Ue){this.props=I,this.context=ie,this.refs=w,this.updater=Ue||S}var D=U.prototype=new g;D.constructor=U,E(D,v.prototype),D.isPureReactComponent=!0;var R=Array.isArray,q=Object.prototype.hasOwnProperty,O={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(I,ie,Ue){var Q,fe={},Me=null,ve=null;if(ie!=null)for(Q in ie.ref!==void 0&&(ve=ie.ref),ie.key!==void 0&&(Me=""+ie.key),ie)q.call(ie,Q)&&!N.hasOwnProperty(Q)&&(fe[Q]=ie[Q]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ue;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];fe.children=Ie}if(I&&I.defaultProps)for(Q in Ae=I.defaultProps,Ae)fe[Q]===void 0&&(fe[Q]=Ae[Q]);return{$$typeof:s,type:I,key:Me,ref:ve,props:fe,_owner:O.current}}function P(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function B(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ue){return ie[Ue]})}var ne=/\/+/g;function K(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?B(""+I.key):ie.toString(36)}function ae(I,ie,Ue,Q,fe){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case s:case e:ve=!0}}if(ve)return ve=I,fe=fe(ve),I=Q===""?"."+K(ve,0):Q,R(fe)?(Ue="",I!=null&&(Ue=I.replace(ne,"$&/")+"/"),ae(fe,ie,Ue,"",function(Ze){return Ze})):fe!=null&&(C(fe)&&(fe=P(fe,Ue+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(ne,"$&/")+"/")+I)),ie.push(fe)),1;if(ve=0,Q=Q===""?".":Q+":",R(I))for(var Ae=0;Ae<I.length;Ae++){Me=I[Ae];var Ie=Q+K(Me,Ae);ve+=ae(Me,ie,Ue,Ie,fe)}else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Ae=0;!(Me=I.next()).done;)Me=Me.value,Ie=Q+K(Me,Ae++),ve+=ae(Me,ie,Ue,Ie,fe);else if(Me==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ve}function ce(I,ie,Ue){if(I==null)return I;var Q=[],fe=0;return ae(I,Q,"","",function(Me){return ie.call(Ue,Me,fe++)}),Q}function oe(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ue)},function(Ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ue)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ue={current:null},k={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ce,forEach:function(I,ie,Ue){ce(I,function(){ie.apply(this,arguments)},Ue)},count:function(I){var ie=0;return ce(I,function(){ie++}),ie},toArray:function(I){return ce(I,function(ie){return ie})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=v,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(I,ie,Ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Q=E({},I.props),fe=I.key,Me=I.ref,ve=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Me=ie.ref,ve=O.current),ie.key!==void 0&&(fe=""+ie.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Ie in ie)q.call(ie,Ie)&&!N.hasOwnProperty(Ie)&&(Q[Ie]=ie[Ie]===void 0&&Ae!==void 0?Ae[Ie]:ie[Ie])}var Ie=arguments.length-2;if(Ie===1)Q.children=Ue;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];Q.children=Ae}return{$$typeof:s,type:I.type,key:fe,ref:Me,props:Q,_owner:ve}},ft.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=V,ft.createFactory=function(I){var ie=V.bind(null,I);return ie.type=I,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=C,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:oe}},ft.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},ft.startTransition=function(I){var ie=k.transition;k.transition={};try{I()}finally{k.transition=ie}},ft.unstable_act=se,ft.useCallback=function(I,ie){return ue.current.useCallback(I,ie)},ft.useContext=function(I){return ue.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return ue.current.useDeferredValue(I)},ft.useEffect=function(I,ie){return ue.current.useEffect(I,ie)},ft.useId=function(){return ue.current.useId()},ft.useImperativeHandle=function(I,ie,Ue){return ue.current.useImperativeHandle(I,ie,Ue)},ft.useInsertionEffect=function(I,ie){return ue.current.useInsertionEffect(I,ie)},ft.useLayoutEffect=function(I,ie){return ue.current.useLayoutEffect(I,ie)},ft.useMemo=function(I,ie){return ue.current.useMemo(I,ie)},ft.useReducer=function(I,ie,Ue){return ue.current.useReducer(I,ie,Ue)},ft.useRef=function(I){return ue.current.useRef(I)},ft.useState=function(I){return ue.current.useState(I)},ft.useSyncExternalStore=function(I,ie,Ue){return ue.current.useSyncExternalStore(I,ie,Ue)},ft.useTransition=function(){return ue.current.useTransition()},ft.version="18.3.1",ft}var gp;function Am(){return gp||(gp=1,dc.exports=G_()),dc.exports}var li=Am();const we=V_(li);var ja={},hc={exports:{}},wn={},pc={exports:{}},mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function W_(){return _p||(_p=1,(function(s){function e(k,le){var se=k.length;k.push(le);e:for(;0<se;){var I=se-1>>>1,ie=k[I];if(0<a(ie,le))k[I]=le,k[se]=ie,se=I;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var le=k[0],se=k.pop();if(se!==le){k[0]=se;e:for(var I=0,ie=k.length,Ue=ie>>>1;I<Ue;){var Q=2*(I+1)-1,fe=k[Q],Me=Q+1,ve=k[Me];if(0>a(fe,se))Me<ie&&0>a(ve,fe)?(k[I]=ve,k[Me]=se,I=Me):(k[I]=fe,k[Q]=se,I=Q);else if(Me<ie&&0>a(ve,se))k[I]=ve,k[Me]=se,I=Me;else break e}}return le}function a(k,le){var se=k.sortIndex-le.sortIndex;return se!==0?se:k.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,y=null,x=3,S=!1,E=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=k)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function R(k){if(w=!1,D(k),!E)if(n(p)!==null)E=!0,oe(q);else{var le=n(m);le!==null&&ue(R,le.startTime-k)}}function q(k,le){E=!1,w&&(w=!1,g(V),V=-1),S=!0;var se=x;try{for(D(le),y=n(p);y!==null&&(!(y.expirationTime>le)||k&&!B());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var ie=I(y.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===n(p)&&r(p),D(le)}else r(p);y=n(p)}if(y!==null)var Ue=!0;else{var Q=n(m);Q!==null&&ue(R,Q.startTime-le),Ue=!1}return Ue}finally{y=null,x=se,S=!1}}var O=!1,N=null,V=-1,P=5,C=-1;function B(){return!(s.unstable_now()-C<P)}function ne(){if(N!==null){var k=s.unstable_now();C=k;var le=!0;try{le=N(!0,k)}finally{le?K():(O=!1,N=null)}}else O=!1}var K;if(typeof U=="function")K=function(){U(ne)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ce=ae.port2;ae.port1.onmessage=ne,K=function(){ce.postMessage(null)}}else K=function(){v(ne,0)};function oe(k){N=k,O||(O=!0,K())}function ue(k,le){V=v(function(){k(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(q))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return k()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,le){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=x;x=k;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(k,le,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,k={id:_++,callback:le,priorityLevel:k,startTime:se,expirationTime:ie,sortIndex:-1},se>I?(k.sortIndex=se,e(m,k),n(p)===null&&k===n(m)&&(w?(g(V),V=-1):w=!0,ue(R,se-I))):(k.sortIndex=ie,e(p,k),E||S||(E=!0,oe(q))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var le=x;return function(){var se=x;x=le;try{return k.apply(this,arguments)}finally{x=se}}}})(mc)),mc}var vp;function X_(){return vp||(vp=1,pc.exports=W_()),pc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Y_(){if(xp)return wn;xp=1;var s=Am(),e=X_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(t){return p.call(y,t)?!0:p.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);v[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);v[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);v[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),k=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,b=h.length-1;1<=M&&0<=b&&c[M]!==h[b];)b--;for(;1<=M&&0<=b;M--,b--)if(c[M]!==h[b]){if(M!==1||b!==1)do if(M--,b--,0>b||c[M]!==h[b]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=b);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function fe(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case O:return"Portal";case P:return"Profiler";case V:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Ze(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function dn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qe=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function pe(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,re=null,he=null;function be(t){if(t=fo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),Re(t.stateNode,t.type,i))}}function Le(t){re?he?he.push(t):he=[t]:re=t}function rt(){if(re){var t=re,i=he;if(he=re=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function Wt(){}var _t=!1;function vn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Dt(t,i,o)}finally{_t=!1,(re!==null||he!==null)&&(Wt(),rt())}}function hn(t,i){var o=t.stateNode;if(o===null)return null;var l=ua(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Zr=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Zr=!1}function Si(t,i,o,l,c,h,M,b,F){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(_e){this.onError(_e)}}var Mi=!1,Sr=null,Mr=!1,Wi=null,Go={onError:function(t){Mi=!0,Sr=t}};function Qr(t,i,o,l,c,h,M,b,F){Mi=!1,Sr=null,Si.apply(Go,arguments)}function Wo(t,i,o,l,c,h,M,b,F){if(Qr.apply(this,arguments),Mi){if(Mi){var J=Sr;Mi=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Wi=J)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Yo(t){if(fi(t)!==t)throw Error(n(188))}function Il(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Yo(c),t;if(h===l)return Yo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,b=c.child;b;){if(b===o){M=!0,o=c,l=h;break}if(b===l){M=!0,l=c,o=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===o){M=!0,o=h,l=c;break}if(b===l){M=!0,l=h,o=c;break}b=b.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Il(t),t!==null?G(t):null}function G(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=G(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Se=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Mt=null,mt=null;function rn(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,Ye=Math.log,Kn=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(Ye(t)/Kn|0)|0}var sn=64,Zn=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var b=M&~c;b!==0?l=Xt(b):(h&=M,h!==0&&(l=Xt(h)))}else M=o&~c,M!==0?l=Xt(M):h!==0&&(l=Xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),b=1<<M,F=c[M];F===-1?((b&o)===0||(b&l)!==0)&&(c[M]=Pt(b,i)):F<=i&&(t.expiredLanes|=b),h&=~b}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),t}function zn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function xn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function qo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Nl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var At=0;function qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jf,Fl,$f,Kf,Zf,Ol=!1,jo=[],Xi=null,Yi=null,qi=null,$s=new Map,Ks=new Map,ji=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function Zs(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=fo(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function fg(t,i,o,l,c){switch(i){case"focusin":return Xi=Zs(Xi,t,i,o,l,c),!0;case"dragenter":return Yi=Zs(Yi,t,i,o,l,c),!0;case"mouseover":return qi=Zs(qi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return $s.set(h,Zs($s.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Ks.set(h,Zs(Ks.get(h)||null,t,i,o,l,c)),!0}return!1}function Jf(t){var i=Er(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Xo(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=fo(o),i!==null&&Fl(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){$o(t)&&o.delete(i)}function dg(){Ol=!1,Xi!==null&&$o(Xi)&&(Xi=null),Yi!==null&&$o(Yi)&&(Yi=null),qi!==null&&$o(qi)&&(qi=null),$s.forEach(ed),Ks.forEach(ed)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dg)))}function Js(t){function i(c){return Qs(c,t)}if(0<jo.length){Qs(jo[0],t);for(var o=1;o<jo.length;o++){var l=jo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Qs(Xi,t),Yi!==null&&Qs(Yi,t),qi!==null&&Qs(qi,t),$s.forEach(i),Ks.forEach(i),o=0;o<ji.length;o++)l=ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(o=ji[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&ji.shift()}var Jr=R.ReactCurrentBatchConfig,Ko=!0;function hg(t,i,o,l){var c=At,h=Jr.transition;Jr.transition=null;try{At=1,Bl(t,i,o,l)}finally{At=c,Jr.transition=h}}function pg(t,i,o,l){var c=At,h=Jr.transition;Jr.transition=null;try{At=4,Bl(t,i,o,l)}finally{At=c,Jr.transition=h}}function Bl(t,i,o,l){if(Ko){var c=kl(t,i,o,l);if(c===null)nu(t,i,l,Zo,o),Qf(t,l);else if(fg(c,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<cg.indexOf(t)){for(;c!==null;){var h=fo(c);if(h!==null&&jf(h),h=kl(t,i,o,l),h===null&&nu(t,i,l,Zo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else nu(t,i,l,null,o)}}var Zo=null;function kl(t,i,o,l){if(Zo=null,t=H(l),t=Er(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Xo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zo=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var $i=null,zl=null,Qo=null;function nd(){if(Qo)return Qo;var t,i=zl,o=i.length,l,c="value"in $i?$i.value:$i.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Qo=c.slice(t,1<l?1-l:void 0)}function Jo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function id(){return!1}function Un(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(o=t[b],this[b]=o?o(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ea:id,this.isPropagationStopped=id,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Un(es),eo=se({},es,{view:0,detail:0}),mg=Un(eo),Vl,Gl,to,ta=se({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Vl=t.screenX-to.screenX,Gl=t.screenY-to.screenY):Gl=Vl=0,to=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),rd=Un(ta),gg=se({},ta,{dataTransfer:0}),_g=Un(gg),vg=se({},eo,{relatedTarget:0}),Wl=Un(vg),xg=se({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),yg=Un(xg),Sg=se({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mg=Un(Sg),Eg=se({},es,{data:0}),sd=Un(Eg),Tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ag[t])?!!i[t]:!1}function Xl(){return Cg}var Rg=se({},eo,{key:function(t){if(t.key){var i=Tg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xl,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pg=Un(Rg),Lg=se({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=Un(Lg),bg=se({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xl}),Dg=Un(bg),Ug=se({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Un(Ug),Ng=se({},ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=Un(Ng),Og=[9,13,27,32],Yl=d&&"CompositionEvent"in window,no=null;d&&"documentMode"in document&&(no=document.documentMode);var Bg=d&&"TextEvent"in window&&!no,ad=d&&(!Yl||no&&8<no&&11>=no),ld=" ",ud=!1;function cd(t,i){switch(t){case"keyup":return Og.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function kg(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(ud=!0,ld);case"textInput":return t=i.data,t===ld&&ud?null:t;default:return null}}function zg(t,i){if(ts)return t==="compositionend"||!Yl&&cd(t,i)?(t=nd(),Qo=zl=$i=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Hg[t.type]:i==="textarea"}function hd(t,i,o,l){Le(l),i=oa(i,"onChange"),0<i.length&&(o=new Hl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var io=null,ro=null;function Vg(t){bd(t,0)}function na(t){var i=os(t);if(pt(i))return t}function Gg(t,i){if(t==="change")return i}var pd=!1;if(d){var ql;if(d){var jl="oninput"in document;if(!jl){var md=document.createElement("div");md.setAttribute("oninput","return;"),jl=typeof md.oninput=="function"}ql=jl}else ql=!1;pd=ql&&(!document.documentMode||9<document.documentMode)}function gd(){io&&(io.detachEvent("onpropertychange",_d),ro=io=null)}function _d(t){if(t.propertyName==="value"&&na(ro)){var i=[];hd(i,ro,t,H(t)),vn(Vg,i)}}function Wg(t,i,o){t==="focusin"?(gd(),io=i,ro=o,io.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Xg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na(ro)}function Yg(t,i){if(t==="click")return na(i)}function qg(t,i){if(t==="input"||t==="change")return na(i)}function jg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:jg;function so(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vd(o)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function $g(t){var i=Sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yd(o.ownerDocument.documentElement,o)){if(l!==null&&$l(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=xd(o,h);var M=xd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kg=d&&"documentMode"in document&&11>=document.documentMode,ns=null,Kl=null,oo=null,Zl=!1;function Md(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||ns==null||ns!==Lt(l)||(l=ns,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=oa(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ns)))}function ia(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var is={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Ql={},Ed={};d&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function ra(t){if(Ql[t])return Ql[t];if(!is[t])return t;var i=is[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ed)return Ql[t]=i[o];return t}var Td=ra("animationend"),wd=ra("animationiteration"),Ad=ra("animationstart"),Cd=ra("transitionend"),Rd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Rd.set(t,i),u(i,[t])}for(var Jl=0;Jl<Pd.length;Jl++){var eu=Pd[Jl],Zg=eu.toLowerCase(),Qg=eu[0].toUpperCase()+eu.slice(1);Ki(Zg,"on"+Qg)}Ki(Td,"onAnimationEnd"),Ki(wd,"onAnimationIteration"),Ki(Ad,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Ld(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wo(l,i,void 0,t),t.currentTarget=null}function bd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],F=b.instance,J=b.currentTarget;if(b=b.listener,F!==h&&c.isPropagationStopped())break e;Ld(c,b,J),h=F}else for(M=0;M<l.length;M++){if(b=l[M],F=b.instance,J=b.currentTarget,b=b.listener,F!==h&&c.isPropagationStopped())break e;Ld(c,b,J),h=F}}}if(Mr)throw t=Wi,Mr=!1,Wi=null,t}function Ut(t,i){var o=i[lu];o===void 0&&(o=i[lu]=new Set);var l=t+"__bubble";o.has(l)||(Dd(i,t,2,!1),o.add(l))}function tu(t,i,o){var l=0;i&&(l|=4),Dd(o,t,l,i)}var sa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[sa]){t[sa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Jg.has(o)||tu(o,!1,t),tu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[sa]||(i[sa]=!0,tu("selectionchange",!1,i))}}function Dd(t,i,o,l){switch(td(i)){case 1:var c=hg;break;case 4:c=pg;break;default:c=Bl}o=c.bind(null,i,o,t),c=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function nu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;b!==null;){if(M=Er(b),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}b=b.parentNode}}l=l.return}vn(function(){var J=h,_e=H(o),xe=[];e:{var me=Rd.get(t);if(me!==void 0){var De=Hl,ke=t;switch(t){case"keypress":if(Jo(o)===0)break e;case"keydown":case"keyup":De=Pg;break;case"focusin":ke="focus",De=Wl;break;case"focusout":ke="blur",De=Wl;break;case"beforeblur":case"afterblur":De=Wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=_g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Dg;break;case Td:case wd:case Ad:De=yg;break;case Cd:De=Ig;break;case"scroll":De=mg;break;case"wheel":De=Fg;break;case"copy":case"cut":case"paste":De=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=od}var He=(i&4)!==0,Ht=!He&&t==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var z=J,j;z!==null;){j=z;var Ee=j.stateNode;if(j.tag===5&&Ee!==null&&(j=Ee,Y!==null&&(Ee=hn(z,Y),Ee!=null&&He.push(uo(z,Ee,j)))),Ht)break;z=z.return}0<He.length&&(me=new De(me,ke,null,o,_e),xe.push({event:me,listeners:He}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&o!==Tt&&(ke=o.relatedTarget||o.fromElement)&&(Er(ke)||ke[Ti]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ke=o.relatedTarget||o.toElement,De=J,ke=ke?Er(ke):null,ke!==null&&(Ht=fi(ke),ke!==Ht||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(De=null,ke=J),De!==ke)){if(He=rd,Ee="onMouseLeave",Y="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(He=od,Ee="onPointerLeave",Y="onPointerEnter",z="pointer"),Ht=De==null?me:os(De),j=ke==null?me:os(ke),me=new He(Ee,z+"leave",De,o,_e),me.target=Ht,me.relatedTarget=j,Ee=null,Er(_e)===J&&(He=new He(Y,z+"enter",ke,o,_e),He.target=j,He.relatedTarget=Ht,Ee=He),Ht=Ee,De&&ke)t:{for(He=De,Y=ke,z=0,j=He;j;j=rs(j))z++;for(j=0,Ee=Y;Ee;Ee=rs(Ee))j++;for(;0<z-j;)He=rs(He),z--;for(;0<j-z;)Y=rs(Y),j--;for(;z--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=rs(He),Y=rs(Y)}He=null}else He=null;De!==null&&Ud(xe,me,De,He,!1),ke!==null&&Ht!==null&&Ud(xe,Ht,ke,He,!0)}}e:{if(me=J?os(J):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Xe=Gg;else if(dd(me))if(pd)Xe=qg;else{Xe=Xg;var $e=Wg}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Yg);if(Xe&&(Xe=Xe(t,J))){hd(xe,Xe,o,_e);break e}$e&&$e(t,me,J),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch($e=J?os(J):window,t){case"focusin":(dd($e)||$e.contentEditable==="true")&&(ns=$e,Kl=J,oo=null);break;case"focusout":oo=Kl=ns=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Md(xe,o,_e);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":Md(xe,o,_e)}var Ke;if(Yl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ts?cd(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(ad&&o.locale!=="ko"&&(ts||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ts&&(Ke=nd()):($i=_e,zl="value"in $i?$i.value:$i.textContent,ts=!0)),$e=oa(J,tt),0<$e.length&&(tt=new sd(tt,t,null,o,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=fd(o),Ke!==null&&(tt.data=Ke)))),(Ke=Bg?kg(t,o):zg(t,o))&&(J=oa(J,"onBeforeInput"),0<J.length&&(_e=new sd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:J}),_e.data=Ke))}bd(xe,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function oa(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=hn(t,o),h!=null&&l.unshift(uo(t,h,c)),h=hn(t,i),h!=null&&l.push(uo(t,h,c))),t=t.return}return l}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var b=o,F=b.alternate,J=b.stateNode;if(F!==null&&F===l)break;b.tag===5&&J!==null&&(b=J,c?(F=hn(o,h),F!=null&&M.unshift(uo(o,F,b))):c||(F=hn(o,h),F!=null&&M.push(uo(o,F,b)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var e_=/\r\n?/g,t_=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(e_,`
`).replace(t_,"")}function aa(t,i,o){if(i=Id(i),Id(t)!==i&&o)throw Error(n(425))}function la(){}var iu=null,ru=null;function su(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,n_=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,i_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(r_)}:ou;function r_(t){setTimeout(function(){throw t})}function au(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Js(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Js(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),hi="__reactFiber$"+ss,co="__reactProps$"+ss,Ti="__reactContainer$"+ss,lu="__reactEvents$"+ss,s_="__reactListeners$"+ss,o_="__reactHandles$"+ss;function Er(t){var i=t[hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[hi])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function fo(t){return t=t[hi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[co]||null}var uu=[],as=-1;function Qi(t){return{current:t}}function It(t){0>as||(t.current=uu[as],uu[as]=null,as--)}function bt(t,i){as++,uu[as]=t.current,t.current=i}var Ji={},on=Qi(Ji),yn=Qi(!1),Tr=Ji;function ls(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Sn(t){return t=t.childContextTypes,t!=null}function ca(){It(yn),It(on)}function Od(t,i,o){if(on.current!==Ji)throw Error(n(168));bt(on,i),bt(yn,o)}function Bd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return se({},o,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=on.current,bt(on,t),bt(yn,yn.current),!0}function kd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Bd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(yn),It(on),bt(on,t)):It(yn),bt(yn,o)}var wi=null,da=!1,cu=!1;function zd(t){wi===null?wi=[t]:wi.push(t)}function a_(t){da=!0,zd(t)}function er(){if(!cu&&wi!==null){cu=!0;var t=0,i=At;try{var o=wi;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,da=!1}catch(c){throw wi!==null&&(wi=wi.slice(t+1)),ee(ze,er),c}finally{At=i,cu=!1}}return null}var us=[],cs=0,ha=null,pa=0,Hn=[],Vn=0,wr=null,Ai=1,Ci="";function Ar(t,i){us[cs++]=pa,us[cs++]=ha,ha=t,pa=i}function Hd(t,i,o){Hn[Vn++]=Ai,Hn[Vn++]=Ci,Hn[Vn++]=wr,wr=t;var l=Ai;t=Ci;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ai=1<<32-st(i)+c|o<<c|l,Ci=h+t}else Ai=1<<h|o<<c|l,Ci=t}function fu(t){t.return!==null&&(Ar(t,1),Hd(t,1,0))}function du(t){for(;t===ha;)ha=us[--cs],us[cs]=null,pa=us[--cs],us[cs]=null;for(;t===wr;)wr=Hn[--Vn],Hn[Vn]=null,Ci=Hn[--Vn],Hn[Vn]=null,Ai=Hn[--Vn],Hn[Vn]=null}var In=null,Nn=null,Nt=!1,Jn=null;function Vd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Nn=null,!0):!1;default:return!1}}function hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(Nt){var i=Nn;if(i){var o=i;if(!Gd(t,i)){if(hu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=In;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Nt=!1,In=t)}}else{if(hu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,In=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function ma(t){if(t!==In)return!1;if(!Nt)return Wd(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!su(t.type,t.memoizedProps)),i&&(i=Nn)){if(hu(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=Zi(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Nn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Zi(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=Nn;t;)t=Zi(t.nextSibling)}function fs(){Nn=In=null,Nt=!1}function mu(t){Jn===null?Jn=[t]:Jn.push(t)}var l_=R.ReactCurrentBatchConfig;function ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var b=c.refs;M===null?delete b[h]:b[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ga(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function qd(t){function i(Y,z){if(t){var j=Y.deletions;j===null?(Y.deletions=[z],Y.flags|=16):j.push(z)}}function o(Y,z){if(!t)return null;for(;z!==null;)i(Y,z),z=z.sibling;return null}function l(Y,z){for(Y=new Map;z!==null;)z.key!==null?Y.set(z.key,z):Y.set(z.index,z),z=z.sibling;return Y}function c(Y,z){return Y=lr(Y,z),Y.index=0,Y.sibling=null,Y}function h(Y,z,j){return Y.index=j,t?(j=Y.alternate,j!==null?(j=j.index,j<z?(Y.flags|=2,z):j):(Y.flags|=2,z)):(Y.flags|=1048576,z)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function b(Y,z,j,Ee){return z===null||z.tag!==6?(z=oc(j,Y.mode,Ee),z.return=Y,z):(z=c(z,j),z.return=Y,z)}function F(Y,z,j,Ee){var Xe=j.type;return Xe===N?_e(Y,z,j.props.children,Ee,j.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&Yd(Xe)===z.type)?(Ee=c(z,j.props),Ee.ref=ho(Y,z,j),Ee.return=Y,Ee):(Ee=za(j.type,j.key,j.props,null,Y.mode,Ee),Ee.ref=ho(Y,z,j),Ee.return=Y,Ee)}function J(Y,z,j,Ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=ac(j,Y.mode,Ee),z.return=Y,z):(z=c(z,j.children||[]),z.return=Y,z)}function _e(Y,z,j,Ee,Xe){return z===null||z.tag!==7?(z=Ir(j,Y.mode,Ee,Xe),z.return=Y,z):(z=c(z,j),z.return=Y,z)}function xe(Y,z,j){if(typeof z=="string"&&z!==""||typeof z=="number")return z=oc(""+z,Y.mode,j),z.return=Y,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case q:return j=za(z.type,z.key,z.props,null,Y.mode,j),j.ref=ho(Y,null,z),j.return=Y,j;case O:return z=ac(z,Y.mode,j),z.return=Y,z;case oe:var Ee=z._init;return xe(Y,Ee(z._payload),j)}if(qe(z)||le(z))return z=Ir(z,Y.mode,j,null),z.return=Y,z;ga(Y,z)}return null}function me(Y,z,j,Ee){var Xe=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Xe!==null?null:b(Y,z,""+j,Ee);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case q:return j.key===Xe?F(Y,z,j,Ee):null;case O:return j.key===Xe?J(Y,z,j,Ee):null;case oe:return Xe=j._init,me(Y,z,Xe(j._payload),Ee)}if(qe(j)||le(j))return Xe!==null?null:_e(Y,z,j,Ee,null);ga(Y,j)}return null}function De(Y,z,j,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(j)||null,b(z,Y,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case q:return Y=Y.get(Ee.key===null?j:Ee.key)||null,F(z,Y,Ee,Xe);case O:return Y=Y.get(Ee.key===null?j:Ee.key)||null,J(z,Y,Ee,Xe);case oe:var $e=Ee._init;return De(Y,z,j,$e(Ee._payload),Xe)}if(qe(Ee)||le(Ee))return Y=Y.get(j)||null,_e(z,Y,Ee,Xe,null);ga(z,Ee)}return null}function ke(Y,z,j,Ee){for(var Xe=null,$e=null,Ke=z,tt=z=0,Qt=null;Ke!==null&&tt<j.length;tt++){Ke.index>tt?(Qt=Ke,Ke=null):Qt=Ke.sibling;var St=me(Y,Ke,j[tt],Ee);if(St===null){Ke===null&&(Ke=Qt);break}t&&Ke&&St.alternate===null&&i(Y,Ke),z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=Qt}if(tt===j.length)return o(Y,Ke),Nt&&Ar(Y,tt),Xe;if(Ke===null){for(;tt<j.length;tt++)Ke=xe(Y,j[tt],Ee),Ke!==null&&(z=h(Ke,z,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Nt&&Ar(Y,tt),Xe}for(Ke=l(Y,Ke);tt<j.length;tt++)Qt=De(Ke,Y,tt,j[tt],Ee),Qt!==null&&(t&&Qt.alternate!==null&&Ke.delete(Qt.key===null?tt:Qt.key),z=h(Qt,z,tt),$e===null?Xe=Qt:$e.sibling=Qt,$e=Qt);return t&&Ke.forEach(function(ur){return i(Y,ur)}),Nt&&Ar(Y,tt),Xe}function He(Y,z,j,Ee){var Xe=le(j);if(typeof Xe!="function")throw Error(n(150));if(j=Xe.call(j),j==null)throw Error(n(151));for(var $e=Xe=null,Ke=z,tt=z=0,Qt=null,St=j.next();Ke!==null&&!St.done;tt++,St=j.next()){Ke.index>tt?(Qt=Ke,Ke=null):Qt=Ke.sibling;var ur=me(Y,Ke,St.value,Ee);if(ur===null){Ke===null&&(Ke=Qt);break}t&&Ke&&ur.alternate===null&&i(Y,Ke),z=h(ur,z,tt),$e===null?Xe=ur:$e.sibling=ur,$e=ur,Ke=Qt}if(St.done)return o(Y,Ke),Nt&&Ar(Y,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=j.next())St=xe(Y,St.value,Ee),St!==null&&(z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Nt&&Ar(Y,tt),Xe}for(Ke=l(Y,Ke);!St.done;tt++,St=j.next())St=De(Ke,Y,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),z=h(St,z,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(H_){return i(Y,H_)}),Nt&&Ar(Y,tt),Xe}function Ht(Y,z,j,Ee){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case q:e:{for(var Xe=j.key,$e=z;$e!==null;){if($e.key===Xe){if(Xe=j.type,Xe===N){if($e.tag===7){o(Y,$e.sibling),z=c($e,j.props.children),z.return=Y,Y=z;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&Yd(Xe)===$e.type){o(Y,$e.sibling),z=c($e,j.props),z.ref=ho(Y,$e,j),z.return=Y,Y=z;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}j.type===N?(z=Ir(j.props.children,Y.mode,Ee,j.key),z.return=Y,Y=z):(Ee=za(j.type,j.key,j.props,null,Y.mode,Ee),Ee.ref=ho(Y,z,j),Ee.return=Y,Y=Ee)}return M(Y);case O:e:{for($e=j.key;z!==null;){if(z.key===$e)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){o(Y,z.sibling),z=c(z,j.children||[]),z.return=Y,Y=z;break e}else{o(Y,z);break}else i(Y,z);z=z.sibling}z=ac(j,Y.mode,Ee),z.return=Y,Y=z}return M(Y);case oe:return $e=j._init,Ht(Y,z,$e(j._payload),Ee)}if(qe(j))return ke(Y,z,j,Ee);if(le(j))return He(Y,z,j,Ee);ga(Y,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,z!==null&&z.tag===6?(o(Y,z.sibling),z=c(z,j),z.return=Y,Y=z):(o(Y,z),z=oc(j,Y.mode,Ee),z.return=Y,Y=z),M(Y)):o(Y,z)}return Ht}var ds=qd(!0),jd=qd(!1),_a=Qi(null),va=null,hs=null,gu=null;function _u(){gu=hs=va=null}function vu(t){var i=_a.current;It(_a),t._currentValue=i}function xu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ps(t,i){va=t,gu=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(va===null)throw Error(n(308));hs=t,va.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Cr=null;function yu(t){Cr===null?Cr=[t]:Cr.push(t)}function $d(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,yu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,o)}return c=l.interleaved,c===null?(i.next=i,yu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,o)}function xa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Nl(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ya(t,i,o,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,J=F.next;F.next=null,M===null?h=J:M.next=J,M=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,b=_e.lastBaseUpdate,b!==M&&(b===null?_e.firstBaseUpdate=J:b.next=J,_e.lastBaseUpdate=F))}if(h!==null){var xe=c.baseState;M=0,_e=J=F=null,b=h;do{var me=b.lane,De=b.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ke=t,He=b;switch(me=i,De=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){xe=ke.call(De,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,me=typeof ke=="function"?ke.call(De,xe,me):ke,me==null)break e;xe=se({},xe,me);break e;case 2:tr=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[b]:me.push(b))}else De={eventTime:De,lane:me,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_e===null?(J=_e=De,F=xe):_e=_e.next=De,M|=me;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;me=b,b=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var po={},pi=Qi(po),mo=Qi(po),go=Qi(po);function Rr(t){if(t===po)throw Error(n(174));return t}function Mu(t,i){switch(bt(go,i),bt(mo,t),bt(pi,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(pi),bt(pi,i)}function ms(){It(pi),It(mo),It(go)}function Jd(t){Rr(go.current);var i=Rr(pi.current),o=Ve(i,t.type);i!==o&&(bt(mo,t),bt(pi,o))}function Eu(t){mo.current===t&&(It(pi),It(mo))}var Ft=Qi(0);function Sa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tu=[];function wu(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Ma=R.ReactCurrentDispatcher,Au=R.ReactCurrentBatchConfig,Pr=0,Ot=null,Yt=null,Kt=null,Ea=!1,_o=!1,vo=0,u_=0;function an(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Ru(t,i,o,l,c,h){if(Pr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?h_:p_,t=o(l,c),_o){h=0;do{if(_o=!1,vo=0,25<=h)throw Error(n(301));h+=1,Kt=Yt=null,i.updateQueue=null,Ma.current=m_,t=o(l,c)}while(_o)}if(Ma.current=Aa,i=Yt!==null&&Yt.next!==null,Pr=0,Kt=Yt=Ot=null,Ea=!1,i)throw Error(n(300));return t}function Pu(){var t=vo!==0;return vo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Wn(){if(Yt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Kt===null?Ot.memoizedState:Kt.next;if(i!==null)Kt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function xo(t,i){return typeof i=="function"?i(t):i}function Lu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var b=M=null,F=null,J=h;do{var _e=J.lane;if((Pr&_e)===_e)F!==null&&(F=F.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};F===null?(b=F=xe,M=l):F=F.next=xe,Ot.lanes|=_e,Lr|=_e}J=J.next}while(J!==null&&J!==h);F===null?M=l:F.next=b,Qn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Qn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function eh(){}function th(t,i){var o=Ot,l=Wn(),c=i(),h=!Qn(l.memoizedState,c);if(h&&(l.memoizedState=c,Mn=!0),l=l.queue,Du(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Kt!==null&&Kt.memoizedState.tag&1){if(o.flags|=2048,yo(9,ih.bind(null,o,l,c,i),void 0,null),Zt===null)throw Error(n(349));(Pr&30)!==0||nh(o,i,c)}return c}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function oh(t){var i=Ri(t,1);i!==null&&ii(i,t,1,-1)}function ah(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=d_.bind(null,Ot,t),[i.memoizedState,t]}function yo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Wn().memoizedState}function Ta(t,i,o,l){var c=mi();Ot.flags|=t,c.memoizedState=yo(1|i,o,void 0,l===void 0?null:l)}function wa(t,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Cu(l,M.deps)){c.memoizedState=yo(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=yo(1|i,o,h,l)}function uh(t,i){return Ta(8390656,8,t,i)}function Du(t,i){return wa(2048,8,t,i)}function ch(t,i){return wa(4,2,t,i)}function fh(t,i){return wa(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,wa(4,4,dh.bind(null,i,t),o)}function Uu(){}function ph(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):(Qn(o,i)||(o=pn(),Ot.lanes|=o,Lr|=o,t.baseState=!0),i)}function c_(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=Au.transition;Au.transition={};try{t(!1),i()}finally{At=o,Au.transition=l}}function _h(){return Wn().memoizedState}function f_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var c=gn();ii(o,t,l,c),yh(o,i,l)}}function d_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,b=h(M,o);if(c.hasEagerState=!0,c.eagerState=b,Qn(b,M)){var F=i.interleaved;F===null?(c.next=c,yu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=$d(t,i,c,l),o!==null&&(c=gn(),ii(o,t,l,c),yh(o,i,l))}}function vh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function xh(t,i){_o=Ea=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Nl(t,o)}}var Aa={readContext:Gn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},h_={readContext:Gn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:uh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ta(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var o=mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=f_.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:Uu,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=c_.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=mi();if(Nt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Zt===null)throw Error(n(349));(Pr&30)!==0||nh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,uh(rh.bind(null,l,h,t),[t]),l.flags|=2048,yo(9,ih.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=mi(),i=Zt.identifierPrefix;if(Nt){var o=Ci,l=Ai;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=vo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=u_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},p_={readContext:Gn,useCallback:ph,useContext:Gn,useEffect:Du,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Lu,useRef:lh,useState:function(){return Lu(xo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Wn();return gh(i,Yt.memoizedState,t)},useTransition:function(){var t=Lu(xo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},m_={readContext:Gn,useCallback:ph,useContext:Gn,useEffect:Du,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:bu,useRef:lh,useState:function(){return bu(xo)},useDebugValue:Uu,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:gh(i,Yt.memoizedState,t)},useTransition:function(){var t=bu(xo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ca={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=gn(),c=or(t),h=Pi(l,c);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ii(i,t,c,l),xa(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=gn(),c=or(t),h=Pi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ii(i,t,c,l),xa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=gn(),l=or(t),c=Pi(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ii(i,t,l,o),xa(i,t,l))}};function Sh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!so(o,l)||!so(c,h):!0}function Mh(t,i,o){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=Sn(i)?Tr:on.current,l=i.contextTypes,h=(l=l!=null)?ls(t,c):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ca,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Eh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ca.enqueueReplaceState(i,i.state,null)}function Nu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Su(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=Sn(i)?Tr:on.current,c.context=ls(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Iu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ca.enqueueReplaceState(c,c.state,null),ya(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Fu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ou(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var g_=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ia||(Ia=!0,Qu=l),Ou(t,i)},o}function wh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Ou(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Ou(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new g_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=L_.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var __=R.ReactCurrentOwner,Mn=!1;function mn(t,i,o,l){i.child=t===null?jd(i,null,o,l):ds(i,t.child,o,l)}function Ph(t,i,o,l,c){o=o.render;var h=i.ref;return ps(i,c),l=Ru(t,i,o,l,h,c),o=Pu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Nt&&o&&fu(i),i.flags|=1,mn(t,i,l,c),i.child)}function Lh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!sc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,bh(t,i,h,l,c)):(t=za(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:so,o(M,l)&&t.ref===i.ref)return Li(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function bh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(so(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Li(t,i,c)}return Bu(t,i,o,l,c)}function Dh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(vs,Fn),Fn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(vs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,bt(vs,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,bt(vs,Fn),Fn|=l;return mn(t,i,c,o),i.child}function Uh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Bu(t,i,o,l,c){var h=Sn(o)?Tr:on.current;return h=ls(i,h),ps(i,c),o=Ru(t,i,o,l,h,c),l=Pu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Nt&&l&&fu(i),i.flags|=1,mn(t,i,o,c),i.child)}function Ih(t,i,o,l,c){if(Sn(o)){var h=!0;fa(i)}else h=!1;if(ps(i,c),i.stateNode===null)Pa(t,i),Mh(i,o,l),Nu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,b=i.memoizedProps;M.props=b;var F=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Gn(J):(J=Sn(o)?Tr:on.current,J=ls(i,J));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==l||F!==J)&&Eh(i,M,l,J),tr=!1;var me=i.memoizedState;M.state=me,ya(i,l,M,c),F=i.memoizedState,b!==l||me!==F||yn.current||tr?(typeof _e=="function"&&(Iu(i,o,_e,l),F=i.memoizedState),(b=tr||Sh(i,o,b,l,me,F,J))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=J,l=b):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Kd(t,i),b=i.memoizedProps,J=i.type===i.elementType?b:ei(i.type,b),M.props=J,xe=i.pendingProps,me=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Gn(F):(F=Sn(o)?Tr:on.current,F=ls(i,F));var De=o.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==xe||me!==F)&&Eh(i,M,l,F),tr=!1,me=i.memoizedState,M.state=me,ya(i,l,M,c);var ke=i.memoizedState;b!==xe||me!==ke||yn.current||tr?(typeof De=="function"&&(Iu(i,o,De,l),ke=i.memoizedState),(J=tr||Sh(i,o,J,l,me,ke,F)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ke,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ke,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),M.props=l,M.state=ke,M.context=F,l=J):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return ku(t,i,o,l,h,c)}function ku(t,i,o,l,c,h){Uh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&kd(i,o,!1),Li(t,i,h);l=i.stateNode,__.current=i;var b=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ds(i,t.child,null,h),i.child=ds(i,null,b,h)):mn(t,i,b,h),i.memoizedState=l.state,c&&kd(i,o,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Od(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(t,i.context,!1),Mu(t,i.containerInfo)}function Fh(t,i,o,l,c){return fs(),mu(c),i.flags|=256,mn(t,i,o,l),i.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,b;if((b=M)||(b=t!==null&&t.memoizedState===null?!1:(c&2)!==0),b?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),bt(Ft,c&1),t===null)return pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ha(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hu(o),i.memoizedState=zu,t):Vu(i,M));if(c=t.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return v_(t,i,M,l,b,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,b=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=lr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),b!==null?h=lr(b,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Hu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=zu,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Vu(t,i){return i=Ha({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ra(t,i,o,l){return l!==null&&mu(l),ds(i,t.child,null,o),t=Vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function v_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Fu(Error(n(422))),Ra(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ha({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ds(i,t.child,null,M),i.child.memoizedState=Hu(M),i.memoizedState=zu,h);if((i.mode&1)===0)return Ra(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(n(419)),l=Fu(h,l,void 0),Ra(t,i,M,l)}if(b=(M&t.childLanes)!==0,Mn||b){if(l=Zt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),ii(l,t,c,-1))}return rc(),l=Fu(Error(n(421))),Ra(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=b_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Zi(c.nextSibling),In=i,Nt=!0,Jn=null,t!==null&&(Hn[Vn++]=Ai,Hn[Vn++]=Ci,Hn[Vn++]=wr,Ai=t.id,Ci=t.overflow,wr=i),i=Vu(i,l.children),i.flags|=4096,i)}function Bh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xu(t.return,i,o)}function Gu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function kh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(mn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,o,i);else if(t.tag===19)Bh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Sa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Gu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Sa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Gu(i,!0,o,null,h);break;case"together":Gu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function x_(t,i,o){switch(i.tag){case 3:Nh(i),fs();break;case 5:Jd(i);break;case 1:Sn(i.type)&&fa(i);break;case 4:Mu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;bt(_a,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Oh(t,i,o):(bt(Ft,Ft.current&1),t=Li(t,i,o),t!==null?t.sibling:null);bt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return kh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,o)}return Li(t,i,o)}var zh,Wu,Hh,Vh;zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wu=function(){},Hh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(pi.current);var h=null;switch(o){case"input":c=X(t,c),l=X(t,l),h=[];break;case"select":c=se({},c,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":c=T(t,c),l=T(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=la)}ct(o,l);var M;o=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var b=c[J];for(M in b)b.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var F=l[J];if(b=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&F!==b&&(F!=null||b!=null))if(J==="style")if(b){for(M in b)!b.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&b[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(J,o)),o=F;else J==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,b=b?b.__html:void 0,F!=null&&b!==F&&(h=h||[]).push(J,F)):J==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(J,""+F):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(F!=null&&J==="onScroll"&&Ut("scroll",t),h||b===F||(h=[])):(h=h||[]).push(J,F))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function So(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function y_(t,i,o){var l=i.pendingProps;switch(du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return Sn(i.type)&&ca(),ln(i),null;case 3:return l=i.stateNode,ms(),It(yn),It(on),wu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(tc(Jn),Jn=null))),Wu(t,i),ln(i),null;case 5:Eu(i);var c=Rr(go.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=Rr(pi.current),ma(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[co]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<ao.length;c++)Ut(ao[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":dn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Z(l,h),Ut("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var b=h[M];M==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,b,t),c=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,b,t),c=["children",""+b]):a.hasOwnProperty(M)&&b!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Ct(l),je(l,h,!0);break;case"textarea":Ct(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=la)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[hi]=i,t[co]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<ao.length;c++)Ut(ao[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":dn(t,l),c=X(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=se({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Z(t,l),c=T(t,l),Ut("invalid",t);break;default:c=l}ct(o,c),b=c;for(h in b)if(b.hasOwnProperty(h)){var F=b[h];h==="style"?Je(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ne(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&lt(t,F):typeof F=="number"&&lt(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&D(t,h,F,M))}switch(o){case"input":Ct(t),je(t,l,!1);break;case"textarea":Ct(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=la)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(go.current),Rr(pi.current),ma(i)){if(l=i.stateNode,o=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:aa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return ln(i),null;case 13:if(It(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),fs(),i.flags|=98560,h=!1;else if(h=ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[hi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else Jn!==null&&(tc(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?qt===0&&(qt=3):rc())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return ms(),Wu(t,i),t===null&&lo(i.stateNode.containerInfo),ln(i),null;case 10:return vu(i.type._context),ln(i),null;case 17:return Sn(i.type)&&ca(),ln(i),null;case 19:if(It(Ft),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)So(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Sa(t),M!==null){for(i.flags|=128,So(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Se()>xs&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304)}else{if(!l)if(t=Sa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),So(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return ln(i),null}else 2*Se()-h.renderingStartTime>xs&&o!==1073741824&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Se(),i.sibling=null,o=Ft.current,bt(Ft,l?o&1|2:o&1),i):(ln(i),null);case 22:case 23:return ic(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function S_(t,i){switch(du(i),i.tag){case 1:return Sn(i.type)&&ca(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),It(yn),It(on),wu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Eu(i),null;case 13:if(It(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ft),null;case 4:return ms(),null;case 10:return vu(i.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var La=!1,un=!1,M_=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function Xu(t,i,o){try{o()}catch(l){kt(t,i,l)}}var Gh=!1;function E_(t,i){if(iu=Ko,t=Sd(),$l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,b=-1,F=-1,J=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==o||c!==0&&xe.nodeType!==3||(b=M+c),xe!==h||l!==0&&xe.nodeType!==3||(F=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===o&&++J===c&&(b=M),me===h&&++_e===l&&(F=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}o=b===-1||F===-1?null:{start:b,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(ru={focusedElem:t,selectionRange:o},Ko=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,Ht=ke.memoizedState,Y=i.stateNode,z=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:ei(i.type,He),Ht);Y.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){kt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return ke=Gh,Gh=!1,ke}function Mo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Xu(i,o,h)}c=c.next}while(c!==l)}}function ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[co],delete i[lu],delete i[s_],delete i[o_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}function ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ju(t,i,o),t=t.sibling;t!==null;)ju(t,i,o),t=t.sibling}var tn=null,ti=!1;function ir(t,i,o){for(o=o.child;o!==null;)qh(t,i,o),o=o.sibling}function qh(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Mt,o)}catch{}switch(o.tag){case 5:un||_s(o,i);case 6:var l=tn,c=ti;tn=null,ir(t,i,o),tn=l,ti=c,tn!==null&&(ti?(t=tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ti?(t=tn,o=o.stateNode,t.nodeType===8?au(t.parentNode,o):t.nodeType===1&&au(t,o),Js(t)):au(tn,o.stateNode));break;case 4:l=tn,c=ti,tn=o.stateNode.containerInfo,ti=!0,ir(t,i,o),tn=l,ti=c;break;case 0:case 11:case 14:case 15:if(!un&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Xu(o,i,M),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!un&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(b){kt(o,i,b)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(un=(l=un)||o.memoizedState!==null,ir(t,i,o),un=l):ir(t,i,o);break;default:ir(t,i,o)}}function jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new M_),i.forEach(function(l){var c=D_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,b=M;e:for(;b!==null;){switch(b.tag){case 5:tn=b.stateNode,ti=!1;break e;case 3:tn=b.stateNode.containerInfo,ti=!0;break e;case 4:tn=b.stateNode.containerInfo,ti=!0;break e}b=b.return}if(tn===null)throw Error(n(160));qh(h,M,c),tn=null,ti=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(J){kt(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),gi(t),l&4){try{Mo(3,t,t.return),ba(3,t)}catch(He){kt(t,t.return,He)}try{Mo(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:ni(i,t),gi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(ni(i,t),gi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,b=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),it(b,M);var J=it(b,h);for(M=0;M<F.length;M+=2){var _e=F[M],xe=F[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ne(c,xe):_e==="children"?lt(c,xe):D(c,_e,xe,J)}switch(b){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?L(c,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?L(c,!!h.multiple,h.defaultValue,!0):L(c,!!h.multiple,h.multiple?[]:"",!1))}c[co]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(ni(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(ni(i,t),gi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:ni(i,t),gi(t);break;case 13:ni(i,t),gi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Zu=Se())),l&4&&jh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(un=(J=un)||_e,ni(i,t),un=J):ni(i,t),gi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&(t.mode&1)!==0)for(Fe=t,_e=t.child;_e!==null;){for(xe=Fe=_e;Fe!==null;){switch(me=Fe,De=me.child,me.tag){case 0:case 11:case 14:case 15:Mo(4,me,me.return);break;case 1:_s(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){kt(l,o,He)}}break;case 5:_s(me,me.return);break;case 22:if(me.memoizedState!==null){Qh(xe);continue}}De!==null?(De.return=me,Fe=De):Qh(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=xe.stateNode,F=xe.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,b.style.display=Qe("display",M))}catch(He){kt(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(He){kt(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ni(i,t),gi(t),l&4&&jh(t);break;case 21:break;default:ni(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=Yh(t);ju(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,b=Yh(t);qu(t,b,M);break;default:throw Error(n(161))}}catch(F){kt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function T_(t,i,o){Fe=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var c=Fe,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||La;if(!M){var b=c.alternate,F=b!==null&&b.memoizedState!==null||un;b=La;var J=un;if(La=M,(un=F)&&!J)for(Fe=c;Fe!==null;)M=Fe,F=M.child,M.tag===22&&M.memoizedState!==null?Jh(c):F!==null?(F.return=M,Fe=F):Jh(c);for(;h!==null;)Fe=h,Kh(h),h=h.sibling;Fe=c,La=b,un=J}Zh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Fe=h):Zh(t)}}function Zh(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,M,o)}break;case 5:var b=i.stateNode;if(o===null&&i.flags&4){o=b;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Js(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Yu(i)}catch(me){kt(i,i.return,me)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Qh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Jh(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ba(4,i)}catch(F){kt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){kt(i,c,F)}}var h=i.return;try{Yu(i)}catch(F){kt(i,h,F)}break;case 5:var M=i.return;try{Yu(i)}catch(F){kt(i,M,F)}}}catch(F){kt(i,i.return,F)}if(i===t){Fe=null;break}var b=i.sibling;if(b!==null){b.return=i.return,Fe=b;break}Fe=i.return}}var w_=Math.ceil,Da=R.ReactCurrentDispatcher,$u=R.ReactCurrentOwner,Xn=R.ReactCurrentBatchConfig,vt=0,Zt=null,Vt=null,nn=0,Fn=0,vs=Qi(0),qt=0,Eo=null,Lr=0,Ua=0,Ku=0,To=null,En=null,Zu=0,xs=1/0,bi=null,Ia=!1,Qu=null,rr=null,Na=!1,sr=null,Fa=0,wo=0,Ju=null,Oa=-1,Ba=0;function gn(){return(vt&6)!==0?Se():Oa!==-1?Oa:Oa=Se()}function or(t){return(t.mode&1)===0?1:(vt&2)!==0&&nn!==0?nn&-nn:l_.transition!==null?(Ba===0&&(Ba=pn()),Ba):(t=At,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function ii(t,i,o,l){if(50<wo)throw wo=0,Ju=null,Error(n(185));xn(t,o,l),((vt&2)===0||t!==Zt)&&(t===Zt&&((vt&2)===0&&(Ua|=o),qt===4&&ar(t,nn)),Tn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(xs=Se()+500,da&&er()))}function Tn(t,i){var o=t.callbackNode;kn(t,i);var l=di(t,t===Zt?nn:0);if(l===0)o!==null&&te(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&te(o),i===1)t.tag===0?a_(tp.bind(null,t)):zd(tp.bind(null,t)),i_(function(){(vt&6)===0&&er()}),o=null;else{switch(qf(l)){case 1:o=ze;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=gt;break;default:o=nt}o=up(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Oa=-1,Ba=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ys()&&t.callbackNode!==o)return null;var l=di(t,t===Zt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=ka(t,l);else{i=l;var c=vt;vt|=2;var h=ip();(Zt!==t||nn!==i)&&(bi=null,xs=Se()+500,Dr(t,i));do try{R_();break}catch(b){np(t,b)}while(!0);_u(),Da.current=h,vt=c,Vt!==null?i=0:(Zt=null,nn=0,i=qt)}if(i!==0){if(i===2&&(c=Ei(t),c!==0&&(l=c,i=ec(t,c))),i===1)throw o=Eo,Dr(t,0),ar(t,l),Tn(t,Se()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,(l&30)===0&&!A_(c)&&(i=ka(t,l),i===2&&(h=Ei(t),h!==0&&(l=h,i=ec(t,h))),i===1))throw o=Eo,Dr(t,0),ar(t,l),Tn(t,Se()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,En,bi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Zu+500-Se(),10<i)){if(di(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=ou(Ur.bind(null,t,En,bi),i);break}Ur(t,En,bi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Se()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*w_(l/1960))-l,10<l){t.timeoutHandle=ou(Ur.bind(null,t,En,bi),l);break}Ur(t,En,bi);break;case 5:Ur(t,En,bi);break;default:throw Error(n(329))}}}return Tn(t,Se()),t.callbackNode===o?ep.bind(null,t):null}function ec(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=ka(t,i),t!==2&&(i=En,En=o,i!==null&&tc(i)),t}function tc(t){En===null?En=t:En.push.apply(En,t)}function A_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Qn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~Ku,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((vt&6)!==0)throw Error(n(327));ys();var i=di(t,0);if((i&1)===0)return Tn(t,Se()),null;var o=ka(t,i);if(t.tag!==0&&o===2){var l=Ei(t);l!==0&&(i=l,o=ec(t,l))}if(o===1)throw o=Eo,Dr(t,0),ar(t,i),Tn(t,Se()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,En,bi),Tn(t,Se()),null}function nc(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(xs=Se()+500,da&&er())}}function br(t){sr!==null&&sr.tag===0&&(vt&6)===0&&ys();var i=vt;vt|=1;var o=Xn.transition,l=At;try{if(Xn.transition=null,At=1,t)return t()}finally{At=l,Xn.transition=o,vt=i,(vt&6)===0&&er()}}function ic(){Fn=vs.current,It(vs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,n_(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(du(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ca();break;case 3:ms(),It(yn),It(on),wu();break;case 5:Eu(l);break;case 4:ms();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:vu(l.type._context);break;case 22:case 23:ic()}o=o.return}if(Zt=t,Vt=t=lr(t.current,null),nn=Fn=i,qt=0,Eo=null,Ku=Ua=Lr=0,En=To=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Cr=null}return t}function np(t,i){do{var o=Vt;try{if(_u(),Ma.current=Aa,Ea){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ea=!1}if(Pr=0,Kt=Yt=Ot=null,_o=!1,vo=0,$u.current=null,o===null||o.return===null){qt=1,Eo=i,Vt=null;break}e:{var h=t,M=o.return,b=o,F=i;if(i=nn,b.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var J=F,_e=b,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Ch(M);if(De!==null){De.flags&=-257,Rh(De,M,b,h,i),De.mode&1&&Ah(h,J,i),i=De,F=J;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(F),i.updateQueue=He}else ke.add(F);break e}else{if((i&1)===0){Ah(h,J,i),rc();break e}F=Error(n(426))}}else if(Nt&&b.mode&1){var Ht=Ch(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Rh(Ht,M,b,h,i),mu(gs(F,b));break e}}h=F=gs(F,b),qt!==4&&(qt=2),To===null?To=[h]:To.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Th(h,F,i);Zd(h,Y);break e;case 1:b=F;var z=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(rr===null||!rr.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=wh(h,b,i);Zd(h,Ee);break e}}h=h.return}while(h!==null)}sp(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function ip(){var t=Da.current;return Da.current=Aa,t===null?Aa:t}function rc(){(qt===0||qt===3||qt===2)&&(qt=4),Zt===null||(Lr&268435455)===0&&(Ua&268435455)===0||ar(Zt,nn)}function ka(t,i){var o=vt;vt|=2;var l=ip();(Zt!==t||nn!==i)&&(bi=null,Dr(t,i));do try{C_();break}catch(c){np(t,c)}while(!0);if(_u(),vt=o,Da.current=l,Vt!==null)throw Error(n(261));return Zt=null,nn=0,qt}function C_(){for(;Vt!==null;)rp(Vt)}function R_(){for(;Vt!==null&&!W();)rp(Vt)}function rp(t){var i=lp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?sp(t):Vt=i,$u.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=y_(o,i,Fn),o!==null){Vt=o;return}}else{if(o=S_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);qt===0&&(qt=5)}function Ur(t,i,o){var l=At,c=Xn.transition;try{Xn.transition=null,At=1,P_(t,i,o,l)}finally{Xn.transition=c,At=l}return null}function P_(t,i,o,l){do ys();while(sr!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(qo(t,h),t===Zt&&(Vt=Zt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Na||(Na=!0,up(nt,function(){return ys(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var M=At;At=1;var b=vt;vt|=4,$u.current=null,E_(t,o),$h(o,t),$g(ru),Ko=!!iu,ru=iu=null,t.current=o,T_(o),Te(),vt=b,At=M,Xn.transition=h}else t.current=o;if(Na&&(Na=!1,sr=t,Fa=c),h=t.pendingLanes,h===0&&(rr=null),rn(o.stateNode),Tn(t,Se()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=Qu,Qu=null,t;return(Fa&1)!==0&&t.tag!==0&&ys(),h=t.pendingLanes,(h&1)!==0?t===Ju?wo++:(wo=0,Ju=t):wo=0,er(),null}function ys(){if(sr!==null){var t=qf(Fa),i=Xn.transition,o=At;try{if(Xn.transition=null,At=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Fa=0,(vt&6)!==0)throw Error(n(331));var c=vt;for(vt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var b=h.deletions;if(b!==null){for(var F=0;F<b.length;F++){var J=b[F];for(Fe=J;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:Mo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Fe=xe;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,De=_e.return;if(Wh(_e),_e===J){Fe=null;break}if(me!==null){me.return=De,Fe=me;break}Fe=De}}}var ke=h.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var Ht=He.sibling;He.sibling=null,He=Ht}while(He!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Mo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Fe=Y;break e}Fe=h.return}}var z=t.current;for(Fe=z;Fe!==null;){M=Fe;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,Fe=j;else e:for(M=z;Fe!==null;){if(b=Fe,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:ba(9,b)}}catch(Xe){kt(b,b.return,Xe)}if(b===M){Fe=null;break e}var Ee=b.sibling;if(Ee!==null){Ee.return=b.return,Fe=Ee;break e}Fe=b.return}}if(vt=c,er(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Mt,t)}catch{}l=!0}return l}finally{At=o,Xn.transition=i}}return!1}function op(t,i,o){i=gs(o,i),i=Th(t,i,1),t=nr(t,i,1),i=gn(),t!==null&&(xn(t,1,i),Tn(t,i))}function kt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=gs(o,t),t=wh(i,t,1),i=nr(i,t,1),t=gn(),i!==null&&(xn(i,1,t),Tn(i,t));break}}i=i.return}}function L_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&o,Zt===t&&(nn&o)===o&&(qt===4||qt===3&&(nn&130023424)===nn&&500>Se()-Zu?Dr(t,0):Ku|=o),Tn(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zn,Zn<<=1,(Zn&130023424)===0&&(Zn=4194304)));var o=gn();t=Ri(t,i),t!==null&&(xn(t,i,o),Tn(t,o))}function b_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function D_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,x_(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,Nt&&(i.flags&1048576)!==0&&Hd(i,pa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Pa(t,i),t=i.pendingProps;var c=ls(i,on.current);ps(i,o),c=Ru(null,i,l,t,c,o);var h=Pu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(h=!0,fa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Su(i),c.updater=Ca,i.stateNode=c,c._reactInternals=i,Nu(i,l,t,o),i=ku(null,i,l,!0,h,o)):(i.tag=0,Nt&&h&&fu(i),mn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Pa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=I_(l),t=ei(l,t),c){case 0:i=Bu(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=Ph(null,i,l,t,o);break e;case 14:i=Lh(null,i,l,ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Bu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Ih(t,i,l,c,o);case 3:e:{if(Nh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Kd(t,i),ya(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=gs(Error(n(423)),i),i=Fh(t,i,l,o,c);break e}else if(l!==c){c=gs(Error(n(424)),i),i=Fh(t,i,l,o,c);break e}else for(Nn=Zi(i.stateNode.containerInfo.firstChild),In=i,Nt=!0,Jn=null,o=jd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===c){i=Li(t,i,o);break e}mn(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&pu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,su(l,c)?M=null:h!==null&&su(l,h)&&(i.flags|=32),Uh(t,i),mn(t,i,M,o),i.child;case 6:return t===null&&pu(i),null;case 13:return Oh(t,i,o);case 4:return Mu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,o):mn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Ph(t,i,l,c,o);case 7:return mn(t,i,i.pendingProps,o),i.child;case 8:return mn(t,i,i.pendingProps.children,o),i.child;case 12:return mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,bt(_a,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===c.children&&!yn.current){i=Li(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var b=h.dependencies;if(b!==null){M=h.child;for(var F=b.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Pi(-1,o&-o),F.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),J.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),xu(h.return,o,i),b.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,b=M.alternate,b!==null&&(b.lanes|=o),xu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}mn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ps(i,o),c=Gn(c),l=l(c),i.flags|=1,mn(t,i,l,o),i.child;case 14:return l=i.type,c=ei(l,i.pendingProps),c=ei(l.type,c),Lh(t,i,l,c,o);case 15:return bh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Pa(t,i),i.tag=1,Sn(l)?(t=!0,fa(i)):t=!1,ps(i,o),Mh(i,l,c),Nu(i,l,c,o),ku(null,i,l,!0,t,o);case 19:return kh(t,i,o);case 22:return Dh(t,i,o)}throw Error(n(156,i.tag))};function up(t,i){return ee(t,i)}function U_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new U_(t,i,o,l)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function I_(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ce)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function za(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")sc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Ir(o.children,c,h,i);case V:M=8,c|=8;break;case P:return t=Yn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case K:return t=Yn(13,o,i,c),t.elementType=K,t.lanes=h,t;case ae:return t=Yn(19,o,i,c),t.elementType=ae,t.lanes=h,t;case ue:return Ha(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case B:M=9;break e;case ne:M=11;break e;case ce:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function Ha(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=ue,t.lanes=o,t.stateNode={isHidden:!1},t}function oc(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function ac(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function N_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function lc(t,i,o,l,c,h,M,b,F){return t=new N_(t,i,o,b,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(h),t}function F_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function cp(t){if(!t)return Ji;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Sn(o))return Bd(t,o,i)}return i}function fp(t,i,o,l,c,h,M,b,F){return t=lc(o,l,!0,t,c,h,M,b,F),t.context=cp(null),o=t.current,l=gn(),c=or(o),h=Pi(l,c),h.callback=i??null,nr(o,h,c),t.current.lanes=c,xn(t,c,l),Tn(t,l),t}function Va(t,i,o,l){var c=i.current,h=gn(),M=or(c);return o=cp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ii(t,c,M,h),xa(t,c,M)),M}function Ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function uc(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function O_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function cc(t){this._internalRoot=t}Wa.prototype.render=cc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Va(t,i,null,null)},Wa.prototype.unmount=cc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Va(null,t,null,null)}),i[Ti]=null}};function Wa(t){this._internalRoot=t}Wa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ji.length&&i!==0&&i<ji[o].priority;o++);ji.splice(o,0,t),o===0&&Jf(t)}};function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function B_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=Ga(M);h.call(J)}}var M=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=M,t[Ti]=M.current,lo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var b=l;l=function(){var J=Ga(F);b.call(J)}}var F=lc(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=F,t[Ti]=F.current,lo(t.nodeType===8?t.parentNode:t),br(function(){Va(i,F,o,l)}),F}function Ya(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var b=c;c=function(){var F=Ga(M);b.call(F)}}Va(i,M,t,c)}else M=B_(o,i,t,c,l);return Ga(M)}jf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Xt(i.pendingLanes);o!==0&&(Nl(i,o|1),Tn(i,Se()),(vt&6)===0&&(xs=Se()+500,er()))}break;case 13:br(function(){var l=Ri(t,1);if(l!==null){var c=gn();ii(l,t,1,c)}}),uc(t,1)}},Fl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=gn();ii(i,t,134217728,o)}uc(t,134217728)}},$f=function(t){if(t.tag===13){var i=or(t),o=Ri(t,i);if(o!==null){var l=gn();ii(o,t,i,l)}uc(t,i)}},Kf=function(){return At},Zf=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Re=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=ua(l);if(!c)throw Error(n(90));pt(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Dt=nc,Wt=br;var k_={usingClientEntryPoint:!1,Events:[fo,os,ua,Le,rt,nc]},Ao={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||O_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Mt=qa.inject(z_),mt=qa}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(i))throw Error(n(200));return F_(t,i,null,o)},wn.createRoot=function(t,i){if(!fc(t))throw Error(n(299));var o=!1,l="",c=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=lc(t,1,!1,null,null,o,!1,l,c),t[Ti]=i.current,lo(t.nodeType===8?t.parentNode:t),new cc(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return br(t)},wn.hydrate=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!fc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=hp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=fp(i,null,t,1,o??null,c,!1,h,M),t[Ti]=i.current,lo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Wa(i)},wn.render=function(t,i,o){if(!Xa(i))throw Error(n(200));return Ya(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Ya(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},wn.unstable_batchedUpdates=nc,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Xa(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ya(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var yp;function q_(){if(yp)return hc.exports;yp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hc.exports=Y_(),hc.exports}var Sp;function j_(){if(Sp)return ja;Sp=1;var s=q_();return ja.createRoot=s.createRoot,ja.hydrateRoot=s.hydrateRoot,ja}var $_=j_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="170",K_=0,Mp=1,Z_=2,Cm=1,Q_=2,Oi=3,xr=0,Ln=1,Bi=2,_r=0,Fs=1,Ep=2,Tp=3,wp=4,J_=5,Wr=100,ev=101,tv=102,nv=103,iv=104,rv=200,sv=201,ov=202,av=203,jc=204,$c=205,lv=206,uv=207,cv=208,fv=209,dv=210,hv=211,pv=212,mv=213,gv=214,Kc=0,Zc=1,Qc=2,ks=3,Jc=4,ef=5,tf=6,nf=7,Rm=0,_v=1,vv=2,vr=0,xv=1,yv=2,Sv=3,Mv=4,Ev=5,Tv=6,wv=7,Pm=300,zs=301,Hs=302,rf=303,sf=304,Pl=306,of=1e3,Yr=1001,af=1002,ci=1003,Av=1004,$a=1005,vi=1006,gc=1007,qr=1008,Vi=1009,Lm=1010,bm=1011,Oo=1012,Of=1013,jr=1014,ki=1015,Bo=1016,Bf=1017,kf=1018,Vs=1020,Dm=35902,Um=1021,Im=1022,ui=1023,Nm=1024,Fm=1025,Os=1026,Gs=1027,Om=1028,zf=1029,Bm=1030,Hf=1031,Vf=1033,vl=33776,xl=33777,yl=33778,Sl=33779,lf=35840,uf=35841,cf=35842,ff=35843,df=36196,hf=37492,pf=37496,mf=37808,gf=37809,_f=37810,vf=37811,xf=37812,yf=37813,Sf=37814,Mf=37815,Ef=37816,Tf=37817,wf=37818,Af=37819,Cf=37820,Rf=37821,Ml=36492,Pf=36494,Lf=36495,km=36283,bf=36284,Df=36285,Uf=36286,Cv=3200,Rv=3201,zm=0,Pv=1,gr="",jn="srgb",Xs="srgb-linear",Ll="linear",Rt="srgb",Ss=7680,Ap=519,Lv=512,bv=513,Dv=514,Hm=515,Uv=516,Iv=517,Nv=518,Fv=519,Cp=35044,Rp="300 es",zi=2e3,Tl=2001;class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,If=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function Ov(s,e){return(s%e+e)%e}function vc(s,e,n){return(1-n)*s+n*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],y=r[7],x=r[2],S=r[5],E=r[8],w=a[0],v=a[3],g=a[6],U=a[1],D=a[4],R=a[7],q=a[2],O=a[5],N=a[8];return u[0]=f*w+d*U+p*q,u[3]=f*v+d*D+p*O,u[6]=f*g+d*R+p*N,u[1]=m*w+_*U+y*q,u[4]=m*v+_*D+y*O,u[7]=m*g+_*R+y*N,u[2]=x*w+S*U+E*q,u[5]=x*v+S*D+E*O,u[8]=x*g+S*R+E*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=_*f-d*m,x=d*p-_*u,S=m*u-f*p,E=n*y+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(a*m-_*r)*w,e[2]=(d*r-a*f)*w,e[3]=x*w,e[4]=(_*n-a*p)*w,e[5]=(a*u-d*n)*w,e[6]=S*w,e[7]=(r*p-m*n)*w,e[8]=(f*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(xc.makeScale(e,n)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new ot;function Vm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bv(){const s=wl("canvas");return s.style.display="block",s}const Pp={};function Io(s){s in Pp||(Pp[s]=!0,console.warn(s))}function kv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function zv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Rt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Rt&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?Ll:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Lp=[.64,.33,.3,.6,.15,.06],bp=[.2126,.7152,.0722],Dp=[.3127,.329],Up=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ip=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Xs]:{primaries:Lp,whitePoint:Dp,transfer:Ll,toXYZ:Up,fromXYZ:Ip,luminanceCoefficients:bp,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:Lp,whitePoint:Dp,transfer:Rt,toXYZ:Up,fromXYZ:Ip,luminanceCoefficients:bp,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Ms;class Vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=wl("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Hi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class Gm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(yc(a[f].image)):u.push(yc(a[f]))}else u=yc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class bn extends Ys{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=Yr,a=Yr,u=vi,f=qr,d=ui,p=Vi,m=bn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=ko(),this.name="",this.source=new Gm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case of:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case of:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Pm;bn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],y=p[8],x=p[1],S=p[5],E=p[9],w=p[2],v=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(y-w)<.01&&Math.abs(E-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(y+w)<.1&&Math.abs(E+v)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,R=(S+1)/2,q=(g+1)/2,O=(_+x)/4,N=(y+w)/4,V=(E+v)/4;return D>R&&D>q?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=O/r,u=N/r):R>q?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=O/a,u=V/a):q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(q),r=N/u,a=V/u),this.set(r,a,u,n),this}let U=Math.sqrt((v-E)*(v-E)+(y-w)*(y-w)+(x-_)*(x-_));return Math.abs(U)<.001&&(U=1),this.x=(v-E)/U,this.y=(y-w)/U,this.z=(x-_)/U,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends Ys{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Gm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Xv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Wm extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends bn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];const x=u[f+0],S=u[f+1],E=u[f+2],w=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(y!==w||p!==x||m!==S||_!==E){let v=1-d;const g=p*x+m*S+_*E+y*w,U=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const q=Math.sqrt(D),O=Math.atan2(q,g*U);v=Math.sin(v*O)/q,d=Math.sin(d*O)/q}const R=d*U;if(p=p*v+x*R,m=m*v+S*R,_=_*v+E*R,y=y*v+w*R,v===1-d){const q=1/Math.sqrt(p*p+m*m+_*_+y*y);p*=q,m*=q,_*=q,y*=q}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],y=u[f],x=u[f+1],S=u[f+2],E=u[f+3];return e[n]=d*E+_*y+p*S-m*x,e[n+1]=p*E+_*x+m*y-d*S,e[n+2]=m*E+_*S+d*x-p*y,e[n+3]=_*E-d*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),y=d(u/2),x=p(r/2),S=p(a/2),E=p(u/2);switch(f){case"XYZ":this._x=x*_*y+m*S*E,this._y=m*S*y-x*_*E,this._z=m*_*E+x*S*y,this._w=m*_*y-x*S*E;break;case"YXZ":this._x=x*_*y+m*S*E,this._y=m*S*y-x*_*E,this._z=m*_*E-x*S*y,this._w=m*_*y+x*S*E;break;case"ZXY":this._x=x*_*y-m*S*E,this._y=m*S*y+x*_*E,this._z=m*_*E+x*S*y,this._w=m*_*y-x*S*E;break;case"ZYX":this._x=x*_*y-m*S*E,this._y=m*S*y+x*_*E,this._z=m*_*E-x*S*y,this._w=m*_*y+x*S*E;break;case"YZX":this._x=x*_*y+m*S*E,this._y=m*S*y+x*_*E,this._z=m*_*E-x*S*y,this._w=m*_*y-x*S*E;break;case"XZY":this._x=x*_*y-m*S*E,this._y=m*S*y-x*_*E,this._z=m*_*E+x*S*y,this._w=m*_*y+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],y=n[10],x=r+d+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),y=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),y=2*(u*r-f*n);return this.x=n+p*m+f*y-d*_,this.y=r+p*_+d*m-u*y,this.z=a+p*y+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new $,Np=new zo;class Ho{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ri):ri.fromBufferAttribute(u,f),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ka.copy(r.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Za.subVectors(this.max,Ro),Es.subVectors(e.a,Ro),Ts.subVectors(e.b,Ro),ws.subVectors(e.c,Ro),cr.subVectors(Ts,Es),fr.subVectors(ws,Ts),Nr.subVectors(Es,ws);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Nr.z,Nr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Nr.z,0,-Nr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Nr.y,Nr.x,0];return!Mc(n,Es,Ts,ws,Za)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,Es,Ts,ws,Za))?!1:(Qa.crossVectors(cr,fr),n=[Qa.x,Qa.y,Qa.z],Mc(n,Es,Ts,ws,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new $,new $,new $,new $,new $,new $,new $,new $],ri=new $,Ka=new Ho,Es=new $,Ts=new $,ws=new $,cr=new $,fr=new $,Nr=new $,Ro=new $,Za=new $,Qa=new $,Fr=new $;function Mc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const qv=new Ho,Po=new $,Ec=new $;class bl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):qv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Ec)),this.expandByPoint(Po.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new $,Tc=new $,Ja=new $,dr=new $,wc=new $,el=new $,Ac=new $;class Xm{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Tc.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Tc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ja),d=dr.dot(this.direction),p=-dr.dot(Ja),m=dr.lengthSq(),_=Math.abs(1-f*f);let y,x,S,E;if(_>0)if(y=f*p-d,x=f*d-p,E=u*_,y>=0)if(x>=-E)if(x<=E){const w=1/_;y*=w,x*=w,S=y*(y+f*x+2*d)+x*(f*y+x+2*p)+m}else x=u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;else x<=-E?(y=Math.max(0,-(-f*u+d)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=E?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(f*u+d)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=f>0?-u:u,y=Math.max(0,-(f*x+d)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Tc).addScaledVector(Ja,x),S}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),y>=0?(d=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,u){wc.subVectors(n,e),el.subVectors(r,e),Ac.crossVectors(wc,el);let f=this.direction.dot(Ac),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(el.crossVectors(dr,el));if(p<0)return null;const m=d*this.direction.dot(wc.cross(dr));if(m<0||p+m>f)return null;const _=-d*dr.dot(Ac);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,u,f,d,p,m,_,y,x,S,E,w,v){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,y,x,S,E,w,v)}set(e,n,r,a,u,f,d,p,m,_,y,x,S,E,w,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=y,g[14]=x,g[3]=S,g[7]=E,g[11]=w,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),f=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*y,E=d*_,w=d*y;n[0]=p*_,n[4]=-p*y,n[8]=m,n[1]=S+E*m,n[5]=x-w*m,n[9]=-d*p,n[2]=w-x*m,n[6]=E+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*y,E=m*_,w=m*y;n[0]=x+w*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*y,n[5]=f*_,n[9]=-d,n[2]=S*d-E,n[6]=w+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*y,E=m*_,w=m*y;n[0]=x-w*d,n[4]=-f*y,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*_,n[9]=w-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*y,E=d*_,w=d*y;n[0]=p*_,n[4]=E*m-S,n[8]=x*m+w,n[1]=p*y,n[5]=w*m+x,n[9]=S*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,E=d*p,w=d*m;n[0]=p*_,n[4]=w-x*y,n[8]=E*y+S,n[1]=y,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*y+E,n[10]=x-w*y}else if(e.order==="XZY"){const x=f*p,S=f*m,E=d*p,w=d*m;n[0]=p*_,n[4]=-y,n[8]=m*_,n[1]=x*y+w,n[5]=f*_,n[9]=S*y-E,n[2]=E*y-S,n[6]=d*_,n[10]=w*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,$v)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(r,On),hr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(r,On)),hr.normalize(),tl.crossVectors(On,hr),a[0]=hr.x,a[4]=tl.x,a[8]=On.x,a[1]=hr.y,a[5]=tl.y,a[9]=On.y,a[2]=hr.z,a[6]=tl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],y=r[5],x=r[9],S=r[13],E=r[2],w=r[6],v=r[10],g=r[14],U=r[3],D=r[7],R=r[11],q=r[15],O=a[0],N=a[4],V=a[8],P=a[12],C=a[1],B=a[5],ne=a[9],K=a[13],ae=a[2],ce=a[6],oe=a[10],ue=a[14],k=a[3],le=a[7],se=a[11],I=a[15];return u[0]=f*O+d*C+p*ae+m*k,u[4]=f*N+d*B+p*ce+m*le,u[8]=f*V+d*ne+p*oe+m*se,u[12]=f*P+d*K+p*ue+m*I,u[1]=_*O+y*C+x*ae+S*k,u[5]=_*N+y*B+x*ce+S*le,u[9]=_*V+y*ne+x*oe+S*se,u[13]=_*P+y*K+x*ue+S*I,u[2]=E*O+w*C+v*ae+g*k,u[6]=E*N+w*B+v*ce+g*le,u[10]=E*V+w*ne+v*oe+g*se,u[14]=E*P+w*K+v*ue+g*I,u[3]=U*O+D*C+R*ae+q*k,u[7]=U*N+D*B+R*ce+q*le,u[11]=U*V+D*ne+R*oe+q*se,u[15]=U*P+D*K+R*ue+q*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],y=e[6],x=e[10],S=e[14],E=e[3],w=e[7],v=e[11],g=e[15];return E*(+u*p*y-a*m*y-u*d*x+r*m*x+a*d*S-r*p*S)+w*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+v*(+n*m*y-n*d*S-u*f*y+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*y+n*d*x+a*f*y-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],y=e[9],x=e[10],S=e[11],E=e[12],w=e[13],v=e[14],g=e[15],U=y*v*m-w*x*m+w*p*S-d*v*S-y*p*g+d*x*g,D=E*x*m-_*v*m-E*p*S+f*v*S+_*p*g-f*x*g,R=_*w*m-E*y*m+E*d*S-f*w*S-_*d*g+f*y*g,q=E*y*p-_*w*p-E*d*x+f*w*x+_*d*v-f*y*v,O=n*U+r*D+a*R+u*q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=U*N,e[1]=(w*x*u-y*v*u-w*a*S+r*v*S+y*a*g-r*x*g)*N,e[2]=(d*v*u-w*p*u+w*a*m-r*v*m-d*a*g+r*p*g)*N,e[3]=(y*p*u-d*x*u-y*a*m+r*x*m+d*a*S-r*p*S)*N,e[4]=D*N,e[5]=(_*v*u-E*x*u+E*a*S-n*v*S-_*a*g+n*x*g)*N,e[6]=(E*p*u-f*v*u-E*a*m+n*v*m+f*a*g-n*p*g)*N,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*N,e[8]=R*N,e[9]=(E*y*u-_*w*u-E*r*S+n*w*S+_*r*g-n*y*g)*N,e[10]=(f*w*u-E*d*u+E*r*m-n*w*m-f*r*g+n*d*g)*N,e[11]=(_*d*u-f*y*u-_*r*m+n*y*m+f*r*S-n*d*S)*N,e[12]=q*N,e[13]=(_*w*a-E*y*a+E*r*x-n*w*x-_*r*v+n*y*v)*N,e[14]=(E*d*a-f*w*a-E*r*p+n*w*p+f*r*v-n*d*v)*N,e[15]=(f*y*a-_*d*a+_*r*p-n*y*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,y=d+d,x=u*m,S=u*_,E=u*y,w=f*_,v=f*y,g=d*y,U=p*m,D=p*_,R=p*y,q=r.x,O=r.y,N=r.z;return a[0]=(1-(w+g))*q,a[1]=(S+R)*q,a[2]=(E-D)*q,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(x+g))*O,a[6]=(v+U)*O,a[7]=0,a[8]=(E+D)*N,a[9]=(v-U)*N,a[10]=(1-(x+w))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=As.set(a[0],a[1],a[2]).length();const f=As.set(a[4],a[5],a[6]).length(),d=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,_=1/f,y=1/d;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=y,si.elements[9]*=y,si.elements[10]*=y,n.setFromRotationMatrix(si),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=zi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(d===zi)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Tl)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=zi){const p=this.elements,m=1/(n-e),_=1/(r-a),y=1/(f-u),x=(n+e)*m,S=(r+a)*_;let E,w;if(d===zi)E=(f+u)*y,w=-2*y;else if(d===Tl)E=u*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new $,si=new Bt,jv=new $(0,0,0),$v=new $(1,1,1),hr=new $,tl=new $,On=new $,Fp=new Bt,Op=new zo;class yi{constructor(e=0,n=0,r=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Cn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const Bp=new $,Cs=new zo,Ii=new Bt,nl=new $,Lo=new $,Zv=new $,Qv=new zo,kp=new $(1,0,0),zp=new $(0,1,0),Hp=new $(0,0,1),Vp={type:"added"},Jv={type:"removed"},Rs={type:"childadded",child:null},Cc={type:"childremoved",child:null};class en extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new $,n=new yi,r=new zo,a=new $(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,n){return Bp.copy(e).applyQuaternion(this.quaternion),this.position.add(Bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?nl.copy(e):nl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Lo,nl,this.up):Ii.lookAt(nl,Lo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jv),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),y=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}en.DEFAULT_UP=new $(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new $,Ni=new $,Rc=new $,Fi=new $,Ps=new $,Ls=new $,Gp=new $,Pc=new $,Lc=new $,bc=new $,Dc=new zt,Uc=new zt,Ic=new zt;class ai{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){oi.subVectors(a,n),Ni.subVectors(r,n),Rc.subVectors(e,n);const f=oi.dot(oi),d=oi.dot(Ni),p=oi.dot(Rc),m=Ni.dot(Ni),_=Ni.dot(Rc),y=f*m-d*d;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-d*_)*x,E=(f*_-d*p)*x;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Fi.x),p.addScaledVector(f,Fi.y),p.addScaledVector(d,Fi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Dc.setScalar(0),Uc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,r),Ic.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Dc,u.x),f.addScaledVector(Uc,u.y),f.addScaledVector(Ic,u.z),f}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ni.subVectors(e,n),oi.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ps.subVectors(a,r),Ls.subVectors(u,r),Pc.subVectors(e,r);const p=Ps.dot(Pc),m=Ls.dot(Pc);if(p<=0&&m<=0)return n.copy(r);Lc.subVectors(e,a);const _=Ps.dot(Lc),y=Ls.dot(Lc);if(_>=0&&y<=_)return n.copy(a);const x=p*y-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Ps,f);bc.subVectors(e,u);const S=Ps.dot(bc),E=Ls.dot(bc);if(E>=0&&S<=E)return n.copy(u);const w=S*m-p*E;if(w<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Ls,d);const v=_*E-S*y;if(v<=0&&y-_>=0&&S-E>=0)return Gp.subVectors(u,a),d=(y-_)/(y-_+(S-E)),n.copy(a).addScaledVector(Gp,d);const g=1/(v+w+x);return f=w*g,d=x*g,n.copy(r).addScaledVector(Ps,f).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Nc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class ht{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=Ov(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Nc(f,u,e+1/3),this.g=Nc(f,u,e),this.b=Nc(f,u,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return xt.fromWorkingColorSpace(fn.copy(this),e),Math.round(Cn(fn.r*255,0,255))*65536+Math.round(Cn(fn.g*255,0,255))*256+Math.round(Cn(fn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,u=fn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const y=f-d;switch(m=_<=.5?y/(f+d):y/(2-f-d),f){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=jn){xt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(il);const r=vc(pr.h,il.h,n),a=vc(pr.s,il.s,n),u=vc(pr.l,il.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ht;ht.NAMES=qm;let e0=0;class qs extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ko(),this.name="",this.blending=Fs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=$c,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jc&&(r.blendSrc=this.blendSrc),this.blendDst!==$c&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jm extends qs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new $,rl=new Et;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Cp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class $m extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Km extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Dn extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let t0=0;const qn=new Bt,Fc=new en,bs=new $,Bn=new Ho,bo=new Ho,Jt=new $;class Pn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?Km:$m)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Dn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Bn.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(Jt.addVectors(Bn.min,bo.min),Bn.expandByPoint(Jt),Jt.addVectors(Bn.max,bo.max),Bn.expandByPoint(Jt)):(Bn.expandByPoint(bo.min),Bn.expandByPoint(bo.max))}Bn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)Jt.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(Jt));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Jt.fromBufferAttribute(d,m),p&&(bs.fromBufferAttribute(e,m),Jt.add(bs)),a=Math.max(a,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new $,p[V]=new $;const m=new $,_=new $,y=new $,x=new Et,S=new Et,E=new Et,w=new $,v=new $;function g(V,P,C){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),y.fromBufferAttribute(r,C),x.fromBufferAttribute(u,V),S.fromBufferAttribute(u,P),E.fromBufferAttribute(u,C),_.sub(m),y.sub(m),S.sub(x),E.sub(x);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(y,-S.y).multiplyScalar(B),v.copy(y).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(B),d[V].add(w),d[P].add(w),d[C].add(w),p[V].add(v),p[P].add(v),p[C].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let V=0,P=U.length;V<P;++V){const C=U[V],B=C.start,ne=C.count;for(let K=B,ae=B+ne;K<ae;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new $,R=new $,q=new $,O=new $;function N(V){q.fromBufferAttribute(a,V),O.copy(q);const P=d[V];D.copy(P),D.sub(q.multiplyScalar(q.dot(P))).normalize(),R.crossVectors(O,P);const B=R.dot(p[V])<0?-1:1;f.setXYZW(V,D.x,D.y,D.z,B)}for(let V=0,P=U.length;V<P;++V){const C=U[V],B=C.start,ne=C.count;for(let K=B,ae=B+ne;K<ae;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new $,u=new $,f=new $,d=new $,p=new $,m=new $,_=new $,y=new $;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),w=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,v),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),y.subVectors(a,u),_.cross(y),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,y=d.normalized,x=new m.constructor(p.length*_);let S=0,E=0;for(let w=0,v=p.length;w<v;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*_;for(let g=0;g<_;g++)x[E++]=m[S++]}return new xi(x,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,y=m.length;_<y;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],y=u[m];for(let x=0,S=y.length;x<S;x++)_.push(y[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new Bt,Or=new Xm,sl=new bl,Xp=new $,ol=new $,al=new $,ll=new $,Oc=new $,ul=new $,Yp=new $,cl=new $;class Rn extends en{constructor(e=new Pn,n=new jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ul.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],y=u[p];_!==0&&(Oc.fromBufferAttribute(y,e),f?ul.addScaledVector(Oc,_):ul.addScaledVector(Oc.sub(n),_))}n.add(ul)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sl.copy(r.boundingSphere),sl.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(sl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(sl,Xp)===null||Or.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(Wp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Wp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=x.length;E<w;E++){const v=x[E],g=f[v.materialIndex],U=Math.max(v.start,S.start),D=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let R=U,q=D;R<q;R+=3){const O=d.getX(R),N=d.getX(R+1),V=d.getX(R+2);a=fl(this,g,e,r,m,_,y,O,N,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let v=E,g=w;v<g;v+=3){const U=d.getX(v),D=d.getX(v+1),R=d.getX(v+2);a=fl(this,f,e,r,m,_,y,U,D,R),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,w=x.length;E<w;E++){const v=x[E],g=f[v.materialIndex],U=Math.max(v.start,S.start),D=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let R=U,q=D;R<q;R+=3){const O=R,N=R+1,V=R+2;a=fl(this,g,e,r,m,_,y,O,N,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let v=E,g=w;v<g;v+=3){const U=v,D=v+1,R=v+2;a=fl(this,f,e,r,m,_,y,U,D,R),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function n0(s,e,n,r,a,u,f,d){let p;if(e.side===Ln?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===xr,d),p===null)return null;cl.copy(d),cl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(cl);return m<n.near||m>n.far?null:{distance:m,point:cl.clone(),object:s}}function fl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ol),s.getVertexPosition(p,al),s.getVertexPosition(m,ll);const _=n0(s,e,n,r,ol,al,ll,Yp);if(_){const y=new $;ai.getBarycoord(Yp,ol,al,ll,y),a&&(_.uv=ai.getInterpolatedAttribute(a,d,p,m,y,new Et)),u&&(_.uv1=ai.getInterpolatedAttribute(u,d,p,m,y,new Et)),f&&(_.normal=ai.getInterpolatedAttribute(f,d,p,m,y,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new $,materialIndex:0};ai.getNormal(ol,al,ll,x.normal),_.face=x,_.barycoord=y}return _}class Kr extends Pn{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],y=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(y,2));function E(w,v,g,U,D,R,q,O,N,V,P){const C=R/N,B=q/V,ne=R/2,K=q/2,ae=O/2,ce=N+1,oe=V+1;let ue=0,k=0;const le=new $;for(let se=0;se<oe;se++){const I=se*B-K;for(let ie=0;ie<ce;ie++){const Ue=ie*C-ne;le[w]=Ue*U,le[v]=I*D,le[g]=ae,m.push(le.x,le.y,le.z),le[w]=0,le[v]=0,le[g]=O>0?1:-1,_.push(le.x,le.y,le.z),y.push(ie/N),y.push(1-se/V),ue+=1}}for(let se=0;se<V;se++)for(let I=0;I<N;I++){const ie=x+I+ce*se,Ue=x+I+ce*(se+1),Q=x+(I+1)+ce*(se+1),fe=x+(I+1)+ce*se;p.push(ie,Ue,fe),p.push(Ue,Q,fe),k+=6}d.addGroup(S,k,P),S+=k,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=Ws(s[n]);for(const a in r)e[a]=r[a]}return e}function i0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Zm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const r0={clone:Ws,merge:_n};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends qs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Qm extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new $,qp=new Et,jp=new Et;class $n extends Qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=If*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return If*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,jp),n.subVectors(jp,qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Us=1;class a0 extends en{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Ds,Us,e,n);a.layers=this.layers,this.add(a);const u=new $n(Ds,Us,e,n);u.layers=this.layers,this.add(u);const f=new $n(Ds,Us,e,n);f.layers=this.layers,this.add(f);const d=new $n(Ds,Us,e,n);d.layers=this.layers,this.add(d);const p=new $n(Ds,Us,e,n);p.layers=this.layers,this.add(p);const m=new $n(Ds,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Tl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(y,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Jm extends bn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Kr(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:_r});u.uniforms.tEquirect.value=n;const f=new Rn(a,u),d=n.minFilter;return n.minFilter===qr&&(n.minFilter=vi),new a0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Bc=new $,u0=new $,c0=new ot;class Vr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bc.subVectors(r,n).cross(u0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||c0.getNormalMatrix(e),a=this.coplanarPoint(Bc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new bl,dl=new $;class Gf{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,f=new Vr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],y=a[6],x=a[7],S=a[8],E=a[9],w=a[10],v=a[11],g=a[12],U=a[13],D=a[14],R=a[15];if(r[0].setComponents(p-u,x-m,v-S,R-g).normalize(),r[1].setComponents(p+u,x+m,v+S,R+g).normalize(),r[2].setComponents(p+f,x+_,v+E,R+U).normalize(),r[3].setComponents(p-f,x-_,v-E,R-U).normalize(),r[4].setComponents(p-d,x-y,v-w,R-D).normalize(),n===zi)r[5].setComponents(p+d,x+y,v+w,R+D).normalize();else if(n===Tl)r[5].setComponents(d,y,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function f0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,p,m){const _=p.array,y=p.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,_);else{y.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<y.length;S++){const E=y[x],w=y[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,y[x]=w)}y.length=x+1;for(let S=0,E=y.length;S<E;S++){const w=y[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Vo extends Pn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,y=e/d,x=n/p,S=[],E=[],w=[],v=[];for(let g=0;g<_;g++){const U=g*x-f;for(let D=0;D<m;D++){const R=D*y-u;E.push(R,-U,0),w.push(0,0,1),v.push(D/d),v.push(1-g/p)}}for(let g=0;g<p;g++)for(let U=0;U<d;U++){const D=U+m*g,R=U+m*(g+1),q=U+1+m*(g+1),O=U+1+m*g;S.push(D,R,O),S.push(R,q,O)}this.setIndex(S),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(w,3)),this.setAttribute("uv",new Dn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ix=`uniform bool receiveShadow;
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
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,cx=`struct PhysicalMaterial {
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
}`,fx=`
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dy=`uniform sampler2D t2D;
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
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
}`,vy=`#if DEPTH_PACKING == 3200
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
}`,xy=`#define DISTANCE
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
}`,yy=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Cy=`#define LAMBERT
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
}`,Ry=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Uy=`#define PHONG
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
}`,Iy=`#define PHONG
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
}`,Ny=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
}`,Oy=`#define TOON
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
}`,By=`#define TOON
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
}`,ky=`uniform float size;
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
}`,zy=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Vy=`uniform vec3 color;
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
}`,Gy=`uniform float rotation;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:d0,alphahash_pars_fragment:h0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:x0,batching_pars_vertex:y0,batching_vertex:S0,begin_vertex:M0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:w0,bumpmap_pars_fragment:A0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:b0,color_pars_fragment:D0,color_pars_vertex:U0,color_vertex:I0,common:N0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:k0,emissivemap_fragment:z0,emissivemap_pars_fragment:H0,colorspace_fragment:V0,colorspace_pars_fragment:G0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:Y0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:rx,envmap_vertex:j0,fog_vertex:$0,fog_pars_vertex:K0,fog_fragment:Z0,fog_pars_fragment:Q0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:ex,lights_lambert_fragment:tx,lights_lambert_pars_fragment:nx,lights_pars_begin:ix,lights_toon_fragment:sx,lights_toon_pars_fragment:ox,lights_phong_fragment:ax,lights_phong_pars_fragment:lx,lights_physical_fragment:ux,lights_physical_pars_fragment:cx,lights_fragment_begin:fx,lights_fragment_maps:dx,lights_fragment_end:hx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:xx,map_particle_fragment:yx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Tx,morphcolor_vertex:wx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Rx,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:bx,normal_pars_vertex:Dx,normal_vertex:Ux,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Bx,opaque_fragment:kx,packing:zx,premultiplied_alpha_fragment:Hx,project_vertex:Vx,dithering_fragment:Gx,dithering_pars_fragment:Wx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:jx,shadowmap_vertex:$x,shadowmask_pars_fragment:Kx,skinbase_vertex:Zx,skinning_pars_vertex:Qx,skinning_vertex:Jx,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:sy,transmission_pars_fragment:oy,uv_pars_fragment:ay,uv_pars_vertex:ly,uv_vertex:uy,worldpos_vertex:cy,background_vert:fy,background_frag:dy,backgroundCube_vert:hy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:vy,distanceRGBA_vert:xy,distanceRGBA_frag:yy,equirect_vert:Sy,equirect_frag:My,linedashed_vert:Ey,linedashed_frag:Ty,meshbasic_vert:wy,meshbasic_frag:Ay,meshlambert_vert:Cy,meshlambert_frag:Ry,meshmatcap_vert:Py,meshmatcap_frag:Ly,meshnormal_vert:by,meshnormal_frag:Dy,meshphong_vert:Uy,meshphong_frag:Iy,meshphysical_vert:Ny,meshphysical_frag:Fy,meshtoon_vert:Oy,meshtoon_frag:By,points_vert:ky,points_frag:zy,shadow_vert:Hy,shadow_frag:Vy,sprite_vert:Gy,sprite_frag:Wy},Pe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:_n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:_n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:_n([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:_n([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:_n([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:_n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:_n([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:_n([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:_n([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:_n([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:_n([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:_n([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:_n([Pe.lights,Pe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const hl={r:0,b:0,g:0},kr=new yi,Xy=new Bt;function Yy(s,e,n,r,a,u,f){const d=new ht(0);let p=u===!0?0:1,m,_,y=null,x=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:e).get(D)),D}function w(U){let D=!1;const R=E(U);R===null?g(d,p):R&&R.isColor&&(g(R,1),D=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,f):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(U,D){const R=E(D);R&&(R.isCubeTexture||R.mapping===Pl)?(_===void 0&&(_=new Rn(new Kr(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Ws(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(q,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),kr.copy(D.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(kr)),_.material.toneMapped=xt.getTransfer(R.colorSpace)!==Rt,(y!==R||x!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,y=R,x=R.version,S=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Rn(new Vo(2,2),new yr({name:"BackgroundMaterial",uniforms:Ws(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=xt.getTransfer(R.colorSpace)!==Rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||x!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=R,x=R.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function g(U,D){U.getRGB(hl,Zm(s)),r.buffers.color.setClear(hl.r,hl.g,hl.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,g(d,p)},render:w,addToRenderList:v}}function qy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(C,B,ne,K,ae){let ce=!1;const oe=y(K,ne,B);u!==oe&&(u=oe,m(u.object)),ce=S(C,K,ne,ae),ce&&E(C,K,ne,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,R(C,B,ne,K),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function y(C,B,ne){const K=ne.wireframe===!0;let ae=r[C.id];ae===void 0&&(ae={},r[C.id]=ae);let ce=ae[B.id];ce===void 0&&(ce={},ae[B.id]=ce);let oe=ce[K];return oe===void 0&&(oe=x(p()),ce[K]=oe),oe}function x(C){const B=[],ne=[],K=[];for(let ae=0;ae<n;ae++)B[ae]=0,ne[ae]=0,K[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ne,attributeDivisors:K,object:C,attributes:{},index:null}}function S(C,B,ne,K){const ae=u.attributes,ce=B.attributes;let oe=0;const ue=ne.getAttributes();for(const k in ue)if(ue[k].location>=0){const se=ae[k];let I=ce[k];if(I===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;oe++}return u.attributesNum!==oe||u.index!==K}function E(C,B,ne,K){const ae={},ce=B.attributes;let oe=0;const ue=ne.getAttributes();for(const k in ue)if(ue[k].location>=0){let se=ce[k];se===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),ae[k]=I,oe++}u.attributes=ae,u.attributesNum=oe,u.index=K}function w(){const C=u.newAttributes;for(let B=0,ne=C.length;B<ne;B++)C[B]=0}function v(C){g(C,0)}function g(C,B){const ne=u.newAttributes,K=u.enabledAttributes,ae=u.attributeDivisors;ne[C]=1,K[C]===0&&(s.enableVertexAttribArray(C),K[C]=1),ae[C]!==B&&(s.vertexAttribDivisor(C,B),ae[C]=B)}function U(){const C=u.newAttributes,B=u.enabledAttributes;for(let ne=0,K=B.length;ne<K;ne++)B[ne]!==C[ne]&&(s.disableVertexAttribArray(ne),B[ne]=0)}function D(C,B,ne,K,ae,ce,oe){oe===!0?s.vertexAttribIPointer(C,B,ne,ae,ce):s.vertexAttribPointer(C,B,ne,K,ae,ce)}function R(C,B,ne,K){w();const ae=K.attributes,ce=ne.getAttributes(),oe=B.defaultAttributeValues;for(const ue in ce){const k=ce[ue];if(k.location>=0){let le=ae[ue];if(le===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,I=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ue=ie.buffer,Q=ie.type,fe=ie.bytesPerElement,Me=Q===s.INT||Q===s.UNSIGNED_INT||le.gpuType===Of;if(le.isInterleavedBufferAttribute){const ve=le.data,Ae=ve.stride,Ie=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,ve.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)v(k.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<k.locationSize;Ze++)D(k.location+Ze,I/k.locationSize,Q,se,Ae*fe,(Ie+I/k.locationSize*Ze)*fe,Me)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,le.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<k.locationSize;ve++)v(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<k.locationSize;ve++)D(k.location+ve,I/k.locationSize,Q,se,I*fe,I/k.locationSize*ve*fe,Me)}}else if(oe!==void 0){const se=oe[ue];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(k.location,se);break;case 3:s.vertexAttrib3fv(k.location,se);break;case 4:s.vertexAttrib4fv(k.location,se);break;default:s.vertexAttrib1fv(k.location,se)}}}}U()}function q(){V();for(const C in r){const B=r[C];for(const ne in B){const K=B[ne];for(const ae in K)_(K[ae].object),delete K[ae];delete B[ne]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const ne in B){const K=B[ne];for(const ae in K)_(K[ae].object),delete K[ae];delete B[ne]}delete r[C.id]}function N(C){for(const B in r){const ne=r[B];if(ne[C.id]===void 0)continue;const K=ne[C.id];for(const ae in K)_(K[ae].object),delete K[ae];delete ne[C.id]}}function V(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:q,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:v,disableUnusedAttributes:U}}function jy(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,y){y!==0&&(s.drawArraysInstanced(r,m,_,y),n.update(_,r,y))}function d(m,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,y);let S=0;for(let E=0;E<y;E++)S+=_[E];n.update(S,r,1)}function p(m,_,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,y);let E=0;for(let w=0;w<y;w++)E+=_[w]*x[w];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function $y(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ui&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const V=N===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Vi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ki&&!V)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:q,maxSamples:O}}function Ky(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Vr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=_(y,x,0)},this.setState=function(y,x,S){const E=y.clippingPlanes,w=y.clipIntersection,v=y.clipShadows,g=s.get(y);if(!a||E===null||E.length===0||u&&!v)u?_(null):m();else{const U=u?0:r,D=U*4;let R=g.clippingState||null;p.value=R,R=_(E,x,D,S);for(let q=0;q!==D;++q)R[q]=n[q];g.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,x,S,E){const w=y!==null?y.length:0;let v=null;if(w!==0){if(v=p.value,E!==!0||v===null){const g=S+w*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(v===null||v.length<g)&&(v=new Float32Array(g));for(let D=0,R=S;D!==w;++D,R+=4)f.copy(y[D]).applyMatrix4(U,d),f.normal.toArray(v,R),v[R+3]=f.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function Zy(s){let e=new WeakMap;function n(f,d){return d===rf?f.mapping=zs:d===sf&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===rf||d===sf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new l0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class tg extends Qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,$p=[.125,.215,.35,.446,.526,.582],Xr=20,kc=new tg,Kp=new ht;let zc=null,Hc=0,Vc=0,Gc=!1;const Gr=(1+Math.sqrt(5))/2,Is=1/Gr,Zp=[new $(-Gr,Is,0),new $(Gr,Is,0),new $(-Is,0,Gr),new $(Is,0,Gr),new $(0,Gr,-Is),new $(0,Gr,Is),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Hc,Vc),this._renderer.xr.enabled=Gc,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Bo,format:ui,colorSpace:Xs,depthBuffer:!1},a=Jp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qy(u)),this._blurMaterial=Jy(u,e,n)}return a}_compileMaterial(e){const n=new Rn(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,r,a){const d=new $n(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(Kp),_.toneMapping=vr,_.autoClear=!1;const S=new jm({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new Rn(new Kr,S);let w=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,w=!0):(S.color.copy(Kp),w=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):U===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;pl(a,U*D,g>2?D:0,D,D),_.setRenderTarget(a),w&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===zs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Rn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Zp[(a-u-1)%Zp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new Rn(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),w=u/E,v=isFinite(u)?1+Math.floor(_*w):Xr;v>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xr}`);const g=[];let U=0;for(let N=0;N<Xr;++N){const V=N/w,P=Math.exp(-V*V/2);g.push(P),N===0?U+=P:N<v&&(U+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/U;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const R=this._sizeLods[a],q=3*R*(a>D-Ns?a-D+Ns:0),O=4*(this._cubeSize-R);pl(n,q,O,3*R,2*R),p.setRenderTarget(n),p.render(y,kc)}}function Qy(s){const e=[],n=[],r=[];let a=s;const u=s-Ns+1+$p.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Ns?p=$p[f-s+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,y=1+m,x=[_,_,y,_,y,y,_,_,y,y,_,y],S=6,E=6,w=3,v=2,g=1,U=new Float32Array(w*E*S),D=new Float32Array(v*E*S),R=new Float32Array(g*E*S);for(let O=0;O<S;O++){const N=O%3*2/3-1,V=O>2?0:-1,P=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];U.set(P,w*E*O),D.set(x,v*E*O);const C=[O,O,O,O,O,O];R.set(C,g*E*O)}const q=new Pn;q.setAttribute("position",new xi(U,w)),q.setAttribute("uv",new xi(D,v)),q.setAttribute("faceIndex",new xi(R,g)),e.push(q),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Jp(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Pl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Jy(s,e,n){const r=new Float32Array(Xr),a=new $(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function em(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function tm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function eS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===rf||p===sf,_=p===zs||p===Hs;if(m||_){let y=e.get(d);const x=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Qp(s)),y=m?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new Qp(s)),y=m?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",u),y.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function tS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Io("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function nS(s,e,n,r){const a={},u=new WeakMap;function f(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const w=x.morphAttributes[E];for(let v=0,g=w.length;v<g;v++)e.remove(w[v])}x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(y,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const E in S){const w=S[E];for(let v=0,g=w.length;v<g;v++)e.update(w[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,E=y.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let D=0,R=U.length;D<R;D+=3){const q=U[D+0],O=U[D+1],N=U[D+2];x.push(q,O,O,N,N,q)}}else if(E!==void 0){const U=E.array;w=E.version;for(let D=0,R=U.length/3-1;D<R;D+=3){const q=D+0,O=D+1,N=D+2;x.push(q,O,O,N,N,q)}}else return;const v=new(Vm(x)?Km:$m)(x,1);v.version=w;const g=u.get(y);g&&e.remove(g),u.set(y,v)}function _(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:d,update:p,getWireframeAttribute:_}}function iS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,x*f,E),n.update(S,r,E))}function _(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,E);let v=0;for(let g=0;g<E;g++)v+=S[g];n.update(v,r,1)}function y(x,S,E,w){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],w[g]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,w,0,E);let g=0;for(let U=0;U<E;U++)g+=S[U]*w[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function rS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function sS(s,e,n){const r=new WeakMap,a=new zt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let C=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),v===!0&&(R=3);let q=d.attributes.position.count*R,O=1;q>e.maxTextureSize&&(O=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const N=new Float32Array(q*O*4*y),V=new Wm(N,q,O,y);V.type=ki,V.needsUpdate=!0;const P=R*4;for(let B=0;B<y;B++){const ne=g[B],K=U[B],ae=D[B],ce=q*O*4*B;for(let oe=0;oe<ne.count;oe++){const ue=oe*P;E===!0&&(a.fromBufferAttribute(ne,oe),N[ce+ue+0]=a.x,N[ce+ue+1]=a.y,N[ce+ue+2]=a.z,N[ce+ue+3]=0),w===!0&&(a.fromBufferAttribute(K,oe),N[ce+ue+4]=a.x,N[ce+ue+5]=a.y,N[ce+ue+6]=a.z,N[ce+ue+7]=0),v===!0&&(a.fromBufferAttribute(ae,oe),N[ce+ue+8]=a.x,N[ce+ue+9]=a.y,N[ce+ue+10]=a.z,N[ce+ue+11]=ae.itemSize===4?a.w:1)}}x={count:y,texture:V,size:new Et(q,O)},r.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let v=0;v<m.length;v++)E+=m[v];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function oS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,y=e.get(p,_);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class ng extends bn{constructor(e,n,r,a,u,f,d,p,m,_=Os){if(_!==Os&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Os&&(r=jr),r===void 0&&_===Gs&&(r=Vs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ig=new bn,nm=new ng(1,1),rg=new Wm,sg=new Yv,og=new Jm,im=[],rm=[],sm=new Float32Array(16),om=new Float32Array(9),am=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=im[a];if(u===void 0&&(u=new Float32Array(a),im[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function $t(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function aS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function lS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;s.uniform2fv(this.addr,e),$t(n,e)}}function uS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;s.uniform3fv(this.addr,e),$t(n,e)}}function cS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;s.uniform4fv(this.addr,e),$t(n,e)}}function fS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,r))return;am.set(r),s.uniformMatrix2fv(this.addr,!1,am),$t(n,r)}}function dS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,r))return;om.set(r),s.uniformMatrix3fv(this.addr,!1,om),$t(n,r)}}function hS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,r))return;sm.set(r),s.uniformMatrix4fv(this.addr,!1,sm),$t(n,r)}}function pS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;s.uniform2iv(this.addr,e),$t(n,e)}}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;s.uniform3iv(this.addr,e),$t(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;s.uniform4iv(this.addr,e),$t(n,e)}}function vS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;s.uniform2uiv(this.addr,e),$t(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;s.uniform3uiv(this.addr,e),$t(n,e)}}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;s.uniform4uiv(this.addr,e),$t(n,e)}}function MS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(nm.compareFunction=Hm,u=nm):u=ig,n.setTexture2D(e||u,a)}function ES(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||sg,a)}function TS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||og,a)}function wS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||rg,a)}function AS(s){switch(s){case 5126:return aS;case 35664:return lS;case 35665:return uS;case 35666:return cS;case 35674:return fS;case 35675:return dS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return _S;case 5125:return vS;case 36294:return xS;case 36295:return yS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return wS}}function CS(s,e){s.uniform1fv(this.addr,e)}function RS(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function PS(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function LS(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function bS(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function DS(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function US(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function IS(s,e){s.uniform1iv(this.addr,e)}function NS(s,e){s.uniform2iv(this.addr,e)}function FS(s,e){s.uniform3iv(this.addr,e)}function OS(s,e){s.uniform4iv(this.addr,e)}function BS(s,e){s.uniform1uiv(this.addr,e)}function kS(s,e){s.uniform2uiv(this.addr,e)}function zS(s,e){s.uniform3uiv(this.addr,e)}function HS(s,e){s.uniform4uiv(this.addr,e)}function VS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);jt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ig,u[f])}function GS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);jt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||sg,u[f])}function WS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);jt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||og,u[f])}function XS(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);jt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||rg,u[f])}function YS(s){switch(s){case 5126:return CS;case 35664:return RS;case 35665:return PS;case 35666:return LS;case 35674:return bS;case 35675:return DS;case 35676:return US;case 5124:case 35670:return IS;case 35667:case 35671:return NS;case 35668:case 35672:return FS;case 35669:case 35673:return OS;case 5125:return BS;case 36294:return kS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return XS}}class qS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=AS(n.type)}}class jS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YS(n.type)}}class $S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function lm(s,e){s.seq.push(e),s.map[e.id]=e}function KS(s,e,n){const r=s.name,a=r.length;for(Wc.lastIndex=0;;){const u=Wc.exec(r),f=Wc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){lm(n,m===void 0?new qS(d,s,e):new jS(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new $S(d),lm(n,y)),n=y}}}class El{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);KS(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function um(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const ZS=37297;let QS=0;function JS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const cm=new ot;function eM(s){xt._getMatrix(cm,xt.workingColorSpace,s);const e=`mat3( ${cm.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case Ll:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+JS(s.getShaderSource(e),f)}else return a}function tM(s,e){const n=eM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nM(s,e){let n;switch(e){case xv:n="Linear";break;case yv:n="Reinhard";break;case Sv:n="Cineon";break;case Mv:n="ACESFilmic";break;case Tv:n="AgX";break;case wv:n="Neutral";break;case Ev:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new $;function iM(){xt.getLuminanceCoefficients(ml);const s=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function sM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function oM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function No(s){return s!==""}function dm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(s){return s.replace(aM,uM)}const lM=new Map;function uM(s,e){let n=at[e];if(n===void 0){const r=lM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Nf(n)}const cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(s){return s.replace(cM,fM)}function fM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function mm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function dM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Q_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function mM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rm:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case vv:e="ENVMAP_BLENDING_ADD";break}return e}function gM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function _M(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=dM(n),m=hM(n),_=pM(n),y=mM(n),x=gM(n),S=rM(n),E=sM(u),w=a.createProgram();let v,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(No).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(No).join(`
`),g.length>0&&(g+=`
`)):(v=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?at.tonemapping_pars_fragment:"",n.toneMapping!==vr?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,tM("linearToOutputTexel",n.outputColorSpace),iM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),f=Nf(f),f=dm(f,n),f=hm(f,n),d=Nf(d),d=dm(d,n),d=hm(d,n),f=pm(f),d=pm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=U+v+f,R=U+g+d,q=um(a,a.VERTEX_SHADER,D),O=um(a,a.FRAGMENT_SHADER,R);a.attachShader(w,q),a.attachShader(w,O),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function N(B){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(w).trim(),K=a.getShaderInfoLog(q).trim(),ae=a.getShaderInfoLog(O).trim();let ce=!0,oe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,q,O);else{const ue=fm(a,q,"vertex"),k=fm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ne+`
`+ue+`
`+k)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(K===""||ae==="")&&(oe=!1);oe&&(B.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:K,prefix:v},fragmentShader:{log:ae,prefix:g}})}a.deleteShader(q),a.deleteShader(O),V=new El(a,w),P=oM(a,w)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,ZS)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QS++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=q,this.fragmentShader=O,this}let vM=0;class xM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new yM(e),n.set(e,r)),r}}class yM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function SM(s,e,n,r,a,u,f){const d=new Ym,p=new xM,m=new Set,_=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function v(P,C,B,ne,K){const ae=ne.fog,ce=K.geometry,oe=P.isMeshStandardMaterial?ne.environment:null,ue=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),k=ue&&ue.mapping===Pl?ue.image.height:null,le=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=se!==void 0?se.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Ue,Q,fe,Me;if(le){const _t=_i[le];Ue=_t.vertexShader,Q=_t.fragmentShader}else Ue=P.vertexShader,Q=P.fragmentShader,p.update(P),fe=p.getVertexShaderID(P),Me=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=K.isInstancedMesh===!0,Ze=K.isBatchedMesh===!0,Ct=!!P.map,pt=!!P.matcap,Lt=!!ue,X=!!P.aoMap,dn=!!P.lightMap,dt=!!P.bumpMap,ut=!!P.normalMap,je=!!P.displacementMap,wt=!!P.emissiveMap,qe=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,de=P.sheen>0,Ve=P.transmission>0,Ce=T&&!!P.anisotropyMap,Ne=Z&&!!P.clearcoatMap,lt=Z&&!!P.clearcoatNormalMap,ye=Z&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,Qe=ge&&!!P.iridescenceThicknessMap,Je=de&&!!P.sheenColorMap,Be=de&&!!P.sheenRoughnessMap,ct=!!P.specularMap,it=!!P.specularColorMap,Tt=!!P.specularIntensityMap,H=Ve&&!!P.transmissionMap,Re=Ve&&!!P.thicknessMap,re=!!P.gradientMap,he=!!P.alphaMap,be=P.alphaTest>0,Le=!!P.alphaHash,rt=!!P.extensions;let Dt=vr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Wt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Q,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&K._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&K.instanceColor!==null,instancingMorph:Ie&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Xs,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:pt,envMap:Lt,envMapMode:Lt&&ue.mapping,envMapCubeUVHeight:k,aoMap:X,lightMap:dn,bumpMap:dt,normalMap:ut,displacementMap:x&&je,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===Pv,normalMapTangentSpace:ut&&P.normalMapType===zm,metalnessMap:qe,roughnessMap:L,anisotropy:T,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:it,specularIntensityMap:Tt,transmission:Ve,transmissionMap:H,thicknessMap:Re,gradientMap:re,opaque:P.transparent===!1&&P.blending===Fs&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Le,combine:P.combine,mapUv:Ct&&w(P.map.channel),aoMapUv:X&&w(P.aoMap.channel),lightMapUv:dn&&w(P.lightMap.channel),bumpMapUv:dt&&w(P.bumpMap.channel),normalMapUv:ut&&w(P.normalMap.channel),displacementMapUv:je&&w(P.displacementMap.channel),emissiveMapUv:wt&&w(P.emissiveMap.channel),metalnessMapUv:qe&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Ce&&w(P.anisotropyMap.channel),clearcoatMapUv:Ne&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(P.sheenRoughnessMap.channel),specularMapUv:ct&&w(P.specularMap.channel),specularColorMapUv:it&&w(P.specularColorMap.channel),specularIntensityMapUv:Tt&&w(P.specularIntensityMap.channel),transmissionMapUv:H&&w(P.transmissionMap.channel),thicknessMapUv:Re&&w(P.thicknessMap.channel),alphaMapUv:he&&w(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ut||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ce.attributes.uv&&(Ct||he),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ae,skinning:K.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&xt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&xt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Bi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)C.push(B),C.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(U(C,P),D(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function U(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function D(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=E[P.type];let B;if(C){const ne=_i[C];B=r0.clone(ne.uniforms)}else B=P.uniforms;return B}function q(P,C){let B;for(let ne=0,K=_.length;ne<K;ne++){const ae=_[ne];if(ae.cacheKey===C){B=ae,++B.usedTimes;break}}return B===void 0&&(B=new _M(s,C,P,u),_.push(B)),B}function O(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function N(P){p.remove(P)}function V(){p.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:R,acquireProgram:q,releaseProgram:O,releaseShaderCache:N,programs:_,dispose:V}}function MM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function EM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _m(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(y,x,S,E,w,v){let g=s[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:S,groupOrder:E,renderOrder:y.renderOrder,z:w,group:v},s[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=y.renderOrder,g.z=w,g.group=v),e++,g}function d(y,x,S,E,w,v){const g=f(y,x,S,E,w,v);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(y,x,S,E,w,v){const g=f(y,x,S,E,w,v);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(y,x){n.length>1&&n.sort(y||EM),r.length>1&&r.sort(x||gm),a.length>1&&a.sort(x||gm)}function _(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function TM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new _m,s.set(r,[f])):a>=u.length?(f=new _m,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function wM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new ht};break;case"SpotLight":n={position:new $,direction:new $,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function AM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let CM=0;function RM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function PM(s){const e=new wM,n=AM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,u=new Bt,f=new Bt;function d(m){let _=0,y=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,w=0,v=0,g=0,U=0,D=0,R=0,q=0,O=0,N=0;m.sort(RM);for(let P=0,C=m.length;P<C;P++){const B=m[P],ne=B.color,K=B.intensity,ae=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=ne.r*K,y+=ne.g*K,x+=ne.b*K;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],K);N++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,k=n.get(B);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=B.shadow.matrix,U++}r.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ne).multiplyScalar(K),oe.distance=ae,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[w]=oe;const ue=B.shadow;if(B.map&&(r.spotLightMap[q]=B.map,q++,ue.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[w]=ue.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,r.spotShadow[w]=k,r.spotShadowMap[w]=ce,R++}w++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ne).multiplyScalar(K),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=oe,v++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ue=B.shadow,k=n.get(B);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,k.shadowCameraNear=ue.camera.near,k.shadowCameraFar=ue.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=ce,r.pointShadowMatrix[E]=B.shadow.matrix,D++}r.point[E]=oe,E++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(K),oe.groundColor.copy(B.groundColor).multiplyScalar(K),r.hemi[g]=oe,g++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==w||V.rectAreaLength!==v||V.hemiLength!==g||V.numDirectionalShadows!==U||V.numPointShadows!==D||V.numSpotShadows!==R||V.numSpotMaps!==q||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=v,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+q-O,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,V.directionalLength=S,V.pointLength=E,V.spotLength=w,V.rectAreaLength=v,V.hemiLength=g,V.numDirectionalShadows=U,V.numPointShadows=D,V.numSpotShadows=R,V.numSpotMaps=q,V.numLightProbes=N,r.version=CM++)}function p(m,_){let y=0,x=0,S=0,E=0,w=0;const v=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const D=m[g];if(D.isDirectionalLight){const R=r.directional[y];R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),y++}else if(D.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),S++}else if(D.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(v),f.identity(),u.copy(D.matrixWorld),u.premultiply(v),f.extractRotation(u),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(v),x++}else if(D.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(v),w++}}}return{setup:d,setupView:p,state:r}}function vm(s){const e=new PM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function LM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new vm(s),e.set(a,[d])):u>=f.length?(d=new vm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class bM extends qs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends qs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`;function NM(s,e,n){let r=new Gf;const a=new Et,u=new Et,f=new zt,d=new bM({depthPacking:Rv}),p=new DM,m={},_=n.maxTextureSize,y={[xr]:Ln,[Ln]:xr,[Bi]:Bi},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:UM,fragmentShader:IM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Pn;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Rn(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cm;let g=this.type;this.render=function(O,N,V){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(_r),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const K=g!==Oi&&this.type===Oi,ae=g===Oi&&this.type!==Oi;for(let ce=0,oe=O.length;ce<oe;ce++){const ue=O[ce],k=ue.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const le=k.getFrameExtents();if(a.multiply(le),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/le.x),a.x=u.x*le.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/le.y),a.y=u.y*le.y,k.mapSize.y=u.y)),k.map===null||K===!0||ae===!0){const I=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};k.map!==null&&k.map.dispose(),k.map=new $r(a.x,a.y,I),k.map.texture.name=ue.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const se=k.getViewportCount();for(let I=0;I<se;I++){const ie=k.getViewport(I);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ne.viewport(f),k.updateMatrices(ue,I),r=k.getFrustum(),R(N,V,k.camera,ue,this.type)}k.isPointLightShadow!==!0&&this.type===Oi&&U(k,V),k.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(P,C,B)};function U(O,N){const V=e.update(w);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(N,null,V,x,w,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(N,null,V,S,w,null)}function D(O,N,V,P){let C=null;const B=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)C=B;else if(C=V.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ne=C.uuid,K=N.uuid;let ae=m[ne];ae===void 0&&(ae={},m[ne]=ae);let ce=ae[K];ce===void 0&&(ce=C.clone(),ae[K]=ce,N.addEventListener("dispose",q)),C=ce}if(C.visible=N.visible,C.wireframe=N.wireframe,P===Oi?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:y[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=s.properties.get(C);ne.light=V}return C}function R(O,N,V,P,C){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Oi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const K=e.update(O),ae=O.material;if(Array.isArray(ae)){const ce=K.groups;for(let oe=0,ue=ce.length;oe<ue;oe++){const k=ce[oe],le=ae[k.materialIndex];if(le&&le.visible){const se=D(O,le,P,C);O.onBeforeShadow(s,O,N,V,K,se,k),s.renderBufferDirect(V,null,K,se,O,k),O.onAfterShadow(s,O,N,V,K,se,k)}}}else if(ae.visible){const ce=D(O,ae,P,C);O.onBeforeShadow(s,O,N,V,K,ce,null),s.renderBufferDirect(V,null,K,ce,O,null),O.onAfterShadow(s,O,N,V,K,ce,null)}}const ne=O.children;for(let K=0,ae=ne.length;K<ae;K++)R(ne[K],N,V,P,C)}function q(O){O.target.removeEventListener("dispose",q);for(const V in m){const P=m[V],C=O.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const FM={[Kc]:Zc,[Qc]:tf,[Jc]:nf,[ks]:ef,[Zc]:Kc,[tf]:Qc,[nf]:Jc,[ef]:ks};function OM(s,e){function n(){let H=!1;const Re=new zt;let re=null;const he=new zt(0,0,0,0);return{setMask:function(be){re!==be&&!H&&(s.colorMask(be,be,be,be),re=be)},setLocked:function(be){H=be},setClear:function(be,Le,rt,Dt,Wt){Wt===!0&&(be*=Dt,Le*=Dt,rt*=Dt),Re.set(be,Le,rt,Dt),he.equals(Re)===!1&&(s.clearColor(be,Le,rt,Dt),he.copy(Re))},reset:function(){H=!1,re=null,he.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,re=null,he=null,be=null;return{setReversed:function(Le){if(Re!==Le){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Le){re!==Le&&!H&&(s.depthMask(Le),re=Le)},setFunc:function(Le){if(Re&&(Le=FM[Le]),he!==Le){switch(Le){case Kc:s.depthFunc(s.NEVER);break;case Zc:s.depthFunc(s.ALWAYS);break;case Qc:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case Jc:s.depthFunc(s.EQUAL);break;case ef:s.depthFunc(s.GEQUAL);break;case tf:s.depthFunc(s.GREATER);break;case nf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Le}},setLocked:function(Le){H=Le},setClear:function(Le){be!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),be=Le)},reset:function(){H=!1,re=null,he=null,be=null,Re=!1}}}function a(){let H=!1,Re=null,re=null,he=null,be=null,Le=null,rt=null,Dt=null,Wt=null;return{setTest:function(_t){H||(_t?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!H&&(s.stencilMask(_t),Re=_t)},setFunc:function(_t,vn,hn){(re!==_t||he!==vn||be!==hn)&&(s.stencilFunc(_t,vn,hn),re=_t,he=vn,be=hn)},setOp:function(_t,vn,hn){(Le!==_t||rt!==vn||Dt!==hn)&&(s.stencilOp(_t,vn,hn),Le=_t,rt=vn,Dt=hn)},setLocked:function(_t){H=_t},setClear:function(_t){Wt!==_t&&(s.clearStencil(_t),Wt=_t)},reset:function(){H=!1,Re=null,re=null,he=null,be=null,Le=null,rt=null,Dt=null,Wt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},y={},x=new WeakMap,S=[],E=null,w=!1,v=null,g=null,U=null,D=null,R=null,q=null,O=null,N=new ht(0,0,0),V=0,P=!1,C=null,B=null,ne=null,K=null,ae=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(k)[1]),oe=ue>=1):k.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),oe=ue>=2);let le=null,se={};const I=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ue=new zt().fromArray(I),Q=new zt().fromArray(ie);function fe(H,Re,re,he){const be=new Uint8Array(4),Le=s.createTexture();s.bindTexture(H,Le),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<re;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Le}const Me={};Me[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(ks),dt(!1),ut(Mp),ve(s.CULL_FACE),X(_r);function ve(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ie(H,Re){return y[H]!==Re?(s.bindFramebuffer(H,Re),y[H]=Re,H===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Re),H===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(H,Re){let re=S,he=!1;if(H){re=x.get(Re),re===void 0&&(re=[],x.set(Re,re));const be=H.textures;if(re.length!==be.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,rt=be.length;Le<rt;Le++)re[Le]=s.COLOR_ATTACHMENT0+Le;re.length=be.length,he=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,he=!0);he&&s.drawBuffers(re)}function Ct(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const pt={[Wr]:s.FUNC_ADD,[ev]:s.FUNC_SUBTRACT,[tv]:s.FUNC_REVERSE_SUBTRACT};pt[nv]=s.MIN,pt[iv]=s.MAX;const Lt={[rv]:s.ZERO,[sv]:s.ONE,[ov]:s.SRC_COLOR,[jc]:s.SRC_ALPHA,[dv]:s.SRC_ALPHA_SATURATE,[cv]:s.DST_COLOR,[lv]:s.DST_ALPHA,[av]:s.ONE_MINUS_SRC_COLOR,[$c]:s.ONE_MINUS_SRC_ALPHA,[fv]:s.ONE_MINUS_DST_COLOR,[uv]:s.ONE_MINUS_DST_ALPHA,[hv]:s.CONSTANT_COLOR,[pv]:s.ONE_MINUS_CONSTANT_COLOR,[mv]:s.CONSTANT_ALPHA,[gv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,Re,re,he,be,Le,rt,Dt,Wt,_t){if(H===_r){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(ve(s.BLEND),w=!0),H!==J_){if(H!==v||_t!==P){if((g!==Wr||R!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,R=Wr),_t)switch(H){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ep:s.blendFunc(s.ONE,s.ONE);break;case Tp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ep:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,D=null,q=null,O=null,N.set(0,0,0),V=0,v=H,P=_t}return}be=be||Re,Le=Le||re,rt=rt||he,(Re!==g||be!==R)&&(s.blendEquationSeparate(pt[Re],pt[be]),g=Re,R=be),(re!==U||he!==D||Le!==q||rt!==O)&&(s.blendFuncSeparate(Lt[re],Lt[he],Lt[Le],Lt[rt]),U=re,D=he,q=Le,O=rt),(Dt.equals(N)===!1||Wt!==V)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Wt),N.copy(Dt),V=Wt),v=H,P=!1}function dn(H,Re){H.side===Bi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let re=H.side===Ln;Re&&(re=!re),dt(re),H.blending===Fs&&H.transparent===!1?X(_r):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),u.setMask(H.colorWrite);const he=H.stencilWrite;d.setTest(he),he&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){C!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),C=H)}function ut(H){H!==K_?(ve(s.CULL_FACE),H!==B&&(H===Mp?s.cullFace(s.BACK):H===Z_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=H}function je(H){H!==ne&&(oe&&s.lineWidth(H),ne=H)}function wt(H,Re,re){H?(ve(s.POLYGON_OFFSET_FILL),(K!==Re||ae!==re)&&(s.polygonOffset(Re,re),K=Re,ae=re)):Ae(s.POLYGON_OFFSET_FILL)}function qe(H){H?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function L(H){H===void 0&&(H=s.TEXTURE0+ce-1),le!==H&&(s.activeTexture(H),le=H)}function T(H,Re,re){re===void 0&&(le===null?re=s.TEXTURE0+ce-1:re=le);let he=se[re];he===void 0&&(he={type:void 0,texture:void 0},se[re]=he),(he.type!==H||he.texture!==Re)&&(le!==re&&(s.activeTexture(re),le=re),s.bindTexture(H,Re||Me[H]),he.type=H,he.texture=Re)}function Z(){const H=se[le];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){Ue.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ue.copy(H))}function Be(H){Q.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function ct(H,Re){let re=m.get(Re);re===void 0&&(re=new WeakMap,m.set(Re,re));let he=re.get(H);he===void 0&&(he=s.getUniformBlockIndex(Re,H.name),re.set(H,he))}function it(H,Re){const he=m.get(Re).get(H);p.get(Re)!==he&&(s.uniformBlockBinding(Re,he,H.__bindingPointIndex),p.set(Re,he))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,se={},y={},x=new WeakMap,S=[],E=null,w=!1,v=null,g=null,U=null,D=null,R=null,q=null,O=null,N=new ht(0,0,0),V=0,P=!1,C=null,B=null,ne=null,K=null,ae=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:Ct,setBlending:X,setMaterial:dn,setFlipSided:dt,setCullFace:ut,setLineWidth:je,setPolygonOffset:wt,setScissorTest:qe,activeTexture:L,bindTexture:T,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:ye,texSubImage2D:de,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:Je,viewport:Be,reset:Tt}}function xm(s,e,n,r){const a=BM(r);switch(n){case Um:return s*e;case Nm:return s*e;case Fm:return s*e*2;case Om:return s*e/a.components*a.byteLength;case zf:return s*e/a.components*a.byteLength;case Bm:return s*e*2/a.components*a.byteLength;case Hf:return s*e*2/a.components*a.byteLength;case Im:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case Vf:return s*e*4/a.components*a.byteLength;case vl:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(s,16)*Math.max(e,8)/4;case lf:case cf:return Math.max(s,8)*Math.max(e,8)/2;case df:case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Pf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case km:case bf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Df:case Uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BM(s){switch(s){case Vi:case Lm:return{byteLength:1,components:1};case Oo:case bm:case Bo:return{byteLength:2,components:1};case Bf:case kf:return{byteLength:2,components:4};case jr:case Of:case ki:return{byteLength:4,components:1};case Dm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function kM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,_=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):wl("canvas")}function w(L,T,Z){let pe=1;const ge=qe(L);if((ge.width>Z||ge.height>Z)&&(pe=Z/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);y===void 0&&(y=E(de,Ve));const Ce=T?E(de,Ve):y;return Ce.width=de,Ce.height=Ve,Ce.getContext("2d").drawImage(L,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+Ve+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function v(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,T,Z,pe,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=T;if(T===s.RED&&(Z===s.FLOAT&&(de=s.R32F),Z===s.HALF_FLOAT&&(de=s.R16F),Z===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.R8UI),Z===s.UNSIGNED_SHORT&&(de=s.R16UI),Z===s.UNSIGNED_INT&&(de=s.R32UI),Z===s.BYTE&&(de=s.R8I),Z===s.SHORT&&(de=s.R16I),Z===s.INT&&(de=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(de=s.RG32F),Z===s.HALF_FLOAT&&(de=s.RG16F),Z===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RG8UI),Z===s.UNSIGNED_SHORT&&(de=s.RG16UI),Z===s.UNSIGNED_INT&&(de=s.RG32UI),Z===s.BYTE&&(de=s.RG8I),Z===s.SHORT&&(de=s.RG16I),Z===s.INT&&(de=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Z===s.UNSIGNED_INT&&(de=s.RGB32UI),Z===s.BYTE&&(de=s.RGB8I),Z===s.SHORT&&(de=s.RGB16I),Z===s.INT&&(de=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Z===s.UNSIGNED_INT&&(de=s.RGBA32UI),Z===s.BYTE&&(de=s.RGBA8I),Z===s.SHORT&&(de=s.RGBA16I),Z===s.INT&&(de=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),T===s.RGBA){const Ve=ge?Ll:xt.getTransfer(pe);Z===s.FLOAT&&(de=s.RGBA32F),Z===s.HALF_FLOAT&&(de=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(de=Ve===Rt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(L,T){let Z;return L?T===null||T===jr||T===Vs?Z=s.DEPTH24_STENCIL8:T===ki?Z=s.DEPTH32F_STENCIL8:T===Oo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Vs?Z=s.DEPTH_COMPONENT24:T===ki?Z=s.DEPTH_COMPONENT32F:T===Oo&&(Z=s.DEPTH_COMPONENT16),Z}function q(L,T){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==ci&&L.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function O(L){const T=L.target;T.removeEventListener("dispose",O),V(T),T.isVideoTexture&&_.delete(T)}function N(L){const T=L.target;T.removeEventListener("dispose",N),C(T)}function V(L){const T=r.get(L);if(T.__webglInit===void 0)return;const Z=L.source,pe=x.get(Z);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(pe).length===0&&x.delete(Z)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const Z=L.source,pe=x.get(Z);delete pe[T.__cacheKey],f.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=L.textures;for(let pe=0,ge=Z.length;pe<ge;pe++){const de=r.get(Z[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(Z[pe])}r.remove(L)}let B=0;function ne(){B=0}function K(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function ae(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ce(L,T){const Z=r.get(L);if(L.isVideoTexture&&je(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,L,T);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function oe(L,T){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ue(L,T){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,T);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function k(L,T){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){fe(Z,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const le={[of]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[af]:s.MIRRORED_REPEAT},se={[ci]:s.NEAREST,[Av]:s.NEAREST_MIPMAP_NEAREST,[$a]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[gc]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},I={[Lv]:s.NEVER,[Fv]:s.ALWAYS,[bv]:s.LESS,[Hm]:s.LEQUAL,[Dv]:s.EQUAL,[Nv]:s.GEQUAL,[Uv]:s.GREATER,[Iv]:s.NOTEQUAL};function ie(L,T){if(T.type===ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===gc||T.magFilter===$a||T.magFilter===qr||T.minFilter===vi||T.minFilter===gc||T.minFilter===$a||T.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==$a&&T.minFilter!==qr||T.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(L,T){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O));const pe=T.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const de=ae(T);if(de!==L.__cacheKey){ge[de]===void 0&&(ge[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ge[de].usedTimes++;const Ve=ge[L.__cacheKey];Ve!==void 0&&(ge[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(T)),L.__cacheKey=de,L.__webglTexture=ge[de].texture}return Z}function Q(L,T,Z){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ue(L,T),de=T.source;n.bindTexture(pe,L.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(de);if(de.version!==Ve.__version||ge===!0){n.activeTexture(s.TEXTURE0+Z);const Ce=xt.getPrimaries(xt.workingColorSpace),Ne=T.colorSpace===gr?null:xt.getPrimaries(T.colorSpace),lt=T.colorSpace===gr||Ce===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=w(T.image,!1,a.maxTextureSize);ye=wt(T,ye);const Oe=u.convert(T.format,T.colorSpace),Qe=u.convert(T.type);let Je=D(T.internalFormat,Oe,Qe,T.colorSpace,T.isVideoTexture);ie(pe,T);let Be;const ct=T.mipmaps,it=T.isVideoTexture!==!0,Tt=Ve.__version===void 0||ge===!0,H=de.dataReady,Re=q(T,ye);if(T.isDepthTexture)Je=R(T.format===Gs,T.type),Tt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Oe,Qe,null));else if(T.isDataTexture)if(ct.length>0){it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let re=0,he=ct.length;re<he;re++)Be=ct[re],it?H&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,Oe,Qe,Be.data):n.texImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Oe,Qe,Be.data);T.generateMipmaps=!1}else it?(Tt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ye.width,ye.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Oe,Qe,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Oe,Qe,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ct[0].width,ct[0].height,ye.depth);for(let re=0,he=ct.length;re<he;re++)if(Be=ct[re],T.format!==ui)if(Oe!==null)if(it){if(H)if(T.layerUpdates.size>0){const be=xm(Be.width,Be.height,T.format,T.type);for(const Le of T.layerUpdates){const rt=Be.data.subarray(Le*be/Be.data.BYTES_PER_ELEMENT,(Le+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Le,Be.width,Be.height,1,Oe,rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,ye.depth,Oe,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Je,Be.width,Be.height,ye.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,ye.depth,Oe,Qe,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,Je,Be.width,Be.height,ye.depth,0,Oe,Qe,Be.data)}else{it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let re=0,he=ct.length;re<he;re++)Be=ct[re],T.format!==ui?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,Oe,Qe,Be.data):n.texImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Oe,Qe,Be.data)}else if(T.isDataArrayTexture)if(it){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ye.width,ye.height,ye.depth),H)if(T.layerUpdates.size>0){const re=xm(ye.width,ye.height,T.format,T.type);for(const he of T.layerUpdates){const be=ye.data.subarray(he*re/ye.data.BYTES_PER_ELEMENT,(he+1)*re/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Oe,Qe,be)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Qe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,Oe,Qe,ye.data);else if(T.isData3DTexture)it?(Tt&&n.texStorage3D(s.TEXTURE_3D,Re,Je,ye.width,ye.height,ye.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Qe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,Oe,Qe,ye.data);else if(T.isFramebufferTexture){if(Tt)if(it)n.texStorage2D(s.TEXTURE_2D,Re,Je,ye.width,ye.height);else{let re=ye.width,he=ye.height;for(let be=0;be<Re;be++)n.texImage2D(s.TEXTURE_2D,be,Je,re,he,0,Oe,Qe,null),re>>=1,he>>=1}}else if(ct.length>0){if(it&&Tt){const re=qe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Re,Je,re.width,re.height)}for(let re=0,he=ct.length;re<he;re++)Be=ct[re],it?H&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe,Qe,Be):n.texImage2D(s.TEXTURE_2D,re,Je,Oe,Qe,Be);T.generateMipmaps=!1}else if(it){if(Tt){const re=qe(ye);n.texStorage2D(s.TEXTURE_2D,Re,Je,re.width,re.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,Qe,ye);v(T)&&g(pe),Ve.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,Z){if(T.image.length!==6)return;const pe=Ue(L,T),ge=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const de=r.get(ge);if(ge.version!==de.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const Ve=xt.getPrimaries(xt.workingColorSpace),Ce=T.colorSpace===gr?null:xt.getPrimaries(T.colorSpace),Ne=T.colorSpace===gr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!lt&&!ye?Oe[he]=w(T.image[he],!0,a.maxCubemapSize):Oe[he]=ye?T.image[he].image:T.image[he],Oe[he]=wt(T,Oe[he]);const Qe=Oe[0],Je=u.convert(T.format,T.colorSpace),Be=u.convert(T.type),ct=D(T.internalFormat,Je,Be,T.colorSpace),it=T.isVideoTexture!==!0,Tt=de.__version===void 0||pe===!0,H=ge.dataReady;let Re=q(T,Qe);ie(s.TEXTURE_CUBE_MAP,T);let re;if(lt){it&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,Qe.width,Qe.height);for(let he=0;he<6;he++){re=Oe[he].mipmaps;for(let be=0;be<re.length;be++){const Le=re[be];T.format!==ui?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Le.width,Le.height,Je,Le.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Le.width,Le.height,Je,Be,Le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Le.width,Le.height,0,Je,Be,Le.data)}}}else{if(re=T.mipmaps,it&&Tt){re.length>0&&Re++;const he=qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,he.width,he.height)}for(let he=0;he<6;he++)if(ye){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Je,Be,Oe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Oe[he].width,Oe[he].height,0,Je,Be,Oe[he].data);for(let be=0;be<re.length;be++){const rt=re[be].image[he].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,rt.width,rt.height,Je,Be,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,rt.width,rt.height,0,Je,Be,rt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Be,Oe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Je,Be,Oe[he]);for(let be=0;be<re.length;be++){const Le=re[be];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Je,Be,Le.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,Je,Be,Le.image[he])}}}v(T)&&g(s.TEXTURE_CUBE_MAP),de.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Me(L,T,Z,pe,ge,de){const Ve=u.convert(Z.format,Z.colorSpace),Ce=u.convert(Z.type),Ne=D(Z.internalFormat,Ve,Ce,Z.colorSpace),lt=r.get(T),ye=r.get(Z);if(ye.__renderTarget=T,!lt.__hasExternalTextures){const Oe=Math.max(1,T.width>>de),Qe=Math.max(1,T.height>>de);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,de,Ne,Oe,Qe,T.depth,0,Ve,Ce,null):n.texImage2D(ge,de,Ne,Oe,Qe,0,Ve,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,dt(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(L,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,de=R(T.stencilBuffer,ge),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=dt(T);ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,de,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,L)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const de=pe[ge],Ve=u.convert(de.format,de.colorSpace),Ce=u.convert(de.type),Ne=D(de.internalFormat,Ve,Ce,de.colorSpace),lt=dt(T);Z&&ut(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ne,T.width,T.height):ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const ge=pe.__webglTexture,de=dt(T);if(T.depthTexture.format===Os)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Gs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const T=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,L)}else if(Z){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(L,T,Z){const pe=r.get(L);T!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ie(L)}function Ct(L){const T=L.texture,Z=r.get(L),pe=r.get(T);L.addEventListener("dispose",N);const ge=L.textures,de=L.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,f.memory.textures++),de){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)Z.__webglFramebuffer[Ce][Ne]=s.createFramebuffer()}else Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ne=ge.length;Ce<Ne;Ce++){const lt=r.get(ge[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ut(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const Ne=ge[Ce];Z.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const lt=u.convert(Ne.format,Ne.colorSpace),ye=u.convert(Ne.type),Oe=D(Ne.internalFormat,lt,ye,Ne.colorSpace,L.isXRRenderTarget===!0),Qe=dt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me(Z.__webglFramebuffer[Ce][Ne],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else Me(Z.__webglFramebuffer[Ce],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Ne=ge.length;Ce<Ne;Ce++){const lt=ge[Ce],ye=r.get(lt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ie(s.TEXTURE_2D,lt),Me(Z.__webglFramebuffer,L,lt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),v(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),ie(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me(Z.__webglFramebuffer[Ne],L,T,s.COLOR_ATTACHMENT0,Ce,Ne);else Me(Z.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ce,0);v(T)&&g(Ce),n.unbindTexture()}L.depthBuffer&&Ie(L)}function pt(L){const T=L.textures;for(let Z=0,pe=T.length;Z<pe;Z++){const ge=T[Z];if(v(ge)){const de=U(L),Ve=r.get(ge).__webglTexture;n.bindTexture(de,Ve),g(de),n.unbindTexture()}}}const Lt=[],X=[];function dn(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,Z=L.width,pe=L.height;let ge=s.COLOR_BUFFER_BIT;const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(L),Ce=T.length>1;if(Ce)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ge,s.NEAREST),p===!0&&(Lt.length=0,X.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Lt.push(de),X.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function dt(L){return Math.min(a.maxSamples,L.samples)}function ut(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(L){const T=f.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function wt(L,T){const Z=L.colorSpace,pe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Xs&&Z!==gr&&(xt.getTransfer(Z)===Rt?(pe!==ui||ge!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function zM(s,e){function n(r,a=gr){let u;const f=xt.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Dm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Lm)return s.BYTE;if(r===bm)return s.SHORT;if(r===Oo)return s.UNSIGNED_SHORT;if(r===Of)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===Um)return s.ALPHA;if(r===Im)return s.RGB;if(r===ui)return s.RGBA;if(r===Nm)return s.LUMINANCE;if(r===Fm)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===Om)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===Bm)return s.RG;if(r===Hf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===vl||r===xl||r===yl||r===Sl)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lf||r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===lf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ff)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===df||r===hf||r===pf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===df||r===hf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_f)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml||r===Pf||r===Lf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ml)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===km||r===bf||r===Df||r===Uf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ml)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Df)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class HM extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fo extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,r),g=this._getHandJoint(m,w);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=_.position.distanceTo(y.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
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

}`;class XM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new bn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:GM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rn(new Vo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends Ys{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,y=null,x=null,S=null,E=null;const w=new XM,v=n.getContextAttributes();let g=null,U=null;const D=[],R=[],q=new Et;let O=null;const N=new $n;N.viewport=new zt;const V=new $n;V.viewport=new zt;const P=[N,V],C=new HM;let B=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=D[Q];return fe===void 0&&(fe=new Xc,D[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=D[Q];return fe===void 0&&(fe=new Xc,D[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=D[Q];return fe===void 0&&(fe=new Xc,D[Q]=fe),fe.getHandSpace()};function K(Q){const fe=R.indexOf(Q.inputSource);if(fe===-1)return;const Me=D[fe];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,m||f),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ae(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<D.length;Q++){const fe=R[Q];fe!==null&&(R[Q]=null,D[Q].disconnect(fe))}B=null,ne=null,w.reset(),e.setRenderTarget(g),S=null,x=null,y=null,a=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",ce),v.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(q),a.renderState.layers===void 0){const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new $r(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let fe=null,Me=null,ve=null;v.depth&&(ve=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=v.stencil?Gs:Os,Me=v.stencil?Vs:jr);const Ae={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new $r(x.textureWidth,x.textureHeight,{format:ui,type:Vi,depthTexture:new ng(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ce(Q){for(let fe=0;fe<Q.removed.length;fe++){const Me=Q.removed[fe],ve=R.indexOf(Me);ve>=0&&(R[ve]=null,D[ve].disconnect(Me))}for(let fe=0;fe<Q.added.length;fe++){const Me=Q.added[fe];let ve=R.indexOf(Me);if(ve===-1){for(let Ie=0;Ie<D.length;Ie++)if(Ie>=R.length){R.push(Me),ve=Ie;break}else if(R[Ie]===null){R[Ie]=Me,ve=Ie;break}if(ve===-1)break}const Ae=D[ve];Ae&&Ae.connect(Me)}}const oe=new $,ue=new $;function k(Q,fe,Me){oe.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(ue),Ae=fe.projectionMatrix.elements,Ie=Me.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Lt=(Ae[9]-1)/Ae[5],X=(Ae[8]-1)/Ae[0],dn=(Ie[8]+1)/Ie[0],dt=Ze*X,ut=Ze*dn,je=ve/(-X+dn),wt=je*-X;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Ze+je,L=Ct+je,T=dt-wt,Z=ut+(ve-wt),pe=pt*Ct/L*qe,ge=Lt*Ct/L*qe;Q.projectionMatrix.makePerspective(T,Z,pe,ge,qe,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let fe=Q.near,Me=Q.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),C.near=V.near=N.near=fe,C.far=V.far=N.far=Me,(B!==C.near||ne!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ne=C.far),N.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,C.layers.mask=N.layers.mask|V.layers.mask;const ve=Q.parent,Ae=C.cameras;le(C,ve);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],ve);Ae.length===2?k(C,N,V):C.projectionMatrix.copy(N.projectionMatrix),se(Q,C,ve)};function se(Q,fe,Me){Me===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=If*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let I=null;function ie(Q,fe){if(_=fe.getViewerPose(m||f),E=fe,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ve=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Ie=0;Ie<Me.length;Ie++){const Ze=Me[Ie];let Ct=null;if(S!==null)Ct=S.getViewport(Ze);else{const Lt=y.getViewSubImage(x,Ze);Ct=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,x.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(U))}let pt=P[Ie];pt===void 0&&(pt=new $n,pt.layers.enable(Ie),pt.viewport=new zt,P[Ie]=pt),pt.matrix.fromArray(Ze.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ze.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ie===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(pt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=y.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&w.init(e,Ie,a.renderState)}}for(let Me=0;Me<D.length;Me++){const ve=R[Me],Ae=D[Me];ve!==null&&Ae!==void 0&&Ae.update(ve,fe,m||f)}I&&I(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ue=new eg;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(Q){I=Q},this.dispose=function(){}}}const zr=new yi,qM=new Bt;function jM(s,e){function n(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Zm(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,U,D,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(v,g):g.isMeshToonMaterial?(u(v,g),y(v,g)):g.isMeshPhongMaterial?(u(v,g),_(v,g)):g.isMeshStandardMaterial?(u(v,g),x(v,g),g.isMeshPhysicalMaterial&&S(v,g,R)):g.isMeshMatcapMaterial?(u(v,g),E(v,g)):g.isMeshDepthMaterial?u(v,g):g.isMeshDistanceMaterial?(u(v,g),w(v,g)):g.isMeshNormalMaterial?u(v,g):g.isLineBasicMaterial?(f(v,g),g.isLineDashedMaterial&&d(v,g)):g.isPointsMaterial?p(v,g,U,D):g.isSpriteMaterial?m(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,n(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Ln&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,n(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Ln&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,n(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,n(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const U=e.get(g),D=U.envMap,R=U.envMapRotation;D&&(v.envMap.value=D,zr.copy(R),zr.x*=-1,zr.y*=-1,zr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.envMapRotation.value.setFromMatrix4(qM.makeRotationFromEuler(zr)),v.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,v.aoMapTransform))}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform))}function d(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function p(v,g,U,D){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*U,v.scale.value=D*.5,g.map&&(v.map.value=g.map,n(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function m(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,n(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,n(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function y(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function x(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,U){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ln&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,g){g.matcap&&(v.matcap.value=g.matcap)}function w(v,g){const U=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $M(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,D){const R=D.program;r.uniformBlockBinding(U,R)}function m(U,D){let R=a[U.id];R===void 0&&(E(U),R=_(U),a[U.id]=R,U.addEventListener("dispose",v));const q=D.program;r.updateUBOMapping(U,q);const O=e.render.frame;u[U.id]!==O&&(x(U),u[U.id]=O)}function _(U){const D=y();U.__bindingPointIndex=D;const R=s.createBuffer(),q=U.__size,O=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,q,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function y(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const D=a[U.id],R=U.uniforms,q=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,N=R.length;O<N;O++){const V=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,C=V.length;P<C;P++){const B=V[P];if(S(B,O,P,q)===!0){const ne=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let ae=0;for(let ce=0;ce<K.length;ce++){const oe=K[ce],ue=w(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ne+ae,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,D,R,q){const O=U.value,N=D+"_"+R;if(q[N]===void 0)return typeof O=="number"||typeof O=="boolean"?q[N]=O:q[N]=O.clone(),!0;{const V=q[N];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return q[N]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function E(U){const D=U.uniforms;let R=0;const q=16;for(let N=0,V=D.length;N<V;N++){const P=Array.isArray(D[N])?D[N]:[D[N]];for(let C=0,B=P.length;C<B;C++){const ne=P[C],K=Array.isArray(ne.value)?ne.value:[ne.value];for(let ae=0,ce=K.length;ae<ce;ae++){const oe=K[ae],ue=w(oe),k=R%q,le=k%ue.boundary,se=k+le;R+=le,se!==0&&q-se<ue.storage&&(R+=q-se),ne.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=R,R+=ue.storage}}}const O=R%q;return O>0&&(R+=q-O),U.__size=R,U.__cache={},this}function w(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function v(U){const D=U.target;D.removeEventListener("dispose",v);const R=f.indexOf(D.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class KM{constructor(e={}){const{canvas:n=Bv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),w=new Int32Array(4);let v=null,g=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=vr,this.toneMappingExposure=1;const R=this;let q=!1,O=0,N=0,V=null,P=-1,C=null;const B=new zt,ne=new zt;let K=null;const ae=new ht(0);let ce=0,oe=n.width,ue=n.height,k=1,le=null,se=null;const I=new zt(0,0,oe,ue),ie=new zt(0,0,oe,ue);let Ue=!1;const Q=new Gf;let fe=!1,Me=!1;const ve=new Bt,Ae=new Bt,Ie=new $,Ze=new zt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return V===null?k:1}let X=r;function dn(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ff}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Le,!1),X===null){const G="webgl2";if(X=dn(G,A),X===null)throw dn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let dt,ut,je,wt,qe,L,T,Z,pe,ge,de,Ve,Ce,Ne,lt,ye,Oe,Qe,Je,Be,ct,it,Tt,H;function Re(){dt=new tS(X),dt.init(),it=new zM(X,dt),ut=new $y(X,dt,e,it),je=new OM(X,dt),ut.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),wt=new rS(X),qe=new MM,L=new kM(X,dt,je,qe,ut,it,wt),T=new Zy(R),Z=new eS(R),pe=new f0(X),Tt=new qy(X,pe),ge=new nS(X,pe,wt,Tt),de=new oS(X,ge,pe,wt),Je=new sS(X,ut,L),ye=new Ky(qe),Ve=new SM(R,T,Z,dt,ut,Tt,ye),Ce=new jM(R,qe),Ne=new TM,lt=new LM(dt),Qe=new Yy(R,T,Z,je,de,S,p),Oe=new NM(R,de,ut),H=new $M(X,wt,ut,je),Be=new jy(X,dt,wt),ct=new iS(X,dt,wt),wt.programs=Ve.programs,R.capabilities=ut,R.extensions=dt,R.properties=qe,R.renderLists=Ne,R.shadowMap=Oe,R.state=je,R.info=wt}Re();const re=new YM(R,X);this.xr=re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(oe,ue,!1))},this.getSize=function(A){return A.set(oe,ue)},this.setSize=function(A,G,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ue=G,n.width=Math.floor(A*k),n.height=Math.floor(G*k),ee===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(oe*k,ue*k).floor()},this.setDrawingBufferSize=function(A,G,ee){oe=A,ue=G,k=ee,n.width=Math.floor(A*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,G,ee,te){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,G,ee,te),je.viewport(B.copy(I).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,G,ee,te){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,G,ee,te),je.scissor(ne.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){je.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,G=!0,ee=!0){let te=0;if(A){let W=!1;if(V!==null){const Te=V.texture.format;W=Te===Vf||Te===Hf||Te===zf}if(W){const Te=V.texture.type,Se=Te===Vi||Te===jr||Te===Oo||Te===Vs||Te===Bf||Te===kf,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Se?(E[0]=et,E[1]=nt,E[2]=We,E[3]=ze,X.clearBufferuiv(X.COLOR,0,E)):(w[0]=et,w[1]=nt,w[2]=We,w[3]=ze,X.clearBufferiv(X.COLOR,0,w))}else te|=X.COLOR_BUFFER_BIT}G&&(te|=X.DEPTH_BUFFER_BIT),ee&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ne.dispose(),lt.dispose(),qe.dispose(),T.dispose(),Z.dispose(),de.dispose(),Tt.dispose(),H.dispose(),Ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",Zr),re.removeEventListener("sessionend",Gi),Si.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=wt.autoReset,G=Oe.enabled,ee=Oe.autoUpdate,te=Oe.needsUpdate,W=Oe.type;Re(),wt.autoReset=A,Oe.enabled=G,Oe.autoUpdate=ee,Oe.needsUpdate=te,Oe.type=W}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const G=A.target;G.removeEventListener("dispose",rt),Dt(G)}function Dt(A){Wt(A),qe.remove(A)}function Wt(A){const G=qe.get(A).programs;G!==void 0&&(G.forEach(function(ee){Ve.releaseProgram(ee)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,ee,te,W,Te){G===null&&(G=Ct);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Ge=Xo(A,G,ee,te,W);je.setMaterial(te,Se);let ze=ee.index,et=1;if(te.wireframe===!0){if(ze=ge.getWireframeAttribute(ee),ze===void 0)return;et=2}const nt=ee.drawRange,We=ee.attributes.position;let gt=nt.start*et,Mt=(nt.start+nt.count)*et;Te!==null&&(gt=Math.max(gt,Te.start*et),Mt=Math.min(Mt,(Te.start+Te.count)*et)),ze!==null?(gt=Math.max(gt,0),Mt=Math.min(Mt,ze.count)):We!=null&&(gt=Math.max(gt,0),Mt=Math.min(Mt,We.count));const mt=Mt-gt;if(mt<0||mt===1/0)return;Tt.setup(W,te,Ge,ee,ze);let rn,st=Be;if(ze!==null&&(rn=pe.get(ze),st=ct,st.setIndex(rn)),W.isMesh)te.wireframe===!0?(je.setLineWidth(te.wireframeLinewidth*Lt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(W.isLine){let Ye=te.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Lt()),W.isLineSegments?st.setMode(X.LINES):W.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else W.isPoints?st.setMode(X.POINTS):W.isSprite&&st.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,Kn=W._multiDrawCounts,yt=W._multiDrawCount,sn=ze?pe.get(ze).bytesPerElement:1,Zn=qe.get(te).currentProgram.getUniforms();for(let Xt=0;Xt<yt;Xt++)Zn.setValue(X,"_gl_DrawID",Xt),st.render(Ye[Xt]/sn,Kn[Xt])}else if(W.isInstancedMesh)st.renderInstances(gt,mt,W.count);else if(ee.isInstancedBufferGeometry){const Ye=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Kn=Math.min(ee.instanceCount,Ye);st.renderInstances(gt,mt,Kn)}else st.render(gt,mt)};function _t(A,G,ee){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=Ln,A.needsUpdate=!0,Qr(A,G,ee),A.side=xr,A.needsUpdate=!0,Qr(A,G,ee),A.side=Bi):Qr(A,G,ee)}this.compile=function(A,G,ee=null){ee===null&&(ee=A),g=lt.get(ee),g.init(G),D.push(g),ee.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==ee&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const te=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Se=0;Se<Te.length;Se++){const Ge=Te[Se];_t(Ge,ee,W),te.add(Ge)}else _t(Te,ee,W),te.add(Te)}),D.pop(),g=null,te},this.compileAsync=function(A,G,ee=null){const te=this.compile(A,G,ee);return new Promise(W=>{function Te(){if(te.forEach(function(Se){qe.get(Se).currentProgram.isReady()&&te.delete(Se)}),te.size===0){W(A);return}setTimeout(Te,10)}dt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vn=null;function hn(A){vn&&vn(A)}function Zr(){Si.stop()}function Gi(){Si.start()}const Si=new eg;Si.setAnimationLoop(hn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){vn=A,re.setAnimationLoop(A),A===null?Si.stop():Si.start()},re.addEventListener("sessionstart",Zr),re.addEventListener("sessionend",Gi),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,V),g=lt.get(A,D.length),g.init(G),D.push(g),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,Me),v=Ne.get(A,U.length),v.init(),U.push(v),re.enabled===!0&&re.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Mi(Te,G,-1/0,R.sortObjects)}Mi(A,G,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(le,se),pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pt&&Qe.addToRenderList(v,A),this.info.render.frame++,fe===!0&&ye.beginShadows();const ee=g.state.shadowsArray;Oe.render(ee,A,G),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=v.opaque,W=v.transmissive;if(g.setupLights(),G.isArrayCamera){const Te=G.cameras;if(W.length>0)for(let Se=0,Ge=Te.length;Se<Ge;Se++){const ze=Te[Se];Mr(te,W,A,ze)}pt&&Qe.render(A);for(let Se=0,Ge=Te.length;Se<Ge;Se++){const ze=Te[Se];Sr(v,A,ze,ze.viewport)}}else W.length>0&&Mr(te,W,A,G),pt&&Qe.render(A),Sr(v,A,G);V!==null&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(R,A,G),Tt.resetDefaultState(),P=-1,C=null,D.pop(),D.length>0?(g=D[D.length-1],fe===!0&&ye.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?v=U[U.length-1]:v=null};function Mi(A,G,ee,te){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){te&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Se=de.update(A),Ge=A.material;Ge.visible&&v.push(A,Se,Ge,ee,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Se=de.update(A),Ge=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ze.copy(Se.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Se.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],gt=Ge[We.materialIndex];gt&&gt.visible&&v.push(A,Se,gt,ee,Ze.z,We)}}else Ge.visible&&v.push(A,Se,Ge,ee,Ze.z,null)}}const Te=A.children;for(let Se=0,Ge=Te.length;Se<Ge;Se++)Mi(Te[Se],G,ee,te)}function Sr(A,G,ee,te){const W=A.opaque,Te=A.transmissive,Se=A.transparent;g.setupLightsView(ee),fe===!0&&ye.setGlobalState(R.clippingPlanes,ee),te&&je.viewport(B.copy(te)),W.length>0&&Wi(W,G,ee),Te.length>0&&Wi(Te,G,ee),Se.length>0&&Wi(Se,G,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Mr(A,G,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new $r(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Bo:Vi,minFilter:qr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[te.id],Se=te.viewport||B;Te.setSize(Se.z,Se.w);const Ge=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(ae),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Qe.render(ee);const ze=R.toneMapping;R.toneMapping=vr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),fe===!0&&ye.setGlobalState(R.clippingPlanes,te),Wi(A,ee,te),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,gt=G.length;We<gt;We++){const Mt=G[We],mt=Mt.object,rn=Mt.geometry,st=Mt.material,Ye=Mt.group;if(st.side===Bi&&mt.layers.test(te.layers)){const Kn=st.side;st.side=Ln,st.needsUpdate=!0,Go(mt,ee,te,rn,st,Ye),st.side=Kn,st.needsUpdate=!0,nt=!0}}nt===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}R.setRenderTarget(Ge),R.setClearColor(ae,ce),et!==void 0&&(te.viewport=et),R.toneMapping=ze}function Wi(A,G,ee){const te=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Te=A.length;W<Te;W++){const Se=A[W],Ge=Se.object,ze=Se.geometry,et=te===null?Se.material:te,nt=Se.group;Ge.layers.test(ee.layers)&&Go(Ge,G,ee,ze,et,nt)}}function Go(A,G,ee,te,W,Te){A.onBeforeRender(R,G,ee,te,W,Te),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,G,ee,te,A,Te),W.transparent===!0&&W.side===Bi&&W.forceSinglePass===!1?(W.side=Ln,W.needsUpdate=!0,R.renderBufferDirect(ee,G,te,W,A,Te),W.side=xr,W.needsUpdate=!0,R.renderBufferDirect(ee,G,te,W,A,Te),W.side=Bi):R.renderBufferDirect(ee,G,te,W,A,Te),A.onAfterRender(R,G,ee,te,W,Te)}function Qr(A,G,ee){G.isScene!==!0&&(G=Ct);const te=qe.get(A),W=g.state.lights,Te=g.state.shadowsArray,Se=W.state.version,Ge=Ve.getParameters(A,W.state,Te,G,ee),ze=Ve.getProgramCacheKey(Ge);let et=te.programs;te.environment=A.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(A.isMeshStandardMaterial?Z:T).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,te.programs=et);let nt=et.get(ze);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Se)return fi(A,Ge),nt}else Ge.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Ge,R),nt=Ve.acquireProgram(Ge,ze),et.set(ze,nt),te.uniforms=Ge.uniforms;const We=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ye.uniform),fi(A,Ge),te.needsLights=Il(A),te.lightsStateVersion=Se,te.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Wo(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=El.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function fi(A,G){const ee=qe.get(A);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Xo(A,G,ee,te,W){G.isScene!==!0&&(G=Ct),L.resetTextureUnits();const Te=G.fog,Se=te.isMeshStandardMaterial?G.environment:null,Ge=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Xs,ze=(te.isMeshStandardMaterial?Z:T).get(te.envMap||Se),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,gt=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let mt=vr;te.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(mt=R.toneMapping);const rn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,st=rn!==void 0?rn.length:0,Ye=qe.get(te),Kn=g.state.lights;if(fe===!0&&(Me===!0||A!==C)){const pn=A===C&&te.id===P;ye.setState(te,A,pn)}let yt=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Kn.state.version||Ye.outputColorSpace!==Ge||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==ze||te.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ye.numPlanes||Ye.numIntersection!==ye.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==nt||Ye.morphTargets!==We||Ye.morphNormals!==gt||Ye.morphColors!==Mt||Ye.toneMapping!==mt||Ye.morphTargetsCount!==st)&&(yt=!0):(yt=!0,Ye.__version=te.version);let sn=Ye.currentProgram;yt===!0&&(sn=Qr(te,G,W));let Zn=!1,Xt=!1,di=!1;const Pt=sn.getUniforms(),kn=Ye.uniforms;if(je.useProgram(sn.program)&&(Zn=!0,Xt=!0,di=!0),te.id!==P&&(P=te.id,Xt=!0),Zn||C!==A){je.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),zv(ve),Hv(ve),Pt.setValue(X,"projectionMatrix",ve)):Pt.setValue(X,"projectionMatrix",A.projectionMatrix),Pt.setValue(X,"viewMatrix",A.matrixWorldInverse);const zn=Pt.map.cameraPosition;zn!==void 0&&zn.setValue(X,Ie.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Xt=!0,di=!0)}if(W.isSkinnedMesh){Pt.setOptional(X,W,"bindMatrix"),Pt.setOptional(X,W,"bindMatrixInverse");const pn=W.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Pt.setValue(X,"boneTexture",pn.boneTexture,L))}W.isBatchedMesh&&(Pt.setOptional(X,W,"batchingTexture"),Pt.setValue(X,"batchingTexture",W._matricesTexture,L),Pt.setOptional(X,W,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",W._indirectTexture,L),Pt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",W._colorsTexture,L));const Ei=ee.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Je.update(W,ee,sn),(Xt||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Pt.setValue(X,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(kn.envMap.value=ze,kn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(kn.envMapIntensity.value=G.environmentIntensity),Xt&&(Pt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&Yo(kn,di),Te&&te.fog===!0&&Ce.refreshFogUniforms(kn,Te),Ce.refreshMaterialUniforms(kn,te,k,ue,g.state.transmissionRenderTarget[A.id]),El.upload(X,Wo(Ye),kn,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(El.upload(X,Wo(Ye),kn,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(X,"center",W.center),Pt.setValue(X,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(X,"normalMatrix",W.normalMatrix),Pt.setValue(X,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const pn=te.uniformsGroups;for(let zn=0,xn=pn.length;zn<xn;zn++){const qo=pn[zn];H.update(qo,sn),H.bind(qo,sn)}}return sn}function Yo(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Il(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,G,ee){qe.get(A.texture).__webglTexture=G,qe.get(A.depthTexture).__webglTexture=ee;const te=qe.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const ee=qe.get(A);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,ee=0){V=A,O=G,N=ee;let te=!0,W=null,Te=!1,Se=!1;if(A){const ze=qe.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(X.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(ze.__hasExternalTextures)L.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Se=!0);const nt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?W=nt[G][ee]:W=nt[G],Te=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[ee]:W=nt,B.copy(A.viewport),ne.copy(A.scissor),K=A.scissorTest}else B.copy(I).multiplyScalar(k).floor(),ne.copy(ie).multiplyScalar(k).floor(),K=Ue;if(je.bindFramebuffer(X.FRAMEBUFFER,W)&&te&&je.drawBuffers(A,W),je.viewport(B),je.scissor(ne),je.setScissorTest(K),Te){const ze=qe.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,ee)}else if(Se){const ze=qe.get(A.texture),et=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,et)}P=-1},this.readRenderTargetPixels=function(A,G,ee,te,W,Te,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ge=Ge[Se]),Ge){je.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const ze=A.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-te&&ee>=0&&ee<=A.height-W&&X.readPixels(G,ee,te,W,it.convert(et),it.convert(nt),Te)}finally{const ze=V!==null?qe.get(V).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,G,ee,te,W,Te,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ge=Ge[Se]),Ge){const ze=A.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-te&&ee>=0&&ee<=A.height-W){je.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(G,ee,te,W,it.convert(et),it.convert(nt),0);const gt=V!==null?qe.get(V).__webglFramebuffer:null;je.bindFramebuffer(X.FRAMEBUFFER,gt);const Mt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await kv(X,Mt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(We),X.deleteSync(Mt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,ee=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-ee),W=Math.floor(A.image.width*te),Te=Math.floor(A.image.height*te),Se=G!==null?G.x:0,Ge=G!==null?G.y:0;L.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,Se,Ge,W,Te),je.unbindTexture()},this.copyTextureToTexture=function(A,G,ee=null,te=null,W=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,ee=null);let Te,Se,Ge,ze,et,nt,We,gt,Mt;const mt=A.isCompressedTexture?A.mipmaps[W]:A.image;ee!==null?(Te=ee.max.x-ee.min.x,Se=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,et=ee.min.y,nt=ee.isBox3?ee.min.z:0):(Te=mt.width,Se=mt.height,Ge=mt.depth||1,ze=0,et=0,nt=0),te!==null?(We=te.x,gt=te.y,Mt=te.z):(We=0,gt=0,Mt=0);const rn=it.convert(G.format),st=it.convert(G.type);let Ye;G.isData3DTexture?(L.setTexture3D(G,0),Ye=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Ye=X.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Ye=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);const Kn=X.getParameter(X.UNPACK_ROW_LENGTH),yt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),sn=X.getParameter(X.UNPACK_SKIP_PIXELS),Zn=X.getParameter(X.UNPACK_SKIP_ROWS),Xt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const di=A.isDataArrayTexture||A.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const kn=qe.get(A),Ei=qe.get(G),pn=qe.get(kn.__renderTarget),zn=qe.get(Ei.__renderTarget);je.bindFramebuffer(X.READ_FRAMEBUFFER,pn.__webglFramebuffer),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let xn=0;xn<Ge;xn++)di&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,W,nt+xn),A.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(G).__webglTexture,W,Mt+xn),X.blitFramebuffer(ze,et,Te,Se,We,gt,Te,Se,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(Ye,W,We,gt,Mt+xn,ze,et,Te,Se):X.copyTexSubImage2D(Ye,W,We,gt,Mt+xn,ze,et,Te,Se);je.bindFramebuffer(X.READ_FRAMEBUFFER,null),je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ye,W,We,gt,Mt,Te,Se,Ge,rn,st,mt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Ye,W,We,gt,Mt,Te,Se,Ge,rn,mt.data):X.texSubImage3D(Ye,W,We,gt,Mt,Te,Se,Ge,rn,st,mt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,We,gt,Te,Se,rn,st,mt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,We,gt,mt.width,mt.height,rn,mt.data):X.texSubImage2D(X.TEXTURE_2D,W,We,gt,Te,Se,rn,st,mt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Kn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,sn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Zn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Xt),W===0&&G.generateMipmaps&&X.generateMipmap(Ye),je.unbindTexture()},this.copyTextureToTexture3D=function(A,G,ee=null,te=null,W=0){return A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,ee,te,W)},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){O=0,N=0,V=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}class Xf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=n,this.far=r}clone(){return new Xf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ZM extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Al extends qs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new $,Rl=new $,ym=new Bt,Do=new Xm,gl=new bl,Yc=new $,Sm=new $;class ag extends en{constructor(e=new Pn,n=new Al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Cl.fromBufferAttribute(n,a-1),Rl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Cl.distanceTo(Rl);e.setAttribute("lineDistance",new Dn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(a),gl.radius+=u,e.ray.intersectsSphere(gl)===!1)return;ym.copy(a).invert(),Do.copy(e.ray).applyMatrix4(ym);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,v=E-1;w<v;w+=m){const g=_.getX(w),U=_.getX(w+1),D=_l(this,e,Do,p,g,U);D&&n.push(D)}if(this.isLineLoop){const w=_.getX(E-1),v=_.getX(S),g=_l(this,e,Do,p,w,v);g&&n.push(g)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let w=S,v=E-1;w<v;w+=m){const g=_l(this,e,Do,p,w,w+1);g&&n.push(g)}if(this.isLineLoop){const w=_l(this,e,Do,p,E-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function _l(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Cl.fromBufferAttribute(f,a),Rl.fromBufferAttribute(f,u),n.distanceSqToSegment(Cl,Rl,Yc,Sm)>r)return;Yc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Yc);if(!(p<e.near||p>e.far))return{distance:p,point:Sm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Mm=new $,Em=new $;class lg extends ag{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Mm.fromBufferAttribute(n,a),Em.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Mm.distanceTo(Em);e.setAttribute("lineDistance",new Dn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ul extends Pn{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],y=[],x=[],S=[];let E=0;const w=[],v=r/2;let g=0;U(),f===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new Dn(y,3)),this.setAttribute("normal",new Dn(x,3)),this.setAttribute("uv",new Dn(S,2));function U(){const R=new $,q=new $;let O=0;const N=(n-e)/r;for(let V=0;V<=u;V++){const P=[],C=V/u,B=C*(n-e)+e;for(let ne=0;ne<=a;ne++){const K=ne/a,ae=K*p+d,ce=Math.sin(ae),oe=Math.cos(ae);q.x=B*ce,q.y=-C*r+v,q.z=B*oe,y.push(q.x,q.y,q.z),R.set(ce,N,oe).normalize(),x.push(R.x,R.y,R.z),S.push(K,1-C),P.push(E++)}w.push(P)}for(let V=0;V<a;V++)for(let P=0;P<u;P++){const C=w[P][V],B=w[P+1][V],ne=w[P+1][V+1],K=w[P][V+1];(e>0||P!==0)&&(_.push(C,B,K),O+=3),(n>0||P!==u-1)&&(_.push(B,ne,K),O+=3)}m.addGroup(g,O,0),g+=O}function D(R){const q=E,O=new Et,N=new $;let V=0;const P=R===!0?e:n,C=R===!0?1:-1;for(let ne=1;ne<=a;ne++)y.push(0,v*C,0),x.push(0,C,0),S.push(.5,.5),E++;const B=E;for(let ne=0;ne<=a;ne++){const ae=ne/a*p+d,ce=Math.cos(ae),oe=Math.sin(ae);N.x=P*oe,N.y=v*C,N.z=P*ce,y.push(N.x,N.y,N.z),x.push(0,C,0),O.x=ce*.5+.5,O.y=oe*.5*C+.5,S.push(O.x,O.y),E++}for(let ne=0;ne<a;ne++){const K=q+ne,ae=B+ne;R===!0?_.push(ae,ae+1,K):_.push(ae+1,ae,K),V+=3}m.addGroup(g,V,R===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yf extends Ul{constructor(e=1,n=1,r=32,a=1,u=!1,f=0,d=Math.PI*2){super(0,e,n,r,a,u,f,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:f,thetaLength:d}}static fromJSON(e){return new Yf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends qs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zm,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ug extends en{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class QM extends ug{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const qc=new Bt,Tm=new $,wm=new $;class JM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Tm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tm),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eE extends JM{constructor(){super(new tg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tE extends ug{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new eE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nE extends lg{constructor(e=10,n=10,r=4473924,a=8947848){r=new ht(r),a=new ht(a);const u=n/2,f=e/n,d=e/2,p=[],m=[];for(let x=0,S=0,E=-d;x<=n;x++,E+=f){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const w=x===u?r:a;w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3}const _=new Pn;_.setAttribute("position",new Dn(p,3)),_.setAttribute("color",new Dn(m,3));const y=new Al({vertexColors:!0,toneMapped:!1});super(_,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);const iE={mode:"connecting",status:"Connecting to JetBot…",pose:[0,0,0],path:[],motors:[0,0],camera:{available:!1,width:0,height:0},host:"—",uptime_s:0,cpu_temp_c:null,memory_percent:null};function Hr(s,e=2){return Number.isFinite(s)?Number(s).toFixed(e):"—"}function rE({state:s}){const e=li.useRef(null),n=li.useRef(null);return li.useEffect(()=>{const r=e.current,a=new ZM;a.background=new ht("#08131f"),a.fog=new Xf("#08131f",7,22);const u=new $n(48,1,.01,100);u.position.set(3.8,3.3,4.8);const f=new KM({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.shadowMap.enabled=!0,r.appendChild(f.domElement),a.add(new QM("#b8e7ff","#122233",2.2));const d=new tE("#a5d8ff",2.7);d.position.set(3,6,2),d.castShadow=!0,a.add(d);const p=new Rn(new Vo(24,20),new Uo({color:"#0d2230",roughness:.92}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,a.add(p);const m=new nE(20,20,"#1e7384","#143447");m.position.y=.006,a.add(m);const _=new Fo,y=new Rn(new Kr(.62,.24,.48),new Uo({color:"#efb54d",metalness:.25,roughness:.5}));y.position.y=.23,y.castShadow=!0,_.add(y);const x=new Rn(new Kr(.38,.08,.34),new Uo({color:"#d8f2f3",emissive:"#183940",roughness:.35}));x.position.set(0,.39,-.02),x.castShadow=!0,_.add(x);const S=new Uo({color:"#172532",roughness:.65});for(const q of[-.36,.36]){const O=new Rn(new Ul(.13,.13,.08,24),S);O.rotation.z=Math.PI/2,O.position.set(q,.14,0),O.castShadow=!0,_.add(O)}const E=new Rn(new Yf(.1,.28,3),new Uo({color:"#33e1d2",emissive:"#0b4b4b"}));E.rotation.x=Math.PI/2,E.position.set(0,.29,-.34),_.add(E),a.add(_);const w=new lg(new Pn,new Al({color:"#ee6aab",transparent:!0,opacity:.75}));a.add(w);const v=new ag(new Pn,new Al({color:"#33e1d2",transparent:!0,opacity:.85}));a.add(v);const g=()=>{const q=r.clientWidth||1,O=r.clientHeight||1;u.aspect=q/O,u.updateProjectionMatrix(),f.setSize(q,O,!1)},U=new ResizeObserver(g);U.observe(r),g();let D;const R=()=>{D=requestAnimationFrame(R),f.render(a,u)};return R(),n.current={scene:a,camera:u,renderer:f,robot:_,frustum:w,trail:v},()=>{cancelAnimationFrame(D),U.disconnect(),f.dispose(),r.removeChild(f.domElement),n.current=null}},[]),li.useEffect(()=>{const r=n.current;if(!r)return;const{robot:a,frustum:u,trail:f,camera:d}=r,[p,m,_]=s.pose||[0,0,0];a.position.set(p,0,-m),a.rotation.y=-_;const y=new $(p,0,-m);d.position.lerp(new $(p+3.1,3,-m+3.8),.08),d.lookAt(y);const x=(s.path||[]).map(([D,R])=>new $(D,.025,-R));f.geometry.dispose(),f.geometry=new Pn().setFromPoints(x.length>1?x:[y,y]);const S=new $(p,.34,-m),E=new $(Math.sin(_),0,-Math.cos(_)),w=new $(Math.cos(_),0,Math.sin(_)),v=S.clone().addScaledVector(E,1.3),g=v.clone().addScaledVector(w,.55),U=v.clone().addScaledVector(w,-.55);u.geometry.dispose(),u.geometry=new Pn().setFromPoints([S,g,S,U,g,U])},[s]),we.createElement("div",{className:"scene",ref:e,"aria-label":"Three.js third-person robot view"})}function sE({available:s}){const[e,n]=li.useState(!1);return we.createElement("div",{className:"camera-panel"},s&&!e?we.createElement("img",{src:"/api/camera.mjpg",alt:"Live JetBot camera",onError:()=>n(!0)}):we.createElement("div",{className:"camera-empty"},we.createElement("div",{className:"camera-icon"},"◉"),we.createElement("p",null,s?"Camera stream reconnecting…":"Camera is not available yet"),we.createElement("span",null,"The dashboard stays usable while hardware is starting.")),we.createElement("div",{className:"camera-label"},we.createElement("span",{className:"live-dot"})," LIVE CAMERA"))}function oE({onMotor:s,onStop:e}){const n=li.useRef(!1),r=(f,d)=>{n.current=!0,s(f,d)},a=()=>{n.current=!1,e()};li.useEffect(()=>{const f={w:[.35,.35],s:[-.3,-.3],a:[-.25,.25],d:[.25,-.25]},d=m=>{if(m.target.tagName==="INPUT")return;const _=f[m.key.toLowerCase()];_&&(m.preventDefault(),r(..._))},p=m=>{f[m.key.toLowerCase()]&&a()};return window.addEventListener("keydown",d),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)}});const u=(f,d,p,m="")=>we.createElement("button",{className:`drive-button ${m}`,onPointerDown:()=>r(d,p),onPointerUp:a,onPointerLeave:a,"aria-label":f},f);return we.createElement("div",{className:"controls"},we.createElement("div",{className:"dpad"},we.createElement("div",null),u("▲",.35,.35),we.createElement("div",null),u("◀",-.25,.25),u("■",0,0,"stop-button"),u("▶",.25,-.25),we.createElement("div",null),u("▼",-.3,-.3),we.createElement("div",null)),we.createElement("p",{className:"hint"},"Hold a direction, or use W A S D. The motor command times out automatically."))}function aE(){var m,_,y,x;const[s,e]=li.useState(iE),[n,r]=li.useState("");li.useEffect(()=>{let S=!0;const E=async()=>{try{const v=await fetch("/api/state",{cache:"no-store"});if(!v.ok)throw new Error("state request failed");const g=await v.json();S&&(e(g),r(""))}catch{S&&r("Dashboard cannot reach the robot service.")}};E();const w=setInterval(E,500);return()=>{S=!1,clearInterval(w)}},[]);const a=async(S,E)=>{try{await fetch("/api/motor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({left:S,right:E})})}catch{r("Motor command was not sent.")}},u=()=>fetch("/api/stop",{method:"POST"}).catch(()=>r("Stop command was not sent.")),[f,d,p]=s.pose||[0,0,0];return we.createElement("main",null,we.createElement("header",{className:"topbar"},we.createElement("div",null,we.createElement("p",{className:"eyebrow"},"JETBOT LAB / LIVE DEVELOPMENT"),we.createElement("h1",null,"See it. Drive it. Understand it."),we.createElement("p",{className:"subhead"},"A small dashboard for camera experiments, navigation, and the next project idea.")),we.createElement("div",{className:`connection ${n?"offline":""}`},we.createElement("span",{className:"status-dot"}),n?"OFFLINE":s.mode==="hardware"?"JETBOT ONLINE":"SIMULATION MODE")),n&&we.createElement("div",{className:"alert"},n),we.createElement("section",{className:"hero-grid"},we.createElement("div",{className:"panel scene-panel"},we.createElement("div",{className:"panel-head"},we.createElement("div",null,we.createElement("span",{className:"kicker"},"THREE.JS VIEW"),we.createElement("h2",null,"Third-person view")),we.createElement("span",{className:"pill"},s.status||"Waiting")),we.createElement(rE,{state:s}),we.createElement("div",{className:"scene-legend"},we.createElement("span",null,we.createElement("i",{className:"swatch cyan"})," planned / recorded path"),we.createElement("span",null,we.createElement("i",{className:"swatch pink"})," camera frustum"))),we.createElement("div",{className:"side-stack"},we.createElement("div",{className:"panel camera-wrap"},we.createElement("div",{className:"panel-head"},we.createElement("div",null,we.createElement("span",{className:"kicker"},"SENSOR"),we.createElement("h2",null,"Camera feed")),we.createElement("span",{className:"mono"},((m=s.camera)==null?void 0:m.width)||0,"×",((_=s.camera)==null?void 0:_.height)||0)),we.createElement(sE,{available:(y=s.camera)==null?void 0:y.available})),we.createElement("div",{className:"panel controls-wrap"},we.createElement("div",{className:"panel-head"},we.createElement("div",null,we.createElement("span",{className:"kicker"},"MOTION"),we.createElement("h2",null,"Manual control")),we.createElement("span",{className:"mono"},(x=s.motors)==null?void 0:x.map(S=>Hr(S,2)).join(" / "))),we.createElement(oE,{onMotor:a,onStop:u})))),we.createElement("section",{className:"stats-grid"},we.createElement("div",{className:"stat"},we.createElement("span",null,"POSE X"),we.createElement("strong",null,Hr(f)," ",we.createElement("small",null,"m"))),we.createElement("div",{className:"stat"},we.createElement("span",null,"POSE Y"),we.createElement("strong",null,Hr(d)," ",we.createElement("small",null,"m"))),we.createElement("div",{className:"stat"},we.createElement("span",null,"HEADING"),we.createElement("strong",null,Hr(p*180/Math.PI,1),"°")),we.createElement("div",{className:"stat"},we.createElement("span",null,"CPU TEMP"),we.createElement("strong",null,s.cpu_temp_c==null?"—":`${Hr(s.cpu_temp_c,1)}°`)),we.createElement("div",{className:"stat"},we.createElement("span",null,"MEMORY"),we.createElement("strong",null,s.memory_percent==null?"—":`${Hr(s.memory_percent,0)}%`)),we.createElement("div",{className:"stat"},we.createElement("span",null,"UPTIME"),we.createElement("strong",null,Hr(s.uptime_s,0)," ",we.createElement("small",null,"s")))),we.createElement("footer",null,we.createElement("span",null,"JetBot host: ",we.createElement("b",null,s.host||"—")),we.createElement("span",null,"Pose source: ",we.createElement("b",null,s.pose_source||"wheel dead-reckoning")),we.createElement("span",null,"Local network dashboard · port 8080")))}$_.createRoot(document.getElementById("root")).render(we.createElement(aE,null));
