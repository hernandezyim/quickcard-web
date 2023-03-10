import { useState, useEffect } from 'react'

export default function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState(1)

  useEffect(() => {
    const totalPages = Math.ceil(data.length / itemsPerPage)
    setPages(totalPages)
  }, [data, itemsPerPage])

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  const onNext = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, pages))
  }

  const onPrev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  const onJump = (page) => {
    const pageNumber = Math.max(1, page)
    setCurrentPage((currentPage) => Math.min(pageNumber, pages))
  }

  const pageArray = [...Array(pages).keys()].map((i) => i + 1)

  return {
    onNext,
    onPrev,
    onJump,
    currentData: currentData(),
    currentPage,
    pages: pageArray,
  }
}
