import React, { useEffect, useState } from "react";

import footer from "./img/footer.png";
import map1 from "./img/mapa1.png";
import map2 from "./img/mapa2.png";
import map3 from "./img/mapa3.png";
import map4 from "./img/mapa4.png";
import map5 from "./img/mapa5.png";
import map6 from "./img/mapa6.png";
import map7 from "./img/mapa7.png";
import map8 from "./img/mapa8.png";
import wyzwaniaTop from "./img/wyzwaniaTop.png";
import TripModal from "~/components/TripModal/TripModal";
import { Route } from "react-router";

export function Welcome() {
  const [mapId, setMapId] = useState<number>(parseInt("1"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedMapId = localStorage.getItem("mapId");
    if (storedMapId) {
      setMapId(parseInt(storedMapId));
    }
  }, []);

  const maps: Record<number, string> = {
    1: map1,
    2: map2,
    3: map3,
    4: map4,
    5: map5,
    6: map6,
    7: map7,
    8: map8,
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
          className="max-w-[1650px] w-full space-y-0 px-4 map"
          style={{
            backgroundImage: `url(assets/mapa-0.jpg)`,
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
              mapId={1}
              setMapId={setMapId}
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
  mapId,
  setMapId,
}: {
  positionX: number;
  positionY: number;
  mapId: number;
  setMapId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const className = `xButton${mapId}`;

  const handleClick = () => {
    setMapId(mapId);
    localStorage.setItem("mapId", mapId.toString());
  };

  return (
    <>
      <button className={className} onClick={handleClick}></button>
      <div className={`route route${mapId}`}></div>
      <style>
        {`
        .xButton${mapId} {
          height: 285px;
          width: 300px;
          background-color: transparent;
          cursor: pointer;
          position: absolute;
          top: ${positionY}px;
          left: ${positionX}px;
          z-index: 10;
          background-image: url(/assets/Krok${mapId}/start1.png);

          // transition: background-color 0.3s ease;
          &:hover {
            background-image: url(/assets/Krok${mapId}/start2.png);
          }
        }

        .route${mapId} {
          position: absolute;
          background-image: url(/assets/Krok${mapId}/path_gray.png);
          // top: ${positionY + 100}px;
          // left: ${positionX + 100}px;
          top: 1810px;
          left: 415px;
          width: 895px;
          height: 489px;
          display: none;
        }

        .xButton${mapId}:hover + .route${mapId} {
          display: block;
        }
      `}
      </style>
    </>
  );
}
