import React, { useEffect, useState } from "react";
import type { FC } from "react";
import type { ChangeEvent } from "react";

type Stages = {
  stage1: string;
  stage2: string;
  stage3: string;
  stage4: string;
  stage5: string;
  stage6: string;
};

type TripModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TripModal: FC<TripModalProps> = ({ isOpen, onClose }) => {
  const [stages, setStages] = useState<Stages>({
    stage1: "",
    stage2: "",
    stage3: "",
    stage4: "",
    stage5: "",
    stage6: "",
  });
  const [heroName, setHeroName] = useState<string>("");
  const [tripUnit, setTripUnit] = useState<string>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("tripUnit") || "km";
    }
    return "km";
  });

  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.localStorage) {
      const saved = localStorage.getItem("tripStages");
      const heroName = localStorage.getItem("heroName");

      if (heroName) {
        setHeroName(heroName);
      }

      if (saved) {
        setStages(JSON.parse(saved));
      }
    }
  }, [isOpen]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    stage: keyof Stages
  ) => {
    setStages({ ...stages, [stage]: e.target.value });
  };

  const handleNameChange = (name: string) => {
    setHeroName(name);
  };

  const handleClear = () => {
    setStages({
      stage1: "",
      stage2: "",
      stage3: "",
      stage4: "",
      stage5: "",
      stage6: "",
    });

    setHeroName("");

    localStorage.removeItem("tripStages");
    localStorage.removeItem("heroName");
  };

  const handleSave = () => {
    localStorage.setItem("tripStages", JSON.stringify(stages));
    localStorage.setItem("heroName", heroName);

    console.log("Saved stages:", stages);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-500"
      onClick={onClose}
    >
      <div
        className="bg-orange-200 rounded-lg p-6 w-120 relative tripModal border-1 border-gray-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>
        <div className="text-blue-900 text-center text-[20px] font-bold">
          <p className="text-center mt-2 font-bold">
            Przed Tobą 6 etapów wycieczki!
            <br />
            Zdecyduj ile trwać mają Twoje poszczególne etapy
            <span className="text-red-600">*</span>. Pamiętaj, to tylko zabawa
            :)
            <br />
            <b>Udanej podróży Mały Bohaterze!</b>
          </p>

          <p className="text-xs text-center mt-2 text-red-600 text-[14px] font-bold">
            *nie musisz definiować długości wszystkich etapów już teraz, możesz
            to zrobić w trakcie trwania wycieczki! 
            Długość poszczególnych etapów możesz zmieniać w każdym momencie wycieczki. Przed uruchomieniem mapy, konieczne jest zdefiniowanie 1 etapu.
          </p>
        </div>

        <div className="flex justify-center items-center mt-4 space-x-4">
          {["km", "kroki", "minuty"].map((unit) =>{ 
            if (unit === "minuty") {
              unit = "min."
            }
            
            return (
            <button
              key={unit}
              onClick={() => { localStorage.setItem("tripUnit", unit); setTripUnit(unit) } }
              className={`px-4 py-2 rounded-lg font-bold border cursor-pointer ${
              localStorage.getItem("tripUnit") === unit
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700"
              }`}
              type="button"
            >
              {unit}
            </button>
          )})}
        </div>

        <div className="mt-4 space-y-2">
          {[...Array(6)].map((_, index) => {
            const stageKey = `stage${index + 1}` as keyof Stages;
            return (
              <div key={index} className="flex items-center justify-center">
                <label className="w-24 text-green-700 font-semibold font-bold">
                  Etap {index + 1}
                </label>
                <input
                  type="text"
                  value={stages[stageKey]}
                  onChange={(e) => handleInputChange(e, stageKey)}
                  placeholder=""
                  className="w-[150px] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-blue-700 font-bold"
                />
                <span className="text-blue-700">&nbsp;{localStorage.getItem("tripUnit") || "km"}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center text-blue-700">
          <input
            className="w-[300px] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-blue-700 font-bold"
            placeholder="Wpisz imię Bohatera..."
            onChange={(e) => handleNameChange(e.target.value)}
            type="text"
            value={heroName}
          />
        </div>

        <div className="mt-6 flex justify-around">
          <button
            onClick={handleClear}
            className="bg-white text-blue-700 text-[16px] px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer font-bold"
          >
            Wyczyść
          </button>
          <button
            onClick={handleSave}
            className="bg-white text-blue-700 text-[16px] px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer font-bold"
          >
            Zapisz
          </button>
          <style>{`
      .tripModal {
        background-color: #ffaa10;

        input[type="text"] {
        background-color: #fff;
        }
      }
        `}</style>
        </div>
      </div>
    </div>
  );
};

export default TripModal;
