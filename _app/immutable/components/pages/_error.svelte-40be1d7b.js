import{S as P,i as j,s as B,q as $,a as v,k as z,w as C,r as d,c as x,l as A,m as D,x as E,h as m,I as F,n as h,b as _,y as H,H as q,u as I,t as k,d as J,f as b,z as M,C as K,g as L}from"../../chunks/index-f9ec085f.js";import{b as O}from"../../chunks/paths-6cd3a76e.js";import{p as G}from"../../chunks/stores-08934db7.js";import{H as Q}from"../../chunks/H-35b8c226.js";import{P as N}from"../../chunks/P-c127fcea.js";function R(n){let t=n[1].status+"",r,e,a=n[1].error.message+"",i;return{c(){r=$(t),e=$(": "),i=$(a)},l(s){r=d(s,t),e=d(s,": "),i=d(s,a)},m(s,f){_(s,r,f),_(s,e,f),_(s,i,f)},p(s,f){f&2&&t!==(t=s[1].status+"")&&I(r,t),f&2&&a!==(a=s[1].error.message+"")&&I(i,a)},d(s){s&&m(r),s&&m(e),s&&m(i)}}}function V(n){let t,r;return t=new N({props:{_class:"text-lg",$$slots:{default:[X]},$$scope:{ctx:n}}}),{c(){C(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){H(t,e,a),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function W(n){let t,r;return t=new N({props:{_class:"text-lg p-2 italic",$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c(){C(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,a){H(t,e,a),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function X(n){let t;return{c(){t=$("Unknown error.")},l(r){t=d(r,"Unknown error.")},m(r,e){_(r,t,e)},d(r){r&&m(t)}}}function Y(n){let t;return{c(){t=$("The duck you're looking for isn't in here.")},l(r){t=d(r,"The duck you're looking for isn't in here.")},m(r,e){_(r,t,e)},d(r){r&&m(t)}}}function Z(n){let t,r,e,a,i,s,f,w,u,c,g;a=new Q({props:{type:"h1",class:"text-3xl",$$slots:{default:[R]},$$scope:{ctx:n}}});const S=[W,V],p=[];function T(l,o){return l[1].status===404?0:1}return u=T(n),c=p[u]=S[u](n),{c(){t=$(n[0]),r=v(),e=z("main"),C(a.$$.fragment),i=v(),s=z("img"),w=v(),c.c(),this.h()},l(l){t=d(l,n[0]),r=x(l),e=A(l,"MAIN",{class:!0});var o=D(e);E(a.$$.fragment,o),i=x(o),s=A(o,"IMG",{src:!0,alt:!0,width:!0,height:!0}),w=x(o),c.l(o),o.forEach(m),this.h()},h(){F(s.src,f=O+"/images/error.webp")||h(s,"src",f),h(s,"alt","sad duck"),h(s,"width","512"),h(s,"height","512"),h(e,"class","bg-emerald-200")},m(l,o){_(l,t,o),_(l,r,o),_(l,e,o),H(a,e,null),q(e,i),q(e,s),q(e,w),p[u].m(e,null),g=!0},p(l,[o]){(!g||o&1)&&I(t,l[0]);const U={};o&6&&(U.$$scope={dirty:o,ctx:l}),a.$set(U);let y=u;u=T(l),u!==y&&(L(),k(p[y],1,1,()=>{p[y]=null}),J(),c=p[u],c||(c=p[u]=S[u](l),c.c()),b(c,1),c.m(e,null))},i(l){g||(b(a.$$.fragment,l),b(c),g=!0)},o(l){k(a.$$.fragment,l),k(c),g=!1},d(l){l&&m(t),l&&m(r),l&&m(e),M(a),p[u].d()}}}function ee(n,t,r){let e;K(n,G,i=>r(1,e=i));let a=!1;try{a=G.route.id}catch{a=!1}return[a,e]}class ne extends P{constructor(t){super(),j(this,t,ee,Z,B,{})}}export{ne as default};
