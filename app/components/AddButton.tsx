'use client'

import { CalendarPlus } from "lucide-react";
import { useContext } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import { ExerciseType } from "../type/ExerciseType";

const AddButton = ({ exercise }: { exercise: ExerciseType }) => {
    const context = useContext(ExerciseContext);

    // Guard clause to handle null context gracefully
    if (!context) {
        throw new Error("AddButton must be used within an ExerciseProvider");
    }

    const { add, setAdd } = context;

    const handleAddButton = () => {
        console.log('add button triggered', exercise);
        setAdd([...add, exercise]);
        alert('You have added exercise');

    };

    return (
        <button 
            onClick={handleAddButton}
            type="button"
            className="inline-flex h-[60px] items-center justify-center gap-3 rounded-2xl bg-[#c6ff00] px-8 text-base font-semibold text-black transition hover:bg-[#b4e900]"
        >
            <CalendarPlus size={21} strokeWidth={2} />
            Add to today&apos;s plan
        </button>
    );
};

export default AddButton;