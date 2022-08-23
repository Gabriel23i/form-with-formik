import React from "react"

export default function Input({ name, error="", type="text", value, label="", onChange }){
    return(
        <div>
            <label className="text-zinc-100 mb-1">
                {label}
                <input
                    className="w-full p-2 outline-none rounded-sm bg-transparent border-2 border-zinc-100 text-zinc-100"
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </label>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}
