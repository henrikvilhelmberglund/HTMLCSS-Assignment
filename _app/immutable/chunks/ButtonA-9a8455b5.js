import{S as k,i as y,s as x,e as u,b as c,B as l,h as s,k as h,q as m,l as d,m as _,r as p,n as f,I as b}from"./index-ae06bd16.js";import{b as g}from"./paths-6cd3a76e.js";function v(a){let t,o;return{c(){t=h("a"),o=m("Book a time slot"),this.h()},l(r){t=d(r,"A",{href:!0,class:!0});var e=_(t);o=p(e,"Book a time slot"),e.forEach(s),this.h()},h(){f(t,"href",g+"/menu/book"),f(t,"class","transition-all bg-orange-400 font-thin text-3xl border-2 border-orange-700 rounded-lg p-2 hover:bg-orange-300")},m(r,e){c(r,t,e),b(t,o)},p:l,d(r){r&&s(t)}}}function B(a){let t,o;return{c(){t=h("a"),o=m("View menu"),this.h()},l(r){t=d(r,"A",{href:!0,class:!0});var e=_(t);o=p(e,"View menu"),e.forEach(s),this.h()},h(){f(t,"href",g+"/menu/"),f(t,"class","transition-all bg-orange-400 font-thin text-3xl border-2 border-orange-700 rounded-lg p-2 hover:bg-orange-300")},m(r,e){c(r,t,e),b(t,o)},p:l,d(r){r&&s(t)}}}function A(a){let t;function o(n,i){if(n[0]==="menu")return B;if(n[0]==="book")return v}let r=o(a),e=r&&r(a);return{c(){e&&e.c(),t=u()},l(n){e&&e.l(n),t=u()},m(n,i){e&&e.m(n,i),c(n,t,i)},p(n,[i]){r===(r=o(n))&&e?e.p(n,i):(e&&e.d(1),e=r&&r(n),e&&(e.c(),e.m(t.parentNode,t)))},i:l,o:l,d(n){e&&e.d(n),n&&s(t)}}}function q(a,t,o){let{type:r}=t;return a.$$set=e=>{"type"in e&&o(0,r=e.type)},[r]}class S extends k{constructor(t){super(),y(this,t,q,A,x,{type:0})}}export{S as B};
