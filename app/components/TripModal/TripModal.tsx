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

const LOCAL_STORAGE_KEY = "tripStages";

const TripModal: FC<TripModalProps> = ({ isOpen, onClose }) => {
  const [stages, setStages] = useState<Stages>({
    stage1: "",
    stage2: "",
    stage3: "",
    stage4: "",
    stage5: "",
    stage6: "",
  });

  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
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

  const handleClear = () => {
    setStages({
      stage1: "",
      stage2: "",
      stage3: "",
      stage4: "",
      stage5: "",
      stage6: "",
    });
  };

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stages));

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
          className="absolute top-2 right-2 text-red-500 font-bold text-xl"
        >
          ✕
        </button>
        <div className="text-blue-900 text-center">
          <h2 className="text-lg font-bold text-center">
            PRZED TOBĄ 6 ETAPÓW WYCIECZKI!
          </h2>

          <p className="text-center mt-2">
            Zdecyduj ile kilometrów ma mieć Twoje poszczególne etapy
            <span className="text-red-600">*</span>. Pamiętaj, to tylko zabawa
            :)
            <br />
            <strong>Udanej podróży Mały Bohaterze!</strong>
          </p>

          <p className="text-xs text-center mt-2 text-red-600">
            *nie musisz definiować długości wszystkich etapów już teraz, możesz
            to zrobić w trakcie trwania wycieczki!
          </p>
        </div>

        <div className="mt-4 space-y-2">
          {[...Array(6)].map((_, index) => {
            const stageKey = `stage${index + 1}` as keyof Stages;
            return (
              <div key={index} className="flex items-center justify-center">
                <label className="w-24 text-green-700 font-semibold">
                  Etap {index + 1}
                </label>
                <input
                  type="text"
                  value={stages[stageKey]}
                  onChange={(e) => handleInputChange(e, stageKey)}
                  placeholder=""
                  className="w-[150px] p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-blue-700 font-bold"
                />
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleClear}
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Wyczyść
          </button>
          <button
            onClick={handleSave}
            className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
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
