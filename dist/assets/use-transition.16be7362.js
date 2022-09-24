import{f as D,n as E,r as d,o as I}from"./index.ef387dcc.js";var R=Object.defineProperty,F=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,_=(r,t,o)=>t in r?R(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,i=(r,t)=>{for(var o in t||(t={}))N.call(t,o)&&_(r,o,t[o]);if(w)for(var o of w(t))V.call(t,o)&&_(r,o,t[o]);return r},s=(r,t)=>F(r,k(t));const p={in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(.9) translateY(10px)"},transitionProperty:"transform, opacity"},u={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(-20px) skew(-10deg, -5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(20px) skew(-10deg, -5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(-5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:s(i({},p),{common:{transformOrigin:"center center"}}),"pop-bottom-left":s(i({},p),{common:{transformOrigin:"bottom left"}}),"pop-bottom-right":s(i({},p),{common:{transformOrigin:"bottom right"}}),"pop-top-left":s(i({},p),{common:{transformOrigin:"top left"}}),"pop-top-right":s(i({},p),{common:{transformOrigin:"top right"}})};var C=Object.defineProperty,x=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,v=(r,t,o)=>t in r?C(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,e=(r,t)=>{for(var o in t||(t={}))H.call(t,o)&&v(r,o,t[o]);if(x)for(var o of x(t))U.call(t,o)&&v(r,o,t[o]);return r};const Y={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function z({transition:r,state:t,duration:o,timingFunction:a}){const c={transitionDuration:`${o}ms`,transitionTimingFunction:a};return typeof r=="string"?r in u?e(e(e({transitionProperty:u[r].transitionProperty},c),u[r].common),u[r][Y[t]]):null:e(e(e({transitionProperty:r.transitionProperty},c),r.common),r[Y[t]])}function A({duration:r,exitDuration:t,timingFunction:o,mounted:a,onEnter:c,onExit:b,onEntered:h,onExited:T}){const O=D(),S=E(),P=O.respectReducedMotion?S:!1,[$,m]=d.exports.useState(a?"entered":"exited");let f=P?0:r;const g=d.exports.useRef(-1),j=n=>{const y=n?c:b,l=n?h:T;if(m(n?"pre-entering":"pre-exiting"),window.clearTimeout(g.current),f=P?0:n?r:t,f===0)typeof y=="function"&&y(),typeof l=="function"&&l(),m(n?"entered":"exited");else{const X=window.setTimeout(()=>{typeof y=="function"&&y(),m(n?"entering":"exiting")},10);g.current=window.setTimeout(()=>{window.clearTimeout(X),typeof l=="function"&&l(),m(n?"entered":"exited")},f)}};return I(()=>{j(a)},[a]),d.exports.useEffect(()=>()=>window.clearTimeout(g.current),[]),{transitionDuration:f,transitionStatus:$,transitionTimingFunction:o||O.transitionTimingFunction}}export{z as g,A as u};
