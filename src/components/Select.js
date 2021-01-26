import React from 'react'

export const Select = ({ state, setState, options }) => {

  return (
    <div className="dropdown">
      <select
        onChange={e => setState(e.target.value)}
        value={state}
        required
      >
        
        {Object.keys((options)).map((key) => (
          <option key={options[key]} value={options[key]}> 
            {key}
          </option>
        ))} 

      </select>
    </div>
  )
}