import React from 'react'

export default function Button(props) {
  return (
    <button
      {...props}
      className="transition-colors border hover:text-slate-700 hover:border-slate-700 hover:bg-slate-100 py-2 px-4 rounded-md text-white font-semibold disabled:opacity-50 bg-slate-700"
    ></button>
  )
}
