import{S as oe,i as ie,s as ce,k as S,w as M,a as C,l as P,m as E,x as G,c as N,h as d,n as i,b as I,y as H,H as v,f as R,t as U,z as X,M as F,q as ee,r as te,u as ye,e as K,B as ne,J as O,K as D,L as J,Y as Se,Z as Pe,_ as Z,d as he,$ as Ue,P as Be,Q as ze,X as Oe,C as De,U as Te,V as Le,W as Ae,g as de,R as je,a0 as qe}from"../../../chunks/index-2f42800f.js";import{P as ae}from"../../../chunks/P-f8cab992.js";import{f as _e}from"../../../chunks/index-98bdf23b.js";import{H as xe}from"../../../chunks/H-56060685.js";import{u as se}from"../../../chunks/stores-8fdab04e.js";function me(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function Me(s){let e;return{c(){e=ee(s[0])},l(t){e=te(t,s[0])},m(t,l){I(t,e,l)},p(t,l){l&1&&ye(e,t[0])},d(t){t&&d(e)}}}function Ge(s){let e,t;return{c(){e=O("svg"),t=O("path"),this.h()},l(l){e=D(l,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var r=E(e);t=D(r,"path",{d:!0}),E(t).forEach(d),r.forEach(d),this.h()},h(){i(t,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width","24"),i(e,"height","24"),i(e,"class","fill-orange-400")},m(l,r){I(l,e,r),v(e,t)},d(l){l&&d(e)}}}function ge(s){let e,t=s[5]!==0&&s[5]%2===0&&Ge();return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,r){t&&t.m(l,r),I(l,e,r)},p:ne,d(l){t&&t.d(l),l&&d(e)}}}function pe(s){let e,t;return{c(){e=O("svg"),t=O("path"),this.h()},l(l){e=D(l,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var r=E(e);t=D(r,"path",{d:!0}),E(t).forEach(d),r.forEach(d),this.h()},h(){i(t,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width","13"),i(e,"height","24"),i(e,"class","fill-orange-400")},m(l,r){I(l,e,r),v(e,t)},d(l){l&&d(e)}}}function He(s){let e;return{c(){e=ee(s[2])},l(t){e=te(t,s[2])},m(t,l){I(t,e,l)},p(t,l){l&4&&ye(e,t[2])},d(t){t&&d(e)}}}function Xe(s){let e,t,l,r,n,a,c,p;t=new ae({props:{type:"review",_class:"text-xl dark:text-emerald-200",$$slots:{default:[Me]},$$scope:{ctx:s}}});let g=Array(s[1]+1),f=[];for(let h=0;h<g.length;h+=1)f[h]=ge(me(s,g,h));let $=s[1]%2===1&&pe();return c=new ae({props:{type:"review",_class:"pt-4 dark:text-emerald-100",$$slots:{default:[He]},$$scope:{ctx:s}}}),{c(){e=S("article"),M(t.$$.fragment),l=C(),r=S("section");for(let h=0;h<f.length;h+=1)f[h].c();n=C(),$&&$.c(),a=C(),M(c.$$.fragment),this.h()},l(h){e=P(h,"ARTICLE",{class:!0});var _=E(e);G(t.$$.fragment,_),l=N(_),r=P(_,"SECTION",{class:!0});var T=E(r);for(let k=0;k<f.length;k+=1)f[k].l(T);n=N(T),$&&$.l(T),T.forEach(d),a=N(_),G(c.$$.fragment,_),_.forEach(d),this.h()},h(){i(r,"class","flex flex-row "),i(e,"class","m-4 flex w-72 flex-col rounded-lg border border-solid border-black bg-slate-200 p-4 dark:bg-emerald-800")},m(h,_){I(h,e,_),H(t,e,null),v(e,l),v(e,r);for(let T=0;T<f.length;T+=1)f[T].m(r,null);v(r,n),$&&$.m(r,null),v(e,a),H(c,e,null),p=!0},p(h,[_]){const T={};if(_&65&&(T.$$scope={dirty:_,ctx:h}),t.$set(T),_&2){g=Array(h[1]+1);let y;for(y=0;y<g.length;y+=1){const B=me(h,g,y);f[y]?f[y].p(B,_):(f[y]=ge(B),f[y].c(),f[y].m(r,n))}for(;y<f.length;y+=1)f[y].d(1);f.length=g.length}h[1]%2===1?$||($=pe(),$.c(),$.m(r,null)):$&&($.d(1),$=null);const k={};_&68&&(k.$$scope={dirty:_,ctx:h}),c.$set(k)},i(h){p||(R(t.$$.fragment,h),R(c.$$.fragment,h),p=!0)},o(h){U(t.$$.fragment,h),U(c.$$.fragment,h),p=!1},d(h){h&&d(e),X(t),F(f,h),$&&$.d(),X(c)}}}function Je(s,e,t){let{username:l}=e,{score:r}=e,{desc:n}=e;return s.$$set=a=>{"username"in a&&t(0,l=a.username),"score"in a&&t(1,r=a.score),"desc"in a&&t(2,n=a.desc)},[l,r,n]}class Ie extends oe{constructor(e){super(),ie(this,e,Je,Xe,ce,{username:0,score:1,desc:2})}}function ve(s,e,t){const l=s.slice();return l[3]=e[t],l[5]=t,l}function Ke(s){let e,t,l=s[5]%2===0&&Qe(s),r=s[5]%2===1&&Ve(s);return{c(){l&&l.c(),e=C(),r&&r.c(),t=K()},l(n){l&&l.l(n),e=N(n),r&&r.l(n),t=K()},m(n,a){l&&l.m(n,a),I(n,e,a),r&&r.m(n,a),I(n,t,a)},p(n,a){n[5]%2===0&&l.p(n,a),n[5]%2===1&&r.p(n,a)},d(n){l&&l.d(n),n&&d(e),r&&r.d(n),n&&d(t)}}}function Qe(s){let e,t,l,r,n,a;function c(){return s[1](s[5])}return{c(){e=S("button"),t=O("svg"),l=O("path"),this.h()},l(p){e=P(p,"BUTTON",{"aria-label":!0});var g=E(e);t=D(g,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var f=E(t);l=D(f,"path",{d:!0}),E(l).forEach(d),f.forEach(d),g.forEach(d),this.h()},h(){i(l,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","12"),i(t,"height","24"),i(t,"class",r=(s[0]>=s[5]?"fill-orange-400":"fill-slate-400")+" -scale-x-100"),i(e,"aria-label",s[5]/2===1?s[5]/2+" star":s[5]/2+" stars")},m(p,g){I(p,e,g),v(e,t),v(t,l),n||(a=J(e,"click",c),n=!0)},p(p,g){s=p,g&1&&r!==(r=(s[0]>=s[5]?"fill-orange-400":"fill-slate-400")+" -scale-x-100")&&i(t,"class",r)},d(p){p&&d(e),n=!1,a()}}}function Ve(s){let e,t,l,r,n,a,c;function p(){return s[2](s[5])}return{c(){e=S("button"),t=O("svg"),l=O("path"),n=C(),this.h()},l(g){e=P(g,"BUTTON",{"aria-label":!0});var f=E(e);t=D(f,"svg",{xmlns:!0,width:!0,height:!0,class:!0});var $=E(t);l=D($,"path",{d:!0}),E(l).forEach(d),$.forEach(d),n=N(f),f.forEach(d),this.h()},h(){i(l,"d","m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"width","12"),i(t,"height","24"),i(t,"class",r=s[0]>=s[5]?"fill-orange-400":"fill-slate-400"),i(e,"aria-label",s[5]/2===.5?s[5]/2+" star":s[5]/2+" stars")},m(g,f){I(g,e,f),v(e,t),v(t,l),v(e,n),a||(c=J(e,"click",p),a=!0)},p(g,f){s=g,f&1&&r!==(r=s[0]>=s[5]?"fill-orange-400":"fill-slate-400")&&i(t,"class",r)},d(g){g&&d(e),a=!1,c()}}}function $e(s){let e,t=s[5]!==0&&Ke(s);return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,r){t&&t.m(l,r),I(l,e,r)},p(l,r){l[5]!==0&&t.p(l,r)},d(l){t&&t.d(l),l&&d(e)}}}function We(s){let e,t=Array(11),l=[];for(let r=0;r<t.length;r+=1)l[r]=$e(ve(s,t,r));return{c(){e=S("section");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=P(r,"SECTION",{class:!0});var n=E(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(d),this.h()},h(){i(e,"class","flex flex-row")},m(r,n){I(r,e,n);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(r,[n]){if(n&1){t=Array(11);let a;for(a=0;a<t.length;a+=1){const c=ve(r,t,a);l[a]?l[a].p(c,n):(l[a]=$e(c),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},i:ne,o:ne,d(r){r&&d(e),F(l,r)}}}function Ye(s,e,t){let{score:l=0}=e;const r=a=>t(0,l=a),n=a=>t(0,l=a);return s.$$set=a=>{"score"in a&&t(0,l=a.score)},[l,r,n]}class Ze extends oe{constructor(e){super(),ie(this,e,Ye,We,ce,{score:0})}}function be(s,e,t){const l=s.slice();return l[10]=e[t],l}function we(s,e,t){const l=s.slice();return l[10]=e[t],l}function Fe(s){let e;return{c(){e=ee("Reviews")},l(t){e=te(t,"Reviews")},m(t,l){I(t,e,l)},d(t){t&&d(e)}}}function ke(s){let e,t;const l=[s[10]];let r={};for(let n=0;n<l.length;n+=1)r=Te(r,l[n]);return e=new Ie({props:r}),{c(){M(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,a){H(e,n,a),t=!0},p(n,a){const c=a&64?Le(l,[Ae(n[10])]):{};e.$set(c)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}function Ee(s){let e,t;const l=[s[10]];let r={};for(let n=0;n<l.length;n+=1)r=Te(r,l[n]);return e=new Ie({props:r}),{c(){M(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,a){H(e,n,a),t=!0},p(n,a){const c=a&8?Le(l,[Ae(n[10])]):{};e.$set(c)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){X(e,n)}}}function et(s){let e;return{c(){e=ee("Add a review! \u{1F44D}")},l(t){e=te(t,"Add a review! \u{1F44D}")},m(t,l){I(t,e,l)},d(t){t&&d(e)}}}function tt(s){let e,t,l,r,n,a,c,p,g,f,$,h,_,T,k,y,B,le,j,W,Q,Y,re,fe;t=new xe({props:{type:"h1",$$slots:{default:[Fe]},$$scope:{ctx:s}}});let q=s[6],b=[];for(let o=0;o<q.length;o+=1)b[o]=ke(we(s,q,o));const Re=o=>U(b[o],1,1,()=>{b[o]=null});let x=s[3],w=[];for(let o=0;o<x.length;o+=1)w[o]=Ee(be(s,x,o));const Ce=o=>U(w[o],1,1,()=>{w[o]=null});p=new ae({props:{_class:"text-xl",$$slots:{default:[et]},$$scope:{ctx:s}}});function Ne(o){s[7](o)}let ue={};return s[2]!==void 0&&(ue.score=s[2]),f=new Ze({props:ue}),Se.push(()=>Pe(f,"score",Ne,s[2])),{c(){e=S("main"),M(t.$$.fragment),l=C(),r=S("article");for(let o=0;o<b.length;o+=1)b[o].c();n=C();for(let o=0;o<w.length;o+=1)w[o].c();a=C(),c=S("aside"),M(p.$$.fragment),g=C(),M(f.$$.fragment),h=C(),_=S("input"),T=C(),k=S("textarea"),y=C(),B=S("input"),le=C(),j=S("input"),this.h()},l(o){e=P(o,"MAIN",{class:!0});var u=E(e);G(t.$$.fragment,u),l=N(u),r=P(u,"ARTICLE",{class:!0});var L=E(r);for(let z=0;z<b.length;z+=1)b[z].l(L);n=N(L);for(let z=0;z<w.length;z+=1)w[z].l(L);L.forEach(d),a=N(u),c=P(u,"ASIDE",{class:!0});var A=E(c);G(p.$$.fragment,A),g=N(A),G(f.$$.fragment,A),h=N(A),_=P(A,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),T=N(A),k=P(A,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,placeholder:!0,class:!0}),E(k).forEach(d),y=N(A),B=P(A,"INPUT",{type:!0,class:!0}),le=N(A),j=P(A,"INPUT",{type:!0,class:!0}),A.forEach(d),u.forEach(d),this.h()},h(){i(r,"class","md:flex md:flex-row md:flex-wrap"),i(_,"type","text"),i(_,"id","username"),i(_,"placeholder","User name"),i(_,"class","m-1"),i(k,"name","review"),i(k,"id","review-id"),i(k,"cols","30"),i(k,"rows","4"),i(k,"placeholder","Description"),i(k,"class","m-1"),i(B,"type","submit"),B.value="Submit",i(B,"class","m-1 cursor-pointer rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl font-thin transition-all hover:bg-orange-300"),i(j,"type","submit"),j.value="Delete local storage",i(j,"class","m-1 cursor-pointer rounded-lg border-2 border-orange-700 bg-red-400 p-2 text-2xl font-thin transition-all hover:bg-red-300"),i(c,"class","w-32 flex-col p-4 md:flex md:w-64 md:flex-col"),i(e,"class","dark:bg-emerald-700 md:flex md:flex-col md:items-center")},m(o,u){I(o,e,u),H(t,e,null),v(e,l),v(e,r);for(let L=0;L<b.length;L+=1)b[L].m(r,null);v(r,n);for(let L=0;L<w.length;L+=1)w[L].m(r,null);v(e,a),v(e,c),H(p,c,null),v(c,g),H(f,c,null),v(c,h),v(c,_),Z(_,s[0]),v(c,T),v(c,k),Z(k,s[1]),v(c,y),v(c,B),v(c,le),v(c,j),Y=!0,re||(fe=[J(_,"input",s[8]),J(k,"input",s[9]),J(B,"click",s[4]),J(j,"click",s[5])],re=!0)},p(o,[u]){const L={};if(u&32768&&(L.$$scope={dirty:u,ctx:o}),t.$set(L),u&64){q=o[6];let m;for(m=0;m<q.length;m+=1){const V=we(o,q,m);b[m]?(b[m].p(V,u),R(b[m],1)):(b[m]=ke(V),b[m].c(),R(b[m],1),b[m].m(r,n))}for(de(),m=q.length;m<b.length;m+=1)Re(m);he()}if(u&8){x=o[3];let m;for(m=0;m<x.length;m+=1){const V=be(o,x,m);w[m]?(w[m].p(V,u),R(w[m],1)):(w[m]=Ee(V),w[m].c(),R(w[m],1),w[m].m(r,null))}for(de(),m=x.length;m<w.length;m+=1)Ce(m);he()}const A={};u&32768&&(A.$$scope={dirty:u,ctx:o}),p.$set(A);const z={};!$&&u&4&&($=!0,z.score=o[2],Ue(()=>$=!1)),f.$set(z),u&1&&_.value!==o[0]&&Z(_,o[0]),u&2&&Z(k,o[1])},i(o){if(!Y){R(t.$$.fragment,o);for(let u=0;u<q.length;u+=1)R(b[u]);for(let u=0;u<x.length;u+=1)R(w[u]);R(p.$$.fragment,o),R(f.$$.fragment,o),Be(()=>{Q&&Q.end(1),W=je(e,_e,{y:-5,duration:200,delay:200}),W.start()}),Y=!0}},o(o){U(t.$$.fragment,o),b=b.filter(Boolean);for(let u=0;u<b.length;u+=1)U(b[u]);w=w.filter(Boolean);for(let u=0;u<w.length;u+=1)U(w[u]);U(p.$$.fragment,o),U(f.$$.fragment,o),W&&W.invalidate(),Q=ze(e,_e,{y:5,duration:200}),Y=!1},d(o){o&&d(e),X(t),F(b,o),F(w,o),X(p),X(f),o&&Q&&Q.end(),re=!1,Oe(fe)}}}function lt(s,e,t){let l;De(s,se,_=>t(3,l=_));let r,n,a;function c(){qe(se,l=[...l,{username:r||"anonymous user",score:a||1,desc:n||"empty message"}],l)}function p(){se.set([])}let g=[{username:"ducklover69",score:9,desc:"Cute ducks and awesome food. Recommended!"},{username:"omnomcoffee",score:8,desc:"Good coffee, however the ducks smelled a bit."},{username:"fingerhurts666",score:1,desc:"I got bit by a duck! My finger still hurts..."},{username:"ChatGPT",score:10,desc:"Ankademin Cafe is a hidden gem in the city. Not only do they have delicious coffee and pastries, but they also have a unique feature - live ducks! The ducks are so well-behaved and add an extra touch of charm to the cafe. It's a perfect spot to relax and unwind while enjoying the company of these adorable creatures. The staff are also very friendly and make sure to keep the ducks well-cared for. Overall, I highly recommend Ankademin Cafe for a fun and enjoyable experience."}];function f(_){a=_,t(2,a)}function $(){r=this.value,t(0,r)}function h(){n=this.value,t(1,n)}return[r,n,a,l,c,p,g,f,$,h]}class it extends oe{constructor(e){super(),ie(this,e,lt,tt,ce,{})}}export{it as default};
