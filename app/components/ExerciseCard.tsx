import { Clock3, Flame, Star } from "lucide-react";
import type { ExerciseType } from "../type/ExerciseType";
import Image from "next/image";

type ExerciseCardProp = {
  exercise: ExerciseType;
};

const ExerciseCard = ({ exercise }: ExerciseCardProp) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  const validImageSrc =
    typeof image === "string" && image.trim() !== ""
      ? image
      : "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=740";

  return (
    <article className="group overflow-hidden rounded-3xl border border-[#30343b] bg-[#1b1d22] text-white transition-all duration-300 hover:border-lime-400/50 hover:shadow-2xl hover:shadow-lime-500/10">
      {/* Image Container with Zoom effect */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={validImageSrc}
          alt={name || "Exercise image"}
          fill
          className=" transition-transform duration-500 group-hover:scale-105"
          unoptimized={true}
        />
        {/* Subtle gradient overlay to make image look sleek */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d22] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-7">
        {/* Muscle Groups Badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-300 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#181a1e] transition-colors hover:bg-lime-400"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h3 className="text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-lime-300">
          {name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm font-medium text-gray-400">{equipment}</p>

        {/* Stats Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between border-t border-[#30343b] pt-4 text-sm text-gray-300">
          <span className="flex items-center gap-2">
            <Clock3 size={17} className="text-lime-400" />
            <span className="font-semibold">{duration}</span> min
          </span>

          <span className="flex items-center gap-2">
            <Flame size={17} className="text-orange-500" fill="currentColor" />
            <span className="font-semibold">{caloriesBurned}</span> kcal
          </span>

          <span className="flex items-center gap-2">
            <Star size={17} className="text-yellow-400" fill="currentColor" />
            <span className="font-semibold">{rating}</span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ExerciseCard;