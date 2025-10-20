import clsx from "clsx";

interface HabitStatsProps {
    title: string;
    desc: string;
    frequency: string;
    gradient?: string;
}

export function HabitStats({ title, desc, frequency, gradient }: HabitStatsProps) {
    return (
        <div className="relative mt-13 pt-1">
            <div className="text-gray-400 absolute -top-10 left-22 w-[500px] flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-3 ml-2 rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                </svg>
                <p>Deliver BIG results in a year!</p>
            </div>
            <div className={clsx(
                "h-full stat p-4 rounded-2xl gap-3 text-white",
                gradient || "bg-gradient-to-r from-pink-500 to-yellow-500")}>
                <div className="flex items-end">
                    <span className="text-4xl font-bold leading-none">{title}</span>
                    <span className="text-sm ml-1 mb-[2px]">{desc}</span>
                </div>
                <div className="flex mt-2 text-sm">
                    <span className="stat-desc whitespace-normal opacity-100 text-gray-200">{frequency}</span>
                </div>
            </div>
        </div>
    );
}