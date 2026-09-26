'use client'
import { createContext, ReactNode, useState, type SetStateAction, Dispatch } from "react";
// context creation
import { ExerciseType } from "../type/ExerciseType";

type ExerciseContextType = {
  add: ExerciseType[];
  setAdd: Dispatch<SetStateAction<ExerciseType[]>>;
  saved: ExerciseType[];
  setSaved: Dispatch<SetStateAction<ExerciseType[]>>;
};

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  // add button state - initialized as an empty array
  const [add, setAdd] = useState<ExerciseType[]>([]);
  // Saved button state - initialized as an empty array
  const [saved, setSaved] = useState<ExerciseType[]>([]);

  return (
    <ExerciseContext.Provider value={{ add, setAdd, saved, setSaved }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;