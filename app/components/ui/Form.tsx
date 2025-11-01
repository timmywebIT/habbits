'use client'

import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

interface FormProps {
    title: string
    icon: string
    onAdd: () => void
    onCancel: () => void
}

interface FormPropsMain {
    onAdd: () => void
    onCancel: () => void
}

export function Form({ icon, title, onAdd, onCancel }: FormProps) {
    return (
        <div className=" flex justify-center">
            <div className="bg-base-100 rounded-2xl p-15">
                <div className="absolute left-0 top-0 p-4">
                    <span className="">{icon}</span>
                    <span className="ml-2 font-bold text-lg">{title}</span>
                </div>
                <div>
                    <label className="text-gray-400 text-sm font-semibold pl-2">How long?</label>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                    <input className="input w-full p-3 pr-5 rounded-2xl input-bordered  placeholder:opacity-50 appearance-none" placeholder="5" type="number" />
                    <div>
                        <span className="text-gray-400">minutes</span>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-gray-400 text-sm font-semibold pl-2">How often?</label>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                    <select className="select select-bordered p-3 rounded-2xl w-full">
                        <option value="1x per weak">1x per weak</option>
                        <option value="2x per weak">2x per weak</option>
                        <option value="3x per weak">3x per weak</option>
                        <option value="Every day">Every day</option>
                    </select>
                </div>
                <div className="mt-8 flex justify-center gap-5 space-x-4">
                    <button onClick={onCancel} className="cursor-pointer">Cancel</button>
                    <button onClick={onAdd} className="cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">Add Habbit</button>
                </div>
            </div>
        </div>
    )
}

export function FormMain({ onAdd, onCancel }: FormPropsMain) {

    const [emoji, setEmoji] = useState("⭐");
    const [open, setOpen] = useState(false);

    return (

        <div className=" flex justify-center">


            <div className="bg-base-100 rounded-2xl p-15 relative">
                <div className="absolute left-0 top-0 p-4">
                    <div className="flex items-center space-x-3 ">
                        <button onClick={() => setOpen(!open)} className="text-2xl border rounded-lg px-3 py-2">
                            {emoji}
                        </button>
                        <h2 className="font-bold">Create Habit</h2>
                    </div>
                    {open && (
                        <div className="absolute z-50">
                            <EmojiPicker
                                onEmojiClick={(e) => {
                                    setEmoji(e.emoji);
                                    setOpen(false);
                                }}
                            />
                        </div>
                    )}
                </div>

                <div className="mt-5">
                    <label className="text-gray-400 text-sm font-semibold pl-2">Create Habit</label>
                    <input className="input w-full p-3 pr-5 rounded-2xl input-bordered  placeholder:opacity-50 appearance-none mb-3 mt-2" placeholder="Swim" />
                </div>

                <div>
                    <label className="text-gray-400 text-sm font-semibold pl-2">How long?</label>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                    <input className="input w-full p-3 pr-5 rounded-2xl input-bordered  placeholder:opacity-50 appearance-none" placeholder="5" type="number" />
                    <div>
                        <span className="text-gray-400">minutes</span>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-gray-400 text-sm font-semibold pl-2">How often?</label>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                    <select className="select select-bordered p-3 rounded-2xl w-full">
                        <option value="1x per weak">1x per weak</option>
                        <option value="2x per weak">2x per weak</option>
                        <option value="3x per weak">3x per weak</option>
                        <option value="Every day">Every day</option>
                    </select>
                </div>
                <div className="mt-8 flex justify-center gap-5 space-x-4">
                    <button onClick={onCancel} className="cursor-pointer">Cancel</button>
                    <button onClick={onAdd} className="cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">Add Habbit</button>
                </div>
            </div>
        </div>
    )
}