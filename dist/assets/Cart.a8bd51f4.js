import{j as r,c as Ee,r as s,u as Le,a as i,w as M,s as xe,d as Ue,b as je,o as Ce,P as $e}from"./index.382c3b1a.js";import{P as Ve,m as ye}from"./Page.d65271c7.js";import{B as J}from"./Button.9f796692.js";import{T as v}from"./TextInput.8217711a.js";import{a as He,u as Ke,D as _e}from"./Divider.559a9842.js";import{S as ve}from"./Stepper.6376e4e7.js";import{G as We}from"./Group.0bc899fe.js";import"./Transition.32526743.js";function be(e,n,a){return Math.min(Math.max(e,n),a)}function Ze(){const{userAgent:e}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,a=/(Win32)|(Win64)|(Windows)|(WinCE)/i,d=/(iPhone)|(iPad)|(iPod)/i;return n.test(e)?"macos":d.test(e)?"ios":a.test(e)?"windows":/Android/i.test(e)?"android":/Linux/i.test(e)?"linux":"undetermined"}function Qe(){return typeof window<"u"?Ze():"undetermined"}const Je=(e,n,a)=>Number.isInteger(e)&&e>=0&&n===0?"numeric":!Number.isInteger(e)&&e>=0&&n!==0?"decimal":Number.isInteger(e)&&e<0&&n===0||!Number.isInteger(e)&&e<0&&n!==0?a==="ios"?"text":"decimal":"numeric";function Ie({direction:e,size:n}){return r("svg",{style:{transform:e==="up"?"rotate(180deg)":void 0},width:n,height:n,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}const Fe={xs:20,sm:24,md:30,lg:34,xl:36};var Ge=Ee((e,{radius:n,size:a})=>({rightSection:{display:"flex",flexDirection:"column",height:"calc(100% - 2px)",margin:1,marginRight:1,overflow:"hidden",borderTopRightRadius:e.fn.radius(n),borderBottomRightRadius:e.fn.radius(n)},control:{margin:0,position:"relative",flex:"0 0 50%",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:e.fn.size({size:a,sizes:Fe}),padding:0,WebkitTapHighlightColor:"transparent",borderBottom:`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,borderLeft:`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,borderTop:0,borderRight:0,backgroundColor:"transparent",marginRight:1,color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,"&:not(:disabled):hover":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[5]:e.colors.gray[0]},"&:disabled":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[4]}},controlUp:{},controlDown:{borderBottom:0}}));const Xe=Ge;var Ye=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,Pe=(e,n,a)=>n in e?Ye(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,rt=(e,n)=>{for(var a in n||(n={}))Be.call(n,a)&&Pe(e,a,n[a]);if(ie)for(var a of ie(n))Oe.call(n,a)&&Pe(e,a,n[a]);return e},ot=(e,n)=>et(e,tt(n)),nt=(e,n)=>{var a={};for(var d in e)Be.call(e,d)&&n.indexOf(d)<0&&(a[d]=e[d]);if(e!=null&&ie)for(var d of ie(e))n.indexOf(d)<0&&Oe.call(e,d)&&(a[d]=e[d]);return a};const at=e=>e||"",it=e=>{if(e==="-")return e;let n=e;n[0]==="."&&(n=`0${e}`);const a=parseFloat(n);if(!Number.isNaN(a))return e},Re={xs:10,sm:14,md:16,lg:18,xl:20},st={step:1,hideControls:!1,size:"sm",precision:0,noClampOnBlur:!1,removeTrailingZeros:!1,formatter:at,parser:it,type:"text"},Te=s.exports.forwardRef((e,n)=>{const a=Le("NumberInput",st,e),{disabled:d,value:f,onChange:R,decimalSeparator:N,min:g,max:l,startValue:y,step:T,stepHoldInterval:P,stepHoldDelay:A,onBlur:_,onFocus:G,onKeyDown:E,onKeyUp:X,hideControls:L,radius:Y,variant:k,precision:u,removeTrailingZeros:U,defaultValue:j,noClampOnBlur:$,handlersRef:se,classNames:D,styles:le,size:w,rightSection:V,rightSectionWidth:ee,formatter:S,parser:H,inputMode:ce,unstyled:te,type:K}=a,de=nt(a,["disabled","value","onChange","decimalSeparator","min","max","startValue","step","stepHoldInterval","stepHoldDelay","onBlur","onFocus","onKeyDown","onKeyUp","hideControls","radius","variant","precision","removeTrailingZeros","defaultValue","noClampOnBlur","handlersRef","classNames","styles","size","rightSection","rightSectionWidth","formatter","parser","inputMode","unstyled","type"]),{classes:F,cx:re,theme:B}=Xe({radius:Y,size:w},{classNames:D,styles:le,unstyled:te,name:"NumberInput"}),[W,Z]=s.exports.useState(!1),[C,q]=s.exports.useState(typeof f=="number"?f:typeof j=="number"?j:void 0),I=typeof f=="number"?f:C,[oe,m]=s.exports.useState(typeof I=="number"?I.toFixed(u):""),t=s.exports.useRef(),h=o=>{o!==C&&!Number.isNaN(o)&&(typeof R=="function"&&R(o),q(o))},b=(o="")=>{let c=typeof o=="number"?String(o):o;return N&&(c=c.replace(/\./g,N)),S(c)},Ne=o=>{let c=o;return N&&(c=c.replace(new RegExp(`\\${N}`,"g"),".")),H(c)},ue=typeof g=="number"?g:-1/0,pe=typeof l=="number"?l:1/0,me=s.exports.useRef();me.current=()=>{var o,c,p;if(C===void 0)h((o=y!=null?y:g)!=null?o:0),m((p=(c=y==null?void 0:y.toFixed(u))!=null?c:g==null?void 0:g.toFixed(u))!=null?p:"0");else{const x=be(C+T,ue,pe).toFixed(u);h(parseFloat(x)),m(x)}};const fe=s.exports.useRef();fe.current=()=>{var o,c,p;if(C===void 0)h((o=y!=null?y:g)!=null?o:0),m((p=(c=y==null?void 0:y.toFixed(u))!=null?c:g==null?void 0:g.toFixed(u))!=null?p:"0");else{const x=be(C-T,ue,pe).toFixed(u);h(parseFloat(x)),m(x)}},He(se,{increment:me.current,decrement:fe.current}),s.exports.useEffect(()=>{typeof f=="number"&&!W&&(q(f),m(f.toFixed(u))),j===void 0&&f===void 0&&!W&&(q(f),m(""))},[f]);const ge=A!==void 0&&P!==void 0,Q=s.exports.useRef(null),he=s.exports.useRef(0),O=()=>{Q.current&&window.clearTimeout(Q.current),Q.current=null,he.current=0},Se=o=>{o?me.current():fe.current(),he.current+=1},we=o=>{if(Se(o),ge){const c=typeof P=="number"?P:P(he.current);Q.current=window.setTimeout(()=>we(o),c)}},ne=(o,c)=>{o.preventDefault(),t.current.focus(),Se(c),ge&&(Q.current=window.setTimeout(()=>we(c),A))};s.exports.useEffect(()=>(O(),O),[]);const ke=i("div",{className:F.rightSection,children:[r("button",{type:"button",tabIndex:-1,"aria-hidden":!0,disabled:I>=l,className:re(F.control,F.controlUp),onPointerDown:o=>{ne(o,!0)},onPointerUp:O,onPointerLeave:O,children:r(Ie,{size:B.fn.size({size:w,sizes:Re}),direction:"up"})}),r("button",{type:"button",tabIndex:-1,"aria-hidden":!0,disabled:I<=g,className:re(F.control,F.controlDown),onPointerDown:o=>{ne(o,!1)},onPointerUp:O,onPointerLeave:O,children:r(Ie,{size:B.fn.size({size:w,sizes:Re}),direction:"down"})})]}),De=o=>{if(o.nativeEvent.isComposing)return;const p=o.target.value,x=Ne(p);m(x),p===""||p==="-"?h(void 0):p.trim()!==""&&!Number.isNaN(x)&&h(parseFloat(x))},qe=o=>{var c;if(o.target.value==="")m(""),h(void 0);else{let p=o.target.value;(p[0]===`${N}`||p[0]===".")&&(p=`0${p}`);const x=Ne(p),ae=be(parseFloat(x),ue,pe);if(Number.isNaN(ae))m((c=I==null?void 0:I.toFixed(u))!=null?c:"");else if(!$)if(U){const z=ae.toFixed(u).replace(new RegExp(`[0]{0,${u}}$`),"");z.endsWith(N)||z.endsWith(".")?(m(z.slice(0,-1)),h(parseFloat(z.slice(0,-1)))):(m(z),h(parseFloat(z)))}else m(ae.toFixed(u)),h(parseFloat(ae.toFixed(u)))}Z(!1),typeof _=="function"&&_(o)},ze=o=>{Z(!0),typeof G=="function"&&G(o)},Me=o=>{if(typeof E=="function"&&E(o),o.repeat&&ge&&(o.key==="ArrowUp"||o.key==="ArrowDown")){o.preventDefault();return}o.key==="ArrowUp"?ne(o,!0):o.key==="ArrowDown"&&ne(o,!1)},Ae=o=>{typeof X=="function"&&X(o),(o.key==="ArrowUp"||o.key==="ArrowDown")&&O()};return r(v,{...ot(rt({},de),{type:K,variant:k,value:b(oe),disabled:d,ref:Ke(t,n),onChange:De,onBlur:qe,onFocus:ze,onKeyDown:Me,onKeyUp:Ae,rightSection:V||(d||L||k==="unstyled"?null:ke),rightSectionWidth:ee||B.fn.size({size:w,sizes:Fe})+1,radius:Y,max:l,min:g,step:T,size:w,styles:le,classNames:D,inputMode:ce||Je(T,u,Qe()),__staticSelector:"NumberInput",unstyled:te})})});Te.displayName="@mantine/core/NumberInput";function lt({book:e}){const n=M(l=>l.addItemQty),a=M(l=>l.subtractQty),d=M(l=>l.inputQty),f=M(l=>l.removeFromCart),R=l=>n(l),N=l=>parseInt(l.qty)>1?a(l):(xe({title:"Removed",message:"Item successfully removed on your cart.",color:"green"}),f(l)),g=(l,y)=>d(l,y);return i("div",{children:[i("div",{className:"grid grid-cols-4 place-items-center",children:[r("div",{className:"col-span-1 w-[70%]",children:r("img",{src:e.thumbnail,alt:e.title})}),i("div",{className:"col-span-1 block",children:[r("p",{className:"text-center font-semibold",children:e.title}),r("p",{className:"text-center text-sm",children:e.authors})]}),i("p",{className:"font-semibold",children:["\u20B1 ",e.price]}),i("div",{className:"col-span-1 grid grid-cols-3 place-items-center",children:[r(J,{size:"xs",className:"text-2xl bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all",onClick:()=>N(e),children:"-"}),r(Te,{size:"xs",className:"",value:e.qty,hideControls:!0,onChange:l=>g(e,l)}),r(J,{size:"xs",className:"text-lg bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all",onClick:()=>R(e),children:"+"})]})]}),r(_e,{my:"sm"})]})}function yt(){var W,Z,C,q,I,oe,m;const e=Ue(t=>t.user),n=M(t=>t.cart),a=M(t=>t.emptyCart),[d,f]=s.exports.useState((e==null?void 0:e.firstName)||""),[R,N]=s.exports.useState((e==null?void 0:e.lastName)||""),[g,l]=s.exports.useState((e==null?void 0:e.middleName)||""),[y,T]=s.exports.useState((e==null?void 0:e.email)||""),[P,A]=s.exports.useState((e==null?void 0:e.mobileNo)||""),[_,G]=s.exports.useState(((W=e==null?void 0:e.address)==null?void 0:W.houseNo)||((Z=e==null?void 0:e.address)==null?void 0:Z.unit)||""),[E,X]=s.exports.useState(((C=e==null?void 0:e.address)==null?void 0:C.building)||""),[L,Y]=s.exports.useState(((q=e==null?void 0:e.address)==null?void 0:q.street)||""),[k,u]=s.exports.useState(((I=e==null?void 0:e.address)==null?void 0:I.barangay)||""),[U,j]=s.exports.useState(((oe=e==null?void 0:e.address)==null?void 0:oe.city)||""),[$,se]=s.exports.useState(((m=e==null?void 0:e.address)==null?void 0:m.region)||""),[D,le]=s.exports.useState(100),[w,V]=s.exports.useState(0),[ee,S]=s.exports.useState();s.exports.useState(!1);const H=je(),ce=()=>V(t=>t<1?t+1:t),te=()=>V(t=>t>0?t-1:t),K=s.exports.useMemo(()=>n.map(t=>t.price*t.qty).reduce((t,h)=>t+h,0),[n]),de=async()=>(await(await fetch("https://store.centapps.online/v1/order",{method:"POST",headers:{"Content-Type":"Application/json",Authorization:`Bearer ${localStorage.getItem("accessToken")}`},body:JSON.stringify({orderItems:n.map(b=>({productId:b._id,productName:b.title,price:b.price,qty:b.qty}))})})).json()).id,F=async t=>(await fetch(`https://store.centapps.online/v1/order/${t.orderID}/capture`,{method:"POST",headers:{"Content-Type":"Application/json",Authorization:`Bearer ${localStorage.getItem("accessToken")}`},body:JSON.stringify({user:{firstName:e.firstName,lastName:e.lastName,middleName:e.middleName,email:e.email,mobileNo:P},shippingAddress:{unit:_,building:E,houseNo:_,street:L,barangay:k,city:U,region:$},orderItems:n.map(b=>({productId:b._id,productName:b.title,price:b.price,qty:b.qty})),deliveryFee:D,isPaid:!0,deliveryStatus:"pending",paypalOrderId:t.orderID})})).status===200?(a(),xe({title:"Success",message:"Placed Order Successfully.",color:"green"})):xe({title:"Error",message:"Sorry! Transaction failed.",color:"red"}),re=t=>{if(t.preventDefault(),!d)return S("First name is required.");if(!R)return S("Last name is required.");if(!y)return S("Email is required.");if(!P)return A("Mobile No is required.");if(!_)return S("Block/Lot/House/Unit Number is required.");if(!L)return S("Street is required.");if(!k)return S("Barangay is required.");if(!U)return S("Barangay is required");if(!$)return S("Region is Required");ce()},B="bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all";return i(Ve,{children:[r("div",{className:"grid place-items-center pt-24 max-w-4xl mx-auto px-4",children:i("div",{className:"max-h-100  place-items-center w-full rounded-lg bg-primary shadow-sm p-5",children:[r("p",{className:"text-center font-bold text-2xl text-red-600",children:"Cart"}),n.length<1?i("p",{className:"p-10 text-md",children:["There are no items in your cart, ",r("button",{className:"font-bold text-red-600",onClick:()=>H("/products"),children:"Click here to shop."})]}):i("form",{onSubmit:re,children:[i(ve,{active:w,onStepClick:V,breakpoint:"sm",size:"sm",color:"green",children:[r(ve.Step,{label:"Shipping",description:"Review Shipping Information",children:e?i(ye.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[i("div",{className:"grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1",children:[r(v,{placeholder:"John",label:"First Name",required:!0,value:d,onChange:t=>f(t.target.value)}),r(v,{placeholder:"Doe",label:"Last Name",required:!0,value:R,onChange:t=>N(t.target.value)}),r(v,{placeholder:"A",label:"Middle Name",value:g,onChange:t=>l(t.target.value)}),r(v,{placeholder:"john@example.com",type:"email",label:"Email",required:!0,value:y,onChange:t=>T(t.target.value)}),r(v,{placeholder:"09123456789",label:"Mobile Number",required:!0,value:P,onChange:t=>A(t.target.value)})]}),r(_e,{my:"xl"}),i("div",{className:"grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1",children:[r(v,{placeholder:"01H",label:"Block/Lot/House/Unit Number",required:!0,value:_,onChange:t=>G(t.target.value)}),r(v,{placeholder:"Green Residences",label:"Building",value:E,onChange:t=>X(t.target.value)}),r(v,{placeholder:"Taft",label:"Street",required:!0,value:L,onChange:t=>Y(t.target.value)}),r(v,{placeholder:"San Juan",label:"Barangay",required:!0,value:k,onChange:t=>u(t.target.value)}),r(v,{placeholder:"Manila",label:"City",required:!0,value:U,onChange:t=>j(t.target.value)}),r(v,{placeholder:"NCR",label:"Region",required:!0,value:$,onChange:t=>se(t.target.value)})]})]}):i("p",{children:["Please Login ",r("button",{className:"font-bold text-red-600",onClick:()=>H("/auth/login"),children:"here"})," to Review Shipping Information"]})}),r(ve.Step,{label:"Products",description:"Review Products Information",children:r(ye.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i("div",{className:"grid lg:grid-cols-3 gap-5 lg:w-full",children:[i("div",{className:"lg:col-span-2 md:col-span-3",children:[n.length>0&&r(Ce,{children:n.map(t=>r(lt,{book:t},t._id))}),i("div",{className:"font-semibold flex justify-between",children:[r("p",{children:"SubTotal"}),i("p",{children:["\u20B1 ",K]})]})]}),i("div",{className:"lg:col-span-1 md:col-span-3 m-5 grid",children:[r("div",{children:i("div",{className:"grid grid-cols-2",children:[r("p",{className:"pb-5",children:"Item Amount"}),i("p",{className:"font-semibold text-right pb-5",children:["\u20B1 ",K]}),r("p",{children:"Shipping Cost"}),i("p",{className:"font-semibold text-right",children:["\u20B1 ",D]})]})}),i("div",{className:"grid place-content-end ",children:[i("div",{className:"grid grid-cols-2 pb-5",children:[r("p",{children:"Total Amount"}),i("p",{className:"font-semibold text-right",children:["\u20B1 ",K+D]})]}),e?r($e,{style:{layout:"vertical"},createOrder:de,onApprove:F}):r(J,{onClick:()=>H("/auth/login"),className:B,children:"Login"})]})]})]})})})]}),e&&r("p",{className:"text-xs text-red-600",children:ee&&ee}),i(We,{position:"right",mt:"xl",children:[w>0&&r(J,{onClick:te,className:B,children:"Back"}),e&&r(Ce,{children:w===0&&r(J,{className:B,type:"submit",children:"Next"})})]})]})]})}),r(ye.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:r("div",{className:"grid place-items-center max-w-4xl mx-auto px-4 py-5",children:i("div",{className:"place-items-center w-full rounded-lg bg-primary shadow-sm p-5",children:[r("p",{className:"text-[18px]",children:"Please use this payplal test account upon chekout :"}),i("p",{children:["Email: ",r("span",{className:"font-semibold",children:"sb-xhw6a20741718@personal.example.com"})]}),i("p",{children:["Password: ",r("span",{className:"font-semibold",children:"rU?6KF0_"})]})]})})})]})}export{yt as default};
