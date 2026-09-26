'use client'

import { CalendarPlus } from "lucide-react";
import { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";
import type { ExerciseType } from "../type/ExerciseType";
import toast from 'react-hot-toast';

const AddButton = ({ exercise }: { exercise: ExerciseType }) => {
    const context = useContext(ExerciseContext);

    // Guard clause to handle null context gracefully
    if (!context) {
        throw new Error("AddButton must be used within an ExerciseProvider");
    }


    const {  setAdd, setPlanCount } = context;
    const [isSelected, setSelected] = useState(false)
    const handleAddButton = () => {
        setAdd((previous) => [...previous, exercise]);
        setPlanCount((previous) => previous + 1);
        toast.success("Successfully added in plan!");
        setSelected(true)
    };



    return (
        <button
            disabled={isSelected ? true : false}
            onClick={handleAddButton}
            type="button"
            className="inline-flex h-15 items-center justify-center gap-3 rounded-2xl bg-[#c6ff00] px-8 text-base font-semibold text-black transition hover:bg-[#b4e900]"
        >
            <CalendarPlus size={21} strokeWidth={2} />
            Add to today&apos;s plan
        </button>
    );
};

export default AddButton;