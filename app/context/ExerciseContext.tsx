'use client'
import { createContext, ReactNode, useState, type SetStateAction, Dispatch } from "react";
// context creation
import { ExerciseType } from "../type/ExerciseType";

type ExerciseContextType = {
  add: ExerciseType[];
  setAdd: Dispatch<SetStateAction<ExerciseType[]>>;
  saved: ExerciseType[];
  setSaved: Dispatch<SetStateAction<ExerciseType[]>>;
  planCount: number; // Updated from planCount
  setPlanCount: Dispatch<SetStateAction<number>>; // Added setter type
  savedCount: number; // Updated from planCount
  setSavedCount: Dispatch<SetStateAction<number>>; // Added setter type
};

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  // add button state - initialized as an empty array
  const [add, setAdd] = useState<ExerciseType[]>([]);
  // Saved button state - initialized as an empty array
  const [saved, setSaved] = useState<ExerciseType[]>([]);

  const [planCount, setPlanCount] = useState(0)
  const [savedCount, setSavedCount] = useState(0)

  const sharedData = {
    add, 
    setAdd, 
    saved, 
    setSaved,
    planCount,
    setPlanCount, 
    savedCount,
    setSavedCount,

  }

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;