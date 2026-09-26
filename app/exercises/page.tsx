import type { ExerciseType } from "../type/ExerciseType";
import ExerciseCard from "../components/ExerciseCard";
import Link from "next/link";

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
            <div className="container mx-auto mb-20">
                <div className="text-white py-6  lg:py-20 px-10 lg:px-0 ">
                    <h1 className="text-3xl lg:text-4xl font-bold">THE LIBRARY</h1>
                    <h1 className="text-[#9ca3afFF]">Twelve Lift covering every muscle group</h1>
                </div>

                <div className="grid gap-6 grid-cols-1  lg:grid-cols-3">

                    {
                        exercisesData.map((exercise) => (
                            <Link key={exercise.id} href={`/exercises/${exercise.id}`}>
                                <ExerciseCard exercise={exercise} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Exercises;