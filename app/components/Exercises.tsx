import type { ExerciseType } from "../type/ExerciseType";
import ExerciseCard from "./ExerciseCard";

const getExercises = async (): Promise<ExerciseType[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
        throw new Error("Failed to fetch exercises");
    }

    return response.json();
};

const Exercises = async () => {
    const exercisesData = await getExercises();

    return (
        <>
            <div className="container mx-auto">
                <div className="text-white py-6  lg:py-20">
                    <h1 className="text-3xl lg:text-4xl font-bold">THE LIBRARY</h1>
                    <h1 className="text-[#9ca3afFF]">Twelve Lift covering every muscle group</h1>
                </div>

                <div className=" grid gap-6  lg:grid-cols-3">

                    {exercisesData.map((exercise) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Exercises;