import{R as n,r as o,m as r}from"./index.8c646974.js";const s=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,u=n["useId".toString()]||(()=>{});function i(){const[t,e]=o.exports.useState("");return r(()=>{e(s())},[]),t}function a(){const t=u();return t?`mantine-${t.replace(/:/g,"")}`:""}function d(t){return typeof t=="string"?t:a()||i()}export{d as u};