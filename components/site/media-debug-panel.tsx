"use client";
import { useEffect, useState } from "react";

/** Opt-in, local-only support view. No telemetry or preference changes. */
export function MediaDebugPanel() {
 const [enabled,setEnabled]=useState(false),[open,setOpen]=useState(false),[report,setReport]=useState(""),[copied,setCopied]=useState(false);
 useEffect(()=>{setEnabled(new URLSearchParams(location.search).get("mediaDebug")==="1");},[]);
 useEffect(()=>{
  if(!enabled)return;
  const update=()=>{
   const events=(window as unknown as {__samkwangMediaDiagnostics?:unknown}).__samkwangMediaDiagnostics;
   setReport(JSON.stringify({page:location.pathname,userAgent:navigator.userAgent,reducedMotion:matchMedia("(prefers-reduced-motion: reduce)").matches,hidden:document.hidden,viewport:{width:innerWidth,height:innerHeight},videos:Array.from(document.querySelectorAll("video")).map(v=>({source:v.currentSrc?new URL(v.currentSrc,location.href).pathname:null,time:v.currentTime,paused:v.paused,readyState:v.readyState,networkState:v.networkState,muted:v.muted,playsInline:v.playsInline,error:v.error?{code:v.error.code,message:v.error.message}:null})),events:events??[]},null,2));
  };update();const timer=setInterval(update,1000);return()=>clearInterval(timer);
 },[enabled]);
 if(!enabled)return null;
 return <aside aria-label="영상 진단" style={{position:"fixed",bottom:12,left:12,right:12,zIndex:1000,color:"#fff",background:"#152f40",borderRadius:8,padding:12,maxWidth:620,fontSize:13,boxShadow:"0 4px 24px #0004"}}>
  <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}><button type="button" aria-expanded={open} onClick={()=>setOpen(!open)} style={{minHeight:44}}>영상 진단 {open?"접기":"보기"}</button><button type="button" style={{minHeight:44}} onClick={async()=>{try{await navigator.clipboard.writeText(report);setCopied(true);}catch{setOpen(true);}}}>{copied?"복사됨":"진단 복사"}</button><button type="button" style={{minHeight:44,marginLeft:"auto"}} onClick={()=>setEnabled(false)}>닫기</button></div>
  {open&&<><p>이 화면의 정보는 자동 전송되지 않습니다. 복사해 담당자에게 전달할 수 있습니다.</p><textarea aria-label="영상 진단 정보" readOnly value={report} style={{display:"block",width:"100%",height:"30vh",marginTop:8,color:"#152f40",background:"white",fontSize:12,padding:8}}/></>}
 </aside>;
}
