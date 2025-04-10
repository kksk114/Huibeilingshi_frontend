import{d as B,r as S,p as E,Q as V,c as _,b as o,w as t,e as c,i as s,x as y,h as p,E as f,j as F,o as g,_ as M}from"./index-CV45lKxV.js";const R={class:"score-analysis-container"},U={class:"score-content"},N={key:0,class:"loading-container"},T={key:1,class:"score-details"},j={class:"score-item"},L={class:"progress-value"},H={class:"score-item"},I={class:"progress-value"},O={class:"analysis-content"},P={key:2,class:"no-data"},Q={class:"empty-actions"},Y=B({__name:"ScoreAnalysisView",setup(q){const w=F(),v=S(!1),a=S(null),h=[{color:"#F56C6C",percentage:60},{color:"#E6A23C",percentage:70},{color:"#5CB87A",percentage:80},{color:"#1989FA",percentage:90},{color:"#6F7AD3",percentage:100}];E(()=>{k()});const k=async()=>{v.value=!0;try{const r=await V.get("/api/student/get_score");r.data&&(a.value=r.data)}catch(r){console.error("获取分数数据失败:",r)}finally{v.value=!1}},C=()=>{k(),f.info("正在刷新数据...")},b=async()=>{try{if(!a.value){f.warning("暂无评分数据可供下载");return}const r=`论文评分: ${a.value.论文评分}
答辩材料评分: ${a.value.答辩材料评分}

评语:
${a.value.评语}`,e=new Blob([r],{type:"text/plain;charset=utf-8"}),m=window.URL.createObjectURL(e),l=document.createElement("a");l.href=m;const n=new Date,d=`${n.getFullYear()}${(n.getMonth()+1).toString().padStart(2,"0")}${n.getDate().toString().padStart(2,"0")}`,i=`${n.getHours().toString().padStart(2,"0")}${n.getMinutes().toString().padStart(2,"0")}`;l.setAttribute("download",`评分报告_${d}_${i}.txt`),document.body.appendChild(l),l.click(),document.body.removeChild(l),f.success("报告下载成功")}catch(r){console.error("下载报告失败:",r),f.error("下载报告失败，请稍后重试")}},x=()=>{w.push("/upload-paper")},$=()=>{w.push("/upload-defense")};return(r,e)=>{const m=c("el-skeleton"),l=c("el-progress"),n=c("el-col"),d=c("el-row"),i=c("el-card"),u=c("el-button"),D=c("el-empty");return g(),_("div",R,[o(i,{class:"score-card"},{header:t(()=>e[0]||(e[0]=[s("div",{class:"card-header"},[s("h2",null,"分数与分析结果")],-1)])),default:t(()=>[s("div",U,[e[10]||(e[10]=s("p",{class:"score-description"}," 查看您的论文和答辩评分以及详细分析结果。系统将对您的论文和答辩材料进行全面评估， 并提供专业的改进建议，帮助您提升学术水平。 ",-1)),v.value?(g(),_("div",N,[o(m,{rows:6,animated:""})])):a.value?(g(),_("div",T,[o(d,{gutter:20},{default:t(()=>[o(n,{span:24},{default:t(()=>[o(i,{shadow:"hover",class:"score-overview-card"},{header:t(()=>e[1]||(e[1]=[s("div",{class:"overview-header"},[s("h3",null,"总体评分")],-1)])),default:t(()=>[o(d,{gutter:20},{default:t(()=>[o(n,{xs:24,sm:12},{default:t(()=>[s("div",j,[e[2]||(e[2]=s("h4",null,"论文评分",-1)),o(l,{type:"dashboard",percentage:a.value.论文评分,color:h,"stroke-width":10},{default:t(({percentage:A})=>[s("span",L,y(a.value.论文评分),1)]),_:1},8,["percentage"])])]),_:1}),o(n,{xs:24,sm:12},{default:t(()=>[s("div",H,[e[3]||(e[3]=s("h4",null,"答辩材料评分",-1)),o(l,{type:"dashboard",percentage:a.value.答辩材料评分,color:h,"stroke-width":10},{default:t(({percentage:A})=>[s("span",I,y(a.value.答辩材料评分),1)]),_:1},8,["percentage"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(d,{gutter:20,class:"analysis-row"},{default:t(()=>[o(n,{span:24},{default:t(()=>[o(i,{shadow:"hover",class:"analysis-card"},{header:t(()=>e[4]||(e[4]=[s("div",{class:"analysis-header"},[s("h3",null,"评语")],-1)])),default:t(()=>[s("div",O,y(a.value.评语),1)]),_:1})]),_:1})]),_:1}),o(d,{gutter:20,class:"actions-row"},{default:t(()=>[o(n,{span:24,class:"actions-col"},{default:t(()=>[o(u,{type:"primary",onClick:C},{default:t(()=>e[5]||(e[5]=[p("刷新数据")])),_:1}),o(u,{type:"success",onClick:b},{default:t(()=>e[6]||(e[6]=[p("下载完整报告")])),_:1})]),_:1})]),_:1})])):(g(),_("div",P,[o(D,{description:"暂无评分数据，请先上传论文和答辩材料"}),s("div",Q,[o(u,{type:"primary",onClick:C},{default:t(()=>e[7]||(e[7]=[p("获取分数和分析")])),_:1}),o(u,{onClick:x},{default:t(()=>e[8]||(e[8]=[p("上传论文")])),_:1}),o(u,{onClick:$},{default:t(()=>e[9]||(e[9]=[p("上传答辩材料")])),_:1})])]))])]),_:1})])}}}),G=M(Y,[["__scopeId","data-v-c19cff00"]]);export{G as default};
