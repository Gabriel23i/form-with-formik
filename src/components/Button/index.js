import React from "react"

export default function Button({ type, children }){
    return(
        <button
            className="p-2 w-full rounded-sm bg-slate-700 shadow-lg text-zinc-100"
            type={type}
        >
            { children }
        </button>
    )
}