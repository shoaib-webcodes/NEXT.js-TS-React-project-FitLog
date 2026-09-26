

'use client'
import { Bookmark } from 'lucide-react';
import { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { ExerciseType } from "../type/ExerciseType";
import toast from 'react-hot-toast';





const SavedButton = ({ exercise }: { exercise: ExerciseType }) => {
  const context = useContext(ExerciseContext);

  // Guard clause to handle null context gracefully
  if (!context) {
    throw new Error("AddButton must be used within an ExerciseProvider");
  }
  const { setSavedCount, setSaved } = context;
  const [isSelected, setSelected] = useState(false)

  const handleSavedButton = () => {
    setSaved((previous) => [...previous, exercise]);
    setSavedCount((previous) => previous + 1);
    toast.success("Exercise saved!");
    setSelected(true)
  };


  return (
    <button
      disabled={isSelected ? true : false}
      type="button"
      onClick={handleSavedButton}
      className="inline-flex h-15 items-center justify-center gap-3 rounded-2xl border border-[#39404d] bg-transparent px-8 text-base font-medium text-[#e5e7eb] transition hover:bg-white/5"
    >
      <Bookmark size={21} strokeWidth={2} />
      Save for later
    </button>
  );
};

export default SavedButton;