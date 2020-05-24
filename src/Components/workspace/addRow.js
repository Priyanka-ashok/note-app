import React, {useState} from 'react'

function AddRow() {
  const [row, updateRow] = useState([]);
  const handleAddRow = () => {
    updateRow([...row, {}]);
  }
  return (
    <div>
      {
        row.map(item=> {
          return (
            <div>
              <input type="text"/>
              </div>
          )
        })
      }
    <button className="addButton" onClick={handleAddRow}>+ADD PRODUCT</button>
    </div>
  )
}

export default AddRow
