import React from "react";
export function BoardNames({board}) {
return (
 board.map(check => {
  return (
    <Board check={check} />
  )
 })
)
}

export function Board({ check }) {
  return (
    <p>{check.name}</p>
  )
}