import{w as F}from"./@vue_runtime-dom@3.2.47-1f3621cd.js";import{d as N,j as V,D as _,m as j,f as H,E as q,G as K,H as o,T as ee}from"./@vue_runtime-core@3.2.47-d9a89b1b.js";import{r as C,j as te,u as d}from"./@vue_reactivity@3.2.47-41cada1d.js";import{l as f,n as w,J as O}from"./@vue_shared@3.2.47-1870027e.js";const ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAELklEQVRYR+2YW2wUZRTH//9vtlCoF9IoIklT3PqgPGi326hoetuaGEhIr9SgCYkkgt2WGOQVCca+GavWdr0GjD4YhG3RB3hply1LQA1tEQIxEXapGI2pEkys9LIzx2ylYWfY6e5sF0oi+7hzzvl+3/9855xvhrjNf7zN+XAHcL4Z+n8o6JWTeYt++W25S596AIZy6TB+n3yo+Nchlk8vmIIVowdXU9c3Q1gDSilBlQwjgBAYFGDvdF58/4milqvZwDpOcXWsb5Uh8hmBqkwXFMhlCN8aX5LXNbRy/T+Z+iXsHAFWRXs3QGQPyLucLDJrK5DgUXdTsxPfjAEro8E3Ce50EtxsKxPTwCPH3U2jTmJkBJgWTnAMxDeGMEoa0xQ+LJQnCD4HYFkCyAC3RdwN3U7gMkpxRTTYrMD91sCJIgCxV5R6O1Jcfy7VwonqLoj9/CqB2kF341qncGkBvRe+ureAWpRgoalCBecMFzcdK24YymZRJz5zprgq1tsJwXYL3CVZGvdGHmwZc7JQtra2gE+f712ep2QUYP714DJhaJrXLqXZQszlZwtYdSHoB9ljVk/ePVrSZFL0ZkAlxzQBVseCT8WhZhRThtFB8plk9Zi/qCi8cv0fNxvKFrDy4oF11NXXIFy2EII4iBcG3Y03VLZT8OqRd5aFPduvOEpxRayvXolxAKB2g6NgEhobBlc1HHYKY7WvHf5wtVAPgegIlbbZ9seUZ7AyFnwewi9pGoUyDmhrB931kfnC1ZwOeKlLP8GZJi6QLSFP2yep4toXSbT3ZQAfX3O6omt8Nhd9r/aHQAUMOQywYBZo5uZD2ThQ2rbPCjlnH6yI9rUryE5DU75ctJaake46Be4DuDjF8dFBNA94/AdtiySVxIlpMlTS8td801o70vMigM9huTda2lhcKHVHPO2HZv/P6LIwX7hk/+qzPSvUJGMkrg8AQYTkroRdXMlE+HH/twsG6BsOdJHYZlaO/lBZ6weOiiSXqs3Gqj0TeAxx+T75DIpgwjC0onD51pQD4JaluPrkR/cpFT9DcoVp84LOgTL/DjtBbglgou+puHwB8lEznPxJw1XSX77VtgizBvQNBw4RMqB7xt4Lc3c8lQKJaQHoO4R8ydz0/7MWoCXk8c85MrMC9J3qaafw/WtQlwXST+F3BnAeYB4obgJ1BJIuG+YtiKAjVOZ/Pd1ZdwzoG+4uBtSPpjaRbhXLcwF3hzytb2TilgVgT5BkYybBrTYC+Rvg5nRpdTRJrIs8+VPXPQXj2i4ItxC4O2NQQUQnN4U9rRcz9nH64p4ceM2lziX5Y4s3KHCdUHwE77ecMkMEp6BwhIa2Z6DslZRvfulgHafYLuCas58WLp2aLCFUga70qxOFU6dPFL2W1feYeaU43Y5z/TxnCuYabMEuC043ckdBp4pZ7f8FE5psOI1g6fwAAAAASUVORK5CYII=",ie=["width","height"],ne=["width","height"],oe=["width","height"],se=o("div",{class:"loading-gif_"},[o("span"),o("span"),o("span"),o("span"),o("span")],-1),le=[se],ce={class:"auth-control_"},re={class:"range-text"},de=o("div",null,null,-1),he=o("div",null,null,-1),ue=o("div",null,null,-1),ve=[de,he,ue],we=N({__name:"App",props:{canvasWidth:{type:Number,default:310},canvasHeight:{type:Number,default:160},show:{type:Boolean,default:!1},puzzleScale:{type:Number,default:1},sliderSize:{type:Number,default:50},range:{type:Number,default:10},imgs:{type:Array,default:null},successText:{type:String,default:"验证通过！"},failText:{type:String,default:"验证失败，请重试"},sliderText:{type:String,default:"拖动滑块完成拼图"}},emits:["success","fail","close"],setup(l,{emit:B}){const n=l;V(()=>{document.addEventListener("mousemove",X,!1),document.addEventListener("mouseup",T,!1),document.addEventListener("touchmove",X,{passive:!1}),document.addEventListener("touchend",T,!1),n.show&&(document.body.classList.add("vue-puzzle-overflow"),S())}),_(()=>{e.timer1&&clearTimeout(e.timer1),document.removeEventListener("mousemove",X,!1),document.removeEventListener("mouseup",T,!1),document.removeEventListener("touchmove",X),document.removeEventListener("touchend",T,!1)});const W=C(),D=C(),I=C(),z=C(),e=te({mouseDown:!1,startWidth:50,startX:0,newX:0,pinX:0,pinY:0,loading:!1,isCanSlide:!1,error:!1,infoBoxShow:!1,infoText:"",infoBoxFail:!1,timer1:void 0,closeDown:!1,isSuccess:!1,imgIndex:-1,isSubmting:!1});j(()=>n.show,i=>{i?(document.body.classList.add("vue-puzzle-overflow"),S()):(e.isSubmting=!1,e.isSuccess=!1,e.infoBoxShow=!1,document.body.classList.remove("vue-puzzle-overflow"))});const x=H(()=>{const i=e.startWidth+e.newX-e.startX;return i<r.value?r.value:i>n.canvasWidth?n.canvasWidth:i}),c=H(()=>Math.round(Math.max(Math.min(n.puzzleScale,2),.2)*52.5+6)),r=H(()=>Math.max(Math.min(Math.round(n.sliderSize),Math.round(n.canvasWidth*.5)),10)),P=()=>{!e.mouseDown&&!e.isSubmting&&(e.timer1&&clearTimeout(e.timer1),B("close"))},L=()=>{e.closeDown=!0},R=()=>{e.closeDown&&P(),e.closeDown=!1},k=i=>{var t;e.isCanSlide&&(e.mouseDown=!0,e.startWidth=((t=W.value)==null?void 0:t.clientWidth)??0,e.newX=i.clientX||i.changedTouches[0].clientX,e.startX=i.clientX||i.changedTouches[0].clientX)},X=i=>{e.mouseDown&&(i.preventDefault(),e.newX=i.clientX||i.changedTouches[0].clientX)},T=()=>{e.mouseDown&&(e.mouseDown=!1,J())},E=(i=!1)=>{var t;if(e.loading&&!i)return;e.loading=!0,e.isCanSlide=!1;const h=D.value,v=I.value,m=z.value,a=h==null?void 0:h.getContext("2d",{willReadFrequently:!0}),p=v==null?void 0:v.getContext("2d"),Y=m==null?void 0:m.getContext("2d");if(!a||!p||!Y){console.error("not found ctx / ctx2 / ctx3");return}const G=navigator.userAgent.indexOf("Firefox")>=0&&navigator.userAgent.indexOf("Windows")>=0,g=document.createElement("img");if(a.fillStyle="rgba(255,255,255,1)",Y.fillStyle="rgba(255,255,255,1)",a.clearRect(0,0,n.canvasWidth,n.canvasHeight),p.clearRect(0,0,n.canvasWidth,n.canvasHeight),e.pinX=s(c.value+20,n.canvasWidth-c.value-10),e.pinY=s(20,n.canvasHeight-c.value-10),g.crossOrigin="anonymous",g.onload=()=>{const[u,M,b,A]=Z(g);a.save(),y(a),a.closePath(),G?(a.clip(),a.save(),a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowColor="#000",a.shadowBlur=3,a.fill(),a.restore()):(a.shadowOffsetX=0,a.shadowOffsetY=0,a.shadowColor="#000",a.shadowBlur=3,a.fill(),a.clip()),a.drawImage(g,u,M,b,A),Y.fillRect(0,0,n.canvasWidth,n.canvasHeight),Y.drawImage(g,u,M,b,A),a.globalCompositeOperation="source-atop",y(a),a.arc(e.pinX+Math.ceil(c.value/2),e.pinY+Math.ceil(c.value/2),c.value*1.2,0,Math.PI*2,!0),a.closePath(),a.shadowColor="rgba(255, 255, 255, .8)",a.shadowOffsetX=-1,a.shadowOffsetY=-1,a.shadowBlur=Math.min(Math.ceil(8*n.puzzleScale),12),a.fillStyle="#ffffaa",a.fill();const $=a.getImageData(e.pinX-3,e.pinY-20,e.pinX+c.value+5,e.pinY+c.value+5);p.putImageData($,0,e.pinY-20),a.restore(),a.clearRect(0,0,n.canvasWidth,n.canvasHeight),a.save(),y(a),a.globalAlpha=.8,a.fillStyle="#ffffff",a.fill(),a.restore(),a.save(),a.globalCompositeOperation="source-atop",y(a),a.arc(e.pinX+Math.ceil(c.value/2),e.pinY+Math.ceil(c.value/2),c.value*1.2,0,Math.PI*2,!0),a.shadowColor="#000",a.shadowOffsetX=2,a.shadowOffsetY=2,a.shadowBlur=16,a.fill(),a.restore(),a.save(),a.globalCompositeOperation="destination-over",a.drawImage(g,u,M,b,A),a.restore(),e.loading=!1,e.isCanSlide=!0},g.onerror=()=>{E(!0)},!i&&(t=n.imgs)!=null&&t.length){let u=s(0,n.imgs.length-1);u===e.imgIndex&&(u===n.imgs.length-1?u=0:u++),e.imgIndex=u,g.src=n.imgs[u]}else g.src=Q()},s=(i,t)=>Math.ceil(Math.random()*(t-i)+i),Z=i=>{const t=i.width/i.height,h=n.canvasWidth/n.canvasHeight;let v=0,m=0,a=0,p=0;return t>h?(p=n.canvasHeight,a=t*p,m=0,v=(n.canvasWidth-a)/2):(a=n.canvasWidth,p=a/t,v=0,m=(n.canvasHeight-p)/2),[v,m,a,p]},y=i=>{const t=Math.ceil(15*n.puzzleScale);i.beginPath(),i.moveTo(e.pinX,e.pinY),i.lineTo(e.pinX+t,e.pinY),i.arcTo(e.pinX+t,e.pinY-t/2,e.pinX+t+t/2,e.pinY-t/2,t/2),i.arcTo(e.pinX+t+t,e.pinY-t/2,e.pinX+t+t,e.pinY,t/2),i.lineTo(e.pinX+t+t+t,e.pinY),i.lineTo(e.pinX+t+t+t,e.pinY+t),i.arcTo(e.pinX+t+t+t+t/2,e.pinY+t,e.pinX+t+t+t+t/2,e.pinY+t+t/2,t/2),i.arcTo(e.pinX+t+t+t+t/2,e.pinY+t+t,e.pinX+t+t+t,e.pinY+t+t,t/2),i.lineTo(e.pinX+t+t+t,e.pinY+t+t+t),i.lineTo(e.pinX,e.pinY+t+t+t),i.lineTo(e.pinX,e.pinY+t+t),i.arcTo(e.pinX+t/2,e.pinY+t+t,e.pinX+t/2,e.pinY+t+t/2,t/2),i.arcTo(e.pinX+t/2,e.pinY+t,e.pinX,e.pinY+t,t/2),i.lineTo(e.pinX,e.pinY)},Q=()=>{const i=document.createElement("canvas"),t=i.getContext("2d");if(!t)return console.error("not found ctx"),"";i.width=n.canvasWidth,i.height=n.canvasHeight,t.fillStyle=`rgb(${s(100,255)},${s(100,255)},${s(100,255)})`,t.fillRect(0,0,n.canvasWidth,n.canvasHeight);for(let h=0;h<12;h++)if(t.fillStyle=`rgb(${s(100,255)},${s(100,255)},${s(100,255)})`,t.strokeStyle=`rgb(${s(100,255)},${s(100,255)},${s(100,255)})`,s(0,2)>1)t.save(),t.rotate(s(-90,90)*Math.PI/180),t.fillRect(s(-20,i.width-20),s(-20,i.height-20),s(10,i.width/2+10),s(10,i.height/2+10)),t.restore();else{t.beginPath();const v=s(-Math.PI,Math.PI);t.arc(s(0,i.width),s(0,i.height),s(10,i.height/2+10),v,v+Math.PI*1.5),t.closePath(),t.fill()}return i.toDataURL("image/png")},J=()=>{e.isSubmting=!0;const i=Math.abs(e.pinX-(x.value-r.value)+(c.value-r.value)*((x.value-r.value)/(n.canvasWidth-r.value))-3);i<n.range?(e.infoText=n.successText,e.infoBoxFail=!1,e.infoBoxShow=!0,e.isCanSlide=!1,e.isSuccess=!0,e.timer1&&clearTimeout(e.timer1),e.timer1=setTimeout(()=>{e.isSubmting=!1,B("success",i)},800)):(e.infoText=n.failText,e.infoBoxFail=!0,e.infoBoxShow=!0,e.isCanSlide=!1,B("fail",i),e.timer1&&clearTimeout(e.timer1),e.timer1=setTimeout(()=>{e.isSubmting=!1,S()},800))},U=()=>{e.infoBoxFail=!1,e.infoBoxShow=!1,e.isCanSlide=!1,e.isSuccess=!1,e.startWidth=r.value,e.startX=0,e.newX=0},S=()=>{e.isSubmting||(U(),E())};return(i,t)=>(q(),K(ee,{to:"body"},[o("div",{class:w(["vue-puzzle-vcode",{show_:l.show}]),onMousedown:L,onMouseup:R,onTouchstart:L,onTouchend:R},[o("div",{class:"vue-auth-box_",onMousedown:t[2]||(t[2]=F(()=>{},["stop"])),onTouchstart:t[3]||(t[3]=F(()=>{},["stop"]))},[o("div",{class:"auth-body_",style:f(`height: ${l.canvasHeight}px`)},[o("canvas",{ref_key:"canvas1",ref:D,width:l.canvasWidth,height:l.canvasHeight,style:f(`width:${l.canvasWidth}px;height:${l.canvasHeight}px`)},null,12,ie),o("canvas",{ref_key:"canvas3",ref:z,class:w(["auth-canvas3_",{show:e.isSuccess}]),width:l.canvasWidth,height:l.canvasHeight,style:f(`width:${l.canvasWidth}px;height:${l.canvasHeight}px`)},null,14,ne),o("canvas",{ref_key:"canvas2",ref:I,class:"auth-canvas2_",width:d(c),height:l.canvasHeight,style:f(`width:${d(c)}px;height:${l.canvasHeight}px;transform:translateX(${d(x)-d(r)-(d(c)-d(r))*((d(x)-d(r))/(l.canvasWidth-d(r)))}px)`)},null,12,oe),o("div",{class:w(["loading-box_",{hide_:!e.loading}])},le,2),o("div",{class:w(["info-box_",{show:e.infoBoxShow},{fail:e.infoBoxFail}])},O(e.infoText),3),o("div",{class:w(["flash_",{show:e.isSuccess}]),style:f(`transform: translateX(${e.isSuccess?`${l.canvasWidth+l.canvasHeight*.578}px`:`-${l.canvasHeight*.578}px`}) skew(-30deg, 0);`)},null,6),o("img",{class:"reset_",onClick:S,src:ae})],4),o("div",ce,[o("div",{class:"range-box",style:f(`height:${d(r)}px`)},[o("div",re,O(l.sliderText),1),o("div",{class:"range-slider",ref_key:"rangeSlider",ref:W,style:f(`width:${d(x)}px`)},[o("div",{class:w(["range-btn",{isDown:e.mouseDown}]),style:f(`width:${d(r)}px`),onMousedown:t[0]||(t[0]=h=>k(h)),onTouchstart:t[1]||(t[1]=h=>k(h))},ve,38)],4)],4)])],32)],34)]))}});export{we as g};
