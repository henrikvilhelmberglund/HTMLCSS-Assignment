import{S as P,i as j,s as B,q as $,a as x,k as U,w as I,r as d,c as v,l as z,m as D,x as C,h as m,I as F,n as g,b as _,y as E,H as q,t as h,d as J,f as k,z as H,C as K,u as A,g as L}from"../../chunks/index-f9ec085f.js";import{b as O}from"../../chunks/paths-6cd3a76e.js";import{p as G}from"../../chunks/stores-08934db7.js";import{H as Q}from"../../chunks/H-35b8c226.js";import{P as N}from"../../chunks/P-c127fcea.js";function R(n){let t=n[0].status+"",r,e,a=n[0].error.message+"",c;return{c(){r=$(t),e=$(": "),c=$(a)},l(s){r=d(s,t),e=d(s,": "),c=d(s,a)},m(s,f){_(s,r,f),_(s,e,f),_(s,c,f)},p(s,f){f&1&&t!==(t=s[0].status+"")&&A(r,t),f&1&&a!==(a=s[0].error.message+"")&&A(c,a)},d(s){s&&m(r),s&&m(e),s&&m(c)}}}function V(n){let t,r;return t=new N({props:{_class:"text-lg",$$slots:{default:[X]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,a){E(t,e,a),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function W(n){let t,r;return t=new N({props:{_class:"text-lg p-2 italic",$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,a){E(t,e,a),r=!0},i(e){r||(k(t.$$.fragment,e),r=!0)},o(e){h(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function X(n){let t;return{c(){t=$("Unknown error.")},l(r){t=d(r,"Unknown error.")},m(r,e){_(r,t,e)},d(r){r&&m(t)}}}function Y(n){let t;return{c(){t=$("The duck you're looking for isn't in here.")},l(r){t=d(r,"The duck you're looking for isn't in here.")},m(r,e){_(r,t,e)},d(r){r&&m(t)}}}function Z(n){let t,r,e,a,c,s,f,w,i,u,b;a=new Q({props:{type:"h1",class:"text-3xl",$$slots:{default:[R]},$$scope:{ctx:n}}});const M=[W,V],p=[];function S(l,o){return l[0].status===404?0:1}return i=S(n),u=p[i]=M[i](n),{c(){t=$(route),r=x(),e=U("main"),I(a.$$.fragment),c=x(),s=U("img"),w=x(),u.c(),this.h()},l(l){t=d(l,route),r=v(l),e=z(l,"MAIN",{class:!0});var o=D(e);C(a.$$.fragment,o),c=v(o),s=z(o,"IMG",{src:!0,alt:!0,width:!0,height:!0}),w=v(o),u.l(o),o.forEach(m),this.h()},h(){F(s.src,f=O+"/images/error.webp")||g(s,"src",f),g(s,"alt","sad duck"),g(s,"width","512"),g(s,"height","512"),g(e,"class","bg-emerald-200")},m(l,o){_(l,t,o),_(l,r,o),_(l,e,o),E(a,e,null),q(e,c),q(e,s),q(e,w),p[i].m(e,null),b=!0},p(l,[o]){const T={};o&3&&(T.$$scope={dirty:o,ctx:l}),a.$set(T);let y=i;i=S(l),i!==y&&(L(),h(p[y],1,1,()=>{p[y]=null}),J(),u=p[i],u||(u=p[i]=M[i](l),u.c()),k(u,1),u.m(e,null))},i(l){b||(k(a.$$.fragment,l),k(u),b=!0)},o(l){h(a.$$.fragment,l),h(u),b=!1},d(l){l&&m(t),l&&m(r),l&&m(e),H(a),p[i].d()}}}function ee(n,t,r){let e;K(n,G,a=>r(0,e=a));try{let a=G.route.id}catch{}return[e]}class ne extends P{constructor(t){super(),j(this,t,ee,Z,B,{})}}export{ne as default};
