import{w as l}from"./with-props-DiR25c27.js";import{s,o as e}from"./chunk-AYJ5UCUI-DVOtlY7r.js";const d="/assets/footer-CwnYalkd.png",n="/assets/mapa1-W-10ns1L.png",m="/assets/mapa2-DykHd5FE.png",x="/assets/mapa3-DimLG-N0.png",u="/assets/wyzwaniaTop-DE41ZJt8.png";function g(){const[t,a]=s.useState(parseInt("1"));return s.useEffect(()=>{const o=localStorage.getItem("mapId");o&&a(parseInt(o))},[]),e.jsxs("main",{className:"flex items-center justify-center pb-4 w-[1650px] mx-auto",children:[e.jsxs("div",{className:"flex-1 flex flex-col items-center gap-0 min-h-0",children:[e.jsx("header",{className:"flex flex-col items-center gap-9",children:e.jsx("div",{className:"w-[1650px] max-w-[100vw] p-4 header"})}),e.jsx("div",{className:"max-w-[1650px] w-full space-y-0 px-4 challengesTop"}),e.jsxs("div",{className:"max-w-[1650px] w-full space-y-0 px-4 map",style:{backgroundImage:`url(${t===1?n:t===2?m:x})`},children:[e.jsx(r,{positionX:1370,positionY:2090,mapId:2,setMapId:a}),e.jsx(r,{positionX:560,positionY:1790,mapId:3,setMapId:a})]}),e.jsx("div",{className:"max-w-[1650px] w-full space-y-0 px-4 footer"})]}),e.jsx("style",{children:`
        .header {
        background-color: #f0f0f0;
        background-image: url(${u});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2279px;
        }

        .map {
        background-image: url(${n});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2314px;
        position: relative;
        }

        .footer {
        background-image: url(${d});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 431px;
        }

      `})]})}function r({positionX:t,positionY:a,mapId:o,setMapId:c}){const i=`xButton${o}`,p=()=>{console.log(`show ${o}`),c(o),localStorage.setItem("mapId",o.toString())};return e.jsx("div",{className:i,onClick:p,children:e.jsx("style",{children:`
        .xButton${o} {
        height: 200px;
        width: 200px;
        background-color: transparent;
        cursor: pointer;
        // border: 2px solid #000;
        position: absolute;
        top: ${a}px;
        left: ${t}px;
        z-index: 10;

        transition: background-color 0.3s ease;
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
        }
      `})})}function b({}){return[{title:"wyzwania"},{name:"description",content:"Welcome to React Router!"}]}const k=l(function(){return e.jsx(g,{})});export{k as default,b as meta};
