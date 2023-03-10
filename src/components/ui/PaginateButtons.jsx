import React from 'react'
import Button from './Button'

export default function PaginateButtons({
  onNext,
  onPrev,
  onJump,
  currentPage,
  pages,
}) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <Button
        className={`${
          currentPage === 1
            ? 'bg-gray-300 text-gray-600'
            : 'bg-gray-600 text-white'
        } px-3 py-2 rounded-md font-medium focus:outline-none`}
        onClick={() => onPrev()}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      {pages.length > 0 &&
        pages.map((page, index) => {
          return (
            <div key={index} className="hidden md:block">
              <Button
                className={`${
                  currentPage === page
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                } px-3 py-2 rounded-md font-medium focus:outline-none `}
                onClick={() => onJump(page)}
              >
                {page}
              </Button>
            </div>
          )
        })}
      <Button
        className={`${
          currentPage === pages.length
            ? 'bg-gray-300 text-gray-600'
            : 'bg-gray-600 text-white'
        } px-3 py-2 rounded-md font-medium focus:outline-none`}
        onClick={() => onNext()}
        disabled={currentPage === pages.length}
      >
        Siguiente
      </Button>
    </div>
  )
}
