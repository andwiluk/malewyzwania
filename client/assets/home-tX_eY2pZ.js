import{w as l}from"./with-props-DiR25c27.js";import{s as r,o as e}from"./chunk-AYJ5UCUI-DVOtlY7r.js";const m="/assets/footer-CwnYalkd.png",c="/assets/mapa1-W-10ns1L.png",d="/assets/mapa2-DykHd5FE.png",u="/assets/mapa3-DimLG-N0.png",x="/assets/wyzwaniaTop-DE41ZJt8.png";function g(){const[a,o]=r.useState(parseInt("1"));r.useEffect(()=>{const s=localStorage.getItem("mapId");s&&o(parseInt(s))},[]);const t={1:c,2:d,3:u};return e.jsxs("main",{className:"flex items-center justify-center pb-4 w-[1650px] mx-auto",children:[e.jsxs("div",{className:"flex-1 flex flex-col items-center gap-0 min-h-0",children:[e.jsx("header",{className:"flex flex-col items-center gap-9",children:e.jsx("div",{className:"w-[1650px] max-w-[100vw] p-4 header"})}),e.jsx("div",{className:"max-w-[1650px] w-full space-y-0 px-4 challengesTop"}),e.jsxs("div",{className:"max-w-[1650px] w-full space-y-0 px-4 map",style:{backgroundImage:`url(${t[a]})`,transition:"background-image 0.8s ease-in-out"},children:[e.jsx(n,{positionX:1370,positionY:2090,mapId:2,setMapId:o}),e.jsx(n,{positionX:560,positionY:1790,mapId:3,setMapId:o}),e.jsx(n,{positionX:343,positionY:2120,mapId:1,setMapId:o})]}),e.jsx("div",{className:"max-w-[1650px] w-full space-y-0 px-4 footer"})]}),e.jsx("style",{children:`
        .header {
        background-color: #f0f0f0;
        background-image: url(${x});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2279px;
        }

        .map {
        background-image: url(${c});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2314px;
        position: relative;
        }

        .footer {
        background-image: url(${m});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 431px;
        }

      `})]})}function n({positionX:a,positionY:o,mapId:t,setMapId:s}){const i=`xButton${t}`,p=()=>{s(t),localStorage.setItem("mapId",t.toString())};return e.jsx("div",{className:i,onClick:p,children:e.jsx("style",{children:`
        .xButton${t} {
          height: 200px;
          width: 200px;
          background-color: transparent;
          cursor: pointer;
          position: absolute;
          top: ${o}px;
          left: ${a}px;
          z-index: 10;

          // transition: background-color 0.3s ease;
          // &:hover {
          //   background-color: rgba(255, 255, 255, 0.5);
          // }
        }
      `})})}function k({}){return[{title:"wyzwania"},{name:"description",content:"Welcome to React Router!"}]}const b=l(function(){return e.jsx(g,{})});export{b as default,k as meta};
