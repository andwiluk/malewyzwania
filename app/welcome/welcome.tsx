import React, { useEffect, useState } from "react";

import footer from "./img/footer.png";
import map1 from "./img/mapa1.png";

import wyzwaniaTop from "./img/wyzwaniaTop.png";
import TripModal from "~/components/TripModal/TripModal";

export function Welcome() {
  const [mapId, setMapId] = useState<number>(parseInt("1"));
  const [stage, setStage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedMapId = localStorage.getItem("mapId");
    if (storedMapId) {
      setMapId(parseInt(storedMapId));
    }
  }, []);

  const maps: Record<number, string> = {
    1: map1,
  };

  return (
    <main className="flex items-center justify-center pb-4 w-[1650px] mx-auto z-[1]">
      <div className="flex-1 flex flex-col items-center gap-0 min-h-0">
        {/* <header className="flex flex-col items-center gap-9"> */}
        <div className="max-w-[1650px] w-full space-y-0 px-4 header"></div>
        {/* </header> */}
        <div className="max-w-[1650px] max-w-[1650px] w-full space-y-0 px-4 challengesTop"></div>
        {/* <div
          className="max-w-[1650px] w-full space-y-0 px-4 map"
          style={{
            backgroundImage: `url(${maps[mapId]})`,
            transition: "background-image 0.8s ease-in-out",
          }}
        > */}
        <div
          className="max-w-[1650px] w-full space-y-0 main"
          style={{ backgroundImage: `url('/assets/mapa-0.jpg')` }}
        >
          <div
            className={`w-full space-y-0 px-4 map map${stage}`}
            style={{
              backgroundImage: `url('/assets/Krok${stage}/mapa-${stage}.png')`,
              transition: "background-image 0.8s ease-in-out",
            }}
          >
            <div>
              {/* <Button
              positionX={343}
              positionY={2120}
              mapId={1}
              setMapId={setMapId}
            /> */}
              <Button
                positionX={1200}
                positionY={2030}
                stage={1}
                // setStage={setStage}
                onClick={() => setStage(1)}
                // setMapId={setMapId}
              />
              {/* <Button
              positionX={560}
              positionY={1790}
              mapId={3}
              setMapId={setMapId}
            /> */}
              {/*}
            <Button
              positionX={175}
              positionY={1415}
              mapId={4}
              setMapId={setMapId}
            />
            <Button
              positionX={895}
              positionY={1275}
              mapId={5}
              setMapId={setMapId}
            />
            <Button
              positionX={165}
              positionY={810}
              mapId={6}
              setMapId={setMapId}
            />
            <Button
              positionX={1075}
              positionY={470}
              mapId={7}
              setMapId={setMapId}
            />
            <Button
              positionX={690}
              positionY={150}
              mapId={8}
              setMapId={setMapId}
            /> */}
            </div>
          </div>
        </div>
        <div className="max-w-[1650px] w-full space-y-0 px-4 footer"></div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg tripModalButton"
      >
        Zdefiniuj etapy
      </button>

      <TripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>
        {`
        .header {
        background-color: #f0f0f0;
        background-image: url(${wyzwaniaTop});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2279px;
        }

        .map {
        background-image: url(${map1});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2314px;
        position: relative;
        }

        .footer {
        background-image: url(${footer});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 431px;
        }

        .tripModalButton {
          position: absolute;
          top: 4470px;
          left: 556px;
          background-color: #FFAA10;
          color: white;
          padding: 10px 20px;
          font-weight: bold;
          cursor: pointer;
        }

      `}
      </style>
    </main>
  );
}
export function Button({
  positionX,
  positionY,
  stage,
  // setStage,
  onClick,
}: {
  positionX: number;
  positionY: number;
  stage: number;
  // setStage: React.Dispatch<React.SetStateAction<number>>;
  onClick: any;
}) {
  const className = `xButton${stage}`;

  // const handleClick = () => {
  //   const nextStage = stage + 1;
  //   setStage(nextStage);
  //   // localStorage.setItem("mapId", nextStage.toString());
  //   // localStorage.setItem("stage", nextStage.toString());
  // };

  return (
    <>
      <button className={className} onClick={onClick}></button>
      <div className={`route route${stage}`}></div>
      <style>
        {`
        .xButton${stage} {
          height: 285px;
          width: 300px;
          // background-color: transparent;
          cursor: pointer;
          position: absolute;
          top: ${positionY}px;
          left: ${positionX}px;
          z-index: 10;
          background-image: url(/assets/Krok${stage}/x1.png);

          // transition: background-color 0.3s ease;
          &:hover {
            background-image: url(/assets/Krok${stage}/x2.png);
          }
        }

        .route${stage} {
          position: absolute;
          background-image: url(/assets/Krok${stage}/path_gray.png);
          // top: ${positionY + 100}px;
          // left: ${positionX + 100}px;
          top: 1810px;
          left: 415px;
          width: 895px;
          height: 489px;
          display: none;
        }

        .xButton${stage}:hover + .route${stage} {
          display: block;
        }

        .map1 {
          .xButton1, .route1 {
            display: block;
          }

          .xButton1 {
            background-image: url(/assets/Krok1/x2.png);
          }

          .route1 {
            background-image: url(/assets/Krok1/path_red.png);
          }

          .xButton2 {
            display: block;
          }
        }
      `}
      </style>
    </>
  );
}
