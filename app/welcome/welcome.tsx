import { use, useEffect, useRef, useState } from "react";

import footer from "./img/footer.png";

import wyzwaniaTop from "./img/wyzwaniaTop.png";
import TripModal from "~/components/TripModal/TripModal";
import {
  BalloonStep3,
  ButtonsContainer,
  Cloud,
  Dino,
  DinoMiniStep3,
  DinoStep3,
  Flowers,
  Flowers2,
  FlowersStep3,
  Hi,
  Mountain,
  Path1,
  Path2,
  Path3,
  Path4,
  Path5,
  Path6,
  Ptero,
  ShowCongratulations,
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
  const [dinoHovered, setDinoHovered] = useState(0);
  const [tooltipHovered, setTooltipHovered] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const hideTooltipTimeout = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (!parsedStages?.stage1) {
      setIsModalOpen(true);
    }
  }, []);

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

  const handleFinalButtonClick = () => {
    setShowCongratulations(true);
  };

  const showTooltip = dinoHovered || tooltipHovered;

  useEffect(() => {
    if (dinoHovered) {
      // audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [dinoHovered]);

  const handleDinoMouseLeave = () => {
    hideTooltipTimeout.current = setTimeout(() => {
      setDinoHovered(0);
    }, 200);
  };

  const handleTooltipMouseEnter = () => {
    setTooltipHovered(true);
    if (hideTooltipTimeout.current) {
      clearTimeout(hideTooltipTimeout.current);
      hideTooltipTimeout.current = null;
    }
  };

  const handleTooltipMouseLeave = () => {
    setTooltipHovered(false);
    hideTooltipTimeout.current = setTimeout(() => {
      setDinoHovered(0);
    }, 200);
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
                  <Dino
                    onMouseEnter={() => {
                      setDinoHovered(1);
                    }}
                    onMouseLeave={handleDinoMouseLeave}
                    style={{ position: "relative", zIndex: 10 }}
                  />
                  {showTooltip && dinoHovered === 1 && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          left: 1290,
                          top: 1600,
                          zIndex: 100,
                          background: "#FFB800",
                          borderRadius: 24,
                          padding: 32,
                          width: 400,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                          color: "#1A1A1A",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={handleTooltipMouseEnter}
                        onMouseLeave={handleTooltipMouseLeave}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 16,
                            gap: 16,
                          }}
                        >
                          {/* <div
                          style={{git
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 16,
                          }}
                        >
                          <Dino style={{ width: 60, height: 60 }} />
                        </div> */}
                          <img src="/assets/miniatury/trexmini.png" />
                          <div>
                            <div
                              style={{
                                fontWeight: "bold",
                                fontSize: 32,
                                color: "#E94E1B",
                              }}
                            >
                              T-Rex
                            </div>
                          </div>
                        </div>
                        <div style={{ fontSize: 18, marginBottom: 16 }}>
                          Choć Tea Rex znany jest jako samotny łowca, istnieją
                          dowody, że Tyranozaury mogły żyć w grupach. Co
                          ciekawe, młodociany Tea Rex był znacznie smuklejszy i
                          szybszy – wyglądał bardziej jak „super drapieżne
                          struś” niż masywny czołg, którym stawał się w
                          dorosłości. Miał potężną głowę, krótkie, ale silne
                          przednie łapy i długie, mocne nogi, które pozwalały mu
                          biegać. Jego ogon służył mu za przeciwwagę.
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "2px solid #35A43C",
                              borderRadius: "50%",
                              width: 48,
                              height: 48,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              cursor: "pointer",
                              color: "#35A43C",
                              fontWeight: "bold",
                            }}
                            onClick={() => {
                              audioRef.current?.play();
                            }}
                          >
                            &#x25B7;
                          </button>

                          <span
                            style={{
                              display: "block",
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#35A43C",
                            }}
                          >
                            Odtwórz
                          </span>
                        </div>
                        <audio ref={audioRef} src="/assets/audio/Trex.mp3" />
                      </div>

                      <Hi />
                    </>
                  )}
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
                  <Ptero
                    onMouseEnter={() => {
                      setDinoHovered(2);
                    }}
                    onMouseLeave={handleDinoMouseLeave}
                    // style={{ position: "relative", zIndex: 10 }}
                  />
                  {showTooltip && dinoHovered === 2 && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          left: 820,
                          top: 910,
                          zIndex: 100,
                          background: "#FFB800",
                          borderRadius: 24,
                          padding: 32,
                          width: 400,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                          color: "#1A1A1A",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={handleTooltipMouseEnter}
                        onMouseLeave={handleTooltipMouseLeave}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 16,
                            gap: 16,
                          }}
                        >
                          <img src="/assets/miniatury/pteromini.png" />
                          <div>
                            <div
                              style={{
                                fontWeight: "bold",
                                fontSize: 32,
                                color: "#E94E1B",
                              }}
                            >
                              Ptero
                            </div>
                          </div>
                        </div>
                        <div style={{ fontSize: 18, marginBottom: 16 }}>
                          Pterodaktyl to duży, latający gad z czasów
                          prehistorycznych, który był jednym z pierwszych
                          odkrytych latających stworzeń. Charakteryzował się
                          długimi, błoniastymi skrzydłami, które pozwalały mu
                          latać. Pterodaktyle nie były dinozaurami, ale należały
                          do grupy pterozaurów, które żyły w tym samym okresie
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "2px solid #35A43C",
                              borderRadius: "50%",
                              width: 48,
                              height: 48,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              cursor: "pointer",
                              color: "#35A43C",
                              fontWeight: "bold",
                            }}
                            onClick={() => {
                              audioRef.current?.play();
                            }}
                          >
                            &#x25B7;
                          </button>

                          <span
                            style={{
                              display: "block",
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#35A43C",
                            }}
                          >
                            Odtwórz
                          </span>
                        </div>
                        <audio ref={audioRef} src="/assets/audio/Ptero.mp3" />
                      </div>
                    </>
                  )}
                  <Flowers2 />
                  <Mountain />
                  <Cloud>
                    <span>{parsedStages.stage1} km</span>
                  </Cloud>

                  {xHovered && (
                    <>
                      <Path3 color="gray" />
                      <XButton4 color="gray" />
                    </>
                  )}
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

                  <DinoStep3 />
                  <DinoMiniStep3
                    onMouseEnter={() => {
                      setDinoHovered(3);
                    }}
                    onMouseLeave={handleDinoMouseLeave}
                    style={{ position: "relative", zIndex: 10 }}
                  />
                  {showTooltip && dinoHovered === 3 && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          left: 220,
                          top: 910,
                          zIndex: 100,
                          background: "#FFB800",
                          borderRadius: 24,
                          padding: 32,
                          width: 400,
                          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                          color: "#1A1A1A",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={handleTooltipMouseEnter}
                        onMouseLeave={handleTooltipMouseLeave}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 16,
                            gap: 16,
                          }}
                        >
                          <img src="/assets/miniatury/minidino.png" />
                          <div>
                            <div
                              style={{
                                fontWeight: "bold",
                                fontSize: 32,
                                color: "#E94E1B",
                              }}
                            >
                              Kidosaur
                            </div>
                          </div>
                        </div>
                        <div style={{ fontSize: 18, marginBottom: 16 }}>
                          Kidozaur to niezwykły dinozaur, który nigdy nie dorósł
                          — i wcale nie zamierzał! Wykluł się z jajka pewnego
                          pochmurnego poranka i od razu postanowił zostać
                          wiecznym dino-dzieckiem. Miał krótkie łapki idealne do
                          przytulania, ogromne oczy pełne ciekawości i grzebień
                          na głowie, który zmieniał kolor w zależności od
                          nastroju. Czerwony – zły, zielony – głodny, tęczowy –
                          gotowy na przygodę!
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "2px solid #35A43C",
                              borderRadius: "50%",
                              width: 48,
                              height: 48,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              cursor: "pointer",
                              color: "#35A43C",
                              fontWeight: "bold",
                            }}
                            onClick={() => {
                              audioRef.current?.play();
                            }}
                          >
                            &#x25B7;
                          </button>

                          <span
                            style={{
                              display: "block",
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#35A43C",
                            }}
                          >
                            Odtwórz
                          </span>
                        </div>
                        <audio
                          ref={audioRef}
                          src="/assets/audio/Kidosaur.mp3"
                        />
                      </div>
                    </>
                  )}
                  <FlowersStep3 />
                  <BalloonStep3>
                    <span>{parsedStages.stage2} km</span>
                  </BalloonStep3>

                  {xHovered && (
                    <>
                      <Path4 color="gray" />
                      <XButton5 color="gray" />
                    </>
                  )}
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

                  {xHovered && (
                    <>
                      <Path5 color="gray" />
                      <XButton6 color="gray" />
                    </>
                  )}
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

                  {xHovered && (
                    <>
                      <Path6 color="gray" />
                      <XButton7 color="gray" />
                    </>
                  )}
                </>
              )}

              {stage >= 6 && (
                <>
                  <Path6 color={stage >= 7 ? "green" : "red"} />
                  <XButton7
                    color={stage >= 7 ? "red" : "gray"}
                    onMouseEnter={() => stage < 7 && setXHovered(true)}
                    onMouseLeave={() => setXHovered(false)}
                    onClick={() => {
                      safeSetStage(7);
                      handleFinalButtonClick();
                    }}
                  />
                </>
              )}
              {showCongratulations && (
                <>
                  <ShowCongratulations
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      left: "50%",
                      top: "20%",
                      transform: "translate(-50%, -20%)",
                      background: "transparent",
                      backgroundImage: `url('/assets/Krok7/congratulations.png')`,
                      borderRadius: "24px",
                      padding: "32px",
                      width: "1488px",
                      height: "1157px",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                      color: "#1A1A1A",
                      fontFamily: "inherit",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "48px",
                        color: "#004993",
                        position: "absolute",
                        top: 965,
                        textTransform: "uppercase",
                      }}
                    >
                      {localStorage.getItem("heroName") || ""}
                    </div>

                    {/* <button
                      style={{
                        background: "#35A43C",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "12px 24px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowCongratulations(false)}
                    >
                      Zamknij
                    </button> */}
                  </ShowCongratulations>
                </>
              )}
            </Step1>

            <img
              src="/assets/partners.png"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 left-[320px] bottom-[55px] z-[100]"
            />
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
