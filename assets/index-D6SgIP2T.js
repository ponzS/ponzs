const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/verify-CDYvwX4N.js","assets/config-DaGrT2J7.js","assets/useradmin-BBMz56SM.js","assets/axios-upsvKRUO.js","assets/user-TZ7tRP2b.js","assets/useradmin-Dden6MXa.css","assets/testadminelonmusk-Dd9MeJdX.js","assets/testadminelonmusk-DTpze2yz.css","assets/test-B-jsTm2T.js","assets/test-CiS9QDob.css","assets/reset-password-JqKmMA1u.js","assets/reset-password-DjJ9g_BV.css","assets/register-W4dV_m7r.js","assets/register-BlVg4NAJ.css","assets/protected-Bg8n5XAm.js","assets/mystarrysky-C3hV95DK.js","assets/mystarrysky-Ck_KJ7Vk.css","assets/login-CTIPGxZ5.js","assets/login-CV5Uvzyw.css","assets/games-CBh6AhVV.js","assets/GameCard-DYGt7B87.js","assets/GameCard-CSCpiXRC.css","assets/games-DqTugVqr.css","assets/databasetest-z9axDQ83.js","assets/databasetest-BVm3UNcV.css","assets/apps-C_16Tj04.js","assets/apps-x-TZl-al.css","assets/aboutme-BUE88WC0.js","assets/aboutme-DCAsZaYg.css","assets/DiMEMO-DuG_d6Mq.js","assets/DiMEMO-CzCttEP4.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ht={},Gr=[],Hn=()=>{},Mg=()=>!1,bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),iu=t=>t.startsWith("onUpdate:"),Rt=Object.assign,ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tg=Object.prototype.hasOwnProperty,at=(t,e)=>Tg.call(t,e),Ne=Array.isArray,Wr=t=>ia(t)==="[object Map]",xo=t=>ia(t)==="[object Set]",ed=t=>ia(t)==="[object Date]",$e=t=>typeof t=="function",Tt=t=>typeof t=="string",Ln=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",zh=t=>(pt(t)||$e(t))&&$e(t.then)&&$e(t.catch),Bh=Object.prototype.toString,ia=t=>Bh.call(t),wg=t=>ia(t).slice(8,-1),Vh=t=>ia(t)==="[object Object]",su=t=>Tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cs=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ag=/-(\w)/g,yn=yo(t=>t.replace(Ag,(e,n)=>n?n.toUpperCase():"")),Rg=/\B([A-Z])/g,br=yo(t=>t.replace(Rg,"-$1").toLowerCase()),So=yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),qo=yo(t=>t?`on${So(t)}`:""),Pi=(t,e)=>!Object.is(t,e),qa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$h=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ro=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Cg=t=>{const e=Tt(t)?Number(t):NaN;return isNaN(e)?t:e};let td;const Eo=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mo(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Tt(i)?Dg(i):Mo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Tt(t)||pt(t))return t}const Pg=/;(?![^(]*\))/g,Lg=/:([^]+)/,Ig=/\/\*[^]*?\*\//g;function Dg(t){const e={};return t.replace(Ig,"").split(Pg).forEach(n=>{if(n){const i=n.split(Lg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function au(t){let e="";if(Tt(t))e=t;else if(Ne(t))for(let n=0;n<t.length;n++){const i=au(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ug="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ng=nu(Ug);function Hh(t){return!!t||t===""}function Fg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=To(t[i],e[i]);return n}function To(t,e){if(t===e)return!0;let n=ed(t),i=ed(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ln(t),i=Ln(e),n||i)return t===e;if(n=Ne(t),i=Ne(e),n||i)return n&&i?Fg(t,e):!1;if(n=pt(t),i=pt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!To(t[a],e[a]))return!1}}return String(t)===String(e)}function Og(t,e){return t.findIndex(n=>To(n,e))}const Gh=t=>!!(t&&t.__v_isRef===!0),kg=t=>Tt(t)?t:t==null?"":Ne(t)||pt(t)&&(t.toString===Bh||!$e(t.toString))?Gh(t)?kg(t.value):JSON.stringify(t,Wh,2):String(t),Wh=(t,e)=>Gh(e)?Wh(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Xo(i,s)+" =>"]=r,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xo(n))}:Ln(e)?Xo(e):pt(e)&&!Ne(e)&&!Vh(e)?String(e):e,Xo=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class jh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ou(t){return new jh(t)}function qh(){return Zt}function zg(t,e=!1){Zt&&Zt.cleanups.push(t)}let mt;const Jo=new WeakSet;class Xh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jo.has(this)&&(Jo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nd(this),Kh(this);const e=mt,n=Pn;mt=this,Pn=!0;try{return this.fn()}finally{Zh(this),mt=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,nd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$l(this)&&this.run()}get dirty(){return $l(this)}}let Jh=0,Ps,Ls;function Yh(t,e=!1){if(t.flags|=8,e){t.next=Ls,Ls=t;return}t.next=Ps,Ps=t}function lu(){Jh++}function cu(){if(--Jh>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ps;){let e=Ps;for(Ps=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Kh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),uu(i),Bg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function $l(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bs))return;t.globalVersion=Bs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!$l(t)){t.flags&=-3;return}const n=mt,i=Pn;mt=t,Pn=!0;try{Kh(t);const r=t.fn(t._value);(e.version===0||Pi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{mt=n,Pn=i,Zh(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)uu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const ep=[];function ki(){ep.push(Pn),Pn=!1}function zi(){const t=ep.pop();Pn=t===void 0?!0:t}function nd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=mt;mt=void 0;try{e()}finally{mt=n}}}let Bs=0;class Vg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!mt||!Pn||mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==mt)n=this.activeLink=new Vg(mt,this),mt.deps?(n.prevDep=mt.depsTail,mt.depsTail.nextDep=n,mt.depsTail=n):mt.deps=mt.depsTail=n,tp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=mt.depsTail,n.nextDep=void 0,mt.depsTail.nextDep=n,mt.depsTail=n,mt.deps===n&&(mt.deps=i)}return n}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cu()}}}function tp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)tp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const so=new WeakMap,fr=Symbol(""),Hl=Symbol(""),Vs=Symbol("");function Ht(t,e,n){if(Pn&&mt){let i=so.get(t);i||so.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new du),r.map=i,r.key=n),r.track()}}function si(t,e,n,i,r,s){const a=so.get(t);if(!a){Bs++;return}const o=l=>{l&&l.trigger()};if(lu(),e==="clear")a.forEach(o);else{const l=Ne(t),c=l&&su(n);if(l&&n==="length"){const u=Number(i);a.forEach((d,f)=>{(f==="length"||f===Vs||!Ln(f)&&f>=u)&&o(d)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(Vs)),e){case"add":l?c&&o(a.get("length")):(o(a.get(fr)),Wr(t)&&o(a.get(Hl)));break;case"delete":l||(o(a.get(fr)),Wr(t)&&o(a.get(Hl)));break;case"set":Wr(t)&&o(a.get(fr));break}}cu()}function $g(t,e){const n=so.get(t);return n&&n.get(e)}function Sr(t){const e=Ze(t);return e===t?e:(Ht(e,"iterate",Vs),bn(t)?e:e.map(Gt))}function wo(t){return Ht(t=Ze(t),"iterate",Vs),t}const Hg={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,Gt)},concat(...t){return Sr(this).concat(...t.map(e=>Ne(e)?Sr(e):e))},entries(){return Yo(this,"entries",t=>(t[1]=Gt(t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(Gt),arguments)},find(t,e){return Xn(this,"find",t,e,Gt,arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,Gt,arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ko(this,"includes",t)},indexOf(...t){return Ko(this,"indexOf",t)},join(t){return Sr(this).join(t)},lastIndexOf(...t){return Ko(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return _s(this,"pop")},push(...t){return _s(this,"push",t)},reduce(t,...e){return id(this,"reduce",t,e)},reduceRight(t,...e){return id(this,"reduceRight",t,e)},shift(){return _s(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return _s(this,"splice",t)},toReversed(){return Sr(this).toReversed()},toSorted(t){return Sr(this).toSorted(t)},toSpliced(...t){return Sr(this).toSpliced(...t)},unshift(...t){return _s(this,"unshift",t)},values(){return Yo(this,"values",Gt)}};function Yo(t,e,n){const i=wo(t),r=i[e]();return i!==t&&!bn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Gg=Array.prototype;function Xn(t,e,n,i,r,s){const a=wo(t),o=a!==t&&!bn(t),l=a[e];if(l!==Gg[e]){const d=l.apply(t,s);return o?Gt(d):d}let c=n;a!==t&&(o?c=function(d,f){return n.call(this,Gt(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function id(t,e,n,i){const r=wo(t);let s=n;return r!==t&&(bn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Gt(o),l,t)}),r[e](s,...i)}function Ko(t,e,n){const i=Ze(t);Ht(i,"iterate",Vs);const r=i[e](...n);return(r===-1||r===!1)&&pu(n[0])?(n[0]=Ze(n[0]),i[e](...n)):r}function _s(t,e,n=[]){ki(),lu();const i=Ze(t)[e].apply(t,n);return cu(),zi(),i}const Wg=nu("__proto__,__v_isRef,__isVue"),np=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function jg(t){Ln(t)||(t=String(t));const e=Ze(this);return Ht(e,"has",t),e.hasOwnProperty(t)}class ip{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?n_:op:s?ap:sp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ne(e);if(!r){let l;if(a&&(l=Hg[n]))return l;if(n==="hasOwnProperty")return jg}const o=Reflect.get(e,n,St(e)?e:i);return(Ln(n)?np.has(n):Wg(n))||(r||Ht(e,"get",n),s)?o:St(o)?a&&su(n)?o:o.value:pt(o)?r?cp(o):ra(o):o}}class rp extends ip{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=mr(s);if(!bn(i)&&!mr(i)&&(s=Ze(s),i=Ze(i)),!Ne(e)&&St(s)&&!St(i))return l?!1:(s.value=i,!0)}const a=Ne(e)&&su(n)?Number(n)<e.length:at(e,n),o=Reflect.set(e,n,i,St(e)?e:r);return e===Ze(r)&&(a?Pi(i,s)&&si(e,"set",n,i):si(e,"add",n,i)),o}deleteProperty(e,n){const i=at(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ln(n)||!np.has(n))&&Ht(e,"has",n),i}ownKeys(e){return Ht(e,"iterate",Ne(e)?"length":fr),Reflect.ownKeys(e)}}class qg extends ip{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xg=new rp,Jg=new qg,Yg=new rp(!0);const Gl=t=>t,ga=t=>Reflect.getPrototypeOf(t);function Kg(t,e,n){return function(...i){const r=this.__v_raw,s=Ze(r),a=Wr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Gl:e?Wl:Gt;return!e&&Ht(s,"iterate",l?Hl:fr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:o?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function _a(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zg(t,e){const n={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);t||(Pi(r,o)&&Ht(a,"get",r),Ht(a,"get",o));const{has:l}=ga(a),c=e?Gl:t?Wl:Gt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ht(Ze(r),"iterate",fr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return t||(Pi(r,o)&&Ht(a,"has",r),Ht(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?Gl:t?Wl:Gt;return!t&&Ht(l,"iterate",fr),o.forEach((u,d)=>r.call(s,c(u),c(d),a))}};return Rt(n,t?{add:_a("add"),set:_a("set"),delete:_a("delete"),clear:_a("clear")}:{add(r){!e&&!bn(r)&&!mr(r)&&(r=Ze(r));const s=Ze(this);return ga(s).has.call(s,r)||(s.add(r),si(s,"add",r,r)),this},set(r,s){!e&&!bn(s)&&!mr(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=ga(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Pi(s,u)&&si(a,"set",r,s):si(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=ga(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&si(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&si(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Kg(r,t,e)}),n}function fu(t,e){const n=Zg(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(at(n,r)&&r in i?n:i,r,s)}const Qg={get:fu(!1,!1)},e_={get:fu(!1,!0)},t_={get:fu(!0,!1)};const sp=new WeakMap,ap=new WeakMap,op=new WeakMap,n_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function r_(t){return t.__v_skip||!Object.isExtensible(t)?0:i_(wg(t))}function ra(t){return mr(t)?t:hu(t,!1,Xg,Qg,sp)}function lp(t){return hu(t,!1,Yg,e_,ap)}function cp(t){return hu(t,!0,Jg,t_,op)}function hu(t,e,n,i,r){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=r_(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function Li(t){return mr(t)?Li(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function bn(t){return!!(t&&t.__v_isShallow)}function pu(t){return t?!!t.__v_raw:!1}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function mu(t){return!at(t,"__v_skip")&&Object.isExtensible(t)&&$h(t,"__v_skip",!0),t}const Gt=t=>pt(t)?ra(t):t,Wl=t=>pt(t)?cp(t):t;function St(t){return t?t.__v_isRef===!0:!1}function Ni(t){return dp(t,!1)}function up(t){return dp(t,!0)}function dp(t,e){return St(t)?t:new s_(t,e)}class s_{constructor(e,n){this.dep=new du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ze(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||bn(e)||mr(e);e=i?e:Ze(e),Pi(e,n)&&(this._rawValue=e,this._value=i?e:Gt(e),this.dep.trigger())}}function jr(t){return St(t)?t.value:t}const a_={get:(t,e,n)=>e==="__v_raw"?t:jr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return St(r)&&!St(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function fp(t){return Li(t)?t:new Proxy(t,a_)}function o_(t){const e=Ne(t)?new Array(t.length):{};for(const n in t)e[n]=c_(t,n);return e}class l_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $g(Ze(this._object),this._key)}}function c_(t,e,n){const i=t[e];return St(i)?i:new l_(t,e,n)}class u_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return Yh(this,!0),!0}get value(){const e=this.dep.track();return Qh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function d_(t,e,n=!1){let i,r;return $e(t)?i=t:(i=t.get,r=t.set),new u_(i,r,n)}const va={},ao=new WeakMap;let nr;function f_(t,e=!1,n=nr){if(n){let i=ao.get(n);i||ao.set(n,i=[]),i.push(t)}}function h_(t,e,n=ht){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=_=>r?_:bn(_)||r===!1||r===0?ai(_,1):ai(_);let u,d,f,p,g=!1,x=!1;if(St(t)?(d=()=>t.value,g=bn(t)):Li(t)?(d=()=>c(t),g=!0):Ne(t)?(x=!0,g=t.some(_=>Li(_)||bn(_)),d=()=>t.map(_=>{if(St(_))return _.value;if(Li(_))return c(_);if($e(_))return l?l(_,2):_()})):$e(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ki();try{f()}finally{zi()}}const _=nr;nr=u;try{return l?l(t,3,[p]):t(p)}finally{nr=_}}:d=Hn,e&&r){const _=d,L=r===!0?1/0:r;d=()=>ai(_(),L)}const m=qh(),h=()=>{u.stop(),m&&m.active&&ru(m.effects,u)};if(s&&e){const _=e;e=(...L)=>{_(...L),h()}}let y=x?new Array(t.length).fill(va):va;const S=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(e){const L=u.run();if(r||g||(x?L.some((C,R)=>Pi(C,y[R])):Pi(L,y))){f&&f();const C=nr;nr=u;try{const R=[L,y===va?void 0:x&&y[0]===va?[]:y,p];l?l(e,3,R):e(...R),y=L}finally{nr=C}}}else u.run()};return o&&o(S),u=new Xh(d),u.scheduler=a?()=>a(S,!1):S,p=_=>f_(_,!1,u),f=u.onStop=()=>{const _=ao.get(u);if(_){if(l)l(_,4);else for(const L of _)L();ao.delete(u)}},e?i?S(!0):y=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ai(t,e=1/0,n){if(e<=0||!pt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,St(t))ai(t.value,e,n);else if(Ne(t))for(let i=0;i<t.length;i++)ai(t[i],e,n);else if(xo(t)||Wr(t))t.forEach(i=>{ai(i,e,n)});else if(Vh(t)){for(const i in t)ai(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ai(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(t,e,n,i){try{return i?t(...i):t()}catch(r){Ao(r,e,n)}}function In(t,e,n,i){if($e(t)){const r=sa(t,e,n,i);return r&&zh(r)&&r.catch(s=>{Ao(s,e,n)}),r}if(Ne(t)){const r=[];for(let s=0;s<t.length;s++)r.push(In(t[s],e,n,i));return r}}function Ao(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ht;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}o=o.parent}if(s){ki(),sa(s,null,10,[t,l,c]),zi();return}}p_(t,n,r,i,a)}function p_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Qt=[];let On=-1;const qr=[];let Ti=null,kr=0;const hp=Promise.resolve();let oo=null;function Ro(t){const e=oo||hp;return t?e.then(this?t.bind(this):t):e}function m_(t){let e=On+1,n=Qt.length;for(;e<n;){const i=e+n>>>1,r=Qt[i],s=$s(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function gu(t){if(!(t.flags&1)){const e=$s(t),n=Qt[Qt.length-1];!n||!(t.flags&2)&&e>=$s(n)?Qt.push(t):Qt.splice(m_(e),0,t),t.flags|=1,pp()}}function pp(){oo||(oo=hp.then(gp))}function g_(t){Ne(t)?qr.push(...t):Ti&&t.id===-1?Ti.splice(kr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),pp()}function rd(t,e,n=On+1){for(;n<Qt.length;n++){const i=Qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function mp(t){if(qr.length){const e=[...new Set(qr)].sort((n,i)=>$s(n)-$s(i));if(qr.length=0,Ti){Ti.push(...e);return}for(Ti=e,kr=0;kr<Ti.length;kr++){const n=Ti[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ti=null,kr=0}}const $s=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gp(t){try{for(On=0;On<Qt.length;On++){const e=Qt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Qt.length;On++){const e=Qt[On];e&&(e.flags&=-2)}On=-1,Qt.length=0,mp(),oo=null,(Qt.length||qr.length)&&gp()}}let Ct=null,_p=null;function lo(t){const e=Ct;return Ct=t,_p=t&&t.type.__scopeId||null,e}function _u(t,e=Ct,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&pd(-1);const s=lo(e);let a;try{a=t(...r)}finally{lo(s),i._d&&pd(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function sH(t,e){if(Ct===null)return t;const n=Do(Ct),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ht]=e[r];s&&($e(s)&&(s={mounted:s,updated:s}),s.deep&&ai(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function ji(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ki(),In(l,n,8,[t.el,o,t,e]),zi())}}const __=Symbol("_vte"),vp=t=>t.__isTeleport,wi=Symbol("_leaveCb"),ba=Symbol("_enterCb");function v_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fs(()=>{t.isMounted=!0}),Lo(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],bp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},xp=t=>{const e=t.subTree;return e.component?xp(e.component):e},b_={name:"BaseTransition",props:bp,setup(t,{slots:e}){const n=Qr(),i=v_();return()=>{const r=e.default&&Ep(e.default(),!0);if(!r||!r.length)return;const s=yp(r),a=Ze(t),{mode:o}=a;if(i.isLeaving)return Zo(s);const l=sd(s);if(!l)return Zo(s);let c=jl(l,a,i,n,d=>c=d);l.type!==en&&Hs(l,c);let u=n.subTree&&sd(n.subTree);if(u&&u.type!==en&&!sr(l,u)&&xp(n).type!==en){let d=jl(u,a,i,n);if(Hs(u,d),o==="out-in"&&l.type!==en)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Zo(s);o==="in-out"&&l.type!==en?d.delayLeave=(f,p,g)=>{const x=Sp(i,u);x[String(u.key)]=u,f[wi]=()=>{p(),f[wi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function yp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==en){e=n;break}}return e}const x_=b_;function Sp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function jl(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:h,onAfterAppear:y,onAppearCancelled:S}=e,_=String(t.key),L=Sp(n,t),C=(M,T)=>{M&&In(M,i,9,T)},R=(M,T)=>{const O=T[1];C(M,T),Ne(M)?M.every(z=>z.length<=1)&&O():M.length<=1&&O()},U={mode:a,persisted:o,beforeEnter(M){let T=l;if(!n.isMounted)if(s)T=m||l;else return;M[wi]&&M[wi](!0);const O=L[_];O&&sr(t,O)&&O.el[wi]&&O.el[wi](),C(T,[M])},enter(M){let T=c,O=u,z=d;if(!n.isMounted)if(s)T=h||c,O=y||u,z=S||d;else return;let G=!1;const ee=M[ba]=ae=>{G||(G=!0,ae?C(z,[M]):C(O,[M]),U.delayedLeave&&U.delayedLeave(),M[ba]=void 0)};T?R(T,[M,ee]):ee()},leave(M,T){const O=String(t.key);if(M[ba]&&M[ba](!0),n.isUnmounting)return T();C(f,[M]);let z=!1;const G=M[wi]=ee=>{z||(z=!0,T(),ee?C(x,[M]):C(g,[M]),M[wi]=void 0,L[O]===t&&delete L[O])};L[O]=t,p?R(p,[M,G]):G()},clone(M){const T=jl(M,e,n,i,r);return r&&r(T),T}};return U}function Zo(t){if(Co(t))return t=Fi(t),t.children=null,t}function sd(t){if(!Co(t))return vp(t.type)&&t.children?yp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&$e(n.default))return n.default()}}function Hs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Hs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ep(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Ft?(a.patchFlag&128&&r++,i=i.concat(Ep(a.children,e,o))):(e||a.type!==en)&&i.push(o!=null?Fi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Bi(t,e){return $e(t)?Rt({name:t.name},e,{setup:t}):t}function Mp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function co(t,e,n,i,r=!1){if(Ne(t)){t.forEach((g,x)=>co(g,e&&(Ne(e)?e[x]:e),n,i,r));return}if(Xr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&co(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Do(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===ht?o.refs={}:o.refs,d=o.setupState,f=Ze(d),p=d===ht?()=>!1:g=>at(f,g);if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,p(c)&&(d[c]=null)):St(c)&&(c.value=null)),$e(l))sa(l,o,12,[a,u]);else{const g=Tt(l),x=St(l);if(g||x){const m=()=>{if(t.f){const h=g?p(l)?d[l]:u[l]:l.value;r?Ne(h)&&ru(h,s):Ne(h)?h.includes(s)||h.push(s):g?(u[l]=[s],p(l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=a,p(l)&&(d[l]=a)):x&&(l.value=a,t.k&&(u[t.k]=a))};a?(m.id=-1,cn(m,n)):m()}}}Eo().requestIdleCallback;Eo().cancelIdleCallback;const Xr=t=>!!t.type.__asyncLoader,Co=t=>t.type.__isKeepAlive;function y_(t,e){Tp(t,"a",e)}function S_(t,e){Tp(t,"da",e)}function Tp(t,e,n=Ut){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Po(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Co(r.parent.vnode)&&E_(i,e,n,r),r=r.parent}}function E_(t,e,n,i){const r=Po(e,t,i,!0);vu(()=>{ru(i[e],r)},n)}function Po(t,e,n=Ut,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{ki();const o=oa(n),l=In(e,n,t,a);return o(),zi(),l});return i?r.unshift(s):r.push(s),s}}const pi=t=>(e,n=Ut)=>{(!js||t==="sp")&&Po(t,(...i)=>e(...i),n)},M_=pi("bm"),fs=pi("m"),T_=pi("bu"),w_=pi("u"),Lo=pi("bum"),vu=pi("um"),A_=pi("sp"),R_=pi("rtg"),C_=pi("rtc");function P_(t,e=Ut){Po("ec",t,e)}const wp="components",L_="directives";function I_(t,e){return Ap(wp,t,!0,e)||t}const D_=Symbol.for("v-ndc");function aH(t){return Ap(L_,t)}function Ap(t,e,n=!0,i=!1){const r=Ct||Ut;if(r){const s=r.type;if(t===wp){const o=Sv(s,!1);if(o&&(o===e||o===yn(e)||o===So(yn(e))))return s}const a=ad(r[t]||s[t],e)||ad(r.appContext[t],e);return!a&&i?s:a}}function ad(t,e){return t&&(t[e]||t[yn(e)]||t[So(yn(e))])}function U_(t,e,n,i){let r;const s=n,a=Ne(t);if(a||Tt(t)){const o=a&&Li(t);let l=!1;o&&(l=!bn(t),t=wo(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Gt(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(pt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function N_(t,e,n={},i,r){if(Ct.ce||Ct.parent&&Xr(Ct.parent)&&Ct.parent.ce)return e!=="default"&&(n.name=e),Gn(),Kl(Ft,null,[Mt("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),Gn();const a=s&&Rp(s(n)),o=n.key||a&&a.key,l=Kl(Ft,{key:(o&&!Ln(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||[],a&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Rp(t){return t.some(e=>Ws(e)?!(e.type===en||e.type===Ft&&!Rp(e.children)):!0)?t:null}const ql=t=>t?Jp(t)?Do(t):ql(t.parent):null,Is=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ql(t.parent),$root:t=>ql(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>bu(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=Ro.bind(t.proxy)),$watch:t=>iv.bind(t)}),Qo=(t,e)=>t!==ht&&!t.__isScriptSetup&&at(t,e),F_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Qo(i,e))return a[e]=1,i[e];if(r!==ht&&at(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&at(c,e))return a[e]=3,s[e];if(n!==ht&&at(n,e))return a[e]=4,n[e];Xl&&(a[e]=0)}}const u=Is[e];let d,f;if(u)return e==="$attrs"&&Ht(t.attrs,"get",""),u(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==ht&&at(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,at(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Qo(r,e)?(r[e]=n,!0):i!==ht&&at(i,e)?(i[e]=n,!0):at(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==ht&&at(t,a)||Qo(e,a)||(o=s[0])&&at(o,a)||at(i,a)||at(Is,a)||at(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:at(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function od(t){return Ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xl=!0;function O_(t){const e=bu(t),n=t.proxy,i=t.ctx;Xl=!1,e.beforeCreate&&ld(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:S,unmounted:_,render:L,renderTracked:C,renderTriggered:R,errorCaptured:U,serverPrefetch:M,expose:T,inheritAttrs:O,components:z,directives:G,filters:ee}=e;if(c&&k_(c,i,null),a)for(const te in a){const X=a[te];$e(X)&&(i[te]=X.bind(n))}if(r){const te=r.call(n,n);pt(te)&&(t.data=ra(te))}if(Xl=!0,s)for(const te in s){const X=s[te],he=$e(X)?X.bind(n,n):$e(X.get)?X.get.bind(n,n):Hn,ge=!$e(X)&&$e(X.set)?X.set.bind(n):Hn,Me=Ot({get:he,set:ge});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ie=>Me.value=Ie})}if(o)for(const te in o)Cp(o[te],i,n,te);if(l){const te=$e(l)?l.call(n):l;Reflect.ownKeys(te).forEach(X=>{Ds(X,te[X])})}u&&ld(u,t,"c");function Y(te,X){Ne(X)?X.forEach(he=>te(he.bind(n))):X&&te(X.bind(n))}if(Y(M_,d),Y(fs,f),Y(T_,p),Y(w_,g),Y(y_,x),Y(S_,m),Y(P_,U),Y(C_,C),Y(R_,R),Y(Lo,y),Y(vu,_),Y(A_,M),Ne(T))if(T.length){const te=t.exposed||(t.exposed={});T.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:he=>n[X]=he})})}else t.exposed||(t.exposed={});L&&t.render===Hn&&(t.render=L),O!=null&&(t.inheritAttrs=O),z&&(t.components=z),G&&(t.directives=G),M&&Mp(t)}function k_(t,e,n=Hn){Ne(t)&&(t=Jl(t));for(const i in t){const r=t[i];let s;pt(r)?"default"in r?s=xn(r.from||i,r.default,!0):s=xn(r.from||i):s=xn(r),St(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function ld(t,e,n){In(Ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cp(t,e,n,i){let r=i.includes(".")?Hp(n,i):()=>n[i];if(Tt(t)){const s=e[t];$e(s)&&Ii(r,s)}else if($e(t))Ii(r,t.bind(n));else if(pt(t))if(Ne(t))t.forEach(s=>Cp(s,e,n,i));else{const s=$e(t.handler)?t.handler.bind(n):e[t.handler];$e(s)&&Ii(r,s,t)}}function bu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>uo(l,c,a,!0)),uo(l,e,a)),pt(e)&&s.set(e,l),l}function uo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&uo(t,s,n,!0),r&&r.forEach(a=>uo(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=z_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const z_={data:cd,props:ud,emits:ud,methods:As,computed:As,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:As,directives:As,watch:V_,provide:cd,inject:B_};function cd(t,e){return e?t?function(){return Rt($e(t)?t.call(this,this):t,$e(e)?e.call(this,this):e)}:e:t}function B_(t,e){return As(Jl(t),Jl(e))}function Jl(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?Rt(Object.create(null),t,e):e}function ud(t,e){return t?Ne(t)&&Ne(e)?[...new Set([...t,...e])]:Rt(Object.create(null),od(t),od(e??{})):e}function V_(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function Pp(){return{app:null,config:{isNativeTag:Mg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $_=0;function H_(t,e){return function(i,r=null){$e(i)||(i=Rt({},i)),r!=null&&!pt(r)&&(r=null);const s=Pp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:$_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Mv,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&$e(u.install)?(a.add(u),u.install(c,...d)):$e(u)&&(a.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Mt(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(p,u):t(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Do(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(In(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=hr;hr=c;try{return u()}finally{hr=d}}};return c}}let hr=null;function Ds(t,e){if(Ut){let n=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===n&&(n=Ut.provides=Object.create(i)),n[t]=e}}function xn(t,e,n=!1){const i=Ut||Ct;if(i||hr){const r=hr?hr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$e(e)?e.call(i&&i.proxy):e}}function G_(){return!!(Ut||Ct||hr)}const Lp={},Ip=()=>Object.create(Lp),Dp=t=>Object.getPrototypeOf(t)===Lp;function W_(t,e,n,i=!1){const r={},s=Ip();t.propsDefaults=Object.create(null),Up(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:lp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function j_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=Ze(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Io(t.emitsOptions,f))continue;const p=e[f];if(l)if(at(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=yn(f);r[g]=Yl(l,o,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Up(t,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!at(e,d)&&((u=br(d))===d||!at(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Yl(l,o,d,void 0,t,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!at(e,d))&&(delete s[d],c=!0)}c&&si(t.attrs,"set","")}function Up(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Cs(l))continue;const c=e[l];let u;r&&at(r,u=yn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Io(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(n),c=o||ht;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Yl(r,l,d,c[d],t,!at(c,d))}}return a}function Yl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=at(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&$e(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=oa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===br(n))&&(i=!0))}return i}const q_=new WeakMap;function Np(t,e,n=!1){const i=n?q_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!$e(t)){const u=d=>{l=!0;const[f,p]=Np(d,e,!0);Rt(a,f),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return pt(t)&&i.set(t,Gr),Gr;if(Ne(s))for(let u=0;u<s.length;u++){const d=yn(s[u]);dd(d)&&(a[d]=ht)}else if(s)for(const u in s){const d=yn(u);if(dd(d)){const f=s[u],p=a[d]=Ne(f)||$e(f)?{type:f}:Rt({},f),g=p.type;let x=!1,m=!0;if(Ne(g))for(let h=0;h<g.length;++h){const y=g[h],S=$e(y)&&y.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(m=!1)}else x=$e(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||at(p,"default"))&&o.push(d)}}const c=[a,o];return pt(t)&&i.set(t,c),c}function dd(t){return t[0]!=="$"&&!Cs(t)}const Fp=t=>t[0]==="_"||t==="$stable",xu=t=>Ne(t)?t.map(kn):[kn(t)],X_=(t,e,n)=>{if(e._n)return e;const i=_u((...r)=>xu(e(...r)),n);return i._c=!1,i},Op=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Fp(r))continue;const s=t[r];if($e(s))e[r]=X_(r,s,i);else if(s!=null){const a=xu(s);e[r]=()=>a}}},kp=(t,e)=>{const n=xu(e);t.slots.default=()=>n},zp=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},J_=(t,e,n)=>{const i=t.slots=Ip();if(t.vnode.shapeFlag&32){const r=e._;r?(zp(i,e,n),n&&$h(i,"_",r,!0)):Op(e,i)}else e&&kp(t,e)},Y_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=ht;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:zp(r,e,n):(s=!e.$stable,Op(e,r)),a=e}else e&&(kp(t,e),a={default:1});if(s)for(const o in r)!Fp(o)&&a[o]==null&&delete r[o]},cn=uv;function K_(t){return Z_(t)}function Z_(t,e){const n=Eo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Hn,insertStaticContent:g}=t,x=(D,b,q,Q=null,J=null,w=null,I=void 0,k=null,E=!!b.dynamicChildren)=>{if(D===b)return;D&&!sr(D,b)&&(Q=B(D),Ie(D,J,w,!0),D=null),b.patchFlag===-2&&(E=!1,b.dynamicChildren=null);const{type:v,ref:F,shapeFlag:P}=b;switch(v){case aa:m(D,b,q,Q);break;case en:h(D,b,q,Q);break;case Xa:D==null&&y(b,q,Q,I);break;case Ft:z(D,b,q,Q,J,w,I,k,E);break;default:P&1?L(D,b,q,Q,J,w,I,k,E):P&6?G(D,b,q,Q,J,w,I,k,E):(P&64||P&128)&&v.process(D,b,q,Q,J,w,I,k,E,de)}F!=null&&J&&co(F,D&&D.ref,w,b||D,!b)},m=(D,b,q,Q)=>{if(D==null)i(b.el=o(b.children),q,Q);else{const J=b.el=D.el;b.children!==D.children&&c(J,b.children)}},h=(D,b,q,Q)=>{D==null?i(b.el=l(b.children||""),q,Q):b.el=D.el},y=(D,b,q,Q)=>{[D.el,D.anchor]=g(D.children,b,q,Q,D.el,D.anchor)},S=({el:D,anchor:b},q,Q)=>{let J;for(;D&&D!==b;)J=f(D),i(D,q,Q),D=J;i(b,q,Q)},_=({el:D,anchor:b})=>{let q;for(;D&&D!==b;)q=f(D),r(D),D=q;r(b)},L=(D,b,q,Q,J,w,I,k,E)=>{b.type==="svg"?I="svg":b.type==="math"&&(I="mathml"),D==null?C(b,q,Q,J,w,I,k,E):M(D,b,J,w,I,k,E)},C=(D,b,q,Q,J,w,I,k)=>{let E,v;const{props:F,shapeFlag:P,transition:N,dirs:V}=D;if(E=D.el=a(D.type,w,F&&F.is,F),P&8?u(E,D.children):P&16&&U(D.children,E,null,Q,J,el(D,w),I,k),V&&ji(D,null,Q,"created"),R(E,D,D.scopeId,I,Q),F){for(const le in F)le!=="value"&&!Cs(le)&&s(E,le,null,F[le],w,Q);"value"in F&&s(E,"value",null,F.value,w),(v=F.onVnodeBeforeMount)&&Nn(v,Q,D)}V&&ji(D,null,Q,"beforeMount");const oe=Q_(J,N);oe&&N.beforeEnter(E),i(E,b,q),((v=F&&F.onVnodeMounted)||oe||V)&&cn(()=>{v&&Nn(v,Q,D),oe&&N.enter(E),V&&ji(D,null,Q,"mounted")},J)},R=(D,b,q,Q,J)=>{if(q&&p(D,q),Q)for(let w=0;w<Q.length;w++)p(D,Q[w]);if(J){let w=J.subTree;if(b===w||Wp(w.type)&&(w.ssContent===b||w.ssFallback===b)){const I=J.vnode;R(D,I,I.scopeId,I.slotScopeIds,J.parent)}}},U=(D,b,q,Q,J,w,I,k,E=0)=>{for(let v=E;v<D.length;v++){const F=D[v]=k?Ai(D[v]):kn(D[v]);x(null,F,b,q,Q,J,w,I,k)}},M=(D,b,q,Q,J,w,I)=>{const k=b.el=D.el;let{patchFlag:E,dynamicChildren:v,dirs:F}=b;E|=D.patchFlag&16;const P=D.props||ht,N=b.props||ht;let V;if(q&&qi(q,!1),(V=N.onVnodeBeforeUpdate)&&Nn(V,q,b,D),F&&ji(b,D,q,"beforeUpdate"),q&&qi(q,!0),(P.innerHTML&&N.innerHTML==null||P.textContent&&N.textContent==null)&&u(k,""),v?T(D.dynamicChildren,v,k,q,Q,el(b,J),w):I||X(D,b,k,null,q,Q,el(b,J),w,!1),E>0){if(E&16)O(k,P,N,q,J);else if(E&2&&P.class!==N.class&&s(k,"class",null,N.class,J),E&4&&s(k,"style",P.style,N.style,J),E&8){const oe=b.dynamicProps;for(let le=0;le<oe.length;le++){const fe=oe[le],De=P[fe],ue=N[fe];(ue!==De||fe==="value")&&s(k,fe,De,ue,J,q)}}E&1&&D.children!==b.children&&u(k,b.children)}else!I&&v==null&&O(k,P,N,q,J);((V=N.onVnodeUpdated)||F)&&cn(()=>{V&&Nn(V,q,b,D),F&&ji(b,D,q,"updated")},Q)},T=(D,b,q,Q,J,w,I)=>{for(let k=0;k<b.length;k++){const E=D[k],v=b[k],F=E.el&&(E.type===Ft||!sr(E,v)||E.shapeFlag&70)?d(E.el):q;x(E,v,F,null,Q,J,w,I,!0)}},O=(D,b,q,Q,J)=>{if(b!==q){if(b!==ht)for(const w in b)!Cs(w)&&!(w in q)&&s(D,w,b[w],null,J,Q);for(const w in q){if(Cs(w))continue;const I=q[w],k=b[w];I!==k&&w!=="value"&&s(D,w,k,I,J,Q)}"value"in q&&s(D,"value",b.value,q.value,J)}},z=(D,b,q,Q,J,w,I,k,E)=>{const v=b.el=D?D.el:o(""),F=b.anchor=D?D.anchor:o("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:V}=b;V&&(k=k?k.concat(V):V),D==null?(i(v,q,Q),i(F,q,Q),U(b.children||[],q,F,J,w,I,k,E)):P>0&&P&64&&N&&D.dynamicChildren?(T(D.dynamicChildren,N,q,J,w,I,k),(b.key!=null||J&&b===J.subTree)&&Bp(D,b,!0)):X(D,b,q,F,J,w,I,k,E)},G=(D,b,q,Q,J,w,I,k,E)=>{b.slotScopeIds=k,D==null?b.shapeFlag&512?J.ctx.activate(b,q,Q,I,E):ee(b,q,Q,J,w,I,E):ae(D,b,E)},ee=(D,b,q,Q,J,w,I)=>{const k=D.component=_v(D,Q,J);if(Co(D)&&(k.ctx.renderer=de),vv(k,!1,I),k.asyncDep){if(J&&J.registerDep(k,Y,I),!D.el){const E=k.subTree=Mt(en);h(null,E,b,q)}}else Y(k,D,b,q,J,w,I)},ae=(D,b,q)=>{const Q=b.component=D.component;if(lv(D,b,q))if(Q.asyncDep&&!Q.asyncResolved){te(Q,b,q);return}else Q.next=b,Q.update();else b.el=D.el,Q.vnode=b},Y=(D,b,q,Q,J,w,I)=>{const k=()=>{if(D.isMounted){let{next:P,bu:N,u:V,parent:oe,vnode:le}=D;{const Re=Vp(D);if(Re){P&&(P.el=le.el,te(D,P,I)),Re.asyncDep.then(()=>{D.isUnmounted||k()});return}}let fe=P,De;qi(D,!1),P?(P.el=le.el,te(D,P,I)):P=le,N&&qa(N),(De=P.props&&P.props.onVnodeBeforeUpdate)&&Nn(De,oe,P,le),qi(D,!0);const ue=tl(D),ve=D.subTree;D.subTree=ue,x(ve,ue,d(ve.el),B(ve),D,J,w),P.el=ue.el,fe===null&&cv(D,ue.el),V&&cn(V,J),(De=P.props&&P.props.onVnodeUpdated)&&cn(()=>Nn(De,oe,P,le),J)}else{let P;const{el:N,props:V}=b,{bm:oe,m:le,parent:fe,root:De,type:ue}=D,ve=Xr(b);if(qi(D,!1),oe&&qa(oe),!ve&&(P=V&&V.onVnodeBeforeMount)&&Nn(P,fe,b),qi(D,!0),N&&Pe){const Re=()=>{D.subTree=tl(D),Pe(N,D.subTree,D,J,null)};ve&&ue.__asyncHydrate?ue.__asyncHydrate(N,D,Re):Re()}else{De.ce&&De.ce._injectChildStyle(ue);const Re=D.subTree=tl(D);x(null,Re,q,Q,D,J,w),b.el=Re.el}if(le&&cn(le,J),!ve&&(P=V&&V.onVnodeMounted)){const Re=b;cn(()=>Nn(P,fe,Re),J)}(b.shapeFlag&256||fe&&Xr(fe.vnode)&&fe.vnode.shapeFlag&256)&&D.a&&cn(D.a,J),D.isMounted=!0,b=q=Q=null}};D.scope.on();const E=D.effect=new Xh(k);D.scope.off();const v=D.update=E.run.bind(E),F=D.job=E.runIfDirty.bind(E);F.i=D,F.id=D.uid,E.scheduler=()=>gu(F),qi(D,!0),v()},te=(D,b,q)=>{b.component=D;const Q=D.vnode.props;D.vnode=b,D.next=null,j_(D,b.props,Q,q),Y_(D,b.children,q),ki(),rd(D),zi()},X=(D,b,q,Q,J,w,I,k,E=!1)=>{const v=D&&D.children,F=D?D.shapeFlag:0,P=b.children,{patchFlag:N,shapeFlag:V}=b;if(N>0){if(N&128){ge(v,P,q,Q,J,w,I,k,E);return}else if(N&256){he(v,P,q,Q,J,w,I,k,E);return}}V&8?(F&16&&_e(v,J,w),P!==v&&u(q,P)):F&16?V&16?ge(v,P,q,Q,J,w,I,k,E):_e(v,J,w,!0):(F&8&&u(q,""),V&16&&U(P,q,Q,J,w,I,k,E))},he=(D,b,q,Q,J,w,I,k,E)=>{D=D||Gr,b=b||Gr;const v=D.length,F=b.length,P=Math.min(v,F);let N;for(N=0;N<P;N++){const V=b[N]=E?Ai(b[N]):kn(b[N]);x(D[N],V,q,null,J,w,I,k,E)}v>F?_e(D,J,w,!0,!1,P):U(b,q,Q,J,w,I,k,E,P)},ge=(D,b,q,Q,J,w,I,k,E)=>{let v=0;const F=b.length;let P=D.length-1,N=F-1;for(;v<=P&&v<=N;){const V=D[v],oe=b[v]=E?Ai(b[v]):kn(b[v]);if(sr(V,oe))x(V,oe,q,null,J,w,I,k,E);else break;v++}for(;v<=P&&v<=N;){const V=D[P],oe=b[N]=E?Ai(b[N]):kn(b[N]);if(sr(V,oe))x(V,oe,q,null,J,w,I,k,E);else break;P--,N--}if(v>P){if(v<=N){const V=N+1,oe=V<F?b[V].el:Q;for(;v<=N;)x(null,b[v]=E?Ai(b[v]):kn(b[v]),q,oe,J,w,I,k,E),v++}}else if(v>N)for(;v<=P;)Ie(D[v],J,w,!0),v++;else{const V=v,oe=v,le=new Map;for(v=oe;v<=N;v++){const ze=b[v]=E?Ai(b[v]):kn(b[v]);ze.key!=null&&le.set(ze.key,v)}let fe,De=0;const ue=N-oe+1;let ve=!1,Re=0;const Fe=new Array(ue);for(v=0;v<ue;v++)Fe[v]=0;for(v=V;v<=P;v++){const ze=D[v];if(De>=ue){Ie(ze,J,w,!0);continue}let Oe;if(ze.key!=null)Oe=le.get(ze.key);else for(fe=oe;fe<=N;fe++)if(Fe[fe-oe]===0&&sr(ze,b[fe])){Oe=fe;break}Oe===void 0?Ie(ze,J,w,!0):(Fe[Oe-oe]=v+1,Oe>=Re?Re=Oe:ve=!0,x(ze,b[Oe],q,null,J,w,I,k,E),De++)}const we=ve?ev(Fe):Gr;for(fe=we.length-1,v=ue-1;v>=0;v--){const ze=oe+v,Oe=b[ze],ot=ze+1<F?b[ze+1].el:Q;Fe[v]===0?x(null,Oe,q,ot,J,w,I,k,E):ve&&(fe<0||v!==we[fe]?Me(Oe,q,ot,2):fe--)}}},Me=(D,b,q,Q,J=null)=>{const{el:w,type:I,transition:k,children:E,shapeFlag:v}=D;if(v&6){Me(D.component.subTree,b,q,Q);return}if(v&128){D.suspense.move(b,q,Q);return}if(v&64){I.move(D,b,q,de);return}if(I===Ft){i(w,b,q);for(let P=0;P<E.length;P++)Me(E[P],b,q,Q);i(D.anchor,b,q);return}if(I===Xa){S(D,b,q);return}if(Q!==2&&v&1&&k)if(Q===0)k.beforeEnter(w),i(w,b,q),cn(()=>k.enter(w),J);else{const{leave:P,delayLeave:N,afterLeave:V}=k,oe=()=>i(w,b,q),le=()=>{P(w,()=>{oe(),V&&V()})};N?N(w,oe,le):le()}else i(w,b,q)},Ie=(D,b,q,Q=!1,J=!1)=>{const{type:w,props:I,ref:k,children:E,dynamicChildren:v,shapeFlag:F,patchFlag:P,dirs:N,cacheIndex:V}=D;if(P===-2&&(J=!1),k!=null&&co(k,null,q,D,!0),V!=null&&(b.renderCache[V]=void 0),F&256){b.ctx.deactivate(D);return}const oe=F&1&&N,le=!Xr(D);let fe;if(le&&(fe=I&&I.onVnodeBeforeUnmount)&&Nn(fe,b,D),F&6)me(D.component,q,Q);else{if(F&128){D.suspense.unmount(q,Q);return}oe&&ji(D,null,b,"beforeUnmount"),F&64?D.type.remove(D,b,q,de,Q):v&&!v.hasOnce&&(w!==Ft||P>0&&P&64)?_e(v,b,q,!1,!0):(w===Ft&&P&384||!J&&F&16)&&_e(E,b,q),Q&&qe(D)}(le&&(fe=I&&I.onVnodeUnmounted)||oe)&&cn(()=>{fe&&Nn(fe,b,D),oe&&ji(D,null,b,"unmounted")},q)},qe=D=>{const{type:b,el:q,anchor:Q,transition:J}=D;if(b===Ft){ie(q,Q);return}if(b===Xa){_(D);return}const w=()=>{r(q),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(D.shapeFlag&1&&J&&!J.persisted){const{leave:I,delayLeave:k}=J,E=()=>I(q,w);k?k(D.el,w,E):E()}else w()},ie=(D,b)=>{let q;for(;D!==b;)q=f(D),r(D),D=q;r(b)},me=(D,b,q)=>{const{bum:Q,scope:J,job:w,subTree:I,um:k,m:E,a:v}=D;fd(E),fd(v),Q&&qa(Q),J.stop(),w&&(w.flags|=8,Ie(I,D,b,q)),k&&cn(k,b),cn(()=>{D.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},_e=(D,b,q,Q=!1,J=!1,w=0)=>{for(let I=w;I<D.length;I++)Ie(D[I],b,q,Q,J)},B=D=>{if(D.shapeFlag&6)return B(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const b=f(D.anchor||D.el),q=b&&b[__];return q?f(q):b};let se=!1;const re=(D,b,q)=>{D==null?b._vnode&&Ie(b._vnode,null,null,!0):x(b._vnode||null,D,b,null,null,null,q),b._vnode=D,se||(se=!0,rd(),mp(),se=!1)},de={p:x,um:Ie,m:Me,r:qe,mt:ee,mc:U,pc:X,pbc:T,n:B,o:t};let Le,Pe;return{render:re,hydrate:Le,createApp:H_(re,Le)}}function el({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Q_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bp(t,e,n=!1){const i=t.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ai(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Bp(a,o)),o.type===aa&&(o.el=a.el)}}function ev(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vp(e)}function fd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const tv=Symbol.for("v-scx"),nv=()=>xn(tv);function Ii(t,e,n){return $p(t,e,n)}function $p(t,e,n=ht){const{immediate:i,deep:r,flush:s,once:a}=n,o=Rt({},n),l=e&&i||!e&&s!=="post";let c;if(js){if(s==="sync"){const p=nv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Hn,p.resume=Hn,p.pause=Hn,p}}const u=Ut;o.call=(p,g,x)=>In(p,u,g,x);let d=!1;s==="post"?o.scheduler=p=>{cn(p,u&&u.suspense)}:s!=="sync"&&(d=!0,o.scheduler=(p,g)=>{g?p():gu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=h_(t,e,o);return js&&(c?c.push(f):l&&f()),f}function iv(t,e,n){const i=this.proxy,r=Tt(t)?t.includes(".")?Hp(i,t):()=>i[t]:t.bind(i,i);let s;$e(e)?s=e:(s=e.handler,n=e);const a=oa(this),o=$p(r,s.bind(i),n);return a(),o}function Hp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const rv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${br(e)}Modifiers`];function sv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ht;let r=n;const s=e.startsWith("update:"),a=s&&rv(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Tt(u)?u.trim():u)),a.number&&(r=n.map(ro)));let o,l=i[o=qo(e)]||i[o=qo(yn(e))];!l&&s&&(l=i[o=qo(br(e))]),l&&In(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,In(c,t,6,r)}}function Gp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!$e(t)){const l=c=>{const u=Gp(c,e,!0);u&&(o=!0,Rt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(pt(t)&&i.set(t,null),null):(Ne(s)?s.forEach(l=>a[l]=null):Rt(a,s),pt(t)&&i.set(t,a),a)}function Io(t,e){return!t||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(t,e[0].toLowerCase()+e.slice(1))||at(t,br(e))||at(t,e))}function tl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:g,inheritAttrs:x}=t,m=lo(t);let h,y;try{if(n.shapeFlag&4){const _=r||i,L=_;h=kn(c.call(L,_,u,d,p,f,g)),y=o}else{const _=e;h=kn(_.length>1?_(d,{attrs:o,slots:a,emit:l}):_(d,null)),y=e.props?o:av(o)}}catch(_){Us.length=0,Ao(_,t,1),h=Mt(en)}let S=h;if(y&&x!==!1){const _=Object.keys(y),{shapeFlag:L}=S;_.length&&L&7&&(s&&_.some(iu)&&(y=ov(y,s)),S=Fi(S,y,!1,!0))}return n.dirs&&(S=Fi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Hs(S,n.transition),h=S,lo(m),h}const av=t=>{let e;for(const n in t)(n==="class"||n==="style"||bo(n))&&((e||(e={}))[n]=t[n]);return e},ov=(t,e)=>{const n={};for(const i in t)(!iu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function lv(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?hd(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(a[f]!==i[f]&&!Io(c,f))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hd(i,a,c):!0:!!a;return!1}function hd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Io(n,s))return!0}return!1}function cv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wp=t=>t.__isSuspense;function uv(t,e){e&&e.pendingBranch?Ne(t)?e.effects.push(...t):e.effects.push(t):g_(t)}const Ft=Symbol.for("v-fgt"),aa=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Us=[];let dn=null;function Gn(t=!1){Us.push(dn=t?null:[])}function dv(){Us.pop(),dn=Us[Us.length-1]||null}let Gs=1;function pd(t,e=!1){Gs+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function jp(t){return t.dynamicChildren=Gs>0?dn||Gr:null,dv(),Gs>0&&dn&&dn.push(t),t}function pr(t,e,n,i,r,s){return jp(gr(t,e,n,i,r,s,!0))}function Kl(t,e,n,i,r){return jp(Mt(t,e,n,i,r,!0))}function Ws(t){return t?t.__v_isVNode===!0:!1}function sr(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,Ja=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Tt(t)||St(t)||$e(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function gr(t,e=null,n=null,i=0,r=null,s=t===Ft?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&Ja(e),scopeId:_p,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ct};return o?(yu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Tt(n)?8:16),Gs>0&&!a&&dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&dn.push(l),l}const Mt=fv;function fv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===D_)&&(t=en),Ws(t)){const o=Fi(t,e,!0);return n&&yu(o,n),Gs>0&&!s&&dn&&(o.shapeFlag&6?dn[dn.indexOf(t)]=o:dn.push(o)),o.patchFlag=-2,o}if(Ev(t)&&(t=t.__vccOpts),e){e=hv(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=au(o)),pt(l)&&(pu(l)&&!Ne(l)&&(l=Rt({},l)),e.style=Mo(l))}const a=Tt(t)?1:Wp(t)?128:vp(t)?64:pt(t)?4:$e(t)?2:0;return gr(t,e,n,i,r,a,s,!0)}function hv(t){return t?pu(t)||Dp(t)?Rt({},t):t:null}function Fi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?pv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&qp(c),ref:e&&e.ref?n&&s?Ne(s)?s.concat(Ja(e)):[s,Ja(e)]:Ja(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fi(t.ssContent),ssFallback:t.ssFallback&&Fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Hs(u,l.clone(u)),u}function Xp(t=" ",e=0){return Mt(aa,null,t,e)}function oH(t,e){const n=Mt(Xa,null,t);return n.staticCount=e,n}function lH(t="",e=!1){return e?(Gn(),Kl(en,null,t)):Mt(en,null,t)}function kn(t){return t==null||typeof t=="boolean"?Mt(en):Ne(t)?Mt(Ft,null,t.slice()):Ws(t)?Ai(t):Mt(aa,null,String(t))}function Ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fi(t)}function yu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ne(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),yu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Dp(e)?e._ctx=Ct:r===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),i&64?(n=16,e=[Xp(e)]):n=8);t.children=e,t.shapeFlag|=n}function pv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=au([e.class,i.class]));else if(r==="style")e.style=Mo([e.style,i.style]);else if(bo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ne(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Nn(t,e,n,i=null){In(t,e,7,[n,i])}const mv=Pp();let gv=0;function _v(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||mv,s={uid:gv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(i,r),emitsOptions:Gp(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=sv.bind(null,s),t.ce&&t.ce(s),s}let Ut=null;const Qr=()=>Ut||Ct;let fo,Zl;{const t=Eo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};fo=e("__VUE_INSTANCE_SETTERS__",n=>Ut=n),Zl=e("__VUE_SSR_SETTERS__",n=>js=n)}const oa=t=>{const e=Ut;return fo(t),t.scope.on(),()=>{t.scope.off(),fo(e)}},md=()=>{Ut&&Ut.scope.off(),fo(null)};function Jp(t){return t.vnode.shapeFlag&4}let js=!1;function vv(t,e=!1,n=!1){e&&Zl(e);const{props:i,children:r}=t.vnode,s=Jp(t);W_(t,i,s,e),J_(t,r,n);const a=s?bv(t,e):void 0;return e&&Zl(!1),a}function bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,F_);const{setup:i}=n;if(i){ki();const r=t.setupContext=i.length>1?yv(t):null,s=oa(t),a=sa(i,t,0,[t.props,r]),o=zh(a);if(zi(),s(),(o||t.sp)&&!Xr(t)&&Mp(t),o){if(a.then(md,md),e)return a.then(l=>{gd(t,l,e)}).catch(l=>{Ao(l,t,0)});t.asyncDep=a}else gd(t,a,e)}else Yp(t,e)}function gd(t,e,n){$e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=fp(e)),Yp(t,n)}let _d;function Yp(t,e,n){const i=t.type;if(!t.render){if(!e&&_d&&!i.render){const r=i.template||bu(t).template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:s,delimiters:o},a),l);i.render=_d(r,c)}}t.render=i.render||Hn}{const r=oa(t);ki();try{O_(t)}finally{zi(),r()}}}const xv={get(t,e){return Ht(t,"get",""),t[e]}};function yv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xv),slots:t.slots,emit:t.emit,expose:e}}function Do(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fp(mu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Is)return Is[n](t)},has(e,n){return n in e||n in Is}})):t.proxy}function Sv(t,e=!0){return $e(t)?t.displayName||t.name:t.name||e&&t.__name}function Ev(t){return $e(t)&&"__vccOpts"in t}const Ot=(t,e)=>d_(t,e,js);function la(t,e,n){const i=arguments.length;return i===2?pt(e)&&!Ne(e)?Ws(e)?Mt(t,null,[e]):Mt(t,e):Mt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ws(n)&&(n=[n]),Mt(t,e,n))}const Mv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const vd=typeof window<"u"&&window.trustedTypes;if(vd)try{Ql=vd.createPolicy("vue",{createHTML:t=>t})}catch{}const Kp=Ql?t=>Ql.createHTML(t):t=>t,Tv="http://www.w3.org/2000/svg",wv="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,bd=ri&&ri.createElement("template"),Av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ri.createElementNS(Tv,t):e==="mathml"?ri.createElementNS(wv,t):n?ri.createElement(t,{is:n}):ri.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ri.createTextNode(t),createComment:t=>ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{bd.innerHTML=Kp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=bd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mi="transition",vs="animation",qs=Symbol("_vtc"),Zp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Rv=Rt({},bp,Zp),Cv=t=>(t.displayName="Transition",t.props=Rv,t),Pv=Cv((t,{slots:e})=>la(x_,Lv(t),e)),Xi=(t,e=[])=>{Ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},xd=t=>t?Ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Lv(t){const e={};for(const z in t)z in Zp||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Iv(r),x=g&&g[0],m=g&&g[1],{onBeforeEnter:h,onEnter:y,onEnterCancelled:S,onLeave:_,onLeaveCancelled:L,onBeforeAppear:C=h,onAppear:R=y,onAppearCancelled:U=S}=e,M=(z,G,ee,ae)=>{z._enterCancelled=ae,Ji(z,G?u:o),Ji(z,G?c:a),ee&&ee()},T=(z,G)=>{z._isLeaving=!1,Ji(z,d),Ji(z,p),Ji(z,f),G&&G()},O=z=>(G,ee)=>{const ae=z?R:y,Y=()=>M(G,z,ee);Xi(ae,[G,Y]),yd(()=>{Ji(G,z?l:s),Jn(G,z?u:o),xd(ae)||Sd(G,i,x,Y)})};return Rt(e,{onBeforeEnter(z){Xi(h,[z]),Jn(z,s),Jn(z,a)},onBeforeAppear(z){Xi(C,[z]),Jn(z,l),Jn(z,c)},onEnter:O(!1),onAppear:O(!0),onLeave(z,G){z._isLeaving=!0;const ee=()=>T(z,G);Jn(z,d),z._enterCancelled?(Jn(z,f),Td()):(Td(),Jn(z,f)),yd(()=>{z._isLeaving&&(Ji(z,d),Jn(z,p),xd(_)||Sd(z,i,m,ee))}),Xi(_,[z,ee])},onEnterCancelled(z){M(z,!1,void 0,!0),Xi(S,[z])},onAppearCancelled(z){M(z,!0,void 0,!0),Xi(U,[z])},onLeaveCancelled(z){T(z),Xi(L,[z])}})}function Iv(t){if(t==null)return null;if(pt(t))return[nl(t.enter),nl(t.leave)];{const e=nl(t);return[e,e]}}function nl(t){return Cg(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qs]||(t[qs]=new Set)).add(e)}function Ji(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[qs];n&&(n.delete(e),n.size||(t[qs]=void 0))}function yd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Dv=0;function Sd(t,e,n,i){const r=t._endId=++Dv,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Uv(t,e);if(!a)return i();const c=a+"end";let u=0;const d=()=>{t.removeEventListener(c,f),s()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},o+1),t.addEventListener(c,f)}function Uv(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${mi}Delay`),s=i(`${mi}Duration`),a=Ed(r,s),o=i(`${vs}Delay`),l=i(`${vs}Duration`),c=Ed(o,l);let u=null,d=0,f=0;e===mi?a>0&&(u=mi,d=a,f=s.length):e===vs?c>0&&(u=vs,d=c,f=l.length):(d=Math.max(a,c),u=d>0?a>c?mi:vs:null,f=u?u===mi?s.length:l.length:0);const p=u===mi&&/\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Ed(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Md(n)+Md(t[i])))}function Md(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Td(){return document.body.offsetHeight}function Nv(t,e,n){const i=t[qs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ho=Symbol("_vod"),Qp=Symbol("_vsh"),cH={beforeMount(t,{value:e},{transition:n}){t[ho]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):bs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),bs(t,!0),i.enter(t)):i.leave(t,()=>{bs(t,!1)}):bs(t,e))},beforeUnmount(t,{value:e}){bs(t,e)}};function bs(t,e){t.style.display=e?t[ho]:"none",t[Qp]=!e}const Fv=Symbol(""),Ov=/(^|;)\s*display\s*:/;function kv(t,e,n){const i=t.style,r=Tt(n);let s=!1;if(n&&!r){if(e)if(Tt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ya(i,o,"")}else for(const a in e)n[a]==null&&Ya(i,a,"");for(const a in n)a==="display"&&(s=!0),Ya(i,a,n[a])}else if(r){if(e!==n){const a=i[Fv];a&&(n+=";"+a),i.cssText=n,s=Ov.test(n)}}else e&&t.removeAttribute("style");ho in t&&(t[ho]=s?i.display:"",t[Qp]&&(i.display="none"))}const wd=/\s*!important$/;function Ya(t,e,n){if(Ne(n))n.forEach(i=>Ya(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=zv(t,e);wd.test(n)?t.setProperty(br(i),n.replace(wd,""),"important"):t[i]=n}}const Ad=["Webkit","Moz","ms"],il={};function zv(t,e){const n=il[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return il[e]=i;i=So(i);for(let r=0;r<Ad.length;r++){const s=Ad[r]+i;if(s in t)return il[e]=s}return e}const Rd="http://www.w3.org/1999/xlink";function Cd(t,e,n,i,r,s=Ng(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rd,e.slice(6,e.length)):t.setAttributeNS(Rd,e,n):n==null||s&&!Hh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ln(n)?String(n):n)}function Pd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Hh(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function ar(t,e,n,i){t.addEventListener(e,n,i)}function Bv(t,e,n,i){t.removeEventListener(e,n,i)}const Ld=Symbol("_vei");function Vv(t,e,n,i,r=null){const s=t[Ld]||(t[Ld]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=$v(e);if(i){const c=s[e]=Wv(i,r);ar(t,o,c,l)}else a&&(Bv(t,o,a,l),s[e]=void 0)}}const Id=/(?:Once|Passive|Capture)$/;function $v(t){let e;if(Id.test(t)){e={};let i;for(;i=t.match(Id);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):br(t.slice(2)),e]}let rl=0;const Hv=Promise.resolve(),Gv=()=>rl||(Hv.then(()=>rl=0),rl=Date.now());function Wv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;In(jv(i,n.value),e,5,[i])};return n.value=t,n.attached=Gv(),n}function jv(t,e){if(Ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Dd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qv=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?Nv(t,i,a):e==="style"?kv(t,n,i):bo(e)?iu(e)||Vv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xv(t,e,i,a))?(Pd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cd(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?Pd(t,yn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Cd(t,e,i,a))};function Xv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Dd(e)&&$e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Dd(e)&&Tt(n)?!1:e in t}const po=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ne(e)?n=>qa(e,n):e};function Jv(t){t.target.composing=!0}function Ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jr=Symbol("_assign"),uH={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Jr]=po(r);const s=i||r.props&&r.props.type==="number";ar(t,e?"change":"input",a=>{if(a.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=ro(o)),t[Jr](o)}),n&&ar(t,"change",()=>{t.value=t.value.trim()}),e||(ar(t,"compositionstart",Jv),ar(t,"compositionend",Ud),ar(t,"change",Ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},a){if(t[Jr]=po(a),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?ro(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},dH={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=xo(e);ar(t,"change",()=>{const s=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?ro(mo(a)):mo(a));t[Jr](t.multiple?r?new Set(s):s:s[0]),t._assigning=!0,Ro(()=>{t._assigning=!1})}),t[Jr]=po(i)},mounted(t,{value:e}){Nd(t,e)},beforeUpdate(t,e,n){t[Jr]=po(n)},updated(t,{value:e}){t._assigning||Nd(t,e)}};function Nd(t,e){const n=t.multiple,i=Ne(e);if(!(n&&!i&&!xo(e))){for(let r=0,s=t.options.length;r<s;r++){const a=t.options[r],o=mo(a);if(n)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Og(e,o)>-1}else a.selected=e.has(o);else if(To(mo(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function mo(t){return"_value"in t?t._value:t.value}const Yv=["ctrl","shift","alt","meta"],Kv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yv.some(n=>t[`${n}Key`]&&!e.includes(n))},fH=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Kv[e[a]];if(o&&o(r,e))return}return t(r,...s)})},Zv=Rt({patchProp:qv},Av);let Fd;function Qv(){return Fd||(Fd=K_(Zv))}const eb=(...t)=>{const e=Qv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=nb(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,tb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function tb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nb(t){return Tt(t)?document.querySelector(t):t}var ib=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let em;const Uo=t=>em=t,tm=Symbol();function ec(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ns;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ns||(Ns={}));function rb(){const t=ou(!0),e=t.run(()=>Ni({}));let n=[],i=[];const r=mu({install(s){Uo(r),r._a=s,s.provide(tm,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return!this._a&&!ib?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const nm=()=>{};function Od(t,e,n,i=nm){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&qh()&&zg(r),r}function Er(t,...e){t.slice().forEach(n=>{n(...e)})}const sb=t=>t(),kd=Symbol(),sl=Symbol();function tc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];ec(r)&&ec(i)&&t.hasOwnProperty(n)&&!St(i)&&!Li(i)?t[n]=tc(r,i):t[n]=i}return t}const ab=Symbol();function ob(t){return!ec(t)||!t.hasOwnProperty(ab)}const{assign:Mi}=Object;function lb(t){return!!(St(t)&&t.effect)}function cb(t,e,n,i){const{state:r,actions:s,getters:a}=e,o=n.state.value[t];let l;function c(){o||(n.state.value[t]=r?r():{});const u=o_(n.state.value[t]);return Mi(u,s,Object.keys(a||{}).reduce((d,f)=>(d[f]=mu(Ot(()=>{Uo(n);const p=n._s.get(t);return a[f].call(p,p)})),d),{}))}return l=im(t,c,e,n,i,!0),l}function im(t,e,n={},i,r,s){let a;const o=Mi({actions:{}},n),l={deep:!0};let c,u,d=[],f=[],p;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),Ni({});let x;function m(U){let M;c=u=!1,typeof U=="function"?(U(i.state.value[t]),M={type:Ns.patchFunction,storeId:t,events:p}):(tc(i.state.value[t],U),M={type:Ns.patchObject,payload:U,storeId:t,events:p});const T=x=Symbol();Ro().then(()=>{x===T&&(c=!0)}),u=!0,Er(d,M,i.state.value[t])}const h=s?function(){const{state:M}=n,T=M?M():{};this.$patch(O=>{Mi(O,T)})}:nm;function y(){a.stop(),d=[],f=[],i._s.delete(t)}const S=(U,M="")=>{if(kd in U)return U[sl]=M,U;const T=function(){Uo(i);const O=Array.from(arguments),z=[],G=[];function ee(te){z.push(te)}function ae(te){G.push(te)}Er(f,{args:O,name:T[sl],store:L,after:ee,onError:ae});let Y;try{Y=U.apply(this&&this.$id===t?this:L,O)}catch(te){throw Er(G,te),te}return Y instanceof Promise?Y.then(te=>(Er(z,te),te)).catch(te=>(Er(G,te),Promise.reject(te))):(Er(z,Y),Y)};return T[kd]=!0,T[sl]=M,T},_={_p:i,$id:t,$onAction:Od.bind(null,f),$patch:m,$reset:h,$subscribe(U,M={}){const T=Od(d,U,M.detached,()=>O()),O=a.run(()=>Ii(()=>i.state.value[t],z=>{(M.flush==="sync"?u:c)&&U({storeId:t,type:Ns.direct,events:p},z)},Mi({},l,M)));return T},$dispose:y},L=ra(_);i._s.set(t,L);const R=(i._a&&i._a.runWithContext||sb)(()=>i._e.run(()=>(a=ou()).run(()=>e({action:S}))));for(const U in R){const M=R[U];if(St(M)&&!lb(M)||Li(M))s||(g&&ob(M)&&(St(M)?M.value=g[U]:tc(M,g[U])),i.state.value[t][U]=M);else if(typeof M=="function"){const T=S(M,U);R[U]=T,o.actions[U]=M}}return Mi(L,R),Mi(Ze(L),R),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:U=>{m(M=>{Mi(M,U)})}}),i._p.forEach(U=>{Mi(L,a.run(()=>U({store:L,app:i._a,pinia:i,options:o})))}),g&&s&&n.hydrate&&n.hydrate(L.$state,g),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function hH(t,e,n){let i,r;const s=typeof e=="function";i=t,r=s?n:e;function a(o,l){const c=G_();return o=o||(c?xn(tm,null):null),o&&Uo(o),o=em,o._s.has(i)||(s?im(i,e,r,o):cb(i,r,o)),o._s.get(i)}return a.$id=i,a}/*!
  * shared v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const go=typeof window<"u",Vi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),ub=(t,e,n)=>db({l:t,k:e,s:n}),db=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Et=t=>typeof t=="number"&&isFinite(t),fb=t=>Su(t)==="[object Date]",es=t=>Su(t)==="[object RegExp]",No=t=>je(t)&&Object.keys(t).length===0,Pt=Object.assign,hb=Object.create,ft=(t=null)=>hb(t);let zd;const cr=()=>zd||(zd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ft());function Bd(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const pb=Object.prototype.hasOwnProperty;function Rn(t,e){return pb.call(t,e)}const yt=Array.isArray,gt=t=>typeof t=="function",Ee=t=>typeof t=="string",tt=t=>typeof t=="boolean",nt=t=>t!==null&&typeof t=="object",mb=t=>nt(t)&&gt(t.then)&&gt(t.catch),rm=Object.prototype.toString,Su=t=>rm.call(t),je=t=>Su(t)==="[object Object]",gb=t=>t==null?"":yt(t)||je(t)&&t.toString===rm?JSON.stringify(t,null,2):String(t);function Eu(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function _b(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const xa=t=>!nt(t)||yt(t);function Ka(t,e){if(xa(t)||xa(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(nt(i[s])&&!nt(r[s])&&(r[s]=Array.isArray(i[s])?[]:ft()),xa(r[s])||xa(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function vb(t,e,n){return{line:t,column:e,offset:n}}function nc(t,e,n){return{start:t,end:e}}const ct={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16},bb=17;function Fo(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=t,o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function xb(t){throw t}const Yn=" ",yb="\r",Kt=`
`,Sb="\u2028",Eb="\u2029";function Mb(t){const e=t;let n=0,i=1,r=1,s=0;const a=R=>e[R]===yb&&e[R+1]===Kt,o=R=>e[R]===Kt,l=R=>e[R]===Eb,c=R=>e[R]===Sb,u=R=>a(R)||o(R)||l(R)||c(R),d=()=>n,f=()=>i,p=()=>r,g=()=>s,x=R=>a(R)||l(R)||c(R)?Kt:e[R],m=()=>x(n),h=()=>x(n+s);function y(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function S(){return a(n+s)&&s++,s++,e[n+s]}function _(){n=0,i=1,r=1,s=0}function L(R=0){s=R}function C(){const R=n+s;for(;R!==n;)y();s=0}return{index:d,line:f,column:p,peekOffset:g,charAt:x,currentChar:m,currentPeek:h,next:y,peek:S,reset:_,resetPeek:L,skipToPeek:C}}const gi=void 0,Tb=".",Vd="'",wb="tokenizer";function Ab(t,e={}){const n=e.location!==!1,i=Mb(t),r=()=>i.index(),s=()=>vb(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:13,offset:o,startLoc:a,endLoc:a,lastType:13,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function d(w,I,k,...E){const v=c();if(I.column+=k,I.offset+=k,u){const F=n?nc(v.startLoc,I):null,P=Fo(w,F,{domain:wb,args:E});u(P)}}function f(w,I,k){w.endLoc=s(),w.currentType=I;const E={type:I};return n&&(E.loc=nc(w.startLoc,w.endLoc)),k!=null&&(E.value=k),E}const p=w=>f(w,13);function g(w,I){return w.currentChar()===I?(w.next(),I):(d(ct.EXPECTED_TOKEN,s(),0,I),"")}function x(w){let I="";for(;w.currentPeek()===Yn||w.currentPeek()===Kt;)I+=w.currentPeek(),w.peek();return I}function m(w){const I=x(w);return w.skipToPeek(),I}function h(w){if(w===gi)return!1;const I=w.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I===95}function y(w){if(w===gi)return!1;const I=w.charCodeAt(0);return I>=48&&I<=57}function S(w,I){const{currentType:k}=I;if(k!==2)return!1;x(w);const E=h(w.currentPeek());return w.resetPeek(),E}function _(w,I){const{currentType:k}=I;if(k!==2)return!1;x(w);const E=w.currentPeek()==="-"?w.peek():w.currentPeek(),v=y(E);return w.resetPeek(),v}function L(w,I){const{currentType:k}=I;if(k!==2)return!1;x(w);const E=w.currentPeek()===Vd;return w.resetPeek(),E}function C(w,I){const{currentType:k}=I;if(k!==7)return!1;x(w);const E=w.currentPeek()===".";return w.resetPeek(),E}function R(w,I){const{currentType:k}=I;if(k!==8)return!1;x(w);const E=h(w.currentPeek());return w.resetPeek(),E}function U(w,I){const{currentType:k}=I;if(!(k===7||k===11))return!1;x(w);const E=w.currentPeek()===":";return w.resetPeek(),E}function M(w,I){const{currentType:k}=I;if(k!==9)return!1;const E=()=>{const F=w.currentPeek();return F==="{"?h(w.peek()):F==="@"||F==="|"||F===":"||F==="."||F===Yn||!F?!1:F===Kt?(w.peek(),E()):O(w,!1)},v=E();return w.resetPeek(),v}function T(w){x(w);const I=w.currentPeek()==="|";return w.resetPeek(),I}function O(w,I=!0){const k=(v=!1,F="")=>{const P=w.currentPeek();return P==="{"||P==="@"||!P?v:P==="|"?!(F===Yn||F===Kt):P===Yn?(w.peek(),k(!0,Yn)):P===Kt?(w.peek(),k(!0,Kt)):!0},E=k();return I&&w.resetPeek(),E}function z(w,I){const k=w.currentChar();return k===gi?gi:I(k)?(w.next(),k):null}function G(w){const I=w.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I>=48&&I<=57||I===95||I===36}function ee(w){return z(w,G)}function ae(w){const I=w.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I>=48&&I<=57||I===95||I===36||I===45}function Y(w){return z(w,ae)}function te(w){const I=w.charCodeAt(0);return I>=48&&I<=57}function X(w){return z(w,te)}function he(w){const I=w.charCodeAt(0);return I>=48&&I<=57||I>=65&&I<=70||I>=97&&I<=102}function ge(w){return z(w,he)}function Me(w){let I="",k="";for(;I=X(w);)k+=I;return k}function Ie(w){let I="";for(;;){const k=w.currentChar();if(k==="{"||k==="}"||k==="@"||k==="|"||!k)break;if(k===Yn||k===Kt)if(O(w))I+=k,w.next();else{if(T(w))break;I+=k,w.next()}else I+=k,w.next()}return I}function qe(w){m(w);let I="",k="";for(;I=Y(w);)k+=I;return w.currentChar()===gi&&d(ct.UNTERMINATED_CLOSING_BRACE,s(),0),k}function ie(w){m(w);let I="";return w.currentChar()==="-"?(w.next(),I+=`-${Me(w)}`):I+=Me(w),w.currentChar()===gi&&d(ct.UNTERMINATED_CLOSING_BRACE,s(),0),I}function me(w){return w!==Vd&&w!==Kt}function _e(w){m(w),g(w,"'");let I="",k="";for(;I=z(w,me);)I==="\\"?k+=B(w):k+=I;const E=w.currentChar();return E===Kt||E===gi?(d(ct.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),E===Kt&&(w.next(),g(w,"'")),k):(g(w,"'"),k)}function B(w){const I=w.currentChar();switch(I){case"\\":case"'":return w.next(),`\\${I}`;case"u":return se(w,I,4);case"U":return se(w,I,6);default:return d(ct.UNKNOWN_ESCAPE_SEQUENCE,s(),0,I),""}}function se(w,I,k){g(w,I);let E="";for(let v=0;v<k;v++){const F=ge(w);if(!F){d(ct.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${I}${E}${w.currentChar()}`);break}E+=F}return`\\${I}${E}`}function re(w){return w!=="{"&&w!=="}"&&w!==Yn&&w!==Kt}function de(w){m(w);let I="",k="";for(;I=z(w,re);)k+=I;return k}function Le(w){let I="",k="";for(;I=ee(w);)k+=I;return k}function Pe(w){const I=k=>{const E=w.currentChar();return E==="{"||E==="@"||E==="|"||E==="("||E===")"||!E||E===Yn?k:(k+=E,w.next(),I(k))};return I("")}function D(w){m(w);const I=g(w,"|");return m(w),I}function b(w,I){let k=null;switch(w.currentChar()){case"{":return I.braceNest>=1&&d(ct.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),w.next(),k=f(I,2,"{"),m(w),I.braceNest++,k;case"}":return I.braceNest>0&&I.currentType===2&&d(ct.EMPTY_PLACEHOLDER,s(),0),w.next(),k=f(I,3,"}"),I.braceNest--,I.braceNest>0&&m(w),I.inLinked&&I.braceNest===0&&(I.inLinked=!1),k;case"@":return I.braceNest>0&&d(ct.UNTERMINATED_CLOSING_BRACE,s(),0),k=q(w,I)||p(I),I.braceNest=0,k;default:{let v=!0,F=!0,P=!0;if(T(w))return I.braceNest>0&&d(ct.UNTERMINATED_CLOSING_BRACE,s(),0),k=f(I,1,D(w)),I.braceNest=0,I.inLinked=!1,k;if(I.braceNest>0&&(I.currentType===4||I.currentType===5||I.currentType===6))return d(ct.UNTERMINATED_CLOSING_BRACE,s(),0),I.braceNest=0,Q(w,I);if(v=S(w,I))return k=f(I,4,qe(w)),m(w),k;if(F=_(w,I))return k=f(I,5,ie(w)),m(w),k;if(P=L(w,I))return k=f(I,6,_e(w)),m(w),k;if(!v&&!F&&!P)return k=f(I,12,de(w)),d(ct.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,k.value),m(w),k;break}}return k}function q(w,I){const{currentType:k}=I;let E=null;const v=w.currentChar();switch((k===7||k===8||k===11||k===9)&&(v===Kt||v===Yn)&&d(ct.INVALID_LINKED_FORMAT,s(),0),v){case"@":return w.next(),E=f(I,7,"@"),I.inLinked=!0,E;case".":return m(w),w.next(),f(I,8,".");case":":return m(w),w.next(),f(I,9,":");default:return T(w)?(E=f(I,1,D(w)),I.braceNest=0,I.inLinked=!1,E):C(w,I)||U(w,I)?(m(w),q(w,I)):R(w,I)?(m(w),f(I,11,Le(w))):M(w,I)?(m(w),v==="{"?b(w,I)||E:f(I,10,Pe(w))):(k===7&&d(ct.INVALID_LINKED_FORMAT,s(),0),I.braceNest=0,I.inLinked=!1,Q(w,I))}}function Q(w,I){let k={type:13};if(I.braceNest>0)return b(w,I)||p(I);if(I.inLinked)return q(w,I)||p(I);switch(w.currentChar()){case"{":return b(w,I)||p(I);case"}":return d(ct.UNBALANCED_CLOSING_BRACE,s(),0),w.next(),f(I,3,"}");case"@":return q(w,I)||p(I);default:{if(T(w))return k=f(I,1,D(w)),I.braceNest=0,I.inLinked=!1,k;if(O(w))return f(I,0,Ie(w));break}}return k}function J(){const{currentType:w,offset:I,startLoc:k,endLoc:E}=l;return l.lastType=w,l.lastOffset=I,l.lastStartLoc=k,l.lastEndLoc=E,l.offset=r(),l.startLoc=s(),i.currentChar()===gi?f(l,13):Q(i,l)}return{nextToken:J,currentOffset:r,currentPosition:s,context:c}}const Rb="parser",Cb=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Pb(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Lb(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,y,S,_,...L){const C=h.currentPosition();if(C.offset+=_,C.column+=_,n){const R=e?nc(S,C):null,U=Fo(y,R,{domain:Rb,args:L});n(U)}}function r(h,y,S){const _={type:h};return e&&(_.start=y,_.end=y,_.loc={start:S,end:S}),_}function s(h,y,S,_){e&&(h.end=y,h.loc&&(h.loc.end=S))}function a(h,y){const S=h.context(),_=r(3,S.offset,S.startLoc);return _.value=y,s(_,h.currentOffset(),h.currentPosition()),_}function o(h,y){const S=h.context(),{lastOffset:_,lastStartLoc:L}=S,C=r(5,_,L);return C.index=parseInt(y,10),h.nextToken(),s(C,h.currentOffset(),h.currentPosition()),C}function l(h,y){const S=h.context(),{lastOffset:_,lastStartLoc:L}=S,C=r(4,_,L);return C.key=y,h.nextToken(),s(C,h.currentOffset(),h.currentPosition()),C}function c(h,y){const S=h.context(),{lastOffset:_,lastStartLoc:L}=S,C=r(9,_,L);return C.value=y.replace(Cb,Pb),h.nextToken(),s(C,h.currentOffset(),h.currentPosition()),C}function u(h){const y=h.nextToken(),S=h.context(),{lastOffset:_,lastStartLoc:L}=S,C=r(8,_,L);return y.type!==11?(i(h,ct.UNEXPECTED_EMPTY_LINKED_MODIFIER,S.lastStartLoc,0),C.value="",s(C,_,L),{nextConsumeToken:y,node:C}):(y.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Fn(y)),C.value=y.value||"",s(C,h.currentOffset(),h.currentPosition()),{node:C})}function d(h,y){const S=h.context(),_=r(7,S.offset,S.startLoc);return _.value=y,s(_,h.currentOffset(),h.currentPosition()),_}function f(h){const y=h.context(),S=r(6,y.offset,y.startLoc);let _=h.nextToken();if(_.type===8){const L=u(h);S.modifier=L.node,_=L.nextConsumeToken||h.nextToken()}switch(_.type!==9&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(_)),_=h.nextToken(),_.type===2&&(_=h.nextToken()),_.type){case 10:_.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(_)),S.key=d(h,_.value||"");break;case 4:_.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(_)),S.key=l(h,_.value||"");break;case 5:_.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(_)),S.key=o(h,_.value||"");break;case 6:_.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(_)),S.key=c(h,_.value||"");break;default:{i(h,ct.UNEXPECTED_EMPTY_LINKED_KEY,y.lastStartLoc,0);const L=h.context(),C=r(7,L.offset,L.startLoc);return C.value="",s(C,L.offset,L.startLoc),S.key=C,s(S,L.offset,L.startLoc),{nextConsumeToken:_,node:S}}}return s(S,h.currentOffset(),h.currentPosition()),{node:S}}function p(h){const y=h.context(),S=y.currentType===1?h.currentOffset():y.offset,_=y.currentType===1?y.endLoc:y.startLoc,L=r(2,S,_);L.items=[];let C=null;do{const M=C||h.nextToken();switch(C=null,M.type){case 0:M.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(M)),L.items.push(a(h,M.value||""));break;case 5:M.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(M)),L.items.push(o(h,M.value||""));break;case 4:M.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(M)),L.items.push(l(h,M.value||""));break;case 6:M.value==null&&i(h,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Fn(M)),L.items.push(c(h,M.value||""));break;case 7:{const T=f(h);L.items.push(T.node),C=T.nextConsumeToken||null;break}}}while(y.currentType!==13&&y.currentType!==1);const R=y.currentType===1?y.lastOffset:h.currentOffset(),U=y.currentType===1?y.lastEndLoc:h.currentPosition();return s(L,R,U),L}function g(h,y,S,_){const L=h.context();let C=_.items.length===0;const R=r(1,y,S);R.cases=[],R.cases.push(_);do{const U=p(h);C||(C=U.items.length===0),R.cases.push(U)}while(L.currentType!==13);return C&&i(h,ct.MUST_HAVE_MESSAGES_IN_PLURAL,S,0),s(R,h.currentOffset(),h.currentPosition()),R}function x(h){const y=h.context(),{offset:S,startLoc:_}=y,L=p(h);return y.currentType===13?L:g(h,S,_,L)}function m(h){const y=Ab(h,Pt({},t)),S=y.context(),_=r(0,S.offset,S.startLoc);return e&&_.loc&&(_.loc.source=h),_.body=x(y),t.onCacheKey&&(_.cacheKey=t.onCacheKey(h)),S.currentType!==13&&i(y,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,h[S.offset]||""),s(_,y.currentOffset(),y.currentPosition()),_}return{parse:m}}function Fn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Ib(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function $d(t,e){for(let n=0;n<t.length;n++)Mu(t[n],e)}function Mu(t,e){switch(t.type){case 1:$d(t.cases,e),e.helper("plural");break;case 2:$d(t.items,e);break;case 6:{Mu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Db(t,e={}){const n=Ib(t);n.helper("normalize"),t.body&&Mu(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Ub(t){const e=t.body;return e.type===2?Hd(e):e.cases.forEach(n=>Hd(n)),t}function Hd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Eu(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function zr(t){switch(t.t=t.type,t.type){case 0:{const e=t;zr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)zr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)zr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;zr(e.key),e.k=e.key,delete e.key,e.modifier&&(zr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Nb(t,e){const{sourceMap:n,filename:i,breakLineCode:r,needIndent:s}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};a&&t.loc&&(o.source=t.loc.source);const l=()=>o;function c(m,h){o.code+=m}function u(m,h=!0){const y=h?r:"";c(s?y+"  ".repeat(m):y)}function d(m=!0){const h=++o.indentLevel;m&&u(h)}function f(m=!0){const h=--o.indentLevel;m&&u(h)}function p(){u(o.indentLevel)}return{context:l,push:c,indent:d,deindent:f,newline:p,helper:m=>`_${m}`,needIndent:()=>o.needIndent}}function Fb(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ts(t,e.key),e.modifier?(t.push(", "),ts(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Ob(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(ts(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function kb(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(ts(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function zb(t,e){e.body?ts(t,e.body):t.push("null")}function ts(t,e){const{helper:n}=t;switch(e.type){case 0:zb(t,e);break;case 1:kb(t,e);break;case 2:Ob(t,e);break;case 6:Fb(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Bb=(t,e={})=>{const n=Ee(e.mode)?e.mode:"normal",i=Ee(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,a=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],l=Nb(t,{mode:n,filename:i,sourceMap:r,breakLineCode:s,needIndent:a});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${Eu(o.map(d=>`${d}: _${d}`),", ")} } = ctx`),l.newline()),l.push("return "),ts(l,t),l.deindent(a),l.push("}"),delete t.helpers;const{code:c,map:u}=l.context();return{ast:t,code:c,map:u?u.toJSON():void 0}};function Vb(t,e={}){const n=Pt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=Lb(n).parse(t);return i?(s&&Ub(o),r&&zr(o),{ast:o,code:""}):(Db(o,n),Bb(o,n))}/*!
  * core-base v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function $b(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(cr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(cr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function al(t){return n=>Hb(n,t)}function Hb(t,e){const n=Wb(e);if(n==null)throw Xs(0);if(Tu(n)===1){const s=qb(n);return t.plural(s.reduce((a,o)=>[...a,Gd(t,o)],[]))}else return Gd(t,n)}const Gb=["b","body"];function Wb(t){return $i(t,Gb)}const jb=["c","cases"];function qb(t){return $i(t,jb,[])}function Gd(t,e){const n=Jb(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=Kb(e).reduce((r,s)=>[...r,ic(t,s)],[]);return t.normalize(i)}}const Xb=["s","static"];function Jb(t){return $i(t,Xb)}const Yb=["i","items"];function Kb(t){return $i(t,Yb,[])}function ic(t,e){const n=Tu(e);switch(n){case 3:return ya(e,n);case 9:return ya(e,n);case 4:{const i=e;if(Rn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Rn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Xs(n)}case 5:{const i=e;if(Rn(i,"i")&&Et(i.i))return t.interpolate(t.list(i.i));if(Rn(i,"index")&&Et(i.index))return t.interpolate(t.list(i.index));throw Xs(n)}case 6:{const i=e,r=tx(i),s=ix(i);return t.linked(ic(t,s),r?ic(t,r):void 0,t.type)}case 7:return ya(e,n);case 8:return ya(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Zb=["t","type"];function Tu(t){return $i(t,Zb)}const Qb=["v","value"];function ya(t,e){const n=$i(t,Qb);if(n)return n;throw Xs(e)}const ex=["m","modifier"];function tx(t){return $i(t,ex)}const nx=["k","key"];function ix(t){const e=$i(t,nx);if(e)return e;throw Xs(6)}function $i(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Rn(t,r)&&t[r]!=null)return t[r]}return n}function Xs(t){return new Error(`unhandled node type: ${t}`)}const rx=t=>t;let Sa=ft();function ns(t){return nt(t)&&Tu(t)===0&&(Rn(t,"b")||Rn(t,"body"))}function sx(t,e={}){let n=!1;const i=e.onError||xb;return e.onError=r=>{n=!0,i(r)},{...Vb(t,e),detectError:n}}function ax(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ee(t)){tt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||rx)(t),r=Sa[i];if(r)return r;const{ast:s,detectError:a}=sx(t,{...e,location:!1,jit:!0}),o=al(s);return a?o:Sa[i]=o}else{const n=t.cacheKey;if(n){const i=Sa[n];return i||(Sa[n]=al(t))}else return al(t)}}let Js=null;function ox(t){Js=t}function lx(t,e,n){Js&&Js.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const cx=ux("function:translate");function ux(t){return e=>Js&&Js.emit(t,e)}const oi={INVALID_ARGUMENT:bb,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_NON_STRING_MESSAGE:20,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},dx=24;function li(t){return Fo(t,null,void 0)}function wu(t,e){return e.locale!=null?Wd(e.locale):Wd(t.locale)}let ol;function Wd(t){if(Ee(t))return t;if(gt(t)){if(t.resolvedOnce&&ol!=null)return ol;if(t.constructor.name==="Function"){const e=t();if(mb(e))throw li(oi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return ol=e}else throw li(oi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw li(oi.NOT_SUPPORT_LOCALE_TYPE)}function fx(t,e,n){return[...new Set([n,...yt(e)?e:nt(e)?Object.keys(e):Ee(e)?[e]:[n]])]}function sm(t,e,n){const i=Ee(n)?n:Ys,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;yt(a);)a=jd(s,a,e);const o=yt(e)||!je(e)?e:e.default?e.default:null;a=Ee(o)?[o]:o,yt(a)&&jd(s,a,!1),r.__localeChainCache.set(i,s)}return s}function jd(t,e,n){let i=!0;for(let r=0;r<e.length&&tt(i);r++){const s=e[r];Ee(s)&&(i=hx(t,e[r],n))}return i}function hx(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=px(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function px(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(yt(n)||je(n))&&n[r]&&(i=n[r])}return i}const Hi=[];Hi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Hi[1]={w:[1],".":[2],"[":[4],o:[7]};Hi[2]={w:[2],i:[3,0],0:[3,0]};Hi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Hi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Hi[5]={"'":[4,0],o:8,l:[5,0]};Hi[6]={'"':[4,0],o:8,l:[6,0]};const mx=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function gx(t){return mx.test(t)}function _x(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function vx(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function bx(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:gx(e)?_x(e):"*"+e}function xx(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,d;const f=[];f[0]=()=>{a===void 0?a=o:a+=o},f[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},f[2]=()=>{f[0](),r++},f[3]=()=>{if(r>0)r--,i=4,f[0]();else{if(r=0,a===void 0||(a=bx(a),a===!1))return!1;f[1]()}};function p(){const g=t[n+1];if(i===5&&g==="'"||i===6&&g==='"')return n++,o="\\"+g,f[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=vx(s),d=Hi[i],c=d[l]||d.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=f[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const qd=new Map;function yx(t,e){return nt(t)?t[e]:null}function Sx(t,e){if(!nt(t))return null;let n=qd.get(e);if(n||(n=xx(e),n&&qd.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=r[n[s]];if(a===void 0||gt(r))return null;r=a,s++}return r}const Ex="10.0.5",Oo=-1,Ys="en-US",Xd="",Jd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Mx(){return{upper:(t,e)=>e==="text"&&Ee(t)?t.toUpperCase():e==="vnode"&&nt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ee(t)?t.toLowerCase():e==="vnode"&&nt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ee(t)?Jd(t):e==="vnode"&&nt(t)&&"__v_isVNode"in t?Jd(t.children):t}}let am;function Tx(t){am=t}let om;function wx(t){om=t}let lm;function Ax(t){lm=t}let cm=null;const Rx=t=>{cm=t},Cx=()=>cm;let um=null;const Yd=t=>{um=t},Px=()=>um;let Kd=0;function Lx(t={}){const e=gt(t.onWarn)?t.onWarn:_b,n=Ee(t.version)?t.version:Ex,i=Ee(t.locale)||gt(t.locale)?t.locale:Ys,r=gt(i)?Ys:i,s=yt(t.fallbackLocale)||je(t.fallbackLocale)||Ee(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=je(t.messages)?t.messages:ll(r),o=je(t.datetimeFormats)?t.datetimeFormats:ll(r),l=je(t.numberFormats)?t.numberFormats:ll(r),c=Pt(ft(),t.modifiers,Mx()),u=t.pluralRules||ft(),d=gt(t.missing)?t.missing:null,f=tt(t.missingWarn)||es(t.missingWarn)?t.missingWarn:!0,p=tt(t.fallbackWarn)||es(t.fallbackWarn)?t.fallbackWarn:!0,g=!!t.fallbackFormat,x=!!t.unresolving,m=gt(t.postTranslation)?t.postTranslation:null,h=je(t.processor)?t.processor:null,y=tt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,S=!!t.escapeParameter,_=gt(t.messageCompiler)?t.messageCompiler:am,L=gt(t.messageResolver)?t.messageResolver:om||yx,C=gt(t.localeFallbacker)?t.localeFallbacker:lm||fx,R=nt(t.fallbackContext)?t.fallbackContext:void 0,U=t,M=nt(U.__datetimeFormatters)?U.__datetimeFormatters:new Map,T=nt(U.__numberFormatters)?U.__numberFormatters:new Map,O=nt(U.__meta)?U.__meta:{};Kd++;const z={version:n,cid:Kd,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:d,missingWarn:f,fallbackWarn:p,fallbackFormat:g,unresolving:x,postTranslation:m,processor:h,warnHtmlMessage:y,escapeParameter:S,messageCompiler:_,messageResolver:L,localeFallbacker:C,fallbackContext:R,onWarn:e,__meta:O};return z.datetimeFormats=o,z.numberFormats=l,z.__datetimeFormatters=M,z.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&lx(z,n,O),z}const ll=t=>({[t]:ft()});function Au(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Ee(o)?o:e}else return e}function xs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Ix(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Dx(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(Ix(t,e[i]))return!0;return!1}function Zd(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,d]=rc(...e),f=tt(u.missingWarn)?u.missingWarn:t.missingWarn;tt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,g=wu(t,u),x=a(t,r,g);if(!Ee(l)||l==="")return new Intl.DateTimeFormat(g,d).format(c);let m={},h,y=null;const S="datetime format";for(let C=0;C<x.length&&(h=x[C],m=n[h]||{},y=m[l],!je(y));C++)Au(t,l,h,f,S);if(!je(y)||!Ee(h))return i?Oo:l;let _=`${h}__${l}`;No(d)||(_=`${_}__${JSON.stringify(d)}`);let L=o.get(_);return L||(L=new Intl.DateTimeFormat(h,Pt({},y,d)),o.set(_,L)),p?L.formatToParts(c):L.format(c)}const dm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function rc(...t){const[e,n,i,r]=t,s=ft();let a=ft(),o;if(Ee(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw li(oi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw li(oi.INVALID_ISO_DATE_ARGUMENT)}}else if(fb(e)){if(isNaN(e.getTime()))throw li(oi.INVALID_DATE_ARGUMENT);o=e}else if(Et(e))o=e;else throw li(oi.INVALID_ARGUMENT);return Ee(n)?s.key=n:je(n)&&Object.keys(n).forEach(l=>{dm.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:je(i)&&(a=i),je(r)&&(a=r),[s.key||"",o,s,a]}function Qd(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function ef(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,d]=sc(...e),f=tt(u.missingWarn)?u.missingWarn:t.missingWarn;tt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,g=wu(t,u),x=a(t,r,g);if(!Ee(l)||l==="")return new Intl.NumberFormat(g,d).format(c);let m={},h,y=null;const S="number format";for(let C=0;C<x.length&&(h=x[C],m=n[h]||{},y=m[l],!je(y));C++)Au(t,l,h,f,S);if(!je(y)||!Ee(h))return i?Oo:l;let _=`${h}__${l}`;No(d)||(_=`${_}__${JSON.stringify(d)}`);let L=o.get(_);return L||(L=new Intl.NumberFormat(h,Pt({},y,d)),o.set(_,L)),p?L.formatToParts(c):L.format(c)}const fm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function sc(...t){const[e,n,i,r]=t,s=ft();let a=ft();if(!Et(e))throw li(oi.INVALID_ARGUMENT);const o=e;return Ee(n)?s.key=n:je(n)&&Object.keys(n).forEach(l=>{fm.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:je(i)&&(a=i),je(r)&&(a=r),[s.key||"",o,s,a]}function tf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const Ux=t=>t,Nx=t=>"",Fx="text",Ox=t=>t.length===0?"":Eu(t),kx=gb;function nf(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function zx(t){const e=Et(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Et(t.named.count)||Et(t.named.n))?Et(t.named.count)?t.named.count:Et(t.named.n)?t.named.n:e:e}function Bx(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Vx(t={}){const e=t.locale,n=zx(t),i=nt(t.pluralRules)&&Ee(e)&&gt(t.pluralRules[e])?t.pluralRules[e]:nf,r=nt(t.pluralRules)&&Ee(e)&&gt(t.pluralRules[e])?nf:void 0,s=h=>h[i(n,h.length,r)],a=t.list||[],o=h=>a[h],l=t.named||ft();Et(t.pluralIndex)&&Bx(n,l);const c=h=>l[h];function u(h,y){const S=gt(t.messages)?t.messages(h,!!y):nt(t.messages)?t.messages[h]:!1;return S||(t.parent?t.parent.message(h):Nx)}const d=h=>t.modifiers?t.modifiers[h]:Ux,f=je(t.processor)&&gt(t.processor.normalize)?t.processor.normalize:Ox,p=je(t.processor)&&gt(t.processor.interpolate)?t.processor.interpolate:kx,g=je(t.processor)&&Ee(t.processor.type)?t.processor.type:Fx,m={list:o,named:c,plural:s,linked:(h,...y)=>{const[S,_]=y;let L="text",C="";y.length===1?nt(S)?(C=S.modifier||C,L=S.type||L):Ee(S)&&(C=S||C):y.length===2&&(Ee(S)&&(C=S||C),Ee(_)&&(L=_||L));const R=u(h,!0)(m),U=L==="vnode"&&yt(R)&&C?R[0]:R;return C?d(C)(U,L):U},message:u,type:g,interpolate:p,normalize:f,values:Pt(ft(),a,l)};return m}const rf=()=>"",vn=t=>gt(t);function sf(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=ac(...e),u=tt(c.missingWarn)?c.missingWarn:t.missingWarn,d=tt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,f=tt(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,g=Ee(c.default)||tt(c.default)?tt(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,x=n||g!=null&&(Ee(g)||gt(g)),m=wu(t,c);f&&$x(c);let[h,y,S]=p?[l,m,o[m]||ft()]:hm(t,l,m,a,d,u),_=h,L=l;if(!p&&!(Ee(_)||ns(_)||vn(_))&&x&&(_=g,L=_),!p&&(!(Ee(_)||ns(_)||vn(_))||!Ee(y)))return r?Oo:l;let C=!1;const R=()=>{C=!0},U=vn(_)?_:pm(t,l,y,_,L,R);if(C)return _;const M=Wx(t,y,S,c),T=Vx(M),O=Hx(t,U,T),z=i?i(O,l):O;if(__INTLIFY_PROD_DEVTOOLS__){const G={timestamp:Date.now(),key:Ee(l)?l:vn(_)?_.key:"",locale:y||(vn(_)?_.locale:""),format:Ee(_)?_:vn(_)?_.source:"",message:z};G.meta=Pt({},t.__meta,Cx()||{}),cx(G)}return z}function $x(t){yt(t.list)?t.list=t.list.map(e=>Ee(e)?Bd(e):e):nt(t.named)&&Object.keys(t.named).forEach(e=>{Ee(t.named[e])&&(t.named[e]=Bd(t.named[e]))})}function hm(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let d=ft(),f,p=null;const g="translate";for(let x=0;x<u.length&&(f=u[x],d=a[f]||ft(),(p=l(d,e))===null&&(p=d[e]),!(Ee(p)||ns(p)||vn(p)));x++)if(!Dx(f,u)){const m=Au(t,e,f,s,g);m!==e&&(p=m)}return[p,f,d]}function pm(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(vn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,Gx(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function Hx(t,e,n){return e(n)}function ac(...t){const[e,n,i]=t,r=ft();if(!Ee(e)&&!Et(e)&&!vn(e)&&!ns(e))throw li(oi.INVALID_ARGUMENT);const s=Et(e)?String(e):(vn(e),e);return Et(n)?r.plural=n:Ee(n)?r.default=n:je(n)&&!No(n)?r.named=n:yt(n)&&(r.list=n),Et(i)?r.plural=i:Ee(i)?r.default=i:je(i)&&Pt(r,i),[s,r]}function Gx(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>ub(e,n,a)}}function Wx(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,f={locale:e,modifiers:r,pluralRules:s,messages:(p,g)=>{let x=a(n,p);if(x==null&&(u||g)){const[,,m]=hm(u||t,p,e,o,l,c);x=a(m,p)}if(Ee(x)||ns(x)){let m=!1;const y=pm(t,p,e,x,p,()=>{m=!0});return m?rf:y}else return vn(x)?x:rf}};return t.processor&&(f.processor=t.processor),i.list&&(f.list=i.list),i.named&&(f.named=i.named),Et(i.plural)&&(f.pluralIndex=i.plural),f}$b();/*!
  * vue-i18n v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const jx="10.0.5";function qx(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(cr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(cr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(cr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(cr().__INTLIFY_PROD_DEVTOOLS__=!1)}const tn={UNEXPECTED_RETURN_TYPE:dx,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_COMPATIBLE_LEGACY_VUE_I18N:33,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function sn(t,...e){return Fo(t,null,void 0)}const oc=Vi("__translateVNode"),lc=Vi("__datetimeParts"),cc=Vi("__numberParts"),mm=Vi("__setPluralRules"),gm=Vi("__injectWithOption"),uc=Vi("__dispose");function Ks(t){if(!nt(t))return t;for(const e in t)if(Rn(t,e))if(!e.includes("."))nt(t[e])&&Ks(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]in r||(r[n[a]]=ft()),!nt(r[n[a]])){s=!0;break}r=r[n[a]]}s||(r[n[i]]=t[e],delete t[e]),nt(r[n[i]])&&Ks(r[n[i]])}return t}function Ru(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=je(n)?n:yt(i)?ft():{[t]:ft()};if(yt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||ft(),Ka(c,a[l])):Ka(c,a)}else Ee(o)&&Ka(JSON.parse(o),a)}),r==null&&s)for(const o in a)Rn(a,o)&&Ks(a[o]);return a}function _m(t){return t.type}function vm(t,e,n){let i=nt(e.messages)?e.messages:ft();"__i18nGlobal"in n&&(i=Ru(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(nt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(nt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function af(t){return Mt(aa,null,t,0)}const of="__INTLIFY_META__",lf=()=>[],Xx=()=>!1;let cf=0;function uf(t){return(e,n,i,r)=>t(n,i,Qr()||void 0,r)}const Jx=()=>{const t=Qr();let e=null;return t&&(e=_m(t)[of])?{[of]:e}:null};function Cu(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=go?Ni:up;let a=tt(t.inheritLocale)?t.inheritLocale:!0;const o=s(e&&a?e.locale.value:Ee(t.locale)?t.locale:Ys),l=s(e&&a?e.fallbackLocale.value:Ee(t.fallbackLocale)||yt(t.fallbackLocale)||je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:o.value),c=s(Ru(o.value,t)),u=s(je(t.datetimeFormats)?t.datetimeFormats:{[o.value]:{}}),d=s(je(t.numberFormats)?t.numberFormats:{[o.value]:{}});let f=e?e.missingWarn:tt(t.missingWarn)||es(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:tt(t.fallbackWarn)||es(t.fallbackWarn)?t.fallbackWarn:!0,g=e?e.fallbackRoot:tt(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,m=gt(t.missing)?t.missing:null,h=gt(t.missing)?uf(t.missing):null,y=gt(t.postTranslation)?t.postTranslation:null,S=e?e.warnHtmlMessage:tt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,_=!!t.escapeParameter;const L=e?e.modifiers:je(t.modifiers)?t.modifiers:{};let C=t.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&Yd(null);const P={version:jx,locale:o.value,fallbackLocale:l.value,messages:c.value,modifiers:L,pluralRules:C,missing:h===null?void 0:h,missingWarn:f,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:y===null?void 0:y,warnHtmlMessage:S,escapeParameter:_,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};P.datetimeFormats=u.value,P.numberFormats=d.value,P.__datetimeFormatters=je(R)?R.__datetimeFormatters:void 0,P.__numberFormatters=je(R)?R.__numberFormatters:void 0;const N=Lx(P);return i&&Yd(N),N})(),xs(R,o.value,l.value);function M(){return[o.value,l.value,c.value,u.value,d.value]}const T=Ot({get:()=>o.value,set:P=>{o.value=P,R.locale=o.value}}),O=Ot({get:()=>l.value,set:P=>{l.value=P,R.fallbackLocale=l.value,xs(R,o.value,P)}}),z=Ot(()=>c.value),G=Ot(()=>u.value),ee=Ot(()=>d.value);function ae(){return gt(y)?y:null}function Y(P){y=P,R.postTranslation=P}function te(){return m}function X(P){P!==null&&(h=uf(P)),m=P,R.missing=h}const he=(P,N,V,oe,le,fe)=>{M();let De;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?Px():void 0),De=P(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(V!=="translate exists"&&Et(De)&&De===Oo||V==="translate exists"&&!De){const[ue,ve]=N();return e&&g?oe(e):le(ue)}else{if(fe(De))return De;throw sn(tn.UNEXPECTED_RETURN_TYPE)}};function ge(...P){return he(N=>Reflect.apply(sf,null,[N,...P]),()=>ac(...P),"translate",N=>Reflect.apply(N.t,N,[...P]),N=>N,N=>Ee(N))}function Me(...P){const[N,V,oe]=P;if(oe&&!nt(oe))throw sn(tn.INVALID_ARGUMENT);return ge(N,V,Pt({resolvedMessage:!0},oe||{}))}function Ie(...P){return he(N=>Reflect.apply(Zd,null,[N,...P]),()=>rc(...P),"datetime format",N=>Reflect.apply(N.d,N,[...P]),()=>Xd,N=>Ee(N))}function qe(...P){return he(N=>Reflect.apply(ef,null,[N,...P]),()=>sc(...P),"number format",N=>Reflect.apply(N.n,N,[...P]),()=>Xd,N=>Ee(N))}function ie(P){return P.map(N=>Ee(N)||Et(N)||tt(N)?af(String(N)):N)}const _e={normalize:ie,interpolate:P=>P,type:"vnode"};function B(...P){return he(N=>{let V;const oe=N;try{oe.processor=_e,V=Reflect.apply(sf,null,[oe,...P])}finally{oe.processor=null}return V},()=>ac(...P),"translate",N=>N[oc](...P),N=>[af(N)],N=>yt(N))}function se(...P){return he(N=>Reflect.apply(ef,null,[N,...P]),()=>sc(...P),"number format",N=>N[cc](...P),lf,N=>Ee(N)||yt(N))}function re(...P){return he(N=>Reflect.apply(Zd,null,[N,...P]),()=>rc(...P),"datetime format",N=>N[lc](...P),lf,N=>Ee(N)||yt(N))}function de(P){C=P,R.pluralRules=C}function Le(P,N){return he(()=>{if(!P)return!1;const V=Ee(N)?N:o.value,oe=b(V),le=R.messageResolver(oe,P);return ns(le)||vn(le)||Ee(le)},()=>[P],"translate exists",V=>Reflect.apply(V.te,V,[P,N]),Xx,V=>tt(V))}function Pe(P){let N=null;const V=sm(R,l.value,o.value);for(let oe=0;oe<V.length;oe++){const le=c.value[V[oe]]||{},fe=R.messageResolver(le,P);if(fe!=null){N=fe;break}}return N}function D(P){const N=Pe(P);return N??(e?e.tm(P)||{}:{})}function b(P){return c.value[P]||{}}function q(P,N){if(r){const V={[P]:N};for(const oe in V)Rn(V,oe)&&Ks(V[oe]);N=V[P]}c.value[P]=N,R.messages=c.value}function Q(P,N){c.value[P]=c.value[P]||{};const V={[P]:N};if(r)for(const oe in V)Rn(V,oe)&&Ks(V[oe]);N=V[P],Ka(N,c.value[P]),R.messages=c.value}function J(P){return u.value[P]||{}}function w(P,N){u.value[P]=N,R.datetimeFormats=u.value,Qd(R,P,N)}function I(P,N){u.value[P]=Pt(u.value[P]||{},N),R.datetimeFormats=u.value,Qd(R,P,N)}function k(P){return d.value[P]||{}}function E(P,N){d.value[P]=N,R.numberFormats=d.value,tf(R,P,N)}function v(P,N){d.value[P]=Pt(d.value[P]||{},N),R.numberFormats=d.value,tf(R,P,N)}cf++,e&&go&&(Ii(e.locale,P=>{a&&(o.value=P,R.locale=P,xs(R,o.value,l.value))}),Ii(e.fallbackLocale,P=>{a&&(l.value=P,R.fallbackLocale=P,xs(R,o.value,l.value))}));const F={id:cf,locale:T,fallbackLocale:O,get inheritLocale(){return a},set inheritLocale(P){a=P,P&&e&&(o.value=e.locale.value,l.value=e.fallbackLocale.value,xs(R,o.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:z,get modifiers(){return L},get pluralRules(){return C||{}},get isGlobal(){return i},get missingWarn(){return f},set missingWarn(P){f=P,R.missingWarn=f},get fallbackWarn(){return p},set fallbackWarn(P){p=P,R.fallbackWarn=p},get fallbackRoot(){return g},set fallbackRoot(P){g=P},get fallbackFormat(){return x},set fallbackFormat(P){x=P,R.fallbackFormat=x},get warnHtmlMessage(){return S},set warnHtmlMessage(P){S=P,R.warnHtmlMessage=P},get escapeParameter(){return _},set escapeParameter(P){_=P,R.escapeParameter=P},t:ge,getLocaleMessage:b,setLocaleMessage:q,mergeLocaleMessage:Q,getPostTranslationHandler:ae,setPostTranslationHandler:Y,getMissingHandler:te,setMissingHandler:X,[mm]:de};return F.datetimeFormats=G,F.numberFormats=ee,F.rt=Me,F.te=Le,F.tm=D,F.d=Ie,F.n=qe,F.getDateTimeFormat=J,F.setDateTimeFormat=w,F.mergeDateTimeFormat=I,F.getNumberFormat=k,F.setNumberFormat=E,F.mergeNumberFormat=v,F[gm]=n,F[oc]=B,F[lc]=re,F[cc]=se,F}function Yx(t){const e=Ee(t.locale)?t.locale:Ys,n=Ee(t.fallbackLocale)||yt(t.fallbackLocale)||je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=gt(t.missing)?t.missing:void 0,r=tt(t.silentTranslationWarn)||es(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=tt(t.silentFallbackWarn)||es(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=tt(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=je(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=gt(t.postTranslation)?t.postTranslation:void 0,d=Ee(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,f=!!t.escapeParameterHtml,p=tt(t.sync)?t.sync:!0;let g=t.messages;if(je(t.sharedMessages)){const L=t.sharedMessages;g=Object.keys(L).reduce((R,U)=>{const M=R[U]||(R[U]={});return Pt(M,L[U]),R},g||{})}const{__i18n:x,__root:m,__injectWithOption:h}=t,y=t.datetimeFormats,S=t.numberFormats,_=t.flatJson;return{locale:e,fallbackLocale:n,messages:g,flatJson:_,datetimeFormats:y,numberFormats:S,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:f,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:m,__injectWithOption:h}}function dc(t={}){const e=Cu(Yx(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return tt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=tt(r)?!r:r},get silentFallbackWarn(){return tt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=tt(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},tc(...r){const[s,a,o]=r,l={plural:1};let c=null,u=null;if(!Ee(s))throw sn(tn.INVALID_ARGUMENT);const d=s;return Ee(a)?l.locale=a:Et(a)?l.plural=a:yt(a)?c=a:je(a)&&(u=a),Ee(o)?l.locale=o:yt(o)?c=o:je(o)&&(u=o),Reflect.apply(e.t,e,[d,c||u||{},l])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function Kx(t,e,n){return{beforeCreate(){const i=Qr();if(!i)throw sn(tn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=df(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=dc(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=df(t,r);else{this.$i18n=dc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&vm(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Qr();if(!i)throw sn(tn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function df(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[mm](e.pluralizationRules||t.pluralizationRules);const n=Ru(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Pu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Zx({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Ft?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},ft())}function bm(){return Ft}const Qx=Bi({name:"i18n-t",props:Pt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Et(t)||!isNaN(t)}},Pu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Lu({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(d=>d!=="_"),a=ft();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Ee(t.plural)?+t.plural:t.plural);const o=Zx(e,s),l=r[oc](t.keypath,o,a),c=Pt(ft(),i),u=Ee(t.tag)||nt(t.tag)?t.tag:bm();return la(u,c,l)}}}),ff=Qx;function e0(t){return yt(t)&&!Ee(t[0])}function xm(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o=ft();t.locale&&(a.locale=t.locale),Ee(t.format)?a.key=t.format:nt(t.format)&&(Ee(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((f,p)=>n.includes(p)?Pt(ft(),f,{[p]:t.format[p]}):f,ft()));const l=i(t.value,a,o);let c=[a.key];yt(l)?c=l.map((f,p)=>{const g=r[f.type],x=g?g({[f.type]:f.value,index:p,parts:l}):[f.value];return e0(x)&&(x[0].key=`${f.type}-${p}`),x}):Ee(l)&&(c=[l]);const u=Pt(ft(),s),d=Ee(t.tag)||nt(t.tag)?t.tag:bm();return la(d,u,c)}}const t0=Bi({name:"i18n-n",props:Pt({value:{type:Number,required:!0},format:{type:[String,Object]}},Pu),setup(t,e){const n=t.i18n||Lu({useScope:t.scope,__useComponent:!0});return xm(t,e,fm,(...i)=>n[cc](...i))}}),hf=t0,n0=Bi({name:"i18n-d",props:Pt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Pu),setup(t,e){const n=t.i18n||Lu({useScope:t.scope,__useComponent:!0});return xm(t,e,dm,(...i)=>n[lc](...i))}}),pf=n0;function i0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function r0(t){const e=a=>{const{instance:o,value:l}=a;if(!o||!o.$)throw sn(tn.UNEXPECTED_ERROR);const c=i0(t,o.$),u=mf(l);return[Reflect.apply(c.t,c,[...gf(u)]),c]};return{created:(a,o)=>{const[l,c]=e(o);go&&t.global===c&&(a.__i18nWatcher=Ii(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{go&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=mf(o);a.textContent=Reflect.apply(l.t,l,[...gf(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function mf(t){if(Ee(t))return{path:t};if(je(t)){if(!("path"in t))throw sn(tn.REQUIRED_VALUE,"path");return t}else throw sn(tn.INVALID_VALUE)}function gf(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Ee(n)&&(a.locale=n),Et(r)&&(a.plural=r),Et(s)&&(a.plural=s),[e,o,a]}function s0(t,e,...n){const i=je(n[0])?n[0]:{};(tt(i.globalInstall)?i.globalInstall:!0)&&([ff.name,"I18nT"].forEach(s=>t.component(s,ff)),[hf.name,"I18nN"].forEach(s=>t.component(s,hf)),[pf.name,"I18nD"].forEach(s=>t.component(s,pf))),t.directive("t",r0(e))}const a0=Vi("global-vue-i18n");function o0(t={},e){const n=__VUE_I18N_LEGACY_API__&&tt(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=tt(t.globalInjection)?t.globalInjection:!0,r=new Map,[s,a]=l0(t,n),o=Vi("");function l(f){return r.get(f)||null}function c(f,p){r.set(f,p)}function u(f){r.delete(f)}const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},async install(f,...p){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,d),je(p[0])){const m=p[0];d.__composerExtend=m.__composerExtend,d.__vueI18nExtend=m.__vueI18nExtend}let g=null;!n&&i&&(g=g0(f,d.global)),__VUE_I18N_FULL_INSTALL__&&s0(f,d,...p),__VUE_I18N_LEGACY_API__&&n&&f.mixin(Kx(a,a.__composer,d));const x=f.unmount;f.unmount=()=>{g&&g(),d.dispose(),x()}},get global(){return a},dispose(){s.stop()},__instances:r,__getInstance:l,__setInstance:c,__deleteInstance:u};return d}function Lu(t={}){const e=Qr();if(e==null)throw sn(tn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw sn(tn.NOT_INSTALLED);const n=c0(e),i=d0(n),r=_m(e),s=u0(t,r);if(s==="global")return vm(i,t,r),i;if(s==="parent"){let l=f0(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Pt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=Cu(l),a.__composerExtend&&(o[uc]=a.__composerExtend(o)),p0(a,e,o),a.__setInstance(e,o)}return o}function l0(t,e,n){const i=ou(),r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>dc(t)):i.run(()=>Cu(t));if(r==null)throw sn(tn.UNEXPECTED_ERROR);return[i,r]}function c0(t){const e=xn(t.isCE?a0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw sn(t.isCE?tn.NOT_INSTALLED_WITH_PROVIDE:tn.UNEXPECTED_ERROR);return e}function u0(t,e){return No(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function d0(t){return t.mode==="composition"?t.global:t.global.__composer}function f0(t,e,n=!1){let i=null;const r=e.root;let s=h0(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[gm]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function h0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function p0(t,e,n){fs(()=>{},e),vu(()=>{const i=n;t.__deleteInstance(e);const r=i[uc];r&&(r(),delete i[uc])},e)}const m0=["locale","fallbackLocale","availableLocales"],_f=["t","rt","d","n","tm","te"];function g0(t,e){const n=Object.create(null);return m0.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw sn(tn.UNEXPECTED_ERROR);const a=St(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,_f.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw sn(tn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,_f.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}qx();Tx(ax);wx(Sx);Ax(sm);if(__INTLIFY_PROD_DEVTOOLS__){const t=cr();t.__INTLIFY__=!0,ox(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const _0={mounted(t,e){const n=e.value||"rgba(0, 0, 0, 0.3)";t.style.position="relative",t.style.overflow="hidden";const i=r=>{const s=t.getBoundingClientRect(),a=Math.max(s.width,s.height),o=r.clientX-s.left-a/2,l=r.clientY-s.top-a/2,c=document.createElement("span");c.style.position="absolute",c.style.borderRadius="50%",c.style.width=`${a}px`,c.style.height=`${a}px`,c.style.left=`${o}px`,c.style.top=`${l}px`,c.style.background=n,c.style.transform="scale(0)",c.style.opacity="0.7",c.style.pointerEvents="none",c.style.animation="ripple 600ms linear",t.appendChild(c),setTimeout(()=>{c.remove()},600)};t.addEventListener("click",i),t._rippleHandler=i},beforeUnmount(t){t.removeEventListener("click",t._rippleHandler)}},v0=Bi({__name:"App",setup(t){const e=Ni(!0);Ds("handleAfterLeave",()=>{e.value=!1}),fs(()=>{document.addEventListener("contextmenu",r=>{r.preventDefault()})}),document.addEventListener("gesturestart",function(r){r.preventDefault()});let i=0;return document.addEventListener("touchend",function(r){const s=new Date().getTime();s-i<=300&&r.preventDefault(),i=s},!1),(r,s)=>{const a=I_("router-view");return Gn(),pr(Ft,null,[s[0]||(s[0]=gr("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"},null,-1)),Mt(Pv,{name:"blur-transition",mode:"out-in"},{default:_u(()=>[Mt(a)]),_:1})],64)}}}),b0="modulepreload",x0=function(t){return"/"+t},vf={},jt=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=x0(l),l in vf)return;vf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":b0,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof document<"u";function ym(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function y0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ym(t.default)}const st=Object.assign;function cl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Dn(r)?r.map(t):t(r)}return n}const Fs=()=>{},Dn=Array.isArray,Sm=/#/g,S0=/&/g,E0=/\//g,M0=/=/g,T0=/\?/g,Em=/\+/g,w0=/%5B/g,A0=/%5D/g,Mm=/%5E/g,R0=/%60/g,Tm=/%7B/g,C0=/%7C/g,wm=/%7D/g,P0=/%20/g;function Iu(t){return encodeURI(""+t).replace(C0,"|").replace(w0,"[").replace(A0,"]")}function L0(t){return Iu(t).replace(Tm,"{").replace(wm,"}").replace(Mm,"^")}function fc(t){return Iu(t).replace(Em,"%2B").replace(P0,"+").replace(Sm,"%23").replace(S0,"%26").replace(R0,"`").replace(Tm,"{").replace(wm,"}").replace(Mm,"^")}function I0(t){return fc(t).replace(M0,"%3D")}function D0(t){return Iu(t).replace(Sm,"%23").replace(T0,"%3F")}function U0(t){return t==null?"":D0(t).replace(E0,"%2F")}function Zs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const N0=/\/$/,F0=t=>t.replace(N0,"");function ul(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=B0(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Zs(a)}}function O0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function k0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&is(e.matched[i],n.matched[r])&&Am(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Am(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!z0(t[n],e[n]))return!1;return!0}function z0(t,e){return Dn(t)?xf(t,e):Dn(e)?xf(e,t):t===e}function xf(t,e){return Dn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function B0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qs;(function(t){t.pop="pop",t.push="push"})(Qs||(Qs={}));var Os;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Os||(Os={}));function V0(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),F0(t)}const $0=/^[^#]+#/;function H0(t,e){return t.replace($0,"#")+e}function G0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ko=()=>({left:window.scrollX,top:window.scrollY});function W0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=G0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yf(t,e){return(history.state?history.state.position-e:-1)+t}const hc=new Map;function j0(t,e){hc.set(t,e)}function q0(t){const e=hc.get(t);return hc.delete(t),e}let X0=()=>location.protocol+"//"+location.host;function Rm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),bf(l,"")}return bf(n,t)+i+r}function J0(t,e,n,i){let r=[],s=[],a=null;const o=({state:f})=>{const p=Rm(t,location),g=n.value,x=e.value;let m=0;if(f){if(n.value=p,e.value=f,a&&a===g){a=null;return}m=x?f.position-x.position:0}else i(p);r.forEach(h=>{h(n.value,g,{delta:m,type:Qs.pop,direction:m?m>0?Os.forward:Os.back:Os.unknown})})};function l(){a=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(st({},f.state,{scroll:ko()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Sf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ko():null}}function Y0(t){const{history:e,location:n}=window,i={value:Rm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:X0()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function a(l,c){const u=st({},e.state,Sf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=st({},r.value,e.state,{forward:l,scroll:ko()});s(u.current,u,!0);const d=st({},Sf(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function K0(t){t=V0(t);const e=Y0(t),n=J0(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=st({location:"",base:t,go:i,createHref:H0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Z0(t){return typeof t=="string"||t&&typeof t=="object"}function Cm(t){return typeof t=="string"||typeof t=="symbol"}const Pm=Symbol("");var Ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ef||(Ef={}));function rs(t,e){return st(new Error,{type:t,[Pm]:!0},e)}function Kn(t,e){return t instanceof Error&&Pm in t&&(e==null||!!(t.type&e))}const Mf="[^/]+?",Q0={sensitive:!1,strict:!1,start:!0,end:!0},ey=/[.+*?^${}()[\]/\\]/g;function ty(t,e){const n=st({},Q0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(ey,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:x,optional:m,regexp:h}=f;s.push({name:g,repeatable:x,optional:m});const y=h||Mf;if(y!==Mf){p+=10;try{new RegExp(`(${y})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+_.message)}}let S=x?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,p+=20,m&&(p+=-8),x&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:x,optional:m}=p,h=g in c?c[g]:"";if(Dn(h)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Dn(h)?h.join("/"):h;if(!y)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function ny(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lm(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=ny(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Tf(i))return 1;if(Tf(r))return-1}return r.length-i.length}function Tf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iy={type:0,value:""},ry=/[a-zA-Z0-9_]/;function sy(t){if(!t)return[[]];if(t==="/")return[[iy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function d(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),a()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:ry.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),a(),r}function ay(t,e,n){const i=ty(sy(t.path),n),r=st(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function oy(t,e){const n=[],i=new Map;e=Cf({strict:!1,end:!0,sensitive:!1},e);function r(d){return i.get(d)}function s(d,f,p){const g=!p,x=Af(d);x.aliasOf=p&&p.record;const m=Cf(e,d),h=[x];if("alias"in d){const _=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of _)h.push(Af(st({},x,{components:p?p.record.components:x.components,path:L,aliasOf:p?p.record:x})))}let y,S;for(const _ of h){const{path:L}=_;if(f&&L[0]!=="/"){const C=f.record.path,R=C[C.length-1]==="/"?"":"/";_.path=f.record.path+(L&&R+L)}if(y=ay(_,f,m),p?p.alias.push(y):(S=S||y,S!==y&&S.alias.push(y),g&&d.name&&!Rf(y)&&a(d.name)),Im(y)&&l(y),x.children){const C=x.children;for(let R=0;R<C.length;R++)s(C[R],y,p&&p.children[R])}p=p||y}return S?()=>{a(S)}:Fs}function a(d){if(Cm(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return n}function l(d){const f=uy(d,n);n.splice(f,0,d),d.record.name&&!Rf(d)&&i.set(d.record.name,d)}function c(d,f){let p,g={},x,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw rs(1,{location:d});m=p.record.name,g=st(wf(f.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),d.params&&wf(d.params,p.keys.map(S=>S.name))),x=p.stringify(g)}else if(d.path!=null)x=d.path,p=n.find(S=>S.re.test(x)),p&&(g=p.parse(x),m=p.record.name);else{if(p=f.name?i.get(f.name):n.find(S=>S.re.test(f.path)),!p)throw rs(1,{location:d,currentLocation:f});m=p.record.name,g=st({},f.params,d.params),x=p.stringify(g)}const h=[];let y=p;for(;y;)h.unshift(y.record),y=y.parent;return{name:m,path:x,params:g,matched:h,meta:cy(h)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function wf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ly(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ly(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cy(t){return t.reduce((e,n)=>st(e,n.meta),{})}function Cf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function uy(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Lm(t,e[s])<0?i=s:n=s+1}const r=dy(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function dy(t){let e=t;for(;e=e.parent;)if(Im(e)&&Lm(t,e)===0)return e}function Im({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fy(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Em," "),a=s.indexOf("="),o=Zs(a<0?s:s.slice(0,a)),l=a<0?null:Zs(s.slice(a+1));if(o in e){let c=e[o];Dn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Pf(t){let e="";for(let n in t){const i=t[n];if(n=I0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dn(i)?i.map(s=>s&&fc(s)):[i&&fc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function hy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const py=Symbol(""),Lf=Symbol(""),zo=Symbol(""),Dm=Symbol(""),pc=Symbol("");function ys(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ri(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=f=>{f===!1?l(rs(4,{from:n,to:e})):f instanceof Error?l(f):Z0(f)?l(rs(2,{from:e,to:f})):(a&&i.enterCallbacks[r]===a&&typeof f=="function"&&a.push(f),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function dl(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(ym(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ri(u,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=y0(u)?u.default:u;a.mods[o]=u,a.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&Ri(p,n,i,a,o,r)()}))}}return s}function If(t){const e=xn(zo),n=xn(Dm),i=Ot(()=>{const l=jr(t.to);return e.resolve(l)}),r=Ot(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(is.bind(null,u));if(f>-1)return f;const p=Df(l[c-2]);return c>1&&Df(u)===p&&d[d.length-1].path!==p?d.findIndex(is.bind(null,l[c-2])):f}),s=Ot(()=>r.value>-1&&by(n.params,i.value.params)),a=Ot(()=>r.value>-1&&r.value===n.matched.length-1&&Am(n.params,i.value.params));function o(l={}){if(vy(l)){const c=e[jr(t.replace)?"replace":"push"](jr(t.to)).catch(Fs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ot(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function my(t){return t.length===1?t[0]:t}const gy=Bi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:If,setup(t,{slots:e}){const n=ra(If(t)),{options:i}=xn(zo),r=Ot(()=>({[Uf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Uf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&my(e.default(n));return t.custom?s:la("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),_y=gy;function vy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function by(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Dn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Df(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uf=(t,e,n)=>t??e??n,xy=Bi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=xn(pc),r=Ot(()=>t.route||i.value),s=xn(Lf,0),a=Ot(()=>{let c=jr(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=Ot(()=>r.value.matched[a.value]);Ds(Lf,Ot(()=>a.value+1)),Ds(py,o),Ds(pc,r);const l=Ni();return Ii(()=>[l.value,o.value,t.name],([c,u,d],[f,p,g])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!is(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=o.value,f=d&&d.components[u];if(!f)return Nf(n.default,{Component:f,route:c});const p=d.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=la(f,st({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Nf(n.default,{Component:m,route:c})||m}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yy=xy;function Sy(t){const e=oy(t.routes,t),n=t.parseQuery||fy,i=t.stringifyQuery||Pf,r=t.history,s=ys(),a=ys(),o=ys(),l=up(_i);let c=_i;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cl.bind(null,B=>""+B),d=cl.bind(null,U0),f=cl.bind(null,Zs);function p(B,se){let re,de;return Cm(B)?(re=e.getRecordMatcher(B),de=se):de=B,e.addRoute(de,re)}function g(B){const se=e.getRecordMatcher(B);se&&e.removeRoute(se)}function x(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function h(B,se){if(se=st({},se||l.value),typeof B=="string"){const b=ul(n,B,se.path),q=e.resolve({path:b.path},se),Q=r.createHref(b.fullPath);return st(b,q,{params:f(q.params),hash:Zs(b.hash),redirectedFrom:void 0,href:Q})}let re;if(B.path!=null)re=st({},B,{path:ul(n,B.path,se.path).path});else{const b=st({},B.params);for(const q in b)b[q]==null&&delete b[q];re=st({},B,{params:d(b)}),se.params=d(se.params)}const de=e.resolve(re,se),Le=B.hash||"";de.params=u(f(de.params));const Pe=O0(i,st({},B,{hash:L0(Le),path:de.path})),D=r.createHref(Pe);return st({fullPath:Pe,hash:Le,query:i===Pf?hy(B.query):B.query||{}},de,{redirectedFrom:void 0,href:D})}function y(B){return typeof B=="string"?ul(n,B,l.value.path):st({},B)}function S(B,se){if(c!==B)return rs(8,{from:se,to:B})}function _(B){return R(B)}function L(B){return _(st(y(B),{replace:!0}))}function C(B){const se=B.matched[B.matched.length-1];if(se&&se.redirect){const{redirect:re}=se;let de=typeof re=="function"?re(B):re;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=y(de):{path:de},de.params={}),st({query:B.query,hash:B.hash,params:de.path!=null?{}:B.params},de)}}function R(B,se){const re=c=h(B),de=l.value,Le=B.state,Pe=B.force,D=B.replace===!0,b=C(re);if(b)return R(st(y(b),{state:typeof b=="object"?st({},Le,b.state):Le,force:Pe,replace:D}),se||re);const q=re;q.redirectedFrom=se;let Q;return!Pe&&k0(i,de,re)&&(Q=rs(16,{to:q,from:de}),Me(de,de,!0,!1)),(Q?Promise.resolve(Q):T(q,de)).catch(J=>Kn(J)?Kn(J,2)?J:ge(J):X(J,q,de)).then(J=>{if(J){if(Kn(J,2))return R(st({replace:D},y(J.to),{state:typeof J.to=="object"?st({},Le,J.to.state):Le,force:Pe}),se||q)}else J=z(q,de,!0,D,Le);return O(q,de,J),J})}function U(B,se){const re=S(B,se);return re?Promise.reject(re):Promise.resolve()}function M(B){const se=ie.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(B):B()}function T(B,se){let re;const[de,Le,Pe]=Ey(B,se);re=dl(de.reverse(),"beforeRouteLeave",B,se);for(const b of de)b.leaveGuards.forEach(q=>{re.push(Ri(q,B,se))});const D=U.bind(null,B,se);return re.push(D),_e(re).then(()=>{re=[];for(const b of s.list())re.push(Ri(b,B,se));return re.push(D),_e(re)}).then(()=>{re=dl(Le,"beforeRouteUpdate",B,se);for(const b of Le)b.updateGuards.forEach(q=>{re.push(Ri(q,B,se))});return re.push(D),_e(re)}).then(()=>{re=[];for(const b of Pe)if(b.beforeEnter)if(Dn(b.beforeEnter))for(const q of b.beforeEnter)re.push(Ri(q,B,se));else re.push(Ri(b.beforeEnter,B,se));return re.push(D),_e(re)}).then(()=>(B.matched.forEach(b=>b.enterCallbacks={}),re=dl(Pe,"beforeRouteEnter",B,se,M),re.push(D),_e(re))).then(()=>{re=[];for(const b of a.list())re.push(Ri(b,B,se));return re.push(D),_e(re)}).catch(b=>Kn(b,8)?b:Promise.reject(b))}function O(B,se,re){o.list().forEach(de=>M(()=>de(B,se,re)))}function z(B,se,re,de,Le){const Pe=S(B,se);if(Pe)return Pe;const D=se===_i,b=Br?history.state:{};re&&(de||D?r.replace(B.fullPath,st({scroll:D&&b&&b.scroll},Le)):r.push(B.fullPath,Le)),l.value=B,Me(B,se,re,D),ge()}let G;function ee(){G||(G=r.listen((B,se,re)=>{if(!me.listening)return;const de=h(B),Le=C(de);if(Le){R(st(Le,{replace:!0,force:!0}),de).catch(Fs);return}c=de;const Pe=l.value;Br&&j0(yf(Pe.fullPath,re.delta),ko()),T(de,Pe).catch(D=>Kn(D,12)?D:Kn(D,2)?(R(st(y(D.to),{force:!0}),de).then(b=>{Kn(b,20)&&!re.delta&&re.type===Qs.pop&&r.go(-1,!1)}).catch(Fs),Promise.reject()):(re.delta&&r.go(-re.delta,!1),X(D,de,Pe))).then(D=>{D=D||z(de,Pe,!1),D&&(re.delta&&!Kn(D,8)?r.go(-re.delta,!1):re.type===Qs.pop&&Kn(D,20)&&r.go(-1,!1)),O(de,Pe,D)}).catch(Fs)}))}let ae=ys(),Y=ys(),te;function X(B,se,re){ge(B);const de=Y.list();return de.length?de.forEach(Le=>Le(B,se,re)):console.error(B),Promise.reject(B)}function he(){return te&&l.value!==_i?Promise.resolve():new Promise((B,se)=>{ae.add([B,se])})}function ge(B){return te||(te=!B,ee(),ae.list().forEach(([se,re])=>B?re(B):se()),ae.reset()),B}function Me(B,se,re,de){const{scrollBehavior:Le}=t;if(!Br||!Le)return Promise.resolve();const Pe=!re&&q0(yf(B.fullPath,0))||(de||!re)&&history.state&&history.state.scroll||null;return Ro().then(()=>Le(B,se,Pe)).then(D=>D&&W0(D)).catch(D=>X(D,B,se))}const Ie=B=>r.go(B);let qe;const ie=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:h,options:t,push:_,replace:L,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Y.add,isReady:he,install(B){const se=this;B.component("RouterLink",_y),B.component("RouterView",yy),B.config.globalProperties.$router=se,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>jr(l)}),Br&&!qe&&l.value===_i&&(qe=!0,_(r.location).catch(Le=>{}));const re={};for(const Le in _i)Object.defineProperty(re,Le,{get:()=>l.value[Le],enumerable:!0});B.provide(zo,se),B.provide(Dm,lp(re)),B.provide(pc,l);const de=B.unmount;ie.add(B),B.unmount=function(){ie.delete(B),ie.size<1&&(c=_i,G&&G(),G=null,l.value=_i,qe=!1,te=!1),de()}}};function _e(B){return B.reduce((se,re)=>se.then(()=>M(re)),Promise.resolve())}return me}function Ey(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>is(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>is(c,l))||r.push(l))}return[n,i,r]}function pH(){return xn(zo)}const My=20,Ty=Bi({__name:"FrostedGlass",setup(t){const e=Ni([]),n=Ni({x:0,y:0}),i=()=>{const o=[];for(let l=0;l<My;l++){const c=330+Math.random()*180;o.push({id:l,style:{width:`${c}px`,height:`${c}px`,top:`${60+Math.random()*40}%`,left:`${Math.random()*100}%`,background:`radial-gradient(circle, rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 0.7) 0%, rgba(255, 255, 255, 0) 70%)`,animationDelay:`${Math.random()*5}s`,mixBlendMode:"screen",transform:"translate(0px, 0px)"}})}e.value=o},r=o=>{n.value.x=o.clientX,n.value.y=o.clientY,a()},s=o=>{r(o)},a=()=>{const o=e.value.map(l=>{const c=document.querySelectorAll(".halo")[l.id];if(c){const u=c.getBoundingClientRect(),d=n.value.x-(u.left+u.width/2),f=n.value.y-(u.top+u.height/2),p=Math.sqrt(d*d+f*f),g=p<100?50-p/2:0,x=Math.atan2(f,d);return{...l,style:{...l.style,transform:`translate(${Math.cos(x)*g}px, ${Math.sin(x)*g}px)`}}}return l});e.value=o};return fs(()=>{i(),window.addEventListener("mousemove",r)}),Lo(()=>{window.removeEventListener("mousemove",r)}),(o,l)=>(Gn(),pr("div",{class:"frosted-glass",onMousemove:s},[(Gn(!0),pr(Ft,null,U_(e.value,c=>(Gn(),pr("div",{key:c.id,class:"halo",style:Mo(c.style)},null,4))),128)),N_(o.$slots,"default",{},void 0,!0)],32))}}),Bo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},wy=Bo(Ty,[["__scopeId","data-v-1dac94ce"]]),Ay={},Ry={class:"footer"};function Cy(t,e){return Gn(),pr("footer",Ry,e[0]||(e[0]=[gr("p",{class:"icp-info"},[Xp(" © 2024 ponzs Inc. ICP:"),gr("a",{style:{"text-decoration":"none",color:"var(--text-color)"},href:"https://beian.miit.gov.cn"}," 京ICP备2024046101号")],-1)]))}const Py=Bo(Ay,[["render",Cy],["__scopeId","data-v-977fae9d"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Du="172",Ly=0,Ff=1,Iy=2,Um=1,Dy=2,ii=3,Oi=0,rn=1,Bn=2,Di=0,Yr=1,Of=2,kf=3,zf=4,Uy=5,or=100,Ny=101,Fy=102,Oy=103,ky=104,zy=200,By=201,Vy=202,$y=203,mc=204,gc=205,Hy=206,Gy=207,Wy=208,jy=209,qy=210,Xy=211,Jy=212,Yy=213,Ky=214,_c=0,vc=1,bc=2,ss=3,xc=4,yc=5,Sc=6,Ec=7,Nm=0,Zy=1,Qy=2,Ui=0,eS=1,tS=2,nS=3,iS=4,rS=5,sS=6,aS=7,Fm=300,as=301,os=302,Mc=303,Tc=304,Vo=306,wc=1e3,ur=1001,Ac=1002,fn=1003,oS=1004,Ea=1005,Vn=1006,fl=1007,dr=1008,fi=1009,Om=1010,km=1011,ea=1012,Uu=1013,_r=1014,ci=1015,ca=1016,Nu=1017,Fu=1018,ls=1020,zm=35902,Bm=1021,Vm=1022,Cn=1023,$m=1024,Hm=1025,Kr=1026,cs=1027,Gm=1028,Ou=1029,Wm=1030,ku=1031,zu=1033,Za=33776,Qa=33777,eo=33778,to=33779,Rc=35840,Cc=35841,Pc=35842,Lc=35843,Ic=36196,Dc=37492,Uc=37496,Nc=37808,Fc=37809,Oc=37810,kc=37811,zc=37812,Bc=37813,Vc=37814,$c=37815,Hc=37816,Gc=37817,Wc=37818,jc=37819,qc=37820,Xc=37821,no=36492,Jc=36494,Yc=36495,jm=36283,Kc=36284,Zc=36285,Qc=36286,lS=3200,cS=3201,qm=0,uS=1,Ci="",_n="srgb",us="srgb-linear",_o="linear",ut="srgb",Mr=7680,Bf=519,dS=512,fS=513,hS=514,Xm=515,pS=516,mS=517,gS=518,_S=519,Vf=35044,$f="300 es",ui=2e3,vo=2001;class xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hf=1234567;const ks=Math.PI/180,ta=180/Math.PI;function hs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function Bu(t,e){return(t%e+e)%e}function vS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function bS(t,e,n){return t!==e?(n-t)/(e-t):0}function zs(t,e,n){return(1-n)*t+n*e}function xS(t,e,n,i){return zs(t,e,1-Math.exp(-n*i))}function yS(t,e=1){return e-Math.abs(Bu(t,e*2)-e)}function SS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ES(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function MS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function TS(t,e){return t+Math.random()*(e-t)}function wS(t){return t*(.5-Math.random())}function AS(t){t!==void 0&&(Hf=t);let e=Hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RS(t){return t*ks}function CS(t){return t*ta}function PS(t){return(t&t-1)===0&&t!==0}function LS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function IS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function DS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*d,l*f,o*c);break;case"YZY":t.set(l*f,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*f,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const mH={DEG2RAD:ks,RAD2DEG:ta,generateUUID:hs,clamp:Xe,euclideanModulo:Bu,mapLinear:vS,inverseLerp:bS,lerp:zs,damp:xS,pingpong:yS,smoothstep:SS,smootherstep:ES,randInt:MS,randFloat:TS,randFloatSpread:wS,seededRandom:AS,degToRad:RS,radToDeg:CS,isPowerOfTwo:PS,ceilPowerOfTwo:LS,floorPowerOfTwo:IS,setQuaternionFromProperEuler:DS,normalize:Jt,denormalize:Vr};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],y=r[1],S=r[4],_=r[7],L=r[2],C=r[5],R=r[8];return s[0]=a*x+o*y+l*L,s[3]=a*m+o*S+l*C,s[6]=a*h+o*_+l*R,s[1]=c*x+u*y+d*L,s[4]=c*m+u*S+d*C,s[7]=c*h+u*_+d*R,s[2]=f*x+p*y+g*L,s[5]=f*m+p*S+g*C,s[8]=f*h+p*_+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(hl.makeScale(e,n)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,n){return this.premultiply(hl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Ge;function Jm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function US(){const t=na("canvas");return t.style.display="block",t}const Gf={};function $r(t){t in Gf||(Gf[t]=!0,console.warn(t))}function NS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function FS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function OS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wf=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kS(){const t={enabled:!0,workingColorSpace:us,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?_o:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[us]:{primaries:e,whitePoint:i,transfer:_o,toXYZ:Wf,fromXYZ:jf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Wf,fromXYZ:jf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const et=kS();function di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class zS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=na("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(di(n[i]/255)*255):n[i]=di(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BS=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pl(r[a].image)):s.push(pl(r[a]))}else s=pl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;class kt extends xr{constructor(e=kt.DEFAULT_IMAGE,n=kt.DEFAULT_MAPPING,i=ur,r=ur,s=Vn,a=dr,o=Cn,l=fi,c=kt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=hs(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wc:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wc:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Fm;kt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,_=(p+1)/2,L=(h+1)/2,C=(u+f)/4,R=(d+x)/4,U=(g+m)/4;return S>_&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=R/i):_>L?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=U/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $S extends xr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Ym(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends $S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Km extends kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HS extends kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==g){let m=1-o;const h=l*f+c*p+u*g+d*x,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,h*y);m=Math.sin(m*C)/L,o=Math.sin(o*C)/L}const _=o*y;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,d=d*m+x*_,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-o*p,e[n+2]=c*g+u*p+o*f-l*d,e[n+3]=u*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new j,qf=new ua;class da{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Mn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Mn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Mn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Ta.subVectors(this.max,Ss),wr.subVectors(e.a,Ss),Ar.subVectors(e.b,Ss),Rr.subVectors(e.c,Ss),vi.subVectors(Ar,wr),bi.subVectors(Rr,Ar),Yi.subVectors(wr,Rr);let n=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-Yi.z,Yi.y,vi.z,0,-vi.x,bi.z,0,-bi.x,Yi.z,0,-Yi.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-Yi.y,Yi.x,0];return!gl(n,wr,Ar,Rr,Ta)||(n=[1,0,0,0,1,0,0,0,1],!gl(n,wr,Ar,Rr,Ta))?!1:(wa.crossVectors(vi,bi),n=[wa.x,wa.y,wa.z],gl(n,wr,Ar,Rr,Ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new j,new j,new j,new j,new j,new j,new j,new j],Mn=new j,Ma=new da,wr=new j,Ar=new j,Rr=new j,vi=new j,bi=new j,Yi=new j,Ss=new j,Ta=new j,wa=new j,Ki=new j;function gl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ki.fromArray(t,s);const o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const GS=new da,Es=new j,_l=new j;class $o{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const n=Es.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(_l)),this.expandByPoint(Es.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new j,vl=new j,Aa=new j,xi=new j,bl=new j,Ra=new j,xl=new j;class Zm{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vl.copy(e).add(n).multiplyScalar(.5),Aa.copy(n).sub(e).normalize(),xi.copy(this.origin).sub(vl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Aa),o=xi.dot(this.direction),l=-xi.dot(Aa),c=xi.lengthSq(),u=Math.abs(1-a*a);let d,f,p,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vl).addScaledVector(Aa,f),p}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){bl.subVectors(n,e),Ra.subVectors(i,e),xl.crossVectors(bl,Ra);let a=this.direction.dot(xl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Ra.crossVectors(xi,Ra));if(l<0)return null;const c=o*this.direction.dot(bl.cross(xi));if(c<0||l+c>a)return null;const u=-o*xi.dot(xl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,a,o,l,c,u,d,f,p,g,x,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,p,g,x,m)}set(e,n,i,r,s,a,o,l,c,u,d,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,g=o*u,x=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,x=c*d;n[0]=f+x*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-g,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,x=c*d;n[0]=f-x*o,n[4]=-a*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,g=o*u,x=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;n[0]=l*u,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=a*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,jS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(i,on),yi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(i,on)),yi.normalize(),Ca.crossVectors(on,yi),r[0]=yi.x,r[4]=Ca.x,r[8]=on.x,r[1]=yi.y,r[5]=Ca.y,r[9]=on.y,r[2]=yi.z,r[6]=Ca.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],y=i[3],S=i[7],_=i[11],L=i[15],C=r[0],R=r[4],U=r[8],M=r[12],T=r[1],O=r[5],z=r[9],G=r[13],ee=r[2],ae=r[6],Y=r[10],te=r[14],X=r[3],he=r[7],ge=r[11],Me=r[15];return s[0]=a*C+o*T+l*ee+c*X,s[4]=a*R+o*O+l*ae+c*he,s[8]=a*U+o*z+l*Y+c*ge,s[12]=a*M+o*G+l*te+c*Me,s[1]=u*C+d*T+f*ee+p*X,s[5]=u*R+d*O+f*ae+p*he,s[9]=u*U+d*z+f*Y+p*ge,s[13]=u*M+d*G+f*te+p*Me,s[2]=g*C+x*T+m*ee+h*X,s[6]=g*R+x*O+m*ae+h*he,s[10]=g*U+x*z+m*Y+h*ge,s[14]=g*M+x*G+m*te+h*Me,s[3]=y*C+S*T+_*ee+L*X,s[7]=y*R+S*O+_*ae+L*he,s[11]=y*U+S*z+_*Y+L*ge,s[15]=y*M+S*G+_*te+L*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*p-i*l*p)+x*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-n*l*d+n*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],y=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,S=g*f*c-u*m*c-g*l*p+a*m*p+u*l*h-a*f*h,_=u*x*c-g*d*c+g*o*p-a*x*p-u*o*h+a*d*h,L=g*d*l-u*x*l-g*o*f+a*x*f+u*o*m-a*d*m,C=n*y+i*S+r*_+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=y*R,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*R,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*h+i*l*h)*R,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*p-i*l*p)*R,e[4]=S*R,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*R,e[6]=(g*l*s-a*m*s-g*r*c+n*m*c+a*r*h-n*l*h)*R,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*p+n*l*p)*R,e[8]=_*R,e[9]=(g*d*s-u*x*s-g*i*p+n*x*p+u*i*h-n*d*h)*R,e[10]=(a*x*s-g*o*s+g*i*c-n*x*c-a*i*h+n*o*h)*R,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*R,e[12]=L*R,e[13]=(u*x*r-g*d*r+g*i*f-n*x*f-u*i*m+n*d*m)*R,e[14]=(g*o*r-a*x*r-g*i*l+n*x*l+a*i*m-n*o*m)*R,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*f+n*o*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,g=s*d,x=a*u,m=a*d,h=o*d,y=l*c,S=l*u,_=l*d,L=i.x,C=i.y,R=i.z;return r[0]=(1-(x+h))*L,r[1]=(p+_)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(p-_)*C,r[5]=(1-(f+h))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(g+S)*R,r[9]=(m-y)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const a=Cr.set(r[4],r[5],r[6]).length(),o=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const c=1/s,u=1/a,d=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,n.setFromRotationMatrix(Tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(o===ui)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===vo)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*c,p=(i+r)*u;let g,x;if(o===ui)g=(a+s)*d,x=-2*d;else if(o===vo)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cr=new j,Tn=new vt,WS=new j(0,0,0),jS=new j(1,1,1),yi=new j,Ca=new j,on=new j,Xf=new vt,Jf=new ua;class jn{constructor(e=0,n=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qS=0;const Yf=new j,Pr=new ua,ei=new vt,Pa=new j,Ms=new j,XS=new j,JS=new ua,Kf=new j(1,0,0),Zf=new j(0,1,0),Qf=new j(0,0,1),eh={type:"added"},YS={type:"removed"},Lr={type:"childadded",child:null},yl={type:"childremoved",child:null};class zt extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new j,n=new jn,i=new ua,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,n){return Pr.setFromAxisAngle(e,n),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,n){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Pa.copy(e):Pa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Ms,Pa,this.up):ei.lookAt(Pa,Ms,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(ei),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YS),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,JS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new j(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new j,ti=new j,Sl=new j,ni=new j,Ir=new j,Dr=new j,th=new j,El=new j,Ml=new j,Tl=new j,wl=new dt,Al=new dt,Rl=new dt;class An{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wn.subVectors(r,n),ti.subVectors(i,n),Sl.subVectors(e,n);const a=wn.dot(wn),o=wn.dot(ti),l=wn.dot(Sl),c=ti.dot(ti),u=ti.dot(Sl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return wl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),wl.fromBufferAttribute(e,n),Al.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wl,s.x),a.addScaledVector(Al,s.y),a.addScaledVector(Rl,s.z),a}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),ti.subVectors(e,n),wn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),wn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,i),Dr.subVectors(s,i),El.subVectors(e,i);const l=Ir.dot(El),c=Dr.dot(El);if(l<=0&&c<=0)return n.copy(i);Ml.subVectors(e,r);const u=Ir.dot(Ml),d=Dr.dot(Ml);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Ir,a);Tl.subVectors(e,s);const p=Ir.dot(Tl),g=Dr.dot(Tl);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Dr,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return th.subVectors(s,r),o=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(th,o);const h=1/(m+x+f);return a=x*h,o=f*h,n.copy(i).addScaledVector(Ir,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},La={h:0,s:0,l:0};function Cl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Bu(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Cl(a,s,e+1/3),this.g=Cl(a,s,e),this.b=Cl(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=eg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return et.fromWorkingColorSpace($t.copy(this),e),Math.round(Xe($t.r*255,0,255))*65536+Math.round(Xe($t.g*255,0,255))*256+Math.round(Xe($t.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=_n){et.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(La);const i=zs(Si.h,La.h,n),r=zs(Si.s,La.s,n),s=zs(Si.l,La.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Je;Je.NAMES=eg;let KS=0;class ps extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Yr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==gc&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tg extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new j,Ia=new Ye;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vf,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ia.fromBufferAttribute(this,n),Ia.applyMatrix3(e),this.setXY(n,Ia.x,Ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vf&&(e.usage=this.usage),e}}class ng extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ig extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wt extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZS=0;const gn=new vt,Pl=new zt,Ur=new j,ln=new da,Ts=new da,Dt=new j;class Un extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ln.min,Ts.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,Ts.max),ln.expandByPoint(Dt)):(ln.expandByPoint(Ts.min),ln.expandByPoint(Ts.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(e,c),Dt.add(Ur)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new j,l[U]=new j;const c=new j,u=new j,d=new j,f=new Ye,p=new Ye,g=new Ye,x=new j,m=new j;function h(U,M,T){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),f.fromBufferAttribute(s,U),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,T),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(O),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(O),o[U].add(x),o[M].add(x),o[T].add(x),l[U].add(m),l[M].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,M=y.length;U<M;++U){const T=y[U],O=T.start,z=T.count;for(let G=O,ee=O+z;G<ee;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new j,_=new j,L=new j,C=new j;function R(U){L.fromBufferAttribute(r,U),C.copy(L);const M=o[U];S.copy(M),S.sub(L.multiplyScalar(L.dot(M))).normalize(),_.crossVectors(C,M);const O=_.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,O)}for(let U=0,M=y.length;U<M;++U){const T=y[U],O=T.start,z=T.count;for(let G=O,ee=O+z;G<ee;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Wn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Un,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new vt,Zi=new Zm,Da=new $o,ih=new j,Ua=new j,Na=new j,Fa=new j,Ll=new j,Oa=new j,rh=new j,ka=new j;class $n extends zt{constructor(e=new Un,n=new tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Ll.fromBufferAttribute(d,e),a?Oa.addScaledVector(Ll,u):Oa.addScaledVector(Ll.sub(n),u))}n.add(Oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(Da.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Da,ih)===null||Zi.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(nh),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,L=S;_<L;_+=3){const C=o.getX(_),R=o.getX(_+1),U=o.getX(_+2);r=za(this,h,e,i,c,u,d,C,R,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const y=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);r=za(this,a,e,i,c,u,d,y,S,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=a[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,L=S;_<L;_+=3){const C=_,R=_+1,U=_+2;r=za(this,h,e,i,c,u,d,C,R,U),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const y=m,S=m+1,_=m+2;r=za(this,a,e,i,c,u,d,y,S,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function QS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Oi,o),l===null)return null;ka.copy(o),ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ka);return c<n.near||c>n.far?null:{distance:c,point:ka.clone(),object:t}}function za(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ua),t.getVertexPosition(l,Na),t.getVertexPosition(c,Fa);const u=QS(t,e,n,i,Ua,Na,Fa,rh);if(u){const d=new j;An.getBarycoord(rh,Ua,Na,Fa,d),r&&(u.uv=An.getInterpolatedAttribute(r,o,l,c,d,new Ye)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,l,c,d,new Ye)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};An.getNormal(Ua,Na,Fa,f.normal),u.face=f,u.barycoord=d}return u}class fa extends Un{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function g(x,m,h,y,S,_,L,C,R,U,M){const T=_/R,O=L/U,z=_/2,G=L/2,ee=C/2,ae=R+1,Y=U+1;let te=0,X=0;const he=new j;for(let ge=0;ge<Y;ge++){const Me=ge*O-G;for(let Ie=0;Ie<ae;Ie++){const qe=Ie*T-z;he[x]=qe*y,he[m]=Me*S,he[h]=ee,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[h]=C>0?1:-1,u.push(he.x,he.y,he.z),d.push(Ie/R),d.push(1-ge/U),te+=1}}for(let ge=0;ge<U;ge++)for(let Me=0;Me<R;Me++){const Ie=f+Me+ae*ge,qe=f+Me+ae*(ge+1),ie=f+(Me+1)+ae*(ge+1),me=f+(Me+1)+ae*ge;l.push(Ie,qe,me),l.push(qe,ie,me),X+=6}o.addGroup(p,X,M),p+=X,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function eE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const tE={clone:ds,merge:Yt};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=eE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sg extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new j,sh=new Ye,ah=new Ye;class un extends sg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,sh,ah),n.subVectors(ah,sh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ks*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Nr=-90,Fr=1;class rE extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Nr,Fr,e,n);r.layers=this.layers,this.add(r);const s=new un(Nr,Fr,e,n);s.layers=this.layers,this.add(s);const a=new un(Nr,Fr,e,n);a.layers=this.layers,this.add(a);const o=new un(Nr,Fr,e,n);o.layers=this.layers,this.add(o);const l=new un(Nr,Fr,e,n);l.layers=this.layers,this.add(l);const c=new un(Nr,Fr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ag extends kt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:as,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sE extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ag(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fa(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Di});s.uniforms.tEquirect.value=n;const a=new $n(r,s),o=n.minFilter;return n.minFilter===dr&&(n.minFilter=Vn),new rE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class aE extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gH extends kt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=fn,u=fn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Il=new j,oE=new j,lE=new Ge;class ir{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Il.subVectors(i,n).cross(oE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lE.getNormalMatrix(e),r=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new $o,Ba=new j;class Vu{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,a=new ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],y=r[13],S=r[14],_=r[15];if(i[0].setComponents(l-s,f-c,m-p,_-h).normalize(),i[1].setComponents(l+s,f+c,m+p,_+h).normalize(),i[2].setComponents(l+a,f+u,m+g,_+y).normalize(),i[3].setComponents(l-a,f-u,m-g,_-y).normalize(),i[4].setComponents(l-o,f-d,m-x,_-S).normalize(),n===ui)i[5].setComponents(l+o,f+d,m+x,_+S).normalize();else if(n===vo)i[5].setComponents(o,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cE extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oh=new vt,eu=new Zm,Va=new $o,$a=new j;class _H extends zt{constructor(e=new Un,n=new cE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;oh.copy(r).invert(),eu.copy(e.ray).applyMatrix4(oh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);$a.fromBufferAttribute(d,m),lh($a,m,l,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,x=p;g<x;g++)$a.fromBufferAttribute(d,g),lh($a,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lh(t,e,n,i,r,s,a){const o=eu.distanceSqToPoint(t);if(o<n){const l=new j;eu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ha extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class vH extends kt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class og extends kt{constructor(e,n,i,r,s,a,o,l,c,u=Kr){if(u!==Kr&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Kr&&(i=_r),i===void 0&&u===cs&&(i=ls),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $u extends Un{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(s.slice(),3)),this.setAttribute("uv",new Wt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new j,_=new j,L=new j;for(let C=0;C<n.length;C+=3)p(n[C+0],S),p(n[C+1],_),p(n[C+2],L),l(S,_,L,y)}function l(y,S,_,L){const C=L+1,R=[];for(let U=0;U<=C;U++){R[U]=[];const M=y.clone().lerp(_,U/C),T=S.clone().lerp(_,U/C),O=C-U;for(let z=0;z<=O;z++)z===0&&U===C?R[U][z]=M:R[U][z]=M.clone().lerp(T,z/O)}for(let U=0;U<C;U++)for(let M=0;M<2*(C-U)-1;M++){const T=Math.floor(M/2);M%2===0?(f(R[U][T+1]),f(R[U+1][T]),f(R[U][T])):(f(R[U][T+1]),f(R[U+1][T+1]),f(R[U+1][T]))}}function c(y){const S=new j;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(y),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function u(){const y=new j;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];const _=m(y)/2/Math.PI+.5,L=h(y)/Math.PI+.5;a.push(_,1-L)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const S=a[y+0],_=a[y+2],L=a[y+4],C=Math.max(S,_,L),R=Math.min(S,_,L);C>.9&&R<.1&&(S<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,S){const _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){const y=new j,S=new j,_=new j,L=new j,C=new Ye,R=new Ye,U=new Ye;for(let M=0,T=0;M<s.length;M+=9,T+=6){y.set(s[M+0],s[M+1],s[M+2]),S.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),C.set(a[T+0],a[T+1]),R.set(a[T+2],a[T+3]),U.set(a[T+4],a[T+5]),L.copy(y).add(S).add(_).divideScalar(3);const O=m(L);x(C,T+0,y,O),x(R,T+2,S,O),x(U,T+4,_,O)}}function x(y,S,_,L){L<0&&y.x===1&&(a[S]=y.x-1),_.x===0&&_.z===0&&(a[S]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.vertices,e.indices,e.radius,e.details)}}class Hu extends $u{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Hu(e.radius,e.detail)}}class Ho extends Un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const y=h*f-a;for(let S=0;S<c;S++){const _=S*d-s;g.push(_,-y,0),x.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const S=y+c*h,_=y+c*(h+1),L=y+1+c*(h+1),C=y+1+c*h;p.push(S,_,C),p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class lg extends Un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new j,f=new j,p=[],g=[],x=[],m=[];for(let h=0;h<=i;h++){const y=[],S=h/i;let _=0;h===0&&a===0?_=.5/n:h===i&&l===Math.PI&&(_=-.5/n);for(let L=0;L<=n;L++){const C=L/n;d.x=-e*Math.cos(r+C*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(C+_,1-S),y.push(c++)}u.push(y)}for(let h=0;h<i;h++)for(let y=0;y<n;y++){const S=u[h][y+1],_=u[h][y],L=u[h+1][y],C=u[h+1][y+1];(h!==0||a>0)&&p.push(S,_,C),(h!==i-1||l<Math.PI)&&p.push(_,L,C)}this.setIndex(p),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cg extends Un{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new j,d=new j,f=new j;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,y=(r+1)*p+g;a.push(x,m,y),a.push(m,h,y)}this.setIndex(a),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cg(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bH extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qm,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uE extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dE extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ch={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class fE{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const hE=new fE;class Gu{constructor(e){this.manager=e!==void 0?e:hE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gu.DEFAULT_MATERIAL_NAME="__DEFAULT";class pE extends Gu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ch.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=na("img");function l(){u(),ch.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class xH extends Gu{constructor(e){super(e)}load(e,n,i,r){const s=new kt,a=new pE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Wu extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Dl=new vt,uh=new j,dh=new j;class ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vu,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;uh.setFromMatrixPosition(e.matrixWorld),n.position.copy(uh),dh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dh),n.updateMatrixWorld(),Dl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fh=new vt,ws=new j,Ul=new j;class mE extends ug{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ws.setFromMatrixPosition(e.matrixWorld),i.position.copy(ws),Ul.copy(i.position),Ul.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ul),i.updateMatrixWorld(),r.makeTranslation(-ws.x,-ws.y,-ws.z),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class yH extends Wu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dg extends sg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gE extends ug{constructor(){super(new dg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SH extends Wu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new gE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class EH extends Wu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _E extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=hh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function hh(){return performance.now()}class MH extends xr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ph(t,e,n,i){const r=bE(i);switch(n){case Bm:return t*e;case $m:return t*e;case Hm:return t*e*2;case Gm:return t*e/r.components*r.byteLength;case Ou:return t*e/r.components*r.byteLength;case Wm:return t*e*2/r.components*r.byteLength;case ku:return t*e*2/r.components*r.byteLength;case Vm:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case zu:return t*e*4/r.components*r.byteLength;case Za:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Lc:return Math.max(t,16)*Math.max(e,8)/4;case Rc:case Pc:return Math.max(t,8)*Math.max(e,8)/2;case Ic:case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case no:case Jc:case Yc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jm:case Kc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zc:case Qc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bE(t){switch(t){case fi:case Om:return{byteLength:1,components:1};case ea:case km:case ca:return{byteLength:2,components:1};case Nu:case Fu:return{byteLength:2,components:4};case _r:case Uu:case ci:return{byteLength:4,components:1};case zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xE(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
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
#endif`,EE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ME=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
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
#endif`,PE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,WE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jE=`vec3 transformedNormal = objectNormal;
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
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
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
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,xM=`
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PM=`#if defined( USE_POINTS_UV )
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
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`#ifdef USE_MORPHTARGETS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,A1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,C1=`#define DISTANCE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,F1=`#define LAMBERT
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
}`,O1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,V1=`#define NORMAL
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
}`,$1=`#define PHONG
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
}`,H1=`#define PHONG
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
}`,G1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,j1=`#define TOON
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
}`,q1=`#define TOON
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
}`,X1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,Z1=`uniform float rotation;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:yE,alphahash_pars_fragment:SE,alphamap_fragment:EE,alphamap_pars_fragment:ME,alphatest_fragment:TE,alphatest_pars_fragment:wE,aomap_fragment:AE,aomap_pars_fragment:RE,batching_pars_vertex:CE,batching_vertex:PE,begin_vertex:LE,beginnormal_vertex:IE,bsdfs:DE,iridescence_fragment:UE,bumpmap_pars_fragment:NE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:kE,clipping_planes_vertex:zE,color_fragment:BE,color_pars_fragment:VE,color_pars_vertex:$E,color_vertex:HE,common:GE,cube_uv_reflection_fragment:WE,defaultnormal_vertex:jE,displacementmap_pars_vertex:qE,displacementmap_vertex:XE,emissivemap_fragment:JE,emissivemap_pars_fragment:YE,colorspace_fragment:KE,colorspace_pars_fragment:ZE,envmap_fragment:QE,envmap_common_pars_fragment:eM,envmap_pars_fragment:tM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:hM,envmap_vertex:iM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:aM,fog_pars_fragment:oM,gradientmap_pars_fragment:lM,lightmap_pars_fragment:cM,lights_lambert_fragment:uM,lights_lambert_pars_fragment:dM,lights_pars_begin:fM,lights_toon_fragment:pM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:_M,lights_physical_fragment:vM,lights_physical_pars_fragment:bM,lights_fragment_begin:xM,lights_fragment_maps:yM,lights_fragment_end:SM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:wM,map_fragment:AM,map_pars_fragment:RM,map_particle_fragment:CM,map_particle_pars_fragment:PM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:IM,morphinstance_vertex:DM,morphcolor_vertex:UM,morphnormal_vertex:NM,morphtarget_pars_vertex:FM,morphtarget_vertex:OM,normal_fragment_begin:kM,normal_fragment_maps:zM,normal_pars_fragment:BM,normal_pars_vertex:VM,normal_vertex:$M,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:jM,iridescence_pars_fragment:qM,opaque_fragment:XM,packing:JM,premultiplied_alpha_fragment:YM,project_vertex:KM,dithering_fragment:ZM,dithering_pars_fragment:QM,roughnessmap_fragment:e1,roughnessmap_pars_fragment:t1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:r1,shadowmask_pars_fragment:s1,skinbase_vertex:a1,skinning_pars_vertex:o1,skinning_vertex:l1,skinnormal_vertex:c1,specularmap_fragment:u1,specularmap_pars_fragment:d1,tonemapping_fragment:f1,tonemapping_pars_fragment:h1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:_1,uv_vertex:v1,worldpos_vertex:b1,background_vert:x1,background_frag:y1,backgroundCube_vert:S1,backgroundCube_frag:E1,cube_vert:M1,cube_frag:T1,depth_vert:w1,depth_frag:A1,distanceRGBA_vert:R1,distanceRGBA_frag:C1,equirect_vert:P1,equirect_frag:L1,linedashed_vert:I1,linedashed_frag:D1,meshbasic_vert:U1,meshbasic_frag:N1,meshlambert_vert:F1,meshlambert_frag:O1,meshmatcap_vert:k1,meshmatcap_frag:z1,meshnormal_vert:B1,meshnormal_frag:V1,meshphong_vert:$1,meshphong_frag:H1,meshphysical_vert:G1,meshphysical_frag:W1,meshtoon_vert:j1,meshtoon_frag:q1,points_vert:X1,points_frag:J1,shadow_vert:Y1,shadow_frag:K1,sprite_vert:Z1,sprite_frag:Q1},be={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},zn={basic:{uniforms:Yt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([be.points,be.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([be.common,be.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([be.sprite,be.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Yt([be.common,be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Yt([be.lights,be.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};zn.physical={uniforms:Yt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ga={r:0,b:0,g:0},er=new jn,eT=new vt;function tT(t,e,n,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?n:e).get(_)),_}function x(S){let _=!1;const L=g(S);L===null?h(o,l):L&&L.isColor&&(h(L,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,_){const L=g(_);L&&(L.isCubeTexture||L.mapping===Vo)?(u===void 0&&(u=new $n(new fa(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ds(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),er.copy(_.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eT.makeRotationFromEuler(er)),u.material.toneMapped=et.getTransfer(L.colorSpace)!==ut,(d!==L||f!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new $n(new Ho(2,2),new hi({name:"BackgroundMaterial",uniforms:ds(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(L.colorSpace)!==ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,_){S.getRGB(Ga,rg(t)),i.buffers.color.setClear(Ga.r,Ga.g,Ga.b,_,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:x,addToRenderList:m,dispose:y}}function nT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(T,O,z,G,ee){let ae=!1;const Y=d(G,z,O);s!==Y&&(s=Y,c(s.object)),ae=p(T,G,z,ee),ae&&g(T,G,z,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(ae||a)&&(a=!1,_(T,O,z,G),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function d(T,O,z){const G=z.wireframe===!0;let ee=i[T.id];ee===void 0&&(ee={},i[T.id]=ee);let ae=ee[O.id];ae===void 0&&(ae={},ee[O.id]=ae);let Y=ae[G];return Y===void 0&&(Y=f(l()),ae[G]=Y),Y}function f(T){const O=[],z=[],G=[];for(let ee=0;ee<n;ee++)O[ee]=0,z[ee]=0,G[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:G,object:T,attributes:{},index:null}}function p(T,O,z,G){const ee=s.attributes,ae=O.attributes;let Y=0;const te=z.getAttributes();for(const X in te)if(te[X].location>=0){const ge=ee[X];let Me=ae[X];if(Me===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),ge===void 0||ge.attribute!==Me||Me&&ge.data!==Me.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function g(T,O,z,G){const ee={},ae=O.attributes;let Y=0;const te=z.getAttributes();for(const X in te)if(te[X].location>=0){let ge=ae[X];ge===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor));const Me={};Me.attribute=ge,ge&&ge.data&&(Me.data=ge.data),ee[X]=Me,Y++}s.attributes=ee,s.attributesNum=Y,s.index=G}function x(){const T=s.newAttributes;for(let O=0,z=T.length;O<z;O++)T[O]=0}function m(T){h(T,0)}function h(T,O){const z=s.newAttributes,G=s.enabledAttributes,ee=s.attributeDivisors;z[T]=1,G[T]===0&&(t.enableVertexAttribArray(T),G[T]=1),ee[T]!==O&&(t.vertexAttribDivisor(T,O),ee[T]=O)}function y(){const T=s.newAttributes,O=s.enabledAttributes;for(let z=0,G=O.length;z<G;z++)O[z]!==T[z]&&(t.disableVertexAttribArray(z),O[z]=0)}function S(T,O,z,G,ee,ae,Y){Y===!0?t.vertexAttribIPointer(T,O,z,ee,ae):t.vertexAttribPointer(T,O,z,G,ee,ae)}function _(T,O,z,G){x();const ee=G.attributes,ae=z.getAttributes(),Y=O.defaultAttributeValues;for(const te in ae){const X=ae[te];if(X.location>=0){let he=ee[te];if(he===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(he=T.instanceColor)),he!==void 0){const ge=he.normalized,Me=he.itemSize,Ie=e.get(he);if(Ie===void 0)continue;const qe=Ie.buffer,ie=Ie.type,me=Ie.bytesPerElement,_e=ie===t.INT||ie===t.UNSIGNED_INT||he.gpuType===Uu;if(he.isInterleavedBufferAttribute){const B=he.data,se=B.stride,re=he.offset;if(B.isInstancedInterleavedBuffer){for(let de=0;de<X.locationSize;de++)h(X.location+de,B.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let de=0;de<X.locationSize;de++)m(X.location+de);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let de=0;de<X.locationSize;de++)S(X.location+de,Me/X.locationSize,ie,ge,se*me,(re+Me/X.locationSize*de)*me,_e)}else{if(he.isInstancedBufferAttribute){for(let B=0;B<X.locationSize;B++)h(X.location+B,he.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let B=0;B<X.locationSize;B++)m(X.location+B);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let B=0;B<X.locationSize;B++)S(X.location+B,Me/X.locationSize,ie,ge,Me*me,Me/X.locationSize*B*me,_e)}}else if(Y!==void 0){const ge=Y[te];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(X.location,ge);break;case 3:t.vertexAttrib3fv(X.location,ge);break;case 4:t.vertexAttrib4fv(X.location,ge);break;default:t.vertexAttrib1fv(X.location,ge)}}}}y()}function L(){U();for(const T in i){const O=i[T];for(const z in O){const G=O[z];for(const ee in G)u(G[ee].object),delete G[ee];delete O[z]}delete i[T]}}function C(T){if(i[T.id]===void 0)return;const O=i[T.id];for(const z in O){const G=O[z];for(const ee in G)u(G[ee].object),delete G[ee];delete O[z]}delete i[T.id]}function R(T){for(const O in i){const z=i[O];if(z[T.id]===void 0)continue;const G=z[T.id];for(const ee in G)u(G[ee].object),delete G[ee];delete z[T.id]}}function U(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function iT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Cn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ci&&!U)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:L,maxSamples:C}}function sT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ir,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,S=y*4;let _=h.clippingState||null;l.value=_,_=u(g,f,S,p);for(let L=0;L!==S;++L)_[L]=n[L];h.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,_=p;S!==x;++S,_+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function aT(t){let e=new WeakMap;function n(a,o){return o===Mc?a.mapping=as:o===Tc&&(a.mapping=os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mc||o===Tc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hr=4,mh=[.125,.215,.35,.446,.526,.582],lr=20,Nl=new dg,gh=new Je;let Fl=null,Ol=0,kl=0,zl=!1;const rr=(1+Math.sqrt(5))/2,Or=1/rr,_h=[new j(-rr,Or,0),new j(rr,Or,0),new j(-Or,0,rr),new j(Or,0,rr),new j(0,rr,-Or),new j(0,rr,Or),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,kl),this._renderer.xr.enabled=zl,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ca,format:Cn,colorSpace:us,depthBuffer:!1},r=bh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(s)),this._blurMaterial=lT(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Nl)}_sceneToCubeUV(e,n,i,r){const o=new un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(gh),u.toneMapping=Ui,u.autoClear=!1;const p=new tg({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new $n(new fa,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(gh),x=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):y===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;Wa(r,y*S,h>2?S:0,S,S),u.setRenderTarget(r),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===as||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Nl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_h[(r-s-1)%_h.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $n(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const h=[];let y=0;for(let R=0;R<lr;++R){const U=R/x,M=Math.exp(-U*U/2);h.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const _=this._sizeLods[r],L=3*_*(r>S-Hr?r-S+Hr:0),C=4*(this._cubeSize-_);Wa(n,L,C,3*_,2*_),l.setRenderTarget(n),l.render(d,Nl)}}function oT(t){const e=[],n=[],i=[];let r=t;const s=t-Hr+1+mh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Hr?l=mh[a-t+Hr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,y=new Float32Array(x*g*p),S=new Float32Array(m*g*p),_=new Float32Array(h*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,U=C>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];y.set(M,x*g*C),S.set(f,m*g*C);const T=[C,C,C,C,C,C];_.set(T,h*g*C)}const L=new Un;L.setAttribute("position",new Wn(y,x)),L.setAttribute("uv",new Wn(S,m)),L.setAttribute("faceIndex",new Wn(_,h)),e.push(L),r>Hr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bh(t,e,n){const i=new vr(t,e,n);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lT(t,e,n){const i=new Float32Array(lr),r=new j(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function xh(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function yh(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}function cT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mc||l===Tc,u=l===as||l===os;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new vh(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new vh(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function uT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dT(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let S=0,_=y.length;S<_;S+=3){const L=y[S+0],C=y[S+1],R=y[S+2];f.push(L,C,C,R,R,L)}}else if(g!==void 0){const y=g.array;x=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const L=S+0,C=S+1,R=S+2;f.push(L,C,C,R,R,L)}}else return;const m=new(Jm(f)?ig:ng)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function fT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*a,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let h=0;for(let y=0;y<g;y++)h+=p[y]*x[y];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pT(t,e,n){const i=new WeakMap,r=new dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const C=new Float32Array(_*L*4*d),R=new Km(C,_,L,d);R.type=ci,R.needsUpdate=!0;const U=S*4;for(let T=0;T<d;T++){const O=m[T],z=h[T],G=y[T],ee=_*L*4*T;for(let ae=0;ae<O.count;ae++){const Y=ae*U;p===!0&&(r.fromBufferAttribute(O,ae),C[ee+Y+0]=r.x,C[ee+Y+1]=r.y,C[ee+Y+2]=r.z,C[ee+Y+3]=0),g===!0&&(r.fromBufferAttribute(z,ae),C[ee+Y+4]=r.x,C[ee+Y+5]=r.y,C[ee+Y+6]=r.z,C[ee+Y+7]=0),x===!0&&(r.fromBufferAttribute(G,ae),C[ee+Y+8]=r.x,C[ee+Y+9]=r.y,C[ee+Y+10]=r.z,C[ee+Y+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new Ye(_,L)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function mT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const hg=new kt,Sh=new og(1,1),pg=new Km,mg=new HS,gg=new ag,Eh=[],Mh=[],Th=new Float32Array(16),wh=new Float32Array(9),Ah=new Float32Array(4);function ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Eh[r];if(s===void 0&&(s=new Float32Array(r),Eh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Go(t,e){let n=Mh[e];n===void 0&&(n=new Int32Array(e),Mh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function xT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;Ah.set(i),t.uniformMatrix2fv(this.addr,!1,Ah),It(n,i)}}function yT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;wh.set(i),t.uniformMatrix3fv(this.addr,!1,wh),It(n,i)}}function ST(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;Th.set(i),t.uniformMatrix4fv(this.addr,!1,Th),It(n,i)}}function ET(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function LT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sh.compareFunction=Xm,s=Sh):s=hg,n.setTexture2D(e||s,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mg,r)}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gg,r)}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pg,r)}function NT(t){switch(t){case 5126:return gT;case 35664:return _T;case 35665:return vT;case 35666:return bT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return ET;case 35667:case 35671:return MT;case 35668:case 35672:return TT;case 35669:case 35673:return wT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}function FT(t,e){t.uniform1fv(this.addr,e)}function OT(t,e){const n=ms(e,this.size,2);t.uniform2fv(this.addr,n)}function kT(t,e){const n=ms(e,this.size,3);t.uniform3fv(this.addr,n)}function zT(t,e){const n=ms(e,this.size,4);t.uniform4fv(this.addr,n)}function BT(t,e){const n=ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VT(t,e){const n=ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HT(t,e){t.uniform1iv(this.addr,e)}function GT(t,e){t.uniform2iv(this.addr,e)}function WT(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function qT(t,e){t.uniform1uiv(this.addr,e)}function XT(t,e){t.uniform2uiv(this.addr,e)}function JT(t,e){t.uniform3uiv(this.addr,e)}function YT(t,e){t.uniform4uiv(this.addr,e)}function KT(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||hg,s[a])}function ZT(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||mg,s[a])}function QT(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||gg,s[a])}function ew(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||pg,s[a])}function tw(t){switch(t){case 5126:return FT;case 35664:return OT;case 35665:return kT;case 35666:return zT;case 35674:return BT;case 35675:return VT;case 35676:return $T;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return jT;case 5125:return qT;case 36294:return XT;case 36295:return JT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return ew}}class nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NT(n.type)}}class iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tw(n.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Rh(t,e){t.seq.push(e),t.map[e.id]=e}function sw(t,e,n){const i=t.name,r=i.length;for(Bl.lastIndex=0;;){const s=Bl.exec(i),a=Bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rh(n,c===void 0?new nw(o,t,e):new iw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new rw(o),Rh(n,d)),n=d}}}class io{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);sw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ch(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aw=37297;let ow=0;function lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ph=new Ge;function cw(t){et._getMatrix(Ph,et.workingColorSpace,t);const e=`mat3( ${Ph.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case _o:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Lh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lw(t.getShaderSource(e),a)}else return r}function uw(t,e){const n=cw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function dw(t,e){let n;switch(e){case eS:n="Linear";break;case tS:n="Reinhard";break;case nS:n="Cineon";break;case iS:n="ACESFilmic";break;case sS:n="AgX";break;case aS:n="Neutral";break;case rS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ja=new j;function fw(){et.getLuminanceCoefficients(ja);const t=ja.x.toFixed(4),e=ja.y.toFixed(4),n=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function pw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rs(t){return t!==""}function Ih(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(t){return t.replace(gw,vw)}const _w=new Map;function vw(t,e){let n=We[e];if(n===void 0){const i=_w.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(n)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(t){return t.replace(bw,xw)}function xw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Sw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ew(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function Mw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Nm:e="ENVMAP_BLENDING_MULTIPLY";break;case Zy:e="ENVMAP_BLENDING_MIX";break;case Qy:e="ENVMAP_BLENDING_ADD";break}return e}function Tw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ww(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=yw(n),c=Sw(n),u=Ew(n),d=Mw(n),f=Tw(n),p=hw(n),g=pw(s),x=r.createProgram();let m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rs).join(`
`),h.length>0&&(h+=`
`)):(m=[Nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),h=[Nh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?We.tonemapping_pars_fragment:"",n.toneMapping!==Ui?dw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,uw("linearToOutputTexel",n.outputColorSpace),fw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),a=tu(a),a=Ih(a,n),a=Dh(a,n),o=tu(o),o=Ih(o,n),o=Dh(o,n),a=Uh(a),o=Uh(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+m+a,_=y+h+o,L=Ch(r,r.VERTEX_SHADER,S),C=Ch(r,r.FRAGMENT_SHADER,_);r.attachShader(x,L),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(O){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),G=r.getShaderInfoLog(L).trim(),ee=r.getShaderInfoLog(C).trim();let ae=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,C);else{const te=Lh(r,L,"vertex"),X=Lh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+z+`
`+te+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||ee==="")&&(Y=!1);Y&&(O.diagnostics={runnable:ae,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:ee,prefix:h}})}r.deleteShader(L),r.deleteShader(C),U=new io(r,x),M=mw(r,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,aw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ow++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=C,this}let Aw=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Cw(e),n.set(e,i)),i}}class Cw{constructor(e){this.id=Aw++,this.code=e,this.usedTimes=0}}function Pw(t,e,n,i,r,s,a){const o=new Qm,l=new Rw,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,O,z,G){const ee=z.fog,ae=G.geometry,Y=M.isMeshStandardMaterial?z.environment:null,te=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),X=te&&te.mapping===Vo?te.image.height:null,he=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ge=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Me=ge!==void 0?ge.length:0;let Ie=0;ae.morphAttributes.position!==void 0&&(Ie=1),ae.morphAttributes.normal!==void 0&&(Ie=2),ae.morphAttributes.color!==void 0&&(Ie=3);let qe,ie,me,_e;if(he){const lt=zn[he];qe=lt.vertexShader,ie=lt.fragmentShader}else qe=M.vertexShader,ie=M.fragmentShader,l.update(M),me=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const B=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),re=G.isInstancedMesh===!0,de=G.isBatchedMesh===!0,Le=!!M.map,Pe=!!M.matcap,D=!!te,b=!!M.aoMap,q=!!M.lightMap,Q=!!M.bumpMap,J=!!M.normalMap,w=!!M.displacementMap,I=!!M.emissiveMap,k=!!M.metalnessMap,E=!!M.roughnessMap,v=M.anisotropy>0,F=M.clearcoat>0,P=M.dispersion>0,N=M.iridescence>0,V=M.sheen>0,oe=M.transmission>0,le=v&&!!M.anisotropyMap,fe=F&&!!M.clearcoatMap,De=F&&!!M.clearcoatNormalMap,ue=F&&!!M.clearcoatRoughnessMap,ve=N&&!!M.iridescenceMap,Re=N&&!!M.iridescenceThicknessMap,Fe=V&&!!M.sheenColorMap,we=V&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Oe=!!M.specularColorMap,ot=!!M.specularIntensityMap,$=oe&&!!M.transmissionMap,xe=oe&&!!M.thicknessMap,ne=!!M.gradientMap,ce=!!M.alphaMap,Te=M.alphaTest>0,Se=!!M.alphaHash,He=!!M.extensions;let bt=Ui;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(bt=t.toneMapping);const Bt={shaderID:he,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:ie,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:de,batchingColor:de&&G._colorsTexture!==null,instancing:re,instancingColor:re&&G.instanceColor!==null,instancingMorph:re&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:us,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:Pe,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:q,bumpMap:Q,normalMap:J,displacementMap:f&&w,emissiveMap:I,normalMapObjectSpace:J&&M.normalMapType===uS,normalMapTangentSpace:J&&M.normalMapType===qm,metalnessMap:k,roughnessMap:E,anisotropy:v,anisotropyMap:le,clearcoat:F,clearcoatMap:fe,clearcoatNormalMap:De,clearcoatRoughnessMap:ue,dispersion:P,iridescence:N,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:V,sheenColorMap:Fe,sheenRoughnessMap:we,specularMap:ze,specularColorMap:Oe,specularIntensityMap:ot,transmission:oe,transmissionMap:$,thicknessMap:xe,gradientMap:ne,opaque:M.transparent===!1&&M.blending===Yr&&M.alphaToCoverage===!1,alphaMap:ce,alphaTest:Te,alphaHash:Se,combine:M.combine,mapUv:Le&&x(M.map.channel),aoMapUv:b&&x(M.aoMap.channel),lightMapUv:q&&x(M.lightMap.channel),bumpMapUv:Q&&x(M.bumpMap.channel),normalMapUv:J&&x(M.normalMap.channel),displacementMapUv:w&&x(M.displacementMap.channel),emissiveMapUv:I&&x(M.emissiveMap.channel),metalnessMapUv:k&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:le&&x(M.anisotropyMap.channel),clearcoatMapUv:fe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(M.sheenRoughnessMap.channel),specularMapUv:ze&&x(M.specularMap.channel),specularColorMapUv:Oe&&x(M.specularColorMap.channel),specularIntensityMapUv:ot&&x(M.specularIntensityMap.channel),transmissionMapUv:$&&x(M.transmissionMap.channel),thicknessMapUv:xe&&x(M.thicknessMap.channel),alphaMapUv:ce&&x(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(J||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ae.attributes.uv&&(Le||ce),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:G.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:bt,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:I&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&M.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)T.push(O),T.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(y(T,M),S(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function S(M,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const T=g[M.type];let O;if(T){const z=zn[T];O=tE.clone(z.uniforms)}else O=M.uniforms;return O}function L(M,T){let O;for(let z=0,G=u.length;z<G;z++){const ee=u[z];if(ee.cacheKey===T){O=ee,++O.usedTimes;break}}return O===void 0&&(O=new ww(t,T,M,s),u.push(O)),O}function C(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:L,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function Lw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Iw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Oh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,g,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function o(d,f,p,g,x,m){const h=a(d,f,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,x,m){const h=a(d,f,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||Iw),i.length>1&&i.sort(f||Fh),r.length>1&&r.sort(f||Fh)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Dw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Oh,t.set(i,[a])):r>=s.length?(a=new Oh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Je};break;case"SpotLight":n={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function Nw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Fw=0;function Ow(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kw(t){const e=new Uw,n=Nw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new vt,a=new vt;function o(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,y=0,S=0,_=0,L=0,C=0,R=0;c.sort(Ow);for(let M=0,T=c.length;M<T;M++){const O=c[M],z=O.color,G=O.intensity,ee=O.distance,ae=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=z.r*G,d+=z.g*G,f+=z.b*G;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],G);R++}else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const te=O.shadow,X=n.get(O);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=O.shadow.matrix,y++}i.directional[p]=Y,p++}else if(O.isSpotLight){const Y=e.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(z).multiplyScalar(G),Y.distance=ee,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[x]=Y;const te=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,te.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[x]=te.matrix,O.castShadow){const X=n.get(O);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=ae,_++}x++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(z).multiplyScalar(G),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=Y,m++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const te=O.shadow,X=n.get(O);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=O.shadow.matrix,S++}i.point[g]=Y,g++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(G),Y.groundColor.copy(O.groundColor).multiplyScalar(G),i.hemi[h]=Y,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==y||U.numPointShadows!==S||U.numSpotShadows!==_||U.numSpotMaps!==L||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=y,U.numPointShadows=S,U.numSpotShadows=_,U.numSpotMaps=L,U.numLightProbes=R,i.version=Fw++)}function l(c,u){let d=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const S=c[h];if(S.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(S.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function kh(t){const e=new kw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function zw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new kh(t),e.set(r,[o])):s>=a.length?(o=new kh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vw=`uniform sampler2D shadow_pass;
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
}`;function $w(t,e,n){let i=new Vu;const r=new Ye,s=new Ye,a=new dt,o=new uE({depthPacking:cS}),l=new dE,c={},u=n.maxTextureSize,d={[Oi]:rn,[rn]:Oi,[Bn]:Bn},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Bw,fragmentShader:Vw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let h=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==ii&&this.type===ii,ee=h===ii&&this.type!==ii;for(let ae=0,Y=C.length;ae<Y;ae++){const te=C[ae],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const he=X.getFrameExtents();if(r.multiply(he),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,X.mapSize.y=s.y)),X.map===null||G===!0||ee===!0){const Me=this.type!==ii?{minFilter:fn,magFilter:fn}:{};X.map!==null&&X.map.dispose(),X.map=new vr(r.x,r.y,Me),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const ge=X.getViewportCount();for(let Me=0;Me<ge;Me++){const Ie=X.getViewport(Me);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),z.viewport(a),X.updateMatrices(te,Me),i=X.getFrustum(),_(R,U,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===ii&&y(X,U),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(M,T,O)};function y(C,R){const U=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,U,f,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,U,p,x,null)}function S(C,R,U,M){let T=null;const O=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)T=O;else if(T=U.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=T.uuid,G=R.uuid;let ee=c[z];ee===void 0&&(ee={},c[z]=ee);let ae=ee[G];ae===void 0&&(ae=T.clone(),ee[G]=ae,R.addEventListener("dispose",L)),T=ae}if(T.visible=R.visible,T.wireframe=R.wireframe,M===ii?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:d[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=t.properties.get(T);z.light=U}return T}function _(C,R,U,M,T){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ii)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const G=e.update(C),ee=C.material;if(Array.isArray(ee)){const ae=G.groups;for(let Y=0,te=ae.length;Y<te;Y++){const X=ae[Y],he=ee[X.materialIndex];if(he&&he.visible){const ge=S(C,he,M,T);C.onBeforeShadow(t,C,R,U,G,ge,X),t.renderBufferDirect(U,null,G,ge,C,X),C.onAfterShadow(t,C,R,U,G,ge,X)}}}else if(ee.visible){const ae=S(C,ee,M,T);C.onBeforeShadow(t,C,R,U,G,ae,null),t.renderBufferDirect(U,null,G,ae,C,null),C.onAfterShadow(t,C,R,U,G,ae,null)}}const z=C.children;for(let G=0,ee=z.length;G<ee;G++)_(z[G],R,U,M,T)}function L(C){C.target.removeEventListener("dispose",L);for(const U in c){const M=c[U],T=C.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const Hw={[_c]:vc,[bc]:Sc,[xc]:Ec,[ss]:yc,[vc]:_c,[Sc]:bc,[Ec]:xc,[yc]:ss};function Gw(t,e){function n(){let $=!1;const xe=new dt;let ne=null;const ce=new dt(0,0,0,0);return{setMask:function(Te){ne!==Te&&!$&&(t.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){$=Te},setClear:function(Te,Se,He,bt,Bt){Bt===!0&&(Te*=bt,Se*=bt,He*=bt),xe.set(Te,Se,He,bt),ce.equals(xe)===!1&&(t.clearColor(Te,Se,He,bt),ce.copy(xe))},reset:function(){$=!1,ne=null,ce.set(-1,0,0,0)}}}function i(){let $=!1,xe=!1,ne=null,ce=null,Te=null;return{setReversed:function(Se){if(xe!==Se){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const bt=Te;Te=null,this.setClear(bt)}xe=Se},getReversed:function(){return xe},setTest:function(Se){Se?B(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(Se){ne!==Se&&!$&&(t.depthMask(Se),ne=Se)},setFunc:function(Se){if(xe&&(Se=Hw[Se]),ce!==Se){switch(Se){case _c:t.depthFunc(t.NEVER);break;case vc:t.depthFunc(t.ALWAYS);break;case bc:t.depthFunc(t.LESS);break;case ss:t.depthFunc(t.LEQUAL);break;case xc:t.depthFunc(t.EQUAL);break;case yc:t.depthFunc(t.GEQUAL);break;case Sc:t.depthFunc(t.GREATER);break;case Ec:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Se}},setLocked:function(Se){$=Se},setClear:function(Se){Te!==Se&&(xe&&(Se=1-Se),t.clearDepth(Se),Te=Se)},reset:function(){$=!1,ne=null,ce=null,Te=null,xe=!1}}}function r(){let $=!1,xe=null,ne=null,ce=null,Te=null,Se=null,He=null,bt=null,Bt=null;return{setTest:function(lt){$||(lt?B(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(lt){xe!==lt&&!$&&(t.stencilMask(lt),xe=lt)},setFunc:function(lt,Sn,qn){(ne!==lt||ce!==Sn||Te!==qn)&&(t.stencilFunc(lt,Sn,qn),ne=lt,ce=Sn,Te=qn)},setOp:function(lt,Sn,qn){(Se!==lt||He!==Sn||bt!==qn)&&(t.stencilOp(lt,Sn,qn),Se=lt,He=Sn,bt=qn)},setLocked:function(lt){$=lt},setClear:function(lt){Bt!==lt&&(t.clearStencil(lt),Bt=lt)},reset:function(){$=!1,xe=null,ne=null,ce=null,Te=null,Se=null,He=null,bt=null,Bt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,y=null,S=null,_=null,L=null,C=null,R=new Je(0,0,0),U=0,M=!1,T=null,O=null,z=null,G=null,ee=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,te=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=te>=2);let he=null,ge={};const Me=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),qe=new dt().fromArray(Me),ie=new dt().fromArray(Ie);function me($,xe,ne,ce){const Te=new Uint8Array(4),Se=t.createTexture();t.bindTexture($,Se),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<ne;He++)$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(xe+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Se}const _e={};_e[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),B(t.DEPTH_TEST),a.setFunc(ss),Q(!1),J(Ff),B(t.CULL_FACE),b(Di);function B($){u[$]!==!0&&(t.enable($),u[$]=!0)}function se($){u[$]!==!1&&(t.disable($),u[$]=!1)}function re($,xe){return d[$]!==xe?(t.bindFramebuffer($,xe),d[$]=xe,$===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),$===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function de($,xe){let ne=p,ce=!1;if($){ne=f.get(xe),ne===void 0&&(ne=[],f.set(xe,ne));const Te=$.textures;if(ne.length!==Te.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,He=Te.length;Se<He;Se++)ne[Se]=t.COLOR_ATTACHMENT0+Se;ne.length=Te.length,ce=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ce=!0);ce&&t.drawBuffers(ne)}function Le($){return g!==$?(t.useProgram($),g=$,!0):!1}const Pe={[or]:t.FUNC_ADD,[Ny]:t.FUNC_SUBTRACT,[Fy]:t.FUNC_REVERSE_SUBTRACT};Pe[Oy]=t.MIN,Pe[ky]=t.MAX;const D={[zy]:t.ZERO,[By]:t.ONE,[Vy]:t.SRC_COLOR,[mc]:t.SRC_ALPHA,[qy]:t.SRC_ALPHA_SATURATE,[Wy]:t.DST_COLOR,[Hy]:t.DST_ALPHA,[$y]:t.ONE_MINUS_SRC_COLOR,[gc]:t.ONE_MINUS_SRC_ALPHA,[jy]:t.ONE_MINUS_DST_COLOR,[Gy]:t.ONE_MINUS_DST_ALPHA,[Xy]:t.CONSTANT_COLOR,[Jy]:t.ONE_MINUS_CONSTANT_COLOR,[Yy]:t.CONSTANT_ALPHA,[Ky]:t.ONE_MINUS_CONSTANT_ALPHA};function b($,xe,ne,ce,Te,Se,He,bt,Bt,lt){if($===Di){x===!0&&(se(t.BLEND),x=!1);return}if(x===!1&&(B(t.BLEND),x=!0),$!==Uy){if($!==m||lt!==M){if((h!==or||_!==or)&&(t.blendEquation(t.FUNC_ADD),h=or,_=or),lt)switch($){case Yr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Of:t.blendFunc(t.ONE,t.ONE);break;case kf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Yr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Of:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case kf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}y=null,S=null,L=null,C=null,R.set(0,0,0),U=0,m=$,M=lt}return}Te=Te||xe,Se=Se||ne,He=He||ce,(xe!==h||Te!==_)&&(t.blendEquationSeparate(Pe[xe],Pe[Te]),h=xe,_=Te),(ne!==y||ce!==S||Se!==L||He!==C)&&(t.blendFuncSeparate(D[ne],D[ce],D[Se],D[He]),y=ne,S=ce,L=Se,C=He),(bt.equals(R)===!1||Bt!==U)&&(t.blendColor(bt.r,bt.g,bt.b,Bt),R.copy(bt),U=Bt),m=$,M=!1}function q($,xe){$.side===Bn?se(t.CULL_FACE):B(t.CULL_FACE);let ne=$.side===rn;xe&&(ne=!ne),Q(ne),$.blending===Yr&&$.transparent===!1?b(Di):b($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),s.setMask($.colorWrite);const ce=$.stencilWrite;o.setTest(ce),ce&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),I($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q($){T!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),T=$)}function J($){$!==Ly?(B(t.CULL_FACE),$!==O&&($===Ff?t.cullFace(t.BACK):$===Iy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),O=$}function w($){$!==z&&(Y&&t.lineWidth($),z=$)}function I($,xe,ne){$?(B(t.POLYGON_OFFSET_FILL),(G!==xe||ee!==ne)&&(t.polygonOffset(xe,ne),G=xe,ee=ne)):se(t.POLYGON_OFFSET_FILL)}function k($){$?B(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function E($){$===void 0&&($=t.TEXTURE0+ae-1),he!==$&&(t.activeTexture($),he=$)}function v($,xe,ne){ne===void 0&&(he===null?ne=t.TEXTURE0+ae-1:ne=he);let ce=ge[ne];ce===void 0&&(ce={type:void 0,texture:void 0},ge[ne]=ce),(ce.type!==$||ce.texture!==xe)&&(he!==ne&&(t.activeTexture(ne),he=ne),t.bindTexture($,xe||_e[$]),ce.type=$,ce.texture=xe)}function F(){const $=ge[he];$!==void 0&&$.type!==void 0&&(t.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function P(){try{t.compressedTexImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function N(){try{t.compressedTexImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function V(){try{t.texSubImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Fe($){qe.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),qe.copy($))}function we($){ie.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),ie.copy($))}function ze($,xe){let ne=c.get(xe);ne===void 0&&(ne=new WeakMap,c.set(xe,ne));let ce=ne.get($);ce===void 0&&(ce=t.getUniformBlockIndex(xe,$.name),ne.set($,ce))}function Oe($,xe){const ce=c.get(xe).get($);l.get(xe)!==ce&&(t.uniformBlockBinding(xe,ce,$.__bindingPointIndex),l.set(xe,ce))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},he=null,ge={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,y=null,S=null,_=null,L=null,C=null,R=new Je(0,0,0),U=0,M=!1,T=null,O=null,z=null,G=null,ee=null,qe.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:B,disable:se,bindFramebuffer:re,drawBuffers:de,useProgram:Le,setBlending:b,setMaterial:q,setFlipSided:Q,setCullFace:J,setLineWidth:w,setPolygonOffset:I,setScissorTest:k,activeTexture:E,bindTexture:v,unbindTexture:F,compressedTexImage2D:P,compressedTexImage3D:N,texImage2D:ve,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:Oe,texStorage2D:De,texStorage3D:ue,texSubImage2D:V,texSubImage3D:oe,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Fe,viewport:we,reset:ot}}function Ww(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):na("canvas")}function x(E,v,F){let P=1;const N=k(E);if((N.width>F||N.height>F)&&(P=F/Math.max(N.width,N.height)),P<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(P*N.width),oe=Math.floor(P*N.height);d===void 0&&(d=g(V,oe));const le=v?g(V,oe):d;return le.width=V,le.height=oe,le.getContext("2d").drawImage(E,0,0,V,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+V+"x"+oe+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){t.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(E,v,F,P,N=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=v;if(v===t.RED&&(F===t.FLOAT&&(V=t.R32F),F===t.HALF_FLOAT&&(V=t.R16F),F===t.UNSIGNED_BYTE&&(V=t.R8)),v===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(V=t.R8UI),F===t.UNSIGNED_SHORT&&(V=t.R16UI),F===t.UNSIGNED_INT&&(V=t.R32UI),F===t.BYTE&&(V=t.R8I),F===t.SHORT&&(V=t.R16I),F===t.INT&&(V=t.R32I)),v===t.RG&&(F===t.FLOAT&&(V=t.RG32F),F===t.HALF_FLOAT&&(V=t.RG16F),F===t.UNSIGNED_BYTE&&(V=t.RG8)),v===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(V=t.RG8UI),F===t.UNSIGNED_SHORT&&(V=t.RG16UI),F===t.UNSIGNED_INT&&(V=t.RG32UI),F===t.BYTE&&(V=t.RG8I),F===t.SHORT&&(V=t.RG16I),F===t.INT&&(V=t.RG32I)),v===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(V=t.RGB8UI),F===t.UNSIGNED_SHORT&&(V=t.RGB16UI),F===t.UNSIGNED_INT&&(V=t.RGB32UI),F===t.BYTE&&(V=t.RGB8I),F===t.SHORT&&(V=t.RGB16I),F===t.INT&&(V=t.RGB32I)),v===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),F===t.UNSIGNED_INT&&(V=t.RGBA32UI),F===t.BYTE&&(V=t.RGBA8I),F===t.SHORT&&(V=t.RGBA16I),F===t.INT&&(V=t.RGBA32I)),v===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),v===t.RGBA){const oe=N?_o:et.getTransfer(P);F===t.FLOAT&&(V=t.RGBA32F),F===t.HALF_FLOAT&&(V=t.RGBA16F),F===t.UNSIGNED_BYTE&&(V=oe===ut?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function _(E,v){let F;return E?v===null||v===_r||v===ls?F=t.DEPTH24_STENCIL8:v===ci?F=t.DEPTH32F_STENCIL8:v===ea&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_r||v===ls?F=t.DEPTH_COMPONENT24:v===ci?F=t.DEPTH_COMPONENT32F:v===ea&&(F=t.DEPTH_COMPONENT16),F}function L(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==fn&&E.minFilter!==Vn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){const v=E.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&u.delete(v)}function R(E){const v=E.target;v.removeEventListener("dispose",R),T(v)}function U(E){const v=i.get(E);if(v.__webglInit===void 0)return;const F=E.source,P=f.get(F);if(P){const N=P[v.__cacheKey];N.usedTimes--,N.usedTimes===0&&M(E),Object.keys(P).length===0&&f.delete(F)}i.remove(E)}function M(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const F=E.source,P=f.get(F);delete P[v.__cacheKey],a.memory.textures--}function T(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let N=0;N<v.__webglFramebuffer[P].length;N++)t.deleteFramebuffer(v.__webglFramebuffer[P][N]);else t.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)t.deleteFramebuffer(v.__webglFramebuffer[P]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=E.textures;for(let P=0,N=F.length;P<N;P++){const V=i.get(F[P]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(F[P])}i.remove(E)}let O=0;function z(){O=0}function G(){const E=O;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),O+=1,E}function ee(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ae(E,v){const F=i.get(E);if(E.isVideoTexture&&w(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const P=E.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(F,E,v);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+v)}function Y(E,v){const F=i.get(E);if(E.version>0&&F.__version!==E.version){ie(F,E,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+v)}function te(E,v){const F=i.get(E);if(E.version>0&&F.__version!==E.version){ie(F,E,v);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+v)}function X(E,v){const F=i.get(E);if(E.version>0&&F.__version!==E.version){me(F,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+v)}const he={[wc]:t.REPEAT,[ur]:t.CLAMP_TO_EDGE,[Ac]:t.MIRRORED_REPEAT},ge={[fn]:t.NEAREST,[oS]:t.NEAREST_MIPMAP_NEAREST,[Ea]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[fl]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},Me={[dS]:t.NEVER,[_S]:t.ALWAYS,[fS]:t.LESS,[Xm]:t.LEQUAL,[hS]:t.EQUAL,[gS]:t.GEQUAL,[pS]:t.GREATER,[mS]:t.NOTEQUAL};function Ie(E,v){if(v.type===ci&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vn||v.magFilter===fl||v.magFilter===Ea||v.magFilter===dr||v.minFilter===Vn||v.minFilter===fl||v.minFilter===Ea||v.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,he[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,he[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,he[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ge[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==Ea&&v.minFilter!==dr||v.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function qe(E,v){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const P=v.source;let N=f.get(P);N===void 0&&(N={},f.set(P,N));const V=ee(v);if(V!==E.__cacheKey){N[V]===void 0&&(N[V]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),N[V].usedTimes++;const oe=N[E.__cacheKey];oe!==void 0&&(N[E.__cacheKey].usedTimes--,oe.usedTimes===0&&M(v)),E.__cacheKey=V,E.__webglTexture=N[V].texture}return F}function ie(E,v,F){let P=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(P=t.TEXTURE_3D);const N=qe(E,v),V=v.source;n.bindTexture(P,E.__webglTexture,t.TEXTURE0+F);const oe=i.get(V);if(V.version!==oe.__version||N===!0){n.activeTexture(t.TEXTURE0+F);const le=et.getPrimaries(et.workingColorSpace),fe=v.colorSpace===Ci?null:et.getPrimaries(v.colorSpace),De=v.colorSpace===Ci||le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ue=x(v.image,!1,r.maxTextureSize);ue=I(v,ue);const ve=s.convert(v.format,v.colorSpace),Re=s.convert(v.type);let Fe=S(v.internalFormat,ve,Re,v.colorSpace,v.isVideoTexture);Ie(P,v);let we;const ze=v.mipmaps,Oe=v.isVideoTexture!==!0,ot=oe.__version===void 0||N===!0,$=V.dataReady,xe=L(v,ue);if(v.isDepthTexture)Fe=_(v.format===cs,v.type),ot&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Fe,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Fe,ue.width,ue.height,0,ve,Re,null));else if(v.isDataTexture)if(ze.length>0){Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,xe,Fe,ze[0].width,ze[0].height);for(let ne=0,ce=ze.length;ne<ce;ne++)we=ze[ne],Oe?$&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,we.width,we.height,ve,Re,we.data):n.texImage2D(t.TEXTURE_2D,ne,Fe,we.width,we.height,0,ve,Re,we.data);v.generateMipmaps=!1}else Oe?(ot&&n.texStorage2D(t.TEXTURE_2D,xe,Fe,ue.width,ue.height),$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Re,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,ue.width,ue.height,0,ve,Re,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Fe,ze[0].width,ze[0].height,ue.depth);for(let ne=0,ce=ze.length;ne<ce;ne++)if(we=ze[ne],v.format!==Cn)if(ve!==null)if(Oe){if($)if(v.layerUpdates.size>0){const Te=ph(we.width,we.height,v.format,v.type);for(const Se of v.layerUpdates){const He=we.data.subarray(Se*Te/we.data.BYTES_PER_ELEMENT,(Se+1)*Te/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Se,we.width,we.height,1,ve,He)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,ue.depth,ve,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Fe,we.width,we.height,ue.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?$&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,we.width,we.height,ue.depth,ve,Re,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Fe,we.width,we.height,ue.depth,0,ve,Re,we.data)}else{Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,xe,Fe,ze[0].width,ze[0].height);for(let ne=0,ce=ze.length;ne<ce;ne++)we=ze[ne],v.format!==Cn?ve!==null?Oe?$&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,we.width,we.height,ve,we.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?$&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,we.width,we.height,ve,Re,we.data):n.texImage2D(t.TEXTURE_2D,ne,Fe,we.width,we.height,0,ve,Re,we.data)}else if(v.isDataArrayTexture)if(Oe){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Fe,ue.width,ue.height,ue.depth),$)if(v.layerUpdates.size>0){const ne=ph(ue.width,ue.height,v.format,v.type);for(const ce of v.layerUpdates){const Te=ue.data.subarray(ce*ne/ue.data.BYTES_PER_ELEMENT,(ce+1)*ne/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,ve,Re,Te)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Re,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,ue.width,ue.height,ue.depth,0,ve,Re,ue.data);else if(v.isData3DTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_3D,xe,Fe,ue.width,ue.height,ue.depth),$&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Re,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,ue.width,ue.height,ue.depth,0,ve,Re,ue.data);else if(v.isFramebufferTexture){if(ot)if(Oe)n.texStorage2D(t.TEXTURE_2D,xe,Fe,ue.width,ue.height);else{let ne=ue.width,ce=ue.height;for(let Te=0;Te<xe;Te++)n.texImage2D(t.TEXTURE_2D,Te,Fe,ne,ce,0,ve,Re,null),ne>>=1,ce>>=1}}else if(ze.length>0){if(Oe&&ot){const ne=k(ze[0]);n.texStorage2D(t.TEXTURE_2D,xe,Fe,ne.width,ne.height)}for(let ne=0,ce=ze.length;ne<ce;ne++)we=ze[ne],Oe?$&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ve,Re,we):n.texImage2D(t.TEXTURE_2D,ne,Fe,ve,Re,we);v.generateMipmaps=!1}else if(Oe){if(ot){const ne=k(ue);n.texStorage2D(t.TEXTURE_2D,xe,Fe,ne.width,ne.height)}$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Re,ue)}else n.texImage2D(t.TEXTURE_2D,0,Fe,ve,Re,ue);m(v)&&h(P),oe.__version=V.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function me(E,v,F){if(v.image.length!==6)return;const P=qe(E,v),N=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+F);const V=i.get(N);if(N.version!==V.__version||P===!0){n.activeTexture(t.TEXTURE0+F);const oe=et.getPrimaries(et.workingColorSpace),le=v.colorSpace===Ci?null:et.getPrimaries(v.colorSpace),fe=v.colorSpace===Ci||oe===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!De&&!ue?ve[ce]=x(v.image[ce],!0,r.maxCubemapSize):ve[ce]=ue?v.image[ce].image:v.image[ce],ve[ce]=I(v,ve[ce]);const Re=ve[0],Fe=s.convert(v.format,v.colorSpace),we=s.convert(v.type),ze=S(v.internalFormat,Fe,we,v.colorSpace),Oe=v.isVideoTexture!==!0,ot=V.__version===void 0||P===!0,$=N.dataReady;let xe=L(v,Re);Ie(t.TEXTURE_CUBE_MAP,v);let ne;if(De){Oe&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ze,Re.width,Re.height);for(let ce=0;ce<6;ce++){ne=ve[ce].mipmaps;for(let Te=0;Te<ne.length;Te++){const Se=ne[Te];v.format!==Cn?Fe!==null?Oe?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,Se.width,Se.height,Fe,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,Se.width,Se.height,Fe,we,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,ze,Se.width,Se.height,0,Fe,we,Se.data)}}}else{if(ne=v.mipmaps,Oe&&ot){ne.length>0&&xe++;const ce=k(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){Oe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,Fe,we,ve[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,ve[ce].width,ve[ce].height,0,Fe,we,ve[ce].data);for(let Te=0;Te<ne.length;Te++){const He=ne[Te].image[ce].image;Oe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,He.width,He.height,Fe,we,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,ze,He.width,He.height,0,Fe,we,He.data)}}else{Oe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Fe,we,ve[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,Fe,we,ve[ce]);for(let Te=0;Te<ne.length;Te++){const Se=ne[Te];Oe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,Fe,we,Se.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,ze,Fe,we,Se.image[ce])}}}m(v)&&h(t.TEXTURE_CUBE_MAP),V.__version=N.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,F,P,N,V){const oe=s.convert(F.format,F.colorSpace),le=s.convert(F.type),fe=S(F.internalFormat,oe,le,F.colorSpace),De=i.get(v),ue=i.get(F);if(ue.__renderTarget=v,!De.__hasExternalTextures){const ve=Math.max(1,v.width>>V),Re=Math.max(1,v.height>>V);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,V,fe,ve,Re,v.depth,0,oe,le,null):n.texImage2D(N,V,fe,ve,Re,0,oe,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),J(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,N,ue.__webglTexture,0,Q(v)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,N,ue.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(E,v,F){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){const P=v.depthTexture,N=P&&P.isDepthTexture?P.type:null,V=_(v.stencilBuffer,N),oe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Q(v);J(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,V,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,V,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,V,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,E)}else{const P=v.textures;for(let N=0;N<P.length;N++){const V=P[N],oe=s.convert(V.format,V.colorSpace),le=s.convert(V.type),fe=S(V.internalFormat,oe,le,V.colorSpace),De=Q(v);F&&J(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,fe,v.width,v.height):J(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,fe,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,fe,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const P=i.get(v.depthTexture);P.__renderTarget=v,(!P.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ae(v.depthTexture,0);const N=P.__webglTexture,V=Q(v);if(v.depthTexture.format===Kr)J(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,N,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,N,0);else if(v.depthTexture.format===cs)J(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,N,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function re(E){const v=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const P=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),P){const N=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,P.removeEventListener("dispose",N)};P.addEventListener("dispose",N),v.__depthDisposeCallback=N}v.__boundDepthTexture=P}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,E)}else if(F){v.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[P]),v.__webglDepthbuffer[P]===void 0)v.__webglDepthbuffer[P]=t.createRenderbuffer(),B(v.__webglDepthbuffer[P],E,!1);else{const N=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[P];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),B(v.__webglDepthbuffer,E,!1);else{const P=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,P,t.RENDERBUFFER,N)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(E,v,F){const P=i.get(E);v!==void 0&&_e(P.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&re(E)}function Le(E){const v=E.texture,F=i.get(E),P=i.get(v);E.addEventListener("dispose",R);const N=E.textures,V=E.isWebGLCubeRenderTarget===!0,oe=N.length>1;if(oe||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=v.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let fe=0;fe<v.mipmaps.length;fe++)F.__webglFramebuffer[le][fe]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(oe)for(let le=0,fe=N.length;le<fe;le++){const De=i.get(N[le]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&J(E)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<N.length;le++){const fe=N[le];F.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const De=s.convert(fe.format,fe.colorSpace),ue=s.convert(fe.type),ve=S(fe.internalFormat,De,ue,fe.colorSpace,E.isXRRenderTarget===!0),Re=Q(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,F.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),B(F.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)_e(F.__webglFramebuffer[le][fe],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else _e(F.__webglFramebuffer[le],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let le=0,fe=N.length;le<fe;le++){const De=N[le],ue=i.get(De);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Ie(t.TEXTURE_2D,De),_e(F.__webglFramebuffer,E,De,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(De)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,P.__webglTexture),Ie(le,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)_e(F.__webglFramebuffer[fe],E,v,t.COLOR_ATTACHMENT0,le,fe);else _e(F.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,le,0);m(v)&&h(le),n.unbindTexture()}E.depthBuffer&&re(E)}function Pe(E){const v=E.textures;for(let F=0,P=v.length;F<P;F++){const N=v[F];if(m(N)){const V=y(E),oe=i.get(N).__webglTexture;n.bindTexture(V,oe),h(V),n.unbindTexture()}}}const D=[],b=[];function q(E){if(E.samples>0){if(J(E)===!1){const v=E.textures,F=E.width,P=E.height;let N=t.COLOR_BUFFER_BIT;const V=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(E),le=v.length>1;if(le)for(let fe=0;fe<v.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);const De=i.get(v[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,F,P,0,0,F,P,N,t.NEAREST),l===!0&&(D.length=0,b.length=0,D.push(t.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(D.push(V),b.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<v.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);const De=i.get(v[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function Q(E){return Math.min(r.maxSamples,E.samples)}function J(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function w(E){const v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function I(E,v){const F=E.colorSpace,P=E.format,N=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==us&&F!==Ci&&(et.getTransfer(F)===ut?(P!==Cn||N!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function k(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=ae,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=de,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=J}function jw(t,e){function n(i,r=Ci){let s;const a=et.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===Nu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Om)return t.BYTE;if(i===km)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===Uu)return t.INT;if(i===_r)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===ca)return t.HALF_FLOAT;if(i===Bm)return t.ALPHA;if(i===Vm)return t.RGB;if(i===Cn)return t.RGBA;if(i===$m)return t.LUMINANCE;if(i===Hm)return t.LUMINANCE_ALPHA;if(i===Kr)return t.DEPTH_COMPONENT;if(i===cs)return t.DEPTH_STENCIL;if(i===Gm)return t.RED;if(i===Ou)return t.RED_INTEGER;if(i===Wm)return t.RG;if(i===ku)return t.RG_INTEGER;if(i===zu)return t.RGBA_INTEGER;if(i===Za||i===Qa||i===eo||i===to)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Cc||i===Pc||i===Lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Dc||i===Uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ic||i===Dc)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===Fc||i===Oc||i===kc||i===zc||i===Bc||i===Vc||i===$c||i===Hc||i===Gc||i===Wc||i===jc||i===qc||i===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===Jc||i===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===no)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jm||i===Kc||i===Zc||i===Qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const qw={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jw=`
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

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:Xw,fragmentShader:Jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends xr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const x=new Yw,m=n.getContextAttributes();let h=null,y=null;const S=[],_=[],L=new Ye;let C=null;const R=new un;R.viewport=new dt;const U=new un;U.viewport=new dt;const M=[R,U],T=new _E;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=S[ie];return me===void 0&&(me=new Vl,S[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=S[ie];return me===void 0&&(me=new Vl,S[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=S[ie];return me===void 0&&(me=new Vl,S[ie]=me),me.getHandSpace()};function G(ie){const me=_.indexOf(ie.inputSource);if(me===-1)return;const _e=S[me];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,c||a),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ee(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ae);for(let ie=0;ie<S.length;ie++){const me=_[ie];me!==null&&(_[ie]=null,S[ie].disconnect(me))}O=null,z=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,y=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let _e=null,B=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=m.stencil?cs:Kr,B=m.stencil?ls:_r);const re={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new vr(f.textureWidth,f.textureHeight,{format:Cn,type:fi,depthTexture:new og(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new vr(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(ie){for(let me=0;me<ie.removed.length;me++){const _e=ie.removed[me],B=_.indexOf(_e);B>=0&&(_[B]=null,S[B].disconnect(_e))}for(let me=0;me<ie.added.length;me++){const _e=ie.added[me];let B=_.indexOf(_e);if(B===-1){for(let re=0;re<S.length;re++)if(re>=_.length){_.push(_e),B=re;break}else if(_[re]===null){_[re]=_e,B=re;break}if(B===-1)break}const se=S[B];se&&se.connect(_e)}}const Y=new j,te=new j;function X(ie,me,_e){Y.setFromMatrixPosition(me.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const B=Y.distanceTo(te),se=me.projectionMatrix.elements,re=_e.projectionMatrix.elements,de=se[14]/(se[10]-1),Le=se[14]/(se[10]+1),Pe=(se[9]+1)/se[5],D=(se[9]-1)/se[5],b=(se[8]-1)/se[0],q=(re[8]+1)/re[0],Q=de*b,J=de*q,w=B/(-b+q),I=w*-b;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(I),ie.translateZ(w),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),se[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const k=de+w,E=Le+w,v=Q-I,F=J+(B-I),P=Pe*Le/E*k,N=D*Le/E*k;ie.projectionMatrix.makePerspective(v,F,P,N,k,E),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,_e=ie.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),T.near=U.near=R.near=me,T.far=U.far=R.far=_e,(O!==T.near||z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,z=T.far),R.layers.mask=ie.layers.mask|2,U.layers.mask=ie.layers.mask|4,T.layers.mask=R.layers.mask|U.layers.mask;const B=ie.parent,se=T.cameras;he(T,B);for(let re=0;re<se.length;re++)he(se[re],B);se.length===2?X(T,R,U):T.projectionMatrix.copy(R.projectionMatrix),ge(ie,T,B)};function ge(ie,me,_e){_e===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ta*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)};let Me=null;function Ie(ie,me){if(u=me.getViewerPose(c||a),g=me,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let B=!1;_e.length!==T.cameras.length&&(T.cameras.length=0,B=!0);for(let re=0;re<_e.length;re++){const de=_e[re];let Le=null;if(p!==null)Le=p.getViewport(de);else{const D=d.getViewSubImage(f,de);Le=D.viewport,re===0&&(e.setRenderTargetTextures(y,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(y))}let Pe=M[re];Pe===void 0&&(Pe=new un,Pe.layers.enable(re),Pe.viewport=new dt,M[re]=Pe),Pe.matrix.fromArray(de.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(de.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Le.x,Le.y,Le.width,Le.height),re===0&&(T.matrix.copy(Pe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),B===!0&&T.cameras.push(Pe)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const re=d.getDepthInformation(_e[0]);re&&re.isValid&&re.texture&&x.init(e,re,r.renderState)}}for(let _e=0;_e<S.length;_e++){const B=_[_e],se=S[_e];B!==null&&se!==void 0&&se.update(B,me,c||a)}Me&&Me(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const qe=new fg;qe.setAnimationLoop(Ie),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}}const tr=new jn,Zw=new vt;function Qw(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,rg(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,S,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,tr.copy(_),tr.x*=-1,tr.y*=-1,tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(tr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const _=S.program;i.uniformBlockBinding(y,_)}function c(y,S){let _=r[y.id];_===void 0&&(g(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(y,L);const C=e.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function u(y){const S=d();y.__bindingPointIndex=S;const _=t.createBuffer(),L=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,_),_}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=r[y.id],_=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,R=_.length;C<R;C++){const U=Array.isArray(_[C])?_[C]:[_[C]];for(let M=0,T=U.length;M<T;M++){const O=U[M];if(p(O,C,M,L)===!0){const z=O.__offset,G=Array.isArray(O.value)?O.value:[O.value];let ee=0;for(let ae=0;ae<G.length;ae++){const Y=G[ae],te=x(Y);typeof Y=="number"||typeof Y=="boolean"?(O.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,z+ee,O.__data)):Y.isMatrix3?(O.__data[0]=Y.elements[0],O.__data[1]=Y.elements[1],O.__data[2]=Y.elements[2],O.__data[3]=0,O.__data[4]=Y.elements[3],O.__data[5]=Y.elements[4],O.__data[6]=Y.elements[5],O.__data[7]=0,O.__data[8]=Y.elements[6],O.__data[9]=Y.elements[7],O.__data[10]=Y.elements[8],O.__data[11]=0):(Y.toArray(O.__data,ee),ee+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,S,_,L){const C=y.value,R=S+"_"+_;if(L[R]===void 0)return typeof C=="number"||typeof C=="boolean"?L[R]=C:L[R]=C.clone(),!0;{const U=L[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return L[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(y){const S=y.uniforms;let _=0;const L=16;for(let R=0,U=S.length;R<U;R++){const M=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,O=M.length;T<O;T++){const z=M[T],G=Array.isArray(z.value)?z.value:[z.value];for(let ee=0,ae=G.length;ee<ae;ee++){const Y=G[ee],te=x(Y),X=_%L,he=X%te.boundary,ge=X+he;_+=he,ge!==0&&L-ge<te.storage&&(_+=L-ge),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=te.storage}}}const C=_%L;return C>0&&(_+=L-C),y.__size=_,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class tA{constructor(e={}){const{canvas:n=US(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const y=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Ui,this.toneMappingExposure=1;const _=this;let L=!1,C=0,R=0,U=null,M=-1,T=null;const O=new dt,z=new dt;let G=null;const ee=new Je(0);let ae=0,Y=n.width,te=n.height,X=1,he=null,ge=null;const Me=new dt(0,0,Y,te),Ie=new dt(0,0,Y,te);let qe=!1;const ie=new Vu;let me=!1,_e=!1;this.transmissionResolutionScale=1;const B=new vt,se=new vt,re=new j,de=new dt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function D(){return U===null?X:1}let b=i;function q(A,H){return n.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Du}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Se,!1),b===null){const H="webgl2";if(b=q(H,A),b===null)throw q(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Q,J,w,I,k,E,v,F,P,N,V,oe,le,fe,De,ue,ve,Re,Fe,we,ze,Oe,ot,$;function xe(){Q=new uT(b),Q.init(),Oe=new jw(b,Q),J=new rT(b,Q,e,Oe),w=new Gw(b,Q),J.reverseDepthBuffer&&f&&w.buffers.depth.setReversed(!0),I=new hT(b),k=new Lw,E=new Ww(b,Q,w,k,J,Oe,I),v=new aT(_),F=new cT(_),P=new xE(b),ot=new nT(b,P),N=new dT(b,P,I,ot),V=new mT(b,N,P,I),Fe=new pT(b,J,E),ue=new sT(k),oe=new Pw(_,v,F,Q,J,ot,ue),le=new Qw(_,k),fe=new Dw,De=new zw(Q),Re=new tT(_,v,F,w,V,p,l),ve=new $w(_,V,J),$=new eA(b,I,J,w),we=new iT(b,Q,I),ze=new fT(b,Q,I),I.programs=oe.programs,_.capabilities=J,_.extensions=Q,_.properties=k,_.renderLists=fe,_.shadowMap=ve,_.state=w,_.info=I}xe();const ne=new Kw(_,b);this.xr=ne,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Y,te,!1))},this.getSize=function(A){return A.set(Y,te)},this.setSize=function(A,H,K=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,te=H,n.width=Math.floor(A*X),n.height=Math.floor(H*X),K===!0&&(n.style.width=A+"px",n.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Y*X,te*X).floor()},this.setDrawingBufferSize=function(A,H,K){Y=A,te=H,X=K,n.width=Math.floor(A*K),n.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(Me)},this.setViewport=function(A,H,K,Z){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,H,K,Z),w.viewport(O.copy(Me).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,H,K,Z){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,H,K,Z),w.scissor(z.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){w.setScissorTest(qe=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(A=!0,H=!0,K=!0){let Z=0;if(A){let W=!1;if(U!==null){const pe=U.texture.format;W=pe===zu||pe===ku||pe===Ou}if(W){const pe=U.texture.type,ye=pe===fi||pe===_r||pe===ea||pe===ls||pe===Nu||pe===Fu,Ae=Re.getClearColor(),Ce=Re.getClearAlpha(),Be=Ae.r,Ve=Ae.g,Ue=Ae.b;ye?(g[0]=Be,g[1]=Ve,g[2]=Ue,g[3]=Ce,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=Be,x[1]=Ve,x[2]=Ue,x[3]=Ce,b.clearBufferiv(b.COLOR,0,x))}else Z|=b.COLOR_BUFFER_BIT}H&&(Z|=b.DEPTH_BUFFER_BIT),K&&(Z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Re.dispose(),fe.dispose(),De.dispose(),k.dispose(),v.dispose(),F.dispose(),V.dispose(),ot.dispose(),$.dispose(),oe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",qu),ne.removeEventListener("sessionend",Xu),Gi.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=I.autoReset,H=ve.enabled,K=ve.autoUpdate,Z=ve.needsUpdate,W=ve.type;xe(),I.autoReset=A,ve.enabled=H,ve.autoUpdate=K,ve.needsUpdate=Z,ve.type=W}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const H=A.target;H.removeEventListener("dispose",He),bt(H)}function bt(A){Bt(A),k.remove(A)}function Bt(A){const H=k.get(A).programs;H!==void 0&&(H.forEach(function(K){oe.releaseProgram(K)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,Z,W,pe){H===null&&(H=Le);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Ae=vg(A,H,K,Z,W);w.setMaterial(Z,ye);let Ce=K.index,Be=1;if(Z.wireframe===!0){if(Ce=N.getWireframeAttribute(K),Ce===void 0)return;Be=2}const Ve=K.drawRange,Ue=K.attributes.position;let Ke=Ve.start*Be,it=(Ve.start+Ve.count)*Be;pe!==null&&(Ke=Math.max(Ke,pe.start*Be),it=Math.min(it,(pe.start+pe.count)*Be)),Ce!==null?(Ke=Math.max(Ke,0),it=Math.min(it,Ce.count)):Ue!=null&&(Ke=Math.max(Ke,0),it=Math.min(it,Ue.count));const wt=it-Ke;if(wt<0||wt===1/0)return;ot.setup(W,Z,Ae,K,Ce);let xt,Qe=we;if(Ce!==null&&(xt=P.get(Ce),Qe=ze,Qe.setIndex(xt)),W.isMesh)Z.wireframe===!0?(w.setLineWidth(Z.wireframeLinewidth*D()),Qe.setMode(b.LINES)):Qe.setMode(b.TRIANGLES);else if(W.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),w.setLineWidth(ke*D()),W.isLineSegments?Qe.setMode(b.LINES):W.isLineLoop?Qe.setMode(b.LINE_LOOP):Qe.setMode(b.LINE_STRIP)}else W.isPoints?Qe.setMode(b.POINTS):W.isSprite&&Qe.setMode(b.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Qe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Qe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,Nt=W._multiDrawCounts,rt=W._multiDrawCount,En=Ce?P.get(Ce).bytesPerElement:1,yr=k.get(Z).currentProgram.getUniforms();for(let an=0;an<rt;an++)yr.setValue(b,"_gl_DrawID",an),Qe.render(ke[an]/En,Nt[an])}else if(W.isInstancedMesh)Qe.renderInstances(Ke,wt,W.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nt=Math.min(K.instanceCount,ke);Qe.renderInstances(Ke,wt,Nt)}else Qe.render(Ke,wt)};function lt(A,H,K){A.transparent===!0&&A.side===Bn&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,ma(A,H,K),A.side=Oi,A.needsUpdate=!0,ma(A,H,K),A.side=Bn):ma(A,H,K)}this.compile=function(A,H,K=null){K===null&&(K=A),h=De.get(K),h.init(H),S.push(h),K.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),A!==K&&A.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights();const Z=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pe=W.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Ae=pe[ye];lt(Ae,K,W),Z.add(Ae)}else lt(pe,K,W),Z.add(pe)}),S.pop(),h=null,Z},this.compileAsync=function(A,H,K=null){const Z=this.compile(A,H,K);return new Promise(W=>{function pe(){if(Z.forEach(function(ye){k.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){W(A);return}setTimeout(pe,10)}Q.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Sn=null;function qn(A){Sn&&Sn(A)}function qu(){Gi.stop()}function Xu(){Gi.start()}const Gi=new fg;Gi.setAnimationLoop(qn),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){Sn=A,ne.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},ne.addEventListener("sessionstart",qu),ne.addEventListener("sessionend",Xu),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(H),H=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,U),h=De.get(A,S.length),h.init(H),S.push(h),se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(se),_e=this.localClippingEnabled,me=ue.init(this.clippingPlanes,_e),m=fe.get(A,y.length),m.init(),y.push(m),ne.enabled===!0&&ne.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&Wo(pe,H,-1/0,_.sortObjects)}Wo(A,H,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(he,ge),Pe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Pe&&Re.addToRenderList(m,A),this.info.render.frame++,me===!0&&ue.beginShadows();const K=h.state.shadowsArray;ve.render(K,A,H),me===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,W=m.transmissive;if(h.setupLights(),H.isArrayCamera){const pe=H.cameras;if(W.length>0)for(let ye=0,Ae=pe.length;ye<Ae;ye++){const Ce=pe[ye];Yu(Z,W,A,Ce)}Pe&&Re.render(A);for(let ye=0,Ae=pe.length;ye<Ae;ye++){const Ce=pe[ye];Ju(m,A,Ce,Ce.viewport)}}else W.length>0&&Yu(Z,W,A,H),Pe&&Re.render(A),Ju(m,A,H);U!==null&&R===0&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(_,A,H),ot.resetDefaultState(),M=-1,T=null,S.pop(),S.length>0?(h=S[S.length-1],me===!0&&ue.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Wo(A,H,K,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){Z&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const ye=V.update(A),Ae=A.material;Ae.visible&&m.push(A,ye,Ae,K,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){const ye=V.update(A),Ae=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),de.copy(ye.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){const Ce=ye.groups;for(let Be=0,Ve=Ce.length;Be<Ve;Be++){const Ue=Ce[Be],Ke=Ae[Ue.materialIndex];Ke&&Ke.visible&&m.push(A,ye,Ke,K,de.z,Ue)}}else Ae.visible&&m.push(A,ye,Ae,K,de.z,null)}}const pe=A.children;for(let ye=0,Ae=pe.length;ye<Ae;ye++)Wo(pe[ye],H,K,Z)}function Ju(A,H,K,Z){const W=A.opaque,pe=A.transmissive,ye=A.transparent;h.setupLightsView(K),me===!0&&ue.setGlobalState(_.clippingPlanes,K),Z&&w.viewport(O.copy(Z)),W.length>0&&pa(W,H,K),pe.length>0&&pa(pe,H,K),ye.length>0&&pa(ye,H,K),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Yu(A,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[Z.id]===void 0&&(h.state.transmissionRenderTarget[Z.id]=new vr(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ca:fi,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const pe=h.state.transmissionRenderTarget[Z.id],ye=Z.viewport||O;pe.setSize(ye.z*_.transmissionResolutionScale,ye.w*_.transmissionResolutionScale);const Ae=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(ee),ae=_.getClearAlpha(),ae<1&&_.setClearColor(16777215,.5),_.clear(),Pe&&Re.render(K);const Ce=_.toneMapping;_.toneMapping=Ui;const Be=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),h.setupLightsView(Z),me===!0&&ue.setGlobalState(_.clippingPlanes,Z),pa(A,K,Z),E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ue=0,Ke=H.length;Ue<Ke;Ue++){const it=H[Ue],wt=it.object,xt=it.geometry,Qe=it.material,ke=it.group;if(Qe.side===Bn&&wt.layers.test(Z.layers)){const Nt=Qe.side;Qe.side=rn,Qe.needsUpdate=!0,Ku(wt,K,Z,xt,Qe,ke),Qe.side=Nt,Qe.needsUpdate=!0,Ve=!0}}Ve===!0&&(E.updateMultisampleRenderTarget(pe),E.updateRenderTargetMipmap(pe))}_.setRenderTarget(Ae),_.setClearColor(ee,ae),Be!==void 0&&(Z.viewport=Be),_.toneMapping=Ce}function pa(A,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let W=0,pe=A.length;W<pe;W++){const ye=A[W],Ae=ye.object,Ce=ye.geometry,Be=Z===null?ye.material:Z,Ve=ye.group;Ae.layers.test(K.layers)&&Ku(Ae,H,K,Ce,Be,Ve)}}function Ku(A,H,K,Z,W,pe){A.onBeforeRender(_,H,K,Z,W,pe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(_,H,K,Z,A,pe),W.transparent===!0&&W.side===Bn&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,_.renderBufferDirect(K,H,Z,W,A,pe),W.side=Oi,W.needsUpdate=!0,_.renderBufferDirect(K,H,Z,W,A,pe),W.side=Bn):_.renderBufferDirect(K,H,Z,W,A,pe),A.onAfterRender(_,H,K,Z,W,pe)}function ma(A,H,K){H.isScene!==!0&&(H=Le);const Z=k.get(A),W=h.state.lights,pe=h.state.shadowsArray,ye=W.state.version,Ae=oe.getParameters(A,W.state,pe,H,K),Ce=oe.getProgramCacheKey(Ae);let Be=Z.programs;Z.environment=A.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(A.isMeshStandardMaterial?F:v).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",He),Be=new Map,Z.programs=Be);let Ve=Be.get(Ce);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===ye)return Qu(A,Ae),Ve}else Ae.uniforms=oe.getUniforms(A),A.onBeforeCompile(Ae,_),Ve=oe.acquireProgram(Ae,Ce),Be.set(Ce,Ve),Z.uniforms=Ae.uniforms;const Ue=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),Qu(A,Ae),Z.needsLights=xg(A),Z.lightsStateVersion=ye,Z.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMap.value=W.state.directionalShadowMap,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotShadowMap.value=W.state.spotShadowMap,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMap.value=W.state.pointShadowMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function Zu(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=io.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Qu(A,H){const K=k.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function vg(A,H,K,Z,W){H.isScene!==!0&&(H=Le),E.resetTextureUnits();const pe=H.fog,ye=Z.isMeshStandardMaterial?H.environment:null,Ae=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:us,Ce=(Z.isMeshStandardMaterial?F:v).get(Z.envMap||ye),Be=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!K.morphAttributes.position,Ke=!!K.morphAttributes.normal,it=!!K.morphAttributes.color;let wt=Ui;Z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(wt=_.toneMapping);const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qe=xt!==void 0?xt.length:0,ke=k.get(Z),Nt=h.state.lights;if(me===!0&&(_e===!0||A!==T)){const qt=A===T&&Z.id===M;ue.setState(Z,A,qt)}let rt=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Nt.state.version||ke.outputColorSpace!==Ae||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isBatchedMesh&&ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ke.instancingMorph===!1&&W.morphTexture!==null||ke.envMap!==Ce||Z.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ue.numPlanes||ke.numIntersection!==ue.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ve||ke.morphTargets!==Ue||ke.morphNormals!==Ke||ke.morphColors!==it||ke.toneMapping!==wt||ke.morphTargetsCount!==Qe)&&(rt=!0):(rt=!0,ke.__version=Z.version);let En=ke.currentProgram;rt===!0&&(En=ma(Z,H,W));let yr=!1,an=!1,gs=!1;const _t=En.getUniforms(),hn=ke.uniforms;if(w.useProgram(En.program)&&(yr=!0,an=!0,gs=!0),Z.id!==M&&(M=Z.id,an=!0),yr||T!==A){w.buffers.depth.getReversed()?(B.copy(A.projectionMatrix),FS(B),OS(B),_t.setValue(b,"projectionMatrix",B)):_t.setValue(b,"projectionMatrix",A.projectionMatrix),_t.setValue(b,"viewMatrix",A.matrixWorldInverse);const nn=_t.map.cameraPosition;nn!==void 0&&nn.setValue(b,re.setFromMatrixPosition(A.matrixWorld)),J.logarithmicDepthBuffer&&_t.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_t.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,an=!0,gs=!0)}if(W.isSkinnedMesh){_t.setOptional(b,W,"bindMatrix"),_t.setOptional(b,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),_t.setValue(b,"boneTexture",qt.boneTexture,E))}W.isBatchedMesh&&(_t.setOptional(b,W,"batchingTexture"),_t.setValue(b,"batchingTexture",W._matricesTexture,E),_t.setOptional(b,W,"batchingIdTexture"),_t.setValue(b,"batchingIdTexture",W._indirectTexture,E),_t.setOptional(b,W,"batchingColorTexture"),W._colorsTexture!==null&&_t.setValue(b,"batchingColorTexture",W._colorsTexture,E));const pn=K.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Fe.update(W,K,En),(an||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,_t.setValue(b,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(hn.envMap.value=Ce,hn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(hn.envMapIntensity.value=H.environmentIntensity),an&&(_t.setValue(b,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&bg(hn,gs),pe&&Z.fog===!0&&le.refreshFogUniforms(hn,pe),le.refreshMaterialUniforms(hn,Z,X,te,h.state.transmissionRenderTarget[A.id]),io.upload(b,Zu(ke),hn,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(io.upload(b,Zu(ke),hn,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_t.setValue(b,"center",W.center),_t.setValue(b,"modelViewMatrix",W.modelViewMatrix),_t.setValue(b,"normalMatrix",W.normalMatrix),_t.setValue(b,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const qt=Z.uniformsGroups;for(let nn=0,jo=qt.length;nn<jo;nn++){const Wi=qt[nn];$.update(Wi,En),$.bind(Wi,En)}}return En}function bg(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function xg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,H,K){k.get(A.texture).__webglTexture=H,k.get(A.depthTexture).__webglTexture=K;const Z=k.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const K=k.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const yg=b.createFramebuffer();this.setRenderTarget=function(A,H=0,K=0){U=A,C=H,R=K;let Z=!0,W=null,pe=!1,ye=!1;if(A){const Ce=k.get(A);if(Ce.__useDefaultFramebuffer!==void 0)w.bindFramebuffer(b.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ce.__hasExternalTextures)E.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ue=A.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&k.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ye=!0);const Ve=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?W=Ve[H][K]:W=Ve[H],pe=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?W=k.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[K]:W=Ve,O.copy(A.viewport),z.copy(A.scissor),G=A.scissorTest}else O.copy(Me).multiplyScalar(X).floor(),z.copy(Ie).multiplyScalar(X).floor(),G=qe;if(K!==0&&(W=yg),w.bindFramebuffer(b.FRAMEBUFFER,W)&&Z&&w.drawBuffers(A,W),w.viewport(O),w.scissor(z),w.setScissorTest(G),pe){const Ce=k.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,K)}else if(ye){const Ce=k.get(A.texture),Be=H;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ce.__webglTexture,K,Be)}else if(A!==null&&K!==0){const Ce=k.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ce.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(A,H,K,Z,W,pe,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){w.bindFramebuffer(b.FRAMEBUFFER,Ae);try{const Ce=A.texture,Be=Ce.format,Ve=Ce.type;if(!J.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&K>=0&&K<=A.height-W&&b.readPixels(H,K,Z,W,Oe.convert(Be),Oe.convert(Ve),pe)}finally{const Ce=U!==null?k.get(U).__webglFramebuffer:null;w.bindFramebuffer(b.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,Z,W,pe,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){const Ce=A.texture,Be=Ce.format,Ve=Ce.type;if(!J.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Z&&K>=0&&K<=A.height-W){w.bindFramebuffer(b.FRAMEBUFFER,Ae);const Ue=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ue),b.bufferData(b.PIXEL_PACK_BUFFER,pe.byteLength,b.STREAM_READ),b.readPixels(H,K,Z,W,Oe.convert(Be),Oe.convert(Ve),0);const Ke=U!==null?k.get(U).__webglFramebuffer:null;w.bindFramebuffer(b.FRAMEBUFFER,Ke);const it=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await NS(b,it,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ue),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,pe),b.deleteBuffer(Ue),b.deleteSync(it),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,K=0){A.isTexture!==!0&&($r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-K),W=Math.floor(A.image.width*Z),pe=Math.floor(A.image.height*Z),ye=H!==null?H.x:0,Ae=H!==null?H.y:0;E.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,K,0,0,ye,Ae,W,pe),w.unbindTexture()};const Sg=b.createFramebuffer(),Eg=b.createFramebuffer();this.copyTextureToTexture=function(A,H,K=null,Z=null,W=0,pe=null){A.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],H=arguments[2],pe=arguments[3]||0,K=null),pe===null&&(W!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=W,W=0):pe=0);let ye,Ae,Ce,Be,Ve,Ue,Ke,it,wt;const xt=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(K!==null)ye=K.max.x-K.min.x,Ae=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Ve=K.min.y,Ue=K.isBox3?K.min.z:0;else{const pn=Math.pow(2,-W);ye=Math.floor(xt.width*pn),Ae=Math.floor(xt.height*pn),A.isDataArrayTexture?Ce=xt.depth:A.isData3DTexture?Ce=Math.floor(xt.depth*pn):Ce=1,Be=0,Ve=0,Ue=0}Z!==null?(Ke=Z.x,it=Z.y,wt=Z.z):(Ke=0,it=0,wt=0);const Qe=Oe.convert(H.format),ke=Oe.convert(H.type);let Nt;H.isData3DTexture?(E.setTexture3D(H,0),Nt=b.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(E.setTexture2DArray(H,0),Nt=b.TEXTURE_2D_ARRAY):(E.setTexture2D(H,0),Nt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,H.unpackAlignment);const rt=b.getParameter(b.UNPACK_ROW_LENGTH),En=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yr=b.getParameter(b.UNPACK_SKIP_PIXELS),an=b.getParameter(b.UNPACK_SKIP_ROWS),gs=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,xt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Be),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ve),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ue);const _t=A.isDataArrayTexture||A.isData3DTexture,hn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const pn=k.get(A),qt=k.get(H),nn=k.get(pn.__renderTarget),jo=k.get(qt.__renderTarget);w.bindFramebuffer(b.READ_FRAMEBUFFER,nn.__webglFramebuffer),w.bindFramebuffer(b.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Wi=0;Wi<Ce;Wi++)_t&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,k.get(A).__webglTexture,W,Ue+Wi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,k.get(H).__webglTexture,pe,wt+Wi)),b.blitFramebuffer(Be,Ve,ye,Ae,Ke,it,ye,Ae,b.DEPTH_BUFFER_BIT,b.NEAREST);w.bindFramebuffer(b.READ_FRAMEBUFFER,null),w.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||k.has(A)){const pn=k.get(A),qt=k.get(H);w.bindFramebuffer(b.READ_FRAMEBUFFER,Sg),w.bindFramebuffer(b.DRAW_FRAMEBUFFER,Eg);for(let nn=0;nn<Ce;nn++)_t?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pn.__webglTexture,W,Ue+nn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pn.__webglTexture,W),hn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,qt.__webglTexture,pe,wt+nn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,qt.__webglTexture,pe),W!==0?b.blitFramebuffer(Be,Ve,ye,Ae,Ke,it,ye,Ae,b.COLOR_BUFFER_BIT,b.NEAREST):hn?b.copyTexSubImage3D(Nt,pe,Ke,it,wt+nn,Be,Ve,ye,Ae):b.copyTexSubImage2D(Nt,pe,Ke,it,Be,Ve,ye,Ae);w.bindFramebuffer(b.READ_FRAMEBUFFER,null),w.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Nt,pe,Ke,it,wt,ye,Ae,Ce,Qe,ke,xt.data):H.isCompressedArrayTexture?b.compressedTexSubImage3D(Nt,pe,Ke,it,wt,ye,Ae,Ce,Qe,xt.data):b.texSubImage3D(Nt,pe,Ke,it,wt,ye,Ae,Ce,Qe,ke,xt):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,pe,Ke,it,ye,Ae,Qe,ke,xt.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,pe,Ke,it,xt.width,xt.height,Qe,xt.data):b.texSubImage2D(b.TEXTURE_2D,pe,Ke,it,ye,Ae,Qe,ke,xt);b.pixelStorei(b.UNPACK_ROW_LENGTH,rt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,En),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yr),b.pixelStorei(b.UNPACK_SKIP_ROWS,an),b.pixelStorei(b.UNPACK_SKIP_IMAGES,gs),pe===0&&H.generateMipmaps&&b.generateMipmap(Nt),w.unbindTexture()},this.copyTextureToTexture3D=function(A,H,K=null,Z=null,W=0){return A.isTexture!==!0&&($r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],H=arguments[3],W=arguments[4]||0),$r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,K,Z,W)},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){C=0,R=0,U=null,w.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const nA=Bi({name:"AuroraBackground",setup(){const t=Ni(null);let e,n,i,r,s;fs(()=>{t.value&&(a(t.value),window.addEventListener("resize",d))}),Lo(()=>{window.removeEventListener("resize",d)});const a=f=>{e=new aE,n=new un(45,window.innerWidth/window.innerHeight,.1,1e3),i=new tA({canvas:f,antialias:!0,alpha:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),r=new vE,o(),n.position.set(0,0,20),n.lookAt(0,0,0),u()},o=()=>{const f=new Hu(10,5);f.computeVertexNormals();const p=new hi({vertexShader:l(),fragmentShader:c(),uniforms:{time:{value:0},color1:{value:new Je(0)},color2:{value:new Je(8421504)},color3:{value:new Je(16777215)}},side:Bn,wireframe:!1});s=new $n(f,p),e.add(s)},l=()=>`
      uniform float time;  // 声明 'time' 作为 uniform 变量
      varying vec3 vPosition;  // 传递顶点位置到片段着色器
      varying float vNoise;  // 传递噪声值到片段着色器
      void main() {
        vPosition = position;  // 将顶点的位置传递到片段着色器
        vNoise = sin(position.x * 10.0 + time) * 0.5;  // 根据时间变化生成噪声
        vec3 newPosition = position + normal * vNoise;  // 在法线方向上拉伸顶点
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);  // 计算顶点的屏幕空间位置
      }
    `,c=()=>`
      uniform vec3 color1;  // 浅青色
      uniform vec3 color2;  // 紫红色
      uniform vec3 color3;  // 深紫色
      varying float vNoise;  // 从顶点着色器传递过来的噪声值
      void main() {
        vec3 color = mix(color1, color2, vNoise);  // 根据噪声值在颜色1和颜色2之间进行混合
        color = mix(color, color3, abs(sin(vNoise * 2.0)));  // 进一步与颜色3混合，增加动态感
        gl_FragColor = vec4(color, 1.0);  // 设置片段的最终颜色
      }
    `,u=()=>{requestAnimationFrame(u);const f=r.getElapsedTime(),p=s.material;p.uniforms.time.value=f,s.rotation.x+=.001,s.rotation.y+=.001,i.render(e,n)},d=()=>{if(i&&n){const f=window.innerWidth,p=window.innerHeight;i.setSize(f,p),n.aspect=f/p,n.updateProjectionMatrix()}};return{canvas:t}}}),iA={class:"aurora-background"},rA={ref:"canvas"};function sA(t,e,n,i,r,s){return Gn(),pr("div",iA,[gr("canvas",rA,null,512)])}const aA=Bo(nA,[["render",sA],["__scopeId","data-v-e2a91c6b"]]),oA={},lA={class:"index-page"};function cA(t,e){const n=aA,i=Py,r=wy;return Gn(),pr("div",lA,[Mt(r,null,{default:_u(()=>[e[0]||(e[0]=gr("div",{style:{"align-items":"center","justify-content":"center",display:"flex",position:"relative",width:"100%",height:"100%"}},null,-1)),Mt(n),Mt(i)]),_:1})])}const _g=Bo(oA,[["render",cA],["__scopeId","data-v-8ff810a3"]]),uA=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),dA=()=>jt(()=>import("./verify-CDYvwX4N.js"),__vite__mapDeps([0,1])),fA=()=>jt(()=>import("./useradmin-BBMz56SM.js"),__vite__mapDeps([2,3,4,5])),hA=()=>jt(()=>import("./testadminelonmusk-Dd9MeJdX.js"),__vite__mapDeps([6,3,4,7])),pA=()=>jt(()=>import("./test-B-jsTm2T.js"),__vite__mapDeps([8,9])),mA=()=>jt(()=>import("./reset-password-JqKmMA1u.js"),__vite__mapDeps([10,3,11])),gA=()=>jt(()=>import("./register-W4dV_m7r.js"),__vite__mapDeps([12,3,13])),_A=()=>jt(()=>import("./protected-Bg8n5XAm.js"),__vite__mapDeps([14,1])),vA=()=>jt(()=>import("./opensource-BJbQXOZF.js"),[]),bA=()=>jt(()=>import("./mystarrysky-C3hV95DK.js"),__vite__mapDeps([15,16])),xA=()=>jt(()=>import("./login-CTIPGxZ5.js"),__vite__mapDeps([17,3,4,18])),yA=()=>jt(()=>import("./games-CBh6AhVV.js"),__vite__mapDeps([19,20,21,22])),SA=()=>jt(()=>import("./databasetest-z9axDQ83.js"),__vite__mapDeps([23,1,24])),EA=()=>jt(()=>import("./apps-C_16Tj04.js"),__vite__mapDeps([25,20,21,26])),MA=()=>jt(()=>import("./aboutme-BUE88WC0.js"),__vite__mapDeps([27,28])),TA=()=>jt(()=>import("./DiMEMO-DuG_d6Mq.js"),__vite__mapDeps([29,30])),wA=[{name:"verify",path:"/verify",component:dA,props:!0},{name:"useradmin",path:"/useradmin",component:fA,props:!0},{name:"testadminelonmusk",path:"/testadminelonmusk",component:hA,props:!0},{name:"test",path:"/test",component:pA,props:!0},{name:"reset-password",path:"/reset-password",component:mA,props:!0},{name:"register",path:"/register",component:gA,props:!0},{name:"protected",path:"/protected",component:_A,props:!0},{name:"opensource",path:"/opensource",component:vA,props:!0},{name:"mystarrysky",path:"/mystarrysky",component:bA,props:!0},{name:"login",path:"/login",component:xA,props:!0},{name:"index",path:"/",component:_g,props:!0},{name:"games",path:"/games",component:yA,props:!0},{name:"databasetest",path:"/databasetest",component:SA,props:!0},{name:"apps",path:"/apps",component:EA,props:!0},{name:"aboutme",path:"/aboutme",component:MA,props:!0},{name:"DiMEMO",path:"/dimemo",component:TA,props:!0}],AA=[{path:"/",component:()=>jt(()=>Promise.resolve().then(()=>uA),void 0)},...wA],RA=Sy({history:K0("/"),routes:AA}),CA="Skip",PA="Hello, I am ponzs, this is my virtual space, please select your language preference, then try to use your fingers to slide in front of you to control the view, ensure our controller is running normally, if everything is ready, we can continue to explore this space.",LA="I've chosen",IA="Next",DA="Enter the home",UA="This is a starry sky composed of countless stars, each star has its own story, and I also wish to become one of them. Inject hope into the endless darkness, inject soul into the weak light, when they unite, they will become an endless starry sky, even if the stars will have a day of falling and disappearing, but there will always be new stars that shine, making this starry sky eternal.",NA="We are about to enter the depths of this starry sky, navigate through it, and experience their lives. This aircraft is for you. Although it's an older model, it's durable. Give it a try, and if it doesn't start, try again next time.(Do you see that halo? That’s the start button. Hold it to activate the thruster, and you will gain absolute freedom to explore this universe!)",FA="Obtain Backpack-Style Aircraft",OA="The surface material uses flexible solar panels, capable of absorbing light energy in real-time to continuously provide power. It powers the aircraft through electricity, suitable for vacuum environments.",kA="Attempt to Start Backpack-Style Aircraft",zA="Congratulations, you've mastered the mechanism. If you want to continue exploring this starry sky, continue.",BA="An infinite sea, right?",VA="As your difficulty now, is it something that can be considered?",$A="I suddenly remembered a person, do you know Johnny Silverhand? Yes, the one who was trapped in Relic.",HA="V, never give up the battle.",GA="I've finished, you can go",WA="Hello, World",jA="Application",qA="Game",XA="Tool",JA="Open Source Components",YA="Account Management",KA={aboutme:"About Me",products:"Product Center",contact:"Contact Us",apps:"Applications",login:"Login",register:"Register","reset-password":"Reset Password","forgot-password":"Forgot Password",logout:"Logout","send-code":"Send Code"},ZA="Qianyu",QA="Feedback",eR="If you need our assistance or have any questions or suggestions about DiMEMO, please send us an email through the following link:",tR="Send Email",nR="About Privacy",iR="Qianyu does not collect any of your data. Data computation and processing are performed locally on your device. Currently, data is only stored locally on your device's file system. In a future version, we may use iCloud to synchronize and store your data across multiple Apple devices using DiMEMO. However, we will inquire in advance whether to enable this feature, and you have the right to choose to use or disable it. Additionally, we plan to implement storage solutions aimed at data permanence. If updated, we will inform you in advance whether to activate this feature.",rR="Hi, I am a",sR="Game Developer",aR="Why did I become a game developer? The main reason is my love for gaming. My earliest inspiration was the World of Warcraft map editor.",oR="Currently focused on developing",lR="Modern Games",cR="Modern games? My understanding is enhanced gaming experiences and features that were not possible before.",uR="Including more new gaming platforms and full-stack acceleration capabilities in high-quality gaming environments, brand new AI interactions, animation, and 3D asset design.",dR="Additionally, I am a",fR="Hardcore Gamer",hR="A gamer who has played thousands of games with tens of thousands of hours of gameplay.",pR="Some of my favorite games:",mR="Cyberpunk 2077",gR="Welcome to Night City! This is WNS News! It's such a nostalgic world. Who wouldn't want to be V? But how many dare to be V? You know who I'm talking about. He is a legend in Night City.",_R="Black Myth: Wukong",vR="Master Bodhi never abandoned the little monkey.",bR="GTA",xR="Michael and Trevor are my brothers. Even if I lose everything, I won't let either of them die.",yR="SCUM",SR="I opened a bar in this game, met many good friends, but also encountered some people just like the game name. Since the server I played on was frequently reset, we later set up our own game server, which eventually stopped operations due to an imbalance between server expenses and income. Even if it meant losing money, I didn't want to let down friends who loved this game. Thanks to my brothers who lived on this small island with me. When I have money, I will definitely restart the server and keep it running forever.",ER="Ready or Not",MR="Bought it to play CQB with some buddies. This game is indeed well-made, good reviews.",TR="Call of Duty",wR="The Call of Duty series is both a childhood memory and what I currently consider the pinnacle of war games. Every version in the series across different eras is top-notch, covering a lot with realistic graphics and audio, firearms and animation textures that adhere to real-world physics, and thrilling storylines that make one feel passionate. Soap never dies.",AR="No Man's Sky",RR="It has both VR and PC versions, as well as some unique generative game content designs. Personally, I think it's pretty good, but I'm not particularly fond of this art style.",CR="Beyond Gaming: I like to go to lakeside or seaside, find a place to sit, preferably with a table, and have a cup of",PR="Chilled Juice",LR="Juice can be coconut, orange, or watermelon juice.",IR="Chilled Cola",DR="It doesn't taste good if it's not cold.",UR="Or, place another one beside it.",NR="Simple Ashtray",FR="I usually bring a can of Red Bull and coffee, then use a coffee paper cup to flick ashes and a Red Bull can to place cigarette butts. Why? The coffee paper cup has a wide opening, making it easier to flick ashes without spilling outside. Red Bull cans are usually made of metal, so there's no worry about cigarette butts burning it.",OR="Light one up",kR="Cigarette",zR="I usually prefer two types of cigarettes: 555 Dual Burst and Little Sun Red Zhongnanhai.",BR="Put on headphones, enable noise cancellation mode, and start playing my",VR="Playlist",$R="Want my playlist? Search on NetEase Cloud: ponzS",HR="Start thinking about some new designs and creating demos until",GR="Computer Battery",WR="I usually choose a MacBook Air when taking my computer outside. It lasts all day without any battery anxiety and still has plenty of power left. It's also lightweight and has sufficient performance.",jR="Battery drains to 0%",qR="Skills",XR="Game (Unity, Unreal Engine, Blender)",JR="Web (Vue.js, Nuxt.js, Three.js)",YR="Windows (tauri, electron)",KR="Mobile Applications (Flutter, NativeScript, uni-app, uni-app x, ionic)",ZR="Programming Languages (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",QR="Servers (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",eC="Project Experience Types",tC="Full-Stack Progressive Web Application - Desktop Application - Mobile Application",nC="WebGL-WebGPU-WebXR-WebVR-PWA Games",iC="Unreal Engine 5 Games - Unity Engine Games - C++ and C# Projects - Blueprints and UVS Projects - Game Design - Technical Art - Music",rC="Oculus-Pico-VR-XR-MR",sC="Contact",aC="Bugs - Vulnerabilities - Errors - Suggestions - Update Requests - Collaboration Opportunities:",oC="ponzs",lC="ponzs, Chinese Name: Zhang Guoai, Chinese Nationality",cC="Full-Stack Engineer",uC="Web-VR-PC-Mobile Application Full-Stack Developer",dC="Tip!",fC="About Me",hC="Click on highlighted keywords to view content details",pC="The documentation is being prepared, please stay tuned",mC=JSON.parse(`{"game":"Games","web":"WEB","modeling":"Mobile Applications","animation":"Programming Languages","server":"Servers","aboutunity":"A little story about Unity","aboutunitycontent":"Unity is a well-known commercial 3D engine. Why not mention games directly? Because, in addition to its use in the gaming industry, it is also widely used in other industries such as architecture, film, advertising, education, etc. Once, when I went to take a driving test, one of the VR driving training modules for beginners was built using Unity. Its advantages and disadvantages are relatively obvious: its compatibility is impressive, but achieving the ultimate visual experience still requires a lot of work. However, as far as I know, the official focus on cross-platform and hardware compatibility is higher. From my own perspective, I really like Unity; it's very friendly to indie developers, allows for rapid development, and has extremely low learning costs for me. You might not believe it, but in one week, I went from learning to completing a full VR game demo. I don't highly recommend video learning because with videos you need fixed times, but by following the documentation step by step, you can control your own time and think independently, rather than following the teacher's ideas. However, a good teacher will always analyze and provide you with some quality advice. But you can master it and gradually absorb your own experience.","aboutunrealengine":"A little story about Unreal Engine","aboutunrealenginecontent":"Why did I start learning Unreal Engine? I have played some games with excellent experiences that all use Unreal Engine, and it is said that it can create the best visual experiences among all commercial engines, so I wanted to try it too. The first choice was version 5, and I was very satisfied with its space construction, visual effects, and physical motion experience, provided that you use high-quality assets and high-performance code. This choice was prompted by dissatisfaction with Unity's rendering results.","aboutblender":"A little story about Blender","aboutblendercontent":"Besides Blender, there are many other excellent tools. Why did I choose to use it? To be honest, I'm not very sure. Maybe it's because when I was searching for tools, it ranked higher, so I clicked on it, haha.","aboutvue":"A little story about Vue","aboutvuecontent":"Before using Vue, I was using React, but I found some performance and coding style issues. Vue makes writing code more comfortable for me and achieves excellent performance without extra work. The developers of the Vue team are also very enthusiastic; they are always active on social platforms helping developers solve problems, which gives me a reliable experience and makes me feel passionate. In the new version Vue 3, you can get a better coding experience. Vue is like a paintbrush in your hands, allowing you to freely create whatever you want. The Composition API also makes your code cleaner and easier to understand and think. Even You takes good care of his skin and has a good figure and pleasant voice, so I also enjoy watching his speeches, live streams, and videos about Vue and related tools.","aboutnuxt":"A little story about Nuxt","aboutnuxtcontent":"Nuxt is a meta-framework for Vue. It can implement SSR server-side rendering, and it can simplify configuration and global automatic imports, automatic routing, and even many plugins and libraries can work without configuration, which is very comfortable for someone like me who is lazy. Additionally, its plugin store is very good; I give it 5 stars.","aboutthreejs":"A little story about Three.js","aboutthreejscontent":"WebGL and WebGPU allow you to fully leverage the hardware GPU performance, no longer limited to the browser. However, in cases where you use remote resources, you need a lot of lazy loading and additional processing to achieve a better experience. In short, it gives your project more possibilities. If you know webVR and webAR, you should understand that it's not just about creating virtual spaces or 3D models.","aboutflutter":"A little story about Flutter","aboutfluttercontent":"Flutter is my final choice among the many cross-platform frameworks I have tried. It uses a self-rendering approach, and hot reload is very comfortable. This means you don't have to rely on any native modules to freely build any appearance and components, and even with overly complex animations, you can achieve excellent rendering frame rates. Of course, if you only want the best performance and rendering frame rates, uniapp x is a better choice because it conditionally compiles directly into the corresponding native code, but the customization space is limited. Choosing Flutter also means you have to face the learning cost of Dart, but all language logic is interconnected. If you are proficient in a programming language, it becomes very easy to pick up Dart. I spent less than a week learning it and building a demo.","aboutnativescript":"A little story about NativeScript","aboutnativescriptcontent":"NativeScript is a framework for cross-platform development that relies on native modules and supports Vue syntax, which significantly lowers the learning cost for developers familiar with Vue. It might take only one or two hours to get started. The reason I chose to learn it at the time was also because it supports Vue syntax and has high performance, but the customization space is limited and requires more work.","aboutuniappx":"A little story about uni-app x","aboutuniappxcontent":"uni-app x is a branch version of uniapp. It supports Vue 3 syntax and conditionally compiles into the corresponding native code, and it also supports hot reload, but the customization space is limited. uni-app is very popular in China. It can not only build cross-platform applications but also cross-platform mini-programs and fast applications, such as WeChat mini-programs. However, the HbuilderX editor is not very user-friendly; compared to VSCode, many interactive scenarios show obvious frame drops, the smoothness is poor, the appearance is ugly, and the plugin store requires watching ads to download plugins.","abouttauri":"A little story about Tauri","abouttauricontent":"Tauri is a cross-platform application framework built using the Rust language. It also supports building desktop applications, such as for Windows, macOS, and Linux. It is one of my motivations for learning Rust; its performance is excellent. Currently, the backend system of my new project has been developed using Rust.","aboutionic":"A little story about Ionic","aboutioniccontent":"It bridges native APIs through Capacitor and does not support hot reload. The only advantage is that you can directly package an existing web project into a mobile application, but the performance and user experience are very poor, making it suitable only for rapid development.","aboutjavascript":"A little story about JavaScript","aboutjavascriptcontent":"JavaScript is one of the programming languages I use most frequently. At present, I consider it to be a very versatile programming language tool; it can almost build anything, including smart contracts, client-side, server-side systems, etc. It has been with me for many years.","abouttypescript":"A little story about TypeScript","abouttypescriptcontent":"TypeScript is a superset of JavaScript that supports static type checking. If you are familiar with JS, you will also be able to pick up TS quickly. The syntax of TS is very similar to JS, but TS's type system allows you to code more safely and efficiently.","aboutrust":"A little story about Rust","aboutrustcontent":"Rust is a systems programming language with excellent performance, and it also supports concurrent programming. Its ownership and lifetime management are very strict, allowing it to catch many potential errors during the compilation phase. It also supports generic programming, which makes coding more flexible and efficient. It has many possibilities; it is being used in scenarios that require safety and performance, such as blockchain and industrial systems.","aboutdart":"A little story about Dart","aboutdartcontent":"Dart is the programming language for Flutter. Currently, I only use it to design client-side UIs; using Rust for backend systems is a wiser choice.","aboutpython":"A little story about Python","aboutpythoncontent":"I was forced to learn Python due to work reasons because I needed to rewrite some open-source tools written in Python to integrate into my project, unfortunately. 😔","aboutcsharp":"A little story about C#","aboutcsharpcontent":"Used to write Unity game scripts; it's very comfortable, like writing essays.","aboutcpp":"A little story about C++","aboutcppcontent":"Used to write Unreal Engine game scripts; since I started using Blueprints, I have rarely written C++.","aboutswift":"A little story about Swift","aboutswiftcontent":"Used to write iOS applications, but after using Flutter, I have rarely written Swift.","aboutjava":"A little story about Java","aboutjavacontent":"This is a sad story. Spring, Spring Boot.... I don't want to talk about it anymore. I just want to say, I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again. I never want to use Java again.","aboutnodejs":"A little story about Node.js","aboutnodejscontent":"Node.js is the runtime environment for JavaScript that allows JavaScript to run on the server side, making JS a key language for full-stack development.","aboutexpress":"A little story about Express","aboutexpresscontent":"Express is a web framework for Node.js, a top choice for rapid development. However, it can feel insufficient for large-scale projects.","aboutnestjs":"A little story about Nest.js","aboutnestjscontent":"Nest.js has built-in support for Express and Fastify, it supports TypeScript, and it also supports modular development, allowing you to better organize your code, making it suitable for building large-scale projects."}`),gC="《My Starry Sky》 - My Starry Sky",_C="《My Starry Sky》 is an experimental game project that has an infinite-sized generative universe. It generates new universes and universe elements through its own algorithm by reasoning and combining elements, but it has not yet implemented all of its designs. The new version will have more new content and features added, preparing for the future to enter a reasoning-based generative planet. Thank you for your support and experience of this game. It supports 10 different Earth languages!",vC="Available on App Store! Search: My Starry Sky",bC="Supported devices: iPhone-iPad-Mac-Vision Pro",xC={skip:CA,language1:PA,language2:LA,next:IA,enter:DA,language3:UA,language4:NA,language5:FA,language6:OA,language7:kA,language8:zA,language9:BA,language10:VA,language11:$A,language12:HA,language13:GA,hello:WA,application:jA,game:qA,tool:XA,openSource:JA,account:YA,routes:KA,di:ZA,di1:QA,di2:eR,di3:tR,di4:nR,di5:iR,a1:rR,a2:sR,a2a1:aR,a3:oR,a4:lR,a4a1:cR,a5:uR,a6:dR,a7:fR,a7a1:hR,a8:pR,a9:mR,a9a1:gR,a10:_R,a10a1:vR,a11:bR,a11a1:xR,a12:yR,a12a1:SR,a13:ER,a13a1:MR,a14:TR,a14a1:wR,a15:AR,a15a1:RR,a16:CR,a17:PR,a17a1:LR,a18:IR,a18a1:DR,a19:UR,a20:NR,a20a1:FR,a21:OR,a22:kR,a22a1:zR,a23:BR,a24:VR,a24a1:$R,a25:HR,a26:GR,a26a1:WR,a27:jR,skillsTitle:qR,development:XR,web:JR,windows:YR,modeling:KR,animation:ZR,design:QR,projectsTitle:eC,project1:tC,project2:nC,project3:iC,project4:rC,title:sC,info:aC,name:oC,name1:lC,role1:cC,role:uC,bookmarktip:dC,aboutMeTitle:fC,bookmarktip1:hC,opensource:pC,intro1:mC,game1:gC,game1a1:_C,game1a2:vC,game1a3:bC},yC="跳过",SC="你好，我是ponzs，这里是我构建的生成式虚拟空间，请选择你的语言偏好，然后尝试使用手指在眼前滑动控制视角，确保我们的控制器在正常运行，如果一切就绪我们可以继续探索这个空间。",EC="我选好了",MC="这是一片由无数个星星构成的星空，每个星星都有着自己的故事，我也渴望有一天能成为它们的其中之一。在无尽的黑暗中注入希望，在微弱的光芒中注入灵魂，当它们团结在一起时，它们将成为无尽的星空，即便星星总会有陨落和消逝的一天，但总会有新的星星再次闪烁，让这片星空成为永恒。",TC="我们将要进入这片星空的深处，穿梭其中，感受它们的生命。这个飞行器给你，虽然是老款，但经久耐用。试试吧，如果启动不了就下回再来。（看到哪个光环了吗？那就是启动按钮，按住它启动推动器，你将在这个宇宙里获得绝对自由的探索能力！）",wC="获得背包式飞行器",AC="表面材质使用柔性太阳能板，可实时吸收光能持续提供能源，通过电能为飞行器提供动力，适用于真空环境",RC="尝试启动背包式飞行器",CC="恭喜你，已经熟练使用飞行器了，如果你想继续探索这片星空，请继续。",PC="一望无际，对吧？",LC="就像你现在遇到的困难一样，它又算得了什么呢？",IC="我忽然想起来一个人，强尼银手你认识吗？ 对，就是曾经被困在relic里的哪个哥们。",DC="V，永远不要放弃战斗。",UC="我啰嗦完了，你可以走了",NC="下一步",FC="进入主页",OC="你好，世界",kC="应用",zC="游戏",BC="工具",VC="开源组件",$C="账户管理",HC={aboutme:"关于我",products:"产品中心",contact:"联系我们",apps:"应用",login:"登录",register:"注册","reset-password":"重置密码","forgot-password":"忘记密码",logout:"退出登录","send-code":"发送验证码"},GC="千羽",WC="反馈问题",jC="如果您需要我们的帮助或有任何关于DiMEMO的问题和建议，请通过以下链接发送邮件联系我们：",qC="发送邮件",XC="关于隐私",JC="千羽不会收集您的任何数据，数据的计算和处理都在您的设备本地进行，储存方式目前仅储存在您设备本地的文件系统，未来的某个版本中可能会使用iCloud进行同步和储存您在DiMEMO中多个Apple设备的数据，但是否使用该功能我们会进行提前询问，您有权利选择使用或关闭。另外在我们计划中还会存在以实现数据永存为目的的储存方案，如果更新依然会先提前告知您是否启动该功能。",YC="Hi,我是一个",KC="游戏开发者",ZC="为什么会成为游戏开发者？主要原因还是因为爱玩，最早的启蒙是魔兽世界地图编辑器",QC="目前专注于研发",eP="现代化游戏",tP="现代化游戏？我的理解是更强的游戏体验和具备过去没有做到过的功能",nP="包括更多的全新游戏载体和高质量游戏情况下的全栈提速能力,全新的人工智能交互,动画和3D资产设计",iP="另外我是一个",rP="骨灰级游戏玩家",sP="千款游戏消费者上万小时游戏时长玩家",aP="非常喜欢的几款游戏：",oP="赛博朋克2077",lP="欢迎来到夜之城！这里是WNS新闻！真是一个充满回忆的世界。谁不想成为V？但又有多少人敢成为V？你知道我说的是那个V。他是夜之城的传奇",cP="黑神话悟空",uP="菩提祖师从来没有抛弃过小猴子。",dP="GTA",fP="麦克和崔佛都是我的兄弟，就算失去一切，我也不会让他们任何一个人死。",hP="SCUM",pP="我在这个游戏里开过酒吧，认识了很多好朋友，但也遇到了一些就像游戏名字一样的人，由于玩的那个服务器经常删档，所以后来我们自己搭了一个游戏服务器，最终因为服务器收支不平衡停止了运营。即便赔钱也不想坑喜欢这个游戏的朋友，感谢在这个小岛上一起生活过的兄弟们，等我有钱了我一定会重启服务器永不停服。",mP="Ready or not",gP="想和几个哥们一块打CQB才买的，这款游戏做的确实不错，好评",_P="使命召唤",vP="使命召唤系列，既是童年回忆又是我现在认为的战争游戏天花板，在每个时代的系列版本作品都是顶级，这里涵盖了很多，逼真的画质和音频，符合现实物理逻辑的枪械和动画质感，能让人感到热血的剧情。肥皂永不死。",bP="无人深空",xP="它有VR和PC两个版本，另外还有一些独特的生成式游戏内容设计，个人认为是很不错的，但我并不是特别喜欢这种画风。",yP="游戏之外：喜欢到湖边或者海边，找一个可以坐的地方，最好有一个桌子，放一杯",SP="冰镇果汁",EP="果汁可以是椰汁，橙汁，西瓜汁",MP="冰镇可乐",TP="不是冰的不好喝",wP="也行，旁边再放一个",AP="简易烟灰缸",RP="我一般会直接炫一罐红牛和咖啡，然后用咖啡纸杯弹烟灰，用红牛罐放烟头。为啥？咖啡纸杯杯口大 弹烟灰不容易弹到外面，红牛罐一般是金属制作的，所以不用担心烟头烫坏。",CP="点上一根",PP="烟",LP="一般会首选2款烟：555双爆珠，小太阳红色中南海",IP="戴上耳机开启降噪模式，开始随机播放我的",DP="歌单",UP="想得到我的歌单吗？网易云搜索:ponzS",NP="开始思考一些新设计并制作demo，直到",FP="电脑电量",OP="外带电脑一般会选择MacBook Air，续航一整天没问题，还能剩下不少电量，从来没有过续航焦虑，并且足够轻，性能也够用",kP="消耗至0%",zP="技能",BP="游戏 (Unity, Unreal Engine, Blender)",VP="Web (Vue.js, Nuxt.js, Three.js)",$P="Windows (tauri, electron)",HP="移动应用 (Flutter, NativeScript, uni-app, uni-app x, ionic)",GP="编程语言 (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",WP="服务器 (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",jP="项目经验类型",qP="全栈渐进式Web应用-桌面应用-移动应用",XP="WebGL-WebGPU-WebXR-WebVR-PWA游戏",JP="虚幻5引擎游戏-Unity引擎游戏-C++与C#项目-蓝图与UVS项目-游戏策划-技术美术-音乐",YP="Oculus-Pico-VR-XR-MR",KP="联系",ZP="Bug-漏洞-报错-建议-催更-合作机会：",QP="ponzs",eL="ponzs,中文名：张郭艾，中国国籍",tL="全栈工程师",nL="Web-VR-PC-移动应用全栈开发者",iL="提示！",rL="关于我",sL="点击高亮关键词可查看内容详情",aL="使用文档正在制作中，敬请期待",oL={game:"游戏",web:"WEB",modeling:"移动应用",animation:"编程语言",server:"服务器",aboutunity:"关于Unity的小故事",aboutunitycontent:"Unity是一个知名的商业3D引擎，为什么不直接提到游戏呢？因为它除了在游戏行业中的使用，在其他行业中也有广泛的应用，比如建筑、电影、广告、教育等。有一次我去考驾照，有一项针对新手的VR驾驶训练，它就是使用Unity构建的，优点和缺点也相对明显，它的兼容性有目共睹，但想要达到极致的视觉体验还有很多工作需要做，不过据我所知，官方对于跨平台和硬件设备兼容性上的专注度更高。从我自己的角度去看，我是很喜欢unity的，它对独立开发者很友好，可以实现快速开发，且它的学习成本对我来说是极低的，说了你可能不信，一周的时间我从学习到完成了一款完整的VR游戏demo，我不是很建议视频学习，因为视频你需要固定的时间，但通过文档来一步一步进行你可以自行控制时间和自己思考，而不是跟着老师的思路，但一名优秀的老师总是会分析给你一些优质的经验，不过你可以掌握后慢慢吸收属于你自己的经验。",aboutunrealengine:"关于Unreal Engine的小故事",aboutunrealenginecontent:"为什么会学习虚幻引擎呢？我有玩过一些体验非常好的游戏都在使用虚幻引擎，并且据说它能构建的视觉体验是所有商业引擎中最好的，因此我也想试试。第一次接触的选择是version5，它构建的空间，视觉效果和物理运动体验我都很满意，前提是你需要使用优质的素材和高性能的代码。这个选择是对于Unity的渲染结果不满所引起的。",aboutblender:"关于Blender的小故事",aboutblendercontent:" 除了Blender以外也有很多优秀的工具，为什么我会选择用它？实话讲我也不是很清楚，可能是因为它是我搜索工具的时候它排名比较靠前我就点开了吧，哈哈。",aboutvue:"关于Vue的小故事",aboutvuecontent:"在用Vue之前我在用React，但我发现了其中的一些性能和编码风格的问题，Vue让我写起来更舒服，且无需额外的工作也能得到极佳的性能，Vue团队的开发者也非常热情，他们一直都是很积极的在社交平台帮助解决开发者们的问题，这让我有一种很可靠的体验，也让我感受到了热情。在新版本的vue3中可以得到更好的编码体验，Vue就像一只画笔在你的手里，可以随意的画出你想要的东西，组合式API也会让你的代码更简洁和更容易理解和思考，Even You的皮肤保养的很好而且身材也不错声音也好听，所以我也会很愿意看他的演讲和直播还有关于vue和相关工具的视频。",aboutnuxt:"关于Nuxt的小故事",aboutnuxtcontent:"Nuxt是Vue的元框架，它可以实现SSR服务端渲染，另外它可以简化配置和全局自动导入自动路由，甚至很多插件和库可以实现0配置，让我这种懒人会很舒服。另外它的插件商店非常好，给它5星好评。",aboutthreejs:"关于Three.js的小故事",aboutthreejscontent:"webGL和webGPU可以让你充分利用硬件GPU性能，而不再限制于浏览器，不过在一些远程资源的使用情况下，你需要非常多的懒加载和额外的处理实现更好的体验。总之它会让你的项目存在更多的可能性，如果你知道webVR和webAR，你应该明白它不仅仅只是可以构建一个虚拟空间或是3D模型。",aboutflutter:"关于Flutter的小故事",aboutfluttercontent:"Flutter是我尝试过非常多的跨平台框架中最终的选择，使用自渲染的方案，热重载也很舒服，这意味着你可以不必依赖任何的原生模块随意构建任何外观和组件，同时即便动画过于复杂的情况下也能达到极佳的渲染帧率，当然如果只是想要最好的性能和渲染帧率uniapp x是更好的选择，因为它会直接条件编译为对应的原生代码，但自定义空间受限制。选择Flutter的同时意味着你需要面对Dart的学习成本，不过所有语言逻辑都是相通的，如果你精通某一门编程语言，你会非常容易上手Dart，我大概花了不到一周的时间完成了学习并构建了Demo。",aboutnativescript:"关于NativeScript的小故事",aboutnativescriptcontent:"NativeScript是依赖原生模块实现跨平台开发的框架，同时能使用vue语法，这对于熟悉vue的开发者大幅度降低了学习成本，可能一两个小时就能上手了，当时选择学习它也是因为它支持vue语法，高性能但自定义空间受限需要更多的工作。",aboutuniappx:"关于uni-app x的小故事",aboutuniappxcontent:"uni-app x是uniapp的分支版本，它支持vue3语法，通过条件编译为对应的原生代码，同时它支持热重载，但自定义空间受限制。uni-app在中国非常受欢迎，它不仅可以构建跨平台应用，还能构建跨平台小程序快应用，例如微信小程序。但是HbuilderX编辑器很不好用，很多交互情况和vscode相比明显掉帧，流畅度很差，外观丑，插件商城需要看广告才能下载插件。",abouttauri:"关于Tauri的小故事",abouttauricontent:"Tauri是使用Rust语言构建的跨平台应用框架,它还支持构建桌面应用，例如Windows、macOS、Linux。它是我学习Rust的动力之一，性能极佳，目前我的新项目的后端系统一直是在使用Rust编写了。",aboutionic:"关于ionic的小故事",aboutioniccontent:"它通过capacitor桥接原生API，不支持热重载，唯一的优点是可以直接把现有的web项目包装成一个移动应用，但性能和体验很差，适合快速开发。",aboutjavascript:"关于JavaScript的小故事",aboutjavascriptcontent:"JavaScript是我最常用的编程语言之一，目前来看是我认为非常万能的一个编程语言工具，它几乎可以构建任何东西，包括智能合约-客户端-服务端系统等等。它已经陪伴了我很多年。",abouttypescript:"关于TypeScript的小故事",abouttypescriptcontent:" TypeScript是JavaScript的超集，它支持静态类型检查，如果你熟悉js，那么你也会很快上手ts，ts的语法和js非常相似，但ts的类型系统可以让你在编写代码时更加安全和高效。",aboutrust:"关于Rust的小故事",aboutrustcontent:"Rust是系统级编程语言，性能极佳，同时它还支持并发编程，它的所有权和生命周期管理非常严格，它在编译阶段就能发现很多潜在的错误，同时它还支持泛型编程，编写代码时更加灵活和高效率。它有很多的可能性，区块链 工业系统 等等追求安全性和性能的场景都在使用了。",aboutdart:"关于Dart的小故事",aboutdartcontent:"Dart是Flutter的编程语言，我目前只使用它绘制客户端UI，后端系统使用Rust是更明智的选择。",aboutpython:"关于Python的小故事",aboutpythoncontent:"Python是由于工作原因被迫学习的，因为需要改写一些python编写的开源工具集成到我的项目中，无奈。😔",aboutcsharp:"关于C#的小故事",aboutcsharpcontent:"用来写unity游戏脚本的，和写作文一样，很舒服。",aboutcpp:"关于C++的小故事",aboutcppcontent:"用来写虚幻引擎游戏脚本的，自从开始用了蓝图，我就很少写C++了。",aboutswift:"关于Swift的小故事",aboutswiftcontent:"用来写ios应用的，但用了flutter以后，我就很少写swift了。",aboutjava:"关于Java的小故事",aboutjavacontent:"这是一段忧伤的故事，spring，springboot....我不想说了，我只想说，我再也不想用java了。 我再也不想用java了。我再也不想用java了。 我再也不想用java了。 我再也不想用java了。我再也不想用java了。 我再也不想用java了。 我再也不想用java了。我再也不想用java了。 我再也不想用java了。 我再也不想用java了。我再也不想用java了。 我再也不想用java了。 我再也不想用java了。",aboutnodejs:"关于Node.js的小故事",aboutnodejscontent:"Node.js是JavaScript的运行时环境，它可以让JavaScript在服务器端运行,让js成为全栈语言的关键。",aboutexpress:"关于Express的小故事",aboutexpresscontent:"Express是Node.js的Web框架，快速开发首选。但大型项目会显得力不从心。",aboutnestjs:"关于Nest.js的小故事",aboutnestjscontent:"Nest.js内置了express和fastify，它支持TypeScript，同时它还支持模块化开发，让你可以更好的组织代码,适合构建大型项目。"},lL="《My Starry Sky》 - 我的星空",cL="《My Starry Sky》是一个实验性的游戏项目，它拥有无限大的生成式宇宙，通过自研算法推理组合元素生成全新的宇宙和宇宙元素等，它目前并未实现所有的设计，未来的新版本会有更多的新内容和功能加入其中，已为以后进入推理型生成式星球做准备！感谢您体验和支持这款游戏。支持10种不同的地球语言！",uL="已上架App Store! 搜索: My Starry Sky",dL="支持的设备：iPhone-iPad-Mac-Vision Pro",fL={skip:yC,language1:SC,language2:EC,language3:MC,language4:TC,language5:wC,language6:AC,language7:RC,language8:CC,language9:PC,language10:LC,language11:IC,language12:DC,language13:UC,next:NC,enter:FC,hello:OC,application:kC,game:zC,tool:BC,openSource:VC,account:$C,routes:HC,di:GC,di1:WC,di2:jC,di3:qC,di4:XC,di5:JC,a1:YC,a2:KC,a2a1:ZC,a3:QC,a4:eP,a4a1:tP,a5:nP,a6:iP,a7:rP,a7a1:sP,a8:aP,a9:oP,a9a1:lP,a10:cP,a10a1:uP,a11:dP,a11a1:fP,a12:hP,a12a1:pP,a13:mP,a13a1:gP,a14:_P,a14a1:vP,a15:bP,a15a1:xP,a16:yP,a17:SP,a17a1:EP,a18:MP,a18a1:TP,a19:wP,a20:AP,a20a1:RP,a21:CP,a22:PP,a22a1:LP,a23:IP,a24:DP,a24a1:UP,a25:NP,a26:FP,a26a1:OP,a27:kP,skillsTitle:zP,development:BP,web:VP,windows:$P,modeling:HP,animation:GP,design:WP,projectsTitle:jP,project1:qP,project2:XP,project3:JP,project4:YP,title:KP,info:ZP,name:QP,name1:eL,role1:tL,role:nL,bookmarktip:iL,aboutMeTitle:rL,bookmarktip1:sL,opensource:aL,intro1:oL,game1:lL,game1a1:cL,game1a2:uL,game1a3:dL},hL="Пропустить",pL="Привет, я понзс, это созданное мной генеративное виртуальное пространство. Пожалуйста, выберите ваш языковой предпочтение, а затем попробуйте использовать палец, чтобы управлять перспективой перед собой. Убедитесь, что наш контроллер работает нормально. Если все готово, мы можем продолжить исследовать это пространство.",mL="Я выбрал",gL="Следующий",_L="Войти в дом",vL="Это бесконечное пространство, состоящее из бесконечного количества планет, которые падают друг на друга и снова соединяются. Это бесконечное пространство, состоящее из бесконечного количества планет, которые падают друг на друга и снова соединяются. Это бесконечное пространство, состоящее из бесконечного количества планет, которые падают друг на друга и снова соединяются.",bL="Мы собираемся войти в глубины этого звездного неба, перемещаться среди них и ощущать их жизнь. Этот летательный аппарат для вас, хотя он и старой модели, но очень прочный. Попробуйте, если не запустится, приходите в следующий раз.(Видишь эту аурелу? Это кнопка запуска. Нажмите на нее, чтобы активировать ракету, и ты получишь абсолютную свободу исследовать этот мир!)",xL="Получить ранец-стиль летательного аппарата",yL="Поверхностный материал использует гибкие солнечные панели, которые могут в реальном времени поглощать световую энергию для постоянного обеспечения энергией, обеспечивая электрическую мощность для летательного аппарата, подходит для вакуумной среды.",SL="Попробуйте запустить ранец-стиль летательного аппарата",EL="Поздравляю, вы научились использовать механизм, если вы хотите продолжить исследовать это звездное небо, продолжайте.",ML="Бесконечное море, правда?",TL="Как ваша трудность сейчас, это что-то, что можно рассмотреть?",wL="Я внезапно вспомнил о человеке, знаете ли, Джонни Силверхенд? Да, тот, кто был застрял в релике.",AL="В, никогда не сдавайся в бою.",RL="Я закончил, ты можешь идти",CL="Привет, мир",PL="Приложение",LL="Игра",IL="Инструмент",DL="Открытые компоненты",UL="Управление аккаунтом",NL={aboutme:"Обо мне",products:"Центр продуктов",contact:"Связаться с нами",apps:"Приложения",login:"Войти",register:"Регистрация","reset-password":"Сброс пароля","forgot-password":"Забыли пароль",logout:"Выйти","send-code":"Отправить код"},FL="Цяньюй",OL="Обратная связь",kL="Если вам нужна наша помощь или у вас есть вопросы и предложения по поводу DiMEMO, пожалуйста, отправьте нам письмо по следующей ссылке:",zL="Отправить письмо",BL="О конфиденциальности",VL="Цяньюй не собирает ваши данные. Вычисления и обработка данных выполняются локально на вашем устройстве. В настоящее время данные хранятся только локально в файловой системе вашего устройства. В будущей версии мы можем использовать iCloud для синхронизации и хранения ваших данных на нескольких устройствах Apple с помощью DiMEMO. Однако мы заранее спросим, разрешить ли эту функцию, и вы имеете право выбрать ее использование или отключение. Кроме того, мы планируем реализовать решения для хранения данных с целью их долговечности. При обновлении мы заранее сообщим вам, включать ли эту функцию.",$L="Привет, я",HL="разработчик игр",GL="Почему я стал разработчиком игр? Главная причина — любовь к играм. Мое раннее вдохновение — редактор карт World of Warcraft.",WL="В настоящее время сосредоточен на разработке",jL="Современные игры",qL="Современные игры? Я понимаю это как улучшенный игровой опыт и функции, которые раньше были невозможны.",XL="Включая больше новых игровых платформ и возможностей полной стековой оптимизации в условиях высококачественного гейминга, новые ИИ-взаимодействия, анимацию и дизайн 3D-активов.",JL="Кроме того, я являюсь",YL="хардкорным геймером",KL="Геймером, который сыграл тысячи игр с десятками тысяч часов игрового времени.",ZL="Некоторые из моих любимых игр:",QL="Cyberpunk 2077",eI="Добро пожаловать в Найт-Сити! Это WNS Новости! Такой ностальгический мир. Кто же не хочет быть V? Но сколько людей осмелятся быть V? Вы знаете, о ком я говорю. Он легенда Найт-Сити.",tI="Black Myth: Вуконг",nI="Мастер Бодхи никогда не бросил малыша-обезьяну.",iI="GTA",rI="Майкл и Тревор — мои братья. Даже если я потеряю всё, я не позволю умереть ни одному из них.",sI="SCUM",aI="Я открыл бар в этой игре, встретил много хороших друзей, но также столкнулся с некоторыми людьми, как и название игры. Поскольку сервер, на котором я играл, часто сбрасывался, мы позже создали собственный игровой сервер, который в конечном итоге прекратил работу из-за несбалансированности расходов и доходов сервера. Даже если это означает потерю денег, я не хотел подводить друзей, любящих эту игру. Спасибо моим братьям, которые жили со мной на этом маленьком острове. Когда у меня появятся деньги, я обязательно перезапущу сервер и буду держать его в работе навсегда.",oI="Ready or Not",lI="Купил, чтобы играть в CQB с парочкой друзей. Эта игра действительно хорошо сделана, хорошие отзывы.",cI="Call of Duty",uI="Серия Call of Duty — это как детские воспоминания, так и то, что я сейчас считаю вершиной военных игр. Каждая версия серии в разные эпохи — первоклассная, охватывает многое с реалистичной графикой и звуком, оружием и анимацией, соответствующей реальной физике, захватывающими сюжетными линиями, которые вызывают страсть. Мыльный никогда не умрет.",dI="No Man's Sky",fI="Есть версии VR и ПК, а также некоторые уникальные генеративные игровые контент-дизайны. Лично я думаю, что это довольно хорошо, но мне не особо нравится такой стиль искусства.",hI="Помимо игр: люблю ходить к озеру или морю, найти место, где можно сесть, желательно с столом, и взять чашку",pI="Охлажденный сок",mI="Сок может быть кокосовый, апельсиновый или арбузный.",gI="Охлажденная кола",_I="Не вкусно, если не холодная.",vI="Или поставь еще одну рядом.",bI="Простая пепельница",xI="Я обычно беру банку Red Bull и кофе, затем использую бумажный стакан для кофе, чтобы отбросить пепел, и банку Red Bull для окурков. Почему? Бумажный стакан для кофе имеет широкий край, поэтому пепел легче отбросить, не разбрызгивая его наружу. Банки Red Bull обычно сделаны из металла, поэтому не нужно беспокоиться о том, что окурки подожгут их.",yI="Зажечь одну",SI="Сигарета",EI="Обычно предпочитаю два типа сигарет: 555 Dual Burst и Little Sun Red Zhongnanhai.",MI="Надеть наушники, включить режим шумоподавления и начать случайно воспроизводить мой",TI="Плейлист",wI="Хотите мой плейлист? Поиск в NetEase Cloud: ponzS",AI="Начать думать над новыми дизайнами и создавать демо до тех пор, пока",RI="Аккумулятор компьютера",CI="Обычно беру MacBook Air, когда беру ноутбук с собой. Он держит заряд весь день без проблем и еще остается много батареи. Никогда не было беспокойства о батарее, и он достаточно легкий, а производительность также достаточна.",PI="Разряд батареи до 0%",LI="Навыки",II="Игры (Unity, Unreal Engine, Blender)",DI="Веб (Vue.js, Nuxt.js, Three.js)",UI="Windows (tauri, electron)",NI="Мобильные приложения (Flutter, NativeScript, uni-app, uni-app x, ionic)",FI="Языки программирования (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",OI="Серверы (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",kI="Типы опыта проектов",zI="Полноценное прогрессивное веб-приложение - десктопное приложение - мобильное приложение",BI="WebGL-WebGPU-WebXR-WebVR-PWA игры",VI="Игры на Unreal Engine 5 - Игры на Unity Engine - Проекты на C++ и C# - Проекты на Blueprints и UVS - Дизайн игр - Техническое искусство - Музыка",$I="Oculus-Pico-VR-XR-MR",HI="Контакт",GI="Ошибки - Уязвимости - Сбои - Предложения - Запросы на обновление - Возможности сотрудничества:",WI="ponzs",jI="ponzs, Китайское имя: Чжан Гоуаи, Гражданство Китая",qI="Полноценный инженер",XI="Веб-VR-ПК-Мобильный полноценный разработчик приложений",JI="Подсказка!",YI="Обо мне",KI="Нажмите на выделенные ключевые слова, чтобы просмотреть детали содержания",ZI="Документация в разработке, пожалуйста, оставайтесь на связи",QI=JSON.parse('{"game":"Игры","web":"ВЭБ","modeling":"Мобильные приложения","animation":"Языки программирования","server":"Серверы","aboutunity":"Небольшая история о Unity","aboutunitycontent":"Unity — известный коммерческий 3D-движок. Почему не упомянуть напрямую игры? Потому что помимо использования в игровой индустрии, он широко применяется и в других отраслях, таких как архитектура, кино, реклама, образование и т.д. Однажды я пошел сдавать водительские экзамены, и одна из VR-тренировок для новичков была построена с использованием Unity. Преимущества и недостатки тоже относительно очевидны: его совместимость впечатляет, но для достижения высшего визуального опыта требуется еще много работы. Однако, насколько я знаю, официальная поддержка кроссплатформенности и аппаратной совместимости выше. С моей точки зрения, мне очень нравится Unity, он дружелюбен к независимым разработчикам, позволяет быстро развиваться, и затраты на обучение для меня крайне низки. Вам, возможно, не поверите, но за неделю я изучил его и создал полноценный демо-проект VR-игры. Я не очень рекомендую учиться по видео, потому что вам нужны фиксированные времена, а проходя через документацию шаг за шагом, вы можете контролировать время и думать самостоятельно, а не следовать мыслям учителя. Однако хороший учитель всегда будет анализировать и давать вам качественные советы. Но вы можете освоиться и впоследствии поглощать собственный опыт.","aboutunrealengine":"Небольшая история о Unreal Engine","aboutunrealenginecontent":"Почему я начал изучать Unreal Engine? Я играл в некоторые отличные игры, которые использовали Unreal Engine, и, как говорят, он способен создавать лучшие визуальные эффекты среди всех коммерческих движков, поэтому я тоже захотел попробовать. Мой первый выбор — версия 5, меня полностью устраивает построение пространства, визуальные эффекты и физическая симуляция, при условии, что вы используете качественные материалы и высокопроизводительный код. Этот выбор был вызван неудовлетворенностью результатами рендеринга Unity.","aboutblender":"Небольшая история о Blender","aboutblendercontent":"Помимо Blender есть много других отличных инструментов, почему я выбрал именно его? Честно говоря, я сам не очень уверен, возможно, потому что он был выше в рейтингах при поиске инструментов, и я просто его открыл, ха-ха.","aboutvue":"Небольшая история о Vue","aboutvuecontent":"Перед использованием Vue я работал с React, но обнаружил некоторые проблемы с производительностью и стилем кодирования. Vue позволяет мне работать более комфортно и без дополнительных усилий обеспечивает отличную производительность. Разработчики команды Vue также очень увлечены и активно помогают разработчикам на социальных платформах решать проблемы, что дает мне ощущение надежности и энтузиазма. В новой версии Vue 3 можно получить лучший опыт кодирования, Vue — это как кисть в ваших руках, позволяющая рисовать то, что вы хотите, а композиционный API делает ваш код более лаконичным и легким для понимания и размышлений. Even You (упомянутое лицо) хорошо ухаживает за кожей, имеет хорошую фигуру и приятный голос, поэтому я с удовольствием смотрю его выступления и живые трансляции, а также видео о Vue и связанных инструментах.","aboutnuxt":"Небольшая история о Nuxt","aboutnuxtcontent":"Nuxt — это метафреймворк для Vue, он может выполнять SSR (серверный рендеринг), а также упрощает конфигурацию и глобальный автоимпорт, автоматическую маршрутизацию и даже множество плагинов и библиотек могут работать без настройки, что очень удобно для таких ленивцев, как я. Кроме того, его магазин плагинов очень хорош, заслуживает 5 звезд.","aboutthreejs":"Небольшая история о Three.js","aboutthreejscontent":"webGL и webGPU позволяют вам полностью использовать производительность GPU, а не ограничиваться браузером, но при использовании некоторых удаленных ресурсов вам потребуется много ленивой загрузки и дополнительной обработки для лучшего опыта. В общем, это дает вашему проекту больше возможностей. Если вы знакомы с webVR и webAR, вы должны понимать, что это не просто создание виртуального пространства или 3D моделей.","aboutflutter":"Небольшая история о Flutter","aboutfluttercontent":"Flutter — мой окончательный выбор среди множества кроссплатформенных фреймворков, использующий собственный рендеринг и поддерживающий горячую перезагрузку, что очень удобно. Это означает, что вы можете свободно создавать любые интерфейсы и компоненты без зависимости от нативных модулей, даже при слишком сложной анимации можно достичь отличной частоты кадров. Конечно, если вы просто хотите лучшую производительность и частоту кадров, uniapp x — лучший выбор, потому что он напрямую компилируется в соответствующий нативный код, но ограничен в возможностях настройки. Выбор Flutter означает, что вы должны столкнуться с затратами на изучение Dart, но вся логика языка общая, если вы освоили какой-либо язык программирования, вам будет очень легко освоить Dart. Я потратил примерно неделю, чтобы изучить его и создать демо-проект.","aboutnativescript":"Небольшая история о NativeScript","aboutnativescriptcontent":"NativeScript — фреймворк для кроссплатформенной разработки, который зависит от нативных модулей и поддерживает синтаксис Vue, что значительно снижает затраты на обучение для разработчиков, знакомых с Vue. Возможно, вы сможете освоить его за час-два. Я выбрал его для изучения, потому что он поддерживает синтаксис Vue, высокая производительность, но ограничены возможности настройки, требуется больше работы.","aboutuniappx":"Небольшая история о uni-app x","aboutuniappxcontent":"uni-app x — это ветвь uni-app, он поддерживает синтаксис Vue 3, компилируется в соответствующий нативный код, поддерживает горячую перезагрузку, но ограничен в возможностях настройки. uni-app очень популярен в Китае, он может не только создавать кроссплатформенные приложения, но и кроссплатформенные мини-программы и быструю разработку приложений, например, мини-программы WeChat. Однако редактор HbuilderX очень неудобен, по сравнению с VSCode явно задерживается в интерактивных сценариях, плавность очень плохая, внешний вид некрасивый, магазин плагинов требует просмотра рекламы для загрузки плагинов.","abouttauri":"Небольшая история о Tauri","abouttauricontent":"Tauri — кроссплатформенный фреймворк для создания приложений на языке Rust, он также поддерживает создание настольных приложений для Windows, macOS и Linux. Это один из мотивов для изучения Rust, отличная производительность. В данный момент мой новый проектный бекенд постоянно разрабатывается на Rust.","aboutionic":"Небольшая история о Ionic","aboutioniccontent":"Он связывает нативные API через мост capacitor, не поддерживает горячую перезагрузку. Единственное преимущество — вы можете напрямую упаковать существующий веб-проект в мобильное приложение, но производительность и пользовательский опыт очень плохие, подходит для быстрого прототипирования.","aboutjavascript":"Небольшая история о JavaScript","aboutjavascriptcontent":"JavaScript — один из языков программирования, которые я использую чаще всего. На данный момент я считаю его очень универсальным инструментом программирования, он почти может создавать всё, включая умные контракты, клиентские и серверные системы и т.д. Он уже сопровождает меня много лет.","abouttypescript":"Небольшая история о TypeScript","abouttypescriptcontent":"TypeScript — это надстройка над JavaScript, он поддерживает статическую проверку типов. Если вы знакомы с JavaScript, вам будет очень легко освоить TypeScript. Синтаксис TypeScript очень похож на JavaScript, но система типов TypeScript делает ваш код более безопасным и эффективным при написании.","aboutrust":"Небольшая история о Rust","aboutrustcontent":"Rust — системный язык программирования с отличной производительностью, также поддерживает параллельное программирование. Его строгие правила владения и управления временем жизни позволяют обнаруживать множество потенциальных ошибок на этапе компиляции. Также поддерживает обобщенное программирование, что делает написание кода более гибким и эффективным. У него много возможностей, используется в блокчейне, промышленных системах и других сценариях, требующих безопасности и производительности.","aboutdart":"Небольшая история о Dart","aboutdartcontent":"Dart — язык программирования для Flutter. В настоящее время я использую его только для создания пользовательских интерфейсов на клиенте, для бекенд-систем более разумно использовать Rust.","aboutpython":"Небольшая история о Python","aboutpythoncontent":"Python я был вынужден изучить по работе, потому что нужно было переписать некоторые открытые инструменты на Python для интеграции в мой проект, к сожалению. 😔","aboutcsharp":"Небольшая история о C#","aboutcsharpcontent":"Используется для написания скриптов Unity, очень приятно, как написание сочинений.","aboutcpp":"Небольшая история о C++","aboutcppcontent":"Используется для написания скриптов Unreal Engine. С тех пор как я начал использовать Blueprint, я редко пишу на C++.","aboutswift":"Небольшая история о Swift","aboutswiftcontent":"Используется для написания iOS-приложений, но после перехода на Flutter я редко пишу на Swift.","aboutjava":"Небольшая история о Java","aboutjavacontent":"Это грустная история. Spring, Spring Boot... Я больше не хочу об этом говорить. Я просто хочу сказать, что больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java. Я больше не хочу использовать Java.","aboutnodejs":"Небольшая история о Node.js","aboutnodejscontent":"Node.js — среда выполнения JavaScript, которая позволяет запускать JavaScript на сервере, делая JS ключевым языком для полного стека.","aboutexpress":"Небольшая история о Express","aboutexpresscontent":"Express — это веб-фреймворк для Node.js, первоочередной выбор для быстрого развития. Но для крупных проектов он становится недостаточно мощным.","aboutnestjs":"Небольшая история о Nest.js","aboutnestjscontent":"Nest.js основан на Express и Fastify, поддерживает TypeScript и модульную разработку, что позволяет лучше организовать код. Подходит для построения крупных проектов."}'),eD="《My Starry Sky》 - Мое звездное небо",tD="《My Starry Sky》 — это экспериментальный игровой проект с бесконечным генеративным вселенной. С помощью собственных разработанных алгоритмов для вывода и комбинирования элементов генерируются новые вселенные и космические элементы. В настоящее время не все дизайны реализованы, в будущих версиях будут добавлены новые контенты и функции, подготовившиеся для дальнейшего перехода в планеты генеративного типа на основе вывода! Спасибо за то, что попробовали и поддержали эту игру. Поддерживает 10 различных земных языков!",nD="Вышло в App Store! Поиск: My Starry Sky",iD="Поддерживаемые устройства: iPhone, iPad, Mac, Vision Pro",rD={skip:hL,language1:pL,language2:mL,next:gL,enter:_L,language3:vL,language4:bL,language5:xL,language6:yL,language7:SL,language8:EL,language9:ML,language10:TL,language11:wL,language12:AL,language13:RL,hello:CL,application:PL,game:LL,tool:IL,openSource:DL,account:UL,routes:NL,di:FL,di1:OL,di2:kL,di3:zL,di4:BL,di5:VL,a1:$L,a2:HL,a2a1:GL,a3:WL,a4:jL,a4a1:qL,a5:XL,a6:JL,a7:YL,a7a1:KL,a8:ZL,a9:QL,a9a1:eI,a10:tI,a10a1:nI,a11:iI,a11a1:rI,a12:sI,a12a1:aI,a13:oI,a13a1:lI,a14:cI,a14a1:uI,a15:dI,a15a1:fI,a16:hI,a17:pI,a17a1:mI,a18:gI,a18a1:_I,a19:vI,a20:bI,a20a1:xI,a21:yI,a22:SI,a22a1:EI,a23:MI,a24:TI,a24a1:wI,a25:AI,a26:RI,a26a1:CI,a27:PI,skillsTitle:LI,development:II,web:DI,windows:UI,modeling:NI,animation:FI,design:OI,projectsTitle:kI,project1:zI,project2:BI,project3:VI,project4:$I,title:HI,info:GI,name:WI,name1:jI,role1:qI,role:XI,bookmarktip:JI,aboutMeTitle:YI,bookmarktip1:KI,opensource:ZI,intro1:QI,game1:eD,game1a1:tD,game1a2:nD,game1a3:iD},sD="スキップ",aD="こんにちは、私はponzsです。これは私の仮想空間です。あなたの言語を選択してください。そして、あなたの指を前に滑らせて、視点を制御してください。私たちのコントローラーが正常に動作していることを確認してください。すべてが準備できたら、この空間を探索し続けることができます。",oD="私は選びました",lD="次へ",cD="ホームに入る",uD="これは無限の宇宙です。無限の惑星が互いに落ちて再び合体します。これは無限の宇宙です。無限の惑星が互いに落ちて再び合体します。これは無限の宇宙です。無限の惑星が互いに落ちて再び合体します。",dD="この星の空に入り、その中を移動し、その生命を感じます。この飛行機はあなたのためです。古いモデルですが、非常に丈夫です。試してみてください。もし起動しない場合は、次回お試しください。(あなたはその光環を見ましたか？それは起動ボタンです。それを押して、起動してください。あなたはこの宇宙で絶対的な自由を得ることができます！)",fD="バックパックスタイルの飛行機を取得",hD="表面の材料は柔軟なソーラーパネルを使用しています。これらは、リアルタイムで光エネルギーを吸収して、連続的にエネルギーを供給することができます。飛行機は電力で駆動され、真空環境に適しています。",pD="バックパックスタイルの飛行機を起動してみてください",mD="おめでとうございます。飛行機を使いこなせました。もし続けてこの星空を探索したい場合は、続けてください。",gD="無限の海ですね。",_D="あなたが今直面している困難は、それほど大きくはないでしょう。",vD="突然、一人の人を思い出しました。ジョニー・シルバーハンド、あなたは知っていますか？そう、リレックに閉じ込められた人です。",bD="V、戦いを諦めないでください。",xD="話しました。あなたは去ってください。",yD="こんにちは、世界",SD="アプリケーション",ED="ゲーム",MD="ツール",TD="オープンソースコンポーネント",wD="アカウント管理",AD={aboutme:"私について",products:"製品センター",contact:"お問い合わせ",apps:"アプリケーション",login:"ログイン",register:"登録","reset-password":"パスワードリセット","forgot-password":"パスワードを忘れた",logout:"ログアウト","send-code":"コードを送信"},RD="千羽",CD="フィードバック",PD="DiMEMOに関して助けが必要な場合や質問や提案がある場合は、以下のリンクからメールを送信してください：",LD="メールを送信",ID="プライバシーについて",DD="千羽はあなたのデータを一切収集しません。データの計算と処理はすべてローカルデバイス上で行われます。現在のデータ保存方法はデバイスのファイルシステムにのみ保存されています。将来のバージョンでは、iCloudを使用してDiMEMOで複数のAppleデバイス間でデータを同期および保存する可能性がありますが、この機能を使用するかどうかは事前に確認し、選択または無効にする権利があります。さらに、データの永続性を目的とした保存ソリューションの実装も計画しており、アップデート時にはこの機能を有効にするかどうかを事前に通知します。",UD="こんにちは、私は",ND="ゲーム開発者",FD="なぜゲーム開発者になったのか？主な理由はゲームが好きだからです。最初の啓蒙は『ワールドオブウォークラフト』のマップエディターでした。",OD="現在、以下の開発に専念しています",kD="現代的なゲーム",zD="現代的なゲームとは、より強力なゲーム体験と過去にはできなかった機能を備えたものだと理解しています。",BD="より多くの新しいゲーム媒体と高品質なゲーム環境におけるフルスタックの高速化能力、全く新しい人工知能とのインタラクション、アニメーションおよび3Dアセットデザインを含みます。",VD="また、私は",$D="骨灰級ゲーマー",HD="何千ものゲームを数万時間プレイしたゲーマーです。",GD="非常に好きなゲームのいくつか：",WD="サイバーパンク2077",jD="ナイトシティへようこそ！ここはWNSニュースです！本当に懐かしい世界です。誰がVになりたくないでしょう？でも、どれだけの人がVになる勇気を持っていますか？私が言っているVを知っていますか。彼はナイトシティの伝説です。",qD="黒神話悟空",XD="菩提祖師は小猿を決して見捨てませんでした。",JD="GTA",YD="マイケルとトレバーは私の兄弟です。たとえすべてを失っても、彼らのどちら一方も死なせません。",KD="SCUM",ZD="このゲームでバーを開き、多くの良い友達に出会いましたが、ゲームの名前のような人々にも出会いました。プレイしていたサーバーが頻繁にリセットされたため、後に自分たちでゲームサーバーを設置しましたが、最終的にはサーバーの収支不均衡で運営を停止しました。損失を出しても、このゲームを愛する友達をがっかりさせたくありませんでした。この小さな島で一緒に生活した兄弟たちに感謝します。お金ができたら、サーバーを再起動し、永遠に稼働させます。",QD="Ready or Not",e2="数人の友達とCQBをするために購入しました。このゲームは確かに良くできており、高評価です。",t2="コールオブデューティ",n2="コールオブデューティシリーズは、子供時代の思い出であり、現在私が考える戦争ゲームの頂点です。各時代のシリーズバージョンはすべてトップクラスで、リアルなグラフィックとオーディオ、現実の物理法則に準拠した銃器とアニメーションの質感、熱血なストーリーラインを含みます。ソープは決して死なない。",i2="No Man's Sky",r2="VR版とPC版があり、他にもいくつかの独特な生成型ゲームコンテンツデザインがあります。個人的にはとても良いと思いますが、このアートスタイルは特に好きではありません。",s2="ゲーム以外では：湖や海辺に行き、座れる場所を見つけ、できればテーブルのある場所で、コップを一杯",a2="冷やしたジュース",o2="ジュースはココナッツ、オレンジ、スイカのものでも構いません。",l2="冷やしたコーラ",c2="冷たくないとおいしくないです。",u2="または、隣にもう一つ置く",d2="簡易灰皿",f2="私は通常、Red Bullとコーヒーの缶を直接持ち歩き、コーヒーカップで灰を弾き飛ばし、Red Bullの缶に吸い殻を置きます。なぜなら？コーヒーカップの口が大きいため、灰が外に飛び散りにくく、Red Bullの缶は通常金属製なので、吸い殻で焦がす心配がないからです。",h2="一本吸う",p2="タバコ",m2="通常、以下の2種類のタバコを選びます：555ダブルバースト、リトルサンレッド中南海。",g2="ヘッドフォンを装着し、ノイズキャンセリングモードをオンにして、私の",_2="プレイリスト",v2="私のプレイリストが欲しいですか？NetEase Cloudで検索：ponzS",b2="新しいデザインを考え、デモを作成し続ける、直到",x2="コンピュータの電池",y2="外出用に持ち運びのMacBook Airを選ぶことが多いです。一日中バッテリー切れの心配がなく、まだかなりの電力が残っています。バッテリー不安もなく、十分に軽量で、パフォーマンスも十分です。",S2="バッテリーが0％まで消耗する",E2="スキル",M2="ゲーム（Unity、Unreal Engine、Blender）",T2="Web（Vue.js、Nuxt.js、Three.js）",w2="Windows（tauri、electron）",A2="モバイルアプリケーション（Flutter、NativeScript、uni-app、uni-app x、ionic）",R2="プログラミング言語（JavaScript、TypeScript、Rust、Dart、Swift、C#、C++、Go、Java）",C2="サーバー（Nest.js、Express、Fastify、Springboot、MongoDB、MySQL、Nginx、Docker、Redis、NuxtHab、Gin、k8s、pm2、node.js）",P2="プロジェクト経験タイプ",L2="フルスタックプログレッシブウェブアプリケーション - デスクトップアプリケーション - モバイルアプリケーション",I2="WebGL-WebGPU-WebXR-WebVR-PWAゲーム",D2="Unreal Engine 5ゲーム - Unity Engineゲーム - C++およびC#プロジェクト - BlueprintsおよびUVSプロジェクト - ゲームデザイン - テクニカルアート - 音楽",U2="Oculus-Pico-VR-XR-MR",N2="コンタクト",F2="バグ - 脆弱性 - エラー - 提案 - 更新要求 - 協力機会：",O2="ponzs",k2="ponzs、中国名：張郭艾、中国国籍",z2="フルスタックエンジニア",B2="Web-VR-PC-モバイルアプリケーションフルスタック開発者",V2="ヒント！",$2="私について",H2="ハイライトされたキーワードをクリックして内容の詳細を表示",G2="ドキュメントは制作中です。お楽しみに！",W2={game:"ゲーム",web:"ウェブ",modeling:"モバイルアプリ",animation:"プログラミング言語",server:"サーバー",aboutunity:"Unityに関する小話",aboutunitycontent:"Unityは有名な商用3Dエンジンです。なぜ直接ゲームに触れないのか？それは、ゲーム業界での使用に加え、建築、映画、広告、教育など他の業界でも広く利用されているからです。ある時、運転免許を取得するために行った際、新人向けのVR運転訓練がUnityで構築されていました。その利点と欠点も比較的明確で、互換性は素晴らしいものがありますが、究極の視覚体験を達成するにはまだ多くの作業が必要です。しかし、私の知る限り、公式はクロスプラットフォームやハードウェアデバイスの互換性にさらに重点を置いています。私自身の観点から見ると、Unityがとても好きです。独立開発者に非常にフレンドリーで、迅速な開発が可能で、私にとって学習コストも非常に低いです。信じられないかもしれませんが、1週間で学習から完成した完全なVRゲームのデモを作成しました。ビデオ学習はあまりお勧めできません。なぜなら、ビデオでは固定された時間が必要ですが、ドキュメントを一歩一歩進めることで、時間を自由にコントロールし、自分で考えることができます。優れた先生は常に分析をして質の高い経験を提供してくれますが、一度習得すると徐々に自分自身の経験を吸収することができます。",aboutunrealengine:"Unreal Engineに関する小話",aboutunrealenginecontent:"なぜUnreal Engineを学習することにしたのか？非常に優れたゲームをプレイしましたが、それらはすべてUnreal Engineを使用しており、一般的に商用エンジンの中でも最高の視覚体験を構築できると言われているので、私も試してみたいと思いました。最初の選択はバージョン5で、その構築スペース、視覚効果、物理運動体験に完全に満足しています。ただし、質の高い素材と高性能なコードを使用する必要があります。この選択は、Unityのレンダリング結果に不満があったためです。",aboutblender:"Blenderに関する小話",aboutblendercontent:"Blender以外にも優れたツールはたくさんありますが、なぜ私はそれを選んだのでしょうか？正直なところ、よくわかりません。おそらく、ツールを検索した時にランキングが上位だったので、クリックしただけだと思います。ハハ。",aboutvue:"Vueに関する小話",aboutvuecontent:"Vueを使う前はReactを使用していましたが、パフォーマンスやコーディングスタイルにいくつかの問題を発見しました。Vueはより快適に書ける上に、追加の作業なしで優れたパフォーマンスを得られます。Vueチームの開発者も非常に熱心で、常にソーシャルプラットフォームで開発者の問題解決を積極的に支援してくれます。これにより、信頼性のある体験と情熱を感じました。新しいバージョンのVue 3では、より良いコーディング体験が得られます。Vueはまるで手の中の筆のようで、思い通りのものを自由に描くことができます。コンポジションAPIにより、コードがより簡潔で理解しやすく、考えやすくなります。Even Youはスキンケアがとても上手で、スタイルも良く、声も聞き取りやすいので、彼の講演やライブストリーム、Vueや関連ツールのビデオも喜んで見ます。",aboutnuxt:"Nuxtに関する小話",aboutnuxtcontent:"NuxtはVueのメタフレームワークで、SSR（サーバーサイドレンダリング）を実現できます。さらに、設定やグローバル自動インポート、自動ルーティングを簡素化し、多くのプラグインやライブラリが0設定で動作するため、私のような怠け者には非常に快適です。また、プラグインストアも非常に優れており、5つ星の評価に値します。",aboutthreejs:"Three.jsに関する小話",aboutthreejscontent:"webGLとwebGPUを使用すると、ブラウザに限定されずにハードウェアGPUの性能を最大限に活用できますが、リモートリソースを使用する場合、より良い体験を実現するために多くのレイジーロードと追加処理が必要になります。要するに、あなたのプロジェクトにより多くの可能性を与えます。webVRやwebARを知っていれば、単に仮想空間や3Dモデルを構築するだけでないことが理解できるでしょう。",aboutflutter:"Flutterに関する小話",aboutfluttercontent:"Flutterは、多くのクロスプラットフォームフレームワークを試した中で最終的な選択肢です。自前のレンダリングソリューションを使用し、ホットリロードも非常に快適です。これは、ネイティブモジュールに依存せずに任意の外観やコンポーネントを自由に構築できることを意味します。同時に、アニメーションが非常に複雑な場合でも優れたレンダリングフレームレートを達成できます。もちろん、最高のパフォーマンスとレンダリングフレームレートを求めるならuniapp xがより良い選択です。なぜなら、それは対応するネイティブコードに直接コンパイルされ、カスタマイズの自由度が制限されるからです。Flutterを選択することは、Dartの学習コストに直面することを意味しますが、すべての言語ロジックは共通しているため、あるプログラミング言語に精通していればDartの習得は非常に簡単です。私は約1週間で学習し、デモを構築しました。",aboutnativescript:"NativeScriptに関する小話",aboutnativescriptcontent:"NativeScriptはネイティブモジュールに依存してクロスプラットフォーム開発を実現するフレームワークで、Vueの構文もサポートしています。これにより、Vueに精通した開発者の学習コストが大幅に削減され、1～2時間で習得できる可能性があります。当時、Vueの構文をサポートしていたため学習を選びました。高性能ですが、カスタマイズの自由度が制限され、より多くの作業が必要です。",aboutuniappx:"uni-app xに関する小話",aboutuniappxcontent:"uni-app xはuni-appの分岐バージョンで、Vue 3の構文をサポートし、対応するネイティブコードにコンパイルすることができます。また、ホットリロードもサポートしていますが、カスタマイズの自由度が制限されています。uni-appは中国で非常に人気があり、クロスプラットフォームアプリだけでなく、WeChatミニプログラムや快アプリなどのクロスプラットフォームミニプログラムも構築できます。しかし、HbuilderXエディターは非常に使いにくく、VSCodeと比較するとインタラクティブなシナリオで明らかにフレームが落ち、流暢さが非常に悪く、外観も醜く、プラグインストアはプラグインをダウンロードするために広告を見る必要があります。",abouttauri:"Tauriに関する小話",abouttauricontent:"TauriはRust言語を使用して構築されたクロスプラットフォームアプリフレームワークで、Windows、macOS、Linuxなどのデスクトップアプリの構築もサポートしています。Rustの学習動機の一つであり、パフォーマンスが非常に優れています。現在、私の新しいプロジェクトのバックエンドシステムはずっとRustで開発されています。",aboutionic:"Ionicに関する小話",aboutioniccontent:"capacitorブリッジを通じてネイティブAPIを結合し、ホットリロードをサポートしません。唯一の利点は、既存のウェブプロジェクトを直接モバイルアプリにパッケージ化できることですが、パフォーマンスとユーザー体験が非常に悪く、迅速な開発には適しています。",aboutjavascript:"JavaScriptに関する小話",aboutjavascriptcontent:"JavaScriptは私が最もよく使うプログラミング言語の一つです。現在のところ、非常に万能なプログラミング言語ツールだと思っています。スマートコントラクト、クライアント、サーバーサイドシステムなど、ほぼすべてを構築できます。何年も私に寄り添ってきました。",abouttypescript:"TypeScriptに関する小話",abouttypescriptcontent:"TypeScriptはJavaScriptのスーパーセットで、静的型チェックをサポートしています。JavaScriptに精通していれば、TypeScriptもすぐに習得できます。TypeScriptの構文はJavaScriptに非常に似ていますが、TypeScriptの型システムはコードを書く際により安全で効率的になります。",aboutrust:"Rustに関する小話",aboutrustcontent:"Rustはシステムレベルのプログラミング言語で、パフォーマンスが非常に優れています。また、並行プログラミングもサポートしています。所有権とライフタイム管理が非常に厳格で、コンパイル時に多くの潜在的なエラーを発見できます。さらに、ジェネリックプログラミングもサポートしており、コードを書く際により柔軟で効率的です。多くの可能性があり、ブロックチェーンや産業システムなど、安全性とパフォーマンスを追求するシナリオで使用されています。",aboutdart:"Dartに関する小話",aboutdartcontent:"DartはFlutterのプログラミング言語です。現在、クライアントUIを描画するためにのみ使用しており、バックエンドシステムにはRustを使用する方が賢明です。",aboutpython:"Pythonに関する小話",aboutpythoncontent:"Pythonは仕事の都合で無理やり学習しました。Pythonで書かれたオープンソースツールをプロジェクトに統合する必要があったからです。残念。😔",aboutcsharp:"C#に関する小話",aboutcsharpcontent:"Unityのゲームスクリプトを書くために使用しています。作文を書くように、とても快適です。",aboutcpp:"C++に関する小話",aboutcppcontent:"Unreal Engineのゲームスクリプトを書くために使用しています。Blueprintを使い始めてから、C++をほとんど書かなくなりました。",aboutswift:"Swiftに関する小話",aboutswiftcontent:"iOSアプリを書くために使用していますが、Flutterに移行してからはSwiftをほとんど書かなくなりました。",aboutjava:"Javaに関する小話",aboutjavacontent:"これは悲しい物語です。Spring、Spring Boot... もう話したくありません。Javaをもう使いたくないと言いたいだけです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。Javaをもう使いたくないです。",aboutnodejs:"Node.jsに関する小話",aboutnodejscontent:"Node.jsはJavaScriptのランタイム環境で、JavaScriptをサーバーサイドで実行できるようにします。これにより、JSがフルスタック言語のキーとなります。",aboutexpress:"Expressに関する小話",aboutexpresscontent:"ExpressはNode.jsのWebフレームワークで、迅速な開発の第一選択肢です。しかし、大規模なプロジェクトでは力不足を感じます。",aboutnestjs:"Nest.jsに関する小話",aboutnestjscontent:"Nest.jsはExpressとFastifyを内蔵しており、TypeScriptをサポートしています。また、モジュール化開発もサポートしているため、コードの整理がしやすく、大規模なプロジェクトの構築に適しています。"},j2="《My Starry Sky》 - 私の星空",q2="《My Starry Sky》は、無限に広がる生成型宇宙を持つ実験的なゲームプロジェクトです。独自に開発したアルゴリズムを使用して要素を推論・組み合わせ、新しい宇宙や宇宙要素を生成します。現在、すべてのデザインは実装されておらず、将来のバージョンでは新しいコンテンツや機能が追加され、推論型生成型惑星への進出が準備されています！このゲームを体験し、サポートしていただきありがとうございます。地球の10種類の異なる言語に対応しています！",X2="App Storeにて配信中！検索：My Starry Sky",J2="対応デバイス：iPhone、iPad、Mac、Vision Pro",Y2={skip:sD,language1:aD,language2:oD,next:lD,enter:cD,language3:uD,language4:dD,language5:fD,language6:hD,language7:pD,language8:mD,language9:gD,language10:_D,language11:vD,language12:bD,language13:xD,hello:yD,application:SD,game:ED,tool:MD,openSource:TD,account:wD,routes:AD,di:RD,di1:CD,di2:PD,di3:LD,di4:ID,di5:DD,a1:UD,a2:ND,a2a1:FD,a3:OD,a4:kD,a4a1:zD,a5:BD,a6:VD,a7:$D,a7a1:HD,a8:GD,a9:WD,a9a1:jD,a10:qD,a10a1:XD,a11:JD,a11a1:YD,a12:KD,a12a1:ZD,a13:QD,a13a1:e2,a14:t2,a14a1:n2,a15:i2,a15a1:r2,a16:s2,a17:a2,a17a1:o2,a18:l2,a18a1:c2,a19:u2,a20:d2,a20a1:f2,a21:h2,a22:p2,a22a1:m2,a23:g2,a24:_2,a24a1:v2,a25:b2,a26:x2,a26a1:y2,a27:S2,skillsTitle:E2,development:M2,web:T2,windows:w2,modeling:A2,animation:R2,design:C2,projectsTitle:P2,project1:L2,project2:I2,project3:D2,project4:U2,title:N2,info:F2,name:O2,name1:k2,role1:z2,role:B2,bookmarktip:V2,aboutMeTitle:$2,bookmarktip1:H2,opensource:G2,intro1:W2,game1:j2,game1a1:q2,game1a2:X2,game1a3:J2},K2="Passer",Z2="Bonjour, je suis ponzs, c'est mon espace virtuel, veuillez sélectionner votre préférence linguistique, puis essayez d'utiliser vos doigts devant vous pour contrôler la vue, assurez-vous que notre contrôleur fonctionne normalement, si tout est prêt, nous pouvons continuer à explorer cet espace.",Q2="J'ai choisi",eU="Suivant",tU="Entrer dans la maison",nU="C'est un ciel composé de milliards de planètes, chacune a sa propre histoire, et je souhaite également devenir l'une d'elles. Injecter de l'espoir dans l'obscurité infinie, injecter de l'âme dans la lumière faible, lorsqu'elles s'unissent, elles deviendront un ciel infini, même si les planètes auront un jour leur moment de chute et de dissolution, mais il y aura toujours de nouvelles planètes qui brilleront, rendant ce ciel infini.",iU="Entriamo nelle profondità di questo cielo stellato, ci muoviamo tra di loro e proviamo la loro vita. Questo aereo è per te, anche se è un modello vecchio, è molto resistente. Provalo, se non parte, torna la prossima volta.(Vedi quell'aureola? Quello è il pulsante di avvio. Tienilo premuto per attivare il razzo, e otterrai la libertà assoluta di esplorare questo universo!)",rU="Ottenere aereo in stile zaino",sU="Il materiale della superficie utilizza pannelli solari flessibili, che possono assorbire energia luminosa in tempo reale per fornire energia in modo continuo, alimentando l'aereo attraverso l'elettricità, adatto per ambienti di vuoto.",aU="Prova a avviare l'aereo in stile zaino",oU="Congratulazioni, hai imparato a usare il meccanismo, se vuoi continuare a esplorare questo cielo stellato, continua.",lU="Un mare infinito, vero?",cU="Come la tua difficoltà ora, è qualcosa che può essere considerato?",uU="Ho improvvisamente pensato a una persona, ¿conosci Johnny Silverhand? Sí, el que estuvo atrapado en Relic.",dU="V, non abbandonare mai la battaglia.",fU="Ho finito, puoi andare",hU="Bonjour, le monde",pU="Application",mU="Jeu",gU="Outil",_U="Composants Open Source",vU="Gestion du Compte",bU={aboutme:"À Propos de Moi",products:"Centre de Produits",contact:"Contactez-Nous",apps:"Applications",login:"Connexion",register:"Inscription","reset-password":"Réinitialiser le mot de passe","forgot-password":"Mot de passe oublié",logout:"Déconnexion","send-code":"Envoyer le code"},xU="Qianyu",yU="Retour d'information",SU="Si vous avez besoin de notre aide ou si vous avez des questions ou des suggestions concernant DiMEMO, veuillez nous envoyer un email via le lien suivant :",EU="Envoyer un Email",MU="À Propos de la Confidentialité",TU="Qianyu ne collecte aucune de vos données. Le calcul et le traitement des données sont effectués localement sur votre appareil. Actuellement, les données sont uniquement stockées localement dans le système de fichiers de votre appareil. Dans une future version, nous pourrions utiliser iCloud pour synchroniser et stocker vos données sur plusieurs appareils Apple via DiMEMO, mais nous vous demanderons à l'avance si vous souhaitez activer cette fonctionnalité, et vous avez le droit de choisir de l'utiliser ou de la désactiver. De plus, nous prévoyons de mettre en œuvre des solutions de stockage visant la pérennité des données. Lors des mises à jour, nous vous informerons à l'avance si cette fonctionnalité doit être activée.",wU="Bonjour, je suis un",AU="Développeur de Jeux",RU="Pourquoi suis-je devenu développeur de jeux ? La principale raison est mon amour pour les jeux. Mon premier contact a été l'éditeur de cartes de World of Warcraft.",CU="Actuellement concentré sur le développement de",PU="Jeux Modernes",LU="Jeux modernes ? Ma compréhension est qu'ils offrent une expérience de jeu renforcée et des fonctionnalités qui n'étaient pas possibles auparavant.",IU="Incluant plus de nouvelles plateformes de jeu et des capacités d'accélération full-stack dans des environnements de jeu de haute qualité, des interactions d'intelligence artificielle entièrement nouvelles, de l'animation et de la conception d'actifs 3D.",DU="De plus, je suis un",UU="Gamer Hardcore",NU="Un joueur ayant joué à des milliers de jeux avec des dizaines de milliers d'heures de jeu.",FU="Quelques-uns de mes jeux préférés :",OU="Cyberpunk 2077",kU="Bienvenue à Night City ! Ici, c'est WNS News ! C'est un monde rempli de souvenirs. Qui ne voudrait pas être V ? Mais combien ont le courage d'être V ? Tu sais de qui je parle. Il est une légende de Night City.",zU="Black Myth: Wukong",BU="Le Maître Bodhi n'a jamais abandonné le petit singe.",VU="GTA",$U="Michael et Trevor sont mes frères. Même si je perds tout, je ne laisserai aucun d'eux mourir.",HU="SCUM",GU="J'ai ouvert un bar dans ce jeu, rencontré de nombreux bons amis, mais aussi rencontré des personnes comme le nom du jeu. Comme le serveur sur lequel je jouais était souvent réinitialisé, nous avons ensuite créé notre propre serveur de jeu, qui a finalement cessé ses opérations en raison d'un déséquilibre entre les dépenses et les revenus du serveur. Même si cela signifiait perdre de l'argent, je ne voulais pas décevoir les amis qui aimaient ce jeu. Merci à mes frères qui ont vécu avec moi sur cette petite île. Quand j'aurai de l'argent, je relancerai le serveur et le maintiendrai en fonctionnement pour toujours.",WU="Ready or Not",jU="Je l'ai acheté pour jouer au CQB avec quelques potes. Ce jeu est vraiment bien fait, bonnes critiques.",qU="Call of Duty",XU="La série Call of Duty est à la fois un souvenir d'enfance et ce que je considère actuellement comme le summum des jeux de guerre. Chaque version de la série à différentes époques est de premier ordre, couvrant beaucoup avec des graphismes et un son réalistes, des armes et des textures d'animation conformes à la physique réelle, et des scénarios passionnants qui font battre le cœur. Soap ne meurt jamais.",JU="No Man's Sky",YU="Il existe des versions VR et PC, ainsi que certains designs de contenu de jeu génératif uniques. Personnellement, je pense que c'est très bien, mais je n'aime pas particulièrement ce style artistique.",KU="En dehors des jeux : j'aime aller au bord du lac ou de la mer, trouver un endroit où m'asseoir, de préférence avec une table, et prendre un verre de",ZU="Jus Froid",QU="Le jus peut être de la noix de coco, de l'orange ou de la pastèque.",eN="Coca-Cola Froid",tN="Ce n'est pas bon si ce n'est pas froid.",nN="Ou, place un autre à côté.",iN="Cendrier Simple",rN="J'apporte généralement une canette de Red Bull et du café, puis j'utilise un gobelet en papier à café pour éjecter les cendres et une canette de Red Bull pour placer les mégots de cigarette. Pourquoi ? Le gobelet en papier à café a une large ouverture, ce qui facilite l'éjection des cendres sans les renverser à l'extérieur. Les canettes de Red Bull sont généralement en métal, donc pas de souci que les mégots de cigarette les brûlent.",sN="Allume une",aN="Cigarette",oN="Je préfère généralement deux types de cigarettes : 555 Dual Burst et Little Sun Red Zhongnanhai.",lN="Enfile des écouteurs, active le mode réduction de bruit et commence à jouer aléatoirement ma",cN="Playlist",uN="Vous voulez ma playlist ? Recherchez sur NetEase Cloud : ponzS",dN="Commencer à penser à de nouveaux designs et créer des démos, jusqu'à ce que",fN="Batterie de l'ordinateur",hN="Je choisis généralement un MacBook Air pour l'ordinateur portable extérieur. Il tient toute la journée sans problème de batterie et il reste encore beaucoup de batterie. Je n'ai jamais eu d'anxiété de batterie, et il est suffisamment léger avec des performances adéquates.",pN="Consommé jusqu'à 0%",mN="Compétences",gN="Jeux (Unity, Unreal Engine, Blender)",_N="Web (Vue.js, Nuxt.js, Three.js)",vN="Windows (tauri, electron)",bN="Applications Mobiles (Flutter, NativeScript, uni-app, uni-app x, ionic)",xN="Langages de Programmation (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",yN="Serveurs (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",SN="Types d'Expérience de Projet",EN="Application Web Progressive Full-Stack - Application de Bureau - Application Mobile",MN="Jeux WebGL-WebGPU-WebXR-WebVR-PWA",TN="Jeux Unreal Engine 5 - Jeux Unity Engine - Projets C++ et C# - Projets Blueprints et UVS - Conception de Jeux - Art Technique - Musique",wN="Oculus-Pico-VR-XR-MR",AN="Contact",RN="Bugs - Vulnérabilités - Erreurs - Suggestions - Demandes de Mise à Jour - Opportunités de Collaboration :",CN="ponzs",PN="ponzs, Nom chinois : Zhang Guoai, Nationalité chinoise",LN="Ingénieur Full-Stack",IN="Développeur Full-Stack d'Applications Web-VR-PC-Mobile",DN="Astuce !",UN="À Propos de Moi",NN="Cliquez sur les mots-clés surlignés pour voir les détails du contenu",FN="La documentation est en cours de préparation, veuillez rester à l'écoute",ON=JSON.parse(`{"game":"Jeu","web":"WEB","modeling":"Applications mobiles","animation":"Langages de programmation","server":"Serveur","aboutunity":"Une petite histoire sur Unity","aboutunitycontent":"Unity est un moteur 3D commercial bien connu, pourquoi ne pas mentionner directement le jeu ? Parce qu’en plus de son utilisation dans l'industrie du jeu, il est également largement utilisé dans d'autres secteurs tels que l'architecture, le cinéma, la publicité, l'éducation, etc. Une fois, je suis allé passer mon permis de conduire, et une des épreuves était un entraînement de conduite VR pour les débutants, construit avec Unity. Ses avantages et inconvénients sont également assez évidents, sa compatibilité est indiscutable, mais il y a encore beaucoup de travail à faire pour atteindre une expérience visuelle optimale. Cependant, à ma connaissance, les développeurs officiels se concentrent davantage sur la compatibilité multiplateforme et les dispositifs matériels. De mon point de vue, j’aime beaucoup Unity, il est très convivial pour les développeurs indépendants, permet un développement rapide et son coût d'apprentissage est très faible pour moi. Vous pourriez ne pas le croire, mais en une semaine, j'ai appris et créé un démo complet de jeu VR. Je ne recommande pas vraiment l'apprentissage par vidéo car vous devez avoir un horaire fixe, mais en suivant la documentation étape par étape, vous pouvez contrôler votre temps et réfléchir par vous-même plutôt que de suivre les pensées du professeur. Cependant, un excellent professeur analysera et vous donnera de bonnes expériences. Mais vous pouvez maîtriser cela et absorber progressivement vos propres expériences.","aboutunrealengine":"Une petite histoire sur Unreal Engine","aboutunrealenginecontent":"Pourquoi apprendre Unreal Engine ? J'ai joué à certains jeux avec une très bonne expérience qui utilisent Unreal Engine, et on dit qu'il peut créer des expériences visuelles parmi les meilleures de tous les moteurs commerciaux, donc j'ai voulu essayer. Le premier choix était la version 5, l'espace qu'il crée, les effets visuels et l'expérience de mouvement physique me satisfont, à condition d'utiliser des ressources de haute qualité et un code performant. Ce choix a été fait en raison de mon insatisfaction vis-à-vis des résultats de rendu de Unity.","aboutblender":"Une petite histoire sur Blender","aboutblendercontent":"En dehors de Blender, il existe de nombreux autres outils excellents. Pourquoi ai-je choisi de l'utiliser ? Pour être honnête, je ne suis pas très sûr, peut-être parce qu'il était bien classé lors de ma recherche d'outils, alors je l'ai essayé, haha.","aboutvue":"Une petite histoire sur Vue","aboutvuecontent":"Avant d'utiliser Vue, je travaillais avec React, mais j'ai découvert certains problèmes de performance et de style de codage. Vue me permet d'écrire plus confortablement et d'obtenir d'excellentes performances sans travail supplémentaire. Les développeurs de l'équipe Vue sont également très passionnés et aident activement les développeurs sur les réseaux sociaux, ce qui me donne une expérience très fiable et chaleureuse. Dans la nouvelle version Vue 3, on obtient une meilleure expérience de codage. Vue est comme un pinceau dans votre main, vous pouvez dessiner ce que vous voulez. L'API de composition rend votre code plus concis et plus facile à comprendre et à réfléchir. Même la peau d'Even You est très bien entretenue, il a une belle silhouette et une belle voix, donc je suis également très disposé à regarder ses présentations, ses diffusions en direct et ses vidéos sur Vue et les outils associés.","aboutnuxt":"Une petite histoire sur Nuxt","aboutnuxtcontent":"Nuxt est le méta-framework de Vue, il peut réaliser le rendu SSR côté serveur, simplifier la configuration et l'importation automatique globale ainsi que le routage automatique. De nombreux plugins et bibliothèques permettent une configuration zéro, ce qui est très confortable pour moi, un paresseux. De plus, sa boutique de plugins est excellente, je lui donne 5 étoiles.","aboutthreejs":"Une petite histoire sur Three.js","aboutthreejscontent":"WebGL et WebGPU vous permettent de tirer pleinement parti des performances GPU matérielles, sans être limité par le navigateur. Cependant, dans certains cas d'utilisation de ressources distantes, vous avez besoin de beaucoup de chargements paresseux et de traitements supplémentaires pour une meilleure expérience. En résumé, cela offre plus de possibilités à votre projet. Si vous connaissez WebVR et WebAR, vous comprendrez qu'il ne s'agit pas seulement de construire un espace virtuel ou un modèle 3D.","aboutflutter":"Une petite histoire sur Flutter","aboutfluttercontent":"Flutter est le choix final parmi de nombreux frameworks multiplateformes que j'ai essayés. Utilisant une solution de rendu propre, le rechargement à chaud est également très confortable, ce qui signifie que vous pouvez construire n'importe quel aspect et composant sans dépendre de modules natifs. Même en cas d'animations trop complexes, il peut atteindre un excellent taux de rafraîchissement. Bien sûr, si vous souhaitez les meilleures performances et le meilleur taux de rafraîchissement, uniapp x est un meilleur choix car il compile directement en code natif correspondant, mais l'espace de personnalisation est limité. Choisir Flutter signifie que vous devez faire face au coût d'apprentissage de Dart, mais toute la logique des langages est similaire, si vous maîtrisez un langage de programmation, vous prendrez en main Dart très facilement. J'ai passé moins d'une semaine à apprendre et à créer un démo.","aboutnativescript":"Une petite histoire sur NativeScript","aboutnativescriptcontent":"NativeScript est un framework de développement multiplateforme qui dépend des modules natifs et prend en charge la syntaxe Vue, ce qui réduit considérablement le coût d'apprentissage pour les développeurs familiers avec Vue. Il est possible de s'y mettre en une ou deux heures. J'ai choisi de l'apprendre parce qu'il prend en charge la syntaxe Vue, offrant de hautes performances mais un espace de personnalisation limité nécessitant plus de travail.","aboutuniappx":"Une petite histoire sur uni-app x","aboutuniappxcontent":"uni-app x est une version dérivée de uniapp, il prend en charge la syntaxe Vue 3 et compile conditionnellement en code natif correspondant. Il prend également en charge le rechargement à chaud, mais l'espace de personnalisation est limité. uni-app est très populaire en Chine, il peut non seulement construire des applications multiplateformes, mais aussi des mini-programmes multiplateformes et des applications rapides comme les mini-programmes WeChat. Cependant, l'éditeur HbuilderX est très difficile à utiliser, de nombreuses interactions et la fluidité sont nettement inférieures par rapport à VSCode. Il est peu fluide, l'apparence est laide et la boutique de plugins nécessite de regarder des publicités pour télécharger des plugins.","abouttauri":"Une petite histoire sur Tauri","abouttauricontent":"Tauri est un framework d'applications multiplateformes construit avec le langage Rust. Il prend également en charge la création d'applications de bureau telles que Windows, macOS et Linux. C'est l'une des motivations pour apprendre Rust, offrant d'excellentes performances. Actuellement, le système backend de mon nouveau projet est écrit en Rust.","aboutionic":"Une petite histoire sur Ionic","aboutioniccontent":"Il utilise le pont Capacitor pour interfacer les API natives, ne prend pas en charge le rechargement à chaud. L'unique avantage est de pouvoir empaqueter directement un projet web existant en une application mobile, mais les performances et l'expérience sont très mauvaises, adaptées au développement rapide.","aboutjavascript":"Une petite histoire sur JavaScript","aboutjavascriptcontent":"JavaScript est l'un de mes langages de programmation les plus utilisés. Actuellement, je le considère comme un outil de langage de programmation très polyvalent, capable de construire presque tout, y compris des contrats intelligents, des systèmes client-serveur, etc. Il m'accompagne depuis de nombreuses années.","abouttypescript":"Une petite histoire sur TypeScript","abouttypescriptcontent":"TypeScript est un sur-ensemble de JavaScript qui prend en charge la vérification des types statiques. Si vous êtes familier avec JS, vous prendrez rapidement en main TS. La syntaxe de TS est très similaire à celle de JS, mais le système de types de TS vous permet de coder de manière plus sûre et efficace.","aboutrust":"Une petite histoire sur Rust","aboutrustcontent":"Rust est un langage de programmation système avec d'excellentes performances. Il prend également en charge la programmation concurrente, avec une gestion stricte de la propriété et des durées de vie. Il peut détecter de nombreuses erreurs potentielles lors de la phase de compilation et prend en charge la programmation générique, rendant la rédaction de code plus flexible et efficace. Il offre de nombreuses possibilités et est utilisé dans des domaines tels que la blockchain et les systèmes industriels, où la sécurité et la performance sont primordiales.","aboutdart":"Une petite histoire sur Dart","aboutdartcontent":"Dart est le langage de programmation de Flutter. Actuellement, je ne l'utilise que pour dessiner l'interface utilisateur du client. Utiliser Rust pour le système backend est un choix plus judicieux.","aboutpython":"Une petite histoire sur Python","aboutpythoncontent":"J'ai été contraint d'apprendre Python pour des raisons professionnelles, car je devais réécrire certains outils open source en Python pour les intégrer à mon projet, malheureusement. 😔","aboutcsharp":"Une petite histoire sur C#","aboutcsharpcontent":"Utilisé pour écrire des scripts de jeu Unity, c'est aussi agréable que rédiger un texte de composition.","aboutcpp":"Une petite histoire sur C++","aboutcppcontent":"Utilisé pour écrire des scripts de jeu Unreal Engine. Depuis que j'ai commencé à utiliser les Blueprints, j'ai beaucoup moins écrit en C++.","aboutswift":"Une petite histoire sur Swift","aboutswiftcontent":"Utilisé pour développer des applications iOS, mais depuis que j'ai commencé à utiliser Flutter, j'écris beaucoup moins en Swift.","aboutjava":"Une petite histoire sur Java","aboutjavacontent":"C'est une histoire triste. Spring, Spring Boot... Je ne veux plus en parler. Je veux juste dire que je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java. Je ne veux plus jamais utiliser Java.","aboutnodejs":"Une petite histoire sur Node.js","aboutnodejscontent":"Node.js est un environnement d'exécution JavaScript qui permet d'exécuter JavaScript côté serveur, faisant de JS une langue clé pour le développement full-stack.","aboutexpress":"Une petite histoire sur Express","aboutexpresscontent":"Express est le framework web de Node.js, idéal pour un développement rapide. Mais pour les grands projets, il peut sembler limité.","aboutnestjs":"Une petite histoire sur Nest.js","aboutnestjscontent":"Nest.js intègre Express et Fastify. Il supporte TypeScript et la programmation modulaire, ce qui vous permet d'organiser votre code de manière optimale. Il est adapté à la construction de grands projets."}`),kN="《My Starry Sky》 - Mon ciel étoilé",zN="《My Starry Sky》 est un projet de jeu expérimental doté d'un univers génératif infini. Grâce à des algorithmes développés en interne pour inférer et combiner des éléments, il génère de nouveaux univers et éléments cosmiques. Toutes les conceptions ne sont pas encore implémentées ; de futures versions ajouteront plus de contenus et de fonctionnalités, préparant ainsi l'entrée dans des planètes génératives basées sur l'inférence ! Merci d'avoir testé et soutenu ce jeu. Il prend en charge 10 langues terrestres différentes !",BN="Disponible sur l'App Store ! Recherchez : My Starry Sky",VN="Appareils compatibles : iPhone, iPad, Mac, Vision Pro",$N={skip:K2,language1:Z2,language2:Q2,next:eU,enter:tU,language3:nU,language4:iU,language5:rU,language6:sU,language7:aU,language8:oU,language9:lU,language10:cU,language11:uU,language12:dU,language13:fU,hello:hU,application:pU,game:mU,tool:gU,openSource:_U,account:vU,routes:bU,di:xU,di1:yU,di2:SU,di3:EU,di4:MU,di5:TU,a1:wU,a2:AU,a2a1:RU,a3:CU,a4:PU,a4a1:LU,a5:IU,a6:DU,a7:UU,a7a1:NU,a8:FU,a9:OU,a9a1:kU,a10:zU,a10a1:BU,a11:VU,a11a1:$U,a12:HU,a12a1:GU,a13:WU,a13a1:jU,a14:qU,a14a1:XU,a15:JU,a15a1:YU,a16:KU,a17:ZU,a17a1:QU,a18:eN,a18a1:tN,a19:nN,a20:iN,a20a1:rN,a21:sN,a22:aN,a22a1:oN,a23:lN,a24:cN,a24a1:uN,a25:dN,a26:fN,a26a1:hN,a27:pN,skillsTitle:mN,development:gN,web:_N,windows:vN,modeling:bN,animation:xN,design:yN,projectsTitle:SN,project1:EN,project2:MN,project3:TN,project4:wN,title:AN,info:RN,name:CN,name1:PN,role1:LN,role:IN,bookmarktip:DN,aboutMeTitle:UN,bookmarktip1:NN,opensource:FN,intro1:ON,game1:kN,game1a1:zN,game1a2:BN,game1a3:VN},HN="Überspringen",GN="Hallo, ich bin ponzs, dies ist der generative virtuelle Raum, den ich erstellt habe. Bitte wähle deine Sprachpräferenz und versuche dann, mit deinem Finger vor dir zu wischen, um die Perspektive zu steuern. Stelle sicher, dass unser Controller ordnungsgemäß funktioniert. Wenn alles bereit ist, können wir diesen Raum weiter erkunden.",WN="Ich habe gewählt",jN="Nächste",qN="Zurück zur Startseite",XN="Dies ist ein unendliches Universum, das aus unendlich vielen Sternen besteht, die sich gegenseitig fallen und wieder zusammenfallen. Dies ist ein unendliches Universum, das aus unendlich vielen Sternen besteht, die sich gegenseitig fallen und wieder zusammenfallen. Dies ist ein unendliches Universum, das aus unendlich vielen Sternen besteht, die sich gegenseitig fallen und wieder zusammenfallen.",JN="Wir gehen in die Tiefe dieses Sternenhimmels ein, reisen dazwischen und erleben ihre Lebensweise. Dies ist Ihr gegebener Mechanismus, auch wenn er alt ist, ist er sehr robust. Versuchen Sie es, wenn es nicht startet, kommen Sie die nächste Zeit.(Siehst du diesen Halo? Das ist der Startknopf. Halte ihn gedrückt, um den Antrieb zu aktivieren, und du wirst absolute Freiheit haben, dieses Universum zu erkunden!)",YN="Bekannte Mechanismus-Ausrüstung erhalten",KN="Die Oberflächenmaterialien verwenden flexiblen Solarpanels, die in Echtzeit Lichtenergie absorbieren und kontinuierlich Energie bereitstellen, indem sie den Mechanismus über elektrische Energie betreiben, der für Vakuumumgebungen geeignet ist",ZN="Versuchen Sie, den Mechanismus-Ausrüstung zu starten",QN="Gratulation, du hast den Mechanismus beherrscht. Wenn du weiterhin diesen Sternenhimmel erkunden möchtest, gehe weiter.",e3="Ein unendliches Meer, oder?",t3="Wie schwer ist es für dich jetzt, ist es etwas, das man betrachten kann?",n3="Ich habe plötzlich eine Person gedacht, weißt du, Johnny Silverhand? Ja, der, der in Relic gefangen war.",i3="V, niemals aufgeben.",r3="Ich bin fertig, du kannst gehen",s3="Hallo, Welt",a3="Anwendung",o3="Spiel",l3="Werkzeug",c3="Open-Source-Komponenten",u3="Kontoverwaltung",d3={aboutme:"Über mich",products:"Produktzentrum",contact:"Kontaktiere uns",apps:"Anwendungen",login:"Anmelden",register:"Registrieren","reset-password":"Passwort zurücksetzen","forgot-password":"Passwort vergessen",logout:"Ausloggen","send-code":"Code senden"},f3="Qianyu",h3="Feedback",p3="Wenn Sie unsere Hilfe benötigen oder Fragen oder Vorschläge zu DiMEMO haben, senden Sie uns bitte eine E-Mail über den folgenden Link:",m3="E-Mail senden",g3="Zum Thema Datenschutz",_3="Qianyu sammelt keine Ihrer Daten. Datenberechnung und -verarbeitung erfolgen lokal auf Ihrem Gerät. Derzeit werden Daten nur lokal im Dateisystem Ihres Geräts gespeichert. In einer zukünftigen Version könnten wir iCloud verwenden, um Ihre Daten über mehrere Apple-Geräte hinweg mit DiMEMO zu synchronisieren und zu speichern. Wir werden jedoch im Voraus fragen, ob Sie diese Funktion nutzen möchten, und Sie haben das Recht, die Nutzung zu wählen oder zu deaktivieren. Darüber hinaus planen wir die Implementierung von Speicherlösungen, die auf die dauerhafte Speicherung von Daten abzielen. Bei Updates werden wir Sie im Voraus informieren, ob diese Funktion aktiviert werden soll.",v3="Hallo, ich bin ein",b3="Spieleentwickler",x3="Warum bin ich Spieleentwickler geworden? Der Hauptgrund ist meine Liebe zum Spielen. Meine früheste Inspiration war der Karteneditor von World of Warcraft.",y3="Derzeit konzentriere ich mich auf die Entwicklung von",S3="Moderne Spiele",E3="Moderne Spiele? Mein Verständnis ist eine verbesserte Spielerfahrung und Funktionen, die zuvor nicht möglich waren.",M3="Einschließlich mehr neuer Spielplattformen und Full-Stack-Beschleunigungsfähigkeiten in hochwertigen Gaming-Umgebungen, brandneue KI-Interaktionen, Animationen und 3D-Asset-Design.",T3="Außerdem bin ich ein",w3="Hardcore-Gamer",A3="Ein Spieler, der Tausende von Spielen mit Zehntausenden von Spielstunden gespielt hat.",R3="Einige meiner Lieblingsspiele:",C3="Cyberpunk 2077",P3="Willkommen in Night City! Hier ist WNS News! Es ist eine Welt voller Erinnerungen. Wer möchte nicht V sein? Aber wie viele trauen sich, V zu sein? Du weißt, wovon ich spreche. Er ist eine Legende in Night City.",L3="Black Myth: Wukong",I3="Meister Bodhi hat den kleinen Affen niemals aufgegeben.",D3="GTA",U3="Michael und Trevor sind meine Brüder. Selbst wenn ich alles verliere, lasse ich keinen von ihnen sterben.",N3="SCUM",F3="Ich habe in diesem Spiel eine Bar eröffnet, viele gute Freunde kennengelernt, aber auch einige Leute getroffen, die wie der Spielname sind. Da der Server, auf dem ich spielte, häufig zurückgesetzt wurde, haben wir später unseren eigenen Spielserver eingerichtet, der schließlich aufgrund eines Ungleichgewichts zwischen Serverausgaben und -einnahmen eingestellt wurde. Selbst wenn es bedeutete, Geld zu verlieren, wollte ich die Freunde, die dieses Spiel lieben, nicht enttäuschen. Danke an meine Brüder, die mit mir auf dieser kleinen Insel gelebt haben. Wenn ich Geld habe, werde ich den Server definitiv neu starten und ihn für immer am Laufen halten.",O3="Ready or Not",k3="Ich habe es gekauft, um CQB mit ein paar Kumpels zu spielen. Dieses Spiel ist wirklich gut gemacht, gute Bewertungen.",z3="Call of Duty",B3="Die Call of Duty-Serie ist sowohl eine Kindheitserinnerung als auch das, was ich derzeit als den Höhepunkt der Kriegs-Spiele betrachte. Jede Version der Serie in verschiedenen Epochen ist erstklassig, mit realistischen Grafiken und Audio, Waffen und Animationstexturen, die der realen Physik entsprechen, und packenden Handlungssträngen, die das Herz höher schlagen lassen. Soap stirbt nie.",V3="No Man's Sky",$3="Es gibt sowohl VR- als auch PC-Versionen sowie einige einzigartige generative Spieldesigns. Persönlich finde ich es ziemlich gut, aber ich mag diesen Kunststil nicht besonders.",H3="Außerhalb des Spielens: Ich gehe gerne zum See oder Meer, finde einen Platz zum Sitzen, am besten mit einem Tisch, und nehme ein Glas",G3="Gekühlter Saft",W3="Saft kann Kokosnuss, Orange oder Wassermelone sein.",j3="Gekühlte Cola",q3="Es schmeckt nicht gut, wenn sie nicht kalt ist.",X3="Oder stelle noch eins daneben.",J3="Einfacher Aschenbecher",Y3="Ich nehme normalerweise direkt eine Dose Red Bull und Kaffee mit, dann benutze ich einen Kaffeebecher aus Papier, um Asche wegzufegen, und eine Red Bull-Dose, um Zigarettenstummel abzulegen. Warum? Der Kaffeebecher hat eine große Öffnung, sodass die Asche leichter weggeweht wird, ohne außen zu landen. Red Bull-Dosen sind normalerweise aus Metall, sodass ich mir keine Sorgen machen muss, dass die Zigarettenstummel sie verbrennen.",K3="Zünde eine an",Z3="Zigarette",Q3="Ich bevorzuge normalerweise zwei Arten von Zigaretten: 555 Dual Burst und Little Sun Red Zhongnanhai.",eF="Setze Kopfhörer auf, aktiviere den Geräuschunterdrückungsmodus und beginne zufällig meine",tF="Playlist",nF="Möchtest du meine Playlist? Suche bei NetEase Cloud: ponzS",iF="Beginne, über neue Designs nachzudenken und Demos zu erstellen, bis",rF="Computerbatterie",sF="Ich wähle normalerweise ein MacBook Air für den Außengebrauch. Es hält den ganzen Tag ohne Batterieangst und hat noch viel Energie übrig. Ich hatte nie Batterieangst, und es ist leicht genug und die Leistung ist ausreichend.",aF="Batterie bis 0% verbraucht",oF="Fähigkeiten",lF="Spiele (Unity, Unreal Engine, Blender)",cF="Web (Vue.js, Nuxt.js, Three.js)",uF="Windows (tauri, electron)",dF="Mobile Anwendungen (Flutter, NativeScript, uni-app, uni-app x, ionic)",fF="Programmiersprachen (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",hF="Server (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",pF="Arten von Projekterfahrung",mF="Full-Stack Progressive Web Application - Desktop-Anwendung - Mobile Anwendung",gF="WebGL-WebGPU-WebXR-WebVR-PWA Spiele",_F="Unreal Engine 5 Spiele - Unity Engine Spiele - C++ und C# Projekte - Blueprints und UVS Projekte - Spieldesign - Technische Kunst - Musik",vF="Oculus-Pico-VR-XR-MR",bF="Kontakt",xF="Bugs - Schwachstellen - Fehler - Vorschläge - Update-Anfragen - Kooperationsmöglichkeiten:",yF="ponzs",SF="ponzs, Chinesischer Name: Zhang Guoai, Chinesische Staatsangehörigkeit",EF="Full-Stack Ingenieur",MF="Web-VR-PC-Mobile Anwendung Full-Stack Entwickler",TF="Tipp!",wF="Über mich",AF="Klicken Sie auf hervorgehobene Schlüsselwörter, um Inhaltsdetails anzuzeigen",RF="Die Dokumentation wird erstellt, bitte bleiben Sie auf dem Laufenden",CF=JSON.parse('{"game":"Spiel","web":"WEB","modeling":"Mobile Anwendung","animation":"Programmiersprache","server":"Server","aboutunity":"Eine kleine Geschichte über Unity","aboutunitycontent":"Unity ist eine bekannte kommerzielle 3D-Engine. Warum erwähnt man nicht direkt Spiele? Weil sie neben der Nutzung in der Spieleindustrie auch in anderen Branchen weit verbreitet ist, wie Architektur, Film, Werbung, Bildung und so weiter. Einmal bin ich zum Führerscheinfahren gegangen und eine VR-Führerschulung für Anfänger wurde mit Unity erstellt. Die Vor- und Nachteile sind relativ offensichtlich. Die Kompatibilität ist unbestreitbar, aber um eine ultimative visuelle Erfahrung zu erreichen, muss noch viel Arbeit geleistet werden. Soweit ich weiß, liegt das Hauptaugenmerk der offiziellen Seite auf plattformübergreifender und Hardware-Kompatibilität. Aus meiner eigenen Perspektive mag ich Unity sehr, es ist sehr freundlich für unabhängige Entwickler, ermöglicht schnelles Entwickeln und hat für mich sehr geringe Lernkosten. Du glaubst es vielleicht nicht, aber in einer Woche habe ich gelernt und eine vollständige VR-Spiel-Demo erstellt. Ich empfehle nicht das Videolernen, weil du feste Zeiten brauchst, aber durch das schrittweise Arbeiten mit Dokumenten kannst du die Zeit selbst steuern und selbst nachdenken, anstatt der Denkweise eines Lehrers zu folgen. Aber ein ausgezeichneter Lehrer wird dir immer hilfreiche Erfahrungen vermitteln. Nachdem du die Grundlagen gemeistert hast, kannst du deine eigenen Erfahrungen langsam aufnehmen.","aboutunrealengine":"Eine kleine Geschichte über Unreal Engine","aboutunrealenginecontent":"Warum hast du die Unreal Engine gelernt? Ich habe einige Spiele gespielt, deren beeindruckende Erfahrungen auf Unreal Engine basieren, und es heißt, dass die visuelle Erfahrung, die es erstellen kann, die beste aller kommerziellen Engines ist. Deshalb wollte ich es auch ausprobieren. Die erste Wahl war Version 5, die Raumkonstruktion, visuelle Effekte und physikalische Bewegungserfahrungen haben mich sehr zufrieden gestellt, vorausgesetzt du verwendest hochwertige Materialien und leistungsfähigen Code. Diese Wahl wurde durch die Unzufriedenheit mit den Render-Ergebnissen von Unity verursacht.","aboutblender":"Eine kleine Geschichte über Blender","aboutblendercontent":"Neben Blender gibt es viele hervorragende Werkzeuge. Warum habe ich mich für es entschieden? Ehrlich gesagt weiß ich es nicht ganz genau. Vielleicht, weil es bei meiner Werkzeugsuche weiter oben rangierte, habe ich es einfach angeklickt, haha.","aboutvue":"Eine kleine Geschichte über Vue","aboutvuecontent":"Bevor ich Vue benutzte, habe ich React verwendet, aber ich habe einige Performance- und Codierungsstil-Probleme entdeckt. Vue macht das Schreiben angenehmer und ermöglicht hervorragende Performance ohne zusätzlichen Aufwand. Die Entwickler des Vue-Teams sind ebenfalls sehr engagiert, sie helfen Entwicklern auf Social-Media-Plattformen sehr aktiv und das gibt mir ein sehr zuverlässiges Gefühl und lässt mich ihre Begeisterung spüren. In der neuen Version Vue3 kann man eine noch bessere Codiererfahrung erhalten. Vue ist wie ein Pinsel in deinen Händen, mit dem du alles zeichnen kannst, was du willst. Die Composition API macht deinen Code sauberer und leichter zu verstehen und zu denken. Even You pflegt seine Haut sehr gut, hat auch eine gute Figur und eine angenehme Stimme, deshalb schaue ich gerne seine Vorträge, Livestreams und Videos über Vue und verwandte Werkzeuge an.","aboutnuxt":"Eine kleine Geschichte über Nuxt","aboutnuxtcontent":"Nuxt ist ein Meta-Framework von Vue, es kann SSR-Server-Seiten-Rendering realisieren, außerdem kann es Konfiguration vereinfachen und automatisch Routen sowie Importe global verwalten, sogar viele Plugins und Bibliotheken können mit 0 Konfiguration genutzt werden, was für jemanden wie mich, der faul ist, sehr angenehm ist. Außerdem ist sein Plugin-Shop sehr gut, ich gebe ihm 5 Sterne.","aboutthreejs":"Eine kleine Geschichte über Three.js","aboutthreejscontent":"WebGL und WebGPU können dir erlauben, die GPU-Hardware voll auszunutzen, anstatt nur im Browser beschränkt zu sein. Allerdings, bei der Nutzung von einigen entfernten Ressourcen, brauchst du sehr viel Lazy Loading und zusätzliche Verarbeitung, um eine bessere Erfahrung zu erreichen. Insgesamt eröffnet es deinem Projekt mehr Möglichkeiten. Wenn du WebVR und WebAR kennst, verstehst du sicher, dass es nicht nur möglich ist, einen virtuellen Raum oder 3D-Modelle zu erstellen.","aboutflutter":"Eine kleine Geschichte über Flutter","aboutfluttercontent":"Flutter ist die letztendliche Wahl unter den vielen Cross-Platform-Frameworks, die ich ausprobiert habe. Es verwendet eine selbstgerenderte Lösung und Hot Reloading ist auch angenehm, das bedeutet, dass du keine Abhängigkeit von nativen Modulen hast und beliebiges Aussehen und Komponenten erstellen kannst. Gleichzeitig, auch wenn Animationen sehr komplex sind, kann man dennoch eine ausgezeichnete Render-Frames-Rate erreichen. Natürlich, wenn man die beste Performance und Render-Frames-Rate will, ist uniapp x eine bessere Wahl, da es direkt zu nativen Code kompiliert, aber der Raum für Anpassungen ist begrenzt. Die Wahl von Flutter bedeutet, dass du die Lernkosten für Dart bewältigen musst. Aber alle Logik von Programmiersprachen ist ähnlich, wenn du eine Programmiersprache beherrschst, wirst du Dart sehr schnell lernen. Ich habe weniger als eine Woche gebraucht, um Dart zu lernen und eine Demo zu bauen.","aboutnativescript":"Eine kleine Geschichte über NativeScript","aboutnativescriptcontent":"NativeScript ist ein Framework für Cross-Platform-Entwicklung, das auf nativen Modulen basiert und Vue-Syntax unterstützt. Das reduziert die Lernkosten erheblich für Entwickler, die Vue beherrschen, wahrscheinlich kann man es in ein oder zwei Stunden nutzen. Ich habe mich damals dafür entschieden, es zu lernen, weil es Vue unterstützt, es hat hohe Performance, aber der Raum für Anpassungen ist begrenzt und es benötigt mehr Arbeit.","aboutuniappx":"Eine kleine Geschichte über uni-app x","aboutuniappxcontent":"uni-app x ist ein Zweig von uniapp, es unterstützt die Vue3-Syntax und kompiliert bedingt zu nativen Code. Außerdem unterstützt es Hot Reloading, aber der Raum für Anpassungen ist begrenzt. uni-app ist in China sehr beliebt, es kann nicht nur Cross-Platform-Apps erstellen, sondern auch Cross-Platform-Mini-Programme und Quick-Apps, zum Beispiel WeChat Mini-Programme. Aber der HbuilderX-Editor ist sehr schlecht, viele Interaktionen und die Frame-Rate ist im Vergleich zu VSCode deutlich niedriger, die Fließfähigkeit ist sehr schlecht, das Aussehen ist hässlich und der Plugin-Shop benötigt, dass man Werbung ansieht, um Plugins herunterzuladen.","abouttauri":"Eine kleine Geschichte über Tauri","abouttauricontent":"Tauri ist ein Cross-Platform-App-Framework, das mit der Rust-Sprache gebaut ist. Es unterstützt auch das Erstellen von Desktop-Apps, zum Beispiel für Windows, macOS und Linux. Es ist einer meiner Motivationen, Rust zu lernen. Die Performance ist ausgezeichnet, und derzeit verwende ich Rust für das Backend meines neuen Projekts.","aboutionic":"Eine kleine Geschichte über Ionic","aboutioniccontent":"Ionic verbindet native APIs über Capacitor-Bridges, unterstützt kein Hot Reloading. Der einzige Vorteil ist, dass man bestehende Web-Projekte direkt in eine mobile App verpacken kann, aber die Performance und Benutzererfahrung sind sehr schlecht. Es eignet sich nur für schnelles Entwickeln.","aboutjavascript":"Eine kleine Geschichte über JavaScript","aboutjavascriptcontent":"JavaScript ist eine der von mir am häufigsten verwendeten Programmiersprachen. Zurzeit betrachte ich es als ein sehr vielseitiges Programmierwerkzeug, es kann fast alles erstellen, einschließlich intelligente Verträge, Client-Server-Systeme und vieles mehr. Es begleitet mich seit vielen Jahren.","abouttypescript":"Eine kleine Geschichte über TypeScript","abouttypescriptcontent":"TypeScript ist eine Obermenge von JavaScript, es unterstützt statische Typprüfung. Wenn du mit JavaScript vertraut bist, wirst du auch TypeScript schnell lernen. TypeScript-Syntax ist sehr ähnlich zu JavaScript, aber das Typsystem von TypeScript ermöglicht dir, beim Schreiben von Code sicherer und effizienter zu sein.","aboutrust":"Eine kleine Geschichte über Rust","aboutrustcontent":"Rust ist eine systemnahe Programmiersprache mit hervorragender Performance. Es unterstützt auch parallele Programmierung. Das Besitz- und Lebensdauermanagement ist sehr strikt, viele potenzielle Fehler können bereits während der Kompilierungsphase entdeckt werden. Außerdem unterstützt es generisches Programmieren, was das Schreiben von Code flexibler und effizienter macht. Es bietet viele Möglichkeiten in Bereichen wie Blockchain und Industriesystemen, die auf Sicherheit und Performance angewiesen sind.","aboutdart":"Eine kleine Geschichte über Dart","aboutdartcontent":"Dart ist die Programmiersprache von Flutter. Ich benutze es derzeit nur zum Zeichnen von Client-UI, die Backend-Systeme zu Rust zu machen ist eine weisere Wahl.","aboutpython":"Eine kleine Geschichte über Python","aboutpythoncontent":"Python habe ich aus beruflichen Gründen lernen müssen, weil ich einige mit Python geschriebene Open-Source-Werkzeuge in mein Projekt integrieren musste, leider. 😔","aboutcsharp":"Eine kleine Geschichte über C#","aboutcsharpcontent":"C# wird verwendet, um Unity-Spielskripte zu schreiben. Es fühlt sich an wie das Schreiben eines Aufsatzes, sehr angenehm.","aboutcpp":"Eine kleine Geschichte über C++","aboutcppcontent":"C++ wird verwendet, um Unreal Engine-Spielscripte zu schreiben. Seit ich Blueprints benutze, schreibe ich nur noch selten C++.","aboutswift":"Eine kleine Geschichte über Swift","aboutswiftcontent":"Swift wird zum Schreiben von iOS-Apps verwendet, aber seit ich Flutter benutze, schreibe ich nur noch selten Swift.","aboutjava":"Eine kleine Geschichte über Java","aboutjavacontent":"Dies ist eine traurige Geschichte, Spring, Spring Boot... Ich möchte nicht mehr darüber reden. Ich will nur sagen, dass ich Java nie wieder benutzen möchte. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen. Ich will Java nie wieder benutzen.","aboutnodejs":"Eine kleine Geschichte über Node.js","aboutnodejscontent":"Node.js ist eine JavaScript-Laufzeitumgebung, die JavaScript auf der Serverseite laufen lassen kann. Das macht JS zum Schlüssel für Full-Stack-Entwicklung.","aboutexpress":"Eine kleine Geschichte über Express","aboutexpresscontent":"Express ist das Web-Framework von Node.js und die erste Wahl für schnelles Entwickeln. Aber für große Projekte kann es an seine Grenzen stoßen.","aboutnestjs":"Eine kleine Geschichte über Nest.js","aboutnestjscontent":"Nest.js integriert Express und Fastify, unterstützt TypeScript und bietet modulare Entwicklung, was es einfacher macht, Code zu organisieren. Es eignet sich gut für den Aufbau großer Projekte."}'),PF="《My Starry Sky》 - Mein sternklarer Himmel",LF="《My Starry Sky》 ist ein experimentelles Spielprojekt mit einem unendlich großen generativen Universum. Durch eigens entwickelte Algorithmen zur Inferenz und Kombination von Elementen werden neue Universen und kosmische Elemente generiert. Derzeit sind nicht alle Designs implementiert; zukünftige Versionen werden mehr neue Inhalte und Funktionen hinzufügen, um sich auf den späteren Einstieg in inferenzbasierte generative Planeten vorzubereiten! Vielen Dank, dass Sie dieses Spiel ausprobiert und unterstützt haben. Unterstützt 10 verschiedene Erdsprache!",IF="Im App Store verfügbar! Suche: My Starry Sky",DF="Unterstützte Geräte: iPhone, iPad, Mac, Vision Pro",UF={skip:HN,language1:GN,language2:WN,next:jN,enter:qN,language3:XN,language4:JN,language5:YN,language6:KN,language7:ZN,language8:QN,language9:e3,language10:t3,language11:n3,language12:i3,language13:r3,hello:s3,application:a3,game:o3,tool:l3,openSource:c3,account:u3,routes:d3,di:f3,di1:h3,di2:p3,di3:m3,di4:g3,di5:_3,a1:v3,a2:b3,a2a1:x3,a3:y3,a4:S3,a4a1:E3,a5:M3,a6:T3,a7:w3,a7a1:A3,a8:R3,a9:C3,a9a1:P3,a10:L3,a10a1:I3,a11:D3,a11a1:U3,a12:N3,a12a1:F3,a13:O3,a13a1:k3,a14:z3,a14a1:B3,a15:V3,a15a1:$3,a16:H3,a17:G3,a17a1:W3,a18:j3,a18a1:q3,a19:X3,a20:J3,a20a1:Y3,a21:K3,a22:Z3,a22a1:Q3,a23:eF,a24:tF,a24a1:nF,a25:iF,a26:rF,a26a1:sF,a27:aF,skillsTitle:oF,development:lF,web:cF,windows:uF,modeling:dF,animation:fF,design:hF,projectsTitle:pF,project1:mF,project2:gF,project3:_F,project4:vF,title:bF,info:xF,name:yF,name1:SF,role1:EF,role:MF,bookmarktip:TF,aboutMeTitle:wF,bookmarktip1:AF,opensource:RF,intro1:CF,game1:PF,game1a1:LF,game1a2:IF,game1a3:DF},NF=" تخطي",FF="مرحبًا، أنا ponzs، هذا هو الفضاء الافتراضي التوليدي الذي قمت بإنشائه. يرجى اختيار تفضيلك للغة، ثم حاول استخدام إصبعك للتمرير أمامك للتحكم في الرؤية. تأكد من أن جهاز التحكم الخاص بنا يعمل بشكل صحيح. إذا كان كل شيء جاهزًا، يمكننا متابعة استكشاف هذا الفضاء.",OF="لقد اخترت",kF="التالي",zF="الدخول إلى المنزل",BF="هذا هو الفضاء الافتراضي الذي بَنِيته. هذا هو الفضاء الافتراضي الذي بَنِيته. هذا هو الفضاء الافتراضي الذي بَنِيته. هذا هو الفضاء الافتراضي الذي بَنِيته.",VF="ندخل في عمق هذا السماء النجمي، نسافر بينهم ونتعلم حياة الآخرين. هذا هو الجهاز الذي أعطيته لك، حتى لو كان آخر، فهو متين جدًا. حاوله، إذا لم يبدأ، فأنت في الوقت المقبل.(هل ترى هذا الهال? هذا هو الزر التشغيل. اضغط عليه لتشغيل الطائرة، وستحصل على الحرية الكاملة لاستكشاف هذا الكون!)",$F="الحصول على جهاز آلي في النمط الذي تحمله",HF="المواد السطحية تستخدم ألواح الطاقة الشمسية المرنة، التي يمكن أن تستخدم الطاقة الضوئية الحقيقية في الوقت الحقيقي لتوفير الطاقة بشكل مستمر، من خلال التشغيل عبر الطاقة الكهربائية، مناسب للأجواء الفضائية",GF="حاول تشغيل جهاز آلي في النمط الذي تحمله",WF="حاول تشغيل جهاز آلي في النمط الذي تحمله",jF="حاول تشغيل جهاز آلي في النمط الذي تحمله",qF="حاول تشغيل جهاز آلي في النمط الذي تحمله",XF="حاول تشغيل جهاز آلي في النمط الذي تحمله",JF="حاول تشغيل جهاز آلي في النمط الذي تحمله",YF="حاول تشغيل جهاز آلي في النمط الذي تحمله",KF="مرحبا بالعالم",ZF="تطبيق",QF="لعبة",eO="أداة",tO="مكونات مفتوحة المصدر",nO="إدارة الحسابات",iO={aboutme:"معلومات عني",products:"مركز المنتجات",contact:"اتصل بنا",apps:"تطبيقات",login:"تسجيل الدخول",register:"تسجيل","reset-password":"إعادة تعيين كلمة المرور","forgot-password":"نسيت كلمة المرور",logout:"تسجيل الخروج","send-code":"إرسال الرمز"},rO="تشين يوي",sO="إبلاغ عن مشكلة",aO="إذا كنت بحاجة إلى مساعدتنا أو لديك أي أسئلة أو اقتراحات حول DiMEMO، يرجى الاتصال بنا عبر البريد الإلكتروني من خلال الرابط أدناه:",oO="إرسال بريد إلكتروني",lO="حول الخصوصية",cO="تشين يوي لن تجمع أي بيانات منك، يتم حساب البيانات ومعالجتها محليًا على جهازك، وطرق التخزين حاليًا محفوظة فقط في نظام الملفات المحلي لجهازك، قد نستخدم iCloud في إصدار مستقبلي لمزامنة وتخزين بياناتك عبر أجهزة Apple متعددة في DiMEMO، لكننا سنستفسر مسبقًا عما إذا كنت ترغب في استخدام هذه الميزة. بالإضافة إلى ذلك، لدينا خطط لتنفيذ حلول تخزين تهدف إلى الحفاظ على البيانات بشكل دائم، وسنقوم بإبلاغك مسبقًا إذا تم تفعيل هذه الميزة.",uO="مرحبًا، أنا",dO="مطور ألعاب",fO="لماذا أصبحت مطور ألعاب؟ السبب الرئيسي هو أنني أحب اللعب، وكانت البداية مع محرر خرائط وورلد أوف ووركرافت",hO="أركز حاليًا على تطوير",pO="ألعاب حديثة",mO="ما هي الألعاب الحديثة؟ أفهمها على أنها تجربة ألعاب أقوى وميزات لم تكن موجودة من قبل",gO="بما في ذلك المزيد من منصات الألعاب الجديدة وقدرات تسريع شاملة في حالات الألعاب عالية الجودة، وتفاعل جديد بالذكاء الاصطناعي، وتصميم الأصول ثلاثية الأبعاد والرسوم المتحركة",_O="بالإضافة إلى ذلك، أنا",vO="لاعب ألعاب متعصب",bO="مستهلك لآلاف الألعاب مع آلاف الساعات من وقت اللعب",xO="بعض الألعاب المفضلة لدي:",yO="سايبر بانك 2077",SO="مرحبًا بك في مدينة الليل! هنا أخبار WNS! إنه عالم مليء بالذكريات. من لا يريد أن يكون V؟ لكن كم عدد الأشخاص الذين يجرؤون على أن يكونوا V؟ أنت تعرف أنني أتحدث عن ذلك V. إنه أسطورة مدينة الليل",EO="أسطورة القرد الأسود",MO="لم يتخلَ المعلم بودي عن القرد الصغير.",TO="GTA",wO="مايكل وتريفور هما أخواني، حتى لو فقدت كل شيء، لن أسمح لأي منهما بالموت.",AO="SCUM",RO="لقد فتحت بارًا في هذه اللعبة، وتعرفت على الكثير من الأصدقاء الجيدين، لكنني واجهت أيضًا بعض الأشخاص الذين يشبهون اسم اللعبة، نظرًا لأن الخادم الذي كنت ألعب فيه كان يحذف البيانات بشكل متكرر، قررنا لاحقًا إنشاء خادم ألعاب خاص بنا، وفي النهاية توقفنا عن التشغيل بسبب عدم توازن الإيرادات والنفقات. حتى لو خسرت المال، لا أريد أن أضر الأصدقاء الذين يحبون هذه اللعبة، شكرًا للأخوة الذين عشت معهم في هذه الجزيرة الصغيرة، عندما أكون غنيًا، سأعيد تشغيل الخادم دون توقف.",CO="جاهز أو لا",PO="اشتريت هذه اللعبة لألعب CQB مع بعض الأصدقاء، إنها لعبة جيدة حقًا، تقييمات إيجابية",LO="نداء الواجب",IO="سلسلة نداء الواجب، هي ذكريات الطفولة وأعتقد أنها قمة ألعاب الحرب، كل إصدار في كل عصر هو من الطراز الأول، هنا تغطي الكثير، الرسومات الواقعية والصوت، منطق الأسلحة والرسوم المتحركة التي تتوافق مع الفيزياء الواقعية، يمكن أن تجعل الناس يشعرون بالحماس في القصة. صابون لا يموت أبدًا.",DO="الفضاء المجهول",UO="لديها إصدار VR وPC، بالإضافة إلى بعض تصميمات المحتوى التوليدي الفريدة، أعتقد أنها جيدة جدًا، لكنني لست معجبًا جدًا بهذا النمط الفني.",NO="خارج الألعاب: أحب الذهاب إلى ضفاف البحيرة أو البحر، والبحث عن مكان يمكنني الجلوس فيه، ويفضل أن يكون هناك طاولة، مع كوب من",FO="عصير مثلج",OO="يمكن أن يكون العصير من جوز الهند، أو البرتقال، أو البطيخ",kO="كولا مثلجة",zO="ليس جيدًا إذا لم يكن مثلجًا",BO="يمكن أيضًا، ضع بجانبه",VO="رماد سجائر بسيط",$O="عادةً ما أستخدم علبة ريد بول وكوب قهوة، ثم أستخدم كوب القهوة لإسقاط الرماد، وأضع أعقاب السجائر في علبة ريد بول. لماذا؟ لأن فوهة كوب القهوة كبيرة، ومن الصعب أن يسقط الرماد في الخارج، وعادةً ما تكون علبة ريد بول مصنوعة من المعدن، لذا لا داعي للقلق بشأن حرق أعقاب السجائر.",HO="أشعل واحدة",GO="سيجارة",WO="عادةً ما أختار نوعين من السجائر: 555 مزدوجة الكرات، وشيء صغير أحمر من وسط البحر",jO="ارتدي سماعات الرأس وأشغل وضع إلغاء الضوضاء، وابدأ في تشغيل قائمة التشغيل الخاصة بي بشكل عشوائي",qO="قائمة الأغاني",XO="هل تريد الحصول على قائمة الأغاني الخاصة بي؟ ابحث في NetEase Cloud: ponzS",JO="ابدأ في التفكير في بعض التصميمات الجديدة وصنع نموذج أولي، حتى",YO="شحن الكمبيوتر",KO="عادةً ما أختار MacBook Air للكمبيوتر المحمول، يمكن أن يستمر طوال اليوم دون مشاكل، ولا يزال هناك الكثير من الطاقة المتبقية، لم أشعر أبدًا بالقلق بشأن عمر البطارية، وهو خفيف بما يكفي، والأداء جيد",ZO="ينفد إلى 0%",QO="المهارات",ek="الألعاب (Unity، Unreal Engine، Blender)",tk="الويب (Vue.js، Nuxt.js، Three.js)",nk="ويندوز (tauri، electron)",ik="تطبيقات الهاتف المحمول (Flutter، NativeScript، uni-app، uni-app x، ionic)",rk="لغات البرمجة (JavaScript، TypeScript، Rust، Dart، Swift، C#، C++، Go، Java)",sk="الخوادم (Nest.js، Express، Fastify، Springboot، MongoDB، MySQL، Nginx، Docker، Redis، NuxtHab، Gin، k8s، pm2، node.js)",ak="أنواع خبرة المشاريع",ok="تطبيق ويب كامل المكدس - تطبيق سطح المكتب - تطبيقات الهاتف المحمول",lk="WebGL-WebGPU-WebXR-WebVR-PWA الألعاب",ck="ألعاب محرك Unreal 5 - ألعاب محرك Unity - مشاريع C++ وC# - مشاريع Blueprint وUVS - تخطيط الألعاب - فن تقني - موسيقى",uk="Oculus-Pico-VR-XR-MR",dk="اتصل",fk="الأخطاء - الثغرات - الأخطاء - الاقتراحات - المطالبات - فرص التعاون:",hk="ponzs",pk="ponzs، الاسم الصيني: زانغ قوه آي، الجنسية الصينية",mk="مهندس شامل",gk="مطور شامل للويب - VR - PC - تطبيقات الهاتف المحمول",_k="تنبيه!",vk="معلومات عني",bk="انقر على الكلمات الرئيسية المميزة لعرض تفاصيل المحتوى",xk="وثائق الاستخدام قيد الإعداد، يرجى الانتظار",yk={game:"لعبة",web:"ويب",modeling:"تطبيقات الهاتف المحمول",animation:"لغات البرمجة",server:"الخوادم",aboutunity:"قصة صغيرة عن Unity",aboutunitycontent:"Unity هو محرك ثلاثي الأبعاد تجاري معروف، لماذا لا أذكر الألعاب مباشرة؟ لأنه بالإضافة إلى استخدامه في صناعة الألعاب، له تطبيقات واسعة في صناعات أخرى مثل البناء، السينما، الإعلانات، التعليم، إلخ. ذات مرة ذهبت لاختبار القيادة، وكان هناك تدريب VR للقيادة للمبتدئين، تم بناؤه باستخدام Unity، كانت له مزايا وعيوب واضحة، توافقه ملحوظ، لكن لتحقيق تجربة بصرية مثالية، لا يزال هناك الكثير من العمل الذي يتعين القيام به، ومع ذلك، وفقًا لما أعلمه، فإن الشركة تركز أكثر على التوافق عبر الأنظمة الأساسية وأجهزة الأجهزة. من وجهة نظري، أحب Unity، فهو صديق للمطورين المستقلين، يمكن أن يحقق تطويرًا سريعًا، وتكاليف التعلم منخفضة جدًا بالنسبة لي، قد لا تصدق ذلك، لكنني أنجزت نموذجًا أوليًا كاملًا للعبة VR في أسبوع واحد، لا أوصي بالتعلم عبر الفيديو، لأنك تحتاج إلى وقت ثابت، لكن من خلال الوثائق، يمكنك التحكم في الوقت والتفكير بنفسك، بدلاً من اتباع أفكار المعلم، لكن المعلم الجيد دائمًا ما يحلل ويقدم لك بعض الخبرات القيمة، لكن يمكنك استيعاب خبرتك الخاصة ببطء بعد أن تتقن الأساسيات.",aboutunrealengine:"قصة صغيرة عن Unreal Engine",aboutunrealenginecontent:"لماذا تعلمت Unreal Engine؟ لقد لعبت بعض الألعاب التي كانت تجاربها رائعة وكانت تستخدم Unreal Engine، ويقال إنها تستطيع بناء أفضل تجربة بصرية بين جميع المحركات التجارية، لذلك أردت تجربتها. كانت اختياري الأول هو الإصدار 5، كنت راضيًا عن المساحة التي تم بناؤها، وتأثيرات بصرية، وتجربة الحركة الفيزيائية، بشرط أن تستخدم مواد عالية الجودة وكود عالي الأداء. كان هذا الاختيار ناتجًا عن عدم رضاي عن نتائج التقديم في Unity.",aboutblender:"قصة صغيرة عن Blender",aboutblendercontent:"بخلاف Blender، هناك العديد من الأدوات الممتازة، لماذا اخترت استخدامه؟ بصراحة، لست متأكدًا، ربما لأنه كان في المقدمة عندما بحثت عن الأدوات، هاها.",aboutvue:"قصة صغيرة عن Vue",aboutvuecontent:"قبل استخدام Vue، كنت أستخدم React، لكنني اكتشفت بعض المشكلات في الأداء وأسلوب البرمجة، جعلتني Vue أكتب بشكل أكثر راحة، ودون الحاجة إلى عمل إضافي، يمكنني الحصول على أداء ممتاز، كما أن مطوري فريق Vue متحمسون للغاية، دائمًا ما يكونون نشطين في منصات التواصل الاجتماعي لمساعدة المطورين في حل مشكلاتهم، مما أعطاني تجربة موثوقة، وشعرت بالحماس. في الإصدار الجديد من vue3، يمكنني الحصول على تجربة برمجة أفضل، Vue مثل فرشاة في يدك، يمكنك رسم ما تريد، كما أن واجهة برمجة التطبيقات التركيبية تجعل الكود الخاص بك أكثر بساطة وسهولة في الفهم والتفكير، حتى أن بشرة Even You جيدة جدًا، وجسدها جيد، وصوتها لطيف، لذلك سأكون سعيدًا بمشاهدة محاضراتها وبثها المباشر حول Vue والأدوات ذات الصلة.",aboutnuxt:"قصة صغيرة عن Nuxt",aboutnuxtcontent:"Nuxt هو إطار عمل Vue، يمكنه تحقيق SSR (التقديم من جانب الخادم)، بالإضافة إلى أنه يمكن أن يبسط التكوين والاستيراد التلقائي العالمي والتوجيه، حتى أن العديد من المكونات الإضافية والمكتبات يمكن أن تحقق صفر تكوين، مما يجعلني أشعر بالراحة ككسول. بالإضافة إلى ذلك، متجر المكونات الإضافية الخاص به ممتاز، أعطيه تقييم 5 نجوم.",aboutthreejs:"قصة صغيرة عن Three.js",aboutthreejscontent:"يمكن أن تجعل webGL وwebGPU من الممكن الاستفادة الكاملة من أداء GPU للأجهزة، دون أن تقتصر على المتصفح، ولكن في بعض حالات استخدام الموارد البعيدة، تحتاج إلى الكثير من التحميل الكسول ومعالجة إضافية لتحقيق تجربة أفضل. باختصار، سيوفر لك المزيد من الإمكانيات في مشروعك، إذا كنت تعرف webVR وwebAR، يجب أن تفهم أنه لا يمكنه فقط بناء مساحة افتراضية أو نموذج ثلاثي الأبعاد.",aboutflutter:"قصة صغيرة عن Flutter",aboutfluttercontent:"Flutter هو اختياري النهائي بين العديد من أطر العمل عبر الأنظمة الأساسية التي جربتها، باستخدام حل التقديم الذاتي، وإعادة التحميل الساخن مريحة، مما يعني أنه يمكنك بناء أي مظهر ومكونات دون الاعتماد على أي وحدات أصلية، وفي الوقت نفسه، حتى في حالة الرسوم المتحركة المعقدة، يمكن أن تحقق معدل إطارات ممتاز، بالطبع، إذا كنت تريد فقط أفضل أداء ومعدل إطارات، فإن uniapp x هو الخيار الأفضل، لأنه سيترجم مباشرة إلى كود أصلي مطابق، لكن مساحة التخصيص محدودة. اختيار Flutter يعني أنك بحاجة إلى مواجهة تكلفة تعلم Dart، لكن جميع لغات البرمجة متشابهة، إذا كنت بارعًا في لغة برمجة معينة، ستجد من السهل جدًا البدء في Dart، قضيت أقل من أسبوع في التعلم وبناء نموذج أولي.",aboutnativescript:"قصة صغيرة عن NativeScript",aboutnativescriptcontent:"NativeScript هو إطار عمل يعتمد على الوحدات الأصلية لتحقيق تطوير عبر الأنظمة الأساسية، ويمكن استخدام بناء جملة Vue، مما يقلل بشكل كبير من تكلفة التعلم للمطورين المألوفين بـ Vue، قد يستغرق الأمر بضع ساعات فقط للبدء، وكان اختياري لتعلمه أيضًا لأنه يدعم بناء جملة Vue، أداء عالي ولكن مساحة التخصيص محدودة، تحتاج إلى المزيد من العمل.",aboutuniappx:"قصة صغيرة عن uni-app x",aboutuniappxcontent:"uni-app x هو إصدار فرعي من uniapp، يدعم بناء جملة vue3، من خلال الترجمة الشرطية إلى كود أصلي مطابق، كما أنه يدعم إعادة التحميل الساخن، لكن مساحة التخصيص محدودة. uni-app شائع جدًا في الصين، يمكنه بناء تطبيقات عبر الأنظمة الأساسية، وكذلك بناء تطبيقات صغيرة عبر الأنظمة الأساسية، مثل تطبيقات WeChat الصغيرة. لكن محرر HbuilderX ليس جيدًا، العديد من حالات التفاعل مقارنة بـ vscode تظهر انخفاضًا واضحًا في الإطارات، وسلاسة سيئة، ومظهر قبيح، ومتجر المكونات الإضافية يحتاج إلى مشاهدة إعلانات لتنزيل المكونات الإضافية.",abouttauri:"قصة صغيرة عن Tauri",abouttauricontent:"Tauri هو إطار عمل تطبيقات عبر الأنظمة الأساسية مبني بلغة Rust، ويدعم أيضًا بناء تطبيقات سطح المكتب، مثل Windows وmacOS وLinux. كان أحد دوافع تعلم Rust، أداء ممتاز، حاليًا، نظام backend لمشروعي الجديد مكتوب بلغة Rust.",aboutionic:"قصة صغيرة عن ionic",aboutioniccontent:"يستخدم جسر capacitor لربط واجهات برمجة التطبيقات الأصلية، ولا يدعم إعادة التحميل الساخن، الميزة الوحيدة هي أنه يمكنه تحويل المشاريع الويب الحالية إلى تطبيقات موبايل، لكن الأداء والتجربة سيئة، مناسب للتطوير السريع.",aboutjavascript:"قصة صغيرة عن JavaScript",aboutjavascriptcontent:"JavaScript هي واحدة من لغات البرمجة الأكثر استخدامًا لدي، أراها أداة برمجة شاملة جدًا، يمكنها بناء أي شيء تقريبًا، بما في ذلك العقود الذكية - الأنظمة العميلة - أنظمة الخادم، إلخ. لقد رافقتني لسنوات عديدة.",abouttypescript:"قصة صغيرة عن TypeScript",abouttypescriptcontent:"TypeScript هو مجموعة JavaScript، يدعم فحص الأنواع الثابتة، إذا كنت مألوفًا بـ js، فستتمكن من البدء بسرعة في ts، بناء جملة ts مشابه جدًا لـ js، لكن نظام الأنواع في ts يمكن أن يجعلك أكثر أمانًا وكفاءة عند كتابة الكود.",aboutrust:"قصة صغيرة عن Rust",aboutrustcontent:"Rust هي لغة برمجة على مستوى النظام، أداء ممتاز، كما تدعم البرمجة المتزامنة، إدارة الملكية ودورة الحياة صارمة جدًا، يمكنها اكتشاف العديد من الأخطاء المحتملة في مرحلة الترجمة، كما تدعم البرمجة العامة، مما يجعل كتابة الكود أكثر مرونة وكفاءة. لديها العديد من الإمكانيات، مثل blockchain، والأنظمة الصناعية، وما إلى ذلك، حيث تسعى إلى الأمان والأداء.",aboutdart:"قصة صغيرة عن Dart",aboutdartcontent:"Dart هي لغة البرمجة المستخدمة في Flutter، حاليًا أستخدمها فقط لرسم واجهة المستخدم للعميل، من الأفضل استخدام Rust لنظام backend.",aboutpython:"قصة صغيرة عن Python",aboutpythoncontent:"تمت دراستها بسبب العمل، حيث كان من الضروري إعادة كتابة بعض الأدوات المفتوحة المصدر المكتوبة بلغة Python لدمجها في مشروعي، لا مفر من ذلك.😔",aboutcsharp:"قصة صغيرة عن C#",aboutcsharpcontent:"تستخدم لكتابة نصوص ألعاب Unity، مثل كتابة مقالة، مريحة جدًا.",aboutcpp:"قصة صغيرة عن C++",aboutcppcontent:"تستخدم لكتابة نصوص ألعاب Unreal Engine، منذ أن بدأت استخدام Blueprint، كتبت C++ أقل بكثير.",aboutswift:"قصة صغيرة عن Swift",aboutswiftcontent:"تستخدم لكتابة تطبيقات iOS، لكن بعد استخدام Flutter، كتبت Swift أقل بكثير.",aboutjava:"قصة صغيرة عن Java",aboutjavacontent:"هذه قصة حزينة، Spring، Springboot... لا أريد أن أقول المزيد، أريد فقط أن أقول، لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى. لا أريد استخدام Java مرة أخرى.",aboutnodejs:"قصة صغيرة عن Node.js",aboutnodejscontent:"Node.js هو بيئة تشغيل JavaScript، يمكن أن تجعل JavaScript تعمل على جانب الخادم، مما يجعل js لغة شاملة.",aboutexpress:"قصة صغيرة عن Express",aboutexpresscontent:"Express هو إطار عمل ويب لـ Node.js، الخيار الأول للتطوير السريع. لكن المشاريع الكبيرة قد تبدو غير كافية.",aboutnestjs:"قصة صغيرة عن Nest.js",aboutnestjscontent:"Nest.js يتضمن Express وFastify، ويدعم TypeScript، كما يدعم التطوير المعياري، مما يسمح لك بتنظيم الكود بشكل أفضل، مناسب لبناء المشاريع الكبيرة."},Sk="《My Starry Sky》 - سمائي المرصعة بالنجوم",Ek="《My Starry Sky》 هو مشروع لعبة تجريبي يمتلك كونًا توليديًا لا نهائيًا. من خلال خوارزميات مطورة ذاتيًا لاستنتاج وتجميع العناصر، يقوم بتوليد أكوان جديدة وعناصر كونية. لم يتم تنفيذ جميع التصاميم بعد، في الإصدارات المستقبلية سيتم إضافة المزيد من المحتويات والوظائف، استعدادًا للدخول في كواكب توليدية قائمة على الاستنتاج! شكرًا لك على تجربة ودعم هذه اللعبة. يدعم 10 لغات أرضية مختلفة!",Mk="متوفر على App Store! ابحث عن: My Starry Sky",Tk="الأجهزة المدعومة: iPhone، iPad، Mac، Vision Pro",wk={skip:NF,language1:FF,language2:OF,next:kF,enter:zF,language3:BF,language4:VF,language5:$F,language6:HF,language7:GF,language8:WF,language9:jF,language10:qF,language11:XF,language12:JF,language13:YF,hello:KF,application:ZF,game:QF,tool:eO,openSource:tO,account:nO,routes:iO,di:rO,di1:sO,di2:aO,di3:oO,di4:lO,di5:cO,a1:uO,a2:dO,a2a1:fO,a3:hO,a4:pO,a4a1:mO,a5:gO,a6:_O,a7:vO,a7a1:bO,a8:xO,a9:yO,a9a1:SO,a10:EO,a10a1:MO,a11:TO,a11a1:wO,a12:AO,a12a1:RO,a13:CO,a13a1:PO,a14:LO,a14a1:IO,a15:DO,a15a1:UO,a16:NO,a17:FO,a17a1:OO,a18:kO,a18a1:zO,a19:BO,a20:VO,a20a1:$O,a21:HO,a22:GO,a22a1:WO,a23:jO,a24:qO,a24a1:XO,a25:JO,a26:YO,a26a1:KO,a27:ZO,skillsTitle:QO,development:ek,web:tk,windows:nk,modeling:ik,animation:rk,design:sk,projectsTitle:ak,project1:ok,project2:lk,project3:ck,project4:uk,title:dk,info:fk,name:hk,name1:pk,role1:mk,role:gk,bookmarktip:_k,aboutMeTitle:vk,bookmarktip1:bk,opensource:xk,intro1:yk,game1:Sk,game1a1:Ek,game1a2:Mk,game1a3:Tk},Ak="छोड़ें",Rk="नमस्ते, मैं ponzs हूँ, यह मेरी बनाई हुई जनरेटिव वर्चुअल स्पेस है। कृपया अपनी भाषा पसंद चुनें और फिर अपने सामने दृष्टिकोण को नियंत्रित करने के लिए अपनी अंगुली से स्वाइप करने की कोशिश करें। सुनिश्चित करें कि हमारा नियंत्रक सही ढंग से काम कर रहा है। यदि सब कुछ ठीक है, तो हम इस स्पेस का अन्वेषण जारी रख सकते हैं।",Ck="मैंने चुन लिया है।",Pk="अगला",Lk="घर में जाएं",Ik="यह एक अनंत आकाश है, जिसमें अनंत ग्रह हैं, जो एक दूसरे को गिरने और फिर फूलने के बाद फिर से जोड़ते हैं। यह एक अनंत आकाश है, जिसमें अनंत ग्रह हैं, जो एक दूसरे को गिरने और फिर फूलने के बाद फिर से जोड़ते हैं। यह एक अनंत आकाश है, जिसमें अनंत ग्रह हैं, जो एक दूसरे को गिरने और फिर फूलने के बाद फिर से जोड़ते हैं।",Dk="हम इस आकाश के गहरे में प्रवेश करने जा रहे हैं, इसके बीच में यात्रा करें, और उनके जीवन का अनुभव करें। यह आपको दिया गया यांत्रिक यंत्र, भले ही पुराना हो, लेकिन टिकाऊ है। इसे आजमाएं, अगर यह चालू नहीं होता है तो अगली बार आएं।(क्या आप उस हल्के घेरे को देख रहे हैं? वह स्टार्ट बटन है। इसे दबाए रखें ताकि थ्रस्टर सक्रिय हो सके, और आप इस ब्रह्मांड में खोजने की पूर्ण स्वतंत्रता प्राप्त करेंगे!)",Uk="बैकपैक यांत्रिक यंत्र प्राप्त करें",Nk="सतह सामग्री लचीले सौर पैनल का उपयोग करती है, जो वास्तविक समय में प्रकाश ऊर्जा को अवशोषित करती है और निरंतर ऊर्जा प्रदान करती है, इलेक्ट्रिक ऊर्जा के माध्यम से यांत्रिक यंत्र को शक्ति प्रदान करती है, यह वैक्यूम वातावरण के लिए उपयुक्त है",Fk="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",Ok="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",kk="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",zk="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",Bk="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",Vk="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",$k="बैकपैक यांत्रिक यंत्र को चालू करने का प्रयास करें",Hk="नमस्ते, दुनिया",Gk="आवेदन",Wk="खेल",jk="उपकरण",qk="ओपन-सोर्स घटक",Xk="खाता प्रबंधन",Jk={aboutme:"मेरे बारे में",products:"उत्पाद केंद्र",contact:"संपर्क करें",apps:"आवेदन",login:"लॉगिन",register:"पंजीकरण","reset-password":"पासवर्ड रीसेट करें","forgot-password":"पासवर्ड भूल गए",logout:"लॉगआउट","send-code":"कोड भेजें"},Yk="कियान यु",Kk="प्रतिक्रिया समस्या",Zk="यदि आपको हमारी मदद की आवश्यकता है या DiMEMO के बारे में कोई प्रश्न और सुझाव हैं, तो कृपया निम्नलिखित लिंक के माध्यम से हमें ईमेल भेजें:",Qk="ईमेल भेजें",ez="गोपनीयता के बारे में",tz="कियान यु आपके किसी भी डेटा को एकत्र नहीं करेगा, डेटा की गणना और प्रसंस्करण आपके उपकरण पर स्थानीय रूप से किया जाएगा, वर्तमान में केवल आपके उपकरण के स्थानीय फ़ाइल सिस्टम में संग्रहीत किया जाएगा, भविष्य के किसी संस्करण में iCloud का उपयोग करके आपके DiMEMO में कई Apple उपकरणों के डेटा को समन्वयित और संग्रहीत किया जा सकता है, लेकिन क्या इस सुविधा का उपयोग किया जाएगा, हम पहले से पूछेंगे, आपके पास इसका उपयोग करने या बंद करने का अधिकार है। इसके अलावा, हमारे योजना में डेटा स्थायी रूप से संग्रहीत करने के उद्देश्य से भंडारण समाधान भी होंगे, यदि अपडेट होते हैं तो हम पहले से आपको सूचित करेंगे कि क्या इस सुविधा को सक्रिय किया जाएगा।",nz="नमस्ते, मैं एक",iz="खेल विकासकर्ता हूँ",rz="मैं खेल विकासकर्ता क्यों बना? मुख्य कारण यह है कि मुझे खेलना पसंद है, मेरी पहली प्रेरणा वॉरक्राफ्ट मानचित्र संपादक थी",sz="वर्तमान में मैं अनुसंधान और विकास पर ध्यान केंद्रित कर रहा हूँ",az="आधुनिक खेल",oz="आधुनिक खेल? मेरी समझ में इसका मतलब है बेहतर खेल अनुभव और ऐसी सुविधाएँ जो पहले नहीं की गईं",lz="अधिक नए खेल माध्यमों और उच्च गुणवत्ता वाले खेल स्थितियों में पूर्ण-स्टैक गति क्षमता, नए कृत्रिम बुद्धिमत्ता इंटरैक्शन, एनीमेशन और 3D संपत्ति डिजाइन शामिल हैं",cz="इसके अलावा, मैं एक",uz="गंभीर खेल खिलाड़ी हूँ",dz="हजारों खेलों के उपभोक्ता, हजारों घंटे खेल समय वाले खिलाड़ी",fz="कुछ बहुत पसंदीदा खेल:",hz="साइबरपंक 2077",pz="नाइट सिटी में आपका स्वागत है! यहाँ WNS समाचार है! यह एक यादगार दुनिया है। कौन V बनना नहीं चाहता? लेकिन कितने लोग V बनने की हिम्मत रखते हैं? आप जानते हैं कि मैं किस V की बात कर रहा हूँ। वह नाइट सिटी का किंवदंती है",mz="ब्लैक मिथक वुकोंग",gz="बोधि祖师 ने कभी छोटे बंदर को नहीं छोड़ा।",_z="GTA",vz="माइक और ट्रेवर मेरे भाई हैं, भले ही सब कुछ खो जाए, मैं किसी को भी मरने नहीं दूंगा।",bz="SCUM",xz="मैंने इस खेल में एक बार बार खोला, बहुत सारे अच्छे दोस्तों से मिला, लेकिन कुछ ऐसे भी मिले जो खेल के नाम की तरह थे, क्योंकि जिस सर्वर पर हम खेलते थे वह अक्सर डेटा मिटा देता था, इसलिए बाद में हमने अपना गेम सर्वर बनाया, अंततः सर्वर के आय-व्यय में असंतुलन के कारण संचालन बंद कर दिया। भले ही नुकसान हो, मैं इस खेल को पसंद करने वाले दोस्तों को धोखा नहीं देना चाहता, उन भाइयों का धन्यवाद जिन्होंने इस छोटे द्वीप पर मेरे साथ जीवन बिताया, जब मैं अमीर हो जाऊंगा, मैं निश्चित रूप से सर्वर को फिर से शुरू करूंगा और कभी बंद नहीं करूंगा।",yz="रेडी या नॉट",Sz="कुछ दोस्तों के साथ CQB खेलने के लिए खरीदी गई, यह खेल वास्तव में अच्छा है, सकारात्मक समीक्षा",Ez="कॉल ऑफ ड्यूटी",Mz="कॉल ऑफ ड्यूटी श्रृंखला, बचपन की यादें और अब मुझे लगता है कि युद्ध खेल का शीर्ष स्तर है, हर युग के श्रृंखला संस्करण शीर्ष स्तर के होते हैं, यहाँ बहुत कुछ शामिल है, यथार्थवादी ग्राफिक्स और ऑडियो, वास्तविक भौतिक तर्क के अनुसार हथियार और एनीमेशन की गुणवत्ता, जो आपको गर्म रक्त की कहानी का अनुभव कराती है। साबुन कभी नहीं मरता।",Tz="नो मैन्स स्काई",wz="इसमें VR और PC दोनों संस्करण हैं, इसके अलावा कुछ अद्वितीय जनरेटिव गेम सामग्री डिज़ाइन है, मुझे लगता है कि यह बहुत अच्छा है, लेकिन मुझे इस कला शैली से विशेष रूप से प्यार नहीं है।",Az="खेल के अलावा: झील के किनारे या समुद्र के किनारे जाना पसंद है, एक ऐसा स्थान ढूंढना जहाँ बैठ सकें, सबसे अच्छा एक टेबल हो, एक कप रखें",Rz="ठंडा फलों का रस",Cz="रस नारियल का, संतरे का, तरबूज का हो सकता है",Pz="ठंडा कोक",Lz="बर्फ के बिना अच्छा नहीं लगता",Iz="ठीक है, एक और रखें",Dz="सरल ऐशट्रे",Uz="मैं आमतौर पर एक कैन रेड बुल और कॉफी दिखाता हूँ, फिर कॉफी पेपर कप से राख फेंकता हूँ, और रेड बुल कैन में सिगरेट की बट रखता हूँ। क्यों? कॉफी पेपर कप का मुँह बड़ा है, राख फेंकना बाहर नहीं गिरता, रेड बुल कैन आमतौर पर धातु से बनी होती है, इसलिए आपको सिगरेट की बट जलने की चिंता नहीं करनी चाहिए।",Nz="एक",Fz="सिगरेट जलाएं",Oz="आम तौर पर दो प्रकार की सिगरेट चुनता हूँ: 555 डबल बॉल, छोटे सूरज लाल मध्य सागर",kz="हेडफ़ोन पहनें, शोर रद्द करने की स्थिति चालू करें, मेरी",zz="प्लेलिस्ट",Bz="क्या आप मेरी प्लेलिस्ट प्राप्त करना चाहते हैं? नेटEase क्लाउड पर खोजें: ponzS",Vz="कुछ नए डिज़ाइन के बारे में सोचना शुरू करें और डेमो बनाएं, जब तक कि",$z="कंप्यूटर की बैटरी",Hz="बाहरी कंप्यूटर आमतौर पर MacBook Air चुनता हूँ, एक दिन की बैटरी जीवन की कोई समस्या नहीं है, और बहुत सारी बैटरी बची रहती है, कभी भी बैटरी जीवन की चिंता नहीं की, और यह काफी हल्का है, प्रदर्शन भी पर्याप्त है",Gz="0% तक समाप्त हो जाए",Wz="कौशल",jz="खेल (Unity, Unreal Engine, Blender)",qz="वेब (Vue.js, Nuxt.js, Three.js)",Xz="Windows (tauri, electron)",Jz="मोबाइल एप्लिकेशन (Flutter, NativeScript, uni-app, uni-app x, ionic)",Yz="प्रोग्रामिंग भाषाएँ (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",Kz="सर्वर (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",Zz="परियोजना अनुभव प्रकार",Qz="पूर्ण-स्टैक प्रगतिशील वेब एप्लिकेशन-डेस्कटॉप एप्लिकेशन-मोबाइल एप्लिकेशन",eB="WebGL-WebGPU-WebXR-WebVR-PWA खेल",tB="अनरियल 5 इंजन खेल-यूनिटी इंजन खेल-C++ और C# परियोजनाएँ-नीला प्रिंट और UVS परियोजनाएँ-खेल योजना-तकनीकी कला- संगीत",nB="Oculus-Pico-VR-XR-MR",iB="संपर्क करें",rB="बग-खामियाँ-त्रुटियाँ-प्रस्ताव-प्रगति-भागीदारी के अवसर:",sB="ponzs",aB="ponzs, चीनी नाम: झांग गुओ ऐ, चीनी राष्ट्रीयता",oB="पूर्ण-स्टैक इंजीनियर",lB="वेब-VR-PC-मोबाइल एप्लिकेशन पूर्ण-स्टैक डेवलपर",cB="सूचना!",uB="मेरे बारे में",dB="हाइलाइट किए गए कीवर्ड पर क्लिक करें, सामग्री विवरण देखने के लिए",fB="उपयोग दस्तावेज़ निर्माणाधीन है, कृपया प्रतीक्षा करें",hB=JSON.parse('{"game":"खेल","web":"वेब","modeling":"मोबाइल एप्लिकेशन","animation":"प्रोग्रामिंग भाषाएँ","server":"सर्वर","aboutunity":"Unity के बारे में एक छोटी कहानी","aboutunitycontent":"Unity एक प्रसिद्ध व्यावसायिक 3D इंजन है, क्यों न सीधे खेल का उल्लेख करें? क्योंकि यह खेल उद्योग में उपयोग के अलावा अन्य उद्योगों में भी व्यापक रूप से उपयोग किया जाता है, जैसे कि वास्तुकला, फिल्म, विज्ञापन, शिक्षा आदि। एक बार मैं ड्राइविंग लाइसेंस के लिए गया था, नए लोगों के लिए एक VR ड्राइविंग प्रशिक्षण था, यह Unity का उपयोग करके बनाया गया था, इसके फायदे और नुकसान स्पष्ट हैं, इसकी संगतता स्पष्ट है, लेकिन चरम दृश्य अनुभव प्राप्त करने के लिए अभी भी बहुत काम करना है, लेकिन मुझे पता है कि आधिकारिक क्रॉस-प्लेटफ़ॉर्म और हार्डवेयर उपकरण संगतता पर अधिक ध्यान केंद्रित कर रहे हैं। मेरी दृष्टि से, मैं Unity को बहुत पसंद करता हूँ, यह स्वतंत्र डेवलपर्स के लिए बहुत अनुकूल है, यह त्वरित विकास को सक्षम करता है, और इसकी सीखने की लागत मेरे लिए बहुत कम है, आप शायद विश्वास नहीं करेंगे, एक सप्ताह के समय में मैंने एक पूर्ण VR गेम डेमो को सीखने से लेकर पूरा किया, मैं वीडियो सीखने की सिफारिश नहीं करता, क्योंकि वीडियो में आपको निश्चित समय की आवश्यकता होती है, लेकिन दस्तावेज़ के माध्यम से एक-एक करके आप समय और अपने विचारों को नियंत्रित कर सकते हैं, न कि शिक्षक के विचारों के साथ, लेकिन एक उत्कृष्ट शिक्षक हमेशा आपको कुछ उत्कृष्ट अनुभव प्रदान करेगा, लेकिन आप इसे समझने के बाद धीरे-धीरे अपने अनुभव को आत्मसात कर सकते हैं।","aboutunrealengine":"Unreal Engine के बारे में एक छोटी कहानी","aboutunrealenginecontent":"मैंने Unreal Engine क्यों सीखा? मैंने कुछ बहुत अच्छे अनुभव वाले खेल खेले हैं जो Unreal Engine का उपयोग कर रहे हैं, और कहा जाता है कि यह सभी व्यावसायिक इंजनों में सबसे अच्छा दृश्य अनुभव बना सकता है, इसलिए मैं भी कोशिश करना चाहता था। पहली बार मैंने version5 का चयन किया, जो कि निर्मित स्थान, दृश्य प्रभाव और भौतिक गति अनुभव में मुझे बहुत संतुष्ट करता है, बशर्ते कि आपको उच्च गुणवत्ता की सामग्री और उच्च प्रदर्शन वाले कोड का उपयोग करना होगा। यह चयन Unity के रेंडरिंग परिणामों से असंतोष के कारण उत्पन्न हुआ।","aboutblender":"Blender के बारे में एक छोटी कहानी","aboutblendercontent":"Blender के अलावा भी कई उत्कृष्ट उपकरण हैं, मैं इसे क्यों चुनता हूँ? सच कहूँ तो मुझे भी नहीं पता, शायद इसलिए कि जब मैंने खोजा तो यह शीर्ष पर था, मैंने इसे खोल दिया, हाहा।","aboutvue":"Vue के बारे में एक छोटी कहानी","aboutvuecontent":"Vue का उपयोग करने से पहले मैं React का उपयोग कर रहा था, लेकिन मैंने इसके कुछ प्रदर्शन और कोडिंग शैली की समस्याएँ देखीं, Vue ने मुझे लिखने में अधिक आरामदायक बनाया, और बिना अतिरिक्त काम के भी उत्कृष्ट प्रदर्शन प्राप्त किया, Vue टीम के डेवलपर्स भी बहुत उत्साही हैं, वे हमेशा सामाजिक प्लेटफार्मों पर डेवलपर्स की समस्याओं को हल करने में मदद करने के लिए सक्रिय रहते हैं, यह मुझे एक बहुत विश्वसनीय अनुभव देता है, और मुझे उत्साह का अनुभव कराता है। Vue3 के नए संस्करण में बेहतर कोडिंग अनुभव प्राप्त किया जा सकता है, Vue आपके हाथ में एक ब्रश की तरह है, जिससे आप जो चाहें उसे चित्रित कर सकते हैं, संयोजन API आपके कोड को अधिक संक्षिप्त और समझने और सोचने में आसान बनाता है, Even You की त्वचा की देखभाल बहुत अच्छी है और उसकी काया भी अच्छी है, उसकी आवाज भी अच्छी है, इसलिए मैं उसकी व्याख्यान और लाइव स्ट्रीम और Vue और संबंधित उपकरणों के वीडियो को देखने के लिए बहुत इच्छुक हूँ।","aboutnuxt":"Nuxt के बारे में एक छोटी कहानी","aboutnuxtcontent":"Nuxt Vue का मेटा-फ्रेमवर्क है, यह SSR सर्वर-साइड रेंडरिंग को लागू कर सकता है, इसके अलावा यह कॉन्फ़िगरेशन और वैश्विक स्वचालित आयात स्वचालित मार्ग को सरल बना सकता है, यहां तक कि कई प्लगइन्स और पुस्तकालय 0 कॉन्फ़िगरेशन को लागू कर सकते हैं, जिससे मुझे जैसे आलसी लोगों को बहुत आराम मिलता है। इसके अलावा, इसका प्लगइन स्टोर बहुत अच्छा है, इसे 5 सितारे की अच्छी समीक्षा।","aboutthreejs":"Three.js के बारे में एक छोटी कहानी","aboutthreejscontent":"webGL और webGPU आपको हार्डवेयर GPU प्रदर्शन का पूरा उपयोग करने की अनुमति देते हैं, और अब ब्राउज़र पर सीमित नहीं हैं, लेकिन कुछ दूरस्थ संसाधनों के उपयोग के मामले में, आपको बेहतर अनुभव प्राप्त करने के लिए बहुत सारे आलसी लोडिंग और अतिरिक्त प्रसंस्करण की आवश्यकता होती है। कुल मिलाकर, यह आपके प्रोजेक्ट में अधिक संभावनाएँ लाएगा, यदि आप webVR और webAR के बारे में जानते हैं, तो आपको समझना चाहिए कि यह केवल एक आभासी स्थान या 3D मॉडल बनाने के लिए नहीं है।","aboutflutter":"Flutter के बारे में एक छोटी कहानी","aboutfluttercontent":"Flutter मेरे द्वारा प्रयास किए गए कई क्रॉस-प्लेटफ़ॉर्म ढांचों में अंतिम चयन है, यह स्व-रेंडरिंग योजना का उपयोग करता है, गर्म पुनः लोड करना भी बहुत अच्छा है, इसका मतलब है कि आप किसी भी मूल मॉड्यूल पर निर्भर किए बिना किसी भी रूप और घटक को स्वतंत्र रूप से बना सकते हैं, साथ ही यदि एनीमेशन बहुत जटिल है तो भी उत्कृष्ट रेंडरिंग फ़्रेम दर प्राप्त कर सकते हैं, बेशक यदि आप केवल सर्वश्रेष्ठ प्रदर्शन और रेंडरिंग फ़्रेम दर चाहते हैं तो uniapp x बेहतर विकल्प है, क्योंकि यह सीधे संबंधित मूल कोड के लिए शर्तों का संकलन करेगा, लेकिन अनुकूलन स्थान सीमित है। Flutter का चयन करते समय आपको Dart की सीखने की लागत का सामना करना होगा, लेकिन सभी भाषाओं की तर्कशक्ति समान होती है, यदि आप किसी एक प्रोग्रामिंग भाषा में कुशल हैं, तो आप Dart को बहुत आसानी से सीख सकते हैं, मैंने लगभग एक सप्ताह में अध्ययन पूरा किया और डेमो बनाया।","aboutnativescript":"NativeScript के बारे में एक छोटी कहानी","aboutnativescriptcontent":"NativeScript एक क्रॉस-प्लेटफ़ॉर्म विकास ढांचा है जो मूल मॉड्यूल पर निर्भर करता है, साथ ही Vue सिंटैक्स का उपयोग कर सकता है, यह Vue से परिचित डेवलपर्स के लिए सीखने की लागत को काफी कम करता है, शायद एक या दो घंटे में आप इसे सीख सकते हैं, मैंने इसे चुनने का कारण यह था कि यह Vue सिंटैक्स का समर्थन करता है, उच्च प्रदर्शन लेकिन अनुकूलन स्थान सीमित है, अधिक काम की आवश्यकता है।","aboutuniappx":"uni-app x के बारे में एक छोटी कहानी","aboutuniappxcontent":"uni-app x uniapp का शाखा संस्करण है, यह vue3 सिंटैक्स का समर्थन करता है, संबंधित मूल कोड के लिए शर्तों का संकलन करता है, साथ ही यह गर्म पुनः लोड का समर्थन करता है, लेकिन अनुकूलन स्थान सीमित है। uni-app चीन में बहुत लोकप्रिय है, यह न केवल क्रॉस-प्लेटफ़ॉर्म एप्लिकेशन बना सकता है, बल्कि क्रॉस-प्लेटफ़ॉर्म छोटे कार्यक्रमों और त्वरित अनुप्रयोगों का निर्माण भी कर सकता है, जैसे कि वीचैट छोटे कार्यक्रम। लेकिन HbuilderX संपादक बहुत अच्छा नहीं है, कई इंटरैक्शन स्थितियों में vscode की तुलना में स्पष्ट रूप से फ्रेम गिरता है, चिकनाई बहुत खराब है, रूप बहुत खराब है, प्लगइन स्टोर को डाउनलोड करने के लिए विज्ञापन देखना पड़ता है।","abouttauri":"Tauri के बारे में एक छोटी कहानी","abouttauricontent":"Tauri एक क्रॉस-प्लेटफ़ॉर्म एप्लिकेशन ढांचा है जो Rust भाषा का उपयोग करके बनाया गया है, यह डेस्कटॉप एप्लिकेशन बनाने का समर्थन करता है, जैसे Windows, macOS, Linux। यह Rust सीखने की मेरी प्रेरणाओं में से एक है, प्रदर्शन उत्कृष्ट है, वर्तमान में मेरे नए प्रोजेक्ट का बैकएंड सिस्टम Rust में लिखा गया है।","aboutionic":"ionic के बारे में एक छोटी कहानी","aboutioniccontent":"यह कैपेसिटर के माध्यम से मूल API को ब्रिज करता है, गर्म पुनः लोड का समर्थन नहीं करता है, एकमात्र लाभ यह है कि आप मौजूदा वेब प्रोजेक्ट को सीधे मोबाइल एप्लिकेशन में पैक कर सकते हैं, लेकिन प्रदर्शन और अनुभव बहुत खराब है, तेजी से विकास के लिए उपयुक्त है।","aboutjavascript":"JavaScript के बारे में एक छोटी कहानी","aboutjavascriptcontent":"JavaScript मेरी सबसे सामान्य प्रोग्रामिंग भाषाओं में से एक है, वर्तमान में यह मुझे बहुत बहुपरकारी प्रोग्रामिंग भाषा उपकरण लगता है, यह लगभग किसी भी चीज़ का निर्माण कर सकता है, जिसमें स्मार्ट कॉन्ट्रैक्ट-क्लाइंट-सर्वर सिस्टम आदि शामिल हैं। यह कई वर्षों से मेरे साथ है।","abouttypescript":"TypeScript के बारे में एक छोटी कहानी","abouttypescriptcontent":"TypeScript JavaScript का सुपरसेट है, यह स्थैतिक प्रकार की जांच का समर्थन करता है, यदि आप js से परिचित हैं, तो आप जल्दी से ts को भी सीख सकते हैं, ts का सिंटैक्स js के बहुत समान है, लेकिन ts का प्रकार प्रणाली आपको कोड लिखते समय अधिक सुरक्षित और प्रभावी बनाती है।","aboutrust":"Rust के बारे में एक छोटी कहानी","aboutrustcontent":"Rust एक सिस्टम-स्तरीय प्रोग्रामिंग भाषा है, प्रदर्शन उत्कृष्ट है, साथ ही यह समवर्ती प्रोग्रामिंग का समर्थन करता है, इसकी स्वामित्व और जीवनकाल प्रबंधन बहुत सख्त है, यह संकलन चरण में कई संभावित त्रुटियों का पता लगा सकता है, साथ ही यह सामान्य प्रोग्रामिंग का समर्थन करता है, कोड लिखते समय अधिक लचीला और उच्च दक्षता। इसके कई संभावनाएँ हैं, ब्लॉकचेन, औद्योगिक प्रणाली आदि सुरक्षा और प्रदर्शन की मांग करने वाले परिदृश्यों में उपयोग किए जाते हैं।","aboutdart":"Dart के बारे में एक छोटी कहानी","aboutdartcontent":"Dart Flutter की प्रोग्रामिंग भाषा है, मैं वर्तमान में इसका उपयोग केवल क्लाइंट UI बनाने के लिए करता हूँ, बैकएंड सिस्टम के लिए Rust का उपयोग करना अधिक समझदारी है।","aboutpython":"Python के बारे में एक छोटी कहानी","aboutpythoncontent":"Python को काम के कारण मजबूरन सीखना पड़ा, क्योंकि मुझे कुछ Python में लिखे गए ओपन-सोर्स टूल को अपने प्रोजेक्ट में एकीकृत करना था, मजबूरी।😔","aboutcsharp":"C# के बारे में एक छोटी कहानी","aboutcsharpcontent":"Unity खेल स्क्रिप्ट लिखने के लिए, और लेखन की तरह, बहुत आरामदायक।","aboutcpp":"C++ के बारे में एक छोटी कहानी","aboutcppcontent":"Unreal Engine खेल स्क्रिप्ट लिखने के लिए, जब से मैंने ब्लू प्रिंट का उपयोग करना शुरू किया, मैंने बहुत कम C++ लिखा।","aboutswift":"Swift के बारे में एक छोटी कहानी","aboutswiftcontent":"iOS एप्लिकेशन लिखने के लिए, लेकिन Flutter का उपयोग करने के बाद, मैंने बहुत कम Swift लिखा।","aboutjava":"Java के बारे में एक छोटी कहानी","aboutjavacontent":"यह एक दुखद कहानी है, स्प्रिंग, स्प्रिंगबूट.... मैं और नहीं कहना चाहता, मैं केवल यह कहना चाहता हूँ, मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता। मैं फिर से Java का उपयोग नहीं करना चाहता।","aboutnodejs":"Node.js के बारे में एक छोटी कहानी","aboutnodejscontent":"Node.js JavaScript का रनटाइम वातावरण है, यह JavaScript को सर्वर साइड पर चलाने की अनुमति देता है, जिससे js को पूर्ण-स्टैक भाषा बनने की कुंजी मिलती है।","aboutexpress":"Express के बारे में एक छोटी कहानी","aboutexpresscontent":"Express Node.js का वेब ढांचा है, त्वरित विकास का पहला विकल्प। लेकिन बड़े प्रोजेक्ट में यह असहाय हो जाता है।","aboutnestjs":"Nest.js के बारे में एक छोटी कहानी","aboutnestjscontent":"Nest.js में express और fastify अंतर्निहित हैं, यह TypeScript का समर्थन करता है, साथ ही यह मॉड्यूलर विकास का समर्थन करता है, जिससे आप अपने कोड को बेहतर तरीके से व्यवस्थित कर सकते हैं, बड़े प्रोजेक्ट बनाने के लिए उपयुक्त है।"}'),pB="《My Starry Sky》 - मेरा तारों भरा आकाश",mB="《My Starry Sky》 एक प्रायोगिक गेम परियोजना है, जिसमें एक अनंत सृजनात्मक ब्रह्मांड है। स्वनिर्मित एल्गोरिदम के माध्यम से तत्वों को अनुमानित और संयोजित करके नए ब्रह्मांड और ब्रह्मांडीय तत्व उत्पन्न करता है। यह वर्तमान में सभी डिज़ाइन को लागू नहीं किया गया है, भविष्य के नए संस्करणों में अधिक नई सामग्री और कार्यक्षमताएं जोड़ी जाएंगी, जो भविष्य में अनुमान-आधारित सृजनात्मक ग्रहों में प्रवेश के लिए तैयारी कर रही हैं! इस गेम का अनुभव लेने और समर्थन करने के लिए धन्यवाद। यह पृथ्वी की 10 विभिन्न भाषाओं का समर्थन करता है!",gB="App Store पर उपलब्ध! खोजें: My Starry Sky",_B="समर्थित उपकरण: iPhone, iPad, Mac, Vision Pro",vB={skip:Ak,language1:Rk,language2:Ck,next:Pk,enter:Lk,language3:Ik,language4:Dk,language5:Uk,language6:Nk,language7:Fk,language8:Ok,language9:kk,language10:zk,language11:Bk,language12:Vk,language13:$k,hello:Hk,application:Gk,game:Wk,tool:jk,openSource:qk,account:Xk,routes:Jk,di:Yk,di1:Kk,di2:Zk,di3:Qk,di4:ez,di5:tz,a1:nz,a2:iz,a2a1:rz,a3:sz,a4:az,a4a1:oz,a5:lz,a6:cz,a7:uz,a7a1:dz,a8:fz,a9:hz,a9a1:pz,a10:mz,a10a1:gz,a11:_z,a11a1:vz,a12:bz,a12a1:xz,a13:yz,a13a1:Sz,a14:Ez,a14a1:Mz,a15:Tz,a15a1:wz,a16:Az,a17:Rz,a17a1:Cz,a18:Pz,a18a1:Lz,a19:Iz,a20:Dz,a20a1:Uz,a21:Nz,a22:Fz,a22a1:Oz,a23:kz,a24:zz,a24a1:Bz,a25:Vz,a26:$z,a26a1:Hz,a27:Gz,skillsTitle:Wz,development:jz,web:qz,windows:Xz,modeling:Jz,animation:Yz,design:Kz,projectsTitle:Zz,project1:Qz,project2:eB,project3:tB,project4:nB,title:iB,info:rB,name:sB,name1:aB,role1:oB,role:lB,bookmarktip:cB,aboutMeTitle:uB,bookmarktip1:dB,opensource:fB,intro1:hB,game1:pB,game1a1:mB,game1a2:gB,game1a3:_B},bB="Saltar",xB="Hola, soy ponzs, este es el espacio virtual generativo que he construido. Por favor, elige tu idioma preferido y luego intenta deslizar con el dedo frente a ti para controlar la vista. Asegúrate de que nuestro controlador esté funcionando correctamente. Si todo está listo, podemos continuar explorando este espacio.",yB="He elegido",SB="Este es un espacio infinito compuesto por infinitas estrellas, cada estrella tiene su propia historia, y yo también deseo ser una de ellas. Inyectar esperanza en el infinito espacio oscuro, inyectar alma en la luz débil, cuando se unen, se convertirán en un espacio infinito, incluso si las estrellas tendrán un día su momento de caída y disolución, pero siempre habrá nuevas estrellas que brillen, haciendo que este espacio infinito sea eterno.",EB="Estamos a punto de entrar en las profundidades de este cielo estrellado, movernos entre ellos y sentir su vida. Esta aeronave es para ti, aunque es un modelo antiguo, es muy resistente. Pruébalo, si no arranca, ven la próxima vez.(¿Ves esa aureola? Eso es el botón de inicio. Manténlo presionado para activar el cohete, y obtendrás la libertad absoluta de explorar este universo!)",MB="Obtener aeronave estilo mochila",TB="El material de la superficie utiliza paneles solares flexibles, que pueden absorber energía lumínica en tiempo real para proporcionar energía de manera continua, alimentando la aeronave a través de electricidad, adecuado para entornos de vacío.",wB="Intenta arrancar la aeronave estilo mochila",AB="¡Felicidades, has aprendido a usar el mecanismo, si quieres continuar explorando este cielo estrellado, continúa.",RB="¿Un mar infinito, verdad?",CB="¿Como tu dificultad ahora, es algo que puede ser considerado?",PB="De repente pensé en una persona, ¿conoces a Johnny Silverhand? Sí, el que estuvo atrapado en Relic.",LB="V, nunca te rindas la batalla.",IB="He terminado, puedes irte",DB="Siguiente",UB="Entra en la home",NB="Hola, mundo",FB="Aplicación",OB="Juego",kB="Herramienta",zB="Componente de código abierto",BB="Gestión de cuentas",VB={aboutme:"Sobre mí",products:"Centro de productos",contact:"Contáctanos",apps:"Aplicaciones",login:"Iniciar sesión",register:"Registrarse","reset-password":"Restablecer contraseña","forgot-password":"Olvidé la contraseña",logout:"Cerrar sesión","send-code":"Enviar código"},$B="Qianyu",HB="Informar problemas",GB="Si necesitas nuestra ayuda o tienes alguna pregunta o sugerencia sobre DiMEMO, contáctanos a través del siguiente enlace:",WB="Enviar correo",jB="Sobre la privacidad",qB="Qianyu no recopila tus datos, todos los cálculos y procesos de datos se realizan localmente en tu dispositivo. Actualmente, los datos se almacenan solo en el sistema de archivos local de tu dispositivo. En una futura versión, podríamos usar iCloud para sincronizar y almacenar datos de DiMEMO en múltiples dispositivos Apple, pero te consultaremos antes de activar esta función. Además, planeamos implementar soluciones de almacenamiento para la preservación de datos a largo plazo, y te informaremos con anticipación si se activa esta función.",XB="Hola, soy un",JB="desarrollador de juegos",YB="¿Por qué me convertí en desarrollador de juegos? Principalmente porque me encanta jugar, mi primer contacto fue con el editor de mapas de Warcraft.",KB="Actualmente me enfoco en el desarrollo de",ZB="juegos modernos",QB="¿Juegos modernos? Mi entendimiento es que ofrecen una experiencia de juego más rica y características que no se habían logrado antes.",eV="Incluyendo nuevos tipos de juegos y capacidades de aceleración de pila completa en situaciones de alta calidad, interacciones de inteligencia artificial completamente nuevas, diseño de animaciones y activos 3D.",tV="Además, soy un",nV="jugador ávido",iV="consumidor de miles de juegos con miles de horas de juego.",rV="Algunos de mis juegos favoritos son:",sV="Cyberpunk 2077",aV="¡Bienvenido a Night City! ¡Aquí está WNS News! Es un mundo lleno de recuerdos. ¿Quién no quiere ser V? Pero, ¿cuántos se atreven a ser V? Sabes de quién hablo, él es una leyenda en Night City.",oV="Black Myth: Wukong",lV="El Maestro Bodhi nunca ha abandonado al pequeño mono.",cV="GTA",uV="Michael y Trevor son mis hermanos, incluso si pierdo todo, no dejaré que ninguno de ellos muera.",dV="SCUM",fV="En este juego, abrí un bar y conocí a muchos buenos amigos, pero también encontré a algunos que eran como el nombre del juego. Debido a que el servidor donde jugábamos a menudo se reiniciaba, decidimos crear nuestro propio servidor, pero finalmente tuvimos que cerrarlo por problemas financieros. A pesar de las pérdidas, no quería perjudicar a los amigos que aman este juego. Agradezco a los hermanos con los que viví en esta pequeña isla, cuando tenga dinero, definitivamente reiniciaré el servidor sin interrupciones.",hV="Ready or Not",pV="Lo compré porque quería jugar CQB con algunos amigos, este juego está muy bien hecho, lo recomiendo.",mV="Call of Duty",gV="La serie Call of Duty es tanto un recuerdo de la infancia como lo que considero la cúspide de los juegos de guerra. Cada versión de la serie en cada época es de primer nivel, con gráficos y audio realistas, lógica física y animaciones que hacen que la trama sea emocionante. Soap nunca muere.",_V="No Man's Sky",vV="Tiene versiones para VR y PC, además de un diseño de contenido generativo único. Personalmente, creo que es muy bueno, aunque no me gusta mucho su estilo visual.",bV="Fuera de los juegos: me gusta ir al lago o al mar, encontrar un lugar para sentarme, preferiblemente con una mesa, y poner una",xV="bebida fría de frutas",yV="Puede ser jugo de coco, jugo de naranja o jugo de sandía.",SV="refresco frío",EV="No sabe bien si no está frío.",MV="También puedo poner un",TV="cenicero simple",wV="Generalmente, uso una lata de Red Bull y café, luego uso el vaso de papel del café para cenizas y la lata de Red Bull para los colillas. ¿Por qué? Porque el borde del vaso de papel es grande y es difícil que las cenizas caigan fuera, y la lata de Red Bull es de metal, así que no tienes que preocuparte de que las colillas quemen.",AV="Enciendo un",RV="cigarrillo",CV="Generalmente elijo dos tipos de cigarrillos: 555 con perlas dobles y el rojo de Zhongnanhai.",PV="Me pongo los auriculares y activo el modo de cancelación de ruido, y empiezo a reproducir aleatoriamente mi",LV="lista de reproducción",IV="¿Quieres ver mi lista de reproducción? Busca en NetEase Cloud: ponzS.",DV="Empiezo a pensar en nuevos diseños y a hacer demos, hasta que",UV="la batería de la computadora",NV="Generalmente elijo una MacBook Air, su duración de batería es de un día sin problemas, y siempre me queda bastante carga, nunca he tenido ansiedad por la duración de la batería, además es lo suficientemente ligera y su rendimiento es adecuado.",FV="se agota al 0%",OV="Habilidades",kV="Juegos (Unity, Unreal Engine, Blender)",zV="Web (Vue.js, Nuxt.js, Three.js)",BV="Windows (tauri, electron)",VV="Aplicaciones móviles (Flutter, NativeScript, uni-app, uni-app x, ionic)",$V="Lenguajes de programación (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",HV="Servidores (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",GV="Tipos de experiencia en proyectos",WV="Aplicaciones web progresivas de pila completa - Aplicaciones de escritorio - Aplicaciones móviles",jV="WebGL-WebGPU-WebXR-WebVR-PWA juegos",qV="Juegos de Unreal Engine 5 - Juegos de Unity - Proyectos en C++ y C# - Proyectos de Blueprint y UVS - Planificación de juegos - Arte técnico - Música",XV="Oculus-Pico-VR-XR-MR",JV="Contacto",YV="Errores - Bugs - Sugerencias - Actualizaciones - Oportunidades de colaboración:",KV="ponzs",ZV="ponzs, nombre en chino: Zhang Guo'ai, nacionalidad china",QV="Ingeniero Full Stack",e$="Desarrollador Full Stack de Web-VR-PC-Móvil",t$="¡Consejo!",n$="Sobre mí",i$="Haz clic en las palabras clave resaltadas para ver los detalles del contenido.",r$="La documentación de uso está en proceso, ¡espera con ansias!",s$=JSON.parse('{"game":"Juego","web":"WEB","modeling":"Aplicaciones móviles","animation":"Lenguajes de programación","server":"Servidor","aboutunity":"Una pequeña historia sobre Unity","aboutunitycontent":"Unity es un conocido motor 3D comercial. ¿Por qué no mencionar directamente los juegos? Porque tiene aplicaciones en otras industrias, como la arquitectura, el cine, la publicidad, la educación, etc. Una vez fui a hacer un examen de conducir, y una de las pruebas para principiantes era un entrenamiento de conducción en VR, que fue construido con Unity. Sus ventajas y desventajas son evidentes, su compatibilidad es notable, pero aún hay mucho trabajo por hacer para lograr una experiencia visual extrema. Sin embargo, según lo que sé, la compañía se enfoca más en la compatibilidad entre plataformas y dispositivos. Desde mi perspectiva, me gusta mucho Unity, es amigable para desarrolladores independientes, permite un desarrollo rápido y su costo de aprendizaje es muy bajo. Puede que no me creas, pero en una semana pasé de aprender a completar un demo de juego VR. No recomiendo aprender a través de videos, porque necesitas un tiempo fijo, pero seguir la documentación paso a paso te permite controlar tu tiempo y reflexionar, en lugar de seguir el pensamiento del instructor. Sin embargo, un buen maestro siempre te dará un análisis y experiencias valiosas, pero puedes absorber lentamente tus propias experiencias una vez que las domines.","aboutunrealengine":"Una pequeña historia sobre Unreal Engine","aboutunrealenginecontent":"¿Por qué aprendí Unreal Engine? He jugado algunos juegos con experiencias muy buenas que utilizan Unreal Engine, y se dice que puede construir la mejor experiencia visual de todos los motores comerciales, así que quise probarlo. La primera versión que probé fue la 5, y quedé satisfecho con el espacio, los efectos visuales y la experiencia de movimiento físico, siempre que uses materiales de calidad y código de alto rendimiento. Esta elección fue provocada por mi insatisfacción con los resultados de renderizado de Unity.","aboutblender":"Una pequeña historia sobre Blender","aboutblendercontent":"Además de Blender, hay muchas otras herramientas excelentes. ¿Por qué elegí usarlo? La verdad es que no estoy muy seguro, tal vez porque fue uno de los primeros resultados que encontré al buscar herramientas, ¡ja ja!","aboutvue":"Una pequeña historia sobre Vue","aboutvuecontent":"Antes de usar Vue, usaba React, pero encontré algunos problemas de rendimiento y estilo de codificación. Vue me permite escribir de manera más cómoda y obtener un rendimiento excelente sin trabajo adicional. Los desarrolladores del equipo de Vue son muy entusiastas, siempre están dispuestos a ayudar a resolver problemas en las plataformas sociales, lo que me brinda una experiencia confiable y entusiasta. En la nueva versión de Vue 3, se puede obtener una mejor experiencia de codificación. Vue es como un pincel en tu mano, puedes dibujar lo que quieras, y la API de composición hará que tu código sea más limpio y fácil de entender y pensar. Incluso You tiene una buena piel, una buena figura y una buena voz, así que estoy muy dispuesto a ver sus charlas, transmisiones en vivo y videos sobre Vue y herramientas relacionadas.","aboutnuxt":"Una pequeña historia sobre Nuxt","aboutnuxtcontent":"Nuxt es el marco de meta de Vue, puede implementar el renderizado del lado del servidor (SSR), además simplifica la configuración y la importación automática global, incluso muchos complementos y bibliotecas pueden funcionar con cero configuración, lo que es muy cómodo para personas como yo que son perezosas. Además, su tienda de complementos es excelente, le doy 5 estrellas.","aboutthreejs":"Una pequeña historia sobre Three.js","aboutthreejscontent":"WebGL y WebGPU te permiten aprovechar al máximo el rendimiento de la GPU de hardware, sin estar limitado por el navegador. Sin embargo, en algunos casos de uso de recursos remotos, necesitas mucha carga perezosa y procesamiento adicional para lograr una mejor experiencia. En resumen, te permitirá tener más posibilidades en tu proyecto. Si conoces WebVR y WebAR, deberías entender que no solo puedes construir un espacio virtual o un modelo 3D.","aboutflutter":"Una pequeña historia sobre Flutter","aboutfluttercontent":"Flutter es mi elección final entre muchos marcos de desarrollo multiplataforma que he probado. Utiliza un enfoque de auto-renderizado, y la recarga en caliente es muy cómoda, lo que significa que no necesitas depender de ningún módulo nativo para construir cualquier apariencia y componente. Además, incluso en situaciones de animación compleja, puede lograr una excelente tasa de renderizado. Por supuesto, si solo buscas el mejor rendimiento y tasa de renderizado, uni-app x es una mejor opción, ya que se compila directamente en código nativo correspondiente, pero el espacio de personalización es limitado. Elegir Flutter significa que debes enfrentar el costo de aprendizaje de Dart, pero todas las lógicas de lenguaje son similares. Si dominas un lenguaje de programación, te será muy fácil aprender Dart. Me tomó menos de una semana completar el aprendizaje y construir un demo.","aboutnativescript":"Una pequeña historia sobre NativeScript","aboutnativescriptcontent":"NativeScript es un marco de desarrollo multiplataforma que depende de módulos nativos, y puedes usar la sintaxis de Vue, lo que reduce significativamente el costo de aprendizaje para los desarrolladores familiarizados con Vue. Puede que solo necesites una o dos horas para comenzar. Elegí aprenderlo porque admite la sintaxis de Vue, tiene un buen rendimiento, pero el espacio de personalización es limitado y requiere más trabajo.","aboutuniappx":"Una pequeña historia sobre uni-app x","aboutuniappxcontent":"uni-app x es una versión bifurcada de uni-app, admite la sintaxis de Vue 3, se compila condicionalmente en código nativo correspondiente y admite la recarga en caliente, pero el espacio de personalización es limitado. uni-app es muy popular en China, no solo puede construir aplicaciones multiplataforma, sino también mini programas y aplicaciones rápidas multiplataforma, como mini programas de WeChat. Sin embargo, el editor HbuilderX es muy malo, muchas interacciones son notablemente más lentas en comparación con vscode, la fluidez es mala, la apariencia es fea, y necesitas ver anuncios para descargar complementos de la tienda de complementos.","abouttauri":"Una pequeña historia sobre Tauri","abouttauricontent":"Tauri es un marco de aplicaciones multiplataforma construido con el lenguaje Rust, también admite la construcción de aplicaciones de escritorio, como Windows, macOS y Linux. Es una de las motivaciones para aprender Rust, su rendimiento es excelente, y actualmente el sistema backend de mi nuevo proyecto está escrito en Rust.","aboutionic":"Una pequeña historia sobre Ionic","aboutioniccontent":"Utiliza Capacitor para conectar con la API nativa, no admite recarga en caliente, y su única ventaja es que puedes empaquetar un proyecto web existente como una aplicación móvil, pero el rendimiento y la experiencia son deficientes, adecuado para un desarrollo rápido.","aboutjavascript":"Una pequeña historia sobre JavaScript","aboutjavascriptcontent":"JavaScript es uno de mis lenguajes de programación más utilizados, y actualmente lo considero una herramienta de programación muy versátil. Puede construir casi cualquier cosa, incluidos contratos inteligentes, sistemas de cliente y servidor, etc. Me ha acompañado durante muchos años.","abouttypescript":"Una pequeña historia sobre TypeScript","abouttypescriptcontent":"TypeScript es un superconjunto de JavaScript, admite la verificación de tipos estáticos. Si estás familiarizado con JS, también te será fácil aprender TS. La sintaxis de TS es muy similar a la de JS, pero el sistema de tipos de TS te permite escribir código de manera más segura y eficiente.","aboutrust":"Una pequeña historia sobre Rust","aboutrustcontent":"Rust es un lenguaje de programación de sistemas, tiene un rendimiento excelente y admite programación concurrente. Su gestión de propiedad y ciclo de vida es muy estricta, puede detectar muchos errores potenciales en la fase de compilación. También admite programación genérica, lo que hace que escribir código sea más flexible y eficiente. Tiene muchas posibilidades, y se utiliza en escenarios que buscan seguridad y rendimiento, como blockchain y sistemas industriales.","aboutdart":"Una pequeña historia sobre Dart","aboutdartcontent":"Dart es el lenguaje de programación de Flutter, actualmente solo lo uso para dibujar la interfaz de usuario del cliente, es más sensato usar Rust para el sistema backend.","aboutpython":"Una pequeña historia sobre Python","aboutpythoncontent":"Aprendí Python por razones laborales, porque necesitaba reescribir algunas herramientas de código abierto escritas en Python para integrarlas en mi proyecto, no tenía otra opción. 😔","aboutcsharp":"Una pequeña historia sobre C#","aboutcsharpcontent":"Se utiliza para escribir scripts de juegos en Unity, es muy cómodo, como escribir un ensayo.","aboutcpp":"Una pequeña historia sobre C++","aboutcppcontent":"Se utiliza para escribir scripts de juegos en Unreal Engine, desde que empecé a usar Blueprints, he escrito muy poco en C++.","aboutswift":"Una pequeña historia sobre Swift","aboutswiftcontent":"Se utiliza para escribir aplicaciones iOS, pero desde que empecé a usar Flutter, he escrito muy poco en Swift.","aboutjava":"Una pequeña historia sobre Java","aboutjavacontent":"Esta es una historia triste, Spring, Spring Boot... No quiero decir más, solo quiero decir que no quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java. No quiero volver a usar Java.","aboutnodejs":"Una pequeña historia sobre Node.js","aboutnodejscontent":"Node.js es el entorno de ejecución de JavaScript, permite que JavaScript se ejecute en el lado del servidor, lo que es clave para convertir JS en un lenguaje de pila completa.","aboutexpress":"Una pequeña historia sobre Express","aboutexpresscontent":"Express es el marco web de Node.js, es la opción preferida para un desarrollo rápido. Sin embargo, en proyectos grandes puede resultar insuficiente.","aboutnestjs":"Una pequeña historia sobre Nest.js","aboutnestjscontent":"Nest.js integra Express y Fastify, admite TypeScript y también soporta desarrollo modular, lo que te permite organizar mejor el código, es adecuado para construir proyectos grandes."}'),a$="《My Starry Sky》 - Mi cielo estrellado",o$="《My Starry Sky》 es un proyecto de juego experimental que posee un universo generativo infinito. A través de algoritmos desarrollados internamente para inferir y combinar elementos, genera nuevos universos y elementos cósmicos. Actualmente no ha implementado todos los diseños; en futuras versiones se añadirán más contenidos y funcionalidades, preparándose para la futura entrada en planetas generativos basados en inferencias. ¡Gracias por probar y apoyar este juego! ¡Soporta 10 idiomas terrestres diferentes!",l$="¡Disponible en App Store! Busca: My Starry Sky",c$="Dispositivos compatibles: iPhone, iPad, Mac, Vision Pro",u$={skip:bB,language1:xB,language2:yB,language3:SB,language4:EB,language5:MB,language6:TB,language7:wB,language8:AB,language9:RB,language10:CB,language11:PB,language12:LB,language13:IB,next:DB,enter:UB,hello:NB,application:FB,game:OB,tool:kB,openSource:zB,account:BB,routes:VB,di:$B,di1:HB,di2:GB,di3:WB,di4:jB,di5:qB,a1:XB,a2:JB,a2a1:YB,a3:KB,a4:ZB,a4a1:QB,a5:eV,a6:tV,a7:nV,a7a1:iV,a8:rV,a9:sV,a9a1:aV,a10:oV,a10a1:lV,a11:cV,a11a1:uV,a12:dV,a12a1:fV,a13:hV,a13a1:pV,a14:mV,a14a1:gV,a15:_V,a15a1:vV,a16:bV,a17:xV,a17a1:yV,a18:SV,a18a1:EV,a19:MV,a20:TV,a20a1:wV,a21:AV,a22:RV,a22a1:CV,a23:PV,a24:LV,a24a1:IV,a25:DV,a26:UV,a26a1:NV,a27:FV,skillsTitle:OV,development:kV,web:zV,windows:BV,modeling:VV,animation:$V,design:HV,projectsTitle:GV,project1:WV,project2:jV,project3:qV,project4:XV,title:JV,info:YV,name:KV,name1:ZV,role1:QV,role:e$,bookmarktip:t$,aboutMeTitle:n$,bookmarktip1:i$,opensource:r$,intro1:s$,game1:a$,game1a1:o$,game1a2:l$,game1a3:c$},d$="Saltare",f$="Ciao, sono ponzs, questo è lo spazio virtuale generativo che ho costruito. Per favore, scegli la tua lingua preferita e poi prova a scorrere con il dito davanti a te per controllare la vista. Assicurati che il nostro controller funzioni correttamente. Se tutto è a posto, possiamo continuare a esplorare questo spazio.",h$="Ho scelto",p$="Questo è un cielo costituito da miliardi di stelle, ogni stella ha la sua storia, e io desidero diventare una di esse. In un universo infinito, iniettare speranza nell'oscurità, iniettare anima nella luce debole, quando si uniscono, diventano un cielo infinito, anche se le stelle avranno un giorno il loro momento di caduta e di dissoluzione, ma ci saranno sempre nuove stelle che brillano, rendendo questo cielo eterno.",m$="Entriamo nelle profondità di questo cielo stellato, ci muoviamo tra di loro e proviamo la loro vita. Questo aereo è per te, anche se è un modello vecchio, è molto resistente. Provalo, se non parte, torna la prossima volta.(Vedi quell'aureola? Quello è il pulsante di avvio. Tienilo premuto per attivare il razzo, e otterrai la libertà assoluta di esplorare questo universo!)",g$="Ottenere aereo in stile zaino",_$="Il materiale della superficie utilizza pannelli solari flessibili, che possono assorbire energia luminosa in tempo reale per fornire energia in modo continuo, alimentando l'aereo attraverso l'elettricità, adatto per ambienti di vuoto.",v$="Prova a avviare l'aereo in stile zaino",b$="Complimenti, hai imparato a usare il meccanismo, se vuoi continuare a esplorare questo cielo stellato, continua.",x$="Un mare infinito, vero?",y$="Come la tua difficoltà ora, è qualcosa che può essere considerato?",S$="Ho improvvisamente pensato a una persona, conosci Johnny Silverhand? Sì, quello che è stato bloccato in Relic.",E$="V, non abbandonare mai la battaglia.",M$="Ho finito, puoi andare",T$="Avanti",w$="Entra nella home",A$="Ciao, mondo",R$="Applicazione",C$="Gioco",P$="Strumento",L$="Componenti open source",I$="Gestione account",D$={aboutme:"Chi sono",products:"Centro prodotti",contact:"Contattaci",apps:"Applicazioni",login:"Accesso",register:"Registrati","reset-password":"Reimposta password","forgot-password":"Password dimenticata",logout:"Disconnetti","send-code":"Invia codice"},U$="Qianyu",N$="Feedback",F$="Se hai bisogno del nostro aiuto o hai domande e suggerimenti su DiMEMO, contattaci tramite il link qui sotto:",O$="Invia email",k$="Informativa sulla privacy",z$="Qianyu non raccoglie alcun dato, il calcolo e l'elaborazione dei dati avvengono localmente sul tuo dispositivo, attualmente i dati vengono memorizzati solo nel file system locale del tuo dispositivo, in una futura versione potrebbe essere utilizzato iCloud per sincronizzare e memorizzare i dati di più dispositivi Apple in DiMEMO, ma prima di utilizzare questa funzione ti chiederemo, hai il diritto di scegliere se utilizzare o disattivare. Inoltre, nel nostro piano ci saranno anche soluzioni di archiviazione per garantire la conservazione dei dati, e se ci sono aggiornamenti ti informeremo in anticipo se attivare questa funzione.",B$="Ciao, sono un",V$="sviluppatore di giochi",$$="Perché sono diventato uno sviluppatore di giochi? La ragione principale è che mi piace giocare, la mia prima esperienza è stata con l'editor di mappe di World of Warcraft.",H$="Attualmente mi concentro sullo sviluppo di",G$="giochi moderni",W$="Cosa intendo per giochi moderni? La mia comprensione è un'esperienza di gioco più forte e funzionalità che non sono mai state realizzate in passato.",j$="Includendo nuovi supporti di gioco e capacità di accelerazione full-stack in situazioni di gioco di alta qualità, interazioni di intelligenza artificiale completamente nuove, design di animazioni e asset 3D.",q$="Inoltre, sono un",X$="giocatore hardcore",J$="Consumatore di migliaia di giochi con oltre diecimila ore di gioco.",Y$="Alcuni dei miei giochi preferiti:",K$="Cyberpunk 2077",Z$="Benvenuto a Night City! Qui ci sono le notizie di WNS! È un mondo pieno di ricordi. Chi non vorrebbe essere V? Ma quanti hanno il coraggio di essere V? Sai a chi mi riferisco, quel V. È una leggenda di Night City.",Q$="Black Myth: Wukong",e4="Il Maestro Bodhi non ha mai abbandonato il piccolo scimmione.",t4="GTA",n4="Mike e Trevor sono entrambi miei fratelli, anche se perdo tutto, non lascerò morire nessuno di loro.",i4="SCUM",r4="In questo gioco ho aperto un bar, ho conosciuto molti buoni amici, ma ho anche incontrato alcune persone che sono come il nome del gioco. Poiché il server che giocavamo veniva spesso resettato, alla fine abbiamo creato un nostro server di gioco, ma abbiamo dovuto fermare le operazioni a causa di un bilancio sbilanciato. Anche se ho perso soldi, non voglio ingannare gli amici che amano questo gioco. Grazie a tutti i fratelli che hanno vissuto su quest'isola con me, quando avrò soldi, riavvierò sicuramente il server senza fermarlo.",s4="Ready or Not",a4="Ho comprato questo gioco per giocare a CQB con alcuni amici, è davvero ben fatto, merita buone recensioni.",o4="Call of Duty",l4="La serie Call of Duty è sia un ricordo d'infanzia che quello che considero il massimo dei giochi di guerra. Ogni versione della serie in ogni epoca è di alto livello, con grafica e audio realistici, armi e animazioni che seguono la logica fisica reale, e una trama che fa venire i brividi. Soap non muore mai.",c4="No Man's Sky",u4="Ha versioni VR e PC, e anche alcuni contenuti di gioco generativi unici. Personalmente lo trovo molto buono, ma non mi piace particolarmente questo stile grafico.",d4="Al di fuori dei giochi: mi piace andare al lago o al mare, trovare un posto dove sedermi, meglio se c'è un tavolo, e mettere un bicchiere di",f4="succo freddo",h4="Il succo può essere di cocco, arancia, anguria.",p4="cola fredda",m4="Non è buono se non è ghiacciato.",g4="Va bene, mettiamo anche un",_4="posacenere semplice",v4="Di solito mostro una lattina di Red Bull e un caffè, poi uso il bicchiere di carta del caffè per il fumo e la lattina di Red Bull per le cicche. Perché? La bocca del bicchiere di carta è grande, quindi è difficile far cadere la cenere, e la lattina di Red Bull è generalmente fatta di metallo, quindi non devi preoccuparti che il mozzicone bruci.",b4="Accendi una",x4="sigaretta",y4="Di solito scelgo due marche di sigarette: 555 con palline, e il rosso Zhongnanhai.",S4="Indossa le cuffie e attiva la modalità di cancellazione del rumore, inizia a riprodurre casualmente la mia",E4="playlist",M4="Vuoi vedere la mia playlist? Cerca su NetEase Cloud: ponzS.",T4="Inizia a pensare a nuovi design e a creare un demo, fino a quando",w4="la batteria del computer",A4="Di solito scelgo un MacBook Air, la durata della batteria è di un'intera giornata senza problemi, e rimane anche con una buona carica, non ho mai avuto ansia per la durata della batteria, ed è abbastanza leggero, con prestazioni sufficienti.",R4="scende a 0%",C4="Competenze",P4="Gioco (Unity, Unreal Engine, Blender)",L4="Web (Vue.js, Nuxt.js, Three.js)",I4="Windows (tauri, electron)",D4="Applicazioni mobili (Flutter, NativeScript, uni-app, uni-app x, ionic)",U4="Linguaggi di programmazione (JavaScript, TypeScript, Rust, Dart, Swift, C#, C++, Go, Java)",N4="Server (Nest.js, Express, Fastify, Springboot, MongoDB, MySQL, Nginx, Docker, Redis, NuxtHab, Gin, k8s, pm2, node.js)",F4="Tipi di esperienza di progetto",O4="Applicazione Web progressiva full-stack - Applicazione desktop - Applicazione mobile",k4="WebGL-WebGPU-WebXR-WebVR-PWA giochi",z4="Gioco Unreal Engine 5 - Gioco Unity - Progetti C++ e C# - Progetti Blueprint e UVS - Pianificazione di giochi - Arte tecnica - Musica",B4="Oculus-Pico-VR-XR-MR",V4="Contatti",$4="Bug - Vulnerabilità - Errori - Suggerimenti - Sollecitazioni - Opportunità di collaborazione:",H4="ponzs",G4="ponzs, nome cinese: Zhang Guoai, nazionalità cinese",W4="Ingegnere full-stack",j4="Sviluppatore full-stack Web-VR-PC-Mobile",q4="Suggerimento!",X4="Chi sono",J4="Clicca sulle parole chiave evidenziate per vedere i dettagli del contenuto",Y4="La documentazione è in fase di preparazione, attendere con pazienza",K4=JSON.parse(`{"game":"Gioco","web":"WEB","modeling":"Applicazioni mobili","animation":"Linguaggi di programmazione","server":"Server","aboutunity":"Una piccola storia su Unity","aboutunitycontent":"Unity è un noto motore 3D commerciale, perché non menzionare direttamente i giochi? Perché ha anche ampie applicazioni in altri settori, come architettura, cinema, pubblicità, educazione, ecc. Una volta sono andato a fare l'esame di guida, e una delle prove per principianti era un allenamento di guida VR, costruito con Unity. I vantaggi e gli svantaggi sono evidenti, la sua compatibilità è innegabile, ma per raggiungere un'esperienza visiva estrema c'è ancora molto lavoro da fare. Tuttavia, da quello che so, l'azienda si concentra maggiormente sulla compatibilità tra piattaforme e dispositivi hardware. Dal mio punto di vista, mi piace molto Unity, è molto amichevole per gli sviluppatori indipendenti, consente uno sviluppo rapido e il costo di apprendimento è molto basso per me. Potresti non crederci, ma in una settimana sono passato dall'apprendimento alla realizzazione di un demo di gioco VR completo. Non consiglio di imparare tramite video, perché hai bisogno di un tempo fisso, ma seguendo la documentazione passo dopo passo puoi controllare il tuo tempo e riflettere, invece di seguire il pensiero dell'insegnante. Tuttavia, un buon insegnante ti fornirà sempre un'analisi e alcune esperienze di alta qualità, ma puoi assorbire lentamente le tue esperienze una volta che hai acquisito le competenze.","aboutunrealengine":"Una piccola storia su Unreal Engine","aboutunrealenginecontent":"Perché ho deciso di imparare Unreal Engine? Ho giocato a alcuni giochi con esperienze molto buone che utilizzano Unreal Engine, e si dice che possa costruire l'esperienza visiva migliore tra tutti i motori commerciali, quindi ho voluto provarlo. La mia prima scelta è stata la versione 5, e sono rimasto soddisfatto dello spazio costruito, degli effetti visivi e dell'esperienza di movimento fisico. Questo è stato causato dalla mia insoddisfazione per i risultati di rendering di Unity.","aboutblender":"Una piccola storia su Blender","aboutblendercontent":"Oltre a Blender, ci sono molti altri strumenti eccellenti, perché ho scelto di usarlo? Onestamente non ne sono sicuro, forse perché era tra i primi risultati quando cercavo strumenti, quindi l'ho aperto, ahah.","aboutvue":"Una piccola storia su Vue","aboutvuecontent":"Prima di usare Vue, usavo React, ma ho notato alcuni problemi di prestazioni e stile di codifica, Vue mi ha fatto sentire più a mio agio e senza lavoro extra ottengo prestazioni eccellenti. Gli sviluppatori del team Vue sono molto entusiasti, sono sempre attivi sui social media per aiutare a risolvere i problemi degli sviluppatori, il che mi ha dato un'esperienza molto affidabile e mi ha fatto sentire il loro entusiasmo. Nella nuova versione di vue3, puoi ottenere una migliore esperienza di codifica. Vue è come un pennello nelle tue mani, puoi disegnare liberamente ciò che desideri, l'API compositiva rende il tuo codice più semplice e più facile da comprendere e riflettere. Anche la pelle di Even You è ben curata, ha un bel corpo e una bella voce, quindi sono molto disposto a guardare le sue conferenze e i video su Vue e strumenti correlati.","aboutnuxt":"Una piccola storia su Nuxt","aboutnuxtcontent":"Nuxt è il framework di livello superiore di Vue, può realizzare il rendering lato server (SSR), semplificare la configurazione e l'importazione automatica globale, e molti plugin e librerie possono realizzare 0 configurazione, il che è molto comodo per me che sono pigro. Inoltre, il suo negozio di plugin è fantastico, gli do 5 stelle.","aboutthreejs":"Una piccola storia su Three.js","aboutthreejscontent":"WebGL e WebGPU ti consentono di sfruttare appieno le prestazioni della GPU hardware, senza limitarti al browser. Tuttavia, in alcune situazioni di utilizzo di risorse remote, hai bisogno di molte lazy loading e ulteriori elaborazioni per ottenere una migliore esperienza. In sintesi, offre più possibilità per il tuo progetto. Se conosci WebVR e WebAR, dovresti capire che non si tratta solo di costruire uno spazio virtuale o un modello 3D.","aboutflutter":"Una piccola storia su Flutter","aboutfluttercontent":"Flutter è stata la mia scelta finale tra molti framework cross-platform che ho provato, utilizzando una soluzione di rendering autonomo, il hot reload è molto comodo, il che significa che puoi costruire liberamente qualsiasi aspetto e componente senza dover dipendere da moduli nativi, e anche in situazioni di animazione complesse, puoi raggiungere un'ottima frequenza di rendering. Certo, se vuoi solo le migliori prestazioni e frequenze di rendering, uni-app x è una scelta migliore, poiché compila direttamente in codice nativo corrispondente, ma lo spazio di personalizzazione è limitato. Scegliere Flutter significa anche affrontare il costo di apprendimento di Dart, ma tutte le logiche delle lingue sono collegate. Se sei esperto in un linguaggio di programmazione, troverai molto facile imparare Dart. Ho impiegato meno di una settimana per completare l'apprendimento e costruire un demo.","aboutnativescript":"Una piccola storia su NativeScript","aboutnativescriptcontent":"NativeScript è un framework di sviluppo cross-platform che dipende dai moduli nativi, e può utilizzare la sintassi Vue, il che riduce notevolmente il costo di apprendimento per gli sviluppatori che conoscono Vue. Potresti impararlo in un paio d'ore. Ho scelto di impararlo anche perché supporta la sintassi Vue, ha alte prestazioni, ma lo spazio di personalizzazione è limitato e richiede più lavoro.","aboutuniappx":"Una piccola storia su uni-app x","aboutuniappxcontent":"uni-app x è una versione ramificata di uni-app, supporta la sintassi Vue3, compila in codice nativo corrispondente e supporta il hot reload, ma lo spazio di personalizzazione è limitato. uni-app è molto popolare in Cina, non solo può costruire applicazioni cross-platform, ma può anche costruire mini-programmi e applicazioni rapide cross-platform, come i mini-programmi di WeChat. Tuttavia, l'editor HbuilderX è molto scomodo, molte interazioni sono visibilmente scadenti rispetto a vscode, la fluidità è scarsa, l'aspetto è brutto e il negozio di plugin richiede di guardare pubblicità per scaricare i plugin.","abouttauri":"Una piccola storia su Tauri","abouttauricontent":"Tauri è un framework di applicazioni cross-platform costruito con il linguaggio Rust, supporta anche la costruzione di applicazioni desktop, come Windows, macOS, Linux. È stata una delle mie motivazioni per imparare Rust, ha prestazioni eccellenti, attualmente il sistema backend del mio nuovo progetto è scritto in Rust.","aboutionic":"Una piccola storia su Ionic","aboutioniccontent":"Utilizza il ponte Capacitor per accedere alle API native, non supporta il hot reload, l'unico vantaggio è che puoi semplicemente impacchettare un progetto web esistente in un'app mobile, ma le prestazioni e l'esperienza sono scarse, adatto per uno sviluppo rapido.","aboutjavascript":"Una piccola storia su JavaScript","aboutjavascriptcontent":"JavaScript è uno dei linguaggi di programmazione che uso di più, attualmente lo considero uno strumento di programmazione molto versatile, può costruire praticamente qualsiasi cosa, inclusi contratti intelligenti, sistemi client-server, ecc. Mi ha accompagnato per molti anni.","abouttypescript":"Una piccola storia su TypeScript","abouttypescriptcontent":"TypeScript è un superset di JavaScript, supporta il controllo statico dei tipi. Se conosci JS, imparerai rapidamente TS, la sintassi di TS è molto simile a quella di JS, ma il sistema di tipi di TS ti consente di scrivere codice in modo più sicuro ed efficiente.","aboutrust":"Una piccola storia su Rust","aboutrustcontent":"Rust è un linguaggio di programmazione di sistema, ha prestazioni eccellenti e supporta la programmazione concorrente. La sua gestione della proprietà e del ciclo di vita è molto rigorosa, può scoprire molti errori potenziali già nella fase di compilazione, e supporta anche la programmazione generica, rendendo la scrittura del codice più flessibile ed efficiente. Ha molte possibilità, blockchain, sistemi industriali e altri scenari che richiedono sicurezza e prestazioni lo stanno utilizzando.","aboutdart":"Una piccola storia su Dart","aboutdartcontent":"Dart è il linguaggio di programmazione di Flutter, attualmente lo uso solo per disegnare l'interfaccia utente del client, mentre l'uso di Rust per il sistema backend è una scelta più saggia.","aboutpython":"Una piccola storia su Python","aboutpythoncontent":"Python è stato un linguaggio che ho dovuto imparare per lavoro, perché dovevo riscrivere alcuni strumenti open source scritti in Python per integrarli nel mio progetto, purtroppo.😔","aboutcsharp":"Una piccola storia su C#","aboutcsharpcontent":"Usato per scrivere script di giochi in Unity, è molto piacevole, come scrivere un saggio.","aboutcpp":"Una piccola storia su C++","aboutcppcontent":"Usato per scrivere script di giochi in Unreal Engine, da quando ho iniziato a usare Blueprint, scrivo raramente in C++.","aboutswift":"Una piccola storia su Swift","aboutswiftcontent":"Usato per scrivere applicazioni iOS, ma da quando ho iniziato a usare Flutter, scrivo raramente in Swift.","aboutjava":"Una piccola storia su Java","aboutjavacontent":"Questa è una storia triste, Spring, Spring Boot... Non voglio dirlo, voglio solo dire che non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java. Non voglio più usare Java.","aboutnodejs":"Una piccola storia su Node.js","aboutnodejscontent":"Node.js è l'ambiente di esecuzione di JavaScript, consente a JavaScript di funzionare sul lato server, rendendo JS la chiave per il linguaggio full-stack.","aboutexpress":"Una piccola storia su Express","aboutexpresscontent":"Express è il framework web di Node.js, la scelta migliore per uno sviluppo rapido. Ma in progetti di grandi dimensioni può risultare inadeguato.","aboutnestjs":"Una piccola storia su Nest.js","aboutnestjscontent":"Nest.js integra Express e Fastify, supporta TypeScript e lo sviluppo modulare, consentendo una migliore organizzazione del codice, adatto per costruire progetti di grandi dimensioni."}`),Z4="《My Starry Sky》 - Il mio cielo stellato",Q4="《My Starry Sky》 è un progetto di gioco sperimentale che possiede un universo generativo infinito. Attraverso algoritmi di ricerca e combinazione sviluppati internamente, genera nuovi universi ed elementi cosmici. Attualmente non ha implementato tutte le funzionalità progettate; nelle future versioni saranno aggiunti nuovi contenuti e funzionalità, preparandosi per l'ingresso in pianeti generativi basati su inferenze! Grazie per aver provato e supportato questo gioco. Supporta 10 diverse lingue terrestri!",eH="Disponibile su App Store! Cerca: My Starry Sky",tH="Dispositivi supportati: iPhone, iPad, Mac, Vision Pro",nH={skip:d$,language1:f$,language2:h$,language3:p$,language4:m$,language5:g$,language6:_$,language7:v$,language8:b$,language9:x$,language10:y$,language11:S$,language12:E$,language13:M$,next:T$,enter:w$,hello:A$,application:R$,game:C$,tool:P$,openSource:L$,account:I$,routes:D$,di:U$,di1:N$,di2:F$,di3:O$,di4:k$,di5:z$,a1:B$,a2:V$,a2a1:$$,a3:H$,a4:G$,a4a1:W$,a5:j$,a6:q$,a7:X$,a7a1:J$,a8:Y$,a9:K$,a9a1:Z$,a10:Q$,a10a1:e4,a11:t4,a11a1:n4,a12:i4,a12a1:r4,a13:s4,a13a1:a4,a14:o4,a14a1:l4,a15:c4,a15a1:u4,a16:d4,a17:f4,a17a1:h4,a18:p4,a18a1:m4,a19:g4,a20:_4,a20a1:v4,a21:b4,a22:x4,a22a1:y4,a23:S4,a24:E4,a24a1:M4,a25:T4,a26:w4,a26a1:A4,a27:R4,skillsTitle:C4,development:P4,web:L4,windows:I4,modeling:D4,animation:U4,design:N4,projectsTitle:F4,project1:O4,project2:k4,project3:z4,project4:B4,title:V4,info:$4,name:H4,name1:G4,role1:W4,role:j4,bookmarktip:q4,aboutMeTitle:X4,bookmarktip1:J4,opensource:Y4,intro1:K4,game1:Z4,game1a1:Q4,game1a2:eH,game1a3:tH},iH=o0({locale:"en",messages:{en:xC,zh:fL,ru:rD,ja:Y2,fr:$N,de:UF,al:wk,du:vB,xi:u$,yi:nH}}),ha=eb(v0),rH=rb();ha.directive("ripple",_0);ha.use(rH);ha.use(RA);ha.use(iH);ha.mount("#app");export{un as $,Kl as A,Un as B,MH as C,Wt as D,jn as E,Ft as F,Ye as G,ca as H,vE as I,Je as J,mH as K,gH as L,$n as M,Di as N,dg as O,ci as P,Of as Q,Gm as R,hi as S,tg as T,tE as U,j as V,vr as W,Ds as X,Lo as Y,aE as Z,Bo as _,Gn as a,tA as a0,EH as a1,SH as a2,lg as a3,bH as a4,yH as a5,xH as a6,Hu as a7,Wn as a8,_H as a9,vH as aa,Ha as ab,cg as ac,Bn as ad,cE as ae,hH as af,jr as ag,aH as ah,cH as ai,Pv as aj,Ro as ak,gr as b,pr as c,Bi as d,uH as e,fH as f,lH as g,I_ as h,Mt as i,_u as j,Xp as k,U_ as l,N_ as m,au as n,fs as o,Qr as p,Lu as q,Ni as r,Ot as s,kg as t,pH as u,dH as v,sH as w,Ii as x,xn as y,oH as z};
