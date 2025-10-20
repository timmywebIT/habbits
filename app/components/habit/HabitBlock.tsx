interface HabitBlockProps {
    title: string;
    desc: string;
    frequency: string;
    icon: string;
}

export function HabitBlock({title, desc, frequency, icon}: HabitBlockProps) {
    return (
        <div className="bg-black/20 w-sm p-5 rounded-2xl">
        <div className="flex">
          <span>{icon}</span>
          <p className="text-gray-400 ml-2 text-xl font-bold">{title}</p>
        </div>
        <div className="flex mt-2 text-gray-400 text-sm">
          <div className="font-semibold mr-0.5 bg-black/30 rounded-2xl px-3 py-1">
            <p>{desc}</p>
          </div>
          <div className="font-semibold mr-0.5 bg-black/20 ml-2 rounded-2xl px-3 py-1">
            <p>{frequency}</p>
          </div>
        </div>
      </div>
    );
}