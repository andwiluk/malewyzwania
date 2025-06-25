import React, { useEffect, useState } from "react";

import footer from "./img/footer.png";

import wyzwaniaTop from "./img/wyzwaniaTop.png";
import TripModal from "~/components/TripModal/TripModal";
import {
  ButtonsContainer,
  Cloud,
  Dino,
  Flowers,
  Flowers2,
  Hi,
  Mountain,
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
  Path6,
  Ptero,
  Step1,
  Step2,
  TripModalButton,
  Volcano,
  XButton1,
  XButton2,
  XButton3,
  XButton4,
  XButton5,
  XButton6,
  XButton7,
} from "./wyzwania.style";

export function Welcome() {
  const [stage, setStage] = useState<number>(0);
  const [xHovered, setXHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedStage = localStorage.getItem("stage");
      if (storedStage) {
        setStage(parseInt(storedStage));
      }
    }
  }, []);

  let tripStages = "{}";
  if (typeof window !== "undefined" && window.localStorage) {
    tripStages = localStorage.getItem("tripStages") || "{}";
  }

  const parsedStages = JSON.parse(tripStages);

  const safeSetStage = (newStage: number) => {
    setStage(newStage);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("stage", newStage.toString());
    }
  };

  const handleStartButtonClick = () => {
    if (stage === 0) {
      if (!parsedStages?.stage1?.length) {
        setIsModalOpen(true);
      } else {
        safeSetStage(1);
        setXHovered(false);
      }
    } else {
      safeSetStage(0);
    }
  };

  return (
    <main className="flex items-center justify-center pb-4 w-[1900px] mx-auto z-[1]">
      <div className="flex-1 flex flex-col items-center gap-0 min-h-0">
        <div className="max-w-[1920px] w-full space-y-0 px-4 header"></div>
        <div className="max-w-[1920px] max-w-[1920px] w-full space-y-0 px-4 challengesTop"></div>
        <div
          className="max-w-[1920px] w-full space-y-0 main"
          style={{ backgroundImage: `url('/assets/mapa-0.jpg')` }}
        >
          <div
            className={`w-full space-y-0 px-4 map map${stage}`}
            style={{
              backgroundImage: `url('/assets/Krok${stage}/mapa-${stage}.png')`,
              transition: "background-image 0.5s ease-in-out",
            }}
          >
            <Step1>
              <XButton1
                onMouseEnter={() => stage < 1 && setXHovered(true)}
                onMouseLeave={() => setXHovered(false)}
                onClick={() => handleStartButtonClick()}
                color={stage >= 1 ? "red" : "gray"}
              />
              {xHovered && (
                <>
                  <Path1 color="gray" />
                  <XButton2 color="gray" />
                </>
              )}
              {stage >= 1 && (
                <>
                  <Path1 color={stage >= 2 ? "green" : "red"} />
                  <XButton2
                    color={stage >= 2 ? "red" : "gray"}
                    onMouseEnter={() => stage < 2 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => safeSetStage(2)}
                  />
                  <Volcano />
                  <Dino />
                  <Hi />
                  <Flowers />

                  {xHovered && (
                    <>
                      <Path2 color="gray" />
                      <XButton3 color="gray" />
                    </>
                  )}
                </>
              )}

              {stage >= 2 && (
                <>
                  <Path2 color={stage >= 3 ? "green" : "red"} />
                  <XButton3
                    color={stage >= 3 ? "red" : "gray"}
                    onMouseEnter={() => stage < 3 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => safeSetStage(3)}
                  />
                  <Ptero />
                  <Flowers2 />
                  <Mountain />
                  <Cloud>
                    <span>{parsedStages.stage1} km</span>
                  </Cloud>
                </>
              )}

              {stage >= 3 && (
                <>
                  <Path3 color={stage >= 4 ? "green" : "red"} />
                  <XButton4
                    color={stage >= 4 ? "red" : "gray"}
                    onMouseEnter={() => stage < 4 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => safeSetStage(4)}
                  />
                </>
              )}

              {stage >= 4 && (
                <>
                  <Path4 color={stage >= 5 ? "green" : "red"} />
                  <XButton5
                    color={stage >= 5 ? "red" : "gray"}
                    onMouseEnter={() => stage < 5 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => safeSetStage(5)}
                  />
                </>
              )}

              {stage >= 5 && (
                <>
                  <Path5 color={stage >= 6 ? "green" : "red"} />
                  <XButton6
                    color={stage >= 6 ? "red" : "gray"}
                    onMouseEnter={() => stage < 6 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => safeSetStage(6)}
                  />
                </>
              )}

              {stage >= 6 && (
                <>
                  <Path6 color={stage >= 7 ? "green" : "red"} />
                  <XButton7
                    color={stage >= 7 ? "red" : "gray"}
                    onMouseEnter={() => stage < 7 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => safeSetStage(7)}
                  />
                </>
              )}
            </Step1>

            <ButtonsContainer>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Zapisz postęp
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => safeSetStage(0)}
              >
                Zacznij od nowa
              </button>
              <TripModalButton
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg tripModalButton"
              >
                Zdefiniuj etapy
              </TripModalButton>
            </ButtonsContainer>
          </div>
        </div>
        <div className="max-w-[1920px] w-full space-y-0 px-4 footer"></div>
      </div>

      <TripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>
        {`
        .header {
        background-color: #f0f0f0;
        background-image: url(${wyzwaniaTop});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2630px;
        }

        .map {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 2717px;
        position: relative;
        }

        .footer {
        background-image: url(${footer});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 431px;
        }
      `}
      </style>
    </main>
  );
}
