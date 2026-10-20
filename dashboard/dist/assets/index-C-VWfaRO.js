(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function K_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Z_(){if(Mp)return ft;Mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(I,re,De){this.props=I,this.context=re,this.refs=w,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,re){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,re,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function U(I,re,De){this.props=I,this.context=re,this.refs=w,this.updater=De||S}var b=U.prototype=new g;b.constructor=U,E(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,k={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function V(I,re,De){var ee,fe={},Me=null,ve=null;if(re!=null)for(ee in re.ref!==void 0&&(ve=re.ref),re.key!==void 0&&(Me=""+re.key),re)H.call(re,ee)&&!N.hasOwnProperty(ee)&&(fe[ee]=re[ee]);var we=arguments.length-2;if(we===1)fe.children=De;else if(1<we){for(var Ue=Array(we),Ze=0;Ze<we;Ze++)Ue[Ze]=arguments[Ze+2];fe.children=Ue}if(I&&I.defaultProps)for(ee in we=I.defaultProps,we)fe[ee]===void 0&&(fe[ee]=we[ee]);return{$$typeof:s,type:I,key:Me,ref:ve,props:fe,_owner:k.current}}function P(I,re){return{$$typeof:s,type:I.type,key:re,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function O(I){var re={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return re[De]})}var Q=/\/+/g;function q(I,re){return typeof I=="object"&&I!==null&&I.key!=null?O(""+I.key):re.toString(36)}function le(I,re,De,ee,fe){var Me=typeof I;(Me==="undefined"||Me==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case s:case e:ve=!0}}if(ve)return ve=I,fe=fe(ve),I=ee===""?"."+q(ve,0):ee,R(fe)?(De="",I!=null&&(De=I.replace(Q,"$&/")+"/"),le(fe,re,De,"",function(Ze){return Ze})):fe!=null&&(C(fe)&&(fe=P(fe,De+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(Q,"$&/")+"/")+I)),re.push(fe)),1;if(ve=0,ee=ee===""?".":ee+":",R(I))for(var we=0;we<I.length;we++){Me=I[we];var Ue=ee+q(Me,we);ve+=le(Me,re,De,Ue,fe)}else if(Ue=v(I),typeof Ue=="function")for(I=Ue.call(I),we=0;!(Me=I.next()).done;)Me=Me.value,Ue=ee+q(Me,we++),ve+=le(Me,re,De,Ue,fe);else if(Me==="object")throw re=String(I),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ve}function ce(I,re,De){if(I==null)return I;var ee=[],fe=0;return le(I,ee,"","",function(Me){return re.call(De,Me,fe++)}),ee}function K(I){if(I._status===-1){var re=I._result;re=re(),re.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=re)}if(I._status===1)return I._result.default;throw I._result}var oe={current:null},B={transition:null},ue={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:B,ReactCurrentOwner:k};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:ce,forEach:function(I,re,De){ce(I,function(){re.apply(this,arguments)},De)},count:function(I){var re=0;return ce(I,function(){re++}),re},toArray:function(I){return ce(I,function(re){return re})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ft.act=ae,ft.cloneElement=function(I,re,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ee=E({},I.props),fe=I.key,Me=I.ref,ve=I._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,ve=k.current),re.key!==void 0&&(fe=""+re.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Ue in re)H.call(re,Ue)&&!N.hasOwnProperty(Ue)&&(ee[Ue]=re[Ue]===void 0&&we!==void 0?we[Ue]:re[Ue])}var Ue=arguments.length-2;if(Ue===1)ee.children=De;else if(1<Ue){we=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)we[Ze]=arguments[Ze+2];ee.children=we}return{$$typeof:s,type:I.type,key:fe,ref:Me,props:ee,_owner:ve}},ft.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=V,ft.createFactory=function(I){var re=V.bind(null,I);return re.type=I,re},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=C,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:K}},ft.memo=function(I,re){return{$$typeof:m,type:I,compare:re===void 0?null:re}},ft.startTransition=function(I){var re=B.transition;B.transition={};try{I()}finally{B.transition=re}},ft.unstable_act=ae,ft.useCallback=function(I,re){return oe.current.useCallback(I,re)},ft.useContext=function(I){return oe.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return oe.current.useDeferredValue(I)},ft.useEffect=function(I,re){return oe.current.useEffect(I,re)},ft.useId=function(){return oe.current.useId()},ft.useImperativeHandle=function(I,re,De){return oe.current.useImperativeHandle(I,re,De)},ft.useInsertionEffect=function(I,re){return oe.current.useInsertionEffect(I,re)},ft.useLayoutEffect=function(I,re){return oe.current.useLayoutEffect(I,re)},ft.useMemo=function(I,re){return oe.current.useMemo(I,re)},ft.useReducer=function(I,re,De){return oe.current.useReducer(I,re,De)},ft.useRef=function(I){return oe.current.useRef(I)},ft.useState=function(I){return oe.current.useState(I)},ft.useSyncExternalStore=function(I,re,De){return oe.current.useSyncExternalStore(I,re,De)},ft.useTransition=function(){return oe.current.useTransition()},ft.version="18.3.1",ft}var Ep;function Nm(){return Ep||(Ep=1,_c.exports=Z_()),_c.exports}var li=Nm();const Ke=K_(li);var Za={},vc={exports:{}},Cn={},xc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Q_(){return Tp||(Tp=1,(function(s){function e(B,ue){var ae=B.length;B.push(ue);e:for(;0<ae;){var I=ae-1>>>1,re=B[I];if(0<a(re,ue))B[I]=ue,B[ae]=re,ae=I;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],ae=B.pop();if(ae!==ue){B[0]=ae;e:for(var I=0,re=B.length,De=re>>>1;I<De;){var ee=2*(I+1)-1,fe=B[ee],Me=ee+1,ve=B[Me];if(0>a(fe,ae))Me<re&&0>a(ve,fe)?(B[I]=ve,B[Me]=ae,I=Me):(B[I]=fe,B[ee]=ae,I=ee);else if(Me<re&&0>a(ve,ae))B[I]=ve,B[Me]=ae,I=Me;else break e}}return ue}function a(B,ue){var ae=B.sortIndex-ue.sortIndex;return ae!==0?ae:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,x=null,v=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=B)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function R(B){if(w=!1,b(B),!E)if(n(p)!==null)E=!0,K(H);else{var ue=n(m);ue!==null&&oe(R,ue.startTime-B)}}function H(B,ue){E=!1,w&&(w=!1,g(V),V=-1),S=!0;var ae=v;try{for(b(ue),x=n(p);x!==null&&(!(x.expirationTime>ue)||B&&!O());){var I=x.callback;if(typeof I=="function"){x.callback=null,v=x.priorityLevel;var re=I(x.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?x.callback=re:x===n(p)&&r(p),b(ue)}else r(p);x=n(p)}if(x!==null)var De=!0;else{var ee=n(m);ee!==null&&oe(R,ee.startTime-ue),De=!1}return De}finally{x=null,v=ae,S=!1}}var k=!1,N=null,V=-1,P=5,C=-1;function O(){return!(s.unstable_now()-C<P)}function Q(){if(N!==null){var B=s.unstable_now();C=B;var ue=!0;try{ue=N(!0,B)}finally{ue?q():(k=!1,N=null)}}else k=!1}var q;if(typeof U=="function")q=function(){U(Q)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=Q,q=function(){ce.postMessage(null)}}else q=function(){y(Q,0)};function K(B){N=B,k||(k=!0,q())}function oe(B,ue){V=y(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,K(H))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var ae=v;v=ue;try{return B()}finally{v=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=v;v=B;try{return ue()}finally{v=ae}},s.unstable_scheduleCallback=function(B,ue,ae){var I=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?I+ae:I):ae=I,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,B={id:_++,callback:ue,priorityLevel:B,startTime:ae,expirationTime:re,sortIndex:-1},ae>I?(B.sortIndex=ae,e(m,B),n(p)===null&&B===n(m)&&(w?(g(V),V=-1):w=!0,oe(R,ae-I))):(B.sortIndex=re,e(p,B),E||S||(E=!0,K(H))),B},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(B){var ue=v;return function(){var ae=v;v=ue;try{return B.apply(this,arguments)}finally{v=ae}}}})(yc)),yc}var wp;function J_(){return wp||(wp=1,xc.exports=Q_()),xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function ev(){if(Ap)return Cn;Ap=1;var s=Nm(),e=J_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);y[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,c,l)&&(o=null),l||c===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,I;function re(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var De=!1;function ee(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,D=h.length-1;1<=M&&0<=D&&c[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==h[D]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=D);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function fe(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case k:return"Portal";case P:return"Profiler";case V:return"StrictMode";case q:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case Q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case K:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Ze(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Y(t,i){var o=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function hn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||Lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ye=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function J(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ye(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function pe(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Oe=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,se=null,he=null;function Le(t){if(t=ho(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=da(i),Ce(t.stateNode,t.type,i))}}function Pe(t){se?he?he.push(t):he=[t]:se=t}function rt(){if(se){var t=se,i=he;if(he=se=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Dt(t,i){return t(i)}function Wt(){}var _t=!1;function yn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Dt(t,i,o)}finally{_t=!1,(se!==null||he!==null)&&(Wt(),rt())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var l=da(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{Qr=!1}function Si(t,i,o,l,c,h,M,D,F){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(_e){this.onError(_e)}}var Mi=!1,Sr=null,Mr=!1,Wi=null,Yo={onError:function(t){Mi=!0,Sr=t}};function Jr(t,i,o,l,c,h,M,D,F){Mi=!1,Sr=null,Si.apply(Yo,arguments)}function qo(t,i,o,l,c,h,M,D,F){if(Jr.apply(this,arguments),Mi){if(Mi){var te=Sr;Mi=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Wi=te)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function $o(t){if(fi(t)!==t)throw Error(n(188))}function Bl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return $o(c),t;if(h===l)return $o(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=h;break}if(D===l){M=!0,l=c,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=c;break}if(D===l){M=!0,l=h,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function A(t){return t=Bl(t),t!==null?W(t):null}function W(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=W(t);if(i!==null)return i;t=t.sibling}return null}var ne=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,X=e.unstable_shouldYield,Te=e.unstable_requestPaint,Se=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,Be=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Mt=null,mt=null;function sn(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,Xe=Math.log,Kn=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(Xe(t)/Kn|0)|0}var on=64,Zn=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function di(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=Xt(D):(h&=M,h!==0&&(l=Xt(h)))}else M=o&~c,M!==0?l=Xt(M):h!==0&&(l=Xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),D=1<<M,F=c[M];F===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Pt(D,i)):F<=i&&(t.expiredLanes|=D),h&=~D}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mn(){var t=on;return on<<=1,(on&4194240)===0&&(on=64),t}function zn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Sn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Ko(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function zl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var At=0;function ed(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var td,Hl,nd,id,rd,Vl=!1,Zo=[],Xi=null,Yi=null,qi=null,Ks=new Map,Zs=new Map,ji=[],vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sd(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ho(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function xg(t,i,o,l,c){switch(i){case"focusin":return Xi=Qs(Xi,t,i,o,l,c),!0;case"dragenter":return Yi=Qs(Yi,t,i,o,l,c),!0;case"mouseover":return qi=Qs(qi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Ks.set(h,Qs(Ks.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Zs.set(h,Qs(Zs.get(h)||null,t,i,o,l,c)),!0}return!1}function od(t){var i=Er(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=jo(o),i!==null){t.blockedOn=i,rd(t.priority,function(){nd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=ho(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function ad(t,i,o){Qo(t)&&o.delete(i)}function yg(){Vl=!1,Xi!==null&&Qo(Xi)&&(Xi=null),Yi!==null&&Qo(Yi)&&(Yi=null),qi!==null&&Qo(qi)&&(qi=null),Ks.forEach(ad),Zs.forEach(ad)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yg)))}function eo(t){function i(c){return Js(c,t)}if(0<Zo.length){Js(Zo[0],t);for(var o=1;o<Zo.length;o++){var l=Zo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Js(Xi,t),Yi!==null&&Js(Yi,t),qi!==null&&Js(qi,t),Ks.forEach(i),Zs.forEach(i),o=0;o<ji.length;o++)l=ji[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(o=ji[0],o.blockedOn===null);)od(o),o.blockedOn===null&&ji.shift()}var es=R.ReactCurrentBatchConfig,Jo=!0;function Sg(t,i,o,l){var c=At,h=es.transition;es.transition=null;try{At=1,Gl(t,i,o,l)}finally{At=c,es.transition=h}}function Mg(t,i,o,l){var c=At,h=es.transition;es.transition=null;try{At=4,Gl(t,i,o,l)}finally{At=c,es.transition=h}}function Gl(t,i,o,l){if(Jo){var c=Wl(t,i,o,l);if(c===null)au(t,i,l,ea,o),sd(t,l);else if(xg(c,t,i,o,l))l.stopPropagation();else if(sd(t,l),i&4&&-1<vg.indexOf(t)){for(;c!==null;){var h=ho(c);if(h!==null&&td(h),h=Wl(t,i,o,l),h===null&&au(t,i,l,ea,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else au(t,i,l,null,o)}}var ea=null;function Wl(t,i,o,l){if(ea=null,t=G(l),t=Er(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ea=t,null}function ld(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case Be:return 1;case et:return 4;case nt:case Ge:return 16;case gt:return 536870912;default:return 16}default:return 16}}var $i=null,Xl=null,ta=null;function ud(){if(ta)return ta;var t,i=Xl,o=i.length,l,c="value"in $i?$i.value:$i.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return ta=c.slice(t,1<l?1-l:void 0)}function na(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function cd(){return!1}function Un(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ia:cd,this.isPropagationStopped=cd,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Un(ts),to=ae({},ts,{view:0,detail:0}),Eg=Un(to),ql,jl,no,ra=ae({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(ql=t.screenX-no.screenX,jl=t.screenY-no.screenY):jl=ql=0,no=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),fd=Un(ra),Tg=ae({},ra,{dataTransfer:0}),wg=Un(Tg),Ag=ae({},to,{relatedTarget:0}),$l=Un(Ag),Cg=ae({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Rg=Un(Cg),Pg=ae({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lg=Un(Pg),bg=ae({},ts,{data:0}),dd=Un(bg),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ig[t])?!!i[t]:!1}function Kl(){return Ng}var Fg=ae({},to,{key:function(t){if(t.key){var i=Dg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Og=Un(Fg),kg=ae({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hd=Un(kg),Bg=ae({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),zg=Un(Bg),Hg=ae({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vg=Un(Hg),Gg=ae({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=Un(Gg),Xg=[9,13,27,32],Zl=d&&"CompositionEvent"in window,io=null;d&&"documentMode"in document&&(io=document.documentMode);var Yg=d&&"TextEvent"in window&&!io,pd=d&&(!Zl||io&&8<io&&11>=io),md=" ",gd=!1;function _d(t,i){switch(t){case"keyup":return Xg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function qg(t,i){switch(t){case"compositionend":return vd(i);case"keypress":return i.which!==32?null:(gd=!0,md);case"textInput":return t=i.data,t===md&&gd?null:t;default:return null}}function jg(t,i){if(ns)return t==="compositionend"||!Zl&&_d(t,i)?(t=ud(),ta=Xl=$i=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pd&&i.locale!=="ko"?null:i.data;default:return null}}var $g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!$g[t.type]:i==="textarea"}function yd(t,i,o,l){Pe(l),i=ua(i,"onChange"),0<i.length&&(o=new Yl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ro=null,so=null;function Kg(t){kd(t,0)}function sa(t){var i=as(t);if(pt(i))return t}function Zg(t,i){if(t==="change")return i}var Sd=!1;if(d){var Ql;if(d){var Jl="oninput"in document;if(!Jl){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Jl=typeof Md.oninput=="function"}Ql=Jl}else Ql=!1;Sd=Ql&&(!document.documentMode||9<document.documentMode)}function Ed(){ro&&(ro.detachEvent("onpropertychange",Td),so=ro=null)}function Td(t){if(t.propertyName==="value"&&sa(so)){var i=[];yd(i,so,t,G(t)),yn(Kg,i)}}function Qg(t,i,o){t==="focusin"?(Ed(),ro=i,so=o,ro.attachEvent("onpropertychange",Td)):t==="focusout"&&Ed()}function Jg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sa(so)}function e_(t,i){if(t==="click")return sa(i)}function t_(t,i){if(t==="input"||t==="change")return sa(i)}function n_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:n_;function oo(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function wd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,i){var o=wd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=wd(o)}}function Cd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Cd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Rd(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Lt(t.document)}return i}function eu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function i_(t){var i=Rd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Cd(o.ownerDocument.documentElement,o)){if(l!==null&&eu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Ad(o,h);var M=Ad(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var r_=d&&"documentMode"in document&&11>=document.documentMode,is=null,tu=null,ao=null,nu=!1;function Pd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nu||is==null||is!==Lt(l)||(l=is,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ao&&oo(ao,l)||(ao=l,l=ua(tu,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function oa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},iu={},Ld={};d&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function aa(t){if(iu[t])return iu[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ld)return iu[t]=i[o];return t}var bd=aa("animationend"),Dd=aa("animationiteration"),Ud=aa("animationstart"),Id=aa("transitionend"),Nd=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Nd.set(t,i),u(i,[t])}for(var ru=0;ru<Fd.length;ru++){var su=Fd[ru],s_=su.toLowerCase(),o_=su[0].toUpperCase()+su.slice(1);Ki(s_,"on"+o_)}Ki(bd,"onAnimationEnd"),Ki(Dd,"onAnimationIteration"),Ki(Ud,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Id,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Od(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,qo(l,i,void 0,t),t.currentTarget=null}function kd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],F=D.instance,te=D.currentTarget;if(D=D.listener,F!==h&&c.isPropagationStopped())break e;Od(c,D,te),h=F}else for(M=0;M<l.length;M++){if(D=l[M],F=D.instance,te=D.currentTarget,D=D.listener,F!==h&&c.isPropagationStopped())break e;Od(c,D,te),h=F}}}if(Mr)throw t=Wi,Mr=!1,Wi=null,t}function Ut(t,i){var o=i[hu];o===void 0&&(o=i[hu]=new Set);var l=t+"__bubble";o.has(l)||(Bd(i,t,2,!1),o.add(l))}function ou(t,i,o){var l=0;i&&(l|=4),Bd(o,t,l,i)}var la="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[la]){t[la]=!0,r.forEach(function(o){o!=="selectionchange"&&(a_.has(o)||ou(o,!1,t),ou(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[la]||(i[la]=!0,ou("selectionchange",!1,i))}}function Bd(t,i,o,l){switch(ld(i)){case 1:var c=Sg;break;case 4:c=Mg;break;default:c=Gl}o=c.bind(null,i,o,t),c=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function au(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Er(D),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}D=D.parentNode}}l=l.return}yn(function(){var te=h,_e=G(o),xe=[];e:{var me=Nd.get(t);if(me!==void 0){var be=Yl,ke=t;switch(t){case"keypress":if(na(o)===0)break e;case"keydown":case"keyup":be=Og;break;case"focusin":ke="focus",be=$l;break;case"focusout":ke="blur",be=$l;break;case"beforeblur":case"afterblur":be=$l;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=zg;break;case bd:case Dd:case Ud:be=Rg;break;case Id:be=Vg;break;case"scroll":be=Eg;break;case"wheel":be=Wg;break;case"copy":case"cut":case"paste":be=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=hd}var ze=(i&4)!==0,Ht=!ze&&t==="scroll",j=ze?me!==null?me+"Capture":null:me;ze=[];for(var z=te,Z;z!==null;){Z=z;var Ee=Z.stateNode;if(Z.tag===5&&Ee!==null&&(Z=Ee,j!==null&&(Ee=pn(z,j),Ee!=null&&ze.push(co(z,Ee,Z)))),Ht)break;z=z.return}0<ze.length&&(me=new be(me,ke,null,o,_e),xe.push({event:me,listeners:ze}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",me&&o!==Tt&&(ke=o.relatedTarget||o.fromElement)&&(Er(ke)||ke[Ti]))break e;if((be||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,be?(ke=o.relatedTarget||o.toElement,be=te,ke=ke?Er(ke):null,ke!==null&&(Ht=fi(ke),ke!==Ht||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(be=null,ke=te),be!==ke)){if(ze=fd,Ee="onMouseLeave",j="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(ze=hd,Ee="onPointerLeave",j="onPointerEnter",z="pointer"),Ht=be==null?me:as(be),Z=ke==null?me:as(ke),me=new ze(Ee,z+"leave",be,o,_e),me.target=Ht,me.relatedTarget=Z,Ee=null,Er(_e)===te&&(ze=new ze(j,z+"enter",ke,o,_e),ze.target=Z,ze.relatedTarget=Ht,Ee=ze),Ht=Ee,be&&ke)t:{for(ze=be,j=ke,z=0,Z=ze;Z;Z=ss(Z))z++;for(Z=0,Ee=j;Ee;Ee=ss(Ee))Z++;for(;0<z-Z;)ze=ss(ze),z--;for(;0<Z-z;)j=ss(j),Z--;for(;z--;){if(ze===j||j!==null&&ze===j.alternate)break t;ze=ss(ze),j=ss(j)}ze=null}else ze=null;be!==null&&zd(xe,me,be,ze,!1),ke!==null&&Ht!==null&&zd(xe,Ht,ke,ze,!0)}}e:{if(me=te?as(te):window,be=me.nodeName&&me.nodeName.toLowerCase(),be==="select"||be==="input"&&me.type==="file")var We=Zg;else if(xd(me))if(Sd)We=t_;else{We=Jg;var je=Qg}else(be=me.nodeName)&&be.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=e_);if(We&&(We=We(t,te))){yd(xe,We,o,_e);break e}je&&je(t,me,te),t==="focusout"&&(je=me._wrapperState)&&je.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch(je=te?as(te):window,t){case"focusin":(xd(je)||je.contentEditable==="true")&&(is=je,tu=te,ao=null);break;case"focusout":ao=tu=is=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Pd(xe,o,_e);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Pd(xe,o,_e)}var $e;if(Zl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else ns?_d(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(pd&&o.locale!=="ko"&&(ns||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&ns&&($e=ud()):($i=_e,Xl="value"in $i?$i.value:$i.textContent,ns=!0)),je=ua(te,tt),0<je.length&&(tt=new dd(tt,t,null,o,_e),xe.push({event:tt,listeners:je}),$e?tt.data=$e:($e=vd(o),$e!==null&&(tt.data=$e)))),($e=Yg?qg(t,o):jg(t,o))&&(te=ua(te,"onBeforeInput"),0<te.length&&(_e=new dd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:te}),_e.data=$e))}kd(xe,i)})}function co(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=pn(t,o),h!=null&&l.unshift(co(t,h,c)),h=pn(t,i),h!=null&&l.push(co(t,h,c))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zd(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,F=D.alternate,te=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&te!==null&&(D=te,c?(F=pn(o,h),F!=null&&M.unshift(co(o,F,D))):c||(F=pn(o,h),F!=null&&M.push(co(o,F,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var l_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function Hd(t){return(typeof t=="string"?t:""+t).replace(l_,`
`).replace(u_,"")}function ca(t,i,o){if(i=Hd(i),Hd(t)!==i&&o)throw Error(n(425))}function fa(){}var lu=null,uu=null;function cu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,c_=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(t){return Vd.resolve(null).then(t).catch(d_)}:fu;function d_(t){setTimeout(function(){throw t})}function du(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),eo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);eo(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),hi="__reactFiber$"+os,fo="__reactProps$"+os,Ti="__reactContainer$"+os,hu="__reactEvents$"+os,h_="__reactListeners$"+os,p_="__reactHandles$"+os;function Er(t){var i=t[hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Gd(t);t!==null;){if(o=t[hi])return o;t=Gd(t)}return i}t=o,o=t.parentNode}return null}function ho(t){return t=t[hi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function da(t){return t[fo]||null}var pu=[],ls=-1;function Qi(t){return{current:t}}function It(t){0>ls||(t.current=pu[ls],pu[ls]=null,ls--)}function bt(t,i){ls++,pu[ls]=t.current,t.current=i}var Ji={},an=Qi(Ji),Mn=Qi(!1),Tr=Ji;function us(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function En(t){return t=t.childContextTypes,t!=null}function ha(){It(Mn),It(an)}function Wd(t,i,o){if(an.current!==Ji)throw Error(n(168));bt(an,i),bt(Mn,o)}function Xd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return ae({},o,l)}function pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=an.current,bt(an,t),bt(Mn,Mn.current),!0}function Yd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Xd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(Mn),It(an),bt(an,t)):It(Mn),bt(Mn,o)}var wi=null,ma=!1,mu=!1;function qd(t){wi===null?wi=[t]:wi.push(t)}function m_(t){ma=!0,qd(t)}function er(){if(!mu&&wi!==null){mu=!0;var t=0,i=At;try{var o=wi;for(At=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,ma=!1}catch(c){throw wi!==null&&(wi=wi.slice(t+1)),ne(Be,er),c}finally{At=i,mu=!1}}return null}var cs=[],fs=0,ga=null,_a=0,Hn=[],Vn=0,wr=null,Ai=1,Ci="";function Ar(t,i){cs[fs++]=_a,cs[fs++]=ga,ga=t,_a=i}function jd(t,i,o){Hn[Vn++]=Ai,Hn[Vn++]=Ci,Hn[Vn++]=wr,wr=t;var l=Ai;t=Ci;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ai=1<<32-st(i)+c|o<<c|l,Ci=h+t}else Ai=1<<h|o<<c|l,Ci=t}function gu(t){t.return!==null&&(Ar(t,1),jd(t,1,0))}function _u(t){for(;t===ga;)ga=cs[--fs],cs[fs]=null,_a=cs[--fs],cs[fs]=null;for(;t===wr;)wr=Hn[--Vn],Hn[Vn]=null,Ci=Hn[--Vn],Hn[Vn]=null,Ai=Hn[--Vn],Hn[Vn]=null}var In=null,Nn=null,Nt=!1,Jn=null;function $d(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Kd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Nn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,In=t,Nn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(Nt){var i=Nn;if(i){var o=i;if(!Kd(t,i)){if(vu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=In;i&&Kd(t,i)?$d(l,o):(t.flags=t.flags&-4097|2,Nt=!1,In=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,In=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function va(t){if(t!==In)return!1;if(!Nt)return Zd(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cu(t.type,t.memoizedProps)),i&&(i=Nn)){if(vu(t))throw Qd(),Error(n(418));for(;i;)$d(t,i),i=Zi(i.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Nn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=In?Zi(t.stateNode.nextSibling):null;return!0}function Qd(){for(var t=Nn;t;)t=Zi(t.nextSibling)}function ds(){Nn=In=null,Nt=!1}function yu(t){Jn===null?Jn=[t]:Jn.push(t)}var g_=R.ReactCurrentBatchConfig;function po(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=c.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function xa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Jd(t){var i=t._init;return i(t._payload)}function eh(t){function i(j,z){if(t){var Z=j.deletions;Z===null?(j.deletions=[z],j.flags|=16):Z.push(z)}}function o(j,z){if(!t)return null;for(;z!==null;)i(j,z),z=z.sibling;return null}function l(j,z){for(j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function c(j,z){return j=lr(j,z),j.index=0,j.sibling=null,j}function h(j,z,Z){return j.index=Z,t?(Z=j.alternate,Z!==null?(Z=Z.index,Z<z?(j.flags|=2,z):Z):(j.flags|=2,z)):(j.flags|=1048576,z)}function M(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,z,Z,Ee){return z===null||z.tag!==6?(z=fc(Z,j.mode,Ee),z.return=j,z):(z=c(z,Z),z.return=j,z)}function F(j,z,Z,Ee){var We=Z.type;return We===N?_e(j,z,Z.props.children,Ee,Z.key):z!==null&&(z.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&Jd(We)===z.type)?(Ee=c(z,Z.props),Ee.ref=po(j,z,Z),Ee.return=j,Ee):(Ee=Ga(Z.type,Z.key,Z.props,null,j.mode,Ee),Ee.ref=po(j,z,Z),Ee.return=j,Ee)}function te(j,z,Z,Ee){return z===null||z.tag!==4||z.stateNode.containerInfo!==Z.containerInfo||z.stateNode.implementation!==Z.implementation?(z=dc(Z,j.mode,Ee),z.return=j,z):(z=c(z,Z.children||[]),z.return=j,z)}function _e(j,z,Z,Ee,We){return z===null||z.tag!==7?(z=Ir(Z,j.mode,Ee,We),z.return=j,z):(z=c(z,Z),z.return=j,z)}function xe(j,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number")return z=fc(""+z,j.mode,Z),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return Z=Ga(z.type,z.key,z.props,null,j.mode,Z),Z.ref=po(j,null,z),Z.return=j,Z;case k:return z=dc(z,j.mode,Z),z.return=j,z;case K:var Ee=z._init;return xe(j,Ee(z._payload),Z)}if(Ye(z)||ue(z))return z=Ir(z,j.mode,Z,null),z.return=j,z;xa(j,z)}return null}function me(j,z,Z,Ee){var We=z!==null?z.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return We!==null?null:D(j,z,""+Z,Ee);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case H:return Z.key===We?F(j,z,Z,Ee):null;case k:return Z.key===We?te(j,z,Z,Ee):null;case K:return We=Z._init,me(j,z,We(Z._payload),Ee)}if(Ye(Z)||ue(Z))return We!==null?null:_e(j,z,Z,Ee,null);xa(j,Z)}return null}function be(j,z,Z,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return j=j.get(Z)||null,D(z,j,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case H:return j=j.get(Ee.key===null?Z:Ee.key)||null,F(z,j,Ee,We);case k:return j=j.get(Ee.key===null?Z:Ee.key)||null,te(z,j,Ee,We);case K:var je=Ee._init;return be(j,z,Z,je(Ee._payload),We)}if(Ye(Ee)||ue(Ee))return j=j.get(Z)||null,_e(z,j,Ee,We,null);xa(z,Ee)}return null}function ke(j,z,Z,Ee){for(var We=null,je=null,$e=z,tt=z=0,Jt=null;$e!==null&&tt<Z.length;tt++){$e.index>tt?(Jt=$e,$e=null):Jt=$e.sibling;var St=me(j,$e,Z[tt],Ee);if(St===null){$e===null&&($e=Jt);break}t&&$e&&St.alternate===null&&i(j,$e),z=h(St,z,tt),je===null?We=St:je.sibling=St,je=St,$e=Jt}if(tt===Z.length)return o(j,$e),Nt&&Ar(j,tt),We;if($e===null){for(;tt<Z.length;tt++)$e=xe(j,Z[tt],Ee),$e!==null&&(z=h($e,z,tt),je===null?We=$e:je.sibling=$e,je=$e);return Nt&&Ar(j,tt),We}for($e=l(j,$e);tt<Z.length;tt++)Jt=be($e,j,tt,Z[tt],Ee),Jt!==null&&(t&&Jt.alternate!==null&&$e.delete(Jt.key===null?tt:Jt.key),z=h(Jt,z,tt),je===null?We=Jt:je.sibling=Jt,je=Jt);return t&&$e.forEach(function(ur){return i(j,ur)}),Nt&&Ar(j,tt),We}function ze(j,z,Z,Ee){var We=ue(Z);if(typeof We!="function")throw Error(n(150));if(Z=We.call(Z),Z==null)throw Error(n(151));for(var je=We=null,$e=z,tt=z=0,Jt=null,St=Z.next();$e!==null&&!St.done;tt++,St=Z.next()){$e.index>tt?(Jt=$e,$e=null):Jt=$e.sibling;var ur=me(j,$e,St.value,Ee);if(ur===null){$e===null&&($e=Jt);break}t&&$e&&ur.alternate===null&&i(j,$e),z=h(ur,z,tt),je===null?We=ur:je.sibling=ur,je=ur,$e=Jt}if(St.done)return o(j,$e),Nt&&Ar(j,tt),We;if($e===null){for(;!St.done;tt++,St=Z.next())St=xe(j,St.value,Ee),St!==null&&(z=h(St,z,tt),je===null?We=St:je.sibling=St,je=St);return Nt&&Ar(j,tt),We}for($e=l(j,$e);!St.done;tt++,St=Z.next())St=be($e,j,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&$e.delete(St.key===null?tt:St.key),z=h(St,z,tt),je===null?We=St:je.sibling=St,je=St);return t&&$e.forEach(function($_){return i(j,$_)}),Nt&&Ar(j,tt),We}function Ht(j,z,Z,Ee){if(typeof Z=="object"&&Z!==null&&Z.type===N&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case H:e:{for(var We=Z.key,je=z;je!==null;){if(je.key===We){if(We=Z.type,We===N){if(je.tag===7){o(j,je.sibling),z=c(je,Z.props.children),z.return=j,j=z;break e}}else if(je.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===K&&Jd(We)===je.type){o(j,je.sibling),z=c(je,Z.props),z.ref=po(j,je,Z),z.return=j,j=z;break e}o(j,je);break}else i(j,je);je=je.sibling}Z.type===N?(z=Ir(Z.props.children,j.mode,Ee,Z.key),z.return=j,j=z):(Ee=Ga(Z.type,Z.key,Z.props,null,j.mode,Ee),Ee.ref=po(j,z,Z),Ee.return=j,j=Ee)}return M(j);case k:e:{for(je=Z.key;z!==null;){if(z.key===je)if(z.tag===4&&z.stateNode.containerInfo===Z.containerInfo&&z.stateNode.implementation===Z.implementation){o(j,z.sibling),z=c(z,Z.children||[]),z.return=j,j=z;break e}else{o(j,z);break}else i(j,z);z=z.sibling}z=dc(Z,j.mode,Ee),z.return=j,j=z}return M(j);case K:return je=Z._init,Ht(j,z,je(Z._payload),Ee)}if(Ye(Z))return ke(j,z,Z,Ee);if(ue(Z))return ze(j,z,Z,Ee);xa(j,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,z!==null&&z.tag===6?(o(j,z.sibling),z=c(z,Z),z.return=j,j=z):(o(j,z),z=fc(Z,j.mode,Ee),z.return=j,j=z),M(j)):o(j,z)}return Ht}var hs=eh(!0),th=eh(!1),ya=Qi(null),Sa=null,ps=null,Su=null;function Mu(){Su=ps=Sa=null}function Eu(t){var i=ya.current;It(ya),t._currentValue=i}function Tu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Sa=t,Su=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Sa===null)throw Error(n(308));ps=t,Sa.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Cr=null;function wu(t){Cr===null?Cr=[t]:Cr.push(t)}function nh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,wu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ih(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ri(t,o)}return c=l.interleaved,c===null?(i.next=i,wu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ri(t,o)}function Ma(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}function rh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ea(t,i,o,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var F=D,te=F.next;F.next=null,M===null?h=te:M.next=te,M=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=te:D.next=te,_e.lastBaseUpdate=F))}if(h!==null){var xe=c.baseState;M=0,_e=te=F=null,D=h;do{var me=D.lane,be=D.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ke=t,ze=D;switch(me=i,be=o,ze.tag){case 1:if(ke=ze.payload,typeof ke=="function"){xe=ke.call(be,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=ze.payload,me=typeof ke=="function"?ke.call(be,xe,me):ke,me==null)break e;xe=ae({},xe,me);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else be={eventTime:be,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(te=_e=be,F=xe):_e=_e.next=be,M|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=te,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=xe}}function sh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var mo={},pi=Qi(mo),go=Qi(mo),_o=Qi(mo);function Rr(t){if(t===mo)throw Error(n(174));return t}function Cu(t,i){switch(bt(_o,i),bt(go,t),bt(pi,mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}It(pi),bt(pi,i)}function gs(){It(pi),It(go),It(_o)}function oh(t){Rr(_o.current);var i=Rr(pi.current),o=He(i,t.type);i!==o&&(bt(go,t),bt(pi,o))}function Ru(t){go.current===t&&(It(pi),It(go))}var Ot=Qi(0);function Ta(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Lu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var wa=R.ReactCurrentDispatcher,bu=R.ReactCurrentBatchConfig,Pr=0,kt=null,Yt=null,Zt=null,Aa=!1,vo=!1,xo=0,__=0;function ln(){throw Error(n(321))}function Du(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Uu(t,i,o,l,c,h){if(Pr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wa.current=t===null||t.memoizedState===null?S_:M_,t=o(l,c),vo){h=0;do{if(vo=!1,xo=0,25<=h)throw Error(n(301));h+=1,Zt=Yt=null,i.updateQueue=null,wa.current=E_,t=o(l,c)}while(vo)}if(wa.current=Pa,i=Yt!==null&&Yt.next!==null,Pr=0,Zt=Yt=kt=null,Aa=!1,i)throw Error(n(300));return t}function Iu(){var t=xo!==0;return xo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?kt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Wn(){if(Yt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Zt===null?kt.memoizedState:Zt.next;if(i!==null)Zt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Zt===null?kt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function yo(t,i){return typeof i=="function"?i(t):i}function Nu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=M=null,F=null,te=h;do{var _e=te.lane;if((Pr&_e)===_e)F!==null&&(F=F.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var xe={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};F===null?(D=F=xe,M=l):F=F.next=xe,kt.lanes|=_e,Lr|=_e}te=te.next}while(te!==null&&te!==h);F===null?M=l:F.next=D,Qn(l,i.memoizedState)||(Tn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,Lr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Qn(h,i.memoizedState)||(Tn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function ah(){}function lh(t,i){var o=kt,l=Wn(),c=i(),h=!Qn(l.memoizedState,c);if(h&&(l.memoizedState=c,Tn=!0),l=l.queue,Ou(fh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,So(9,ch.bind(null,o,l,c,i),void 0,null),Qt===null)throw Error(n(349));(Pr&30)!==0||uh(o,i,c)}return c}function uh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ch(t,i,o,l){i.value=o,i.getSnapshot=l,dh(i)&&hh(t)}function fh(t,i,o){return o(function(){dh(i)&&hh(t)})}function dh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function hh(t){var i=Ri(t,1);i!==null&&ii(i,t,1,-1)}function ph(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},i.queue=t,t=t.dispatch=y_.bind(null,kt,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function mh(){return Wn().memoizedState}function Ca(t,i,o,l){var c=mi();kt.flags|=t,c.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function Ra(t,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Du(l,M.deps)){c.memoizedState=So(i,o,h,l);return}}kt.flags|=t,c.memoizedState=So(1|i,o,h,l)}function gh(t,i){return Ca(8390656,8,t,i)}function Ou(t,i){return Ra(2048,8,t,i)}function _h(t,i){return Ra(4,2,t,i)}function vh(t,i){return Ra(4,4,t,i)}function xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function yh(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4,4,xh.bind(null,i,t),o)}function ku(){}function Sh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Mh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Eh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=o):(Qn(o,i)||(o=mn(),kt.lanes|=o,Lr|=o,t.baseState=!0),i)}function v_(t,i){var o=At;At=o!==0&&4>o?o:4,t(!0);var l=bu.transition;bu.transition={};try{t(!1),i()}finally{At=o,bu.transition=l}}function Th(){return Wn().memoizedState}function x_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},wh(t))Ah(i,o);else if(o=nh(t,i,o,l),o!==null){var c=_n();ii(o,t,l,c),Ch(o,i,l)}}function y_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(wh(t))Ah(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(c.hasEagerState=!0,c.eagerState=D,Qn(D,M)){var F=i.interleaved;F===null?(c.next=c,wu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=nh(t,i,c,l),o!==null&&(c=_n(),ii(o,t,l,c),Ch(o,i,l))}}function wh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function Ah(t,i){vo=Aa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Ch(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,zl(t,o)}}var Pa={readContext:Gn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},S_={readContext:Gn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4194308,4,xh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ca(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ca(4,2,t,i)},useMemo:function(t,i){var o=mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=mi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=x_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:ph,useDebugValue:ku,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=ph(!1),i=t[0];return t=v_.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=mi();if(Nt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(Pr&30)!==0||uh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,gh(fh.bind(null,l,h,t),[t]),l.flags|=2048,So(9,ch.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=mi(),i=Qt.identifierPrefix;if(Nt){var o=Ci,l=Ai;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=xo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=__++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},M_={readContext:Gn,useCallback:Sh,useContext:Gn,useEffect:Ou,useImperativeHandle:yh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Nu,useRef:mh,useState:function(){return Nu(yo)},useDebugValue:ku,useDeferredValue:function(t){var i=Wn();return Eh(i,Yt.memoizedState,t)},useTransition:function(){var t=Nu(yo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1},E_={readContext:Gn,useCallback:Sh,useContext:Gn,useEffect:Ou,useImperativeHandle:yh,useInsertionEffect:_h,useLayoutEffect:vh,useMemo:Mh,useReducer:Fu,useRef:mh,useState:function(){return Fu(yo)},useDebugValue:ku,useDeferredValue:function(t){var i=Wn();return Yt===null?i.memoizedState=t:Eh(i,Yt.memoizedState,t)},useTransition:function(){var t=Fu(yo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:ah,useSyncExternalStore:lh,useId:Th,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Bu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:ae({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=_n(),c=or(t),h=Pi(l,c);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ii(i,t,c,l),Ma(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=_n(),c=or(t),h=Pi(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ii(i,t,c,l),Ma(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=_n(),l=or(t),c=Pi(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ii(i,t,l,o),Ma(i,t,l))}};function Rh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!oo(o,l)||!oo(c,h):!0}function Ph(t,i,o){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=En(i)?Tr:an.current,l=i.contextTypes,h=(l=l!=null)?us(t,c):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Lh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function zu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=En(i)?Tr:an.current,c.context=us(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Bu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&La.enqueueReplaceState(c,c.state,null),Ea(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Hu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var T_=typeof WeakMap=="function"?WeakMap:Map;function bh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Oa||(Oa=!0,ic=l),Vu(t,i)},o}function Dh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Vu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Uh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new T_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=k_.bind(null,t,i,o),i.then(t,t))}function Ih(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var w_=R.ReactCurrentOwner,Tn=!1;function gn(t,i,o,l){i.child=t===null?th(i,null,o,l):hs(i,t.child,o,l)}function Fh(t,i,o,l,c){o=o.render;var h=i.ref;return ms(i,c),l=Uu(t,i,o,l,h,c),o=Iu(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Nt&&o&&gu(i),i.flags|=1,gn(t,i,l,c),i.child)}function Oh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,kh(t,i,h,l,c)):(t=Ga(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:oo,o(M,l)&&t.ref===i.ref)return Li(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function kh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(oo(h,l)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Li(t,i,c)}return Gu(t,i,o,l,c)}function Bh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(xs,Fn),Fn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,bt(xs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,bt(xs,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,bt(xs,Fn),Fn|=l;return gn(t,i,c,o),i.child}function zh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gu(t,i,o,l,c){var h=En(o)?Tr:an.current;return h=us(i,h),ms(i,c),o=Uu(t,i,o,l,h,c),l=Iu(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Li(t,i,c)):(Nt&&l&&gu(i),i.flags|=1,gn(t,i,o,c),i.child)}function Hh(t,i,o,l,c){if(En(o)){var h=!0;pa(i)}else h=!1;if(ms(i,c),i.stateNode===null)Da(t,i),Ph(i,o,l),zu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var F=M.context,te=o.contextType;typeof te=="object"&&te!==null?te=Gn(te):(te=En(o)?Tr:an.current,te=us(i,te));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||F!==te)&&Lh(i,M,l,te),tr=!1;var me=i.memoizedState;M.state=me,Ea(i,l,M,c),F=i.memoizedState,D!==l||me!==F||Mn.current||tr?(typeof _e=="function"&&(Bu(i,o,_e,l),F=i.memoizedState),(D=tr||Rh(i,o,D,l,me,F,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=te,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,ih(t,i),D=i.memoizedProps,te=i.type===i.elementType?D:ei(i.type,D),M.props=te,xe=i.pendingProps,me=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Gn(F):(F=En(o)?Tr:an.current,F=us(i,F));var be=o.getDerivedStateFromProps;(_e=typeof be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==xe||me!==F)&&Lh(i,M,l,F),tr=!1,me=i.memoizedState,M.state=me,Ea(i,l,M,c);var ke=i.memoizedState;D!==xe||me!==ke||Mn.current||tr?(typeof be=="function"&&(Bu(i,o,be,l),ke=i.memoizedState),(te=tr||Rh(i,o,te,l,me,ke,F)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ke,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ke,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),M.props=l,M.state=ke,M.context=F,l=te):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Wu(t,i,o,l,h,c)}function Wu(t,i,o,l,c,h){zh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Yd(i,o,!1),Li(t,i,h);l=i.stateNode,w_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,D,h)):gn(t,i,D,h),i.memoizedState=l.state,c&&Yd(i,o,!0),i.child}function Vh(t){var i=t.stateNode;i.pendingContext?Wd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Wd(t,i.context,!1),Cu(t,i.containerInfo)}function Gh(t,i,o,l,c){return ds(),yu(c),i.flags|=256,gn(t,i,o,l),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wh(t,i,o){var l=i.pendingProps,c=Ot.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),bt(Ot,c&1),t===null)return xu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Wa(M,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Yu(o),i.memoizedState=Xu,t):qu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return A_(t,i,M,l,D,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,D=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=lr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Ir(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Yu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Xu,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function qu(t,i){return i=Wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&yu(l),hs(i,t.child,null,o),t=qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function A_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),ba(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Wa({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Yu(M),i.memoizedState=Xu,h);if((i.mode&1)===0)return ba(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Hu(h,l,void 0),ba(t,i,M,l)}if(D=(M&t.childLanes)!==0,Tn||D){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ri(t,c),ii(l,t,c,-1))}return uc(),l=Hu(Error(n(421))),ba(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=B_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Nn=Zi(c.nextSibling),In=i,Nt=!0,Jn=null,t!==null&&(Hn[Vn++]=Ai,Hn[Vn++]=Ci,Hn[Vn++]=wr,Ai=t.id,Ci=t.overflow,wr=i),i=qu(i,l.children),i.flags|=4096,i)}function Xh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tu(t.return,i,o)}function ju(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function Yh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(gn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,o,i);else if(t.tag===19)Xh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(bt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ta(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),ju(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ta(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ju(i,!0,o,null,h);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function C_(t,i,o){switch(i.tag){case 3:Vh(i),ds();break;case 5:oh(i);break;case 1:En(i.type)&&pa(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;bt(ya,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(bt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Wh(t,i,o):(bt(Ot,Ot.current&1),t=Li(t,i,o),t!==null?t.sibling:null);bt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Yh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Bh(t,i,o)}return Li(t,i,o)}var qh,$u,jh,$h;qh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$u=function(){},jh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Rr(pi.current);var h=null;switch(o){case"input":c=Y(t,c),l=Y(t,l),h=[];break;case"select":c=ae({},c,{value:void 0}),l=ae({},l,{value:void 0}),h=[];break;case"textarea":c=T(t,c),l=T(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=fa)}ct(o,l);var M;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var D=c[te];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var F=l[te];if(D=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&F!==D&&(F!=null||D!=null))if(te==="style")if(D){for(M in D)!D.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&D[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(te,o)),o=F;else te==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(h=h||[]).push(te,F)):te==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(te,""+F):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(F!=null&&te==="onScroll"&&Ut("scroll",t),h||D===F||(h=[])):(h=h||[]).push(te,F))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},$h=function(t,i,o,l){o!==l&&(i.flags|=4)};function Mo(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function un(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function R_(t,i,o){var l=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return En(i.type)&&ha(),un(i),null;case 3:return l=i.stateNode,gs(),It(Mn),It(an),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(oc(Jn),Jn=null))),$u(t,i),un(i),null;case 5:Ru(i);var c=Rr(_o.current);if(o=i.type,t!==null&&i.stateNode!=null)jh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return un(i),null}if(t=Rr(pi.current),va(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[fo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<lo.length;c++)Ut(lo[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":hn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":J(l,h),Ut("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Ct(l),qe(l,h,!0);break;case"textarea":Ct(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=fa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[hi]=i,t[fo]=l,qh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<lo.length;c++)Ut(lo[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":hn(t,l),c=Y(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ae({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":J(t,l),c=T(t,l),Ut("invalid",t);break;default:c=l}ct(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var F=D[h];h==="style"?Je(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ie(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&lt(t,F):typeof F=="number"&&lt(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&b(t,h,F,M))}switch(o){case"input":Ct(t),qe(t,l,!1);break;case"textarea":Ct(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=fa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return un(i),null;case 6:if(t&&i.stateNode!=null)$h(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(_o.current),Rr(pi.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==o)&&(t=In,t!==null))switch(t.tag){case 3:ca(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return un(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Qd(),ds(),i.flags|=98560,h=!1;else if(h=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[hi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),h=!1}else Jn!==null&&(oc(Jn),Jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?qt===0&&(qt=3):uc())),i.updateQueue!==null&&(i.flags|=4),un(i),null);case 4:return gs(),$u(t,i),t===null&&uo(i.stateNode.containerInfo),un(i),null;case 10:return Eu(i.type._context),un(i),null;case 17:return En(i.type)&&ha(),un(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return un(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Mo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ta(t),M!==null){for(i.flags|=128,Mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return bt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Se()>ys&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ta(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return un(i),null}else 2*Se()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,Mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Se(),i.sibling=null,o=Ot.current,bt(Ot,l?o&1|2:o&1),i):(un(i),null);case 22:case 23:return lc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function P_(t,i){switch(_u(i),i.tag){case 1:return En(i.type)&&ha(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),It(Mn),It(an),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ru(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return gs(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Ua=!1,cn=!1,L_=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Bt(t,i,l)}else o.current=null}function Ku(t,i,o){try{o()}catch(l){Bt(t,i,l)}}var Kh=!1;function b_(t,i){if(lu=Jo,t=Rd(),eu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,F=-1,te=0,_e=0,xe=t,me=null;t:for(;;){for(var be;xe!==o||c!==0&&xe.nodeType!==3||(D=M+c),xe!==h||l!==0&&xe.nodeType!==3||(F=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(be=xe.firstChild)!==null;)me=xe,xe=be;for(;;){if(xe===t)break t;if(me===o&&++te===c&&(D=M),me===h&&++_e===l&&(F=M),(be=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=be}o=D===-1||F===-1?null:{start:D,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(uu={focusedElem:t,selectionRange:o},Jo=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var ze=ke.memoizedProps,Ht=ke.memoizedState,j=i.stateNode,z=j.getSnapshotBeforeUpdate(i.elementType===i.type?ze:ei(i.type,ze),Ht);j.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Bt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return ke=Kh,Kh=!1,ke}function Eo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ku(i,o,h)}c=c.next}while(c!==l)}}function Ia(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Zh(t){var i=t.alternate;i!==null&&(t.alternate=null,Zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[fo],delete i[hu],delete i[h_],delete i[p_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qh(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,o),t=t.sibling;t!==null;)Qu(t,i,o),t=t.sibling}function Ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}var nn=null,ti=!1;function ir(t,i,o){for(o=o.child;o!==null;)ep(t,i,o),o=o.sibling}function ep(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Mt,o)}catch{}switch(o.tag){case 5:cn||vs(o,i);case 6:var l=nn,c=ti;nn=null,ir(t,i,o),nn=l,ti=c,nn!==null&&(ti?(t=nn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nn.removeChild(o.stateNode));break;case 18:nn!==null&&(ti?(t=nn,o=o.stateNode,t.nodeType===8?du(t.parentNode,o):t.nodeType===1&&du(t,o),eo(t)):du(nn,o.stateNode));break;case 4:l=nn,c=ti,nn=o.stateNode.containerInfo,ti=!0,ir(t,i,o),nn=l,ti=c;break;case 0:case 11:case 14:case 15:if(!cn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Ku(o,i,M),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!cn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Bt(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(cn=(l=cn)||o.memoizedState!==null,ir(t,i,o),cn=l):ir(t,i,o);break;default:ir(t,i,o)}}function tp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new L_),i.forEach(function(l){var c=z_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:nn=D.stateNode,ti=!1;break e;case 3:nn=D.stateNode.containerInfo,ti=!0;break e;case 4:nn=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(nn===null)throw Error(n(160));ep(h,M,c),nn=null,ti=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(te){Bt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)np(i,t),i=i.sibling}function np(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),gi(t),l&4){try{Eo(3,t,t.return),Ia(3,t)}catch(ze){Bt(t,t.return,ze)}try{Eo(5,t,t.return)}catch(ze){Bt(t,t.return,ze)}}break;case 1:ni(i,t),gi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ni(i,t),gi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(ze){Bt(t,t.return,ze)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&ht(c,h),it(D,M);var te=it(D,h);for(M=0;M<F.length;M+=2){var _e=F[M],xe=F[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ie(c,xe):_e==="children"?lt(c,xe):b(c,_e,xe,te)}switch(D){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var be=h.value;be!=null?L(c,!!h.multiple,be,!1):me!==!!h.multiple&&(h.defaultValue!=null?L(c,!!h.multiple,h.defaultValue,!0):L(c,!!h.multiple,h.multiple?[]:"",!1))}c[fo]=h}catch(ze){Bt(t,t.return,ze)}}break;case 6:if(ni(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(ze){Bt(t,t.return,ze)}}break;case 3:if(ni(i,t),gi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(ze){Bt(t,t.return,ze)}break;case 4:ni(i,t),gi(t);break;case 13:ni(i,t),gi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(nc=Se())),l&4&&tp(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(cn=(te=cn)||_e,ni(i,t),cn=te):ni(i,t),gi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!_e&&(t.mode&1)!==0)for(Ne=t,_e=t.child;_e!==null;){for(xe=Ne=_e;Ne!==null;){switch(me=Ne,be=me.child,me.tag){case 0:case 11:case 14:case 15:Eo(4,me,me.return);break;case 1:vs(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(ze){Bt(l,o,ze)}}break;case 5:vs(me,me.return);break;case 22:if(me.memoizedState!==null){sp(xe);continue}}be!==null?(be.return=me,Ne=be):sp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,F=xe.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Qe("display",M))}catch(ze){Bt(t,t.return,ze)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(ze){Bt(t,t.return,ze)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ni(i,t),gi(t),l&4&&tp(t);break;case 21:break;default:ni(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Qh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=Jh(t);Ju(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Jh(t);Qu(t,D,M);break;default:throw Error(n(161))}}catch(F){Bt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D_(t,i,o){Ne=t,ip(t)}function ip(t,i,o){for(var l=(t.mode&1)!==0;Ne!==null;){var c=Ne,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ua;if(!M){var D=c.alternate,F=D!==null&&D.memoizedState!==null||cn;D=Ua;var te=cn;if(Ua=M,(cn=F)&&!te)for(Ne=c;Ne!==null;)M=Ne,F=M.child,M.tag===22&&M.memoizedState!==null?op(c):F!==null?(F.return=M,Ne=F):op(c);for(;h!==null;)Ne=h,ip(h),h=h.sibling;Ne=c,Ua=D,cn=te}rp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ne=h):rp(t)}}function rp(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||Ia(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!cn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&sh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}sh(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&eo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}cn||i.flags&512&&Zu(i)}catch(me){Bt(i,i.return,me)}}if(i===t){Ne=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function sp(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function op(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ia(4,i)}catch(F){Bt(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Bt(i,c,F)}}var h=i.return;try{Zu(i)}catch(F){Bt(i,h,F)}break;case 5:var M=i.return;try{Zu(i)}catch(F){Bt(i,M,F)}}}catch(F){Bt(i,i.return,F)}if(i===t){Ne=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ne=D;break}Ne=i.return}}var U_=Math.ceil,Na=R.ReactCurrentDispatcher,ec=R.ReactCurrentOwner,Xn=R.ReactCurrentBatchConfig,vt=0,Qt=null,Vt=null,rn=0,Fn=0,xs=Qi(0),qt=0,To=null,Lr=0,Fa=0,tc=0,wo=null,wn=null,nc=0,ys=1/0,bi=null,Oa=!1,ic=null,rr=null,ka=!1,sr=null,Ba=0,Ao=0,rc=null,za=-1,Ha=0;function _n(){return(vt&6)!==0?Se():za!==-1?za:za=Se()}function or(t){return(t.mode&1)===0?1:(vt&2)!==0&&rn!==0?rn&-rn:g_.transition!==null?(Ha===0&&(Ha=mn()),Ha):(t=At,t!==0||(t=window.event,t=t===void 0?16:ld(t.type)),t)}function ii(t,i,o,l){if(50<Ao)throw Ao=0,rc=null,Error(n(185));Sn(t,o,l),((vt&2)===0||t!==Qt)&&(t===Qt&&((vt&2)===0&&(Fa|=o),qt===4&&ar(t,rn)),An(t,l),o===1&&vt===0&&(i.mode&1)===0&&(ys=Se()+500,ma&&er()))}function An(t,i){var o=t.callbackNode;Bn(t,i);var l=di(t,t===Qt?rn:0);if(l===0)o!==null&&ie(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ie(o),i===1)t.tag===0?m_(lp.bind(null,t)):qd(lp.bind(null,t)),f_(function(){(vt&6)===0&&er()}),o=null;else{switch(ed(l)){case 1:o=Be;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=gt;break;default:o=nt}o=gp(o,ap.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ap(t,i){if(za=-1,Ha=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=di(t,t===Qt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Va(t,l);else{i=l;var c=vt;vt|=2;var h=cp();(Qt!==t||rn!==i)&&(bi=null,ys=Se()+500,Dr(t,i));do try{F_();break}catch(D){up(t,D)}while(!0);Mu(),Na.current=h,vt=c,Vt!==null?i=0:(Qt=null,rn=0,i=qt)}if(i!==0){if(i===2&&(c=Ei(t),c!==0&&(l=c,i=sc(t,c))),i===1)throw o=To,Dr(t,0),ar(t,l),An(t,Se()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,(l&30)===0&&!I_(c)&&(i=Va(t,l),i===2&&(h=Ei(t),h!==0&&(l=h,i=sc(t,h))),i===1))throw o=To,Dr(t,0),ar(t,l),An(t,Se()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,wn,bi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=nc+500-Se(),10<i)){if(di(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=fu(Ur.bind(null,t,wn,bi),i);break}Ur(t,wn,bi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Se()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*U_(l/1960))-l,10<l){t.timeoutHandle=fu(Ur.bind(null,t,wn,bi),l);break}Ur(t,wn,bi);break;case 5:Ur(t,wn,bi);break;default:throw Error(n(329))}}}return An(t,Se()),t.callbackNode===o?ap.bind(null,t):null}function sc(t,i){var o=wo;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Va(t,i),t!==2&&(i=wn,wn=o,i!==null&&oc(i)),t}function oc(t){wn===null?wn=t:wn.push.apply(wn,t)}function I_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Qn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~tc,i&=~Fa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function lp(t){if((vt&6)!==0)throw Error(n(327));Ss();var i=di(t,0);if((i&1)===0)return An(t,Se()),null;var o=Va(t,i);if(t.tag!==0&&o===2){var l=Ei(t);l!==0&&(i=l,o=sc(t,l))}if(o===1)throw o=To,Dr(t,0),ar(t,i),An(t,Se()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,wn,bi),An(t,Se()),null}function ac(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(ys=Se()+500,ma&&er())}}function br(t){sr!==null&&sr.tag===0&&(vt&6)===0&&Ss();var i=vt;vt|=1;var o=Xn.transition,l=At;try{if(Xn.transition=null,At=1,t)return t()}finally{At=l,Xn.transition=o,vt=i,(vt&6)===0&&er()}}function lc(){Fn=xs.current,It(xs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,c_(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(_u(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ha();break;case 3:gs(),It(Mn),It(an),Lu();break;case 5:Ru(l);break;case 4:gs();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Eu(l.type._context);break;case 22:case 23:lc()}o=o.return}if(Qt=t,Vt=t=lr(t.current,null),rn=Fn=i,qt=0,To=null,tc=Fa=Lr=0,wn=wo=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}Cr=null}return t}function up(t,i){do{var o=Vt;try{if(Mu(),wa.current=Pa,Aa){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Aa=!1}if(Pr=0,Zt=Yt=kt=null,vo=!1,xo=0,ec.current=null,o===null||o.return===null){qt=1,To=i,Vt=null;break}e:{var h=t,M=o.return,D=o,F=i;if(i=rn,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var te=F,_e=D,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var be=Ih(M);if(be!==null){be.flags&=-257,Nh(be,M,D,h,i),be.mode&1&&Uh(h,te,i),i=be,F=te;var ke=i.updateQueue;if(ke===null){var ze=new Set;ze.add(F),i.updateQueue=ze}else ke.add(F);break e}else{if((i&1)===0){Uh(h,te,i),uc();break e}F=Error(n(426))}}else if(Nt&&D.mode&1){var Ht=Ih(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Nh(Ht,M,D,h,i),yu(_s(F,D));break e}}h=F=_s(F,D),qt!==4&&(qt=2),wo===null?wo=[h]:wo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=bh(h,F,i);rh(h,j);break e;case 1:D=F;var z=h.type,Z=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(rr===null||!rr.has(Z)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Dh(h,D,i);rh(h,Ee);break e}}h=h.return}while(h!==null)}dp(o)}catch(We){i=We,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function cp(){var t=Na.current;return Na.current=Pa,t===null?Pa:t}function uc(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(Lr&268435455)===0&&(Fa&268435455)===0||ar(Qt,rn)}function Va(t,i){var o=vt;vt|=2;var l=cp();(Qt!==t||rn!==i)&&(bi=null,Dr(t,i));do try{N_();break}catch(c){up(t,c)}while(!0);if(Mu(),vt=o,Na.current=l,Vt!==null)throw Error(n(261));return Qt=null,rn=0,qt}function N_(){for(;Vt!==null;)fp(Vt)}function F_(){for(;Vt!==null&&!X();)fp(Vt)}function fp(t){var i=mp(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?dp(t):Vt=i,ec.current=null}function dp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=R_(o,i,Fn),o!==null){Vt=o;return}}else{if(o=P_(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);qt===0&&(qt=5)}function Ur(t,i,o){var l=At,c=Xn.transition;try{Xn.transition=null,At=1,O_(t,i,o,l)}finally{Xn.transition=c,At=l}return null}function O_(t,i,o,l){do Ss();while(sr!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Ko(t,h),t===Qt&&(Vt=Qt=null,rn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ka||(ka=!0,gp(nt,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var M=At;At=1;var D=vt;vt|=4,ec.current=null,b_(t,o),np(o,t),i_(uu),Jo=!!lu,uu=lu=null,t.current=o,D_(o),Te(),vt=D,At=M,Xn.transition=h}else t.current=o;if(ka&&(ka=!1,sr=t,Ba=c),h=t.pendingLanes,h===0&&(rr=null),sn(o.stateNode),An(t,Se()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Oa)throw Oa=!1,t=ic,ic=null,t;return(Ba&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===rc?Ao++:(Ao=0,rc=t):Ao=0,er(),null}function Ss(){if(sr!==null){var t=ed(Ba),i=Xn.transition,o=At;try{if(Xn.transition=null,At=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ba=0,(vt&6)!==0)throw Error(n(331));var c=vt;for(vt|=4,Ne=t.current;Ne!==null;){var h=Ne,M=h.child;if((Ne.flags&16)!==0){var D=h.deletions;if(D!==null){for(var F=0;F<D.length;F++){var te=D[F];for(Ne=te;Ne!==null;){var _e=Ne;switch(_e.tag){case 0:case 11:case 15:Eo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Ne=xe;else for(;Ne!==null;){_e=Ne;var me=_e.sibling,be=_e.return;if(Zh(_e),_e===te){Ne=null;break}if(me!==null){me.return=be,Ne=me;break}Ne=be}}}var ke=h.alternate;if(ke!==null){var ze=ke.child;if(ze!==null){ke.child=null;do{var Ht=ze.sibling;ze.sibling=null,ze=Ht}while(ze!==null)}}Ne=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ne=M;else e:for(;Ne!==null;){if(h=Ne,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Eo(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Ne=j;break e}Ne=h.return}}var z=t.current;for(Ne=z;Ne!==null;){M=Ne;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Ne=Z;else e:for(M=z;Ne!==null;){if(D=Ne,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ia(9,D)}}catch(We){Bt(D,D.return,We)}if(D===M){Ne=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,Ne=Ee;break e}Ne=D.return}}if(vt=c,er(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Mt,t)}catch{}l=!0}return l}finally{At=o,Xn.transition=i}}return!1}function hp(t,i,o){i=_s(o,i),i=bh(t,i,1),t=nr(t,i,1),i=_n(),t!==null&&(Sn(t,1,i),An(t,i))}function Bt(t,i,o){if(t.tag===3)hp(t,t,o);else for(;i!==null;){if(i.tag===3){hp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=_s(o,t),t=Dh(i,t,1),i=nr(i,t,1),t=_n(),i!==null&&(Sn(i,1,t),An(i,t));break}}i=i.return}}function k_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(rn&o)===o&&(qt===4||qt===3&&(rn&130023424)===rn&&500>Se()-nc?Dr(t,0):tc|=o),An(t,i)}function pp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zn,Zn<<=1,(Zn&130023424)===0&&(Zn=4194304)));var o=_n();t=Ri(t,i),t!==null&&(Sn(t,i,o),An(t,o))}function B_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),pp(t,o)}function z_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),pp(t,o)}var mp;mp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Mn.current)Tn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Tn=!1,C_(t,i,o);Tn=(t.flags&131072)!==0}else Tn=!1,Nt&&(i.flags&1048576)!==0&&jd(i,_a,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Da(t,i),t=i.pendingProps;var c=us(i,an.current);ms(i,o),c=Uu(null,i,l,t,c,o);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,En(l)?(h=!0,pa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Au(i),c.updater=La,i.stateNode=c,c._reactInternals=i,zu(i,l,t,o),i=Wu(null,i,l,!0,h,o)):(i.tag=0,Nt&&h&&gu(i),gn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Da(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=V_(l),t=ei(l,t),c){case 0:i=Gu(null,i,l,t,o);break e;case 1:i=Hh(null,i,l,t,o);break e;case 11:i=Fh(null,i,l,t,o);break e;case 14:i=Oh(null,i,l,ei(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Gu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Hh(t,i,l,c,o);case 3:e:{if(Vh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,ih(t,i),Ea(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=_s(Error(n(423)),i),i=Gh(t,i,l,o,c);break e}else if(l!==c){c=_s(Error(n(424)),i),i=Gh(t,i,l,o,c);break e}else for(Nn=Zi(i.stateNode.containerInfo.firstChild),In=i,Nt=!0,Jn=null,o=th(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===c){i=Li(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return oh(i),t===null&&xu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,cu(l,c)?M=null:h!==null&&cu(l,h)&&(i.flags|=32),zh(t,i),gn(t,i,M,o),i.child;case 6:return t===null&&xu(i),null;case 13:return Wh(t,i,o);case 4:return Cu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Fh(t,i,l,c,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,bt(ya,l._currentValue),l._currentValue=M,h!==null)if(Qn(h.value,M)){if(h.children===c.children&&!Mn.current){i=Li(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Pi(-1,o&-o),F.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),te.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Tu(h.return,o,i),D.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),Tu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}gn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ms(i,o),c=Gn(c),l=l(c),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,c=ei(l,i.pendingProps),c=ei(l.type,c),Oh(t,i,l,c,o);case 15:return kh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ei(l,c),Da(t,i),i.tag=1,En(l)?(t=!0,pa(i)):t=!1,ms(i,o),Ph(i,l,c),zu(i,l,c,o),Wu(null,i,l,!0,t,o);case 19:return Yh(t,i,o);case 22:return Bh(t,i,o)}throw Error(n(156,i.tag))};function gp(t,i){return ne(t,i)}function H_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new H_(t,i,o,l)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V_(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Q)return 11;if(t===ce)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ga(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")cc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Ir(o.children,c,h,i);case V:M=8,c|=8;break;case P:return t=Yn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case q:return t=Yn(13,o,i,c),t.elementType=q,t.lanes=h,t;case le:return t=Yn(19,o,i,c),t.elementType=le,t.lanes=h,t;case oe:return Wa(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case O:M=9;break e;case Q:M=11;break e;case ce:M=14;break e;case K:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function Wa(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function fc(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function dc(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function G_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function hc(t,i,o,l,c,h,M,D,F){return t=new G_(t,i,o,D,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),t}function W_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function _p(t){if(!t)return Ji;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(En(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(En(o))return Xd(t,o,i)}return i}function vp(t,i,o,l,c,h,M,D,F){return t=hc(o,l,!0,t,c,h,M,D,F),t.context=_p(null),o=t.current,l=_n(),c=or(o),h=Pi(l,c),h.callback=i??null,nr(o,h,c),t.current.lanes=c,Sn(t,c,l),An(t,l),t}function Xa(t,i,o,l){var c=i.current,h=_n(),M=or(c);return o=_p(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,M),t!==null&&(ii(t,c,M,h),Ma(t,c,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pc(t,i){xp(t,i),(t=t.alternate)&&xp(t,i)}function X_(){return null}var yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}qa.prototype.render=mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xa(t,i,null,null)},qa.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Xa(null,t,null,null)}),i[Ti]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=id();t={blockedOn:null,target:t,priority:i};for(var o=0;o<ji.length&&i!==0&&i<ji[o].priority;o++);ji.splice(o,0,t),o===0&&od(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function Y_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=Ya(M);h.call(te)}}var M=vp(i,l,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=M,t[Ti]=M.current,uo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var te=Ya(F);D.call(te)}}var F=hc(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=F,t[Ti]=F.current,uo(t.nodeType===8?t.parentNode:t),br(function(){Xa(i,F,o,l)}),F}function $a(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var D=c;c=function(){var F=Ya(M);D.call(F)}}Xa(i,M,t,c)}else M=Y_(o,i,t,c,l);return Ya(M)}td=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Xt(i.pendingLanes);o!==0&&(zl(i,o|1),An(i,Se()),(vt&6)===0&&(ys=Se()+500,er()))}break;case 13:br(function(){var l=Ri(t,1);if(l!==null){var c=_n();ii(l,t,1,c)}}),pc(t,1)}},Hl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=_n();ii(i,t,134217728,o)}pc(t,134217728)}},nd=function(t){if(t.tag===13){var i=or(t),o=Ri(t,i);if(o!==null){var l=_n();ii(o,t,i,l)}pc(t,i)}},id=function(){return At},rd=function(t,i){var o=At;try{return At=t,i()}finally{At=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=da(l);if(!c)throw Error(n(90));pt(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Dt=ac,Wt=br;var q_={usingClientEntryPoint:!1,Events:[ho,as,da,Pe,rt,ac]},Co={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j_={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||X_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Mt=Ka.inject(j_),mt=Ka}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_,Cn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(n(200));return W_(t,i,null,o)},Cn.createRoot=function(t,i){if(!gc(t))throw Error(n(299));var o=!1,l="",c=yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=hc(t,1,!1,null,null,o,!1,l,c),t[Ti]=i.current,uo(t.nodeType===8?t.parentNode:t),new mc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=A(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return br(t)},Cn.hydrate=function(t,i,o){if(!ja(i))throw Error(n(200));return $a(null,t,i,!0,o)},Cn.hydrateRoot=function(t,i,o){if(!gc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=yp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=vp(i,null,t,1,o??null,c,!1,h,M),t[Ti]=i.current,uo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new qa(i)},Cn.render=function(t,i,o){if(!ja(i))throw Error(n(200));return $a(null,t,i,!1,o)},Cn.unmountComponentAtNode=function(t){if(!ja(t))throw Error(n(40));return t._reactRootContainer?(br(function(){$a(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},Cn.unstable_batchedUpdates=ac,Cn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return $a(t,i,o,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Cp;function tv(){if(Cp)return vc.exports;Cp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vc.exports=ev(),vc.exports}var Rp;function nv(){if(Rp)return Za;Rp=1;var s=tv();return Za.createRoot=s.createRoot,Za.hydrateRoot=s.hydrateRoot,Za}var iv=nv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="170",rv=0,Pp=1,sv=2,Fm=1,ov=2,Oi=3,xr=0,bn=1,ki=2,_r=0,ks=1,Lp=2,bp=3,Dp=4,av=5,Wr=100,lv=101,uv=102,cv=103,fv=104,dv=200,hv=201,pv=202,mv=203,Jc=204,ef=205,gv=206,_v=207,vv=208,xv=209,yv=210,Sv=211,Mv=212,Ev=213,Tv=214,tf=0,nf=1,rf=2,Hs=3,sf=4,of=5,af=6,lf=7,Om=0,wv=1,Av=2,vr=0,Cv=1,Rv=2,Pv=3,Lv=4,bv=5,Dv=6,Uv=7,km=300,Vs=301,Gs=302,uf=303,cf=304,Nl=306,ff=1e3,Yr=1001,df=1002,ci=1003,Iv=1004,Qa=1005,vi=1006,Sc=1007,qr=1008,Vi=1009,Bm=1010,zm=1011,Bo=1012,Gf=1013,jr=1014,Bi=1015,zo=1016,Wf=1017,Xf=1018,Ws=1020,Hm=35902,Vm=1021,Gm=1022,ui=1023,Wm=1024,Xm=1025,Bs=1026,Xs=1027,Ym=1028,Yf=1029,qm=1030,qf=1031,jf=1033,Tl=33776,wl=33777,Al=33778,Cl=33779,hf=35840,pf=35841,mf=35842,gf=35843,_f=36196,vf=37492,xf=37496,yf=37808,Sf=37809,Mf=37810,Ef=37811,Tf=37812,wf=37813,Af=37814,Cf=37815,Rf=37816,Pf=37817,Lf=37818,bf=37819,Df=37820,Uf=37821,Rl=36492,If=36494,Nf=36495,jm=36283,Ff=36284,Of=36285,kf=36286,Nv=3200,Fv=3201,$m=0,Ov=1,gr="",jn="srgb",qs="srgb-linear",Fl="linear",Rt="srgb",Ms=7680,Up=519,kv=512,Bv=513,zv=514,Km=515,Hv=516,Vv=517,Gv=518,Wv=519,Ip=35044,Np="300 es",zi=2e3,Ll=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=Math.PI/180,Bf=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toLowerCase()}function Pn(s,e,n){return Math.max(e,Math.min(n,s))}function Xv(s,e){return(s%e+e)%e}function Ec(s,e,n){return(1-n)*s+n*e}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],S=r[5],E=r[8],w=a[0],y=a[3],g=a[6],U=a[1],b=a[4],R=a[7],H=a[2],k=a[5],N=a[8];return u[0]=f*w+d*U+p*H,u[3]=f*y+d*b+p*k,u[6]=f*g+d*R+p*N,u[1]=m*w+_*U+x*H,u[4]=m*y+_*b+x*k,u[7]=m*g+_*R+x*N,u[2]=v*w+S*U+E*H,u[5]=v*y+S*b+E*k,u[8]=v*g+S*R+E*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*f-d*m,v=d*p-_*u,S=m*u-f*p,E=n*x+r*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(a*m-_*r)*w,e[2]=(d*r-a*f)*w,e[3]=v*w,e[4]=(_*n-a*p)*w,e[5]=(a*u-d*n)*w,e[6]=S*w,e[7]=(r*p-m*n)*w,e[8]=(f*n-r*u)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new ot;function Zm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yv(){const s=bl("canvas");return s.style.display="block",s}const Fp={};function Fo(s){s in Fp||(Fp[s]=!0,console.warn(s))}function qv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function jv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $v(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Rt&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Rt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?Fl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Op=[.64,.33,.3,.6,.15,.06],kp=[.2126,.7152,.0722],Bp=[.3127,.329],zp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[qs]:{primaries:Op,whitePoint:Bp,transfer:Fl,toXYZ:zp,fromXYZ:Hp,luminanceCoefficients:kp,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:Op,whitePoint:Bp,transfer:Rt,toXYZ:zp,fromXYZ:Hp,luminanceCoefficients:kp,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Es;class Kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=bl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Hi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zv=0;class Qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(wc(a[f].image)):u.push(wc(a[f]))}else u=wc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class Dn extends js{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Yr,a=Yr,u=vi,f=qr,d=ui,p=Vi,m=Dn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ho(),this.name="",this.source=new Qm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ff:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ff:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=km;Dn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],x=p[8],v=p[1],S=p[5],E=p[9],w=p[2],y=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+w)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,R=(S+1)/2,H=(g+1)/2,k=(_+v)/4,N=(x+w)/4,V=(E+y)/4;return b>R&&b>H?b<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(b),a=k/r,u=N/r):R>H?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=k/a,u=V/a):H<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(H),r=N/u,a=V/u),this.set(r,a,u,n),this}let U=Math.sqrt((y-E)*(y-E)+(x-w)*(x-w)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(x-w)/U,this.z=(v-_)/U,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jv extends js{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Dn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends Jv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Jm extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e0 extends Dn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[f+0],S=u[f+1],E=u[f+2],w=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=v,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(x!==w||p!==v||m!==S||_!==E){let y=1-d;const g=p*v+m*S+_*E+x*w,U=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const H=Math.sqrt(b),k=Math.atan2(H,g*U);y=Math.sin(y*k)/H,d=Math.sin(d*k)/H}const R=d*U;if(p=p*y+v*R,m=m*y+S*R,_=_*y+E*R,x=x*y+w*R,y===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=H,m*=H,_*=H,x*=H}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=u[f],v=u[f+1],S=u[f+2],E=u[f+3];return e[n]=d*E+_*x+p*S-m*v,e[n+1]=p*E+_*v+m*x-d*S,e[n+2]=m*E+_*S+d*v-p*x,e[n+3]=_*E-d*x-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),v=p(r/2),S=p(a/2),E=p(u/2);switch(f){case"XYZ":this._x=v*_*x+m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x-v*S*E;break;case"YXZ":this._x=v*_*x+m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x+v*S*E;break;case"ZXY":this._x=v*_*x-m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x-v*S*E;break;case"ZYX":this._x=v*_*x-m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x+v*S*E;break;case"YZX":this._x=v*_*x+m*S*E,this._y=m*S*x+v*_*E,this._z=m*_*E-v*S*x,this._w=m*_*x-v*S*E;break;case"XZY":this._x=v*_*x-m*S*E,this._y=m*S*x-v*_*E,this._z=m*_*E+v*S*x,this._w=m*_*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],x=n[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*_,this.y=r+p*_+d*m-u*x,this.z=a+p*x+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new $,Vp=new Vo;class Go{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ri):ri.fromBufferAttribute(u,f),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ja.copy(r.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),el.subVectors(this.max,Po),Ts.subVectors(e.a,Po),ws.subVectors(e.b,Po),As.subVectors(e.c,Po),cr.subVectors(ws,Ts),fr.subVectors(As,ws),Nr.subVectors(Ts,As);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Nr.z,Nr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Nr.z,0,-Nr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Nr.y,Nr.x,0];return!Cc(n,Ts,ws,As,el)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Ts,ws,As,el))?!1:(tl.crossVectors(cr,fr),n=[tl.x,tl.y,tl.z],Cc(n,Ts,ws,As,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new $,new $,new $,new $,new $,new $,new $,new $],ri=new $,Ja=new Go,Ts=new $,ws=new $,As=new $,cr=new $,fr=new $,Nr=new $,Po=new $,el=new $,tl=new $,Fr=new $;function Cc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const t0=new Go,Lo=new $,Rc=new $;class Wo{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):t0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Lo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Rc)),this.expandByPoint(Lo.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new $,Pc=new $,nl=new $,dr=new $,Lc=new $,il=new $,bc=new $;class $f{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Pc.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Pc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(nl),d=dr.dot(this.direction),p=-dr.dot(nl),m=dr.lengthSq(),_=Math.abs(1-f*f);let x,v,S,E;if(_>0)if(x=f*p-d,v=f*d-p,E=u*_,x>=0)if(v>=-E)if(v<=E){const w=1/_;x*=w,v*=w,S=x*(x+f*v+2*d)+v*(f*x+v+2*p)+m}else v=u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;else v<=-E?(x=Math.max(0,-(-f*u+d)),v=x>0?-u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m):v<=E?(x=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+m):(x=Math.max(0,-(f*u+d)),v=x>0?u:Math.min(Math.max(-u,-p),u),S=-x*x+v*(v+2*p)+m);else v=f>0?-u:u,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Pc).addScaledVector(nl,v),S}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,u){Lc.subVectors(n,e),il.subVectors(r,e),bc.crossVectors(Lc,il);let f=this.direction.dot(bc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(il.crossVectors(dr,il));if(p<0)return null;const m=d*this.direction.dot(Lc.cross(dr));if(m<0||p+m>f)return null;const _=-d*dr.dot(bc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,n,r,a,u,f,d,p,m,_,x,v,S,E,w,y){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,x,v,S,E,w,y)}set(e,n,r,a,u,f,d,p,m,_,x,v,S,E,w,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),u=1/Cs.setFromMatrixColumn(e,1).length(),f=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=f*_,S=f*x,E=d*_,w=d*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+E*m,n[5]=v-w*m,n[9]=-d*p,n[2]=w-v*m,n[6]=E+S*m,n[10]=f*p}else if(e.order==="YXZ"){const v=p*_,S=p*x,E=m*_,w=m*x;n[0]=v+w*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=S*d-E,n[6]=w+v*d,n[10]=f*p}else if(e.order==="ZXY"){const v=p*_,S=p*x,E=m*_,w=m*x;n[0]=v-w*d,n[4]=-f*x,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*_,n[9]=w-v*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const v=f*_,S=f*x,E=d*_,w=d*x;n[0]=p*_,n[4]=E*m-S,n[8]=v*m+w,n[1]=p*x,n[5]=w*m+v,n[9]=S*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const v=f*p,S=f*m,E=d*p,w=d*m;n[0]=p*_,n[4]=w-v*x,n[8]=E*x+S,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*x+E,n[10]=v-w*x}else if(e.order==="XZY"){const v=f*p,S=f*m,E=d*p,w=d*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=v*x+w,n[5]=f*_,n[9]=S*x-E,n[2]=E*x-S,n[6]=d*_,n[10]=w*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),hr.crossVectors(r,On),hr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),hr.crossVectors(r,On)),hr.normalize(),rl.crossVectors(On,hr),a[0]=hr.x,a[4]=rl.x,a[8]=On.x,a[1]=hr.y,a[5]=rl.y,a[9]=On.y,a[2]=hr.z,a[6]=rl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],S=r[13],E=r[2],w=r[6],y=r[10],g=r[14],U=r[3],b=r[7],R=r[11],H=r[15],k=a[0],N=a[4],V=a[8],P=a[12],C=a[1],O=a[5],Q=a[9],q=a[13],le=a[2],ce=a[6],K=a[10],oe=a[14],B=a[3],ue=a[7],ae=a[11],I=a[15];return u[0]=f*k+d*C+p*le+m*B,u[4]=f*N+d*O+p*ce+m*ue,u[8]=f*V+d*Q+p*K+m*ae,u[12]=f*P+d*q+p*oe+m*I,u[1]=_*k+x*C+v*le+S*B,u[5]=_*N+x*O+v*ce+S*ue,u[9]=_*V+x*Q+v*K+S*ae,u[13]=_*P+x*q+v*oe+S*I,u[2]=E*k+w*C+y*le+g*B,u[6]=E*N+w*O+y*ce+g*ue,u[10]=E*V+w*Q+y*K+g*ae,u[14]=E*P+w*q+y*oe+g*I,u[3]=U*k+b*C+R*le+H*B,u[7]=U*N+b*O+R*ce+H*ue,u[11]=U*V+b*Q+R*K+H*ae,u[15]=U*P+b*q+R*oe+H*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],v=e[10],S=e[14],E=e[3],w=e[7],y=e[11],g=e[15];return E*(+u*p*x-a*m*x-u*d*v+r*m*v+a*d*S-r*p*S)+w*(+n*p*S-n*m*v+u*f*v-a*f*S+a*m*_-u*p*_)+y*(+n*m*x-n*d*S-u*f*x+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*x+n*d*v+a*f*x-r*f*v+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],v=e[10],S=e[11],E=e[12],w=e[13],y=e[14],g=e[15],U=x*y*m-w*v*m+w*p*S-d*y*S-x*p*g+d*v*g,b=E*v*m-_*y*m-E*p*S+f*y*S+_*p*g-f*v*g,R=_*w*m-E*x*m+E*d*S-f*w*S-_*d*g+f*x*g,H=E*x*p-_*w*p-E*d*v+f*w*v+_*d*y-f*x*y,k=n*U+r*b+a*R+u*H;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=U*N,e[1]=(w*v*u-x*y*u-w*a*S+r*y*S+x*a*g-r*v*g)*N,e[2]=(d*y*u-w*p*u+w*a*m-r*y*m-d*a*g+r*p*g)*N,e[3]=(x*p*u-d*v*u-x*a*m+r*v*m+d*a*S-r*p*S)*N,e[4]=b*N,e[5]=(_*y*u-E*v*u+E*a*S-n*y*S-_*a*g+n*v*g)*N,e[6]=(E*p*u-f*y*u-E*a*m+n*y*m+f*a*g-n*p*g)*N,e[7]=(f*v*u-_*p*u+_*a*m-n*v*m-f*a*S+n*p*S)*N,e[8]=R*N,e[9]=(E*x*u-_*w*u-E*r*S+n*w*S+_*r*g-n*x*g)*N,e[10]=(f*w*u-E*d*u+E*r*m-n*w*m-f*r*g+n*d*g)*N,e[11]=(_*d*u-f*x*u-_*r*m+n*x*m+f*r*S-n*d*S)*N,e[12]=H*N,e[13]=(_*w*a-E*x*a+E*r*v-n*w*v-_*r*y+n*x*y)*N,e[14]=(E*d*a-f*w*a-E*r*p+n*w*p+f*r*y-n*d*y)*N,e[15]=(f*x*a-_*d*a+_*r*p-n*x*p-f*r*v+n*d*v)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,x=d+d,v=u*m,S=u*_,E=u*x,w=f*_,y=f*x,g=d*x,U=p*m,b=p*_,R=p*x,H=r.x,k=r.y,N=r.z;return a[0]=(1-(w+g))*H,a[1]=(S+R)*H,a[2]=(E-b)*H,a[3]=0,a[4]=(S-R)*k,a[5]=(1-(v+g))*k,a[6]=(y+U)*k,a[7]=0,a[8]=(E+b)*N,a[9]=(y-U)*N,a[10]=(1-(v+w))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Cs.set(a[0],a[1],a[2]).length();const f=Cs.set(a[4],a[5],a[6]).length(),d=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const m=1/u,_=1/f,x=1/d;return si.elements[0]*=m,si.elements[1]*=m,si.elements[2]*=m,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=x,si.elements[9]*=x,si.elements[10]*=x,n.setFromRotationMatrix(si),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=zi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let S,E;if(d===zi)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Ll)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=zi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(f-u),v=(n+e)*m,S=(r+a)*_;let E,w;if(d===zi)E=(f+u)*x,w=-2*x;else if(d===Ll)E=u*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new $,si=new Ft,n0=new $(0,0,0),i0=new $(1,1,1),hr=new $,rl=new $,On=new $,Gp=new Ft,Wp=new Vo;class yi{constructor(e=0,n=0,r=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Pn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Pn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r0=0;const Xp=new $,Rs=new Vo,Ii=new Ft,sl=new $,bo=new $,s0=new $,o0=new Vo,Yp=new $(1,0,0),qp=new $(0,1,0),jp=new $(0,0,1),$p={type:"added"},a0={type:"removed"},Ps={type:"childadded",child:null},Dc={type:"childremoved",child:null};class jt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new $,n=new yi,r=new Vo,a=new $(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ot}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(bo,sl,this.up):Ii.lookAt(sl,bo,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($p),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a0),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($p),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,o0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),x=f(e.shapes),v=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}jt.DEFAULT_UP=new $(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new $,Ni=new $,Uc=new $,Fi=new $,Ls=new $,bs=new $,Kp=new $,Ic=new $,Nc=new $,Fc=new $,Oc=new zt,kc=new zt,Bc=new zt;class ai{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){oi.subVectors(a,n),Ni.subVectors(r,n),Uc.subVectors(e,n);const f=oi.dot(oi),d=oi.dot(Ni),p=oi.dot(Uc),m=Ni.dot(Ni),_=Ni.dot(Uc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,S=(m*p-d*_)*v,E=(f*_-d*p)*v;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Fi.x),p.addScaledVector(f,Fi.y),p.addScaledVector(d,Fi.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Oc.setScalar(0),kc.setScalar(0),Bc.setScalar(0),Oc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,r),Bc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Oc,u.x),f.addScaledVector(kc,u.y),f.addScaledVector(Bc,u.z),f}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Ni.subVectors(e,n),oi.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ls.subVectors(a,r),bs.subVectors(u,r),Ic.subVectors(e,r);const p=Ls.dot(Ic),m=bs.dot(Ic);if(p<=0&&m<=0)return n.copy(r);Nc.subVectors(e,a);const _=Ls.dot(Nc),x=bs.dot(Nc);if(_>=0&&x<=_)return n.copy(a);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Ls,f);Fc.subVectors(e,u);const S=Ls.dot(Fc),E=bs.dot(Fc);if(E>=0&&S<=E)return n.copy(u);const w=S*m-p*E;if(w<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(bs,d);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return Kp.subVectors(u,a),d=(x-_)/(x-_+(S-E)),n.copy(a).addScaledVector(Kp,d);const g=1/(y+w+v);return f=w*g,d=v*g,n.copy(r).addScaledVector(Ls,f).addScaledVector(bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function zc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=xt.workingColorSpace){return this.r=e,this.g=n,this.b=r,xt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=xt.workingColorSpace){if(e=Xv(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=zc(f,u,e+1/3),this.g=zc(f,u,e),this.b=zc(f,u,e-1/3)}return xt.toWorkingColorSpace(this,a),this}setStyle(e,n=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const r=tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return xt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Pn(dn.r*255,0,255))*65536+Math.round(Pn(dn.g*255,0,255))*256+Math.round(Pn(dn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(dn.copy(this),n);const r=dn.r,a=dn.g,u=dn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=jn){xt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,r=dn.g,a=dn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(ol);const r=Ec(pr.h,ol.h,n),a=Ec(pr.s,ol.s,n),u=Ec(pr.l,ol.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new dt;dt.NAMES=tg;let l0=0;class Zr extends js{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ho(),this.name="",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=ef,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jc&&(r.blendSrc=this.blendSrc),this.blendDst!==ef&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ng extends Zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new $,al=new Et;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ip,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array),u=Rn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ip&&(e.usage=this.usage),e}}class ig extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class rg extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class xn extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let u0=0;const qn=new Ft,Hc=new jt,Ds=new $,kn=new Go,Do=new Go,en=new $;class tn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?rg:ig)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new xn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];kn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(kn.min,Do.min),kn.expandByPoint(en),en.addVectors(kn.max,Do.max),kn.expandByPoint(en)):(kn.expandByPoint(Do.min),kn.expandByPoint(Do.max))}kn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)en.fromBufferAttribute(d,m),p&&(Ds.fromBufferAttribute(e,m),en.add(Ds)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new $,p[V]=new $;const m=new $,_=new $,x=new $,v=new Et,S=new Et,E=new Et,w=new $,y=new $;function g(V,P,C){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,C),v.fromBufferAttribute(u,V),S.fromBufferAttribute(u,P),E.fromBufferAttribute(u,C),_.sub(m),x.sub(m),S.sub(v),E.sub(v);const O=1/(S.x*E.y-E.x*S.y);isFinite(O)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(O),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(O),d[V].add(w),d[P].add(w),d[C].add(w),p[V].add(y),p[P].add(y),p[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let V=0,P=U.length;V<P;++V){const C=U[V],O=C.start,Q=C.count;for(let q=O,le=O+Q;q<le;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new $,R=new $,H=new $,k=new $;function N(V){H.fromBufferAttribute(a,V),k.copy(H);const P=d[V];b.copy(P),b.sub(H.multiplyScalar(H.dot(P))).normalize(),R.crossVectors(k,P);const O=R.dot(p[V])<0?-1:1;f.setXYZW(V,b.x,b.y,b.z,O)}for(let V=0,P=U.length;V<P;++V){const C=U[V],O=C.start,Q=C.count;for(let q=O,le=O+Q;q<le;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new $,u=new $,f=new $,d=new $,p=new $,m=new $,_=new $,x=new $;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,y),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(p.length*_);let S=0,E=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?S=p[w]*d.data.stride+d.offset:S=p[w]*_;for(let g=0;g<_;g++)v[E++]=m[S++]}return new xi(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tn,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],S=e(v,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new Ft,Or=new $f,ll=new Wo,Qp=new $,ul=new $,cl=new $,fl=new $,Vc=new $,dl=new $,Jp=new $,hl=new $;class Ln extends jt{constructor(e=new tn,n=new ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){dl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&(Vc.fromBufferAttribute(x,e),f?dl.addScaledVector(Vc,_):dl.addScaledVector(Vc.sub(n),_))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(ll.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ll,Qp)===null||Or.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Zp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=v.length;E<w;E++){const y=v[E],g=f[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,H=b;R<H;R+=3){const k=d.getX(R),N=d.getX(R+1),V=d.getX(R+2);a=pl(this,g,e,r,m,_,x,k,N,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,g=w;y<g;y+=3){const U=d.getX(y),b=d.getX(y+1),R=d.getX(y+2);a=pl(this,f,e,r,m,_,x,U,b,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,w=v.length;E<w;E++){const y=v[E],g=f[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=U,H=b;R<H;R+=3){const k=R,N=R+1,V=R+2;a=pl(this,g,e,r,m,_,x,k,N,V),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let y=E,g=w;y<g;y+=3){const U=y,b=y+1,R=y+2;a=pl(this,f,e,r,m,_,x,U,b,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function c0(s,e,n,r,a,u,f,d){let p;if(e.side===bn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===xr,d),p===null)return null;hl.copy(d),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ul),s.getVertexPosition(p,cl),s.getVertexPosition(m,fl);const _=c0(s,e,n,r,ul,cl,fl,Jp);if(_){const x=new $;ai.getBarycoord(Jp,ul,cl,fl,x),a&&(_.uv=ai.getInterpolatedAttribute(a,d,p,m,x,new Et)),u&&(_.uv1=ai.getInterpolatedAttribute(u,d,p,m,x,new Et)),f&&(_.normal=ai.getInterpolatedAttribute(f,d,p,m,x,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new $,materialIndex:0};ai.getNormal(ul,cl,fl,v.normal),_.face=v,_.barycoord=x}return _}class Kr extends tn{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,u,4),E("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(x,2));function E(w,y,g,U,b,R,H,k,N,V,P){const C=R/N,O=H/V,Q=R/2,q=H/2,le=k/2,ce=N+1,K=V+1;let oe=0,B=0;const ue=new $;for(let ae=0;ae<K;ae++){const I=ae*O-q;for(let re=0;re<ce;re++){const De=re*C-Q;ue[w]=De*U,ue[y]=I*b,ue[g]=le,m.push(ue.x,ue.y,ue.z),ue[w]=0,ue[y]=0,ue[g]=k>0?1:-1,_.push(ue.x,ue.y,ue.z),x.push(re/N),x.push(1-ae/V),oe+=1}}for(let ae=0;ae<V;ae++)for(let I=0;I<N;I++){const re=v+I+ce*ae,De=v+I+ce*(ae+1),ee=v+(I+1)+ce*(ae+1),fe=v+(I+1)+ce*ae;p.push(re,De,fe),p.push(De,ee,fe),B+=6}d.addGroup(S,B,P),S+=B,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function f0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const d0={clone:Ys,merge:vn};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class og extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new $,em=new Et,tm=new Et;class $n extends og{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Is=1;class m0 extends jt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Us,Is,e,n);a.layers=this.layers,this.add(a);const u=new $n(Us,Is,e,n);u.layers=this.layers,this.add(u);const f=new $n(Us,Is,e,n);f.layers=this.layers,this.add(f);const d=new $n(Us,Is,e,n);d.layers=this.layers,this.add(d);const p=new $n(Us,Is,e,n);p.layers=this.layers,this.add(p);const m=new $n(Us,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ag extends Dn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ag(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Kr(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:_r});u.uniforms.tEquirect.value=n;const f=new Ln(a,u),d=n.minFilter;return n.minFilter===qr&&(n.minFilter=vi),new m0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Gc=new $,_0=new $,v0=new ot;class Vr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Gc.subVectors(r,n).cross(_0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Gc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||v0.getNormalMatrix(e),a=this.coplanarPoint(Gc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Wo,ml=new $;class Kf{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,f=new Vr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],x=a[6],v=a[7],S=a[8],E=a[9],w=a[10],y=a[11],g=a[12],U=a[13],b=a[14],R=a[15];if(r[0].setComponents(p-u,v-m,y-S,R-g).normalize(),r[1].setComponents(p+u,v+m,y+S,R+g).normalize(),r[2].setComponents(p+f,v+_,y+E,R+U).normalize(),r[3].setComponents(p-f,v-_,y-E,R-U).normalize(),r[4].setComponents(p-d,v-x,y-w,R-b).normalize(),n===zi)r[5].setComponents(p+d,v+x,y+w,R+b).normalize();else if(n===Ll)r[5].setComponents(d,x,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lg(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function x0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],w=x[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,x[v]=w)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const w=x[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Xo extends tn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,v=n/p,S=[],E=[],w=[],y=[];for(let g=0;g<_;g++){const U=g*v-f;for(let b=0;b<m;b++){const R=b*x-u;E.push(R,-U,0),w.push(0,0,1),y.push(b/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let U=0;U<d;U++){const b=U+m*g,R=U+m*(g+1),H=U+1+m*(g+1),k=U+1+m*g;S.push(b,R,k),S.push(R,H,k)}this.setIndex(S),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(w,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Px=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Cy=`#define DISTANCE
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
}`,Ry=`#define DISTANCE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ny=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,Oy=`#define MATCAP
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
}`,ky=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,zy=`#define NORMAL
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
}`,Hy=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,qy=`uniform float size;
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
}`,jy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Ky=`uniform vec3 color;
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
}`,Zy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:y0,alphahash_pars_fragment:S0,alphamap_fragment:M0,alphamap_pars_fragment:E0,alphatest_fragment:T0,alphatest_pars_fragment:w0,aomap_fragment:A0,aomap_pars_fragment:C0,batching_pars_vertex:R0,batching_vertex:P0,begin_vertex:L0,beginnormal_vertex:b0,bsdfs:D0,iridescence_fragment:U0,bumpmap_pars_fragment:I0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:k0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:H0,color_vertex:V0,common:G0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:Y0,displacementmap_vertex:q0,emissivemap_fragment:j0,emissivemap_pars_fragment:$0,colorspace_fragment:K0,colorspace_pars_fragment:Z0,envmap_fragment:Q0,envmap_common_pars_fragment:J0,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:dx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:rx,fog_fragment:sx,fog_pars_fragment:ox,gradientmap_pars_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:cx,lights_pars_begin:fx,lights_toon_fragment:hx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:Sx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:wx,map_fragment:Ax,map_pars_fragment:Cx,map_particle_fragment:Rx,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:bx,morphinstance_vertex:Dx,morphcolor_vertex:Ux,morphnormal_vertex:Ix,morphtarget_pars_vertex:Nx,morphtarget_vertex:Fx,normal_fragment_begin:Ox,normal_fragment_maps:kx,normal_pars_fragment:Bx,normal_pars_vertex:zx,normal_vertex:Hx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:Yx,opaque_fragment:qx,packing:jx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Zx,dithering_pars_fragment:Qx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:ry,skinbase_vertex:sy,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:ly,specularmap_fragment:uy,specularmap_pars_fragment:cy,tonemapping_fragment:fy,tonemapping_pars_fragment:dy,transmission_fragment:hy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:_y,worldpos_vertex:vy,background_vert:xy,background_frag:yy,backgroundCube_vert:Sy,backgroundCube_frag:My,cube_vert:Ey,cube_frag:Ty,depth_vert:wy,depth_frag:Ay,distanceRGBA_vert:Cy,distanceRGBA_frag:Ry,equirect_vert:Py,equirect_frag:Ly,linedashed_vert:by,linedashed_frag:Dy,meshbasic_vert:Uy,meshbasic_frag:Iy,meshlambert_vert:Ny,meshlambert_frag:Fy,meshmatcap_vert:Oy,meshmatcap_frag:ky,meshnormal_vert:By,meshnormal_frag:zy,meshphong_vert:Hy,meshphong_frag:Vy,meshphysical_vert:Gy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:Yy,points_vert:qy,points_frag:jy,shadow_vert:$y,shadow_frag:Ky,sprite_vert:Zy,sprite_frag:Qy},Re={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:vn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:vn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new dt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:vn([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:vn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:vn([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:vn([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:vn([Re.common,Re.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:vn([Re.lights,Re.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};_i.physical={uniforms:vn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const gl={r:0,b:0,g:0},Br=new yi,Jy=new Ft;function eS(s,e,n,r,a,u,f){const d=new dt(0);let p=u===!0?0:1,m,_,x=null,v=0,S=null;function E(U){let b=U.isScene===!0?U.background:null;return b&&b.isTexture&&(b=(U.backgroundBlurriness>0?n:e).get(b)),b}function w(U){let b=!1;const R=E(U);R===null?g(d,p):R&&R.isColor&&(g(R,1),b=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,b){const R=E(b);R&&(R.isCubeTexture||R.mapping===Nl)?(_===void 0&&(_=new Ln(new Kr(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Ys(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,k,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(b.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(Br)),_.material.toneMapped=xt.getTransfer(R.colorSpace)!==Rt,(x!==R||v!==R.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=R,v=R.version,S=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Ln(new Xo(2,2),new yr({name:"BackgroundMaterial",uniforms:Ys(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=xt.getTransfer(R.colorSpace)!==Rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||v!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=R,v=R.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function g(U,b){U.getRGB(gl,sg(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,b,f)}return{getClearColor:function(){return d},setClearColor:function(U,b=1){d.set(U),p=b,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,g(d,p)},render:w,addToRenderList:y}}function tS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,f=!1;function d(C,O,Q,q,le){let ce=!1;const K=x(q,Q,O);u!==K&&(u=K,m(u.object)),ce=S(C,q,Q,le),ce&&E(C,q,Q,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,R(C,O,Q,q),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function x(C,O,Q){const q=Q.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let ce=le[O.id];ce===void 0&&(ce={},le[O.id]=ce);let K=ce[q];return K===void 0&&(K=v(p()),ce[q]=K),K}function v(C){const O=[],Q=[],q=[];for(let le=0;le<n;le++)O[le]=0,Q[le]=0,q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Q,attributeDivisors:q,object:C,attributes:{},index:null}}function S(C,O,Q,q){const le=u.attributes,ce=O.attributes;let K=0;const oe=Q.getAttributes();for(const B in oe)if(oe[B].location>=0){const ae=le[B];let I=ce[B];if(I===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),ae===void 0||ae.attribute!==I||I&&ae.data!==I.data)return!0;K++}return u.attributesNum!==K||u.index!==q}function E(C,O,Q,q){const le={},ce=O.attributes;let K=0;const oe=Q.getAttributes();for(const B in oe)if(oe[B].location>=0){let ae=ce[B];ae===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const I={};I.attribute=ae,ae&&ae.data&&(I.data=ae.data),le[B]=I,K++}u.attributes=le,u.attributesNum=K,u.index=q}function w(){const C=u.newAttributes;for(let O=0,Q=C.length;O<Q;O++)C[O]=0}function y(C){g(C,0)}function g(C,O){const Q=u.newAttributes,q=u.enabledAttributes,le=u.attributeDivisors;Q[C]=1,q[C]===0&&(s.enableVertexAttribArray(C),q[C]=1),le[C]!==O&&(s.vertexAttribDivisor(C,O),le[C]=O)}function U(){const C=u.newAttributes,O=u.enabledAttributes;for(let Q=0,q=O.length;Q<q;Q++)O[Q]!==C[Q]&&(s.disableVertexAttribArray(Q),O[Q]=0)}function b(C,O,Q,q,le,ce,K){K===!0?s.vertexAttribIPointer(C,O,Q,le,ce):s.vertexAttribPointer(C,O,Q,q,le,ce)}function R(C,O,Q,q){w();const le=q.attributes,ce=Q.getAttributes(),K=O.defaultAttributeValues;for(const oe in ce){const B=ce[oe];if(B.location>=0){let ue=le[oe];if(ue===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const ae=ue.normalized,I=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const De=re.buffer,ee=re.type,fe=re.bytesPerElement,Me=ee===s.INT||ee===s.UNSIGNED_INT||ue.gpuType===Gf;if(ue.isInterleavedBufferAttribute){const ve=ue.data,we=ve.stride,Ue=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)g(B.location+Ze,ve.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ze=0;Ze<B.locationSize;Ze++)b(B.location+Ze,I/B.locationSize,ee,ae,we*fe,(Ue+I/B.locationSize*Ze)*fe,Me)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ue.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,I/B.locationSize,ee,ae,I*fe,I/B.locationSize*ve*fe,Me)}}else if(K!==void 0){const ae=K[oe];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(B.location,ae);break;case 3:s.vertexAttrib3fv(B.location,ae);break;case 4:s.vertexAttrib4fv(B.location,ae);break;default:s.vertexAttrib1fv(B.location,ae)}}}}U()}function H(){V();for(const C in r){const O=r[C];for(const Q in O){const q=O[Q];for(const le in q)_(q[le].object),delete q[le];delete O[Q]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const O=r[C.id];for(const Q in O){const q=O[Q];for(const le in q)_(q[le].object),delete q[le];delete O[Q]}delete r[C.id]}function N(C){for(const O in r){const Q=r[O];if(Q[C.id]===void 0)continue;const q=Q[C.id];for(const le in q)_(q[le].object),delete q[le];delete Q[C.id]}}function V(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:V,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:k,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:y,disableUnusedAttributes:U}}function nS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];n.update(S,r,1)}function p(m,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let E=0;for(let w=0;w<x;w++)E+=_[w]*v[w];n.update(E,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function iS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==ui&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const V=N===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Vi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Bi&&!V)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:U,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:H,maxSamples:k}}function rS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Vr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||a;return a=v,r=x.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,g=s.get(x);if(!a||E===null||E.length===0||u&&!y)u?_(null):m();else{const U=u?0:r,b=U*4;let R=g.clippingState||null;p.value=R,R=_(E,v,b,S);for(let H=0;H!==b;++H)R[H]=n[H];g.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,S,E){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=p.value,E!==!0||y===null){const g=S+w*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,R=S;b!==w;++b,R+=4)f.copy(x[b]).applyMatrix4(U,d),f.normal.toArray(y,R),y[R+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function sS(s){let e=new WeakMap;function n(f,d){return d===uf?f.mapping=Vs:d===cf&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===uf||d===cf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new g0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class ug extends og{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,nm=[.125,.215,.35,.446,.526,.582],Xr=20,Wc=new ug,im=new dt;let Xc=null,Yc=0,qc=0,jc=!1;const Gr=(1+Math.sqrt(5))/2,Ns=1/Gr,rm=[new $(-Gr,Ns,0),new $(Gr,Ns,0),new $(-Ns,0,Gr),new $(Ns,0,Gr),new $(0,Gr,-Ns),new $(0,Gr,Ns),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Xc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,Yc,qc),this._renderer.xr.enabled=jc,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:zo,format:ui,colorSpace:qs,depthBuffer:!1},a=om(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(u)),this._blurMaterial=aS(u,e,n)}return a}_compileMaterial(e){const n=new Ln(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,r,a){const d=new $n(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(im),_.toneMapping=vr,_.autoClear=!1;const S=new ng({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),E=new Ln(new Kr,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(im),w=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):U===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const b=this._cubeSize;_l(a,U*b,g>2?b:0,b,b),_.setRenderTarget(a),w&&_.render(E,d),_.render(e,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Ln(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;_l(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Wc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=rm[(a-u-1)%rm.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Ln(this._lodPlanes[a],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),w=u/E,y=isFinite(u)?1+Math.floor(_*w):Xr;y>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const g=[];let U=0;for(let N=0;N<Xr;++N){const V=N/w,P=Math.exp(-V*V/2);g.push(P),N===0?U+=P:N<y&&(U+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:b}=this;v.dTheta.value=E,v.mipInt.value=b-r;const R=this._sizeLods[a],H=3*R*(a>b-Fs?a-b+Fs:0),k=4*(this._cubeSize-R);_l(n,H,k,3*R,2*R),p.setRenderTarget(n),p.render(x,Wc)}}function oS(s){const e=[],n=[],r=[];let a=s;const u=s-Fs+1+nm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Fs?p=nm[f-s+Fs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,w=3,y=2,g=1,U=new Float32Array(w*E*S),b=new Float32Array(y*E*S),R=new Float32Array(g*E*S);for(let k=0;k<S;k++){const N=k%3*2/3-1,V=k>2?0:-1,P=[N,V,0,N+2/3,V,0,N+2/3,V+1,0,N,V,0,N+2/3,V+1,0,N,V+1,0];U.set(P,w*E*k),b.set(v,y*E*k);const C=[k,k,k,k,k,k];R.set(C,g*E*k)}const H=new tn;H.setAttribute("position",new xi(U,w)),H.setAttribute("uv",new xi(b,y)),H.setAttribute("faceIndex",new xi(R,g)),e.push(H),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function om(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function aS(s,e,n){const r=new Float32Array(Xr),a=new $(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Zf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function am(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zf(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function lm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Zf(){return`

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
	`}function lS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===uf||p===cf,_=p===Vs||p===Gs;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new sm(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new sm(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function uS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function cS(s,e,n,r){const a={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const w=v.morphAttributes[E];for(let y=0,g=w.length;y<g;y++)e.remove(w[y])}v.removeEventListener("dispose",f),delete a[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const E in v)e.update(v[E],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const E in S){const w=S[E];for(let y=0,g=w.length;y<g;y++)e.update(w[y],s.ARRAY_BUFFER)}}function m(x){const v=[],S=x.index,E=x.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let b=0,R=U.length;b<R;b+=3){const H=U[b+0],k=U[b+1],N=U[b+2];v.push(H,k,k,N,N,H)}}else if(E!==void 0){const U=E.array;w=E.version;for(let b=0,R=U.length/3-1;b<R;b+=3){const H=b+0,k=b+1,N=b+2;v.push(H,k,k,N,N,H)}}else return;const y=new(Zm(v)?rg:ig)(v,1);y.version=w;const g=u.get(x);g&&e.remove(g),u.set(x,y)}function _(x){const v=u.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function fS(s,e,n){let r;function a(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,u,v*f),n.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,v*f,E),n.update(S,r,E))}function _(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];n.update(y,r,1)}function x(v,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)m(v[g]/f,S[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,w,0,E);let g=0;for(let U=0;U<E;U++)g+=S[U]*w[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function dS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function hS(s,e,n){const r=new WeakMap,a=new zt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let C=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],b=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let H=d.attributes.position.count*R,k=1;H>e.maxTextureSize&&(k=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const N=new Float32Array(H*k*4*x),V=new Jm(N,H,k,x);V.type=Bi,V.needsUpdate=!0;const P=R*4;for(let O=0;O<x;O++){const Q=g[O],q=U[O],le=b[O],ce=H*k*4*O;for(let K=0;K<Q.count;K++){const oe=K*P;E===!0&&(a.fromBufferAttribute(Q,K),N[ce+oe+0]=a.x,N[ce+oe+1]=a.y,N[ce+oe+2]=a.z,N[ce+oe+3]=0),w===!0&&(a.fromBufferAttribute(q,K),N[ce+oe+4]=a.x,N[ce+oe+5]=a.y,N[ce+oe+6]=a.z,N[ce+oe+7]=0),y===!0&&(a.fromBufferAttribute(le,K),N[ce+oe+8]=a.x,N[ce+oe+9]=a.y,N[ce+oe+10]=a.z,N[ce+oe+11]=le.itemSize===4?a.w:1)}}v={count:x,texture:V,size:new Et(H,k)},r.set(d,v),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function pS(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class cg extends Dn{constructor(e,n,r,a,u,f,d,p,m,_=Bs){if(_!==Bs&&_!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Bs&&(r=jr),r===void 0&&_===Xs&&(r=Ws),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fg=new Dn,um=new cg(1,1),dg=new Jm,hg=new e0,pg=new ag,cm=[],fm=[],dm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=cm[a];if(u===void 0&&(u=new Float32Array(a),cm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ol(s,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function mS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;pm.set(r),s.uniformMatrix2fv(this.addr,!1,pm),Kt(n,r)}}function yS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;hm.set(r),s.uniformMatrix3fv(this.addr,!1,hm),Kt(n,r)}}function SS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;dm.set(r),s.uniformMatrix4fv(this.addr,!1,dm),Kt(n,r)}}function MS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function AS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function LS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(um.compareFunction=Km,u=um):u=fg,n.setTexture2D(e||u,a)}function bS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||hg,a)}function DS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||pg,a)}function US(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||dg,a)}function IS(s){switch(s){case 5126:return mS;case 35664:return gS;case 35665:return _S;case 35666:return vS;case 35674:return xS;case 35675:return yS;case 35676:return SS;case 5124:case 35670:return MS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return CS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return US}}function NS(s,e){s.uniform1fv(this.addr,e)}function FS(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function OS(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function kS(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function BS(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function zS(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function HS(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function VS(s,e){s.uniform1iv(this.addr,e)}function GS(s,e){s.uniform2iv(this.addr,e)}function WS(s,e){s.uniform3iv(this.addr,e)}function XS(s,e){s.uniform4iv(this.addr,e)}function YS(s,e){s.uniform1uiv(this.addr,e)}function qS(s,e){s.uniform2uiv(this.addr,e)}function jS(s,e){s.uniform3uiv(this.addr,e)}function $S(s,e){s.uniform4uiv(this.addr,e)}function KS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||fg,u[f])}function ZS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||hg,u[f])}function QS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||pg,u[f])}function JS(s,e,n){const r=this.cache,a=e.length,u=Ol(n,a);$t(r,u)||(s.uniform1iv(this.addr,u),Kt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||dg,u[f])}function eM(s){switch(s){case 5126:return NS;case 35664:return FS;case 35665:return OS;case 35666:return kS;case 35674:return BS;case 35675:return zS;case 35676:return HS;case 5124:case 35670:return VS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return YS;case 36294:return qS;case 36295:return jS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return JS}}class tM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=IS(n.type)}}class nM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eM(n.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function mm(s,e){s.seq.push(e),s.map[e.id]=e}function rM(s,e,n){const r=s.name,a=r.length;for($c.lastIndex=0;;){const u=$c.exec(r),f=$c.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){mm(n,m===void 0?new tM(d,s,e):new nM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new iM(d),mm(n,x)),n=x}}}class Pl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);rM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const sM=37297;let oM=0;function aM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const _m=new ot;function lM(s){xt._getMatrix(_m,xt.workingColorSpace,s);const e=`mat3( ${_m.elements.map(n=>n.toFixed(4))} )`;switch(xt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+aM(s.getShaderSource(e),f)}else return a}function uM(s,e){const n=lM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function cM(s,e){let n;switch(e){case Cv:n="Linear";break;case Rv:n="Reinhard";break;case Pv:n="Cineon";break;case Lv:n="ACESFilmic";break;case Dv:n="AgX";break;case Uv:n="Neutral";break;case bv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new $;function fM(){xt.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function hM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function pM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Oo(s){return s!==""}function xm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(s){return s.replace(mM,_M)}const gM=new Map;function _M(s,e){let n=at[e];if(n===void 0){const r=gM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zf(n)}const vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(s){return s.replace(vM,xM)}function xM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Mm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function yM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function SM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Om:e="ENVMAP_BLENDING_MULTIPLY";break;case wv:e="ENVMAP_BLENDING_MIX";break;case Av:e="ENVMAP_BLENDING_ADD";break}return e}function TM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function wM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=yM(n),m=SM(n),_=MM(n),x=EM(n),v=TM(n),S=dM(n),E=hM(u),w=a.createProgram();let y,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?at.tonemapping_pars_fragment:"",n.toneMapping!==vr?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,uM("linearToOutputTexel",n.outputColorSpace),fM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),f=zf(f),f=xm(f,n),f=ym(f,n),d=zf(d),d=xm(d,n),d=ym(d,n),f=Sm(f),d=Sm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=U+y+f,R=U+g+d,H=gm(a,a.VERTEX_SHADER,b),k=gm(a,a.FRAGMENT_SHADER,R);a.attachShader(w,H),a.attachShader(w,k),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function N(O){if(s.debug.checkShaderErrors){const Q=a.getProgramInfoLog(w).trim(),q=a.getShaderInfoLog(H).trim(),le=a.getShaderInfoLog(k).trim();let ce=!0,K=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,H,k);else{const oe=vm(a,H,"vertex"),B=vm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Q+`
`+oe+`
`+B)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(q===""||le==="")&&(K=!1);K&&(O.diagnostics={runnable:ce,programLog:Q,vertexShader:{log:q,prefix:y},fragmentShader:{log:le,prefix:g}})}a.deleteShader(H),a.deleteShader(k),V=new Pl(a,w),P=pM(a,w)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,sM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=k,this}let AM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new RM(e),n.set(e,r)),r}}class RM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function PM(s,e,n,r,a,u,f){const d=new eg,p=new CM,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,O,Q,q){const le=Q.fog,ce=q.geometry,K=P.isMeshStandardMaterial?Q.environment:null,oe=(P.isMeshStandardMaterial?n:e).get(P.envMap||K),B=oe&&oe.mapping===Nl?oe.image.height:null,ue=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ae=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=ae!==void 0?ae.length:0;let re=0;ce.morphAttributes.position!==void 0&&(re=1),ce.morphAttributes.normal!==void 0&&(re=2),ce.morphAttributes.color!==void 0&&(re=3);let De,ee,fe,Me;if(ue){const _t=_i[ue];De=_t.vertexShader,ee=_t.fragmentShader}else De=P.vertexShader,ee=P.fragmentShader,p.update(P),fe=p.getVertexShaderID(P),Me=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ue=q.isInstancedMesh===!0,Ze=q.isBatchedMesh===!0,Ct=!!P.map,pt=!!P.matcap,Lt=!!oe,Y=!!P.aoMap,hn=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,qe=!!P.displacementMap,wt=!!P.emissiveMap,Ye=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,J=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,de=P.sheen>0,He=P.transmission>0,Ae=T&&!!P.anisotropyMap,Ie=J&&!!P.clearcoatMap,lt=J&&!!P.clearcoatNormalMap,ye=J&&!!P.clearcoatRoughnessMap,Fe=ge&&!!P.iridescenceMap,Qe=ge&&!!P.iridescenceThicknessMap,Je=de&&!!P.sheenColorMap,Oe=de&&!!P.sheenRoughnessMap,ct=!!P.specularMap,it=!!P.specularColorMap,Tt=!!P.specularIntensityMap,G=He&&!!P.transmissionMap,Ce=He&&!!P.thicknessMap,se=!!P.gradientMap,he=!!P.alphaMap,Le=P.alphaTest>0,Pe=!!P.alphaHash,rt=!!P.extensions;let Dt=vr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Wt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:ee,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&q.instanceColor!==null,instancingMorph:Ue&&q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:pt,envMap:Lt,envMapMode:Lt&&oe.mapping,envMapCubeUVHeight:B,aoMap:Y,lightMap:hn,bumpMap:ht,normalMap:ut,displacementMap:v&&qe,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===Ov,normalMapTangentSpace:ut&&P.normalMapType===$m,metalnessMap:Ye,roughnessMap:L,anisotropy:T,anisotropyMap:Ae,clearcoat:J,clearcoatMap:Ie,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:Fe,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:Je,sheenRoughnessMap:Oe,specularMap:ct,specularColorMap:it,specularIntensityMap:Tt,transmission:He,transmissionMap:G,thicknessMap:Ce,gradientMap:se,opaque:P.transparent===!1&&P.blending===ks&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Pe,combine:P.combine,mapUv:Ct&&w(P.map.channel),aoMapUv:Y&&w(P.aoMap.channel),lightMapUv:hn&&w(P.lightMap.channel),bumpMapUv:ht&&w(P.bumpMap.channel),normalMapUv:ut&&w(P.normalMap.channel),displacementMapUv:qe&&w(P.displacementMap.channel),emissiveMapUv:wt&&w(P.emissiveMap.channel),metalnessMapUv:Ye&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Ae&&w(P.anisotropyMap.channel),clearcoatMapUv:Ie&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&w(P.sheenRoughnessMap.channel),specularMapUv:ct&&w(P.specularMap.channel),specularColorMapUv:it&&w(P.specularColorMap.channel),specularIntensityMapUv:Tt&&w(P.specularIntensityMap.channel),transmissionMapUv:G&&w(P.transmissionMap.channel),thicknessMapUv:Ce&&w(P.thicknessMap.channel),alphaMapUv:he&&w(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ut||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ce.attributes.uv&&(Ct||he),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&xt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&xt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const O in P.defines)C.push(O),C.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(U(C,P),b(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function U(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=E[P.type];let O;if(C){const Q=_i[C];O=d0.clone(Q.uniforms)}else O=P.uniforms;return O}function H(P,C){let O;for(let Q=0,q=_.length;Q<q;Q++){const le=_[Q];if(le.cacheKey===C){O=le,++O.usedTimes;break}}return O===void 0&&(O=new wM(s,C,P,u),_.push(O)),O}function k(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function N(P){p.remove(P)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:H,releaseProgram:k,releaseShaderCache:N,programs:_,dispose:V}}function LM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function bM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,v,S,E,w,y){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:w,group:y},s[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=w,g.group=y),e++,g}function d(x,v,S,E,w,y){const g=f(x,v,S,E,w,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(x,v,S,E,w,y){const g=f(x,v,S,E,w,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||bM),r.length>1&&r.sort(v||Em),a.length>1&&a.sort(v||Em)}function _(){for(let x=e,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function DM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new Tm,s.set(r,[f])):a>=u.length?(f=new Tm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function UM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new dt};break;case"SpotLight":n={position:new $,direction:new $,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function IM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let NM=0;function FM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OM(s){const e=new UM,n=IM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,u=new Ft,f=new Ft;function d(m){let _=0,x=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,w=0,y=0,g=0,U=0,b=0,R=0,H=0,k=0,N=0;m.sort(FM);for(let P=0,C=m.length;P<C;P++){const O=m[P],Q=O.color,q=O.intensity,le=O.distance,ce=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)_+=Q.r*q,x+=Q.g*q,v+=Q.b*q;else if(O.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(O.sh.coefficients[K],q);N++}else if(O.isDirectionalLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const oe=O.shadow,B=n.get(O);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=O.shadow.matrix,U++}r.directional[S]=K,S++}else if(O.isSpotLight){const K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(Q).multiplyScalar(q),K.distance=le,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,r.spot[w]=K;const oe=O.shadow;if(O.map&&(r.spotLightMap[H]=O.map,H++,oe.updateMatrices(O),O.castShadow&&k++),r.spotLightMatrix[w]=oe.matrix,O.castShadow){const B=n.get(O);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=ce,R++}w++}else if(O.isRectAreaLight){const K=e.get(O);K.color.copy(Q).multiplyScalar(q),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=K,y++}else if(O.isPointLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const oe=O.shadow,B=n.get(O);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,B.shadowCameraNear=oe.camera.near,B.shadowCameraFar=oe.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=ce,r.pointShadowMatrix[E]=O.shadow.matrix,b++}r.point[E]=K,E++}else if(O.isHemisphereLight){const K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(q),K.groundColor.copy(O.groundColor).multiplyScalar(q),r.hemi[g]=K,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==w||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==U||V.numPointShadows!==b||V.numSpotShadows!==R||V.numSpotMaps!==H||V.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+H-k,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=N,V.directionalLength=S,V.pointLength=E,V.spotLength=w,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=U,V.numPointShadows=b,V.numSpotShadows=R,V.numSpotMaps=H,V.numLightProbes=N,r.version=NM++)}function p(m,_){let x=0,v=0,S=0,E=0,w=0;const y=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const b=m[g];if(b.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),x++}else if(b.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),f.identity(),u.copy(b.matrixWorld),u.premultiply(y),f.extractRotation(u),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(b.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),v++}else if(b.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function wm(s){const e=new OM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function kM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new wm(s),e.set(a,[d])):u>=f.length?(d=new wm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class BM extends Zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends Zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`;function GM(s,e,n){let r=new Kf;const a=new Et,u=new Et,f=new zt,d=new BM({depthPacking:Fv}),p=new zM,m={},_=n.maxTextureSize,x={[xr]:bn,[bn]:xr,[ki]:ki},v=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new tn;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ln(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let g=this.type;this.render=function(k,N,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(_r),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=g!==Oi&&this.type===Oi,le=g===Oi&&this.type!==Oi;for(let ce=0,K=k.length;ce<K;ce++){const oe=k[ce],B=oe.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ue=B.getFrameExtents();if(a.multiply(ue),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ue.x),a.x=u.x*ue.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ue.y),a.y=u.y*ue.y,B.mapSize.y=u.y)),B.map===null||q===!0||le===!0){const I=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new $r(a.x,a.y,I),B.map.texture.name=oe.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const ae=B.getViewportCount();for(let I=0;I<ae;I++){const re=B.getViewport(I);f.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),Q.viewport(f),B.updateMatrices(oe,I),r=B.getFrustum(),R(N,V,B.camera,oe,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&U(B,V),B.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,O)};function U(k,N){const V=e.update(w);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new $r(a.x,a.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(N,null,V,v,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(N,null,V,S,w,null)}function b(k,N,V,P){let C=null;const O=V.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(O!==void 0)C=O;else if(C=V.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Q=C.uuid,q=N.uuid;let le=m[Q];le===void 0&&(le={},m[Q]=le);let ce=le[q];ce===void 0&&(ce=C.clone(),le[q]=ce,N.addEventListener("dispose",H)),C=ce}if(C.visible=N.visible,C.wireframe=N.wireframe,P===Oi?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:x[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=s.properties.get(C);Q.light=V}return C}function R(k,N,V,P,C){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Oi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,k.matrixWorld);const q=e.update(k),le=k.material;if(Array.isArray(le)){const ce=q.groups;for(let K=0,oe=ce.length;K<oe;K++){const B=ce[K],ue=le[B.materialIndex];if(ue&&ue.visible){const ae=b(k,ue,P,C);k.onBeforeShadow(s,k,N,V,q,ae,B),s.renderBufferDirect(V,null,q,ae,k,B),k.onAfterShadow(s,k,N,V,q,ae,B)}}}else if(le.visible){const ce=b(k,le,P,C);k.onBeforeShadow(s,k,N,V,q,ce,null),s.renderBufferDirect(V,null,q,ce,k,null),k.onAfterShadow(s,k,N,V,q,ce,null)}}const Q=k.children;for(let q=0,le=Q.length;q<le;q++)R(Q[q],N,V,P,C)}function H(k){k.target.removeEventListener("dispose",H);for(const V in m){const P=m[V],C=k.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const WM={[tf]:nf,[rf]:af,[sf]:lf,[Hs]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:Hs};function XM(s,e){function n(){let G=!1;const Ce=new zt;let se=null;const he=new zt(0,0,0,0);return{setMask:function(Le){se!==Le&&!G&&(s.colorMask(Le,Le,Le,Le),se=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,rt,Dt,Wt){Wt===!0&&(Le*=Dt,Pe*=Dt,rt*=Dt),Ce.set(Le,Pe,rt,Dt),he.equals(Ce)===!1&&(s.clearColor(Le,Pe,rt,Dt),he.copy(Ce))},reset:function(){G=!1,se=null,he.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,se=null,he=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Le;Le=null,this.setClear(Dt)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!G&&(s.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Ce&&(Pe=WM[Pe]),he!==Pe){switch(Pe){case tf:s.depthFunc(s.NEVER);break;case nf:s.depthFunc(s.ALWAYS);break;case rf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case sf:s.depthFunc(s.EQUAL);break;case of:s.depthFunc(s.GEQUAL);break;case af:s.depthFunc(s.GREATER);break;case lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,se=null,he=null,Le=null,Ce=!1}}}function a(){let G=!1,Ce=null,se=null,he=null,Le=null,Pe=null,rt=null,Dt=null,Wt=null;return{setTest:function(_t){G||(_t?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(_t){Ce!==_t&&!G&&(s.stencilMask(_t),Ce=_t)},setFunc:function(_t,yn,pn){(se!==_t||he!==yn||Le!==pn)&&(s.stencilFunc(_t,yn,pn),se=_t,he=yn,Le=pn)},setOp:function(_t,yn,pn){(Pe!==_t||rt!==yn||Dt!==pn)&&(s.stencilOp(_t,yn,pn),Pe=_t,rt=yn,Dt=pn)},setLocked:function(_t){G=_t},setClear:function(_t){Wt!==_t&&(s.clearStencil(_t),Wt=_t)},reset:function(){G=!1,Ce=null,se=null,he=null,Le=null,Pe=null,rt=null,Dt=null,Wt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,S=[],E=null,w=!1,y=null,g=null,U=null,b=null,R=null,H=null,k=null,N=new dt(0,0,0),V=0,P=!1,C=null,O=null,Q=null,q=null,le=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=oe>=1):B.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=oe>=2);let ue=null,ae={};const I=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),De=new zt().fromArray(I),ee=new zt().fromArray(re);function fe(G,Ce,se,he){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const Me={};Me[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Hs),ht(!1),ut(Pp),ve(s.CULL_FACE),Y(_r);function ve(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function we(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function Ue(G,Ce){return x[G]!==Ce?(s.bindFramebuffer(G,Ce),x[G]=Ce,G===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(G,Ce){let se=S,he=!1;if(G){se=v.get(Ce),se===void 0&&(se=[],v.set(Ce,se));const Le=G.textures;if(se.length!==Le.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)se[Pe]=s.COLOR_ATTACHMENT0+Pe;se.length=Le.length,he=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,he=!0);he&&s.drawBuffers(se)}function Ct(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const pt={[Wr]:s.FUNC_ADD,[lv]:s.FUNC_SUBTRACT,[uv]:s.FUNC_REVERSE_SUBTRACT};pt[cv]=s.MIN,pt[fv]=s.MAX;const Lt={[dv]:s.ZERO,[hv]:s.ONE,[pv]:s.SRC_COLOR,[Jc]:s.SRC_ALPHA,[yv]:s.SRC_ALPHA_SATURATE,[vv]:s.DST_COLOR,[gv]:s.DST_ALPHA,[mv]:s.ONE_MINUS_SRC_COLOR,[ef]:s.ONE_MINUS_SRC_ALPHA,[xv]:s.ONE_MINUS_DST_COLOR,[_v]:s.ONE_MINUS_DST_ALPHA,[Sv]:s.CONSTANT_COLOR,[Mv]:s.ONE_MINUS_CONSTANT_COLOR,[Ev]:s.CONSTANT_ALPHA,[Tv]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(G,Ce,se,he,Le,Pe,rt,Dt,Wt,_t){if(G===_r){w===!0&&(we(s.BLEND),w=!1);return}if(w===!1&&(ve(s.BLEND),w=!0),G!==av){if(G!==y||_t!==P){if((g!==Wr||R!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,R=Wr),_t)switch(G){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lp:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,b=null,H=null,k=null,N.set(0,0,0),V=0,y=G,P=_t}return}Le=Le||Ce,Pe=Pe||se,rt=rt||he,(Ce!==g||Le!==R)&&(s.blendEquationSeparate(pt[Ce],pt[Le]),g=Ce,R=Le),(se!==U||he!==b||Pe!==H||rt!==k)&&(s.blendFuncSeparate(Lt[se],Lt[he],Lt[Pe],Lt[rt]),U=se,b=he,H=Pe,k=rt),(Dt.equals(N)===!1||Wt!==V)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Wt),N.copy(Dt),V=Wt),y=G,P=!1}function hn(G,Ce){G.side===ki?we(s.CULL_FACE):ve(s.CULL_FACE);let se=G.side===bn;Ce&&(se=!se),ht(se),G.blending===ks&&G.transparent===!1?Y(_r):Y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),u.setMask(G.colorWrite);const he=G.stencilWrite;d.setTest(he),he&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ut(G){G!==rv?(ve(s.CULL_FACE),G!==O&&(G===Pp?s.cullFace(s.BACK):G===sv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),O=G}function qe(G){G!==Q&&(K&&s.lineWidth(G),Q=G)}function wt(G,Ce,se){G?(ve(s.POLYGON_OFFSET_FILL),(q!==Ce||le!==se)&&(s.polygonOffset(Ce,se),q=Ce,le=se)):we(s.POLYGON_OFFSET_FILL)}function Ye(G){G?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function L(G){G===void 0&&(G=s.TEXTURE0+ce-1),ue!==G&&(s.activeTexture(G),ue=G)}function T(G,Ce,se){se===void 0&&(ue===null?se=s.TEXTURE0+ce-1:se=ue);let he=ae[se];he===void 0&&(he={type:void 0,texture:void 0},ae[se]=he),(he.type!==G||he.texture!==Ce)&&(ue!==se&&(s.activeTexture(se),ue=se),s.bindTexture(G,Ce||Me[G]),he.type=G,he.texture=Ce)}function J(){const G=ae[ue];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){De.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),De.copy(G))}function Oe(G){ee.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function ct(G,Ce){let se=m.get(Ce);se===void 0&&(se=new WeakMap,m.set(Ce,se));let he=se.get(G);he===void 0&&(he=s.getUniformBlockIndex(Ce,G.name),se.set(G,he))}function it(G,Ce){const he=m.get(Ce).get(G);p.get(Ce)!==he&&(s.uniformBlockBinding(Ce,he,G.__bindingPointIndex),p.set(Ce,he))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ue=null,ae={},x={},v=new WeakMap,S=[],E=null,w=!1,y=null,g=null,U=null,b=null,R=null,H=null,k=null,N=new dt(0,0,0),V=0,P=!1,C=null,O=null,Q=null,q=null,le=null,De.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:we,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:Ct,setBlending:Y,setMaterial:hn,setFlipSided:ht,setCullFace:ut,setLineWidth:qe,setPolygonOffset:wt,setScissorTest:Ye,activeTexture:L,bindTexture:T,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:ye,texSubImage2D:de,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:Je,viewport:Oe,reset:Tt}}function Am(s,e,n,r){const a=YM(r);switch(n){case Vm:return s*e;case Wm:return s*e;case Xm:return s*e*2;case Ym:return s*e/a.components*a.byteLength;case Yf:return s*e/a.components*a.byteLength;case qm:return s*e*2/a.components*a.byteLength;case qf:return s*e*2/a.components*a.byteLength;case Gm:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case jf:return s*e*4/a.components*a.byteLength;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:case gf:return Math.max(s,16)*Math.max(e,8)/4;case hf:case mf:return Math.max(s,8)*Math.max(e,8)/2;case _f:case vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case If:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jm:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Of:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YM(s){switch(s){case Vi:case Bm:return{byteLength:1,components:1};case Bo:case zm:case zo:return{byteLength:2,components:1};case Wf:case Xf:return{byteLength:2,components:4};case jr:case Gf:case Bi:return{byteLength:4,components:1};case Hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function qM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):bl("canvas")}function w(L,T,J){let pe=1;const ge=Ye(L);if((ge.width>J||ge.height>J)&&(pe=J/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(pe*ge.width),He=Math.floor(pe*ge.height);x===void 0&&(x=E(de,He));const Ae=T?E(de,He):x;return Ae.width=de,Ae.height=He,Ae.getContext("2d").drawImage(L,0,0,de,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+He+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,T,J,pe,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=T;if(T===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),T===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),T===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),T===s.RGBA){const He=ge?Fl:xt.getTransfer(pe);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=He===Rt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(L,T){let J;return L?T===null||T===jr||T===Ws?J=s.DEPTH24_STENCIL8:T===Bi?J=s.DEPTH32F_STENCIL8:T===Bo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===jr||T===Ws?J=s.DEPTH_COMPONENT24:T===Bi?J=s.DEPTH_COMPONENT32F:T===Bo&&(J=s.DEPTH_COMPONENT16),J}function H(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ci&&L.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function k(L){const T=L.target;T.removeEventListener("dispose",k),V(T),T.isVideoTexture&&_.delete(T)}function N(L){const T=L.target;T.removeEventListener("dispose",N),C(T)}function V(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,pe=v.get(J);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(pe).length===0&&v.delete(J)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const J=L.source,pe=v.get(J);delete pe[T.__cacheKey],f.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let pe=0,ge=J.length;pe<ge;pe++){const de=r.get(J[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(J[pe])}r.remove(L)}let O=0;function Q(){O=0}function q(){const L=O;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),O+=1,L}function le(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ce(L,T){const J=r.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(J,L,T);return}}n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function K(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ee(J,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function oe(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ee(J,L,T);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function B(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){fe(J,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const ue={[ff]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[df]:s.MIRRORED_REPEAT},ae={[ci]:s.NEAREST,[Iv]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},I={[kv]:s.NEVER,[Wv]:s.ALWAYS,[Bv]:s.LESS,[Km]:s.LEQUAL,[zv]:s.EQUAL,[Gv]:s.GEQUAL,[Hv]:s.GREATER,[Vv]:s.NOTEQUAL};function re(L,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===Sc||T.magFilter===Qa||T.magFilter===qr||T.minFilter===vi||T.minFilter===Sc||T.minFilter===Qa||T.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ue[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ue[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ue[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ae[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==Qa&&T.minFilter!==qr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function De(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",k));const pe=T.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const de=le(T);if(de!==L.__cacheKey){ge[de]===void 0&&(ge[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),ge[de].usedTimes++;const He=ge[L.__cacheKey];He!==void 0&&(ge[L.__cacheKey].usedTimes--,He.usedTimes===0&&P(T)),L.__cacheKey=de,L.__webglTexture=ge[de].texture}return J}function ee(L,T,J){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=De(L,T),de=T.source;n.bindTexture(pe,L.__webglTexture,s.TEXTURE0+J);const He=r.get(de);if(de.version!==He.__version||ge===!0){n.activeTexture(s.TEXTURE0+J);const Ae=xt.getPrimaries(xt.workingColorSpace),Ie=T.colorSpace===gr?null:xt.getPrimaries(T.colorSpace),lt=T.colorSpace===gr||Ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=w(T.image,!1,a.maxTextureSize);ye=wt(T,ye);const Fe=u.convert(T.format,T.colorSpace),Qe=u.convert(T.type);let Je=b(T.internalFormat,Fe,Qe,T.colorSpace,T.isVideoTexture);re(pe,T);let Oe;const ct=T.mipmaps,it=T.isVideoTexture!==!0,Tt=He.__version===void 0||ge===!0,G=de.dataReady,Ce=H(T,ye);if(T.isDepthTexture)Je=R(T.format===Xs,T.type),Tt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Fe,Qe,null));else if(T.isDataTexture)if(ct.length>0){it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let se=0,he=ct.length;se<he;se++)Oe=ct[se],it?G&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Qe,Oe.data):n.texImage2D(s.TEXTURE_2D,se,Je,Oe.width,Oe.height,0,Fe,Qe,Oe.data);T.generateMipmaps=!1}else it?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ye.width,ye.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,Qe,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Fe,Qe,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ct[0].width,ct[0].height,ye.depth);for(let se=0,he=ct.length;se<he;se++)if(Oe=ct[se],T.format!==ui)if(Fe!==null)if(it){if(G)if(T.layerUpdates.size>0){const Le=Am(Oe.width,Oe.height,T.format,T.type);for(const Pe of T.layerUpdates){const rt=Oe.data.subarray(Pe*Le/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Pe,Oe.width,Oe.height,1,Fe,rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Qe,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,Oe.width,Oe.height,ye.depth,0,Fe,Qe,Oe.data)}else{it&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let se=0,he=ct.length;se<he;se++)Oe=ct[se],T.format!==ui?Fe!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Je,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Qe,Oe.data):n.texImage2D(s.TEXTURE_2D,se,Je,Oe.width,Oe.height,0,Fe,Qe,Oe.data)}else if(T.isDataArrayTexture)if(it){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ye.width,ye.height,ye.depth),G)if(T.layerUpdates.size>0){const se=Am(ye.width,ye.height,T.format,T.type);for(const he of T.layerUpdates){const Le=ye.data.subarray(he*se/ye.data.BYTES_PER_ELEMENT,(he+1)*se/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,Qe,Le)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Qe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,Fe,Qe,ye.data);else if(T.isData3DTexture)it?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ce,Je,ye.width,ye.height,ye.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Qe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,Fe,Qe,ye.data);else if(T.isFramebufferTexture){if(Tt)if(it)n.texStorage2D(s.TEXTURE_2D,Ce,Je,ye.width,ye.height);else{let se=ye.width,he=ye.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(s.TEXTURE_2D,Le,Je,se,he,0,Fe,Qe,null),se>>=1,he>>=1}}else if(ct.length>0){if(it&&Tt){const se=Ye(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}for(let se=0,he=ct.length;se<he;se++)Oe=ct[se],it?G&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,Qe,Oe):n.texImage2D(s.TEXTURE_2D,se,Je,Fe,Qe,Oe);T.generateMipmaps=!1}else if(it){if(Tt){const se=Ye(ye);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Qe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Je,Fe,Qe,ye);y(T)&&g(pe),He.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,J){if(T.image.length!==6)return;const pe=De(L,T),ge=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const de=r.get(ge);if(ge.version!==de.__version||pe===!0){n.activeTexture(s.TEXTURE0+J);const He=xt.getPrimaries(xt.workingColorSpace),Ae=T.colorSpace===gr?null:xt.getPrimaries(T.colorSpace),Ie=T.colorSpace===gr||He===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!lt&&!ye?Fe[he]=w(T.image[he],!0,a.maxCubemapSize):Fe[he]=ye?T.image[he].image:T.image[he],Fe[he]=wt(T,Fe[he]);const Qe=Fe[0],Je=u.convert(T.format,T.colorSpace),Oe=u.convert(T.type),ct=b(T.internalFormat,Je,Oe,T.colorSpace),it=T.isVideoTexture!==!0,Tt=de.__version===void 0||pe===!0,G=ge.dataReady;let Ce=H(T,Qe);re(s.TEXTURE_CUBE_MAP,T);let se;if(lt){it&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,Qe.width,Qe.height);for(let he=0;he<6;he++){se=Fe[he].mipmaps;for(let Le=0;Le<se.length;Le++){const Pe=se[Le];T.format!==ui?Je!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,Je,Oe,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ct,Pe.width,Pe.height,0,Je,Oe,Pe.data)}}}else{if(se=T.mipmaps,it&&Tt){se.length>0&&Ce++;const he=Ye(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,he.width,he.height)}for(let he=0;he<6;he++)if(ye){it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Je,Oe,Fe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Fe[he].width,Fe[he].height,0,Je,Oe,Fe[he].data);for(let Le=0;Le<se.length;Le++){const rt=se[Le].image[he].image;it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,rt.width,rt.height,Je,Oe,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ct,rt.width,rt.height,0,Je,Oe,rt.data)}}else{it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Oe,Fe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Je,Oe,Fe[he]);for(let Le=0;Le<se.length;Le++){const Pe=se[Le];it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,Je,Oe,Pe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ct,Je,Oe,Pe.image[he])}}}y(T)&&g(s.TEXTURE_CUBE_MAP),de.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Me(L,T,J,pe,ge,de){const He=u.convert(J.format,J.colorSpace),Ae=u.convert(J.type),Ie=b(J.internalFormat,He,Ae,J.colorSpace),lt=r.get(T),ye=r.get(J);if(ye.__renderTarget=T,!lt.__hasExternalTextures){const Fe=Math.max(1,T.width>>de),Qe=Math.max(1,T.height>>de);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,de,Ie,Fe,Qe,T.depth,0,He,Ae,null):n.texImage2D(ge,de,Ie,Fe,Qe,0,He,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,ht(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(L,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,de=R(T.stencilBuffer,ge),He=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ht(T);ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,L)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const de=pe[ge],He=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),Ie=b(de.internalFormat,He,Ae,de.colorSpace),lt=ht(T);J&&ut(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ie,T.width,T.height):ut(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const ge=pe.__webglTexture,de=ht(T);if(T.depthTexture.format===Bs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Xs)ut(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");we(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(L,T,J){const pe=r.get(L);T!==void 0&&Me(pe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ue(L)}function Ct(L){const T=L.texture,J=r.get(L),pe=r.get(T);L.addEventListener("dispose",N);const ge=L.textures,de=L.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,f.memory.textures++),de){J.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)J.__webglFramebuffer[Ae][Ie]=s.createFramebuffer()}else J.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)J.__webglFramebuffer[Ae]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(He)for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=r.get(ge[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ut(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ie=ge[Ae];J.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ae]);const lt=u.convert(Ie.format,Ie.colorSpace),ye=u.convert(Ie.type),Fe=b(Ie.internalFormat,lt,ye,Ie.colorSpace,L.isXRRenderTarget===!0),Qe=ht(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)Me(J.__webglFramebuffer[Ae][Ie],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Me(J.__webglFramebuffer[Ae],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=ge[Ae],ye=r.get(lt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),re(s.TEXTURE_2D,lt),Me(J.__webglFramebuffer,L,lt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),re(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)Me(J.__webglFramebuffer[Ie],L,T,s.COLOR_ATTACHMENT0,Ae,Ie);else Me(J.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ae,0);y(T)&&g(Ae),n.unbindTexture()}L.depthBuffer&&Ue(L)}function pt(L){const T=L.textures;for(let J=0,pe=T.length;J<pe;J++){const ge=T[J];if(y(ge)){const de=U(L),He=r.get(ge).__webglTexture;n.bindTexture(de,He),g(de),n.unbindTexture()}}}const Lt=[],Y=[];function hn(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,J=L.width,pe=L.height;let ge=s.COLOR_BUFFER_BIT;const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(L),Ae=T.length>1;if(Ae)for(let Ie=0;Ie<T.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const lt=r.get(T[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,J,pe,0,0,J,pe,ge,s.NEAREST),p===!0&&(Lt.length=0,Y.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ie),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Lt.push(de),Y.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Y)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<T.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ie]);const lt=r.get(T[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(L){return Math.min(a.maxSamples,L.samples)}function ut(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(L){const T=f.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function wt(L,T){const J=L.colorSpace,pe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==qs&&J!==gr&&(xt.getTransfer(J)===Rt?(pe!==ui||ge!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=ce,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function jM(s,e){function n(r,a=gr){let u;const f=xt.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===Wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Hm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Bm)return s.BYTE;if(r===zm)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Gf)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===Vm)return s.ALPHA;if(r===Gm)return s.RGB;if(r===ui)return s.RGBA;if(r===Wm)return s.LUMINANCE;if(r===Xm)return s.LUMINANCE_ALPHA;if(r===Bs)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===Ym)return s.RED;if(r===Yf)return s.RED_INTEGER;if(r===qm)return s.RG;if(r===qf)return s.RG_INTEGER;if(r===jf)return s.RGBA_INTEGER;if(r===Tl||r===wl||r===Al||r===Cl)if(f===Rt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hf||r===pf||r===mf||r===gf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===hf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===_f||r===vf)return f===Rt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===xf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yf||r===Sf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Cf||r===Rf||r===Pf||r===Lf||r===bf||r===Df||r===Uf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===yf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ef)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Af)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Df)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uf)return f===Rt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===If||r===Nf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Rl)return f===Rt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===If)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jm||r===Ff||r===Of||r===kf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Rl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ff)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class $M extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const y=n.getJointPose(w,r),g=this._getHandJoint(m,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
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

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Dn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new Xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends js{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,x=null,v=null,S=null,E=null;const w=new JM,y=n.getContextAttributes();let g=null,U=null;const b=[],R=[],H=new Et;let k=null;const N=new $n;N.viewport=new zt;const V=new $n;V.viewport=new zt;const P=[N,V],C=new $M;let O=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=b[ee];return fe===void 0&&(fe=new Kc,b[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=b[ee];return fe===void 0&&(fe=new Kc,b[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=b[ee];return fe===void 0&&(fe=new Kc,b[ee]=fe),fe.getHandSpace()};function q(ee){const fe=R.indexOf(ee.inputSource);if(fe===-1)return;const Me=b[fe];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,m||f),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function le(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<b.length;ee++){const fe=R[ee];fe!==null&&(R[ee]=null,b[ee].disconnect(fe))}O=null,Q=null,w.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,U=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new $r(S.framebufferWidth,S.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,Me=null,ve=null;y.depth&&(ve=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=y.stencil?Xs:Bs,Me=y.stencil?Ws:jr);const we={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(we),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new $r(v.textureWidth,v.textureHeight,{format:ui,type:Vi,depthTexture:new cg(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ce(ee){for(let fe=0;fe<ee.removed.length;fe++){const Me=ee.removed[fe],ve=R.indexOf(Me);ve>=0&&(R[ve]=null,b[ve].disconnect(Me))}for(let fe=0;fe<ee.added.length;fe++){const Me=ee.added[fe];let ve=R.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=R.length){R.push(Me),ve=Ue;break}else if(R[Ue]===null){R[Ue]=Me,ve=Ue;break}if(ve===-1)break}const we=b[ve];we&&we.connect(Me)}}const K=new $,oe=new $;function B(ee,fe,Me){K.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(Me.matrixWorld);const ve=K.distanceTo(oe),we=fe.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Ze=we[14]/(we[10]-1),Ct=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],Lt=(we[9]-1)/we[5],Y=(we[8]-1)/we[0],hn=(Ue[8]+1)/Ue[0],ht=Ze*Y,ut=Ze*hn,qe=ve/(-Y+hn),wt=qe*-Y;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(wt),ee.translateZ(qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ye=Ze+qe,L=Ct+qe,T=ht-wt,J=ut+(ve-wt),pe=pt*Ct/L*Ye,ge=Lt*Ct/L*Ye;ee.projectionMatrix.makePerspective(T,J,pe,ge,Ye,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let fe=ee.near,Me=ee.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),C.near=V.near=N.near=fe,C.far=V.far=N.far=Me,(O!==C.near||Q!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,Q=C.far),N.layers.mask=ee.layers.mask|2,V.layers.mask=ee.layers.mask|4,C.layers.mask=N.layers.mask|V.layers.mask;const ve=ee.parent,we=C.cameras;ue(C,ve);for(let Ue=0;Ue<we.length;Ue++)ue(we[Ue],ve);we.length===2?B(C,N,V):C.projectionMatrix.copy(N.projectionMatrix),ae(ee,C,ve)};function ae(ee,fe,Me){Me===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Bf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(ee){p=ee,v!==null&&(v.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let I=null;function re(ee,fe){if(_=fe.getViewerPose(m||f),E=fe,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ve=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Ze=Me[Ue];let Ct=null;if(S!==null)Ct=S.getViewport(Ze);else{const Lt=x.getViewSubImage(v,Ze);Ct=Lt.viewport,Ue===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,v.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(U))}let pt=P[Ue];pt===void 0&&(pt=new $n,pt.layers.enable(Ue),pt.viewport=new zt,P[Ue]=pt),pt.matrix.fromArray(Ze.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ze.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ue===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(pt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=x.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,a.renderState)}}for(let Me=0;Me<b.length;Me++){const ve=R[Me],we=b[Me];ve!==null&&we!==void 0&&we.update(ve,fe,m||f)}I&&I(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const De=new lg;De.setAnimationLoop(re),this.setAnimationLoop=function(ee){I=ee},this.dispose=function(){}}}const zr=new yi,tE=new Ft;function nE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,sg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,U,b,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),x(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,R)):g.isMeshMatcapMaterial?(u(y,g),E(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),w(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,U,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===bn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===bn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const U=e.get(g),b=U.envMap,R=U.envMapRotation;b&&(y.envMap.value=b,zr.copy(R),zr.x*=-1,zr.y*=-1,zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(zr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,U,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*U,y.scale.value=b*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,U){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const U=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function iE(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,b){const R=b.program;r.uniformBlockBinding(U,R)}function m(U,b){let R=a[U.id];R===void 0&&(E(U),R=_(U),a[U.id]=R,U.addEventListener("dispose",y));const H=b.program;r.updateUBOMapping(U,H);const k=e.render.frame;u[U.id]!==k&&(v(U),u[U.id]=k)}function _(U){const b=x();U.__bindingPointIndex=b;const R=s.createBuffer(),H=U.__size,k=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,R),R}function x(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const b=a[U.id],R=U.uniforms,H=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let k=0,N=R.length;k<N;k++){const V=Array.isArray(R[k])?R[k]:[R[k]];for(let P=0,C=V.length;P<C;P++){const O=V[P];if(S(O,k,P,H)===!0){const Q=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let le=0;for(let ce=0;ce<q.length;ce++){const K=q[ce],oe=w(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,Q+le,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,le),le+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,b,R,H){const k=U.value,N=b+"_"+R;if(H[N]===void 0)return typeof k=="number"||typeof k=="boolean"?H[N]=k:H[N]=k.clone(),!0;{const V=H[N];if(typeof k=="number"||typeof k=="boolean"){if(V!==k)return H[N]=k,!0}else if(V.equals(k)===!1)return V.copy(k),!0}return!1}function E(U){const b=U.uniforms;let R=0;const H=16;for(let N=0,V=b.length;N<V;N++){const P=Array.isArray(b[N])?b[N]:[b[N]];for(let C=0,O=P.length;C<O;C++){const Q=P[C],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let le=0,ce=q.length;le<ce;le++){const K=q[le],oe=w(K),B=R%H,ue=B%oe.boundary,ae=B+ue;R+=ue,ae!==0&&H-ae<oe.storage&&(R+=H-ae),Q.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=oe.storage}}}const k=R%H;return k>0&&(R+=H-k),U.__size=R,U.__cache={},this}function w(U){const b={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(b.boundary=4,b.storage=4):U.isVector2?(b.boundary=8,b.storage=8):U.isVector3||U.isColor?(b.boundary=16,b.storage=12):U.isVector4?(b.boundary=16,b.storage=16):U.isMatrix3?(b.boundary=48,b.storage=48):U.isMatrix4?(b.boundary=64,b.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),b}function y(U){const b=U.target;b.removeEventListener("dispose",y);const R=f.indexOf(b.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete u[b.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class rE{constructor(e={}){const{canvas:n=Yv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const U=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=vr,this.toneMappingExposure=1;const R=this;let H=!1,k=0,N=0,V=null,P=-1,C=null;const O=new zt,Q=new zt;let q=null;const le=new dt(0);let ce=0,K=n.width,oe=n.height,B=1,ue=null,ae=null;const I=new zt(0,0,K,oe),re=new zt(0,0,K,oe);let De=!1;const ee=new Kf;let fe=!1,Me=!1;const ve=new Ft,we=new Ft,Ue=new $,Ze=new zt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return V===null?B:1}let Y=r;function hn(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),Y===null){const W="webgl2";if(Y=hn(W,A),Y===null)throw hn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ut,qe,wt,Ye,L,T,J,pe,ge,de,He,Ae,Ie,lt,ye,Fe,Qe,Je,Oe,ct,it,Tt,G;function Ce(){ht=new uS(Y),ht.init(),it=new jM(Y,ht),ut=new iS(Y,ht,e,it),qe=new XM(Y,ht),ut.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),wt=new dS(Y),Ye=new LM,L=new qM(Y,ht,qe,Ye,ut,it,wt),T=new sS(R),J=new lS(R),pe=new x0(Y),Tt=new tS(Y,pe),ge=new cS(Y,pe,wt,Tt),de=new pS(Y,ge,pe,wt),Je=new hS(Y,ut,L),ye=new rS(Ye),He=new PM(R,T,J,ht,ut,Tt,ye),Ae=new nE(R,Ye),Ie=new DM,lt=new kM(ht),Qe=new eS(R,T,J,qe,de,S,p),Fe=new GM(R,de,ut),G=new iE(Y,wt,ut,qe),Oe=new nS(Y,ht,wt),ct=new fS(Y,ht,wt),wt.programs=He.programs,R.capabilities=ut,R.extensions=ht,R.properties=Ye,R.renderLists=Ie,R.shadowMap=Fe,R.state=qe,R.info=wt}Ce();const se=new eE(R,Y);this.xr=se,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(K,oe,!1))},this.getSize=function(A){return A.set(K,oe)},this.setSize=function(A,W,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,oe=W,n.width=Math.floor(A*B),n.height=Math.floor(W*B),ne===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(K*B,oe*B).floor()},this.setDrawingBufferSize=function(A,W,ne){K=A,oe=W,B=ne,n.width=Math.floor(A*ne),n.height=Math.floor(W*ne),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,W,ne,ie){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,W,ne,ie),qe.viewport(O.copy(I).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,W,ne,ie){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,W,ne,ie),qe.scissor(Q.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){qe.setScissorTest(De=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,W=!0,ne=!0){let ie=0;if(A){let X=!1;if(V!==null){const Te=V.texture.format;X=Te===jf||Te===qf||Te===Yf}if(X){const Te=V.texture.type,Se=Te===Vi||Te===jr||Te===Bo||Te===Ws||Te===Wf||Te===Xf,Ve=Qe.getClearColor(),Be=Qe.getClearAlpha(),et=Ve.r,nt=Ve.g,Ge=Ve.b;Se?(E[0]=et,E[1]=nt,E[2]=Ge,E[3]=Be,Y.clearBufferuiv(Y.COLOR,0,E)):(w[0]=et,w[1]=nt,w[2]=Ge,w[3]=Be,Y.clearBufferiv(Y.COLOR,0,w))}else ie|=Y.COLOR_BUFFER_BIT}W&&(ie|=Y.DEPTH_BUFFER_BIT),ne&&(ie|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ie.dispose(),lt.dispose(),Ye.dispose(),T.dispose(),J.dispose(),de.dispose(),Tt.dispose(),G.dispose(),He.dispose(),se.dispose(),se.removeEventListener("sessionstart",Qr),se.removeEventListener("sessionend",Gi),Si.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=wt.autoReset,W=Fe.enabled,ne=Fe.autoUpdate,ie=Fe.needsUpdate,X=Fe.type;Ce(),wt.autoReset=A,Fe.enabled=W,Fe.autoUpdate=ne,Fe.needsUpdate=ie,Fe.type=X}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const W=A.target;W.removeEventListener("dispose",rt),Dt(W)}function Dt(A){Wt(A),Ye.remove(A)}function Wt(A){const W=Ye.get(A).programs;W!==void 0&&(W.forEach(function(ne){He.releaseProgram(ne)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ne,ie,X,Te){W===null&&(W=Ct);const Se=X.isMesh&&X.matrixWorld.determinant()<0,Ve=jo(A,W,ne,ie,X);qe.setMaterial(ie,Se);let Be=ne.index,et=1;if(ie.wireframe===!0){if(Be=ge.getWireframeAttribute(ne),Be===void 0)return;et=2}const nt=ne.drawRange,Ge=ne.attributes.position;let gt=nt.start*et,Mt=(nt.start+nt.count)*et;Te!==null&&(gt=Math.max(gt,Te.start*et),Mt=Math.min(Mt,(Te.start+Te.count)*et)),Be!==null?(gt=Math.max(gt,0),Mt=Math.min(Mt,Be.count)):Ge!=null&&(gt=Math.max(gt,0),Mt=Math.min(Mt,Ge.count));const mt=Mt-gt;if(mt<0||mt===1/0)return;Tt.setup(X,ie,Ve,ne,Be);let sn,st=Oe;if(Be!==null&&(sn=pe.get(Be),st=ct,st.setIndex(sn)),X.isMesh)ie.wireframe===!0?(qe.setLineWidth(ie.wireframeLinewidth*Lt()),st.setMode(Y.LINES)):st.setMode(Y.TRIANGLES);else if(X.isLine){let Xe=ie.linewidth;Xe===void 0&&(Xe=1),qe.setLineWidth(Xe*Lt()),X.isLineSegments?st.setMode(Y.LINES):X.isLineLoop?st.setMode(Y.LINE_LOOP):st.setMode(Y.LINE_STRIP)}else X.isPoints?st.setMode(Y.POINTS):X.isSprite&&st.setMode(Y.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xe=X._multiDrawStarts,Kn=X._multiDrawCounts,yt=X._multiDrawCount,on=Be?pe.get(Be).bytesPerElement:1,Zn=Ye.get(ie).currentProgram.getUniforms();for(let Xt=0;Xt<yt;Xt++)Zn.setValue(Y,"_gl_DrawID",Xt),st.render(Xe[Xt]/on,Kn[Xt])}else if(X.isInstancedMesh)st.renderInstances(gt,mt,X.count);else if(ne.isInstancedBufferGeometry){const Xe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Kn=Math.min(ne.instanceCount,Xe);st.renderInstances(gt,mt,Kn)}else st.render(gt,mt)};function _t(A,W,ne){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=bn,A.needsUpdate=!0,Jr(A,W,ne),A.side=xr,A.needsUpdate=!0,Jr(A,W,ne),A.side=ki):Jr(A,W,ne)}this.compile=function(A,W,ne=null){ne===null&&(ne=A),g=lt.get(ne),g.init(W),b.push(g),ne.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),A!==ne&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const ie=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Te=X.material;if(Te)if(Array.isArray(Te))for(let Se=0;Se<Te.length;Se++){const Ve=Te[Se];_t(Ve,ne,X),ie.add(Ve)}else _t(Te,ne,X),ie.add(Te)}),b.pop(),g=null,ie},this.compileAsync=function(A,W,ne=null){const ie=this.compile(A,W,ne);return new Promise(X=>{function Te(){if(ie.forEach(function(Se){Ye.get(Se).currentProgram.isReady()&&ie.delete(Se)}),ie.size===0){X(A);return}setTimeout(Te,10)}ht.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let yn=null;function pn(A){yn&&yn(A)}function Qr(){Si.stop()}function Gi(){Si.start()}const Si=new lg;Si.setAnimationLoop(pn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){yn=A,se.setAnimationLoop(A),A===null?Si.stop():Si.start()},se.addEventListener("sessionstart",Qr),se.addEventListener("sessionend",Gi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(W),W=se.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,V),g=lt.get(A,b.length),g.init(W),b.push(g),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(we),Me=this.localClippingEnabled,fe=ye.init(this.clippingPlanes,Me),y=Ie.get(A,U.length),y.init(),U.push(y),se.enabled===!0&&se.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Mi(Te,W,-1/0,R.sortObjects)}Mi(A,W,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ue,ae),pt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pt&&Qe.addToRenderList(y,A),this.info.render.frame++,fe===!0&&ye.beginShadows();const ne=g.state.shadowsArray;Fe.render(ne,A,W),fe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,X=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Te=W.cameras;if(X.length>0)for(let Se=0,Ve=Te.length;Se<Ve;Se++){const Be=Te[Se];Mr(ie,X,A,Be)}pt&&Qe.render(A);for(let Se=0,Ve=Te.length;Se<Ve;Se++){const Be=Te[Se];Sr(y,A,Be,Be.viewport)}}else X.length>0&&Mr(ie,X,A,W),pt&&Qe.render(A),Sr(y,A,W);V!==null&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(R,A,W),Tt.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(g=b[b.length-1],fe===!0&&ye.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Mi(A,W,ne,ie){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){ie&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Se=de.update(A),Ve=A.material;Ve.visible&&y.push(A,Se,Ve,ne,Ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){const Se=de.update(A),Ve=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ze.copy(Se.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ve)){const Be=Se.groups;for(let et=0,nt=Be.length;et<nt;et++){const Ge=Be[et],gt=Ve[Ge.materialIndex];gt&&gt.visible&&y.push(A,Se,gt,ne,Ze.z,Ge)}}else Ve.visible&&y.push(A,Se,Ve,ne,Ze.z,null)}}const Te=A.children;for(let Se=0,Ve=Te.length;Se<Ve;Se++)Mi(Te[Se],W,ne,ie)}function Sr(A,W,ne,ie){const X=A.opaque,Te=A.transmissive,Se=A.transparent;g.setupLightsView(ne),fe===!0&&ye.setGlobalState(R.clippingPlanes,ne),ie&&qe.viewport(O.copy(ie)),X.length>0&&Wi(X,W,ne),Te.length>0&&Wi(Te,W,ne),Se.length>0&&Wi(Se,W,ne),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Mr(A,W,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new $r(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?zo:Vi,minFilter:qr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[ie.id],Se=ie.viewport||O;Te.setSize(Se.z,Se.w);const Ve=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(le),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Qe.render(ne);const Be=R.toneMapping;R.toneMapping=vr;const et=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),fe===!0&&ye.setGlobalState(R.clippingPlanes,ie),Wi(A,ne,ie),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),ht.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ge=0,gt=W.length;Ge<gt;Ge++){const Mt=W[Ge],mt=Mt.object,sn=Mt.geometry,st=Mt.material,Xe=Mt.group;if(st.side===ki&&mt.layers.test(ie.layers)){const Kn=st.side;st.side=bn,st.needsUpdate=!0,Yo(mt,ne,ie,sn,st,Xe),st.side=Kn,st.needsUpdate=!0,nt=!0}}nt===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}R.setRenderTarget(Ve),R.setClearColor(le,ce),et!==void 0&&(ie.viewport=et),R.toneMapping=Be}function Wi(A,W,ne){const ie=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Te=A.length;X<Te;X++){const Se=A[X],Ve=Se.object,Be=Se.geometry,et=ie===null?Se.material:ie,nt=Se.group;Ve.layers.test(ne.layers)&&Yo(Ve,W,ne,Be,et,nt)}}function Yo(A,W,ne,ie,X,Te){A.onBeforeRender(R,W,ne,ie,X,Te),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(R,W,ne,ie,A,Te),X.transparent===!0&&X.side===ki&&X.forceSinglePass===!1?(X.side=bn,X.needsUpdate=!0,R.renderBufferDirect(ne,W,ie,X,A,Te),X.side=xr,X.needsUpdate=!0,R.renderBufferDirect(ne,W,ie,X,A,Te),X.side=ki):R.renderBufferDirect(ne,W,ie,X,A,Te),A.onAfterRender(R,W,ne,ie,X,Te)}function Jr(A,W,ne){W.isScene!==!0&&(W=Ct);const ie=Ye.get(A),X=g.state.lights,Te=g.state.shadowsArray,Se=X.state.version,Ve=He.getParameters(A,X.state,Te,W,ne),Be=He.getProgramCacheKey(Ve);let et=ie.programs;ie.environment=A.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(A.isMeshStandardMaterial?J:T).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,ie.programs=et);let nt=et.get(Be);if(nt!==void 0){if(ie.currentProgram===nt&&ie.lightsStateVersion===Se)return fi(A,Ve),nt}else Ve.uniforms=He.getUniforms(A),A.onBeforeCompile(Ve,R),nt=He.acquireProgram(Ve,Be),et.set(Be,nt),ie.uniforms=Ve.uniforms;const Ge=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),fi(A,Ve),ie.needsLights=Bl(A),ie.lightsStateVersion=Se,ie.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=nt,ie.uniformsList=null,nt}function qo(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Pl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function fi(A,W){const ne=Ye.get(A);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function jo(A,W,ne,ie,X){W.isScene!==!0&&(W=Ct),L.resetTextureUnits();const Te=W.fog,Se=ie.isMeshStandardMaterial?W.environment:null,Ve=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:qs,Be=(ie.isMeshStandardMaterial?J:T).get(ie.envMap||Se),et=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ge=!!ne.morphAttributes.position,gt=!!ne.morphAttributes.normal,Mt=!!ne.morphAttributes.color;let mt=vr;ie.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(mt=R.toneMapping);const sn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,st=sn!==void 0?sn.length:0,Xe=Ye.get(ie),Kn=g.state.lights;if(fe===!0&&(Me===!0||A!==C)){const mn=A===C&&ie.id===P;ye.setState(ie,A,mn)}let yt=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Kn.state.version||Xe.outputColorSpace!==Ve||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Be||ie.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ye.numPlanes||Xe.numIntersection!==ye.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==nt||Xe.morphTargets!==Ge||Xe.morphNormals!==gt||Xe.morphColors!==Mt||Xe.toneMapping!==mt||Xe.morphTargetsCount!==st)&&(yt=!0):(yt=!0,Xe.__version=ie.version);let on=Xe.currentProgram;yt===!0&&(on=Jr(ie,W,X));let Zn=!1,Xt=!1,di=!1;const Pt=on.getUniforms(),Bn=Xe.uniforms;if(qe.useProgram(on.program)&&(Zn=!0,Xt=!0,di=!0),ie.id!==P&&(P=ie.id,Xt=!0),Zn||C!==A){qe.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),jv(ve),$v(ve),Pt.setValue(Y,"projectionMatrix",ve)):Pt.setValue(Y,"projectionMatrix",A.projectionMatrix),Pt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const zn=Pt.map.cameraPosition;zn!==void 0&&zn.setValue(Y,Ue.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Xt=!0,di=!0)}if(X.isSkinnedMesh){Pt.setOptional(Y,X,"bindMatrix"),Pt.setOptional(Y,X,"bindMatrixInverse");const mn=X.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(Y,"boneTexture",mn.boneTexture,L))}X.isBatchedMesh&&(Pt.setOptional(Y,X,"batchingTexture"),Pt.setValue(Y,"batchingTexture",X._matricesTexture,L),Pt.setOptional(Y,X,"batchingIdTexture"),Pt.setValue(Y,"batchingIdTexture",X._indirectTexture,L),Pt.setOptional(Y,X,"batchingColorTexture"),X._colorsTexture!==null&&Pt.setValue(Y,"batchingColorTexture",X._colorsTexture,L));const Ei=ne.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Je.update(X,ne,on),(Xt||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Pt.setValue(Y,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Bn.envMap.value=Be,Bn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),Xt&&(Pt.setValue(Y,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&$o(Bn,di),Te&&ie.fog===!0&&Ae.refreshFogUniforms(Bn,Te),Ae.refreshMaterialUniforms(Bn,ie,B,oe,g.state.transmissionRenderTarget[A.id]),Pl.upload(Y,qo(Xe),Bn,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Pl.upload(Y,qo(Xe),Bn,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(Y,"center",X.center),Pt.setValue(Y,"modelViewMatrix",X.modelViewMatrix),Pt.setValue(Y,"normalMatrix",X.normalMatrix),Pt.setValue(Y,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const mn=ie.uniformsGroups;for(let zn=0,Sn=mn.length;zn<Sn;zn++){const Ko=mn[zn];G.update(Ko,on),G.bind(Ko,on)}}return on}function $o(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,W,ne){Ye.get(A.texture).__webglTexture=W,Ye.get(A.depthTexture).__webglTexture=ne;const ie=Ye.get(A);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ne=Ye.get(A);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ne=0){V=A,k=W,N=ne;let ie=!0,X=null,Te=!1,Se=!1;if(A){const Be=Ye.get(A);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(Y.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Be.__hasExternalTextures)L.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&Ye.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Se=!0);const nt=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?X=nt[W][ne]:X=nt[W],Te=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?X=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[ne]:X=nt,O.copy(A.viewport),Q.copy(A.scissor),q=A.scissorTest}else O.copy(I).multiplyScalar(B).floor(),Q.copy(re).multiplyScalar(B).floor(),q=De;if(qe.bindFramebuffer(Y.FRAMEBUFFER,X)&&ie&&qe.drawBuffers(A,X),qe.viewport(O),qe.scissor(Q),qe.setScissorTest(q),Te){const Be=Ye.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ne)}else if(Se){const Be=Ye.get(A.texture),et=W||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Be.__webglTexture,ne||0,et)}P=-1},this.readRenderTargetPixels=function(A,W,ne,ie,X,Te,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ve=Ve[Se]),Ve){qe.bindFramebuffer(Y.FRAMEBUFFER,Ve);try{const Be=A.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ie&&ne>=0&&ne<=A.height-X&&Y.readPixels(W,ne,ie,X,it.convert(et),it.convert(nt),Te)}finally{const Be=V!==null?Ye.get(V).__webglFramebuffer:null;qe.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,W,ne,ie,X,Te,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ve=Ve[Se]),Ve){const Be=A.texture,et=Be.format,nt=Be.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-ie&&ne>=0&&ne<=A.height-X){qe.bindFramebuffer(Y.FRAMEBUFFER,Ve);const Ge=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ge),Y.bufferData(Y.PIXEL_PACK_BUFFER,Te.byteLength,Y.STREAM_READ),Y.readPixels(W,ne,ie,X,it.convert(et),it.convert(nt),0);const gt=V!==null?Ye.get(V).__webglFramebuffer:null;qe.bindFramebuffer(Y.FRAMEBUFFER,gt);const Mt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await qv(Y,Mt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ge),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Te),Y.deleteBuffer(Ge),Y.deleteSync(Mt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ne=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const ie=Math.pow(2,-ne),X=Math.floor(A.image.width*ie),Te=Math.floor(A.image.height*ie),Se=W!==null?W.x:0,Ve=W!==null?W.y:0;L.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ne,0,0,Se,Ve,X,Te),qe.unbindTexture()},this.copyTextureToTexture=function(A,W,ne=null,ie=null,X=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,A=arguments[1],W=arguments[2],X=arguments[3]||0,ne=null);let Te,Se,Ve,Be,et,nt,Ge,gt,Mt;const mt=A.isCompressedTexture?A.mipmaps[X]:A.image;ne!==null?(Te=ne.max.x-ne.min.x,Se=ne.max.y-ne.min.y,Ve=ne.isBox3?ne.max.z-ne.min.z:1,Be=ne.min.x,et=ne.min.y,nt=ne.isBox3?ne.min.z:0):(Te=mt.width,Se=mt.height,Ve=mt.depth||1,Be=0,et=0,nt=0),ie!==null?(Ge=ie.x,gt=ie.y,Mt=ie.z):(Ge=0,gt=0,Mt=0);const sn=it.convert(W.format),st=it.convert(W.type);let Xe;W.isData3DTexture?(L.setTexture3D(W,0),Xe=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Xe=Y.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Xe=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);const Kn=Y.getParameter(Y.UNPACK_ROW_LENGTH),yt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),on=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Zn=Y.getParameter(Y.UNPACK_SKIP_ROWS),Xt=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,mt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,mt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Be),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,et),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,nt);const di=A.isDataArrayTexture||A.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=Ye.get(A),Ei=Ye.get(W),mn=Ye.get(Bn.__renderTarget),zn=Ye.get(Ei.__renderTarget);qe.bindFramebuffer(Y.READ_FRAMEBUFFER,mn.__webglFramebuffer),qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Sn=0;Sn<Ve;Sn++)di&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,X,nt+Sn),A.isDepthTexture?(Pt&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ye.get(W).__webglTexture,X,Mt+Sn),Y.blitFramebuffer(Be,et,Te,Se,Ge,gt,Te,Se,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):Pt?Y.copyTexSubImage3D(Xe,X,Ge,gt,Mt+Sn,Be,et,Te,Se):Y.copyTexSubImage2D(Xe,X,Ge,gt,Mt+Sn,Be,et,Te,Se);qe.bindFramebuffer(Y.READ_FRAMEBUFFER,null),qe.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Xe,X,Ge,gt,Mt,Te,Se,Ve,sn,st,mt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Xe,X,Ge,gt,Mt,Te,Se,Ve,sn,mt.data):Y.texSubImage3D(Xe,X,Ge,gt,Mt,Te,Se,Ve,sn,st,mt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,X,Ge,gt,Te,Se,sn,st,mt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,X,Ge,gt,mt.width,mt.height,sn,mt.data):Y.texSubImage2D(Y.TEXTURE_2D,X,Ge,gt,Te,Se,sn,st,mt);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Kn),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,yt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,on),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Zn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Xt),X===0&&W.generateMipmaps&&Y.generateMipmap(Xe),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ne=null,ie=null,X=0){return A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,A=arguments[2],W=arguments[3],X=arguments[4]||0),Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ne,ie,X)},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){k=0,N=0,V=null,qe.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),n.unpackColorSpace=xt._getUnpackColorSpace()}}class Qf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=n,this.far=r}clone(){return new Qf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sE extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Os extends Zr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new $,Ul=new $,Cm=new Ft,Uo=new $f,xl=new Wo,Zc=new $,Rm=new $;class Il extends jt{constructor(e=new tn,n=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Dl.fromBufferAttribute(n,a-1),Ul.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Dl.distanceTo(Ul);e.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(a),xl.radius+=u,e.ray.intersectsSphere(xl)===!1)return;Cm.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(Cm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let w=S,y=E-1;w<y;w+=m){const g=_.getX(w),U=_.getX(w+1),b=yl(this,e,Uo,p,g,U);b&&n.push(b)}if(this.isLineLoop){const w=_.getX(E-1),y=_.getX(S),g=yl(this,e,Uo,p,w,y);g&&n.push(g)}}else{const S=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let w=S,y=E-1;w<y;w+=m){const g=yl(this,e,Uo,p,w,w+1);g&&n.push(g)}if(this.isLineLoop){const w=yl(this,e,Uo,p,E-1,S);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function yl(s,e,n,r,a,u){const f=s.geometry.attributes.position;if(Dl.fromBufferAttribute(f,a),Ul.fromBufferAttribute(f,u),n.distanceSqToSegment(Dl,Ul,Zc,Rm)>r)return;Zc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Zc);if(!(p<e.near||p>e.far))return{distance:p,point:Rm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Pm=new $,Lm=new $;class mg extends Il{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)Pm.fromBufferAttribute(n,a),Lm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Pm.distanceTo(Lm);e.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oE extends Il{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class gg extends Zr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bm=new Ft,Hf=new $f,Sl=new Wo,Ml=new $;class aE extends jt{constructor(e=new tn,n=new gg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=u,e.ray.intersectsSphere(Sl)===!1)return;bm.copy(a).invert(),Hf.copy(e.ray).applyMatrix4(bm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,x=r.attributes.position;if(m!==null){const v=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let E=v,w=S;E<w;E++){const y=m.getX(E);Ml.fromBufferAttribute(x,y),Dm(Ml,y,p,a,e,n,this)}}else{const v=Math.max(0,f.start),S=Math.min(x.count,f.start+f.count);for(let E=v,w=S;E<w;E++)Ml.fromBufferAttribute(x,E),Dm(Ml,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Dm(s,e,n,r,a,u,f){const d=Hf.distanceSqToPoint(s);if(d<n){const p=new $;Hf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class kl extends tn{constructor(e=1,n=1,r=1,a=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],x=[],v=[],S=[];let E=0;const w=[],y=r/2;let g=0;U(),f===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(_),this.setAttribute("position",new xn(x,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(S,2));function U(){const R=new $,H=new $;let k=0;const N=(n-e)/r;for(let V=0;V<=u;V++){const P=[],C=V/u,O=C*(n-e)+e;for(let Q=0;Q<=a;Q++){const q=Q/a,le=q*p+d,ce=Math.sin(le),K=Math.cos(le);H.x=O*ce,H.y=-C*r+y,H.z=O*K,x.push(H.x,H.y,H.z),R.set(ce,N,K).normalize(),v.push(R.x,R.y,R.z),S.push(q,1-C),P.push(E++)}w.push(P)}for(let V=0;V<a;V++)for(let P=0;P<u;P++){const C=w[P][V],O=w[P+1][V],Q=w[P+1][V+1],q=w[P][V+1];(e>0||P!==0)&&(_.push(C,O,q),k+=3),(n>0||P!==u-1)&&(_.push(O,Q,q),k+=3)}m.addGroup(g,k,0),g+=k}function b(R){const H=E,k=new Et,N=new $;let V=0;const P=R===!0?e:n,C=R===!0?1:-1;for(let Q=1;Q<=a;Q++)x.push(0,y*C,0),v.push(0,C,0),S.push(.5,.5),E++;const O=E;for(let Q=0;Q<=a;Q++){const le=Q/a*p+d,ce=Math.cos(le),K=Math.sin(le);N.x=P*K,N.y=y*C,N.z=P*ce,x.push(N.x,N.y,N.z),v.push(0,C,0),k.x=ce*.5+.5,k.y=K*.5*C+.5,S.push(k.x,k.y),E++}for(let Q=0;Q<a;Q++){const q=H+Q,le=O+Q;R===!0?_.push(le,le+1,q):_.push(le+1,le,q),V+=3}m.addGroup(g,V,R===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jf extends kl{constructor(e=1,n=1,r=32,a=1,u=!1,f=0,d=Math.PI*2){super(0,e,n,r,a,u,f,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:f,thetaLength:d}}static fromJSON(e){return new Jf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Zr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$m,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _g extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class lE extends _g{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Qc=new Ft,Um=new $,Im=new $;class uE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kf,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),n.position.copy(Um),Im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Im),n.updateMatrixWorld(),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cE extends uE{constructor(){super(new ug(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fE extends _g{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dE extends mg{constructor(e=10,n=10,r=4473924,a=8947848){r=new dt(r),a=new dt(a);const u=n/2,f=e/n,d=e/2,p=[],m=[];for(let v=0,S=0,E=-d;v<=n;v++,E+=f){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const w=v===u?r:a;w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3}const _=new tn;_.setAttribute("position",new xn(p,3)),_.setAttribute("color",new xn(m,3));const x=new Os({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);const hE={mode:"connecting",status:"Connecting to JetBot…",pose:[0,0,0],path:[],motors:[0,0],controller_mode:"manual",controller_available:!1,camera:{available:!1,width:0,height:0},host:"—",uptime_s:0,cpu_temp_c:null,memory_percent:null,map:{points:0,boundary:0,path:0,bounds:null,source:"none"}},pE={points:[],boundary:[],path:[],bounds:null,source:"none"};function No(s,e=2){return Number.isFinite(s)?Number(s).toFixed(e):"—"}function Hr(s,e=.03){const n=Number(s==null?void 0:s[0])||0,r=Number(s==null?void 0:s[1])||0,a=Number(s==null?void 0:s[2])||0;return new $(n,(s==null?void 0:s.length)>2?a:e,-r)}function El(s,e,n=[new $,new $]){s.geometry.dispose(),s.geometry=new tn().setFromPoints(e.length>1?e:n)}function mE({state:s,mapData:e}){const n=li.useRef(null),r=li.useRef(null);return li.useEffect(()=>{const a=n.current,u=new sE;u.background=new dt("#071017"),u.fog=new Qf("#071017",10,42);const f=new $n(48,1,.01,100),d=new rE({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.shadowMap.enabled=!0,a.appendChild(d.domElement),u.add(new lE("#b8e7ff","#0d1720",2.4));const p=new fE("#b1dfff",3);p.position.set(4,8,2),p.castShadow=!0,u.add(p);const m=new Ln(new Xo(60,60),new Io({color:"#0a1a22",roughness:.95}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,u.add(m);const _=new dE(40,40,"#1f5962","#102d37");_.position.y=.006,u.add(_);const x=new ko,v=new Ln(new Kr(.62,.24,.48),new Io({color:"#eeb34d",metalness:.2,roughness:.5}));v.position.y=.23,v.castShadow=!0,x.add(v);const S=new Ln(new Kr(.38,.08,.34),new Io({color:"#d8f2f3",emissive:"#183940",roughness:.35}));S.position.set(0,.39,-.02),S.castShadow=!0,x.add(S);const E=new Io({color:"#172532",roughness:.65});for(const K of[-.36,.36]){const oe=new Ln(new kl(.13,.13,.08,24),E);oe.rotation.z=Math.PI/2,oe.position.set(K,.14,0),oe.castShadow=!0,x.add(oe)}const w=new Ln(new Jf(.1,.28,3),new Io({color:"#35e0d0",emissive:"#0b4b4b"}));w.rotation.x=Math.PI/2,w.position.set(0,.29,-.34),x.add(w),u.add(x);const y=new mg(new tn,new Os({color:"#ef75ae",transparent:!0,opacity:.8})),g=new Il(new tn,new Os({color:"#35e0d0",transparent:!0,opacity:.9})),U=new Il(new tn,new Os({color:"#f1c95b",transparent:!0,opacity:.95})),b=new oE(new tn,new Os({color:"#d26bff",transparent:!0,opacity:.85})),R=new aE(new tn,new gg({color:"#8be9ff",size:.035,sizeAttenuation:!0,transparent:!0,opacity:.8}));u.add(y,g,U,b,R);const H={yaw:.65,pitch:.62,distance:5.2,dragging:!1,lastX:0,lastY:0,keys:{}},k=()=>{const K=a.clientWidth||1,oe=a.clientHeight||1;f.aspect=K/oe,f.updateProjectionMatrix(),d.setSize(K,oe,!1)},N=K=>{H.dragging=!0,H.lastX=K.clientX,H.lastY=K.clientY,a.setPointerCapture(K.pointerId)},V=K=>{H.dragging&&(H.yaw-=(K.clientX-H.lastX)*.008,H.pitch+=(K.clientY-H.lastY)*.006,H.pitch=Math.max(.2,Math.min(1.35,H.pitch)),H.lastX=K.clientX,H.lastY=K.clientY)},P=()=>{H.dragging=!1},C=K=>{K.preventDefault(),H.distance=Math.max(2,Math.min(15,H.distance+K.deltaY*.006))},O=K=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(K.key)&&(H.keys[K.key]=!0,K.preventDefault())},Q=K=>{delete H.keys[K.key]};a.addEventListener("pointerdown",N),a.addEventListener("pointermove",V),a.addEventListener("pointerup",P),a.addEventListener("pointercancel",P),a.addEventListener("wheel",C,{passive:!1}),window.addEventListener("keydown",O),window.addEventListener("keyup",Q);const q=new ResizeObserver(k);q.observe(a),k();let le;const ce=()=>{var ue;le=requestAnimationFrame(ce),H.keys.ArrowLeft&&(H.yaw+=.018),H.keys.ArrowRight&&(H.yaw-=.018),H.keys.ArrowUp&&(H.pitch=Math.min(1.35,H.pitch+.012)),H.keys.ArrowDown&&(H.pitch=Math.max(.2,H.pitch-.012));const K=((ue=r.current)==null?void 0:ue.followTarget)||new $,oe=Math.cos(H.pitch)*H.distance,B=new $(K.x+Math.sin(H.yaw)*oe,K.y+Math.sin(H.pitch)*H.distance,K.z+Math.cos(H.yaw)*oe);f.position.lerp(B,.12),f.lookAt(K),d.render(u,f)};return r.current={camera:f,renderer:d,robot:x,frustum:y,trail:g,mapPath:U,boundary:b,cloud:R,followTarget:new $},ce(),()=>{cancelAnimationFrame(le),q.disconnect(),d.dispose(),a.removeEventListener("pointerdown",N),a.removeEventListener("pointermove",V),a.removeEventListener("pointerup",P),a.removeEventListener("pointercancel",P),a.removeEventListener("wheel",C),window.removeEventListener("keydown",O),window.removeEventListener("keyup",Q),a.removeChild(d.domElement),r.current=null}},[]),li.useEffect(()=>{var C,O;const a=r.current;if(!a)return;const{robot:u,frustum:f,trail:d,mapPath:p,boundary:m,cloud:_}=a,[x,v,S]=s.pose||[0,0,0];u.position.set(x,0,-v),u.rotation.y=-S;const E=new $(x,0,-v);a.followTarget=E;const w=(s.path||[]).map(([Q,q])=>new $(Q,.028,-q));El(d,w,[E,E]);const y=(e.path||[]).map(Hr);El(p,y,[E,E]);const g=(e.boundary||[]).map(Q=>Hr(Q,.045));if(!g.length&&((C=e.bounds)!=null&&C.min)&&((O=e.bounds)!=null&&O.max)){const Q=e.bounds.min,q=e.bounds.max;g.push(Hr([Q[0],Q[1]]),Hr([q[0],Q[1]]),Hr([q[0],q[1]]),Hr([Q[0],q[1]]))}El(m,g,[E,E]);const U=e.points||[],b=new Float32Array(U.length*3);U.forEach((Q,q)=>Hr(Q).toArray(b,q*3)),_.geometry.dispose(),_.geometry=new tn,_.geometry.setAttribute("position",new xn(b,3));const R=new $(x,.34,-v),H=new $(Math.sin(S),0,-Math.cos(S)),k=new $(Math.cos(S),0,Math.sin(S)),N=R.clone().addScaledVector(H,1.3),V=N.clone().addScaledVector(k,.55),P=N.clone().addScaledVector(k,-.55);El(f,[R,V,R,P,V,P])},[s,e]),Ke.createElement("div",{className:"scene",ref:n,"aria-label":"Interactive Three.js third-person SLAM map"})}function gE({available:s}){const[e,n]=li.useState(!1);return Ke.createElement("div",{className:"camera-panel"},s&&!e?Ke.createElement("img",{src:"/api/camera.mjpg",alt:"Live JetBot camera",onError:()=>n(!0)}):Ke.createElement("div",{className:"camera-empty"},"CAMERA WAITING"),Ke.createElement("div",{className:"camera-label"},Ke.createElement("span",{className:"live-dot"})," LIVE CAMERA"))}function _E({mode:s,onMotor:e,onCmdVel:n,onStop:r}){const a=(f,d,p,m)=>s==="rl"?n(p,m):e(f,d);li.useEffect(()=>{const f={w:[.35,.35,.12,0],s:[-.3,-.3,-.1,0],a:[-.25,.25,0,.9],d:[.25,-.25,0,-.9]},d=m=>{const _=f[m.key.toLowerCase()];_&&m.target.tagName!=="INPUT"&&(m.preventDefault(),a(..._))},p=m=>{f[m.key.toLowerCase()]&&r()};return window.addEventListener("keydown",d),window.addEventListener("keyup",p),()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)}});const u=(f,d,p,m,_,x="")=>Ke.createElement("button",{className:`drive-button ${x}`,onPointerDown:()=>a(d,p,m,_),onPointerUp:r,onPointerLeave:r,"aria-label":f},f);return Ke.createElement("div",{className:"controls"},Ke.createElement("div",{className:"dpad"},Ke.createElement("div",null),u("▲",.35,.35,.12,0),Ke.createElement("div",null),u("◀",-.25,.25,0,.9),u("■",0,0,0,0,"stop-button"),u("▶",.25,-.25,0,-.9),Ke.createElement("div",null),u("▼",-.3,-.3,-.1,0),Ke.createElement("div",null)),Ke.createElement("span",{className:"control-hint"},"WASD drive · drag to orbit · wheel zoom"))}function vE({state:s,onChange:e}){return Ke.createElement("div",{className:"controller-panel"},Ke.createElement("span",null,s.controller_mode==="rl"?"RL WHEEL POLICY":"MANUAL MOTORS"),Ke.createElement("div",null,Ke.createElement("button",{className:s.controller_mode==="manual"?"selected":"",onClick:()=>e("manual")},"MANUAL"),Ke.createElement("button",{className:s.controller_mode==="rl"?"selected":"",disabled:!s.controller_available,onClick:()=>e("rl")},"RL")))}function xE(){var E,w,y,g;const[s,e]=li.useState(hE),[n,r]=li.useState(pE),[a,u]=li.useState("");li.useEffect(()=>{let U=!0;const b=async()=>{try{const[H,k]=await Promise.all([fetch("/api/state",{cache:"no-store"}),fetch("/api/map",{cache:"no-store"})]);if(!H.ok||!k.ok)throw new Error("dashboard request failed");const[N,V]=await Promise.all([H.json(),k.json()]);U&&(e(N),r(V),u(""))}catch{U&&u("LINK LOST")}};b();const R=setInterval(b,500);return()=>{U=!1,clearInterval(R)}},[]);const f=async(U,b)=>{try{await fetch("/api/motor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({left:U,right:b})})}catch{u("MOTOR COMMAND FAILED")}},d=async(U,b)=>{try{if(!(await fetch("/api/cmd_vel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({v:U,w:b})})).ok)throw new Error("RL COMMAND FAILED")}catch(R){u(R.message)}},p=()=>fetch("/api/stop",{method:"POST"}).catch(()=>u("STOP COMMAND FAILED")),m=async U=>{try{const b=await fetch("/api/controller",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode:U})});if(!b.ok){const R=await b.json();throw new Error(R.error||"CONTROLLER SWITCH FAILED")}}catch(b){u(b.message)}},[_,x,v]=s.pose||[0,0,0],S=s.map||{};return Ke.createElement("main",{className:"game-shell"},Ke.createElement("div",{className:"viewport"},Ke.createElement(mE,{state:s,mapData:n}),Ke.createElement("div",{className:"crosshair"}),Ke.createElement("header",{className:"hud hud-top"},Ke.createElement("div",null,Ke.createElement("span",{className:"brand"},"JETBOT // NAVIGATION LAB"),Ke.createElement("span",{className:"scene-title"},"THIRD-PERSON SLAM VIEW")),Ke.createElement("div",{className:`connection ${a?"offline":""}`},Ke.createElement("span",{className:"status-dot"}),a||(s.mode==="hardware"?"JETBOT ONLINE":"SIMULATION"))),Ke.createElement("div",{className:"hud hud-camera"},Ke.createElement(gE,{available:(E=s.camera)==null?void 0:E.available})),Ke.createElement("div",{className:"hud hud-left"},Ke.createElement("div",{className:"readout"},Ke.createElement("span",null,"POSE"),Ke.createElement("b",null,No(_)," / ",No(x)," m"),Ke.createElement("b",null,No(v*180/Math.PI,1),"°")),Ke.createElement("div",{className:"readout"},Ke.createElement("span",null,"SLAM MAP"),Ke.createElement("b",null,S.points||((w=n.points)==null?void 0:w.length)||0," POINTS"),Ke.createElement("b",null,S.boundary||((y=n.boundary)==null?void 0:y.length)||0," BOUNDARY NODES"),Ke.createElement("small",null,S.source||n.source||"NO MAP")),Ke.createElement("div",{className:"readout"},Ke.createElement("span",null,"SYSTEM"),Ke.createElement("b",null,s.cpu_temp_c==null?"—":`${No(s.cpu_temp_c,1)}°C`," · ",s.memory_percent==null?"—":`${No(s.memory_percent,0)}% RAM`))),Ke.createElement("div",{className:"hud hud-right"},Ke.createElement(vE,{state:s,onChange:m}),Ke.createElement(_E,{mode:s.controller_mode,onMotor:f,onCmdVel:d,onStop:p})),Ke.createElement("div",{className:"hud hud-bottom"},Ke.createElement("span",null,"MAP: ",n.source||"waiting for SLAM telemetry"),Ke.createElement("span",null,"POINT CLOUD ",((g=n.points)==null?void 0:g.length)||0),Ke.createElement("span",null,"POSE SOURCE: ",s.pose_source||"wheel dead-reckoning"))))}iv.createRoot(document.getElementById("root")).render(Ke.createElement(xE,null));
