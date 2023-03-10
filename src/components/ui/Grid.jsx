import React from 'react'

export default function Grid({ items, children }) {
  const ChildComponent = children

  return (
    <div className="">
      {items.map((item, index) => (
        <ChildComponent key={index} item={item} />
      ))}
    </div>
  )
}
