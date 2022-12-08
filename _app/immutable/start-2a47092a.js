import{S as ot,i as st,s as it,a as lt,e as F,c as ct,b as z,g as he,t as B,d as me,f as J,h as G,j as ft,o as Pe,k as ut,l as dt,m as pt,n as ke,p as V,q as ht,r as mt,u as _t,v as W,w as Y,x as Te,y as X,z as Z,A as ce}from"./chunks/index-ae06bd16.js";import{S as nt,I as q,g as He,f as We,a as Re,b as fe,s as M,i as Ye,c as pe,P as Xe,d as gt,e as wt}from"./chunks/singletons-83aa97dc.js";import{s as yt}from"./chunks/paths-6cd3a76e.js";function bt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function vt(n){return n.split("%25").map(decodeURI).join("%25")}function Et(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const kt=["href","pathname","search","searchParams","toString","toJSON"];function Rt(n,e){const t=new URL(n);for(const i of kt){let s=t[i];Object.defineProperty(t,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return St(t),t}function St(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ot="/__data.json";function It(n){return n.replace(/\/$/,"")+Ot}function Lt(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=t.length;for(;i;)e=e*33^t[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ne.delete(i)}return _e(n,e)};const ne=new Map;function Pt(n,e){const t=rt(n,e),i=document.querySelector(t);if(i!=null&&i.textContent){const{body:s,...f}=JSON.parse(i.textContent),r=i.getAttribute("data-ttl");return r&&ne.set(t,{body:s,init:f,ttl:1e3*Number(r)}),Promise.resolve(new Response(s,f))}return _e(n,e)}function At(n,e,t){if(ne.size>0){const i=rt(n,t),s=ne.get(i);if(s){if(performance.now()<s.ttl)return new Response(s.body,s.init);ne.delete(i)}}return _e(e,t)}function rt(n,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Ut(n).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const r=i.split(/\[(.+?)\](?!\])/);return"/"+r.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return Se(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Se(String.fromCharCode(..._.slice(2).split("-").map(C=>parseInt(C,16))));const g=$t.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,R,U,A]=g;return e.push({name:U,matcher:A,optional:!!b,rest:!!R,chained:R?m===1&&r[0]==="":!1}),R?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Se(_)}).join("")}).join("")}/?$`),params:e}}function Tt(n){return!/^\([^)]+\)$/.test(n)}function Ut(n){return n.slice(1).split("/").filter(Tt)}function Nt(n,e,t){const i={},s=n.slice(1);let f="";for(let r=0;r<e.length;r+=1){const u=e[r];let _=s[r];if(u.chained&&u.rest&&f&&(_=_?f+"/"+_:f),f="",_===void 0)u.rest&&(i[u.name]="");else{if(u.matcher&&!t[u.matcher](_)){if(u.optional&&u.chained){let m=s.indexOf(void 0,r);if(m===-1){const g=e[r+1];if((g==null?void 0:g.rest)&&g.chained)f=_;else return}for(;m>=r;)s[m]=s[m-1],m-=1;continue}return}i[u.name]=_}}if(!f)return i}function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(n,e,t,i){const s=new Set(e);return Object.entries(t).map(([u,[_,m,g]])=>{const{pattern:b,params:R}=jt(u),U={id:u,exec:A=>{const C=b.exec(A);if(C)return Nt(C,R,i)},errors:[1,...g||[]].map(A=>n[A]),layouts:[0,...m||[]].map(r),leaf:f(_)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function f(u){const _=u<0;return _&&(u=~u),[_,n[u]]}function r(u){return u===void 0?u:[s.has(u),n[u]]}}function Vt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=W(s,f(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Te(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),z(r,t,u),i=!0},p(r,u){const _={};if(u&4&&(_.data=r[2]),u&2&&(_.form=r[1]),s!==(s=r[0][0])){if(e){he();const m=e;B(m.$$.fragment,1,0,()=>{Z(m,1)}),me()}s?(e=W(s,f(r)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&G(t),e&&Z(e,r)}}}function qt(n){let e,t,i;var s=n[0][0];function f(r){return{props:{data:r[2],$$slots:{default:[Ct]},$$scope:{ctx:r}}}}return s&&(e=W(s,f(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Te(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),z(r,t,u),i=!0},p(r,u){const _={};if(u&4&&(_.data=r[2]),u&523&&(_.$$scope={dirty:u,ctx:r}),s!==(s=r[0][0])){if(e){he();const m=e;B(m.$$.fragment,1,0,()=>{Z(m,1)}),me()}s?(e=W(s,f(r)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&G(t),e&&Z(e,r)}}}function Ct(n){let e,t,i;var s=n[0][1];function f(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=W(s,f(n))),{c(){e&&Y(e.$$.fragment),t=F()},l(r){e&&Te(e.$$.fragment,r),t=F()},m(r,u){e&&X(e,r,u),z(r,t,u),i=!0},p(r,u){const _={};if(u&8&&(_.data=r[3]),u&2&&(_.form=r[1]),s!==(s=r[0][1])){if(e){he();const m=e;B(m.$$.fragment,1,0,()=>{Z(m,1)}),me()}s?(e=W(s,f(r)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){i||(e&&J(e.$$.fragment,r),i=!0)},o(r){e&&B(e.$$.fragment,r),i=!1},d(r){r&&G(t),e&&Z(e,r)}}}function Ze(n){let e,t=n[5]&&Qe(n);return{c(){e=ut("div"),t&&t.c(),this.h()},l(i){e=dt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=pt(e);t&&t.l(s),s.forEach(G),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(i,s){z(i,e,s),t&&t.m(e,null)},p(i,s){i[5]?t?t.p(i,s):(t=Qe(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(i){i&&G(e),t&&t.d()}}}function Qe(n){let e;return{c(){e=ht(n[6])},l(t){e=mt(t,n[6])},m(t,i){z(t,e,i)},p(t,i){i&64&&_t(e,t[6])},d(t){t&&G(e)}}}function Ft(n){let e,t,i,s,f;const r=[qt,Vt],u=[];function _(g,b){return g[0][1]?0:1}e=_(n),t=u[e]=r[e](n);let m=n[4]&&Ze(n);return{c(){t.c(),i=lt(),m&&m.c(),s=F()},l(g){t.l(g),i=ct(g),m&&m.l(g),s=F()},m(g,b){u[e].m(g,b),z(g,i,b),m&&m.m(g,b),z(g,s,b),f=!0},p(g,[b]){let R=e;e=_(g),e===R?u[e].p(g,b):(he(),B(u[R],1,1,()=>{u[R]=null}),me(),t=u[e],t?t.p(g,b):(t=u[e]=r[e](g),t.c()),J(t,1),t.m(i.parentNode,i)),g[4]?m?m.p(g,b):(m=Ze(g),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i(g){f||(J(t),f=!0)},o(g){B(t),f=!1},d(g){u[e].d(g),g&&G(i),m&&m.d(g),g&&G(s)}}}function Bt(n,e,t){let{stores:i}=e,{page:s}=e,{components:f}=e,{form:r}=e,{data_0:u=null}=e,{data_1:_=null}=e;ft(i.page.notify);let m=!1,g=!1,b=null;return Pe(()=>{const R=i.page.subscribe(()=>{m&&(t(5,g=!0),t(6,b=document.title||"untitled page"))});return t(4,m=!0),R}),n.$$set=R=>{"stores"in R&&t(7,i=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,f=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&i.page.set(s)},[f,r,u,_,m,g,b,i,s]}class Jt extends ot{constructor(e){super(),st(this,e,Bt,Ft,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Kt=function(n,e){return new URL(n,e).href},xe={},D=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(f=>{if(f=Kt(f,i),f in xe)return;xe[f]=!0;const r=f.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!i)for(let g=s.length-1;g>=0;g--){const b=s[g];if(b.href===f&&(!r||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const m=document.createElement("link");if(m.rel=r?"stylesheet":Gt,r||(m.as="script",m.crossOrigin=""),m.href=f,document.head.appendChild(m),r)return new Promise((g,b)=>{m.addEventListener("load",g),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Mt={},ge=[()=>D(()=>import("./chunks/0-1530eacf.js"),["./chunks/0-1530eacf.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-5dc9d1d4.js","./chunks/index-ae06bd16.js","./chunks/stores-87e068ea.js","./chunks/singletons-83aa97dc.js","./chunks/paths-6cd3a76e.js","./assets/_layout-d839da34.css"],import.meta.url),()=>D(()=>import("./chunks/1-201d6b6d.js"),["./chunks/1-201d6b6d.js","./components/pages/_error.svelte-f1ec0330.js","./chunks/index-ae06bd16.js","./chunks/stores-87e068ea.js","./chunks/singletons-83aa97dc.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>D(()=>import("./chunks/2-c8fcddea.js"),["./chunks/2-c8fcddea.js","./chunks/_page-7059f86f.js","./components/pages/_page.svelte-bfe67234.js","./chunks/index-ae06bd16.js","./chunks/P-3957344e.js","./chunks/ButtonA-c15aeb12.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>D(()=>import("./chunks/3-adb06c5f.js"),["./chunks/3-adb06c5f.js","./chunks/_page-2549a114.js","./components/pages/about-us/_page.svelte-7a252865.js","./chunks/index-ae06bd16.js"],import.meta.url),()=>D(()=>import("./chunks/4-6a4d4282.js"),["./chunks/4-6a4d4282.js","./chunks/_page-d1384927.js","./components/pages/about-us/employees/_page.svelte-32376154.js","./chunks/index-ae06bd16.js"],import.meta.url),()=>D(()=>import("./chunks/5-5428b3f3.js"),["./chunks/5-5428b3f3.js","./chunks/_page-ca74f7ee.js","./components/pages/contact/_page.svelte-6137b74d.js","./chunks/index-ae06bd16.js"],import.meta.url),()=>D(()=>import("./chunks/6-2169e333.js"),["./chunks/6-2169e333.js","./chunks/_page-aa0c2be1.js","./components/pages/menu/_page.svelte-79cc159b.js","./chunks/index-ae06bd16.js","./chunks/P-3957344e.js","./chunks/ButtonA-c15aeb12.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>D(()=>import("./chunks/7-7eda27de.js"),["./chunks/7-7eda27de.js","./components/pages/menu/book/_page.svelte-8d5bb45c.js","./chunks/index-ae06bd16.js","./chunks/P-3957344e.js"],import.meta.url),()=>D(()=>import("./chunks/8-e3002ad5.js"),["./chunks/8-e3002ad5.js","./chunks/_page-0c3805b8.js","./components/pages/reviews/_page.svelte-c2d30fdc.js","./chunks/index-ae06bd16.js"],import.meta.url),()=>D(()=>import("./chunks/9-a8581084.js"),["./chunks/9-a8581084.js","./chunks/_page-adf87007.js","./components/pages/reviews/leave-a-review/_page.svelte-43925d01.js","./chunks/index-ae06bd16.js"],import.meta.url),()=>D(()=>import("./chunks/10-2827d25c.js"),["./chunks/10-2827d25c.js","./components/pages/sassy-ducks/_page.svelte-d1bec25e.js","./chunks/index-ae06bd16.js","./chunks/paths-6cd3a76e.js","./assets/_page-4449bd9e.css"],import.meta.url)],zt=[],Ht={"/":[2],"/about-us":[3],"/about-us/employees":[4],"/contact":[5],"/menu":[6],"/menu/book":[7],"/reviews":[8],"/reviews/leave-a-review":[9],"/sassy-ducks":[10]},Wt={handleError:({error:n})=>{console.error(n)}};class Ae{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,t){this.status=e,this.location=t}}async function Yt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([i,s])=>[i,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Xt=-1,Zt=-2,Qt=-3,xt=-4,en=-5,tn=-6;function nn(n){if(typeof n=="number")return i(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function i(s,f=!1){if(s===Xt)return;if(s===Qt)return NaN;if(s===xt)return 1/0;if(s===en)return-1/0;if(s===tn)return-0;if(f)throw new Error("Invalid input");if(s in t)return t[s];const r=e[s];if(!r||typeof r!="object")t[s]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[s]=new Date(r[1]);break;case"Set":const _=new Set;t[s]=_;for(let b=1;b<r.length;b+=1)_.add(i(r[b]));break;case"Map":const m=new Map;t[s]=m;for(let b=1;b<r.length;b+=2)m.set(i(r[b]),i(r[b+1]));break;case"RegExp":t[s]=new RegExp(r[1],r[2]);break;case"Object":t[s]=Object(r[1]);break;case"BigInt":t[s]=BigInt(r[1]);break;case"null":const g=Object.create(null);t[s]=g;for(let b=1;b<r.length;b+=2)g[r[b]]=i(r[b+1]);break}else{const u=new Array(r.length);t[s]=u;for(let _=0;_<r.length;_+=1){const m=r[_];m!==Zt&&(u[_]=i(m))}}else{const u={};t[s]=u;for(const _ in r){const m=r[_];u[_]=i(m)}}return t[s]}return i(0)}const Oe=Dt(ge,zt,Ht,Mt),$e=ge[0],je=ge[1];$e();je();let re={};try{re=JSON.parse(sessionStorage[nt])}catch{}function Ie(n){re[n]=pe()}function rn({target:n,base:e}){var Ke;const t=[];let i=null;const s={before_navigate:[],after_navigate:[]};let f={branch:[],error:null,url:null},r=!1,u=!1,_=!0,m=!1,g=!1,b=!1,R=!1,U,A=(Ke=history.state)==null?void 0:Ke[q];A||(A=Date.now(),history.replaceState({...history.state,[q]:A},"",location.href));const C=re[A];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let K,Ue,ae;async function Ne(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ve(a,!0);i=null,await Ve(o,a,[])}async function we(a,{noScroll:o=!1,replaceState:l=!1,keepFocus:c=!1,state:h={},invalidateAll:p=!1},d,k){return typeof a=="string"&&(a=new URL(a,He(document))),ie({url:a,scroll:o?pe():null,keepfocus:c,redirect_chain:d,details:{state:h,replaceState:l},nav_token:k,accepted:()=>{p&&(R=!0)},blocked:()=>{},type:"goto"})}async function De(a){const o=ve(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return i={id:o.id,promise:Fe(o).then(l=>(l.type==="loaded"&&l.state.error&&(i=null),l))},i.promise}async function oe(...a){const l=Oe.filter(c=>a.some(h=>c.exec(h))).map(c=>Promise.all([...c.layouts,c.leaf].map(h=>h==null?void 0:h[1]())));await Promise.all(l)}async function Ve(a,o,l,c,h={},p){var k,v;Ue=h;let d=a&&await Fe(a);if(d||(d=await Ge(o,{id:null},await te(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Ue!==h)return!1;if(d.type==="redirect")if(l.length>10||l.includes(o.pathname))d=await se({status:500,error:await te(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(d.location,o).href,{},[...l,o.pathname],h),!1;else((v=(k=d.props)==null?void 0:k.page)==null?void 0:v.status)>=400&&await M.updated.check()&&await le(o);if(t.length=0,R=!1,m=!0,c&&c.details){const{details:y}=c,E=y.replaceState?0:1;y.state[q]=A+=E,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(i=null,u){f=d.state,d.props.page&&(d.props.page.url=o);const y=de();U.$set(d.props),y()}else qe(d);if(c){const{scroll:y,keepfocus:E}=c;if(E||Le(),await ce(),_){const O=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ce();_=!0,d.props.page&&(K=d.props.page),p&&p(),m=!1}function qe(a){var h,p;f=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),K=a.props.page;const l=de();U=new Jt({target:n,props:{...a.props,stores:M},hydrate:!0}),l();const c={from:null,to:ue("to",{params:f.params,route:{id:(p=(h=f.route)==null?void 0:h.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};s.after_navigate.forEach(d=>d(c)),u=!0}async function Q({url:a,params:o,branch:l,status:c,error:h,route:p,form:d}){var j;const k=l.filter(Boolean);let v="never";for(const I of l)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=bt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:o,branch:l,error:h,route:p},props:{components:k.map(I=>I.node.component)}};d!==void 0&&(y.props.form=d);let E={},O=!K;for(let I=0;I<k.length;I+=1){const $=k[I];E={...E,...$.data},(O||!f.branch.some(N=>N===$))&&(y.props[`data_${I}`]=E,O=O||Object.keys((j=$.data)!=null?j:{}).length>0)}if(O||(O=Object.keys(K.data).length!==Object.keys(E).length),!f.url||a.href!==f.url.href||f.error!==h||d!==void 0||O){y.props.page={error:h,params:o,route:p,status:c,url:new URL(a),form:d,data:O?E:K.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=($,N)=>{Object.defineProperty(y.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${N}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function ye({loader:a,parent:o,url:l,params:c,route:h,server_data_node:p}){var y,E,O,T,j,I,$;let d=null;const k={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((y=v.shared)!=null&&y.load){let N=function(...w){for(const S of w){const{href:L}=new URL(S,l);k.dependencies.add(L)}};const x={route:{get id(){return k.route=!0,h.id}},params:new Proxy(c,{get:(w,S)=>(k.params.add(S),w[S])}),data:(E=p==null?void 0:p.data)!=null?E:null,url:Rt(l,()=>{k.url=!0}),async fetch(w,S){let L;w instanceof Request?(L=w.url,S={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...S}):L=w;const P=new URL(L,l).href;return N(P),u?At(L,P,S):Pt(L,S)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,o()}};Object.defineProperties(x,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),d=(O=await v.shared.load.call(null,x))!=null?O:null,d=d?await Yt(d):null}return{node:v,loader:a,server:p,shared:(T=v.shared)!=null&&T.load?{type:"data",data:d,uses:k}:null,data:(j=d!=null?d:p==null?void 0:p.data)!=null?j:null,slash:($=(I=v.shared)==null?void 0:I.trailingSlash)!=null?$:p==null?void 0:p.slash}}function Ce(a,o,l,c,h){if(R)return!0;if(!c)return!1;if(c.parent&&a||c.route&&o||c.url&&l)return!0;for(const p of c.params)if(h[p]!==f.params[p])return!0;for(const p of c.dependencies)if(t.some(d=>d(new URL(p))))return!0;return!1}function be(a,o){var l,c;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((c=a.uses.params)!=null?c:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&o!=null?o:null}async function Fe({id:a,invalidating:o,url:l,params:c,route:h}){var x;if((i==null?void 0:i.id)===a)return i.promise;const{errors:p,layouts:d,leaf:k}=h,v=[...d,k];p.forEach(w=>w==null?void 0:w().catch(()=>{})),v.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const E=f.url?a!==f.url.pathname+f.url.search:!1,O=f.route?a!==f.route.id:!1,T=v.reduce((w,S,L)=>{var ee;const P=f.branch[L],H=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||Ce(w.some(Boolean),O,E,(ee=P.server)==null?void 0:ee.uses,c));return w.push(H),w},[]);if(T.some(Boolean)){try{y=await tt(l,T)}catch(w){return se({status:500,error:await te(w,{url:l,params:c,route:{id:h.id}}),url:l,route:h})}if(y.type==="redirect")return y}const j=y==null?void 0:y.nodes;let I=!1;const $=v.map(async(w,S)=>{var ee;if(!w)return;const L=f.branch[S],P=j==null?void 0:j[S];if((!P||P.type==="skip")&&w[1]===(L==null?void 0:L.loader)&&!Ce(I,O,E,(ee=L.shared)==null?void 0:ee.uses,c))return L;if(I=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:w[1],url:l,params:c,route:h,parent:async()=>{var ze;const Me={};for(let Ee=0;Ee<S;Ee+=1)Object.assign(Me,(ze=await $[Ee])==null?void 0:ze.data);return Me},server_data_node:be(P===void 0&&w[0]?{type:"skip"}:P!=null?P:null,L==null?void 0:L.server)})});for(const w of $)w.catch(()=>{});const N=[];for(let w=0;w<v.length;w+=1)if(v[w])try{N.push(await $[w])}catch(S){if(S instanceof et)return{type:"redirect",location:S.location};let L=500,P;j!=null&&j.includes(S)?(L=(x=S.status)!=null?x:L,P=S.error):S instanceof Ae?(L=S.status,P=S.body):P=await te(S,{params:c,url:l,route:{id:h.id}});const H=await Be(w,N,p);return H?await Q({url:l,params:c,branch:N.slice(0,H.idx).concat(H.node),status:L,error:P,route:h}):await Ge(l,{id:h.id},P,L)}else N.push(void 0);return await Q({url:l,params:c,branch:N,status:200,error:null,route:h,form:o?void 0:null})}async function Be(a,o,l){for(;a--;)if(l[a]){let c=a;for(;!o[c];)c-=1;try{return{idx:c+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:o,url:l,route:c}){var y;const h={},p=await $e();let d=null;if(p.server)try{const E=await tt(l,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;d=(y=E.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||r)&&await le(l)}const k=await ye({loader:$e,url:l,params:h,route:c,parent:()=>Promise.resolve({}),server_data_node:be(d)}),v={node:await je(),loader:je,shared:null,server:null,data:null};return await Q({url:l,params:h,branch:[k,v],status:a,error:o,route:null})}function ve(a,o){if(Ye(a,e))return;const l=vt(a.pathname.slice(e.length)||"/");for(const c of Oe){const h=c.exec(l);if(h)return{id:a.pathname+a.search,invalidating:o,route:c,params:Et(h),url:a}}}function Je({url:a,type:o,intent:l,delta:c}){var k,v,y,E,O;let h=!1;const p={from:ue("from",{params:f.params,route:{id:(v=(k=f.route)==null?void 0:k.id)!=null?v:null},url:f.url}),to:ue("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(O=(E=l==null?void 0:l.route)==null?void 0:E.id)!=null?O:null},url:a}),willUnload:!l,type:o};c!==void 0&&(p.delta=c);const d={...p,cancel:()=>{h=!0}};return g||s.before_navigate.forEach(T=>T(d)),h?null:p}async function ie({url:a,scroll:o,keepfocus:l,redirect_chain:c,details:h,type:p,delta:d,nav_token:k,accepted:v,blocked:y}){const E=ve(a,!1),O=Je({url:a,type:p,delta:d,intent:E});if(!O){y();return}Ie(A),v(),g=!0,u&&M.navigating.set(O),await Ve(E,a,c,{scroll:o,keepfocus:l,details:h},k,()=>{g=!1,s.after_navigate.forEach(T=>T(O)),M.navigating.set(null)})}async function Ge(a,o,l,c){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await se({status:c,error:l,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function at(){let a;n.addEventListener("mousemove",p=>{const d=p.target;clearTimeout(a),a=setTimeout(()=>{c(d,2)},20)});function o(p){c(p.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const l=new IntersectionObserver(p=>{for(const d of p)d.isIntersecting&&(oe(new URL(d.target.href).pathname),l.unobserve(d.target))},{threshold:0});function c(p,d){const k=We(p,n);if(!k)return;const{url:v,external:y}=Re(k,e);if(y)return;const E=fe(k);E.reload||(d<=E.preload_data?De(v):d<=E.preload_code&&oe(v.pathname))}function h(){l.disconnect();for(const p of n.querySelectorAll("a")){const{url:d,external:k}=Re(p,e);if(k)continue;const v=fe(p);v.reload||(v.preload_code===Xe.viewport&&l.observe(p),v.preload_code===Xe.eager&&oe(d.pathname))}}s.after_navigate.push(h),h()}return{after_navigate:a=>{Pe(()=>(s.after_navigate.push(a),()=>{const o=s.after_navigate.indexOf(a);s.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(s.before_navigate.push(a),()=>{const o=s.before_navigate.indexOf(a);s.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(m||!u)&&(_=!1)},goto:(a,o={})=>{if("keepfocus"in o&&!("keepFocus"in o))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in o&&!("noScroll"in o))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return we(a,o,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:o}=new URL(a,location.href);t.push(l=>l.href===o)}return Ne()},invalidateAll:()=>(R=!0,Ne()),preload_data:async a=>{const o=new URL(a,He(document));await De(o)},preload_code:oe,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:l,route:c}=f;if(!c)return;const h=await Be(f.branch.length,l,c.errors);if(h){const p=await Q({url:o,params:f.params,branch:l.slice(0,h.idx).concat(h.node),status:500,error:a.error,route:c});f=p.state;const d=de();U.$set(p.props),d(),ce().then(Le)}}else if(a.type==="redirect")we(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...K,form:a.data,status:a.status}},l=de();U.$set(o),l(),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var c,h;let l=!1;if(!g){const p={from:ue("from",{params:f.params,route:{id:(h=(c=f.route)==null?void 0:c.id)!=null?h:null},url:f.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};s.before_navigate.forEach(d=>d(p))}l?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(A);try{sessionStorage[nt]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||at(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const l=We(o.composedPath()[0],n);if(!l)return;const{url:c,external:h,has:p}=Re(l,e),d=fe(l);if(!c||!(l instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||p.download)return;if(h||d.reload){Je({url:c,type:"link"})||o.preventDefault(),g=!0;return}const[v,y]=c.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){b=!0,Ie(A),f.url=c,M.page.set({...K,url:c}),M.page.notify();return}ie({url:c,scroll:d.noscroll?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var v;if(o.defaultPrevented)return;const l=HTMLFormElement.prototype.cloneNode.call(o.target),c=o.submitter;if(((c==null?void 0:c.formMethod)||l.method)!=="get")return;const p=new URL(((v=o.submitter)==null?void 0:v.hasAttribute("formaction"))&&(c==null?void 0:c.formAction)||l.action);if(Ye(p,e))return;const{noscroll:d,reload:k}=fe(o.target);k||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),ie({url:p,scroll:d?pe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var l;if((l=o.state)!=null&&l[q]){if(o.state[q]===A)return;const c=o.state[q]-A;ie({url:new URL(location.href),scroll:re[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[q]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:o,node_ids:l,params:c,route:h,data:p,form:d})=>{var y;r=!0;const k=new URL(location.href);let v;try{const E=l.map(async(O,T)=>{const j=p[T];return ye({loader:ge[O],url:k,params:c,route:h,parent:async()=>{const I={};for(let $=0;$<T;$+=1)Object.assign(I,(await E[$]).data);return I},server_data_node:be(j)})});v=await Q({url:k,params:c,branch:await Promise.all(E),status:a,error:o,form:d,route:(y=Oe.find(({id:O})=>O===h.id))!=null?y:null})}catch(E){if(E instanceof et){await le(new URL(E.location,location.href));return}v=await se({status:E instanceof Ae?E.status:500,error:await te(E,{url:k,params:c,route:h}),url:k,route:h})}qe(v)}}}async function tt(n,e){var f;const t=new URL(n);t.pathname=It(n.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const i=await _e(t.href),s=await i.json();if(!i.ok)throw new Error(s);return(f=s.nodes)==null||f.forEach(r=>{var u,_;(r==null?void 0:r.type)==="data"&&(r.data=nn(r.data),r.uses={dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((_=r.uses.params)!=null?_:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),s}function te(n,e){var t;return n instanceof Ae?n.body:(t=Wt.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const an=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(n,e){for(const t of an)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function Le(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function cn({env:n,hydrate:e,paths:t,target:i,version:s}){yt(t),wt(s);const f=rn({target:i,base:t.base});gt({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{cn as start};
