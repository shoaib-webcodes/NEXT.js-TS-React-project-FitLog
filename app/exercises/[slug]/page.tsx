
import AddButton from '@/app/components/AddButton';
import SavedButton from '@/app/components/SavedButton';
import { ExerciseType } from '@/app/type/ExerciseType';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type DetailsPageProp = {
    params: Promise<{
        slug: string;
    }>;
}

// Getting Exercises 
const getExercises = async (): Promise<ExerciseType[]> => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
        throw new Error("Failed to fetch exercises");
    }

    return response.json();
};

const exercisesData = await getExercises();

const ExercisePageDetails = async ({ params }: DetailsPageProp) => {
    const { slug } = await params;

    const exercise = exercisesData.find((exercise: ExerciseType) => 
        exercise.id === Number(slug)
    );



    // Handle the undefined case so TypeScript knows 'exercise' exists below
    if (!exercise) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    
                    {/* Left Column: Image Card */}
                    <div className="relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
                        <Image 
                            src={exercise.image} 
                            alt={exercise.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Column: Details & Specs */}
                    <div className="flex flex-col space-y-6">
                        
                        {/* Title & Description */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase mb-3">
                                {exercise.name}
                            </h1>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                {exercise.description}
                            </p>
                        </div>

                        {/* Muscle Group Badges */}
                        <div className="flex flex-wrap gap-2">
                            {exercise.muscleGroups.map((group, index) => (
                                <span 
                                    key={index} 
                                    className="bg-[#c5ff1d] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Specifications Box */}
                        <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-5 divide-y divide-neutral-800/60 text-sm">
                            <div className="flex justify-between py-3 first:pt-0">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Equipment</span>
                                <span className="font-medium text-neutral-200">{exercise.equipment}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Difficulty</span>
                                <span className="font-medium text-neutral-200">{exercise.difficulty}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Sets</span>
                                <span className="font-medium text-neutral-200">{exercise.sets}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Reps</span>
                                <span className="font-medium text-neutral-200">{exercise.reps}</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Duration</span>
                                <span className="font-medium text-neutral-200">{exercise.duration} min</span>
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Calories</span>
                                <span className="font-medium text-neutral-200">{exercise.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between py-3 last:pb-0">
                                <span className="text-neutral-500 uppercase tracking-wider text-xs font-semibold">Rating</span>
                                <span className="font-medium text-neutral-200">{exercise.rating}</span>
                            </div>
                        </div>

                        {/* Instructions Section */}
                        <div className="space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                                Instructions
                            </h3>
                            <ol className="space-y-2 text-sm text-neutral-300">
                                {exercise.instructions.map((step, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <span className="text-neutral-500 font-semibold">{index + 1}.</span>
                                        <span className="leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <AddButton exercise = {exercise} ></AddButton>
                            <SavedButton exercise = {exercise}></SavedButton>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExercisePageDetails;