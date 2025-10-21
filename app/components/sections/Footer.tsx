'use client'

export function Footer() {
    return (
        <footer className="mt-auto py-4 text-center text-gray-400">
            <div className="w-[900px] h-[0.5px] bg-gray-600 mx-auto mt-30"></div>
            <div className="mt-10">
                <div className="text-5xl">🔮</div>
                <div className="mt-5">
                    <span className="font-bold">Visualize Habit - An app by </span>
                    <a className="underline text-white" href="#">Timmy</a></div>
                    <p className="text-sm mt-2">Copyright © 2025 - All right reserved</p>
            </div>
            <div className="mt-5 text-sm">
                <a href="#">Home</a>
                <a className="ml-4" href="#">Habits Visualizer</a>
            </div>
        </footer>
    )
}