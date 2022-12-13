import"./index-2da221d7.js";function m(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function l(t){const o=t-1;return o*o*o+1}function d(t,{delay:o=0,duration:e=400,easing:a=m,amount:f=5,opacity:i=0}={}){const n=getComputedStyle(t),s=+n.opacity,c=n.filter==="none"?"":n.filter,p=s*(1-i);return{delay:o,duration:e,easing:a,css:(u,r)=>`opacity: ${s-p*r}; filter: ${c} blur(${r*f}px);`}}function g(t,{delay:o=0,duration:e=400,easing:a=l,x:f=0,y:i=0,opacity:n=0}={}){const s=getComputedStyle(t),c=+s.opacity,p=s.transform==="none"?"":s.transform,u=c*(1-n);return{delay:o,duration:e,easing:a,css:(r,y)=>`
			transform: ${p} translate(${(1-r)*f}px, ${(1-r)*i}px);
			opacity: ${c-u*y}`}}function b(t,{delay:o=0,duration:e=400,easing:a=l,start:f=0,opacity:i=0}={}){const n=getComputedStyle(t),s=+n.opacity,c=n.transform==="none"?"":n.transform,p=1-f,u=s*(1-i);return{delay:o,duration:e,easing:a,css:(r,y)=>`
			transform: ${c} scale(${1-p*y});
			opacity: ${s-u*y}
		`}}export{d as b,g as f,b as s};
