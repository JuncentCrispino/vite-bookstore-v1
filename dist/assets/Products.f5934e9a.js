import{r as u,o as nt,j as i,x as ot,k as W,c as Le,u as Re,B as Be,l as rt,g as st,a as w,T as at,C as it,p as De,G as Fe,y as lt,f as ct,z as M,R as Te,w as ae,D as dt,s as X,E as ie}from"./index.d3e5fc6a.js";import{P as ut,m as ft}from"./Page.55d7641f.js";import{d as le,T as A,P as pt}from"./index.c2120941.js";import{a as mt}from"./index.esm.d59583f6.js";import{u as gt,g as ht}from"./use-transition.2c3598d9.js";import{O as yt}from"./Overlay.62471c4a.js";import{u as bt}from"./use-id.54af866f.js";import"./Group.54247f27.js";import"./pack-sx.b8e98148.js";function vt({opened:e,shouldReturnFocus:t=!0}){const n=u.exports.useRef(),o=()=>{var s;n.current&&"focus"in n.current&&typeof n.current.focus=="function"&&((s=n.current)==null||s.focus())};return nt(()=>{let s=-1;const a=r=>{r.key==="Tab"&&window.clearTimeout(s)};return document.addEventListener("keydown",a),e?n.current=document.activeElement:t&&(s=window.setTimeout(o,10)),()=>{window.clearTimeout(s),document.removeEventListener("keydown",a)}},[e,t]),o}const xt=/input|select|textarea|button|object/,Ae="a, input, select, textarea, button, object, [tabindex]";function Tt(e){return e.style.display==="none"}function wt(e){if(e.getAttribute("aria-hidden")||e.getAttribute("hidden")||e.getAttribute("type")==="hidden")return!1;let n=e;for(;n&&n!==document.body;){if(Tt(n))return!1;n=n.parentNode}return!0}function Me(e){let t=e.getAttribute("tabindex");return t===null&&(t=void 0),parseInt(t,10)}function ue(e){const t=e.nodeName.toLowerCase(),n=!Number.isNaN(Me(e));return(xt.test(t)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||n)&&wt(e)}function ze(e){const t=Me(e);return(Number.isNaN(t)||t>=0)&&ue(e)}function Nt(e){return Array.from(e.querySelectorAll(Ae)).filter(ze)}function Et(e,t){const n=Nt(e);if(!n.length){t.preventDefault();return}if(!(n[t.shiftKey?0:n.length-1]===document.activeElement||e===document.activeElement))return;t.preventDefault();const a=n[t.shiftKey?n.length-1:0];a&&a.focus()}function Ct(e,t="body > :not(script)"){const n=Array.from(document.querySelectorAll(t)).map(o=>{if(o.contains(e))return;const s=o.getAttribute("aria-hidden");return(s===null||s==="false")&&o.setAttribute("aria-hidden","true"),{node:o,ariaHidden:s}});return()=>{n.forEach(o=>{!o||(o.ariaHidden===null?o.node.removeAttribute("aria-hidden"):o.node.setAttribute("aria-hidden",o.ariaHidden))})}}function _t(e=!0){const t=u.exports.useRef(),n=u.exports.useRef(null),o=u.exports.useCallback(s=>{if(!!e)if(n.current&&n.current(),s){const a=r=>{n.current=Ct(r);let l=s.querySelector("[data-autofocus]");if(!l){const h=Array.from(s.querySelectorAll(Ae));l=h.find(ze)||h.find(ue)||null,!l&&ue(s)&&(l=s)}l&&l.focus()};setTimeout(()=>{s.ownerDocument&&a(s)}),t.current=s}else t.current=null},[e]);return u.exports.useEffect(()=>{if(!e)return;const s=a=>{a.key==="Tab"&&t.current&&Et(t.current,a)};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[e]),o}function Ot(){if(typeof window>"u"||typeof document>"u")return 0;const e=parseInt(window.getComputedStyle(document.body).paddingRight,10),t=window.innerWidth-document.documentElement.clientWidth;return e+t}const Pt=({disableBodyPadding:e})=>{const t=e?null:Ot();return`body {
        --removed-scroll-width: ${t}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${t?"padding-right: var(--removed-scroll-width) !important;":""}
        `};function St(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function It(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}function kt(){const e=document.createElement("style");return e.type="text/css",e.setAttribute("mantine-scroll-lock",""),e}function Lt(e,t={disableBodyPadding:!1}){const[n,o]=u.exports.useState(e||!1),s=u.exports.useRef(0),{disableBodyPadding:a}=t,r=u.exports.useRef(null),l=()=>{s.current=window.scrollY;const b=Pt({disableBodyPadding:a}),g=kt();St(g,b),It(g),r.current=g},h=()=>{!(r!=null&&r.current)||(r.current.parentNode.removeChild(r.current),r.current=null)};return u.exports.useEffect(()=>(n?l():h(),h),[n]),u.exports.useEffect(()=>{e!==void 0&&o(e)},[e]),u.exports.useEffect(()=>{e===void 0&&typeof window<"u"&&window.document.body.style.overflow==="hidden"&&o(!0)},[o]),[n,o]}var Rt=Object.defineProperty,ee=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,we=(e,t,n)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Bt=(e,t)=>{for(var n in t||(t={}))$e.call(t,n)&&we(e,n,t[n]);if(ee)for(var n of ee(t))je.call(t,n)&&we(e,n,t[n]);return e},Dt=(e,t)=>{var n={};for(var o in e)$e.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ee)for(var o of ee(e))t.indexOf(o)<0&&je.call(e,o)&&(n[o]=e[o]);return n};function He(e){var t=e,{withinPortal:n=!0,children:o}=t,s=Dt(t,["withinPortal","children"]);return n?i(ot,{...Bt({},s),children:o}):i(W,{children:o})}He.displayName="@mantine/core/OptionalPortal";var Ft=Le((e,{radius:t,shadow:n,withBorder:o})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(t),boxShadow:e.shadows[n]||n||"none",border:o?`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`:void 0}}));const At=Ft;var Mt=Object.defineProperty,te=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zt=(e,t)=>{for(var n in t||(t={}))qe.call(t,n)&&Ne(e,n,t[n]);if(te)for(var n of te(t))Ve.call(t,n)&&Ne(e,n,t[n]);return e},$t=(e,t)=>{var n={};for(var o in e)qe.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&te)for(var o of te(e))t.indexOf(o)<0&&Ve.call(e,o)&&(n[o]=e[o]);return n};const jt={},We=u.exports.forwardRef((e,t)=>{const n=Re("Paper",jt,e),{className:o,children:s,radius:a,withBorder:r,shadow:l,unstyled:h}=n,b=$t(n,["className","children","radius","withBorder","shadow","unstyled"]),{classes:g,cx:f}=At({radius:a,shadow:l,withBorder:r},{name:"Paper",unstyled:h});return i(Be,{...zt({className:f(g.root,o),ref:t},b),children:s})});We.displayName="@mantine/core/Paper";const Ht=rt(We);function Ue({transitions:e,duration:t=250,exitDuration:n=t,mounted:o,children:s,timingFunction:a,onExit:r,onEntered:l,onEnter:h,onExited:b}){const{transitionDuration:g,transitionStatus:f,transitionTimingFunction:v}=gt({mounted:o,duration:t,exitDuration:n,timingFunction:a,onExit:r,onEntered:l,onEnter:h,onExited:b});if(g===0)return o?i(W,{children:s({})}):null;if(f==="exited")return null;const T=Object.keys(e).reduce((x,d)=>(x[d]=ht({duration:e[d].duration,transition:e[d].transition,timingFunction:e[d].timingFunction||v,state:f}),x),{});return i(W,{children:s(T)})}Ue.displayName="@mantine/core/GroupedTransition";var qt=Object.defineProperty,Ee=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,Ce=(e,t,n)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ut=(e,t)=>{for(var n in t||(t={}))Vt.call(t,n)&&Ce(e,n,t[n]);if(Ee)for(var n of Ee(t))Wt.call(t,n)&&Ce(e,n,t[n]);return e};const Yt={xs:320,sm:380,md:440,lg:620,xl:780};function Gt(e){return e?{position:"absolute",top:0,left:0,right:0,bottom:0,maxHeight:"100vh",overflowY:"auto"}:{}}var Qt=Le((e,{overflow:t,size:n,centered:o,zIndex:s,fullScreen:a})=>({close:{},overlay:{display:a?"none":void 0},root:{position:"fixed",zIndex:s,top:0,left:0,right:0,bottom:0},inner:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",padding:a?0:`${e.spacing.xl*2}px ${e.spacing.md}px`,display:"flex",justifyContent:"center",alignItems:o?"center":"flex-start"},title:{marginRight:e.spacing.md,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"},modal:Ut({position:"relative",width:a?void 0:e.fn.size({sizes:Yt,size:n}),borderRadius:a?0:void 0,outline:0,backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,marginTop:o?"auto":void 0,marginBottom:o?"auto":void 0,zIndex:1,marginLeft:a?void 0:"calc(var(--removed-scroll-width, 0px) * -1)"},Gt(a)),header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:e.spacing.md,marginRight:-9},body:{maxHeight:t==="inside"?"calc(100vh - 185px)":null,overflowY:t==="inside"?"auto":null,wordBreak:"break-word"}}));const Kt=Qt;var Xt=Object.defineProperty,ne=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,_e=(e,t,n)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zt=(e,t)=>{for(var n in t||(t={}))Ye.call(t,n)&&_e(e,n,t[n]);if(ne)for(var n of ne(t))Ge.call(t,n)&&_e(e,n,t[n]);return e},Jt=(e,t)=>{var n={};for(var o in e)Ye.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ne)for(var o of ne(e))t.indexOf(o)<0&&Ge.call(e,o)&&(n[o]=e[o]);return n};const en={size:"md",transitionDuration:250,overflow:"outside",padding:"lg",shadow:"lg",closeOnClickOutside:!0,closeOnEscape:!0,trapFocus:!0,withCloseButton:!0,withinPortal:!0,lockScroll:!0,withFocusReturn:!0,overlayBlur:0,zIndex:st("modal")};function Qe(e){const t=Re("Modal",en,e),{className:n,opened:o,title:s,onClose:a,children:r,withCloseButton:l,overlayOpacity:h,size:b,transitionDuration:g,closeButtonLabel:f,overlayColor:v,overflow:T,transition:x,padding:d,shadow:p,radius:y,id:E,classNames:c,styles:P,closeOnClickOutside:S,trapFocus:_,closeOnEscape:m,centered:N,target:O,withinPortal:C,zIndex:k,overlayBlur:$,transitionTimingFunction:L,fullScreen:R,unstyled:D,lockScroll:B,withFocusReturn:q}=t,j=Jt(t,["className","opened","title","onClose","children","withCloseButton","overlayOpacity","size","transitionDuration","closeButtonLabel","overlayColor","overflow","transition","padding","shadow","radius","id","classNames","styles","closeOnClickOutside","trapFocus","closeOnEscape","centered","target","withinPortal","zIndex","overlayBlur","transitionTimingFunction","fullScreen","unstyled","lockScroll","withFocusReturn"]),se=bt(E),ge=`${se}-title`,he=`${se}-body`,{classes:F,cx:Je,theme:Q}=Kt({size:b,overflow:T,centered:N,zIndex:k,fullScreen:R},{unstyled:D,classNames:c,styles:P,name:"Modal"}),et=_t(_&&o),tt=typeof h=="number"?h:Q.colorScheme==="dark"?.85:.75,[,ye]=Lt(),be=K=>{!_&&K.key==="Escape"&&m&&a()};return u.exports.useEffect(()=>{if(!_)return window.addEventListener("keydown",be),()=>window.removeEventListener("keydown",be)},[_]),vt({opened:o,shouldReturnFocus:_&&q}),i(He,{withinPortal:C,target:O,children:i(Ue,{onExited:()=>B&&ye(!1),onEntered:()=>B&&ye(!0),mounted:o,duration:g,exitDuration:g,timingFunction:L,transitions:{modal:{duration:g,transition:x||(R?"fade":"pop")},overlay:{duration:g/2,transition:"fade",timingFunction:"ease"}},children:K=>i(Be,{...Zt({id:se,className:Je(F.root,n)},j),children:w("div",{className:F.inner,onKeyDownCapture:ve=>{var xe;((xe=ve.target)==null?void 0:xe.getAttribute("data-mantine-stop-propagation"))!=="true"&&ve.key==="Escape"&&m&&a()},ref:et,children:[w(Ht,{className:F.modal,shadow:p,p:d,radius:y,role:"dialog","aria-labelledby":ge,"aria-describedby":he,"aria-modal":!0,tabIndex:-1,style:K.modal,unstyled:D,children:[(s||l)&&w("div",{className:F.header,children:[i(at,{id:ge,className:F.title,children:s}),l&&i(it,{iconSize:16,onClick:a,"aria-label":f,className:F.close})]}),i("div",{id:he,className:F.body,children:r})]}),i("div",{style:K.overlay,children:i(yt,{className:F.overlay,sx:{position:"fixed"},zIndex:0,onMouseDown:()=>S&&a(),blur:$,color:v||(Q.colorScheme==="dark"?Q.colors.dark[9]:Q.black),opacity:tt,unstyled:D})})]})})})})}Qe.displayName="@mantine/core/Modal";const H=De(e=>({products:[],setProducts:t=>e(n=>({products:[...t]})),categories:[],setCategories:t=>e(n=>({categories:[...n.categories,...t]})),category:"",setCategory:t=>e(()=>({category:t})),page:1,setPage:t=>e(()=>({page:t})),categoryPage:1,totalPages:0,setTotalPages:t=>e(()=>({totalPages:t})),setCategoryPage:t=>e(()=>({categoryPage:t})),emptyProducts:()=>e(()=>({products:[]})),emptyCategories:()=>e(()=>({categories:[]}))}));function tn(e,t,n,o){const[s,a]=u.exports.useState(!0),[r,l]=u.exports.useState(!1),h=H(v=>v.products),b=H(v=>v.setProducts),g=H(v=>v.totalPages),f=H(v=>v.setTotalPages);return u.exports.useEffect(()=>{a(!0),l(!1);let v;return le({method:"GET",url:"https://store.centapps.online/v1/product",params:{searchText:e,category:o,page:t,sortBy:n,limit:10},cancelToken:new le.CancelToken(T=>v=T)}).then(T=>{b(T.data.results),f(T.data.totalPages),a(!1)}).catch(T=>{le.isCancel(T)||l(!0)}),()=>v()},[e,t,o]),{isLoading:s,products:h,error:r,totalPages:g}}function nn(e){return Fe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(e)}const on="/assets/defaultCover.7b06be35.jpg";let fe=e=>({favorites:[],addToFavorites:t=>{e(n=>({favorites:[...n.favorites,t]}))},removeFromFavorites:t=>{e(n=>({favorites:n.favorites.filter(o=>o._id!==t._id)}))}});fe=lt(fe,{name:"favorites"});const Oe=De(fe);function rn({product:e,handleOpen:t,opened:n,handleAddToCart:o,handleAddToFavorites:s}){const a=ct();return i(W,{children:i(Qe,{overlayColor:a.colorScheme==="dark"?a.colors.dark[9]:a.colors.gray[2],overlayOpacity:.55,overlayBlur:3,opened:n,onClose:t,centered:!0,size:"xl",children:w(A,{variant:"outline",defaultValue:"details",children:[w(A.List,{children:[i(A.Tab,{value:"details",children:"Detials"}),i(A.Tab,{value:"Description",children:"Description"}),i(A.Tab,{value:"reviews",children:"Reviews"})]}),i(A.Panel,{value:"details",pt:"xs",className:"border-x-[1px] border-b-[1px] rounded-b-[4px]",children:w("div",{className:"lg:grid lg:grid-cols-3 lg:gap-3 p-3",children:[w("div",{className:"flex align-center relative",children:[i("img",{src:e.thumbnail,alt:e.title,className:"w-full col-span-1 rounded-md object-cover "}),w("p",{className:"absolute top-2 right-2 bg-red-600 text-primary p-2 rounded-md",children:["\u20B1",e.price.toLocaleString("en-US")]})]}),w("div",{className:"col-span-2",children:[w("section",{className:"text-center",children:[i("p",{className:"text-xl uppercase underline pt-4",children:e.title}),i("p",{children:e.authors})]}),w("section",{className:"pt-2 pl-10",children:[w("p",{className:"pb-1",children:["Category: ",e.category]}),w("p",{className:"pb-1",children:["Subtitle: ",e.subtitle]}),w("p",{className:"pb-1",children:["ISBN10: ",e.isbn10]}),w("p",{className:"pb-1",children:["ISBN13: ",e.isbn13]}),w("p",{className:"pb-1",children:["Pages: ",e.pageNumber]}),w("p",{className:"pb-1",children:["Year Published: ",e.yearPublished]}),w("p",{className:"pb-1",children:["Sold: ",e.sold]}),w("p",{className:"pb-1",children:["Available Stocks: ",e.availableStock]})]}),w("section",{className:"flex justify-center gap-3 pt-5",children:[i("button",{className:"bg-red-600 rounded-md text-primary px-3 py-2",onClick:o,children:"ADD TO CART"}),i("button",{className:"bg-red-600 rounded-md text-primary px-3 py-2",onClick:s,children:"ADD TO WISHLIST"})]})]})]})}),i(A.Panel,{value:"Description",pt:"xs",className:"border-x-[1px] border-b-[1px] rounded-b-[4px]",children:i("p",{className:"p-6",children:e.description})}),i(A.Panel,{value:"reviews",pt:"xs",className:"border-x-[1px] border-b-[1px] rounded-b-[4px]",children:i("p",{className:"p-6 text-center",children:"Coming Soon"})})]})})})}function U(e){return typeof e=="number"&&!isNaN(e)}function V(e){return typeof e=="boolean"}function Y(e){return typeof e=="string"}function I(e){return typeof e=="function"}function Z(e){return Y(e)||I(e)?e:null}function ce(e){return e!=null}function sn(e,t){return e===!1||U(e)&&e>0?e:t}function de(e){return u.exports.isValidElement(e)||Y(e)||I(e)||U(e)}const an={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function ln(e,t,n){n===void 0&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition="all "+n+"ms",requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function cn(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:s=!0,collapseDuration:a=300}=e;return function(l){let{children:h,position:b,preventExitTransition:g,done:f,nodeRef:v,isIn:T}=l;const x=o?t+"--"+b:t,d=o?n+"--"+b:n,p=u.exports.useRef(0);return u.exports.useLayoutEffect(()=>{const y=v.current,E=x.split(" "),c=S=>{S.target===v.current&&(y.dispatchEvent(new Event("d")),y.removeEventListener("animationend",c),y.removeEventListener("animationcancel",c),p.current===0&&S.type!=="animationcancel"&&y.classList.remove(...E))};(()=>{y.classList.add(...E),y.addEventListener("animationend",c),y.addEventListener("animationcancel",c)})()},[]),u.exports.useEffect(()=>{const y=v.current,E=()=>{y.removeEventListener("animationend",E),s?ln(y,f,a):f()};T||(g?E():(()=>{p.current=1,y.className+=" "+d,y.addEventListener("animationend",E)})())},[T]),i(W,{children:h})}}function Pe(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const z={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(o=>o!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},oe=e=>{let{theme:t,type:n,...o}=e;return i("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...o})};function dn(e){return i(oe,{...e,children:i("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})}function un(e){return i(oe,{...e,children:i("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})}function fn(e){return i(oe,{...e,children:i("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})}function pn(e){return i(oe,{...e,children:i("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})}function mn(){return i("div",{className:"Toastify__spinner"})}const pe={info:un,warning:dn,success:fn,error:pn,spinner:mn},gn=e=>e in pe;function hn(e){let{theme:t,type:n,isLoading:o,icon:s}=e,a=null;const r={theme:t,type:n};return s===!1||(I(s)?a=s(r):u.exports.isValidElement(s)?a=u.exports.cloneElement(s,r):Y(s)||U(s)?a=s:o?a=pe.spinner():gn(n)&&(a=pe[n](r))),a}function yn(e){const[,t]=u.exports.useReducer(d=>d+1,0),[n,o]=u.exports.useState([]),s=u.exports.useRef(null),a=u.exports.useRef(new Map).current,r=d=>n.indexOf(d)!==-1,l=u.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:r,getToast:d=>a.get(d)}).current;u.exports.useEffect(()=>(l.containerId=e.containerId,z.cancelEmit(3).on(0,v).on(1,d=>s.current&&b(d)).on(5,h).emit(2,l),()=>{a.clear(),z.emit(3,l)}),[]),u.exports.useEffect(()=>{l.props=e,l.isToastActive=r,l.displayedToast=n.length});function h(d){let{containerId:p}=d;const{limit:y}=l.props;y&&(!p||l.containerId===p)&&(l.count-=l.queue.length,l.queue=[])}function b(d){o(p=>ce(d)?p.filter(y=>y!==d):[])}function g(){const{toastContent:d,toastProps:p,staleId:y}=l.queue.shift();T(d,p,y)}function f(d){return!s.current||l.props.enableMultiContainer&&d.containerId!==l.props.containerId||a.has(d.toastId)&&d.updateId==null}function v(d,p){let{delay:y,staleId:E,...c}=p;if(!de(d)||f(c))return;const{toastId:P,updateId:S,data:_}=c,{props:m}=l,N=()=>b(P),O=S==null;O&&l.count++;const C={toastId:P,updateId:S,data:_,containerId:c.containerId,isLoading:c.isLoading,theme:c.theme||m.theme,icon:c.icon!=null?c.icon:m.icon,isIn:!1,key:c.key||l.toastKey++,type:c.type,closeToast:N,closeButton:c.closeButton,rtl:m.rtl,position:c.position||m.position,transition:c.transition||m.transition,className:Z(c.className||m.toastClassName),bodyClassName:Z(c.bodyClassName||m.bodyClassName),style:c.style||m.toastStyle,bodyStyle:c.bodyStyle||m.bodyStyle,onClick:c.onClick||m.onClick,pauseOnHover:V(c.pauseOnHover)?c.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:V(c.pauseOnFocusLoss)?c.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:V(c.draggable)?c.draggable:m.draggable,draggablePercent:c.draggablePercent||m.draggablePercent,draggableDirection:c.draggableDirection||m.draggableDirection,closeOnClick:V(c.closeOnClick)?c.closeOnClick:m.closeOnClick,progressClassName:Z(c.progressClassName||m.progressClassName),progressStyle:c.progressStyle||m.progressStyle,autoClose:c.isLoading?!1:sn(c.autoClose,m.autoClose),hideProgressBar:V(c.hideProgressBar)?c.hideProgressBar:m.hideProgressBar,progress:c.progress,role:c.role||m.role,deleteToast(){const $=Pe(a.get(P),"removed");a.delete(P),z.emit(4,$);const L=l.queue.length;if(l.count=ce(P)?l.count-1:l.count-l.displayedToast,l.count<0&&(l.count=0),L>0){const R=ce(P)?1:l.props.limit;if(L===1||R===1)l.displayedToast++,g();else{const D=R>L?L:R;l.displayedToast=D;for(let B=0;B<D;B++)g()}}else t()}};C.iconOut=hn(C),I(c.onOpen)&&(C.onOpen=c.onOpen),I(c.onClose)&&(C.onClose=c.onClose),C.closeButton=m.closeButton,c.closeButton===!1||de(c.closeButton)?C.closeButton=c.closeButton:c.closeButton===!0&&(C.closeButton=de(m.closeButton)?m.closeButton:!0);let k=d;u.exports.isValidElement(d)&&!Y(d.type)?k=u.exports.cloneElement(d,{closeToast:N,toastProps:C,data:_}):I(d)&&(k=d({closeToast:N,toastProps:C,data:_})),m.limit&&m.limit>0&&l.count>m.limit&&O?l.queue.push({toastContent:k,toastProps:C,staleId:E}):U(y)?setTimeout(()=>{T(k,C,E)},y):T(k,C,E)}function T(d,p,y){const{toastId:E}=p;y&&a.delete(y);const c={content:d,props:p};a.set(E,c),o(P=>[...P,E].filter(S=>S!==y)),z.emit(4,Pe(c,c.props.updateId==null?"added":"updated"))}function x(d){const p=new Map,y=Array.from(a.values());return e.newestOnTop&&y.reverse(),y.forEach(E=>{const{position:c}=E.props;p.has(c)||p.set(c,[]),p.get(c).push(E)}),Array.from(p,E=>d(E[0],E[1]))}return{getToastToRender:x,containerRef:s,isToastActive:r}}function Se(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Ie(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function bn(e){const[t,n]=u.exports.useState(!1),[o,s]=u.exports.useState(!1),a=u.exports.useRef(null),r=u.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=u.exports.useRef(e),{autoClose:h,pauseOnHover:b,closeToast:g,onClick:f,closeOnClick:v}=e;u.exports.useEffect(()=>{l.current=e}),u.exports.useEffect(()=>(a.current&&a.current.addEventListener("d",d,{once:!0}),I(e.onOpen)&&e.onOpen(u.exports.isValidElement(e.children)&&e.children.props),()=>{const N=l.current;I(N.onClose)&&N.onClose(u.exports.isValidElement(N.children)&&N.children.props)}),[]),u.exports.useEffect(()=>(e.pauseOnFocusLoss&&y(),()=>{e.pauseOnFocusLoss&&E()}),[e.pauseOnFocusLoss]);function T(N){if(e.draggable){c();const O=a.current;r.canCloseOnClick=!0,r.canDrag=!0,r.boundingRect=O.getBoundingClientRect(),O.style.transition="",r.x=Se(N.nativeEvent),r.y=Ie(N.nativeEvent),e.draggableDirection==="x"?(r.start=r.x,r.removalDistance=O.offsetWidth*(e.draggablePercent/100)):(r.start=r.y,r.removalDistance=O.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100))}}function x(){if(r.boundingRect){const{top:N,bottom:O,left:C,right:k}=r.boundingRect;e.pauseOnHover&&r.x>=C&&r.x<=k&&r.y>=N&&r.y<=O?p():d()}}function d(){n(!0)}function p(){n(!1)}function y(){document.hasFocus()||p(),window.addEventListener("focus",d),window.addEventListener("blur",p)}function E(){window.removeEventListener("focus",d),window.removeEventListener("blur",p)}function c(){r.didMove=!1,document.addEventListener("mousemove",S),document.addEventListener("mouseup",_),document.addEventListener("touchmove",S),document.addEventListener("touchend",_)}function P(){document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",_)}function S(N){const O=a.current;r.canDrag&&O&&(r.didMove=!0,t&&p(),r.x=Se(N),r.y=Ie(N),e.draggableDirection==="x"?r.delta=r.x-r.start:r.delta=r.y-r.start,r.start!==r.x&&(r.canCloseOnClick=!1),O.style.transform="translate"+e.draggableDirection+"("+r.delta+"px)",O.style.opacity=""+(1-Math.abs(r.delta/r.removalDistance)))}function _(){P();const N=a.current;if(r.canDrag&&r.didMove&&N){if(r.canDrag=!1,Math.abs(r.delta)>r.removalDistance){s(!0),e.closeToast();return}N.style.transition="transform 0.2s, opacity 0.2s",N.style.transform="translate"+e.draggableDirection+"(0)",N.style.opacity="1"}}const m={onMouseDown:T,onTouchStart:T,onMouseUp:x,onTouchEnd:x};return h&&b&&(m.onMouseEnter=p,m.onMouseLeave=d),v&&(m.onClick=N=>{f&&f(N),r.canCloseOnClick&&g()}),{playToast:d,pauseToast:p,isRunning:t,preventExitTransition:o,toastRef:a,eventHandlers:m}}function Ke(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return i("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:s=>{s.stopPropagation(),t(s)},"aria-label":o,children:i("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:i("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}function Xe(e){let{delay:t,isRunning:n,closeToast:o,type:s,hide:a,className:r,style:l,controlledProgress:h,progress:b,rtl:g,isIn:f,theme:v}=e;const T={...l,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1};h&&(T.transform="scaleX("+b+")");const x=M("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+s,{["Toastify__progress-bar--rtl"]:g}),d=I(r)?r({rtl:g,type:s,defaultClassName:x}):M(x,r),p={[h&&b>=1?"onTransitionEnd":"onAnimationEnd"]:h&&b<1?null:()=>{f&&o()}};return i("div",{role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:d,style:T,...p})}Xe.defaultProps={type:G.DEFAULT,hide:!1};const vn=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:s}=bn(e),{closeButton:a,children:r,autoClose:l,onClick:h,type:b,hideProgressBar:g,closeToast:f,transition:v,position:T,className:x,style:d,bodyClassName:p,bodyStyle:y,progressClassName:E,progressStyle:c,updateId:P,role:S,progress:_,rtl:m,toastId:N,deleteToast:O,isIn:C,isLoading:k,iconOut:$,theme:L}=e,R=M("Toastify__toast","Toastify__toast-theme--"+L,"Toastify__toast--"+b,{["Toastify__toast--rtl"]:m}),D=I(x)?x({rtl:m,position:T,type:b,defaultClassName:R}):M(R,x),B=!!_,q={closeToast:f,type:b,theme:L};let j=null;return a===!1||(I(a)?j=a(q):Te.isValidElement(a)?j=Te.cloneElement(a,q):j=Ke(q)),i(v,{isIn:C,done:O,position:T,preventExitTransition:n,nodeRef:o,children:w("div",{id:N,onClick:h,className:D,...s,style:d,ref:o,children:[w("div",{...C&&{role:S},className:I(p)?p({type:b}):M("Toastify__toast-body",p),style:y,children:[$!=null&&i("div",{className:M("Toastify__toast-icon",{["Toastify--animate-icon Toastify__zoom-enter"]:!k}),children:$}),i("div",{children:r})]}),j,(l||B)&&i(Xe,{...P&&!B?{key:"pb-"+P}:{},rtl:m,theme:L,delay:l,isRunning:t,isIn:C,closeToast:f,hide:g,type:b,style:c,className:E,controlledProgress:B,progress:_})]})})},xn=cn({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),Ze=u.exports.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:s}=yn(e),{className:a,style:r,rtl:l,containerId:h}=e;function b(g){const f=M("Toastify__toast-container","Toastify__toast-container--"+g,{["Toastify__toast-container--rtl"]:l});return I(a)?a({position:g,rtl:l,defaultClassName:f}):M(f,Z(a))}return u.exports.useEffect(()=>{t&&(t.current=o.current)},[]),i("div",{ref:o,className:"Toastify",id:h,children:n((g,f)=>{const v=f.length?{...r}:{...r,pointerEvents:"none"};return i("div",{className:b(g),style:v,children:f.map((T,x)=>{let{content:d,props:p}=T;return u.exports.createElement(vn,{...p,isIn:s(p.toastId),style:{...p.style,"--nth":x+1,"--len":f.length},key:"toast-"+p.key},d)})},"container-"+g)})})});Ze.displayName="ToastContainer";Ze.defaultProps={position:an.TOP_RIGHT,transition:xn,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:Ke,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let J=new Map,ke,me=[];function Tn(){return Math.random().toString(36).substring(2,9)}function wn(e){return e&&(Y(e.toastId)||U(e.toastId))?e.toastId:Tn()}function Nn(e,t){return J.size>0?z.emit(0,e,t):me.push({content:e,options:t}),t.toastId}function En(e,t){return{...t,type:t&&t.type||e,toastId:wn(t)}}function re(e){return(t,n)=>Nn(t,En(e,n))}re(G.SUCCESS);re(G.INFO);re(G.ERROR);re(G.WARNING);z.on(2,e=>{ke=e.containerId||e,J.set(ke,e),me.forEach(t=>{z.emit(0,t.content,t.options)}),me=[]}).on(3,e=>{J.delete(e.containerId||e),J.size===0&&z.off(0).off(1).off(5)});function Cn(e){return Fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"}}]}]})(e)}function _n({product:e}){const t=ae(f=>f.cart),n=Oe(f=>f.favorites),o=Oe(f=>f.addToFavorites),s=ae(f=>f.addToCart),a=ae(f=>f.addItemQty),[r,l]=u.exports.useState(!1),h=()=>(console.log(e),t.some(f=>f._id===e._id)?(a(e),X({icon:i(ie,{}),color:"green",title:"Success",message:"Updated book quantity on your cart"})):(s({_id:e._id,title:e.title,thumbnail:e.thumbnail,authors:e.authors,price:e.price,qty:1}),X({icon:i(ie,{}),color:"green",title:"Success",message:"Added new book to your cart"}))),b=()=>n.some(f=>f===e._id)?X({icon:i(Cn,{}),color:"yellow",title:"Sorry",message:`${e.title} is already in your favorites`}):(o(e._id),X({icon:i(ie,{}),color:"green",title:"Success",message:`Added ${e.title} to your favorites`})),g=()=>{l(!r)};return w("div",{className:"md:w-48 relative mb-2",children:[i("section",{children:i("img",{src:e.thumbnail||on,className:"object-cover w-full aspect-[2/3] max-w rounded-lg cursor-pointer",onClick:g})}),i("section",{className:"absolute right-[5px] top-[5px]",children:i("button",{className:"bg-primary rounded-[50%] p-btn",onClick:g,children:i(mt,{className:"text-red-600",size:25})})}),i("section",{className:"absolute left-[5px] top-[5px]",children:w("p",{className:"px-2 py-1 bg-red-600 text-primary rounded-md",children:["\u20B1 ",e.price.toLocaleString("en-US")]})}),w("section",{className:"absolute bottom-[-15px] left-0 right-0 items-center px-4",children:[w("section",{className:"flex justify-between mb-3",children:[i("button",{className:"bg-primary p-1.5 rounded-[50%] p-btn",id:t.some(f=>f._id===e._id)?"stored-btn":"",onClick:h,children:i(dt,{size:25,className:"text-red-600"})}),i("button",{className:"bg-primary p-1.5 rounded-[50%] p-btn",id:n.some(f=>f===e._id)?"stored-btn":"",onClick:b,children:i(nn,{size:25,className:"text-red-600"})})]}),i("p",{className:"bg-red-600 text-primary text-sm text-center p-2 rounded-md",children:e.title})]}),i(rn,{product:e,opened:r,handleOpen:g,handleAddToCart:h,handleAddToFavorites:b})]})}const On=async()=>{try{return await(await fetch("https://store.centapps.online/v1/product/categories")).json()}catch(e){throw alert(e),e}};function Mn(){const[e,t]=u.exports.useState(""),[n,o]=u.exports.useState(null),[s,a]=u.exports.useState([]),r=H(x=>x.page),l=H(x=>x.setPage),[h,b]=u.exports.useState("createdAt:asc"),{isLoading:g,products:f,totalPages:v,error:T}=tn(e,r,h,n);return u.exports.useEffect(()=>{(async()=>{const x=await On();a(x)})()},[]),w(ut,{children:[w("div",{className:"max-w-screen-xl m-auto pt-12 mb-10",children:[i("div",{className:"pt-6 grid grid-cols-2 gap-4 place-items-end"}),i("section",{className:"flex flex-wrap justify-center gap-10 pt-6",children:f.map((x,d)=>i(ft.div,{initial:{opacity:0,translateY:-50},animate:{opacity:1,translateY:0},exit:{opacity:0},transition:{duration:.3,delay:d*.08},children:i(_n,{product:x})},x._id))})]}),i("div",{className:"flex justify-center place-content-center mb-10",children:v>1&&i(pt,{total:v,onChange:x=>l(x),color:"red",radius:"xl",page:r})})]})}export{Mn as default};
