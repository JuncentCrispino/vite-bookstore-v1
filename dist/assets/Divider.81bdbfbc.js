import{r as g,c as L,u as N,j as u,B as C,T as $}from"./index.ef387dcc.js";function R(r,e){typeof r=="function"?r(e):typeof r=="object"&&r!==null&&"current"in r&&(r.current=e)}function k(...r){return e=>{r.forEach(o=>R(o,e))}}function H(...r){return g.exports.useCallback(k(...r),r)}const l={xs:1,sm:2,md:3,lg:4,xl:5};function n(r,e){const o=r.fn.variant({variant:"outline",color:e}).border;return typeof e=="string"&&(e in r.colors||e.split(".")[0]in r.colors)?o:e===void 0?r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[4]:e}var E=L((r,{size:e,variant:o,color:a})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:1,borderTop:`${r.fn.size({size:e,sizes:l})}px ${o} ${n(r,a)}`,marginRight:r.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${r.fn.size({size:e,sizes:l})}px ${o} ${n(r,a)}`,marginLeft:r.spacing.xs}},labelDefaultStyles:{color:a==="dark"?r.colors.dark[1]:r.fn.themeColor(a,r.colorScheme==="dark"?5:r.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:r.fn.size({size:e,sizes:l}),borderTopColor:n(r,a),borderTopStyle:o,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:r.fn.size({size:e,sizes:l}),borderLeftColor:n(r,a),borderLeftStyle:o}}));const I=E;var B=Object.defineProperty,W=Object.defineProperties,M=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(r,e,o)=>e in r?B(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,v=(r,e)=>{for(var o in e||(e={}))_.call(e,o)&&y(r,o,e[o]);if(i)for(var o of i(e))x.call(e,o)&&y(r,o,e[o]);return r},V=(r,e)=>W(r,M(e)),q=(r,e)=>{var o={};for(var a in r)_.call(r,a)&&e.indexOf(a)<0&&(o[a]=r[a]);if(r!=null&&i)for(var a of i(r))e.indexOf(a)<0&&x.call(r,a)&&(o[a]=r[a]);return o};const A={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},F=g.exports.forwardRef((r,e)=>{const o=N("Divider",A,r),{className:a,color:P,orientation:f,size:m,label:c,labelPosition:O,labelProps:s,variant:S,styles:z,classNames:w,unstyled:D}=o,h=q(o,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:t,cx:d}=I({color:P,size:m,variant:S},{classNames:w,styles:z,unstyled:D,name:"Divider"}),T=f==="vertical",p=f==="horizontal",b=!!c&&p,j=!(s!=null&&s.color);return u(C,{...v({ref:e,className:d(t.root,{[t.vertical]:T,[t.horizontal]:p,[t.withLabel]:b},a),role:"separator"},h),children:b&&u($,{...V(v({},s),{size:(s==null?void 0:s.size)||"xs",sx:{marginTop:2},className:d(t.label,t[O],{[t.labelDefaultStyles]:j})}),children:c})})});F.displayName="@mantine/core/Divider";export{F as D,R as a,k as m,H as u};
