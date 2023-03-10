import React from 'react'
import { useDispatch } from 'react-redux'

export default function Table({
  titles,
  valuesTitles,
  items,
  onDelete,
  onUpdate,
}) {
  const dispatch = useDispatch()

  return (
    <div className="hidden md:flex flex-col m-6 bg-slate-100">
      <div className="-my-2">
        <div className="py-2 align-middle inline-block w-full ">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-slate-700">
                <tr>
                  {titles.map((title) => (
                    <th
                      key={title}
                      scope="col"
                      className="w-20 px-6 py-3 text-left text-xs font-medium  text-slate-100 uppercase tracking-wider italic"
                    >
                      {title}
                    </th>
                  ))}
                  <th
                    scope="col"
                    className="w-20 px-6 py-3 text-left text-xs font-medium text-slate-100  uppercase tracking-wider italic"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr key={index}>
                    {valuesTitles.map((valueName, valueIndex) => (
                      <td
                        key={`${index}-${valueIndex}`}
                        className=" px-6 py-4 whitespace-nowrap"
                      >
                        <div className="w-40 text-sm text-gray-900">
                          {item[valueName]}
                        </div>
                      </td>
                    ))}
                    <td className="w-20 px-6 py-4 whitespace-nowrap justify-center text-sm font-medium ">
                      <button
                        className="text-red-600 hover:text-red-800 mr-2"
                        onClick={() => dispatch(onDelete(item._id))}
                      >
                        Eliminar
                      </button>
                      <button
                        className="text-orange-600 hover:text-orange-800"
                        onClick={() => onUpdate(item)}
                      >
                        Actualizar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
