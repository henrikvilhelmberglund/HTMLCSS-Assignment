import{S as X,i as Z,s as U,k as v,w as M,a as C,q as H,l as D,m as P,x as T,c as L,h as _,r as O,I as q,n as d,b as E,y as V,H as g,u as W,f as I,t as j,z as B,d as x,M as ae,L as se,g as ee,B as R,e as z,U as le,V as ne,W as re,O as ie,P as ce,Q as oe}from"../../../../chunks/index-212e9e89.js";import{P as N}from"../../../../chunks/P-493ba2bc.js";import{H as te}from"../../../../chunks/H-ab4df4d8.js";import{b as S}from"../../../../chunks/paths-6cd3a76e.js";import{s as F}from"../../../../chunks/index-9541bd77.js";function ue(s){let t;return{c(){t=H(s[0])},l(e){t=O(e,s[0])},m(e,l){E(e,t,l)},p(e,l){l&1&&W(t,e[0])},d(e){e&&_(t)}}}function fe(s){let t;return{c(){t=H(s[3])},l(e){t=O(e,s[3])},m(e,l){E(e,t,l)},p(e,l){l&8&&W(t,e[3])},d(e){e&&_(t)}}}function me(s){let t;return{c(){t=H(s[5])},l(e){t=O(e,s[5])},m(e,l){E(e,t,l)},p(e,l){l&32&&W(t,e[5])},d(e){e&&_(t)}}}function de(s){let t,e,l,n,o,u,h,r,i,f,b,m,A,p,w;return e=new te({props:{type:"h2",_class:"text-center",$$slots:{default:[ue]},$$scope:{ctx:s}}}),r=new N({props:{type:"employee",_class:"text-lg font-bold",$$slots:{default:[fe]},$$scope:{ctx:s}}}),p=new N({props:{type:"employee",class:"",$$slots:{default:[me]},$$scope:{ctx:s}}}),{c(){t=v("article"),M(e.$$.fragment),l=C(),n=v("figure"),o=v("img"),h=C(),M(r.$$.fragment),i=C(),f=v("a"),b=H(s[4]),A=C(),M(p.$$.fragment),this.h()},l(a){t=D(a,"ARTICLE",{class:!0});var c=P(t);T(e.$$.fragment,c),l=L(c),n=D(c,"FIGURE",{});var k=P(n);o=D(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(_),h=L(c),T(r.$$.fragment,c),i=L(c),f=D(c,"A",{href:!0,class:!0});var $=P(f);b=O($,s[4]),$.forEach(_),A=L(c),T(p.$$.fragment,c),c.forEach(_),this.h()},h(){q(o.src,u=""+(S+s[1]))||d(o,"src",u),d(o,"alt",s[2]),d(o,"class","w-[80vw] rounded-3xl border-4 border-solid border-black shadow-xl md:w-[20vw]"),d(f,"href",m="mailto:"+s[4]),d(f,"class","cursor-pointer p-1 text-blue-800 underline dark:text-sky-300"),d(t,"class","m-2 flex flex-col items-center rounded bg-emerald-300 shadow-xl dark:bg-emerald-900 dark:text-emerald-100")},m(a,c){E(a,t,c),V(e,t,null),g(t,l),g(t,n),g(n,o),g(t,h),V(r,t,null),g(t,i),g(t,f),g(f,b),g(t,A),V(p,t,null),w=!0},p(a,[c]){const k={};c&65&&(k.$$scope={dirty:c,ctx:a}),e.$set(k),(!w||c&2&&!q(o.src,u=""+(S+a[1])))&&d(o,"src",u),(!w||c&4)&&d(o,"alt",a[2]);const $={};c&72&&($.$$scope={dirty:c,ctx:a}),r.$set($),(!w||c&16)&&W(b,a[4]),(!w||c&16&&m!==(m="mailto:"+a[4]))&&d(f,"href",m);const G={};c&96&&(G.$$scope={dirty:c,ctx:a}),p.$set(G)},i(a){w||(I(e.$$.fragment,a),I(r.$$.fragment,a),I(p.$$.fragment,a),w=!0)},o(a){j(e.$$.fragment,a),j(r.$$.fragment,a),j(p.$$.fragment,a),w=!1},d(a){a&&_(t),B(e),B(r),B(p)}}}function _e(s,t,e){let{name:l}=t,{src:n}=t,{alt:o}=t,{role:u}=t,{email:h}=t,{desc:r}=t;return s.$$set=i=>{"name"in i&&e(0,l=i.name),"src"in i&&e(1,n=i.src),"alt"in i&&e(2,o=i.alt),"role"in i&&e(3,u=i.role),"email"in i&&e(4,h=i.email),"desc"in i&&e(5,r=i.desc)},[l,n,o,u,h,r]}class he extends X{constructor(t){super(),Z(this,t,_e,de,U,{name:0,src:1,alt:2,role:3,email:4,desc:5})}}function Q(s,t,e){const l=s.slice();return l[4]=t[e],l[6]=e,l}function pe(s){let t;return{c(){t=H("Employees")},l(e){t=O(e,"Employees")},m(e,l){E(e,t,l)},d(e){e&&_(t)}}}function ge(s){let t;return{c(){t=H("Tap an employee to view their information.")},l(e){t=O(e,"Tap an employee to view their information.")},m(e,l){E(e,t,l)},d(e){e&&_(t)}}}function J(s){let t,e,l,n,o,u,h,r;return{c(){t=v("label"),e=v("input"),l=C(),n=v("img"),u=C(),this.h()},l(i){t=D(i,"LABEL",{for:!0});var f=P(t);e=D(f,"INPUT",{class:!0,type:!0,name:!0,id:!0}),l=L(f),n=D(f,"IMG",{src:!0,alt:!0,class:!0}),u=L(f),f.forEach(_),this.h()},h(){d(e,"class","absolute h-0 w-0 opacity-0"),d(e,"type","radio"),d(e,"name","employees"),d(e,"id","employee"+s[6]),e.__value=s[6],e.value=e.__value,s[3][0].push(e),q(n.src,o=""+(S+s[4].src))||d(n,"src",o),d(n,"alt",s[4].alt),d(n,"class","w-24 rounded-full p-0.5 "),d(t,"for","employee"+s[6])},m(i,f){E(i,t,f),g(t,e),e.checked=e.__value===s[0],g(t,l),g(t,n),g(t,u),h||(r=se(e,"change",s[2]),h=!0)},p(i,f){f&1&&(e.checked=e.__value===i[0])},d(i){i&&_(t),s[3][0].splice(s[3][0].indexOf(e),1),h=!1,r()}}}function ke(s){let t;return{c(){t=v("div"),this.h()},l(e){t=D(e,"DIV",{class:!0}),P(t).forEach(_),this.h()},h(){d(t,"class","h-[37.4vh]")},m(e,l){E(e,t,l)},p:R,i:R,o:R,d(e){e&&_(t)}}}function $e(s){let t=s[0],e,l,n=K(s);return{c(){n.c(),e=z()},l(o){n.l(o),e=z()},m(o,u){n.m(o,u),E(o,e,u),l=!0},p(o,u){u&1&&U(t,t=o[0])?(ee(),j(n,1,1,R),x(),n=K(o),n.c(),I(n,1),n.m(e.parentNode,e)):n.p(o,u)},i(o){l||(I(n),l=!0)},o(o){j(n),l=!1},d(o){o&&_(e),n.d(o)}}}function K(s){let t,e,l,n,o;const u=[s[1][s[0]]];let h={};for(let r=0;r<u.length;r+=1)h=le(h,u[r]);return e=new he({props:h}),{c(){t=v("div"),M(e.$$.fragment),this.h()},l(r){t=D(r,"DIV",{class:!0});var i=P(t);T(e.$$.fragment,i),i.forEach(_),this.h()},h(){d(t,"class","transition-wrapper")},m(r,i){E(r,t,i),V(e,t,null),o=!0},p(r,i){const f=i&3?ne(u,[re(r[1][r[0]])]):{};e.$set(f)},i(r){o||(I(e.$$.fragment,r),ie(()=>{n&&n.end(1),l=ce(t,F,{y:-5,duration:200,delay:200}),l.start()}),o=!0)},o(r){j(e.$$.fragment,r),l&&l.invalidate(),n=oe(t,F,{y:5,duration:200}),o=!1},d(r){r&&_(t),B(e),r&&n&&n.end()}}}function ye(s){let t,e,l,n,o,u,h,r,i,f;e=new te({props:{type:"h1",$$slots:{default:[pe]},$$scope:{ctx:s}}}),n=new N({props:{type:"menu",_class:"w-full",$$slots:{default:[ge]},$$scope:{ctx:s}}});let b=s[1],m=[];for(let a=0;a<b.length;a+=1)m[a]=J(Q(s,b,a));const A=[$e,ke],p=[];function w(a,c){return a[0]!==void 0?0:1}return r=w(s),i=p[r]=A[r](s),{c(){t=v("main"),M(e.$$.fragment),l=C(),M(n.$$.fragment),o=C(),u=v("div");for(let a=0;a<m.length;a+=1)m[a].c();h=C(),i.c(),this.h()},l(a){t=D(a,"MAIN",{class:!0});var c=P(t);T(e.$$.fragment,c),l=L(c),T(n.$$.fragment,c),o=L(c),u=D(c,"DIV",{class:!0});var k=P(u);for(let $=0;$<m.length;$+=1)m[$].l(k);k.forEach(_),h=L(c),i.l(c),c.forEach(_),this.h()},h(){d(u,"class","flex flex-row"),d(t,"class","flex flex-col items-center justify-between")},m(a,c){E(a,t,c),V(e,t,null),g(t,l),V(n,t,null),g(t,o),g(t,u);for(let k=0;k<m.length;k+=1)m[k].m(u,null);g(t,h),p[r].m(t,null),f=!0},p(a,[c]){const k={};c&128&&(k.$$scope={dirty:c,ctx:a}),e.$set(k);const $={};if(c&128&&($.$$scope={dirty:c,ctx:a}),n.$set($),c&3){b=a[1];let y;for(y=0;y<b.length;y+=1){const Y=Q(a,b,y);m[y]?m[y].p(Y,c):(m[y]=J(Y),m[y].c(),m[y].m(u,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=b.length}let G=r;r=w(a),r===G?p[r].p(a,c):(ee(),j(p[G],1,1,()=>{p[G]=null}),x(),i=p[r],i?i.p(a,c):(i=p[r]=A[r](a),i.c()),I(i,1),i.m(t,null))},i(a){f||(I(e.$$.fragment,a),I(n.$$.fragment,a),I(i),f=!0)},o(a){j(e.$$.fragment,a),j(n.$$.fragment,a),j(i),f=!1},d(a){a&&_(t),B(e),B(n),ae(m,a),p[r].d()}}}function be(s,t,e){let l,n=[{name:"Yellow Duck",src:"/images/ducks/duck_0.jpg",alt:"yellow duck",role:"Systems Administrator",email:"yellow.duck@ankademincafe.se",desc:"Yellow Duck is our digital expert and handles the digital systems such as booking times."},{name:"White Duck",src:"/images/ducks/duck_1.jpg",alt:"white duck",role:"Cashier",email:"white.duck@ankademincafe.se",desc:"White Duck loves money and thus handles payment, both hourly payment and payment for food and drinks."},{name:"Green Duck",src:"/images/ducks/duck_2.jpg",alt:"green duck",role:"Waiter",email:"green.duck@ankademincafe.se",desc:"Green Duck is our 5 star rated waiter who has never broken any dishes."},{name:"Lady Duck",src:"/images/ducks/duck_3.jpg",alt:"lady duck",role:"Duck Trainer",email:"lady.duck@ankademincafe.se",desc:"Lady Duck takes great care of our many ducks and makes sure they don't bite our customers by training them."},{name:"Darkwing Duck",src:"/images/ducks/duck_4.jpg",alt:"duck with dark wings",role:"Chef",email:"darkwing.duck@ankademincafe.se",desc:"Darkwing Duck is a comic fan and is responsible for our delicious food, drinks and duck feed."},{name:"Big Duck",src:"/images/ducks/duck_5.jpg",alt:"big duck",role:"PR Manager",email:"big.duck@ankademincafe.se",desc:"Big Duck handles our PR and social media and is a big part of why we're successful today."},{name:"Happy Duck",src:"/images/ducks/duck_6.jpg",alt:"happy duck",role:"CEO",email:"happy.duck@ankademincafe.se",desc:"Happy Duck is our CEO with an infectious smile often seen in the cafe treating guests."}];const o=[[]];function u(){l=this.__value,e(0,l)}return[l,n,u,o]}class je extends X{constructor(t){super(),Z(this,t,be,ye,U,{})}}export{je as default};
