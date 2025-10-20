import { useState } from "react";
import { habits, habitsStats } from "@/app/components/data/habits";

export function useHabit() {
    const [index, setIndex] = useState(0);

    function shuffle() {
        setIndex((prev) => (prev + 1) % habits.length);
    }

    const habit = habits[index];
    const stats = habitsStats[index % habitsStats.length];

    return { habit, stats, shuffle }

}
