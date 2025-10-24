'use client'


export function Form() {
    return (
        <div className=" flex justify-center">
            <div className="bg-base-100 rounded-2xl p-9">
                <div>
                    <label className="text-gray-400 text-sm font-semibold pl-2">How long?</label>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                    <input className="input p-3 pr-5 rounded-2xl input-bordered w-full placeholder:opacity-50 appearance-none" placeholder="5" type="number" />
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
                <div className="mt-6 flex justify-center gap-5 space-x-4">
                    <button className="cursor-pointer">Cancel</button>
                    <button className="cursor-pointer bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 inline-flex items-center gap-2">Add Habbit</button>
                </div>
            </div>
        </div>
    )
}