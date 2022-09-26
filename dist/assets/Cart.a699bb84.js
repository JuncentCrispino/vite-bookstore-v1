import{j as t,c as ze,r as s,u as Me,a as i,w as A,s as ve,d as Ae,b as Ee,o as Ne,P as Le}from"./index.e4b6cb91.js";import{P as Ue,m as ge}from"./Page.6d650e24.js";import{B as J}from"./Button.3e0398fc.js";import{T as v}from"./TextInput.e60aa5c2.js";import{a as je,u as Ve,D as Ie}from"./Divider.4f9f2eb0.js";import{S as he}from"./Stepper.edffef48.js";import{G as $e}from"./Group.68fa940a.js";import"./Transition.03576056.js";function ye(e,n,a){return Math.min(Math.max(e,n),a)}function He(){const{userAgent:e}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,a=/(Win32)|(Win64)|(Windows)|(WinCE)/i,d=/(iPhone)|(iPad)|(iPod)/i;return n.test(e)?"macos":d.test(e)?"ios":a.test(e)?"windows":/Android/i.test(e)?"android":/Linux/i.test(e)?"linux":"undetermined"}function Ke(){return typeof window<"u"?He():"undetermined"}const We=(e,n,a)=>Number.isInteger(e)&&e>=0&&n===0?"numeric":!Number.isInteger(e)&&e>=0&&n!==0?"decimal":Number.isInteger(e)&&e<0&&n===0||!Number.isInteger(e)&&e<0&&n!==0?a==="ios"?"text":"decimal":"numeric";function Se({direction:e,size:n}){return t("svg",{style:{transform:e==="up"?"rotate(180deg)":void 0},width:n,height:n,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}const Pe={xs:20,sm:24,md:30,lg:34,xl:36};var Qe=ze((e,{radius:n,size:a})=>({rightSection:{display:"flex",flexDirection:"column",height:"calc(100% - 2px)",margin:1,marginRight:1,overflow:"hidden",borderTopRightRadius:e.fn.radius(n),borderBottomRightRadius:e.fn.radius(n)},control:{margin:0,position:"relative",flex:"0 0 50%",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:e.fn.size({size:a,sizes:Pe}),padding:0,WebkitTapHighlightColor:"transparent",borderBottom:`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,borderLeft:`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,borderTop:0,borderRight:0,backgroundColor:"transparent",marginRight:1,color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,"&:not(:disabled):hover":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[5]:e.colors.gray[0]},"&:disabled":{color:e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[4]}},controlUp:{},controlDown:{borderBottom:0}}));const Je=Qe;var Ge=Object.defineProperty,Ze=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,we=(e,n,a)=>n in e?Ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,Ye=(e,n)=>{for(var a in n||(n={}))_e.call(n,a)&&we(e,a,n[a]);if(ie)for(var a of ie(n))Re.call(n,a)&&we(e,a,n[a]);return e},et=(e,n)=>Ze(e,Xe(n)),tt=(e,n)=>{var a={};for(var d in e)_e.call(e,d)&&n.indexOf(d)<0&&(a[d]=e[d]);if(e!=null&&ie)for(var d of ie(e))n.indexOf(d)<0&&Re.call(e,d)&&(a[d]=e[d]);return a};const rt=e=>e||"",ot=e=>{if(e==="-")return e;let n=e;n[0]==="."&&(n=`0${e}`);const a=parseFloat(n);if(!Number.isNaN(a))return e},Ce={xs:10,sm:14,md:16,lg:18,xl:20},nt={step:1,hideControls:!1,size:"sm",precision:0,noClampOnBlur:!1,formatter:rt,parser:ot},Be=s.exports.forwardRef((e,n)=>{const a=Me("NumberInput",nt,e),{disabled:d,value:p,onChange:_,decimalSeparator:S,min:m,max:l,startValue:g,step:O,stepHoldInterval:P,stepHoldDelay:E,onBlur:R,onFocus:G,onKeyDown:L,onKeyUp:Z,hideControls:U,radius:X,variant:k,precision:f,defaultValue:B,noClampOnBlur:se,handlersRef:j,classNames:Y,styles:D,size:q,rightSection:V,rightSectionWidth:$,formatter:ee,parser:N,inputMode:H,unstyled:te}=a,le=tt(a,["disabled","value","onChange","decimalSeparator","min","max","startValue","step","stepHoldInterval","stepHoldDelay","onBlur","onFocus","onKeyDown","onKeyUp","hideControls","radius","variant","precision","defaultValue","noClampOnBlur","handlersRef","classNames","styles","size","rightSection","rightSectionWidth","formatter","parser","inputMode","unstyled"]),{classes:w,cx:re,theme:K}=Je({radius:X,size:q},{classNames:Y,styles:D,unstyled:te,name:"NumberInput"}),[oe,T]=s.exports.useState(!1),[C,z]=s.exports.useState(typeof p=="number"?p:typeof B=="number"?B:void 0),I=typeof p=="number"?p:C,[ne,h]=s.exports.useState(typeof I=="number"?I.toFixed(f):""),W=s.exports.useRef(),b=o=>{o!==C&&!Number.isNaN(o)&&(typeof _=="function"&&_(o),z(o))},r=(o="")=>{let c=typeof o=="number"?String(o):o;return S&&(c=c.replace(/\./g,S)),ee(c)},M=o=>{let c=o;return S&&(c=c.replace(new RegExp(`\\${S}`,"g"),".")),N(c)},y=typeof m=="number"?m:-1/0,ce=typeof l=="number"?l:1/0,de=s.exports.useRef();de.current=()=>{var o,c,u;if(C===void 0)b((o=g!=null?g:m)!=null?o:0),h((u=(c=g==null?void 0:g.toFixed(f))!=null?c:m==null?void 0:m.toFixed(f))!=null?u:"0");else{const x=ye(C+O,y,ce).toFixed(f);b(parseFloat(x)),h(x)}};const ue=s.exports.useRef();ue.current=()=>{var o,c,u;if(C===void 0)b((o=g!=null?g:m)!=null?o:0),h((u=(c=g==null?void 0:g.toFixed(f))!=null?c:m==null?void 0:m.toFixed(f))!=null?u:"0");else{const x=ye(C-O,y,ce).toFixed(f);b(parseFloat(x)),h(x)}},je(j,{increment:de.current,decrement:ue.current}),s.exports.useEffect(()=>{typeof p=="number"&&!oe&&(z(p),h(p.toFixed(f))),B===void 0&&p===void 0&&!oe&&(z(p),h(""))},[p]);const pe=E!==void 0&&P!==void 0,Q=s.exports.useRef(null),me=s.exports.useRef(0),F=()=>{Q.current&&window.clearTimeout(Q.current),Q.current=null,me.current=0},be=o=>{o?de.current():ue.current(),me.current+=1},xe=o=>{if(be(o),pe){const c=typeof P=="number"?P:P(me.current);Q.current=window.setTimeout(()=>xe(o),c)}},ae=(o,c)=>{o.preventDefault(),W.current.focus(),be(c),pe&&(Q.current=window.setTimeout(()=>xe(c),E))};s.exports.useEffect(()=>(F(),F),[]);const Fe=i("div",{className:w.rightSection,children:[t("button",{type:"button",tabIndex:-1,"aria-hidden":!0,disabled:I>=l,className:re(w.control,w.controlUp),onPointerDown:o=>{ae(o,!0)},onPointerUp:F,onPointerLeave:F,children:t(Se,{size:K.fn.size({size:q,sizes:Ce}),direction:"up"})}),t("button",{type:"button",tabIndex:-1,"aria-hidden":!0,disabled:I<=m,className:re(w.control,w.controlDown),onPointerDown:o=>{ae(o,!1)},onPointerUp:F,onPointerLeave:F,children:t(Se,{size:K.fn.size({size:q,sizes:Ce}),direction:"down"})})]}),Oe=o=>{if(o.nativeEvent.isComposing)return;const u=o.target.value,x=M(u);h(x),u===""||u==="-"?b(void 0):u.trim()!==""&&!Number.isNaN(x)&&b(parseFloat(x))},ke=o=>{var c;if(o.target.value==="")h(""),b(void 0);else{let u=o.target.value;(u[0]===`${S}`||u[0]===".")&&(u=`0${u}`);const x=M(u),fe=ye(parseFloat(x),y,ce);Number.isNaN(fe)?h((c=I==null?void 0:I.toFixed(f))!=null?c:""):se||(h(fe.toFixed(f)),b(parseFloat(fe.toFixed(f))))}T(!1),typeof R=="function"&&R(o)},De=o=>{T(!0),typeof G=="function"&&G(o)},qe=o=>{if(typeof L=="function"&&L(o),o.repeat&&pe&&(o.key==="ArrowUp"||o.key==="ArrowDown")){o.preventDefault();return}o.key==="ArrowUp"?ae(o,!0):o.key==="ArrowDown"&&ae(o,!1)},Te=o=>{typeof Z=="function"&&Z(o),(o.key==="ArrowUp"||o.key==="ArrowDown")&&F()};return t(v,{...et(Ye({},le),{variant:k,value:r(ne),disabled:d,ref:Ve(W,n),type:"text",onChange:Oe,onBlur:ke,onFocus:De,onKeyDown:qe,onKeyUp:Te,rightSection:V||(d||U||k==="unstyled"?null:Fe),rightSectionWidth:$||K.fn.size({size:q,sizes:Pe})+1,radius:X,max:l,min:m,step:O,size:q,styles:D,classNames:Y,inputMode:H||We(O,f,Ke()),__staticSelector:"NumberInput",unstyled:te})})});Be.displayName="@mantine/core/NumberInput";function at({book:e}){const n=A(l=>l.addItemQty),a=A(l=>l.subtractQty),d=A(l=>l.inputQty),p=A(l=>l.removeFromCart),_=l=>n(l),S=l=>parseInt(l.qty)>1?a(l):(ve({title:"Removed",message:"Item successfully removed on your cart.",color:"green"}),p(l)),m=(l,g)=>d(l,g);return i("div",{children:[i("div",{className:"grid grid-cols-4 place-items-center",children:[t("div",{className:"col-span-1 w-[70%]",children:t("img",{src:e.thumbnail,alt:e.title})}),i("div",{className:"col-span-1 block",children:[t("p",{className:"text-center font-semibold",children:e.title}),t("p",{className:"text-center text-sm",children:e.authors})]}),i("p",{className:"font-semibold",children:["\u20B1 ",e.price]}),i("div",{className:"col-span-1 grid grid-cols-3 place-items-center",children:[t(J,{size:"xs",className:"text-2xl bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all",onClick:()=>S(e),children:"-"}),t(Be,{size:"xs",className:"",value:e.qty,hideControls:!0,onChange:l=>m(e,l)}),t(J,{size:"xs",className:"text-lg bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all",onClick:()=>_(e),children:"+"})]})]}),t(Ie,{my:"sm"})]})}function ft(){var C,z,I,ne,h,W,b;const e=Ae(r=>r.user),n=A(r=>r.cart),a=A(r=>r.emptyCart),[d,p]=s.exports.useState((e==null?void 0:e.firstName)||""),[_,S]=s.exports.useState((e==null?void 0:e.lastName)||""),[m,l]=s.exports.useState((e==null?void 0:e.middleName)||""),[g,O]=s.exports.useState((e==null?void 0:e.email)||""),[P,E]=s.exports.useState((e==null?void 0:e.mobileNo)||""),[R,G]=s.exports.useState(((C=e==null?void 0:e.address)==null?void 0:C.houseNo)||((z=e==null?void 0:e.address)==null?void 0:z.unit)||""),[L,Z]=s.exports.useState(((I=e==null?void 0:e.address)==null?void 0:I.building)||""),[U,X]=s.exports.useState(((ne=e==null?void 0:e.address)==null?void 0:ne.street)||""),[k,f]=s.exports.useState(((h=e==null?void 0:e.address)==null?void 0:h.barangay)||""),[B,se]=s.exports.useState(((W=e==null?void 0:e.address)==null?void 0:W.city)||""),[j,Y]=s.exports.useState(((b=e==null?void 0:e.address)==null?void 0:b.region)||""),[D,q]=s.exports.useState(100),[V,$]=s.exports.useState(0),[ee,N]=s.exports.useState();s.exports.useState(!1);const H=Ee(),te=()=>$(r=>r<1?r+1:r),le=()=>$(r=>r>0?r-1:r),w=s.exports.useMemo(()=>n.map(r=>r.price*r.qty).reduce((r,M)=>r+M,0),[n]),re=async()=>(await(await fetch("https://store.centapps.online/v1/order",{method:"POST",headers:{"Content-Type":"Application/json",Authorization:`Bearer ${localStorage.getItem("accessToken")}`},body:JSON.stringify({orderItems:n.map(y=>({productId:y._id,productName:y.title,price:y.price,qty:y.qty}))})})).json()).id,K=async r=>(await fetch(`https://store.centapps.online/v1/order/${r.orderID}/capture`,{method:"POST",headers:{"Content-Type":"Application/json",Authorization:`Bearer ${localStorage.getItem("accessToken")}`},body:JSON.stringify({user:{firstName:e.firstName,lastName:e.lastName,middleName:e.middleName,email:e.email,mobileNo:P},shippingAddress:{unit:R,building:L,houseNo:R,street:U,barangay:k,city:B,region:j},orderItems:n.map(y=>({productId:y._id,productName:y.title,price:y.price,qty:y.qty})),deliveryFee:D,isPaid:!0,deliveryStatus:"pending",paypalOrderId:r.orderID})})).status===200?(a(),ve({title:"Success",message:"Placed Order Successfully.",color:"green"})):ve({title:"Error",message:"Sorry! Transaction failed.",color:"red"}),oe=r=>{if(r.preventDefault(),!d)return N("First name is required.");if(!_)return N("Last name is required.");if(!g)return N("Email is required.");if(!P)return E("Mobile No is required.");if(!R)return N("Block/Lot/House/Unit Number is required.");if(!U)return N("Street is required.");if(!k)return N("Barangay is required.");if(!B)return N("Barangay is required");if(!j)return N("Region is Required");te()},T="bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all";return i(Ue,{children:[t("div",{className:"grid place-items-center pt-24 max-w-4xl mx-auto px-4",children:i("div",{className:"max-h-100  place-items-center w-full rounded-lg bg-primary shadow-sm p-5",children:[t("p",{className:"text-center font-bold text-2xl text-red-600",children:"Cart"}),n.length<1?i("p",{className:"p-10 text-md",children:["There are no items in your cart, ",t("button",{className:"font-bold text-red-600",onClick:()=>H("/products"),children:"Click here to shop."})]}):i("form",{onSubmit:oe,children:[i(he,{active:V,onStepClick:$,breakpoint:"sm",size:"sm",color:"green",children:[t(he.Step,{label:"Shipping",description:"Review Shipping Information",children:e?i(ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[i("div",{className:"grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1",children:[t(v,{placeholder:"John",label:"First Name",required:!0,value:d,onChange:r=>p(r.target.value)}),t(v,{placeholder:"Doe",label:"Last Name",required:!0,value:_,onChange:r=>S(r.target.value)}),t(v,{placeholder:"A",label:"Middle Name",value:m,onChange:r=>l(r.target.value)}),t(v,{placeholder:"john@example.com",type:"email",label:"Email",required:!0,value:g,onChange:r=>O(r.target.value)}),t(v,{placeholder:"09123456789",label:"Mobile Number",required:!0,value:P,onChange:r=>E(r.target.value)})]}),t(Ie,{my:"xl"}),i("div",{className:"grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1",children:[t(v,{placeholder:"01H",label:"Block/Lot/House/Unit Number",required:!0,value:R,onChange:r=>G(r.target.value)}),t(v,{placeholder:"Green Residences",label:"Building",value:L,onChange:r=>Z(r.target.value)}),t(v,{placeholder:"Taft",label:"Street",required:!0,value:U,onChange:r=>X(r.target.value)}),t(v,{placeholder:"San Juan",label:"Barangay",required:!0,value:k,onChange:r=>f(r.target.value)}),t(v,{placeholder:"Manila",label:"City",required:!0,value:B,onChange:r=>se(r.target.value)}),t(v,{placeholder:"NCR",label:"Region",required:!0,value:j,onChange:r=>Y(r.target.value)})]})]}):i("p",{children:["Please Login ",t("button",{className:"font-bold text-red-600",onClick:()=>H("/auth/login"),children:"here"})," to Review Shipping Information"]})}),t(he.Step,{label:"Products",description:"Review Products Information",children:t(ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:i("div",{className:"grid lg:grid-cols-3 gap-5 lg:w-full",children:[i("div",{className:"lg:col-span-2 md:col-span-3",children:[n.length>0&&t(Ne,{children:n.map(r=>t(at,{book:r},r._id))}),i("div",{className:"font-semibold flex justify-between",children:[t("p",{children:"SubTotal"}),i("p",{children:["\u20B1 ",w]})]})]}),i("div",{className:"lg:col-span-1 md:col-span-3 m-5 grid",children:[t("div",{children:i("div",{className:"grid grid-cols-2",children:[t("p",{className:"pb-5",children:"Item Amount"}),i("p",{className:"font-semibold text-right pb-5",children:["\u20B1 ",w]}),t("p",{children:"Shipping Cost"}),i("p",{className:"font-semibold text-right",children:["\u20B1 ",D]})]})}),i("div",{className:"grid place-content-end ",children:[i("div",{className:"grid grid-cols-2 pb-5",children:[t("p",{children:"Total Amount"}),i("p",{className:"font-semibold text-right",children:["\u20B1 ",w+D]})]}),e?t(Le,{style:{layout:"vertical"},createOrder:re,onApprove:K}):t(J,{onClick:()=>H("/auth/login"),className:T,children:"Login"})]})]})]})})})]}),e&&t("p",{className:"text-xs text-red-600",children:ee&&ee}),i($e,{position:"right",mt:"xl",children:[V>0&&t(J,{onClick:le,className:T,children:"Back"}),e&&t(Ne,{children:V===0&&t(J,{className:T,type:"submit",children:"Next"})})]})]})]})}),t(ge.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t("div",{className:"grid place-items-center max-w-4xl mx-auto px-4 py-5",children:i("div",{className:"place-items-center w-full rounded-lg bg-primary shadow-sm p-5",children:[t("p",{className:"text-[18px]",children:"Please use this payplal test account upon chekout :"}),i("p",{children:["Email: ",t("span",{className:"font-semibold",children:"sb-xhw6a20741718@personal.example.com"})]}),i("p",{children:["Password: ",t("span",{className:"font-semibold",children:"rU?6KF0_"})]})]})})})]})}export{ft as default};
