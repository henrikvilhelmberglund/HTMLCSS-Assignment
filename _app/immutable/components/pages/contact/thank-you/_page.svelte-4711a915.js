import{S as I,i as P,s as S,k as y,l as v,m as w,h as c,n as Y,b as p,t as x,d as z,f as E,g as A,q as h,a as H,r as k,c as T,I as b,u as N,B as q,w as B,x as C,y as M,z as j}from"../../../../chunks/index-82ea4143.js";import{P as D}from"../../../../chunks/P-6e0e5449.js";function F(m){let e,a,t=(m[0].email||"unknown person")+"",r,_,i,f,s;return{c(){e=y("h1"),a=h("Thank you for your worthless feedback, "),r=h(t),_=h(`.
      :(`),i=H(),f=y("h2"),s=h("Next time please type something in the field...")},l(o){e=v(o,"H1",{});var n=w(e);a=k(n,"Thank you for your worthless feedback, "),r=k(n,t),_=k(n,`.
      :(`),n.forEach(c),i=T(o),f=v(o,"H2",{});var d=w(f);s=k(d,"Next time please type something in the field..."),d.forEach(c)},m(o,n){p(o,e,n),b(e,a),b(e,r),b(e,_),p(o,i,n),p(o,f,n),b(f,s)},p(o,n){n&1&&t!==(t=(o[0].email||"unknown person")+"")&&N(r,t)},i:q,o:q,d(o){o&&c(e),o&&c(i),o&&c(f)}}}function G(m){let e,a,t=(m[0].email||"unknown person")+"",r,_,i,f,s,o,n,d;return n=new D({props:{$$slots:{default:[J]},$$scope:{ctx:m}}}),{c(){e=y("h1"),a=h("Thank you for your feedback, "),r=h(t),_=h("!"),i=H(),f=y("h2"),s=h("Your feedback was:"),o=H(),B(n.$$.fragment)},l(l){e=v(l,"H1",{});var u=w(e);a=k(u,"Thank you for your feedback, "),r=k(u,t),_=k(u,"!"),u.forEach(c),i=T(l),f=v(l,"H2",{});var $=w(f);s=k($,"Your feedback was:"),$.forEach(c),o=T(l),C(n.$$.fragment,l)},m(l,u){p(l,e,u),b(e,a),b(e,r),b(e,_),p(l,i,u),p(l,f,u),b(f,s),p(l,o,u),M(n,l,u),d=!0},p(l,u){(!d||u&1)&&t!==(t=(l[0].email||"unknown person")+"")&&N(r,t);const $={};u&3&&($.$$scope={dirty:u,ctx:l}),n.$set($)},i(l){d||(E(n.$$.fragment,l),d=!0)},o(l){x(n.$$.fragment,l),d=!1},d(l){l&&c(e),l&&c(i),l&&c(f),l&&c(o),j(n,l)}}}function J(m){let e=m[0].textarea+"",a;return{c(){a=h(e)},l(t){a=k(t,e)},m(t,r){p(t,a,r)},p(t,r){r&1&&e!==(e=t[0].textarea+"")&&N(a,e)},d(t){t&&c(a)}}}function K(m){let e,a,t,r;const _=[G,F],i=[];function f(s,o){return s[0].textarea?0:1}return a=f(m),t=i[a]=_[a](m),{c(){e=y("main"),t.c(),this.h()},l(s){e=v(s,"MAIN",{class:!0});var o=w(e);t.l(o),o.forEach(c),this.h()},h(){Y(e,"class","h-[45vh]")},m(s,o){p(s,e,o),i[a].m(e,null),r=!0},p(s,[o]){let n=a;a=f(s),a===n?i[a].p(s,o):(A(),x(i[n],1,1,()=>{i[n]=null}),z(),t=i[a],t?t.p(s,o):(t=i[a]=_[a](s),t.c()),E(t,1),t.m(e,null))},i(s){r||(E(t),r=!0)},o(s){x(t),r=!1},d(s){s&&c(e),i[a].d()}}}function L(m,e,a){let{form:t}=e;return m.$$set=r=>{"form"in r&&a(0,t=r.form)},[t]}class R extends I{constructor(e){super(),P(this,e,L,K,S,{form:0})}}export{R as default};
