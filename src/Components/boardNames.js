import React from 'react'

export function BoardNames ({ boardNames, onOpenBoard }) {
  return (
    boardNames.map(item => {
      return (
        <li key={item.id} className="list">
          <Board item={item} onOpenBoard={(id) => onOpenBoard(id)}/>
        </li>
      )
    })
  )
}

export function Board ({ item, onOpenBoard }) {
  return (
    <p className={item.isOpen ? "list-item clicked" : "list-item" } onClick={() => onOpenBoard(item.id)}>{item.name}</p>
  )
}
