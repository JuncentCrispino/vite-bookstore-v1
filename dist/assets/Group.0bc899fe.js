import{r as p,c as O,u as w,j as z,B as P}from"./index.382c3b1a.js";function b(r){return p.exports.Children.toArray(r).filter(Boolean)}const S={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var h=O((r,{spacing:e,position:a,noWrap:t,grow:n,align:i,count:o})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:i||"center",flexWrap:t?"nowrap":"wrap",justifyContent:S[a],gap:r.fn.size({size:e,sizes:r.spacing}),"& > *":{boxSizing:"border-box",maxWidth:n?`calc(${100/o}% - ${r.fn.size({size:e,sizes:r.spacing})-r.fn.size({size:e,sizes:r.spacing})/o}px)`:void 0,flexGrow:n?1:0}}}));const G=h;var j=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(r,e,a)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,N=(r,e)=>{for(var a in e||(e={}))c.call(e,a)&&f(r,a,e[a]);if(s)for(var a of s(e))d.call(e,a)&&f(r,a,e[a]);return r},C=(r,e)=>{var a={};for(var t in r)c.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&s)for(var t of s(r))e.indexOf(t)<0&&d.call(r,t)&&(a[t]=r[t]);return a};const I={position:"left",spacing:"md"},W=p.exports.forwardRef((r,e)=>{const a=w("Group",I,r),{className:t,position:n,align:i,children:o,noWrap:u,grow:x,spacing:g,unstyled:y}=a,_=C(a,["className","position","align","children","noWrap","grow","spacing","unstyled"]),l=b(o),{classes:m,cx:v}=G({align:i,grow:x,noWrap:u,spacing:g,position:n,count:l.length},{unstyled:y,name:"Group"});return z(P,{...N({className:v(m.root,t),ref:e},_),children:l})});W.displayName="@mantine/core/Group";export{W as G,S as a};
