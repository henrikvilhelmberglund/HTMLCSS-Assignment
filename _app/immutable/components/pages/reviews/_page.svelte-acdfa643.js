import{S as oe,i as ie,s as ce,k as S,w as z,a as R,l as P,m as E,x as D,c as N,h as d,n as i,b as T,y as j,H as $,f as C,t as U,z as q,M as F,q as ee,r as te,u as ye,e as K,B as ne,J as x,K as M,L as J,X as Se,Y as Pe,Z,d as he,_ as Ue,O as Be,Q as Oe,W as ze,C as De,T as Te,U as Le,V as Ae,g as de,P as je,$ as qe}from"../../../chunks/index-2da221d7.js";import{P as ae}from"../../../chunks/P-db0c78b9.js";import{f as me}from"../../../chunks/index-7ecfc3ed.js";import{H as xe}from"../../../chunks/H-5ad4d7da.js";import{u as se}from"../../../chunks/stores-1328873b.js";import{T as Me}from"../../../chunks/Transition-697007aa.js";function _e(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function Ge(s){let e;return{c(){e=ee(s[0])},l(t){e=te(t,s[0])},m(t,l){T(t,e,l)},p(t,l){l&1&&ye(e,t[0])},d(t){t&&d(e)}}}function He(s){let e,t;return{c(){e=x("svg"),t=x("path"),this.h()},l(l){e=M(l,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var r=E(e);t=M(r,"path",{d:!0}),E(t).forEach(d),r.forEach(d),this.h()},h(){i(t,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width","24"),i(e,"height","24"),i(e,"class","fill-orange-400")},m(l,r){T(l,e,r),$(e,t)},d(l){l&&d(e)}}}function ge(s){let e,t=s[5]!==0&&s[5]%2===0&&He();return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,r){t&&t.m(l,r),T(l,e,r)},p:ne,d(l){t&&t.d(l),l&&d(e)}}}function pe(s){let e,t;return{c(){e=x("svg"),t=x("path"),this.h()},l(l){e=M(l,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var r=E(e);t=M(r,"path",{d:!0}),E(t).forEach(d),r.forEach(d),this.h()},h(){i(t,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width","13"),i(e,"height","24"),i(e,"class","fill-orange-400")},m(l,r){T(l,e,r),$(e,t)},d(l){l&&d(e)}}}function Xe(s){let e;return{c(){e=ee(s[2])},l(t){e=te(t,s[2])},m(t,l){T(t,e,l)},p(t,l){l&4&&ye(e,t[2])},d(t){t&&d(e)}}}function Je(s){let e,t,l,r,a,n,c,g;t=new ae({props:{type:"review",_class:"text-xl dark:text-emerald-200",$$slots:{default:[Ge]},$$scope:{ctx:s}}});let p=Array(s[1]+1),f=[];for(let h=0;h<p.length;h+=1)f[h]=ge(_e(s,p,h));let v=s[1]%2===1&&pe();return c=new ae({props:{type:"review",_class:"pt-4 dark:text-emerald-100",$$slots:{default:[Xe]},$$scope:{ctx:s}}}),{c(){e=S("article"),z(t.$$.fragment),l=R(),r=S("section");for(let h=0;h<f.length;h+=1)f[h].c();a=R(),v&&v.c(),n=R(),z(c.$$.fragment),this.h()},l(h){e=P(h,"ARTICLE",{class:!0});var m=E(e);D(t.$$.fragment,m),l=N(m),r=P(m,"SECTION",{class:!0});var L=E(r);for(let k=0;k<f.length;k+=1)f[k].l(L);a=N(L),v&&v.l(L),L.forEach(d),n=N(m),D(c.$$.fragment,m),m.forEach(d),this.h()},h(){i(r,"class","flex flex-row "),i(e,"class","m-4 flex w-72 flex-col rounded-lg border border-solid border-black bg-slate-200 p-4 dark:bg-emerald-800")},m(h,m){T(h,e,m),j(t,e,null),$(e,l),$(e,r);for(let L=0;L<f.length;L+=1)f[L].m(r,null);$(r,a),v&&v.m(r,null),$(e,n),j(c,e,null),g=!0},p(h,[m]){const L={};if(m&65&&(L.$$scope={dirty:m,ctx:h}),t.$set(L),m&2){p=Array(h[1]+1);let y;for(y=0;y<p.length;y+=1){const B=_e(h,p,y);f[y]?f[y].p(B,m):(f[y]=ge(B),f[y].c(),f[y].m(r,a))}for(;y<f.length;y+=1)f[y].d(1);f.length=p.length}h[1]%2===1?v||(v=pe(),v.c(),v.m(r,null)):v&&(v.d(1),v=null);const k={};m&68&&(k.$$scope={dirty:m,ctx:h}),c.$set(k)},i(h){g||(C(t.$$.fragment,h),C(c.$$.fragment,h),g=!0)},o(h){U(t.$$.fragment,h),U(c.$$.fragment,h),g=!1},d(h){h&&d(e),q(t),F(f,h),v&&v.d(),q(c)}}}function Ke(s,e,t){let{username:l}=e,{score:r}=e,{desc:a}=e;return s.$$set=n=>{"username"in n&&t(0,l=n.username),"score"in n&&t(1,r=n.score),"desc"in n&&t(2,a=n.desc)},[l,r,a]}class Ie extends oe{constructor(e){super(),ie(this,e,Ke,Je,ce,{username:0,score:1,desc:2})}}function $e(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function Qe(s){let e,t,l=s[5]%2===0&&Ve(s),r=s[5]%2===1&&We(s);return{c(){l&&l.c(),e=R(),r&&r.c(),t=K()},l(a){l&&l.l(a),e=N(a),r&&r.l(a),t=K()},m(a,n){l&&l.m(a,n),T(a,e,n),r&&r.m(a,n),T(a,t,n)},p(a,n){a[5]%2===0&&l.p(a,n),a[5]%2===1&&r.p(a,n)},d(a){l&&l.d(a),a&&d(e),r&&r.d(a),a&&d(t)}}}function Ve(s){let e,t,l,r,a,n;function c(){return s[1](s[5])}return{c(){e=S("button"),t=x("svg"),l=x("path"),this.h()},l(g){e=P(g,"BUTTON",{"aria-label":!0});var p=E(e);t=M(p,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var f=E(t);l=M(f,"path",{d:!0}),E(l).forEach(d),f.forEach(d),p.forEach(d),this.h()},h(){i(l,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","12"),i(t,"height","24"),i(t,"class",r=(s[0]>=s[5]?"fill-orange-400":"fill-slate-400")+" star -scale-x-100"),i(e,"aria-label",s[5]/2===1?s[5]/2+" star":s[5]/2+" stars")},m(g,p){T(g,e,p),$(e,t),$(t,l),a||(n=J(e,"mousedown",c),a=!0)},p(g,p){s=g,p&1&&r!==(r=(s[0]>=s[5]?"fill-orange-400":"fill-slate-400")+" star -scale-x-100")&&i(t,"class",r)},d(g){g&&d(e),a=!1,n()}}}function We(s){let e,t,l,r,a,n,c;function g(){return s[2](s[5])}return{c(){e=S("button"),t=x("svg"),l=x("path"),a=R(),this.h()},l(p){e=P(p,"BUTTON",{"aria-label":!0});var f=E(e);t=M(f,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var v=E(t);l=M(v,"path",{d:!0}),E(l).forEach(d),v.forEach(d),a=N(f),f.forEach(d),this.h()},h(){i(l,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","12"),i(t,"height","24"),i(t,"class",r=(s[0]>=s[5]?"fill-orange-400":"fill-slate-400")+" star"),i(e,"aria-label",s[5]/2===.5?s[5]/2+" star":s[5]/2+" stars")},m(p,f){T(p,e,f),$(e,t),$(t,l),$(e,a),n||(c=J(e,"mousedown",g),n=!0)},p(p,f){s=p,f&1&&r!==(r=(s[0]>=s[5]?"fill-orange-400":"fill-slate-400")+" star")&&i(t,"class",r)},d(p){p&&d(e),n=!1,c()}}}function ve(s){let e,t=s[5]!==0&&Qe(s);return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,r){t&&t.m(l,r),T(l,e,r)},p(l,r){l[5]!==0&&t.p(l,r)},d(l){t&&t.d(l),l&&d(e)}}}function Ye(s){let e,t=Array(11),l=[];for(let r=0;r<t.length;r+=1)l[r]=ve($e(s,t,r));return{c(){e=S("section");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=P(r,"SECTION",{class:!0});var a=E(e);for(let n=0;n<l.length;n+=1)l[n].l(a);a.forEach(d),this.h()},h(){i(e,"class","flex flex-row")},m(r,a){T(r,e,a);for(let n=0;n<l.length;n+=1)l[n].m(e,null)},p(r,[a]){if(a&1){t=Array(11);let n;for(n=0;n<t.length;n+=1){const c=$e(r,t,n);l[n]?l[n].p(c,a):(l[n]=ve(c),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=t.length}},i:ne,o:ne,d(r){r&&d(e),F(l,r)}}}function Ze(s,e,t){let{score:l=0}=e;const r=n=>t(0,l=n),a=n=>t(0,l=n);return s.$$set=n=>{"score"in n&&t(0,l=n.score)},[l,r,a]}class Fe extends oe{constructor(e){super(),ie(this,e,Ze,Ye,ce,{score:0})}}function we(s,e,t){const l=s.slice();return l[10]=e[t],l}function be(s,e,t){const l=s.slice();return l[10]=e[t],l}function et(s){let e;return{c(){e=ee("Reviews")},l(t){e=te(t,"Reviews")},m(t,l){T(t,e,l)},d(t){t&&d(e)}}}function ke(s){let e,t;const l=[s[10]];let r={};for(let a=0;a<l.length;a+=1)r=Te(r,l[a]);return e=new Ie({props:r}),{c(){z(e.$$.fragment)},l(a){D(e.$$.fragment,a)},m(a,n){j(e,a,n),t=!0},p(a,n){const c=n&64?Le(l,[Ae(a[10])]):{};e.$set(c)},i(a){t||(C(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){q(e,a)}}}function tt(s){let e,t,l;const r=[s[10]];let a={};for(let n=0;n<r.length;n+=1)a=Te(a,r[n]);return e=new Ie({props:a}),{c(){z(e.$$.fragment),t=R()},l(n){D(e.$$.fragment,n),t=N(n)},m(n,c){j(e,n,c),T(n,t,c),l=!0},p(n,c){const g=c&8?Le(r,[Ae(n[10])]):{};e.$set(g)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){U(e.$$.fragment,n),l=!1},d(n){q(e,n),n&&d(t)}}}function Ee(s){let e,t;return e=new Me({props:{$$slots:{default:[tt]},$$scope:{ctx:s}}}),{c(){z(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,r){j(e,l,r),t=!0},p(l,r){const a={};r&32776&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function lt(s){let e;return{c(){e=ee("Add a review! \u{1F44D}")},l(t){e=te(t,"Add a review! \u{1F44D}")},m(t,l){T(t,e,l)},d(t){t&&d(e)}}}function rt(s){let e,t,l,r,a,n,c,g,p,f,v,h,m,L,k,y,B,le,G,W,Q,Y,re,fe;t=new xe({props:{type:"h1",$$slots:{default:[et]},$$scope:{ctx:s}}});let H=s[6],w=[];for(let o=0;o<H.length;o+=1)w[o]=ke(be(s,H,o));const Ce=o=>U(w[o],1,1,()=>{w[o]=null});let X=s[3],b=[];for(let o=0;o<X.length;o+=1)b[o]=Ee(we(s,X,o));const Re=o=>U(b[o],1,1,()=>{b[o]=null});g=new ae({props:{_class:"text-xl  pb-4 w-48",$$slots:{default:[lt]},$$scope:{ctx:s}}});function Ne(o){s[7](o)}let ue={};return s[2]!==void 0&&(ue.score=s[2]),f=new Fe({props:ue}),Se.push(()=>Pe(f,"score",Ne,s[2])),{c(){e=S("main"),z(t.$$.fragment),l=R(),r=S("article");for(let o=0;o<w.length;o+=1)w[o].c();a=R();for(let o=0;o<b.length;o+=1)b[o].c();n=R(),c=S("aside"),z(g.$$.fragment),p=R(),z(f.$$.fragment),h=R(),m=S("input"),L=R(),k=S("textarea"),y=R(),B=S("input"),le=R(),G=S("input"),this.h()},l(o){e=P(o,"MAIN",{class:!0});var u=E(e);D(t.$$.fragment,u),l=N(u),r=P(u,"ARTICLE",{class:!0});var A=E(r);for(let O=0;O<w.length;O+=1)w[O].l(A);a=N(A);for(let O=0;O<b.length;O+=1)b[O].l(A);A.forEach(d),n=N(u),c=P(u,"ASIDE",{class:!0});var I=E(c);D(g.$$.fragment,I),p=N(I),D(f.$$.fragment,I),h=N(I),m=P(I,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),L=N(I),k=P(I,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,placeholder:!0,class:!0}),E(k).forEach(d),y=N(I),B=P(I,"INPUT",{type:!0,class:!0}),le=N(I),G=P(I,"INPUT",{type:!0,class:!0}),I.forEach(d),u.forEach(d),this.h()},h(){i(r,"class","break-words md:flex md:flex-row md:flex-wrap "),i(m,"type","text"),i(m,"id","username"),i(m,"placeholder","User name"),i(m,"class","m-1 mt-4"),i(k,"name","review"),i(k,"id","review-id"),i(k,"cols","30"),i(k,"rows","4"),i(k,"placeholder","Description"),i(k,"class","m-1"),i(B,"type","submit"),B.value="Submit",i(B,"class","m-1 cursor-pointer rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl font-thin transition-all hover:bg-orange-300"),i(G,"type","submit"),G.value="Delete local storage",i(G,"class","m-1 cursor-pointer rounded-lg border-2 border-orange-700 bg-red-400 p-2 text-2xl font-thin transition-all hover:bg-red-300"),i(c,"class","w-32 flex-col p-4 md:flex md:w-64 md:flex-col"),i(e,"class","dark:bg-emerald-700 md:flex md:flex-col md:items-center")},m(o,u){T(o,e,u),j(t,e,null),$(e,l),$(e,r);for(let A=0;A<w.length;A+=1)w[A].m(r,null);$(r,a);for(let A=0;A<b.length;A+=1)b[A].m(r,null);$(e,n),$(e,c),j(g,c,null),$(c,p),j(f,c,null),$(c,h),$(c,m),Z(m,s[0]),$(c,L),$(c,k),Z(k,s[1]),$(c,y),$(c,B),$(c,le),$(c,G),Y=!0,re||(fe=[J(m,"input",s[8]),J(k,"input",s[9]),J(B,"click",s[4]),J(G,"click",s[5])],re=!0)},p(o,[u]){const A={};if(u&32768&&(A.$$scope={dirty:u,ctx:o}),t.$set(A),u&64){H=o[6];let _;for(_=0;_<H.length;_+=1){const V=be(o,H,_);w[_]?(w[_].p(V,u),C(w[_],1)):(w[_]=ke(V),w[_].c(),C(w[_],1),w[_].m(r,a))}for(de(),_=H.length;_<w.length;_+=1)Ce(_);he()}if(u&8){X=o[3];let _;for(_=0;_<X.length;_+=1){const V=we(o,X,_);b[_]?(b[_].p(V,u),C(b[_],1)):(b[_]=Ee(V),b[_].c(),C(b[_],1),b[_].m(r,null))}for(de(),_=X.length;_<b.length;_+=1)Re(_);he()}const I={};u&32768&&(I.$$scope={dirty:u,ctx:o}),g.$set(I);const O={};!v&&u&4&&(v=!0,O.score=o[2],Ue(()=>v=!1)),f.$set(O),u&1&&m.value!==o[0]&&Z(m,o[0]),u&2&&Z(k,o[1])},i(o){if(!Y){C(t.$$.fragment,o);for(let u=0;u<H.length;u+=1)C(w[u]);for(let u=0;u<X.length;u+=1)C(b[u]);C(g.$$.fragment,o),C(f.$$.fragment,o),Be(()=>{Q&&Q.end(1),W=je(e,me,{y:-5,duration:200,delay:200}),W.start()}),Y=!0}},o(o){U(t.$$.fragment,o),w=w.filter(Boolean);for(let u=0;u<w.length;u+=1)U(w[u]);b=b.filter(Boolean);for(let u=0;u<b.length;u+=1)U(b[u]);U(g.$$.fragment,o),U(f.$$.fragment,o),W&&W.invalidate(),Q=Oe(e,me,{y:5,duration:200}),Y=!1},d(o){o&&d(e),q(t),F(w,o),F(b,o),q(g),q(f),o&&Q&&Q.end(),re=!1,ze(fe)}}}function st(s,e,t){let l;De(s,se,m=>t(3,l=m));let r,a,n;function c(){qe(se,l=[...l,{username:r||"anonymous user",score:n||1,desc:a||"empty message"}],l)}function g(){se.set([])}let p=[{username:"ducklover69",score:9,desc:"Cute ducks and awesome food. Recommended!"},{username:"omnomcoffee",score:8,desc:"Good coffee, however the ducks smelled a bit."},{username:"fingerhurts666",score:1,desc:"I got bit by a duck! My finger still hurts..."},{username:"ChatGPT",score:10,desc:"Ankademin Cafe is a hidden gem in the city. Not only do they have delicious coffee and pastries, but they also have a unique feature - live ducks! The ducks are so well-behaved and add an extra touch of charm to the cafe. It's a perfect spot to relax and unwind while enjoying the company of these adorable creatures. The staff are also very friendly and make sure to keep the ducks well-cared for. Overall, I highly recommend Ankademin Cafe for a fun and enjoyable experience."}];function f(m){n=m,t(2,n)}function v(){r=this.value,t(0,r)}function h(){a=this.value,t(1,a)}return[r,a,n,l,c,g,p,f,v,h]}class ut extends oe{constructor(e){super(),ie(this,e,st,rt,ce,{})}}export{ut as default};