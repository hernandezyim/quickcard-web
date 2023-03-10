import React from 'react'

export default function Card({ item, onDelete, onEdit, titles, values }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return `${day}/${month}/${year}`
  }
  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className="flex justify-between bg-slate-700 text-slate-100 italic tracking-wider font-medium py-2 px-4 rounded-t-lg">
        <div>
          <span className="italic">{formatDate(item.createdAt)}</span>
        </div>
        <div>
          <button
            onClick={onDelete}
            className=" mr-2 bg-slate-600  focus:outline-none focus:ring-opacity-50 rounded-lg py-2 px-4 border border-transparent text-white font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.5 4.5L19.5 19.5M19.5 4.5L4.5 19.5"
                className="bg-red-500"
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button
            onClick={onEdit}
            className="bg-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 rounded-lg py-2 px-4 border border-transparent text-white font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.293 4.293C15.902 3.902 15.368 3.695 14.793 3.719L14.586 3.723C14.209 3.777 13.873 3.962 13.622 4.247L9 9.414V12H11.586L16.293 4.293Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.147 5.853L18.147 8.853"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99805 13.5L8.49805 18H5.99805V15.5L9.99805 13.5Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.998 9.00104L15.998 10.001L19.498 6.50104L18.498 5.50104L14.998 9.00104Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {titles.map((v, index) => (
        <div key={index} className="flex justify-between py-2 px-4">
          <h1 className="text-gray-600 font-bold">{v}:</h1>
          <p className="h-auto text-end">{item[values[index]]}</p>
        </div>
      ))}
    </div>
  )
}
