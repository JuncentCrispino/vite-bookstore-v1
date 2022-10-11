import{c as ue,g as me,r as s,u as pe,j as t,a as d,B as fe,L as ve,G as ge,b as he,d as R,e as xe}from"./index.382c3b1a.js";import{M as $,P as U,a as J,b as Z,c as H,d as ye}from"./index.esm.be825ac9.js";import{P as be}from"./Page.d65271c7.js";import{S}from"./Stepper.6376e4e7.js";import{T as f}from"./TextInput.8217711a.js";import{T as Pe}from"./Transition.32526743.js";import{O as Se}from"./Overlay.8a0b86fd.js";import{G as Ne}from"./Group.0bc899fe.js";import{B as K}from"./Button.9f796692.js";import"./use-uncontrolled.161612d8.js";import"./pack-sx.75a75f81.js";var we=ue({root:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}});const Ce=we;var ze=Object.defineProperty,Oe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,Q=(r,a,o)=>a in r?ze(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o,N=(r,a)=>{for(var o in a||(a={}))W.call(a,o)&&Q(r,o,a[o]);if(w)for(var o of w(a))X.call(a,o)&&Q(r,o,a[o]);return r},Ie=(r,a)=>Oe(r,_e(a)),Ee=(r,a)=>{var o={};for(var i in r)W.call(r,i)&&a.indexOf(i)<0&&(o[i]=r[i]);if(r!=null&&w)for(var i of w(r))a.indexOf(i)<0&&X.call(r,i)&&(o[i]=r[i]);return o};const Le={overlayOpacity:.75,transitionDuration:0,zIndex:me("overlay")},Y=s.exports.forwardRef((r,a)=>{const o=pe("LoadingOverlay",Le,r),{className:i,visible:c,loaderProps:u,overlayOpacity:C,overlayColor:b,transitionDuration:z,exitTransitionDuration:O,zIndex:m,style:_,loader:v,radius:p,overlayBlur:I,unstyled:g}=o,E=Ee(o,["className","visible","loaderProps","overlayOpacity","overlayColor","transitionDuration","exitTransitionDuration","zIndex","style","loader","radius","overlayBlur","unstyled"]),{classes:L,cx:h,theme:x}=Ce(null,{name:"LoadingOverlay",unstyled:g}),P=`calc(${m} + 1)`;return t(Pe,{duration:z,exitDuration:O,mounted:c,transition:"fade",children:y=>d(fe,{...N({className:h(L.root,i),style:Ie(N(N({},y),_),{zIndex:m}),ref:a},E),children:[v?t("div",{style:{zIndex:P},children:v}):t(ve,{...N({style:{zIndex:P}},u)}),t(Se,{opacity:C,zIndex:m,radius:p,blur:I,unstyled:g,color:b||(x.colorScheme==="dark"?x.colors.dark[5]:x.white)})]})})});Y.displayName="@mantine/core/LoadingOverlay";function V(r){return ge({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"}}]})(r)}function $e(){const r=he(),a=R(e=>e.user),o=R(e=>e.setUser),[i,c]=s.exports.useState(0),[u,C]=s.exports.useState(""),[b,z]=s.exports.useState(""),[O,m]=s.exports.useState(!0),[_,v]=s.exports.useState(!0),[p,I]=s.exports.useState(""),[g,E]=s.exports.useState(""),[L,h]=s.exports.useState(!0),[x,P]=s.exports.useState(!0),[y,ee]=s.exports.useState(""),[te,j]=s.exports.useState(!0),[A,re]=s.exports.useState(""),[se,B]=s.exports.useState(!0),[D,ae]=s.exports.useState(""),[oe,k]=s.exports.useState(!0),[T,ie]=s.exports.useState(""),[le,M]=s.exports.useState(!0),[Ae,n]=s.exports.useState(""),[ne,q]=s.exports.useState(!1);s.exports.useEffect(()=>{a&&r("/")},[]);const F=e=>{if(e.preventDefault(),i===0){if(!/^\S+@\S+$/.test(u)){m(!1);return}if(u!==b){v(!1);return}if(p.length<8){h(!1);return}if(p!==g){P(!1);return}return c(1)}else if(i===1){if(y.length<1&&j(!1),A.length<1&&B(!1),D.length<1&&k(!1),T.length<1){M(!1);return}return ce({email:u,password:p,firstName:y,lastName:A,mobileNo:D,birthday:"sample",gender:"sample"}),c(2)}},de=()=>c(e=>e>0?e-1:e),ce=async e=>{q(!0);const l=await xe(e);l.statusCode===200?(o(l.res),q(!1)):console.log(l)},G="bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all";return t(be,{children:t("div",{className:"grid place-items-center h-screen max-w-md mx-auto px-4",children:t("section",{className:"grid place-items-center w-full rounded-lg bg-primary shadow-shadow-1",children:d("form",{onSubmit:e=>F(e),className:"w-full px-8 py-8",children:[d(S,{active:i,onStepClick:c,breakpoint:"sm",size:"xs",children:[d(S.Step,{label:"Credentials",description:"email/password",children:[t(f,{size:"xs",required:!0,className:"mb-2",label:"Email",type:"email",value:u,icon:t($,{size:20}),radius:"sm",onChange:e=>{C(e.target.value),m(!0),n("")},placeholder:"john@example.com",error:!O&&"Please enter a valid email"}),t(f,{size:"xs",required:!0,className:"mb-2",label:"Confirm Email",type:"email",value:b,icon:t($,{size:20}),radius:"sm",onChange:e=>{z(e.target.value),v(!0),n("")},placeholder:"john@example.com",error:!_&&"Email does not match"}),t(U,{size:"xs",required:!0,className:"mb-2",label:"Password",value:p,icon:t(J,{size:20}),radius:"sm",onChange:e=>{I(e.target.value),h(!0),n("")},placeholder:"Password",error:!L&&"Password must be at least 8 characters",visibilityToggleIcon:({reveal:e,size:l})=>e?t(Z,{size:l}):t(H,{size:l})}),t(U,{size:"xs",required:!0,className:"mb-2",label:"Confirm Password",value:g,icon:t(J,{size:20}),radius:"sm",onChange:e=>{E(e.target.value),h(!0),n("")},placeholder:"Password",error:!x&&"Password does not match",visibilityToggleIcon:({reveal:e,size:l})=>e?t(Z,{size:l}):t(H,{size:l})})]}),d(S.Step,{label:"Account",description:"Personal Info",children:[d("section",{className:"grid lg:grid-cols-2 gap-1 sm:grid-cols-1",children:[t(f,{size:"xs",required:!0,className:"mb-2",label:"First Name",type:"text",value:y,icon:t(V,{size:20}),radius:"sm",onChange:e=>{ee(e.target.value),j(!0),n("")},placeholder:"John",error:!te&&"First name must not be empty"}),t(f,{size:"xs",required:!0,className:"mb-2",label:"Last Name",type:"text",value:A,icon:t(V,{size:20}),radius:"sm",onChange:e=>{re(e.target.value),B(!0),n("")},placeholder:"Doe",error:!se&&"LastName name must not be empty"})]}),t(f,{size:"xs",className:"mb-2",label:"Mobile Number",type:"tel",value:D,icon:t(ye,{size:20}),radius:"sm",onChange:e=>{ae(e.target.value),k(!0),n("")},placeholder:"09123456789",error:!oe&&"Phone number must not be empty"}),t("section",{children:t(f,{size:"xs",className:"mb-2",label:"Address",type:"text",value:T,icon:t(V,{size:20}),radius:"sm",onChange:e=>{ie(e.target.value),M(!0),n("")},placeholder:"Tower 1, 1st Floor, 1st Street, 1st Barangay, 1st City, 1st Country",error:!le&&"Address must not be empty"})})]}),t(S.Completed,{children:"Completed, click back button to get to previous step"})]}),t(Y,{visible:ne,overlayBlur:2}),d("p",{className:"text-xs text-right",children:["Already have an account?",t("span",{className:"text-gray-500 cursor-pointer",onClick:()=>r("/auth/login"),children:" Login"})]}),d(Ne,{position:"center",mt:"xl",children:[t(K,{size:"xs",radius:"sm",color:"primary",className:G,onClick:de,children:"Back"}),t(K,{type:"submit",size:"xs",radius:"sm",color:"primary",className:G,onClick:F,children:"Next"})]})]})})})})}export{$e as default};
